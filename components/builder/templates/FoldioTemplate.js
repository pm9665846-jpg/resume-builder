import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Marcus Chen',
  jobTitle: 'Full Stack Engineer',
  email: 'marcus@email.com',
  phone: '+1 (555) 456-7890',
  location: 'Austin, TX',
  website: 'marcuschen.dev',
  linkedin: 'linkedin.com/in/marcusc',
  github: 'github.com/marcusc',
  summary: 'Passionate engineer with 6+ years building high-performance web applications. Obsessed with clean code, developer experience, and shipping products that users love. Open source contributor with 2.4k GitHub stars.',
  experience: [
    { id: 'e1', role: 'Senior Full Stack Engineer', company: 'Vercel', location: 'Remote', startDate: 'Mar 2022', endDate: '', current: true, description: '• Built core features for Vercel\'s deployment pipeline serving 1M+ developers\n• Reduced cold start times by 62% through edge runtime optimizations\n• Led migration from REST to tRPC across 14 internal services' },
    { id: 'e2', role: 'Software Engineer', company: 'Linear', location: 'San Francisco', startDate: 'Jan 2020', endDate: 'Feb 2022', current: false, description: '• Developed real-time collaboration features using CRDTs and WebSockets\n• Improved app performance by 45% through React virtualization and memoization\n• Shipped keyboard-first navigation system adopted by 80% of power users' },
    { id: 'e3', role: 'Frontend Engineer', company: 'Stripe', location: 'San Francisco', startDate: 'Jun 2018', endDate: 'Dec 2019', current: false, description: '• Built Stripe Dashboard components used by 500K+ merchants\n• Contributed to Stripe\'s design system — 200+ reusable components' },
  ],
  education: [
    { id: 'ed1', degree: 'BS Computer Science', school: 'UT Austin', startDate: '2014', endDate: '2018', gpa: '3.92/4.0', achievements: 'Summa Cum Laude · ACM ICPC Finalist' },
  ],
  skills: [
    { id: 's1', name: 'TypeScript', level: 96 },
    { id: 's2', name: 'React / Next.js', level: 94 },
    { id: 's3', name: 'Node.js', level: 90 },
    { id: 's4', name: 'PostgreSQL', level: 85 },
    { id: 's5', name: 'Rust', level: 72 },
    { id: 's6', name: 'AWS / Edge', level: 82 },
  ],
  projects: [
    { id: 'p1', name: 'tinybase', description: 'Reactive state management library for local-first apps. 2.4k GitHub stars, used in production by 300+ teams.', tech: 'TypeScript, React, IndexedDB', link: 'tinybase.dev' },
    { id: 'p2', name: 'sqlc-gen-ts', description: 'Code generator that turns SQL queries into fully typed TypeScript. 800+ stars.', tech: 'Go, TypeScript, PostgreSQL', link: 'github.com/marcusc/sqlc-gen-ts' },
  ],
  certifications: [
    { id: 'c1', name: 'AWS Solutions Architect', issuer: 'Amazon', date: '2023-05' },
    { id: 'c2', name: 'CKA Kubernetes', issuer: 'CNCF', date: '2022-08' },
  ],
  languages: [
    { id: 'l1', name: 'English', proficiency: 'Native' },
    { id: 'l2', name: 'Mandarin', proficiency: 'Fluent' },
  ],
  interests: [
    { id: 'i1', name: 'Open Source' },
    { id: 'i2', name: 'Rock Climbing' },
    { id: 'i3', name: 'Mechanical Keyboards' },
    { id: 'i4', name: 'Speedcubing' },
  ],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

