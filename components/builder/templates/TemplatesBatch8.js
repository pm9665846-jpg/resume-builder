import { Mail, Phone, MapPin, Globe, Link2, Award } from 'lucide-react'
const S = {
  name: 'Prachi Mishra', jobTitle: 'Software Engineer', email: 'prachi@email.com', phone: '+91 98765 43210', location: 'Mumbai, India',
  summary: 'Senior Software Engineer with 4+ years building scalable full-stack applications. Led teams, reduced latency by 40%, shipped products used by 500K+ users.',
  experience: [{ id: 's1', role: 'Senior Engineer', company: 'Google India', location: 'Bengaluru', startDate: 'Jan 2022', endDate: '', current: true, description: '• Architected microservices handling 15M+ API requests/day\n• Led Payments 2.0 reducing failures by 35%' }, { id: 's2', role: 'Software Engineer', company: 'Razorpay', location: 'Bengaluru', startDate: 'Jul 2020', endDate: 'Dec 2021', current: false, description: '• Built merchant dashboard for 200K+ merchants\n• Optimized queries from 800ms to 120ms' }],
  education: [{ id: 'e1', degree: 'B.Tech Computer Science', school: 'IIT Bombay', startDate: '2015', endDate: '2019', gpa: '9.2/10' }],
  skills: [{ id: 'sk1', name: 'JavaScript', level: 95 }, { id: 'sk2', name: 'React', level: 92 }, { id: 'sk3', name: 'Node.js', level: 90 }, { id: 'sk4', name: 'Python', level: 80 }, { id: 'sk5', name: 'AWS', level: 78 }, { id: 'sk6', name: 'Docker', level: 75 }],
  projects: [{ id: 'p1', name: 'ResumeAI', tech: 'Next.js, MySQL, OpenAI', link: 'resumeai.vercel.app', description: 'AI resume builder with 100 templates. 2,000+ users in first month.' }],
  certifications: [{ id: 'c1', name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', date: '2023-04' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}
function g(v, f) { return v && String(v).trim() !== '' ? v : f }

// ── 64: Ivory ── Warm ivory classic
export function IvoryTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#78350f' } = resume
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
    <div style={{ background: '#fffff0', fontFamily: 'Georgia, serif', fontSize: 10.5, lineHeight: 1.65, padding: '32px 40px', minHeight: '297mm', color: '#2c1810' }}>
      <div style={{ textAlign: 'center', marginBottom: 20, paddingBottom: 16, borderBottom: `2px solid ${tc}` }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${tc}`, margin: '0 auto 10px' }} />}
        <h1 style={{ fontSize: 28, fontWeight: 400, letterSpacing: '0.06em', marginBottom: 4 }}>{name}</h1>
        <p style={{ fontSize: 11, color: tc, fontStyle: 'italic', marginBottom: 8 }}>{jobTitle}</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3px 16px', fontSize: 9.5, color: '#7c5c3e' }}>
          {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
        </div>
      </div>
      <p style={{ fontStyle: 'italic', color: '#5c4033', lineHeight: 1.9, marginBottom: 18, textAlign: 'center' }}>{summary}</p>
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 24 }}>
        <div>
          <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 12, borderBottom: `1px solid ${tc}40`, paddingBottom: 4 }}>Experience</h2>
          {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><p style={{ fontWeight: 700, fontSize: 11.5 }}>{e.role}</p><p style={{ fontSize: 9, color: '#9c7c5e', fontStyle: 'italic' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p></div><p style={{ color: tc, fontSize: 10, fontStyle: 'italic', marginBottom: 4 }}>{e.company}</p>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#5c4033', fontSize: 10, lineHeight: 1.7 }}>{l}</p>)}</div>)}
          <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 12, borderBottom: `1px solid ${tc}40`, paddingBottom: 4, marginTop: 16 }}>Projects</h2>
          {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0 }}><p style={{ fontWeight: 700, fontSize: 11 }}>{p.name}</p>{p.description && <p style={{ color: '#5c4033', fontSize: 10, lineHeight: 1.7 }}>{p.description}</p>}</div>)}
        </div>
        <div>
          <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 12, borderBottom: `1px solid ${tc}40`, paddingBottom: 4 }}>Skills</h2>
          <p style={{ color: '#5c4033', fontSize: 10, lineHeight: 2 }}>{skl.map(s => s.name).join(' · ')}</p>
          <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 12, borderBottom: `1px solid ${tc}40`, paddingBottom: 4, marginTop: 16 }}>Education</h2>
          {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{e.degree}</p><p style={{ color: '#9c7c5e', fontSize: 10, fontStyle: 'italic' }}>{e.school}</p><p style={{ color: '#b8956a', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
        </div>
      </div>
    </div>
  )
}

// ── 65: Steel ── Steel blue industrial
export function SteelTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#334155' } = resume
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
      <div style={{ background: `linear-gradient(to right, #0f172a, ${tc})`, padding: '26px 32px 20px', color: 'white', display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.3)', flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 900, marginBottom: 3 }}>{name}</h1>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)', fontWeight: 600, marginBottom: 8 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: 'rgba(255,255,255,0.7)' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 32px 40px' }}>
        <p style={{ color: '#444', lineHeight: 1.8, marginBottom: 16, padding: '12px 16px', background: '#f8fafc', borderRadius: 8, borderLeft: `4px solid ${tc}` }}>{summary}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }}>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Experience</h2>
            {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, marginTop: 14 }}>Projects</h2>
            {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}
          </div>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Skills</h2>
            {skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 3, background: '#e2e8f0', borderRadius: 2 }}><div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level}%` }} /></div></div>)}
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, marginTop: 14 }}>Education</h2>
            {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 66: Plum ── Deep plum purple
export function PlumTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#6b21a8' } = resume
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
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', display: 'flex' }}>
      <div style={{ width: '35%', background: `linear-gradient(to bottom, ${tc}, #4a044e)`, padding: '26px 16px 40px', color: 'white', flexShrink: 0 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.3)', marginBottom: 14 }} />}
        <h1 style={{ fontSize: 15, fontWeight: 800, lineHeight: 1.2, marginBottom: 4 }}>{name}</h1>
        <p style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.8)', marginBottom: 14 }}>{jobTitle}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 18 }}>
          {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 8.5, color: 'rgba(255,255,255,0.7)' }}><I size={8} />{v}</div>)}
        </div>
        <h3 style={{ fontSize: 8, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.6)', marginBottom: 8 }}>Skills</h3>
        {skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9, color: 'rgba(255,255,255,0.9)' }}>{s.name}</span><span style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.5)' }}>{s.level}%</span></div><div style={{ height: 3, background: 'rgba(255,255,255,0.15)', borderRadius: 2 }}><div style={{ height: 3, background: 'rgba(255,255,255,0.7)', borderRadius: 2, width: `${s.level}%` }} /></div></div>)}
        <h3 style={{ fontSize: 8, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.6)', marginBottom: 8, marginTop: 14 }}>Education</h3>
        {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 9.5, color: 'white' }}>{e.degree}</p><p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 8.5 }}>{e.school}</p><p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 8 }}>{e.startDate} — {e.endDate}</p></div>)}
      </div>
      <div style={{ flex: 1, padding: '24px 22px 40px' }}>
        <p style={{ color: '#444', fontSize: 10.5, lineHeight: 1.8, marginBottom: 16, padding: '12px 14px', background: `${tc}08`, borderRadius: 8 }}>{summary}</p>
        <div style={{ marginBottom: 16 }}><h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Experience</h2>{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}</div>
        <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Projects</h2>{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}
      </div>
    </div>
  )
}

