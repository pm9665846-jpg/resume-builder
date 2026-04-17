import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

// Golden ratio constants
const PHI = 1.618
const LEFT_PCT = `${(1 / PHI / (1 + 1 / PHI) * 100).toFixed(1)}%`  // 38.2%
const RIGHT_PCT = `${(1 / (1 + 1 / PHI) * 100).toFixed(1)}%`        // 61.8%

const S = {
  name: 'Rohan Pillai', jobTitle: 'Head of Engineering',
  email: 'rohan@email.com', phone: '+91 98765 77890',
  location: 'Bengaluru, India', website: 'rohanpillai.dev',
  linkedin: 'linkedin.com/in/rohanpillai', github: 'github.com/rohanpillai',
  summary: 'Engineering leader with 11+ years building high-performance teams and scalable systems. Scaled engineering org from 8 to 80 at two unicorns. Expert in distributed systems, platform engineering, and technical strategy.',
  experience: [
    { id: 'e1', role: 'Head of Engineering', company: 'Meesho', location: 'Bengaluru', startDate: 'Apr 2021', endDate: '', current: true, description: '• Scaled engineering team from 40 to 120 engineers in 2 years\n• Led architecture migration to microservices — 10x throughput improvement\n• Reduced infrastructure costs by ₹8Cr/year through optimization' },
    { id: 'e2', role: 'Engineering Manager', company: 'Dunzo', location: 'Bengaluru', startDate: 'Jun 2018', endDate: 'Mar 2021', current: false, description: '• Built and led 35-person engineering team across 4 squads\n• Delivered real-time delivery tracking system for 2M+ daily orders\n• Reduced P0 incidents by 80% through SRE practices' },
    { id: 'e3', role: 'Senior Engineer', company: 'Ola', location: 'Bengaluru', startDate: 'Aug 2015', endDate: 'May 2018', current: false, description: '• Built ride-matching algorithm serving 5M+ daily rides\n• Led migration from monolith to microservices' },
  ],
  education: [{ id: 'ed1', degree: 'B.Tech Computer Science', school: 'IIT Madras', startDate: '2011', endDate: '2015', gpa: '9.1/10', achievements: 'Institute Silver Medal' }],
  skills: [{ id: 's1', name: 'System Design', level: 96 }, { id: 's2', name: 'Engineering Leadership', level: 94 }, { id: 's3', name: 'Go / Python', level: 88 }, { id: 's4', name: 'Kubernetes', level: 90 }, { id: 's5', name: 'Data Engineering', level: 82 }, { id: 's6', name: 'Product Strategy', level: 85 }],
  projects: [{ id: 'p1', name: 'Meesho Platform Rewrite', description: 'Led complete platform rewrite from PHP monolith to Go microservices. 10x throughput, 60% cost reduction, zero downtime migration.', tech: 'Go, Kubernetes, Kafka, PostgreSQL', link: 'meesho.com/engineering' }],
  certifications: [{ id: 'c1', name: 'CKA Kubernetes', issuer: 'CNCF', date: '2022-07' }, { id: 'c2', name: 'AWS Solutions Architect Pro', issuer: 'Amazon', date: '2021-03' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Malayalam', proficiency: 'Native' }, { id: 'l3', name: 'Hindi', proficiency: 'Fluent' }],
  interests: [{ id: 'i1', name: 'Open Source' }, { id: 'i2', name: 'Tech Blogging' }, { id: 'i3', name: 'Chess' }, { id: 'i4', name: 'Cycling' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

function GSH({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, marginTop: 20 }}>
      {/* Golden spiral dot */}
      <div style={{ width: 8, height: 8, borderRadius: '50%', border: `2px solid ${tc}`, flexShrink: 0 }}>
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: tc, margin: '0 auto', marginTop: 0 }} />
      </div>
      <span style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#0f172a' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: `${tc}20` }} />
    </div>
  )
}

export default function GoldenTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = g(resume?.themeColor, '#0891b2')
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
  const photo    = pi.photo || ''

  const exp  = resume?.experience?.length     ? resume.experience     : S.experience
  const edu  = resume?.education?.length      ? resume.education      : S.education
  const skl  = resume?.skills?.length         ? resume.skills         : S.skills
  const prj  = resume?.projects?.length       ? resume.projects       : S.projects
  const cert = resume?.certifications?.length ? resume.certifications : S.certifications
  const lang = resume?.languages?.length      ? resume.languages      : S.languages
  const intr = resume?.interests?.length      ? resume.interests      : S.interests

  // Golden spiral SVG decoration
  const spiralPath = `M 80,80 A 80,80 0 0,0 0,0 A 49.4,49.4 0 0,1 49.4,49.4 A 30.5,30.5 0 0,0 80,80`

  return (
    <div style={{
      width: 794, minHeight: 1123,
      background: '#ffffff',
      fontFamily: ff, fontSize: 10,
      color: '#1e293b',
      display: 'flex',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* ── GOLDEN SPIRAL WATERMARK ── */}
      <div style={{ position: 'absolute', bottom: -20, right: -20, pointerEvents: 'none', zIndex: 0, opacity: 0.04 }}>
        <svg width="300" height="300" viewBox="0 0 300 300">
          <g transform="translate(150,150)">
            {/* Fibonacci rectangles as concentric arcs */}
            {[120, 74, 46, 28, 17, 11, 7].map((r, i) => (
              <circle key={i} cx="0" cy="0" r={r} fill="none" stroke={tc} strokeWidth="1.5" />
            ))}
            {/* Spiral line */}
            <path d="M 0,0 Q 120,0 120,120 Q 120,194 46,194 Q -28,194 -28,120 Q -28,74 18,74 Q 46,74 46,102 Q 46,120 28,120" fill="none" stroke={tc} strokeWidth="2" />
          </g>
        </svg>
      </div>

      {/* ── LEFT COLUMN — 38.2% (golden ratio narrow side) ── */}
      <div style={{
        width: LEFT_PCT,
        flexShrink: 0,
        background: `${tc}08`,
        borderRight: `2px solid ${tc}20`,
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Top accent */}
        <div style={{ height: 4, background: tc }} />

        <div style={{ padding: '28px 18px 28px 20px', flex: 1 }}>

          {/* Photo */}
          {photo ? (
            <div style={{ marginBottom: 18, textAlign: 'center' }}>
              <img src={photo} alt={name} style={{ width: 76, height: 76, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}40`, boxShadow: `0 4px 16px ${tc}20` }} />
            </div>
          ) : (
            <div style={{ width: 76, height: 76, borderRadius: '50%', background: `${tc}20`, border: `3px solid ${tc}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 900, color: tc, margin: '0 auto 18px' }}>
              {name.charAt(0)}
            </div>
          )}

          {/* Name + title */}
          <div style={{ textAlign: 'center', marginBottom: 18 }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: 4 }}>{name}</div>
            <div style={{ fontSize: 8.5, color: tc, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1.4 }}>{jobTitle}</div>
          </div>

          {/* Golden ratio divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16 }}>
            <div style={{ flex: 0.618, height: 1.5, background: tc }} />
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: tc, flexShrink: 0 }} />
            <div style={{ flex: 0.382, height: 1, background: `${tc}50` }} />
          </div>

          {/* Contact */}
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 7, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.22em', color: tc, marginBottom: 8 }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {[{ icon: Mail, val: email }, { icon: Phone, val: phone }, { icon: MapPin, val: location }, { icon: Globe, val: website }, { icon: Link2, val: linkedin }, { icon: GitBranch, val: github }].filter(c => c.val).map(({ icon: Icon, val }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
                  <Icon size={9} color={tc} style={{ marginTop: 1, flexShrink: 0 }} />
                  <span style={{ fontSize: 8, color: '#475569', lineHeight: 1.4, wordBreak: 'break-all' }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Golden ratio divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16 }}>
            <div style={{ flex: 0.382, height: 1, background: `${tc}50` }} />
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: tc, flexShrink: 0 }} />
            <div style={{ flex: 0.618, height: 1.5, background: tc }} />
          </div>

          {/* Skills */}
          {skl.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 7, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.22em', color: tc, marginBottom: 10 }}>Skills</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {skl.map((s, i) => (
                  <div key={s.id || i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                      <span style={{ fontSize: 8, fontWeight: 600, color: '#334155' }}>{s.name}</span>
                      <span style={{ fontSize: 7, color: tc, fontWeight: 700 }}>{s.level}%</span>
                    </div>
                    {/* Golden ratio split bar — filled part is 61.8% of level */}
                    <div style={{ height: 4, background: `${tc}15`, borderRadius: 99, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${s.level}%`, background: `linear-gradient(90deg, ${tc}, ${tc}80)`, borderRadius: 99 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Golden ratio divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16 }}>
            <div style={{ flex: 0.618, height: 1.5, background: tc }} />
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: tc, flexShrink: 0 }} />
            <div style={{ flex: 0.382, height: 1, background: `${tc}50` }} />
          </div>

          {/* Languages */}
          {lang.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 7, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.22em', color: tc, marginBottom: 8 }}>Languages</div>
              {lang.map((l, i) => (
                <div key={l.id || i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 8.5, color: '#334155', fontWeight: 500 }}>{l.name}</span>
                  <span style={{ fontSize: 7.5, color: tc, fontWeight: 600 }}>{l.proficiency}</span>
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {cert.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 12 }}>
                <div style={{ flex: 0.382, height: 1, background: `${tc}50` }} />
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: tc, flexShrink: 0 }} />
                <div style={{ flex: 0.618, height: 1.5, background: tc }} />
              </div>
              <div style={{ fontSize: 7, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.22em', color: tc, marginBottom: 8 }}>Certifications</div>
              {cert.map((c, i) => (
                <div key={c.id || i} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 8.5, fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>{c.name}</div>
                  <div style={{ fontSize: 7.5, color: tc, marginTop: 1 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                </div>
              ))}
            </div>
          )}

          {/* Interests */}
          {intr.length > 0 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 12 }}>
                <div style={{ flex: 0.618, height: 1.5, background: tc }} />
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: tc, flexShrink: 0 }} />
                <div style={{ flex: 0.382, height: 1, background: `${tc}50` }} />
              </div>
              <div style={{ fontSize: 7, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.22em', color: tc, marginBottom: 8 }}>Interests</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {intr.map((it, i) => (
                  <span key={it.id || i} style={{ fontSize: 7.5, fontWeight: 600, background: `${tc}12`, color: tc, padding: '3px 8px', borderRadius: 20, border: `1px solid ${tc}20` }}>
                    {it.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom accent */}
        <div style={{ height: 4, background: tc }} />
      </div>

      {/* ── RIGHT COLUMN — 61.8% (golden ratio wide side) ── */}
      <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>

        {/* Header area */}
        <div style={{ padding: '28px 28px 20px 24px', borderBottom: `1px solid ${tc}15` }}>
          <div style={{ fontSize: 26, fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 4 }}>{name}</div>
          <div style={{ fontSize: 10.5, color: tc, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>{jobTitle}</div>

          {/* Golden ratio indicator — subtle design element */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 12 }}>
            <div style={{ flex: 0.618, height: 2, background: tc, borderRadius: '2px 0 0 2px' }} />
            <div style={{ flex: 0.382, height: 2, background: `${tc}30`, borderRadius: '0 2px 2px 0' }} />
          </div>

          {summary && (
            <p style={{ fontSize: 9.5, color: '#374151', lineHeight: 1.8, margin: 0 }}>{summary}</p>
          )}
        </div>

        {/* Body */}
        <div style={{ padding: '0 28px 28px 24px' }}>

          {/* Experience */}
          {exp.length > 0 && (
            <div>
              <GSH title="Experience" tc={tc} />
              {exp.map((e, i) => (
                <div key={e.id || i} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: i < exp.length - 1 ? `1px solid ${tc}10` : 'none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                    <div>
                      <div style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{e.company}</div>
                      <div style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginTop: 1 }}>{e.role}</div>
                      {e.location && <div style={{ fontSize: 8, color: '#9ca3af', marginTop: 1 }}>{e.location}</div>}
                    </div>
                    <span style={{ fontSize: 7.5, color: '#9ca3af', whiteSpace: 'nowrap', marginLeft: 10, background: `${tc}08`, padding: '2px 8px', borderRadius: 10 }}>
                      {e.startDate} — {e.current ? 'Present' : e.endDate}
                    </span>
                  </div>
                  {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                    <p key={li} style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.65, margin: '2px 0 0' }}>{l}</p>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {prj.length > 0 && (
            <div>
              <GSH title="Projects" tc={tc} />
              {prj.map((p, i) => (
                <div key={p.id || i} style={{ marginBottom: 10, padding: '10px 12px', background: `${tc}06`, borderRadius: 8, border: `1px solid ${tc}15` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                    <span style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{p.name}</span>
                    {p.link && <span style={{ fontSize: 8, color: tc }}>{p.link}</span>}
                  </div>
                  {p.description && <p style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.65, margin: '0 0 5px' }}>{p.description}</p>}
                  {p.tech && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {p.tech.split(',').map((t, ti) => (
                        <span key={ti} style={{ fontSize: 7.5, background: `${tc}15`, color: tc, padding: '2px 7px', borderRadius: 10, fontWeight: 600 }}>{t.trim()}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {edu.length > 0 && (
            <div>
              <GSH title="Education" tc={tc} />
              {edu.map((e, i) => (
                <div key={e.id || i} style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{e.degree}</div>
                      <div style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginTop: 1 }}>{e.school}</div>
                    </div>
                    <span style={{ fontSize: 7.5, color: '#9ca3af', whiteSpace: 'nowrap', marginLeft: 10 }}>{e.startDate} — {e.endDate}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
                    {e.gpa && <span style={{ fontSize: 8, color: '#64748b' }}>GPA: <strong style={{ color: '#0f172a' }}>{e.gpa}</strong></span>}
                    {e.achievements && <span style={{ fontSize: 8, color: '#64748b', fontStyle: 'italic' }}>{e.achievements}</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
