import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getSessionUserId } from '@/lib/session'

// GET /api/user/resume-data
// Returns aggregated data from all user resumes: skills, experience, education, interests etc.
export async function GET() {
  try {
    const userId = await getSessionUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const rows = await query(
      'SELECT data FROM resumes WHERE user_id = ? ORDER BY updated_at DESC',
      [userId]
    )

    if (!rows.length) {
      return NextResponse.json({
        success: true,
        data: {
          personalInfo: {},
          experience: [],
          education: [],
          skills: [],
          projects: [],
          certifications: [],
          languages: [],
          interests: [],
          totalResumes: 0,
        }
      })
    }

    // Use the most recently updated resume as primary data source
    const latest = JSON.parse(rows[0].data || '{}')

    // Aggregate unique skills from all resumes
    const allSkills = new Map()
    const allExperience = []
    const allEducation = []
    const allProjects = []
    const allCertifications = []
    const allLanguages = new Map()
    const allInterests = new Map()

    rows.forEach(row => {
      try {
        const d = JSON.parse(row.data || '{}')

        // Skills — deduplicate by name
        ;(d.skills || []).forEach(s => {
          if (s.name && !allSkills.has(s.name.toLowerCase())) {
            allSkills.set(s.name.toLowerCase(), s)
          }
        })

        // Languages — deduplicate by name
        ;(d.languages || []).forEach(l => {
          if (l.name && !allLanguages.has(l.name.toLowerCase())) {
            allLanguages.set(l.name.toLowerCase(), l)
          }
        })

        // Interests — deduplicate by name
        ;(d.interests || []).forEach(i => {
          if (i.name && !allInterests.has(i.name.toLowerCase())) {
            allInterests.set(i.name.toLowerCase(), i)
          }
        })
      } catch (e) {}
    })

    return NextResponse.json({
      success: true,
      data: {
        personalInfo:   latest.personalInfo   || {},
        experience:     latest.experience     || [],
        education:      latest.education      || [],
        skills:         Array.from(allSkills.values()),
        projects:       latest.projects       || [],
        certifications: latest.certifications || [],
        languages:      Array.from(allLanguages.values()),
        interests:      Array.from(allInterests.values()),
        totalResumes:   rows.length,
      }
    })
  } catch (err) {
    console.error('[GET /api/user/resume-data]', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
