import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Sophia Williams',
  jobTitle: 'Creative Director & Brand Strategist',
  email: 'sophia@email.com',
  phone: '+1 (555) 987-6543',
  location: 'New York, NY',
  website: 'sophiawilliams.co',
  linkedin: 'linkedin.com/in/sophiaw',
  github: 'github.com/sophiaw',
  summary: 'Award-winning Creative Director with 8+ years shaping brand identities for Fortune 500 companies. Passionate about merging data-driven insights with compelling visual storytelling. Led teams of 20+ creatives across 3 continents, delivering campaigns that generated $50M+ in revenue.',
  experience: [
    { id: 'e1', role: 'Creative Director', company: 'Ogilvy & Mather', location: 'New York', startDate: 'Jan 2020', endDate: '', current: true, description: '• Directed global rebrand for 3 Fortune 500 clients, increasing brand recognition by 67%\n• Built and mentored a 22-person creative team across NY, London, and Singapore\n• Launched award-winning "Human First" campaign — Cannes Lions Gold 2023\n• Managed $12M annual creative budget with 98% on-time delivery rate' },
    { id: 'e2', role: 'Senior Art Director', company: 'BBDO Worldwide', location: 'New York', startDate: 'Mar 2017', endDate: 'Dec 2019', current: false, description: '• Conceptualized and executed 40+ integrated campaigns across digital and print\n• Grew client retention rate from 72% to 94% through elevated creative quality\n• Won 8 industry awards including D&AD Pencil and One Show Merit' },
    { id: 'e3', role: 'Art Director', company: 'Wieden+Kennedy', location: 'Portland', startDate: 'Jun 2015', endDate: 'Feb 2017', current: false, description: '• Developed visual identity systems for Nike, Coca-Cola, and Delta Airlines\n• Collaborated with directors on 6 Super Bowl commercials' },
  ],
  education: [
    { id: 'ed1', degree: 'MFA in Graphic Design', school: 'Yale School of Art', startDate: '2013', endDate: '2015', gpa: '4.0/4.0', achievements: 'Valedictorian · Dean\'s Award for Excellence' },
    { id: 'ed2', degree: 'BFA in Visual Communication', school: 'Parsons School of Design', startDate: '2009', endDate: '2013', gpa: '3.95/4.0', achievements: 'Summa Cum Laude' },
  ],
  skills: [
    { id: 's1', name: 'Brand Strategy', level: 97 },
    { id: 's2', name: 'Creative Direction', level: 95 },
    { id: 's3', name: 'Adobe Creative Suite', level: 98 },
    { id: 's4', name: 'Figma / Sketch', level: 90 },
    { id: 's5', name: 'Campaign Management', level: 88 },
    { id: 's6', name: 'Team Leadership', level: 93 },
  ],
  projects: [
    { id: 'p1', name: 'Human First — Cannes Lions Gold', description: 'Global awareness campaign reaching 200M+ people across 45 countries. Increased client NPS by 34 points.', tech: 'Brand Strategy, Film, Digital, OOH', link: 'humanfirst.campaign' },
    { id: 'p2', name: 'Rebrand: TechCorp Global', description: 'Complete visual identity overhaul for $2B tech company. New brand system adopted across 60 markets.', tech: 'Identity Design, Motion, Guidelines', link: 'techcorp.com' },
  ],
  certifications: [
    { id: 'c1', name: 'Google UX Design Professional', issuer: 'Google', date: '2023-03' },
    { id: 'c2', name: 'HubSpot Content Marketing', issuer: 'HubSpot', date: '2022-09' },
  ],
  languages: [
    { id: 'l1', name: 'English', proficiency: 'Native' },
    { id: 'l2', name: 'French', proficiency: 'Fluent' },
    { id: 'l3', name: 'Spanish', proficiency: 'Intermediate' },
  ],
  interests: [
    { id: 'i1', name: 'Photography' },
    { id: 'i2', name: 'Watercolor Painting' },
    { id: 'i3', name: 'Jazz Piano' },
    { id: 'i4', name: 'Hiking' },
  ],
}

function g(val, fallback) {
  return val && String(val).trim() !== '' ? val : fallback
}

