import { getServerSession } from 'next-auth'
import { cookies } from 'next/headers'

// Lazy import to avoid circular deps
async function getAuthOptions() {
  try {
    const mod = await import('@/app/api/auth/[...nextauth]/route')
    return mod.authOptions
  } catch {
    return null
  }
}

export async function getSessionUserId() {
  // 1. NextAuth session
  try {
    const authOptions = await getAuthOptions()
    if (authOptions) {
      const session = await getServerSession(authOptions)
      if (session?.user?.id) return String(session.user.id)
    }
  } catch {}

  // 2. Custom cookie session (from /api/auth/login)
  try {
    const cookieStore = await cookies()
    const raw = cookieStore.get('session_user')?.value
    if (raw) {
      const user = JSON.parse(raw)
      if (user?.id) return String(user.id)
    }
  } catch {}

  return null
}

// Build clean resume data object from form fields
export function buildResumeData(raw = {}) {
  return {
    fontFamily: raw.fontFamily || 'Arial, Helvetica, sans-serif',
    personalInfo: {
      name:      raw.personalInfo?.name      || '',
      jobTitle:  raw.personalInfo?.jobTitle  || '',
      email:     raw.personalInfo?.email     || '',
      phone:     raw.personalInfo?.phone     || '',
      location:  raw.personalInfo?.location  || '',
      website:   raw.personalInfo?.website   || '',
      linkedin:  raw.personalInfo?.linkedin  || '',
      github:    raw.personalInfo?.github    || '',
      summary:   raw.personalInfo?.summary   || '',
      photo:     raw.personalInfo?.photo     || '',
    },
    experience: (raw.experience || []).map(e => ({
      id:          e.id          || '',
      company:     e.company     || '',
      role:        e.role        || '',
      location:    e.location    || '',
      startDate:   e.startDate   || '',
      endDate:     e.endDate     || '',
      current:     Boolean(e.current),
      description: e.description || '',
    })),
    education: (raw.education || []).map(e => ({
      id:           e.id           || '',
      school:       e.school       || '',
      degree:       e.degree       || '',
      field:        e.field        || '',
      startDate:    e.startDate    || '',
      endDate:      e.endDate      || '',
      gpa:          e.gpa          || '',
      achievements: e.achievements || '',
    })),
    skills: (raw.skills || []).map(s => ({
      id:       s.id       || '',
      name:     s.name     || '',
      level:    Number(s.level) || 80,
      category: s.category || 'Technical',
    })),
    projects: (raw.projects || []).map(p => ({
      id:          p.id          || '',
      name:        p.name        || '',
      description: p.description || '',
      tech:        p.tech        || '',
      link:        p.link        || '',
      github:      p.github      || '',
    })),
    certifications: (raw.certifications || []).map(c => ({
      id:           c.id           || '',
      name:         c.name         || '',
      issuer:       c.issuer       || '',
      date:         c.date         || '',
      credentialId: c.credentialId || '',
      url:          c.url          || '',
    })),
    languages: (raw.languages || []).map(l => ({
      id:          l.id          || '',
      name:        l.name        || '',
      proficiency: l.proficiency || 'Professional',
    })),
    achievements: (raw.achievements || []).map(a => ({
      id:   a.id   || '',
      text: a.text || '',
    })),
    interests: (raw.interests || []).map(i => ({
      id:   i.id   || '',
      name: i.name || '',
    })),
    // ── Extended optional sections ──
    achievementsList: (raw.achievementsList || []).map(a => ({
      id:          a.id          || '',
      title:       a.title       || '',
      description: a.description || '',
    })),
    activities: (raw.activities || []).map(a => ({
      id:          a.id          || '',
      title:       a.title       || '',
      description: a.description || '',
    })),
    publications: (raw.publications || []).map(p => ({
      id:          p.id          || '',
      title:       p.title       || '',
      description: p.description || '',
    })),
    references: (raw.references || []).map(r => ({
      id:           r.id           || '',
      refereeName:  r.refereeName  || '',
      jobTitle:     r.jobTitle     || '',
      company:      r.company      || '',
      email:        r.email        || '',
      phone:        r.phone        || '',
    })),
    additionalInfo:          raw.additionalInfo          || '',
    enabledOptionalSections: raw.enabledOptionalSections || [],
  }
}
