import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getSessionUserId } from '@/lib/session'
import bcrypt from 'bcryptjs'

// ── GET /api/profile ──
export async function GET() {
  try {
    const userId = await getSessionUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    // User info
    const rows = await query(
      'SELECT id, name, email, avatar, created_at FROM users WHERE id = ?',
      [userId]
    )
    if (!rows.length) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    // Resume stats — same as /api/user/stats
    const resumeRows = await query(
      'SELECT data FROM resumes WHERE user_id = ?',
      [userId]
    )

    let totalSkills = 0, totalExperience = 0, totalEducation = 0
    let totalProjects = 0, totalCertifications = 0, totalLanguages = 0, totalInterests = 0

    for (const row of resumeRows) {
      try {
        const d = JSON.parse(row.data || '{}')
        totalSkills         += (d.skills         || []).length
        totalExperience     += (d.experience      || []).length
        totalEducation      += (d.education       || []).length
        totalProjects       += (d.projects        || []).length
        totalCertifications += (d.certifications  || []).length
        totalLanguages      += (d.languages       || []).length
        totalInterests      += (d.interests       || []).length
      } catch {}
    }

    return NextResponse.json({
      success: true,
      user: rows[0],
      stats: {
        totalResumes:       resumeRows.length,
        totalSkills,
        totalExperience,
        totalEducation,
        totalProjects,
        totalCertifications,
        totalLanguages,
        totalInterests,
      },
    })
  } catch (err) {
    console.error('[GET /api/profile]', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// ── PUT /api/profile ──
// Body: { name?, bio?, avatar? }
export async function PUT(req) {
  try {
    const userId = await getSessionUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await req.json()
    const { name, avatar } = body

    const fields = []
    const values = []

    if (name !== undefined) { fields.push('name = ?'); values.push(name.trim()) }
    if (avatar !== undefined) { fields.push('avatar = ?'); values.push(avatar) }

    if (!fields.length) return NextResponse.json({ error: 'Nothing to update' }, { status: 400 })

    values.push(userId)
    await query(`UPDATE users SET ${fields.join(', ')}, updated_at = NOW() WHERE id = ?`, values)

    const rows = await query(
      'SELECT id, name, email, avatar, created_at FROM users WHERE id = ?',
      [userId]
    )

    return NextResponse.json({ success: true, user: rows[0] })
  } catch (err) {
    console.error('[PUT /api/profile]', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
