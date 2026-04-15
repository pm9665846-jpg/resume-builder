'use client'
import { Mail, Phone, MapPin } from 'lucide-react'

const S = {
  name: 'xyz', jobTitle: 'Senior Software Engineer',
  email: 'prachi@email.com', phone: '+91 98765 43210', location: 'Mumbai, India',
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

function RibbonSec({ title, color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <div style={{ width: 4, height: 16, background: color, borderRadius: 2 }} />
      <h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color, margin: 0 }}>{title}</h2>
    </div>
  )
}

function GlassSec({ title, color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color, margin: 0 }}>{title}</h2>
      <div style={{ flex: 1, height: 1, background: color + '40' }} />
    </div>
  )
}

function NordicSec({ title, color, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <h2 style={{ fontSize: 8.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color, margin: 0 }}>{title}</h2>
        <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
      </div>
      {children}
    </div>
  )
}

function SpotSec({ title, color, children }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: color, boxShadow: '0 0 8px ' + color }} />
        <h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color, margin: 0 }}>{title}</h2>
        <div style={{ flex: 1, height: 1, background: color + '25' }} />
      </div>
      {children}
    </div>
  )
}


// ── 7: RIBBON ── Left ribbon accent bar with floating cards
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

  return (
    <div style={{ background: '#f9fafb', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', display: 'flex' }}>
      <div style={{ width: 8, background: 'linear-gradient(to bottom, ' + tc + ', ' + tc + '80)', flexShrink: 0 }} />
      <div style={{ flex: 1, padding: '28px 28px 40px 24px' }}>
        <div style={{ background: 'white', borderRadius: 12, padding: '20px 24px', marginBottom: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 20 }}>
          {photo
            ? <img src={photo} alt="" style={{ width: 76, height: 76, borderRadius: 10, objectFit: 'cover', border: '3px solid ' + tc + '30', flexShrink: 0 }} />
            : <div style={{ width: 76, height: 76, borderRadius: 10, background: tc + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 900, color: tc, flexShrink: 0 }}>{name.charAt(0)}</div>
          }
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 26, fontWeight: 900, color: '#111', margin: '0 0 3px', letterSpacing: '-0.01em' }}>{name}</h1>
            <p style={{ fontSize: 12, color: tc, fontWeight: 700, margin: '0 0 10px' }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9.5, color: '#666' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ background: 'white', borderRadius: 10, padding: '14px 18px', marginBottom: 14, boxShadow: '0 1px 6px rgba(0,0,0,0.05)', borderLeft: '4px solid ' + tc }}>
          <p style={{ color: '#444', lineHeight: 1.8, margin: 0 }}>{summary}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: 14 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: 'white', borderRadius: 10, padding: '16px 18px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)' }}>
              <RibbonSec title="Experience" color={tc} />
              {exp.map((e, i) => (
                <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, paddingBottom: i < exp.length - 1 ? 12 : 0, borderBottom: i < exp.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
                    <div>
                      <p style={{ fontWeight: 800, fontSize: 11.5, color: '#111', margin: 0 }}>{e.role}</p>
                      <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '2px 0' }}>{e.company}</p>
                    </div>
                    <span style={{ fontSize: 9, color: '#999', background: '#f9fafb', padding: '2px 8px', borderRadius: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                  </div>
                  {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                    <p key={li} style={{ color: '#555', fontSize: 10, lineHeight: 1.65, margin: '3px 0 0' }}>{l}</p>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ background: 'white', borderRadius: 10, padding: '16px 18px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)' }}>
              <RibbonSec title="Projects" color={tc} />
              {prj.map((p, i) => (
                <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '10px 12px', background: tc + '06', borderRadius: 8, border: '1px solid ' + tc + '15' }}>
                  <p style={{ fontWeight: 800, fontSize: 11, color: '#111', margin: '0 0 4px' }}>{p.name}</p>
                  {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8.5, padding: '1px 7px', borderRadius: 3, background: tc + '15', color: tc, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
                  {p.description && <p style={{ color: '#555', fontSize: 10, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: 'white', borderRadius: 10, padding: '16px 18px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)' }}>
              <RibbonSec title="Skills" color={tc} />
              {skl.map(s => (
                <div key={s.id} style={{ marginBottom: 7 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <span style={{ fontSize: 10, color: '#333', fontWeight: 500 }}>{s.name}</span>
                    <span style={{ fontSize: 8.5, color: '#aaa' }}>{s.level}%</span>
                  </div>
                  <div style={{ height: 5, background: '#f3f4f6', borderRadius: 999 }}>
                    <div style={{ height: 5, background: 'linear-gradient(to right, ' + tc + ', ' + tc + '99)', borderRadius: 999, width: s.level + '%' }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: 'white', borderRadius: 10, padding: '16px 18px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)' }}>
              <RibbonSec title="Education" color={tc} />
              {edu.map(e => (
                <div key={e.id} style={{ marginBottom: 10 }}>
                  <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{e.degree}</p>
                  <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '0 0 2px' }}>{e.school}</p>
                  <p style={{ color: '#aaa', fontSize: 9, margin: 0 }}>{e.startDate} — {e.endDate}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


// ── 8: GLASS PRO ── Glassmorphism on dark gradient
export function GlassProTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#8b5cf6' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const glass = { background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 14 }

  return (
    <div style={{ background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', padding: '24px 28px 40px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -60, right: -60, width: 250, height: 250, borderRadius: '50%', background: tc + '30', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ ...glass, padding: '20px 24px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 20, position: 'relative' }}>
        {photo
          ? <img src={photo} alt="" style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.3)', flexShrink: 0 }} />
          : <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 900, color: 'white', flexShrink: 0 }}>{name.charAt(0)}</div>
        }
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: 'white', margin: '0 0 3px' }}>{name}</h1>
          <p style={{ fontSize: 12, color: tc, fontWeight: 700, margin: '0 0 10px' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9.5, color: 'rgba(255,255,255,0.6)' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ ...glass, padding: '12px 18px', marginBottom: 14 }}>
        <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, margin: 0 }}>{summary}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: 14 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ ...glass, padding: '16px 18px' }}>
            <GlassSec title="Experience" color={tc} />
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, paddingBottom: i < exp.length - 1 ? 12 : 0, borderBottom: i < exp.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 11.5, color: 'white', margin: 0 }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '2px 0' }}>{e.company}</p>
                  </div>
                  <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.08)', padding: '2px 8px', borderRadius: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: 'rgba(255,255,255,0.65)', fontSize: 10, lineHeight: 1.65, margin: '3px 0 0' }}>{l}</p>
                ))}
              </div>
            ))}
          </div>
          <div style={{ ...glass, padding: '16px 18px' }}>
            <GlassSec title="Projects" color={tc} />
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '10px 12px', background: 'rgba(255,255,255,0.06)', borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ fontWeight: 700, fontSize: 11, color: 'white', margin: '0 0 4px' }}>{p.name}</p>
                {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8.5, padding: '1px 7px', borderRadius: 3, background: tc + '30', color: tc, border: '1px solid ' + tc + '40', fontWeight: 600 }}>{t.trim()}</span>)}</div>}
                {p.description && <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ ...glass, padding: '16px 18px' }}>
            <GlassSec title="Skills" color={tc} />
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.85)' }}>{s.name}</span>
                  <span style={{ fontSize: 8.5, color: tc }}>{s.level}%</span>
                </div>
                <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 999 }}>
                  <div style={{ height: 4, background: 'linear-gradient(to right, ' + tc + ', ' + tc + '80)', borderRadius: 999, width: s.level + '%' }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ ...glass, padding: '16px 18px' }}>
            <GlassSec title="Education" color={tc} />
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10 }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: 'white', margin: '0 0 2px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, margin: '0 0 2px' }}>{e.school}</p>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9, margin: 0 }}>{e.startDate} — {e.endDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


