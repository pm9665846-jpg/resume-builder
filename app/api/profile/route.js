import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getSessionUserId } from '@/lib/session'
import bcrypt from 'bcryptjs'

// ── GET /api/profile ──
export async function GET() {
  try {
    const userId = await getSessionUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const rows = await query(
      'SELECT id, name, email, avatar, created_at FROM users WHERE id = ?',
      [userId]
    )
    if (!rows.length) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    return NextResponse.json({ success: true, user: rows[0] })
  } catch (err) {
    console.error('[GET /api/profile]', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// ── PUT /api/profile ──
// Body: { name?, bio?, avatar? }
export async function PUT(req) {
  try {
    const userId = await getSessionUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await req.json()
    const { name, avatar } = body

    const fields = []
    const values = []

    if (name !== undefined) { fields.push('name = ?'); values.push(name.trim()) }
    if (avatar !== undefined) { fields.push('avatar = ?'); values.push(avatar) }

    if (!fields.length) return NextResponse.json({ error: 'Nothing to update' }, { status: 400 })

    values.push(userId)
    await query(`UPDATE users SET ${fields.join(', ')}, updated_at = NOW() WHERE id = ?`, values)

    const rows = await query(
      'SELECT id, name, email, avatar, created_at FROM users WHERE id = ?',
      [userId]
    )

    return NextResponse.json({ success: true, user: rows[0] })
  } catch (err) {
    console.error('[PUT /api/profile]', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
