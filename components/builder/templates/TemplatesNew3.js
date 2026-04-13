'use client'
import { Mail, Phone, MapPin } from 'lucide-react'

const S = {
  name: 'Prachi Mishra', jobTitle: 'Senior Software Engineer',
  email: 'prachi@email.com', phone: '+91 98765 43210', location: 'Mumbai, India',
  summary: 'Senior Software Engineer with 4+ years building scalable applications. Led teams, reduced latency by 40%, shipped products used by 500K+ users.',
  experience: [
    { id: 's1', role: 'Senior Engineer', company: 'Google India', location: 'Bengaluru', startDate: 'Jan 2022', endDate: '', current: true, description: '• Architected microservices handling 15M+ API requests/day\n• Led Payments 2.0 reducing failures by 35%' },
    { id: 's2', role: 'Software Engineer', company: 'Razorpay', location: 'Bengaluru', startDate: 'Jul 2020', endDate: 'Dec 2021', current: false, description: '• Built merchant dashboard for 200K+ merchants\n• Optimized queries from 800ms to 120ms' },
  ],
  education: [{ id: 'e1', degree: 'B.Tech Computer Science', school: 'IIT Bombay', startDate: '2015', endDate: '2019', gpa: '9.2/10' }],
  skills: [{ id: 'sk1', name: 'JavaScript', level: 95 }, { id: 'sk2', name: 'React', level: 92 }, { id: 'sk3', name: 'Node.js', level: 90 }, { id: 'sk4', name: 'Python', level: 80 }, { id: 'sk5', name: 'AWS', level: 78 }, { id: 'sk6', name: 'Docker', level: 75 }],
  projects: [{ id: 'p1', name: 'ResumeAI', tech: 'Next.js, MySQL, OpenAI', link: 'resumeai.vercel.app', description: 'AI resume builder with 50+ templates. 2,000+ users in first month.' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}
function g(v, f) { return v && String(v).trim() !== '' ? v : f }
function Sec({ title, color }) {
  return <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}><h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color, margin: 0, whiteSpace: 'nowrap' }}>{title}</h2><div style={{ flex: 1, height: 1.5, background: color + '35' }} /></div>
}

