import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    return NextResponse.next()
  },
  {
    pages: {
      signIn: '/login',
    },
    callbacks: {
      authorized: ({ req, token }) => {
        // Allow /dashboard/ai-suggestions without auth
        if (req.nextUrl.pathname.startsWith('/dashboard/ai-suggestions')) {
          return true
        }
        return !!token
      },
    },
  }
)

export const config = {
  matcher: ['/dashboard/:path*'],
}
