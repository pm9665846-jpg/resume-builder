import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Kavya Reddy', jobTitle: 'Senior Marketing Manager',
  email: 'kavya@email.com', phone: '+91 98765 44556',
  location: 'Hyderabad, India', website: 'kavyareddy.marketing',
  linkedin: 'linkedin.com/in/kavyareddy', github: 'github.com/kavyareddy',
  summary: 'Results-driven marketing leader with 8+ years building brand equity and driving growth for consumer tech and FMCG brands. Generated ₹200Cr+ in attributed revenue through integrated campaigns. Expert in digital marketing, brand strategy, and data-driven decision making.',
  experience: [
    { id: 'e1', role: 'Senior Marketing Manager', company: 'Swiggy', location: 'Hyderabad', startDate: 'Apr 2020', endDate: '', current: true, description: '• Led brand marketing for Swiggy Instamart — grew from 0 to ₹800Cr GMV in 2 years\n• Managed ₹50Cr annual marketing budget across digital and offline channels\n• Built and led 15-person marketing team across brand, performance, and content' },
    { id: 'e2', role: 'Marketing Manager', company: 'Myntra', location: 'Bengaluru', startDate: 'Jun 2017', endDate: 'Mar 2020', current: false, description: '• Drove 45% YoY growth in new user acquisition through performance marketing\n• Launched "End of Reason Sale" campaign — 5M+ orders in 48 hours\n• Reduced CAC by 32% through channel mix optimization' },
    { id: 'e3', role: 'Brand Executive', company: 'HUL', location: 'Mumbai', startDate: 'Jul 2015', endDate: 'May 2017', current: false, description: '• Managed brand P&L for Dove India — ₹400Cr brand\n• Executed 3 national TV campaigns with 80M+ reach' },
  ],
  education: [{ id: 'ed1', degree: 'MBA — Marketing', school: 'IIM Bangalore', startDate: '2013', endDate: '2015', gpa: '3.88/4.0', achievements: 'Marketing Club President · Best Campaign Award' }],
  skills: [{ id: 's1', name: 'Brand Strategy', level: 95 }, { id: 's2', name: 'Performance Marketing', level: 92 }, { id: 's3', name: 'Data Analytics', level: 85 }, { id: 's4', name: 'Content Strategy', level: 90 }, { id: 's5', name: 'Campaign Management', level: 94 }, { id: 's6', name: 'Budget Management', level: 88 }],
  projects: [{ id: 'p1', name: 'Instamart Launch Campaign', description: 'Led 360° launch campaign for Swiggy Instamart across 10 cities. Achieved 2M+ app downloads in first month.', tech: 'Digital, OOH, Influencer, PR', link: 'swiggy.com/instamart' }],
  certifications: [{ id: 'c1', name: 'Google Analytics 4', issuer: 'Google', date: '2023-06' }, { id: 'c2', name: 'Meta Blueprint', issuer: 'Meta', date: '2022-09' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Telugu', proficiency: 'Native' }, { id: 'l3', name: 'Hindi', proficiency: 'Fluent' }],
  interests: [{ id: 'i1', name: 'Brand Building' }, { id: 'i2', name: 'Podcasting' }, { id: 'i3', name: 'Badminton' }, { id: 'i4', name: 'Travel' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

// ─── Diagonal SVG Divider ────────────────────────────────────────────────────
function SlashDivider({ tc, flip = false }) {
  return (
    <div style={{ margin: '12px 0', lineHeight: 0 }}>
      <svg viewBox="0 0 700 16" style={{ width: '100%', height: 16 }} preserveAspectRatio="none">
        <defs>
          <linearGradient id={`slashGrad${flip ? 'F' : ''}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={tc} stopOpacity={flip ? '0.6' : '0.1'} />
            <stop offset="50%" stopColor={tc} stopOpacity="0.5" />
            <stop offset="100%" stopColor={tc} stopOpacity={flip ? '0.1' : '0.6'} />
          </linearGradient>
        </defs>
        {/* Main diagonal line */}
        <line
          x1={flip ? '700' : '0'} y1="14"
          x2={flip ? '0' : '700'} y2="2"
          stroke={`url(#slashGrad${flip ? 'F' : ''})`}
          strokeWidth="1.5"
        />
        {/* Shadow diagonal line (offset) */}
        <line
          x1={flip ? '700' : '0'} y1="16"
          x2={flip ? '0' : '700'} y2="4"
          stroke={tc}
          strokeWidth="0.5"
          opacity="0.15"
        />
      </svg>
    </div>
  )
}

// ─── Section Header with diagonal accent bars ────────────────────────────────
function SlashSH({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
      {/* Primary diagonal accent bar */}
      <div style={{
        width: 4, height: 20,
        background: tc,
        transform: 'skewX(-12deg)',
        borderRadius: 1,
        flexShrink: 0,
      }} />
      {/* Secondary diagonal accent bar */}
      <div style={{
        width: 2, height: 14,
        background: `${tc}50`,
        transform: 'skewX(-12deg)',
        borderRadius: 1,
        flexShrink: 0,
        marginLeft: -6,
      }} />
      <span style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#111' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: `${tc}15` }} />
    </div>
  )
}

// ─── Contact icon row item ───────────────────────────────────────────────────
function ContactItem({ icon: Icon, text, tc }) {
  if (!text) return null
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 9, color: '#475569', marginRight: 14 }}>
      <Icon size={9} color={tc} strokeWidth={2.2} />
      {text}
    </span>
  )
}

// ─── Skewed date badge for experience items ──────────────────────────────────
function DateBadge({ text, tc }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '2px 10px',
      background: `${tc}12`,
      color: tc,
      fontSize: 8,
      fontWeight: 700,
      letterSpacing: '0.06em',
      transform: 'skewX(-8deg)',
      borderRadius: 3,
      border: `1px solid ${tc}30`,
      whiteSpace: 'nowrap',
    }}>
      <span style={{ display: 'inline-block', transform: 'skewX(8deg)' }}>{text}</span>
    </span>
  )
}

