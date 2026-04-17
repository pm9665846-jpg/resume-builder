import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Priya Nair', jobTitle: 'Environmental Scientist',
  email: 'priya.nair@greenearth.org', phone: '+91 94321 78650',
  location: 'Kochi, Kerala', website: 'priyanair.eco',
  linkedin: 'linkedin.com/in/priyanair', github: 'github.com/priyanair',
  summary: 'Environmental scientist with 8 years of field and research experience in climate impact assessment, biodiversity conservation, and sustainable development. Led 14 government-funded projects across 6 states. Published in Nature Climate Change and Environmental Science & Technology.',
  experience: [
    { id: 'e1', role: 'Senior Environmental Scientist', company: 'Ministry of Environment, GoI', location: 'New Delhi', startDate: 'Mar 2020', endDate: '', current: true, description: '• Led national wetland conservation program covering 1.2M hectares\n• Designed carbon sequestration models adopted by 3 state governments\n• Supervised team of 18 field researchers and data analysts' },
    { id: 'e2', role: 'Environmental Consultant', company: 'WWF India', location: 'Mumbai', startDate: 'Jun 2017', endDate: 'Feb 2020', current: false, description: '• Conducted EIA for 22 infrastructure projects worth ₹4,200 Cr\n• Developed biodiversity index for Western Ghats corridor\n• Trained 200+ local community members in eco-monitoring' },
    { id: 'e3', role: 'Research Associate', company: 'TERI University', location: 'New Delhi', startDate: 'Aug 2015', endDate: 'May 2017', current: false, description: '• Published 6 peer-reviewed papers on air quality and urban heat islands\n• Built GIS-based pollution mapping tool used by Delhi government' },
  ],
  education: [
    { id: 'ed1', degree: 'M.Sc Environmental Science', school: 'Jawaharlal Nehru University', startDate: '2013', endDate: '2015', gpa: '9.1/10', achievements: 'Gold Medal · Best Dissertation Award' },
    { id: 'ed2', degree: 'B.Sc Botany (Hons)', school: 'University of Kerala', startDate: '2010', endDate: '2013', gpa: '8.8/10', achievements: 'University Rank 2' },
  ],
  skills: [
    { id: 's1', name: 'GIS / Remote Sensing', level: 95 },
    { id: 's2', name: 'Environmental Impact Assessment', level: 98 },
    { id: 's3', name: 'R / Python', level: 82 },
    { id: 's4', name: 'Climate Modelling', level: 88 },
    { id: 's5', name: 'Biodiversity Surveys', level: 93 },
    { id: 's6', name: 'Policy & Compliance', level: 85 },
  ],
  projects: [
    { id: 'p1', name: 'Western Ghats Biodiversity Atlas', description: 'Comprehensive digital atlas mapping 3,400+ species across 160,000 sq km. Used by IUCN and state forest departments.', tech: 'ArcGIS, Python, R', link: 'wghatsatlas.in' },
    { id: 'p2', name: 'Urban Heat Island Monitor', description: 'Real-time monitoring network across 12 Indian cities. Data feeds into municipal climate action plans.', tech: 'IoT Sensors, QGIS, Django', link: 'uhimonitor.gov.in' },
  ],
  certifications: [
    { id: 'c1', name: 'Certified Environmental Professional (CEP)', issuer: 'ABCEP', date: '2022-06' },
    { id: 'c2', name: 'GIS Professional (GISP)', issuer: 'GISCI', date: '2021-03' },
  ],
  languages: [
    { id: 'l1', name: 'English', proficiency: 'Fluent' },
    { id: 'l2', name: 'Malayalam', proficiency: 'Native' },
    { id: 'l3', name: 'Hindi', proficiency: 'Proficient' },
  ],
  interests: [
    { id: 'i1', name: 'Wildlife Photography' },
    { id: 'i2', name: 'Trekking' },
    { id: 'i3', name: 'Organic Farming' },
    { id: 'i4', name: 'Science Communication' },
  ],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

