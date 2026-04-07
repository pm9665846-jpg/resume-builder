import { Mail, Phone, MapPin, Globe, Link2, Award } from 'lucide-react'
const S = {
  name: 'Prachi Mishra', jobTitle: 'Software Engineer', email: 'prachi@email.com', phone: '+91 98765 43210', location: 'Mumbai, India',
  summary: 'Senior Software Engineer with 4+ years building scalable full-stack applications. Led teams, reduced latency by 40%, shipped products used by 500K+ users.',
  experience: [{ id: 's1', role: 'Senior Engineer', company: 'Google India', location: 'Bengaluru', startDate: 'Jan 2022', endDate: '', current: true, description: '• Architected microservices handling 15M+ API requests/day\n• Led Payments 2.0 reducing failures by 35%' }, { id: 's2', role: 'Software Engineer', company: 'Razorpay', location: 'Bengaluru', startDate: 'Jul 2020', endDate: 'Dec 2021', current: false, description: '• Built merchant dashboard for 200K+ merchants\n• Optimized queries from 800ms to 120ms' }],
  education: [{ id: 'e1', degree: 'B.Tech Computer Science', school: 'IIT Bombay', startDate: '2015', endDate: '2019', gpa: '9.2/10' }],
  skills: [{ id: 'sk1', name: 'JavaScript', level: 95 }, { id: 'sk2', name: 'React', level: 92 }, { id: 'sk3', name: 'Node.js', level: 90 }, { id: 'sk4', name: 'Python', level: 80 }, { id: 'sk5', name: 'AWS', level: 78 }, { id: 'sk6', name: 'Docker', level: 75 }],
  projects: [{ id: 'p1', name: 'ResumeAI', tech: 'Next.js, MySQL, OpenAI', link: 'resumeai.vercel.app', description: 'AI resume builder with 45 templates. 2,000+ users in first month.' }],
  certifications: [{ id: 'c1', name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', date: '2023-04' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}
function g(v, f) { return v && String(v).trim() !== '' ? v : f }
const SH = (tc) => ({ title }) => <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}><h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, whiteSpace: 'nowrap' }}>{title}</h2><div style={{ flex: 1, height: 1.5, background: `${tc}35` }} /></div>

// ── 46: Indigo ── Deep indigo sidebar
export function IndigoTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#4338ca' } = resume
  const tc = themeColor, H = SH(tc)
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
      <div style={{ width: '36%', background: '#1e1b4b', padding: '26px 16px 40px', flexShrink: 0 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}`, marginBottom: 14 }} />}
        <h1 style={{ fontSize: 15, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 4 }}>{name}</h1>
        <p style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginBottom: 14 }}>{jobTitle}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 18 }}>
          {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 8.5, color: '#a5b4fc' }}><I size={8} color={tc} />{v}</div>)}
        </div>
        <h3 style={{ fontSize: 8, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 8 }}>Skills</h3>
        {skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9, color: '#c7d2fe' }}>{s.name}</span><span style={{ fontSize: 7.5, color: '#6366f1' }}>{s.level}%</span></div><div style={{ height: 3, background: '#312e81', borderRadius: 2 }}><div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level}%` }} /></div></div>)}
        <h3 style={{ fontSize: 8, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 8, marginTop: 14 }}>Education</h3>
        {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 9.5, color: 'white' }}>{e.degree}</p><p style={{ color: '#a5b4fc', fontSize: 8.5 }}>{e.school}</p><p style={{ color: '#6366f1', fontSize: 8 }}>{e.startDate} — {e.endDate}</p></div>)}
      </div>
      <div style={{ flex: 1, padding: '24px 22px 40px' }}>
        <p style={{ color: '#444', fontSize: 10.5, lineHeight: 1.8, marginBottom: 16, padding: '12px 14px', background: `${tc}08`, borderRadius: 8 }}>{summary}</p>
        <div style={{ marginBottom: 16 }}><H title="Experience" />{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}</div>
        <H title="Projects" />{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0, padding: '8px 10px', background: `${tc}06`, border: `1px solid ${tc}18`, borderRadius: 6 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}
      </div>
    </div>
  )
}

