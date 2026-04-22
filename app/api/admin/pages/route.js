import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getAdminSession } from '@/lib/adminSession'

// GET /api/admin/pages — list all pages
export async function GET(req) {
  try {
    const admin = await getAdminSession()
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const rows = await query('SELECT * FROM pages ORDER BY slug')
    return NextResponse.json({ success: true, pages: rows })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// PUT /api/admin/pages — update a page
export async function PUT(req) {
  try {
    const admin = await getAdminSession()
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const { slug, title, content } = await req.json()
    if (!slug || !title || !content) return NextResponse.json({ error: 'slug, title, content required' }, { status: 400 })

    const existing = await query('SELECT id FROM pages WHERE slug = ?', [slug])
    if (existing.length) {
      await query('UPDATE pages SET title = ?, content = ? WHERE slug = ?', [title, content, slug])
    } else {
      await query('INSERT INTO pages (slug, title, content) VALUES (?, ?, ?)', [slug, title, content])
    }
    return NextResponse.json({ success: true, message: 'Page updated' })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
