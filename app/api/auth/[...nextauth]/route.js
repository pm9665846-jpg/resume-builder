import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { query } from '@/lib/db'

const SESSION_MAX_AGE = 7 * 24 * 60 * 60 // 7 days

// Build providers array — only add Google if credentials are configured
const providers = []

// Google OAuth — only enabled when real credentials are set
const googleClientId = process.env.GOOGLE_CLIENT_ID
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET
const googleEnabled =
  googleClientId &&
  googleClientSecret &&
  !googleClientId.includes('your-google') &&
  !googleClientSecret.includes('your-google')

if (googleEnabled) {
  providers.push(
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    })
  )
}

// Email/Password credentials
providers.push(
  CredentialsProvider({
    name: 'credentials',
    credentials: {
      email: { label: 'Email', type: 'email' },
      password: { label: 'Password', type: 'password' },
    },
    async authorize(credentials) {
      if (!credentials?.email || !credentials?.password) return null
      try {
        const users = await query('SELECT * FROM users WHERE email = ?', [credentials.email.toLowerCase()])
        if (!users.length) return null
        const user = users[0]
        if (!user.password) return null // Google-only account
        const valid = await bcrypt.compare(credentials.password, user.password)
        if (!valid) return null
        return {
          id: String(user.id),
          name: user.name,
          email: user.email,
          image: user.avatar || null,
        }
      } catch (err) {
        console.error('Auth error:', err.message)
        return null
      }
    },
  })
)

export const authOptions = {
  providers,

  session: {
    strategy: 'jwt',
    maxAge: SESSION_MAX_AGE,
    updateAge: 24 * 60 * 60,
  },

  jwt: {
    maxAge: SESSION_MAX_AGE,
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        try {
          const existing = await query('SELECT id FROM users WHERE email = ?', [user.email.toLowerCase()])
          if (existing.length === 0) {
            await query(
              'INSERT INTO users (name, email, password, avatar, provider, role, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())',
              [user.name, user.email.toLowerCase(), '', user.image || '', 'google', 'user']
            )
          } else if (user.image) {
            await query('UPDATE users SET avatar = ? WHERE email = ?', [user.image, user.email.toLowerCase()])
          }
        } catch (err) {
          console.error('Google signIn DB error:', err.message)
        }
      }
      return true
    },

    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id
        token.provider = account?.provider || 'credentials'
      }
      if (account?.provider === 'google' && !token.id) {
        try {
          const rows = await query('SELECT id FROM users WHERE email = ?', [token.email?.toLowerCase()])
          if (rows.length) token.id = String(rows[0].id)
        } catch {}
      }
      return token
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.provider = token.provider
      }
      return session
    },
  },

  pages: {
    signIn: '/login',
    error: '/login',
  },

  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
