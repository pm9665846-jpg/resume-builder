import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { sendPasswordResetOTP } from '@/lib/mailer'

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export async function POST(req) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    const normalizedEmail = email.toLowerCase().trim()

    // Check if user exists
    const users = await query('SELECT id, name FROM users WHERE email = ?', [normalizedEmail])

    if (users.length === 0) {
      // Don't reveal if email exists — but still return success
      return NextResponse.json({ success: true })
    }

    const user = users[0]
    const otp = generateOTP()
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000) // 15 minutes

    // Invalidate old tokens
    await query('UPDATE password_reset_tokens SET used = TRUE WHERE email = ?', [normalizedEmail])

    // Store new token
    await query(
      'INSERT INTO password_reset_tokens (email, token, expires_at) VALUES (?, ?, ?)',
      [normalizedEmail, otp, expiresAt]
    )

    // Send OTP email
    await sendPasswordResetOTP(normalizedEmail, otp, user.name)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Forgot password error:', err.message)
    return NextResponse.json(
      { error: 'Failed to send OTP. Please check your email and try again.' },
      { status: 500 }
    )
  }
}