function Corner({ pos, tc, size = 20 }) {
  const styles = {
    'tl': { top: 16, left: 16, borderTop: `2px solid ${tc}`, borderLeft: `2px solid ${tc}` },
    'tr': { top: 16, right: 16, borderTop: `2px solid ${tc}`, borderRight: `2px solid ${tc}` },
    'bl': { bottom: 16, left: 16, borderBottom: `2px solid ${tc}`, borderLeft: `2px solid ${tc}` },
    'br': { bottom: 16, right: 16, borderBottom: `2px solid ${tc}`, borderRight: `2px solid ${tc}` },
  }
  return <div style={{ position: 'absolute', width: size, height: size, ...styles[pos] }} />
}

function SectionHeader({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, marginTop: 18 }}>
      <div style={{ width: 28, height: 1, background: tc }} />
      <span style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#374151' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
    </div>
  )
}

export default function CornerAccentTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = g(resume?.themeColor, '#0f766e')
  const ff = g(resume?.fontFamily, 'Georgia, serif')

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

  const tcLight = `${tc}14`
  const tcMid   = `${tc}30`

  return (
    <div style={{
      width: 794, minHeight: 1123,
      background: '#ffffff',
      fontFamily: ff,
      color: '#1f2937',
      position: 'relative',
      padding: '48px 56px',
      boxSizing: 'border-box',
    }}>
      {/* Corner brackets */}
      <Corner pos="tl" tc={tc} size={22} />
      <Corner pos="tr" tc={tc} size={22} />
      <Corner pos="bl" tc={tc} size={22} />
      <Corner pos="br" tc={tc} size={22} />

      {/* ── HEADER ── */}
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '0.02em', color: '#111827', margin: 0, lineHeight: 1.1 }}>
          {name}
        </h1>

        {/* Title with flanking lines */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 8 }}>
          <div style={{ width: 60, height: 1, background: tc }} />
          <span style={{ fontSize: 12, fontWeight: 500, color: tc, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {jobTitle}
          </span>
          <div style={{ width: 60, height: 1, background: tc }} />
        </div>

        {/* Contact row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '6px 18px', marginTop: 12 }}>
          {[
            { icon: <Mail size={10} />, val: email },
            { icon: <Phone size={10} />, val: phone },
            { icon: <MapPin size={10} />, val: location },
            { icon: <Globe size={10} />, val: website },
            { icon: <Link2 size={10} />, val: linkedin },
            { icon: <GitBranch size={10} />, val: github },
          ].filter(c => c.val).map((c, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 9.5, color: '#4b5563' }}>
              <span style={{ color: tc }}>{c.icon}</span>
              {c.val}
            </span>
          ))}
        </div>
      </div>

      {/* Thin divider */}
      <div style={{ height: 1, background: tcMid, marginBottom: 4 }} />

      {/* ── SUMMARY ── */}
      {summary && (
        <div style={{ textAlign: 'center', padding: '14px 32px', position: 'relative' }}>
          <span style={{ position: 'absolute', top: 8, left: 28, fontSize: 28, color: tcMid, lineHeight: 1, fontFamily: 'Georgia, serif' }}>"</span>
          <p style={{ fontSize: 10.5, lineHeight: 1.7, color: '#374151', fontStyle: 'italic', margin: 0 }}>
            {summary}
          </p>
          <span style={{ position: 'absolute', bottom: 2, right: 28, fontSize: 28, color: tcMid, lineHeight: 1, fontFamily: 'Georgia, serif' }}>"</span>
        </div>
      )}

      <div style={{ height: 1, background: tcMid, marginTop: 4 }} />

      {/* ── EXPERIENCE ── */}
      <SectionHeader title="Experience" tc={tc} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {exp.map(e => (
          <div key={e.id} style={{ display: 'flex', gap: 14 }}>
            {/* Dot + line */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 3 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: tc, flexShrink: 0 }} />
              <div style={{ flex: 1, width: 1, background: tcMid, marginTop: 4 }} />
            </div>
            <div style={{ flex: 1, paddingBottom: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: 11.5, fontWeight: 700, color: '#111827' }}>{e.role}</span>
                <span style={{ fontSize: 9, color: '#6b7280' }}>{e.startDate} – {e.current ? 'Present' : e.endDate}</span>
              </div>
              <div style={{ fontSize: 10, color: tc, fontWeight: 600, marginBottom: 4 }}>
                {e.company}{e.location ? ` · ${e.location}` : ''}
              </div>
              {e.description && (
                <div style={{ fontSize: 9.5, color: '#4b5563', lineHeight: 1.65, whiteSpace: 'pre-line' }}>
                  {e.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── SKILLS ── */}
      <SectionHeader title="Skills" tc={tc} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 8px' }}>
        {skl.map(s => (
          <span key={s.id} style={{
            padding: '4px 12px', borderRadius: 20,
            background: tcLight, border: `1px solid ${tcMid}`,
            fontSize: 9.5, color: '#1f2937', fontWeight: 500,
          }}>
            {s.name}
          </span>
        ))}
      </div>

      {/* ── PROJECTS ── */}
      {prj.length > 0 && (
        <>
          <SectionHeader title="Projects" tc={tc} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {prj.map(p => (
              <div key={p.id} style={{ paddingLeft: 14, borderLeft: `2px solid ${tcMid}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#111827' }}>{p.name}</span>
                  {p.link && <span style={{ fontSize: 9, color: tc }}>{p.link}</span>}
                </div>
                {p.tech && <div style={{ fontSize: 9, color: '#6b7280', marginBottom: 3 }}>{p.tech}</div>}
                {p.description && <div style={{ fontSize: 9.5, color: '#4b5563', lineHeight: 1.6 }}>{p.description}</div>}
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── BOTTOM TWO COLUMNS ── */}
      <div style={{ display: 'flex', gap: 32, marginTop: 4 }}>
        {/* Left column */}
        <div style={{ flex: 1 }}>
          {/* Education */}
          <SectionHeader title="Education" tc={tc} />
          {edu.map(e => (
            <div key={e.id} style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#111827' }}>{e.degree}</div>
              <div style={{ fontSize: 10, color: tc, fontWeight: 600 }}>{e.school}</div>
              <div style={{ fontSize: 9, color: '#6b7280' }}>
                {e.startDate} – {e.endDate}
                {e.gpa ? ` · GPA: ${e.gpa}` : ''}
              </div>
              {e.achievements && <div style={{ fontSize: 9, color: '#4b5563', marginTop: 2 }}>{e.achievements}</div>}
            </div>
          ))}

          {/* Certifications */}
          {cert.length > 0 && (
            <>
              <SectionHeader title="Certifications" tc={tc} />
              {cert.map(c => (
                <div key={c.id} style={{ marginBottom: 6 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: '#111827' }}>{c.name}</div>
                  <div style={{ fontSize: 9, color: '#6b7280' }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Right column */}
        <div style={{ flex: 1 }}>
          {/* Languages */}
          {lang.length > 0 && (
            <>
              <SectionHeader title="Languages" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {lang.map(l => (
                  <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10 }}>
                    <span style={{ color: '#1f2937', fontWeight: 500 }}>{l.name}</span>
                    <span style={{ color: '#6b7280' }}>{l.proficiency}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Interests */}
          {intr.length > 0 && (
            <>
              <SectionHeader title="Interests" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px 6px' }}>
                {intr.map(i => (
                  <span key={i.id} style={{
                    padding: '3px 10px', borderRadius: 20,
                    background: '#f9fafb', border: '1px solid #e5e7eb',
                    fontSize: 9, color: '#374141',
                  }}>
                    {i.name}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