// ── 9: TIMELINE PRO ── Vertical timeline with milestone dots
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
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      <div style={{ background: 'linear-gradient(to right, ' + tc + ', ' + tc + 'dd)', padding: '26px 32px 22px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -20, top: -20, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, position: 'relative' }}>
          {photo
            ? <img src={photo} alt="" style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)', flexShrink: 0 }} />
            : <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 900, color: 'white', flexShrink: 0 }}>{name.charAt(0)}</div>
          }
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 900, color: 'white', margin: '0 0 3px' }}>{name}</h1>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', fontWeight: 600, margin: '0 0 10px' }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9.5, color: 'rgba(255,255,255,0.75)' }}>
              {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 32px 40px', display: 'grid', gridTemplateColumns: '1fr 200px', gap: 24 }}>
        <div>
          <p style={{ color: '#444', lineHeight: 1.8, marginBottom: 20, padding: '12px 16px', background: tc + '08', borderRadius: 8, borderLeft: '4px solid ' + tc }}>{summary}</p>
          <h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 14 }}>Career Timeline</h2>
          <div style={{ position: 'relative', paddingLeft: 24 }}>
            <div style={{ position: 'absolute', left: 7, top: 8, bottom: 8, width: 2, background: tc + '25' }} />
            {exp.map((e, i) => (
              <div key={e.id} style={{ position: 'relative', marginBottom: i < exp.length - 1 ? 18 : 0 }}>
                <div style={{ position: 'absolute', left: -24, top: 4, width: 16, height: 16, borderRadius: '50%', background: e.current ? tc : 'white', border: '2px solid ' + tc, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {e.current && <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'white' }} />}
                </div>
                <div style={{ padding: '10px 14px', background: '#fafafa', borderRadius: 8, border: '1px solid ' + tc + '15' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>
                    <div>
                      <p style={{ fontWeight: 800, fontSize: 11.5, color: '#111', margin: 0 }}>{e.role}</p>
                      <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '2px 0' }}>{e.company}</p>
                    </div>
                    <span style={{ fontSize: 9, color: '#999', background: 'white', padding: '2px 8px', borderRadius: 4, border: '1px solid ' + tc + '20' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                  </div>
                  {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                    <p key={li} style={{ color: '#555', fontSize: 10, lineHeight: 1.65, margin: '2px 0 0' }}>{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 12, marginTop: 20 }}>Projects</h2>
          {prj.map((p, i) => (
            <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '10px 14px', background: '#fafafa', borderRadius: 8, border: '1px solid ' + tc + '15', borderTop: '3px solid ' + tc }}>
              <p style={{ fontWeight: 800, fontSize: 11, color: '#111', margin: '0 0 4px' }}>{p.name}</p>
              {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8.5, padding: '1px 7px', borderRadius: 3, background: tc + '12', color: tc, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
              {p.description && <p style={{ color: '#555', fontSize: 10, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 12 }}>Skills</h2>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 10, color: '#333', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 8.5, color: '#aaa' }}>{s.level}%</span>
                </div>
                <div style={{ height: 5, background: '#f1f5f9', borderRadius: 999 }}>
                  <div style={{ height: 5, background: 'linear-gradient(to right, ' + tc + ', ' + tc + '80)', borderRadius: 999, width: s.level + '%' }} />
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 12 }}>Education</h2>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10, padding: '10px 12px', background: tc + '08', borderRadius: 8 }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '0 0 2px' }}>{e.school}</p>
                <p style={{ color: '#aaa', fontSize: 9, margin: 0 }}>{e.startDate} — {e.endDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


// ── 10: NORDIC ── Ultra-minimal Scandinavian style
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

  return (
    <div style={{ background: 'white', fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10.5, lineHeight: 1.6, minHeight: '297mm', padding: '40px 44px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {photo && <img src={photo} alt="" style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', border: '2px solid ' + tc + '30', flexShrink: 0 }} />}
          <div>
            <h1 style={{ fontSize: 30, fontWeight: 300, color: '#111', letterSpacing: '-0.02em', margin: '0 0 4px' }}>{name}</h1>
            <p style={{ fontSize: 12, color: tc, fontWeight: 500, margin: 0, letterSpacing: '0.04em' }}>{jobTitle}</p>
          </div>
        </div>
        <div style={{ textAlign: 'right', fontSize: 9.5, color: '#888', lineHeight: 1.8 }}>
          {[email, phone, location].filter(Boolean).map((v, i) => <div key={i}>{v}</div>)}
        </div>
      </div>
      <p style={{ color: '#555', lineHeight: 1.9, marginBottom: 32, fontSize: 11, maxWidth: '80%' }}>{summary}</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 180px', gap: 40 }}>
        <div>
          <NordicSec title="Experience" color={tc}>
            {exp.map((e, i) => (
              <div key={e.id} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 16, marginBottom: i < exp.length - 1 ? 20 : 0 }}>
                <div style={{ textAlign: 'right', paddingTop: 2 }}>
                  <p style={{ fontSize: 9, color: '#aaa', lineHeight: 1.4, margin: 0 }}>{e.startDate}</p>
                  <p style={{ fontSize: 9, color: '#aaa', margin: 0 }}>{e.current ? 'Present' : e.endDate}</p>
                </div>
                <div style={{ borderLeft: '1px solid ' + tc + '30', paddingLeft: 16 }}>
                  <p style={{ fontWeight: 600, fontSize: 12, color: '#111', margin: '0 0 2px' }}>{e.role}</p>
                  <p style={{ color: tc, fontSize: 10, margin: '0 0 6px', fontWeight: 500 }}>{e.company}</p>
                  {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                    <p key={li} style={{ color: '#666', fontSize: 10, lineHeight: 1.7, margin: '2px 0 0' }}>{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </NordicSec>
          <NordicSec title="Projects" color={tc}>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 14 : 0 }}>
                <p style={{ fontWeight: 600, fontSize: 11.5, color: '#111', margin: '0 0 3px' }}>{p.name}</p>
                {p.tech && <p style={{ color: '#aaa', fontSize: 9, margin: '0 0 4px' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#666', fontSize: 10, lineHeight: 1.7, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </NordicSec>
        </div>
        <div>
          <NordicSec title="Skills" color={tc}>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 10 }}>
                <p style={{ fontSize: 10, color: '#333', margin: '0 0 4px', fontWeight: 500 }}>{s.name}</p>
                <div style={{ height: 2, background: '#f3f4f6', borderRadius: 1 }}>
                  <div style={{ height: 2, background: tc, borderRadius: 1, width: s.level + '%' }} />
                </div>
              </div>
            ))}
          </NordicSec>
          <NordicSec title="Education" color={tc}>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 12 }}>
                <p style={{ fontWeight: 600, fontSize: 11, color: '#111', margin: '0 0 2px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 10, margin: '0 0 2px', fontWeight: 500 }}>{e.school}</p>
                <p style={{ color: '#aaa', fontSize: 9, margin: 0 }}>{e.startDate} — {e.endDate}</p>
              </div>
            ))}
          </NordicSec>
        </div>
      </div>
    </div>
  )
}

