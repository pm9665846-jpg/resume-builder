import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

// GET /api/pages/:slug — public
export async function GET(req, context) {
  try {
    const { slug } = await context.params
    const rows = await query('SELECT * FROM pages WHERE slug = ?', [slug])
    if (!rows.length) return NextResponse.json({ error: 'Page not found' }, { status: 404 })
    return NextResponse.json({ success: true, page: rows[0] })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
