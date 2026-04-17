import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Anika Sharma', jobTitle: 'Chief Product Officer',
  email: 'anika@email.com', phone: '+91 98765 55678',
  location: 'Mumbai, India', website: 'anikasharma.co',
  linkedin: 'linkedin.com/in/anikasharma', github: 'github.com/anikasharma',
  summary: 'Visionary product leader with 12+ years building category-defining products. Scaled 3 startups from seed to Series C. Led product teams of 50+ across fintech, healthtech, and consumer. Board advisor to 4 YC companies.',
  experience: [
    { id: 'e1', role: 'Chief Product Officer', company: 'Razorpay', location: 'Bengaluru', startDate: 'Jan 2021', endDate: '', current: true, description: '• Grew product from ₹500Cr to ₹5,000Cr ARR in 3 years\n• Built and led 50-person product org across 8 squads\n• Launched RazorpayX — B2B banking product with 200K+ businesses' },
    { id: 'e2', role: 'VP Product', company: 'CRED', location: 'Bengaluru', startDate: 'Mar 2018', endDate: 'Dec 2020', current: false, description: '• Led product for CRED\'s core credit card rewards platform\n• Grew MAU from 500K to 8M in 18 months\n• Launched CRED Pay — ₹1,000Cr GMV in first year' },
    { id: 'e3', role: 'Senior PM', company: 'Flipkart', location: 'Bengaluru', startDate: 'Jun 2015', endDate: 'Feb 2018', current: false, description: '• Owned Flipkart\'s seller platform — 500K+ active sellers\n• Increased seller NPS from 32 to 71 through UX overhaul\n• Launched Flipkart Ads — ₹200Cr revenue in year 1' },
  ],
  education: [{ id: 'ed1', degree: 'MBA — Strategy & Entrepreneurship', school: 'IIM Ahmedabad', startDate: '2013', endDate: '2015', gpa: '3.94/4.0', achievements: 'Gold Medal · Best Business Plan' }],
  skills: [
    { id: 's1', name: 'Product Strategy', level: 97 },
    { id: 's2', name: 'Data Analytics', level: 88 },
    { id: 's3', name: 'Team Leadership', level: 95 },
    { id: 's4', name: 'Go-to-Market', level: 92 },
    { id: 's5', name: 'UX Design', level: 82 },
    { id: 's6', name: 'Fundraising', level: 85 },
  ],
  projects: [{ id: 'p1', name: 'RazorpayX Launch', description: 'Led 0→1 build of RazorpayX business banking. 200K+ businesses onboarded in 18 months. ₹2,000Cr deposits under management.', tech: 'Product Strategy, GTM, Partnerships', link: 'razorpay.com/x' }],
  certifications: [{ id: 'c1', name: 'Reforge Growth Series', issuer: 'Reforge', date: '2022-09' }, { id: 'c2', name: 'Stanford Design Thinking', issuer: 'Stanford d.school', date: '2021-04' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }, { id: 'l3', name: 'Gujarati', proficiency: 'Native' }],
  interests: [{ id: 'i1', name: 'Angel Investing' }, { id: 'i2', name: 'Mentoring' }, { id: 'i3', name: 'Classical Music' }, { id: 'i4', name: 'Trekking' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

// Radar/Spider chart for skills
function RadarChart({ skills, tc, size = 160 }) {
  const cx = size / 2, cy = size / 2
  const r = size * 0.38
  const n = Math.min(skills.length, 6)
  if (n < 3) return null

  const angleStep = (2 * Math.PI) / n
  const getPoint = (i, radius) => {
    const angle = i * angleStep - Math.PI / 2
    return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)]
  }

  // Grid rings
  const rings = [0.25, 0.5, 0.75, 1.0]
  // Skill polygon
  const skillPts = skills.slice(0, n).map((s, i) => getPoint(i, r * (s.level / 100)))
  const polyStr = skillPts.map(p => p.join(',')).join(' ')

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block', margin: '0 auto' }}>
      {/* Grid rings */}
      {rings.map((ring, ri) => {
        const pts = Array.from({ length: n }).map((_, i) => getPoint(i, r * ring)).map(p => p.join(',')).join(' ')
        return <polygon key={ri} points={pts} fill="none" stroke={`${tc}20`} strokeWidth="0.8" />
      })}
      {/* Axis lines */}
      {Array.from({ length: n }).map((_, i) => {
        const [x, y] = getPoint(i, r)
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={`${tc}20`} strokeWidth="0.8" />
      })}
      {/* Skill polygon fill */}
      <polygon points={polyStr} fill={`${tc}18`} stroke={tc} strokeWidth="1.5" strokeLinejoin="round" />
      {/* Skill dots */}
      {skillPts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill={tc} />
      ))}
      {/* Skill labels */}
      {skills.slice(0, n).map((s, i) => {
        const [x, y] = getPoint(i, r + 14)
        const anchor = x < cx - 5 ? 'end' : x > cx + 5 ? 'start' : 'middle'
        return (
          <text key={i} x={x} y={y + 3} textAnchor={anchor} fontSize="7" fill="#374151" fontWeight="600">
            {s.name.length > 10 ? s.name.slice(0, 10) + '…' : s.name}
          </text>
        )
      })}
    </svg>
  )
}

