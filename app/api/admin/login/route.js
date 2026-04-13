import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { query } from '@/lib/db'
import { cookies } from 'next/headers'

export async function POST(req) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    const users = await query('SELECT * FROM users WHERE email = ? AND role = ?', [email.toLowerCase().trim(), 'admin'])
    if (users.length === 0) {
      return NextResponse.json({ error: 'Invalid credentials or not an admin' }, { status: 401 })
    }

    const user = users[0]
    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      return NextResponse.json({ error: 'Invalid credentials or not an admin' }, { status: 401 })
    }

    const cookieStore = await cookies()
    cookieStore.set('admin_session', JSON.stringify({ id: user.id, name: user.name, email: user.email, role: 'admin' }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 8, // 8 hours
      path: '/',
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Admin login error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
