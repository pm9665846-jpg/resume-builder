import { Mail, Phone, MapPin, Globe, Link2, Award } from 'lucide-react'
const S = {
  name: 'Prachi Mishra', jobTitle: 'Software Engineer', email: 'prachi@email.com', phone: '+91 98765 43210', location: 'Mumbai, India',
  summary: 'Senior Software Engineer with 4+ years building scalable full-stack applications. Led teams, reduced latency by 40%, shipped products used by 500K+ users.',
  experience: [{ id: 's1', role: 'Senior Engineer', company: 'Google India', location: 'Bengaluru', startDate: 'Jan 2022', endDate: '', current: true, description: '• Architected microservices handling 15M+ API requests/day\n• Led Payments 2.0 reducing failures by 35%' }, { id: 's2', role: 'Software Engineer', company: 'Razorpay', location: 'Bengaluru', startDate: 'Jul 2020', endDate: 'Dec 2021', current: false, description: '• Built merchant dashboard for 200K+ merchants\n• Optimized queries from 800ms to 120ms' }],
  education: [{ id: 'e1', degree: 'B.Tech Computer Science', school: 'IIT Bombay', startDate: '2015', endDate: '2019', gpa: '9.2/10' }],
  skills: [{ id: 'sk1', name: 'JavaScript', level: 95 }, { id: 'sk2', name: 'React', level: 92 }, { id: 'sk3', name: 'Node.js', level: 90 }, { id: 'sk4', name: 'Python', level: 80 }, { id: 'sk5', name: 'AWS', level: 78 }, { id: 'sk6', name: 'Docker', level: 75 }],
  projects: [{ id: 'p1', name: 'ResumeAI', tech: 'Next.js, MySQL, OpenAI', link: 'resumeai.vercel.app', description: 'AI resume builder with 13 templates. 2,000+ users in first month.' }],
  certifications: [{ id: 'c1', name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', date: '2023-04' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}
function g(v, f) { return v && String(v).trim() !== '' ? v : f }

// ── Template 29: Architect ── Blueprint grid lines
export function ArchitectTemplate({ resume }) {
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
    <div style={{ background: '#f0f4ff', backgroundImage: `linear-gradient(${tc}10 1px, transparent 1px), linear-gradient(90deg, ${tc}10 1px, transparent 1px)`, backgroundSize: '24px 24px', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', padding: '24px 28px 40px' }}>
      <div style={{ background: 'white', borderRadius: 0, padding: '20px 24px', marginBottom: 16, borderTop: `4px solid ${tc}`, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: 18 }}>
        {photo && <img src={photo} alt="" style={{ width: 70, height: 70, borderRadius: 4, objectFit: 'cover', border: `3px solid ${tc}`, flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: '#111', marginBottom: 3 }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontWeight: 700, marginBottom: 8 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#555' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ background: 'white', padding: '14px 18px', marginBottom: 14, borderLeft: `4px solid ${tc}`, boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}><p style={{ color: '#444', fontSize: 10.5, lineHeight: 1.8 }}>{summary}</p></div>
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 14 }}>
        <div>
          <div style={{ background: 'white', padding: '16px 18px', marginBottom: 14, boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Experience</h2>
            {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777', fontFamily: 'monospace' }}>{e.startDate} — {e.current ? 'NOW' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
          </div>
          <div style={{ background: 'white', padding: '16px 18px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Projects</h2>
            {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}
          </div>
        </div>
        <div>
          <div style={{ background: 'white', padding: '16px 18px', marginBottom: 14, boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Skills</h2>
            {skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999', fontFamily: 'monospace' }}>{s.level}%</span></div><div style={{ height: 3, background: '#e5e7eb', borderRadius: 0 }}><div style={{ height: 3, background: tc, borderRadius: 0, width: `${s.level}%` }} /></div></div>)}
          </div>
          <div style={{ background: 'white', padding: '16px 18px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Education</h2>
            {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9, fontFamily: 'monospace' }}>{e.startDate} — {e.endDate}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Template 30: Watercolor ── Soft watercolor wash header
export function WatercolorTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#ec4899' } = resume
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
    <div style={{ background: 'white', fontFamily: "'Georgia', serif", fontSize: 10.5, lineHeight: 1.6, minHeight: '297mm' }}>
      <div style={{ background: `radial-gradient(ellipse at 30% 50%, ${tc}30 0%, ${tc}10 40%, transparent 70%), radial-gradient(ellipse at 80% 20%, ${tc}20 0%, transparent 60%)`, padding: '30px 32px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {photo && <img src={photo} alt="" style={{ width: 76, height: 76, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}60`, flexShrink: 0 }} />}
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 400, color: '#1a1a2e', letterSpacing: '0.04em', marginBottom: 4 }}>{name}</h1>
            <p style={{ fontSize: 12, color: tc, fontWeight: 600, fontStyle: 'italic', marginBottom: 10 }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#666' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>)}
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 32px 40px' }}>
        <p style={{ fontStyle: 'italic', color: '#555', lineHeight: 1.85, marginBottom: 18, borderBottom: `1px solid ${tc}30`, paddingBottom: 14 }}>{summary}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 24 }}>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 12 }}>Experience</h2>
            {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 700, fontSize: 11.5 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontStyle: 'italic' }}>{e.company}</p></div><p style={{ fontSize: 9, color: '#999', fontStyle: 'italic' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 10, lineHeight: 1.7 }}>{l}</p>)}</div>)}
            <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 12, marginTop: 16 }}>Projects</h2>
            {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0 }}><p style={{ fontWeight: 700, fontSize: 11 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 10, lineHeight: 1.7 }}>{p.description}</p>}</div>)}
          </div>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 12 }}>Skills</h2>
            {skl.map(s => <div key={s.id} style={{ marginBottom: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 4, background: `${tc}15`, borderRadius: 999 }}><div style={{ height: 4, background: `${tc}70`, borderRadius: 999, width: `${s.level}%` }} /></div></div>)}
            <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 12, marginTop: 16 }}>Education</h2>
            {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 10, fontStyle: 'italic' }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Template 31: Neon Sidebar ── Dark sidebar with neon accents
