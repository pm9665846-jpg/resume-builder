import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { query } from '@/lib/db'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const rows = await query(
      'SELECT id, title, template, theme_color, is_draft, created_at, updated_at FROM resumes WHERE user_id = ? ORDER BY updated_at DESC',
      [session.user.id]
    )
    return NextResponse.json({ resumes: rows })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { title, template, themeColor, data } = await req.json()

    const result = await query(
      'INSERT INTO resumes (user_id, title, template, theme_color, data, is_draft) VALUES (?, ?, ?, ?, ?, ?)',
      [session.user.id, title || 'Untitled Resume', template || 'modern', themeColor || '#8b5cf6', JSON.stringify(data || {}), false]
    )

    return NextResponse.json({ id: result.insertId, success: true })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
