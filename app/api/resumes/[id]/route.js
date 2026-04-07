import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { query } from '@/lib/db'

export async function GET(req, { params }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const rows = await query('SELECT * FROM resumes WHERE id = ? AND user_id = ?', [params.id, session.user.id])
    if (!rows.length) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const resume = rows[0]
    return NextResponse.json({ resume: { ...resume, data: JSON.parse(resume.data || '{}') } })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function PUT(req, { params }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { title, template, themeColor, data } = await req.json()
    await query(
      'UPDATE resumes SET title = ?, template = ?, theme_color = ?, data = ?, updated_at = NOW() WHERE id = ? AND user_id = ?',
      [title, template, themeColor, JSON.stringify(data), params.id, session.user.id]
    )
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function DELETE(req, { params }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    await query('DELETE FROM resumes WHERE id = ? AND user_id = ?', [params.id, session.user.id])
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
