import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getAdminSession } from '@/lib/adminSession'

// GET /api/admin/features
export async function GET() {
  try {
    const admin = await getAdminSession()
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const rows = await query('SELECT * FROM features ORDER BY sort_order ASC')
    return NextResponse.json({ success: true, features: rows })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// POST /api/admin/features — create
export async function POST(req) {
  try {
    const admin = await getAdminSession()
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const { icon, title, description, color, sort_order } = await req.json()
    if (!title || !description) return NextResponse.json({ error: 'title and description required' }, { status: 400 })
    const result = await query(
      'INSERT INTO features (icon, title, description, color, sort_order) VALUES (?, ?, ?, ?, ?)',
      [icon || 'Zap', title, description, color || '#8b5cf6', sort_order || 0]
    )
    return NextResponse.json({ success: true, id: result.insertId })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// PUT /api/admin/features — update
export async function PUT(req) {
  try {
    const admin = await getAdminSession()
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const { id, icon, title, description, color, sort_order, is_active } = await req.json()
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 })
    await query(
      'UPDATE features SET icon=?, title=?, description=?, color=?, sort_order=?, is_active=? WHERE id=?',
      [icon || 'Zap', title, description, color || '#8b5cf6', sort_order || 0, is_active ? 1 : 0, id]
    )
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// DELETE /api/admin/features
export async function DELETE(req) {
  try {
    const admin = await getAdminSession()
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const { id } = await req.json()
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 })
    await query('DELETE FROM features WHERE id = ?', [id])
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
