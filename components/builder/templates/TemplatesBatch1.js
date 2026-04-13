import { Mail, Phone, MapPin, Globe, Link2, Award } from 'lucide-react'

const S = {
  name: 'xyz', jobTitle: 'Software Engineer',
  email: 'prachi@email.com', phone: '+91 98765 43210',
  location: 'Mumbai, India', website: 'prachidev.com', linkedin: 'linkedin.com/in/prachi',
  summary: 'Senior Software Engineer with 4+ years building scalable full-stack applications. Led teams, reduced latency by 40%, shipped products used by 500K+ users.',
  experience: [
    { id: 's1', role: 'Senior Engineer', company: 'Google India', location: 'Bengaluru', startDate: 'Jan 2022', endDate: '', current: true, description: '• Architected microservices handling 15M+ API requests/day\n• Led Payments 2.0 reducing failures by 35%\n• Mentored 3 junior engineers' },
    { id: 's2', role: 'Software Engineer', company: 'Razorpay', location: 'Bengaluru', startDate: 'Jul 2020', endDate: 'Dec 2021', current: false, description: '• Built merchant dashboard for 200K+ merchants\n• Optimized queries from 800ms to 120ms' },
  ],
  education: [{ id: 'e1', degree: 'B.Tech Computer Science', school: 'IIT Bombay', startDate: '2015', endDate: '2019', gpa: '9.2/10', achievements: "Dean's List" }],
  skills: [{ id: 'sk1', name: 'JavaScript', level: 95 }, { id: 'sk2', name: 'React', level: 92 }, { id: 'sk3', name: 'Node.js', level: 90 }, { id: 'sk4', name: 'Python', level: 80 }, { id: 'sk5', name: 'AWS', level: 78 }, { id: 'sk6', name: 'Docker', level: 75 }],
  projects: [{ id: 'p1', name: 'ResumeAI', tech: 'Next.js, MySQL, OpenAI', link: 'resumeai.vercel.app', description: 'AI resume builder with 13 templates. 2,000+ users in first month.' }],
  certifications: [{ id: 'c1', name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', date: '2023-04' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}
function g(v, f) { return v && String(v).trim() !== '' ? v : f }
function Sec({ title, tc, children }) {
  return <div style={{ marginBottom: 14 }}><div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}><h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, whiteSpace: 'nowrap' }}>{title}</h2><div style={{ flex: 1, height: 1.5, background: `${tc}35` }} /></div>{children}</div>
}

// ── Template 14: Stripe ── Clean white with colored left stripe
export function StripeTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#6366f1' } = resume
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
      <div style={{ width: 8, background: tc, flexShrink: 0 }} />
      <div style={{ flex: 1, padding: '28px 28px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, paddingBottom: 16, borderBottom: `2px solid ${tc}` }}>
          {photo && <img src={photo} alt="" style={{ width: 70, height: 70, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}`, flexShrink: 0 }} />}
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 900, color: '#111', marginBottom: 3 }}>{name}</h1>
            <p style={{ fontSize: 12, color: tc, fontWeight: 700, marginBottom: 8 }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#555' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>)}
            </div>
          </div>
        </div>
        <Sec title="Summary" tc={tc}><p style={{ color: '#444', fontSize: 10.5, lineHeight: 1.75 }}>{summary}</p></Sec>
        <Sec title="Experience" tc={tc}>{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}</Sec>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <Sec title="Skills" tc={tc}>{skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 3, background: '#eee', borderRadius: 2 }}><div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level}%` }} /></div></div>)}</Sec>
          <Sec title="Education" tc={tc}>{edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}</Sec>
        </div>
        <Sec title="Projects" tc={tc}>{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name} {p.tech && <span style={{ color: '#888', fontWeight: 400, fontSize: 9 }}>— {p.tech}</span>}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}</Sec>
      </div>
    </div>
  )
}

