import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Karan Mehta', jobTitle: 'Senior Game Developer & Unity Engineer',
  email: 'karan@email.com', phone: '+91 98765 55667',
  location: 'Hyderabad, India', website: 'karanmehta.games',
  linkedin: 'linkedin.com/in/karanmehta', github: 'github.com/karanmehta',
  summary: 'Passionate game developer with 7+ years building AAA mobile and PC games. Shipped 12 games with 50M+ total downloads. Expert in Unity, Unreal Engine, and real-time multiplayer systems. Led engineering teams at Nazara and MPL.',
  experience: [
    { id: 'e1', role: 'Senior Game Developer', company: 'Nazara Technologies', location: 'Hyderabad', startDate: 'Mar 2020', endDate: '', current: true, description: '• Led development of "Cricket Champions" — 15M+ downloads, #1 sports game India\n• Built real-time multiplayer system supporting 100K concurrent players\n• Reduced game load time by 60% through asset optimization and LOD systems' },
    { id: 'e2', role: 'Game Developer', company: 'MPL (Mobile Premier League)', location: 'Bengaluru', startDate: 'Jun 2017', endDate: 'Feb 2020', current: false, description: '• Developed 8 casual games with 20M+ combined downloads\n• Implemented anti-cheat system reducing fraud by 85%\n• Built cross-platform SDK used by 50+ game studios' },
    { id: 'e3', role: 'Junior Developer', company: 'Octro Inc', location: 'Noida', startDate: 'Aug 2015', endDate: 'May 2017', current: false, description: '• Contributed to Teen Patti Gold — 100M+ downloads\n• Optimized rendering pipeline for low-end Android devices' },
  ],
  education: [{ id: 'ed1', degree: 'B.Tech Computer Science', school: 'NIT Warangal', startDate: '2011', endDate: '2015', gpa: '8.7/10', achievements: 'Game Dev Club Founder · Best Project Award' }],
  skills: [
    { id: 's1', name: 'Unity 3D', level: 97 }, { id: 's2', name: 'C#', level: 95 },
    { id: 's3', name: 'Unreal Engine', level: 82 }, { id: 's4', name: 'C++', level: 80 },
    { id: 's5', name: 'Multiplayer', level: 90 }, { id: 's6', name: 'Shader Dev', level: 85 },
    { id: 's7', name: 'Physics', level: 88 }, { id: 's8', name: 'AR/VR', level: 75 },
  ],
  projects: [{ id: 'p1', name: 'Cricket Champions', description: 'AAA mobile cricket game with real-time multiplayer. 15M+ downloads, 4.6★ Play Store rating.', tech: 'Unity, C#, Photon, Firebase', link: 'play.google.com/cricket-champions' }],
  certifications: [{ id: 'c1', name: 'Unity Certified Developer', issuer: 'Unity Technologies', date: '2022-11' }, { id: 'c2', name: 'AWS Game Tech', issuer: 'Amazon', date: '2021-06' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
  interests: [
    { id: 'i1', name: 'Game Jams' }, { id: 'i2', name: 'Esports' },
    { id: 'i3', name: 'VR/AR Dev' }, { id: 'i4', name: 'Chess' },
    { id: 'i5', name: 'Anime' }, { id: 'i6', name: 'Speedrunning' },
  ],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

const INTEREST_COLORS = [
  { bg: '#fef2f2', color: '#991b1b', border: '#fca5a5' },
  { bg: '#eff6ff', color: '#1d4ed8', border: '#93c5fd' },
  { bg: '#f0fdf4', color: '#166534', border: '#86efac' },
  { bg: '#fdf4ff', color: '#7e22ce', border: '#d8b4fe' },
  { bg: '#fff7ed', color: '#9a3412', border: '#fdba74' },
  { bg: '#ecfdf5', color: '#065f46', border: '#6ee7b7' },
]

function SkewTag({ label, bg, color, border, size = 'md', bold = false }) {
  const sizes = {
    sm: { fontSize: 7.5, padding: '2px 9px' },
    md: { fontSize: 9, padding: '3px 12px' },
    lg: { fontSize: 11, padding: '5px 16px' },
  }
  return (
    <span style={{
      display: 'inline-block',
      transform: 'skewX(-10deg)',
      background: bg || 'transparent',
      color: color || '#111',
      border: border ? `1px solid ${border}` : 'none',
      borderRadius: 3,
      fontWeight: bold ? 800 : 600,
      letterSpacing: '0.02em',
      ...sizes[size],
    }}>
      <span style={{ display: 'inline-block', transform: 'skewX(10deg)' }}>{label}</span>
    </span>
  )
}

function PTH({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, marginTop: 20 }}>
      <div style={{
        background: tc,
        color: '#fff',
        fontSize: 8,
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        padding: '3px 12px',
        transform: 'skewX(-10deg)',
        borderRadius: 2,
      }}>
        <span style={{ display: 'inline-block', transform: 'skewX(10deg)' }}>{title}</span>
      </div>
      <div style={{ flex: 1, height: 1, background: `${tc}20` }} />
    </div>
  )
}