export function NeonSidebarTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#00ff88' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const certs = certifications.length > 0 ? certifications : S.certifications
  const langs = languages.length > 0 ? languages : S.languages
  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', display: 'flex' }}>
      <div style={{ width: '34%', background: '#0a0a0f', padding: '24px 16px 40px', color: 'white', flexShrink: 0 }}>
        <div style={{ marginBottom: 20 }}>
          {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${tc}`, boxShadow: `0 0 16px ${tc}60`, marginBottom: 12 }} />}
          <h1 style={{ fontSize: 15, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 4 }}>{name}</h1>
          <p style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginBottom: 12 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 8.5, color: '#94a3b8' }}><I size={8} color={tc} /><span>{v}</span></div>)}
          </div>
        </div>
        <div style={{ marginBottom: 16 }}><h3 style={{ fontSize: 8, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, marginBottom: 8 }}>Skills</h3>{skl.map(s => <div key={s.id} style={{ marginBottom: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9, color: '#e2e8f0' }}>{s.name}</span><span style={{ fontSize: 7.5, color: tc }}>{s.level}%</span></div><div style={{ height: 3, background: '#1e293b', borderRadius: 2 }}><div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level}%`, boxShadow: `0 0 4px ${tc}` }} /></div></div>)}</div>
        <div style={{ marginBottom: 16 }}><h3 style={{ fontSize: 8, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, marginBottom: 8 }}>Education</h3>{edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 9.5, color: 'white' }}>{e.degree}</p><p style={{ color: '#94a3b8', fontSize: 8.5 }}>{e.school}</p><p style={{ color: '#64748b', fontSize: 8 }}>{e.startDate} — {e.endDate}</p></div>)}</div>
        <div style={{ marginBottom: 16 }}><h3 style={{ fontSize: 8, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, marginBottom: 8 }}>Certifications</h3>{certs.map(c => <div key={c.id} style={{ marginBottom: 6 }}><p style={{ fontSize: 9, color: 'white', fontWeight: 600 }}>{c.name}</p><p style={{ color: '#64748b', fontSize: 8 }}>{c.issuer}</p></div>)}</div>
        <div><h3 style={{ fontSize: 8, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, marginBottom: 8 }}>Languages</h3>{langs.map(l => <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}><span style={{ fontSize: 9.5, color: '#e2e8f0', fontWeight: 600 }}>{l.name}</span><span style={{ fontSize: 8.5, color: '#64748b' }}>{l.proficiency}</span></div>)}</div>
      </div>
      <div style={{ flex: 1, padding: '24px 22px 40px' }}>
        <p style={{ color: '#444', fontSize: 10.5, lineHeight: 1.8, marginBottom: 16, padding: '12px 14px', background: `${tc}08`, borderLeft: `3px solid ${tc}`, borderRadius: '0 8px 8px 0' }}>{summary}</p>
        <div style={{ marginBottom: 16 }}><h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Experience</h2>{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777', background: `${tc}12`, padding: '2px 8px', borderRadius: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}</div>
        <div><h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Projects</h2>{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0, padding: '8px 10px', background: `${tc}06`, border: `1px solid ${tc}18`, borderRadius: 6 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}</div>
      </div>
    </div>
  )
}

