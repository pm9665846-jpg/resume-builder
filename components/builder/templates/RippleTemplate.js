import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Meera Pillai', jobTitle: 'Senior Graphic Designer & Visual Artist',
  email: 'meera@email.com', phone: '+91 98765 11223',
  location: 'Kochi, India', website: 'meerapillai.design',
  linkedin: 'linkedin.com/in/meerapillai', github: 'github.com/meerapillai',
  summary: 'Award-winning graphic designer with 9+ years creating visual identities, brand systems, and digital experiences. Worked with 80+ clients across India, UAE, and Europe. Passionate about the intersection of traditional art and modern design.',
  experience: [
    { id: 'e1', role: 'Senior Graphic Designer', company: 'Pentagram India', location: 'Mumbai', startDate: 'Mar 2020', endDate: '', current: true, description: '• Led visual identity projects for 15+ Fortune 500 brands\n• Built and managed a team of 6 junior designers\n• Won Red Dot Design Award 2022 and 2023' },
    { id: 'e2', role: 'Graphic Designer', company: 'Ogilvy Mumbai', location: 'Mumbai', startDate: 'Jun 2017', endDate: 'Feb 2020', current: false, description: '• Designed integrated campaigns for Unilever, Nestlé, and Tata\n• Created motion graphics for 30+ TV commercials\n• Increased client brand recall by 45% through visual refresh' },
    { id: 'e3', role: 'Junior Designer', company: 'Elephant Design', location: 'Pune', startDate: 'Aug 2015', endDate: 'May 2017', current: false, description: '• Designed packaging for 50+ FMCG products\n• Developed brand guidelines for 12 startups' },
  ],
  education: [{ id: 'ed1', degree: 'BDes Visual Communication', school: 'NID Ahmedabad', startDate: '2011', endDate: '2015', gpa: 'Distinction', achievements: 'Best Portfolio Award · NID Gold Medal' }],
  skills: [{ id: 's1', name: 'Brand Identity', level: 97 }, { id: 's2', name: 'Adobe Suite', level: 98 }, { id: 's3', name: 'Motion Design', level: 88 }, { id: 's4', name: 'Typography', level: 95 }, { id: 's5', name: 'UI/UX', level: 82 }, { id: 's6', name: 'Illustration', level: 90 }],
  projects: [{ id: 'p1', name: 'Kerala Tourism Rebrand', description: 'Complete visual identity overhaul for Kerala Tourism. New brand system deployed across 40+ touchpoints. Won National Tourism Award 2023.', tech: 'Brand Strategy, Identity Design, Motion', link: 'keralatourism.org' }],
  certifications: [{ id: 'c1', name: 'Google UX Design', issuer: 'Google', date: '2023-05' }, { id: 'c2', name: 'Motion Design Pro', issuer: 'School of Motion', date: '2022-03' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Malayalam', proficiency: 'Native' }, { id: 'l3', name: 'Hindi', proficiency: 'Fluent' }],
  interests: [{ id: 'i1', name: 'Kathakali' }, { id: 'i2', name: 'Watercolors' }, { id: 'i3', name: 'Photography' }, { id: 'i4', name: 'Pottery' }, { id: 'i5', name: 'Surfing' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

function RippleSH({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, marginTop: 22 }}>
      <svg width="18" height="18" viewBox="0 0 18 18" style={{ flexShrink: 0 }}>
        <circle cx="9" cy="9" r="3" fill={tc} opacity="0.9" />
        <circle cx="9" cy="9" r="6" fill="none" stroke={tc} strokeWidth="1" opacity="0.5" />
        <circle cx="9" cy="9" r="9" fill="none" stroke={tc} strokeWidth="0.8" opacity="0.25" />
      </svg>
      <span style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#0f172a' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${tc}40, transparent)` }} />
    </div>
  )
}

function DiagDivider({ tc }) {
  return (
    <svg viewBox="0 0 734 12" style={{ width: '100%', height: 12, display: 'block', margin: '14px 0' }} preserveAspectRatio="none">
      <path d="M0,10 L734,2" stroke={`${tc}30`} strokeWidth="1" fill="none" />
      <path d="M0,10 C200,8 400,4 734,2" stroke={tc} strokeWidth="1.5" fill="none" opacity="0.5" />
    </svg>
  )
}

export default function RippleTemplate({ resume }) {
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
  const interests      = (r.interests?.length       ? r.interests      : (r.interests || S.interests))

  const tc         = g(r.themeColor, '#0891b2')
  const fontFamily = g(r.fontFamily, "'Inter', 'Helvetica Neue', Arial, sans-serif")

  const contactItems = [
    { icon: Mail,      val: email    },
    { icon: Phone,     val: phone    },
    { icon: MapPin,    val: location },
    { icon: Globe,     val: website  },
    { icon: Link2,     val: linkedin },
    { icon: GitBranch, val: github   },
  ].filter(c => c.val && String(c.val).trim() !== '')

  return (
    <div style={{
      width: 794,
      minHeight: 1123,
      fontFamily,
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* ── LEFT VERTICAL WAVE STRIP ── */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 60, overflow: 'hidden', zIndex: 1 }}>
        <svg viewBox="0 0 60 1123" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="vGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={tc} stopOpacity="0.9" />
              <stop offset="50%" stopColor="#0e7490" stopOpacity="0.7" />
              <stop offset="100%" stopColor={tc} stopOpacity="0.9" />
            </linearGradient>
          </defs>
          {/* Wave 1 — back */}
          <path d="M0,0 C30,100 -10,200 20,300 C50,400 0,500 30,600 C60,700 10,800 40,900 C70,1000 20,1100 0,1123 L0,0 Z" fill={tc} opacity="0.2" />
          {/* Wave 2 — mid */}
          <path d="M0,0 C20,80 -5,180 15,280 C35,380 5,480 25,580 C45,680 0,780 30,880 C55,980 15,1080 0,1123 L0,0 Z" fill={tc} opacity="0.4" />
          {/* Wave 3 — front */}
          <path d="M0,0 C15,60 0,160 10,260 C20,360 -5,460 15,560 C35,660 5,760 20,860 C40,960 10,1060 0,1123 L0,0 Z" fill={tc} opacity="0.7" />
        </svg>
      </div>

      {/* ── CIRCULAR RIPPLE DECORATIONS — top-right ── */}
      <div style={{ position: 'absolute', top: -60, right: -60, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'relative', width: 200, height: 200 }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: 200, height: 200, borderRadius: '50%', background: `${tc}06` }} />
          <div style={{ position: 'absolute', top: 30, left: 30, width: 140, height: 140, borderRadius: '50%', background: `${tc}04` }} />
          <div style={{ position: 'absolute', top: 60, left: 60, width: 80, height: 80, borderRadius: '50%', background: `${tc}08` }} />
        </div>
      </div>

      {/* ── CIRCULAR RIPPLE DECORATIONS — bottom-left ── */}
      <div style={{ position: 'absolute', bottom: 60, left: 20, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'relative', width: 160, height: 160 }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: 160, height: 160, borderRadius: '50%', background: `${tc}05` }} />
          <div style={{ position: 'absolute', top: 30, left: 30, width: 100, height: 100, borderRadius: '50%', background: `${tc}08` }} />
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ position: 'relative', zIndex: 2, paddingLeft: 76, paddingRight: 32 }}>

        {/* ── HEADER ── */}
        <div style={{ paddingTop: 32, paddingBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20 }}>

            {/* Name + title + contact */}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 30, fontWeight: 900, color: '#0f172a', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                {name}
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: tc, marginTop: 5, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                {jobTitle}
              </div>

              {/* Contact row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 12 }}>
                {contactItems.map(({ icon: Icon, val }, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Icon size={9} color={tc} />
                    <span style={{ fontSize: 8, color: '#475569', fontWeight: 500 }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            {photo && (
              <div style={{ flexShrink: 0 }}>
                <img
                  src={photo}
                  alt={name}
                  style={{
                    width: 72, height: 72,
                    borderRadius: '50%',
                    border: `3px solid ${tc}25`,
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            )}
          </div>

          {/* Summary */}
          {summary && (
            <div style={{
              marginTop: 16,
              background: `${tc}08`,
              borderRadius: 8,
              padding: '12px 14px',
              borderLeft: `3px solid ${tc}40`,
            }}>
              <p style={{ fontSize: 8.5, color: '#475569', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>{summary}</p>
            </div>
          )}
        </div>

        <DiagDivider tc={tc} />

        {/* ── EXPERIENCE ── */}
        {experience.length > 0 && (
          <div>
            <RippleSH title="Experience" tc={tc} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {experience.map(exp => (
                <div key={exp.id} style={{ position: 'relative', paddingLeft: 18 }}>
                  {/* Left border with ripple dot */}
                  <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0,
                    width: 3, background: `${tc}`,
                    borderRadius: 2,
                  }} />
                  {/* Ripple center dot */}
                  <div style={{
                    position: 'absolute', left: -4, top: 8,
                    width: 11, height: 11,
                    borderRadius: '50%',
                    background: '#ffffff',
                    border: `2px solid ${tc}`,
                    boxShadow: `0 0 0 3px ${tc}20`,
                  }} />

                  <div style={{ paddingLeft: 6 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                      <div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>{exp.company}</div>
                        <div style={{ fontSize: 9, fontWeight: 600, color: tc, marginTop: 1 }}>
                          {exp.role}{exp.location ? ` · ${exp.location}` : ''}
                        </div>
                      </div>
                      <div style={{
                        fontSize: 7.5, color: '#64748b', fontWeight: 600,
                        background: `${tc}10`, borderRadius: 20,
                        padding: '2px 8px', whiteSpace: 'nowrap', flexShrink: 0,
                        border: `1px solid ${tc}20`,
                      }}>
                        {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                      </div>
                    </div>
                    {exp.description && (
                      <div style={{ marginTop: 5 }}>
                        {exp.description.split('\n').filter(Boolean).map((line, i) => (
                          <div key={i} style={{ fontSize: 8, color: '#475569', lineHeight: 1.65, marginBottom: 1 }}>{line}</div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <DiagDivider tc={tc} />

        {/* ── SKILLS — RIPPLE GRID ── */}
        {skills.length > 0 && (
          <div>
            <RippleSH title="Skills" tc={tc} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
              {skills.map(sk => {
                const level = sk.level || 70
                const size = level > 90 ? 52 : level > 75 ? 44 : 38
                const opacityHex = Math.round(level / 100 * 20).toString(16).padStart(2, '0')
                return (
                  <div key={sk.id} style={{
                    width: size, height: size,
                    borderRadius: '50%',
                    background: `${tc}${opacityHex}`,
                    border: `1px solid ${tc}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: `0 0 0 ${Math.round(size * 0.12)}px ${tc}10`,
                    position: 'relative',
                  }}>
                    <span style={{
                      fontSize: 7.5, fontWeight: 700, color: '#0f172a',
                      textAlign: 'center', lineHeight: 1.2,
                      padding: '0 4px',
                      wordBreak: 'break-word',
                    }}>{sk.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <DiagDivider tc={tc} />

        {/* ── PROJECTS ── */}
        {projects.length > 0 && (
          <div>
            <RippleSH title="Projects" tc={tc} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {projects.map(proj => (
                <div key={proj.id} style={{
                  background: `${tc}05`,
                  borderRadius: 8,
                  padding: '10px 14px',
                  border: `1px solid ${tc}15`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <span style={{ fontSize: 9.5, fontWeight: 700, color: '#0f172a' }}>{proj.name}</span>
                    {proj.link && (
                      <span style={{ fontSize: 7.5, color: tc, fontWeight: 600 }}>{proj.link}</span>
                    )}
                  </div>
                  {proj.description && (
                    <p style={{ fontSize: 8, color: '#475569', lineHeight: 1.65, margin: '0 0 6px' }}>{proj.description}</p>
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

        <DiagDivider tc={tc} />

        {/* ── EDUCATION ── */}
        {education.length > 0 && (
          <div>
            <RippleSH title="Education" tc={tc} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {education.map(ed => (
                <div key={ed.id} style={{
                  background: `${tc}08`,
                  borderRadius: 8,
                  padding: '10px 14px',
                  border: `1px solid ${tc}15`,
                }}>
                  <div style={{ fontSize: 9.5, fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>{ed.degree}</div>
                  <div style={{ fontSize: 8.5, fontWeight: 600, color: tc, marginTop: 2 }}>{ed.school}</div>
                  <div style={{ fontSize: 7.5, color: '#64748b', marginTop: 3 }}>
                    {ed.startDate}{ed.endDate ? ` – ${ed.endDate}` : ''}
                    {ed.gpa ? ` · ${ed.gpa}` : ''}
                  </div>
                  {ed.achievements && (
                    <div style={{ fontSize: 7.5, color: tc, fontWeight: 600, marginTop: 3 }}>🏅 {ed.achievements}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── LANGUAGES + CERTIFICATIONS row ── */}
        {(languages.length > 0 || certifications.length > 0) && (
          <div style={{ display: 'flex', gap: 24, marginTop: 4 }}>

            {/* Languages */}
            {languages.length > 0 && (
              <div style={{ flex: 1 }}>
                <RippleSH title="Languages" tc={tc} />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {languages.map(lang => (
                    <div key={lang.id} style={{
                      display: 'flex', alignItems: 'center', gap: 5,
                      background: `${tc}08`,
                      border: `1px solid ${tc}25`,
                      borderRadius: 20,
                      padding: '4px 10px',
                    }}>
                      <span style={{ fontSize: 8, fontWeight: 700, color: '#0f172a' }}>{lang.name}</span>
                      <span style={{ fontSize: 7, color: tc, fontWeight: 600 }}>{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {certifications.length > 0 && (
              <div style={{ flex: 1 }}>
                <RippleSH title="Certifications" tc={tc} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {certifications.map(cert => (
                    <div key={cert.id} style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      background: `${tc}06`,
                      border: `1px solid ${tc}18`,
                      borderRadius: 6,
                      padding: '6px 10px',
                    }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: tc, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: 8.5, fontWeight: 700, color: '#0f172a', lineHeight: 1.2 }}>{cert.name}</div>
                        <div style={{ fontSize: 7.5, color: '#64748b', marginTop: 1 }}>
                          {cert.issuer}{cert.date ? ` · ${cert.date}` : ''}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── INTERESTS — bubble pills ── */}
        {interests && interests.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <RippleSH title="Interests" tc={tc} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {interests.map(int => (
                <span key={int.id} style={{
                  fontSize: 7.5, fontWeight: 700,
                  color: tc,
                  background: `${tc}10`,
                  border: `1px solid ${tc}30`,
                  borderRadius: '50px',
                  padding: '5px 14px',
                  letterSpacing: '0.04em',
                }}>{int.name}</span>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