export default function ParaTagTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = g(resume?.themeColor, '#dc2626')
  const ff = g(resume?.fontFamily, "'Inter', 'Helvetica Neue', Arial, sans-serif")

  const name        = g(pi.name,     S.name)
  const jobTitle    = g(pi.jobTitle, S.jobTitle)
  const email       = g(pi.email,    S.email)
  const phone       = g(pi.phone,    S.phone)
  const location    = g(pi.location, S.location)
  const website     = g(pi.website,  S.website)
  const linkedin    = g(pi.linkedin, S.linkedin)
  const github      = g(pi.github,   S.github)
  const photo       = pi.photo || ''
  const summary     = g(pi.summary,  S.summary)

  const experience     = (resume?.experience?.length     ? resume.experience     : S.experience)
  const education      = (resume?.education?.length      ? resume.education      : S.education)
  const skills         = (resume?.skills?.length         ? resume.skills         : S.skills)
  const projects       = (resume?.projects?.length       ? resume.projects       : S.projects)
  const certifications = (resume?.certifications?.length ? resume.certifications : S.certifications)
  const languages      = (resume?.languages?.length      ? resume.languages      : S.languages)
  const interests      = (resume?.interests?.length      ? resume.interests      : S.interests)

  const topSkills = [...skills].sort((a, b) => (b.level || 0) - (a.level || 0)).slice(0, 4)

  return (
    <div style={{
      width: 794,
      minHeight: 1123,
      background: '#ffffff',
      fontFamily: ff,
      fontSize: 10,
      color: '#1a1a1a',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* ── HEADER ── */}
      <div style={{
        background: '#111111',
        padding: '28px 32px 22px 0',
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        position: 'relative',
        borderLeft: `8px solid ${tc}`,
      }}>
        {/* Left text block */}
        <div style={{ flex: 1, paddingLeft: 28 }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {name}
          </div>
          <div style={{ fontSize: 11, color: tc, fontWeight: 700, marginTop: 4, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            {jobTitle}
          </div>

          {/* Contact pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14 }}>
            {email && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,0.08)', color: '#e5e7eb', fontSize: 8, padding: '3px 10px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.12)' }}>
                <Mail size={8} color={tc} />{email}
              </span>
            )}
            {phone && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,0.08)', color: '#e5e7eb', fontSize: 8, padding: '3px 10px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.12)' }}>
                <Phone size={8} color={tc} />{phone}
              </span>
            )}
            {location && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,0.08)', color: '#e5e7eb', fontSize: 8, padding: '3px 10px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.12)' }}>
                <MapPin size={8} color={tc} />{location}
              </span>
            )}
            {website && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,0.08)', color: '#e5e7eb', fontSize: 8, padding: '3px 10px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.12)' }}>
                <Globe size={8} color={tc} />{website}
              </span>
            )}
            {linkedin && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,0.08)', color: '#e5e7eb', fontSize: 8, padding: '3px 10px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.12)' }}>
                <Link2 size={8} color={tc} />{linkedin}
              </span>
            )}
            {github && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,0.08)', color: '#e5e7eb', fontSize: 8, padding: '3px 10px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.12)' }}>
                <GitBranch size={8} color={tc} />{github}
              </span>
            )}
          </div>
        </div>

        {/* Photo */}
        {photo && (
          <div style={{ flexShrink: 0, marginRight: 28 }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              border: `3px solid ${tc}`,
              overflow: 'hidden',
              boxShadow: `0 0 0 3px #111, 0 0 0 5px ${tc}40`,
            }}>
              <img src={photo} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        )}
      </div>

      {/* ── HIGHLIGHT BAR — top skills as skewed tags ── */}
      <div style={{
        background: '#1a1a1a',
        padding: '8px 36px',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap',
      }}>
        <span style={{ fontSize: 7.5, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, marginRight: 4 }}>Top Skills</span>
        {topSkills.map((sk, i) => (
          <SkewTag
            key={sk.id || i}
            label={sk.name}
            bg={i === 0 ? tc : `${tc}${['cc', '99', '66', '44'][i] || '44'}`}
            color="#fff"
            size="sm"
            bold
          />
        ))}
      </div>

      {/* ── BODY: two columns ── */}
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>

        {/* LEFT COLUMN — 62% */}
        <div style={{ width: '62%', padding: '4px 24px 32px 32px', boxSizing: 'border-box' }}>

          {/* Summary */}
          {summary && (
            <>
              <PTH title="Profile" tc={tc} />
              <div style={{
                background: `${tc}08`,
                borderLeft: `3px solid ${tc}`,
                padding: '10px 14px',
                borderRadius: '0 4px 4px 0',
                fontSize: 9.5,
                color: '#374151',
                fontStyle: 'italic',
                lineHeight: 1.65,
              }}>
                {summary}
              </div>
            </>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <>
              <PTH title="Experience" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {experience.map((exp, i) => {
                  const techStr = exp.tech || exp.technologies || ''
                  const techTags = techStr ? techStr.split(/[,;]/).map(t => t.trim()).filter(Boolean) : []
                  const dateLabel = exp.current
                    ? `${exp.startDate} — Present`
                    : `${exp.startDate}${exp.endDate ? ` — ${exp.endDate}` : ''}`
                  return (
                    <div key={exp.id || i} style={{ paddingBottom: 14, borderBottom: i < experience.length - 1 ? `1px solid ${tc}12` : 'none' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, flexWrap: 'wrap' }}>
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 800, color: '#111', letterSpacing: '-0.01em' }}>{exp.company}</div>
                          <div style={{ fontSize: 9.5, color: tc, fontWeight: 700, marginTop: 1 }}>{exp.role}</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
                          <SkewTag label={dateLabel} bg={`${tc}15`} color={tc} size="sm" />
                          {exp.location && (
                            <span style={{ fontSize: 7.5, color: '#9ca3af', display: 'flex', alignItems: 'center', gap: 3 }}>
                              <MapPin size={7} />{exp.location}
                            </span>
                          )}
                        </div>
                      </div>
                      {exp.description && (
                        <div style={{ marginTop: 7, fontSize: 9, color: '#4b5563', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                          {exp.description}
                        </div>
                      )}
                      {techTags.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 8 }}>
                          {techTags.map((t, ti) => (
                            <SkewTag key={ti} label={t} bg={`${tc}10`} color={tc} border={`${tc}30`} size="sm" />
                          ))}
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
              <PTH title="Projects" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {projects.map((proj, i) => {
                  const techTags = proj.tech ? proj.tech.split(/[,;]/).map(t => t.trim()).filter(Boolean) : []
                  return (
                    <div key={proj.id || i} style={{
                      background: `${tc}05`,
                      border: `1px solid ${tc}18`,
                      borderRadius: 6,
                      padding: '10px 14px',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                        <div style={{ fontSize: 10.5, fontWeight: 800, color: '#111' }}>{proj.name}</div>
                        {proj.link && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 7.5, color: tc }}>
                            <Link2 size={7} />{proj.link}
                          </span>
                        )}
                      </div>
                      {proj.description && (
                        <div style={{ fontSize: 9, color: '#4b5563', marginTop: 5, lineHeight: 1.6 }}>{proj.description}</div>
                      )}
                      {techTags.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 8 }}>
                          {techTags.map((t, ti) => (
                            <SkewTag key={ti} label={t} bg={`${tc}12`} color={tc} border={`${tc}35`} size="sm" bold />
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </>
          )}

          {/* Education */}
          {education.length > 0 && (
            <>
              <PTH title="Education" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {education.map((ed, i) => (
                  <div key={ed.id || i} style={{
                    background: '#fafafa',
                    border: `1px solid #e5e7eb`,
                    borderRadius: 6,
                    padding: '10px 14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 8,
                  }}>
                    <div>
                      <div style={{ fontSize: 10.5, fontWeight: 800, color: '#111' }}>{ed.degree}</div>
                      <div style={{ fontSize: 9, color: tc, fontWeight: 700, marginTop: 2 }}>{ed.school}</div>
                      {ed.gpa && (
                        <div style={{ fontSize: 8.5, color: '#6b7280', marginTop: 3 }}>GPA: {ed.gpa}</div>
                      )}
                      {ed.achievements && (
                        <div style={{ fontSize: 8, color: '#9ca3af', marginTop: 3, fontStyle: 'italic' }}>{ed.achievements}</div>
                      )}
                    </div>
                    <div style={{ flexShrink: 0 }}>
                      <SkewTag
                        label={`${ed.startDate}${ed.endDate ? ` – ${ed.endDate}` : ''}`}
                        bg={`${tc}15`}
                        color={tc}
                        size="sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>

        {/* RIGHT SIDEBAR — 38% */}
        <div style={{
          width: '38%',
          background: '#fafafa',
          minHeight: 1000,
          padding: '4px 24px 32px 20px',
          boxSizing: 'border-box',
          borderLeft: `1px solid ${tc}15`,
        }}>

          {/* Skills */}
          {skills.length > 0 && (
            <>
              <PTH title="Skills" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {skills.map((sk, i) => {
                  const size = sk.level > 90 ? 'lg' : sk.level > 75 ? 'md' : 'sm'
                  const opacity = sk.level > 90 ? 'ff' : sk.level > 75 ? 'cc' : '88'
                  return (
                    <SkewTag
                      key={sk.id || i}
                      label={`${sk.name} ${sk.level ? sk.level + '%' : ''}`}
                      bg={`${tc}${opacity}`}
                      color="#fff"
                      size={size}
                      bold={sk.level > 90}
                    />
                  )
                })}
              </div>
            </>
          )}

          {/* Interests — the star feature */}
          {interests.length > 0 && (
            <>
              <PTH title="Interests" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {interests.map((int, i) => {
                  const c = INTEREST_COLORS[i % INTEREST_COLORS.length]
                  return (
                    <SkewTag
                      key={int.id || i}
                      label={int.name}
                      bg={c.bg}
                      color={c.color}
                      border={c.border}
                      size="lg"
                      bold
                    />
                  )
                })}
              </div>
            </>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <>
              <PTH title="Languages" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {languages.map((lang, i) => (
                  <SkewTag
                    key={lang.id || i}
                    label={`${lang.name}${lang.proficiency ? ' · ' + lang.proficiency : ''}`}
                    bg={`${tc}12`}
                    color={tc}
                    border={`${tc}30`}
                    size="md"
                  />
                ))}
              </div>
            </>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <>
              <PTH title="Certifications" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {certifications.map((cert, i) => (
                  <div key={cert.id || i} style={{
                    background: '#fff',
                    border: `1px solid ${tc}20`,
                    borderRadius: 5,
                    padding: '8px 10px',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 6 }}>
                      <div style={{ fontSize: 9, fontWeight: 800, color: '#111', lineHeight: 1.4 }}>{cert.name}</div>
                      {cert.date && (
                        <SkewTag
                          label={cert.date}
                          bg={`${tc}15`}
                          color={tc}
                          size="sm"
                        />
                      )}
                    </div>
                    {cert.issuer && (
                      <div style={{ fontSize: 8, color: '#6b7280', marginTop: 3 }}>{cert.issuer}</div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  )
}
