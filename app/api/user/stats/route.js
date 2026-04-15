import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getSessionUserId } from '@/lib/session'

// ── GET /api/user/stats ──
export async function GET() {
  try {
    const userId = await getSessionUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const rows = await query(
      'SELECT data FROM resumes WHERE user_id = ?',
      [userId]
    )

    const totalResumes = rows.length
    let totalSkills = 0
    let totalExperience = 0
    let totalEducation = 0
    let totalProjects = 0
    let totalCertifications = 0

    for (const row of rows) {
      try {
        const data = JSON.parse(row.data || '{}')
        totalSkills        += (data.skills        || []).length
        totalExperience    += (data.experience     || []).length
        totalEducation     += (data.education      || []).length
        totalProjects      += (data.projects       || []).length
        totalCertifications += (data.certifications || []).length
      } catch {}
    }

    return NextResponse.json({
      success: true,
      stats: {
        totalResumes,
        totalSkills,
        totalExperience,
        totalEducation,
        totalProjects,
        totalCertifications,
      },
    })
  } catch (err) {
    console.error('[GET /api/user/stats]', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
