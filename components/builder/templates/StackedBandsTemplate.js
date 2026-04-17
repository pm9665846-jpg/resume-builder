import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Arjun Mehta', jobTitle: 'Civil Engineer',
  email: 'arjun.mehta@infraworks.in', phone: '+91 98112 34567',
  location: 'Pune, Maharashtra', website: 'arjunmehta.in',
  linkedin: 'linkedin.com/in/arjunmehta', github: 'github.com/arjunmehta',
  summary: 'Civil engineer with 10 years of experience in structural design, project management, and infrastructure development. Delivered 30+ projects worth ₹2,800 Cr across highways, bridges, and urban infrastructure. Certified PMP and LEED Green Associate.',
  experience: [
    { id: 'e1', role: 'Principal Civil Engineer', company: 'L&T Construction', location: 'Pune', startDate: 'Jan 2019', endDate: '', current: true, description: '• Oversaw structural design for 4-lane expressway spanning 87 km\n• Managed cross-functional team of 45 engineers and contractors\n• Reduced project cost by 12% through value engineering' },
    { id: 'e2', role: 'Senior Structural Engineer', company: 'NHAI', location: 'New Delhi', startDate: 'Apr 2015', endDate: 'Dec 2018', current: false, description: '• Designed 6 cable-stayed bridges with combined span of 2.4 km\n• Implemented BIM workflows reducing design errors by 35%\n• Coordinated with state PWDs across 4 states' },
    { id: 'e3', role: 'Structural Engineer', company: 'Gammon India', location: 'Mumbai', startDate: 'Jul 2013', endDate: 'Mar 2015', current: false, description: '• Structural analysis for high-rise residential towers (G+28)\n• Prepared detailed engineering drawings using AutoCAD and STAAD.Pro' },
  ],
  education: [
    { id: 'ed1', degree: 'M.Tech Structural Engineering', school: 'IIT Pune', startDate: '2011', endDate: '2013', gpa: '8.9/10', achievements: 'Best Project Award' },
    { id: 'ed2', degree: 'B.E Civil Engineering', school: 'COEP Pune', startDate: '2007', endDate: '2011', gpa: '8.4/10', achievements: 'University Rank 5' },
  ],
  skills: [
    { id: 's1', name: 'Structural Analysis', level: 96 },
    { id: 's2', name: 'AutoCAD / STAAD.Pro', level: 94 },
    { id: 's3', name: 'BIM / Revit', level: 88 },
    { id: 's4', name: 'Project Management', level: 90 },
    { id: 's5', name: 'Geotechnical Engineering', level: 80 },
    { id: 's6', name: 'Cost Estimation', level: 85 },
  ],
  projects: [
    { id: 'p1', name: 'Pune Ring Road Phase II', description: '42 km elevated expressway with 8 interchanges. ₹1,200 Cr project delivered 3 months ahead of schedule.', tech: 'STAAD.Pro, AutoCAD, Primavera', link: 'nhai.gov.in' },
    { id: 'p2', name: 'Nashik Cable-Stayed Bridge', description: '320m main span cable-stayed bridge over Godavari river. Landmark infrastructure project.', tech: 'SAP2000, BIM 360, Revit', link: 'gammonindia.com' },
  ],
  certifications: [
    { id: 'c1', name: 'Project Management Professional (PMP)', issuer: 'PMI', date: '2021-09' },
    { id: 'c2', name: 'LEED Green Associate', issuer: 'USGBC', date: '2020-04' },
  ],
  languages: [
    { id: 'l1', name: 'English', proficiency: 'Fluent' },
    { id: 'l2', name: 'Hindi', proficiency: 'Native' },
    { id: 'l3', name: 'Marathi', proficiency: 'Native' },
  ],
  interests: [
    { id: 'i1', name: 'Sustainable Architecture' },
    { id: 'i2', name: 'Marathon Running' },
    { id: 'i3', name: 'Scale Modelling' },
    { id: 'i4', name: 'Photography' },
  ],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

function BandLabel({ text, tc }) {
  return (
    <div style={{ fontSize: 8, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 10 }}>
      {text}
    </div>
  )
}