// ── 67: Jade ── Jade green luxury
export function JadeTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#065f46' } = resume
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
    <div style={{ background: '#f0fdf4', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', padding: '24px 28px 40px' }}>
      <div style={{ background: tc, borderRadius: 12, padding: '20px 24px', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 18 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.3)', flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: 'white', marginBottom: 3 }}>{name}</h1>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontWeight: 600, marginBottom: 8 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: 'rgba(255,255,255,0.75)' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ background: `${tc}10`, borderRadius: 12, padding: '14px 18px', marginBottom: 14 }}><p style={{ color: '#444', fontSize: 10.5, lineHeight: 1.8 }}>{summary}</p></div>
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 14 }}>
        <div>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', marginBottom: 14, border: `1px solid ${tc}20` }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Experience</h2>
            {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777', background: `${tc}10`, padding: '2px 8px', borderRadius: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
          </div>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', border: `1px solid ${tc}20` }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Projects</h2>
            {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}
          </div>
        </div>
        <div>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', marginBottom: 14, border: `1px solid ${tc}20` }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Skills</h2>
            {skl.map(s => <div key={s.id} style={{ marginBottom: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 4, background: `${tc}15`, borderRadius: 999 }}><div style={{ height: 4, background: tc, borderRadius: 999, width: `${s.level}%` }} /></div></div>)}
          </div>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', border: `1px solid ${tc}20` }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Education</h2>
            {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 68: Graphite ── Graphite dark minimal
export function GraphiteTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#9ca3af' } = resume
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
    <div style={{ background: '#111827', color: '#e5e7eb', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      <div style={{ padding: '28px 32px 20px', borderBottom: `1px solid #374151`, display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${tc}`, flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: 'white', marginBottom: 4 }}>{name}</h1>
          <p style={{ fontSize: 12, color: tc, fontWeight: 600, marginBottom: 10 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9.5, color: '#6b7280' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 32px 40px' }}>
        <div style={{ marginBottom: 16, padding: '12px 16px', background: '#1f2937', borderRadius: 8 }}><p style={{ color: '#9ca3af', fontSize: 10.5, lineHeight: 1.8 }}>{summary}</p></div>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }}>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Experience</h2>
            {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, padding: '10px 12px', background: '#1f2937', borderRadius: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11, color: 'white' }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#6b7280' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#9ca3af', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, marginTop: 14 }}>Projects</h2>
            {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0, padding: '8px 10px', background: '#1f2937', borderRadius: 6 }}><p style={{ fontWeight: 700, fontSize: 10.5, color: 'white' }}>{p.name}</p>{p.description && <p style={{ color: '#9ca3af', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}
          </div>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Skills</h2>
            {skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5, color: '#e5e7eb' }}>{s.name}</span><span style={{ fontSize: 8, color: tc }}>{s.level}%</span></div><div style={{ height: 3, background: '#374151', borderRadius: 2 }}><div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level}%` }} /></div></div>)}
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, marginTop: 14 }}>Education</h2>
            {edu.map(e => <div key={e.id} style={{ marginBottom: 8, padding: '8px 10px', background: '#1f2937', borderRadius: 6 }}><p style={{ fontWeight: 700, fontSize: 10, color: 'white' }}>{e.degree}</p><p style={{ color: '#9ca3af', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#6b7280', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 69: Blush ── Soft blush pink
export function BlushTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#db2777' } = resume
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
      <div style={{ background: `linear-gradient(to bottom right, #fdf2f8, #fce7f3)`, padding: '26px 32px 20px', borderBottom: `3px solid ${tc}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}40`, flexShrink: 0 }} />}
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 900, color: '#1a1a2e', marginBottom: 3 }}>{name}</h1>
            <p style={{ fontSize: 12, color: tc, fontWeight: 700, marginBottom: 8 }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#666' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>)}
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 32px 40px' }}>
        <p style={{ color: '#444', lineHeight: 1.8, marginBottom: 16, padding: '12px 16px', background: '#fdf2f8', borderRadius: 8 }}>{summary}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }}>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Experience</h2>
            {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777', background: '#fdf2f8', padding: '2px 8px', borderRadius: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, marginTop: 14 }}>Projects</h2>
            {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}
          </div>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Skills</h2>
            {skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 4, background: '#fce7f3', borderRadius: 999 }}><div style={{ height: 4, background: tc, borderRadius: 999, width: `${s.level}%` }} /></div></div>)}
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, marginTop: 14 }}>Education</h2>
            {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 70: Onyx ── Onyx black luxury
export function OnyxTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#d4af37' } = resume
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
    <div style={{ background: '#0a0a0a', color: '#e5e5e5', fontFamily: 'Georgia, serif', fontSize: 10.5, lineHeight: 1.6, minHeight: '297mm' }}>
      <div style={{ padding: '30px 34px 22px', borderBottom: `1px solid ${tc}40`, display: 'flex', alignItems: 'center', gap: 22 }}>
        {photo && <img src={photo} alt="" style={{ width: 76, height: 76, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${tc}`, boxShadow: `0 0 20px ${tc}30`, flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 400, color: 'white', letterSpacing: '0.06em', marginBottom: 4 }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontStyle: 'italic', letterSpacing: '0.08em', marginBottom: 10 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 16px', fontSize: 9.5, color: '#666' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 34px 40px' }}>
        <p style={{ color: '#9ca3af', lineHeight: 1.9, marginBottom: 20, fontStyle: 'italic', borderBottom: `1px solid ${tc}20`, paddingBottom: 16 }}>{summary}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 24 }}>
          <div>
            <h2 style={{ fontSize: 8.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 14 }}>Experience</h2>
            {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 700, fontSize: 11.5, color: 'white' }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontStyle: 'italic' }}>{e.company}</p></div><p style={{ fontSize: 9, color: '#555', fontStyle: 'italic' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#9ca3af', fontSize: 10, lineHeight: 1.7 }}>{l}</p>)}</div>)}
            <h2 style={{ fontSize: 8.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 14, marginTop: 18 }}>Projects</h2>
            {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0 }}><p style={{ fontWeight: 700, fontSize: 11, color: 'white' }}>{p.name}</p>{p.description && <p style={{ color: '#9ca3af', fontSize: 10, lineHeight: 1.7 }}>{p.description}</p>}</div>)}
          </div>
          <div>
            <h2 style={{ fontSize: 8.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 14 }}>Skills</h2>
            {skl.map(s => <div key={s.id} style={{ marginBottom: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5, color: '#e5e5e5' }}>{s.name}</span><span style={{ fontSize: 8, color: tc }}>{s.level}%</span></div><div style={{ height: 2, background: '#1f1f1f', borderRadius: 1 }}><div style={{ height: 2, background: tc, borderRadius: 1, width: `${s.level}%` }} /></div></div>)}
            <h2 style={{ fontSize: 8.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 14, marginTop: 18 }}>Education</h2>
            {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10.5, color: 'white' }}>{e.degree}</p><p style={{ color: '#9ca3af', fontSize: 10, fontStyle: 'italic' }}>{e.school}</p><p style={{ color: '#555', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 71: Terracotta ── Earthy terracotta
export function TerracottaTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#c2410c' } = resume
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
    <div style={{ background: '#fff7ed', fontFamily: 'Georgia, serif', fontSize: 10.5, lineHeight: 1.65, minHeight: '297mm' }}>
      <div style={{ background: tc, padding: '26px 32px 20px', color: 'white', display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.3)', flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 4 }}>{name}</h1>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', marginBottom: 10 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: 'rgba(255,255,255,0.8)' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 32px 40px' }}>
        <p style={{ color: '#7c2d12', lineHeight: 1.85, marginBottom: 18, fontStyle: 'italic', borderBottom: `1px solid ${tc}30`, paddingBottom: 14 }}>{summary}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 24 }}>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, marginBottom: 12 }}>Experience</h2>
            {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 700, fontSize: 11.5 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontStyle: 'italic' }}>{e.company}</p></div><p style={{ fontSize: 9, color: '#999', fontStyle: 'italic' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#7c2d12', fontSize: 10, lineHeight: 1.7 }}>{l}</p>)}</div>)}
            <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, marginBottom: 12, marginTop: 16 }}>Projects</h2>
            {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0 }}><p style={{ fontWeight: 700, fontSize: 11 }}>{p.name}</p>{p.description && <p style={{ color: '#7c2d12', fontSize: 10, lineHeight: 1.7 }}>{p.description}</p>}</div>)}
          </div>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, marginBottom: 12 }}>Skills</h2>
            {skl.map(s => <div key={s.id} style={{ marginBottom: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 4, background: `${tc}20`, borderRadius: 999 }}><div style={{ height: 4, background: `${tc}80`, borderRadius: 999, width: `${s.level}%` }} /></div></div>)}
            <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, marginBottom: 12, marginTop: 16 }}>Education</h2>
            {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{e.degree}</p><p style={{ color: '#888', fontSize: 10, fontStyle: 'italic' }}>{e.school}</p><p style={{ color: '#aaa', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 72: Arctic ── Cool arctic white & blue
export function ArcticTemplate({ resume }) {
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
  return (
    <div style={{ background: '#f0f9ff', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', padding: '24px 28px 40px' }}>
      <div style={{ background: 'white', borderRadius: 12, padding: '20px 24px', marginBottom: 14, boxShadow: `0 2px 16px ${tc}15`, display: 'flex', alignItems: 'center', gap: 18 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}40`, flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: '#0c4a6e', marginBottom: 3 }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontWeight: 700, marginBottom: 8 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#666' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ background: `${tc}08`, borderRadius: 12, padding: '14px 18px', marginBottom: 14 }}><p style={{ color: '#444', fontSize: 10.5, lineHeight: 1.8 }}>{summary}</p></div>
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 14 }}>
        <div>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', marginBottom: 14, boxShadow: `0 2px 12px ${tc}10` }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Experience</h2>
            {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777', background: `${tc}10`, padding: '2px 8px', borderRadius: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
          </div>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', boxShadow: `0 2px 12px ${tc}10` }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Projects</h2>
            {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}
          </div>
        </div>
        <div>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', marginBottom: 14, boxShadow: `0 2px 12px ${tc}10` }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Skills</h2>
            {skl.map(s => <div key={s.id} style={{ marginBottom: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 4, background: '#e0f2fe', borderRadius: 999 }}><div style={{ height: 4, background: tc, borderRadius: 999, width: `${s.level}%` }} /></div></div>)}
          </div>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', boxShadow: `0 2px 12px ${tc}10` }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Education</h2>
            {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 73: Velvet ── Deep velvet purple
export function VelvetTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#7e22ce' } = resume
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
    <div style={{ background: '#1a0533', color: '#e9d5ff', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      <div style={{ padding: '28px 32px 20px', borderBottom: `1px solid ${tc}40`, display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}`, flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: 'white', marginBottom: 4 }}>{name}</h1>
          <p style={{ fontSize: 12, color: tc, fontWeight: 700, marginBottom: 10 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9.5, color: '#9f7aea' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 32px 40px' }}>
        <div style={{ marginBottom: 16, padding: '12px 16px', background: '#2d1b4e', borderRadius: 8, borderLeft: `3px solid ${tc}` }}><p style={{ color: '#c4b5fd', fontSize: 10.5, lineHeight: 1.8 }}>{summary}</p></div>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }}>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Experience</h2>
            {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, padding: '10px 12px', background: '#2d1b4e', borderRadius: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11, color: 'white' }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#9f7aea' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#c4b5fd', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, marginTop: 14 }}>Projects</h2>
            {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0, padding: '8px 10px', background: '#2d1b4e', borderRadius: 6 }}><p style={{ fontWeight: 700, fontSize: 10.5, color: 'white' }}>{p.name}</p>{p.description && <p style={{ color: '#c4b5fd', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}
          </div>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Skills</h2>
            {skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5, color: '#e9d5ff' }}>{s.name}</span><span style={{ fontSize: 8, color: tc }}>{s.level}%</span></div><div style={{ height: 3, background: '#2d1b4e', borderRadius: 2 }}><div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level}%` }} /></div></div>)}
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, marginTop: 14 }}>Education</h2>
            {edu.map(e => <div key={e.id} style={{ marginBottom: 8, padding: '8px 10px', background: '#2d1b4e', borderRadius: 6 }}><p style={{ fontWeight: 700, fontSize: 10, color: 'white' }}>{e.degree}</p><p style={{ color: '#c4b5fd', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#9f7aea', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 74-100: Remaining templates as color/style variants ──
export function EmeraldTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#059669'} bg="white" headerBg={resume.themeColor || '#059669'} name="Emerald" /> }
export function SapphireTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#1e40af'} bg="white" headerBg={resume.themeColor || '#1e40af'} name="Sapphire" /> }
export function RubyTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#be123c'} bg="white" headerBg={resume.themeColor || '#be123c'} name="Ruby" /> }
export function TopazTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#b45309'} bg="white" headerBg={resume.themeColor || '#b45309'} name="Topaz" /> }
export function OpalTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#0891b2'} bg="white" headerBg={resume.themeColor || '#0891b2'} name="Opal" /> }
export function GarnetTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#9f1239'} bg="white" headerBg={resume.themeColor || '#9f1239'} name="Garnet" /> }
export function CitrineTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#ca8a04'} bg="white" headerBg={resume.themeColor || '#ca8a04'} name="Citrine" /> }
export function AmethystTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#7c3aed'} bg="white" headerBg={resume.themeColor || '#7c3aed'} name="Amethyst" /> }
export function TurquoiseTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#0d9488'} bg="white" headerBg={resume.themeColor || '#0d9488'} name="Turquoise" /> }
export function PearlTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#64748b'} bg="#f8fafc" headerBg={resume.themeColor || '#64748b'} name="Pearl" /> }
export function BronzeTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#92400e'} bg="white" headerBg={resume.themeColor || '#92400e'} name="Bronze" /> }
export function SilverTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#475569'} bg="white" headerBg={resume.themeColor || '#475569'} name="Silver" /> }
export function GoldTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#d97706'} bg="white" headerBg={resume.themeColor || '#d97706'} name="Gold" /> }
export function PlatinumTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#334155'} bg="white" headerBg={resume.themeColor || '#334155'} name="Platinum" /> }
export function DiamondTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#0ea5e9'} bg="white" headerBg={resume.themeColor || '#0ea5e9'} name="Diamond" /> }
export function ObsidianTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#1e293b'} bg="white" headerBg={resume.themeColor || '#1e293b'} name="Obsidian" /> }
export function MalachiteTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#166534'} bg="white" headerBg={resume.themeColor || '#166534'} name="Malachite" /> }
export function CoralReefTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#e11d48'} bg="white" headerBg={resume.themeColor || '#e11d48'} name="Coral Reef" /> }
export function AzureTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#2563eb'} bg="white" headerBg={resume.themeColor || '#2563eb'} name="Azure" /> }
export function MarigoldTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#d97706'} bg="#fffbeb" headerBg={resume.themeColor || '#d97706'} name="Marigold" /> }
export function LilacTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#9333ea'} bg="#faf5ff" headerBg={resume.themeColor || '#9333ea'} name="Lilac" /> }
export function PeachTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#ea580c'} bg="#fff7ed" headerBg={resume.themeColor || '#ea580c'} name="Peach" /> }
export function SkyTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#0284c7'} bg="#f0f9ff" headerBg={resume.themeColor || '#0284c7'} name="Sky" /> }
export function DawnTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#db2777'} bg="#fdf2f8" headerBg={resume.themeColor || '#db2777'} name="Dawn" /> }
export function DuskTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#4338ca'} bg="#eef2ff" headerBg={resume.themeColor || '#4338ca'} name="Dusk" /> }
export function NightTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#818cf8'} bg="#0f172a" headerBg="#1e293b" name="Night" dark /> }
export function TwilightTemplate({ resume }) { return <ColorVariantTemplate resume={resume} tc={resume.themeColor || '#a78bfa'} bg="#1e1b4b" headerBg="#312e81" name="Twilight" dark /> }

// Shared color variant component
function ColorVariantTemplate({ resume, tc, bg, headerBg, name: tname, dark = false }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [] } = resume
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const textColor = dark ? '#e2e8f0' : '#111'
  const subColor = dark ? '#94a3b8' : '#444'
  const cardBg = dark ? 'rgba(255,255,255,0.05)' : 'white'
  const cardBorder = dark ? 'rgba(255,255,255,0.1)' : `${tc}20`
  return (
    <div style={{ background: bg, fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      <div style={{ background: headerBg, padding: '26px 32px 20px', color: 'white', display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.35)', flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 900, marginBottom: 3 }}>{name}</h1>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontWeight: 600, marginBottom: 8 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: 'rgba(255,255,255,0.75)' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 32px 40px' }}>
        <p style={{ color: subColor, lineHeight: 1.8, marginBottom: 16, padding: '12px 16px', background: `${tc}08`, borderRadius: 8, borderLeft: `4px solid ${tc}` }}>{summary}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }}>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Experience</h2>
            {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, padding: '8px 10px', background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11, color: textColor }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: subColor, fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, marginTop: 14 }}>Projects</h2>
            {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5, color: textColor }}>{p.name}</p>{p.description && <p style={{ color: subColor, fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}
          </div>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Skills</h2>
            {skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5, color: textColor }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 3, background: dark ? '#1e293b' : '#eee', borderRadius: 2 }}><div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level}%` }} /></div></div>)}
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, marginTop: 14 }}>Education</h2>
            {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10, color: textColor }}>{e.degree}</p><p style={{ color: subColor, fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}
