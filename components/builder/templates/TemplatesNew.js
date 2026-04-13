import { Mail, Phone, MapPin, Globe, Link2, Award, Star, Briefcase, GraduationCap, Code } from 'lucide-react'

const S = {
  name: 'Prachi Mishra', jobTitle: 'Senior Software Engineer',
  email: 'prachi@email.com', phone: '+91 98765 43210', location: 'Mumbai, India',
  website: 'prachidev.com', linkedin: 'linkedin.com/in/prachi',
  summary: 'Senior Software Engineer with 4+ years building scalable full-stack applications. Led teams, reduced latency by 40%, shipped products used by 500K+ users.',
  experience: [
    { id: 's1', role: 'Senior Engineer', company: 'Google India', location: 'Bengaluru', startDate: 'Jan 2022', endDate: '', current: true, description: '• Architected microservices handling 15M+ API requests/day\n• Led Payments 2.0 reducing failures by 35%\n• Mentored 3 junior engineers' },
    { id: 's2', role: 'Software Engineer', company: 'Razorpay', location: 'Bengaluru', startDate: 'Jul 2020', endDate: 'Dec 2021', current: false, description: '• Built merchant dashboard for 200K+ merchants\n• Optimized queries from 800ms to 120ms' },
  ],
  education: [{ id: 'e1', degree: 'B.Tech Computer Science', school: 'IIT Bombay', startDate: '2015', endDate: '2019', gpa: '9.2/10', achievements: "Dean's List" }],
  skills: [
    { id: 'sk1', name: 'JavaScript', level: 95 }, { id: 'sk2', name: 'React', level: 92 },
    { id: 'sk3', name: 'Node.js', level: 90 }, { id: 'sk4', name: 'Python', level: 80 },
    { id: 'sk5', name: 'AWS', level: 78 }, { id: 'sk6', name: 'Docker', level: 75 },
  ],
  projects: [{ id: 'p1', name: 'ResumeAI', tech: 'Next.js, MySQL, OpenAI', link: 'resumeai.vercel.app', description: 'AI resume builder with 50+ templates. 2,000+ users in first month.' }],
  certifications: [{ id: 'c1', name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', date: '2023-04' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}
function g(v, f) { return v && String(v).trim() !== '' ? v : f }

// ── 1: AURORA ── Full-bleed diagonal split header, skills as hexagon dots
export function AuroraTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#6366f1' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email)
  const phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location)
  const summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', position: 'relative', overflow: 'hidden' }}>
      {/* Diagonal background */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 180, background: `linear-gradient(135deg, ${tc} 0%, ${tc}cc 50%, transparent 100%)`, zIndex: 0 }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: '45%', height: 180, background: `${tc}22`, clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)', zIndex: 0 }} />

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 1, padding: '28px 32px 20px', display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo
          ? <img src={photo} alt="" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.6)', flexShrink: 0 }} />
          : <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 900, color: 'white', flexShrink: 0 }}>{name.charAt(0)}</div>
        }
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: 'white', marginBottom: 3, letterSpacing: '-0.01em' }}>{name}</h1>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', fontWeight: 600, marginBottom: 10 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9.5, color: 'rgba(255,255,255,0.8)' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} />{v}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '16px 32px 40px', display: 'grid', gridTemplateColumns: '1fr 220px', gap: 24 }}>
        <div>
          {/* Summary */}
          <div style={{ marginBottom: 18, padding: '12px 16px', background: `${tc}08`, borderRadius: 10, borderLeft: `4px solid ${tc}` }}>
            <p style={{ color: '#444', fontSize: 10.5, lineHeight: 1.8, margin: 0 }}>{summary}</p>
          </div>

          {/* Experience */}
          <SectionHead title="Experience" color={tc} icon="💼" />
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0, paddingLeft: 14, borderLeft: `2px solid ${tc}30` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
                <div>
                  <p style={{ fontWeight: 800, fontSize: 11.5, color: '#111', margin: 0 }}>{e.role}</p>
                  <p style={{ color: tc, fontSize: 10, fontWeight: 700, margin: '2px 0' }}>{e.company}{e.location ? <span style={{ color: '#888', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
                </div>
                <span style={{ fontSize: 9, color: '#777', background: `${tc}12`, padding: '2px 8px', borderRadius: 4, height: 'fit-content' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
              </div>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                <p key={li} style={{ color: '#444', fontSize: 10, lineHeight: 1.65, margin: '3px 0 0' }}>{l}</p>
              ))}
            </div>
          ))}

          {/* Projects */}
          <div style={{ marginTop: 18 }}>
            <SectionHead title="Projects" color={tc} icon="🚀" />
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '10px 12px', background: '#fafafa', borderRadius: 8, border: `1px solid ${tc}18` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <p style={{ fontWeight: 800, fontSize: 11, color: '#111', margin: 0 }}>{p.name}</p>
                  {p.link && <span style={{ fontSize: 8.5, color: tc }}>🔗 {p.link}</span>}
                </div>
                {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8.5, padding: '1px 7px', borderRadius: 3, background: `${tc}15`, color: tc, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
                {p.description && <p style={{ color: '#555', fontSize: 10, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* Skills with dot levels */}
          <div>
            <SectionHead title="Skills" color={tc} icon="⚡" />
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 10, color: '#333', fontWeight: 500 }}>{s.name}</span>
                </div>
                <div style={{ display: 'flex', gap: 3 }}>
                  {[...Array(10)].map((_, i) => (
                    <div key={i} style={{ width: 14, height: 14, borderRadius: '50%', background: i < Math.round((s.level || 80) / 10) ? tc : `${tc}20` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <SectionHead title="Education" color={tc} icon="🎓" />
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10, padding: '10px 12px', background: `${tc}06`, borderRadius: 8 }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '0 0 2px' }}>{e.school}</p>
                <p style={{ color: '#999', fontSize: 9, margin: 0 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#666', fontSize: 9, margin: '2px 0 0' }}>GPA: {e.gpa}</p>}
              </div>
            ))}
          </div>

          {/* Languages */}
          {(languages.length > 0 ? languages : S.languages).map(l => (
            <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 10px', background: `${tc}08`, borderRadius: 6 }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: '#333' }}>{l.name}</span>
              <span style={{ fontSize: 9, color: tc, fontWeight: 600 }}>{l.proficiency}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SectionHead({ title, color, icon }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <span style={{ fontSize: 12 }}>{icon}</span>
      <h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color, margin: 0 }}>{title}</h2>
      <div style={{ flex: 1, height: 1.5, background: `${color}30` }} />
    </div>
  )
}

// ── 2: MAGAZINE ── Editorial magazine style, big name, columns
export function MagazineTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#dc2626' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email)
  const phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location)
  const summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  return (
    <div style={{ background: 'white', fontFamily: "'Georgia', serif", fontSize: 10.5, lineHeight: 1.6, minHeight: '297mm' }}>
      {/* Top bar */}
      <div style={{ height: 6, background: tc }} />

      {/* Masthead */}
      <div style={{ padding: '20px 32px 16px', borderBottom: `2px solid #111` }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20 }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', color: tc, marginBottom: 4 }}>Curriculum Vitae</p>
            <h1 style={{ fontSize: 38, fontWeight: 400, color: '#111', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 6 }}>{name}</h1>
            <p style={{ fontSize: 13, color: '#555', fontStyle: 'italic', fontWeight: 400 }}>{jobTitle}</p>
          </div>
          {photo && <img src={photo} alt="" style={{ width: 90, height: 90, objectFit: 'cover', border: `3px solid ${tc}`, flexShrink: 0 }} />}
        </div>
        <div style={{ display: 'flex', gap: 20, marginTop: 10, fontSize: 9.5, color: '#666', borderTop: '1px solid #eee', paddingTop: 8 }}>
          {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
        </div>
      </div>

      {/* 3-column body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 180px', gap: 0 }}>
        {/* Col 1 */}
        <div style={{ padding: '18px 20px 40px 32px', borderRight: '1px solid #e5e7eb' }}>
          <p style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 8 }}>Profile</p>
          <p style={{ color: '#444', lineHeight: 1.85, fontSize: 10.5, marginBottom: 18, fontStyle: 'italic' }}>{summary}</p>

          <p style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 10 }}>Experience</p>
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}>
              <p style={{ fontWeight: 700, fontSize: 11.5, color: '#111', margin: '0 0 1px' }}>{e.role}</p>
              <p style={{ color: tc, fontSize: 10, fontStyle: 'italic', margin: '0 0 2px' }}>{e.company} · {e.startDate} — {e.current ? 'Present' : e.endDate}</p>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                <p key={li} style={{ color: '#555', fontSize: 10, lineHeight: 1.65, margin: '2px 0 0' }}>{l}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Col 2 */}
        <div style={{ padding: '18px 20px 40px', borderRight: '1px solid #e5e7eb' }}>
          <p style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 10 }}>Projects</p>
          {prj.map((p, i) => (
            <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 12 : 0 }}>
              <p style={{ fontWeight: 700, fontSize: 11, color: '#111', margin: '0 0 2px' }}>{p.name}</p>
              {p.tech && <p style={{ color: '#888', fontSize: 9, fontStyle: 'italic', margin: '0 0 3px' }}>{p.tech}</p>}
              {p.description && <p style={{ color: '#555', fontSize: 10, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
            </div>
          ))}

          <p style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 10, marginTop: 18 }}>Education</p>
          {edu.map(e => (
            <div key={e.id} style={{ marginBottom: 10 }}>
              <p style={{ fontWeight: 700, fontSize: 11, color: '#111', margin: '0 0 1px' }}>{e.degree}</p>
              <p style={{ color: '#666', fontSize: 10, fontStyle: 'italic', margin: 0 }}>{e.school} · {e.startDate}–{e.endDate}</p>
              {e.gpa && <p style={{ color: '#999', fontSize: 9, margin: '2px 0 0' }}>GPA: {e.gpa}</p>}
            </div>
          ))}
        </div>

        {/* Col 3 sidebar */}
        <div style={{ padding: '18px 16px 40px', background: '#fafafa' }}>
          <p style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 10 }}>Skills</p>
          {skl.map(s => (
            <div key={s.id} style={{ marginBottom: 8 }}>
              <p style={{ fontSize: 10, color: '#333', margin: '0 0 3px', fontWeight: 600 }}>{s.name}</p>
              <div style={{ height: 3, background: '#e5e7eb', borderRadius: 2 }}>
                <div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level || 80}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── 3: CIRCUIT ── Soft sky blue, clean dot-grid, modern card layout
export function CircuitTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#0ea5e9' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email)
  const phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location)
  const summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  const dotBg = `radial-gradient(circle, ${tc}18 1px, transparent 1px)`

  const SH = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: tc, flexShrink: 0 }} />
      <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc }}>{children}</h2>
      <div style={{ flex: 1, height: 1, background: `${tc}30` }} />
    </div>
  )

  return (
    <div style={{ background: '#f0f9ff', backgroundImage: dotBg, backgroundSize: '20px 20px', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>

      {/* Header */}
      <div style={{ background: 'white', padding: '26px 32px 20px', borderBottom: `2px solid ${tc}30`, display: 'flex', alignItems: 'center', gap: 20, boxShadow: `0 2px 12px ${tc}10` }}>
        {photo
          ? <img src={photo} alt="" style={{ width: 76, height: 76, borderRadius: 10, objectFit: 'cover', border: `2px solid ${tc}40`, flexShrink: 0 }} />
          : <div style={{ width: 76, height: 76, borderRadius: 10, background: `${tc}15`, border: `2px solid ${tc}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 900, color: tc, flexShrink: 0 }}>{name.charAt(0)}</div>
        }
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: '#0c4a6e', margin: '0 0 4px', letterSpacing: '-0.01em' }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontWeight: 700, margin: '0 0 10px', letterSpacing: '0.04em' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9.5, color: '#0369a1' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '18px 32px 40px', display: 'grid', gridTemplateColumns: '1fr 190px', gap: 20 }}>
        <div>
          {/* Summary */}
          <div style={{ marginBottom: 18, padding: '12px 16px', background: 'white', border: `1px solid ${tc}25`, borderRadius: 10, borderLeft: `4px solid ${tc}`, boxShadow: `0 1px 6px ${tc}08` }}>
            <p style={{ color: '#0c4a6e', fontSize: 10.5, lineHeight: 1.85 }}>{summary}</p>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: 18 }}>
            <SH>Experience</SH>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, padding: '10px 14px', background: 'white', border: `1px solid ${tc}20`, borderRadius: 10, boxShadow: `0 1px 6px ${tc}06` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 11.5, color: '#0c4a6e', margin: 0 }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '2px 0' }}>{e.company}{e.location ? <span style={{ color: '#7dd3fc', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: tc, background: `${tc}12`, border: `1px solid ${tc}25`, padding: '2px 9px', borderRadius: 20, whiteSpace: 'nowrap' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#0369a1', fontSize: 9.5, lineHeight: 1.65, margin: '3px 0 0' }}>{l}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Projects */}
          <SH>Projects</SH>
          {prj.map((p, i) => (
            <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '10px 14px', background: 'white', border: `1px solid ${tc}20`, borderRadius: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <p style={{ fontWeight: 700, fontSize: 11, color: '#0c4a6e', margin: 0 }}>{p.name}</p>
                {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none' }}>🔗 {p.link}</a>}
              </div>
              {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8.5, padding: '1px 7px', borderRadius: 3, background: `${tc}12`, color: tc, border: `1px solid ${tc}25`, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
              {p.description && <p style={{ color: '#0369a1', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div>
          <SH>Skills</SH>
          {skl.map(s => (
            <div key={s.id} style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                <span style={{ fontSize: 9.5, color: '#0c4a6e', fontWeight: 500 }}>{s.name}</span>
                <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
              </div>
              <div style={{ height: 5, background: `${tc}18`, borderRadius: 99 }}>
                <div style={{ height: '100%', borderRadius: 99, width: `${s.level || 80}%`, background: `linear-gradient(to right, ${tc}, ${tc}88)` }} />
              </div>
            </div>
          ))}

          <div style={{ marginTop: 18 }}>
            <SH>Education</SH>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10, padding: '8px 10px', background: 'white', border: `1px solid ${tc}20`, borderRadius: 8 }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#0c4a6e', margin: '0 0 2px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600 }}>{e.school}</p>
                <p style={{ color: '#7dd3fc', fontSize: 8.5 }}>{e.startDate}–{e.endDate}</p>
                {e.gpa && <p style={{ color: '#0369a1', fontSize: 8.5 }}>GPA: {e.gpa}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 4: CANVAS ── Painterly watercolor blobs, artistic layout
export function CanvasTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#7c3aed' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email)
  const phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location)
  const summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  return (
    <div style={{ background: '#fffef9', fontFamily: "'Georgia', serif", fontSize: 10.5, lineHeight: 1.6, minHeight: '297mm', position: 'relative', overflow: 'hidden' }}>
      {/* Blob decorations */}
      <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%', background: `${tc}18`, zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: 60, left: -30, width: 150, height: 150, borderRadius: '40% 60% 30% 70% / 60% 40% 60% 40%', background: `${tc}10`, zIndex: 0 }} />

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 1, padding: '32px 36px 24px', display: 'flex', alignItems: 'center', gap: 24 }}>
        {photo
          ? <img src={photo} alt="" style={{ width: 88, height: 88, borderRadius: '60% 40% 60% 40%', objectFit: 'cover', border: `3px solid ${tc}40`, flexShrink: 0 }} />
          : <div style={{ width: 88, height: 88, borderRadius: '60% 40% 60% 40%', background: `${tc}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, color: tc, fontWeight: 900, flexShrink: 0 }}>{name.charAt(0)}</div>
        }
        <div>
          <h1 style={{ fontSize: 30, fontWeight: 400, color: '#1a1a1a', letterSpacing: '-0.01em', marginBottom: 4 }}>{name}</h1>
          <p style={{ fontSize: 12, color: tc, fontStyle: 'italic', marginBottom: 10 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9.5, color: '#888' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ margin: '0 36px', height: 2, background: `linear-gradient(to right, ${tc}, ${tc}40, transparent)` }} />

      <div style={{ position: 'relative', zIndex: 1, padding: '20px 36px 40px', display: 'grid', gridTemplateColumns: '1fr 200px', gap: 28 }}>
        <div>
          <p style={{ color: '#666', lineHeight: 1.9, marginBottom: 20, fontStyle: 'italic', fontSize: 11 }}>{summary}</p>

          <BlobSection title="Experience" color={tc}>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 12, color: '#1a1a1a', margin: 0 }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontStyle: 'italic', margin: '2px 0' }}>{e.company}</p>
                  </div>
                  <span style={{ fontSize: 9, color: '#aaa', fontStyle: 'italic' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#555', fontSize: 10, lineHeight: 1.7, margin: '3px 0 0' }}>{l}</p>
                ))}
              </div>
            ))}
          </BlobSection>

          <BlobSection title="Projects" color={tc}>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0 }}>
                <p style={{ fontWeight: 700, fontSize: 11.5, color: '#1a1a1a', margin: '0 0 2px' }}>{p.name}</p>
                {p.tech && <p style={{ color: '#aaa', fontSize: 9, fontStyle: 'italic', margin: '0 0 3px' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#555', fontSize: 10, lineHeight: 1.7, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </BlobSection>
        </div>

        <div>
          <BlobSection title="Skills" color={tc}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {skl.map(s => (
                <span key={s.id} style={{ fontSize: 9.5, padding: '4px 12px', borderRadius: '40% 60% 40% 60% / 50% 40% 60% 50%', background: `${tc}15`, color: tc, fontWeight: 600, border: `1px solid ${tc}30` }}>{s.name}</span>
              ))}
            </div>
          </BlobSection>

          <BlobSection title="Education" color={tc}>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10 }}>
                <p style={{ fontWeight: 700, fontSize: 11, color: '#1a1a1a', margin: '0 0 2px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 10, fontStyle: 'italic', margin: '0 0 2px' }}>{e.school}</p>
                <p style={{ color: '#aaa', fontSize: 9 }}>{e.startDate} — {e.endDate}</p>
              </div>
            ))}
          </BlobSection>
        </div>
      </div>
    </div>
  )
}

