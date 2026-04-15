import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Rohan Desai', jobTitle: 'Principal Architect & Urban Designer',
  email: 'rohan@email.com', phone: '+91 98765 66778',
  location: 'Mumbai, India', website: 'rohandesai.arch',
  linkedin: 'linkedin.com/in/rohandesai', github: 'github.com/rohandesai',
  summary: 'Award-winning architect with 14+ years designing iconic buildings and urban spaces across India and Southeast Asia. Led design for 30+ projects worth ₹5,000Cr+. Expert in sustainable design, parametric architecture, and smart city planning.',
  experience: [
    { id: 'e1', role: 'Principal Architect', company: 'Morphogenesis', location: 'Mumbai', startDate: 'Jan 2018', endDate: '', current: true, description: '• Led design of 45-storey mixed-use tower in BKC — LEED Platinum certified\n• Won Aga Khan Award for Architecture 2022\n• Managed design team of 25 architects across 3 studios' },
    { id: 'e2', role: 'Senior Architect', company: 'Zaha Hadid Architects', location: 'London', startDate: 'Mar 2013', endDate: 'Dec 2017', current: false, description: '• Contributed to 8 landmark projects across UAE, China, and India\n• Led parametric design development for Mumbai Convention Centre\n• Mentored 10 junior architects' },
    { id: 'e3', role: 'Architect', company: 'Hafeez Contractor', location: 'Mumbai', startDate: 'Jun 2010', endDate: 'Feb 2013', current: false, description: '• Designed residential complexes with 2,000+ units\n• Managed client relationships for ₹800Cr projects' },
  ],
  education: [{ id: 'ed1', degree: 'M.Arch Urban Design', school: 'Architectural Association, London', startDate: '2008', endDate: '2010', gpa: 'Distinction', achievements: 'AA Prize for Best Design Project' }],
  skills: [{ id: 's1', name: 'Parametric Design', level: 96 }, { id: 's2', name: 'Revit / BIM', level: 94 }, { id: 's3', name: 'Rhino / Grasshopper', level: 92 }, { id: 's4', name: 'Sustainable Design', level: 90 }, { id: 's5', name: 'Urban Planning', level: 88 }, { id: 's6', name: 'AutoCAD', level: 95 }],
  projects: [{ id: 'p1', name: 'BKC Tower 45', description: 'Iconic 45-storey mixed-use tower. First net-zero building in Mumbai. Won 3 international design awards.', tech: 'Parametric Design, BIM, LEED Platinum', link: 'morphogenesis.in/bkc' }],
  certifications: [{ id: 'c1', name: 'LEED AP BD+C', issuer: 'USGBC', date: '2019-06' }, { id: 'c2', name: 'GRIHA Evaluator', issuer: 'TERI', date: '2020-03' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }, { id: 'l3', name: 'Marathi', proficiency: 'Native' }],
  interests: [{ id: 'i1', name: 'Urban Photography' }, { id: 'i2', name: 'Sketching' }, { id: 'i3', name: 'Trekking' }, { id: 'i4', name: 'Jazz' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

// Accent Bar section Header
function ABH({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, marginTop: 20 }}>
      {/* Mini diagonal bars */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
        <div style={{ width: 3, height: 16, background: tc, transform: 'skewX(-8deg)', borderRadius: 1 }} />
        <div style={{ width: 2, height: 12, background: tc, transform: 'skewX(-8deg)', borderRadius: 1, opacity: 0.6 }} />
        <div style={{ width: 2, height: 8, background: tc, transform: 'skewX(-8deg)', borderRadius: 1, opacity: 0.3 }} />
      </div>
      <span style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#0f172a' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: `${tc}20` }} />
    </div>
  )
}

export default function AccentBarTemplate2({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = g(resume?.themeColor, '#0f766e')
  const ff = g(resume?.fontFamily, "'Inter', 'Helvetica Neue', Arial, sans-serif")

  const name       = g(pi.name,      S.name)
  const jobTitle   = g(pi.jobTitle,  S.jobTitle)
  const email      = g(pi.email,     S.email)
  const phone      = g(pi.phone,     S.phone)
  const location   = g(pi.location,  S.location)
  const website    = g(pi.website,   S.website)
  const linkedin   = g(pi.linkedin,  S.linkedin)
  const github     = g(pi.github,    S.github)
  const summary    = g(pi.summary,   S.summary)
  const photo      = pi.photo || ''

  const experience     = (resume?.experience?.length     ? resume.experience     : S.experience)
  const education      = (resume?.education?.length      ? resume.education      : S.education)
  const skills         = (resume?.skills?.length         ? resume.skills         : S.skills)
  const projects       = (resume?.projects?.length       ? resume.projects       : S.projects)
  const certifications = (resume?.certifications?.length ? resume.certifications : S.certifications)
  const languages      = (resume?.languages?.length      ? resume.languages      : S.languages)
  const interests      = (resume?.interests?.length      ? resume.interests      : S.interests)

  const iconStyle = { color: '#475569', flexShrink: 0 }

  return (
    <div style={{
      width: 794,
      minHeight: 1123,
      background: '#ffffff',
      fontFamily: ff,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontSize: 11,
      color: '#334155',
    }}>

      {/* ── HEADER ── */}
      <div style={{
        background: '#ffffff',
        padding: '32px 36px 0',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Left: diagonal bars + name block */}
          <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>

            {/* ★ MAIN FEATURE — Diagonal accent bars group */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0, marginRight: 18 }}>
              {/* Bar 1 — tallest, full color */}
              <div style={{ width: 6, height: 72, background: tc, transform: 'skewX(-8deg)', borderRadius: 2 }} />
              {/* Bar 2 — slightly shorter */}
              <div style={{ width: 4, height: 58, background: tc, transform: 'skewX(-8deg)', borderRadius: 2, opacity: 0.7 }} />
              {/* Bar 3 — medium */}
              <div style={{ width: 3, height: 44, background: tc, transform: 'skewX(-8deg)', borderRadius: 2, opacity: 0.5 }} />
              {/* Bar 4 — shorter */}
              <div style={{ width: 3, height: 30, background: tc, transform: 'skewX(-8deg)', borderRadius: 2, opacity: 0.3 }} />
              {/* Bar 5 — shortest, most transparent */}
              <div style={{ width: 2, height: 18, background: tc, transform: 'skewX(-8deg)', borderRadius: 2, opacity: 0.15 }} />
            </div>

            {/* Name + title + contact */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 30, fontWeight: 900, color: '#0f172a', lineHeight: 1.1, letterSpacing: '-0.5px' }}>
                {name}
              </div>
              <div style={{ fontSize: 11, color: tc, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 4 }}>
                {jobTitle}
              </div>
              {/* Contact row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px', marginTop: 10, alignItems: 'center' }}>
                {email && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Mail size={9} style={iconStyle} />
                    <span style={{ fontSize: 9, color: '#475569' }}>{email}</span>
                  </div>
                )}
                {phone && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Phone size={9} style={iconStyle} />
                    <span style={{ fontSize: 9, color: '#475569' }}>{phone}</span>
                  </div>
                )}
                {location && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <MapPin size={9} style={iconStyle} />
                    <span style={{ fontSize: 9, color: '#475569' }}>{location}</span>
                  </div>
                )}
                {website && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Globe size={9} style={iconStyle} />
                    <span style={{ fontSize: 9, color: '#475569' }}>{website}</span>
                  </div>
                )}
                {linkedin && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Link2 size={9} style={iconStyle} />
                    <span style={{ fontSize: 9, color: '#475569' }}>{linkedin}</span>
                  </div>
                )}
                {github && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <GitBranch size={9} style={iconStyle} />
                    <span style={{ fontSize: 9, color: '#475569' }}>{github}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Photo */}
          {photo && (
            <div style={{ flexShrink: 0, marginLeft: 20 }}>
              <img
                src={photo}
                alt="Profile"
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: `3px solid ${tc}30`,
                  display: 'block',
                }}
              />
            </div>
          )}
        </div>

        {/* Gradient underline */}
        <div style={{
          height: 2,
          background: `linear-gradient(to right, ${tc}, ${tc}40, transparent)`,
          marginTop: 20,
          borderRadius: 1,
        }} />
      </div>

      {/* ── BODY ── */}
      <div style={{ display: 'flex', padding: '0 0 32px' }}>

        {/* LEFT COLUMN — 60% */}
        <div style={{ flex: '0 0 60%', padding: '4px 28px 0 36px', minWidth: 0 }}>

          {/* Summary */}
          {summary && (
            <>
              <ABH title="Professional Summary" tc={tc} />
              <div style={{
                fontSize: 10,
                lineHeight: 1.7,
                color: '#475569',
                fontStyle: 'italic',
                background: `${tc}08`,
                borderLeft: `3px solid ${tc}`,
                padding: '10px 14px',
                borderRadius: '0 6px 6px 0',
              }}>
                {summary}
              </div>
            </>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <>
              <ABH title="Work Experience" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {experience.map((exp) => {
                  const dateStr = exp.current
                    ? `${exp.startDate} — Present`
                    : `${exp.startDate}${exp.endDate ? ` — ${exp.endDate}` : ''}`
                  return (
                    <div key={exp.id}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontWeight: 800, fontSize: 11, color: '#0f172a' }}>{exp.company}</div>
                          <div style={{ fontSize: 10, color: tc, fontWeight: 600, marginTop: 1 }}>{exp.role}</div>
                          {exp.location && (
                            <div style={{ fontSize: 9, color: '#94a3b8', marginTop: 1 }}>{exp.location}</div>
                          )}
                        </div>
                        <div style={{
                          flexShrink: 0,
                          fontSize: 8.5,
                          color: tc,
                          background: `${tc}12`,
                          border: `1px solid ${tc}30`,
                          borderRadius: 20,
                          padding: '2px 8px',
                          fontWeight: 600,
                          whiteSpace: 'nowrap',
                        }}>
                          {dateStr}
                        </div>
                      </div>
                      {exp.description && (
                        <div style={{ marginTop: 6, fontSize: 9.5, color: '#475569', lineHeight: 1.65, whiteSpace: 'pre-line' }}>
                          {exp.description}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <>
              <ABH title="Projects" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {projects.map((proj) => (
                  <div key={proj.id} style={{
                    background: `${tc}06`,
                    border: `1px solid ${tc}18`,
                    borderRadius: 8,
                    padding: '10px 14px',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                      <div style={{ fontWeight: 800, fontSize: 11, color: '#0f172a' }}>{proj.name}</div>
                      {proj.link && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0 }}>
                          <Link2 size={8} style={{ color: tc }} />
                          <span style={{ fontSize: 8.5, color: tc }}>{proj.link}</span>
                        </div>
                      )}
                    </div>
                    {proj.description && (
                      <div style={{ fontSize: 9.5, color: '#475569', lineHeight: 1.6, marginTop: 5 }}>
                        {proj.description}
                      </div>
                    )}
                    {proj.tech && (
                      <div style={{ marginTop: 6, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                        {proj.tech.split(',').map((t, i) => (
                          <span key={i} style={{
                            fontSize: 8,
                            background: `${tc}15`,
                            color: tc,
                            borderRadius: 4,
                            padding: '2px 6px',
                            fontWeight: 600,
                          }}>
                            {t.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Education */}
          {education.length > 0 && (
            <>
              <ABH title="Education" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {education.map((edu) => (
                  <div key={edu.id} style={{
                    borderLeft: `2px solid ${tc}30`,
                    paddingLeft: 12,
                  }}>
                    <div style={{ fontWeight: 800, fontSize: 11, color: '#0f172a' }}>{edu.degree}</div>
                    <div style={{ fontSize: 10, color: tc, fontWeight: 600, marginTop: 1 }}>{edu.school}</div>
                    <div style={{ display: 'flex', gap: 12, marginTop: 3, flexWrap: 'wrap' }}>
                      {(edu.startDate || edu.endDate) && (
                        <span style={{ fontSize: 9, color: '#64748b' }}>
                          {edu.startDate}{edu.endDate ? ` — ${edu.endDate}` : ''}
                        </span>
                      )}
                      {edu.gpa && (
                        <span style={{ fontSize: 9, color: '#64748b' }}>GPA: {edu.gpa}</span>
                      )}
                    </div>
                    {edu.achievements && (
                      <div style={{ fontSize: 9, color: '#475569', marginTop: 3, fontStyle: 'italic' }}>
                        {edu.achievements}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* RIGHT SIDEBAR — 40% */}
        <div style={{
          flex: '0 0 40%',
          background: '#f8fafc',
          borderLeft: `1px solid ${tc}15`,
          padding: '4px 24px 0 20px',
          minWidth: 0,
        }}>

          {/* Skills */}
          {skills.length > 0 && (
            <>
              <ABH title="Skills" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {skills.map((sk) => {
                  const level = typeof sk.level === 'number' ? sk.level : 80
                  return (
                    <div key={sk.id}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                        <span style={{ fontSize: 9.5, fontWeight: 600, color: '#334155' }}>{sk.name}</span>
                        <span style={{ fontSize: 8.5, color: tc, fontWeight: 700 }}>{level}%</span>
                      </div>
                      <div style={{
                        height: 5,
                        background: `${tc}15`,
                        borderRadius: 3,
                        overflow: 'hidden',
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${level}%`,
                          background: `linear-gradient(90deg, ${tc}, ${tc}80)`,
                          borderRadius: 3,
                          transition: 'width 0.3s ease',
                        }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <>
              <ABH title="Languages" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {languages.map((lang) => (
                  <div key={lang.id} style={{
                    background: '#ffffff',
                    border: `1px solid ${tc}25`,
                    borderRadius: 20,
                    padding: '4px 10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                    <span style={{ fontSize: 9.5, fontWeight: 700, color: '#0f172a' }}>{lang.name}</span>
                    {lang.proficiency && (
                      <span style={{ fontSize: 8, color: tc, fontWeight: 500 }}>{lang.proficiency}</span>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <>
              <ABH title="Certifications" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {certifications.map((cert) => (
                  <div key={cert.id} style={{
                    background: '#ffffff',
                    border: `1px solid ${tc}20`,
                    borderRadius: 7,
                    padding: '8px 10px',
                  }}>
                    <div style={{ fontWeight: 700, fontSize: 9.5, color: '#0f172a' }}>{cert.name}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                      {cert.issuer && (
                        <span style={{ fontSize: 8.5, color: '#64748b' }}>{cert.issuer}</span>
                      )}
                      {cert.date && (
                        <span style={{ fontSize: 8, color: tc, fontWeight: 600 }}>
                          {cert.date.slice(0, 7)}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Interests */}
          {interests.length > 0 && (
            <>
              <ABH title="Interests" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {interests.map((int, idx) => {
                  const pillColors = ['#f0fdf4', '#eff6ff', '#fdf4ff', '#fff7ed', '#f0fdfa']
                  const textColors = ['#166534', '#1e40af', '#7e22ce', '#9a3412', '#0f766e']
                  const ci = idx % pillColors.length
                  return (
                    <span key={int.id} style={{
                      fontSize: 8.5,
                      fontWeight: 600,
                      background: pillColors[ci],
                      color: textColors[ci],
                      borderRadius: 20,
                      padding: '3px 10px',
                      border: `1px solid ${textColors[ci]}20`,
                    }}>
                      {int.name}
                    </span>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
