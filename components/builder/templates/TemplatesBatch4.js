import { Mail, Phone, MapPin, Globe, Link2, Award } from 'lucide-react'
const S = {
  name: 'xyz', jobTitle: 'Software Engineer', email: 'prachi@email.com', phone: '+91 98765 43210', location: 'Mumbai, India',
  summary: 'Senior Software Engineer with 4+ years building scalable full-stack applications. Led teams, reduced latency by 40%, shipped products used by 500K+ users.',
  experience: [{ id: 's1', role: 'Senior Engineer', company: 'Google India', location: 'Bengaluru', startDate: 'Jan 2022', endDate: '', current: true, description: '• Architected microservices handling 15M+ API requests/day\n• Led Payments 2.0 reducing failures by 35%' }, { id: 's2', role: 'Software Engineer', company: 'Razorpay', location: 'Bengaluru', startDate: 'Jul 2020', endDate: 'Dec 2021', current: false, description: '• Built merchant dashboard for 200K+ merchants\n• Optimized queries from 800ms to 120ms' }],
  education: [{ id: 'e1', degree: 'B.Tech Computer Science', school: 'IIT Bombay', startDate: '2015', endDate: '2019', gpa: '9.2/10' }],
  skills: [{ id: 'sk1', name: 'JavaScript', level: 95 }, { id: 'sk2', name: 'React', level: 92 }, { id: 'sk3', name: 'Node.js', level: 90 }, { id: 'sk4', name: 'Python', level: 80 }, { id: 'sk5', name: 'AWS', level: 78 }, { id: 'sk6', name: 'Docker', level: 75 }],
  projects: [{ id: 'p1', name: 'ResumeAI', tech: 'Next.js, MySQL, OpenAI', link: 'resumeai.vercel.app', description: 'AI resume builder with 13 templates. 2,000+ users in first month.' }],
  certifications: [{ id: 'c1', name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', date: '2023-04' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}
function g(v, f) { return v && String(v).trim() !== '' ? v : f }

// ── Template 35: Brutalist ── Raw, bold, no-nonsense
export function BrutalistTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#ff3b00' } = resume
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
    <div style={{ background: 'white', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: 10.5, lineHeight: 1.4, minHeight: '297mm', border: '3px solid #000' }}>
      <div style={{ background: '#000', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
        {photo && <img src={photo} alt="" style={{ width: 64, height: 64, borderRadius: 0, objectFit: 'cover', border: `3px solid ${tc}`, flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: 'white', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: 2 }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{jobTitle}</p>
        </div>
      </div>
      <div style={{ background: tc, padding: '8px 24px', display: 'flex', gap: 20 }}>
        {[email, phone, location].filter(Boolean).map((v, i) => <span key={i} style={{ fontSize: 9, color: 'white', fontWeight: 700 }}>{v}</span>)}
      </div>
      <div style={{ padding: '20px 24px 40px' }}>
        <div style={{ borderLeft: `6px solid ${tc}`, paddingLeft: 14, marginBottom: 18 }}><p style={{ color: '#222', fontSize: 10.5, lineHeight: 1.75 }}>{summary}</p></div>
        <div style={{ marginBottom: 18 }}><div style={{ background: '#000', color: 'white', padding: '4px 12px', display: 'inline-block', fontSize: 9, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>EXPERIENCE</div>{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, borderBottom: i < exp.length - 1 ? '2px solid #000' : 'none', paddingBottom: i < exp.length - 1 ? 10 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><p style={{ fontWeight: 900, fontSize: 11, textTransform: 'uppercase' }}>{e.role}</p><span style={{ fontSize: 8.5, color: '#555', fontWeight: 700 }}>{e.startDate} — {e.current ? 'NOW' : e.endDate}</span></div><p style={{ color: tc, fontSize: 10, fontWeight: 900, textTransform: 'uppercase', marginBottom: 4 }}>{e.company}</p>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#333', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 18 }}>
          <div><div style={{ background: '#000', color: 'white', padding: '4px 12px', display: 'inline-block', fontSize: 9, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>SKILLS</div><div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>{skl.map(s => <span key={s.id} style={{ fontSize: 9, padding: '3px 10px', border: '2px solid #000', fontWeight: 700, textTransform: 'uppercase' }}>{s.name}</span>)}</div></div>
          <div><div style={{ background: '#000', color: 'white', padding: '4px 12px', display: 'inline-block', fontSize: 9, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>EDUCATION</div>{edu.map(e => <div key={e.id}><p style={{ fontWeight: 900, fontSize: 10, textTransform: 'uppercase' }}>{e.degree}</p><p style={{ color: '#555', fontSize: 9.5 }}>{e.school} · {e.startDate}-{e.endDate}</p></div>)}</div>
        </div>
        <div><div style={{ background: '#000', color: 'white', padding: '4px 12px', display: 'inline-block', fontSize: 9, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>PROJECTS</div>{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 900, fontSize: 10.5, textTransform: 'uppercase' }}>{p.name}</p>{p.description && <p style={{ color: '#333', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}</div>
      </div>
    </div>
  )
}

// ── Template 36: Soft Corporate ── Warm beige tones, professional
export function SoftCorporateTemplate({ resume }) {
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
    <div style={{ background: '#fdf8f0', fontFamily: 'Georgia, serif', fontSize: 10.5, lineHeight: 1.6, minHeight: '297mm' }}>
      <div style={{ background: `linear-gradient(to right, ${tc}, #92400e)`, padding: '26px 32px 20px', color: 'white', display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)', flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 4 }}>{name}</h1>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', marginBottom: 10 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: 'rgba(255,255,255,0.8)' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ padding: '22px 32px 40px' }}>
        <p style={{ color: '#5c4033', lineHeight: 1.85, marginBottom: 18, fontStyle: 'italic', borderBottom: `1px solid ${tc}30`, paddingBottom: 14 }}>{summary}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 24 }}>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, marginBottom: 12 }}>Experience</h2>
            {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 700, fontSize: 11.5 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontStyle: 'italic' }}>{e.company}</p></div><p style={{ fontSize: 9, color: '#999', fontStyle: 'italic' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#5c4033', fontSize: 10, lineHeight: 1.7 }}>{l}</p>)}</div>)}
            <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, marginBottom: 12, marginTop: 16 }}>Projects</h2>
            {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0 }}><p style={{ fontWeight: 700, fontSize: 11 }}>{p.name}</p>{p.description && <p style={{ color: '#5c4033', fontSize: 10, lineHeight: 1.7 }}>{p.description}</p>}</div>)}
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

// ── Template 37: Cyber ── Cyberpunk aesthetic
export function CyberTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#f0abfc' } = resume
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
    <div style={{ background: '#ffffff', color: '#1e293b', fontFamily: "'Arial', sans-serif", fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      {/* ── HEADER (cream) ── */}
      <div style={{ padding: '28px 30px 20px', borderBottom: `2px solid ${tc}`, position: 'relative', overflow: 'hidden', background: '#fdf6e3' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: '100%', background: `linear-gradient(to left, ${tc}15, transparent)` }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, position: 'relative' }}>
          {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: 4, objectFit: 'cover', border: `2px solid ${tc}`, boxShadow: `0 0 16px ${tc}40`, flexShrink: 0 }} />}
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: '#0f172a', letterSpacing: '-0.01em', marginBottom: 4 }}>{name}</h1>
            <p style={{ fontSize: 11, color: tc, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9.5, color: '#475569' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>)}
            </div>
          </div>
        </div>
      </div>
      {/* ── BODY (white) ── */}
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, padding: '20px 22px', background: '#ffffff' }}>
          <div style={{ marginBottom: 16, padding: '10px 14px', background: '#fdf6e3', border: `1px solid ${tc}40`, borderRadius: 6 }}><p style={{ color: '#334155', fontSize: 10.5, lineHeight: 1.8 }}>{summary}</p></div>
          <div style={{ marginBottom: 16 }}><h2 style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 10 }}>Experience</h2>{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, padding: '10px 12px', background: '#f8fafc', border: `1px solid #e2e8f0`, borderRadius: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11, color: '#0f172a' }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: tc, background: `${tc}15`, padding: '2px 8px', borderRadius: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#334155', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}</div>
          <div><h2 style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 10 }}>Projects</h2>{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0, padding: '8px 10px', background: '#f8fafc', border: `1px solid #e2e8f0`, borderRadius: 6 }}><p style={{ fontWeight: 700, fontSize: 10.5, color: '#0f172a' }}>{p.name}</p>{p.description && <p style={{ color: '#334155', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}</div>
        </div>
        <div style={{ width: '32%', padding: '20px 16px', borderLeft: `1px solid ${tc}30`, flexShrink: 0, background: '#ffffff' }}>
          <div style={{ marginBottom: 16 }}><h2 style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 10 }}>Skills</h2>{skl.map(s => <div key={s.id} style={{ marginBottom: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5, color: '#1e293b' }}>{s.name}</span><span style={{ fontSize: 8, color: tc }}>{s.level}%</span></div><div style={{ height: 3, background: '#e2e8f0', borderRadius: 2 }}><div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level}%` }} /></div></div>)}</div>
          <div><h2 style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 10 }}>Education</h2>{edu.map(e => <div key={e.id} style={{ marginBottom: 8, padding: '8px 10px', background: '#fdf6e3', border: `1px solid ${tc}30`, borderRadius: 6 }}><p style={{ fontWeight: 700, fontSize: 10, color: '#0f172a' }}>{e.degree}</p><p style={{ color: '#475569', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#64748b', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}</div>
        </div>
      </div>
      {/* ── FOOTER (cream) ── */}
      <div style={{ background: '#fdf6e3', borderTop: `2px solid ${tc}`, padding: '10px 30px', display: 'flex', justifyContent: 'center', gap: 24 }}>
        {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 9, color: '#475569' }}><I size={9} color={tc} />{v}</span>
        ))}
      </div>
    </div>
  )
}

// ── Template 38: Trifold ── Three equal columns
export function TrifoldTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#0f766e' } = resume
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
  const SH = ({ t }) => <h2 style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, paddingBottom: 4, borderBottom: `2px solid ${tc}` }}>{t}</h2>
  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10, lineHeight: 1.5, minHeight: '297mm' }}>
      <div style={{ background: tc, padding: '22px 24px 18px', color: 'white', textAlign: 'center' }}>
        {photo && <img src={photo} alt="" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)', margin: '0 auto 10px' }} />}
        <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 3 }}>{name}</h1>
        <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.85)', marginBottom: 8 }}>{jobTitle}</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3px 14px', fontSize: 8.5, color: 'rgba(255,255,255,0.75)' }}>
          {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0 }}>
        <div style={{ padding: '16px 14px', borderRight: '1px solid #e5e7eb' }}>
          <SH t="Profile" /><p style={{ color: '#444', fontSize: 9.5, lineHeight: 1.75, marginBottom: 14 }}>{summary}</p>
          <SH t="Skills" />{skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}><span style={{ fontSize: 9 }}>{s.name}</span><span style={{ fontSize: 7.5, color: '#999' }}>{s.level}%</span></div><div style={{ height: 2.5, background: '#eee', borderRadius: 1 }}><div style={{ height: 2.5, background: tc, borderRadius: 1, width: `${s.level}%` }} /></div></div>)}
        </div>
        <div style={{ padding: '16px 14px', borderRight: '1px solid #e5e7eb' }}>
          <SH t="Experience" />{exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><p style={{ fontWeight: 800, fontSize: 10 }}>{e.role}</p><p style={{ color: tc, fontSize: 9, fontWeight: 600 }}>{e.company}</p><p style={{ color: '#999', fontSize: 8.5 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9, lineHeight: 1.6 }}>{l}</p>)}</div>)}
        </div>
        <div style={{ padding: '16px 14px' }}>
          <SH t="Education" />{edu.map(e => <div key={e.id} style={{ marginBottom: 10 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9 }}>{e.school}</p><p style={{ color: '#999', fontSize: 8.5 }}>{e.startDate} — {e.endDate}</p></div>)}
          <SH t="Projects" />{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9, lineHeight: 1.6 }}>{p.description}</p>}</div>)}
          <SH t="Languages" />{langs.map(l => <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}><span style={{ fontSize: 9.5, fontWeight: 600 }}>{l.name}</span><span style={{ fontSize: 8.5, color: '#888' }}>{l.proficiency}</span></div>)}
        </div>
      </div>
    </div>
  )
}

// ── Template 39: Mosaic ── Mosaic tile layout
export function MosaicTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#9333ea' } = resume
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
    <div style={{ background: '#f9fafb', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', padding: '20px 20px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12, marginBottom: 12 }}>
        <div style={{ background: tc, borderRadius: 12, padding: '20px 22px', color: 'white', display: 'flex', alignItems: 'center', gap: 16 }}>
          {photo && <img src={photo} alt="" style={{ width: 68, height: 68, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)', flexShrink: 0 }} />}
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 900, marginBottom: 3 }}>{name}</h1>
            <p style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.85)', marginBottom: 8 }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px 12px', fontSize: 8.5, color: 'rgba(255,255,255,0.75)' }}>
              {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
            </div>
          </div>
        </div>
        <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
          <h2 style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 8 }}>Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>{skl.map(s => <span key={s.id} style={{ fontSize: 8.5, padding: '2px 8px', borderRadius: 999, background: `${tc}12`, color: tc, border: `1px solid ${tc}25`, fontWeight: 600 }}>{s.name}</span>)}</div>
        </div>
      </div>
      <div style={{ background: 'white', borderRadius: 12, padding: '14px 18px', marginBottom: 12, boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}><p style={{ color: '#444', fontSize: 10.5, lineHeight: 1.8 }}>{summary}</p></div>
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 12 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
            <h2 style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Experience</h2>
            {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
          </div>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
            <h2 style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Projects</h2>
            {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}
          </div>
        </div>
        <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
          <h2 style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 10 }}>Education</h2>
          {edu.map(e => <div key={e.id} style={{ marginBottom: 10 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
        </div>
      </div>
    </div>
  )
}

// ── Template 40: Ink ── Ink-on-paper aesthetic
export function InkTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#1e3a5f' } = resume
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
    <div style={{ background: '#fffef9', fontFamily: "'Georgia', serif", fontSize: 10.5, lineHeight: 1.65, padding: '32px 40px', minHeight: '297mm', color: '#1a1a1a' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid #ccc' }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '1px solid #ccc', flexShrink: 0 }} />}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 28, fontWeight: 400, letterSpacing: '0.02em', marginBottom: 4 }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontStyle: 'italic', marginBottom: 8 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 16px', fontSize: 9.5, color: '#777' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <p style={{ fontStyle: 'italic', color: '#555', lineHeight: 1.9, marginBottom: 18 }}>{summary}</p>
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 24 }}>
        <div>
          <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 12, borderBottom: '1px solid #ccc', paddingBottom: 4 }}>Experience</h2>
          {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><p style={{ fontWeight: 700, fontSize: 11.5 }}>{e.role}</p><p style={{ fontSize: 9, color: '#999', fontStyle: 'italic' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p></div><p style={{ color: tc, fontSize: 10, fontStyle: 'italic', marginBottom: 4 }}>{e.company}</p>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 10, lineHeight: 1.7 }}>{l}</p>)}</div>)}
          <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 12, borderBottom: '1px solid #ccc', paddingBottom: 4, marginTop: 16 }}>Projects</h2>
          {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0 }}><p style={{ fontWeight: 700, fontSize: 11 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 10, lineHeight: 1.7 }}>{p.description}</p>}</div>)}
        </div>
        <div>
          <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 12, borderBottom: '1px solid #ccc', paddingBottom: 4 }}>Skills</h2>
          <p style={{ color: '#555', fontSize: 10, lineHeight: 2 }}>{skl.map(s => s.name).join(' · ')}</p>
          <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 12, borderBottom: '1px solid #ccc', paddingBottom: 4, marginTop: 16 }}>Education</h2>
          {edu.map(e => <div key={e.id} style={{ marginBottom: 10 }}><p style={{ fontWeight: 700, fontSize: 11 }}>{e.degree}</p><p style={{ color: '#888', fontSize: 10, fontStyle: 'italic' }}>{e.school}</p><p style={{ color: '#aaa', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
        </div>
      </div>
    </div>
  )
}
