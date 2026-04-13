import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getAdminSession } from '@/lib/adminSession'

export async function GET() {
  try {
    const admin = await getAdminSession()
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const ads = await query('SELECT * FROM advertisements ORDER BY created_at DESC')
    return NextResponse.json({ success: true, ads })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const admin = await getAdminSession()
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { title, description, image_url, link_url, link_text, position, bg_color, text_color, accent_color } = await req.json()
    if (!title || !position) return NextResponse.json({ error: 'Title and position required' }, { status: 400 })

    const result = await query(
      `INSERT INTO advertisements (title, description, image_url, link_url, link_text, position, bg_color, text_color, accent_color)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, description || '', image_url || '', link_url || '', link_text || 'Learn More', position, bg_color || '#1e1b4b', text_color || '#ffffff', accent_color || '#8b5cf6']
    )
    return NextResponse.json({ success: true, id: result.insertId })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function PUT(req) {
  try {
    const admin = await getAdminSession()
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id, title, description, image_url, link_url, link_text, position, bg_color, text_color, accent_color, is_active } = await req.json()
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 })

    await query(
      `UPDATE advertisements SET title=?, description=?, image_url=?, link_url=?, link_text=?, position=?, bg_color=?, text_color=?, accent_color=?, is_active=? WHERE id=?`,
      [title, description || '', image_url || '', link_url || '', link_text || 'Learn More', position, bg_color || '#1e1b4b', text_color || '#ffffff', accent_color || '#8b5cf6', is_active ? 1 : 0, id]
    )
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
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 })
    await query('DELETE FROM advertisements WHERE id = ?', [id])
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