export default function FoldioTemplate({ resume }) {
  const {
    personalInfo = {}, experience = [], education = [], skills = [],
    projects = [], certifications = [], languages = [], interests = [],
    themeColor = '#6366f1', fontFamily,
  } = resume

  const tc = themeColor
  const ff = fontFamily || 'Arial, sans-serif'

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

  const exp  = experience.length     > 0 ? experience     : S.experience
  const edu  = education.length      > 0 ? education      : S.education
  const skl  = skills.length         > 0 ? skills         : S.skills
  const prj  = projects.length       > 0 ? projects       : S.projects
  const cert = certifications.length > 0 ? certifications : S.certifications
  const lang = languages.length      > 0 ? languages      : S.languages
  const intr = interests.length      > 0 ? interests      : S.interests

  return (
    <div style={{
      background: '#ffffff',
      fontFamily: ff,
      fontSize: '10px',
      lineHeight: 1.6,
      width: 794,
      minHeight: 1123,
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      color: '#1c1c1e',
    }}>

      {/* ══════════════════════════════════════
          DIAGONAL HERO HEADER
          — full-width block with clipped bottom
      ══════════════════════════════════════ */}
      <div style={{
        position: 'relative',
        background: `linear-gradient(118deg, ${tc} 0%, ${tc}cc 60%, ${tc}88 100%)`,
        padding: '32px 40px 56px',
        clipPath: 'polygon(0 0, 100% 0, 100% 78%, 0 100%)',
        marginBottom: -20,
      }}>
        {/* Subtle grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }} />

        {/* Large faint circle */}
        <div style={{
          position: 'absolute', top: -60, right: -60,
          width: 260, height: 260, borderRadius: '50%',
          background: 'rgba(255,255,255,0.07)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: 10, left: 200,
          width: 140, height: 140, borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)', pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'flex-start', gap: 22 }}>
          {/* Photo */}
          <div style={{
            width: 76, height: 76, borderRadius: 16, flexShrink: 0,
            background: photo ? 'transparent' : 'rgba(255,255,255,0.2)',
            border: '3px solid rgba(255,255,255,0.4)',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          }}>
            {photo
              ? <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 900, color: 'white' }}>{name.charAt(0)}</div>
            }
          </div>

          <div style={{ flex: 1 }}>
            <h1 style={{
              fontSize: 28, fontWeight: 900, color: '#fff',
              margin: '0 0 2px', letterSpacing: '-0.02em', lineHeight: 1.1,
            }}>{name}</h1>
            <p style={{
              fontSize: 10.5, color: 'rgba(255,255,255,0.8)',
              fontWeight: 500, margin: '0 0 14px', letterSpacing: '0.05em',
            }}>{jobTitle}</p>

            {/* Contact — horizontal chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px 10px' }}>
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
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  fontSize: 8.5, color: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(4px)',
                }}>
                  <Icon size={8} color="rgba(255,255,255,0.8)" />
                  {val}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          SUMMARY BAND — floats over diagonal cut
      ══════════════════════════════════════ */}
      {summary && (
        <div style={{
          margin: '0 32px 16px',
          padding: '14px 18px',
          background: '#f8f8ff',
          borderRadius: 12,
          border: `1px solid ${tc}20`,
          borderLeft: `4px solid ${tc}`,
          position: 'relative', zIndex: 2,
          boxShadow: `0 4px 20px ${tc}12`,
        }}>
          <p style={{ fontSize: 9.5, color: '#444', lineHeight: 1.85, margin: 0 }}>{summary}</p>
        </div>
      )}

      {/* ══════════════════════════════════════
          BODY — asymmetric 3-column grid
      ══════════════════════════════════════ */}
      <div style={{ display: 'flex', gap: 0, padding: '0 0 40px' }}>

        {/* ── COLUMN 1: narrow left accent ── */}
        <div style={{
          width: 8, flexShrink: 0,
          background: `linear-gradient(to bottom, ${tc}, ${tc}30, transparent)`,
          margin: '0 0 0 32px',
          borderRadius: 4,
        }} />

        {/* ── COLUMN 2: main content ── */}
        <div style={{ flex: 1, padding: '4px 20px 0 16px' }}>

          {/* EXPERIENCE */}
          <FoldioSH tc={tc}>Experience</FoldioSH>
          {exp.map((e, i) => (
            <div key={e.id} style={{
              marginBottom: 14,
              padding: '11px 14px',
              borderRadius: 10,
              background: i % 2 === 0 ? '#fafafa' : '#ffffff',
              border: `1px solid #ebebeb`,
              borderTop: `2px solid ${i % 2 === 0 ? tc : tc + '60'}`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                <div>
                  <p style={{ fontWeight: 800, fontSize: 11, color: '#111', margin: 0 }}>{e.role}</p>
                  <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '1px 0' }}>
                    {e.company}
                    {e.location && <span style={{ color: '#aaa', fontWeight: 400 }}> · {e.location}</span>}
                  </p>
                </div>
                <span style={{
                  fontSize: 7.5, color: '#fff',
                  background: tc, padding: '2px 9px',
                  borderRadius: 20, whiteSpace: 'nowrap',
                  marginLeft: 8, flexShrink: 0,
                }}>{e.startDate} — {e.current ? 'Now' : e.endDate}</span>
              </div>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                <p key={li} style={{ color: '#555', fontSize: 9, lineHeight: 1.75, margin: '2px 0 0' }}>{l}</p>
              ))}
            </div>
          ))}

          {/* PROJECTS */}
          {prj.length > 0 && (
            <>
              <FoldioSH tc={tc}>Projects</FoldioSH>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {prj.map(p => (
                  <div key={p.id} style={{
                    padding: '11px 13px',
                    background: `linear-gradient(135deg, #fff, ${tc}06)`,
                    borderRadius: 10,
                    border: `1px solid ${tc}20`,
                    boxShadow: `0 2px 8px ${tc}08`,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                      <p style={{ fontWeight: 800, fontSize: 10, color: '#111', margin: 0 }}>{p.name}</p>
                      {p.link && <span style={{ fontSize: 7.5, color: tc }}>{p.link}</span>}
                    </div>
                    {p.tech && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 5 }}>
                        {p.tech.split(',').map((t, ti) => (
                          <span key={ti} style={{
                            fontSize: 7, padding: '1px 6px', borderRadius: 20,
                            background: `${tc}12`, color: tc, fontWeight: 700,
                          }}>{t.trim()}</span>
                        ))}
                      </div>
                    )}
                    {p.description && <p style={{ fontSize: 8.5, color: '#555', margin: 0, lineHeight: 1.65 }}>{p.description}</p>}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* EDUCATION */}
          <FoldioSH tc={tc}>Education</FoldioSH>
          {edu.map(e => (
            <div key={e.id} style={{
              marginBottom: 10,
              padding: '10px 14px',
              borderRadius: 10,
              background: '#fafafa',
              border: `1px solid #ebebeb`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
            }}>
              <div>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: 0 }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '1px 0' }}>{e.school}</p>
                {e.achievements && <p style={{ fontSize: 8.5, color: '#888', margin: 0, fontStyle: 'italic' }}>{e.achievements}</p>}
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 12 }}>
                <p style={{ fontSize: 8, color: '#aaa', margin: 0 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ fontSize: 8.5, color: tc, fontWeight: 700, margin: '2px 0 0' }}>GPA {e.gpa}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* ── COLUMN 3: right sidebar ── */}
        <div style={{
          width: 195, flexShrink: 0,
          padding: '4px 32px 0 12px',
          borderLeft: `1px dashed ${tc}20`,
        }}>

          {/* SKILLS — hexagon-style rating */}
          <FoldioSH tc={tc}>Skills</FoldioSH>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 4 }}>
            {skl.map(s => (
              <div key={s.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 9, color: '#222', fontWeight: 600 }}>{s.name}</span>
                  <span style={{ fontSize: 7.5, color: tc, fontWeight: 700 }}>{s.level}%</span>
                </div>
                {/* Segmented bar */}
                <div style={{ display: 'flex', gap: 2 }}>
                  {Array.from({ length: 5 }).map((_, i) => {
                    const filled = i < Math.round(s.level / 20)
                    return (
                      <div key={i} style={{
                        flex: 1, height: 8, borderRadius: 3,
                        background: filled ? tc : `${tc}15`,
                        opacity: filled ? (1 - i * 0.08) : 1,
                      }} />
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* LANGUAGES */}
          {lang.length > 0 && (
            <>
              <FoldioSH tc={tc}>Languages</FoldioSH>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 4 }}>
                {lang.map(l => (
                  <div key={l.id} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '5px 10px', borderRadius: 8,
                    background: '#fafafa', border: `1px solid #ebebeb`,
                  }}>
                    <span style={{ fontSize: 9, color: '#222', fontWeight: 600 }}>{l.name}</span>
                    <span style={{
                      fontSize: 7.5, padding: '1px 7px', borderRadius: 20,
                      background: `${tc}12`, color: tc, fontWeight: 700,
                    }}>{l.proficiency}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* CERTIFICATIONS */}
          {cert.length > 0 && (
            <>
              <FoldioSH tc={tc}>Certifications</FoldioSH>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 4 }}>
                {cert.map(c => (
                  <div key={c.id} style={{
                    padding: '8px 10px', borderRadius: 8,
                    background: `${tc}07`, border: `1px solid ${tc}18`,
                  }}>
                    <p style={{ fontWeight: 700, fontSize: 8.5, color: '#111', margin: '0 0 1px' }}>{c.name}</p>
                    <p style={{ fontSize: 8, color: tc, fontWeight: 600, margin: 0 }}>{c.issuer} · {c.date}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* INTERESTS */}
          {intr.length > 0 && (
            <>
              <FoldioSH tc={tc}>Interests</FoldioSH>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {intr.map(i => (
                  <span key={i.id} style={{
                    fontSize: 8, padding: '3px 9px', borderRadius: 6,
                    background: `${tc}10`, color: tc, fontWeight: 600,
                    border: `1px solid ${tc}20`,
                  }}>{i.name}</span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Bottom diagonal accent ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 6,
        background: `linear-gradient(90deg, ${tc} 0%, ${tc}80 50%, ${tc}30 100%)`,
      }} />
    </div>
  )
}

function FoldioSH({ tc, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, marginTop: 18 }}>
      <div style={{
        width: 16, height: 16, borderRadius: 4,
        background: `${tc}15`, border: `1.5px solid ${tc}40`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <div style={{ width: 6, height: 6, borderRadius: 1, background: tc }} />
      </div>
      <h2 style={{
        fontSize: 8, fontWeight: 900,
        textTransform: 'uppercase', letterSpacing: '0.24em',
        color: '#1c1c1e', margin: 0,
      }}>{children}</h2>
      <div style={{ flex: 1, height: 1, background: `${tc}20` }} />
    </div>
  )
}
