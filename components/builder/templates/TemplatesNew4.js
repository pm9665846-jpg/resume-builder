'use client'
import { Mail, Phone, MapPin } from 'lucide-react'
const S = {
  name: 'xyz', jobTitle: 'Senior Software Engineer',
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

// ── 1: DUOTONE ── Two-tone split layout, left dark panel + right white
export function DuotoneTemplate({ resume }) {
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
    <div style={{ background: 'white', fontFamily: 'Arial,sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', display: 'flex' }}>
      {/* Dark left panel */}
      <div style={{ width: '38%', background: '#1a1a2e', padding: '28px 18px 40px', display: 'flex', flexDirection: 'column', gap: 20, flexShrink: 0 }}>
        {photo ? <img src={photo} alt="" style={{ width: 104, height: 104, borderRadius: '50%', objectFit: 'cover', border: '3px solid ' + tc, margin: '0 auto 4px' }} /> : <div style={{ width: 104, height: 104, borderRadius: '50%', background: tc + '30', border: '3px solid ' + tc, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 900, color: tc, margin: '0 auto 4px' }}>{name.charAt(0)}</div>}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 16, fontWeight: 900, color: 'white', margin: '0 0 4px', lineHeight: 1.2 }}>{name}</h1>
          <p style={{ fontSize: 9.5, color: tc, fontWeight: 700, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 8.5, color: 'rgba(255,255,255,0.65)', justifyContent: 'center' }}><I size={8} color={tc} />{v}</div>)}
          </div>
        </div>
        <div>
          <p style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 8 }}>Skills</p>
          {skl.map(s => <div key={s.id} style={{ marginBottom: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9, color: 'rgba(255,255,255,0.85)' }}>{s.name}</span><span style={{ fontSize: 7.5, color: tc }}>{s.level}%</span></div><div style={{ height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 2 }}><div style={{ height: 3, background: tc, borderRadius: 2, width: s.level + '%' }} /></div></div>)}
        </div>
        <div>
          <p style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 8 }}>Education</p>
          {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 9.5, color: 'white', margin: '0 0 1px' }}>{e.degree}</p><p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 8.5, margin: '0 0 1px' }}>{e.school}</p><p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 8, margin: 0 }}>{e.startDate} — {e.endDate}</p></div>)}
        </div>
        <div>
          <p style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 8 }}>Languages</p>
          {(resume.languages?.length > 0 ? resume.languages : S.languages).map(l => <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}><span style={{ fontSize: 9, color: 'rgba(255,255,255,0.85)' }}>{l.name}</span><span style={{ fontSize: 8, color: tc }}>{l.proficiency}</span></div>)}
        </div>
      </div>
      {/* White right panel */}
      <div style={{ flex: 1, padding: '28px 22px 40px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ padding: '12px 14px', background: tc + '08', borderRadius: 8, borderLeft: '4px solid ' + tc }}>
          <p style={{ color: '#444', lineHeight: 1.8, margin: 0 }}>{summary}</p>
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}><h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, margin: 0 }}>Experience</h2><div style={{ flex: 1, height: 1.5, background: tc + '30' }} /></div>
          {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, paddingLeft: 12, borderLeft: '2px solid ' + tc + '30' }}><div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}><div><p style={{ fontWeight: 800, fontSize: 11, color: '#111', margin: 0 }}>{e.role}</p><p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '1px 0' }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#999', background: '#f8fafc', padding: '2px 7px', borderRadius: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: '2px 0 0' }}>{l}</p>)}</div>)}
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}><h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, margin: 0 }}>Projects</h2><div style={{ flex: 1, height: 1.5, background: tc + '30' }} /></div>
          {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '9px 11px', background: tc + '06', borderRadius: 7, border: '1px solid ' + tc + '15' }}><p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 3px' }}>{p.name}</p>{p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 3 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 6px', borderRadius: 3, background: tc + '15', color: tc, fontWeight: 600 }}>{t.trim()}</span>)}</div>}{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}</div>)}
        </div>
      </div>
    </div>
  )
}

