import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getSessionUserId, buildResumeData } from '@/lib/session'

// ── GET /api/resumes/:id ──
export async function GET(req, context) {
  try {
    const { id } = await context.params
    const userId = await getSessionUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const rows = await query(
      'SELECT * FROM resumes WHERE id = ? AND user_id = ?',
      [id, userId]
    )
    if (!rows.length) return NextResponse.json({ error: 'Resume not found' }, { status: 404 })

    const row  = rows[0]
    const data = JSON.parse(row.data || '{}')

    return NextResponse.json({
      success: true,
      resume: {
        id:         row.id,
        title:      row.title,
        template:   row.template,
        themeColor: row.theme_color,
        fontFamily: data.fontFamily || 'Arial, Helvetica, sans-serif',
        isDraft:    Boolean(row.is_draft),
        createdAt:  row.created_at,
        updatedAt:  row.updated_at,
        data: {
          personalInfo:   data.personalInfo   || {},
          experience:     data.experience     || [],
          education:      data.education      || [],
          skills:         data.skills         || [],
          projects:       data.projects       || [],
          certifications: data.certifications || [],
          languages:      data.languages      || [],
          achievements:   data.achievements   || [],          interests:      data.interests      || [],
          // Extended optional sections
          achievementsList:        data.achievementsList        || [],
          activities:              data.activities              || [],
          publications:            data.publications            || [],
          references:              data.references              || [],
          additionalInfo:          data.additionalInfo          || '',
          enabledOptionalSections: data.enabledOptionalSections || [],
        },
      },
    })
  } catch (err) {
    console.error('[GET /api/resumes/:id]', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// ── PUT /api/resumes/:id ──
export async function PUT(req, context) {
  try {
    const { id } = await context.params
    const userId = await getSessionUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const existing = await query(
      'SELECT id, data FROM resumes WHERE id = ? AND user_id = ?',
      [id, userId]
    )
    if (!existing.length) return NextResponse.json({ error: 'Resume not found' }, { status: 404 })

    const body = await req.json()

    const title      = body.title      || 'Untitled Resume'
    const template   = body.template   || 'modern'
    const themeColor = body.themeColor || '#8b5cf6'
    const isDraft    = body.isDraft    ? 1 : 0

    const existingData = JSON.parse(existing[0].data || '{}')
    const incomingData = body.data || {}

    // Deep merge: incoming fields override existing, missing fields keep existing values
    const merged = buildResumeData({
      fontFamily: body.fontFamily || existingData.fontFamily,
      personalInfo:   { ...existingData.personalInfo,   ...incomingData.personalInfo },
      experience:     incomingData.experience     ?? existingData.experience,
      education:      incomingData.education      ?? existingData.education,
      skills:         incomingData.skills         ?? existingData.skills,
      projects:       incomingData.projects       ?? existingData.projects,
      certifications: incomingData.certifications ?? existingData.certifications,
      languages:      incomingData.languages      ?? existingData.languages,
      achievements:   incomingData.achievements   ?? existingData.achievements,
      interests:      incomingData.interests      ?? existingData.interests,
      // Extended optional sections
      achievementsList:        incomingData.achievementsList        ?? existingData.achievementsList,
      activities:              incomingData.activities              ?? existingData.activities,
      publications:            incomingData.publications            ?? existingData.publications,
      references:              incomingData.references              ?? existingData.references,
      additionalInfo:          incomingData.additionalInfo          ?? existingData.additionalInfo,
      enabledOptionalSections: incomingData.enabledOptionalSections ?? existingData.enabledOptionalSections,
    })

    await query(
      `UPDATE resumes
       SET title = ?, template = ?, theme_color = ?, is_draft = ?, data = ?, updated_at = NOW()
       WHERE id = ? AND user_id = ?`,
      [title, template, themeColor, isDraft, JSON.stringify(merged), id, userId]
    )

    return NextResponse.json({ success: true, message: 'Resume updated successfully' })
  } catch (err) {
    console.error('[PUT /api/resumes/:id]', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// ── DELETE /api/resumes/:id ──
export async function DELETE(req, context) {
  try {
    const { id } = await context.params
    const userId = await getSessionUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const existing = await query(
      'SELECT id FROM resumes WHERE id = ? AND user_id = ?',
      [id, userId]
    )
    if (!existing.length) return NextResponse.json({ error: 'Resume not found' }, { status: 404 })

    await query('DELETE FROM resumes WHERE id = ? AND user_id = ?', [id, userId])

    return NextResponse.json({ success: true, message: 'Resume deleted successfully' })
  } catch (err) {
    console.error('[DELETE /api/resumes/:id]', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