function BlobSection({ title, color, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <div style={{ width: 8, height: 8, borderRadius: '60% 40% 60% 40%', background: color }} />
        <h2 style={{ fontSize: 9.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color, margin: 0 }}>{title}</h2>
        <div style={{ flex: 1, height: 1, background: `${color}25` }} />
      </div>
      {children}
    </div>
  )
}

// ── 5: METRO ── Bold metro/subway card style, big colored blocks
export function MetroTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#0ea5e9' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email)
  const phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location)
  const summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  return (
    <div style={{ background: '#f8fafc', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      {/* Header block */}
      <div style={{ background: tc, padding: '0' }}>
        <div style={{ display: 'flex', alignItems: 'stretch' }}>
          <div style={{ background: 'rgba(0,0,0,0.2)', width: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 16px', flexShrink: 0 }}>
            {photo
              ? <img src={photo} alt="" style={{ width: 80, height: 80, borderRadius: 4, objectFit: 'cover', border: '2px solid rgba(255,255,255,0.4)' }} />
              : <div style={{ width: 80, height: 80, borderRadius: 4, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 900, color: 'white' }}>{name.charAt(0)}</div>
            }
          </div>
          <div style={{ flex: 1, padding: '24px 28px' }}>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: 'white', margin: '0 0 4px', letterSpacing: '-0.01em' }}>{name}</h1>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', fontWeight: 600, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 20px' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 9.5, color: 'rgba(255,255,255,0.85)', background: 'rgba(0,0,0,0.15)', padding: '3px 10px', borderRadius: 2 }}>
                  <I size={9} />{v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Metro tiles grid */}
      <div style={{ padding: '16px 20px 40px' }}>
        {/* Summary tile */}
        <div style={{ background: 'white', padding: '14px 18px', marginBottom: 12, borderLeft: `5px solid ${tc}`, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <p style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: tc, margin: '0 0 6px' }}>About</p>
          <p style={{ color: '#444', lineHeight: 1.8, margin: 0 }}>{summary}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
          {/* Experience tile */}
          <div style={{ background: 'white', padding: '14px 18px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <p style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: tc, margin: '0 0 10px' }}>Experience</p>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, paddingBottom: i < exp.length - 1 ? 12 : 0, borderBottom: i < exp.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                <p style={{ fontWeight: 800, fontSize: 11, color: '#111', margin: '0 0 1px' }}>{e.role}</p>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '0 0 2px' }}>{e.company}</p>
                <p style={{ color: '#aaa', fontSize: 8.5, margin: '0 0 4px' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: '2px 0 0' }}>{l}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Skills + Education tile */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: tc, padding: '14px 18px', flex: 1 }}>
              <p style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)', margin: '0 0 10px' }}>Skills</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {skl.map(s => (
                  <span key={s.id} style={{ fontSize: 9.5, padding: '3px 10px', background: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 600 }}>{s.name}</span>
                ))}
              </div>
            </div>
            <div style={{ background: 'white', padding: '14px 18px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <p style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: tc, margin: '0 0 10px' }}>Education</p>
              {edu.map(e => (
                <div key={e.id}>
                  <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.degree}</p>
                  <p style={{ color: '#666', fontSize: 9.5, margin: 0 }}>{e.school} · {e.startDate}–{e.endDate}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects tile */}
        <div style={{ background: 'white', padding: '14px 18px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <p style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: tc, margin: '0 0 10px' }}>Projects</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
            {prj.map(p => (
              <div key={p.id} style={{ padding: '10px 12px', background: `${tc}06`, borderTop: `3px solid ${tc}`, borderRadius: '0 0 4px 4px' }}>
                <p style={{ fontWeight: 700, fontSize: 11, color: '#111', margin: '0 0 3px' }}>{p.name}</p>
                {p.tech && <p style={{ color: '#888', fontSize: 8.5, margin: '0 0 4px' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 6: ORIGAMI ── Folded paper effect, geometric shapes
export function FoldTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#059669' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email)
  const phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location)
  const summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      {/* Folded header */}
      <div style={{ position: 'relative', background: tc, padding: '28px 32px 40px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 0, height: 0, borderStyle: 'solid', borderWidth: '0 0 40px 794px', borderColor: `transparent transparent white transparent` }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, position: 'relative', zIndex: 1 }}>
          {photo
            ? <img src={photo} alt="" style={{ width: 80, height: 80, borderRadius: 4, objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)', flexShrink: 0 }} />
            : <div style={{ width: 80, height: 80, borderRadius: 4, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 900, color: 'white', flexShrink: 0 }}>{name.charAt(0)}</div>
          }
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: 'white', margin: '0 0 4px' }}>{name}</h1>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', fontWeight: 600, margin: '0 0 10px' }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9.5, color: 'rgba(255,255,255,0.8)' }}>
              {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '24px 32px 40px', display: 'grid', gridTemplateColumns: '1fr 210px', gap: 24 }}>
        <div>
          <p style={{ color: '#444', lineHeight: 1.8, marginBottom: 18, padding: '12px 16px', background: `${tc}08`, borderRadius: 6 }}>{summary}</p>

          {/* Experience with fold tabs */}
          <div style={{ marginBottom: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 12 }}>
              <div style={{ background: tc, color: 'white', fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '4px 14px', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%)' }}>Experience</div>
            </div>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, paddingLeft: 12, borderLeft: `3px solid ${tc}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 11.5, color: '#111', margin: 0 }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '2px 0' }}>{e.company}</p>
                  </div>
                  <span style={{ fontSize: 9, color: '#777', background: '#f8fafc', padding: '2px 8px', borderRadius: 3 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#444', fontSize: 10, lineHeight: 1.65, margin: '3px 0 0' }}>{l}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 12 }}>
              <div style={{ background: tc, color: 'white', fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '4px 14px', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%)' }}>Projects</div>
            </div>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '10px 12px', background: `${tc}06`, border: `1px solid ${tc}18`, borderRadius: 4 }}>
                <p style={{ fontWeight: 700, fontSize: 11, color: '#111', margin: '0 0 3px' }}>{p.name}</p>
                {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8.5, padding: '1px 7px', borderRadius: 3, background: `${tc}15`, color: tc, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
                {p.description && <p style={{ color: '#555', fontSize: 10, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <div style={{ background: tc, color: 'white', fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '4px 14px', marginBottom: 10, clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%)' }}>Skills</div>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 10, color: '#333' }}>{s.name}</span>
                  <span style={{ fontSize: 8.5, color: '#999' }}>{s.level}%</span>
                </div>
                <div style={{ height: 4, background: '#f1f5f9', borderRadius: 2 }}>
                  <div style={{ height: 4, background: tc, borderRadius: 2, width: `${s.level || 80}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div>
            <div style={{ background: tc, color: 'white', fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '4px 14px', marginBottom: 10, clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%)' }}>Education</div>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10 }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '0 0 2px' }}>{e.school}</p>
                <p style={{ color: '#999', fontSize: 9, margin: 0 }}>{e.startDate} — {e.endDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


// ── 7: CLASSICTABLE ── Name top-left, photo top-right, colored section bars, date|detail two-column rows
export function ClassicTableTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#0ea5e9' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email)
  const phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location)
  const summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  // Colored full-width section header bar
  const SecBar = ({ title }) => (
    <div style={{ background: tc, padding: '5px 12px', marginBottom: 0 }}>
      <h2 style={{ fontSize: 10, fontWeight: 700, color: 'white', textTransform: 'uppercase', letterSpacing: '0.12em', margin: 0 }}>{title}</h2>
    </div>
  )

  // Two-column row: date left, content right
  const Row = ({ date, children, last }) => (
    <div style={{ display: 'flex', borderBottom: last ? 'none' : '1px solid #e5e7eb' }}>
      <div style={{ width: 90, flexShrink: 0, padding: '8px 10px 8px 12px', fontSize: 9, color: '#555', lineHeight: 1.5, borderRight: `2px solid ${tc}30` }}>
        {date}
      </div>
      <div style={{ flex: 1, padding: '8px 12px', fontSize: 10, color: '#222', lineHeight: 1.6 }}>
        {children}
      </div>
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>

      {/* ── HEADER ── */}
      <div style={{ padding: '22px 24px 16px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', borderBottom: `3px solid ${tc}` }}>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: tc, letterSpacing: '0.02em', margin: '0 0 8px', textTransform: 'uppercase' }}>{name}</h1>
          {jobTitle && <p style={{ fontSize: 11, color: '#444', fontWeight: 600, margin: '0 0 10px' }}>{jobTitle}</p>}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {email && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9.5, color: '#333' }}>
                <Mail size={10} color={tc} />{email}
              </span>
            )}
            {phone && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9.5, color: '#333' }}>
                <Phone size={10} color={tc} />{phone}
              </span>
            )}
            {location && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9.5, color: '#333' }}>
                <MapPin size={10} color={tc} />{location}
              </span>
            )}
          </div>
        </div>
        {photo && (
          <img src={photo} alt="" style={{ width: 90, height: 90, objectFit: 'cover', border: `2px solid ${tc}40`, flexShrink: 0 }} />
        )}
      </div>

      {/* ── SUMMARY ── */}
      {summary && (
        <div style={{ padding: '10px 24px', background: `${tc}08`, borderBottom: `1px solid ${tc}20` }}>
          <p style={{ color: '#444', lineHeight: 1.8, margin: 0, fontSize: 10 }}>{summary}</p>
        </div>
      )}

      {/* ── EXPERIENCE ── */}
      <div style={{ marginTop: 14, marginBottom: 14 }}>
        <SecBar title="Experience" />
        <div style={{ border: `1px solid #e5e7eb`, borderTop: 'none' }}>
          {exp.map((e, i) => (
            <Row
              key={e.id}
              last={i === exp.length - 1}
              date={<>{e.startDate}<br />—<br />{e.current ? 'Present' : e.endDate}</>}
            >
              <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.company}</p>
              <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '0 0 3px' }}>{e.role}</p>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{l}</p>
              ))}
            </Row>
          ))}
        </div>
      </div>

      {/* ── EDUCATION ── */}
      <div style={{ marginBottom: 14 }}>
        <SecBar title="Education" />
        <div style={{ border: `1px solid #e5e7eb`, borderTop: 'none' }}>
          {edu.map((e, i) => (
            <Row key={e.id} last={i === edu.length - 1} date={<>{e.startDate}{e.endDate ? <><br />—<br />{e.endDate}</> : ''}</>}>
              <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.school}</p>
              <p style={{ color: '#444', fontSize: 9.5, margin: '0 0 1px' }}>{e.degree}</p>
              {e.gpa && <p style={{ color: '#666', fontSize: 9 }}>{e.gpa}</p>}
            </Row>
          ))}
        </div>
      </div>

      {/* ── PROJECTS ── */}
      <div style={{ marginBottom: 14 }}>
        <SecBar title="Projects" />
        <div style={{ border: `1px solid #e5e7eb`, borderTop: 'none', padding: '8px 12px' }}>
          {prj.map((p, i) => (
            <div key={p.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: i < prj.length - 1 ? 6 : 0 }}>
              <span style={{ color: tc, fontSize: 10, marginTop: 1, flexShrink: 0 }}>•</span>
              <div>
                <span style={{ fontWeight: 700, fontSize: 10, color: '#111' }}>{p.name}</span>
                {p.tech && <span style={{ color: '#888', fontSize: 9, marginLeft: 6 }}>({p.tech})</span>}
                {p.description && <p style={{ color: '#444', fontSize: 9.5, lineHeight: 1.65, margin: '1px 0 0' }}>{p.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SKILLS ── */}
      <div style={{ marginBottom: 14 }}>
        <SecBar title="Skills" />
        <div style={{ border: `1px solid #e5e7eb`, borderTop: 'none', padding: '10px 12px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 10px' }}>
            {skl.map(s => (
              <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 6, minWidth: 160 }}>
                <span style={{ fontSize: 9.5, color: '#333', width: 100, flexShrink: 0 }}>{s.name}</span>
                <div style={{ flex: 1, height: 5, background: '#e5e7eb', borderRadius: 3 }}>
                  <div style={{ height: '100%', background: tc, borderRadius: 3, width: `${s.level || 80}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