// ── 2: PASSPORT ── Passport/ID card style, photo + stamp accents
export function PassportTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#1e40af' } = resume
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
    <div style={{ background: '#f0f4ff', fontFamily: "'Georgia',serif", fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', padding: '24px 28px 40px' }}>
      {/* Passport cover card */}
      <div style={{ background: tc, borderRadius: 12, padding: '20px 24px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 20, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -20, top: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
        <div style={{ position: 'absolute', right: 20, bottom: -30, width: 90, height: 90, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
        {photo ? <img src={photo} alt="" style={{ width: 80, height: 80, borderRadius: 6, objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)', flexShrink: 0 }} /> : <div style={{ width: 80, height: 80, borderRadius: 6, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 900, color: 'white', flexShrink: 0 }}>{name.charAt(0)}</div>}
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 8, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0 0 3px' }}>Professional Resume</p>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: 'white', margin: '0 0 3px', letterSpacing: '0.02em' }}>{name}</h1>
          <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', margin: '0 0 10px' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9, color: 'rgba(255,255,255,0.65)' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
        {/* Stamp */}
        <div style={{ width: 56, height: 56, borderRadius: '50%', border: '2px dashed rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, color: 'rgba(255,255,255,0.5)', textAlign: 'center', letterSpacing: '0.05em', textTransform: 'uppercase' }}>VERIFIED</div>
        </div>
      </div>
      {/* MRZ-style summary */}
      <div style={{ background: 'white', borderRadius: 8, padding: '10px 16px', marginBottom: 14, fontFamily: "'Courier New',monospace", fontSize: 9, color: '#555', letterSpacing: '0.05em', border: '1px solid #dde3f0' }}>
        <p style={{ margin: '0 0 2px', color: '#888' }}>// PROFILE SUMMARY</p>
        <p style={{ margin: 0, lineHeight: 1.7, fontFamily: 'Georgia,serif', fontSize: 10.5, color: '#444', letterSpacing: 'normal' }}>{summary}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 190px', gap: 14 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[{ title: 'Experience', items: exp, render: (e, i, arr) => <div key={e.id} style={{ marginBottom: i < arr.length - 1 ? 10 : 0, padding: '9px 12px', background: 'white', borderRadius: 7, border: '1px solid #dde3f0', borderLeft: '3px solid ' + tc }}><div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}><div><p style={{ fontWeight: 700, fontSize: 11, color: '#111', margin: 0 }}>{e.role}</p><p style={{ color: tc, fontSize: 9.5, fontStyle: 'italic', margin: '1px 0' }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#999', background: '#f0f4ff', padding: '2px 7px', borderRadius: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: '2px 0 0' }}>{l}</p>)}</div> },
            { title: 'Projects', items: prj, render: (p, i, arr) => <div key={p.id} style={{ marginBottom: i < arr.length - 1 ? 8 : 0, padding: '9px 12px', background: 'white', borderRadius: 7, border: '1px solid #dde3f0' }}><p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 3px' }}>{p.name}</p>{p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 3 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 6px', borderRadius: 3, background: tc + '12', color: tc, fontWeight: 600 }}>{t.trim()}</span>)}</div>}{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}</div> }
          ].map(({ title, items, render }) => (
            <div key={title} style={{ background: 'white', borderRadius: 8, padding: '14px 16px', border: '1px solid #dde3f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}><div style={{ width: 20, height: 20, borderRadius: 4, background: tc, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: 9, color: 'white', fontWeight: 900 }}>{title.charAt(0)}</span></div><h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111', margin: 0 }}>{title}</h2></div>
              {items.map((item, i) => render(item, i, items))}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ background: 'white', borderRadius: 8, padding: '14px 16px', border: '1px solid #dde3f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}><div style={{ width: 20, height: 20, borderRadius: 4, background: tc, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: 9, color: 'white', fontWeight: 900 }}>S</span></div><h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111', margin: 0 }}>Skills</h2></div>
            {skl.map(s => <div key={s.id} style={{ marginBottom: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5, color: '#333' }}>{s.name}</span><span style={{ fontSize: 8, color: '#aaa' }}>{s.level}%</span></div><div style={{ height: 4, background: '#e8edf8', borderRadius: 999 }}><div style={{ height: 4, background: 'linear-gradient(to right,' + tc + ',' + tc + '80)', borderRadius: 999, width: s.level + '%' }} /></div></div>)}
          </div>
          <div style={{ background: 'white', borderRadius: 8, padding: '14px 16px', border: '1px solid #dde3f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}><div style={{ width: 20, height: 20, borderRadius: 4, background: tc, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: 9, color: 'white', fontWeight: 900 }}>E</span></div><h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111', margin: 0 }}>Education</h2></div>
            {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10, color: '#111', margin: '0 0 1px' }}>{e.degree}</p><p style={{ color: tc, fontSize: 9, fontStyle: 'italic', margin: '0 0 1px' }}>{e.school}</p><p style={{ color: '#aaa', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 3: TERMINAL ── Soft mint, clean monospace-inspired, light background
export function TerminalTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#059669' } = resume
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
    <p style={{ fontSize: 8.5, color: tc, letterSpacing: '0.18em', margin: '0 0 10px', fontFamily: "'Courier New', monospace", fontWeight: 700 }}>{'>'} {children}</p>
  )

  return (
    <div style={{ background: '#f0fdf4', fontFamily: "'Courier New', Courier, monospace", fontSize: 10, lineHeight: 1.6, minHeight: '297mm', padding: '0 0 40px' }}>
      {/* Title bar */}
      <div style={{ background: '#dcfce7', borderBottom: `2px solid ${tc}30`, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 6 }}>
        {['#86efac','#4ade80','#22c55e'].map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
        <span style={{ marginLeft: 8, fontSize: 9, color: '#166534', fontFamily: "'Courier New', monospace" }}>resume.sh — {name}</span>
      </div>

      {/* Header block */}
      <div style={{ background: 'white', borderBottom: `1px solid ${tc}20`, padding: '18px 22px', marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {photo && <img src={photo} alt="" style={{ width: 64, height: 64, borderRadius: 6, objectFit: 'cover', border: `2px solid ${tc}40`, flexShrink: 0 }} />}
          <div>
            <p style={{ color: tc, fontSize: 9, margin: '0 0 3px' }}>{'>'} whoami</p>
            <p style={{ color: '#14532d', fontWeight: 700, fontSize: 16, margin: '0 0 2px' }}>{name}</p>
            <p style={{ color: tc, margin: '0 0 6px', fontSize: 10 }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px 14px', fontSize: 9, color: '#166534' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 3 }}><I size={8} color={tc} />{v}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 10, padding: '8px 12px', background: '#f0fdf4', borderRadius: 6, border: `1px solid ${tc}20` }}>
          <p style={{ color: tc, fontSize: 8.5, margin: '0 0 3px' }}>{'>'} cat summary.txt</p>
          <p style={{ color: '#166534', margin: 0, lineHeight: 1.75, fontSize: 10 }}>{summary}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 190px', gap: 14, padding: '0 22px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ background: 'white', border: `1px solid ${tc}20`, borderRadius: 8, padding: '14px 16px' }}>
            <SH>ls experience/</SH>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 10 : 0, paddingLeft: 12, borderLeft: `2px solid ${tc}40` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
                  <div>
                    <p style={{ color: '#14532d', fontWeight: 700, fontSize: 10.5, margin: 0 }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 9.5, margin: '1px 0' }}>{e.company}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: tc, background: `${tc}12`, border: `1px solid ${tc}25`, padding: '2px 7px', borderRadius: 20 }}>{e.startDate} → {e.current ? 'now' : e.endDate}</span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#166534', fontSize: 9.5, lineHeight: 1.6, margin: '2px 0 0' }}>{l}</p>)}
              </div>
            ))}
          </div>
          <div style={{ background: 'white', border: `1px solid ${tc}20`, borderRadius: 8, padding: '14px 16px' }}>
            <SH>ls projects/</SH>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0, padding: '8px 10px', background: '#f0fdf4', borderRadius: 6, border: `1px solid ${tc}20` }}>
                <p style={{ color: '#14532d', fontWeight: 700, fontSize: 10.5, margin: '0 0 3px' }}>{p.name} {p.link && <span style={{ color: tc, fontWeight: 400, fontSize: 9 }}>→ {p.link}</span>}</p>
                {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 3 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 6px', borderRadius: 3, background: `${tc}12`, color: tc, border: `1px solid ${tc}25` }}>{t.trim()}</span>)}</div>}
                {p.description && <p style={{ color: '#166534', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ background: 'white', border: `1px solid ${tc}20`, borderRadius: 8, padding: '14px 16px' }}>
            <SH>skills --list</SH>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 9.5, color: '#14532d' }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
                </div>
                <div style={{ height: 4, background: `${tc}15`, borderRadius: 99 }}>
                  <div style={{ height: '100%', background: `linear-gradient(to right, ${tc}, ${tc}88)`, borderRadius: 99, width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: 'white', border: `1px solid ${tc}20`, borderRadius: 8, padding: '14px 16px' }}>
            <SH>cat education.json</SH>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 8, padding: '7px 9px', background: '#f0fdf4', borderRadius: 5, border: `1px solid ${tc}20` }}>
                <p style={{ color: '#14532d', fontWeight: 700, fontSize: 9.5, margin: '0 0 1px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9, margin: '0 0 1px' }}>{e.school}</p>
                <p style={{ color: '#166534', fontSize: 8.5, margin: 0 }}>{e.startDate}–{e.endDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 4: ARCHITECT ── Soft blue-grey, clean structured layout with corner accents
export function BlueprintTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#3b82f6' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  const gridBg = `linear-gradient(${tc}08 1px, transparent 1px), linear-gradient(90deg, ${tc}08 1px, transparent 1px)`

  const Panel = ({ label, children }) => (
    <div style={{ position: 'relative', padding: '14px 14px', border: `1px solid ${tc}30`, borderRadius: 8, background: 'white', marginBottom: 12 }}>
      <span style={{ position: 'absolute', top: -9, left: 12, background: '#eef2ff', padding: '0 8px', fontSize: 8, color: tc, letterSpacing: '0.15em', fontWeight: 700, fontFamily: 'Arial, sans-serif' }}>{label}</span>
      {children}
    </div>
  )

  return (
    <div style={{ background: '#eef2ff', backgroundImage: gridBg, backgroundSize: '24px 24px', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', color: '#1e3a5f', padding: '24px 28px 40px' }}>

      {/* Header with corner brackets */}
      <div style={{ position: 'relative', padding: '18px 20px', marginBottom: 14, border: `1px solid ${tc}40`, borderRadius: 8, background: 'white' }}>
        <div style={{ position: 'absolute', top: -1, left: -1, width: 14, height: 14, borderTop: `2px solid ${tc}`, borderLeft: `2px solid ${tc}`, borderRadius: '4px 0 0 0' }} />
        <div style={{ position: 'absolute', top: -1, right: -1, width: 14, height: 14, borderTop: `2px solid ${tc}`, borderRight: `2px solid ${tc}`, borderRadius: '0 4px 0 0' }} />
        <div style={{ position: 'absolute', bottom: -1, left: -1, width: 14, height: 14, borderBottom: `2px solid ${tc}`, borderLeft: `2px solid ${tc}`, borderRadius: '0 0 0 4px' }} />
        <div style={{ position: 'absolute', bottom: -1, right: -1, width: 14, height: 14, borderBottom: `2px solid ${tc}`, borderRight: `2px solid ${tc}`, borderRadius: '0 0 4px 0' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          {photo
            ? <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: 6, objectFit: 'cover', border: `1px solid ${tc}40`, flexShrink: 0 }} />
            : <div style={{ width: 72, height: 72, borderRadius: 6, background: `${tc}12`, border: `1px solid ${tc}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 900, color: tc, flexShrink: 0 }}>{name.charAt(0)}</div>
          }
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 8, color: `${tc}80`, letterSpacing: '0.2em', margin: '0 0 3px', textTransform: 'uppercase' }}>SUBJECT:</p>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1e3a5f', margin: '0 0 2px', letterSpacing: '0.02em' }}>{name}</h1>
            <p style={{ fontSize: 10, color: tc, margin: '0 0 8px', fontWeight: 600 }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9, color: '#3b5998' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 3 }}><I size={8} color={tc} />{v}</span>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'right', fontSize: 8, color: `${tc}60`, lineHeight: 1.8 }}>
            <div>REV: 01</div><div>SCALE: 1:1</div><div>SHEET: 1/1</div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <Panel label="PROFILE">
        <p style={{ color: '#334155', lineHeight: 1.85, margin: 0 }}>{summary}</p>
      </Panel>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 190px', gap: 14 }}>
        <div>
          <Panel label="EXPERIENCE">
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 10 : 0, paddingLeft: 12, borderLeft: `2px solid ${tc}40` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 11, color: '#1e3a5f', margin: 0 }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 9.5, margin: '1px 0', fontWeight: 600 }}>{e.company}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: tc, background: `${tc}10`, padding: '2px 8px', borderRadius: 4, border: `1px solid ${tc}25` }}>{e.startDate} — {e.current ? 'NOW' : e.endDate}</span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.6, margin: '2px 0 0' }}>{l}</p>)}
              </div>
            ))}
          </Panel>
          <Panel label="PROJECTS">
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0, padding: '8px 10px', background: `${tc}06`, borderRadius: 6, border: `1px solid ${tc}20` }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#1e3a5f', margin: '0 0 3px' }}>{p.name}</p>
                {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 3 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 6px', borderRadius: 3, background: `${tc}12`, color: tc, border: `1px solid ${tc}25`, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
                {p.description && <p style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </Panel>
        </div>
        <div>
          <Panel label="SKILLS">
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 7 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 9.5, color: '#1e3a5f' }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
                </div>
                <div style={{ height: 4, background: `${tc}15`, borderRadius: 2 }}>
                  <div style={{ height: '100%', background: `linear-gradient(to right, ${tc}, ${tc}88)`, borderRadius: 2, width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </Panel>
          <Panel label="EDUCATION">
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 8 }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#1e3a5f', margin: '0 0 1px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9, fontWeight: 600, margin: '0 0 1px' }}>{e.school}</p>
                <p style={{ color: '#64748b', fontSize: 8.5, margin: 0 }}>{e.startDate}–{e.endDate}</p>
              </div>
            ))}
          </Panel>
        </div>
      </div>
    </div>
  )
}

// ── 5: INFOPANEL ── Dashboard-style info panels with stat boxes
export function InfoPanelTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#0f766e' } = resume
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
    <div style={{ background: '#f8fafc', fontFamily: 'Arial,sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', padding: '20px 22px 40px' }}>
      {/* Top header */}
      <div style={{ background: 'white', borderRadius: 12, padding: '16px 20px', marginBottom: 14, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 18 }}>
        {photo ? <img src={photo} alt="" style={{ width: 68, height: 68, borderRadius: 10, objectFit: 'cover', border: '2px solid ' + tc + '30', flexShrink: 0 }} /> : <div style={{ width: 68, height: 68, borderRadius: 10, background: tc + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 900, color: tc, flexShrink: 0 }}>{name.charAt(0)}</div>}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 22, fontWeight: 900, color: '#111', margin: '0 0 2px' }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontWeight: 700, margin: '0 0 6px' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#666' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 3 }}><I size={9} color={tc} />{v}</span>)}
          </div>
        </div>
        {/* Stat boxes */}
        <div style={{ display: 'flex', gap: 8 }}>
          {[{ label: 'Experience', val: exp.length + '+', color: tc }, { label: 'Projects', val: prj.length + '+', color: '#6366f1' }, { label: 'Skills', val: skl.length + '+', color: '#ec4899' }].map(s => (
            <div key={s.label} style={{ textAlign: 'center', padding: '8px 12px', background: s.color + '10', borderRadius: 8, border: '1px solid ' + s.color + '20', minWidth: 52 }}>
              <p style={{ fontSize: 18, fontWeight: 900, color: s.color, margin: 0, lineHeight: 1 }}>{s.val}</p>
              <p style={{ fontSize: 7.5, color: '#888', margin: '2px 0 0', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Summary panel */}
      <div style={{ background: 'white', borderRadius: 10, padding: '12px 16px', marginBottom: 14, boxShadow: '0 1px 4px rgba(0,0,0,0.05)', borderLeft: '4px solid ' + tc }}>
        <p style={{ color: '#444', lineHeight: 1.8, margin: 0 }}>{summary}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
        {/* Experience panel */}
        <div style={{ background: 'white', borderRadius: 10, padding: '14px 16px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}><div style={{ width: 8, height: 8, borderRadius: 2, background: tc }} /><h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111', margin: 0 }}>Experience</h2></div>
          {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 10 : 0, paddingBottom: i < exp.length - 1 ? 10 : 0, borderBottom: i < exp.length - 1 ? '1px solid #f3f4f6' : 'none' }}><div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}><div><p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: 0 }}>{e.role}</p><p style={{ color: tc, fontSize: 9, fontWeight: 600, margin: '1px 0' }}>{e.company}</p></div><span style={{ fontSize: 8, color: '#aaa', background: '#f8fafc', padding: '2px 6px', borderRadius: 4 }}>{e.startDate} — {e.current ? 'Now' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: '2px 0 0' }}>{l}</p>)}</div>)}
        </div>
        {/* Skills panel */}
        <div style={{ background: 'white', borderRadius: 10, padding: '14px 16px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}><div style={{ width: 8, height: 8, borderRadius: 2, background: '#6366f1' }} /><h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111', margin: 0 }}>Skills</h2></div>
          {skl.map(s => <div key={s.id} style={{ marginBottom: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5, color: '#333' }}>{s.name}</span><span style={{ fontSize: 8, color: '#aaa' }}>{s.level}%</span></div><div style={{ height: 5, background: '#f3f4f6', borderRadius: 999 }}><div style={{ height: 5, background: 'linear-gradient(to right,' + tc + ',' + tc + '80)', borderRadius: 999, width: s.level + '%' }} /></div></div>)}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div style={{ background: 'white', borderRadius: 10, padding: '14px 16px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}><div style={{ width: 8, height: 8, borderRadius: 2, background: '#ec4899' }} /><h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111', margin: 0 }}>Projects</h2></div>
          {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0, padding: '8px 10px', background: '#f8fafc', borderRadius: 6, border: '1px solid #e5e7eb' }}><p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 2px' }}>{p.name}</p>{p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 2 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 5px', borderRadius: 3, background: tc + '12', color: tc, fontWeight: 600 }}>{t.trim()}</span>)}</div>}{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}</div>)}
        </div>
        <div style={{ background: 'white', borderRadius: 10, padding: '14px 16px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}><div style={{ width: 8, height: 8, borderRadius: 2, background: '#f59e0b' }} /><h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111', margin: 0 }}>Education</h2></div>
          {edu.map(e => <div key={e.id} style={{ marginBottom: 10, padding: '8px 10px', background: '#f8fafc', borderRadius: 6, border: '1px solid #e5e7eb' }}><p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 1px' }}>{e.degree}</p><p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '0 0 1px' }}>{e.school}</p><p style={{ color: '#aaa', fontSize: 9, margin: 0 }}>{e.startDate} — {e.endDate}</p></div>)}
        </div>
      </div>
    </div>
  )
}

// ── 6: VINTAGE ── Old newspaper/typewriter style, sepia tones
export function VintageTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#92400e' } = resume
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
    <div style={{ background: '#fdf6e3', fontFamily: "'Georgia',serif", fontSize: 10.5, lineHeight: 1.65, minHeight: '297mm', padding: '28px 36px 40px', color: '#3d2b1f' }}>
      {/* Masthead */}
      <div style={{ textAlign: 'center', borderTop: '3px double ' + tc, borderBottom: '3px double ' + tc, padding: '14px 0', marginBottom: 18 }}>
        <p style={{ fontSize: 8, letterSpacing: '0.35em', textTransform: 'uppercase', color: tc, margin: '0 0 6px' }}>Curriculum Vitae</p>
        <h1 style={{ fontSize: 32, fontWeight: 400, color: '#1a0f00', letterSpacing: '0.06em', margin: '0 0 4px', fontFamily: "'Georgia',serif" }}>{name}</h1>
        <p style={{ fontSize: 11, color: tc, fontStyle: 'italic', margin: '0 0 8px' }}>{jobTitle}</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3px 18px', fontSize: 9, color: '#7c5c3e' }}>
          {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
        </div>
      </div>
      {/* Photo + summary */}
      <div style={{ display: 'flex', gap: 20, marginBottom: 18 }}>
        {photo && <img src={photo} alt="" style={{ width: 80, height: 80, objectFit: 'cover', border: '2px solid ' + tc + '60', flexShrink: 0, filter: 'sepia(20%)' }} />}
        <p style={{ color: '#5c4033', lineHeight: 1.9, fontStyle: 'italic', fontSize: 11, flex: 1 }}>{summary}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
          <VinSec title="Experience" color={tc}>
            {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}><p style={{ fontWeight: 700, fontSize: 11.5, color: '#1a0f00', margin: 0 }}>{e.role}</p><p style={{ fontSize: 9, color: '#9c7c5e', fontStyle: 'italic', margin: 0 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p></div><p style={{ color: tc, fontSize: 10, fontStyle: 'italic', margin: '1px 0 4px' }}>{e.company}</p>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#5c4033', fontSize: 10, lineHeight: 1.7, margin: '2px 0 0' }}>{l}</p>)}</div>)}
          </VinSec>
          <VinSec title="Projects" color={tc}>
            {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0 }}><p style={{ fontWeight: 700, fontSize: 11, color: '#1a0f00', margin: '0 0 2px' }}>{p.name}</p>{p.tech && <p style={{ color: '#9c7c5e', fontSize: 9, fontStyle: 'italic', margin: '0 0 3px' }}>{p.tech}</p>}{p.description && <p style={{ color: '#5c4033', fontSize: 10, lineHeight: 1.7, margin: 0 }}>{p.description}</p>}</div>)}
          </VinSec>
        </div>
        <div>
          <VinSec title="Skills" color={tc}>
            <p style={{ color: '#5c4033', fontSize: 10, lineHeight: 2.1 }}>{skl.map(s => s.name).join(' · ')}</p>
          </VinSec>
          <VinSec title="Education" color={tc}>
            {edu.map(e => <div key={e.id} style={{ marginBottom: 10 }}><p style={{ fontWeight: 700, fontSize: 11, color: '#1a0f00', margin: '0 0 1px' }}>{e.degree}</p><p style={{ color: tc, fontSize: 10, fontStyle: 'italic', margin: '0 0 1px' }}>{e.school}</p><p style={{ color: '#9c7c5e', fontSize: 9, margin: 0 }}>{e.startDate} — {e.endDate}{e.gpa ? ' · GPA: ' + e.gpa : ''}</p></div>)}
          </VinSec>
        </div>
      </div>
    </div>
  )
}
function VinSec({ title, color, children }) {
  return <div style={{ marginBottom: 18 }}><div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}><h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color, margin: 0 }}>{title}</h2><div style={{ flex: 1, height: 1, background: color + '40', borderTop: '1px dashed ' + color + '60' }} /></div>{children}</div>
}

// ── 7: GRADIENT FLOW ── Soft pastel gradient, light flowing design
export function GradientFlowTemplate({ resume }) {
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

  const SH = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <div style={{ width: 18, height: 3, borderRadius: 2, background: `linear-gradient(to right, ${tc}, ${tc}60)` }} />
      <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, margin: 0 }}>{children}</h2>
    </div>
  )

  return (
    <div style={{ background: `linear-gradient(160deg, #faf5ff 0%, #f0f9ff 50%, #f0fdf4 100%)`, fontFamily: 'Arial,sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', padding: '0 0 40px', position: 'relative', overflow: 'hidden' }}>
      {/* Soft blobs */}
      <div style={{ position: 'absolute', top: -60, right: -60, width: 250, height: 250, borderRadius: '50%', background: `${tc}10`, zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: 100, left: -40, width: 180, height: 180, borderRadius: '50%', background: `${tc}07`, zIndex: 0 }} />

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 1, background: `linear-gradient(135deg, ${tc}18 0%, ${tc}08 100%)`, padding: '28px 30px 22px', borderBottom: `1px solid ${tc}20`, display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo
          ? <img src={photo} alt="" style={{ width: 104, height: 104, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}40`, flexShrink: 0, boxShadow: `0 4px 16px ${tc}20` }} />
          : <div style={{ width: 104, height: 104, borderRadius: '50%', background: `${tc}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 900, color: tc, flexShrink: 0 }}>{name.charAt(0)}</div>
        }
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: '#1e1b4b', margin: '0 0 3px' }}>{name}</h1>
          <p style={{ fontSize: 12, color: tc, fontWeight: 600, margin: '0 0 10px' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#4c1d95' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div style={{ position: 'relative', zIndex: 1, padding: '12px 30px', background: `${tc}08`, borderBottom: `1px solid ${tc}15` }}>
        <p style={{ color: '#3730a3', lineHeight: 1.85, margin: 0, fontStyle: 'italic' }}>{summary}</p>
      </div>

      <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 190px', gap: 18, padding: '18px 30px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: 'rgba(255,255,255,0.7)', borderRadius: 12, padding: '14px 16px', border: `1px solid ${tc}15`, backdropFilter: 'blur(8px)' }}>
            <SH>Experience</SH>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, padding: '10px 12px', background: 'white', borderRadius: 8, border: `1px solid ${tc}15`, boxShadow: `0 1px 6px ${tc}08` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 11, color: '#1e1b4b', margin: 0 }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '1px 0' }}>{e.company}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: tc, background: `${tc}10`, border: `1px solid ${tc}20`, padding: '2px 8px', borderRadius: 20 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#4338ca', fontSize: 9.5, lineHeight: 1.6, margin: '2px 0 0' }}>{l}</p>)}
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(255,255,255,0.7)', borderRadius: 12, padding: '14px 16px', border: `1px solid ${tc}15` }}>
            <SH>Projects</SH>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0, padding: '8px 10px', background: 'white', borderRadius: 8, border: `1px solid ${tc}15` }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#1e1b4b', margin: '0 0 3px' }}>{p.name}</p>
                {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 3 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 6px', borderRadius: 3, background: `${tc}10`, color: tc, border: `1px solid ${tc}20`, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
                {p.description && <p style={{ color: '#4338ca', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: 'rgba(255,255,255,0.7)', borderRadius: 12, padding: '14px 16px', border: `1px solid ${tc}15` }}>
            <SH>Skills</SH>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 9.5, color: '#1e1b4b', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
                </div>
                <div style={{ height: 5, background: `${tc}12`, borderRadius: 99 }}>
                  <div style={{ height: '100%', background: `linear-gradient(to right, ${tc}, ${tc}80)`, borderRadius: 99, width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(255,255,255,0.7)', borderRadius: 12, padding: '14px 16px', border: `1px solid ${tc}15` }}>
            <SH>Education</SH>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10, padding: '8px 10px', background: 'white', borderRadius: 8, border: `1px solid ${tc}15` }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#1e1b4b', margin: '0 0 1px' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9, fontWeight: 600, margin: '0 0 1px' }}>{e.school}</p>
                <p style={{ color: '#4338ca', fontSize: 8.5, margin: 0 }}>{e.startDate} — {e.endDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}// ── 8: SIDEBAR ACCENT ── Right sidebar with colored bg, main content left
export function SidebarAccentTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#0369a1' } = resume
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
    <div style={{ background: 'white', fontFamily: 'Arial,sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', display: 'flex' }}>
      {/* Main content */}
      <div style={{ flex: 1, padding: '28px 22px 40px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ paddingBottom: 16, borderBottom: '2px solid ' + tc }}>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: '#111', margin: '0 0 3px', letterSpacing: '-0.01em' }}>{name}</h1>
          <p style={{ fontSize: 12, color: tc, fontWeight: 700, margin: '0 0 8px' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#666' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 3 }}><I size={9} color={tc} />{v}</span>)}
          </div>
        </div>
        <p style={{ color: '#444', lineHeight: 1.8, margin: 0, padding: '10px 14px', background: tc + '07', borderRadius: 7, borderLeft: '4px solid ' + tc }}>{summary}</p>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}><h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, margin: 0 }}>Experience</h2><div style={{ flex: 1, height: 1.5, background: tc + '30' }} /></div>
          {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, paddingLeft: 12, borderLeft: '2px solid ' + tc + '25' }}><div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}><div><p style={{ fontWeight: 800, fontSize: 11, color: '#111', margin: 0 }}>{e.role}</p><p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '1px 0' }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#999', background: '#f8fafc', padding: '2px 7px', borderRadius: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: '2px 0 0' }}>{l}</p>)}</div>)}
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}><h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, margin: 0 }}>Projects</h2><div style={{ flex: 1, height: 1.5, background: tc + '30' }} /></div>
          {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0, padding: '9px 11px', background: tc + '06', borderRadius: 7, border: '1px solid ' + tc + '15' }}><p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 3px' }}>{p.name}</p>{p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 3 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 6px', borderRadius: 3, background: tc + '15', color: tc, fontWeight: 600 }}>{t.trim()}</span>)}</div>}{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}</div>)}
        </div>
      </div>
      {/* Right colored sidebar */}
      <div style={{ width: '30%', background: tc, padding: '28px 16px 40px', color: 'white', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
        {photo ? <img src={photo} alt="" style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.35)', margin: '0 auto 4px' }} /> : <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 900, color: 'white', margin: '0 auto 4px' }}>{name.charAt(0)}</div>}
        <div>
          <p style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.6)', marginBottom: 8 }}>Skills</p>
          {skl.map(s => <div key={s.id} style={{ marginBottom: 6 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9, color: 'rgba(255,255,255,0.9)' }}>{s.name}</span><span style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.5)' }}>{s.level}%</span></div><div style={{ height: 3, background: 'rgba(255,255,255,0.15)', borderRadius: 2 }}><div style={{ height: 3, background: 'rgba(255,255,255,0.8)', borderRadius: 2, width: s.level + '%' }} /></div></div>)}
        </div>
        <div>
          <p style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.6)', marginBottom: 8 }}>Education</p>
          {edu.map(e => <div key={e.id} style={{ marginBottom: 10 }}><p style={{ fontWeight: 700, fontSize: 9.5, color: 'white', margin: '0 0 1px' }}>{e.degree}</p><p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 8.5, margin: '0 0 1px' }}>{e.school}</p><p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 8, margin: 0 }}>{e.startDate} — {e.endDate}</p></div>)}
        </div>
      </div>
    </div>
  )
}

