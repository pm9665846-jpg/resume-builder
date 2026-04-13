import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getAdminSession } from '@/lib/adminSession'

export async function GET(req) {
  try {
    const admin = await getAdminSession()
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = 20
    const offset = (page - 1) * limit

    const [resumes, total] = await Promise.all([
      query(`
        SELECT r.id, r.title, r.template, r.theme_color, r.is_draft, r.created_at, r.updated_at,
               u.id as user_id, u.name as user_name, u.email as user_email
        FROM resumes r
        JOIN users u ON r.user_id = u.id
        ORDER BY r.created_at DESC
        LIMIT ? OFFSET ?
      `, [limit, offset]),
      query('SELECT COUNT(*) as count FROM resumes'),
    ])

    return NextResponse.json({ success: true, resumes, total: total[0].count, page, limit })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function DELETE(req) {
  try {
    const admin = await getAdminSession()
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await req.json()
    if (!id) return NextResponse.json({ error: 'Resume id required' }, { status: 400 })

    await query('DELETE FROM resumes WHERE id = ?', [id])
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
