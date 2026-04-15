import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Elena Marchetti',
  jobTitle: 'Senior UX Researcher & Product Strategist',
  email: 'elena@email.com',
  phone: '+1 (555) 321-7890',
  location: 'San Francisco, CA',
  website: 'elenamarchetti.io',
  linkedin: 'linkedin.com/in/elenam',
  github: 'github.com/elenam',
  summary: 'Human-centered researcher with 7+ years uncovering insights that shape products used by millions. Bridging the gap between user needs and business goals through rigorous mixed-methods research, strategic thinking, and compelling storytelling.',
  experience: [
    { id: 'e1', role: 'Senior UX Researcher', company: 'Figma', location: 'San Francisco', startDate: 'Feb 2021', endDate: '', current: true, description: '• Led foundational research for Figma\'s collaboration suite — 40M+ users impacted\n• Established research ops framework reducing study turnaround by 55%\n• Partnered with 8 product teams to embed research into weekly sprints\n• Mentored 4 junior researchers; 2 promoted within 18 months' },
    { id: 'e2', role: 'UX Researcher', company: 'Dropbox', location: 'San Francisco', startDate: 'May 2018', endDate: 'Jan 2021', current: false, description: '• Conducted 200+ user interviews informing 3 major product launches\n• Built Dropbox\'s first longitudinal diary study program\n• Reduced onboarding drop-off by 38% through iterative usability testing' },
    { id: 'e3', role: 'Product Researcher', company: 'IDEO', location: 'Chicago', startDate: 'Aug 2016', endDate: 'Apr 2018', current: false, description: '• Delivered ethnographic research for healthcare and fintech clients\n• Co-facilitated 30+ design thinking workshops across 12 countries' },
  ],
  education: [
    { id: 'ed1', degree: 'MS in Human-Computer Interaction', school: 'Carnegie Mellon University', startDate: '2014', endDate: '2016', gpa: '3.97/4.0', achievements: 'Best Thesis Award · CHI 2016 Publication' },
    { id: 'ed2', degree: 'BA in Cognitive Science & Psychology', school: 'UC Berkeley', startDate: '2010', endDate: '2014', gpa: '3.88/4.0', achievements: 'Phi Beta Kappa' },
  ],
  skills: [
    { id: 's1', name: 'User Interviews', level: 98 },
    { id: 's2', name: 'Usability Testing', level: 95 },
    { id: 's3', name: 'Survey Design', level: 90 },
    { id: 's4', name: 'Data Analysis', level: 85 },
    { id: 's5', name: 'Figma / Prototyping', level: 82 },
    { id: 's6', name: 'Workshop Facilitation', level: 92 },
  ],
  projects: [
    { id: 'p1', name: 'Collaboration Futures Study', description: 'Multi-year longitudinal study on remote collaboration patterns. Findings shaped Figma\'s 2023 roadmap and were published at CHI 2023.', tech: 'Diary Studies, Interviews, Quant Analysis', link: 'figma.com/research' },
    { id: 'p2', name: 'Accessibility Research Initiative', description: 'Led cross-functional research on accessibility needs for 500K+ users with disabilities. Resulted in 12 new accessibility features.', tech: 'Participatory Design, Contextual Inquiry', link: '' },
  ],
  certifications: [
    { id: 'c1', name: 'Nielsen Norman UX Certification', issuer: 'NN/g', date: '2022-11' },
    { id: 'c2', name: 'Google Data Analytics', issuer: 'Google', date: '2021-06' },
  ],
  languages: [
    { id: 'l1', name: 'English', proficiency: 'Native' },
    { id: 'l2', name: 'Italian', proficiency: 'Fluent' },
    { id: 'l3', name: 'French', proficiency: 'Intermediate' },
  ],
  interests: [
    { id: 'i1', name: 'Ceramics' },
    { id: 'i2', name: 'Trail Running' },
    { id: 'i3', name: 'Botanical Illustration' },
    { id: 'i4', name: 'Meditation' },
  ],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