// ── Template 32: Minimalist Pro ── Ultra minimal, lots of whitespace
export function MinimalistProTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#111827' } = resume
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
    <div style={{ background: 'white', fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10.5, lineHeight: 1.6, padding: '40px 48px', minHeight: '297mm', color: '#111' }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 12 }}>
          {photo && <img src={photo} alt="" style={{ width: 68, height: 68, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />}
          <div>
            <h1 style={{ fontSize: 30, fontWeight: 300, letterSpacing: '-0.02em', marginBottom: 4 }}>{name}</h1>
            <p style={{ fontSize: 12, color: '#666', fontWeight: 400, letterSpacing: '0.04em' }}>{jobTitle}</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 20, fontSize: 9.5, color: '#888' }}>
          {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
        </div>
      </div>
      <p style={{ color: '#555', lineHeight: 1.9, marginBottom: 28, fontSize: 11 }}>{summary}</p>
      <div style={{ marginBottom: 24 }}><h2 style={{ fontSize: 8.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#999', marginBottom: 14 }}>Experience</h2>{exp.map((e, i) => <div key={e.id} style={{ display: 'flex', gap: 20, marginBottom: i < exp.length - 1 ? 16 : 0 }}><div style={{ width: 90, flexShrink: 0, textAlign: 'right' }}><p style={{ fontSize: 9, color: '#aaa', lineHeight: 1.4 }}>{e.startDate}</p><p style={{ fontSize: 9, color: '#aaa' }}>{e.current ? 'Present' : e.endDate}</p></div><div style={{ flex: 1 }}><p style={{ fontWeight: 600, fontSize: 11.5 }}>{e.role}</p><p style={{ color: '#888', fontSize: 10, marginBottom: 4 }}>{e.company}</p>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#555', fontSize: 10, lineHeight: 1.65 }}>{l}</p>)}</div></div>)}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
        <div><h2 style={{ fontSize: 8.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#999', marginBottom: 14 }}>Education</h2>{edu.map(e => <div key={e.id}><p style={{ fontWeight: 600, fontSize: 11 }}>{e.degree}</p><p style={{ color: '#888', fontSize: 10 }}>{e.school}</p><p style={{ color: '#aaa', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}</div>
        <div><h2 style={{ fontSize: 8.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#999', marginBottom: 14 }}>Skills</h2><p style={{ color: '#555', fontSize: 10, lineHeight: 1.9 }}>{skl.map(s => s.name).join('  ·  ')}</p></div>
      </div>
      <div><h2 style={{ fontSize: 8.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#999', marginBottom: 14 }}>Projects</h2>{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 12 : 0 }}><p style={{ fontWeight: 600, fontSize: 11 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 10, lineHeight: 1.65 }}>{p.description}</p>}</div>)}</div>
    </div>
  )
}

// ── Template 33: Colorblock ── Bold color blocks for sections
export function ColorblockTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#7c3aed' } = resume
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
      <div style={{ display: 'flex', minHeight: 140 }}>
        <div style={{ background: tc, width: '55%', padding: '24px 24px 20px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {photo && <img src={photo} alt="" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)', marginBottom: 10 }} />}
          <h1 style={{ fontSize: 24, fontWeight: 900, lineHeight: 1.1, marginBottom: 4 }}>{name}</h1>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>{jobTitle}</p>
        </div>
        <div style={{ background: '#1a1a2e', width: '45%', padding: '24px 20px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6 }}>
          {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 9.5, color: 'rgba(255,255,255,0.75)' }}><I size={9} color={tc} />{v}</div>)}
        </div>
      </div>
      <div style={{ padding: '20px 28px 40px' }}>
        <div style={{ background: `${tc}08`, padding: '12px 16px', borderRadius: 8, marginBottom: 16 }}><p style={{ color: '#444', fontSize: 10.5, lineHeight: 1.8 }}>{summary}</p></div>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }}>
          <div>
            <div style={{ background: tc, color: 'white', padding: '6px 12px', borderRadius: '6px 6px 0 0', fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 0 }}>Experience</div>
            <div style={{ border: `1px solid ${tc}30`, borderTop: 'none', padding: '12px 14px', marginBottom: 14 }}>{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}</div>
            <div style={{ background: tc, color: 'white', padding: '6px 12px', borderRadius: '6px 6px 0 0', fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Projects</div>
            <div style={{ border: `1px solid ${tc}30`, borderTop: 'none', padding: '12px 14px' }}>{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}</div>
          </div>
          <div>
            <div style={{ background: '#1a1a2e', color: 'white', padding: '6px 12px', borderRadius: '6px 6px 0 0', fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Skills</div>
            <div style={{ border: '1px solid #1a1a2e30', borderTop: 'none', padding: '12px 14px', marginBottom: 14 }}>{skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 3, background: '#eee', borderRadius: 2 }}><div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level}%` }} /></div></div>)}</div>
            <div style={{ background: '#1a1a2e', color: 'white', padding: '6px 12px', borderRadius: '6px 6px 0 0', fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Education</div>
            <div style={{ border: '1px solid #1a1a2e30', borderTop: 'none', padding: '12px 14px' }}>{edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Template 34: Scandi ── Scandinavian minimal, clean lines
export function ScandiTemplate({ resume }) {
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
    <div style={{ background: '#fafaf8', fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10.5, lineHeight: 1.6, minHeight: '297mm', padding: '32px 36px 40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 24, paddingBottom: 20, borderBottom: `1px solid #e5e5e0` }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${tc}40`, flexShrink: 0 }} />}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 26, fontWeight: 300, color: '#1a1a1a', letterSpacing: '-0.01em', marginBottom: 4 }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontWeight: 500, marginBottom: 8 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 16px', fontSize: 9.5, color: '#888' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <p style={{ color: '#555', lineHeight: 1.85, marginBottom: 22, fontSize: 10.5 }}>{summary}</p>
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 28 }}>
        <div>
          <h2 style={{ fontSize: 8.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 14 }}>Experience</h2>
          {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 16 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><p style={{ fontWeight: 600, fontSize: 11 }}>{e.role}</p><p style={{ fontSize: 9, color: '#aaa' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p></div><p style={{ color: tc, fontSize: 10, marginBottom: 4 }}>{e.company}</p>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#555', fontSize: 10, lineHeight: 1.65 }}>{l}</p>)}</div>)}
          <h2 style={{ fontSize: 8.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 14, marginTop: 20 }}>Projects</h2>
          {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0 }}><p style={{ fontWeight: 600, fontSize: 11 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 10, lineHeight: 1.65 }}>{p.description}</p>}</div>)}
        </div>
        <div>
          <h2 style={{ fontSize: 8.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 14 }}>Skills</h2>
          {skl.map(s => <div key={s.id} style={{ marginBottom: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 10 }}>{s.name}</span><span style={{ fontSize: 8.5, color: '#aaa' }}>{s.level}%</span></div><div style={{ height: 2, background: '#e5e5e0', borderRadius: 1 }}><div style={{ height: 2, background: tc, borderRadius: 1, width: `${s.level}%` }} /></div></div>)}
          <h2 style={{ fontSize: 8.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 14, marginTop: 20 }}>Education</h2>
          {edu.map(e => <div key={e.id} style={{ marginBottom: 10 }}><p style={{ fontWeight: 600, fontSize: 11 }}>{e.degree}</p><p style={{ color: '#888', fontSize: 10 }}>{e.school}</p><p style={{ color: '#aaa', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
        </div>
      </div>
    </div>
  )
}