export default function LuminaryTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = g(resume?.themeColor, '#b45309')  // warm gold default
  const ff = g(resume?.fontFamily, 'Georgia, serif')
  const ff2 = 'Arial, sans-serif'

  const name     = g(pi.name,     S.name)
  const jobTitle = g(pi.jobTitle, S.jobTitle)
  const email    = g(pi.email,    S.email)
  const phone    = g(pi.phone,    S.phone)
  const location = g(pi.location, S.location)
  const website  = g(pi.website,  S.website)
  const linkedin = g(pi.linkedin, S.linkedin)
  const github   = g(pi.github,   S.github)
  const summary  = g(pi.summary,  S.summary)
  const photo    = pi.photo || ''

  const exp  = resume?.experience?.length     ? resume.experience     : S.experience
  const edu  = resume?.education?.length      ? resume.education      : S.education
  const skl  = resume?.skills?.length         ? resume.skills         : S.skills
  const prj  = resume?.projects?.length       ? resume.projects       : S.projects
  const cert = resume?.certifications?.length ? resume.certifications : S.certifications
  const lang = resume?.languages?.length      ? resume.languages      : S.languages
  const intr = resume?.interests?.length      ? resume.interests      : S.interests

  // Split name into first + rest for the split-name header
  const nameParts = name.trim().split(' ')
  const firstName = nameParts[0] || ''
  const lastName  = nameParts.slice(1).join(' ') || ''
  const initial   = firstName.charAt(0).toUpperCase()

  return (
    <div style={{
      width: 794, minHeight: 1123,
      background: '#fdfcf8',  // warm off-white, like premium paper
      fontFamily: ff2, fontSize: 10,
      color: '#1a1a1a',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* ── WATERMARK INITIAL ── */}
      <div style={{
        position: 'absolute', top: -20, right: -10,
        fontSize: 320, fontWeight: 900, color: `${tc}06`,
        fontFamily: ff, lineHeight: 1,
        pointerEvents: 'none', zIndex: 0,
        userSelect: 'none',
      }}>
        {initial}
      </div>

      {/* ── LEFT SIDEBAR — 38.2% (golden ratio) ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0,
        width: '38.2%',
        background: '#1a1a1a',
        zIndex: 1,
      }}>
        {/* Thin gold accent line at top */}
        <div style={{ height: 3, background: `linear-gradient(90deg, ${tc}, ${tc}80, transparent)` }} />

        <div style={{ padding: '32px 22px 32px 24px' }}>

          {/* Photo */}
          {photo ? (
            <div style={{ marginBottom: 20 }}>
              <div style={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', border: `2px solid ${tc}60`, margin: '0 auto' }}>
                <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          ) : (
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: `${tc}20`, border: `2px solid ${tc}40`, margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 900, color: tc, fontFamily: ff }}>
              {initial}
            </div>
          )}

          {/* Contact */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 7, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: tc, marginBottom: 10, fontFamily: ff2 }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[{ icon: Mail, val: email }, { icon: Phone, val: phone }, { icon: MapPin, val: location }, { icon: Globe, val: website }, { icon: Link2, val: linkedin }, { icon: GitBranch, val: github }].filter(c => c.val).map(({ icon: Icon, val }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <Icon size={9} color={tc} style={{ marginTop: 1, flexShrink: 0 }} />
                  <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.65)', lineHeight: 1.4, wordBreak: 'break-all' }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Thin gold rule */}
          <div style={{ height: 1, background: `linear-gradient(to right, ${tc}60, transparent)`, marginBottom: 20 }} />

          {/* Radar skill chart */}
          {skl.length >= 3 && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 7, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: tc, marginBottom: 12, fontFamily: ff2 }}>Expertise</div>
              <RadarChart skills={skl} tc={tc} size={160} />
              {/* Skill list below radar */}
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 5 }}>
                {skl.map((s, i) => (
                  <div key={s.id || i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{s.name}</span>
                    <span style={{ fontSize: 7, color: tc, fontWeight: 700 }}>{s.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ height: 1, background: `linear-gradient(to right, ${tc}60, transparent)`, marginBottom: 20 }} />

          {/* Languages */}
          {lang.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 7, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: tc, marginBottom: 10, fontFamily: ff2 }}>Languages</div>
              {lang.map((l, i) => (
                <div key={l.id || i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{l.name}</span>
                  <span style={{ fontSize: 7.5, color: tc, fontWeight: 600 }}>{l.proficiency}</span>
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {cert.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ height: 1, background: `linear-gradient(to right, ${tc}60, transparent)`, marginBottom: 16 }} />
              <div style={{ fontSize: 7, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: tc, marginBottom: 10, fontFamily: ff2 }}>Certifications</div>
              {cert.map((c, i) => (
                <div key={c.id || i} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.85)', fontWeight: 600, lineHeight: 1.3 }}>{c.name}</div>
                  <div style={{ fontSize: 7.5, color: tc, marginTop: 2 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                </div>
              ))}
            </div>
          )}

          {/* Interests */}
          {intr.length > 0 && (
            <div>
              <div style={{ height: 1, background: `linear-gradient(to right, ${tc}60, transparent)`, marginBottom: 16 }} />
              <div style={{ fontSize: 7, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: tc, marginBottom: 10, fontFamily: ff2 }}>Interests</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {intr.map((it, i) => (
                  <span key={it.id || i} style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.65)', background: 'rgba(255,255,255,0.06)', padding: '3px 8px', borderRadius: 20, border: `1px solid rgba(255,255,255,0.1)` }}>
                    {it.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom gold accent */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${tc}, ${tc}80, transparent)` }} />
      </div>

      {/* ── RIGHT MAIN — 61.8% ── */}
      <div style={{ marginLeft: '38.2%', position: 'relative', zIndex: 1, minHeight: 1123 }}>

        {/* ── HEADER ── */}
        <div style={{ padding: '36px 32px 24px 28px', borderBottom: `1px solid ${tc}25` }}>

          {/* Split name design */}
          <div style={{ marginBottom: 16 }}>
            {/* First name — large, serif */}
            <div style={{ fontSize: 34, fontWeight: 400, color: '#1a1a1a', fontFamily: ff, lineHeight: 1, letterSpacing: '0.04em' }}>
              {firstName}
            </div>
            {/* Thin gold rule between names */}
            <div style={{ height: 1.5, background: `linear-gradient(to right, ${tc}, ${tc}40, transparent)`, margin: '6px 0' }} />
            {/* Last name — bold, slightly smaller */}
            <div style={{ fontSize: 28, fontWeight: 700, color: '#1a1a1a', fontFamily: ff, lineHeight: 1, letterSpacing: '0.06em' }}>
              {lastName}
            </div>
          </div>

          {/* Job title — small caps style */}
          <div style={{ fontSize: 9.5, fontWeight: 600, color: tc, textTransform: 'uppercase', letterSpacing: '0.28em', marginBottom: 14, fontFamily: ff2 }}>
            {jobTitle}
          </div>

          {/* Summary */}
          {summary && (
            <p style={{ fontSize: 9.5, color: '#374151', lineHeight: 1.85, margin: 0, fontFamily: ff, fontStyle: 'italic', borderLeft: `2px solid ${tc}40`, paddingLeft: 12 }}>
              {summary}
            </p>
          )}
        </div>

        {/* ── EXPERIENCE ── */}
        {exp.length > 0 && (
          <div style={{ padding: '0 32px 0 28px' }}>
            <LumSH title="Professional Experience" tc={tc} ff={ff} ff2={ff2} />
            {exp.map((e, i) => (
              <div key={e.id || i} style={{ marginBottom: 20, display: 'flex', gap: 14 }}>
                {/* Chapter number */}
                <div style={{ flexShrink: 0, width: 28, textAlign: 'right', paddingTop: 2 }}>
                  <span style={{ fontSize: 18, fontWeight: 900, color: `${tc}20`, fontFamily: ff, lineHeight: 1 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                {/* Content */}
                <div style={{ flex: 1, borderLeft: `1px solid ${tc}20`, paddingLeft: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#1a1a1a', fontFamily: ff }}>{e.company}</div>
                      <div style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginTop: 1, letterSpacing: '0.04em' }}>{e.role}</div>
                      {e.location && <div style={{ fontSize: 8, color: '#9ca3af', marginTop: 1 }}>{e.location}</div>}
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 10 }}>
                      <div style={{ fontSize: 8, color: '#9ca3af', fontStyle: 'italic', fontFamily: ff }}>
                        {e.startDate} — {e.current ? 'Present' : e.endDate}
                      </div>
                      {e.current && <div style={{ fontSize: 7, color: tc, fontWeight: 700, marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Current</div>}
                    </div>
                  </div>
                  {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                    <p key={li} style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.7, margin: '2px 0 0' }}>{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── PROJECTS ── */}
        {prj.length > 0 && (
          <div style={{ padding: '0 32px 0 28px' }}>
            <LumSH title="Notable Projects" tc={tc} ff={ff} ff2={ff2} />
            {prj.map((p, i) => (
              <div key={p.id || i} style={{ marginBottom: 12, padding: '10px 14px', background: `${tc}05`, borderRadius: 4, borderLeft: `3px solid ${tc}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: '#1a1a1a', fontFamily: ff }}>{p.name}</span>
                  {p.link && <span style={{ fontSize: 8, color: tc, fontStyle: 'italic' }}>{p.link}</span>}
                </div>
                {p.description && <p style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.7, margin: '0 0 5px', fontFamily: ff, fontStyle: 'italic' }}>{p.description}</p>}
                {p.tech && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {p.tech.split(',').map((t, ti) => (
                      <span key={ti} style={{ fontSize: 7.5, background: `${tc}12`, color: tc, padding: '2px 7px', borderRadius: 20, fontWeight: 600 }}>{t.trim()}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── EDUCATION ── */}
        {edu.length > 0 && (
          <div style={{ padding: '0 32px 28px 28px' }}>
            <LumSH title="Education" tc={tc} ff={ff} ff2={ff2} />
            {edu.map((e, i) => (
              <div key={e.id || i} style={{ marginBottom: 12, display: 'flex', gap: 14 }}>
                <div style={{ flexShrink: 0, width: 28 }} />
                <div style={{ flex: 1, borderLeft: `1px solid ${tc}20`, paddingLeft: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: 10.5, fontWeight: 700, color: '#1a1a1a', fontFamily: ff }}>{e.degree}</div>
                      <div style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginTop: 1 }}>{e.school}</div>
                    </div>
                    <span style={{ fontSize: 8, color: '#9ca3af', fontStyle: 'italic', fontFamily: ff, whiteSpace: 'nowrap', marginLeft: 10 }}>{e.startDate} — {e.endDate}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
                    {e.gpa && <span style={{ fontSize: 8, color: '#64748b' }}>GPA: <strong style={{ color: '#1a1a1a' }}>{e.gpa}</strong></span>}
                    {e.achievements && <span style={{ fontSize: 8, color: tc, fontStyle: 'italic' }}>{e.achievements}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function LumSH({ title, tc, ff, ff2 }) {
  return (
    <div style={{ padding: '18px 0 12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {/* Small gold diamond */}
        <div style={{ width: 6, height: 6, background: tc, transform: 'rotate(45deg)', flexShrink: 0 }} />
        <span style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.28em', color: '#1a1a1a', fontFamily: ff2 }}>{title}</span>
        <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${tc}30, transparent)` }} />
      </div>
    </div>
  )
}