// ── 11: BOLD BLOCKS ── High contrast black header, 3-column bottom grid
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
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      <div style={{ background: '#111', padding: '28px 32px 24px', display: 'flex', alignItems: 'center', gap: 22 }}>
        {photo
          ? <img src={photo} alt="" style={{ width: 80, height: 80, borderRadius: 4, objectFit: 'cover', border: '3px solid ' + tc, flexShrink: 0 }} />
          : <div style={{ width: 80, height: 80, borderRadius: 4, background: tc, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 900, color: 'white', flexShrink: 0 }}>{name.charAt(0)}</div>
        }
        <div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: 'white', margin: '0 0 4px', letterSpacing: '-0.01em' }}>{name}</h1>
          <p style={{ fontSize: 13, color: tc, fontWeight: 700, margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 18px', fontSize: 9.5, color: '#94a3b8' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ background: tc, padding: '14px 32px' }}>
        <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, margin: 0 }}>{summary}</p>
      </div>
      <div style={{ padding: '0 0 40px' }}>
        <div style={{ background: '#f8fafc', padding: '10px 32px', borderBottom: '2px solid #111' }}>
          <h2 style={{ fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#111', margin: 0 }}>Work Experience</h2>
        </div>
        <div style={{ padding: '16px 32px' }}>
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 16 : 0, paddingBottom: i < exp.length - 1 ? 16 : 0, borderBottom: i < exp.length - 1 ? '2px solid ' + tc + '15' : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>
                <div>
                  <p style={{ fontWeight: 900, fontSize: 12, color: '#111', margin: 0 }}>{e.role}</p>
                  <p style={{ color: tc, fontSize: 10.5, fontWeight: 700, margin: '2px 0' }}>{e.company}</p>
                </div>
                <span style={{ fontSize: 9.5, color: 'white', background: '#111', padding: '3px 10px', borderRadius: 3, height: 'fit-content', fontWeight: 700 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
              </div>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                <p key={li} style={{ color: '#444', fontSize: 10, lineHeight: 1.65, margin: '3px 0 0' }}>{l}</p>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '2px solid #111' }}>
          <div style={{ borderRight: '2px solid #111' }}>
            <div style={{ background: '#f8fafc', padding: '10px 20px', borderBottom: '2px solid #111' }}>
              <h2 style={{ fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#111', margin: 0 }}>Skills</h2>
            </div>
            <div style={{ padding: '14px 20px' }}>
              {skl.map(s => (
                <div key={s.id} style={{ marginBottom: 7 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <span style={{ fontSize: 10, color: '#333', fontWeight: 600 }}>{s.name}</span>
                    <span style={{ fontSize: 8.5, color: '#aaa' }}>{s.level}%</span>
                  </div>
                  <div style={{ height: 5, background: '#f1f5f9', borderRadius: 2 }}>
                    <div style={{ height: 5, background: tc, borderRadius: 2, width: s.level + '%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderRight: '2px solid #111' }}>
            <div style={{ background: '#f8fafc', padding: '10px 20px', borderBottom: '2px solid #111' }}>
              <h2 style={{ fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#111', margin: 0 }}>Education</h2>
            </div>
            <div style={{ padding: '14px 20px' }}>
              {edu.map(e => (
                <div key={e.id} style={{ marginBottom: 12 }}>
                  <p style={{ fontWeight: 800, fontSize: 11, color: '#111', margin: '0 0 2px' }}>{e.degree}</p>
                  <p style={{ color: tc, fontSize: 10, fontWeight: 700, margin: '0 0 2px' }}>{e.school}</p>
                  <p style={{ color: '#aaa', fontSize: 9, margin: 0 }}>{e.startDate} — {e.endDate}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ background: '#f8fafc', padding: '10px 20px', borderBottom: '2px solid #111' }}>
              <h2 style={{ fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#111', margin: 0 }}>Projects</h2>
            </div>
            <div style={{ padding: '14px 20px' }}>
              {prj.map((p, i) => (
                <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0 }}>
                  <p style={{ fontWeight: 800, fontSize: 11, color: '#111', margin: '0 0 2px' }}>{p.name}</p>
                  {p.tech && <p style={{ color: '#888', fontSize: 8.5, margin: '0 0 3px' }}>{p.tech}</p>}
                  {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 12: SPOTLIGHT ── Dark theme, center-aligned hero with spotlight glow
export function SpotlightTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#f59e0b' } = resume
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
    <div style={{ background: '#0c0c0c', color: '#e2e8f0', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      <div style={{ textAlign: 'center', padding: '36px 32px 28px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 300, height: 200, background: 'radial-gradient(ellipse, ' + tc + '25 0%, transparent 70%)', pointerEvents: 'none' }} />
        {photo
          ? <img src={photo} alt="" style={{ width: 112, height: 112, borderRadius: '50%', objectFit: 'cover', border: '3px solid ' + tc, margin: '0 auto 14px', display: 'block', boxShadow: '0 0 30px ' + tc + '40' }} />
          : <div style={{ width: 112, height: 112, borderRadius: '50%', background: tc + '20', border: '3px solid ' + tc, margin: '0 auto 14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, fontWeight: 900, color: tc }}>{name.charAt(0)}</div>
        }
        <h1 style={{ fontSize: 30, fontWeight: 900, color: 'white', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{name}</h1>
        <p style={{ fontSize: 12, color: tc, fontWeight: 700, margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{jobTitle}</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '4px 20px', fontSize: 9.5, color: '#64748b' }}>
          {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
        </div>
      </div>
      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, ' + tc + '60, transparent)', margin: '0 32px' }} />
      <div style={{ padding: '20px 32px 40px', display: 'grid', gridTemplateColumns: '1fr 200px', gap: 24 }}>
        <div>
          <div style={{ marginBottom: 18, padding: '12px 16px', background: '#1a1a1a', borderRadius: 8, borderLeft: '3px solid ' + tc }}>
            <p style={{ color: '#94a3b8', lineHeight: 1.8, margin: 0 }}>{summary}</p>
          </div>
          <SpotSec title="Experience" color={tc}>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0, padding: '10px 14px', background: '#1a1a1a', borderRadius: 8, borderLeft: '3px solid ' + (e.current ? tc : '#333') }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 11.5, color: 'white', margin: 0 }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 600, margin: '2px 0' }}>{e.company}</p>
                  </div>
                  <span style={{ fontSize: 9, color: '#475569', background: '#111', padding: '2px 8px', borderRadius: 3 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#94a3b8', fontSize: 10, lineHeight: 1.65, margin: '3px 0 0' }}>{l}</p>
                ))}
              </div>
            ))}
          </SpotSec>
          <SpotSec title="Projects" color={tc}>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '10px 14px', background: '#1a1a1a', borderRadius: 8 }}>
                <p style={{ fontWeight: 700, fontSize: 11, color: 'white', margin: '0 0 4px' }}>{p.name}</p>
                {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8.5, padding: '1px 7px', borderRadius: 3, background: tc + '20', color: tc, border: '1px solid ' + tc + '30', fontWeight: 600 }}>{t.trim()}</span>)}</div>}
                {p.description && <p style={{ color: '#94a3b8', fontSize: 10, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </SpotSec>
        </div>
        <div>
          <SpotSec title="Skills" color={tc}>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 10, color: '#e2e8f0' }}>{s.name}</span>
                  <span style={{ fontSize: 8.5, color: tc }}>{s.level}%</span>
                </div>
                <div style={{ height: 4, background: '#1a1a1a', borderRadius: 999 }}>
                  <div style={{ height: 4, background: 'linear-gradient(to right, ' + tc + ', ' + tc + '80)', borderRadius: 999, width: s.level + '%' }} />
                </div>
              </div>
            ))}
          </SpotSec>
          <SpotSec title="Education" color={tc}>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10, padding: '8px 10px', background: '#1a1a1a', borderRadius: 8 }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: 'white', margin: '0 0 2px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, margin: '0 0 2px' }}>{e.school}</p>
                <p style={{ color: '#475569', fontSize: 9, margin: 0 }}>{e.startDate} — {e.endDate}</p>
              </div>
            ))}
          </SpotSec>
        </div>
      </div>
    </div>
  )
}
