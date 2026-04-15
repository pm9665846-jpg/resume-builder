import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getSessionUserId } from '@/lib/session'
import bcrypt from 'bcryptjs'

// ── PUT /api/profile/password ──
// Body: { currentPassword, newPassword }
export async function PUT(req) {
  try {
    const userId = await getSessionUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { currentPassword, newPassword } = await req.json()

    if (!currentPassword || !newPassword)
      return NextResponse.json({ error: 'Both fields are required' }, { status: 400 })

    if (newPassword.length < 6)
      return NextResponse.json({ error: 'New password must be at least 6 characters' }, { status: 400 })

    const rows = await query('SELECT password FROM users WHERE id = ?', [userId])
    if (!rows.length) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    const user = rows[0]

    // If no password set (social login), block change
    if (!user.password)
      return NextResponse.json({ error: 'Password change not available for social login accounts' }, { status: 400 })

    const isMatch = await bcrypt.compare(currentPassword, user.password)
    if (!isMatch) return NextResponse.json({ error: 'Current password is incorrect' }, { status: 400 })

    const hashed = await bcrypt.hash(newPassword, 12)
    await query('UPDATE users SET password = ?, updated_at = NOW() WHERE id = ?', [hashed, userId])

    return NextResponse.json({ success: true, message: 'Password updated successfully' })
  } catch (err) {
    console.error('[PUT /api/profile/password]', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