// ── 9: HEXGRID ── Hexagonal skill badges, modern tech feel
export function HexGridTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#6d28d9' } = resume
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
    <div style={{ background: '#fafafa', fontFamily: 'Arial,sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      {/* Header with hex accent */}
      <div style={{ background: 'white', padding: '24px 30px 20px', borderBottom: '3px solid ' + tc, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -30, top: -30, width: 140, height: 140, background: tc + '08', clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, position: 'relative' }}>
          {photo ? <img src={photo} alt="" style={{ width: 76, height: 76, objectFit: 'cover', border: '3px solid ' + tc, flexShrink: 0, clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)' }} /> : <div style={{ width: 76, height: 76, background: tc + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 900, color: tc, flexShrink: 0, clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)' }}>{name.charAt(0)}</div>}
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 900, color: '#111', margin: '0 0 3px' }}>{name}</h1>
            <p style={{ fontSize: 11, color: tc, fontWeight: 700, margin: '0 0 8px' }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#666' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 3 }}><I size={9} color={tc} />{v}</span>)}
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '18px 30px 40px', display: 'grid', gridTemplateColumns: '1fr 200px', gap: 22 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ color: '#444', lineHeight: 1.8, margin: 0, padding: '10px 14px', background: 'white', borderRadius: 8, border: '1px solid ' + tc + '20', borderLeft: '4px solid ' + tc }}>{summary}</p>
          {[{ title: 'Experience', items: exp, render: (e, i, arr) => <div key={e.id} style={{ marginBottom: i < arr.length - 1 ? 12 : 0, padding: '10px 12px', background: 'white', borderRadius: 8, border: '1px solid #e5e7eb', borderTop: '3px solid ' + tc }}><div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}><div><p style={{ fontWeight: 800, fontSize: 11, color: '#111', margin: 0 }}>{e.role}</p><p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '1px 0' }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#999', background: '#f8fafc', padding: '2px 7px', borderRadius: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: '2px 0 0' }}>{l}</p>)}</div> },
            { title: 'Projects', items: prj, render: (p, i, arr) => <div key={p.id} style={{ marginBottom: i < arr.length - 1 ? 8 : 0, padding: '9px 12px', background: 'white', borderRadius: 8, border: '1px solid #e5e7eb' }}><p style={{ fontWeight: 700, fontSize: 10.5, color: '#111', margin: '0 0 3px' }}>{p.name}</p>{p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 3 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 6px', borderRadius: 3, background: tc + '12', color: tc, fontWeight: 600 }}>{t.trim()}</span>)}</div>}{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}</div> }
          ].map(({ title, items, render }) => <div key={title}><div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}><div style={{ width: 16, height: 16, background: tc, clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)' }} /><h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, margin: 0 }}>{title}</h2><div style={{ flex: 1, height: 1.5, background: tc + '25' }} /></div>{items.map((item, i) => render(item, i, items))}</div>)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}><div style={{ width: 16, height: 16, background: tc, clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)' }} /><h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, margin: 0 }}>Skills</h2></div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {skl.map(s => <div key={s.id} style={{ padding: '5px 10px', background: 'white', border: '1px solid ' + tc + '30', borderRadius: 6, fontSize: 9.5, color: '#333', fontWeight: 500 }}>{s.name}</div>)}
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}><div style={{ width: 16, height: 16, background: tc, clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)' }} /><h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, margin: 0 }}>Education</h2></div>
            {edu.map(e => <div key={e.id} style={{ marginBottom: 10, padding: '9px 11px', background: 'white', borderRadius: 8, border: '1px solid #e5e7eb' }}><p style={{ fontWeight: 700, fontSize: 10, color: '#111', margin: '0 0 1px' }}>{e.degree}</p><p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '0 0 1px' }}>{e.school}</p><p style={{ color: '#aaa', fontSize: 9, margin: 0 }}>{e.startDate} — {e.endDate}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 10: CLEAN CORPORATE ── Ultra-professional, clean lines, no frills
export function CleanCorporateTemplate({ resume }) {
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
    <div style={{ background: 'white', fontFamily: 'Arial,sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      {/* Clean top bar */}
      <div style={{ height: 4, background: tc }} />
      <div style={{ padding: '22px 32px 18px', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo && <img src={photo} alt="" style={{ width: 114, height: 114, borderRadius: '50%', objectFit: 'cover', border: '2px solid ' + tc + '30', flexShrink: 0 }} />}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: '#111', margin: '0 0 2px', letterSpacing: '-0.01em' }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontWeight: 700, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 18px', fontSize: 9.5, color: '#666' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ padding: '18px 32px 40px', display: 'grid', gridTemplateColumns: '1fr 200px', gap: 28 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <p style={{ color: '#444', lineHeight: 1.8, margin: 0, fontSize: 10.5 }}>{summary}</p>
          {[{ title: 'Professional Experience', items: exp, render: (e, i, arr) => <div key={e.id} style={{ marginBottom: i < arr.length - 1 ? 14 : 0, paddingBottom: i < arr.length - 1 ? 14 : 0, borderBottom: i < arr.length - 1 ? '1px solid #f3f4f6' : 'none' }}><div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4, marginBottom: 3 }}><div><p style={{ fontWeight: 800, fontSize: 11.5, color: '#111', margin: 0 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 700, margin: '1px 0' }}>{e.company}{e.location ? ' · ' + e.location : ''}</p></div><span style={{ fontSize: 9, color: '#777', background: '#f8fafc', padding: '2px 8px', borderRadius: 4, border: '1px solid #e5e7eb' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 10, lineHeight: 1.65, margin: '2px 0 0' }}>{l}</p>)}</div> },
            { title: 'Projects', items: prj, render: (p, i, arr) => <div key={p.id} style={{ marginBottom: i < arr.length - 1 ? 10 : 0, padding: '9px 12px', background: '#f8fafc', borderRadius: 6, border: '1px solid #e5e7eb' }}><p style={{ fontWeight: 700, fontSize: 11, color: '#111', margin: '0 0 3px' }}>{p.name}</p>{p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 3 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 6px', borderRadius: 3, background: tc + '10', color: tc, fontWeight: 600 }}>{t.trim()}</span>)}</div>}{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}</div> }
          ].map(({ title, items, render }) => <div key={title}><div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}><h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, margin: 0 }}>{title}</h2><div style={{ flex: 1, height: 1.5, background: tc + '25' }} /></div>{items.map((item, i) => render(item, i, items))}</div>)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div><div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}><h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, margin: 0 }}>Skills</h2><div style={{ flex: 1, height: 1.5, background: tc + '25' }} /></div>{skl.map(s => <div key={s.id} style={{ marginBottom: 7 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 10, color: '#333', fontWeight: 500 }}>{s.name}</span><span style={{ fontSize: 8.5, color: '#aaa' }}>{s.level}%</span></div><div style={{ height: 4, background: '#f1f5f9', borderRadius: 999 }}><div style={{ height: 4, background: 'linear-gradient(to right,' + tc + ',' + tc + '80)', borderRadius: 999, width: s.level + '%' }} /></div></div>)}</div>
          <div><div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}><h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, margin: 0 }}>Education</h2><div style={{ flex: 1, height: 1.5, background: tc + '25' }} /></div>{edu.map(e => <div key={e.id} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid #f3f4f6' }}><p style={{ fontWeight: 800, fontSize: 11, color: '#111', margin: '0 0 2px' }}>{e.degree}</p><p style={{ color: tc, fontSize: 10, fontWeight: 700, margin: '0 0 2px' }}>{e.school}</p><p style={{ color: '#aaa', fontSize: 9, margin: 0 }}>{e.startDate} — {e.endDate}{e.gpa ? ' · GPA: ' + e.gpa : ''}</p></div>)}</div>
        </div>
      </div>
    </div>
  )
}
