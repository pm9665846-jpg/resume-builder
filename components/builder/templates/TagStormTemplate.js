import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const TAG_COLORS = [
  { bg: '#fef3c7', text: '#92400e', border: '#fcd34d' },  // amber
  { bg: '#ede9fe', text: '#5b21b6', border: '#c4b5fd' },  // violet
  { bg: '#dcfce7', text: '#166534', border: '#86efac' },  // green
  { bg: '#fee2e2', text: '#991b1b', border: '#fca5a5' },  // red
  { bg: '#dbeafe', text: '#1e40af', border: '#93c5fd' },  // blue
  { bg: '#fce7f3', text: '#9d174d', border: '#f9a8d4' },  // pink
  { bg: '#ccfbf1', text: '#134e4a', border: '#5eead4' },  // teal
  { bg: '#f3f4f6', text: '#374151', border: '#d1d5db' },  // gray
]

const S = {
  name: 'Zara Ahmed', jobTitle: 'Senior UI/UX Designer',
  email: 'zara@email.com', phone: '+1 (555) 345-6789',
  location: 'London, UK', website: 'zaradesigns.co',
  linkedin: 'linkedin.com/in/zaraahmed', github: 'github.com/zaraahmed',
  summary: 'Award-winning UI/UX designer with 8+ years crafting delightful digital experiences for global brands. Specialise in design systems, accessibility, and data-driven design. Led design for products used by 30M+ users across fintech, health, and e-commerce.',
  experience: [
    { id: 'e1', role: 'Senior UX Designer', company: 'Monzo Bank', location: 'London', startDate: 'Jan 2021', endDate: '', current: true, description: '• Redesigned onboarding flow — increased activation rate by 34%\n• Built Monzo\'s accessibility design system (WCAG 2.1 AA)\n• Led design for Monzo Business, reaching 200K+ business customers' },
    { id: 'e2', role: 'Product Designer', company: 'Deliveroo', location: 'London', startDate: 'Mar 2018', endDate: 'Dec 2020', current: false, description: '• Designed rider app used by 100K+ delivery riders across 12 countries\n• Reduced support tickets by 40% through UX improvements\n• Created Deliveroo\'s first design system — 180+ components' },
    { id: 'e3', role: 'UI Designer', company: 'AKQA', location: 'London', startDate: 'Sep 2015', endDate: 'Feb 2018', current: false, description: '• Delivered digital campaigns for Nike, Audi, and Diageo\n• Won 3 Webby Awards for interactive design' },
  ],
  education: [{ id: 'ed1', degree: 'BA Graphic Design', school: 'Central Saint Martins', startDate: '2012', endDate: '2015', gpa: 'First Class Honours', achievements: 'D&AD New Blood Award' }],
  skills: [
    { id: 's1', name: 'Figma', level: 98 }, { id: 's2', name: 'Design Systems', level: 95 },
    { id: 's3', name: 'User Research', level: 92 }, { id: 's4', name: 'Prototyping', level: 90 },
    { id: 's5', name: 'Accessibility', level: 88 }, { id: 's6', name: 'Motion Design', level: 82 },
    { id: 's7', name: 'React', level: 70 }, { id: 's8', name: 'Framer', level: 85 },
  ],
  projects: [
    { id: 'p1', name: 'Monzo Design System', description: 'Comprehensive design system with 200+ components, dark mode, and full accessibility support.', tech: 'Figma, Storybook, React, WCAG 2.1', link: 'monzo.com/design' },
    { id: 'p2', name: 'HealthTrack App', description: 'Personal health tracking app — 50K downloads, 4.8★ App Store rating.', tech: 'Figma, Principle, Swift UI', link: 'healthtrack.app' },
  ],
  certifications: [{ id: 'c1', name: 'Google UX Design', issuer: 'Google', date: '2023-02' }, { id: 'c2', name: 'Nielsen Norman UX', issuer: 'NN/g', date: '2022-05' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Native' }, { id: 'l2', name: 'Urdu', proficiency: 'Native' }, { id: 'l3', name: 'French', proficiency: 'Intermediate' }],
  interests: [
    { id: 'i1', name: 'Typography' }, { id: 'i2', name: 'Street Photography' },
    { id: 'i3', name: 'Ceramics' }, { id: 'i4', name: 'Jazz' },
    { id: 'i5', name: 'Hiking' }, { id: 'i6', name: 'Cooking' },
  ],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

function Tag({ label, colorIdx = 0, size = 'md', rounded = false }) {
  const c = TAG_COLORS[colorIdx % TAG_COLORS.length]
  const sizes = {
    sm: { fontSize: 7.5, padding: '2px 8px' },
    md: { fontSize: 9, padding: '3px 11px' },
    lg: { fontSize: 11, padding: '5px 14px', fontWeight: 700 },
  }
  return (
    <span style={{
      display: 'inline-block',
      background: c.bg, color: c.text,
      border: `1px solid ${c.border}`,
      borderRadius: rounded ? 99 : 6,
      fontWeight: 600,
      ...sizes[size],
    }}>{label}</span>
  )
}

function SH({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, marginTop: 20 }}>
      <span style={{ fontSize: 8, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: `${tc}25` }} />
    </div>
  )
}

function ProficiencyDots({ proficiency, tc }) {
  const levels = { Native: 3, Fluent: 2, Intermediate: 1, Beginner: 1 }
  const count = levels[proficiency] || 1
  return (
    <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
      {[1, 2, 3].map(i => (
        <div key={i} style={{
          width: 6, height: 6, borderRadius: '50%',
          background: i <= count ? tc : 'rgba(255,255,255,0.2)',
        }} />
      ))}
    </div>
  )
}

export default function TagStormTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = g(resume?.themeColor, '#f59e0b')
  const ff = g(resume?.fontFamily, "'Inter', 'Helvetica Neue', Arial, sans-serif")

  const name       = g(pi.name,     S.name)
  const jobTitle   = g(pi.jobTitle, S.jobTitle)
  const email      = g(pi.email,    S.email)
  const phone      = g(pi.phone,    S.phone)
  const location   = g(pi.location, S.location)
  const website    = g(pi.website,  S.website)
  const linkedin   = g(pi.linkedin, S.linkedin)
  const github     = g(pi.github,   S.github)
  const summary    = g(pi.summary,  S.summary)
  const photo      = pi.photo || ''

  const experience     = (resume?.experience?.length     ? resume.experience     : S.experience)
  const education      = (resume?.education?.length      ? resume.education      : S.education)
  const skills         = (resume?.skills?.length         ? resume.skills         : S.skills)
  const projects       = (resume?.projects?.length       ? resume.projects       : S.projects)
  const certifications = (resume?.certifications?.length ? resume.certifications : S.certifications)
  const languages      = (resume?.languages?.length      ? resume.languages      : S.languages)
  const interests      = (resume?.interests?.length      ? resume.interests      : S.interests)

  // Interest tag size/rounded pattern
  const interestPattern = [
    { size: 'lg', rounded: true },
    { size: 'md', rounded: false },
    { size: 'lg', rounded: true },
    { size: 'sm', rounded: false },
    { size: 'md', rounded: true },
    { size: 'sm', rounded: false },
    { size: 'lg', rounded: false },
    { size: 'md', rounded: true },
  ]

  // Experience tech tags derived from description keywords
  const expTechMap = {
    e1: ['Figma', 'WCAG 2.1', 'Design Systems'],
    e2: ['Figma', 'Prototyping', 'Design Systems'],
    e3: ['UI Design', 'Campaigns', 'Interaction'],
  }

  function getExpTags(exp) {
    const desc = (exp.description || '').toLowerCase()
    const allTech = ['figma', 'react', 'framer', 'sketch', 'invision', 'zeplin', 'storybook', 'wcag', 'design system', 'prototyping', 'swift', 'css', 'html']
    const found = allTech.filter(t => desc.includes(t)).map(t => t.charAt(0).toUpperCase() + t.slice(1))
    if (found.length > 0) return found.slice(0, 3)
    return expTechMap[exp.id] || []
  }

  return (
    <div style={{
      width: 794,
      minHeight: 1123,
      background: '#ffffff',
      fontFamily: ff,
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden',
    }}>
      {/* ── LEFT SIDEBAR ── */}
      <div style={{
        width: '32%',
        minHeight: 1123,
        background: '#1c1917',
        display: 'flex',
        flexDirection: 'column',
        padding: '32px 18px',
        boxSizing: 'border-box',
        flexShrink: 0,
      }}>

        {/* Photo + Name + Title */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
          {photo ? (
            <img src={photo} alt={name} style={{
              width: 72, height: 72, borderRadius: '50%', objectFit: 'cover',
              border: `3px solid ${tc}40`, marginBottom: 12,
            }} />
          ) : (
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              background: `${tc}22`, border: `3px solid ${tc}40`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 12, fontSize: 24, fontWeight: 700, color: tc,
            }}>
              {name.charAt(0)}
            </div>
          )}
          <div style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', textAlign: 'center', lineHeight: 1.3, marginBottom: 5 }}>
            {name}
          </div>
          <div style={{ fontSize: 9, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, textAlign: 'center' }}>
            {jobTitle}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', marginBottom: 20 }} />

        {/* Contact */}
        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 7.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 10 }}>
            Contact
          </div>
          {[
            { icon: <Mail size={9} />, val: email },
            { icon: <Phone size={9} />, val: phone },
            { icon: <MapPin size={9} />, val: location },
            { icon: <Globe size={9} />, val: website },
            { icon: <Link2 size={9} />, val: linkedin },
            { icon: <GitBranch size={9} />, val: github },
          ].filter(r => r.val).map((row, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, marginBottom: 7 }}>
              <span style={{ color: tc, marginTop: 1, flexShrink: 0 }}>{row.icon}</span>
              <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.65)', lineHeight: 1.4, wordBreak: 'break-all' }}>{row.val}</span>
            </div>
          ))}
        </div>

        {/* ── INTERESTS — Star of the sidebar ── */}
        {interests.length > 0 && (
          <div style={{ marginBottom: 22 }}>
            <div style={{ fontSize: 7.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 12 }}>
              Interests &amp; Passions
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {interests.map((interest, i) => {
                const pattern = interestPattern[i % interestPattern.length]
                return (
                  <Tag
                    key={interest.id || i}
                    label={interest.name}
                    colorIdx={i}
                    size={pattern.size}
                    rounded={pattern.rounded}
                  />
                )
              })}
            </div>
          </div>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <div style={{ marginBottom: 22 }}>
            <div style={{ fontSize: 7.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 10 }}>
              Languages
            </div>
            {languages.map((lang, i) => (
              <div key={lang.id || i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{lang.name}</span>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
                  <ProficiencyDots proficiency={lang.proficiency} tc={tc} />
                  <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.4)' }}>{lang.proficiency}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div style={{ marginBottom: 22 }}>
            <div style={{ fontSize: 7.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 10 }}>
              Certifications
            </div>
            {certifications.map((cert, i) => (
              <div key={cert.id || i} style={{
                borderLeft: `2px solid ${tc}`,
                paddingLeft: 8,
                marginBottom: 9,
                background: 'rgba(255,255,255,0.04)',
                borderRadius: '0 4px 4px 0',
                padding: '5px 8px',
              }}>
                <div style={{ fontSize: 8.5, fontWeight: 700, color: '#ffffff', lineHeight: 1.3 }}>{cert.name}</div>
                <div style={{ fontSize: 7.5, color: tc, marginTop: 2 }}>{cert.issuer}</div>
                {cert.date && (
                  <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
                    {cert.date.replace('-', ' / ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── RIGHT MAIN ── */}
      <div style={{
        flex: 1,
        padding: '28px 26px 28px 22px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* Header area: name echo + skill cloud */}
        <div style={{ marginBottom: 4 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 900, color: '#1c1917', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                {name}
              </div>
              <div style={{ fontSize: 10, color: tc, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 3 }}>
                {jobTitle}
              </div>
            </div>
            {/* Skill cloud — top right */}
            {skills.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, justifyContent: 'flex-end', maxWidth: 260 }}>
                {skills.map((skill, i) => {
                  const size = skill.level > 90 ? 'lg' : skill.level > 75 ? 'md' : 'sm'
                  return (
                    <Tag
                      key={skill.id || i}
                      label={skill.name}
                      colorIdx={i}
                      size={size}
                      rounded={i % 3 === 0}
                    />
                  )
                })}
              </div>
            )}
          </div>
          <div style={{ height: 1, background: `${tc}20` }} />
        </div>

        {/* Summary */}
        {summary && (
          <div style={{ marginTop: 14, marginBottom: 4 }}>
            <SH title="Profile" tc={tc} />
            <p style={{ fontSize: 8.5, color: '#374151', lineHeight: 1.65, fontStyle: 'italic', margin: 0 }}>
              {summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div>
            <SH title="Experience" tc={tc} />
            {experience.map((exp, i) => {
              const techTags = getExpTags(exp)
              const dateStr = exp.current
                ? `${exp.startDate} — Present`
                : `${exp.startDate}${exp.endDate ? ` — ${exp.endDate}` : ''}`
              return (
                <div key={exp.id || i} style={{ marginBottom: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 2 }}>
                    <div>
                      <span style={{ fontSize: 10, fontWeight: 800, color: '#1c1917' }}>{exp.company}</span>
                      {exp.location && (
                        <span style={{ fontSize: 8, color: '#9ca3af', marginLeft: 6 }}>· {exp.location}</span>
                      )}
                    </div>
                    <Tag label={dateStr} colorIdx={7} size="sm" rounded={false} />
                  </div>
                  <div style={{ fontSize: 9, fontWeight: 600, color: tc, marginBottom: 5 }}>{exp.role}</div>
                  {exp.description && (
                    <div style={{ fontSize: 8, color: '#4b5563', lineHeight: 1.6, marginBottom: 6, whiteSpace: 'pre-line' }}>
                      {exp.description}
                    </div>
                  )}
                  {techTags.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {techTags.map((tech, ti) => (
                        <Tag key={ti} label={tech} colorIdx={(i * 3 + ti + 1) % TAG_COLORS.length} size="sm" rounded={false} />
                      ))}
                    </div>
                  )}
                  {i < experience.length - 1 && (
                    <div style={{ height: 1, background: '#f3f4f6', marginTop: 10 }} />
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div>
            <SH title="Projects" tc={tc} />
            {projects.map((proj, i) => (
              <div key={proj.id || i} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                  <span style={{ fontSize: 9.5, fontWeight: 800, color: '#1c1917' }}>{proj.name}</span>
                  {proj.link && (
                    <span style={{ fontSize: 7.5, color: tc, fontWeight: 500 }}>{proj.link}</span>
                  )}
                </div>
                {proj.description && (
                  <p style={{ fontSize: 8, color: '#4b5563', lineHeight: 1.6, margin: '0 0 6px 0' }}>
                    {proj.description}
                  </p>
                )}
                {proj.tech && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {proj.tech.split(',').map((t, ti) => (
                      <Tag key={ti} label={t.trim()} colorIdx={(i * 4 + ti + 2) % TAG_COLORS.length} size="sm" rounded={ti % 2 === 0} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div>
            <SH title="Education" tc={tc} />
            {education.map((edu, i) => (
              <div key={edu.id || i} style={{
                background: '#fafaf9',
                borderRadius: 8,
                padding: '10px 14px',
                marginBottom: 10,
                borderLeft: `3px solid ${tc}`,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                  <div>
                    <div style={{ fontSize: 9.5, fontWeight: 800, color: '#1c1917' }}>{edu.degree}</div>
                    <div style={{ fontSize: 8.5, color: tc, fontWeight: 600, marginTop: 2 }}>{edu.school}</div>
                  </div>
                  <Tag
                    label={`${edu.startDate}${edu.endDate ? ` – ${edu.endDate}` : ''}`}
                    colorIdx={0}
                    size="sm"
                    rounded={false}
                  />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 7 }}>
                  {edu.gpa && <Tag label={edu.gpa} colorIdx={2} size="sm" rounded={true} />}
                  {edu.achievements && <Tag label={edu.achievements} colorIdx={5} size="sm" rounded={false} />}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