export default function StackedBandsTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = g(resume?.themeColor, '#0369a1')
  const ff = g(resume?.fontFamily, 'Arial, sans-serif')

  const name     = g(pi.name,     S.name)
  const jobTitle = g(pi.jobTitle, S.jobTitle)
  const email    = g(pi.email,    S.email)
  const phone    = g(pi.phone,    S.phone)
  const location = g(pi.location, S.location)
  const website  = g(pi.website,  S.website)
  const linkedin = g(pi.linkedin, S.linkedin)
  const github   = g(pi.github,   S.github)
  const summary  = g(pi.summary,  S.summary)

  const exp  = resume?.experience?.length     ? resume.experience     : S.experience
  const edu  = resume?.education?.length      ? resume.education      : S.education
  const skl  = resume?.skills?.length         ? resume.skills         : S.skills
  const prj  = resume?.projects?.length       ? resume.projects       : S.projects
  const cert = resume?.certifications?.length ? resume.certifications : S.certifications
  const lang = resume?.languages?.length      ? resume.languages      : S.languages
  const intr = resume?.interests?.length      ? resume.interests      : S.interests

  // Soft tint: very light version of tc
  const tint = `${tc}0d`
  const tintBorder = `${tc}22`

  const bandStyle = (white) => ({
    padding: '18px 40px',
    background: white ? '#ffffff' : tint,
    borderLeft: `4px solid ${tc}`,
  })

  return (
    <div style={{
      width: 794, minHeight: 1123,
      background: '#ffffff',
      fontFamily: ff,
      color: '#1f2937',
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>

      {/* ── BAND 1: Header (white) ── */}
      <div style={{ ...bandStyle(true), paddingTop: 28, paddingBottom: 22 }}>
        <BandLabel text="Profile" tc={tc} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 style={{ fontSize: 30, fontWeight: 800, color: '#0f172a', margin: 0, lineHeight: 1.1, letterSpacing: '-0.01em' }}>
              {name}
            </h1>
            <div style={{ fontSize: 12, color: tc, fontWeight: 600, marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              {jobTitle}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
            {[
              { icon: <Mail size={9} />, val: email },
              { icon: <Phone size={9} />, val: phone },
              { icon: <MapPin size={9} />, val: location },
              { icon: <Globe size={9} />, val: website },
              { icon: <Link2 size={9} />, val: linkedin },
              { icon: <GitBranch size={9} />, val: github },
            ].filter(c => c.val).map((c, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 9, color: '#4b5563' }}>
                {c.val}
                <span style={{ color: tc }}>{c.icon}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── BAND 2: Summary (tint) ── */}
      {summary && (
        <div style={{ ...bandStyle(false), paddingTop: 16, paddingBottom: 16 }}>
          <BandLabel text="Summary" tc={tc} />
          <p style={{ fontSize: 10.5, lineHeight: 1.75, color: '#374151', margin: 0 }}>{summary}</p>
        </div>
      )}

      {/* ── BAND 3: Experience (white) — 2 columns ── */}
      <div style={{ ...bandStyle(true) }}>
        <BandLabel text="Experience" tc={tc} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 28px' }}>
          {exp.map(e => (
            <div key={e.id} style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 2 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#0f172a' }}>{e.role}</span>
                <span style={{ fontSize: 8.5, color: '#9ca3af' }}>{e.startDate} – {e.current ? 'Present' : e.endDate}</span>
              </div>
              <div style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginBottom: 4 }}>
                {e.company}{e.location ? ` · ${e.location}` : ''}
              </div>
              {e.description && (
                <div style={{ fontSize: 9, color: '#4b5563', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                  {e.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── BAND 4: Skills — horizontal bar chart (tint) ── */}
      <div style={{ ...bandStyle(false) }}>
        <BandLabel text="Skills" tc={tc} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {skl.map(s => (
            <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 9.5, color: '#1f2937', fontWeight: 600, width: 160, flexShrink: 0 }}>{s.name}</span>
              <div style={{ flex: 1, height: 7, background: `${tc}20`, borderRadius: 4, overflow: 'hidden' }}>
                <div style={{
                  width: `${s.level || 80}%`,
                  height: '100%',
                  background: `linear-gradient(90deg, ${tc}, ${tc}bb)`,
                  borderRadius: 4,
                }} />
              </div>
              <span style={{ fontSize: 8.5, color: '#6b7280', width: 28, textAlign: 'right' }}>{s.level || 80}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── BAND 5: Education + Projects (white) ── */}
      <div style={{ ...bandStyle(true) }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 28px' }}>
          <div>
            <BandLabel text="Education" tc={tc} />
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#0f172a' }}>{e.degree}</div>
                <div style={{ fontSize: 10, color: tc, fontWeight: 600 }}>{e.school}</div>
                <div style={{ fontSize: 9, color: '#6b7280' }}>
                  {e.startDate} – {e.endDate}{e.gpa ? ` · GPA ${e.gpa}` : ''}
                </div>
                {e.achievements && <div style={{ fontSize: 9, color: '#4b5563', marginTop: 2 }}>{e.achievements}</div>}
              </div>
            ))}
          </div>
          {prj.length > 0 && (
            <div>
              <BandLabel text="Projects" tc={tc} />
              {prj.map(p => (
                <div key={p.id} style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#0f172a' }}>{p.name}</span>
                    {p.link && <span style={{ fontSize: 8.5, color: tc }}>{p.link}</span>}
                  </div>
                  {p.tech && <div style={{ fontSize: 8.5, color: '#6b7280', marginBottom: 2 }}>{p.tech}</div>}
                  {p.description && <div style={{ fontSize: 9, color: '#4b5563', lineHeight: 1.6 }}>{p.description}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── BAND 6: Languages + Certifications + Interests (tint) ── */}
      <div style={{ ...bandStyle(false) }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0 24px' }}>
          {/* Languages */}
          <div>
            <BandLabel text="Languages" tc={tc} />
            {lang.map(l => (
              <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9.5, marginBottom: 5 }}>
                <span style={{ fontWeight: 600, color: '#1f2937' }}>{l.name}</span>
                <span style={{ color: '#6b7280' }}>{l.proficiency}</span>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <BandLabel text="Certifications" tc={tc} />
            {cert.map(c => (
              <div key={c.id} style={{ marginBottom: 7 }}>
                <div style={{ fontSize: 9.5, fontWeight: 600, color: '#1f2937' }}>{c.name}</div>
                <div style={{ fontSize: 8.5, color: '#6b7280' }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
              </div>
            ))}
          </div>

          {/* Interests */}
          <div>
            <BandLabel text="Interests" tc={tc} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px 6px' }}>
              {intr.map(i => (
                <span key={i.id} style={{
                  padding: '3px 9px', borderRadius: 12,
                  background: '#ffffff', border: `1px solid ${tintBorder}`,
                  fontSize: 9, color: '#374151',
                }}>
                  {i.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
