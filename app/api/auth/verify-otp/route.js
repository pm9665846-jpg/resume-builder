import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

export async function POST(req) {
  try {
    const { email, otp } = await req.json()

    if (!email || !otp) {
      return NextResponse.json({ error: 'Email and OTP are required' }, { status: 400 })
    }

    const tokens = await query(
      'SELECT * FROM password_reset_tokens WHERE email = ? AND token = ? AND used = FALSE AND expires_at > NOW() ORDER BY created_at DESC LIMIT 1',
      [email.toLowerCase(), otp.trim()]
    )

    if (tokens.length === 0) {
      return NextResponse.json({ error: 'Invalid or expired OTP. Please request a new one.' }, { status: 400 })
    }

    return NextResponse.json({ success: true, message: 'OTP verified.' })
  } catch (err) {
    console.error('Verify OTP error:', err)
    return NextResponse.json({ error: 'Verification failed. Please try again.' }, { status: 500 })
  }
}
