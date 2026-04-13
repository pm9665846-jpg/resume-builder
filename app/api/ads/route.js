import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

// Public endpoint — returns active ads by position
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const position = searchParams.get('position')

    const sql = position
      ? 'SELECT * FROM advertisements WHERE is_active = 1 AND position = ? ORDER BY RAND() LIMIT 1'
      : 'SELECT * FROM advertisements WHERE is_active = 1 ORDER BY position, RAND()'

    const ads = await query(sql, position ? [position] : [])
    return NextResponse.json({ success: true, ads })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// Track click
export async function POST(req) {
  try {
    const { id, type } = await req.json()
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 })
    const col = type === 'impression' ? 'impressions' : 'clicks'
    await query(`UPDATE advertisements SET ${col} = ${col} + 1 WHERE id = ?`, [id])
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