export default function PetalTemplate({ resume }) {
  const {
    personalInfo = {}, experience = [], education = [], skills = [],
    projects = [], certifications = [], languages = [], interests = [],
    themeColor = '#7c9885', fontFamily,
  } = resume

  const tc  = themeColor
  const ff  = fontFamily || 'Georgia, serif'
  const ff2 = 'Arial, sans-serif'

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
      background: '#f9f7f4',
      fontFamily: ff2,
      fontSize: '10px',
      lineHeight: 1.65,
      width: 794,
      minHeight: 1123,
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      color: '#2d2d2d',
    }}>

      {/* ── Subtle dot-grid background pattern ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle, ${tc}18 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
        opacity: 0.6,
      }} />

      {/* ── Large decorative circle top-right ── */}
      <div style={{
        position: 'absolute', top: -80, right: -80,
        width: 320, height: 320, borderRadius: '50%',
        background: `${tc}0e`, pointerEvents: 'none',
        border: `1px solid ${tc}15`,
      }} />
      <div style={{
        position: 'absolute', top: 20, right: 20,
        width: 160, height: 160, borderRadius: '50%',
        background: `${tc}08`, pointerEvents: 'none',
      }} />

      {/* ── Small circle bottom-left ── */}
      <div style={{
        position: 'absolute', bottom: -60, left: -60,
        width: 220, height: 220, borderRadius: '50%',
        background: `${tc}0a`, pointerEvents: 'none',
        border: `1px solid ${tc}12`,
      }} />

      {/* ══════════════════════════════════════
          HEADER
      ══════════════════════════════════════ */}
      <div style={{ padding: '40px 44px 28px', position: 'relative', zIndex: 1 }}>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}>

          {/* Photo */}
          {photo ? (
            <div style={{
              width: 80, height: 80, borderRadius: '50%',
              overflow: 'hidden', flexShrink: 0,
              border: `3px solid ${tc}30`,
              boxShadow: `0 4px 20px ${tc}20`,
            }}>
              <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ) : (
            <div style={{
              width: 80, height: 80, borderRadius: '50%', flexShrink: 0,
              background: `${tc}15`, border: `3px solid ${tc}25`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 26, fontWeight: 700, color: tc,
              fontFamily: ff,
            }}>{name.charAt(0)}</div>
          )}

          {/* Name block */}
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontFamily: ff,
              fontSize: 28, fontWeight: 700, color: '#1a1a1a',
              margin: '0 0 2px', letterSpacing: '-0.01em', lineHeight: 1.15,
            }}>{name}</h1>
            <p style={{
              fontSize: 10.5, color: tc, fontWeight: 600,
              margin: '0 0 14px', letterSpacing: '0.06em',
              textTransform: 'uppercase', fontFamily: ff2,
            }}>{jobTitle}</p>

            {/* Contact row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px' }}>
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
                  fontSize: 8.5, color: '#5a5a5a',
                }}>
                  <Icon size={8} color={tc} />
                  {val}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Summary — full width, italic, elegant */}
        {summary && (
          <div style={{
            marginTop: 18,
            paddingTop: 16,
            borderTop: `1px solid ${tc}20`,
          }}>
            <p style={{
              fontFamily: ff,
              fontSize: 10, color: '#4a4a4a',
              lineHeight: 1.9, margin: 0,
              fontStyle: 'italic',
              maxWidth: 620,
            }}>{summary}</p>
          </div>
        )}
      </div>

      {/* ── Thin divider ── */}
      <div style={{
        height: 1, margin: '0 44px',
        background: `linear-gradient(to right, ${tc}40, ${tc}15, transparent)`,
        position: 'relative', zIndex: 1,
      }} />

      {/* ══════════════════════════════════════
          BODY
      ══════════════════════════════════════ */}
      <div style={{ display: 'flex', position: 'relative', zIndex: 1 }}>

        {/* ── MAIN LEFT ── */}
        <div style={{ flex: 1, padding: '20px 24px 40px 44px' }}>

          {/* EXPERIENCE */}
          <PetalSection tc={tc} ff={ff} label="Work Experience" />
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: 20, display: 'flex', gap: 14 }}>
              {/* Timeline dot + line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: 3 }}>
                <div style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: tc, flexShrink: 0,
                  boxShadow: `0 0 0 3px ${tc}20`,
                }} />
                {i < exp.length - 1 && (
                  <div style={{ width: 1, flex: 1, background: `${tc}20`, marginTop: 4 }} />
                )}
              </div>

              {/* Content */}
              <div style={{ flex: 1, paddingBottom: i < exp.length - 1 ? 8 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 11, color: '#1a1a1a', margin: 0, fontFamily: ff }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '1px 0' }}>
                      {e.company}
                      {e.location && <span style={{ color: '#9ca3af', fontWeight: 400 }}> · {e.location}</span>}
                    </p>
                  </div>
                  <span style={{
                    fontSize: 8, color: '#888', fontStyle: 'italic',
                    whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0, marginTop: 2,
                  }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#555', fontSize: 9, lineHeight: 1.75, margin: '2px 0 0' }}>{l}</p>
                ))}
              </div>
            </div>
          ))}

          {/* PROJECTS */}
          {prj.length > 0 && (
            <>
              <PetalSection tc={tc} ff={ff} label="Selected Projects" />
              {prj.map(p => (
                <div key={p.id} style={{
                  marginBottom: 12,
                  padding: '11px 14px',
                  background: `${tc}07`,
                  borderRadius: 10,
                  border: `1px solid ${tc}18`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                    <p style={{ fontWeight: 700, fontSize: 10.5, color: '#1a1a1a', margin: 0, fontFamily: ff }}>{p.name}</p>
                    {p.link && <span style={{ fontSize: 8, color: tc }}>{p.link}</span>}
                  </div>
                  {p.tech && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 5 }}>
                      {p.tech.split(',').map((t, ti) => (
                        <span key={ti} style={{
                          fontSize: 7.5, padding: '1px 8px', borderRadius: 20,
                          background: `${tc}12`, color: tc, fontWeight: 600,
                          border: `1px solid ${tc}20`,
                        }}>{t.trim()}</span>
                      ))}
                    </div>
                  )}
                  {p.description && <p style={{ fontSize: 9, color: '#555', margin: 0, lineHeight: 1.7 }}>{p.description}</p>}
                </div>
              ))}
            </>
          )}

          {/* EDUCATION */}
          <PetalSection tc={tc} ff={ff} label="Education" />
          {edu.map(e => (
            <div key={e.id} style={{ marginBottom: 14, display: 'flex', gap: 14 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: 3 }}>
                <div style={{
                  width: 8, height: 8, borderRadius: 2,
                  background: `${tc}60`, transform: 'rotate(45deg)', flexShrink: 0,
                }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <p style={{ fontWeight: 700, fontSize: 10.5, color: '#1a1a1a', margin: 0, fontFamily: ff }}>{e.degree}</p>
                  <span style={{ fontSize: 8, color: '#888', fontStyle: 'italic', whiteSpace: 'nowrap', marginLeft: 8 }}>{e.startDate} — {e.endDate}</span>
                </div>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '1px 0' }}>{e.school}</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {e.gpa && <span style={{ fontSize: 8.5, color: '#777' }}>GPA: <strong style={{ color: '#333' }}>{e.gpa}</strong></span>}
                  {e.achievements && <span style={{ fontSize: 8.5, color: tc, fontStyle: 'italic' }}>{e.achievements}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── RIGHT SIDEBAR ── */}
        <div style={{
          width: 200, flexShrink: 0,
          padding: '20px 20px 40px 16px',
          borderLeft: `1px solid ${tc}15`,
        }}>

          {/* SKILLS */}
          <PetalSection tc={tc} ff={ff} label="Skills" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 4 }}>
            {skl.map(s => (
              <div key={s.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 9, color: '#333', fontWeight: 600 }}>{s.name}</span>
                  <span style={{ fontSize: 7.5, color: tc }}>{s.level}%</span>
                </div>
                {/* Dotted progress */}
                <div style={{ display: 'flex', gap: 3 }}>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} style={{
                      flex: 1, height: 5, borderRadius: 2,
                      background: i < Math.round(s.level / 10) ? tc : `${tc}18`,
                      transition: 'background 0.2s',
                    }} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* LANGUAGES */}
          {lang.length > 0 && (
            <>
              <PetalSection tc={tc} ff={ff} label="Languages" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 4 }}>
                {lang.map(l => (
                  <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 9, color: '#333', fontWeight: 600 }}>{l.name}</span>
                    <span style={{
                      fontSize: 7.5, padding: '2px 8px', borderRadius: 20,
                      background: `${tc}10`, color: tc, fontWeight: 600,
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
              <PetalSection tc={tc} ff={ff} label="Certifications" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 4 }}>
                {cert.map(c => (
                  <div key={c.id} style={{
                    padding: '8px 10px',
                    background: `${tc}07`,
                    borderRadius: 8,
                    border: `1px solid ${tc}15`,
                  }}>
                    <p style={{ fontWeight: 700, fontSize: 8.5, color: '#1a1a1a', margin: '0 0 1px' }}>{c.name}</p>
                    <p style={{ fontSize: 8, color: tc, fontWeight: 600, margin: 0 }}>{c.issuer}</p>
                    <p style={{ fontSize: 7.5, color: '#aaa', margin: '1px 0 0' }}>{c.date}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* INTERESTS */}
          {intr.length > 0 && (
            <>
              <PetalSection tc={tc} ff={ff} label="Interests" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {intr.map(i => (
                  <div key={i.id} style={{
                    display: 'flex', alignItems: 'center', gap: 7,
                    fontSize: 9, color: '#444',
                  }}>
                    <div style={{
                      width: 5, height: 5, borderRadius: '50%',
                      background: `${tc}60`, flexShrink: 0,
                    }} />
                    {i.name}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Footer watermark line ── */}
      <div style={{
        position: 'absolute', bottom: 18, left: 44, right: 44,
        height: 1,
        background: `linear-gradient(to right, transparent, ${tc}25, transparent)`,
        zIndex: 1,
      }} />
    </div>
  )
}

function PetalSection({ tc, ff, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, marginTop: 20 }}>
      {/* Petal ornament */}
      <div style={{ display: 'flex', gap: 2, flexShrink: 0 }}>
        <div style={{ width: 4, height: 8, borderRadius: 99, background: tc, opacity: 0.9 }} />
        <div style={{ width: 4, height: 8, borderRadius: 99, background: tc, opacity: 0.5, marginTop: 2 }} />
        <div style={{ width: 4, height: 8, borderRadius: 99, background: tc, opacity: 0.25, marginTop: 4 }} />
      </div>
      <h2 style={{
        fontFamily: ff,
        fontSize: 8.5, fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.22em',
        color: '#2d2d2d', margin: 0,
      }}>{label}</h2>
      <div style={{ flex: 1, height: '0.5px', background: `${tc}25` }} />
    </div>
  )
}
