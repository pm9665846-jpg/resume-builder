import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { query } from '@/lib/db'

export async function POST(req) {
  try {
    const { email, otp, password } = await req.json()

    if (!email || !otp || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 400 })
    }

    // Verify OTP one final time
    const tokens = await query(
      'SELECT * FROM password_reset_tokens WHERE email = ? AND token = ? AND used = FALSE AND expires_at > NOW() ORDER BY created_at DESC LIMIT 1',
      [email.toLowerCase(), otp.trim()]
    )

    if (tokens.length === 0) {
      return NextResponse.json({ error: 'Invalid or expired OTP.' }, { status: 400 })
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Update user password
    const result = await query(
      'UPDATE users SET password = ?, updated_at = NOW() WHERE email = ?',
      [hashedPassword, email.toLowerCase()]
    )

    if (result.affectedRows === 0) {
      return NextResponse.json({ error: 'User not found.' }, { status: 404 })
    }

    // Mark token as used
    await query(
      'UPDATE password_reset_tokens SET used = TRUE WHERE email = ? AND token = ?',
      [email.toLowerCase(), otp.trim()]
    )

    return NextResponse.json({ success: true, message: 'Password reset successfully.' })
  } catch (err) {
    console.error('Reset password error:', err)
    return NextResponse.json({ error: 'Failed to reset password. Please try again.' }, { status: 500 })
  }
}
