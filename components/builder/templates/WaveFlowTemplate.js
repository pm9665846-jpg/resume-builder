import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Aiden Rivers', jobTitle: 'Full Stack Developer & Cloud Engineer',
  email: 'aiden@email.com', phone: '+1 (555) 234-8901',
  location: 'Austin, TX', website: 'aidenrivers.dev',
  linkedin: 'linkedin.com/in/aidenr', github: 'github.com/aidenr',
  summary: 'Versatile engineer with 6+ years building scalable web applications and cloud infrastructure. Passionate about clean architecture and developer experience. Open source contributor with 3k+ GitHub stars across projects.',
  experience: [
    { id: 'e1', role: 'Senior Full Stack Engineer', company: 'Stripe', location: 'Remote', startDate: 'Feb 2022', endDate: '', current: true, description: '• Built payment dashboard features used by 500K+ merchants\n• Reduced API latency by 55% through caching and query optimization\n• Led migration from monolith to microservices architecture' },
    { id: 'e2', role: 'Software Engineer', company: 'Notion', location: 'San Francisco', startDate: 'Mar 2019', endDate: 'Jan 2022', current: false, description: '• Developed real-time collaboration engine for 20M+ users\n• Built offline-first sync system using CRDTs\n• Improved app load time by 40% through code splitting' },
  ],
  education: [{ id: 'ed1', degree: 'BS Computer Science', school: 'UT Austin', startDate: '2015', endDate: '2019', gpa: '3.91/4.0', achievements: 'Summa Cum Laude' }],
  skills: [{ id: 's1', name: 'TypeScript', level: 95 }, { id: 's2', name: 'React / Next.js', level: 93 }, { id: 's3', name: 'Node.js', level: 90 }, { id: 's4', name: 'PostgreSQL', level: 85 }, { id: 's5', name: 'AWS', level: 82 }, { id: 's6', name: 'Docker / K8s', level: 78 }],
  projects: [{ id: 'p1', name: 'flowstate', description: 'Real-time collaborative whiteboard with 5k GitHub stars. Used by 200+ teams.', tech: 'React, WebSockets, Canvas API', link: 'flowstate.dev' }],
  certifications: [{ id: 'c1', name: 'AWS Solutions Architect', issuer: 'Amazon', date: '2023-06' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Native' }, { id: 'l2', name: 'Spanish', proficiency: 'Intermediate' }],
  interests: [{ id: 'i1', name: 'Surfing' }, { id: 'i2', name: 'Open Source' }, { id: 'i3', name: 'Photography' }, { id: 'i4', name: 'Hiking' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

export default function WaveFlowTemplate({ resume }) {
  const {
    personalInfo = {}, experience = [], education = [], skills = [],
    projects = [], certifications = [], languages = [], interests = [],
    themeColor = '#0ea5e9', fontFamily,
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

  const WaveDivider = () => (
    <svg viewBox="0 0 200 8" style={{ width: '100%', height: 8, display: 'block' }} preserveAspectRatio="none">
      <defs>
        <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <path d="M0,4 C30,0 60,8 90,4 C120,0 150,8 180,4 C190,2 196,3 200,4" stroke="url(#waveGrad)" strokeWidth="1.5" fill="none" />
    </svg>
  )

  const SectionHeader = ({ title }) => (
    <div style={{ marginBottom: 10, marginTop: 18 }}>
      <h2 style={{ fontSize: 9, fontWeight: 800, color: tc, textTransform: 'uppercase', letterSpacing: '0.18em', margin: '0 0 4px 0' }}>{title}</h2>
      <WaveDivider />
    </div>
  )

  const waveColors = ['#0ea5e9', '#6366f1', '#8b5cf6', '#06b6d4']

  return (
    <div style={{ background: '#ffffff', fontFamily: ff, fontSize: '10px', lineHeight: 1.6, width: 794, minHeight: 1123, boxSizing: 'border-box', position: 'relative', overflow: 'hidden', color: '#1e293b' }}>

      {/* Decorative blobs */}
      <div style={{ position: 'absolute', top: 260, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(99,102,241,0.05)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: 500, left: -50, width: 160, height: 160, borderRadius: '50%', background: 'rgba(14,165,233,0.06)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: 800, right: 20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(139,92,246,0.05)', pointerEvents: 'none', zIndex: 0 }} />

      {/* HEADER */}
      <div style={{ position: 'relative', background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #8b5cf6 100%)', paddingBottom: 50, zIndex: 1 }}>
        <div style={{ padding: '28px 32px 0 32px', display: 'flex', alignItems: 'flex-start', gap: 20 }}>
          {photo && (
            <img src={photo} alt={name} style={{ width: 120, height: 120, borderRadius: '50%', border: '3px solid rgba(255,255,255,0.9)', objectFit: 'cover', boxShadow: '0 4px 16px rgba(0,0,0,0.25)', flexShrink: 0 }} />
          )}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 26, fontWeight: 900, color: '#ffffff', margin: '0 0 3px 0', letterSpacing: '-0.02em', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>{name}</h1>
            <p style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.88)', margin: '0 0 14px 0', fontWeight: 500 }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {[{ icon: <Mail size={9} />, text: email }, { icon: <Phone size={9} />, text: phone }, { icon: <MapPin size={9} />, text: location }, website ? { icon: <Globe size={9} />, text: website } : null, linkedin ? { icon: <Link2 size={9} />, text: linkedin } : null, github ? { icon: <GitBranch size={9} />, text: github } : null].filter(Boolean).map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 20, padding: '3px 9px', color: '#ffffff', fontSize: 8.5, fontWeight: 500 }}>
                  {item.icon}<span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Wave bottom */}
        <svg viewBox="0 0 794 60" style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', height: 60 }} preserveAspectRatio="none">
          <path d="M0,30 C150,60 300,0 450,30 C600,60 700,10 794,30 L794,60 L0,60 Z" fill="white" />
        </svg>
      </div>

      {/* SUMMARY */}
      <div style={{ position: 'relative', zIndex: 1, padding: '14px 32px 6px 32px' }}>
        <p style={{ fontSize: 9.5, color: '#475569', lineHeight: 1.8, margin: 0, paddingLeft: 12, borderLeft: '3px solid #6366f1', fontStyle: 'italic' }}>{summary}</p>
      </div>

      {/* BODY */}
      <div style={{ display: 'flex', padding: '4px 0 0 0', position: 'relative', zIndex: 1 }}>

        {/* LEFT 65% */}
        <div style={{ width: '65%', padding: '0 20px 24px 32px', boxSizing: 'border-box' }}>

          {/* EXPERIENCE */}
          <SectionHeader title="Experience" />
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: 14, position: 'relative', paddingLeft: 14 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: 'linear-gradient(180deg, #0ea5e9 0%, #8b5cf6 100%)', borderRadius: 2 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                <div>
                  <span style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{e.role}</span>
                  <span style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginLeft: 6 }}>@ {e.company}</span>
                  {e.location && <span style={{ fontSize: 8.5, color: '#94a3b8', marginLeft: 6 }}>· {e.location}</span>}
                </div>
                <span style={{ fontSize: 8, color: '#fff', fontWeight: 600, background: 'linear-gradient(90deg, #0ea5e9, #6366f1)', borderRadius: 10, padding: '2px 8px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                  {e.startDate} — {e.current ? 'Present' : e.endDate}
                </span>
              </div>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                <p key={li} style={{ fontSize: 9, color: '#475569', margin: '1px 0', lineHeight: 1.65 }}>{l}</p>
              ))}
            </div>
          ))}

          {/* PROJECTS */}
          {prj.length > 0 && (
            <>
              <SectionHeader title="Projects" />
              {prj.map(p => (
                <div key={p.id} style={{ marginBottom: 12, padding: '10px 12px', background: 'linear-gradient(135deg, rgba(14,165,233,0.05), rgba(139,92,246,0.05))', borderRadius: 8, border: '1px solid rgba(99,102,241,0.12)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
                    <span style={{ fontSize: 10, fontWeight: 800, color: '#0f172a' }}>{p.name}</span>
                    {p.link && <span style={{ fontSize: 8, color: tc }}>{p.link}</span>}
                  </div>
                  {p.description && <p style={{ fontSize: 9, color: '#475569', margin: '0 0 4px 0', lineHeight: 1.6 }}>{p.description}</p>}
                  {p.tech && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {p.tech.split(',').map((t, ti) => (
                        <span key={ti} style={{ fontSize: 7.5, background: `${tc}18`, color: tc, borderRadius: 4, padding: '1px 6px', fontWeight: 600 }}>{t.trim()}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}

          {/* EDUCATION */}
          <SectionHeader title="Education" />
          {edu.map(e => (
            <div key={e.id} style={{ marginBottom: 10, paddingLeft: 14, position: 'relative' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: 'linear-gradient(180deg, #06b6d4 0%, #6366f1 100%)', borderRadius: 2 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a', margin: 0 }}>{e.degree}</p>
                  <p style={{ fontSize: 9.5, color: tc, fontWeight: 600, margin: '1px 0' }}>{e.school}</p>
                  {(e.gpa || e.achievements) && <p style={{ fontSize: 8.5, color: '#64748b', margin: 0 }}>{e.gpa && `GPA: ${e.gpa}`}{e.gpa && e.achievements && ' · '}{e.achievements}</p>}
                </div>
                <span style={{ fontSize: 8, color: '#fff', fontWeight: 600, background: 'linear-gradient(90deg, #06b6d4, #6366f1)', borderRadius: 10, padding: '2px 8px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                  {e.startDate} — {e.endDate}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT 35% */}
        <div style={{ width: '35%', padding: '0 24px 24px 12px', boxSizing: 'border-box' }}>

          {/* SKILLS */}
          <SectionHeader title="Skills" />
          {skl.map(s => (
            <div key={s.id} style={{ marginBottom: 9 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: '#334155' }}>{s.name}</span>
                <span style={{ fontSize: 8, color: '#94a3b8' }}>{s.level}%</span>
              </div>
              <div style={{ height: 7, background: 'rgba(14,165,233,0.1)', borderRadius: 20, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${s.level}%`, background: 'linear-gradient(90deg, #0ea5e9, #6366f1, #8b5cf6)', borderRadius: 20, position: 'relative', boxShadow: '0 1px 4px rgba(99,102,241,0.35)' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'rgba(255,255,255,0.25)', borderRadius: '20px 20px 0 0' }} />
                </div>
              </div>
            </div>
          ))}

          {/* LANGUAGES */}
          {lang.length > 0 && (
            <>
              <SectionHeader title="Languages" />
              {lang.map(l => (
                <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6, padding: '5px 8px', background: 'rgba(14,165,233,0.05)', borderRadius: 6, border: '1px solid rgba(14,165,233,0.1)' }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: '#334155' }}>{l.name}</span>
                  <span style={{ fontSize: 8, color: tc, fontWeight: 600, background: `${tc}15`, borderRadius: 8, padding: '1px 7px' }}>{l.proficiency}</span>
                </div>
              ))}
            </>
          )}

          {/* CERTIFICATIONS */}
          {cert.length > 0 && (
            <>
              <SectionHeader title="Certifications" />
              {cert.map(c => (
                <div key={c.id} style={{ marginBottom: 8, padding: '7px 10px', background: 'linear-gradient(135deg, rgba(6,182,212,0.06), rgba(139,92,246,0.06))', borderRadius: 7, borderLeft: `3px solid ${tc}` }}>
                  <p style={{ fontSize: 9, fontWeight: 800, color: '#0f172a', margin: '0 0 1px 0' }}>{c.name}</p>
                  <p style={{ fontSize: 8, color: '#64748b', margin: 0 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
                </div>
              ))}
            </>
          )}

          {/* INTERESTS */}
          {intr.length > 0 && (
            <>
              <SectionHeader title="Interests" />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {intr.map((i, idx) => (
                  <span key={i.id} style={{
                    fontSize: 8.5, fontWeight: 600,
                    background: `${waveColors[idx % 4]}15`,
                    color: waveColors[idx % 4],
                    borderRadius: 12, padding: '3px 9px',
                    border: `1px solid ${waveColors[idx % 4]}25`,
                  }}>{i.name}</span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* FOOTER WAVE */}
      <svg viewBox="0 0 794 40" style={{ display: 'block', width: '100%', height: 40 }} preserveAspectRatio="none">
        <defs>
          <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="33%" stopColor="#6366f1" />
            <stop offset="66%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <path d="M0,20 C100,0 200,40 350,20 C500,0 650,40 794,20 L794,40 L0,40 Z" fill="url(#footerGrad)" />
      </svg>
    </div>
  )
}
