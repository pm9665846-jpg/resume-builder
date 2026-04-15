import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Vikram Nair', jobTitle: 'Senior Structural Engineer',
  email: 'vikram@email.com', phone: '+91 98765 54321',
  location: 'Mumbai, India', website: 'vikramnair.eng',
  linkedin: 'linkedin.com/in/vikramnair', github: 'github.com/vikramnair',
  summary: 'Licensed structural engineer with 10+ years designing high-rise buildings, bridges, and infrastructure projects across India and the Middle East. Led structural design for 15+ projects worth ₹2,000Cr+. Expert in seismic analysis, BIM, and sustainable construction.',
  experience: [
    { id: 'e1', role: 'Senior Structural Engineer', company: 'L&T Construction', location: 'Mumbai', startDate: 'Jan 2019', endDate: '', current: true, description: '• Led structural design for 42-storey residential tower in BKC, Mumbai\n• Managed team of 8 engineers across design and site supervision\n• Reduced material costs by 18% through optimized structural system' },
    { id: 'e2', role: 'Structural Engineer', company: 'Arup', location: 'Dubai', startDate: 'Mar 2015', endDate: 'Dec 2018', current: false, description: '• Designed structural systems for 3 landmark towers in Dubai Marina\n• Performed seismic analysis for 12 projects across UAE and KSA\n• Collaborated with international teams across 6 countries' },
    { id: 'e3', role: 'Junior Engineer', company: 'STUP Consultants', location: 'Mumbai', startDate: 'Jun 2013', endDate: 'Feb 2015', current: false, description: '• Assisted in design of 8 highway bridges across Maharashtra\n• Prepared structural drawings and BOQ for ₹200Cr projects' },
  ],
  education: [{ id: 'ed1', degree: 'M.Tech Structural Engineering', school: 'IIT Bombay', startDate: '2011', endDate: '2013', gpa: '9.0/10', achievements: 'Institute Silver Medal' }],
  skills: [{ id: 's1', name: 'ETABS / SAP2000', level: 95 }, { id: 's2', name: 'AutoCAD / Revit', level: 92 }, { id: 's3', name: 'Seismic Analysis', level: 90 }, { id: 's4', name: 'BIM', level: 85 }, { id: 's5', name: 'STAAD Pro', level: 88 }, { id: 's6', name: 'Project Management', level: 82 }],
  projects: [{ id: 'p1', name: 'BKC Tower 42', description: 'Structural design of 42-storey mixed-use tower. First building in Mumbai to use outrigger system for lateral resistance.', tech: 'ETABS, Revit, Seismic Analysis', link: 'ltconstruction.com/bkc' }],
  certifications: [{ id: 'c1', name: 'PE License (Structural)', issuer: 'Maharashtra Engineering Council', date: '2016-08' }, { id: 'c2', name: 'PMP Certification', issuer: 'PMI', date: '2020-03' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }, { id: 'l3', name: 'Malayalam', proficiency: 'Native' }],
  interests: [{ id: 'i1', name: 'Architecture' }, { id: 'i2', name: 'Trekking' }, { id: 'i3', name: 'Photography' }, { id: 'i4', name: 'Chess' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

function SH({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, marginTop: 20 }}>
      <div style={{ width: 4, height: 16, background: `linear-gradient(to bottom, ${tc}, ${tc}50)`, borderRadius: 2 }} />
      <span style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#134e4a' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: `${tc}20` }} />
    </div>
  )
}