// ── Template 15: Sidebar Right ── Main content left, sidebar right
export function SidebarRightTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#0f766e' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const certs = certifications.length > 0 ? certifications : S.certifications
  const langs = languages.length > 0 ? languages : S.languages
  const ST = ({ c, children }) => <h3 style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: c || tc, marginBottom: 8, paddingBottom: 4, borderBottom: `2px solid ${c || tc}` }}>{children}</h3>
  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      <div style={{ background: tc, padding: '22px 28px 18px', color: 'white', display: 'flex', alignItems: 'center', gap: 18 }}>
        {photo && <img src={photo} alt="" style={{ width: 68, height: 68, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)', flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 3 }}>{name}</h1>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)', marginBottom: 8 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9, color: 'rgba(255,255,255,0.75)' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={8} />{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, padding: '20px 22px' }}>
          <div style={{ marginBottom: 14 }}><ST>Profile</ST><p style={{ color: '#444', fontSize: 10, lineHeight: 1.75 }}>{summary}</p></div>
          <div style={{ marginBottom: 14 }}><ST>Experience</ST>{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}</div>
        </div>
        <div style={{ width: '32%', background: '#f8fafc', padding: '20px 16px', borderLeft: '1px solid #e2e8f0', flexShrink: 0 }}>
          <div style={{ marginBottom: 14 }}><ST>Skills</ST>{skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 3, background: '#ddd', borderRadius: 2 }}><div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level}%` }} /></div></div>)}</div>
          <div style={{ marginBottom: 14 }}><ST>Education</ST>{edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9 }}>{e.school}</p><p style={{ color: '#999', fontSize: 8.5 }}>{e.startDate} — {e.endDate}</p></div>)}</div>
          <div style={{ marginBottom: 14 }}><ST>Certifications</ST>{certs.map(c => <div key={c.id} style={{ display: 'flex', gap: 5, marginBottom: 6 }}><Award size={9} color={tc} style={{ flexShrink: 0, marginTop: 1 }} /><div><p style={{ fontWeight: 600, fontSize: 9.5 }}>{c.name}</p><p style={{ color: '#888', fontSize: 8.5 }}>{c.issuer}</p></div></div>)}</div>
          <div><ST>Languages</ST>{langs.map(l => <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}><span style={{ fontSize: 9.5, fontWeight: 600 }}>{l.name}</span><span style={{ fontSize: 8.5, color: '#888' }}>{l.proficiency}</span></div>)}</div>
        </div>
      </div>
    </div>
  )
}

// ── Template 16: Gradient Header ── Gradient banner top
export function GradientTemplate({ resume }) {
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
      <div style={{ background: `linear-gradient(135deg, ${tc} 0%, ${tc}99 50%, #1e1b4b 100%)`, padding: '30px 32px 24px', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {photo && <img src={photo} alt="" style={{ width: 76, height: 76, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.5)', flexShrink: 0 }} />}
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 4 }}>{name}</h1>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', fontWeight: 600, marginBottom: 10 }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9.5, color: 'rgba(255,255,255,0.8)' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} />{v}</span>)}
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '22px 32px 40px' }}>
        <div style={{ marginBottom: 16, padding: '12px 16px', background: `${tc}08`, borderRadius: 8, borderLeft: `4px solid ${tc}` }}><p style={{ color: '#333', fontSize: 10.5, lineHeight: 1.8 }}>{summary}</p></div>
        <Sec title="Experience" tc={tc}>{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777', background: `${tc}12`, padding: '2px 8px', borderRadius: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}</Sec>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <Sec title="Skills" tc={tc}>{skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 3, background: '#eee', borderRadius: 2 }}><div style={{ height: 3, background: `linear-gradient(to right, ${tc}, ${tc}80)`, borderRadius: 2, width: `${s.level}%` }} /></div></div>)}</Sec>
          <Sec title="Education" tc={tc}>{edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}</Sec>
        </div>
        <Sec title="Projects" tc={tc}>{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0, padding: '8px 10px', background: `${tc}06`, border: `1px solid ${tc}18`, borderRadius: 6 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.tech && <p style={{ color: '#888', fontSize: 9, marginBottom: 2 }}>{p.tech}</p>}{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}</Sec>
      </div>
    </div>
  )
}

