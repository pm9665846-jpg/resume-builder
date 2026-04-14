import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getSessionUserId, buildResumeData } from '@/lib/session'

// ── GET /api/resumes ── List all resumes for logged-in user
export async function GET() {
  try {
    const userId = await getSessionUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const rows = await query(
      `SELECT id, title, template, theme_color, is_draft, data, created_at, updated_at
       FROM resumes
       WHERE user_id = ?
       ORDER BY updated_at DESC`,
      [userId]
    )

    const resumes = rows.map(r => {
      let jobTitle = ''
      try {
        const parsed = JSON.parse(r.data || '{}')
        jobTitle = parsed?.personalInfo?.jobTitle || ''
      } catch {}
      return {
        id:         r.id,
        title:      r.title,
        jobTitle,
        template:   r.template,
        themeColor: r.theme_color,
        fontFamily: 'Arial, Helvetica, sans-serif',
        isDraft:    Boolean(r.is_draft),
        createdAt:  r.created_at,
        updatedAt:  r.updated_at,
      }
    })

    return NextResponse.json({ success: true, resumes })
  } catch (err) {
    console.error('[GET /api/resumes]', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// ── POST /api/resumes ── Create new resume
export async function POST(req) {
  try {
    const userId = await getSessionUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await req.json()

    const title      = body.title      || 'Untitled Resume'
    const template   = body.template   || 'modern'
    const themeColor = body.themeColor || '#8b5cf6'
    const fontFamily = body.fontFamily || 'Arial, Helvetica, sans-serif'
    const isDraft    = body.isDraft    ? 1 : 0

    // Build clean validated data object
    const data = buildResumeData(body.data || body)

    const result = await query(
      `INSERT INTO resumes (user_id, title, template, theme_color, is_draft, data)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [userId, title, template, themeColor, isDraft, JSON.stringify(data)]
    )

    return NextResponse.json({
      success: true,
      id: result.insertId,
      message: 'Resume created successfully',
    }, { status: 201 })
  } catch (err) {
    console.error('[POST /api/resumes]', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
