import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

// GET /api/features — public
export async function GET() {
  try {
    const rows = await query(
      'SELECT * FROM features WHERE is_active = 1 ORDER BY sort_order ASC'
    )
    return NextResponse.json({ success: true, features: rows })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
