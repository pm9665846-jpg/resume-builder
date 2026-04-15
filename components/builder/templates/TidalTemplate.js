import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Isabella Torres', jobTitle: 'VP of Marketing & Brand Strategy',
  email: 'isabella@email.com', phone: '+1 (555) 789-0123',
  location: 'Miami, FL', website: 'isabellatorres.co',
  linkedin: 'linkedin.com/in/isabellat', github: 'github.com/isabellat',
  summary: 'Results-driven marketing executive with 10+ years building iconic brands across luxury, tech, and lifestyle sectors. Generated $120M+ in attributed revenue through integrated campaigns. Expert in brand storytelling, digital transformation, and high-performance team leadership.',
  experience: [
    { id: 'e1', role: 'VP of Marketing', company: 'Airbnb Luxe', location: 'Miami', startDate: 'Jan 2021', endDate: '', current: true, description: '• Launched "Live Anywhere" campaign reaching 85M+ impressions globally\n• Grew luxury segment revenue by 340% in 18 months\n• Built and led 35-person marketing team across 4 continents' },
    { id: 'e2', role: 'Senior Brand Director', company: 'LVMH', location: 'New York', startDate: 'Mar 2017', endDate: 'Dec 2020', current: false, description: '• Directed brand strategy for 3 flagship luxury brands\n• Increased brand equity scores by 28% across target demographics\n• Managed $45M annual marketing budget with 94% efficiency' },
    { id: 'e3', role: 'Marketing Manager', company: 'Apple', location: 'Cupertino', startDate: 'Jun 2014', endDate: 'Feb 2017', current: false, description: "• Led product launch campaigns for iPhone 7 and AirPods\n• Collaborated with Jony Ive's team on brand visual language" },
  ],
  education: [{ id: 'ed1', degree: 'MBA — Marketing & Strategy', school: 'Harvard Business School', startDate: '2012', endDate: '2014', gpa: '3.96/4.0', achievements: "Baker Scholar · Dean's Award" }],
  skills: [{ id: 's1', name: 'Brand Strategy', level: 97 }, { id: 's2', name: 'Digital Marketing', level: 93 }, { id: 's3', name: 'Campaign Mgmt', level: 95 }, { id: 's4', name: 'Data Analytics', level: 82 }, { id: 's5', name: 'Team Leadership', level: 96 }],
  projects: [{ id: 'p1', name: 'Live Anywhere Campaign', description: 'Global integrated campaign across 40 markets. Won Cannes Lions Grand Prix 2023.', tech: 'Brand Strategy, Film, Digital, OOH', link: 'liveanywhere.airbnb.com' }],
  certifications: [{ id: 'c1', name: 'Google Analytics 4 Certified', issuer: 'Google', date: '2023-08' }, { id: 'c2', name: 'HubSpot Marketing Hub', issuer: 'HubSpot', date: '2022-11' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Native' }, { id: 'l2', name: 'Spanish', proficiency: 'Fluent' }, { id: 'l3', name: 'French', proficiency: 'Intermediate' }],
  interests: [{ id: 'i1', name: 'Sailing' }, { id: 'i2', name: 'Photography' }, { id: 'i3', name: 'Yoga' }, { id: 'i4', name: 'Wine Tasting' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

export default function TidalTemplate({ resume }) {
  const {
    personalInfo = {}, experience = [], education = [], skills = [],
    projects = [], certifications = [], languages = [], interests = [],
    themeColor = '#0d9488', fontFamily,
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

  // Fixed color palette
  const deepOcean = '#0f4c75'
  const teal      = '#0d9488'
  const coral     = '#f97316'
  const gold      = '#f59e0b'
  const lightFoam = '#f0fdfa'
  const midWater  = '#ccfbf1'

  // Buoy-style section header
  const SectionHeader = ({ title }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <div style={{
        width: 10, height: 10, borderRadius: '50%', flexShrink: 0,
        background: `linear-gradient(135deg, ${coral}, ${teal})`,
        boxShadow: `0 0 6px ${coral}66`,
      }} />
      <span style={{ fontSize: 11, fontWeight: 800, color: deepOcean, textTransform: 'uppercase', letterSpacing: '0.12em', whiteSpace: 'nowrap' }}>
        {title}
      </span>
      <svg viewBox="0 0 150 6" style={{ flex: 1, height: 6 }} preserveAspectRatio="none">
        <path d="M0,3 C20,0 40,6 60,3 C80,0 100,6 120,3 C135,1 145,4 150,3" stroke="url(#tideGrad)" strokeWidth="1.5" fill="none" />
        <defs>
          <linearGradient id="tideGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0d9488" />
            <stop offset="50%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )

  // Circular skill arc indicator
  const SkillCircle = ({ name: skillName, level }) => {
    const r = 18
    const circ = 2 * Math.PI * r // ~113.1
    const dash = (level / 100) * circ
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <svg width="44" height="44" viewBox="0 0 44 44">
          <circle cx="22" cy="22" r={r} fill="none" stroke="#e2e8f0" strokeWidth="4" />
          <circle
            cx="22" cy="22" r={r} fill="none"
            stroke="url(#skillGrad)" strokeWidth="4"
            strokeDasharray={`${dash} ${circ}`}
            strokeLinecap="round"
            transform="rotate(-90 22 22)"
          />
          <defs>
            <linearGradient id="skillGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
          </defs>
          <text x="22" y="26" textAnchor="middle" fontSize="8" fontWeight="700" fill={deepOcean}>{level}%</text>
        </svg>
        <span style={{ fontSize: 8, color: deepOcean, fontWeight: 600, textAlign: 'center', maxWidth: 52, lineHeight: 1.2 }}>{skillName}</span>
      </div>
    )
  }

  return (
    <div style={{ width: 794, minHeight: 1123, fontFamily: ff, background: '#ffffff', position: 'relative', overflow: 'hidden' }}>

      {/* ── HEADER ── */}
      <div style={{ position: 'relative', background: 'linear-gradient(160deg, #0f4c75 0%, #0d9488 45%, #0891b2 100%)', paddingTop: 28, paddingLeft: 32, paddingRight: 32, paddingBottom: 0, minHeight: 200 }}>

        {/* Header content row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
          {/* Left: name + title + contact */}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 30, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 4 }}>{name}</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: coral, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>{jobTitle}</div>

            {/* Contact pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {[
                { icon: <Mail size={9} />, text: email },
                { icon: <Phone size={9} />, text: phone },
                { icon: <MapPin size={9} />, text: location },
                website && { icon: <Globe size={9} />, text: website },
                linkedin && { icon: <Link2 size={9} />, text: linkedin },
                github && { icon: <GitBranch size={9} />, text: github },
              ].filter(Boolean).map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 4,
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: 20, padding: '3px 9px',
                  color: '#ffffff', fontSize: 8.5, fontWeight: 500,
                }}>
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: circular photo */}
          {photo ? (
            <div style={{ flexShrink: 0, marginLeft: 20, marginTop: 4 }}>
              <img src={photo} alt="profile" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '3px solid #ffffff', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }} />
            </div>
          ) : (
            <div style={{ flexShrink: 0, marginLeft: 20, marginTop: 4, width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', border: '3px solid rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 26, fontWeight: 800, color: 'rgba(255,255,255,0.8)' }}>{name.charAt(0)}</span>
            </div>
          )}
        </div>

        {/* 3-layer wave bottom of header */}
        <div style={{ position: 'relative', height: 80, marginLeft: -32, marginRight: -32 }}>
          <svg viewBox="0 0 794 80" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%' }} preserveAspectRatio="none">
            {/* Wave 3 — top, most transparent */}
            <path d="M0,60 C150,35 320,75 500,55 C650,35 740,65 794,55 L794,80 L0,80 Z" fill="rgba(255,255,255,0.2)" />
            {/* Wave 2 — middle */}
            <path d="M0,50 C100,20 280,70 450,45 C600,20 720,60 794,50 L794,80 L0,80 Z" fill="rgba(255,255,255,0.4)" />
            {/* Wave 1 — bottom, solid white */}
            <path d="M0,40 C120,70 250,10 400,40 C550,70 680,15 794,40 L794,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* ── MID-WAVE SEPARATOR (coral/gold tide) ── */}
      <div style={{ marginTop: -2, lineHeight: 0 }}>
        <svg viewBox="0 0 794 18" style={{ width: '100%', height: 18, display: 'block' }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="tideWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          <path d="M0,8 C80,2 180,16 300,8 C420,0 520,14 640,8 C720,4 770,12 794,8 L794,18 L0,18 Z" fill="url(#tideWaveGrad)" opacity="0.18" />
          <path d="M0,12 C100,4 220,18 380,10 C520,3 660,16 794,10 L794,18 L0,18 Z" fill="url(#tideWaveGrad)" opacity="0.28" />
        </svg>
      </div>

      {/* ── BODY ── */}
      <div style={{ display: 'flex', gap: 0, padding: '18px 0 0 0' }}>

        {/* LEFT COLUMN — 60% */}
        <div style={{ width: '60%', padding: '0 20px 24px 28px' }}>

          {/* Summary */}
          {summary && (
            <div style={{ marginBottom: 20 }}>
              <SectionHeader title="About" />
              <p style={{ fontSize: 9.5, color: '#374151', lineHeight: 1.65, margin: 0, background: lightFoam, borderLeft: `3px solid ${teal}`, padding: '8px 12px', borderRadius: '0 8px 8px 8px' }}>
                {summary}
              </p>
            </div>
          )}

          {/* Experience — Tide Pool Cards */}
          {exp.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <SectionHeader title="Experience" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {exp.map((e, i) => {
                  const buoyColors = [coral, teal, gold, '#0891b2', '#8b5cf6']
                  const buoyColor = buoyColors[i % buoyColors.length]
                  return (
                    <div key={e.id || i} style={{
                      background: '#ffffff',
                      border: `1px solid ${midWater}`,
                      borderRadius: '0 12px 12px 12px',
                      padding: '12px 14px 12px 14px',
                      position: 'relative',
                      boxShadow: '0 2px 8px rgba(13,148,136,0.08)',
                    }}>
                      {/* Buoy dot top-left */}
                      <div style={{
                        position: 'absolute', top: -5, left: -5,
                        width: 12, height: 12, borderRadius: '50%',
                        background: buoyColor,
                        border: '2px solid #ffffff',
                        boxShadow: `0 0 8px ${buoyColor}88`,
                      }} />

                      {/* Top row: company + date badge */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                        <div style={{ fontSize: 12, fontWeight: 800, color: deepOcean, letterSpacing: '-0.01em' }}>{g(e.company, '')}</div>
                        <div style={{
                          fontSize: 7.5, fontWeight: 700, color: '#ffffff',
                          background: `linear-gradient(90deg, ${deepOcean}, ${teal})`,
                          borderRadius: 10, padding: '2px 8px', whiteSpace: 'nowrap', flexShrink: 0, marginLeft: 8,
                        }}>
                          {g(e.startDate, '')} — {e.current ? 'Present' : g(e.endDate, '')}
                        </div>
                      </div>

                      {/* Role */}
                      <div style={{ fontSize: 10, fontWeight: 700, color: teal, marginBottom: 2 }}>{g(e.role, '')}</div>

                      {/* Location */}
                      {e.location && (
                        <div style={{ fontSize: 8, color: '#94a3b8', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 3 }}>
                          <MapPin size={7} />
                          {e.location}
                        </div>
                      )}

                      {/* Description */}
                      {e.description && (
                        <div style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                          {e.description}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Education */}
          {edu.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <SectionHeader title="Education" />
              {edu.map((ed, i) => (
                <div key={ed.id || i} style={{
                  background: lightFoam,
                  border: `1px solid ${midWater}`,
                  borderRadius: '0 12px 12px 12px',
                  padding: '10px 14px',
                  position: 'relative',
                  marginBottom: 8,
                }}>
                  <div style={{ position: 'absolute', top: -5, left: -5, width: 12, height: 12, borderRadius: '50%', background: gold, border: '2px solid #ffffff', boxShadow: `0 0 8px ${gold}88` }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 800, color: deepOcean }}>{g(ed.degree, '')}</div>
                      <div style={{ fontSize: 9.5, fontWeight: 600, color: teal, marginTop: 1 }}>{g(ed.school, '')}</div>
                      {ed.achievements && <div style={{ fontSize: 8, color: coral, marginTop: 3, fontWeight: 600 }}>{ed.achievements}</div>}
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 8 }}>
                      <div style={{ fontSize: 7.5, fontWeight: 700, color: '#ffffff', background: `linear-gradient(90deg, ${gold}, ${coral})`, borderRadius: 10, padding: '2px 8px', marginBottom: 3 }}>
                        {g(ed.startDate, '')} — {g(ed.endDate, '')}
                      </div>
                      {ed.gpa && <div style={{ fontSize: 7.5, color: '#64748b', fontWeight: 600 }}>GPA: {ed.gpa}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Projects — page break before this section in PDF */}
          {prj.length > 0 && (
            <div data-page-break="true" style={{ marginBottom: 20, pageBreakBefore: 'always', breakBefore: 'page' }}>
              <SectionHeader title="Projects" />
              {prj.map((p, i) => (
                <div key={p.id || i} style={{
                  background: '#ffffff',
                  border: `1px solid ${midWater}`,
                  borderRadius: '0 12px 12px 12px',
                  padding: '10px 14px',
                  position: 'relative',
                  marginBottom: 8,
                  boxShadow: '0 2px 6px rgba(13,148,136,0.06)',
                }}>
                  <div style={{ position: 'absolute', top: -5, left: -5, width: 12, height: 12, borderRadius: '50%', background: `linear-gradient(135deg, ${teal}, ${deepOcean})`, border: '2px solid #ffffff', boxShadow: `0 0 8px ${teal}88` }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: deepOcean }}>{g(p.name, '')}</div>
                    {p.link && (
                      <div style={{ fontSize: 7.5, color: teal, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Globe size={7} />{p.link}
                      </div>
                    )}
                  </div>
                  {p.description && <div style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.55, marginBottom: 4 }}>{p.description}</div>}
                  {p.tech && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {p.tech.split(',').map((t, ti) => (
                        <span key={ti} style={{ fontSize: 7.5, background: midWater, color: deepOcean, borderRadius: 8, padding: '2px 7px', fontWeight: 600 }}>{t.trim()}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN — 40% */}
        <div style={{ width: '40%', padding: '0 24px 24px 12px', borderLeft: `2px solid ${midWater}` }}>

          {/* Skills — Circular Arc Indicators */}
          {skl.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <SectionHeader title="Skills" />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'flex-start' }}>
                {skl.map((s, i) => (
                  <SkillCircle key={s.id || i} name={s.name} level={s.level || 80} />
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {lang.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <SectionHeader title="Languages" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {lang.map((l, i) => (
                  <div key={l.id || i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: lightFoam, borderRadius: 8, padding: '5px 10px', border: `1px solid ${midWater}` }}>
                    <span style={{ fontSize: 9, fontWeight: 700, color: deepOcean }}>{l.name}</span>
                    <span style={{ fontSize: 8, color: teal, fontWeight: 600, background: midWater, borderRadius: 6, padding: '1px 7px' }}>{l.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {cert.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <SectionHeader title="Certifications" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {cert.map((c, i) => (
                  <div key={c.id || i} style={{ background: '#ffffff', border: `1px solid ${midWater}`, borderRadius: '0 10px 10px 10px', padding: '7px 10px', position: 'relative', boxShadow: '0 1px 4px rgba(13,148,136,0.07)' }}>
                    <div style={{ position: 'absolute', top: -4, left: -4, width: 9, height: 9, borderRadius: '50%', background: gold, border: '2px solid #ffffff' }} />
                    <div style={{ fontSize: 9, fontWeight: 700, color: deepOcean, lineHeight: 1.3 }}>{c.name}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                      <span style={{ fontSize: 7.5, color: teal, fontWeight: 600 }}>{c.issuer}</span>
                      {c.date && <span style={{ fontSize: 7.5, color: '#94a3b8' }}>{c.date}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interests */}
          {intr.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <SectionHeader title="Interests" />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {intr.map((item, i) => {
                  const tagColors = [
                    { bg: `${coral}18`, color: coral, border: `${coral}44` },
                    { bg: `${teal}18`, color: teal, border: `${teal}44` },
                    { bg: `${gold}18`, color: '#b45309', border: `${gold}44` },
                    { bg: `${deepOcean}12`, color: deepOcean, border: `${deepOcean}44` },
                  ]
                  const tc2 = tagColors[i % tagColors.length]
                  return (
                    <span key={item.id || i} style={{ fontSize: 8, fontWeight: 600, background: tc2.bg, color: tc2.color, border: `1px solid ${tc2.border}`, borderRadius: 12, padding: '3px 9px' }}>
                      {item.name}
                    </span>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── FOOTER WAVE ── */}
      <div style={{ marginTop: 'auto', lineHeight: 0 }}>
        <svg viewBox="0 0 794 36" style={{ width: '100%', height: 36, display: 'block' }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="footerWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0f4c75" />
              <stop offset="33%" stopColor="#0d9488" />
              <stop offset="66%" stopColor="#0891b2" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
          {/* Layer 1 */}
          <path d="M0,28 C100,10 220,36 380,22 C520,10 660,32 794,20 L794,36 L0,36 Z" fill="url(#footerWaveGrad)" opacity="0.25" />
          {/* Layer 2 */}
          <path d="M0,32 C120,18 260,36 440,26 C580,16 700,34 794,26 L794,36 L0,36 Z" fill="url(#footerWaveGrad)" opacity="0.45" />
          {/* Layer 3 */}
          <path d="M0,36 C150,24 300,36 500,30 C650,24 740,36 794,32 L794,36 L0,36 Z" fill="url(#footerWaveGrad)" opacity="0.8" />
        </svg>
      </div>

    </div>
  )
}
