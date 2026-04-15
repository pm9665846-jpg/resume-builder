import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Rahul Kapoor', jobTitle: 'Vice President — Investment Banking',
  email: 'rahul@email.com', phone: '+91 98765 99887',
  location: 'Mumbai, India', website: 'rahulkapoor.finance',
  linkedin: 'linkedin.com/in/rahulkapoor', github: 'github.com/rahulkapoor',
  summary: 'Senior investment banker with 11+ years executing M&A, IPOs, and capital markets transactions worth $15B+. Led 40+ deals across technology, healthcare, and consumer sectors. CFA charterholder with deep expertise in financial modeling and deal structuring.',
  experience: [
    { id: 'e1', role: 'Vice President', company: 'Goldman Sachs', location: 'Mumbai', startDate: 'Jan 2020', endDate: '', current: true, description: '• Led $2.3B acquisition of TechCorp India — largest tech M&A in India 2022\n• Managed deal team of 8 analysts and associates\n• Originated 12 new mandates worth $800M+ in fees' },
    { id: 'e2', role: 'Associate', company: 'Morgan Stanley', location: 'Mumbai', startDate: 'Jul 2016', endDate: 'Dec 2019', current: false, description: '• Executed 15 IPOs raising $4.2B total across BSE and NSE\n• Built financial models for 50+ M&A transactions\n• Ranked #1 associate in 2018 and 2019 performance reviews' },
    { id: 'e3', role: 'Analyst', company: 'JP Morgan', location: 'Mumbai', startDate: 'Jun 2013', endDate: 'Jun 2016', current: false, description: '• Supported execution of $6B infrastructure bond issuance\n• Prepared pitch books and CIMs for 30+ transactions' },
  ],
  education: [{ id: 'ed1', degree: 'MBA — Finance', school: 'IIM Ahmedabad', startDate: '2011', endDate: '2013', gpa: '3.95/4.0', achievements: 'Gold Medal · Best Finance Student' }],
  skills: [{ id: 's1', name: 'Financial Modeling', level: 97 }, { id: 's2', name: 'M&A Execution', level: 95 }, { id: 's3', name: 'Valuation', level: 96 }, { id: 's4', name: 'Capital Markets', level: 90 }, { id: 's5', name: 'Excel / VBA', level: 92 }, { id: 's6', name: 'Bloomberg', level: 88 }],
  projects: [{ id: 'p1', name: 'TechCorp India Acquisition', description: 'Led buy-side advisory for $2.3B acquisition. Structured deal with earn-out provisions and regulatory approvals across 3 jurisdictions.', tech: 'M&A, Due Diligence, Regulatory', link: 'goldmansachs.com/deals' }],
  certifications: [{ id: 'c1', name: 'CFA Charterholder', issuer: 'CFA Institute', date: '2017-09' }, { id: 'c2', name: 'FRM Certified', issuer: 'GARP', date: '2016-05' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }, { id: 'l3', name: 'Punjabi', proficiency: 'Native' }],
  interests: [{ id: 'i1', name: 'Cricket' }, { id: 'i2', name: 'Chess' }, { id: 'i3', name: 'Investing' }, { id: 'i4', name: 'Travel' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

function SurgeSH({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, marginTop: 18 }}>
      <div style={{ width: 20, height: 20, borderRadius: 6, background: `${tc}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <div style={{ width: 8, height: 8, borderRadius: 2, background: tc, transform: 'rotate(45deg)' }} />
      </div>
      <span style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#0f172a' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: `${tc}20` }} />
    </div>
  )
}

function SurgeBand({ tc }) {
  return (
    <div style={{ margin: '16px -20px', position: 'relative', height: 32 }}>
      <svg viewBox="0 0 494 32" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
        <path d="M0,16 C80,0 160,28 240,14 C320,0 400,24 494,12 L494,32 L0,32 Z" fill={tc} opacity="0.08" />
        <path d="M0,20 C100,6 200,28 300,16 C380,6 440,22 494,14 L494,32 L0,32 Z" fill={tc} opacity="0.12" />
      </svg>
    </div>
  )
}

export default function SurgeTemplate({ resume }) {
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

  const tc         = g(r.themeColor, '#1d4ed8')
  const fontFamily = g(r.fontFamily, "'Inter', 'Helvetica Neue', Arial, sans-serif")

  const contactItems = [
    { icon: Mail,      val: email    },
    { icon: Phone,     val: phone    },
    { icon: MapPin,    val: location },
    { icon: Globe,     val: website  },
    { icon: Link2,     val: linkedin },
    { icon: GitBranch, val: github   },
  ].filter(c => c.val && String(c.val).trim() !== '')

  const proficiencyDots = (proficiency) => {
    const map = { Native: 5, Fluent: 4, Advanced: 4, Intermediate: 3, Beginner: 2, Elementary: 1 }
    return map[proficiency] || 3
  }

  const SIDEBAR_W = 302  // ~38% of 794
  const MAIN_W    = 492  // ~62% of 794

  return (
    <div style={{
      width: 794,
      minHeight: 1123,
      fontFamily,
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
    }}>

      {/* ══════════════════════════════════════════
          LEFT SIDEBAR — dark background
      ══════════════════════════════════════════ */}
      <div style={{
        width: SIDEBAR_W,
        minHeight: 1123,
        background: '#0f172a',
        position: 'relative',
        flexShrink: 0,
        overflow: 'hidden',
      }}>

        {/* Sidebar content */}
        <div style={{ padding: '32px 24px 32px 24px', position: 'relative', zIndex: 2 }}>

          {/* Photo */}
          {photo ? (
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
              <img
                src={photo}
                alt={name}
                style={{
                  width: 72, height: 72,
                  borderRadius: '50%',
                  border: '3px solid rgba(255,255,255,0.25)',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
              <div style={{
                width: 72, height: 72,
                borderRadius: '50%',
                border: '3px solid rgba(255,255,255,0.15)',
                background: `${tc}20`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 22, fontWeight: 800, color: tc }}>
                  {name.charAt(0)}
                </span>
              </div>
            </div>
          )}

          {/* Name */}
          <div style={{ textAlign: 'center', marginBottom: 4 }}>
            <div style={{ fontSize: 17, fontWeight: 800, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
              {name}
            </div>
            <div style={{ fontSize: 8.5, fontWeight: 600, color: tc, marginTop: 5, textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1.4 }}>
              {jobTitle}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '14px 0' }} />

          {/* Contact */}
          {contactItems.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 7.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 8 }}>
                Contact
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {contactItems.map(({ icon: Icon, val }, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: 5,
                      background: `${tc}20`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={10} color={tc} />
                    </div>
                    <span style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.7)', lineHeight: 1.3, wordBreak: 'break-all' }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '14px 0' }} />

          {/* Skills — thin progress bars */}
          {skills.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 7.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 10 }}>
                Skills
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {skills.map(sk => (
                  <div key={sk.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                      <span style={{ fontSize: 8, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{sk.name}</span>
                      <span style={{ fontSize: 7, color: tc, fontWeight: 700 }}>{sk.level || 80}%</span>
                    </div>
                    <div style={{ height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                      <div style={{
                        height: '100%',
                        width: `${sk.level || 80}%`,
                        background: tc,
                        borderRadius: 2,
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '14px 0' }} />

          {/* Languages — proficiency dots */}
          {languages.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 7.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 10 }}>
                Languages
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {languages.map(lang => {
                  const filled = proficiencyDots(lang.proficiency)
                  return (
                    <div key={lang.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span style={{ fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>{lang.name}</span>
                        <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.4)', marginLeft: 5 }}>{lang.proficiency}</span>
                      </div>
                      <div style={{ display: 'flex', gap: 3 }}>
                        {[1,2,3,4,5].map(d => (
                          <div key={d} style={{
                            width: 7, height: 7, borderRadius: '50%',
                            background: d <= filled ? tc : 'rgba(255,255,255,0.12)',
                          }} />
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <>
              <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '14px 0' }} />
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontSize: 7.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 10 }}>
                  Certifications
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {certifications.map(cert => (
                    <div key={cert.id} style={{
                      background: `${tc}15`,
                      borderRadius: 6,
                      padding: '7px 10px',
                      borderLeft: `2px solid ${tc}`,
                    }}>
                      <div style={{ fontSize: 8, fontWeight: 700, color: '#ffffff', lineHeight: 1.3 }}>{cert.name}</div>
                      <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>
                        {cert.issuer}{cert.date ? ` · ${cert.date}` : ''}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Interests — small pills */}
          {interests && interests.length > 0 && (
            <>
              <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '14px 0' }} />
              <div>
                <div style={{ fontSize: 7.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 10 }}>
                  Interests
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {interests.map(int => (
                    <span key={int.id} style={{
                      fontSize: 7.5, fontWeight: 600,
                      color: 'rgba(255,255,255,0.7)',
                      background: 'rgba(255,255,255,0.08)',
                      borderRadius: 20,
                      padding: '3px 9px',
                    }}>{int.name}</span>
                  ))}
                </div>
              </div>
            </>
          )}

        </div>

        {/* ── WAVY RIGHT EDGE OF SIDEBAR ── */}
        <div style={{ position: 'absolute', right: -1, top: 0, bottom: 0, width: 40, overflow: 'hidden' }}>
          <svg viewBox="0 0 40 1123" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
            <path d="M40,0 C20,80 40,160 20,240 C0,320 40,400 20,480 C0,560 40,640 20,720 C0,800 40,880 20,960 C0,1040 40,1100 40,1123 L40,0 Z" fill="#0f172a" />
            <path d="M40,0 C25,70 40,150 22,230 C5,310 40,390 22,470 C5,550 40,630 22,710 C5,790 40,870 22,950 C5,1030 40,1090 40,1123 L40,0 Z" fill={tc} opacity="0.3" />
          </svg>
        </div>

      </div>

      {/* ══════════════════════════════════════════
          MAIN CONTENT — white background
      ══════════════════════════════════════════ */}
      <div style={{
        flex: 1,
        minHeight: 1123,
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* ── CONCENTRIC CIRCLE DECORATIONS — top-right ── */}
        <div style={{ position: 'absolute', top: -50, right: -50, pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'relative', width: 180, height: 180 }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: 180, height: 180, borderRadius: '50%', background: `${tc}05` }} />
            <div style={{ position: 'absolute', top: 30, left: 30, width: 120, height: 120, borderRadius: '50%', background: `${tc}04` }} />
            <div style={{ position: 'absolute', top: 60, left: 60, width: 60, height: 60, borderRadius: '50%', background: `${tc}06` }} />
          </div>
        </div>

        {/* Main content inner padding */}
        <div style={{ padding: '28px 28px 32px 20px', position: 'relative', zIndex: 1 }}>

          {/* ── SUMMARY ── */}
          {summary && (
            <div style={{ marginBottom: 4 }}>
              <SurgeSH title="Profile Summary" tc={tc} />
              <div style={{
                background: `${tc}06`,
                borderRadius: 8,
                padding: '11px 14px',
                borderLeft: `3px solid ${tc}35`,
              }}>
                <p style={{ fontSize: 8.5, color: '#475569', lineHeight: 1.75, margin: 0 }}>{summary}</p>
              </div>
            </div>
          )}

          {/* ── EXPERIENCE ── */}
          {experience.length > 0 && (
            <div>
              <SurgeSH title="Experience" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {experience.map(exp => (
                  <div key={exp.id} style={{
                    background: '#ffffff',
                    borderRadius: 8,
                    padding: '10px 12px',
                    borderLeft: `3px solid ${tc}`,
                    boxShadow: `0 1px 6px rgba(0,0,0,0.06), 0 0 0 1px ${tc}10`,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                      <div>
                        <div style={{ fontSize: 9.5, fontWeight: 800, color: '#0f172a', lineHeight: 1.3 }}>{exp.company}</div>
                        <div style={{ fontSize: 8.5, fontWeight: 600, color: tc, marginTop: 1 }}>
                          {exp.role}{exp.location ? ` · ${exp.location}` : ''}
                        </div>
                      </div>
                      <div style={{
                        fontSize: 7, color: '#64748b', fontWeight: 600,
                        background: `${tc}10`, borderRadius: 20,
                        padding: '2px 8px', whiteSpace: 'nowrap', flexShrink: 0,
                        border: `1px solid ${tc}20`,
                      }}>
                        {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                      </div>
                    </div>
                    {exp.description && (
                      <div style={{ marginTop: 6 }}>
                        {exp.description.split('\n').filter(Boolean).map((line, i) => (
                          <div key={i} style={{ fontSize: 7.5, color: '#475569', lineHeight: 1.65, marginBottom: 1 }}>{line}</div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── WAVE BAND between Experience and Projects ── */}
          <SurgeBand tc={tc} />

          {/* ── PROJECTS ── */}
          {projects.length > 0 && (
            <div>
              <SurgeSH title="Projects" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {projects.map(proj => (
                  <div key={proj.id} style={{
                    background: `${tc}05`,
                    borderRadius: 8,
                    padding: '10px 13px',
                    border: `1px solid ${tc}15`,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                      <span style={{ fontSize: 9, fontWeight: 800, color: '#0f172a' }}>{proj.name}</span>
                      {proj.link && (
                        <span style={{ fontSize: 7, color: tc, fontWeight: 600 }}>{proj.link}</span>
                      )}
                    </div>
                    {proj.description && (
                      <p style={{ fontSize: 7.5, color: '#475569', lineHeight: 1.65, margin: '0 0 6px' }}>{proj.description}</p>
                    )}
                    {proj.tech && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                        {proj.tech.split(',').map((t, i) => (
                          <span key={i} style={{
                            fontSize: 7, fontWeight: 600, color: tc,
                            background: `${tc}12`, borderRadius: 10,
                            padding: '2px 7px',
                            border: `1px solid ${tc}20`,
                          }}>{t.trim()}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── EDUCATION ── */}
          {education.length > 0 && (
            <div>
              <SurgeSH title="Education" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {education.map(ed => (
                  <div key={ed.id} style={{
                    background: '#ffffff',
                    borderRadius: 8,
                    padding: '10px 12px',
                    borderLeft: `3px solid ${tc}`,
                    boxShadow: `0 1px 6px rgba(0,0,0,0.06), 0 0 0 1px ${tc}10`,
                  }}>
                    <div style={{ fontSize: 9.5, fontWeight: 800, color: '#0f172a', lineHeight: 1.3 }}>{ed.degree}</div>
                    <div style={{ fontSize: 8.5, fontWeight: 600, color: tc, marginTop: 2 }}>{ed.school}</div>
                    <div style={{ fontSize: 7.5, color: '#64748b', marginTop: 3 }}>
                      {ed.startDate}{ed.endDate ? ` – ${ed.endDate}` : ''}
                      {ed.gpa ? ` · GPA: ${ed.gpa}` : ''}
                    </div>
                    {ed.achievements && (
                      <div style={{ fontSize: 7.5, color: tc, fontWeight: 600, marginTop: 3 }}>🏅 {ed.achievements}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── WAVE BAND between Education and bottom ── */}
          <SurgeBand tc={tc} />

        </div>
      </div>

    </div>
  )
}