// ── 47: Crimson ── Bold crimson header
export function CrimsonTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#b91c1c' } = resume
  const tc = themeColor, H = SH(tc)
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
      <div style={{ background: tc, padding: '26px 32px 20px', color: 'white', display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)', flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 900, marginBottom: 3 }}>{name}</h1>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontWeight: 600, marginBottom: 8 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: 'rgba(255,255,255,0.8)' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 32px 40px' }}>
        <p style={{ color: '#444', lineHeight: 1.8, marginBottom: 16, borderLeft: `4px solid ${tc}`, paddingLeft: 14 }}>{summary}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }}>
          <div>
            <H title="Experience" />{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
            <div style={{ marginTop: 14 }}><H title="Projects" />{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}</div>
          </div>
          <div>
            <H title="Skills" />{skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 3, background: '#fee2e2', borderRadius: 2 }}><div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level}%` }} /></div></div>)}
            <div style={{ marginTop: 14 }}><H title="Education" />{edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 48: Teal ── Teal & white clean layout
export function TealTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#0d9488' } = resume
  const tc = themeColor, H = SH(tc)
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
      <div style={{ display: 'flex', alignItems: 'stretch', minHeight: 130 }}>
        <div style={{ background: tc, width: 10, flexShrink: 0 }} />
        <div style={{ flex: 1, padding: '24px 28px 20px', borderBottom: `1px solid ${tc}20` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}`, flexShrink: 0 }} />}
            <div>
              <h1 style={{ fontSize: 26, fontWeight: 900, color: '#111', marginBottom: 3 }}>{name}</h1>
              <p style={{ fontSize: 12, color: tc, fontWeight: 700, marginBottom: 8 }}>{jobTitle}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#555' }}>
                {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 28px 40px' }}>
        <p style={{ color: '#444', lineHeight: 1.8, marginBottom: 16, padding: '12px 16px', background: `${tc}08`, borderRadius: 8 }}>{summary}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }}>
          <div>
            <H title="Experience" />{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
            <div style={{ marginTop: 14 }}><H title="Projects" />{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}</div>
          </div>
          <div>
            <H title="Skills" />{skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 4, background: `${tc}15`, borderRadius: 999 }}><div style={{ height: 4, background: tc, borderRadius: 999, width: `${s.level}%` }} /></div></div>)}
            <div style={{ marginTop: 14 }}><H title="Education" />{edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 49: Midnight ── Midnight blue dark theme
export function MidnightTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#818cf8' } = resume
  const tc = themeColor, H = SH(tc)
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  return (
    <div style={{ background: '#0f172a', color: '#e2e8f0', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      <div style={{ padding: '28px 32px 20px', borderBottom: `1px solid #1e293b`, display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}`, flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: 'white', marginBottom: 4 }}>{name}</h1>
          <p style={{ fontSize: 12, color: tc, fontWeight: 700, marginBottom: 10 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9.5, color: '#64748b' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 32px 40px' }}>
        <div style={{ marginBottom: 16, padding: '12px 16px', background: '#1e293b', borderRadius: 8, borderLeft: `3px solid ${tc}` }}><p style={{ color: '#94a3b8', fontSize: 10.5, lineHeight: 1.8 }}>{summary}</p></div>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }}>
          <div>
            <H title="Experience" />{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, padding: '10px 12px', background: '#1e293b', borderRadius: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11, color: 'white' }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#475569' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#94a3b8', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
            <div style={{ marginTop: 14 }}><H title="Projects" />{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0, padding: '8px 10px', background: '#1e293b', borderRadius: 6 }}><p style={{ fontWeight: 700, fontSize: 10.5, color: 'white' }}>{p.name}</p>{p.description && <p style={{ color: '#94a3b8', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}</div>
          </div>
          <div>
            <H title="Skills" />{skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5, color: '#e2e8f0' }}>{s.name}</span><span style={{ fontSize: 8, color: tc }}>{s.level}%</span></div><div style={{ height: 3, background: '#1e293b', borderRadius: 2 }}><div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level}%` }} /></div></div>)}
            <div style={{ marginTop: 14 }}><H title="Education" />{edu.map(e => <div key={e.id} style={{ marginBottom: 8, padding: '8px 10px', background: '#1e293b', borderRadius: 6 }}><p style={{ fontWeight: 700, fontSize: 10, color: 'white' }}>{e.degree}</p><p style={{ color: '#94a3b8', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#475569', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 50: Sunrise ── Warm sunrise gradient
export function SunriseTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#ea580c' } = resume
  const tc = themeColor, H = SH(tc)
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
      <div style={{ background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 40%, #ef4444 100%)', padding: '28px 32px 22px', color: 'white', display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo && <img src={photo} alt="" style={{ width: 76, height: 76, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.5)', flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 900, marginBottom: 4 }}>{name}</h1>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.9)', fontWeight: 600, marginBottom: 10 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: 'rgba(255,255,255,0.85)' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 32px 40px' }}>
        <p style={{ color: '#444', lineHeight: 1.8, marginBottom: 16, padding: '12px 16px', background: '#fff7ed', borderRadius: 8, borderLeft: `4px solid ${tc}` }}>{summary}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }}>
          <div>
            <H title="Experience" />{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777', background: '#fff7ed', padding: '2px 8px', borderRadius: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
            <div style={{ marginTop: 14 }}><H title="Projects" />{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}</div>
          </div>
          <div>
            <H title="Skills" />{skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 4, background: '#fff7ed', borderRadius: 999 }}><div style={{ height: 4, background: `linear-gradient(to right, #fbbf24, ${tc})`, borderRadius: 999, width: `${s.level}%` }} /></div></div>)}
            <div style={{ marginTop: 14 }}><H title="Education" />{edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 51: Lavender ── Soft lavender tones
export function LavenderTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#7c3aed' } = resume
  const tc = themeColor, H = SH(tc)
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  return (
    <div style={{ background: '#faf5ff', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', padding: '24px 28px 40px' }}>
      <div style={{ background: 'white', borderRadius: 16, padding: '20px 24px', marginBottom: 14, border: `1px solid ${tc}20`, display: 'flex', alignItems: 'center', gap: 18 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}40`, flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: '#1a1a2e', marginBottom: 3 }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontWeight: 700, marginBottom: 8 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#666' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ background: `${tc}08`, borderRadius: 12, padding: '14px 18px', marginBottom: 14 }}><p style={{ color: '#444', fontSize: 10.5, lineHeight: 1.8 }}>{summary}</p></div>
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 14 }}>
        <div>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', marginBottom: 14, border: `1px solid ${tc}15` }}>
            <H title="Experience" />{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#999', background: `${tc}10`, padding: '2px 8px', borderRadius: 999 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
          </div>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', border: `1px solid ${tc}15` }}>
            <H title="Projects" />{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}
          </div>
        </div>
        <div>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', marginBottom: 14, border: `1px solid ${tc}15` }}>
            <H title="Skills" />{skl.map(s => <div key={s.id} style={{ marginBottom: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 4, background: `${tc}15`, borderRadius: 999 }}><div style={{ height: 4, background: tc, borderRadius: 999, width: `${s.level}%` }} /></div></div>)}
          </div>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', border: `1px solid ${tc}15` }}>
            <H title="Education" />{edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 52: Copper ── Metallic copper tones
export function CopperTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#b45309' } = resume
  const tc = themeColor, H = SH(tc)
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  return (
    <div style={{ background: '#fffbf5', fontFamily: 'Georgia, serif', fontSize: 10.5, lineHeight: 1.6, minHeight: '297mm' }}>
      <div style={{ background: `linear-gradient(to right, #1c1917, #292524)`, padding: '26px 32px 20px', color: 'white', display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}`, flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 4 }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontWeight: 600, marginBottom: 10 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#a8a29e' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 32px 40px' }}>
        <p style={{ color: '#57534e', lineHeight: 1.85, marginBottom: 18, fontStyle: 'italic', borderBottom: `1px solid ${tc}30`, paddingBottom: 14 }}>{summary}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 24 }}>
          <div>
            <H title="Experience" />{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 700, fontSize: 11.5 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontStyle: 'italic' }}>{e.company}</p></div><p style={{ fontSize: 9, color: '#999', fontStyle: 'italic' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#57534e', fontSize: 10, lineHeight: 1.7 }}>{l}</p>)}</div>)}
            <div style={{ marginTop: 16 }}><H title="Projects" />{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0 }}><p style={{ fontWeight: 700, fontSize: 11 }}>{p.name}</p>{p.description && <p style={{ color: '#57534e', fontSize: 10, lineHeight: 1.7 }}>{p.description}</p>}</div>)}</div>
          </div>
          <div>
            <H title="Skills" />{skl.map(s => <div key={s.id} style={{ marginBottom: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 4, background: `${tc}20`, borderRadius: 999 }}><div style={{ height: 4, background: tc, borderRadius: 999, width: `${s.level}%` }} /></div></div>)}
            <div style={{ marginTop: 16 }}><H title="Education" />{edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{e.degree}</p><p style={{ color: '#888', fontSize: 10, fontStyle: 'italic' }}>{e.school}</p><p style={{ color: '#aaa', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 53: Mint ── Fresh mint green
export function MintTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#059669' } = resume
  const tc = themeColor, H = SH(tc)
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
      <div style={{ background: `linear-gradient(to right, #ecfdf5, #d1fae5)`, padding: '26px 32px 20px', borderBottom: `3px solid ${tc}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}`, flexShrink: 0 }} />}
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 900, color: '#064e3b', marginBottom: 3 }}>{name}</h1>
            <p style={{ fontSize: 12, color: tc, fontWeight: 700, marginBottom: 8 }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#065f46' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>)}
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 32px 40px' }}>
        <p style={{ color: '#444', lineHeight: 1.8, marginBottom: 16, padding: '12px 16px', background: '#ecfdf5', borderRadius: 8 }}>{summary}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }}>
          <div>
            <H title="Experience" />{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777', background: '#ecfdf5', padding: '2px 8px', borderRadius: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
            <div style={{ marginTop: 14 }}><H title="Projects" />{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}</div>
          </div>
          <div>
            <H title="Skills" />{skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 4, background: '#d1fae5', borderRadius: 999 }}><div style={{ height: 4, background: tc, borderRadius: 999, width: `${s.level}%` }} /></div></div>)}
            <div style={{ marginTop: 14 }}><H title="Education" />{edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 54: Charcoal ── Charcoal gray professional
export function CharcoalTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#6b7280' } = resume
  const tc = themeColor, H = SH(tc)
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
      <div style={{ width: '34%', background: '#374151', padding: '26px 16px 40px', color: 'white', flexShrink: 0 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '3px solid #6b7280', marginBottom: 14 }} />}
        <h1 style={{ fontSize: 15, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 4 }}>{name}</h1>
        <p style={{ fontSize: 9.5, color: '#d1d5db', marginBottom: 14 }}>{jobTitle}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 18 }}>
          {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 8.5, color: '#9ca3af' }}><I size={8} color="#6b7280" />{v}</div>)}
        </div>
        <h3 style={{ fontSize: 8, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#9ca3af', marginBottom: 8 }}>Skills</h3>
        {skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9, color: '#e5e7eb' }}>{s.name}</span><span style={{ fontSize: 7.5, color: '#6b7280' }}>{s.level}%</span></div><div style={{ height: 3, background: '#4b5563', borderRadius: 2 }}><div style={{ height: 3, background: '#9ca3af', borderRadius: 2, width: `${s.level}%` }} /></div></div>)}
        <h3 style={{ fontSize: 8, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#9ca3af', marginBottom: 8, marginTop: 14 }}>Education</h3>
        {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 9.5, color: 'white' }}>{e.degree}</p><p style={{ color: '#9ca3af', fontSize: 8.5 }}>{e.school}</p><p style={{ color: '#6b7280', fontSize: 8 }}>{e.startDate} — {e.endDate}</p></div>)}
      </div>
      <div style={{ flex: 1, padding: '24px 22px 40px' }}>
        <p style={{ color: '#444', fontSize: 10.5, lineHeight: 1.8, marginBottom: 16, padding: '12px 14px', background: '#f9fafb', borderRadius: 8 }}>{summary}</p>
        <div style={{ marginBottom: 16 }}><H title="Experience" />{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}</div>
        <H title="Projects" />{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}
      </div>
    </div>
  )
}

// ── 55: Cobalt ── Cobalt blue accent
export function CobaltTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#1d4ed8' } = resume
  const tc = themeColor, H = SH(tc)
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
      <div style={{ background: tc, padding: '26px 32px 20px', color: 'white', display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)', flexShrink: 0 }} />}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 26, fontWeight: 900, marginBottom: 3 }}>{name}</h1>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontWeight: 600, marginBottom: 8 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: 'rgba(255,255,255,0.8)' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 32px 40px' }}>
        <p style={{ color: '#444', lineHeight: 1.8, marginBottom: 16, padding: '12px 16px', background: '#eff6ff', borderRadius: 8, borderLeft: `4px solid ${tc}` }}>{summary}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }}>
          <div>
            <H title="Experience" />{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777', background: '#eff6ff', padding: '2px 8px', borderRadius: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
            <div style={{ marginTop: 14 }}><H title="Projects" />{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}</div>
          </div>
          <div>
            <H title="Skills" />{skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 4, background: '#dbeafe', borderRadius: 999 }}><div style={{ height: 4, background: tc, borderRadius: 999, width: `${s.level}%` }} /></div></div>)}
            <div style={{ marginTop: 14 }}><H title="Education" />{edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
