import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Alex Johnson', jobTitle: 'Senior Product Designer',
  email: 'alex@email.com', phone: '+1 (555) 234-5678',
  location: 'San Francisco, CA', website: 'alexjohnson.io',
  linkedin: 'linkedin.com/in/alexjohnson', github: 'github.com/alexj',
  summary: 'Creative product designer with 6+ years crafting intuitive digital experiences. Led design systems at Fortune 500 companies, increasing user engagement by 45%. Expert in Figma, user research, and cross-functional collaboration.',
  experience: [
    { id: 'e1', role: 'Senior Product Designer', company: 'Airbnb', location: 'San Francisco', startDate: 'Mar 2021', endDate: '', current: true, description: '• Led redesign of host onboarding flow, reducing drop-off by 32%\n• Built and maintained design system used by 40+ engineers\n• Conducted 200+ user interviews to inform product decisions' },
    { id: 'e2', role: 'UX Designer', company: 'Spotify', location: 'New York', startDate: 'Jan 2019', endDate: 'Feb 2021', current: false, description: '• Designed podcast discovery features reaching 80M+ users\n• Collaborated with engineers to ship 12 A/B tested features\n• Reduced support tickets by 28% through UX improvements' },
  ],
  education: [{ id: 'ed1', degree: 'BFA in Interaction Design', school: 'Rhode Island School of Design', startDate: '2013', endDate: '2017', gpa: '3.9/4.0', achievements: 'Summa Cum Laude' }],
  skills: [{ id: 's1', name: 'Figma', level: 95 }, { id: 's2', name: 'User Research', level: 90 }, { id: 's3', name: 'Prototyping', level: 88 }, { id: 's4', name: 'Design Systems', level: 92 }, { id: 's5', name: 'React', level: 70 }],
  projects: [{ id: 'p1', name: 'DesignOS', description: 'Open-source design system used by 500+ teams', tech: 'Figma, React, Storybook', link: 'designos.io' }],
  certifications: [{ id: 'c1', name: 'Google UX Design Certificate', issuer: 'Google', date: '2022-06' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Native' }, { id: 'l2', name: 'Spanish', proficiency: 'Conversational' }],
}

function g(val, fallback) { return val && String(val).trim() !== '' ? val : fallback }

// ── 1. ZEN ── Ultra-minimal Japanese-inspired
export function ZenTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#8b5cf6', fontFamily } = resume
  const tc = themeColor, ff = fontFamily || 'Georgia, serif'
  const name = g(personalInfo.name, S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email)
  const phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location)
  const website = g(personalInfo.website, S.website)
  const summary = g(personalInfo.summary, S.summary)
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const cert = certifications.length > 0 ? certifications : S.certifications
  const lang = languages.length > 0 ? languages : S.languages

  const SH = ({ children }) => (
    <div style={{ marginBottom: 16, marginTop: 28 }}>
      <h2 style={{ fontSize: 8.5, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.35em', color: '#999', margin: '0 0 8px', fontFamily: ff }}>{children}</h2>
      <div style={{ height: '0.5px', background: '#e0e0e0' }} />
    </div>
  )

  return (
    <div style={{ background: '#fff', fontFamily: ff, fontSize: 10.5, lineHeight: 1.7, width: 794, minHeight: 1123, padding: '72px 80px', boxSizing: 'border-box', color: '#222' }}>
      {/* Header */}
      <div style={{ marginBottom: 8 }}>
        <h1 style={{ fontSize: 32, fontWeight: 300, color: '#111', margin: '0 0 4px', letterSpacing: '0.02em', fontFamily: ff }}>{name}</h1>
        <p style={{ fontSize: 11, color: tc, fontWeight: 400, margin: '0 0 18px', letterSpacing: '0.08em' }}>{jobTitle}</p>
        <div style={{ height: '0.5px', background: '#ddd', marginBottom: 14 }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 24px', fontSize: 9 }}>
          {email && <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#555' }}><Mail size={8} color="#aaa" />{email}</span>}
          {phone && <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#555' }}><Phone size={8} color="#aaa" />{phone}</span>}
          {location && <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#555' }}><MapPin size={8} color="#aaa" />{location}</span>}
          {website && <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#555' }}><Globe size={8} color="#aaa" />{website}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div style={{ marginTop: 24 }}>
          <p style={{ fontSize: 10.5, color: '#444', lineHeight: 1.85, margin: 0, fontStyle: 'italic' }}>{summary}</p>
        </div>
      )}

      {/* Experience */}
      <SH>Experience</SH>
      {exp.map((e, i) => (
        <div key={e.id} style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#111' }}>{e.role}</span>
            <span style={{ fontSize: 8.5, color: '#aaa', fontStyle: 'italic' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
          </div>
          <p style={{ fontSize: 9.5, color: tc, margin: '0 0 6px', fontWeight: 400 }}>{e.company}{e.location ? ` · ${e.location}` : ''}</p>
          {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
            <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.7, margin: '1px 0' }}>{l}</p>
          ))}
        </div>
      ))}

      {/* Education */}
      <SH>Education</SH>
      {edu.map(e => (
        <div key={e.id} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#111' }}>{e.degree}</span>
            <span style={{ fontSize: 8.5, color: '#aaa', fontStyle: 'italic' }}>{e.startDate} — {e.endDate}</span>
          </div>
          <p style={{ fontSize: 9.5, color: tc, margin: '2px 0' }}>{e.school}</p>
          {e.gpa && <p style={{ fontSize: 9, color: '#888', margin: 0 }}>GPA {e.gpa}</p>}
        </div>
      ))}

      {/* Skills */}
      <SH>Skills</SH>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 0' }}>
        {skl.map((s, i) => (
          <span key={s.id} style={{ fontSize: 9.5, color: '#444' }}>
            {s.name}{i < skl.length - 1 ? <span style={{ color: '#ccc', margin: '0 10px' }}>·</span> : ''}
          </span>
        ))}
      </div>

      {/* Projects */}
      {prj.length > 0 && (
        <>
          <SH>Projects</SH>
          {prj.map(p => (
            <div key={p.id} style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#111' }}>{p.name}</span>
                {p.link && <span style={{ fontSize: 8.5, color: '#aaa' }}>{p.link}</span>}
              </div>
              {p.tech && <p style={{ fontSize: 9, color: '#aaa', margin: '2px 0', fontStyle: 'italic' }}>{p.tech}</p>}
              {p.description && <p style={{ fontSize: 9.5, color: '#555', margin: 0, lineHeight: 1.65 }}>{p.description}</p>}
            </div>
          ))}
        </>
      )}

      {/* Languages */}
      {lang.length > 0 && (
        <>
          <SH>Languages</SH>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 0' }}>
            {lang.map((l, i) => (
              <span key={l.id} style={{ fontSize: 9.5, color: '#444' }}>
                {l.name} <span style={{ color: '#aaa', fontSize: 8.5 }}>({l.proficiency})</span>{i < lang.length - 1 ? <span style={{ color: '#ccc', margin: '0 10px' }}>·</span> : ''}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ── 2. CHARCOAL ── Two-column, dark charcoal left sidebar
export function CharcoalSideTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#8b5cf6', fontFamily } = resume
  const tc = themeColor, ff = fontFamily || 'Arial, sans-serif'
  const name = g(personalInfo.name, S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email)
  const phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location)
  const website = g(personalInfo.website, S.website)
  const github = g(personalInfo.github, S.github)
  const summary = g(personalInfo.summary, S.summary)
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const cert = certifications.length > 0 ? certifications : S.certifications
  const lang = languages.length > 0 ? languages : S.languages

  const LSH = ({ children }) => (
    <div style={{ marginBottom: 12, marginTop: 22 }}>
      <h2 style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: tc, margin: '0 0 6px' }}>{children}</h2>
      <div style={{ height: 1, background: 'rgba(255,255,255,0.12)' }} />
    </div>
  )

  const RSH = ({ children }) => (
    <div style={{ marginBottom: 14, marginTop: 24 }}>
      <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, margin: '0 0 8px' }}>{children}</h2>
      <div style={{ height: 1.5, background: `${tc}30` }} />
    </div>
  )

  return (
    <div style={{ background: '#fff', fontFamily: ff, fontSize: 10.5, lineHeight: 1.6, width: 794, minHeight: 1123, display: 'flex', boxSizing: 'border-box' }}>
      {/* Left sidebar */}
      <div style={{ width: '35%', background: '#1a1a2e', padding: '40px 22px', boxSizing: 'border-box', flexShrink: 0 }}>
        {/* Avatar */}
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: `${tc}30`, border: `3px solid ${tc}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 700, color: tc, marginBottom: 16 }}>
          {name.charAt(0)}
        </div>
        <h1 style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: '0 0 4px', lineHeight: 1.2 }}>{name}</h1>
        <p style={{ fontSize: 9.5, color: tc, fontWeight: 500, margin: '0 0 20px', letterSpacing: '0.04em' }}>{jobTitle}</p>

        {/* Contact */}
        <LSH>Contact</LSH>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {email && <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9, color: 'rgba(255,255,255,0.75)' }}><Mail size={9} color={tc} />{email}</span>}
          {phone && <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9, color: 'rgba(255,255,255,0.75)' }}><Phone size={9} color={tc} />{phone}</span>}
          {location && <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9, color: 'rgba(255,255,255,0.75)' }}><MapPin size={9} color={tc} />{location}</span>}
          {website && <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9, color: 'rgba(255,255,255,0.75)' }}><Globe size={9} color={tc} />{website}</span>}
          {github && <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9, color: 'rgba(255,255,255,0.75)' }}><GitBranch size={9} color={tc} />{github}</span>}
        </div>

        {/* Skills */}
        <LSH>Skills</LSH>
        {skl.map(s => (
          <div key={s.id} style={{ marginBottom: 9 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{s.name}</span>
              <span style={{ fontSize: 7.5, color: tc }}>{s.level}%</span>
            </div>
            <div style={{ height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 99 }}>
              <div style={{ height: '100%', background: tc, borderRadius: 99, width: `${s.level}%` }} />
            </div>
          </div>
        ))}

        {/* Languages */}
        {lang.length > 0 && (
          <>
            <LSH>Languages</LSH>
            {lang.map(l => (
              <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.85)' }}>{l.name}</span>
                <span style={{ fontSize: 8, color: tc }}>{l.proficiency}</span>
              </div>
            ))}
          </>
        )}

        {/* Certifications */}
        {cert.length > 0 && (
          <>
            <LSH>Certifications</LSH>
            {cert.map(c => (
              <div key={c.id} style={{ marginBottom: 8 }}>
                <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.85)', fontWeight: 600, margin: '0 0 1px' }}>{c.name}</p>
                <p style={{ fontSize: 8, color: tc, margin: 0 }}>{c.issuer} · {c.date}</p>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Right content */}
      <div style={{ flex: 1, padding: '40px 30px', boxSizing: 'border-box' }}>
        {/* Summary */}
        <div style={{ padding: '14px 18px', background: `${tc}08`, borderRadius: 8, borderLeft: `3px solid ${tc}`, marginBottom: 4 }}>
          <p style={{ fontSize: 10.5, color: '#333', lineHeight: 1.8, margin: 0 }}>{summary}</p>
        </div>

        {/* Experience */}
        <RSH>Experience</RSH>
        {exp.map((e, i) => (
          <div key={e.id} style={{ marginBottom: 18, paddingBottom: 18, borderBottom: i < exp.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: 11.5, color: '#111', margin: 0 }}>{e.role}</p>
                <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '2px 0' }}>{e.company}{e.location ? <span style={{ color: '#999', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
              </div>
              <span style={{ fontSize: 8.5, color: '#888', background: '#f5f5f5', padding: '2px 10px', borderRadius: 20, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
            </div>
            {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
              <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.7, margin: '2px 0 0' }}>{l}</p>
            ))}
          </div>
        ))}

        {/* Education */}
        <RSH>Education</RSH>
        {edu.map(e => (
          <div key={e.id} style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <p style={{ fontWeight: 700, fontSize: 11, color: '#111', margin: 0 }}>{e.degree}</p>
              <span style={{ fontSize: 8.5, color: '#888' }}>{e.startDate} — {e.endDate}</span>
            </div>
            <p style={{ color: tc, fontSize: 10, margin: '2px 0' }}>{e.school}</p>
            {e.gpa && <p style={{ fontSize: 9, color: '#888', margin: 0 }}>GPA: {e.gpa}</p>}
          </div>
        ))}

        {/* Projects */}
        {prj.length > 0 && (
          <>
            <RSH>Projects</RSH>
            {prj.map(p => (
              <div key={p.id} style={{ marginBottom: 12, padding: '10px 14px', border: `1px solid ${tc}20`, borderRadius: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <p style={{ fontWeight: 700, fontSize: 11, color: '#111', margin: 0 }}>{p.name}</p>
                  {p.link && <span style={{ fontSize: 8.5, color: tc }}>{p.link}</span>}
                </div>
                {p.tech && <p style={{ fontSize: 8.5, color: '#888', margin: '0 0 4px', fontStyle: 'italic' }}>{p.tech}</p>}
                {p.description && <p style={{ fontSize: 9.5, color: '#555', margin: 0, lineHeight: 1.6 }}>{p.description}</p>}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

// ── 3. CINEMA ── Bold cinematic dark header, gold accent
export function CinemaTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#d4a017', fontFamily } = resume
  const tc = themeColor, ff = fontFamily || 'Georgia, serif'
  const name = g(personalInfo.name, S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email)
  const phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location)
  const website = g(personalInfo.website, S.website)
  const summary = g(personalInfo.summary, S.summary)
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const cert = certifications.length > 0 ? certifications : S.certifications
  const lang = languages.length > 0 ? languages : S.languages

  const SH = ({ children }) => (
    <div style={{ marginBottom: 14, marginTop: 22 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 20, height: 1.5, background: tc }} />
        <h2 style={{ fontSize: 8.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.28em', color: '#222', margin: 0, fontFamily: ff }}>{children}</h2>
        <div style={{ flex: 1, height: 1.5, background: '#eee' }} />
      </div>
    </div>
  )

  return (
    <div style={{ background: '#fff', fontFamily: ff, fontSize: 10.5, lineHeight: 1.6, width: 794, minHeight: 1123, boxSizing: 'border-box' }}>
      {/* Cinematic header */}
      <div style={{ background: '#0d0d0d', padding: '36px 44px 28px', position: 'relative', overflow: 'hidden' }}>
        {/* Film grain texture overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)', pointerEvents: 'none' }} />
        {/* Side accent bars */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: tc }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 4, background: tc }} />

        <h1 style={{ fontSize: 38, fontWeight: 700, color: '#fff', margin: '0 0 4px', letterSpacing: '0.04em', fontFamily: ff, lineHeight: 1.1 }}>{name}</h1>
        {/* Gold underline */}
        <div style={{ width: 60, height: 2, background: tc, margin: '8px 0 12px' }} />
        <p style={{ fontSize: 11, color: tc, fontWeight: 400, margin: '0 0 16px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{jobTitle}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px 22px' }}>
          {email && <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9, color: 'rgba(255,255,255,0.65)' }}><Mail size={8} color={tc} />{email}</span>}
          {phone && <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9, color: 'rgba(255,255,255,0.65)' }}><Phone size={8} color={tc} />{phone}</span>}
          {location && <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9, color: 'rgba(255,255,255,0.65)' }}><MapPin size={8} color={tc} />{location}</span>}
          {website && <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9, color: 'rgba(255,255,255,0.65)' }}><Globe size={8} color={tc} />{website}</span>}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '28px 44px 44px' }}>
        {/* Summary */}
        {summary && (
          <div style={{ padding: '14px 18px', borderLeft: `3px solid ${tc}`, background: '#fafafa', marginBottom: 4 }}>
            <p style={{ fontSize: 10.5, color: '#444', lineHeight: 1.85, margin: 0, fontStyle: 'italic' }}>{summary}</p>
          </div>
        )}

        <div style={{ display: 'flex', gap: 32 }}>
          {/* Left main */}
          <div style={{ flex: 1 }}>
            <SH>Experience</SH>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: 18, paddingBottom: 18, borderBottom: i < exp.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 12, color: '#111', margin: 0 }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '2px 0' }}>{e.company}{e.location ? <span style={{ color: '#999', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: '#888', whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0, fontStyle: 'italic' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.7, margin: '2px 0 0' }}>{l}</p>
                ))}
              </div>
            ))}

            {prj.length > 0 && (
              <>
                <SH>Projects</SH>
                {prj.map(p => (
                  <div key={p.id} style={{ marginBottom: 12, padding: '10px 14px', border: `1px solid #eee`, borderTop: `2px solid ${tc}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                      <p style={{ fontWeight: 700, fontSize: 11, color: '#111', margin: 0 }}>{p.name}</p>
                      {p.link && <span style={{ fontSize: 8.5, color: tc }}>{p.link}</span>}
                    </div>
                    {p.tech && <p style={{ fontSize: 8.5, color: '#888', margin: '0 0 3px', fontStyle: 'italic' }}>{p.tech}</p>}
                    {p.description && <p style={{ fontSize: 9.5, color: '#555', margin: 0, lineHeight: 1.6 }}>{p.description}</p>}
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Right sidebar */}
          <div style={{ width: 190, flexShrink: 0 }}>
            <SH>Skills</SH>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 9 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 9.5, color: '#222', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 7.5, color: tc, fontWeight: 700 }}>{s.level}%</span>
                </div>
                <div style={{ height: 4, background: '#f0f0f0', borderRadius: 0 }}>
                  <div style={{ height: '100%', background: tc, width: `${s.level}%` }} />
                </div>
              </div>
            ))}

            <SH>Education</SH>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 12 }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#111', margin: '0 0 2px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, margin: '0 0 2px' }}>{e.school}</p>
                <p style={{ color: '#888', fontSize: 8.5, margin: 0, fontStyle: 'italic' }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#666', fontSize: 8.5, margin: '2px 0 0' }}>GPA: {e.gpa}</p>}
              </div>
            ))}

            {cert.length > 0 && (
              <>
                <SH>Certifications</SH>
                {cert.map(c => (
                  <div key={c.id} style={{ marginBottom: 8 }}>
                    <p style={{ fontWeight: 600, fontSize: 9.5, color: '#111', margin: '0 0 1px' }}>{c.name}</p>
                    <p style={{ fontSize: 8.5, color: tc, margin: 0 }}>{c.issuer} · {c.date}</p>
                  </div>
                ))}
              </>
            )}

            {lang.length > 0 && (
              <>
                <SH>Languages</SH>
                {lang.map(l => (
                  <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                    <span style={{ fontSize: 9.5, color: '#333' }}>{l.name}</span>
                    <span style={{ fontSize: 8.5, color: '#888', fontStyle: 'italic' }}>{l.proficiency}</span>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 4. ARCHIVE ── Newspaper/editorial style
export function ArchiveTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#1a1a1a', fontFamily } = resume
  const tc = themeColor, ff = fontFamily || 'Georgia, serif'
  const name = g(personalInfo.name, S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email)
  const phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location)
  const website = g(personalInfo.website, S.website)
  const summary = g(personalInfo.summary, S.summary)
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const cert = certifications.length > 0 ? certifications : S.certifications
  const lang = languages.length > 0 ? languages : S.languages

  const SH = ({ children }) => (
    <div style={{ marginBottom: 12, marginTop: 20 }}>
      <h2 style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', color: tc, margin: '0 0 5px', fontVariant: 'small-caps', fontFamily: ff }}>{children}</h2>
      <div style={{ height: 2, background: tc }} />
    </div>
  )

  return (
    <div style={{ background: '#fff', fontFamily: ff, fontSize: 10.5, lineHeight: 1.65, width: 794, minHeight: 1123, padding: '44px 48px', boxSizing: 'border-box', color: '#111' }}>
      {/* Masthead */}
      <div style={{ textAlign: 'center', borderBottom: '3px double #111', paddingBottom: 16, marginBottom: 14 }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: '#111', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: ff }}>{name}</h1>
        <p style={{ fontSize: 10, color: '#555', margin: '0 0 10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontStyle: 'italic' }}>{jobTitle}</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3px 18px', fontSize: 8.5, color: '#555' }}>
          {email && <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Mail size={7} color="#888" />{email}</span>}
          {phone && <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Phone size={7} color="#888" />{phone}</span>}
          {location && <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><MapPin size={7} color="#888" />{location}</span>}
          {website && <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Globe size={7} color="#888" />{website}</span>}
        </div>
      </div>

      {/* Summary as editorial lead */}
      {summary && (
        <div style={{ borderBottom: '1px solid #ddd', paddingBottom: 14, marginBottom: 4 }}>
          <p style={{ fontSize: 11, color: '#333', lineHeight: 1.9, margin: 0, fontStyle: 'italic', textAlign: 'justify' }}>{summary}</p>
        </div>
      )}

      {/* Two-column body */}
      <div style={{ display: 'flex', gap: 0 }}>
        {/* Left column */}
        <div style={{ flex: 1, paddingRight: 24, borderRight: '1px solid #ddd' }}>
          <SH>Experience</SH>
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: i < exp.length - 1 ? '1px dashed #ddd' : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
                <p style={{ fontWeight: 700, fontSize: 11.5, color: '#111', margin: 0, fontFamily: ff }}>{e.role}</p>
                <span style={{ fontSize: 8.5, color: '#777', fontStyle: 'italic', whiteSpace: 'nowrap', marginLeft: 8 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
              </div>
              <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '1px 0 5px', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: 9 }}>{e.company}{e.location ? ` · ${e.location}` : ''}</p>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.7, margin: '2px 0 0', textAlign: 'justify' }}>{l}</p>
              ))}
            </div>
          ))}

          {prj.length > 0 && (
            <>
              <SH>Projects</SH>
              {prj.map(p => (
                <div key={p.id} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <p style={{ fontWeight: 700, fontSize: 11, color: '#111', margin: '0 0 2px' }}>{p.name}</p>
                    {p.link && <span style={{ fontSize: 8.5, color: '#888', fontStyle: 'italic' }}>{p.link}</span>}
                  </div>
                  {p.tech && <p style={{ fontSize: 8.5, color: '#777', margin: '0 0 3px', fontStyle: 'italic' }}>{p.tech}</p>}
                  {p.description && <p style={{ fontSize: 9.5, color: '#444', margin: 0, lineHeight: 1.65, textAlign: 'justify' }}>{p.description}</p>}
                </div>
              ))}
            </>
          )}
        </div>

        {/* Right column */}
        <div style={{ width: 200, paddingLeft: 24, flexShrink: 0 }}>
          <SH>Education</SH>
          {edu.map(e => (
            <div key={e.id} style={{ marginBottom: 14 }}>
              <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{e.degree}</p>
              <p style={{ color: '#555', fontSize: 9.5, fontStyle: 'italic', margin: '0 0 2px' }}>{e.school}</p>
              <p style={{ color: '#888', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p>
              {e.gpa && <p style={{ color: '#666', fontSize: 8.5, margin: '2px 0 0' }}>GPA: {e.gpa}</p>}
            </div>
          ))}

          <SH>Skills</SH>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {skl.map(s => (
              <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 9.5, color: '#333' }}>{s.name}</span>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[1,2,3,4,5].map(n => (
                    <div key={n} style={{ width: 8, height: 8, borderRadius: 1, background: n <= Math.round(s.level / 20) ? tc : '#e0e0e0' }} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {cert.length > 0 && (
            <>
              <SH>Certifications</SH>
              {cert.map(c => (
                <div key={c.id} style={{ marginBottom: 8 }}>
                  <p style={{ fontWeight: 600, fontSize: 9.5, color: '#111', margin: '0 0 1px' }}>{c.name}</p>
                  <p style={{ fontSize: 8.5, color: '#777', fontStyle: 'italic', margin: 0 }}>{c.issuer} · {c.date}</p>
                </div>
              ))}
            </>
          )}

          {lang.length > 0 && (
            <>
              <SH>Languages</SH>
              {lang.map(l => (
                <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: 9.5, color: '#333' }}>{l.name}</span>
                  <span style={{ fontSize: 8.5, color: '#888', fontStyle: 'italic' }}>{l.proficiency}</span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// ── 5. PRISMA ── Modern gradient header, pill badges, card sections
export function PrismaTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#8b5cf6', fontFamily } = resume
  const tc = themeColor, ff = fontFamily || 'Arial, sans-serif'
  const name = g(personalInfo.name, S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email)
  const phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location)
  const website = g(personalInfo.website, S.website)
  const github = g(personalInfo.github, S.github)
  const summary = g(personalInfo.summary, S.summary)
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const cert = certifications.length > 0 ? certifications : S.certifications
  const lang = languages.length > 0 ? languages : S.languages

  // Derive a slightly darker shade for gradient end
  const SH = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, marginTop: 20 }}>
      <div style={{ width: 4, height: 16, borderRadius: 2, background: `linear-gradient(to bottom, ${tc}, ${tc}60)` }} />
      <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#222', margin: 0 }}>{children}</h2>
    </div>
  )

  return (
    <div style={{ background: '#f8f9ff', fontFamily: ff, fontSize: 10.5, lineHeight: 1.6, width: 794, minHeight: 1123, boxSizing: 'border-box' }}>
      {/* Gradient header */}
      <div style={{ background: `linear-gradient(135deg, ${tc} 0%, ${tc}bb 50%, ${tc}80 100%)`, padding: '36px 40px 28px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'absolute', bottom: -30, left: 60, width: 140, height: 140, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: '#fff', margin: '0 0 4px', letterSpacing: '-0.01em' }}>{name}</h1>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontWeight: 500, margin: '0 0 16px', letterSpacing: '0.06em' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px 20px' }}>
            {email && <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9, color: 'rgba(255,255,255,0.8)' }}><Mail size={8} color="rgba(255,255,255,0.9)" />{email}</span>}
            {phone && <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9, color: 'rgba(255,255,255,0.8)' }}><Phone size={8} color="rgba(255,255,255,0.9)" />{phone}</span>}
            {location && <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9, color: 'rgba(255,255,255,0.8)' }}><MapPin size={8} color="rgba(255,255,255,0.9)" />{location}</span>}
            {website && <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9, color: 'rgba(255,255,255,0.8)' }}><Globe size={8} color="rgba(255,255,255,0.9)" />{website}</span>}
            {github && <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9, color: 'rgba(255,255,255,0.8)' }}><GitBranch size={8} color="rgba(255,255,255,0.9)" />{github}</span>}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px 32px 40px' }}>
        {/* Summary card */}
        {summary && (
          <div style={{ background: '#fff', borderRadius: 12, padding: '14px 18px', marginBottom: 4, boxShadow: `0 2px 16px ${tc}15`, border: `1px solid ${tc}20` }}>
            <p style={{ fontSize: 10.5, color: '#444', lineHeight: 1.85, margin: 0 }}>{summary}</p>
          </div>
        )}

        <div style={{ display: 'flex', gap: 20 }}>
          {/* Left */}
          <div style={{ flex: 1 }}>
            <SH>Experience</SH>
            {exp.map((e, i) => (
              <div key={e.id} style={{ background: '#fff', borderRadius: 10, padding: '12px 16px', marginBottom: 10, boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #eee' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 11.5, color: '#111', margin: 0 }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '2px 0' }}>{e.company}{e.location ? <span style={{ color: '#aaa', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
                  </div>
                  <span style={{ fontSize: 8, color: '#fff', background: tc, padding: '2px 9px', borderRadius: 20, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.7, margin: '2px 0 0' }}>{l}</p>
                ))}
              </div>
            ))}

            {prj.length > 0 && (
              <>
                <SH>Projects</SH>
                {prj.map(p => (
                  <div key={p.id} style={{ background: '#fff', borderRadius: 10, padding: '12px 16px', marginBottom: 10, boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: `1px solid ${tc}20` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                      <p style={{ fontWeight: 700, fontSize: 11, color: '#111', margin: 0 }}>{p.name}</p>
                      {p.link && <span style={{ fontSize: 8.5, color: tc }}>{p.link}</span>}
                    </div>
                    {p.tech && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 5 }}>
                        {p.tech.split(',').map((t, ti) => (
                          <span key={ti} style={{ fontSize: 8, padding: '2px 8px', borderRadius: 20, background: `${tc}15`, color: tc, fontWeight: 600, border: `1px solid ${tc}25` }}>{t.trim()}</span>
                        ))}
                      </div>
                    )}
                    {p.description && <p style={{ fontSize: 9.5, color: '#555', margin: 0, lineHeight: 1.6 }}>{p.description}</p>}
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Right */}
          <div style={{ width: 195, flexShrink: 0 }}>
            <SH>Skills</SH>
            <div style={{ background: '#fff', borderRadius: 10, padding: '12px 14px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #eee', marginBottom: 10 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {skl.map(s => (
                  <span key={s.id} style={{ fontSize: 8.5, padding: '3px 10px', borderRadius: 20, background: `${tc}12`, color: tc, fontWeight: 600, border: `1px solid ${tc}25` }}>{s.name}</span>
                ))}
              </div>
            </div>

            <SH>Education</SH>
            {edu.map(e => (
              <div key={e.id} style={{ background: '#fff', borderRadius: 10, padding: '12px 14px', marginBottom: 10, boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #eee' }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#111', margin: '0 0 2px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, margin: '0 0 2px' }}>{e.school}</p>
                <p style={{ color: '#aaa', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#666', fontSize: 8.5, margin: '2px 0 0' }}>GPA: {e.gpa}</p>}
              </div>
            ))}

            {cert.length > 0 && (
              <>
                <SH>Certifications</SH>
                {cert.map(c => (
                  <div key={c.id} style={{ background: '#fff', borderRadius: 10, padding: '10px 14px', marginBottom: 8, boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #eee' }}>
                    <p style={{ fontWeight: 600, fontSize: 9.5, color: '#111', margin: '0 0 1px' }}>{c.name}</p>
                    <p style={{ fontSize: 8.5, color: tc, margin: 0 }}>{c.issuer} · {c.date}</p>
                  </div>
                ))}
              </>
            )}

            {lang.length > 0 && (
              <>
                <SH>Languages</SH>
                <div style={{ background: '#fff', borderRadius: 10, padding: '10px 14px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #eee' }}>
                  {lang.map(l => (
                    <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                      <span style={{ fontSize: 9.5, color: '#333' }}>{l.name}</span>
                      <span style={{ fontSize: 8, padding: '1px 7px', borderRadius: 20, background: `${tc}12`, color: tc, fontWeight: 600 }}>{l.proficiency}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 6. NORTH ── Scandinavian minimal, off-white, airy
export function NorthTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#2563eb', fontFamily } = resume
  const tc = themeColor, ff = fontFamily || 'Arial, sans-serif'
  const name = g(personalInfo.name, S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email)
  const phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location)
  const website = g(personalInfo.website, S.website)
  const summary = g(personalInfo.summary, S.summary)
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const cert = certifications.length > 0 ? certifications : S.certifications
  const lang = languages.length > 0 ? languages : S.languages

  const SH = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 16, marginTop: 28 }}>
      <div style={{ width: 3, height: 18, background: tc, marginRight: 12, borderRadius: 1 }} />
      <h2 style={{ fontSize: 8.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: '#333', margin: 0 }}>{children}</h2>
    </div>
  )

  return (
    <div style={{ background: '#fafafa', fontFamily: ff, fontSize: 10.5, lineHeight: 1.7, width: 794, minHeight: 1123, padding: '60px 64px', boxSizing: 'border-box', color: '#222' }}>
      {/* Header — centered */}
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <h1 style={{ fontSize: 30, fontWeight: 300, color: '#111', margin: '0 0 6px', letterSpacing: '0.1em' }}>{name}</h1>
        <p style={{ fontSize: 10, color: tc, fontWeight: 500, margin: '0 0 16px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{jobTitle}</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '4px 20px', fontSize: 9, color: '#777' }}>
          {email && <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Mail size={8} color="#bbb" />{email}</span>}
          {phone && <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Phone size={8} color="#bbb" />{phone}</span>}
          {location && <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><MapPin size={8} color="#bbb" />{location}</span>}
          {website && <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Globe size={8} color="#bbb" />{website}</span>}
        </div>
        <div style={{ width: 40, height: 1, background: tc, margin: '18px auto 0' }} />
      </div>

      {/* Summary */}
      {summary && (
        <p style={{ fontSize: 10.5, color: '#555', lineHeight: 1.9, margin: '0 0 4px', textAlign: 'center', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>{summary}</p>
      )}

      {/* Experience */}
      <SH>Experience</SH>
      {exp.map((e, i) => (
        <div key={e.id} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: i < exp.length - 1 ? '1px solid #e8e8e8' : 'none' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
            <span style={{ fontSize: 11.5, fontWeight: 600, color: '#111' }}>{e.role}</span>
            <span style={{ fontSize: 8.5, color: '#aaa' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
          </div>
          <p style={{ fontSize: 9.5, color: tc, margin: '0 0 6px', fontWeight: 500 }}>{e.company}{e.location ? ` · ${e.location}` : ''}</p>
          {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
            <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.7, margin: '2px 0 0' }}>{l}</p>
          ))}
        </div>
      ))}

      {/* Two-column lower section */}
      <div style={{ display: 'flex', gap: 40 }}>
        <div style={{ flex: 1 }}>
          <SH>Education</SH>
          {edu.map(e => (
            <div key={e.id} style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#111' }}>{e.degree}</span>
                <span style={{ fontSize: 8.5, color: '#aaa' }}>{e.startDate} — {e.endDate}</span>
              </div>
              <p style={{ fontSize: 9.5, color: tc, margin: '2px 0' }}>{e.school}</p>
              {e.gpa && <p style={{ fontSize: 9, color: '#aaa', margin: 0 }}>GPA {e.gpa}</p>}
            </div>
          ))}

          {prj.length > 0 && (
            <>
              <SH>Projects</SH>
              {prj.map(p => (
                <div key={p.id} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: '#111' }}>{p.name}</span>
                    {p.link && <span style={{ fontSize: 8.5, color: '#aaa' }}>{p.link}</span>}
                  </div>
                  {p.tech && <p style={{ fontSize: 9, color: '#aaa', margin: '2px 0', fontStyle: 'italic' }}>{p.tech}</p>}
                  {p.description && <p style={{ fontSize: 9.5, color: '#555', margin: 0, lineHeight: 1.65 }}>{p.description}</p>}
                </div>
              ))}
            </>
          )}
        </div>

        <div style={{ width: 180, flexShrink: 0 }}>
          <SH>Skills</SH>
          <p style={{ fontSize: 9.5, color: '#555', lineHeight: 1.9, margin: 0 }}>
            {skl.map((s, i) => (
              <span key={s.id}>{s.name}{i < skl.length - 1 ? ', ' : ''}</span>
            ))}
          </p>

          {cert.length > 0 && (
            <>
              <SH>Certifications</SH>
              {cert.map(c => (
                <div key={c.id} style={{ marginBottom: 8 }}>
                  <p style={{ fontWeight: 600, fontSize: 9.5, color: '#111', margin: '0 0 1px' }}>{c.name}</p>
                  <p style={{ fontSize: 8.5, color: '#aaa', margin: 0 }}>{c.issuer} · {c.date}</p>
                </div>
              ))}
            </>
          )}

          {lang.length > 0 && (
            <>
              <SH>Languages</SH>
              <p style={{ fontSize: 9.5, color: '#555', lineHeight: 1.9, margin: 0 }}>
                {lang.map((l, i) => (
                  <span key={l.id}>{l.name} <span style={{ color: '#aaa', fontSize: 8.5 }}>({l.proficiency})</span>{i < lang.length - 1 ? ', ' : ''}</span>
                ))}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// ── 7. STUDIO ── Creative agency, colored sidebar, bold section numbers
export function StudioTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#e11d48', fontFamily } = resume
  const tc = themeColor, ff = fontFamily || 'Arial, sans-serif'
  const name = g(personalInfo.name, S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email)
  const phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location)
  const website = g(personalInfo.website, S.website)
  const github = g(personalInfo.github, S.github)
  const summary = g(personalInfo.summary, S.summary)
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const cert = certifications.length > 0 ? certifications : S.certifications
  const lang = languages.length > 0 ? languages : S.languages

  const RSH = ({ num, children }) => (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14, marginTop: 24 }}>
      <span style={{ fontSize: 22, fontWeight: 900, color: `${tc}25`, lineHeight: 1, fontFamily: ff }}>{num}</span>
      <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#111', margin: 0 }}>{children}</h2>
    </div>
  )

  return (
    <div style={{ background: '#fff', fontFamily: ff, fontSize: 10.5, lineHeight: 1.6, width: 794, minHeight: 1123, display: 'flex', boxSizing: 'border-box' }}>
      {/* Sidebar */}
      <div style={{ width: '30%', background: tc, padding: '40px 20px', boxSizing: 'border-box', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
        {/* Avatar circle */}
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', border: '3px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 900, color: '#fff', marginBottom: 16 }}>
          {name.charAt(0)}
        </div>
        <h1 style={{ fontSize: 17, fontWeight: 800, color: '#fff', margin: '0 0 4px', lineHeight: 1.2 }}>{name}</h1>
        <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.75)', fontWeight: 500, margin: '0 0 24px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{jobTitle}</p>

        {/* Contact */}
        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 7.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.5)', margin: '0 0 10px' }}>Contact</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {email && <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 8.5, color: 'rgba(255,255,255,0.85)', wordBreak: 'break-all' }}><Mail size={8} color="rgba(255,255,255,0.6)" />{email}</span>}
            {phone && <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 8.5, color: 'rgba(255,255,255,0.85)' }}><Phone size={8} color="rgba(255,255,255,0.6)" />{phone}</span>}
            {location && <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 8.5, color: 'rgba(255,255,255,0.85)' }}><MapPin size={8} color="rgba(255,255,255,0.6)" />{location}</span>}
            {website && <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 8.5, color: 'rgba(255,255,255,0.85)' }}><Globe size={8} color="rgba(255,255,255,0.6)" />{website}</span>}
            {github && <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 8.5, color: 'rgba(255,255,255,0.85)' }}><GitBranch size={8} color="rgba(255,255,255,0.6)" />{github}</span>}
          </div>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 7.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.5)', margin: '0 0 10px' }}>Skills</h3>
          {skl.map(s => (
            <div key={s.id} style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                <span style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>{s.name}</span>
                <span style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.6)' }}>{s.level}%</span>
              </div>
              <div style={{ height: 3, background: 'rgba(255,255,255,0.2)', borderRadius: 99 }}>
                <div style={{ height: '100%', background: 'rgba(255,255,255,0.8)', borderRadius: 99, width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        {lang.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 7.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.5)', margin: '0 0 10px' }}>Languages</h3>
            {lang.map(l => (
              <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.85)' }}>{l.name}</span>
                <span style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.55)' }}>{l.proficiency}</span>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {cert.length > 0 && (
          <div>
            <h3 style={{ fontSize: 7.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.5)', margin: '0 0 10px' }}>Certifications</h3>
            {cert.map(c => (
              <div key={c.id} style={{ marginBottom: 8 }}>
                <p style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.9)', fontWeight: 600, margin: '0 0 1px' }}>{c.name}</p>
                <p style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{c.issuer} · {c.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: '40px 30px', boxSizing: 'border-box' }}>
        {/* Summary */}
        {summary && (
          <div style={{ padding: '14px 16px', background: '#fafafa', borderRadius: 8, marginBottom: 4, borderLeft: `3px solid ${tc}` }}>
            <p style={{ fontSize: 10.5, color: '#444', lineHeight: 1.85, margin: 0 }}>{summary}</p>
          </div>
        )}

        <RSH num="01">Experience</RSH>
        {exp.map((e, i) => (
          <div key={e.id} style={{ marginBottom: 18, paddingBottom: 18, borderBottom: i < exp.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: 12, color: '#111', margin: 0 }}>{e.role}</p>
                <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '2px 0' }}>{e.company}{e.location ? <span style={{ color: '#aaa', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
              </div>
              <span style={{ fontSize: 8.5, color: '#aaa', whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
            </div>
            {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
              <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.7, margin: '2px 0 0' }}>{l}</p>
            ))}
          </div>
        ))}

        <RSH num="02">Education</RSH>
        {edu.map(e => (
          <div key={e.id} style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <p style={{ fontWeight: 700, fontSize: 11, color: '#111', margin: 0 }}>{e.degree}</p>
              <span style={{ fontSize: 8.5, color: '#aaa' }}>{e.startDate} — {e.endDate}</span>
            </div>
            <p style={{ color: tc, fontSize: 10, margin: '2px 0' }}>{e.school}</p>
            {e.gpa && <p style={{ fontSize: 9, color: '#aaa', margin: 0 }}>GPA: {e.gpa}</p>}
          </div>
        ))}

        {prj.length > 0 && (
          <>
            <RSH num="03">Projects</RSH>
            {prj.map(p => (
              <div key={p.id} style={{ marginBottom: 12, padding: '10px 14px', border: `1px solid #eee`, borderLeft: `3px solid ${tc}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <p style={{ fontWeight: 700, fontSize: 11, color: '#111', margin: 0 }}>{p.name}</p>
                  {p.link && <span style={{ fontSize: 8.5, color: tc }}>{p.link}</span>}
                </div>
                {p.tech && <p style={{ fontSize: 8.5, color: '#aaa', margin: '0 0 3px', fontStyle: 'italic' }}>{p.tech}</p>}
                {p.description && <p style={{ fontSize: 9.5, color: '#555', margin: 0, lineHeight: 1.6 }}>{p.description}</p>}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

// ── 8. LEGACY ── Classic elegant, centered header, two-column body
export function LegacyTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#1e3a5f', fontFamily } = resume
  const tc = themeColor, ff = fontFamily || 'Georgia, serif'
  const name = g(personalInfo.name, S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email)
  const phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location)
  const website = g(personalInfo.website, S.website)
  const summary = g(personalInfo.summary, S.summary)
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const cert = certifications.length > 0 ? certifications : S.certifications
  const lang = languages.length > 0 ? languages : S.languages

  const SH = ({ children }) => (
    <div style={{ marginBottom: 12, marginTop: 20 }}>
      <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.22em', color: tc, margin: '0 0 6px', fontFamily: ff }}>{children}</h2>
      <div style={{ height: 1, background: `${tc}40` }} />
    </div>
  )

  return (
    <div style={{ background: '#fff', fontFamily: ff, fontSize: 10.5, lineHeight: 1.65, width: 794, minHeight: 1123, padding: '44px 48px', boxSizing: 'border-box', color: '#222' }}>
      {/* Centered header */}
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <h1 style={{ fontSize: 34, fontWeight: 700, color: tc, margin: '0 0 6px', letterSpacing: '0.04em', fontFamily: ff }}>{name}</h1>
        <p style={{ fontSize: 11, color: '#555', fontStyle: 'italic', margin: '0 0 12px', letterSpacing: '0.06em' }}>{jobTitle}</p>
        {/* Decorative rule */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 12 }}>
          <div style={{ height: 1, width: 80, background: `${tc}50` }} />
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: tc }} />
          <div style={{ width: 8, height: 8, transform: 'rotate(45deg)', border: `1.5px solid ${tc}`, background: 'transparent' }} />
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: tc }} />
          <div style={{ height: 1, width: 80, background: `${tc}50` }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '4px 20px', fontSize: 9, color: '#666' }}>
          {email && <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Mail size={8} color={tc} />{email}</span>}
          {phone && <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Phone size={8} color={tc} />{phone}</span>}
          {location && <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><MapPin size={8} color={tc} />{location}</span>}
          {website && <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Globe size={8} color={tc} />{website}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div style={{ textAlign: 'center', padding: '12px 24px', borderTop: `1px solid ${tc}20`, borderBottom: `1px solid ${tc}20`, marginBottom: 20 }}>
          <p style={{ fontSize: 10.5, color: '#555', lineHeight: 1.9, margin: 0, fontStyle: 'italic' }}>{summary}</p>
        </div>
      )}

      {/* Two-column body */}
      <div style={{ display: 'flex', gap: 32 }}>
        {/* Left — Experience */}
        <div style={{ flex: 1 }}>
          <SH>Professional Experience</SH>
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: 18, paddingBottom: 18, borderBottom: i < exp.length - 1 ? `1px solid ${tc}15` : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
                <p style={{ fontWeight: 700, fontSize: 11.5, color: '#111', margin: 0, fontFamily: ff }}>{e.role}</p>
                <span style={{ fontSize: 8.5, color: '#888', fontStyle: 'italic', whiteSpace: 'nowrap', marginLeft: 8 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
              </div>
              <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '1px 0 5px' }}>{e.company}{e.location ? ` · ${e.location}` : ''}</p>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.7, margin: '2px 0 0' }}>{l}</p>
              ))}
            </div>
          ))}

          {prj.length > 0 && (
            <>
              <SH>Projects</SH>
              {prj.map(p => (
                <div key={p.id} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <p style={{ fontWeight: 700, fontSize: 11, color: '#111', margin: '0 0 2px' }}>{p.name}</p>
                    {p.link && <span style={{ fontSize: 8.5, color: tc, fontStyle: 'italic' }}>{p.link}</span>}
                  </div>
                  {p.tech && <p style={{ fontSize: 8.5, color: '#888', margin: '0 0 3px', fontStyle: 'italic' }}>{p.tech}</p>}
                  {p.description && <p style={{ fontSize: 9.5, color: '#444', margin: 0, lineHeight: 1.65 }}>{p.description}</p>}
                </div>
              ))}
            </>
          )}
        </div>

        {/* Right — Skills, Education */}
        <div style={{ width: 200, flexShrink: 0 }}>
          <SH>Core Skills</SH>
          {skl.map(s => (
            <div key={s.id} style={{ marginBottom: 9 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                <span style={{ fontSize: 9.5, color: '#222', fontWeight: 500 }}>{s.name}</span>
                <span style={{ fontSize: 7.5, color: tc }}>{s.level}%</span>
              </div>
              <div style={{ height: 4, background: `${tc}15`, borderRadius: 2 }}>
                <div style={{ height: '100%', background: `linear-gradient(to right, ${tc}aa, ${tc})`, borderRadius: 2, width: `${s.level}%` }} />
              </div>
            </div>
          ))}

          <SH>Education</SH>
          {edu.map(e => (
            <div key={e.id} style={{ marginBottom: 14 }}>
              <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px', fontFamily: ff }}>{e.degree}</p>
              <p style={{ color: tc, fontSize: 9.5, fontStyle: 'italic', margin: '0 0 2px' }}>{e.school}</p>
              <p style={{ color: '#888', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p>
              {e.gpa && <p style={{ color: '#666', fontSize: 8.5, margin: '2px 0 0' }}>GPA: {e.gpa}</p>}
              {e.achievements && <p style={{ color: tc, fontSize: 8.5, margin: '2px 0 0', fontStyle: 'italic' }}>{e.achievements}</p>}
            </div>
          ))}

          {cert.length > 0 && (
            <>
              <SH>Certifications</SH>
              {cert.map(c => (
                <div key={c.id} style={{ marginBottom: 8 }}>
                  <p style={{ fontWeight: 600, fontSize: 9.5, color: '#111', margin: '0 0 1px' }}>{c.name}</p>
                  <p style={{ fontSize: 8.5, color: tc, fontStyle: 'italic', margin: 0 }}>{c.issuer} · {c.date}</p>
                </div>
              ))}
            </>
          )}

          {lang.length > 0 && (
            <>
              <SH>Languages</SH>
              {lang.map(l => (
                <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: 9.5, color: '#333' }}>{l.name}</span>
                  <span style={{ fontSize: 8.5, color: '#888', fontStyle: 'italic' }}>{l.proficiency}</span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// ── 9. SPECTRUM ── Colorful modern, gradient top band, colored skill bars
export function SpectrumTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#06b6d4', fontFamily } = resume
  const tc = themeColor, ff = fontFamily || 'Arial, sans-serif'
  const name = g(personalInfo.name, S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email)
  const phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location)
  const website = g(personalInfo.website, S.website)
  const github = g(personalInfo.github, S.github)
  const summary = g(personalInfo.summary, S.summary)
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const cert = certifications.length > 0 ? certifications : S.certifications
  const lang = languages.length > 0 ? languages : S.languages

  const SH = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, marginTop: 22 }}>
      <div style={{ width: 5, height: 20, borderRadius: 3, background: `linear-gradient(to bottom, ${tc}, ${tc}50)` }} />
      <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#222', margin: 0 }}>{children}</h2>
      <div style={{ flex: 1, height: 1, background: '#eee' }} />
    </div>
  )

  return (
    <div style={{ background: '#fff', fontFamily: ff, fontSize: 10.5, lineHeight: 1.6, width: 794, minHeight: 1123, boxSizing: 'border-box' }}>
      {/* Top gradient band */}
      <div style={{ background: `linear-gradient(90deg, ${tc} 0%, ${tc}cc 40%, ${tc}80 70%, ${tc}40 100%)`, padding: '32px 40px 26px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -30, right: 80, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
        <div style={{ position: 'absolute', bottom: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 30, fontWeight: 800, color: '#fff', margin: '0 0 4px', letterSpacing: '-0.01em' }}>{name}</h1>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontWeight: 500, margin: '0 0 14px', letterSpacing: '0.08em' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 18px' }}>
            {email && <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 8.5, color: 'rgba(255,255,255,0.8)' }}><Mail size={8} color="rgba(255,255,255,0.9)" />{email}</span>}
            {phone && <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 8.5, color: 'rgba(255,255,255,0.8)' }}><Phone size={8} color="rgba(255,255,255,0.9)" />{phone}</span>}
            {location && <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 8.5, color: 'rgba(255,255,255,0.8)' }}><MapPin size={8} color="rgba(255,255,255,0.9)" />{location}</span>}
            {website && <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 8.5, color: 'rgba(255,255,255,0.8)' }}><Globe size={8} color="rgba(255,255,255,0.9)" />{website}</span>}
            {github && <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 8.5, color: 'rgba(255,255,255,0.8)' }}><GitBranch size={8} color="rgba(255,255,255,0.9)" />{github}</span>}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px 32px 40px' }}>
        {/* Summary */}
        {summary && (
          <div style={{ padding: '12px 18px', background: `${tc}08`, borderRadius: 8, borderLeft: `4px solid ${tc}`, marginBottom: 4 }}>
            <p style={{ fontSize: 10.5, color: '#444', lineHeight: 1.85, margin: 0 }}>{summary}</p>
          </div>
        )}

        <div style={{ display: 'flex', gap: 24 }}>
          {/* Left */}
          <div style={{ flex: 1 }}>
            <SH>Experience</SH>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: 18, paddingBottom: 18, borderBottom: i < exp.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 11.5, color: '#111', margin: 0 }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '2px 0' }}>{e.company}{e.location ? <span style={{ color: '#aaa', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
                  </div>
                  <span style={{ fontSize: 8, color: '#fff', background: tc, padding: '2px 9px', borderRadius: 20, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.7, margin: '2px 0 0' }}>{l}</p>
                ))}
              </div>
            ))}

            {prj.length > 0 && (
              <>
                <SH>Projects</SH>
                {prj.map(p => (
                  <div key={p.id} style={{ marginBottom: 12, padding: '10px 14px', background: `${tc}06`, borderRadius: 8, border: `1px solid ${tc}20` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <p style={{ fontWeight: 700, fontSize: 11, color: '#111', margin: 0 }}>{p.name}</p>
                      {p.link && <span style={{ fontSize: 8.5, color: tc }}>{p.link}</span>}
                    </div>
                    {p.tech && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>
                        {p.tech.split(',').map((t, ti) => (
                          <span key={ti} style={{ fontSize: 8, padding: '1px 7px', borderRadius: 20, background: `${tc}15`, color: tc, fontWeight: 600 }}>{t.trim()}</span>
                        ))}
                      </div>
                    )}
                    {p.description && <p style={{ fontSize: 9.5, color: '#555', margin: 0, lineHeight: 1.6 }}>{p.description}</p>}
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Right */}
          <div style={{ width: 195, flexShrink: 0 }}>
            <SH>Skills</SH>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 9.5, color: '#222', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 7.5, color: tc, fontWeight: 700 }}>{s.level}%</span>
                </div>
                <div style={{ height: 7, background: `${tc}15`, borderRadius: 99, overflow: 'hidden' }}>
                  <div style={{ height: '100%', background: `linear-gradient(to right, ${tc}80, ${tc})`, borderRadius: 99, width: `${s.level}%` }} />
                </div>
              </div>
            ))}

            <SH>Education</SH>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 14, padding: '10px 12px', background: `${tc}06`, borderRadius: 8, border: `1px solid ${tc}15` }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#111', margin: '0 0 2px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, margin: '0 0 2px' }}>{e.school}</p>
                <p style={{ color: '#aaa', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#666', fontSize: 8.5, margin: '2px 0 0' }}>GPA: {e.gpa}</p>}
              </div>
            ))}

            {cert.length > 0 && (
              <>
                <SH>Certifications</SH>
                {cert.map(c => (
                  <div key={c.id} style={{ marginBottom: 8 }}>
                    <p style={{ fontWeight: 600, fontSize: 9.5, color: '#111', margin: '0 0 1px' }}>{c.name}</p>
                    <p style={{ fontSize: 8.5, color: tc, margin: 0 }}>{c.issuer} · {c.date}</p>
                  </div>
                ))}
              </>
            )}

            {lang.length > 0 && (
              <>
                <SH>Languages</SH>
                {lang.map(l => (
                  <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                    <span style={{ fontSize: 9.5, color: '#333' }}>{l.name}</span>
                    <span style={{ fontSize: 8, padding: '1px 7px', borderRadius: 20, background: `${tc}15`, color: tc, fontWeight: 600 }}>{l.proficiency}</span>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 10. MONOLITH ── Bold minimalist, large name, executive feel
export function MonolithTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#111827', fontFamily } = resume
  const tc = themeColor, ff = fontFamily || 'Arial, sans-serif'
  const name = g(personalInfo.name, S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email)
  const phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location)
  const website = g(personalInfo.website, S.website)
  const github = g(personalInfo.github, S.github)
  const summary = g(personalInfo.summary, S.summary)
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const cert = certifications.length > 0 ? certifications : S.certifications
  const lang = languages.length > 0 ? languages : S.languages

  const SH = ({ children }) => (
    <div style={{ marginBottom: 14, marginTop: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <h2 style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.35em', color: tc, margin: 0 }}>{children}</h2>
        <div style={{ flex: 1, height: 1, background: tc }} />
      </div>
    </div>
  )

  return (
    <div style={{ background: '#fff', fontFamily: ff, fontSize: 10.5, lineHeight: 1.65, width: 794, minHeight: 1123, padding: '52px 56px', boxSizing: 'border-box', color: '#111' }}>
      {/* Massive name block */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 52, fontWeight: 900, color: tc, margin: '0 0 2px', letterSpacing: '-0.03em', lineHeight: 1, textTransform: 'uppercase' }}>{name}</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 10 }}>
          <p style={{ fontSize: 11, color: '#666', fontWeight: 400, margin: 0, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{jobTitle}</p>
          <div style={{ flex: 1, height: 2, background: tc }} />
        </div>
        {/* Inline contact */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px 20px', marginTop: 10 }}>
          {email && <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 8.5, color: '#555' }}><Mail size={8} color={tc} />{email}</span>}
          {phone && <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 8.5, color: '#555' }}><Phone size={8} color={tc} />{phone}</span>}
          {location && <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 8.5, color: '#555' }}><MapPin size={8} color={tc} />{location}</span>}
          {website && <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 8.5, color: '#555' }}><Globe size={8} color={tc} />{website}</span>}
          {github && <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 8.5, color: '#555' }}><GitBranch size={8} color={tc} />{github}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div style={{ borderTop: `1px solid #eee`, borderBottom: `1px solid #eee`, padding: '14px 0', marginBottom: 4 }}>
          <p style={{ fontSize: 10.5, color: '#444', lineHeight: 1.9, margin: 0 }}>{summary}</p>
        </div>
      )}

      {/* Experience */}
      <SH>Experience</SH>
      {exp.map((e, i) => (
        <div key={e.id} style={{ marginBottom: 22, paddingBottom: 22, borderBottom: i < exp.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
            <div>
              <p style={{ fontWeight: 800, fontSize: 14, color: tc, margin: 0, letterSpacing: '-0.01em' }}>{e.company}</p>
              <p style={{ fontWeight: 500, fontSize: 11, color: '#333', margin: '2px 0' }}>{e.role}{e.location ? <span style={{ color: '#aaa', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
            </div>
            <span style={{ fontSize: 8.5, color: '#aaa', whiteSpace: 'nowrap', marginLeft: 12, flexShrink: 0, marginTop: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
          </div>
          {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
            <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.7, margin: '2px 0 0' }}>{l}</p>
          ))}
        </div>
      ))}

      {/* Three-column lower section */}
      <div style={{ display: 'flex', gap: 32 }}>
        {/* Education */}
        <div style={{ flex: 1 }}>
          <SH>Education</SH>
          {edu.map(e => (
            <div key={e.id} style={{ marginBottom: 14 }}>
              <p style={{ fontWeight: 800, fontSize: 12, color: tc, margin: '0 0 2px' }}>{e.school}</p>
              <p style={{ fontWeight: 500, fontSize: 10, color: '#333', margin: '0 0 2px' }}>{e.degree}</p>
              <p style={{ color: '#aaa', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}{e.gpa ? ` · GPA ${e.gpa}` : ''}</p>
            </div>
          ))}

          {prj.length > 0 && (
            <>
              <SH>Projects</SH>
              {prj.map(p => (
                <div key={p.id} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <p style={{ fontWeight: 700, fontSize: 11, color: tc, margin: '0 0 2px' }}>{p.name}</p>
                    {p.link && <span style={{ fontSize: 8.5, color: '#aaa' }}>{p.link}</span>}
                  </div>
                  {p.tech && <p style={{ fontSize: 8.5, color: '#aaa', margin: '0 0 3px' }}>{p.tech}</p>}
                  {p.description && <p style={{ fontSize: 9.5, color: '#555', margin: 0, lineHeight: 1.65 }}>{p.description}</p>}
                </div>
              ))}
            </>
          )}
        </div>

        {/* Skills */}
        <div style={{ width: 180, flexShrink: 0 }}>
          <SH>Skills</SH>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {skl.map(s => (
              <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0', borderBottom: '1px solid #f5f5f5' }}>
                <span style={{ fontSize: 9.5, color: '#222', fontWeight: 500 }}>{s.name}</span>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[1,2,3,4,5].map(n => (
                    <div key={n} style={{ width: 10, height: 10, borderRadius: 2, background: n <= Math.round(s.level / 20) ? tc : '#eee' }} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {(cert.length > 0 || lang.length > 0) && (
            <>
              {cert.length > 0 && (
                <>
                  <SH>Certifications</SH>
                  {cert.map(c => (
                    <div key={c.id} style={{ marginBottom: 8 }}>
                      <p style={{ fontWeight: 600, fontSize: 9.5, color: '#111', margin: '0 0 1px' }}>{c.name}</p>
                      <p style={{ fontSize: 8.5, color: '#aaa', margin: 0 }}>{c.issuer} · {c.date}</p>
                    </div>
                  ))}
                </>
              )}
              {lang.length > 0 && (
                <>
                  <SH>Languages</SH>
                  {lang.map(l => (
                    <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                      <span style={{ fontSize: 9.5, color: '#333' }}>{l.name}</span>
                      <span style={{ fontSize: 8.5, color: '#aaa' }}>{l.proficiency}</span>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
