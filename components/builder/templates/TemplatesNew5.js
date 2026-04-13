import { Mail, Phone, MapPin, Award } from 'lucide-react'

const S = {
  name: 'xyz', jobTitle: 'Senior Software Engineer',
  email: 'prachi@email.com', phone: '+91 98765 43210', location: 'Mumbai, India',
  summary: 'Senior Software Engineer with 4+ years building scalable full-stack applications. Led teams, reduced latency by 40%, shipped products used by 500K+ users.',
  experience: [
    { id: 's1', role: 'Senior Engineer', company: 'Google India', location: 'Bengaluru', startDate: 'Jan 2022', endDate: '', current: true, description: '• Architected microservices handling 15M+ API requests/day\n• Led Payments 2.0 reducing failures by 35%\n• Mentored 3 junior engineers' },
    { id: 's2', role: 'Software Engineer', company: 'Razorpay', location: 'Bengaluru', startDate: 'Jul 2020', endDate: 'Dec 2021', current: false, description: '• Built merchant dashboard for 200K+ merchants\n• Optimized queries from 800ms to 120ms' },
  ],
  education: [{ id: 'e1', degree: 'B.Tech Computer Science', school: 'IIT Bombay', startDate: '2015', endDate: '2019', gpa: '9.2/10' }],
  skills: [
    { id: 'sk1', name: 'JavaScript', level: 95 }, { id: 'sk2', name: 'React', level: 92 },
    { id: 'sk3', name: 'Node.js', level: 90 }, { id: 'sk4', name: 'Python', level: 80 },
    { id: 'sk5', name: 'AWS', level: 78 }, { id: 'sk6', name: 'Docker', level: 75 },
  ],
  projects: [{ id: 'p1', name: 'ResumeAI', tech: 'Next.js, MySQL, OpenAI', link: 'resumeai.vercel.app', description: 'AI resume builder with 100+ templates. 2,000+ users in first month.' }],
  certifications: [{ id: 'c1', name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', date: '2023-04' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}
function g(v, f) { return v && String(v).trim() !== '' ? v : f }

// ── BLOSSOM ── Soft rose/peach diagonal split, elegant feminine design
export function BlossomTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#f43f5e' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  const SH = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
      <div style={{ width: 28, height: 2, background: `linear-gradient(to right, ${tc}, ${tc}50)`, borderRadius: 1 }} />
      <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.22em', color: tc, margin: 0 }}>{children}</h2>
      <div style={{ flex: 1, height: 1, background: `${tc}20` }} />
    </div>
  )

  return (
    <div style={{ background: '#fff1f2', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm', position: 'relative', overflow: 'hidden' }}>

      {/* Diagonal background shape */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 200, background: `linear-gradient(150deg, ${tc}22 0%, ${tc}08 60%, transparent 100%)`, zIndex: 0 }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: 180, height: 180, borderRadius: '0 0 0 100%', background: `${tc}15`, zIndex: 0 }} />

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 1, padding: '30px 32px 24px', display: 'flex', alignItems: 'center', gap: 22 }}>
        {photo ? (
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div style={{ width: 86, height: 86, borderRadius: '50%', background: `linear-gradient(135deg, ${tc}40, ${tc}15)`, padding: 3 }}>
              <img src={photo} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: 2, right: 2, width: 18, height: 18, borderRadius: '50%', background: tc, border: '2px solid white' }} />
          </div>
        ) : (
          <div style={{ width: 86, height: 86, borderRadius: '50%', background: `linear-gradient(135deg, ${tc}30, ${tc}10)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 900, color: tc, flexShrink: 0 }}>{name.charAt(0)}</div>
        )}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: '#1a0a0e', letterSpacing: '-0.01em', margin: '0 0 4px', lineHeight: 1.1 }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontWeight: 700, margin: '0 0 12px', letterSpacing: '0.04em' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px 18px' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 9.5, color: '#6b2737' }}><I size={9} color={tc} />{v}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Summary ribbon */}
      <div style={{ position: 'relative', zIndex: 1, margin: '0 32px 20px', padding: '12px 18px', background: 'white', borderRadius: 12, borderLeft: `4px solid ${tc}`, boxShadow: `0 4px 20px ${tc}12` }}>
        <p style={{ color: '#6b2737', fontSize: 10.5, lineHeight: 1.85, margin: 0, fontStyle: 'italic' }}>{summary}</p>
      </div>

      {/* Body */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: 0 }}>
        {/* Left */}
        <div style={{ flex: 1, padding: '0 20px 40px 32px' }}>
          <SH>Experience</SH>
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 16 : 0, paddingBottom: i < exp.length - 1 ? 16 : 0, borderBottom: i < exp.length - 1 ? `1px dashed ${tc}25` : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                <div>
                  <p style={{ fontWeight: 800, fontSize: 11.5, color: '#1a0a0e', margin: 0 }}>{e.role}</p>
                  <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '2px 0' }}>{e.company}{e.location ? <span style={{ color: '#be7a87', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
                </div>
                <span style={{ fontSize: 8.5, color: tc, background: `${tc}12`, border: `1px solid ${tc}25`, padding: '2px 10px', borderRadius: 20, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
              </div>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                <p key={li} style={{ color: '#6b2737', fontSize: 9.5, lineHeight: 1.7, margin: '2px 0 0' }}>{l}</p>
              ))}
            </div>
          ))}

          <div style={{ marginTop: 20 }}>
            <SH>Projects</SH>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '10px 14px', background: 'white', borderRadius: 10, border: `1px solid ${tc}20`, boxShadow: `0 2px 8px ${tc}08` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <p style={{ fontWeight: 700, fontSize: 11, color: '#1a0a0e', margin: 0 }}>{p.name}</p>
                  {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none' }}>🔗 {p.link}</a>}
                </div>
                {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 7px', borderRadius: 20, background: `${tc}12`, color: tc, border: `1px solid ${tc}25`, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
                {p.description && <p style={{ color: '#6b2737', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div style={{ width: '34%', padding: '0 32px 40px 16px', flexShrink: 0 }}>
          <SH>Skills</SH>
          {skl.map(s => (
            <div key={s.id} style={{ marginBottom: 9 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                <span style={{ fontSize: 9.5, color: '#1a0a0e', fontWeight: 500 }}>{s.name}</span>
                <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
              </div>
              <div style={{ height: 6, background: `${tc}15`, borderRadius: 99, overflow: 'hidden' }}>
                <div style={{ height: '100%', background: `linear-gradient(to right, ${tc}cc, ${tc})`, borderRadius: 99, width: `${s.level}%` }} />
              </div>
            </div>
          ))}

          <div style={{ marginTop: 20 }}>
            <SH>Education</SH>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 12, padding: '10px 12px', background: 'white', borderRadius: 10, border: `1px solid ${tc}20`, boxShadow: `0 2px 8px ${tc}08` }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#1a0a0e', margin: '0 0 2px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '0 0 2px' }}>{e.school}</p>
                <p style={{ color: '#be7a87', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#6b2737', fontSize: 8.5, margin: '2px 0 0' }}>GPA: {e.gpa}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── MIST ── Slate blue-grey, floating card panels, ultra-clean minimal
export function MistTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#64748b' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  const Card = ({ children, style = {} }) => (
    <div style={{ background: 'white', borderRadius: 14, padding: '14px 18px', marginBottom: 12, boxShadow: '0 2px 16px rgba(100,116,139,0.10)', border: '1px solid #e2e8f0', ...style }}>
      {children}
    </div>
  )

  const SH = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <div style={{ width: 3, height: 18, borderRadius: 2, background: tc }} />
      <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, margin: 0 }}>{children}</h2>
    </div>
  )

  return (
    <div style={{ background: '#f1f5f9', fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm', padding: '24px 24px 40px' }}>

      {/* Header card */}
      <div style={{ background: 'white', borderRadius: 18, padding: '22px 26px', marginBottom: 16, boxShadow: '0 4px 24px rgba(100,116,139,0.12)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo ? (
          <img src={photo} alt="" style={{ width: 80, height: 80, borderRadius: 14, objectFit: 'cover', border: `2px solid ${tc}30`, flexShrink: 0 }} />
        ) : (
          <div style={{ width: 80, height: 80, borderRadius: 14, background: `${tc}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 900, color: tc, flexShrink: 0 }}>{name.charAt(0)}</div>
        )}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: '#0f172a', margin: '0 0 3px', letterSpacing: '-0.02em' }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontWeight: 600, margin: '0 0 10px' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 9.5, color: '#475569' }}><I size={9} color={tc} />{v}</span>
            ))}
          </div>
        </div>
        {/* Decorative accent */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignSelf: 'flex-start' }}>
          {[1,0.6,0.3].map((o, i) => <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: tc, opacity: o }} />)}
        </div>
      </div>

      {/* Summary */}
      <Card style={{ marginBottom: 16, borderLeft: `3px solid ${tc}` }}>
        <p style={{ color: '#334155', fontSize: 10.5, lineHeight: 1.85, margin: 0 }}>{summary}</p>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: 14 }}>
        <div>
          {/* Experience */}
          <Card>
            <SH>Experience</SH>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0, paddingBottom: i < exp.length - 1 ? 14 : 0, borderBottom: i < exp.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 11.5, color: '#0f172a', margin: 0 }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '2px 0' }}>{e.company}{e.location ? <span style={{ color: '#94a3b8', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: '#64748b', background: '#f8fafc', border: '1px solid #e2e8f0', padding: '2px 9px', borderRadius: 20, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.65, margin: '2px 0 0' }}>{l}</p>
                ))}
              </div>
            ))}
          </Card>

          {/* Projects */}
          <Card>
            <SH>Projects</SH>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '8px 10px', background: '#f8fafc', borderRadius: 8, border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <p style={{ fontWeight: 700, fontSize: 11, color: '#0f172a', margin: 0 }}>{p.name}</p>
                  {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none' }}>↗ {p.link}</a>}
                </div>
                {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 7px', borderRadius: 4, background: `${tc}12`, color: tc, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
                {p.description && <p style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </Card>
        </div>

        <div>
          {/* Skills */}
          <Card>
            <SH>Skills</SH>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 9.5, color: '#0f172a', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
                </div>
                <div style={{ height: 5, background: '#f1f5f9', borderRadius: 99 }}>
                  <div style={{ height: '100%', background: `linear-gradient(to right, ${tc}cc, ${tc})`, borderRadius: 99, width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </Card>

          {/* Education */}
          <Card>
            <SH>Education</SH>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 8 }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#0f172a', margin: '0 0 2px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '0 0 2px' }}>{e.school}</p>
                <p style={{ color: '#94a3b8', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#64748b', fontSize: 8.5, margin: '2px 0 0' }}>GPA: {e.gpa}</p>}
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  )
}

// ── MEADOW ── Sage green, organic shapes, nature-inspired warmth
export function MeadowTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#4d7c5f' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  const SH = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
      <div style={{ width: 10, height: 10, borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', background: tc, flexShrink: 0 }} />
      <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, margin: 0 }}>{children}</h2>
      <div style={{ flex: 1, height: 1, background: `${tc}30` }} />
    </div>
  )

  return (
    <div style={{ background: '#f6faf7', fontFamily: 'Georgia, serif', fontSize: 10.5, lineHeight: 1.6, minHeight: '297mm', position: 'relative', overflow: 'hidden' }}>

      {/* Organic background blobs */}
      <div style={{ position: 'absolute', top: -50, right: -50, width: 220, height: 220, borderRadius: '60% 40% 55% 45% / 45% 55% 45% 55%', background: `${tc}12`, zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: 80, left: -30, width: 160, height: 160, borderRadius: '40% 60% 45% 55% / 55% 45% 55% 45%', background: `${tc}08`, zIndex: 0 }} />

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'stretch', minHeight: 140 }}>
        {/* Left color block */}
        <div style={{ width: '42%', background: `linear-gradient(160deg, ${tc} 0%, ${tc}cc 100%)`, padding: '28px 22px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', bottom: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
          {photo && <img src={photo} alt="" style={{ width: 64, height: 64, borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)', marginBottom: 12 }} />}
          <h1 style={{ fontSize: 20, fontWeight: 700, color: 'white', lineHeight: 1.2, margin: '0 0 5px', fontFamily: 'Georgia, serif' }}>{name}</h1>
          <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', margin: 0 }}>{jobTitle}</p>
        </div>
        {/* Right contact */}
        <div style={{ flex: 1, background: '#e8f5ec', padding: '28px 22px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6 }}>
          {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9.5, color: '#1a3d28' }}><I size={10} color={tc} />{v}</span>
          ))}
          <p style={{ fontSize: 9.5, color: '#2d5a3d', lineHeight: 1.75, marginTop: 8, fontStyle: 'italic' }}>{summary}</p>
        </div>
      </div>

      {/* Body */}
      <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 200px', gap: 0 }}>
        {/* Left */}
        <div style={{ padding: '22px 20px 40px 24px', borderRight: `1px solid ${tc}20` }}>
          <SH>Experience</SH>
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 16 : 0, paddingBottom: i < exp.length - 1 ? 16 : 0, borderBottom: i < exp.length - 1 ? `1px dashed ${tc}25` : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 11.5, color: '#1a3d28', margin: 0 }}>{e.role}</p>
                  <p style={{ color: tc, fontSize: 10, fontWeight: 600, fontStyle: 'italic', margin: '2px 0' }}>{e.company}{e.location ? ` · ${e.location}` : ''}</p>
                </div>
                <span style={{ fontSize: 8.5, color: tc, background: `${tc}12`, border: `1px solid ${tc}25`, padding: '2px 9px', borderRadius: 20, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
              </div>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                <p key={li} style={{ color: '#2d5a3d', fontSize: 9.5, lineHeight: 1.7, margin: '2px 0 0' }}>{l}</p>
              ))}
            </div>
          ))}

          <div style={{ marginTop: 20 }}>
            <SH>Projects</SH>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '10px 12px', background: '#e8f5ec', borderRadius: '8px 20px 8px 20px', border: `1px solid ${tc}20` }}>
                <p style={{ fontWeight: 700, fontSize: 11, color: '#1a3d28', margin: '0 0 3px' }}>{p.name}</p>
                {p.tech && <p style={{ color: tc, fontSize: 9, fontStyle: 'italic', margin: '0 0 3px' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#2d5a3d', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ padding: '22px 24px 40px 16px' }}>
          <SH>Skills</SH>
          {skl.map(s => (
            <div key={s.id} style={{ marginBottom: 9 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                <span style={{ fontSize: 9.5, color: '#1a3d28', fontWeight: 500 }}>{s.name}</span>
                <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
              </div>
              <div style={{ height: 6, background: `${tc}18`, borderRadius: 99, overflow: 'hidden' }}>
                <div style={{ height: '100%', background: `linear-gradient(to right, ${tc}aa, ${tc})`, borderRadius: 99, width: `${s.level}%` }} />
              </div>
            </div>
          ))}

          <div style={{ marginTop: 20 }}>
            <SH>Education</SH>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 12, padding: '10px 12px', background: '#e8f5ec', borderRadius: '8px 20px 8px 20px', border: `1px solid ${tc}20` }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#1a3d28', margin: '0 0 2px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontStyle: 'italic', margin: '0 0 2px' }}>{e.school}</p>
                <p style={{ color: '#4d7c5f', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#2d5a3d', fontSize: 8.5, margin: '2px 0 0' }}>GPA: {e.gpa}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── GOLDENAGE ── Warm amber/gold, elegant serif luxury, centered header
export function GoldenAgeTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#b45309' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  const SH = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${tc}50)` }} />
      <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: tc, margin: 0, fontFamily: 'Georgia, serif' }}>{children}</h2>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to left, transparent, ${tc}50)` }} />
    </div>
  )

  return (
    <div style={{ background: '#fffbf0', fontFamily: 'Georgia, serif', fontSize: 10.5, lineHeight: 1.65, minHeight: '297mm', position: 'relative', overflow: 'hidden' }}>

      {/* Warm background wash */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 220, background: `linear-gradient(180deg, ${tc}10 0%, transparent 100%)`, zIndex: 0 }} />

      {/* Header — centered luxury */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '32px 36px 24px' }}>
        {/* Top ornament */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ height: 1, width: 50, background: `${tc}60` }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: tc }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', border: `2px solid ${tc}`, background: 'transparent' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: tc }} />
          <div style={{ height: 1, width: 50, background: `${tc}60` }} />
        </div>

        {photo && <img src={photo} alt="" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}50`, margin: '0 auto 14px', display: 'block', boxShadow: `0 4px 20px ${tc}25` }} />}

        <h1 style={{ fontSize: 30, fontWeight: 400, color: '#451a03', letterSpacing: '0.08em', margin: '0 0 6px', textTransform: 'uppercase' }}>{name}</h1>
        <p style={{ fontSize: 11, color: tc, fontStyle: 'italic', margin: '0 0 14px', letterSpacing: '0.04em' }}>{jobTitle}</p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '4px 20px', fontSize: 9.5, color: '#78350f' }}>
          {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}><I size={9} color={tc} />{v}</span>
          ))}
        </div>

        {/* Bottom ornament */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 16 }}>
          <div style={{ height: 1, flex: 1, background: `${tc}30` }} />
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: `${tc}60` }} />
          <div style={{ width: 8, height: 8, transform: 'rotate(45deg)', border: `1px solid ${tc}60`, background: 'transparent' }} />
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: `${tc}60` }} />
          <div style={{ height: 1, flex: 1, background: `${tc}30` }} />
        </div>
      </div>

      {/* Summary */}
      <div style={{ position: 'relative', zIndex: 1, margin: '0 36px 20px', padding: '12px 20px', background: `${tc}08`, borderRadius: 8, border: `1px solid ${tc}20` }}>
        <p style={{ color: '#78350f', lineHeight: 1.9, margin: 0, fontStyle: 'italic', textAlign: 'center', fontSize: 10.5 }}>{summary}</p>
      </div>

      {/* Body */}
      <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 200px', gap: 28, padding: '0 36px 40px' }}>
        <div>
          <SH>Experience</SH>
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 16 : 0, paddingBottom: i < exp.length - 1 ? 16 : 0, borderBottom: i < exp.length - 1 ? `1px solid ${tc}18` : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 12, color: '#451a03', margin: 0 }}>{e.role}</p>
                  <p style={{ color: tc, fontSize: 10, fontStyle: 'italic', margin: '2px 0' }}>{e.company}{e.location ? ` · ${e.location}` : ''}</p>
                </div>
                <span style={{ fontSize: 8.5, color: '#92400e', background: `${tc}10`, border: `1px solid ${tc}20`, padding: '2px 9px', borderRadius: 20, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
              </div>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                <p key={li} style={{ color: '#78350f', fontSize: 9.5, lineHeight: 1.7, margin: '2px 0 0' }}>{l}</p>
              ))}
            </div>
          ))}

          <div style={{ marginTop: 20 }}>
            <SH>Projects</SH>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '10px 14px', background: `${tc}06`, borderRadius: 8, border: `1px solid ${tc}18` }}>
                <p style={{ fontWeight: 700, fontSize: 11, color: '#451a03', margin: '0 0 3px' }}>{p.name}</p>
                {p.tech && <p style={{ color: tc, fontSize: 9, fontStyle: 'italic', margin: '0 0 3px' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#78350f', fontSize: 9.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>

        <div>
          <SH>Skills</SH>
          {skl.map(s => (
            <div key={s.id} style={{ marginBottom: 9 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                <span style={{ fontSize: 9.5, color: '#451a03', fontWeight: 500 }}>{s.name}</span>
                <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
              </div>
              <div style={{ height: 5, background: `${tc}15`, borderRadius: 99 }}>
                <div style={{ height: '100%', background: `linear-gradient(to right, ${tc}aa, ${tc})`, borderRadius: 99, width: `${s.level}%` }} />
              </div>
            </div>
          ))}

          <div style={{ marginTop: 20 }}>
            <SH>Education</SH>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 12, padding: '10px 12px', background: `${tc}06`, borderRadius: 8, border: `1px solid ${tc}18` }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#451a03', margin: '0 0 2px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontStyle: 'italic', margin: '0 0 2px' }}>{e.school}</p>
                <p style={{ color: '#92400e', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#78350f', fontSize: 8.5, margin: '2px 0 0' }}>GPA: {e.gpa}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── FROST ── Ice blue, geometric clean panels, crisp modern
export function FrostTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#0284c7' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  const SH = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <div style={{ width: 16, height: 16, borderRadius: 4, background: `${tc}18`, border: `1.5px solid ${tc}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <div style={{ width: 6, height: 6, borderRadius: 1, background: tc }} />
      </div>
      <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, margin: 0 }}>{children}</h2>
    </div>
  )

  return (
    <div style={{ background: '#f0f9ff', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm' }}>

      {/* Header — full width with geometric accent */}
      <div style={{ background: 'white', borderBottom: `3px solid ${tc}`, position: 'relative', overflow: 'hidden' }}>
        {/* Geometric shapes */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: '100%', background: `${tc}08`, clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }} />
        <div style={{ position: 'absolute', top: 0, right: 60, width: 80, height: '100%', background: `${tc}05`, clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }} />

        <div style={{ position: 'relative', padding: '26px 32px 22px', display: 'flex', alignItems: 'center', gap: 22 }}>
          {photo ? (
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <img src={photo} alt="" style={{ width: 80, height: 80, borderRadius: 12, objectFit: 'cover', border: `2px solid ${tc}30` }} />
              <div style={{ position: 'absolute', bottom: -3, right: -3, width: 20, height: 20, borderRadius: 5, background: tc, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: 'white' }} />
              </div>
            </div>
          ) : (
            <div style={{ width: 80, height: 80, borderRadius: 12, background: `${tc}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 900, color: tc, flexShrink: 0 }}>{name.charAt(0)}</div>
          )}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 26, fontWeight: 900, color: '#0c2340', margin: '0 0 4px', letterSpacing: '-0.02em' }}>{name}</h1>
            <p style={{ fontSize: 11, color: tc, fontWeight: 700, margin: '0 0 12px', letterSpacing: '0.03em' }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 18px' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 9.5, color: '#0369a1' }}><I size={9} color={tc} />{v}</span>
              ))}
            </div>
          </div>
          {/* Stats strip */}
          <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
            {[{ n: exp.length + '+', l: 'Jobs' }, { n: skl.length + '+', l: 'Skills' }, { n: prj.length + '+', l: 'Projects' }].map(s => (
              <div key={s.l} style={{ textAlign: 'center', padding: '8px 12px', background: `${tc}10`, borderRadius: 10, border: `1px solid ${tc}20`, minWidth: 48 }}>
                <p style={{ fontSize: 18, fontWeight: 900, color: tc, margin: 0, lineHeight: 1 }}>{s.n}</p>
                <p style={{ fontSize: 7.5, color: '#0369a1', margin: '2px 0 0', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div style={{ margin: '16px 24px', padding: '12px 18px', background: 'white', borderRadius: 10, borderLeft: `4px solid ${tc}`, boxShadow: `0 2px 12px ${tc}08` }}>
        <p style={{ color: '#0c4a6e', fontSize: 10.5, lineHeight: 1.85, margin: 0 }}>{summary}</p>
      </div>

      {/* Body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: 14, padding: '0 24px 40px' }}>
        <div>
          {/* Experience */}
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', marginBottom: 14, boxShadow: `0 2px 12px ${tc}06`, border: `1px solid ${tc}12` }}>
            <SH>Experience</SH>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0, paddingBottom: i < exp.length - 1 ? 14 : 0, borderBottom: i < exp.length - 1 ? `1px solid #e0f2fe` : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 11.5, color: '#0c2340', margin: 0 }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '2px 0' }}>{e.company}{e.location ? <span style={{ color: '#7dd3fc', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: tc, background: `${tc}10`, border: `1px solid ${tc}20`, padding: '2px 9px', borderRadius: 6, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#0369a1', fontSize: 9.5, lineHeight: 1.65, margin: '2px 0 0' }}>{l}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Projects */}
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', boxShadow: `0 2px 12px ${tc}06`, border: `1px solid ${tc}12` }}>
            <SH>Projects</SH>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '9px 12px', background: '#f0f9ff', borderRadius: 8, border: `1px solid ${tc}15` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <p style={{ fontWeight: 700, fontSize: 11, color: '#0c2340', margin: 0 }}>{p.name}</p>
                  {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none' }}>↗ {p.link}</a>}
                </div>
                {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 7px', borderRadius: 4, background: `${tc}12`, color: tc, border: `1px solid ${tc}20`, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
                {p.description && <p style={{ color: '#0369a1', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Skills */}
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', marginBottom: 14, boxShadow: `0 2px 12px ${tc}06`, border: `1px solid ${tc}12` }}>
            <SH>Skills</SH>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 9.5, color: '#0c2340', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
                </div>
                <div style={{ height: 5, background: '#e0f2fe', borderRadius: 99 }}>
                  <div style={{ height: '100%', background: `linear-gradient(to right, ${tc}99, ${tc})`, borderRadius: 99, width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', boxShadow: `0 2px 12px ${tc}06`, border: `1px solid ${tc}12` }}>
            <SH>Education</SH>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10, padding: '9px 11px', background: '#f0f9ff', borderRadius: 8, border: `1px solid ${tc}15` }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#0c2340', margin: '0 0 2px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '0 0 2px' }}>{e.school}</p>
                <p style={{ color: '#7dd3fc', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#0369a1', fontSize: 8.5, margin: '2px 0 0' }}>GPA: {e.gpa}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── VIVID ── Exact: name top-left, photo top-right, cyan section bars, date|detail rows, bullet lists
export function VividTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#00aaff' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  // Full-width colored section bar
  const Bar = ({ title }) => (
    <div style={{ background: tc, padding: '5px 14px', marginBottom: 0 }}>
      <h2 style={{ fontSize: 10, fontWeight: 700, color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>{title}</h2>
    </div>
  )

  // Date | vertical line | content row
  const Row = ({ date, children, last }) => (
    <div style={{ display: 'flex', borderBottom: last ? 'none' : '1px solid #f0f0f0', minHeight: 40 }}>
      <div style={{ width: 100, flexShrink: 0, padding: '8px 10px 8px 14px', fontSize: 9, color: '#555', fontStyle: 'italic', lineHeight: 1.5 }}>
        {date}
      </div>
      <div style={{ width: 1, background: '#d0d0d0', flexShrink: 0, margin: '6px 0' }} />
      <div style={{ flex: 1, padding: '8px 14px', fontSize: 10, color: '#222', lineHeight: 1.6 }}>
        {children}
      </div>
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>

      {/* ── HEADER ── */}
      <div style={{ padding: '20px 20px 14px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 22, fontWeight: 900, color: tc, letterSpacing: '0.04em', margin: '0 0 10px', textTransform: 'uppercase' }}>{name}</h1>
          {/* Contact grid — 2 columns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px 20px', maxWidth: 420 }}>
            {email && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 9.5, color: '#333' }}>
                <Mail size={10} color="#555" />{email}
              </span>
            )}
            {location && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 9.5, color: '#333' }}>
                <MapPin size={10} color="#555" />{location}
              </span>
            )}
            {phone && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 9.5, color: '#333' }}>
                <Phone size={10} color="#555" />{phone}
              </span>
            )}
            {jobTitle && (
              <span style={{ fontSize: 9.5, color: '#555', fontStyle: 'italic' }}>{jobTitle}</span>
            )}
          </div>
        </div>
        {photo && (
          <img src={photo} alt="" style={{ width: 90, height: 90, objectFit: 'cover', border: '1px solid #ddd', flexShrink: 0, marginLeft: 16 }} />
        )}
      </div>

      {/* Thin top border before sections */}
      <div style={{ height: 1, background: '#e0e0e0', margin: '0 0 10px' }} />

      {/* ── EXPERIENCE ── */}
      <div style={{ marginBottom: 10 }}>
        <Bar title="Experience" />
        <div style={{ border: '1px solid #e8e8e8', borderTop: 'none' }}>
          {exp.map((e, i) => (
            <Row
              key={e.id}
              last={i === exp.length - 1}
              date={<>{e.startDate}<br />-<br />{e.current ? 'Present' : e.endDate}</>}
            >
              <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.company}</p>
              <p style={{ color: '#444', fontSize: 9.5, margin: '0 0 3px' }}>{e.role}</p>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: '1px 0 0' }}>{l}</p>
              ))}
            </Row>
          ))}
        </div>
      </div>

      {/* ── EDUCATION ── */}
      <div style={{ marginBottom: 10 }}>
        <Bar title="Education" />
        <div style={{ border: '1px solid #e8e8e8', borderTop: 'none' }}>
          {edu.map((e, i) => (
            <Row key={e.id} last={i === edu.length - 1} date={<>{e.startDate}{e.endDate && e.endDate !== e.startDate ? <><br />-<br />{e.endDate}</> : ''}</>}>
              <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.school}</p>
              <p style={{ color: '#444', fontSize: 9.5, margin: '0 0 1px' }}>{e.degree}</p>
              {e.gpa && <p style={{ color: '#555', fontSize: 9.5, margin: 0 }}>{e.gpa}</p>}
            </Row>
          ))}
        </div>
      </div>

      {/* ── PROJECTS ── */}
      <div style={{ marginBottom: 10 }}>
        <Bar title="Projects" />
        <div style={{ padding: '8px 14px', border: '1px solid #e8e8e8', borderTop: 'none' }}>
          {prj.map((p, i) => (
            <div key={p.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: i < prj.length - 1 ? 6 : 0 }}>
              <span style={{ color: '#333', fontSize: 11, marginTop: 0, flexShrink: 0 }}>•</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#111', margin: 0 }}>{p.name}</p>
                {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: '1px 0 0' }}>{p.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SKILLS as Interests ── */}
      <div style={{ marginBottom: 10 }}>
        <Bar title="Skills" />
        <div style={{ padding: '8px 14px', border: '1px solid #e8e8e8', borderTop: 'none' }}>
          {(resume.skills?.length > 0 ? resume.skills : S.skills).map((s, i) => (
            <div key={s.id || i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
              <span style={{ color: '#333', fontSize: 11, flexShrink: 0 }}>•</span>
              <span style={{ fontSize: 10, color: '#333' }}>{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── LANGUAGES ── */}
      <div style={{ marginBottom: 10 }}>
        <Bar title="Languages" />
        <div style={{ padding: '8px 14px', border: '1px solid #e8e8e8', borderTop: 'none' }}>
          {langs.map((l, i) => (
            <div key={l.id || i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
              <span style={{ color: '#333', fontSize: 11, flexShrink: 0 }}>•</span>
              <span style={{ fontSize: 10, color: '#333' }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

// ── NAVYPRO ── Dark navy header bar, two-column: left sidebar photo+contact+interests+languages, right experience+education+projects
export function NavyProTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#1a237e' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  // Section header: icon box + title + line
  const SH = ({ icon, title }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
      <div style={{ width: 22, height: 22, borderRadius: 4, background: tc, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <span style={{ fontSize: 11 }}>{icon}</span>
      </div>
      <h2 style={{ fontSize: 9.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, margin: 0 }}>{title}</h2>
      <div style={{ flex: 1, height: 1.5, background: tc }} />
    </div>
  )

  // Left sidebar section header (same style)
  const LSH = ({ icon, title }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8, paddingBottom: 6, borderBottom: `1.5px solid ${tc}` }}>
      <div style={{ width: 20, height: 20, borderRadius: 4, background: tc, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <span style={{ fontSize: 10 }}>{icon}</span>
      </div>
      <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, margin: 0 }}>{title}</h2>
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm' }}>

      {/* ── FULL-WIDTH NAVY HEADER BAR ── */}
      <div style={{ background: tc, padding: '14px 22px' }}>
        <h1 style={{ fontSize: 22, fontWeight: 900, color: 'white', letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0 }}>{name}</h1>
        {jobTitle && <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.75)', margin: '3px 0 0', letterSpacing: '0.04em' }}>{jobTitle}</p>}
      </div>

      {/* ── TWO COLUMN BODY ── */}
      <div style={{ display: 'flex' }}>

        {/* LEFT SIDEBAR */}
        <div style={{ width: '32%', padding: '18px 16px 40px', borderRight: `1px solid #e0e0e0`, flexShrink: 0 }}>

          {/* Photo */}
          {photo && (
            <img src={photo} alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', marginBottom: 14, border: `1px solid #ddd` }} />
          )}

          {/* Contact */}
          <div style={{ marginBottom: 16, paddingBottom: 14, borderBottom: `1.5px solid ${tc}` }}>
            {email && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 5, fontSize: 9.5, color: '#222' }}>
                <Mail size={11} color={tc} style={{ flexShrink: 0 }} />{email}
              </div>
            )}
            {phone && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 5, fontSize: 9.5, color: '#222' }}>
                <Phone size={11} color={tc} style={{ flexShrink: 0 }} />{phone}
              </div>
            )}
            {location && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9.5, color: '#222' }}>
                <MapPin size={11} color={tc} style={{ flexShrink: 0 }} />{location}
              </div>
            )}
          </div>

          {/* Skills / Interests */}
          <div style={{ marginBottom: 16 }}>
            <LSH icon="💡" title="Skills" />
            {skl.map((s, i) => (
              <p key={s.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 5px', paddingBottom: 5, borderBottom: i < skl.length - 1 ? '1px solid #f0f0f0' : 'none' }}>{s.name}</p>
            ))}
          </div>

          {/* Languages */}
          <div>
            <LSH icon="🌐" title="Languages" />
            {langs.map((l, i) => (
              <p key={l.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 5px', paddingBottom: 5, borderBottom: i < langs.length - 1 ? '1px solid #f0f0f0' : 'none' }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</p>
            ))}
          </div>
        </div>

        {/* RIGHT MAIN CONTENT */}
        <div style={{ flex: 1, padding: '18px 20px 40px' }}>

          {/* Summary */}
          {summary && (
            <p style={{ color: '#444', fontSize: 10, lineHeight: 1.8, marginBottom: 16, fontStyle: 'italic' }}>{summary}</p>
          )}

          {/* Experience */}
          <div style={{ marginBottom: 18 }}>
            <SH icon="💼" title="Experience" />
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, paddingBottom: i < exp.length - 1 ? 12 : 0, borderBottom: i < exp.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 1 }}>
                  <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: 0 }}>{e.role}</p>
                  <span style={{ fontSize: 9, color: '#555', whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.startDate} - {e.current ? 'Present' : e.endDate}</span>
                </div>
                <p style={{ color: '#444', fontSize: 9.5, margin: '1px 0 3px' }}>{e.company}{e.location ? ` · ${e.location}` : ''}</p>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{l}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Education */}
          <div style={{ marginBottom: 18 }}>
            <SH icon="🎓" title="Education" />
            {edu.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < edu.length - 1 ? 10 : 0, paddingBottom: i < edu.length - 1 ? 10 : 0, borderBottom: i < edu.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 1 }}>
                  <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: 0 }}>{e.degree}</p>
                  <span style={{ fontSize: 9, color: '#555', whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.endDate || e.startDate}</span>
                </div>
                <p style={{ color: '#444', fontSize: 9.5, margin: '1px 0 1px' }}>{e.school}</p>
                {e.gpa && <p style={{ color: '#666', fontSize: 9.5, margin: 0 }}>{e.gpa}</p>}
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <SH icon="🚀" title="Projects" />
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, paddingBottom: i < prj.length - 1 ? 10 : 0, borderBottom: i < prj.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{p.name}</p>
                {p.tech && <p style={{ color: tc, fontSize: 9, margin: '0 0 2px', fontStyle: 'italic' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

// ── HEXFOLIO ── Hexagon bg pattern, centered hex-clipped photo, two-col date|bullet layout
export function HexFolioTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#334155' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  // Hex SVG pattern as background
  const hexPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V18L28 2l28 16v32z' fill='none' stroke='%23cbd5e1' stroke-width='1'/%3E%3Cpath d='M28 100L0 84V52l28-16 28 16v32z' fill='none' stroke='%23cbd5e1' stroke-width='1'/%3E%3C/svg%3E")`

  // Section block: label left col + horizontal rule
  const Sec = ({ title, children }) => (
    <div style={{ display: 'flex', marginBottom: 0 }}>
      {/* Left label column */}
      <div style={{ width: 110, flexShrink: 0, paddingRight: 12, paddingTop: 2 }}>
        <p style={{ fontSize: 9.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#1e293b', margin: 0, fontVariant: 'small-caps' }}>{title}</p>
      </div>
      {/* Right content */}
      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  )

  // Divider line
  const Div = () => <div style={{ height: 1, background: '#94a3b8', margin: '10px 0' }} />

  return (
    <div style={{ background: '#f8fafc', backgroundImage: hexPattern, backgroundSize: '56px 100px', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm' }}>

      {/* ── CENTERED HEADER ── */}
      <div style={{ textAlign: 'center', padding: '28px 32px 18px', background: 'white' }}>
        {/* Hexagon clipped photo */}
        {photo && (
          <div style={{ width: 90, height: 90, margin: '0 auto 14px', position: 'relative' }}>
            <svg width="90" height="90" style={{ position: 'absolute', top: 0, left: 0 }}>
              <defs>
                <clipPath id="hex">
                  <polygon points="45,2 88,24 88,66 45,88 2,66 2,24" />
                </clipPath>
              </defs>
              <image href={photo} x="0" y="0" width="90" height="90" clipPath="url(#hex)" preserveAspectRatio="xMidYMid slice" />
              <polygon points="45,2 88,24 88,66 45,88 2,66 2,24" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
            </svg>
          </div>
        )}
        <h1 style={{ fontSize: 24, fontWeight: 700, color: '#0f172a', margin: '0 0 6px', letterSpacing: '0.01em' }}>{name}</h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0 8px', fontSize: 10, color: '#475569' }}>
          {[location, phone, email].filter(Boolean).map((v, i, arr) => (
            <span key={i}>{v}{i < arr.length - 1 ? <span style={{ margin: '0 4px', color: '#94a3b8' }}>|</span> : ''}</span>
          ))}
        </div>
        {jobTitle && <p style={{ fontSize: 10, color: '#64748b', margin: '4px 0 0', fontStyle: 'italic' }}>{jobTitle}</p>}
      </div>

      {/* ── BODY ── */}
      <div style={{ padding: '4px 32px 40px', background: 'white' }}>

        {/* Experience */}
        <Div />
        <Sec title="Experience">
          {exp.map((e, i) => (
            <div key={e.id} style={{ display: 'flex', marginBottom: i < exp.length - 1 ? 10 : 0 }}>
              {/* Date sub-col */}
              <div style={{ width: 80, flexShrink: 0, fontSize: 9, color: '#64748b', lineHeight: 1.5, paddingRight: 8 }}>
                {e.startDate}<br />-<br />{e.current ? 'Present' : e.endDate}
              </div>
              {/* Content */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}>
                  <span style={{ color: '#334155', fontSize: 11, marginTop: 1, flexShrink: 0 }}>•</span>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 10.5, color: '#0f172a', margin: 0 }}>{e.role}</p>
                    <p style={{ color: '#475569', fontSize: 9.5, margin: '1px 0 2px' }}>{e.company}{e.location ? ` · ${e.location}` : ''}</p>
                    {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                      <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{l}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Sec>

        {/* Education */}
        <Div />
        <Sec title="Education">
          {edu.map((e, i) => (
            <div key={e.id} style={{ display: 'flex', marginBottom: i < edu.length - 1 ? 10 : 0 }}>
              <div style={{ width: 80, flexShrink: 0, fontSize: 9, color: '#64748b', lineHeight: 1.5, paddingRight: 8 }}>
                {e.endDate || e.startDate}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}>
                  <span style={{ color: '#334155', fontSize: 11, marginTop: 1, flexShrink: 0 }}>•</span>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 10.5, color: '#0f172a', margin: 0 }}>{e.degree}</p>
                    <p style={{ color: '#475569', fontSize: 9.5, margin: '1px 0 1px' }}>{e.school}</p>
                    {e.gpa && <p style={{ color: '#64748b', fontSize: 9.5, margin: 0 }}>{e.gpa}</p>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Sec>

        {/* Projects */}
        <Div />
        <Sec title="Projects">
          <div style={{ paddingLeft: 0 }}>
            {prj.map((p, i) => (
              <div key={p.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 5, marginBottom: i < prj.length - 1 ? 8 : 0 }}>
                <span style={{ color: '#334155', fontSize: 11, marginTop: 1, flexShrink: 0 }}>•</span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 10.5, color: '#0f172a', margin: 0 }}>{p.name}</p>
                  {p.tech && <p style={{ color: '#64748b', fontSize: 9, margin: '1px 0 2px', fontStyle: 'italic' }}>{p.tech}</p>}
                  {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{p.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </Sec>

        {/* Skills / Interests */}
        <Div />
        <Sec title="Interests">
          <div>
            {skl.map((s, i) => (
              <div key={s.id || i} style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
                <span style={{ color: '#334155', fontSize: 11, flexShrink: 0 }}>•</span>
                <span style={{ fontSize: 10, color: '#333' }}>{s.name}</span>
              </div>
            ))}
          </div>
        </Sec>

        {/* Languages */}
        <Div />
        <Sec title="Languages">
          <div>
            {langs.map((l, i) => (
              <div key={l.id || i} style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
                <span style={{ color: '#334155', fontSize: 11, flexShrink: 0 }}>•</span>
                <span style={{ fontSize: 10, color: '#333' }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</span>
              </div>
            ))}
          </div>
        </Sec>

      </div>
    </div>
  )
}

// ── TEALCARD ── Teal header with circular photo+name left, contact icons right, dark strip, two-col body with pill section headers
export function TealCardTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#0891b2' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  // Pill section header: icon circle + teal rounded bar
  const PillSH = ({ icon, title }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 10 }}>
      <div style={{ width: 28, height: 28, borderRadius: '50%', background: tc, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
        <span style={{ fontSize: 13 }}>{icon}</span>
      </div>
      <div style={{ flex: 1, background: tc, padding: '5px 12px 5px 10px', borderRadius: '0 20px 20px 0' }}>
        <h2 style={{ fontSize: 9.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'white', margin: 0 }}>{title}</h2>
      </div>
    </div>
  )

  // Experience row: date left | content right
  const ExpRow = ({ date, children, last }) => (
    <div style={{ display: 'flex', gap: 10, marginBottom: last ? 0 : 12, paddingBottom: last ? 0 : 12, borderBottom: last ? 'none' : '1px solid #f0f0f0' }}>
      <div style={{ width: 80, flexShrink: 0, fontSize: 9, color: '#64748b', fontStyle: 'italic', lineHeight: 1.5 }}>{date}</div>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm' }}>

      {/* ── TEAL HEADER ── */}
      <div style={{ background: tc, padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
        {/* Left: photo + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {photo ? (
            <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.5)', flexShrink: 0 }} />
          ) : (
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 900, color: 'white', flexShrink: 0 }}>{name.charAt(0)}</div>
          )}
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 900, color: 'white', textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.2, margin: 0 }}>{name}</h1>
            {jobTitle && <p style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.8)', margin: '4px 0 0' }}>{jobTitle}</p>}
          </div>
        </div>
        {/* Right: contact icons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
          {email && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 9.5, color: 'white' }}>
              <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={10} color="white" />
              </div>
              {email}
            </div>
          )}
          {phone && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 9.5, color: 'white' }}>
              <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={10} color="white" />
              </div>
              {phone}
            </div>
          )}
          {location && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 9.5, color: 'white' }}>
              <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={10} color="white" />
              </div>
              {location}
            </div>
          )}
        </div>
      </div>

      {/* Dark navy strip */}
      <div style={{ height: 8, background: '#0c2340' }} />

      {/* ── TWO COLUMN BODY ── */}
      <div style={{ display: 'flex' }}>

        {/* LEFT COLUMN — Interests + Languages */}
        <div style={{ width: '34%', padding: '16px 14px 40px', borderRight: '1px solid #e5e7eb', flexShrink: 0 }}>

          {summary && (
            <p style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.75, marginBottom: 14, fontStyle: 'italic' }}>{summary}</p>
          )}

          {/* Interests / Skills */}
          <div style={{ marginBottom: 18 }}>
            <PillSH icon="💡" title="Interests" />
            {skl.map((s, i) => (
              <p key={s.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 6px', paddingLeft: 4 }}>{s.name}</p>
            ))}
          </div>

          {/* Languages */}
          <div>
            <PillSH icon="🌐" title="Languages" />
            {langs.map((l, i) => (
              <p key={l.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 6px', paddingLeft: 4 }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</p>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — Experience + Education + Projects */}
        <div style={{ flex: 1, padding: '16px 18px 40px' }}>

          {/* Experience */}
          <div style={{ marginBottom: 18 }}>
            <PillSH icon="💼" title="Experience" />
            {exp.map((e, i) => (
              <ExpRow
                key={e.id}
                last={i === exp.length - 1}
                date={<>{e.startDate} -<br />{e.current ? 'Present' : e.endDate}</>}
              >
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.company}</p>
                <p style={{ color: '#475569', fontSize: 9.5, margin: '0 0 3px' }}>{e.role}</p>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: '1px 0 0' }}>{l}</p>
                ))}
              </ExpRow>
            ))}
          </div>

          {/* Education */}
          <div style={{ marginBottom: 18 }}>
            <PillSH icon="🎓" title="Education" />
            {edu.map((e, i) => (
              <ExpRow key={e.id} last={i === edu.length - 1} date={e.endDate || e.startDate}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.school}</p>
                <p style={{ color: '#475569', fontSize: 9.5, margin: '0 0 1px' }}>{e.degree}</p>
                {e.gpa && <p style={{ color: '#64748b', fontSize: 9.5, margin: 0 }}>{e.gpa}</p>}
              </ExpRow>
            ))}
          </div>

          {/* Projects */}
          <div>
            <PillSH icon="🚀" title="Projects" />
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, paddingBottom: i < prj.length - 1 ? 10 : 0, borderBottom: i < prj.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{p.name}</p>
                {p.tech && <p style={{ color: tc, fontSize: 9, margin: '0 0 2px', fontStyle: 'italic' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

// ── CRIMSONSIDE ── Dark red header left + coral right sidebar with photo, two-col body
export function CrimsonSideTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#b91c1c' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  // Coral sidebar color (lighter tint of theme)
  const coral = `${tc}28`
  const coralBg = '#f8d7d7'

  // Section title — red uppercase spaced
  const ST = ({ title }) => (
    <h2 style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, margin: '0 0 10px', paddingBottom: 4, borderBottom: `1px solid ${tc}30` }}>{title}</h2>
  )

  // Sidebar section title
  const SST = ({ title }) => (
    <h2 style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, margin: '0 0 8px' }}>{title}</h2>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm', display: 'flex', flexDirection: 'column' }}>

      {/* ── HEADER ── split: dark red left + coral right with photo */}
      <div style={{ display: 'flex', minHeight: 110 }}>
        {/* Left dark header */}
        <div style={{ flex: 1, background: tc, padding: '20px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ fontSize: 20, fontWeight: 900, color: 'white', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 6px', lineHeight: 1.1 }}>{name}</h1>
          {location && <p style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.85)', margin: '0 0 3px' }}>{location}</p>}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 8px', fontSize: 9.5, color: 'rgba(255,255,255,0.85)' }}>
            {phone && <span>{phone}</span>}
            {phone && email && <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>}
            {email && <span>{email}</span>}
          </div>
          {jobTitle && <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)', margin: '4px 0 0', fontStyle: 'italic' }}>{jobTitle}</p>}
        </div>
        {/* Right coral header with photo */}
        <div style={{ width: '38%', background: coralBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative' }}>
          {/* Coral accent bar on far right */}
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 8, background: tc }} />
          {photo ? (
            <img src={photo} alt="" style={{ width: 90, height: 90, objectFit: 'cover', border: '3px solid white', boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }} />
          ) : (
            <div style={{ width: 90, height: 90, background: `${tc}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 900, color: tc }}>{name.charAt(0)}</div>
          )}
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ display: 'flex', flex: 1 }}>

        {/* LEFT MAIN — Experience + Education + Projects */}
        <div style={{ flex: 1, padding: '18px 20px 40px', borderRight: '1px solid #e5e7eb' }}>

          {summary && (
            <p style={{ color: '#475569', fontSize: 10, lineHeight: 1.8, marginBottom: 16, fontStyle: 'italic' }}>{summary}</p>
          )}

          {/* Experience */}
          <div style={{ marginBottom: 18 }}>
            <ST title="Experience" />
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, paddingBottom: i < exp.length - 1 ? 12 : 0, borderBottom: i < exp.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.company}</p>
                <p style={{ fontSize: 9, color: '#64748b', fontStyle: 'italic', margin: '0 0 2px' }}>{e.startDate} - {e.current ? 'Present' : e.endDate}</p>
                <p style={{ color: '#444', fontSize: 9.5, margin: '0 0 3px' }}>{e.role}</p>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{l}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Education */}
          <div style={{ marginBottom: 18 }}>
            <ST title="Education" />
            {edu.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < edu.length - 1 ? 10 : 0, paddingBottom: i < edu.length - 1 ? 10 : 0, borderBottom: i < edu.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.school}</p>
                <p style={{ fontSize: 9, color: '#64748b', fontStyle: 'italic', margin: '0 0 2px' }}>{e.endDate || e.startDate}</p>
                <p style={{ color: '#444', fontSize: 9.5, margin: '0 0 1px' }}>{e.degree}</p>
                {e.gpa && <p style={{ color: '#64748b', fontSize: 9.5, margin: 0 }}>{e.gpa}</p>}
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <ST title="Projects" />
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, paddingBottom: i < prj.length - 1 ? 10 : 0, borderBottom: i < prj.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{p.name}</p>
                {p.tech && <p style={{ color: tc, fontSize: 9, margin: '0 0 2px', fontStyle: 'italic' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR — coral bg, Languages + Interests/Skills */}
        <div style={{ width: '38%', background: coralBg, padding: '18px 16px 40px', flexShrink: 0, position: 'relative' }}>
          {/* Right accent bar */}
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 8, background: tc }} />

          {/* Languages */}
          <div style={{ marginBottom: 20 }}>
            <SST title="Languages" />
            {langs.map((l, i) => (
              <p key={l.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 6px' }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</p>
            ))}
          </div>

          {/* Interests / Skills */}
          <div>
            <SST title="Interests" />
            {skl.map((s, i) => (
              <p key={s.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 6px' }}>{s.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── CORALBOX ── Two-col: left = bordered section boxes with coral header bars, right = coral profile top + white bordered boxes
export function CoralBoxTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#ef5350' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  // Bordered box with coral header bar
  const Box = ({ title, children }) => (
    <div style={{ border: `1.5px solid ${tc}`, borderRadius: 2, marginBottom: 10, overflow: 'hidden' }}>
      <div style={{ background: tc, padding: '5px 14px' }}>
        <h2 style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'white', margin: 0, textAlign: 'center' }}>{title}</h2>
      </div>
      <div style={{ padding: '12px 14px', background: 'white' }}>
        {children}
      </div>
    </div>
  )

  return (
    <div style={{ background: '#f5f5f5', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm', padding: '12px' }}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>

        {/* ── LEFT COLUMN ── */}
        <div style={{ flex: 1 }}>

          {/* Experience box */}
          <Box title="Experience">
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, paddingBottom: i < exp.length - 1 ? 12 : 0, borderBottom: i < exp.length - 1 ? `1px solid ${tc}20` : 'none' }}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.company}</p>
                <p style={{ fontSize: 9, color: '#64748b', fontStyle: 'italic', margin: '0 0 2px' }}>{e.startDate} - {e.current ? 'Present' : e.endDate}</p>
                <p style={{ color: '#444', fontSize: 9.5, margin: '0 0 3px' }}>{e.role}</p>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{l}</p>
                ))}
              </div>
            ))}
          </Box>

          {/* Education box */}
          <Box title="Education">
            {edu.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < edu.length - 1 ? 10 : 0, paddingBottom: i < edu.length - 1 ? 10 : 0, borderBottom: i < edu.length - 1 ? `1px solid ${tc}20` : 'none' }}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.school}</p>
                <p style={{ fontSize: 9, color: '#64748b', fontStyle: 'italic', margin: '0 0 1px' }}>{e.endDate || e.startDate}</p>
                <p style={{ color: '#444', fontSize: 9.5, margin: '0 0 1px' }}>{e.degree}</p>
                {e.gpa && <p style={{ color: '#64748b', fontSize: 9.5, margin: 0 }}>{e.gpa}</p>}
              </div>
            ))}
          </Box>

          {/* Projects box */}
          <Box title="Projects">
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, paddingBottom: i < prj.length - 1 ? 10 : 0, borderBottom: i < prj.length - 1 ? `1px solid ${tc}20` : 'none' }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{p.name}</p>
                {p.tech && <p style={{ color: tc, fontSize: 9, margin: '0 0 2px', fontStyle: 'italic' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </Box>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div style={{ width: '38%', flexShrink: 0 }}>

          {/* Profile box — coral bg */}
          <div style={{ border: `1.5px solid ${tc}`, borderRadius: 2, marginBottom: 10, overflow: 'hidden' }}>
            <div style={{ background: tc, padding: '16px 14px', textAlign: 'center' }}>
              {photo ? (
                <img src={photo} alt="" style={{ width: 80, height: 80, objectFit: 'cover', border: '3px solid rgba(255,255,255,0.5)', marginBottom: 10, display: 'block', margin: '0 auto 10px' }} />
              ) : (
                <div style={{ width: 80, height: 80, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 900, color: 'white', margin: '0 auto 10px' }}>{name.charAt(0)}</div>
              )}
              <h1 style={{ fontSize: 16, fontWeight: 900, color: 'white', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 10px', lineHeight: 1.2 }}>{name}</h1>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'flex-start', textAlign: 'left' }}>
                {email && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9.5, color: 'white' }}>
                    <Mail size={10} color="white" />{email}
                  </div>
                )}
                {phone && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9.5, color: 'white' }}>
                    <Phone size={10} color="white" />{phone}
                  </div>
                )}
                {location && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9.5, color: 'white' }}>
                    <MapPin size={10} color="white" />{location}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Languages box */}
          <Box title="Languages">
            {langs.map((l, i) => (
              <p key={l.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 5px' }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</p>
            ))}
          </Box>

          {/* Interests / Skills box */}
          <Box title="Interests">
            {skl.map((s, i) => (
              <p key={s.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 5px' }}>{s.name}</p>
            ))}
          </Box>

          {/* Summary if exists */}
          {summary && (
            <Box title="About">
              <p style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.75, margin: 0, fontStyle: 'italic' }}>{summary}</p>
            </Box>
          )}
        </div>
      </div>
    </div>
  )
}

// ── CLEANLIST ── Photo top-left, centered name, single-col, italic section titles with underline, bullet+date rows
export function CleanListTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#1e293b' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  // Section title: bold italic + full underline
  const ST = ({ title }) => (
    <div style={{ marginBottom: 8 }}>
      <h2 style={{ fontSize: 11, fontWeight: 700, fontStyle: 'italic', color: '#111', margin: '0 0 4px' }}>{title}</h2>
      <div style={{ height: 1, background: '#555' }} />
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm', padding: '24px 32px 40px' }}>

      {/* ── HEADER ── */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 14 }}>
        {/* Photo top-left */}
        {photo && (
          <img src={photo} alt="" style={{ width: 90, height: 90, objectFit: 'cover', flexShrink: 0 }} />
        )}
        {/* Centered name + contact */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: '#111', margin: '0 0 6px', letterSpacing: '0.01em' }}>{name}</h1>
          {jobTitle && <p style={{ fontSize: 10, color: '#555', margin: '0 0 4px', fontStyle: 'italic' }}>{jobTitle}</p>}
          <p style={{ fontSize: 10, color: '#444', margin: '0 0 3px' }}>{location}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0 8px', fontSize: 10, color: '#444' }}>
            {phone && <span>{phone}</span>}
            {phone && email && <span style={{ color: '#aaa', margin: '0 4px' }}>|</span>}
            {email && <span>{email}</span>}
          </div>
        </div>
      </div>

      {/* Header divider */}
      <div style={{ height: 1, background: '#555', marginBottom: 14 }} />

      {/* ── EXPERIENCE ── */}
      <div style={{ marginBottom: 14 }}>
        <ST title="Experience" />
        {exp.map((e, i) => (
          <div key={e.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 5, marginBottom: i < exp.length - 1 ? 10 : 0 }}>
            <span style={{ fontSize: 11, color: '#333', flexShrink: 0, marginTop: 1 }}>•</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: 0 }}>{e.company}</p>
                <span style={{ fontSize: 9, color: '#555', whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.startDate} - {e.current ? 'Present' : e.endDate}</span>
              </div>
              <p style={{ color: '#444', fontSize: 9.5, margin: '1px 0 2px' }}>{e.role}</p>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{l}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── EDUCATION ── */}
      <div style={{ marginBottom: 14 }}>
        <ST title="Education" />
        {edu.map((e, i) => (
          <div key={e.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 5, marginBottom: i < edu.length - 1 ? 8 : 0 }}>
            <span style={{ fontSize: 11, color: '#333', flexShrink: 0, marginTop: 1 }}>•</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: 0 }}>{e.school}</p>
                <span style={{ fontSize: 9, color: '#555', whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.endDate || e.startDate}</span>
              </div>
              <p style={{ color: '#444', fontSize: 9.5, margin: '1px 0 1px' }}>{e.degree}</p>
              {e.gpa && <p style={{ color: '#64748b', fontSize: 9.5, margin: 0 }}>{e.gpa}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* ── PROJECTS ── */}
      <div style={{ marginBottom: 14 }}>
        <ST title="Projects" />
        {prj.map((p, i) => (
          <div key={p.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 5, marginBottom: i < prj.length - 1 ? 6 : 0 }}>
            <span style={{ fontSize: 11, color: '#333', flexShrink: 0, marginTop: 1 }}>•</span>
            <div>
              <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: 0 }}>{p.name}</p>
              {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{p.description}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* ── INTERESTS / SKILLS ── */}
      <div style={{ marginBottom: 14 }}>
        <ST title="Interests" />
        {skl.map((s, i) => (
          <div key={s.id || i} style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
            <span style={{ fontSize: 11, color: '#333', flexShrink: 0 }}>•</span>
            <span style={{ fontSize: 10, color: '#333' }}>{s.name}</span>
          </div>
        ))}
      </div>

      {/* ── LANGUAGES ── */}
      <div>
        <ST title="Languages" />
        {langs.map((l, i) => (
          <div key={l.id || i} style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
            <span style={{ fontSize: 11, color: '#333', flexShrink: 0 }}>•</span>
            <span style={{ fontSize: 10, color: '#333' }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</span>
          </div>
        ))}
      </div>

    </div>
  )
}

// ── SIMPLEDOC ── Photo top-left, centered name, single-col, bold section titles with double underline, bullet+date rows
export function SimpleDocTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#1e293b' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  // Section title: bold non-italic + thick bottom border
  const ST = ({ title }) => (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        <h2 style={{ fontSize: 11, fontWeight: 700, color: '#111', margin: '0 10px 0 0', whiteSpace: 'nowrap' }}>{title}</h2>
        <div style={{ flex: 1, borderBottom: '2px solid #333' }} />
      </div>
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm', padding: '24px 32px 40px' }}>

      {/* ── HEADER ── */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 18 }}>
        {photo && (
          <img src={photo} alt="" style={{ width: 90, height: 90, objectFit: 'cover', flexShrink: 0 }} />
        )}
        <div style={{ flex: 1, textAlign: 'center', paddingTop: 6 }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#111', margin: '0 0 5px' }}>{name}</h1>
          {jobTitle && <p style={{ fontSize: 10, color: '#555', margin: '0 0 3px' }}>{jobTitle}</p>}
          {location && <p style={{ fontSize: 10, color: '#444', margin: '0 0 3px' }}>{location}</p>}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0 6px', fontSize: 10, color: '#444' }}>
            {phone && <span>{phone}</span>}
            {phone && email && <span style={{ color: '#aaa', margin: '0 4px' }}>|</span>}
            {email && <span>{email}</span>}
          </div>
        </div>
      </div>

      {/* ── EXPERIENCE ── */}
      <div style={{ marginBottom: 16 }}>
        <ST title="Experience" />
        {exp.map((e, i) => (
          <div key={e.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: i < exp.length - 1 ? 10 : 0 }}>
            <span style={{ fontSize: 14, color: '#333', flexShrink: 0, lineHeight: 1.2 }}>•</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: 0 }}>{e.company}</p>
                <span style={{ fontSize: 9.5, color: '#444', whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.startDate} - {e.current ? 'Present' : e.endDate}</span>
              </div>
              <p style={{ color: '#555', fontSize: 9.5, margin: '1px 0 2px' }}>{e.role}</p>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{l}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── EDUCATION ── */}
      <div style={{ marginBottom: 16 }}>
        <ST title="Education" />
        {edu.map((e, i) => (
          <div key={e.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: i < edu.length - 1 ? 8 : 0 }}>
            <span style={{ fontSize: 14, color: '#333', flexShrink: 0, lineHeight: 1.2 }}>•</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: 0 }}>{e.school}</p>
                <span style={{ fontSize: 9.5, color: '#444', whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.endDate || e.startDate}</span>
              </div>
              <p style={{ color: '#555', fontSize: 9.5, margin: '1px 0 1px' }}>{e.degree}</p>
              {e.gpa && <p style={{ color: '#666', fontSize: 9.5, margin: 0 }}>{e.gpa}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* ── PROJECTS ── */}
      <div style={{ marginBottom: 16 }}>
        <ST title="Projects" />
        {prj.map((p, i) => (
          <div key={p.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: i < prj.length - 1 ? 6 : 0 }}>
            <span style={{ fontSize: 14, color: '#333', flexShrink: 0, lineHeight: 1.2 }}>•</span>
            <div>
              <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: 0 }}>{p.name}</p>
              {p.tech && <p style={{ color: '#64748b', fontSize: 9, margin: '1px 0 2px', fontStyle: 'italic' }}>{p.tech}</p>}
              {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{p.description}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* ── INTERESTS / SKILLS ── */}
      <div style={{ marginBottom: 16 }}>
        <ST title="Interests" />
        {skl.map((s, i) => (
          <div key={s.id || i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
            <span style={{ fontSize: 14, color: '#333', flexShrink: 0, lineHeight: 1.2 }}>•</span>
            <span style={{ fontSize: 10, color: '#333' }}>{s.name}</span>
          </div>
        ))}
      </div>

      {/* ── LANGUAGES ── */}
      <div>
        <ST title="Languages" />
        {langs.map((l, i) => (
          <div key={l.id || i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
            <span style={{ fontSize: 14, color: '#333', flexShrink: 0, lineHeight: 1.2 }}>•</span>
            <span style={{ fontSize: 10, color: '#333' }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</span>
          </div>
        ))}
      </div>

    </div>
  )
}

// ── TIMELINESIDE ── Left sidebar photo+contact+interests+languages, right timeline with circle dots, icon section headers
export function TimelineSideTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#3730a3' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  // Section header with icon + large bold text
  const SH = ({ icon, title }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <span style={{ fontSize: 14 }}>{icon}</span>
      <h2 style={{ fontSize: 14, fontWeight: 700, color: '#111', margin: 0 }}>{title}</h2>
    </div>
  )

  // Left sidebar section header
  const LSH = ({ icon, title }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
      <span style={{ fontSize: 12 }}>{icon}</span>
      <h3 style={{ fontSize: 11, fontWeight: 700, color: '#111', margin: 0 }}>{title}</h3>
    </div>
  )

  // Timeline entry with circle dot
  const TLEntry = ({ children, last }) => (
    <div style={{ display: 'flex', gap: 0, marginBottom: last ? 0 : 12 }}>
      {/* Timeline line + dot */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 20, flexShrink: 0 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', border: `1.5px solid #94a3b8`, background: 'white', flexShrink: 0, marginTop: 2 }} />
        {!last && <div style={{ width: 1, flex: 1, background: '#e2e8f0', marginTop: 2 }} />}
      </div>
      <div style={{ flex: 1, paddingLeft: 8, paddingBottom: last ? 0 : 4 }}>
        {children}
      </div>
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm', display: 'flex' }}>

      {/* ── LEFT SIDEBAR ── */}
      <div style={{ width: '30%', padding: '20px 14px 40px', borderRight: '1px solid #e5e7eb', flexShrink: 0 }}>

        {/* Photo */}
        {photo && (
          <img src={photo} alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', marginBottom: 14 }} />
        )}

        {/* Name on mobile / small view */}
        <h1 style={{ fontSize: 16, fontWeight: 900, color: tc, textTransform: 'uppercase', letterSpacing: '0.04em', margin: '0 0 12px', lineHeight: 1.2 }}>{name}</h1>

        {/* Contact */}
        <div style={{ marginBottom: 16 }}>
          {location && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5, fontSize: 9.5, color: '#333' }}>
              <MapPin size={11} color={tc} style={{ flexShrink: 0 }} />{location}
            </div>
          )}
          {phone && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5, fontSize: 9.5, color: '#333' }}>
              <Phone size={11} color={tc} style={{ flexShrink: 0 }} />{phone}
            </div>
          )}
          {email && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9.5, color: '#333' }}>
              <Mail size={11} color={tc} style={{ flexShrink: 0 }} />{email}
            </div>
          )}
        </div>

        {/* Interests / Skills */}
        <div style={{ marginBottom: 16 }}>
          <LSH icon="💙" title="Interests" />
          {skl.map((s, i) => (
            <p key={s.id || i} style={{ fontSize: 10, color: '#444', margin: '0 0 5px' }}>{s.name}</p>
          ))}
        </div>

        {/* Languages */}
        <div>
          <LSH icon="🌐" title="Languages" />
          {langs.map((l, i) => (
            <p key={l.id || i} style={{ fontSize: 10, color: '#444', margin: '0 0 5px' }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</p>
          ))}
        </div>
      </div>

      {/* ── RIGHT MAIN ── */}
      <div style={{ flex: 1, padding: '20px 20px 40px' }}>

        {/* Name large top-right */}
        <h1 style={{ fontSize: 20, fontWeight: 900, color: tc, textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 16px' }}>{name}</h1>

        {summary && (
          <p style={{ color: '#475569', fontSize: 10, lineHeight: 1.8, marginBottom: 18, fontStyle: 'italic' }}>{summary}</p>
        )}

        {/* Experience */}
        <div style={{ marginBottom: 20 }}>
          <SH icon="💼" title="Experience" />
          {exp.map((e, i) => (
            <TLEntry key={e.id} last={i === exp.length - 1}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: 0 }}>{e.company}</p>
                <span style={{ fontSize: 9, color: '#64748b', fontStyle: 'italic', whiteSpace: 'nowrap', marginLeft: 6, flexShrink: 0 }}>{e.startDate}</span>
              </div>
              <p style={{ color: '#555', fontSize: 9.5, margin: '1px 0 2px' }}>{e.role}</p>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                <div key={li} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0', flex: 1 }}>{l}</p>
                  {li === 0 && <span style={{ fontSize: 9, color: '#64748b', fontStyle: 'italic', whiteSpace: 'nowrap', marginLeft: 6, flexShrink: 0 }}>{e.current ? 'Present' : e.endDate}</span>}
                </div>
              ))}
            </TLEntry>
          ))}
        </div>

        {/* Education */}
        <div style={{ marginBottom: 20 }}>
          <SH icon="🎓" title="Education" />
          {edu.map((e, i) => (
            <TLEntry key={e.id} last={i === edu.length - 1}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: 0 }}>{e.school}</p>
                <span style={{ fontSize: 9, color: '#64748b', fontStyle: 'italic', whiteSpace: 'nowrap', marginLeft: 6, flexShrink: 0 }}>{e.endDate || e.startDate}</span>
              </div>
              <p style={{ color: '#555', fontSize: 9.5, margin: '1px 0 1px' }}>{e.degree}</p>
              {e.gpa && <p style={{ color: '#64748b', fontSize: 9.5, margin: 0 }}>{e.gpa}</p>}
            </TLEntry>
          ))}
        </div>

        {/* Projects */}
        <div>
          <SH icon="🚀" title="Projects" />
          {prj.map((p, i) => (
            <TLEntry key={p.id} last={i === prj.length - 1}>
              <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{p.name}</p>
              {p.tech && <p style={{ color: tc, fontSize: 9, margin: '0 0 2px', fontStyle: 'italic' }}>{p.tech}</p>}
              {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
            </TLEntry>
          ))}
        </div>

      </div>
    </div>
  )
}

// ── DOTFLOW ── Left sidebar: photo+name+contact+interests+languages | Right: timeline dots, icon+large section headers, dates inline right
export function DotFlowTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#1d4ed8' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  const SH = ({ icon, title }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
      <span style={{ fontSize: 14 }}>{icon}</span>
      <h2 style={{ fontSize: 15, fontWeight: 700, color: '#111', margin: 0 }}>{title}</h2>
    </div>
  )

  const LSH = ({ icon, title }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
      <span style={{ fontSize: 12, color: tc }}>{icon}</span>
      <h3 style={{ fontSize: 12, fontWeight: 700, color: '#111', margin: 0 }}>{title}</h3>
    </div>
  )

  const Dot = ({ last }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 18, flexShrink: 0 }}>
      <div style={{ width: 11, height: 11, borderRadius: '50%', border: '1.5px solid #94a3b8', background: 'white', flexShrink: 0, marginTop: 3 }} />
      {!last && <div style={{ width: 1, flex: 1, background: '#e2e8f0', minHeight: 16, marginTop: 2 }} />}
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm', display: 'flex' }}>

      {/* ── LEFT SIDEBAR ── */}
      <div style={{ width: '28%', padding: '20px 12px 40px', borderRight: '1px solid #e5e7eb', flexShrink: 0 }}>
        {photo && <img src={photo} alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', marginBottom: 10 }} />}

        <h1 style={{ fontSize: 13, fontWeight: 900, color: tc, textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 10px', lineHeight: 1.2 }}>{name}</h1>
        {jobTitle && <p style={{ fontSize: 9, color: '#64748b', margin: '0 0 10px', fontStyle: 'italic' }}>{jobTitle}</p>}

        {/* Contact */}
        <div style={{ marginBottom: 14 }}>
          {location && <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4, fontSize: 9.5, color: '#333' }}><MapPin size={10} color={tc} />{location}</div>}
          {phone && <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4, fontSize: 9.5, color: '#333' }}><Phone size={10} color={tc} />{phone}</div>}
          {email && <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 9.5, color: '#333' }}><Mail size={10} color={tc} />{email}</div>}
        </div>

        {/* Interests */}
        <div style={{ marginBottom: 14 }}>
          <LSH icon="💙" title="Interests" />
          {skl.map((s, i) => <p key={s.id || i} style={{ fontSize: 10, color: '#444', margin: '0 0 4px' }}>{s.name}</p>)}
        </div>

        {/* Languages */}
        <div>
          <LSH icon="🌐" title="Languages" />
          {langs.map((l, i) => <p key={l.id || i} style={{ fontSize: 10, color: '#444', margin: '0 0 4px' }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</p>)}
        </div>
      </div>

      {/* ── RIGHT MAIN ── */}
      <div style={{ flex: 1, padding: '20px 18px 40px' }}>

        {summary && <p style={{ color: '#475569', fontSize: 10, lineHeight: 1.8, marginBottom: 16, fontStyle: 'italic', borderLeft: `3px solid ${tc}`, paddingLeft: 10 }}>{summary}</p>}

        {/* Experience */}
        <div style={{ marginBottom: 18 }}>
          <SH icon="💼" title="Experience" />
          {exp.map((e, i) => (
            <div key={e.id} style={{ display: 'flex', gap: 0, marginBottom: i < exp.length - 1 ? 10 : 0 }}>
              <Dot last={i === exp.length - 1} />
              <div style={{ flex: 1, paddingLeft: 8, paddingBottom: i < exp.length - 1 ? 6 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: 0 }}>{e.company}</p>
                  <span style={{ fontSize: 9, color: '#64748b', fontStyle: 'italic', whiteSpace: 'nowrap', marginLeft: 6, flexShrink: 0 }}>{e.startDate}</span>
                </div>
                <p style={{ color: '#555', fontSize: 9.5, margin: '1px 0 2px' }}>{e.role}</p>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <div key={li} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0', flex: 1 }}>{l}</p>
                    {li === 0 && <span style={{ fontSize: 9, color: '#64748b', fontStyle: 'italic', whiteSpace: 'nowrap', marginLeft: 6, flexShrink: 0 }}>{e.current ? 'Present' : e.endDate}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{ marginBottom: 18 }}>
          <SH icon="🎓" title="Education" />
          {edu.map((e, i) => (
            <div key={e.id} style={{ display: 'flex', gap: 0, marginBottom: i < edu.length - 1 ? 10 : 0 }}>
              <Dot last={i === edu.length - 1} />
              <div style={{ flex: 1, paddingLeft: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: 0 }}>{e.school}</p>
                  <span style={{ fontSize: 9, color: '#64748b', fontStyle: 'italic', whiteSpace: 'nowrap', marginLeft: 6, flexShrink: 0 }}>{e.endDate || e.startDate}</span>
                </div>
                <p style={{ color: '#555', fontSize: 9.5, margin: '1px 0 1px' }}>{e.degree}</p>
                {e.gpa && <p style={{ color: '#64748b', fontSize: 9.5, margin: 0 }}>{e.gpa}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div>
          <SH icon="🚀" title="Projects" />
          {prj.map((p, i) => (
            <div key={p.id} style={{ display: 'flex', gap: 0, marginBottom: i < prj.length - 1 ? 10 : 0 }}>
              <Dot last={i === prj.length - 1} />
              <div style={{ flex: 1, paddingLeft: 8 }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{p.name}</p>
                {p.tech && <p style={{ color: tc, fontSize: 9, margin: '0 0 2px', fontStyle: 'italic' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

// ── OCEANCARD ── Sky blue header (circular photo+name left, contact icons right), dark strip, two-col: left interests+languages, right experience+education+projects with pill headers + date|content rows
export function OceanCardTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#0284c7' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  // Pill section header: circle icon + rounded bar
  const PH = ({ icon, title }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 10 }}>
      <div style={{ width: 30, height: 30, borderRadius: '50%', background: tc, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
        <span style={{ fontSize: 14 }}>{icon}</span>
      </div>
      <div style={{ flex: 1, background: tc, padding: '6px 14px 6px 10px', borderRadius: '0 20px 20px 0' }}>
        <h2 style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'white', margin: 0 }}>{title}</h2>
      </div>
    </div>
  )

  // Date | content row for experience/education
  const DRow = ({ date, children, last }) => (
    <div style={{ display: 'flex', gap: 10, marginBottom: last ? 0 : 12, paddingBottom: last ? 0 : 12, borderBottom: last ? 'none' : '1px solid #f0f4f8' }}>
      <div style={{ width: 72, flexShrink: 0, fontSize: 9, color: '#64748b', fontStyle: 'italic', lineHeight: 1.5 }}>{date}</div>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm' }}>

      {/* ── HEADER ── */}
      <div style={{ background: tc, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {photo ? (
            <img src={photo} alt="" style={{ width: 70, height: 70, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.45)', flexShrink: 0 }} />
          ) : (
            <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 900, color: 'white', flexShrink: 0 }}>{name.charAt(0)}</div>
          )}
          <div>
            <h1 style={{ fontSize: 18, fontWeight: 900, color: 'white', textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.2, margin: 0 }}>{name}</h1>
            {jobTitle && <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.75)', margin: '3px 0 0' }}>{jobTitle}</p>}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          {email && <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9.5, color: 'white' }}><div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Mail size={9} color="white" /></div>{email}</div>}
          {phone && <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9.5, color: 'white' }}><div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone size={9} color="white" /></div>{phone}</div>}
          {location && <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9.5, color: 'white' }}><div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MapPin size={9} color="white" /></div>{location}</div>}
        </div>
      </div>

      {/* Dark strip */}
      <div style={{ height: 7, background: '#0c2340' }} />

      {/* ── BODY ── */}
      <div style={{ display: 'flex' }}>

        {/* LEFT — Interests + Languages */}
        <div style={{ width: '32%', padding: '14px 12px 40px', borderRight: '1px solid #e5e7eb', flexShrink: 0 }}>
          {summary && <p style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.75, marginBottom: 14, fontStyle: 'italic' }}>{summary}</p>}

          <div style={{ marginBottom: 16 }}>
            <PH icon="💙" title="Interests" />
            {skl.map((s, i) => <p key={s.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 5px', paddingLeft: 4 }}>{s.name}</p>)}
          </div>

          <div>
            <PH icon="🌐" title="Languages" />
            {langs.map((l, i) => <p key={l.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 5px', paddingLeft: 4 }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</p>)}
          </div>
        </div>

        {/* RIGHT — Experience + Education + Projects */}
        <div style={{ flex: 1, padding: '14px 16px 40px' }}>

          {/* Experience */}
          <div style={{ marginBottom: 16 }}>
            <PH icon="💼" title="Experience" />
            {exp.map((e, i) => (
              <DRow key={e.id} last={i === exp.length - 1} date={<>{e.startDate} -<br />{e.current ? 'Present' : e.endDate}</>}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.company}</p>
                <p style={{ color: '#475569', fontSize: 9.5, margin: '0 0 3px' }}>{e.role}</p>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: '1px 0 0' }}>{l}</p>
                ))}
              </DRow>
            ))}
          </div>

          {/* Education */}
          <div style={{ marginBottom: 16 }}>
            <PH icon="🎓" title="Education" />
            {edu.map((e, i) => (
              <DRow key={e.id} last={i === edu.length - 1} date={e.endDate || e.startDate}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.school}</p>
                <p style={{ color: '#475569', fontSize: 9.5, margin: '0 0 1px' }}>{e.degree}</p>
                {e.gpa && <p style={{ color: '#64748b', fontSize: 9.5, margin: 0 }}>{e.gpa}</p>}
              </DRow>
            ))}
          </div>

          {/* Projects */}
          <div>
            <PH icon="🚀" title="Projects" />
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, paddingBottom: i < prj.length - 1 ? 10 : 0, borderBottom: i < prj.length - 1 ? '1px solid #f0f4f8' : 'none' }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{p.name}</p>
                {p.tech && <p style={{ color: tc, fontSize: 9, margin: '0 0 2px', fontStyle: 'italic' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

// ── NAVYBLOCK ── Full-width navy header bar, left sidebar photo+contact+interests+languages with icon+underline headers, right icon+title+line section headers
export function NavyBlockTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#1e1b8b' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  // Right section header: square icon box + uppercase text + line
  const RSH = ({ icon, title }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <div style={{ width: 24, height: 24, borderRadius: 4, background: tc, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <span style={{ fontSize: 12 }}>{icon}</span>
      </div>
      <h2 style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, margin: 0, whiteSpace: 'nowrap' }}>{title}</h2>
      <div style={{ flex: 1, height: 1.5, background: tc }} />
    </div>
  )

  // Left sidebar section header: icon box + title + underline
  const LSH = ({ icon, title }) => (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 5 }}>
        <div style={{ width: 22, height: 22, borderRadius: 4, background: tc, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontSize: 11 }}>{icon}</span>
        </div>
        <h3 style={{ fontSize: 10.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: tc, margin: 0 }}>{title}</h3>
      </div>
      <div style={{ height: 1.5, background: tc, marginBottom: 8 }} />
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm' }}>

      {/* ── FULL-WIDTH NAVY HEADER ── */}
      <div style={{ background: tc, padding: '14px 22px' }}>
        <h1 style={{ fontSize: 22, fontWeight: 900, color: 'white', textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>{name}</h1>
        {jobTitle && <p style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.75)', margin: '3px 0 0' }}>{jobTitle}</p>}
      </div>

      {/* ── TWO COLUMN BODY ── */}
      <div style={{ display: 'flex' }}>

        {/* LEFT SIDEBAR */}
        <div style={{ width: '32%', padding: '18px 14px 40px', borderRight: '1px solid #e0e0e0', flexShrink: 0 }}>

          {/* Photo */}
          {photo && (
            <img src={photo} alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', marginBottom: 14, border: '1px solid #ddd' }} />
          )}

          {/* Contact */}
          <div style={{ marginBottom: 16, paddingBottom: 14, borderBottom: `1.5px solid ${tc}` }}>
            {email && <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 5, fontSize: 9.5, color: '#222' }}><Mail size={11} color={tc} style={{ flexShrink: 0 }} />{email}</div>}
            {phone && <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 5, fontSize: 9.5, color: '#222' }}><Phone size={11} color={tc} style={{ flexShrink: 0 }} />{phone}</div>}
            {location && <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9.5, color: '#222' }}><MapPin size={11} color={tc} style={{ flexShrink: 0 }} />{location}</div>}
          </div>

          {/* Interests */}
          <div style={{ marginBottom: 16 }}>
            <LSH icon="💙" title="Interests" />
            {skl.map((s, i) => (
              <p key={s.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 6px', paddingBottom: 6, borderBottom: i < skl.length - 1 ? '1px solid #f0f0f0' : 'none' }}>{s.name}</p>
            ))}
          </div>

          {/* Languages */}
          <div>
            <LSH icon="🌐" title="Languages" />
            {langs.map((l, i) => (
              <p key={l.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 6px', paddingBottom: 6, borderBottom: i < langs.length - 1 ? '1px solid #f0f0f0' : 'none' }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</p>
            ))}
          </div>
        </div>

        {/* RIGHT MAIN */}
        <div style={{ flex: 1, padding: '18px 20px 40px' }}>

          {summary && (
            <p style={{ color: '#475569', fontSize: 10, lineHeight: 1.8, marginBottom: 16, fontStyle: 'italic' }}>{summary}</p>
          )}

          {/* Experience */}
          <div style={{ marginBottom: 18 }}>
            <RSH icon="💼" title="Experience" />
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, paddingBottom: i < exp.length - 1 ? 12 : 0, borderBottom: i < exp.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 1 }}>
                  <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: 0 }}>{e.role}</p>
                  <span style={{ fontSize: 9, color: '#555', whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.startDate} - {e.current ? 'Present' : e.endDate}</span>
                </div>
                <p style={{ color: '#475569', fontSize: 9.5, margin: '1px 0 3px' }}>{e.company}{e.location ? ` · ${e.location}` : ''}</p>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{l}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Education */}
          <div style={{ marginBottom: 18 }}>
            <RSH icon="🎓" title="Education" />
            {edu.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < edu.length - 1 ? 10 : 0, paddingBottom: i < edu.length - 1 ? 10 : 0, borderBottom: i < edu.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 1 }}>
                  <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: 0 }}>{e.degree}</p>
                  <span style={{ fontSize: 9, color: '#555', whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.endDate || e.startDate}</span>
                </div>
                <p style={{ color: '#475569', fontSize: 9.5, margin: '1px 0 1px' }}>{e.school}</p>
                {e.gpa && <p style={{ color: '#64748b', fontSize: 9.5, margin: 0 }}>{e.gpa}</p>}
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <RSH icon="🚀" title="Projects" />
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, paddingBottom: i < prj.length - 1 ? 10 : 0, borderBottom: i < prj.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{p.name}</p>
                {p.tech && <p style={{ color: tc, fontSize: 9, margin: '0 0 2px', fontStyle: 'italic' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

// ── RIGHTNAME ── Large navy header: photo left, name+contact right-aligned, two-col body: left=education+projects, right=experience+languages+interests
export function RightNameTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#2d2d9f' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  // Section title — bold uppercase, no decoration
  const ST = ({ title }) => (
    <h2 style={{ fontSize: 10.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111', margin: '0 0 10px' }}>{title}</h2>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm' }}>

      {/* ── HEADER ── */}
      <div style={{ background: tc, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        {/* Photo left */}
        {photo ? (
          <img src={photo} alt="" style={{ width: 90, height: 90, objectFit: 'cover', border: '2px solid rgba(255,255,255,0.3)', flexShrink: 0 }} />
        ) : (
          <div style={{ width: 90, height: 90, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 900, color: 'white', flexShrink: 0 }}>{name.charAt(0)}</div>
        )}

        {/* Name + contact RIGHT aligned */}
        <div style={{ textAlign: 'right' }}>
          <h1 style={{ fontSize: 20, fontWeight: 900, color: 'white', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 10px', lineHeight: 1.1 }}>{name}</h1>
          {jobTitle && <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)', margin: '0 0 8px', fontStyle: 'italic' }}>{jobTitle}</p>}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
            {email && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9.5, color: 'rgba(255,255,255,0.9)' }}>
                {email}<Mail size={11} color="rgba(255,255,255,0.8)" />
              </div>
            )}
            {phone && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9.5, color: 'rgba(255,255,255,0.9)' }}>
                {phone}<Phone size={11} color="rgba(255,255,255,0.8)" />
              </div>
            )}
            {location && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9.5, color: 'rgba(255,255,255,0.9)' }}>
                {location}<MapPin size={11} color="rgba(255,255,255,0.8)" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dark strip */}
      <div style={{ height: 7, background: '#0c0c5a' }} />

      {/* ── TWO COLUMN BODY ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>

        {/* LEFT — Education + Projects */}
        <div style={{ padding: '18px 18px 40px', borderRight: '1px solid #e5e7eb' }}>

          {summary && (
            <p style={{ color: '#475569', fontSize: 10, lineHeight: 1.8, marginBottom: 16, fontStyle: 'italic' }}>{summary}</p>
          )}

          {/* Education */}
          <div style={{ marginBottom: 20 }}>
            <ST title="Education" />
            {edu.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < edu.length - 1 ? 12 : 0, paddingBottom: i < edu.length - 1 ? 12 : 0, borderBottom: i < edu.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.degree}</p>
                <p style={{ fontSize: 9, color: '#94a3b8', margin: '0 0 2px' }}>{e.endDate || e.startDate}</p>
                <p style={{ color: '#444', fontSize: 9.5, margin: '0 0 1px' }}>{e.school}</p>
                {e.gpa && <p style={{ color: '#64748b', fontSize: 9.5, margin: 0 }}>{e.gpa}</p>}
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <ST title="Projects" />
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, paddingBottom: i < prj.length - 1 ? 10 : 0, borderBottom: i < prj.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{p.name}</p>
                {p.tech && <p style={{ color: tc, fontSize: 9, margin: '0 0 2px', fontStyle: 'italic' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Experience + Languages + Interests */}
        <div style={{ padding: '18px 18px 40px' }}>

          {/* Experience */}
          <div style={{ marginBottom: 20 }}>
            <ST title="Experience" />
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, paddingBottom: i < exp.length - 1 ? 12 : 0, borderBottom: i < exp.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.role}</p>
                <p style={{ fontSize: 9, color: '#94a3b8', margin: '0 0 2px' }}>{e.startDate} - {e.current ? 'Present' : e.endDate}</p>
                <p style={{ color: '#444', fontSize: 9.5, margin: '0 0 3px' }}>{e.company}{e.location ? ` · ${e.location}` : ''}</p>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{l}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Languages */}
          <div style={{ marginBottom: 20 }}>
            <ST title="Languages" />
            {langs.map((l, i) => (
              <p key={l.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 6px', paddingBottom: 6, borderBottom: i < langs.length - 1 ? '1px solid #f0f0f0' : 'none' }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</p>
            ))}
          </div>

          {/* Interests / Skills */}
          <div>
            <ST title="Interests" />
            {skl.map((s, i) => (
              <p key={s.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 6px', paddingBottom: 6, borderBottom: i < skl.length - 1 ? '1px solid #f0f0f0' : 'none' }}>{s.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── BLACKBOX ── Black header circular photo+centered name, two-col: left=experience+education+projects, right=contact+interests+languages, black filled rectangle section titles
export function BlackBoxTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#111111' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  // Black filled rectangle section title
  const ST = ({ title }) => (
    <div style={{ background: tc, padding: '5px 12px', marginBottom: 12, display: 'inline-block' }}>
      <h2 style={{ fontSize: 10, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'white', margin: 0 }}>{title}</h2>
    </div>
  )

  // Hollow circle bullet entry
  const Entry = ({ children, last }) => (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: last ? 0 : 12 }}>
      <div style={{ width: 10, height: 10, borderRadius: '50%', border: '1.5px solid #555', background: 'white', flexShrink: 0, marginTop: 3 }} />
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm' }}>

      {/* ── BLACK HEADER ── */}
      <div style={{ background: tc, padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo ? (
          <img src={photo} alt="" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.3)', flexShrink: 0 }} />
        ) : (
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 900, color: 'white', flexShrink: 0 }}>{name.charAt(0)}</div>
        )}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h1 style={{ fontSize: 20, fontWeight: 900, color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>{name}</h1>
          {jobTitle && <p style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.65)', margin: '4px 0 0', fontStyle: 'italic' }}>{jobTitle}</p>}
        </div>
      </div>

      {/* ── TWO COLUMN BODY ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 0 }}>

        {/* LEFT — Experience + Education + Projects */}
        <div style={{ padding: '16px 18px 40px', borderRight: '1px solid #e5e7eb' }}>

          {summary && (
            <p style={{ color: '#475569', fontSize: 10, lineHeight: 1.8, marginBottom: 14, fontStyle: 'italic' }}>{summary}</p>
          )}

          {/* Experience */}
          <div style={{ marginBottom: 18 }}>
            <ST title="Experience" />
            {exp.map((e, i) => (
              <Entry key={e.id} last={i === exp.length - 1}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.company}</p>
                <p style={{ fontSize: 9, color: '#94a3b8', fontStyle: 'italic', margin: '0 0 2px' }}>{e.startDate} - {e.current ? 'Present' : e.endDate}</p>
                <p style={{ color: '#444', fontSize: 9.5, margin: '0 0 3px' }}>{e.role}</p>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{l}</p>
                ))}
              </Entry>
            ))}
          </div>

          {/* Education */}
          <div style={{ marginBottom: 18 }}>
            <ST title="Education" />
            {edu.map((e, i) => (
              <Entry key={e.id} last={i === edu.length - 1}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.school}</p>
                <p style={{ fontSize: 9, color: '#94a3b8', fontStyle: 'italic', margin: '0 0 2px' }}>{e.endDate || e.startDate}</p>
                <p style={{ color: '#444', fontSize: 9.5, margin: '0 0 1px' }}>{e.degree}</p>
                {e.gpa && <p style={{ color: '#64748b', fontSize: 9.5, margin: 0 }}>{e.gpa}</p>}
              </Entry>
            ))}
          </div>

          {/* Projects */}
          <div>
            <ST title="Projects" />
            {prj.map((p, i) => (
              <Entry key={p.id} last={i === prj.length - 1}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{p.name}</p>
                {p.tech && <p style={{ color: '#64748b', fontSize: 9, margin: '0 0 2px', fontStyle: 'italic' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
              </Entry>
            ))}
          </div>
        </div>

        {/* RIGHT — Contact + Interests + Languages */}
        <div style={{ padding: '16px 16px 40px' }}>

          {/* Contact */}
          <div style={{ marginBottom: 18 }}>
            <ST title="Contact" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {email && <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 9.5, color: '#333' }}><Mail size={11} color="#555" style={{ flexShrink: 0 }} />{email}</div>}
              {phone && <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 9.5, color: '#333' }}><Phone size={11} color="#555" style={{ flexShrink: 0 }} />{phone}</div>}
              {location && <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 9.5, color: '#333' }}><MapPin size={11} color="#555" style={{ flexShrink: 0 }} />{location}</div>}
            </div>
          </div>

          {/* Interests / Skills */}
          <div style={{ marginBottom: 18 }}>
            <ST title="Interests" />
            {skl.map((s, i) => (
              <Entry key={s.id || i} last={i === skl.length - 1}>
                <p style={{ fontSize: 10, color: '#333', margin: 0 }}>{s.name}</p>
              </Entry>
            ))}
          </div>

          {/* Languages */}
          <div>
            <ST title="Languages" />
            {langs.map((l, i) => (
              <Entry key={l.id || i} last={i === langs.length - 1}>
                <p style={{ fontSize: 10, color: '#333', margin: 0 }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</p>
              </Entry>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── SPLITCLEAN ── Name top-left, photo top-right, no header bar, left sidebar contact+interests+languages, right experience+education+projects with date|content rows
export function SplitCleanTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#2d2db0' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  // Colored title + underline
  const ST = ({ title }) => (
    <div style={{ marginBottom: 10 }}>
      <h2 style={{ fontSize: 10.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: tc, margin: '0 0 4px' }}>{title}</h2>
      <div style={{ height: 1.5, background: tc }} />
    </div>
  )

  // Date | content row
  const DRow = ({ date, children, last }) => (
    <div style={{ display: 'flex', gap: 12, marginBottom: last ? 0 : 10, paddingBottom: last ? 0 : 10, borderBottom: last ? 'none' : '1px solid #f0f0f0' }}>
      <div style={{ width: 72, flexShrink: 0, fontSize: 9, color: '#94a3b8', fontStyle: 'italic', lineHeight: 1.5 }}>{date}</div>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm', padding: '22px 24px 40px' }}>

      {/* ── HEADER — no bar, just name left + photo right ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 900, color: tc, textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 4px' }}>{name}</h1>
          {jobTitle && <p style={{ fontSize: 10, color: '#64748b', margin: 0, fontStyle: 'italic' }}>{jobTitle}</p>}
        </div>
        {photo && (
          <img src={photo} alt="" style={{ width: 90, height: 90, objectFit: 'cover', border: '1px solid #ddd', flexShrink: 0 }} />
        )}
      </div>

      {/* ── TWO COLUMN BODY ── */}
      <div style={{ display: 'flex', gap: 0 }}>

        {/* LEFT SIDEBAR */}
        <div style={{ width: '30%', paddingRight: 18, borderRight: '1px solid #e5e7eb', flexShrink: 0 }}>

          {/* Contact */}
          <div style={{ marginBottom: 18 }}>
            <ST title="Contact" />
            {email && <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6, fontSize: 9.5, color: '#333' }}><Mail size={10} color={tc} style={{ flexShrink: 0 }} />{email}</div>}
            {phone && <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6, fontSize: 9.5, color: '#333' }}><Phone size={10} color={tc} style={{ flexShrink: 0 }} />{phone}</div>}
            {location && <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9.5, color: '#333' }}><MapPin size={10} color={tc} style={{ flexShrink: 0 }} />{location}</div>}
          </div>

          {/* Interests */}
          <div style={{ marginBottom: 18 }}>
            <ST title="Interests" />
            {skl.map((s, i) => (
              <p key={s.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 5px' }}>{s.name}</p>
            ))}
          </div>

          {/* Languages */}
          <div>
            <ST title="Languages" />
            {langs.map((l, i) => (
              <p key={l.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 5px' }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</p>
            ))}
          </div>
        </div>

        {/* RIGHT MAIN */}
        <div style={{ flex: 1, paddingLeft: 20 }}>

          {summary && (
            <p style={{ color: '#475569', fontSize: 10, lineHeight: 1.8, marginBottom: 16, fontStyle: 'italic' }}>{summary}</p>
          )}

          {/* Experience */}
          <div style={{ marginBottom: 18 }}>
            <ST title="Experience" />
            {exp.map((e, i) => (
              <DRow key={e.id} last={i === exp.length - 1} date={<>{e.startDate}<br />-<br />{e.current ? 'Present' : e.endDate}</>}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.role}</p>
                <p style={{ color: '#475569', fontSize: 9.5, margin: '0 0 3px' }}>{e.company}{e.location ? ` · ${e.location}` : ''}</p>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{l}</p>
                ))}
              </DRow>
            ))}
          </div>

          {/* Education */}
          <div style={{ marginBottom: 18 }}>
            <ST title="Education" />
            {edu.map((e, i) => (
              <DRow key={e.id} last={i === edu.length - 1} date={e.endDate || e.startDate}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.degree}</p>
                <p style={{ color: '#475569', fontSize: 9.5, margin: '0 0 1px' }}>{e.school}</p>
                {e.gpa && <p style={{ color: '#64748b', fontSize: 9.5, margin: 0 }}>{e.gpa}</p>}
              </DRow>
            ))}
          </div>

          {/* Projects */}
          <div>
            <ST title="Projects" />
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, paddingBottom: i < prj.length - 1 ? 10 : 0, borderBottom: i < prj.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{p.name}</p>
                {p.tech && <p style={{ color: tc, fontSize: 9, margin: '0 0 2px', fontStyle: 'italic' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

// ── DARKPANEL ── Full-height dark navy left sidebar (name+photo+contact+languages+interests), right main with thin section titles + date-right entries
export function DarkPanelTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#0f2557' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  // Sidebar section bar: slightly lighter navy bg + white bold text
  const SBar = ({ title }) => (
    <div style={{ background: 'rgba(255,255,255,0.12)', padding: '5px 14px', marginBottom: 8, marginLeft: -14, marginRight: -14 }}>
      <h3 style={{ fontSize: 10, fontWeight: 700, color: 'white', margin: 0, letterSpacing: '0.06em' }}>{title}</h3>
    </div>
  )

  // Right section title: small uppercase grey + thin line
  const RST = ({ title }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
      <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#64748b', margin: 0, whiteSpace: 'nowrap' }}>{title}</h2>
      <div style={{ flex: 1, height: 1, background: '#e2e8f0' }} />
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm', display: 'flex' }}>

      {/* ── DARK NAVY LEFT SIDEBAR ── */}
      <div style={{ width: '30%', background: tc, padding: '20px 14px 40px', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>

        {/* Name */}
        <h1 style={{ fontSize: 14, fontWeight: 900, color: 'white', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 14px', lineHeight: 1.2, textAlign: 'center' }}>{name}</h1>

        {/* Photo */}
        {photo && (
          <img src={photo} alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', marginBottom: 16, border: '2px solid rgba(255,255,255,0.2)' }} />
        )}

        {jobTitle && <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.65)', margin: '0 0 14px', fontStyle: 'italic', textAlign: 'center' }}>{jobTitle}</p>}

        {/* Contact */}
        <div style={{ marginBottom: 14 }}>
          <SBar title="Contact" />
          {email && <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6, fontSize: 9.5, color: 'rgba(255,255,255,0.85)' }}><Mail size={10} color="rgba(255,255,255,0.7)" style={{ flexShrink: 0 }} />{email}</div>}
          {phone && <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6, fontSize: 9.5, color: 'rgba(255,255,255,0.85)' }}><Phone size={10} color="rgba(255,255,255,0.7)" style={{ flexShrink: 0 }} />{phone}</div>}
          {location && <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 9.5, color: 'rgba(255,255,255,0.85)' }}><MapPin size={10} color="rgba(255,255,255,0.7)" style={{ flexShrink: 0 }} />{location}</div>}
        </div>

        {/* Languages */}
        <div style={{ marginBottom: 14 }}>
          <SBar title="Languages" />
          {langs.map((l, i) => (
            <p key={l.id || i} style={{ fontSize: 10, color: 'rgba(255,255,255,0.8)', margin: '0 0 5px' }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</p>
          ))}
        </div>

        {/* Interests */}
        <div>
          <SBar title="Interests" />
          {skl.map((s, i) => (
            <p key={s.id || i} style={{ fontSize: 10, color: 'rgba(255,255,255,0.8)', margin: '0 0 5px' }}>{s.name}</p>
          ))}
        </div>
      </div>

      {/* ── RIGHT MAIN ── */}
      <div style={{ flex: 1, padding: '20px 20px 40px', borderTop: '2px solid #e2e8f0' }}>

        {summary && (
          <p style={{ color: '#475569', fontSize: 10, lineHeight: 1.8, marginBottom: 16, fontStyle: 'italic' }}>{summary}</p>
        )}

        {/* Experience */}
        <div style={{ marginBottom: 18 }}>
          <RST title="Experience" />
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, paddingBottom: i < exp.length - 1 ? 12 : 0, borderBottom: i < exp.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: 0 }}>{e.company}</p>
                <span style={{ fontSize: 9, color: '#64748b', whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.startDate}</span>
              </div>
              <p style={{ color: '#475569', fontSize: 9.5, margin: '1px 0 2px' }}>{e.role}</p>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                <div key={li} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0', flex: 1 }}>{l}</p>
                  {li === 0 && <span style={{ fontSize: 9, color: '#64748b', whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.current ? 'Present' : e.endDate}</span>}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{ marginBottom: 18 }}>
          <RST title="Education" />
          {edu.map((e, i) => (
            <div key={e.id} style={{ marginBottom: i < edu.length - 1 ? 10 : 0, paddingBottom: i < edu.length - 1 ? 10 : 0, borderBottom: i < edu.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: 0 }}>{e.school}</p>
                <span style={{ fontSize: 9, color: '#64748b', whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.endDate || e.startDate}</span>
              </div>
              <p style={{ color: '#475569', fontSize: 9.5, margin: '1px 0 1px' }}>{e.degree}</p>
              {e.gpa && <p style={{ color: '#64748b', fontSize: 9.5, margin: 0 }}>{e.gpa}</p>}
            </div>
          ))}
        </div>

        {/* Projects */}
        <div>
          <RST title="Projects" />
          {prj.map((p, i) => (
            <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, paddingBottom: i < prj.length - 1 ? 10 : 0, borderBottom: i < prj.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
              <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{p.name}</p>
              {p.tech && <p style={{ color: '#64748b', fontSize: 9, margin: '0 0 2px', fontStyle: 'italic' }}>{p.tech}</p>}
              {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

// ── ACCENTBAR ── Name top-right colored, photo top-left, thin top border, left col=colored bar+date, right col=colored section title+content
export function AccentBarTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#00aacc' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  // Section row: left = colored bar + optional date | right = colored title + content
  const SecRow = ({ title, dateContent, children }) => (
    <div style={{ display: 'flex', marginBottom: 16 }}>
      {/* Left col: colored bar + date */}
      <div style={{ width: 130, flexShrink: 0, paddingRight: 16 }}>
        <div style={{ width: 40, height: 3, background: tc, marginBottom: 6 }} />
        {dateContent && <div style={{ fontSize: 9, color: '#64748b', lineHeight: 1.5 }}>{dateContent}</div>}
      </div>
      {/* Right col: title + content */}
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, margin: '0 0 8px' }}>{title}</h2>
        {children}
      </div>
    </div>
  )

  // Entry row within a section (date left, content right)
  const EntryRow = ({ date, children, last }) => (
    <div style={{ display: 'flex', marginBottom: last ? 0 : 10 }}>
      <div style={{ width: 130, flexShrink: 0, paddingRight: 16, fontSize: 9, color: '#64748b', lineHeight: 1.5 }}>{date}</div>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm', padding: '0' }}>

      {/* ── HEADER ── thin top border + photo left + name/contact right */}
      <div style={{ borderTop: `3px solid ${tc}`, padding: '18px 24px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          {/* Photo left */}
          {photo ? (
            <img src={photo} alt="" style={{ width: 90, height: 90, objectFit: 'cover', flexShrink: 0 }} />
          ) : (
            <div style={{ width: 90, height: 90, background: `${tc}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 900, color: tc, flexShrink: 0 }}>{name.charAt(0)}</div>
          )}
          {/* Name + contact right-aligned */}
          <div style={{ textAlign: 'right' }}>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: tc, margin: '0 0 6px', letterSpacing: '0.01em' }}>{name}</h1>
            {jobTitle && <p style={{ fontSize: 10, color: '#64748b', margin: '0 0 4px', fontStyle: 'italic' }}>{jobTitle}</p>}
            <div style={{ fontSize: 10, color: '#475569', lineHeight: 1.7 }}>
              {location && <div>{location}</div>}
              <div>
                {phone && <span>{phone}</span>}
                {phone && email && <span style={{ margin: '0 6px', color: '#94a3b8' }}>|</span>}
                {email && <span>{email}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thin divider */}
      <div style={{ height: 1, background: '#e2e8f0', margin: '0 24px 16px' }} />

      {/* ── BODY ── */}
      <div style={{ padding: '0 24px 40px' }}>

        {summary && (
          <div style={{ display: 'flex', marginBottom: 16 }}>
            <div style={{ width: 130, flexShrink: 0, paddingRight: 16 }}>
              <div style={{ width: 40, height: 3, background: tc }} />
            </div>
            <p style={{ flex: 1, color: '#475569', fontSize: 10, lineHeight: 1.8, margin: 0, fontStyle: 'italic' }}>{summary}</p>
          </div>
        )}

        {/* Experience */}
        <SecRow title="Experience" dateContent={null}>
          {exp.map((e, i) => (
            <EntryRow key={e.id} last={i === exp.length - 1} date={<>{e.startDate} -<br />{e.current ? 'Present' : e.endDate}</>}>
              <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.company}</p>
              <p style={{ color: '#475569', fontSize: 9.5, margin: '0 0 3px' }}>{e.role}</p>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{l}</p>
              ))}
            </EntryRow>
          ))}
        </SecRow>

        {/* Education */}
        <SecRow title="Education" dateContent={null}>
          {edu.map((e, i) => (
            <EntryRow key={e.id} last={i === edu.length - 1} date={e.endDate || e.startDate}>
              <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.school}</p>
              <p style={{ color: '#475569', fontSize: 9.5, margin: '0 0 1px' }}>{e.degree}</p>
              {e.gpa && <p style={{ color: '#64748b', fontSize: 9.5, margin: 0 }}>{e.gpa}</p>}
            </EntryRow>
          ))}
        </SecRow>

        {/* Projects */}
        <SecRow title="Projects" dateContent={null}>
          {prj.map((p, i) => (
            <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}>
              <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{p.name}</p>
              {p.tech && <p style={{ color: tc, fontSize: 9, margin: '0 0 2px', fontStyle: 'italic' }}>{p.tech}</p>}
              {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
            </div>
          ))}
        </SecRow>

        {/* Interests */}
        <SecRow title="Interests" dateContent={null}>
          {skl.map((s, i) => (
            <p key={s.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 4px' }}>{s.name}</p>
          ))}
        </SecRow>

        {/* Languages */}
        <SecRow title="Languages" dateContent={null}>
          {langs.map((l, i) => (
            <p key={l.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 4px' }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</p>
          ))}
        </SecRow>

      </div>
    </div>
  )
}

// ── STRIPEDGE ── Colored left edge strip, name+contact top, single col sections with left-border accent
export function StripEdgeTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#0f766e' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  const SH = ({ title }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
      <div style={{ width: 4, height: 18, background: tc, borderRadius: 2, flexShrink: 0 }} />
      <h2 style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#111', margin: 0 }}>{title}</h2>
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm', display: 'flex' }}>
      {/* Left color strip */}
      <div style={{ width: 8, background: tc, flexShrink: 0 }} />

      <div style={{ flex: 1, padding: '22px 24px 40px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18, paddingBottom: 16, borderBottom: `2px solid ${tc}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {photo && <img src={photo} alt="" style={{ width: 76, height: 76, objectFit: 'cover', border: `2px solid ${tc}30`, flexShrink: 0 }} />}
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 900, color: '#0f172a', margin: '0 0 4px', letterSpacing: '-0.01em' }}>{name}</h1>
              {jobTitle && <p style={{ fontSize: 10.5, color: tc, fontWeight: 600, margin: 0 }}>{jobTitle}</p>}
            </div>
          </div>
          <div style={{ textAlign: 'right', fontSize: 9.5, color: '#475569', lineHeight: 1.8 }}>
            {email && <div style={{ display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'flex-end' }}><Mail size={9} color={tc} />{email}</div>}
            {phone && <div style={{ display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'flex-end' }}><Phone size={9} color={tc} />{phone}</div>}
            {location && <div style={{ display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'flex-end' }}><MapPin size={9} color={tc} />{location}</div>}
          </div>
        </div>

        {summary && <p style={{ color: '#475569', fontSize: 10, lineHeight: 1.85, marginBottom: 18, fontStyle: 'italic', paddingLeft: 14, borderLeft: `3px solid ${tc}30` }}>{summary}</p>}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: 24 }}>
          <div>
            <SH title="Experience" />
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, paddingBottom: i < exp.length - 1 ? 12 : 0, borderBottom: i < exp.length - 1 ? '1px solid #f1f5f9' : 'none', paddingLeft: 12, borderLeft: `2px solid ${tc}20` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <p style={{ fontWeight: 800, fontSize: 11, color: '#0f172a', margin: 0 }}>{e.role}</p>
                  <span style={{ fontSize: 9, color: '#64748b', whiteSpace: 'nowrap', marginLeft: 8 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                </div>
                <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '1px 0 3px' }}>{e.company}</p>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{l}</p>)}
              </div>
            ))}
            <div style={{ marginTop: 18 }}>
              <SH title="Projects" />
              {prj.map((p, i) => (
                <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}>
                  <p style={{ fontWeight: 700, fontSize: 10.5, color: '#0f172a', margin: '0 0 2px' }}>{p.name}</p>
                  {p.tech && <p style={{ color: tc, fontSize: 9, margin: '0 0 2px', fontStyle: 'italic' }}>{p.tech}</p>}
                  {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SH title="Skills" />
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 7 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 9.5, color: '#0f172a', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
                </div>
                <div style={{ height: 4, background: `${tc}15`, borderRadius: 99 }}>
                  <div style={{ height: '100%', background: tc, borderRadius: 99, width: `${s.level}%` }} />
                </div>
              </div>
            ))}
            <div style={{ marginTop: 16 }}>
              <SH title="Education" />
              {edu.map(e => (
                <div key={e.id} style={{ marginBottom: 10, padding: '8px 10px', background: `${tc}08`, borderRadius: 6, border: `1px solid ${tc}20` }}>
                  <p style={{ fontWeight: 700, fontSize: 10, color: '#0f172a', margin: '0 0 1px' }}>{e.degree}</p>
                  <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '0 0 1px' }}>{e.school}</p>
                  <p style={{ color: '#64748b', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16 }}>
              <SH title="Languages" />
              {langs.map((l, i) => <p key={l.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 4px' }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── TOPBAND ── Colored top band header, centered name+contact, full-width single col with icon section headers
export function TopBandTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#7c3aed' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  const SH = ({ title }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, paddingBottom: 6, borderBottom: `2px solid ${tc}` }}>
      <h2 style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, margin: 0 }}>{title}</h2>
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm' }}>
      {/* Top band */}
      <div style={{ background: `linear-gradient(135deg, ${tc} 0%, ${tc}cc 100%)`, padding: '24px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)', margin: '0 auto 12px', display: 'block' }} />}
        <h1 style={{ fontSize: 24, fontWeight: 900, color: 'white', margin: '0 0 4px', letterSpacing: '-0.01em' }}>{name}</h1>
        {jobTitle && <p style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.85)', margin: '0 0 10px', fontWeight: 600 }}>{jobTitle}</p>}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3px 16px', fontSize: 9.5, color: 'rgba(255,255,255,0.8)' }}>
          {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color="rgba(255,255,255,0.9)" />{v}</span>
          ))}
        </div>
      </div>

      <div style={{ padding: '20px 32px 40px', display: 'grid', gridTemplateColumns: '1fr 190px', gap: 24 }}>
        <div>
          {summary && <p style={{ color: '#475569', fontSize: 10.5, lineHeight: 1.85, marginBottom: 18, fontStyle: 'italic' }}>{summary}</p>}
          <SH title="Experience" />
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, paddingBottom: i < exp.length - 1 ? 12 : 0, borderBottom: i < exp.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <p style={{ fontWeight: 800, fontSize: 11, color: '#0f172a', margin: 0 }}>{e.role}</p>
                <span style={{ fontSize: 9, color: '#64748b', whiteSpace: 'nowrap', marginLeft: 8 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
              </div>
              <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '1px 0 3px' }}>{e.company}</p>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{l}</p>)}
            </div>
          ))}
          <div style={{ marginTop: 18 }}>
            <SH title="Projects" />
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0 }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#0f172a', margin: '0 0 2px' }}>{p.name}</p>
                {p.tech && <p style={{ color: tc, fontSize: 9, margin: '0 0 2px', fontStyle: 'italic' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>
        <div>
          <SH title="Skills" />
          {skl.map(s => (
            <div key={s.id} style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <span style={{ fontSize: 9.5, color: '#0f172a', fontWeight: 500 }}>{s.name}</span>
                <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
              </div>
              <div style={{ height: 5, background: `${tc}15`, borderRadius: 99 }}>
                <div style={{ height: '100%', background: `linear-gradient(to right, ${tc}aa, ${tc})`, borderRadius: 99, width: `${s.level}%` }} />
              </div>
            </div>
          ))}
          <div style={{ marginTop: 16 }}>
            <SH title="Education" />
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10 }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#0f172a', margin: '0 0 1px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '0 0 1px' }}>{e.school}</p>
                <p style={{ color: '#64748b', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16 }}>
            <SH title="Languages" />
            {langs.map((l, i) => <p key={l.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 4px' }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</p>)}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── CORNERPHOTO ── Photo top-right corner, name+contact left, colored diagonal accent, two-col body
export function CornerPhotoTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#0369a1' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  const SH = ({ title }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <div style={{ width: 24, height: 3, background: tc, borderRadius: 2 }} />
      <h2 style={{ fontSize: 9.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, margin: 0 }}>{title}</h2>
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '22px 26px 16px', borderBottom: `3px solid ${tc}` }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: '#0f172a', margin: '0 0 4px', letterSpacing: '-0.01em' }}>{name}</h1>
          {jobTitle && <p style={{ fontSize: 11, color: tc, fontWeight: 600, margin: '0 0 10px' }}>{jobTitle}</p>}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9.5, color: '#475569' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}><I size={9} color={tc} />{v}</span>
            ))}
          </div>
        </div>
        {photo && <img src={photo} alt="" style={{ width: 86, height: 86, objectFit: 'cover', border: `3px solid ${tc}30`, flexShrink: 0 }} />}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 190px', gap: 0 }}>
        <div style={{ padding: '18px 20px 40px', borderRight: `1px solid ${tc}15` }}>
          {summary && <p style={{ color: '#475569', fontSize: 10.5, lineHeight: 1.85, marginBottom: 18, fontStyle: 'italic' }}>{summary}</p>}
          <SH title="Experience" />
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, paddingBottom: i < exp.length - 1 ? 12 : 0, borderBottom: i < exp.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <p style={{ fontWeight: 800, fontSize: 11, color: '#0f172a', margin: 0 }}>{e.role}</p>
                <span style={{ fontSize: 9, color: '#64748b', whiteSpace: 'nowrap', marginLeft: 8 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
              </div>
              <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '1px 0 3px' }}>{e.company}</p>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{l}</p>)}
            </div>
          ))}
          <div style={{ marginTop: 18 }}>
            <SH title="Projects" />
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0 }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#0f172a', margin: '0 0 2px' }}>{p.name}</p>
                {p.tech && <p style={{ color: tc, fontSize: 9, margin: '0 0 2px', fontStyle: 'italic' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: '18px 18px 40px', background: `${tc}04` }}>
          <SH title="Skills" />
          {skl.map(s => (
            <div key={s.id} style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <span style={{ fontSize: 9.5, color: '#0f172a', fontWeight: 500 }}>{s.name}</span>
                <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
              </div>
              <div style={{ height: 5, background: `${tc}18`, borderRadius: 99 }}>
                <div style={{ height: '100%', background: tc, borderRadius: 99, width: `${s.level}%` }} />
              </div>
            </div>
          ))}
          <div style={{ marginTop: 16 }}>
            <SH title="Education" />
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10, padding: '8px 10px', background: 'white', borderRadius: 6, border: `1px solid ${tc}20` }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#0f172a', margin: '0 0 1px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '0 0 1px' }}>{e.school}</p>
                <p style={{ color: '#64748b', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16 }}>
            <SH title="Languages" />
            {langs.map((l, i) => <p key={l.id || i} style={{ fontSize: 10, color: '#333', margin: '0 0 4px' }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</p>)}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── LABELROW ── Contact label top-left, name+contact center, photo right, each section: colored label left + line + bullet content right, date in left col
export function LabelRowTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], themeColor = '#2d2db0' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages

  // Section: label left col + horizontal line + content right col
  const Sec = ({ label, children }) => (
    <div style={{ display: 'flex', marginBottom: 16 }}>
      {/* Left label col */}
      <div style={{ width: 110, flexShrink: 0, paddingRight: 12, paddingTop: 1 }}>
        <h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: tc, margin: 0 }}>{label}</h2>
      </div>
      {/* Divider line */}
      <div style={{ width: 1, background: `${tc}40`, flexShrink: 0, margin: '2px 12px 0 0' }} />
      {/* Right content */}
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  )

  // Section header row (label + full line)
  const SecHead = ({ label }) => (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
      <div style={{ width: 110, flexShrink: 0, paddingRight: 12 }}>
        <h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: tc, margin: 0 }}>{label}</h2>
      </div>
      <div style={{ flex: 1, height: 1, background: `${tc}40` }} />
    </div>
  )

  // Entry: date left + bullet+content right
  const Entry = ({ date, children, last }) => (
    <div style={{ display: 'flex', marginBottom: last ? 0 : 10 }}>
      <div style={{ width: 110, flexShrink: 0, paddingRight: 12, fontSize: 9, color: tc, lineHeight: 1.5 }}>{date}</div>
      <div style={{ width: 1, background: `${tc}40`, flexShrink: 0, margin: '2px 12px 0 0' }} />
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}>
          <span style={{ fontSize: 11, color: '#333', flexShrink: 0, lineHeight: 1.2 }}>•</span>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.55, minHeight: '297mm', padding: '22px 26px 40px' }}>

      {/* ── HEADER ── */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
        <div style={{ display: 'flex', gap: 0 }}>
          {/* CONTACT label */}
          <div style={{ width: 110, flexShrink: 0, paddingRight: 12, paddingTop: 4 }}>
            <h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: tc, margin: 0 }}>Contact</h2>
          </div>
          {/* Vertical line */}
          <div style={{ width: 1, background: `${tc}40`, flexShrink: 0, margin: '2px 12px 0 0' }} />
          {/* Name + contact */}
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: '#111', margin: '0 0 8px' }}>{name}</h1>
            {jobTitle && <p style={{ fontSize: 10, color: tc, fontWeight: 600, margin: '0 0 6px' }}>{jobTitle}</p>}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {location && <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9.5, color: '#333' }}><MapPin size={10} color={tc} />{location}</div>}
              {phone && <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9.5, color: '#333' }}><Phone size={10} color={tc} />{phone}</div>}
              {email && <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9.5, color: '#333' }}><Mail size={10} color={tc} />{email}</div>}
            </div>
          </div>
        </div>
        {/* Photo top-right */}
        {photo && <img src={photo} alt="" style={{ width: 90, height: 90, objectFit: 'cover', border: '1px solid #ddd', flexShrink: 0 }} />}
      </div>

      {/* Thin divider */}
      <div style={{ height: 1, background: '#e2e8f0', marginBottom: 16 }} />

      {summary && (
        <div style={{ display: 'flex', marginBottom: 16 }}>
          <div style={{ width: 110, flexShrink: 0 }} />
          <div style={{ width: 1, background: `${tc}40`, flexShrink: 0, margin: '2px 12px 0 0' }} />
          <p style={{ flex: 1, color: '#475569', fontSize: 10, lineHeight: 1.85, margin: 0, fontStyle: 'italic' }}>{summary}</p>
        </div>
      )}

      {/* ── EXPERIENCE ── */}
      <SecHead label="Experience" />
      <div style={{ marginBottom: 16 }}>
        {exp.map((e, i) => (
          <Entry key={e.id} last={i === exp.length - 1} date={<>{e.startDate} -<br />{e.current ? 'Present' : e.endDate}</>}>
            <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.role}</p>
            <p style={{ color: '#475569', fontSize: 9.5, margin: '0 0 3px' }}>{e.company}</p>
            {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
              <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{l}</p>
            ))}
          </Entry>
        ))}
      </div>

      {/* ── EDUCATION ── */}
      <SecHead label="Education" />
      <div style={{ marginBottom: 16 }}>
        {edu.map((e, i) => (
          <Entry key={e.id} last={i === edu.length - 1} date={e.endDate || e.startDate}>
            <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.school}</p>
            <p style={{ color: '#475569', fontSize: 9.5, margin: '0 0 1px' }}>{e.degree}</p>
            {e.gpa && <p style={{ color: '#64748b', fontSize: 9.5, margin: 0 }}>{e.gpa}</p>}
          </Entry>
        ))}
      </div>

      {/* ── PROJECTS ── */}
      <SecHead label="Projects" />
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: 110, flexShrink: 0 }} />
          <div style={{ width: 1, background: `${tc}40`, flexShrink: 0, margin: '2px 12px 0 0' }} />
          <div style={{ flex: 1 }}>
            {prj.map((p, i) => (
              <div key={p.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 5, marginBottom: i < prj.length - 1 ? 6 : 0 }}>
                <span style={{ fontSize: 11, color: '#333', flexShrink: 0, lineHeight: 1.2 }}>•</span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{p.name}</p>
                  {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INTERESTS ── */}
      <SecHead label="Interests" />
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: 110, flexShrink: 0 }} />
          <div style={{ width: 1, background: `${tc}40`, flexShrink: 0, margin: '2px 12px 0 0' }} />
          <div style={{ flex: 1 }}>
            {skl.map((s, i) => (
              <div key={s.id || i} style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
                <span style={{ fontSize: 11, color: '#333', flexShrink: 0 }}>•</span>
                <span style={{ fontSize: 10, color: '#333' }}>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── LANGUAGES ── */}
      <SecHead label="Languages" />
      <div style={{ display: 'flex' }}>
        <div style={{ width: 110, flexShrink: 0 }} />
        <div style={{ width: 1, background: `${tc}40`, flexShrink: 0, margin: '2px 12px 0 0' }} />
        <div style={{ flex: 1 }}>
          {langs.map((l, i) => (
            <div key={l.id || i} style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
              <span style={{ fontSize: 11, color: '#333', flexShrink: 0 }}>•</span>
              <span style={{ fontSize: 10, color: '#333' }}>{l.name}{l.proficiency ? ` — ${l.proficiency}` : ''}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

// ── VELVETROSE ── Elegant soft rose-gold, serif typography, centered luxury header, watermark monogram, refined spacing
export function VelvetRoseTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], certifications = [], themeColor = '#c2847a' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages
  const certs = certifications.length > 0 ? certifications : S.certifications

  // Elegant section heading with ornamental lines
  const SH = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0 14px' }}>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${tc}60)` }} />
      <h2 style={{ fontSize: 9, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: tc, margin: 0, fontFamily: 'Georgia, serif', whiteSpace: 'nowrap' }}>{children}</h2>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to left, transparent, ${tc}60)` }} />
    </div>
  )

  // Monogram from initials
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()

  return (
    <div style={{ background: '#fdfaf8', fontFamily: 'Georgia, serif', fontSize: 10.5, lineHeight: 1.7, minHeight: '297mm', position: 'relative', overflow: 'hidden' }}>

      {/* Watermark monogram */}
      <div style={{ position: 'absolute', top: '38%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: 220, fontWeight: 700, color: `${tc}06`, fontFamily: 'Georgia, serif', pointerEvents: 'none', userSelect: 'none', zIndex: 0, lineHeight: 1 }}>{initials}</div>

      {/* Soft top border */}
      <div style={{ height: 4, background: `linear-gradient(to right, transparent, ${tc}, transparent)` }} />

      {/* ── HEADER ── */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '28px 40px 20px' }}>

        {/* Photo with rose-gold ring */}
        {photo && (
          <div style={{ width: 88, height: 88, margin: '0 auto 16px', position: 'relative', display: 'inline-block' }}>
            <div style={{ width: 88, height: 88, borderRadius: '50%', padding: 3, background: `linear-gradient(135deg, ${tc}, ${tc}60, ${tc}30)` }}>
              <img src={photo} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        )}

        {/* Name */}
        <h1 style={{ fontSize: 28, fontWeight: 400, color: '#2c1810', letterSpacing: '0.12em', margin: '0 0 6px', fontFamily: 'Georgia, serif', textTransform: 'uppercase' }}>{name}</h1>

        {/* Job title with ornamental dots */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: tc }} />
          <p style={{ fontSize: 11, color: tc, fontStyle: 'italic', margin: 0, letterSpacing: '0.06em' }}>{jobTitle}</p>
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: tc }} />
        </div>

        {/* Contact row */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '4px 20px', fontSize: 9.5, color: '#7c5c50' }}>
          {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}><I size={9} color={tc} />{v}</span>
          ))}
        </div>

        {/* Bottom ornament */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 16 }}>
          <div style={{ height: 1, width: 60, background: `${tc}40` }} />
          <div style={{ width: 5, height: 5, transform: 'rotate(45deg)', background: tc, opacity: 0.5 }} />
          <div style={{ width: 8, height: 8, transform: 'rotate(45deg)', border: `1.5px solid ${tc}`, background: 'transparent' }} />
          <div style={{ width: 5, height: 5, transform: 'rotate(45deg)', background: tc, opacity: 0.5 }} />
          <div style={{ height: 1, width: 60, background: `${tc}40` }} />
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ position: 'relative', zIndex: 1, padding: '0 40px 40px' }}>

        {/* Summary */}
        {summary && (
          <p style={{ textAlign: 'center', color: '#5c3d35', lineHeight: 1.9, fontSize: 10.5, fontStyle: 'italic', margin: '0 0 4px', padding: '0 20px' }}>{summary}</p>
        )}

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: 28, marginTop: 4 }}>

          {/* LEFT — Experience + Projects */}
          <div>
            <SH>Professional Experience</SH>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 16 : 0, paddingBottom: i < exp.length - 1 ? 16 : 0, borderBottom: i < exp.length - 1 ? `1px solid ${tc}18` : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 11.5, color: '#2c1810', margin: 0 }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontStyle: 'italic', margin: '2px 0' }}>{e.company}{e.location ? ` · ${e.location}` : ''}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: '#9c7c70', background: `${tc}10`, border: `1px solid ${tc}20`, padding: '2px 10px', borderRadius: 20, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#5c3d35', fontSize: 9.5, lineHeight: 1.75, margin: '2px 0 0' }}>{l}</p>
                ))}
              </div>
            ))}

            <SH>Projects</SH>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 12 : 0, padding: '10px 14px', background: `${tc}06`, borderRadius: 8, border: `1px solid ${tc}15` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <p style={{ fontWeight: 700, fontSize: 11, color: '#2c1810', margin: 0 }}>{p.name}</p>
                  {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none', fontStyle: 'italic' }}>{p.link}</a>}
                </div>
                {p.tech && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 5 }}>
                    {p.tech.split(',').map((t, ti) => (
                      <span key={ti} style={{ fontSize: 8, padding: '1px 8px', borderRadius: 20, background: `${tc}12`, color: tc, border: `1px solid ${tc}25`, fontStyle: 'italic' }}>{t.trim()}</span>
                    ))}
                  </div>
                )}
                {p.description && <p style={{ color: '#5c3d35', fontSize: 9.5, lineHeight: 1.7, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>

          {/* RIGHT — Skills + Education + Languages + Certs */}
          <div>
            <SH>Skills</SH>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 9 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 9.5, color: '#2c1810', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: tc }}>{s.level}%</span>
                </div>
                <div style={{ height: 4, background: `${tc}15`, borderRadius: 99, overflow: 'hidden' }}>
                  <div style={{ height: '100%', background: `linear-gradient(to right, ${tc}80, ${tc})`, borderRadius: 99, width: `${s.level}%` }} />
                </div>
              </div>
            ))}

            <SH>Education</SH>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 12, padding: '9px 12px', background: `${tc}06`, borderRadius: 8, border: `1px solid ${tc}15` }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#2c1810', margin: '0 0 2px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontStyle: 'italic', margin: '0 0 2px' }}>{e.school}</p>
                <p style={{ color: '#9c7c70', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#7c5c50', fontSize: 8.5, margin: '2px 0 0' }}>GPA: {e.gpa}</p>}
              </div>
            ))}

            {langs.length > 0 && (
              <>
                <SH>Languages</SH>
                {langs.map((l, i) => (
                  <div key={l.id || i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5, paddingBottom: 5, borderBottom: i < langs.length - 1 ? `1px solid ${tc}15` : 'none' }}>
                    <span style={{ fontSize: 10, color: '#2c1810' }}>{l.name}</span>
                    <span style={{ fontSize: 9, color: tc, fontStyle: 'italic' }}>{l.proficiency}</span>
                  </div>
                ))}
              </>
            )}

            {certs.length > 0 && (
              <>
                <SH>Certifications</SH>
                {certs.map((c, i) => (
                  <div key={c.id || i} style={{ marginBottom: 8 }}>
                    <p style={{ fontSize: 9.5, color: '#2c1810', fontWeight: 600, margin: '0 0 1px' }}>{c.name}</p>
                    <p style={{ color: '#9c7c70', fontSize: 8.5, margin: 0 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Soft bottom border */}
      <div style={{ height: 4, background: `linear-gradient(to right, transparent, ${tc}, transparent)` }} />
    </div>
  )
}

// ── MANUSCRIPT ── Unique editorial/literary design: rotated name on left spine, pull-quote section headers,
// experience as annotated timeline, skills as weighted tag cloud, soft sage palette
export function ManuscriptTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], languages = [], certifications = [], themeColor = '#5c7a6b' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const langs = languages.length > 0 ? languages : S.languages
  const certs = certifications.length > 0 ? certifications : S.certifications

  // Pull-quote style section header
  const PQ = ({ children, num }) => (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, margin: '18px 0 12px' }}>
      <span style={{ fontSize: 28, fontWeight: 900, color: `${tc}30`, lineHeight: 1, fontFamily: 'Georgia, serif', flexShrink: 0, marginTop: -4 }}>{String(num).padStart(2,'0')}</span>
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.22em', color: tc, margin: '0 0 4px', fontFamily: 'Arial, sans-serif' }}>{children}</h2>
        <div style={{ height: 1.5, background: `linear-gradient(to right, ${tc}, ${tc}20)` }} />
      </div>
    </div>
  )

  // Skill tag with size based on level
  const SkillTag = ({ name: sname, level }) => {
    const size = level >= 90 ? 10.5 : level >= 75 ? 9.5 : 8.5
    const weight = level >= 90 ? 700 : level >= 75 ? 600 : 400
    const bg = level >= 90 ? tc : level >= 75 ? `${tc}70` : `${tc}35`
    return (
      <span style={{ fontSize: size, fontWeight: weight, padding: '3px 10px', borderRadius: 3, background: bg, color: level >= 90 ? 'white' : level >= 75 ? 'white' : '#2d4a3e', display: 'inline-block', margin: '3px 4px 3px 0', letterSpacing: '0.02em', fontFamily: 'Arial, sans-serif' }}>{sname}</span>
    )
  }

  return (
    <div style={{ background: '#f7f9f7', fontFamily: 'Georgia, serif', fontSize: 10.5, lineHeight: 1.65, minHeight: '297mm', display: 'flex' }}>

      {/* ── LEFT SPINE ── colored strip with rotated name */}
      <div style={{ width: 52, background: tc, flexShrink: 0, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0' }}>
        {/* Rotated name */}
        <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: 'white', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'Arial, sans-serif', opacity: 0.9, flex: 1, display: 'flex', alignItems: 'center' }}>
          {name}
        </div>
        {/* Bottom dot ornament */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center' }}>
          {[1, 0.5, 0.25].map((o, i) => <div key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,' + o + ')' }} />)}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* ── HEADER ── */}
        <div style={{ background: 'white', padding: '22px 26px 18px', borderBottom: `3px solid ${tc}`, position: 'relative', overflow: 'hidden' }}>
          {/* Decorative large initial */}
          <div style={{ position: 'absolute', right: photo ? 110 : 20, top: -10, fontSize: 100, fontWeight: 900, color: `${tc}08`, fontFamily: 'Georgia, serif', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>{name.charAt(0)}</div>

          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', position: 'relative' }}>
            <div style={{ flex: 1 }}>
              {/* Job title above name — editorial style */}
              <p style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', color: tc, margin: '0 0 6px', fontFamily: 'Arial, sans-serif' }}>{jobTitle}</p>
              <h1 style={{ fontSize: 32, fontWeight: 400, color: '#1a2e24', letterSpacing: '-0.01em', margin: '0 0 12px', lineHeight: 1.1, fontFamily: 'Georgia, serif' }}>{name}</h1>
              {/* Contact as inline list */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0', fontSize: 9.5, color: '#4a6b5a', fontFamily: 'Arial, sans-serif' }}>
                {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i, arr) => (
                  <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <I size={9} color={tc} />{v}
                    {i < arr.length - 1 && <span style={{ margin: '0 10px', color: `${tc}50` }}>·</span>}
                  </span>
                ))}
              </div>
            </div>
            {photo && (
              <div style={{ width: 80, height: 80, flexShrink: 0, marginLeft: 16 }}>
                <img src={photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(15%) sepia(10%)' }} />
              </div>
            )}
          </div>
        </div>

        {/* ── BODY ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 195px', flex: 1 }}>

          {/* LEFT BODY */}
          <div style={{ padding: '4px 22px 40px', borderRight: `1px solid ${tc}20` }}>

            {/* Summary as editorial intro paragraph */}
            {summary && (
              <div style={{ margin: '14px 0', padding: '12px 16px', borderLeft: `4px solid ${tc}`, background: 'white' }}>
                <p style={{ color: '#2d4a3e', fontSize: 10.5, lineHeight: 1.9, margin: 0, fontStyle: 'italic' }}>{summary}</p>
              </div>
            )}

            {/* Experience */}
            <PQ num={1}>Experience</PQ>
            {exp.map((e, i) => (
              <div key={e.id} style={{ display: 'flex', gap: 14, marginBottom: i < exp.length - 1 ? 16 : 0 }}>
                {/* Year annotation */}
                <div style={{ width: 44, flexShrink: 0, textAlign: 'right', paddingTop: 2 }}>
                  <p style={{ fontSize: 8.5, color: tc, fontFamily: 'Arial, sans-serif', margin: 0, lineHeight: 1.4 }}>{e.startDate?.split('-')[0] || e.startDate}</p>
                  <p style={{ fontSize: 8, color: `${tc}70`, fontFamily: 'Arial, sans-serif', margin: 0 }}>{e.current ? 'now' : e.endDate?.split('-')[0] || e.endDate}</p>
                </div>
                {/* Timeline dot + line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: 9, height: 9, borderRadius: '50%', background: i === 0 ? tc : 'white', border: `2px solid ${tc}`, flexShrink: 0 }} />
                  {i < exp.length - 1 && <div style={{ width: 1, flex: 1, background: `${tc}30`, marginTop: 3 }} />}
                </div>
                {/* Content */}
                <div style={{ flex: 1, paddingBottom: i < exp.length - 1 ? 8 : 0 }}>
                  <p style={{ fontWeight: 700, fontSize: 11.5, color: '#1a2e24', margin: '0 0 1px' }}>{e.role}</p>
                  <p style={{ color: tc, fontSize: 10, fontStyle: 'italic', margin: '0 0 4px', fontFamily: 'Arial, sans-serif' }}>{e.company}{e.location ? ` — ${e.location}` : ''}</p>
                  {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                    <p key={li} style={{ color: '#4a6b5a', fontSize: 9.5, lineHeight: 1.7, margin: '2px 0 0', fontFamily: 'Arial, sans-serif' }}>{l}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Projects */}
            <PQ num={2}>Projects</PQ>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 12 : 0, paddingBottom: i < prj.length - 1 ? 12 : 0, borderBottom: i < prj.length - 1 ? `1px dashed ${tc}25` : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 3 }}>
                  <p style={{ fontWeight: 700, fontSize: 11, color: '#1a2e24', margin: 0 }}>{p.name}</p>
                  {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontStyle: 'italic' }}>{p.link}</a>}
                </div>
                {p.tech && (
                  <p style={{ fontSize: 9, color: tc, fontFamily: 'Arial, sans-serif', margin: '0 0 3px', fontStyle: 'italic' }}>{p.tech}</p>
                )}
                {p.description && <p style={{ color: '#4a6b5a', fontSize: 9.5, lineHeight: 1.7, margin: 0, fontFamily: 'Arial, sans-serif' }}>{p.description}</p>}
              </div>
            ))}
          </div>

          {/* RIGHT BODY */}
          <div style={{ padding: '4px 18px 40px', background: 'white' }}>

            {/* Skills as weighted tag cloud */}
            <PQ num={3}>Skills</PQ>
            <div style={{ lineHeight: 2 }}>
              {skl.map(s => <SkillTag key={s.id} name={s.name} level={s.level || 80} />)}
            </div>

            {/* Education */}
            <PQ num={4}>Education</PQ>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: `1px solid ${tc}15` }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#1a2e24', margin: '0 0 2px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontStyle: 'italic', margin: '0 0 2px', fontFamily: 'Arial, sans-serif' }}>{e.school}</p>
                <p style={{ color: '#7a9b8a', fontSize: 8.5, margin: 0, fontFamily: 'Arial, sans-serif' }}>{e.startDate} — {e.endDate}{e.gpa ? ` · ${e.gpa}` : ''}</p>
              </div>
            ))}

            {/* Languages */}
            {langs.length > 0 && (
              <>
                <PQ num={5}>Languages</PQ>
                {langs.map((l, i) => (
                  <div key={l.id || i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontFamily: 'Arial, sans-serif' }}>
                    <span style={{ fontSize: 10, color: '#1a2e24' }}>{l.name}</span>
                    <span style={{ fontSize: 9, color: tc, fontStyle: 'italic' }}>{l.proficiency}</span>
                  </div>
                ))}
              </>
            )}

            {/* Certifications */}
            {certs.length > 0 && (
              <>
                <PQ num={6}>Certifications</PQ>
                {certs.map((c, i) => (
                  <div key={c.id || i} style={{ marginBottom: 8, fontFamily: 'Arial, sans-serif' }}>
                    <p style={{ fontSize: 9.5, color: '#1a2e24', fontWeight: 600, margin: '0 0 1px' }}>{c.name}</p>
                    <p style={{ color: '#7a9b8a', fontSize: 8.5, margin: 0 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
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