// ─── Main Template ───────────────────────────────────────────────────────────
export default function SlashTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const ex = resume?.experience || []
  const ed = resume?.education || []
  const sk = resume?.skills || []
  const pr = resume?.projects || []
  const ce = resume?.certifications || []
  const la = resume?.languages || []
  const it = resume?.interests || []
  const tc = resume?.themeColor || '#7c3aed'
  const ff = resume?.fontFamily || "'Inter', 'Helvetica Neue', Arial, sans-serif"

  const name       = g(pi.name,       S.name)
  const jobTitle   = g(pi.jobTitle,   S.jobTitle)
  const email      = g(pi.email,      S.email)
  const phone      = g(pi.phone,      S.phone)
  const location   = g(pi.location,   S.location)
  const website    = g(pi.website,    S.website)
  const linkedin   = g(pi.linkedin,   S.linkedin)
  const github     = g(pi.github,     S.github)
  const summary    = g(pi.summary,    S.summary)
  const photo      = pi.photo || ''

  const experiences    = ex.length    ? ex : S.experience
  const educations     = ed.length    ? ed : S.education
  const skills         = sk.length    ? sk : S.skills
  const projects       = pr.length    ? pr : S.projects
  const certifications = ce.length    ? ce : S.certifications
  const languages      = la.length    ? la : S.languages
  const interests      = it.length    ? it : S.interests

  return (
    <div style={{
      width: 794,
      minHeight: 1123,
      background: '#ffffff',
      fontFamily: ff,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      color: '#1e293b',
      boxSizing: 'border-box',
    }}>

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <div style={{
        background: '#ffffff',
        padding: '32px 40px 20px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 20,
        borderBottom: `3px solid ${tc}18`,
      }}>
        {/* Left: accent bar + name/title/contact */}
        <div style={{ flex: 1 }}>
          {/* Diagonal accent bar beside name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <div style={{
              width: 4, height: 36,
              background: `linear-gradient(180deg, ${tc}, ${tc}60)`,
              transform: 'skewX(-12deg)',
              borderRadius: 2,
              flexShrink: 0,
            }} />
            <div>
              <div style={{ fontSize: 30, fontWeight: 900, color: '#111', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                {name}
              </div>
              <div style={{ fontSize: 11, color: tc, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', marginTop: 3 }}>
                {jobTitle}
              </div>
            </div>
          </div>

          {/* Contact row */}
          <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <ContactItem icon={Mail}     text={email}    tc={tc} />
            <ContactItem icon={Phone}    text={phone}    tc={tc} />
            <ContactItem icon={MapPin}   text={location} tc={tc} />
            <ContactItem icon={Globe}    text={website}  tc={tc} />
            <ContactItem icon={Link2}    text={linkedin} tc={tc} />
            <ContactItem icon={GitBranch} text={github}  tc={tc} />
          </div>

          {/* Summary */}
          {summary && (
            <p style={{
              marginTop: 12,
              fontSize: 9.5,
              color: '#475569',
              fontStyle: 'italic',
              lineHeight: 1.65,
              borderLeft: `2px solid ${tc}30`,
              paddingLeft: 10,
            }}>
              {summary}
            </p>
          )}
        </div>

        {/* Right: photo */}
        {photo && (
          <div style={{ flexShrink: 0 }}>
            <img
              src={photo}
              alt="Profile"
              style={{
                width: 72, height: 72,
                borderRadius: '50%',
                objectFit: 'cover',
                border: `3px solid ${tc}30`,
                display: 'block',
              }}
            />
          </div>
        )}
      </div>

      {/* ── BODY ───────────────────────────────────────────────────────────── */}
      <div style={{ padding: '0 40px 32px' }}>

        {/* Divider 1 — after header */}
        <SlashDivider tc={tc} flip={false} />

        {/* ── EXPERIENCE ─────────────────────────────────────────────────── */}
        {experiences.length > 0 && (
          <div style={{ marginBottom: 4 }}>
            <SlashSH title="Experience" tc={tc} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {experiences.map((exp) => {
                const dateStr = exp.current
                  ? `${exp.startDate} — Present`
                  : `${exp.startDate}${exp.endDate ? ` — ${exp.endDate}` : ''}`
                const lines = (exp.description || '').split('\n').filter(Boolean)
                return (
                  <div key={exp.id} style={{
                    borderLeft: `2px solid ${tc}20`,
                    paddingLeft: 12,
                    paddingTop: 2,
                    paddingBottom: 2,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 800, color: '#111' }}>{exp.company}</div>
                        <div style={{ fontSize: 10, fontWeight: 600, color: tc, marginTop: 1 }}>{exp.role}</div>
                        {exp.location && (
                          <div style={{ fontSize: 8.5, color: '#94a3b8', marginTop: 1 }}>{exp.location}</div>
                        )}
                      </div>
                      <DateBadge text={dateStr} tc={tc} />
                    </div>
                    {lines.length > 0 && (
                      <div style={{ marginTop: 5 }}>
                        {lines.map((line, i) => (
                          <div key={i} style={{ fontSize: 9, color: '#475569', lineHeight: 1.6, marginBottom: 1 }}>{line}</div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Divider 2 */}
        <SlashDivider tc={tc} flip={true} />

        {/* ── SKILLS ─────────────────────────────────────────────────────── */}
        {skills.length > 0 && (
          <div style={{ marginBottom: 4 }}>
            <SlashSH title="Skills" tc={tc} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 24px' }}>
              {skills.map((sk) => (
                <div key={sk.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <span style={{ fontSize: 9, fontWeight: 600, color: '#334155' }}>{sk.name}</span>
                    <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{sk.level}%</span>
                  </div>
                  <div style={{ height: 5, borderRadius: 99, background: `${tc}15`, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${sk.level || 0}%`,
                      borderRadius: 99,
                      background: `linear-gradient(90deg, ${tc}, ${tc}80)`,
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Divider 3 */}
        <SlashDivider tc={tc} flip={false} />

        {/* ── EDUCATION ──────────────────────────────────────────────────── */}
        {educations.length > 0 && (
          <div style={{ marginBottom: 4 }}>
            <SlashSH title="Education" tc={tc} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {educations.map((edu) => (
                <div key={edu.id} style={{
                  background: `${tc}06`,
                  border: `1px solid ${tc}15`,
                  borderRadius: 6,
                  padding: '10px 14px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 800, color: '#111' }}>{edu.degree}</div>
                      <div style={{ fontSize: 10, color: tc, fontWeight: 600, marginTop: 1 }}>{edu.school}</div>
                    </div>
                    <DateBadge text={`${edu.startDate}${edu.endDate ? ` — ${edu.endDate}` : ''}`} tc={tc} />
                  </div>
                  {edu.gpa && (
                    <div style={{ fontSize: 8.5, color: '#64748b', marginTop: 4 }}>GPA: {edu.gpa}</div>
                  )}
                  {edu.achievements && (
                    <div style={{ fontSize: 8.5, color: '#64748b', marginTop: 2, fontStyle: 'italic' }}>{edu.achievements}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Divider 4 */}
        <SlashDivider tc={tc} flip={true} />

        {/* ── PROJECTS ───────────────────────────────────────────────────── */}
        {projects.length > 0 && (
          <div style={{ marginBottom: 4 }}>
            <SlashSH title="Projects" tc={tc} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {projects.map((proj) => (
                <div key={proj.id} style={{
                  background: `${tc}06`,
                  border: `1px solid ${tc}15`,
                  borderRadius: 6,
                  padding: '10px 14px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: '#111' }}>{proj.name}</span>
                    {proj.link && (
                      <span style={{ fontSize: 8, color: tc, fontWeight: 600 }}>{proj.link}</span>
                    )}
                  </div>
                  {proj.description && (
                    <p style={{ fontSize: 9, color: '#475569', lineHeight: 1.6, margin: 0, marginBottom: 4 }}>{proj.description}</p>
                  )}
                  {proj.tech && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {proj.tech.split(',').map((t, i) => (
                        <span key={i} style={{
                          fontSize: 7.5, fontWeight: 700,
                          padding: '2px 7px',
                          background: `${tc}12`,
                          color: tc,
                          borderRadius: 99,
                          border: `1px solid ${tc}25`,
                          transform: 'skewX(-6deg)',
                          display: 'inline-block',
                        }}>
                          <span style={{ display: 'inline-block', transform: 'skewX(6deg)' }}>{t.trim()}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Divider 5 */}
        <SlashDivider tc={tc} flip={false} />

        {/* ── CERTIFICATIONS + LANGUAGES + INTERESTS (3-col) — page break in PDF ── */}
        <div data-page-break="true" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 4, pageBreakBefore: 'always', breakBefore: 'page' }}>

          {/* Certifications */}
          {certifications.length > 0 && (
            <div>
              <SlashSH title="Certifications" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {certifications.map((cert) => (
                  <div key={cert.id} style={{
                    background: `${tc}06`,
                    border: `1px solid ${tc}15`,
                    borderRadius: 5,
                    padding: '7px 10px',
                  }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#111' }}>{cert.name}</div>
                    <div style={{ fontSize: 8, color: tc, marginTop: 1 }}>{cert.issuer}</div>
                    {cert.date && (
                      <div style={{ fontSize: 7.5, color: '#94a3b8', marginTop: 1 }}>{cert.date}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <div>
              <SlashSH title="Languages" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {languages.map((lang) => (
                  <div key={lang.id} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    background: `${tc}06`,
                    border: `1px solid ${tc}15`,
                    borderRadius: 5,
                    padding: '6px 10px',
                  }}>
                    <span style={{ fontSize: 9, fontWeight: 700, color: '#111' }}>{lang.name}</span>
                    <span style={{ fontSize: 8, color: tc, fontWeight: 600 }}>{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interests */}
          {interests.length > 0 && (
            <div>
              <SlashSH title="Interests" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {interests.map((int) => (
                  <span key={int.id} style={{
                    fontSize: 8, fontWeight: 700,
                    padding: '4px 10px',
                    background: `${tc}10`,
                    color: tc,
                    borderRadius: 4,
                    border: `1px solid ${tc}25`,
                    transform: 'skewX(-8deg)',
                    display: 'inline-block',
                  }}>
                    <span style={{ display: 'inline-block', transform: 'skewX(8deg)' }}>{int.name}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Final Divider */}
        <SlashDivider tc={tc} flip={true} />

        {/* Footer accent */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
          <div style={{ width: 4, height: 10, background: tc, transform: 'skewX(-12deg)', borderRadius: 1 }} />
          <div style={{ width: 2, height: 7, background: `${tc}50`, transform: 'skewX(-12deg)', borderRadius: 1, marginLeft: -4 }} />
          <div style={{ flex: 1, height: 1, background: `${tc}10` }} />
          <div style={{ width: 2, height: 7, background: `${tc}50`, transform: 'skewX(-12deg)', borderRadius: 1, marginRight: -4 }} />
          <div style={{ width: 4, height: 10, background: tc, transform: 'skewX(-12deg)', borderRadius: 1 }} />
        </div>

      </div>
    </div>
  )
}