// ── RIBBON ── Left colored ribbon, floating white cards on gray bg
export function RibbonTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#e11d48' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const card = { background: 'white', borderRadius: 10, padding: '14px 16px', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }
  return (
    <div style={{ background: '#f3f4f6', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', display: 'flex' }}>
      <div style={{ width: 7, background: 'linear-gradient(to bottom,' + tc + ',' + tc + '80)', flexShrink: 0 }} />
      <div style={{ flex: 1, padding: '24px 20px 40px 18px' }}>
        <div style={{ ...card, display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
          {photo ? <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: 8, objectFit: 'cover', border: '2px solid ' + tc + '30', flexShrink: 0 }} /> : <div style={{ width: 72, height: 72, borderRadius: 8, background: tc + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 900, color: tc, flexShrink: 0 }}>{name.charAt(0)}</div>}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 24, fontWeight: 900, color: '#111', margin: '0 0 2px' }}>{name}</h1>
            <p style={{ fontSize: 11, color: tc, fontWeight: 700, margin: '0 0 8px' }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#666' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 3 }}><I size={9} color={tc} />{v}</span>)}
            </div>
          </div>
        </div>
        <div style={{ ...card, marginBottom: 12, borderLeft: '4px solid ' + tc }}><p style={{ color: '#444', lineHeight: 1.8, margin: 0 }}>{summary}</p></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 190px', gap: 12 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={card}>
              <Sec title="Experience" color={tc} />
              {exp.map((e, i) => (
                <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 10 : 0, paddingBottom: i < exp.length - 1 ? 10 : 0, borderBottom: i < exp.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
                    <div><p style={{ fontWeight: 800, fontSize: 11, color: '#111', margin: 0 }}>{e.role}</p><p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '1px 0' }}>{e.company}</p></div>
                    <span style={{ fontSize: 8.5, color: '#999', background: '#f9fafb', padding: '2px 7px', borderRadius: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                  </div>
                  {e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: '2px 0 0' }}>{l}</p>)}
                </div>
              ))}
            </div>
            <div style={card}>
              <Sec title="Projects" color={tc} />
              {prj.map((p, i) => (
                <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0, padding: '8px 10px', background: tc + '06', borderRadius: 6, border: '1px solid ' + tc + '15' }}>
                  <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 3px' }}>{p.name}</p>
                  {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 3 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 6px', borderRadius: 3, background: tc + '15', color: tc, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
                  {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={card}>
              <Sec title="Skills" color={tc} />
              {skl.map(s => (
                <div key={s.id} style={{ marginBottom: 6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5, color: '#333' }}>{s.name}</span><span style={{ fontSize: 8, color: '#aaa' }}>{s.level}%</span></div>
                  <div style={{ height: 4, background: '#e5e7eb', borderRadius: 999 }}><div style={{ height: 4, background: 'linear-gradient(to right,' + tc + ',' + tc + '80)', borderRadius: 999, width: s.level + '%' }} /></div>
                </div>
              ))}
            </div>
            <div style={card}>
              <Sec title="Education" color={tc} />
              {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10, color: '#111', margin: '0 0 1px' }}>{e.degree}</p><p style={{ color: tc, fontSize: 9, fontWeight: 600, margin: '0 0 1px' }}>{e.school}</p><p style={{ color: '#aaa', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p></div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── GLASSPRO ── Soft peach/coral, airy card layout with warm tones
export function GlassProTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#f97316' } = resume
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
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: tc }} />
      <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, margin: 0 }}>{children}</h2>
      <div style={{ flex: 1, height: 1, background: `${tc}30` }} />
    </div>
  )

  return (
    <div style={{ background: '#fff7ed', fontFamily: 'Arial,sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', position: 'relative', overflow: 'hidden' }}>
      {/* Soft blob decorations */}
      <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: `${tc}15`, zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: 60, left: -30, width: 150, height: 150, borderRadius: '50%', background: `${tc}08`, zIndex: 0 }} />

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 1, background: 'white', padding: '26px 30px 20px', borderBottom: `2px solid ${tc}25`, display: 'flex', alignItems: 'center', gap: 20, boxShadow: `0 2px 16px ${tc}10` }}>
        {photo
          ? <img src={photo} alt="" style={{ width: 76, height: 76, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}40`, flexShrink: 0 }} />
          : <div style={{ width: 76, height: 76, borderRadius: '50%', background: `${tc}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 900, color: tc, flexShrink: 0 }}>{name.charAt(0)}</div>
        }
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: '#431407', margin: '0 0 3px' }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontWeight: 700, margin: '0 0 8px' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#9a3412' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>)}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div style={{ position: 'relative', zIndex: 1, padding: '12px 30px', background: `${tc}10`, borderBottom: `1px solid ${tc}20` }}>
        <p style={{ color: '#7c2d12', lineHeight: 1.85, margin: 0, fontStyle: 'italic' }}>{summary}</p>
      </div>

      {/* Body */}
      <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 190px', gap: 0 }}>
        <div style={{ padding: '18px 22px', borderRight: `1px solid ${tc}15` }}>
          <SH>Experience</SH>
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, padding: '10px 12px', background: 'white', borderRadius: 10, border: `1px solid ${tc}20`, boxShadow: `0 1px 6px ${tc}08` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
                <div>
                  <p style={{ fontWeight: 800, fontSize: 11, color: '#431407', margin: 0 }}>{e.role}</p>
                  <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '1px 0' }}>{e.company}</p>
                </div>
                <span style={{ fontSize: 8.5, color: tc, background: `${tc}12`, border: `1px solid ${tc}25`, padding: '2px 8px', borderRadius: 20 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
              </div>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#7c2d12', fontSize: 9.5, lineHeight: 1.6, margin: '2px 0 0' }}>{l}</p>)}
            </div>
          ))}

          <div style={{ marginTop: 16 }}>
            <SH>Projects</SH>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0, padding: '8px 10px', background: 'white', borderRadius: 8, border: `1px solid ${tc}20` }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#431407', margin: '0 0 3px' }}>{p.name}</p>
                {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 3 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 6px', borderRadius: 3, background: `${tc}12`, color: tc, border: `1px solid ${tc}25`, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
                {p.description && <p style={{ color: '#7c2d12', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '18px 16px', background: '#fff7ed' }}>
          <SH>Skills</SH>
          {skl.map(s => (
            <div key={s.id} style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <span style={{ fontSize: 9.5, color: '#431407', fontWeight: 500 }}>{s.name}</span>
                <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
              </div>
              <div style={{ height: 5, background: `${tc}18`, borderRadius: 99 }}>
                <div style={{ height: '100%', background: `linear-gradient(to right, ${tc}, ${tc}99)`, borderRadius: 99, width: `${s.level}%` }} />
              </div>
            </div>
          ))}

          <div style={{ marginTop: 16 }}>
            <SH>Education</SH>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 8, padding: '8px 10px', background: 'white', borderRadius: 8, border: `1px solid ${tc}20` }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#431407', margin: '0 0 1px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9, fontWeight: 600, margin: '0 0 1px' }}>{e.school}</p>
                <p style={{ color: '#9a3412', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── NORDIC ── Ultra-minimal Scandinavian, thin lines, lots of whitespace
export function NordicTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#2d6a4f' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const NSec = ({ title, children }) => <div style={{ marginBottom: 24 }}><div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}><h2 style={{ fontSize: 8.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, margin: 0 }}>{title}</h2><div style={{ flex: 1, height: 1, background: '#e5e7eb' }} /></div>{children}</div>
  return (
    <div style={{ background: 'white', fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: 10.5, lineHeight: 1.6, minHeight: '297mm', padding: '38px 42px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28, paddingBottom: 22, borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          {photo && <img src={photo} alt="" style={{ width: 68, height: 68, borderRadius: '50%', objectFit: 'cover', border: '2px solid ' + tc + '30', flexShrink: 0 }} />}
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 300, color: '#111', letterSpacing: '-0.02em', margin: '0 0 3px' }}>{name}</h1>
            <p style={{ fontSize: 11, color: tc, fontWeight: 500, margin: 0, letterSpacing: '0.04em' }}>{jobTitle}</p>
          </div>
        </div>
        <div style={{ textAlign: 'right', fontSize: 9.5, color: '#888', lineHeight: 1.9 }}>
          {[email, phone, location].filter(Boolean).map((v, i) => <div key={i}>{v}</div>)}
        </div>
      </div>
      <p style={{ color: '#555', lineHeight: 1.9, marginBottom: 28, fontSize: 11, maxWidth: '78%' }}>{summary}</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 170px', gap: 36 }}>
        <div>
          <NSec title="Experience">
            {exp.map((e, i) => (
              <div key={e.id} style={{ display: 'grid', gridTemplateColumns: '76px 1fr', gap: 14, marginBottom: i < exp.length - 1 ? 18 : 0 }}>
                <div style={{ textAlign: 'right', paddingTop: 2 }}>
                  <p style={{ fontSize: 9, color: '#bbb', lineHeight: 1.4, margin: 0 }}>{e.startDate}</p>
                  <p style={{ fontSize: 9, color: '#bbb', margin: 0 }}>{e.current ? 'Present' : e.endDate}</p>
                </div>
                <div style={{ borderLeft: '1px solid ' + tc + '30', paddingLeft: 14 }}>
                  <p style={{ fontWeight: 600, fontSize: 11.5, color: '#111', margin: '0 0 1px' }}>{e.role}</p>
                  <p style={{ color: tc, fontSize: 10, margin: '0 0 5px', fontWeight: 500 }}>{e.company}</p>
                  {e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#666', fontSize: 10, lineHeight: 1.7, margin: '2px 0 0' }}>{l}</p>)}
                </div>
              </div>
            ))}
          </NSec>
          <NSec title="Projects">
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 12 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <p style={{ fontWeight: 600, fontSize: 11, color: '#111', margin: 0 }}>{p.name}</p>
                  {p.link && <span style={{ fontSize: 9, color: tc }}>{p.link}</span>}
                </div>
                {p.tech && <p style={{ color: '#bbb', fontSize: 9, margin: '0 0 3px' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#666', fontSize: 10, lineHeight: 1.7, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </NSec>
        </div>
        <div>
          <NSec title="Skills">
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 9 }}>
                <p style={{ fontSize: 10, color: '#333', margin: '0 0 3px', fontWeight: 500 }}>{s.name}</p>
                <div style={{ height: 2, background: '#f0f0f0', borderRadius: 1 }}><div style={{ height: 2, background: tc, borderRadius: 1, width: s.level + '%' }} /></div>
              </div>
            ))}
          </NSec>
          <NSec title="Education">
            {edu.map(e => <div key={e.id} style={{ marginBottom: 10 }}><p style={{ fontWeight: 600, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.degree}</p><p style={{ color: tc, fontSize: 9.5, margin: '0 0 1px', fontWeight: 500 }}>{e.school}</p><p style={{ color: '#bbb', fontSize: 9, margin: 0 }}>{e.startDate} — {e.endDate}</p></div>)}
          </NSec>
        </div>
      </div>
    </div>
  )
}

// ── BOLDBLOCKS ── Black header, colored summary bar, 3-col bottom grid
export function BoldBlocksTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#1d4ed8' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  return (
    <div style={{ background: 'white', fontFamily: 'Arial,sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      <div style={{ background: '#111', padding: '26px 30px 22px', display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo ? <img src={photo} alt="" style={{ width: 76, height: 76, borderRadius: 4, objectFit: 'cover', border: '3px solid ' + tc, flexShrink: 0 }} /> : <div style={{ width: 76, height: 76, borderRadius: 4, background: tc, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 900, color: 'white', flexShrink: 0 }}>{name.charAt(0)}</div>}
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: 'white', margin: '0 0 3px', letterSpacing: '-0.01em' }}>{name}</h1>
          <p style={{ fontSize: 12, color: tc, fontWeight: 700, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 16px', fontSize: 9.5, color: '#94a3b8' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ background: tc, padding: '12px 30px' }}><p style={{ color: 'rgba(255,255,255,0.92)', lineHeight: 1.8, margin: 0 }}>{summary}</p></div>
      <div style={{ padding: '0 0 40px' }}>
        <div style={{ background: '#f8fafc', padding: '9px 30px', borderBottom: '2px solid #111' }}>
          <h2 style={{ fontSize: 10.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111', margin: 0 }}>Work Experience</h2>
        </div>
        <div style={{ padding: '14px 30px' }}>
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0, paddingBottom: i < exp.length - 1 ? 14 : 0, borderBottom: i < exp.length - 1 ? '1px solid ' + tc + '18' : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4, marginBottom: 3 }}>
                <div><p style={{ fontWeight: 900, fontSize: 11.5, color: '#111', margin: 0 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 700, margin: '1px 0' }}>{e.company}</p></div>
                <span style={{ fontSize: 9, color: 'white', background: '#111', padding: '2px 9px', borderRadius: 3, height: 'fit-content', fontWeight: 700 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
              </div>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 10, lineHeight: 1.65, margin: '2px 0 0' }}>{l}</p>)}
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '2px solid #111' }}>
          {[
            { title: 'Skills', content: skl.map(s => <div key={s.id} style={{ marginBottom: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5, color: '#333', fontWeight: 600 }}>{s.name}</span><span style={{ fontSize: 8, color: '#aaa' }}>{s.level}%</span></div><div style={{ height: 4, background: '#f1f5f9', borderRadius: 2 }}><div style={{ height: 4, background: tc, borderRadius: 2, width: s.level + '%' }} /></div></div>) },
            { title: 'Education', content: edu.map(e => <div key={e.id} style={{ marginBottom: 10 }}><p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.degree}</p><p style={{ color: tc, fontSize: 9.5, fontWeight: 700, margin: '0 0 1px' }}>{e.school}</p><p style={{ color: '#aaa', fontSize: 9, margin: 0 }}>{e.startDate} — {e.endDate}</p></div>) },
            { title: 'Projects', content: prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{p.name}</p>{p.tech && <p style={{ color: '#888', fontSize: 8.5, margin: '0 0 2px' }}>{p.tech}</p>}{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}</div>) },
          ].map((col, ci) => (
            <div key={ci} style={{ borderRight: ci < 2 ? '2px solid #111' : 'none' }}>
              <div style={{ background: '#f8fafc', padding: '9px 18px', borderBottom: '2px solid #111' }}><h2 style={{ fontSize: 10.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111', margin: 0 }}>{col.title}</h2></div>
              <div style={{ padding: '12px 18px' }}>{col.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── SPOTLIGHT ── Soft teal/mint, clean centered header, light cards
export function SpotlightTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#0d9488' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  const SS = ({ title, children }) => (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
        <div style={{ width: 3, height: 14, borderRadius: 2, background: tc }} />
        <h2 style={{ fontSize: 9.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, margin: 0 }}>{title}</h2>
        <div style={{ flex: 1, height: 1, background: `${tc}25` }} />
      </div>
      {children}
    </div>
  )

  return (
    <div style={{ background: '#f0fdfa', fontFamily: 'Arial,sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      {/* Centered header */}
      <div style={{ textAlign: 'center', padding: '30px 30px 22px', background: 'white', borderBottom: `2px solid ${tc}30`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 300, height: 160, background: `radial-gradient(ellipse, ${tc}12 0%, transparent 70%)`, pointerEvents: 'none' }} />
        {photo
          ? <img src={photo} alt="" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}50`, margin: '0 auto 12px', display: 'block', boxShadow: `0 4px 20px ${tc}20` }} />
          : <div style={{ width: 80, height: 80, borderRadius: '50%', background: `${tc}15`, border: `3px solid ${tc}40`, margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 900, color: tc }}>{name.charAt(0)}</div>
        }
        <h1 style={{ fontSize: 26, fontWeight: 900, color: '#134e4a', margin: '0 0 5px' }}>{name}</h1>
        <p style={{ fontSize: 11, color: tc, fontWeight: 700, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{jobTitle}</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3px 18px', fontSize: 9.5, color: '#0f766e' }}>
          {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div style={{ padding: '12px 30px', background: `${tc}10`, borderBottom: `1px solid ${tc}20` }}>
        <p style={{ color: '#134e4a', lineHeight: 1.85, margin: 0, fontStyle: 'italic', textAlign: 'center' }}>{summary}</p>
      </div>

      <div style={{ padding: '18px 30px 40px', display: 'grid', gridTemplateColumns: '1fr 190px', gap: 20 }}>
        <div>
          <SS title="Experience">
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, padding: '9px 12px', background: 'white', borderRadius: 10, border: `1px solid ${tc}20`, borderLeft: `3px solid ${tc}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 11, color: '#134e4a', margin: 0 }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '1px 0' }}>{e.company}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: tc, background: `${tc}12`, border: `1px solid ${tc}25`, padding: '2px 8px', borderRadius: 20 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#0f766e', fontSize: 9.5, lineHeight: 1.6, margin: '2px 0 0' }}>{l}</p>)}
              </div>
            ))}
          </SS>
          <SS title="Projects">
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0, padding: '9px 12px', background: 'white', borderRadius: 8, border: `1px solid ${tc}20` }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#134e4a', margin: '0 0 3px' }}>{p.name}</p>
                {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 3 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 6px', borderRadius: 3, background: `${tc}12`, color: tc, border: `1px solid ${tc}25`, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
                {p.description && <p style={{ color: '#0f766e', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </SS>
        </div>
        <div>
          <SS title="Skills">
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 7 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 9.5, color: '#134e4a', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
                </div>
                <div style={{ height: 5, background: `${tc}15`, borderRadius: 99 }}>
                  <div style={{ height: '100%', background: `linear-gradient(to right, ${tc}, ${tc}80)`, borderRadius: 99, width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </SS>
          <SS title="Education">
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 8, padding: '7px 9px', background: 'white', borderRadius: 8, border: `1px solid ${tc}20` }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#134e4a', margin: '0 0 1px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9, fontWeight: 600, margin: '0 0 1px' }}>{e.school}</p>
                <p style={{ color: '#0f766e', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p>
              </div>
            ))}
          </SS>
        </div>
      </div>
    </div>
  )
}

// ── TIMELINEPRO ── Vertical timeline dots for career, gradient header
export function TimelineProTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#0891b2' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  return (
    <div style={{ background: 'white', fontFamily: 'Arial,sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      <div style={{ background: 'linear-gradient(to right,' + tc + ',' + tc + 'cc)', padding: '24px 30px 20px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -15, top: -15, width: 140, height: 140, borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, position: 'relative' }}>
          {photo ? <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)', flexShrink: 0 }} /> : <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 900, color: 'white', flexShrink: 0 }}>{name.charAt(0)}</div>}
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 900, color: 'white', margin: '0 0 2px' }}>{name}</h1>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontWeight: 600, margin: '0 0 8px' }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: 'rgba(255,255,255,0.72)' }}>
              {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '18px 30px 40px', display: 'grid', gridTemplateColumns: '1fr 190px', gap: 22 }}>
        <div>
          <p style={{ color: '#444', lineHeight: 1.8, marginBottom: 18, padding: '10px 14px', background: tc + '08', borderRadius: 7, borderLeft: '4px solid ' + tc }}>{summary}</p>
          <h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 12 }}>Career Timeline</h2>
          <div style={{ position: 'relative', paddingLeft: 22 }}>
            <div style={{ position: 'absolute', left: 6, top: 8, bottom: 8, width: 2, background: tc + '22' }} />
            {exp.map((e, i) => (
              <div key={e.id} style={{ position: 'relative', marginBottom: i < exp.length - 1 ? 16 : 0 }}>
                <div style={{ position: 'absolute', left: -22, top: 4, width: 14, height: 14, borderRadius: '50%', background: e.current ? tc : 'white', border: '2px solid ' + tc, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {e.current && <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'white' }} />}
                </div>
                <div style={{ padding: '9px 12px', background: '#fafafa', borderRadius: 7, border: '1px solid ' + tc + '14' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4, marginBottom: 3 }}>
                    <div><p style={{ fontWeight: 800, fontSize: 11, color: '#111', margin: 0 }}>{e.role}</p><p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '1px 0' }}>{e.company}</p></div>
                    <span style={{ fontSize: 8.5, color: '#999', background: 'white', padding: '2px 7px', borderRadius: 4, border: '1px solid ' + tc + '18' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                  </div>
                  {e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: '2px 0 0' }}>{l}</p>)}
                </div>
              </div>
            ))}
          </div>
          <h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10, marginTop: 18 }}>Projects</h2>
          {prj.map((p, i) => (
            <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0, padding: '9px 12px', background: '#fafafa', borderRadius: 7, border: '1px solid ' + tc + '14', borderTop: '3px solid ' + tc }}>
              <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: '0 0 3px' }}>{p.name}</p>
              {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 3 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 6px', borderRadius: 3, background: tc + '10', color: tc, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
              {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Skills</h2>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 7 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5, color: '#333', fontWeight: 500 }}>{s.name}</span><span style={{ fontSize: 8, color: '#aaa' }}>{s.level}%</span></div>
                <div style={{ height: 4, background: '#f1f5f9', borderRadius: 999 }}><div style={{ height: 4, background: 'linear-gradient(to right,' + tc + ',' + tc + '80)', borderRadius: 999, width: s.level + '%' }} /></div>
              </div>
            ))}
          </div>
          <div>
            <h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Education</h2>
            {edu.map(e => <div key={e.id} style={{ marginBottom: 8, padding: '9px 10px', background: tc + '07', borderRadius: 7 }}><p style={{ fontWeight: 700, fontSize: 10, color: '#111', margin: '0 0 1px' }}>{e.degree}</p><p style={{ color: tc, fontSize: 9, fontWeight: 600, margin: '0 0 1px' }}>{e.school}</p><p style={{ color: '#aaa', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}
