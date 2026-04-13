import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getAdminSession } from '@/lib/adminSession'

export async function GET() {
  try {
    const admin = await getAdminSession()
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const users = await query(`
      SELECT u.id, u.name, u.email, u.role, u.avatar, u.created_at,
             COUNT(r.id) as resume_count
      FROM users u
      LEFT JOIN resumes r ON r.user_id = u.id
      WHERE u.role = 'user'
      GROUP BY u.id
      ORDER BY u.created_at DESC
    `)

    return NextResponse.json({ success: true, users })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function PATCH(req) {
  try {
    const admin = await getAdminSession()
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id, role } = await req.json()
    if (!id || !['user', 'admin'].includes(role)) {
      return NextResponse.json({ error: 'Invalid params' }, { status: 400 })
    }

    await query('UPDATE users SET role = ? WHERE id = ?', [role, id])
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function DELETE(req) {
  try {
    const admin = await getAdminSession()
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await req.json()
    if (!id) return NextResponse.json({ error: 'User id required' }, { status: 400 })
    if (String(id) === String(admin.id)) {
      return NextResponse.json({ error: 'Cannot delete yourself' }, { status: 400 })
    }

    await query('DELETE FROM users WHERE id = ?', [id])
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