// ── Template 17: Card Grid ── Skills as tag chips, card-based sections
export function CardGridTemplate({ resume }) {
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
    <div style={{ background: '#f8fafc', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', padding: '24px 24px 40px' }}>
      <div style={{ background: 'white', borderRadius: 12, padding: '20px 24px', marginBottom: 16, boxShadow: '0 1px 8px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 18 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}`, flexShrink: 0 }} />}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: '#111', marginBottom: 3 }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontWeight: 700, marginBottom: 8 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#555' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ background: 'white', borderRadius: 12, padding: '16px 20px', marginBottom: 16, boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
        <p style={{ color: '#444', fontSize: 10.5, lineHeight: 1.8 }}>{summary}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
          <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>{skl.map(s => <span key={s.id} style={{ fontSize: 9, padding: '3px 10px', borderRadius: 999, background: `${tc}12`, color: tc, border: `1px solid ${tc}25`, fontWeight: 600 }}>{s.name}</span>)}</div>
        </div>
        <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
          <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Education</h2>
          {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
        </div>
      </div>
      <div style={{ background: 'white', borderRadius: 12, padding: '16px 20px', marginBottom: 14, boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
        <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 12 }}>Experience</h2>
        {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
      </div>
      <div style={{ background: 'white', borderRadius: 12, padding: '16px 20px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
        <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>{prj.map(p => <div key={p.id} style={{ padding: '10px 12px', background: `${tc}06`, border: `1px solid ${tc}18`, borderRadius: 8 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.tech && <p style={{ color: '#888', fontSize: 9, marginBottom: 2 }}>{p.tech}</p>}{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.55 }}>{p.description}</p>}</div>)}</div>
      </div>
    </div>
  )
}

// ── Template 18: Monochrome ── Pure black & white, typography-focused
export function MonochromeTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [] } = resume
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const SH = ({ c }) => <div style={{ height: 1, background: '#111', margin: '12px 0 10px' }} />
  return (
    <div style={{ background: 'white', fontFamily: "'Georgia', serif", fontSize: 10.5, lineHeight: 1.6, padding: '32px 40px', minHeight: '297mm', color: '#111' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 16, paddingBottom: 16, borderBottom: '2px solid #111' }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '2px solid #111', flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{name}</h1>
          <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', marginBottom: 8 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 16px', fontSize: 9.5, color: '#555' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <p style={{ fontStyle: 'italic', color: '#444', lineHeight: 1.85, marginBottom: 16 }}>{summary}</p>
      <SH /><h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10 }}>Experience</h2>
      {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><p style={{ fontWeight: 700, fontSize: 11 }}>{e.role} — {e.company}</p><p style={{ fontSize: 9, color: '#777', fontStyle: 'italic' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 10, lineHeight: 1.65 }}>{l}</p>)}</div>)}
      <SH /><h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10 }}>Education</h2>
      {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><p style={{ fontWeight: 700, fontSize: 11 }}>{e.degree} — {e.school}</p><p style={{ fontSize: 9, color: '#777', fontStyle: 'italic' }}>{e.startDate} — {e.endDate}</p></div></div>)}
      <SH /><h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10 }}>Skills</h2>
      <p style={{ color: '#444', fontSize: 10, letterSpacing: '0.04em' }}>{skl.map(s => s.name).join('  ·  ')}</p>
      <SH /><h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 10 }}>Projects</h2>
      {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 11 }}>{p.name}</p>{p.description && <p style={{ color: '#444', fontSize: 10, lineHeight: 1.65 }}>{p.description}</p>}</div>)}
    </div>
  )
}