function SkillBar({ name, level, tc }) {
  return (
    <div style={{ marginBottom: 9 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
        <span style={{ fontSize: 8, fontWeight: 600, color: '#134e4a' }}>{name}</span>
        <span style={{ fontSize: 7, fontWeight: 700, color: tc }}>{level}%</span>
      </div>
      <div style={{ height: 5, borderRadius: 3, background: `${tc}18`, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${level}%`,
          borderRadius: 3,
          background: `linear-gradient(90deg, #134e4a, ${tc}, #14b8a6)`,
        }} />
      </div>
    </div>
  )
}

export default function TriwaveTemplate({ resume }) {
  const r = resume || {}
  const pi = r.personalInfo || r.data?.personalInfo || {}

  const name        = g(pi.name,      S.name)
  const jobTitle    = g(pi.jobTitle,  S.jobTitle)
  const email       = g(pi.email,     S.email)
  const phone       = g(pi.phone,     S.phone)
  const location    = g(pi.location,  S.location)
  const website     = g(pi.website,   S.website)
  const linkedin    = g(pi.linkedin,  S.linkedin)
  const github      = g(pi.github,    S.github)
  const summary     = g(pi.summary,   S.summary)
  const photo       = pi.photo || ''

  const experience     = (r.experience?.length     ? r.experience     : S.experience)
  const education      = (r.education?.length       ? r.education      : S.education)
  const skills         = (r.skills?.length          ? r.skills         : S.skills)
  const projects       = (r.projects?.length        ? r.projects       : S.projects)
  const certifications = (r.certifications?.length  ? r.certifications : S.certifications)
  const languages      = (r.languages?.length       ? r.languages      : S.languages)
  const interests      = (r.interests?.length       ? r.interests      : S.interests)

  const tc         = g(r.themeColor, '#0f766e')
  const fontFamily = g(r.fontFamily, "'Inter', 'Helvetica Neue', Arial, sans-serif")

  const contactItems = [
    { icon: Mail,     val: email    },
    { icon: Phone,    val: phone    },
    { icon: MapPin,   val: location },
    { icon: Globe,    val: website  },
    { icon: Link2,    val: linkedin },
    { icon: GitBranch,val: github   },
  ].filter(c => c.val && String(c.val).trim() !== '')

  return (
    <div style={{
      width: 794,
      minHeight: 1123,
      fontFamily,
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* ── HEADER ── */}
      <div style={{
        background: `linear-gradient(135deg, #134e4a 0%, ${tc} 50%, #0d9488 100%)`,
        padding: '28px 36px 0',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>

          {/* Photo */}
          {photo && (
            <div style={{ flexShrink: 0 }}>
              <img
                src={photo}
                alt={name}
                style={{
                  width: 72, height: 72,
                  borderRadius: '50%',
                  border: '3px solid white',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          )}

          {/* Name + title + contact */}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              {name}
            </div>
            <div style={{ fontSize: 12, fontWeight: 500, color: '#99f6e4', marginTop: 4, letterSpacing: '0.04em' }}>
              {jobTitle}
            </div>

            {/* Contact pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
              {contactItems.map(({ icon: Icon, val }, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 4,
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: 20,
                  padding: '3px 9px',
                  backdropFilter: 'blur(4px)',
                }}>
                  <Icon size={9} color="rgba(255,255,255,0.85)" />
                  <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3-LAYER HEADER WAVE */}
        <div style={{ position: 'relative', height: 70, marginTop: 16 }}>
          <svg viewBox="0 0 794 70" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%' }} preserveAspectRatio="none">
            <path d="M0,50 C120,20 280,65 450,40 C600,18 720,55 794,35 L794,70 L0,70 Z" fill="#134e4a" opacity="0.5"/>
            <path d="M0,55 C150,30 320,68 500,45 C650,25 740,58 794,42 L794,70 L0,70 Z" fill={tc} opacity="0.7"/>
            <path d="M0,62 C140,42 300,70 480,52 C640,36 740,64 794,50 L794,70 L0,70 Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ display: 'flex', flex: 1, padding: '4px 0 0' }}>

        {/* LEFT COLUMN — 62% */}
        <div style={{ width: '62%', padding: '0 20px 20px 36px' }}>

          {/* Summary */}
          {summary && (
            <>
              <SH title="Professional Summary" tc={tc} />
              <p style={{ fontSize: 8.5, color: '#374151', lineHeight: 1.65, margin: 0 }}>{summary}</p>
            </>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <>
              <SH title="Experience" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {experience.map(exp => (
                  <div key={exp.id} style={{
                    background: '#ffffff',
                    borderLeft: `3px solid ${tc}15`,
                    borderRadius: '0 6px 6px 0',
                    padding: '10px 12px',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                      <div>
                        <div style={{ fontSize: 9.5, fontWeight: 700, color: '#111827' }}>{exp.role}</div>
                        <div style={{ fontSize: 8.5, fontWeight: 600, color: tc, marginTop: 1 }}>
                          {exp.company}{exp.location ? ` · ${exp.location}` : ''}
                        </div>
                      </div>
                      <div style={{
                        fontSize: 7.5, color: '#6b7280', fontWeight: 500,
                        background: `${tc}10`, borderRadius: 10,
                        padding: '2px 7px', whiteSpace: 'nowrap', flexShrink: 0, marginLeft: 8,
                      }}>
                        {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                      </div>
                    </div>
                    {exp.description && (
                      <div style={{ marginTop: 5 }}>
                        {exp.description.split('\n').filter(Boolean).map((line, i) => (
                          <div key={i} style={{ fontSize: 8, color: '#4b5563', lineHeight: 1.6, marginBottom: 1 }}>{line}</div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <>
              <SH title="Projects" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {projects.map(proj => (
                  <div key={proj.id} style={{
                    background: '#ffffff',
                    borderLeft: `3px solid ${tc}15`,
                    borderRadius: '0 6px 6px 0',
                    padding: '10px 12px',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
                      <span style={{ fontSize: 9.5, fontWeight: 700, color: '#111827' }}>{proj.name}</span>
                      {proj.link && (
                        <span style={{ fontSize: 7.5, color: tc, fontWeight: 500 }}>{proj.link}</span>
                      )}
                    </div>
                    {proj.description && (
                      <p style={{ fontSize: 8, color: '#4b5563', lineHeight: 1.6, margin: '0 0 4px' }}>{proj.description}</p>
                    )}
                    {proj.tech && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                        {proj.tech.split(',').map((t, i) => (
                          <span key={i} style={{
                            fontSize: 7, fontWeight: 600, color: tc,
                            background: `${tc}12`, borderRadius: 10,
                            padding: '2px 7px',
                          }}>{t.trim()}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* RIGHT COLUMN — 38% */}
        <div style={{ width: '38%', padding: '0 28px 20px 12px', background: '#f0fdfa', borderLeft: `1px solid ${tc}15` }}>

          {/* Skills */}
          {skills.length > 0 && (
            <>
              <SH title="Skills" tc={tc} />
              <div>
                {skills.map(sk => (
                  <SkillBar key={sk.id} name={sk.name} level={sk.level} tc={tc} />
                ))}
              </div>
            </>
          )}

          {/* Education */}
          {education.length > 0 && (
            <>
              <SH title="Education" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {education.map(ed => (
                  <div key={ed.id}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>{ed.degree}</div>
                    <div style={{ fontSize: 8.5, fontWeight: 600, color: tc, marginTop: 1 }}>{ed.school}</div>
                    <div style={{ fontSize: 7.5, color: '#6b7280', marginTop: 2 }}>
                      {ed.startDate}{ed.endDate ? ` – ${ed.endDate}` : ''}
                      {ed.gpa ? ` · GPA: ${ed.gpa}` : ''}
                    </div>
                    {ed.achievements && (
                      <div style={{ fontSize: 7.5, color: '#0d9488', fontWeight: 600, marginTop: 2 }}>🏅 {ed.achievements}</div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <>
              <SH title="Languages" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {languages.map(lang => (
                  <div key={lang.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 8.5, fontWeight: 600, color: '#374151' }}>{lang.name}</span>
                    <span style={{
                      fontSize: 7.5, fontWeight: 600, color: tc,
                      background: `${tc}15`, borderRadius: 10,
                      padding: '2px 8px',
                    }}>{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <>
              <SH title="Certifications" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {certifications.map(cert => (
                  <div key={cert.id}>
                    <div style={{ fontSize: 8.5, fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>{cert.name}</div>
                    <div style={{ fontSize: 7.5, color: '#6b7280', marginTop: 1 }}>
                      {cert.issuer}{cert.date ? ` · ${cert.date}` : ''}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Interests */}
          {interests.length > 0 && (
            <>
              <SH title="Interests" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {interests.map(int => (
                  <span key={int.id} style={{
                    fontSize: 7.5, fontWeight: 600,
                    color: '#134e4a',
                    background: `${tc}18`,
                    border: `1px solid ${tc}30`,
                    borderRadius: 12,
                    padding: '3px 9px',
                  }}>{int.name}</span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── 3-LAYER FOOTER WAVES ── */}
      <div style={{ position: 'relative', height: 90, marginTop: 'auto', overflow: 'hidden' }}>
        {/* Layer 1 — back, lightest */}
        <svg viewBox="0 0 794 90" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%' }} preserveAspectRatio="none">
          <path d="M0,40 C180,10 360,70 540,35 C680,10 750,50 794,30 L794,90 L0,90 Z" fill="#134e4a" opacity="0.4"/>
        </svg>
        {/* Layer 2 — middle */}
        <svg viewBox="0 0 794 90" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%' }} preserveAspectRatio="none">
          <path d="M0,52 C150,25 330,75 520,48 C670,28 755,62 794,44 L794,90 L0,90 Z" fill={`${tc}`} opacity="0.7"/>
        </svg>
        {/* Layer 3 — front, solid */}
        <svg viewBox="0 0 794 90" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%' }} preserveAspectRatio="none">
          <path d="M0,62 C120,40 280,80 460,58 C620,38 730,70 794,55 L794,90 L0,90 Z" fill="#0d9488"/>
        </svg>
        {/* Small contact info in footer */}
        <div style={{ position: 'absolute', bottom: 8, left: 0, right: 0, textAlign: 'center', zIndex: 10 }}>
          <span style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.1em' }}>
            {name} · {email}
          </span>
        </div>
      </div>

    </div>
  )
}