export default function AuroraProTemplate({ resume }) {
  const {
    personalInfo = {}, experience = [], education = [], skills = [],
    projects = [], certifications = [], languages = [], interests = [],
    themeColor = '#a78bfa', fontFamily,
  } = resume

  const tc = themeColor
  const ff = fontFamily || 'Arial, sans-serif'

  // Soft pastel derived from themeColor — used for backgrounds
  const name     = g(personalInfo.name,     S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email    = g(personalInfo.email,    S.email)
  const phone    = g(personalInfo.phone,    S.phone)
  const location = g(personalInfo.location, S.location)
  const website  = g(personalInfo.website,  S.website)
  const linkedin = g(personalInfo.linkedin, S.linkedin)
  const github   = g(personalInfo.github,   S.github)
  const summary  = g(personalInfo.summary,  S.summary)
  const photo    = personalInfo.photo || ''

  const exp   = experience.length     > 0 ? experience     : S.experience
  const edu   = education.length      > 0 ? education      : S.education
  const skl   = skills.length         > 0 ? skills         : S.skills
  const prj   = projects.length       > 0 ? projects       : S.projects
  const cert  = certifications.length > 0 ? certifications : S.certifications
  const lang  = languages.length      > 0 ? languages      : S.languages
  const intr  = interests.length      > 0 ? interests      : S.interests

  // Soft color palette
  const softBg    = '#fdf8ff'
  const softCard  = '#ffffff'
  const softBorder = `${tc}22`
  const accentBg  = `${tc}0d`
  const accentMid = `${tc}18`

  return (
    <div style={{
      background: softBg,
      fontFamily: ff,
      fontSize: '10px',
      lineHeight: 1.6,
      width: 794,
      minHeight: 1123,
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* ── Decorative background blobs ── */}
      <div style={{ position: 'absolute', top: -60, right: -60, width: 280, height: 280, borderRadius: '50%', background: `${tc}12`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 120, right: 40, width: 120, height: 120, borderRadius: '50%', background: `${tc}08`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 200, left: -40, width: 200, height: 200, borderRadius: '50%', background: `${tc}08`, pointerEvents: 'none' }} />

      {/* ══════════════════════════════════════
          HEADER
      ══════════════════════════════════════ */}
      <div style={{
        background: `linear-gradient(135deg, ${tc}18 0%, ${tc}0a 50%, transparent 100%)`,
        borderBottom: `2px solid ${tc}20`,
        padding: '32px 36px 24px',
        position: 'relative',
      }}>
        {/* Top accent bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 4,
          background: `linear-gradient(90deg, ${tc} 0%, ${tc}aa 50%, ${tc}44 100%)`,
        }} />

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 22 }}>
          {/* Photo */}
          <div style={{ flexShrink: 0, position: 'relative' }}>
            <div style={{
              width: 88, height: 88, borderRadius: 20,
              background: photo ? 'transparent' : `linear-gradient(135deg, ${tc}40, ${tc}20)`,
              border: `3px solid ${tc}30`,
              overflow: 'hidden',
              boxShadow: `0 8px 24px ${tc}20`,
            }}>
              {photo
                ? <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 900, color: tc }}>{name.charAt(0)}</div>
              }
            </div>
            {/* Online dot */}
            <div style={{ position: 'absolute', bottom: 4, right: 4, width: 14, height: 14, borderRadius: '50%', background: '#86efac', border: '2px solid white', boxShadow: '0 0 6px rgba(134,239,172,0.6)' }} />
          </div>

          {/* Name & title */}
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontSize: 26, fontWeight: 900, color: '#1e1b2e',
              margin: '0 0 3px', letterSpacing: '-0.02em', lineHeight: 1.1,
            }}>{name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ height: 2, width: 24, borderRadius: 1, background: tc }} />
              <p style={{ fontSize: 10.5, color: tc, fontWeight: 700, margin: 0, letterSpacing: '0.04em' }}>{jobTitle}</p>
            </div>

            {/* Contact pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px 8px' }}>
              {[
                { icon: Mail,      val: email },
                { icon: Phone,     val: phone },
                { icon: MapPin,    val: location },
                { icon: Globe,     val: website },
                { icon: Link2,     val: linkedin },
                { icon: GitBranch, val: github },
              ].filter(c => c.val).map(({ icon: Icon, val }, i) => (
                <span key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  padding: '3px 10px', borderRadius: 20,
                  background: softCard, border: `1px solid ${tc}25`,
                  fontSize: 8.5, color: '#4a4560',
                  boxShadow: `0 1px 4px ${tc}10`,
                }}>
                  <Icon size={8} color={tc} />
                  {val}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        {summary && (
          <div style={{
            marginTop: 16,
            padding: '12px 16px',
            background: softCard,
            borderRadius: 12,
            border: `1px solid ${tc}18`,
            boxShadow: `0 2px 12px ${tc}0a`,
          }}>
            <p style={{ fontSize: 9.5, color: '#4a4560', lineHeight: 1.85, margin: 0 }}>{summary}</p>
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════
          BODY — two columns
      ══════════════════════════════════════ */}
      <div style={{ display: 'flex', gap: 0 }}>

        {/* ── LEFT MAIN COLUMN ── */}
        <div style={{ flex: 1, padding: '22px 24px 32px 36px', borderRight: `1px solid ${tc}15` }}>

          {/* EXPERIENCE */}
          <SectionHeader tc={tc}>Experience</SectionHeader>
          {exp.map((e, i) => (
            <div key={e.id} style={{
              marginBottom: 16,
              padding: '12px 14px',
              background: softCard,
              borderRadius: 12,
              border: `1px solid ${tc}15`,
              boxShadow: `0 2px 8px ${tc}08`,
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Left accent */}
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: `linear-gradient(to bottom, ${tc}, ${tc}50)`, borderRadius: '3px 0 0 3px' }} />
              <div style={{ paddingLeft: 4 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 11, color: '#1e1b2e', margin: 0 }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '2px 0' }}>
                      {e.company}
                      {e.location && <span style={{ color: '#9ca3af', fontWeight: 400 }}> · {e.location}</span>}
                    </p>
                  </div>
                  <span style={{
                    fontSize: 7.5, color: tc, fontWeight: 700,
                    background: accentBg, border: `1px solid ${tc}25`,
                    padding: '2px 8px', borderRadius: 20, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0,
                  }}>
                    {e.startDate} — {e.current ? 'Present' : e.endDate}
                  </span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#5a5470', fontSize: 9, lineHeight: 1.75, margin: '2px 0 0' }}>{l}</p>
                ))}
              </div>
            </div>
          ))}

          {/* PROJECTS */}
          {prj.length > 0 && (
            <>
              <SectionHeader tc={tc}>Projects</SectionHeader>
              {prj.map(p => (
                <div key={p.id} style={{
                  marginBottom: 12,
                  padding: '11px 14px',
                  background: `linear-gradient(135deg, ${softCard}, ${accentBg})`,
                  borderRadius: 12,
                  border: `1px solid ${tc}18`,
                  boxShadow: `0 2px 8px ${tc}08`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                    <p style={{ fontWeight: 800, fontSize: 10.5, color: '#1e1b2e', margin: 0 }}>{p.name}</p>
                    {p.link && <span style={{ fontSize: 8, color: tc, fontWeight: 600 }}>{p.link}</span>}
                  </div>
                  {p.tech && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 5 }}>
                      {p.tech.split(',').map((t, ti) => (
                        <span key={ti} style={{
                          fontSize: 7.5, padding: '1px 7px', borderRadius: 20,
                          background: accentMid, color: tc, fontWeight: 700,
                          border: `1px solid ${tc}25`,
                        }}>{t.trim()}</span>
                      ))}
                    </div>
                  )}
                  {p.description && <p style={{ fontSize: 9, color: '#5a5470', margin: 0, lineHeight: 1.7 }}>{p.description}</p>}
                </div>
              ))}
            </>
          )}

          {/* EDUCATION — page break before this in PDF */}
          <div data-page-break="true" style={{ pageBreakBefore: 'always', breakBefore: 'page' }}>
          <SectionHeader tc={tc}>Education</SectionHeader>
          {edu.map(e => (
            <div key={e.id} style={{
              marginBottom: 12,
              padding: '11px 14px',
              background: softCard,
              borderRadius: 12,
              border: `1px solid ${tc}15`,
              boxShadow: `0 2px 8px ${tc}08`,
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: `linear-gradient(to bottom, ${tc}80, ${tc}30)`, borderRadius: '3px 0 0 3px' }} />
              <div style={{ paddingLeft: 4 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <p style={{ fontWeight: 800, fontSize: 10.5, color: '#1e1b2e', margin: 0 }}>{e.degree}</p>
                  <span style={{ fontSize: 8, color: '#9ca3af', whiteSpace: 'nowrap', marginLeft: 8 }}>{e.startDate} — {e.endDate}</span>
                </div>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '2px 0' }}>{e.school}</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {e.gpa && <span style={{ fontSize: 8.5, color: '#6b7280' }}>GPA: <strong style={{ color: '#1e1b2e' }}>{e.gpa}</strong></span>}
                  {e.achievements && <span style={{ fontSize: 8.5, color: tc, fontWeight: 600 }}>{e.achievements}</span>}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* ── RIGHT SIDEBAR ── */}
        <div style={{ width: 210, flexShrink: 0, padding: '22px 20px 32px 18px' }}>

          {/* SKILLS */}
          <SectionHeader tc={tc}>Skills</SectionHeader>
          <div style={{
            background: softCard, borderRadius: 14,
            border: `1px solid ${tc}15`, padding: '12px 14px',
            boxShadow: `0 2px 12px ${tc}08`, marginBottom: 16,
          }}>
            {skl.map((s, i) => (
              <div key={s.id} style={{ marginBottom: i < skl.length - 1 ? 10 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 9, color: '#1e1b2e', fontWeight: 600 }}>{s.name}</span>
                  <span style={{ fontSize: 7.5, color: tc, fontWeight: 700 }}>{s.level}%</span>
                </div>
                <div style={{ height: 6, background: `${tc}15`, borderRadius: 99, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    background: `linear-gradient(90deg, ${tc}60, ${tc})`,
                    borderRadius: 99,
                    width: `${s.level}%`,
                    boxShadow: `0 0 6px ${tc}40`,
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* LANGUAGES */}
          {lang.length > 0 && (
            <>
              <SectionHeader tc={tc}>Languages</SectionHeader>
              <div style={{
                background: softCard, borderRadius: 14,
                border: `1px solid ${tc}15`, padding: '10px 14px',
                boxShadow: `0 2px 12px ${tc}08`, marginBottom: 16,
              }}>
                {lang.map((l, i) => (
                  <div key={l.id} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    paddingBottom: i < lang.length - 1 ? 7 : 0,
                    marginBottom: i < lang.length - 1 ? 7 : 0,
                    borderBottom: i < lang.length - 1 ? `1px solid ${tc}10` : 'none',
                  }}>
                    <span style={{ fontSize: 9, color: '#1e1b2e', fontWeight: 600 }}>{l.name}</span>
                    <span style={{
                      fontSize: 7.5, padding: '2px 8px', borderRadius: 20,
                      background: accentBg, color: tc, fontWeight: 700,
                      border: `1px solid ${tc}20`,
                    }}>{l.proficiency}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* CERTIFICATIONS */}
          {cert.length > 0 && (
            <>
              <SectionHeader tc={tc}>Certifications</SectionHeader>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                {cert.map(c => (
                  <div key={c.id} style={{
                    padding: '9px 12px',
                    background: softCard,
                    borderRadius: 10,
                    border: `1px solid ${tc}15`,
                    boxShadow: `0 1px 6px ${tc}08`,
                  }}>
                    <p style={{ fontWeight: 700, fontSize: 9, color: '#1e1b2e', margin: '0 0 2px' }}>{c.name}</p>
                    <p style={{ fontSize: 8, color: tc, fontWeight: 600, margin: 0 }}>{c.issuer}</p>
                    <p style={{ fontSize: 7.5, color: '#9ca3af', margin: '1px 0 0' }}>{c.date}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* INTERESTS */}
          {intr.length > 0 && (
            <>
              <SectionHeader tc={tc}>Interests</SectionHeader>
              <div style={{
                background: softCard, borderRadius: 14,
                border: `1px solid ${tc}15`, padding: '10px 12px',
                boxShadow: `0 2px 12px ${tc}08`,
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {intr.map(i => (
                    <span key={i.id} style={{
                      fontSize: 8, padding: '3px 9px', borderRadius: 20,
                      background: accentBg, color: tc, fontWeight: 600,
                      border: `1px solid ${tc}22`,
                    }}>✦ {i.name}</span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Bottom accent bar ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${tc}44, ${tc}, ${tc}44)`,
      }} />
    </div>
  )
}

function SectionHeader({ tc, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, marginTop: 18 }}>
      <div style={{
        width: 6, height: 6, borderRadius: 2,
        background: tc, transform: 'rotate(45deg)', flexShrink: 0,
      }} />
      <h2 style={{
        fontSize: 8, fontWeight: 900, textTransform: 'uppercase',
        letterSpacing: '0.22em', color: '#1e1b2e', margin: 0,
      }}>{children}</h2>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${tc}30, transparent)` }} />
    </div>
  )
}
