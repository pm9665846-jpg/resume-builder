import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { query } from '@/lib/db'
import { getAdminSession } from '@/lib/adminSession'

export async function POST(req) {
  try {
    const admin = await getAdminSession()
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { currentPassword, newPassword } = await req.json()

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }
    if (newPassword.length < 6) {
      return NextResponse.json({ error: 'New password must be at least 6 characters' }, { status: 400 })
    }

    // Get current password hash from DB
    const rows = await query('SELECT password FROM users WHERE id = ? AND role = ?', [admin.id, 'admin'])
    if (!rows.length) return NextResponse.json({ error: 'Admin not found' }, { status: 404 })

    const valid = await bcrypt.compare(currentPassword, rows[0].password)
    if (!valid) return NextResponse.json({ error: 'Current password is incorrect' }, { status: 401 })

    const hash = await bcrypt.hash(newPassword, 12)
    await query('UPDATE users SET password = ? WHERE id = ?', [hash, admin.id])

    return NextResponse.json({ success: true, message: 'Password changed successfully' })
  } catch (err) {
    console.error('[POST /api/admin/change-password]', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