// ── Template 19: Pastel ── Soft pastel colors, rounded corners
export function PastelTemplate({ resume }) {
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
  return (
    <div style={{ background: '#faf5ff', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', padding: '24px 28px 40px' }}>
      <div style={{ background: 'white', borderRadius: 16, padding: '20px 24px', marginBottom: 16, boxShadow: `0 4px 20px ${tc}15`, display: 'flex', alignItems: 'center', gap: 18 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}40`, flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: '#1a1a2e', marginBottom: 3 }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontWeight: 700, marginBottom: 8 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#666' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ background: `${tc}10`, borderRadius: 12, padding: '14px 18px', marginBottom: 14 }}><p style={{ color: '#444', fontSize: 10.5, lineHeight: 1.8 }}>{summary}</p></div>
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 14 }}>
        <div>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', marginBottom: 14, boxShadow: `0 2px 12px ${tc}10` }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Experience</h2>
            {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#999', background: `${tc}12`, padding: '2px 8px', borderRadius: 999 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
          </div>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', boxShadow: `0 2px 12px ${tc}10` }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Projects</h2>
            {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}
          </div>
        </div>
        <div>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', marginBottom: 14, boxShadow: `0 2px 12px ${tc}10` }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Skills</h2>
            {skl.map(s => <div key={s.id} style={{ marginBottom: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 4, background: `${tc}15`, borderRadius: 999 }}><div style={{ height: 4, background: tc, borderRadius: 999, width: `${s.level}%` }} /></div></div>)}
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

// ── Template 20: Dark Pro ── Full dark background, white text
export function DarkProTemplate({ resume }) {
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
  const SH = ({ t }) => <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}><h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, whiteSpace: 'nowrap' }}>{t}</h2><div style={{ flex: 1, height: 1, background: `${tc}40` }} /></div>
  return (
    <div style={{ background: '#ffffff', color: '#1e293b', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      <div style={{ padding: '28px 32px 20px', borderBottom: `2px solid ${tc}`, display: 'flex', alignItems: 'center', gap: 20, background: '#ffffff' }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}`, flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: '#0f172a', marginBottom: 4 }}>{name}</h1>
          <p style={{ fontSize: 12, color: tc, fontWeight: 700, marginBottom: 10 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9.5, color: '#475569' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 32px 40px', background: '#ffffff' }}>
        <div style={{ marginBottom: 16, padding: '12px 16px', background: '#f8fafc', border: `1px solid ${tc}40`, borderRadius: 8 }}><p style={{ color: '#334155', fontSize: 10.5, lineHeight: 1.8 }}>{summary}</p></div>
        <div style={{ marginBottom: 16 }}><SH t="Experience" />{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, padding: '10px 12px', background: '#f8fafc', border: `1px solid #e2e8f0`, borderRadius: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11, color: '#0f172a' }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#64748b' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#334155', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 16 }}>
          <div><SH t="Skills" />{skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5, color: '#1e293b' }}>{s.name}</span><span style={{ fontSize: 8, color: tc }}>{s.level}%</span></div><div style={{ height: 3, background: '#e2e8f0', borderRadius: 2 }}><div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level}%` }} /></div></div>)}</div>
          <div><SH t="Education" />{edu.map(e => <div key={e.id} style={{ marginBottom: 8, padding: '8px 10px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 6 }}><p style={{ fontWeight: 700, fontSize: 10, color: '#0f172a' }}>{e.degree}</p><p style={{ color: '#475569', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#64748b', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}</div>
        </div>
        <SH t="Projects" />{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0, padding: '10px 12px', background: '#f8fafc', border: `1px solid ${tc}40`, borderRadius: 6 }}><p style={{ fontWeight: 700, fontSize: 10.5, color: '#0f172a' }}>{p.name}</p>{p.tech && <p style={{ color: tc, fontSize: 9, marginBottom: 2 }}>{p.tech}</p>}{p.description && <p style={{ color: '#334155', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}
      </div>
    </div>
  )
}

// ── Template 21: Newspaper ── Multi-column newspaper style
export function NewspaperTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#1a1a1a' } = resume
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
    <div style={{ background: '#fffef7', fontFamily: "'Georgia', serif", fontSize: 10.5, lineHeight: 1.6, padding: '28px 32px', minHeight: '297mm', color: '#1a1a1a' }}>
      <div style={{ textAlign: 'center', borderBottom: '3px double #1a1a1a', paddingBottom: 14, marginBottom: 14 }}>
        {photo && <img src={photo} alt="" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid #1a1a1a', margin: '0 auto 10px' }} />}
        <h1 style={{ fontSize: 32, fontWeight: 900, letterSpacing: '-0.01em', marginBottom: 4, fontFamily: "'Georgia', serif" }}>{name}</h1>
        <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginBottom: 8 }}>{jobTitle}</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3px 16px', fontSize: 9, color: '#777' }}>
          {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
        </div>
      </div>
      <p style={{ fontStyle: 'italic', textAlign: 'center', color: '#444', lineHeight: 1.85, marginBottom: 14, fontSize: 10.5, borderBottom: '1px solid #ccc', paddingBottom: 12 }}>{summary}</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <div>
          <h2 style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', borderBottom: '2px solid #1a1a1a', paddingBottom: 4, marginBottom: 10 }}>Experience</h2>
          {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><p style={{ fontWeight: 700, fontSize: 11 }}>{e.role}</p><p style={{ fontStyle: 'italic', color: '#555', fontSize: 10 }}>{e.company} · {e.startDate} — {e.current ? 'Present' : e.endDate}</p>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 10, lineHeight: 1.65 }}>{l}</p>)}</div>)}
          <h2 style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', borderBottom: '2px solid #1a1a1a', paddingBottom: 4, marginBottom: 10, marginTop: 14 }}>Education</h2>
          {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 11 }}>{e.degree}</p><p style={{ fontStyle: 'italic', color: '#555', fontSize: 10 }}>{e.school} · {e.startDate} — {e.endDate}</p></div>)}
        </div>
        <div>
          <h2 style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', borderBottom: '2px solid #1a1a1a', paddingBottom: 4, marginBottom: 10 }}>Projects</h2>
          {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0 }}><p style={{ fontWeight: 700, fontSize: 11 }}>{p.name}</p>{p.tech && <p style={{ fontStyle: 'italic', color: '#777', fontSize: 9.5 }}>{p.tech}</p>}{p.description && <p style={{ color: '#444', fontSize: 10, lineHeight: 1.65 }}>{p.description}</p>}</div>)}
          <h2 style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', borderBottom: '2px solid #1a1a1a', paddingBottom: 4, marginBottom: 10, marginTop: 14 }}>Skills</h2>
          <p style={{ color: '#444', fontSize: 10, lineHeight: 1.9 }}>{skl.map(s => s.name).join(' · ')}</p>
        </div>
      </div>
    </div>
  )
}
