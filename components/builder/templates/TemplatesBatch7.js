import { Mail, Phone, MapPin, Globe, Link2, Award } from 'lucide-react'
const S = {
  name: 'xyz', jobTitle: 'Software Engineer', email: 'prachi@email.com', phone: '+91 98765 43210', location: 'Mumbai, India',
  summary: 'Senior Software Engineer with 4+ years building scalable full-stack applications. Led teams, reduced latency by 40%, shipped products used by 500K+ users.',
  experience: [{ id: 's1', role: 'Senior Engineer', company: 'Google India', location: 'Bengaluru', startDate: 'Jan 2022', endDate: '', current: true, description: '• Architected microservices handling 15M+ API requests/day\n• Led Payments 2.0 reducing failures by 35%' }, { id: 's2', role: 'Software Engineer', company: 'Razorpay', location: 'Bengaluru', startDate: 'Jul 2020', endDate: 'Dec 2021', current: false, description: '• Built merchant dashboard for 200K+ merchants\n• Optimized queries from 800ms to 120ms' }],
  education: [{ id: 'e1', degree: 'B.Tech Computer Science', school: 'IIT Bombay', startDate: '2015', endDate: '2019', gpa: '9.2/10' }],
  skills: [{ id: 'sk1', name: 'JavaScript', level: 95 }, { id: 'sk2', name: 'React', level: 92 }, { id: 'sk3', name: 'Node.js', level: 90 }, { id: 'sk4', name: 'Python', level: 80 }, { id: 'sk5', name: 'AWS', level: 78 }, { id: 'sk6', name: 'Docker', level: 75 }],
  projects: [{ id: 'p1', name: 'ResumeAI', tech: 'Next.js, MySQL, OpenAI', link: 'resumeai.vercel.app', description: 'AI resume builder with 100 templates. 2,000+ users in first month.' }],
  certifications: [{ id: 'c1', name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', date: '2023-04' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}
function g(v, f) { return v && String(v).trim() !== '' ? v : f }

// ── 56: Deco ── Art Deco inspired (Pink Flow)
export function DecoTemplate({ resume }) {
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

  const SH = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, #f9a8d4)' }} />
      <h2 style={{ fontSize: 8.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#be185d', whiteSpace: 'nowrap' }}>✦ {children} ✦</h2>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, #f9a8d4)' }} />
    </div>
  )

  return (
    <div style={{ background: '#fff0f6', fontFamily: 'Georgia, serif', fontSize: 10.5, lineHeight: 1.6, minHeight: '297mm', position: 'relative', overflow: 'hidden' }}>

      {/* Flowing background blobs */}
      <div style={{ position: 'absolute', top: -60, right: -60, width: 280, height: 280, borderRadius: '60% 40% 55% 45% / 45% 55% 45% 55%', background: 'linear-gradient(135deg, #fbcfe8, #f9a8d4)', opacity: 0.35, zIndex: 0 }} />
      <div style={{ position: 'absolute', top: 120, left: -80, width: 220, height: 220, borderRadius: '40% 60% 45% 55% / 55% 45% 55% 45%', background: 'linear-gradient(135deg, #fce7f3, #fbcfe8)', opacity: 0.25, zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: 80, right: -40, width: 200, height: 200, borderRadius: '55% 45% 60% 40% / 40% 60% 40% 60%', background: 'linear-gradient(135deg, #f9a8d4, #fce7f3)', opacity: 0.2, zIndex: 0 }} />

      {/* ── HEADER ── */}
      <div style={{ position: 'relative', zIndex: 1, padding: '32px 36px 24px', textAlign: 'center', borderBottom: '1px solid #fbcfe8' }}>
        {/* Top deco line */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ height: 1, width: 60, background: 'linear-gradient(to right, transparent, #f472b6)' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#f472b6' }} />
          <div style={{ height: 1, width: 60, background: 'linear-gradient(to left, transparent, #f472b6)' }} />
        </div>

        {photo && <img src={photo} alt="" style={{ width: 76, height: 76, borderRadius: '50%', objectFit: 'cover', border: '3px solid #f9a8d4', margin: '0 auto 14px', display: 'block', boxShadow: '0 4px 20px #fbcfe880' }} />}

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 6 }}>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, #f9a8d4)' }} />
          <h1 style={{ fontSize: 26, fontWeight: 400, color: '#831843', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{name}</h1>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, #f9a8d4)' }} />
        </div>

        <p style={{ fontSize: 10, color: '#db2777', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 12, fontStyle: 'italic' }}>{jobTitle}</p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '4px 18px', fontSize: 9, color: '#9d174d' }}>
          {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color="#f472b6" />{v}</span>
          ))}
        </div>

        {/* Bottom deco line */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 14 }}>
          <div style={{ height: 1, width: 40, background: 'linear-gradient(to right, transparent, #f472b6)' }} />
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#f472b6' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ec4899' }} />
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#f472b6' }} />
          <div style={{ height: 1, width: 40, background: 'linear-gradient(to left, transparent, #f472b6)' }} />
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ position: 'relative', zIndex: 1, padding: '20px 36px 40px' }}>

        {/* Summary */}
        <p style={{ color: '#9d174d', lineHeight: 1.9, marginBottom: 20, fontStyle: 'italic', textAlign: 'center', fontSize: 10.5, background: 'linear-gradient(135deg, #fce7f3, #fff0f6)', borderRadius: 10, padding: '12px 18px', border: '1px solid #fbcfe8' }}>{summary}</p>

        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 24 }}>
          {/* Left */}
          <div>
            <SH>Experience</SH>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0, paddingBottom: i < exp.length - 1 ? 14 : 0, borderBottom: i < exp.length - 1 ? '1px dashed #fbcfe8' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 11.5, color: '#831843' }}>{e.role}</p>
                    <p style={{ color: '#db2777', fontSize: 10, fontStyle: 'italic' }}>{e.company}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: '#be185d', background: '#fce7f3', padding: '2px 8px', borderRadius: 20, border: '1px solid #fbcfe8', whiteSpace: 'nowrap', marginLeft: 8 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#9d174d', fontSize: 9.5, lineHeight: 1.7, marginTop: 3 }}>{l}</p>)}
              </div>
            ))}

            <div style={{ marginTop: 18 }}>
              <SH>Projects</SH>
              {prj.map((p, i) => (
                <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '8px 12px', background: 'linear-gradient(135deg, #fce7f3, #fff0f6)', borderRadius: 8, border: '1px solid #fbcfe8' }}>
                  <p style={{ fontWeight: 700, fontSize: 11, color: '#831843' }}>{p.name}</p>
                  {p.tech && <p style={{ fontSize: 8.5, color: '#db2777', marginBottom: 2, fontStyle: 'italic' }}>{p.tech}</p>}
                  {p.description && <p style={{ color: '#9d174d', fontSize: 9.5, lineHeight: 1.65 }}>{p.description}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <SH>Skills</SH>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 9.5, color: '#831843', fontWeight: 600 }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: '#db2777' }}>{s.level}%</span>
                </div>
                <div style={{ height: 5, background: '#fce7f3', borderRadius: 99, overflow: 'hidden' }}>
                  <div style={{ height: '100%', borderRadius: 99, width: `${s.level}%`, background: 'linear-gradient(to right, #f9a8d4, #ec4899)' }} />
                </div>
              </div>
            ))}

            <div style={{ marginTop: 18 }}>
              <SH>Education</SH>
              {edu.map(e => (
                <div key={e.id} style={{ marginBottom: 10, padding: '10px 12px', background: 'linear-gradient(135deg, #fce7f3, #fff0f6)', borderRadius: 8, border: '1px solid #fbcfe8' }}>
                  <p style={{ fontWeight: 700, fontSize: 10.5, color: '#831843' }}>{e.degree}</p>
                  <p style={{ color: '#db2777', fontSize: 9.5, fontStyle: 'italic' }}>{e.school}</p>
                  <p style={{ color: '#be185d', fontSize: 9 }}>{e.startDate} — {e.endDate}</p>
                  {e.gpa && <p style={{ color: '#9d174d', fontSize: 8.5 }}>GPA: {e.gpa}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 57: Neon Grid ── Neon on dark grid
export function NeonGridTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#22d3ee' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const tcLight = `${tc}18`
  const tcMid = `${tc}35`
  return (
    <div style={{ background: '#f0fdff', backgroundImage: `linear-gradient(${tc}12 1px, transparent 1px), linear-gradient(90deg, ${tc}12 1px, transparent 1px)`, backgroundSize: '28px 28px', color: '#0f172a', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', padding: '24px 28px 40px' }}>

      {/* Header card */}
      <div style={{ background: 'rgba(255,255,255,0.92)', border: `1.5px solid ${tcMid}`, borderRadius: 14, padding: '20px 24px', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 18, boxShadow: `0 4px 24px ${tc}18` }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${tc}`, flexShrink: 0 }} />}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: '#0f172a', marginBottom: 3 }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontWeight: 700, marginBottom: 8, letterSpacing: '0.05em' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#475569' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>)}
          </div>
        </div>
        {/* Decorative corner accent */}
        <div style={{ width: 48, height: 48, borderTop: `3px solid ${tc}`, borderRight: `3px solid ${tc}`, borderRadius: '0 10px 0 0', alignSelf: 'flex-start', opacity: 0.5 }} />
      </div>

      {/* Summary card */}
      <div style={{ background: 'rgba(255,255,255,0.88)', border: `1px solid ${tcMid}`, borderRadius: 12, padding: '14px 18px', marginBottom: 14, boxShadow: `0 2px 12px ${tc}10` }}>
        <p style={{ color: '#334155', fontSize: 10.5, lineHeight: 1.85 }}>{summary}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 14 }}>
        <div>
          {/* Experience */}
          <div style={{ background: 'rgba(255,255,255,0.88)', border: `1px solid ${tcMid}`, borderRadius: 12, padding: '16px 18px', marginBottom: 14, boxShadow: `0 2px 12px ${tc}10` }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ display: 'inline-block', width: 14, height: 2, background: tc, borderRadius: 1 }} />Experience
            </h2>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0, paddingBottom: i < exp.length - 1 ? 12 : 0, borderBottom: i < exp.length - 1 ? `1px dashed ${tcLight}` : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 11, color: '#0f172a' }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: tc, background: tcLight, padding: '2px 8px', borderRadius: 4, border: `1px solid ${tcMid}`, whiteSpace: 'nowrap', marginLeft: 8 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.65, marginTop: 3 }}>{l}</p>)}
              </div>
            ))}
          </div>

          {/* Projects */}
          <div style={{ background: 'rgba(255,255,255,0.88)', border: `1px solid ${tcMid}`, borderRadius: 12, padding: '16px 18px', boxShadow: `0 2px 12px ${tc}10` }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ display: 'inline-block', width: 14, height: 2, background: tc, borderRadius: 1 }} />Projects
            </h2>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#0f172a' }}>{p.name}</p>
                {p.tech && <p style={{ fontSize: 8.5, color: tc, marginBottom: 2, fontWeight: 600 }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Skills */}
          <div style={{ background: 'rgba(255,255,255,0.88)', border: `1px solid ${tcMid}`, borderRadius: 12, padding: '16px 18px', marginBottom: 14, boxShadow: `0 2px 12px ${tc}10` }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ display: 'inline-block', width: 14, height: 2, background: tc, borderRadius: 1 }} />Skills
            </h2>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 7 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 9.5, color: '#1e293b', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
                </div>
                <div style={{ height: 4, background: tcLight, borderRadius: 2, border: `1px solid ${tcMid}` }}>
                  <div style={{ height: '100%', background: `linear-gradient(to right, ${tc}, ${tc}90)`, borderRadius: 2, width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div style={{ background: 'rgba(255,255,255,0.88)', border: `1px solid ${tcMid}`, borderRadius: 12, padding: '16px 18px', boxShadow: `0 2px 12px ${tc}10` }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ display: 'inline-block', width: 14, height: 2, background: tc, borderRadius: 1 }} />Education
            </h2>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10, padding: '8px 10px', background: tcLight, border: `1px solid ${tcMid}`, borderRadius: 8 }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#0f172a' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600 }}>{e.school}</p>
                <p style={{ color: '#64748b', fontSize: 9 }}>{e.startDate} — {e.endDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 58: Linen ── Warm linen texture feel
export function LinenTemplate({ resume }) {
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
    <div style={{ background: '#fdf6e3', fontFamily: 'Georgia, serif', fontSize: 10.5, lineHeight: 1.65, padding: '32px 40px', minHeight: '297mm', color: '#3d2b1f' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20, paddingBottom: 16, borderBottom: `2px solid ${tc}40` }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${tc}60`, flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 400, letterSpacing: '0.04em', marginBottom: 4 }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontStyle: 'italic', marginBottom: 8 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 16px', fontSize: 9.5, color: '#7c5c3e' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <p style={{ fontStyle: 'italic', color: '#5c4033', lineHeight: 1.9, marginBottom: 18 }}>{summary}</p>
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 24 }}>
        <div>
          <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 12, borderBottom: `1px dashed ${tc}40`, paddingBottom: 4 }}>Experience</h2>
          {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><p style={{ fontWeight: 700, fontSize: 11.5 }}>{e.role}</p><p style={{ fontSize: 9, color: '#9c7c5e', fontStyle: 'italic' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p></div><p style={{ color: tc, fontSize: 10, fontStyle: 'italic', marginBottom: 4 }}>{e.company}</p>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#5c4033', fontSize: 10, lineHeight: 1.7 }}>{l}</p>)}</div>)}
          <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 12, borderBottom: `1px dashed ${tc}40`, paddingBottom: 4, marginTop: 16 }}>Projects</h2>
          {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0 }}><p style={{ fontWeight: 700, fontSize: 11 }}>{p.name}</p>{p.description && <p style={{ color: '#5c4033', fontSize: 10, lineHeight: 1.7 }}>{p.description}</p>}</div>)}
        </div>
        <div>
          <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 12, borderBottom: `1px dashed ${tc}40`, paddingBottom: 4 }}>Skills</h2>
          <p style={{ color: '#5c4033', fontSize: 10, lineHeight: 2 }}>{skl.map(s => s.name).join(' · ')}</p>
          <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, marginBottom: 12, borderBottom: `1px dashed ${tc}40`, paddingBottom: 4, marginTop: 16 }}>Education</h2>
          {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{e.degree}</p><p style={{ color: '#9c7c5e', fontSize: 10, fontStyle: 'italic' }}>{e.school}</p><p style={{ color: '#b8956a', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
        </div>
      </div>
    </div>
  )
}

// ── 59: Prism ── Rainbow prism accent bar
export function PrismTemplate({ resume }) {
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
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      <div style={{ height: 6, background: 'linear-gradient(to right, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #8b5cf6, #ec4899)' }} />
      <div style={{ padding: '24px 32px 20px', borderBottom: `1px solid #e5e7eb`, display: 'flex', alignItems: 'center', gap: 18 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}`, flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: '#111', marginBottom: 3 }}>{name}</h1>
          <p style={{ fontSize: 12, color: tc, fontWeight: 700, marginBottom: 8 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: '#555' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 32px 40px' }}>
        <p style={{ color: '#444', lineHeight: 1.8, marginBottom: 16, padding: '12px 16px', background: `${tc}08`, borderRadius: 8 }}>{summary}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }}>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Experience</h2>
            {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, marginTop: 14 }}>Projects</h2>
            {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}
          </div>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Skills</h2>
            {skl.map((s, i) => { const colors = ['#ef4444','#f97316','#eab308','#22c55e','#3b82f6','#8b5cf6']; const c = colors[i % colors.length]; return <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 4, background: '#f3f4f6', borderRadius: 999 }}><div style={{ height: 4, background: c, borderRadius: 999, width: `${s.level}%` }} /></div></div> })}
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, marginTop: 14 }}>Education</h2>
            {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 60: Stacked ── Stacked full-width sections
export function StackedTemplate({ resume }) {
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
  const Sec = ({ title, bg, children }) => <div style={{ background: bg || 'white', padding: '16px 32px', marginBottom: 2 }}><h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>{title}</h2>{children}</div>
  return (
    <div style={{ background: '#f8fafc', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
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
      <Sec title="Profile" bg="white"><p style={{ color: '#444', lineHeight: 1.8 }}>{summary}</p></Sec>
      <Sec title="Experience" bg="#f8fafc">{exp.map((e, i) => <div key={e.id} style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 16, marginBottom: i < exp.length - 1 ? 12 : 0 }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role} — <span style={{ color: tc }}>{e.company}</span></p>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div><p style={{ fontSize: 8.5, color: '#777', textAlign: 'right' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p></div>)}</Sec>
      <Sec title="Skills" bg="white"><div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px 20px' }}>{skl.map(s => <div key={s.id}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 3, background: '#e5e7eb', borderRadius: 2 }}><div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level}%` }} /></div></div>)}</div></Sec>
      <Sec title="Education" bg="#f8fafc">{edu.map(e => <div key={e.id} style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 700, fontSize: 11 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 10 }}>{e.school}</p></div><p style={{ fontSize: 9, color: '#999' }}>{e.startDate} — {e.endDate}</p></div>)}</Sec>
      <Sec title="Projects" bg="white">{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name} {p.tech && <span style={{ color: '#888', fontWeight: 400, fontSize: 9 }}>— {p.tech}</span>}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}</Sec>
    </div>
  )
}

// ── 61: Neon Minimal ── Minimal with neon pop
export function NeonMinimalTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#a855f7' } = resume
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
    <div style={{ background: '#fafafa', fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10.5, lineHeight: 1.6, padding: '36px 44px', minHeight: '297mm' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 10 }}>
          {photo && <img src={photo} alt="" style={{ width: 68, height: 68, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${tc}`, flexShrink: 0 }} />}
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 300, color: '#111', letterSpacing: '-0.01em', marginBottom: 4 }}>{name}</h1>
            <p style={{ fontSize: 12, color: tc, fontWeight: 600 }}>{jobTitle}</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 20, fontSize: 9.5, color: '#888' }}>
          {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
        </div>
      </div>
      <div style={{ width: 40, height: 3, background: tc, borderRadius: 2, marginBottom: 20 }} />
      <p style={{ color: '#555', lineHeight: 1.9, marginBottom: 24, fontSize: 11 }}>{summary}</p>
      <div style={{ marginBottom: 22 }}><h2 style={{ fontSize: 8.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 14 }}>Experience</h2>{exp.map((e, i) => <div key={e.id} style={{ display: 'flex', gap: 20, marginBottom: i < exp.length - 1 ? 14 : 0 }}><div style={{ width: 80, flexShrink: 0, textAlign: 'right' }}><p style={{ fontSize: 9, color: '#aaa', lineHeight: 1.4 }}>{e.startDate}</p><p style={{ fontSize: 9, color: '#aaa' }}>{e.current ? 'Present' : e.endDate}</p></div><div style={{ flex: 1, borderLeft: `2px solid ${tc}30`, paddingLeft: 14 }}><p style={{ fontWeight: 600, fontSize: 11.5 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, marginBottom: 4 }}>{e.company}</p>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#555', fontSize: 10, lineHeight: 1.65 }}>{l}</p>)}</div></div>)}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 22 }}>
        <div><h2 style={{ fontSize: 8.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 14 }}>Skills</h2><div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>{skl.map(s => <span key={s.id} style={{ fontSize: 9.5, padding: '4px 12px', borderRadius: 999, border: `1.5px solid ${tc}40`, color: '#333', fontWeight: 500 }}>{s.name}</span>)}</div></div>
        <div><h2 style={{ fontSize: 8.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 14 }}>Education</h2>{edu.map(e => <div key={e.id}><p style={{ fontWeight: 600, fontSize: 11 }}>{e.degree}</p><p style={{ color: '#888', fontSize: 10 }}>{e.school}</p><p style={{ color: '#aaa', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}</div>
      </div>
      <div><h2 style={{ fontSize: 8.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc, marginBottom: 14 }}>Projects</h2>{prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0 }}><p style={{ fontWeight: 600, fontSize: 11 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 10, lineHeight: 1.65 }}>{p.description}</p>}</div>)}</div>
    </div>
  )
}

// ── 62: Coral ── Coral & white fresh
export function CoralTemplate({ resume }) {
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
  return (
    <div style={{ background: 'white', fontFamily: 'Arial, sans-serif', fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      <div style={{ background: `linear-gradient(to bottom right, #fff1f2, #ffe4e6)`, padding: '26px 32px 20px', borderBottom: `3px solid ${tc}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}`, flexShrink: 0 }} />}
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
        <p style={{ color: '#444', lineHeight: 1.8, marginBottom: 16, padding: '12px 16px', background: '#fff1f2', borderRadius: 8 }}>{summary}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }}>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Experience</h2>
            {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 12 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.company}</p></div><span style={{ fontSize: 8.5, color: '#777', background: '#fff1f2', padding: '2px 8px', borderRadius: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{l}</p>)}</div>)}
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, marginTop: 14 }}>Projects</h2>
            {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}><p style={{ fontWeight: 700, fontSize: 10.5 }}>{p.name}</p>{p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}</div>)}
          </div>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10 }}>Skills</h2>
            {skl.map(s => <div key={s.id} style={{ marginBottom: 5 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 9.5 }}>{s.name}</span><span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span></div><div style={{ height: 4, background: '#ffe4e6', borderRadius: 999 }}><div style={{ height: 4, background: tc, borderRadius: 999, width: `${s.level}%` }} /></div></div>)}
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 10, marginTop: 14 }}>Education</h2>
            {edu.map(e => <div key={e.id} style={{ marginBottom: 8 }}><p style={{ fontWeight: 700, fontSize: 10 }}>{e.degree}</p><p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p><p style={{ color: '#999', fontSize: 9 }}>{e.startDate} — {e.endDate}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 63: Sage ── Sage green calm
export function SageTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], themeColor = '#4d7c0f' } = resume
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
    <div style={{ background: '#f7fdf4', fontFamily: 'Georgia, serif', fontSize: 10.5, lineHeight: 1.65, minHeight: '297mm' }}>
      <div style={{ background: tc, padding: '26px 32px 20px', color: 'white', display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)', flexShrink: 0 }} />}
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 4 }}>{name}</h1>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', marginBottom: 10 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: 'rgba(255,255,255,0.8)' }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>
      <div style={{ padding: '20px 32px 40px' }}>
        <p style={{ color: '#3f5c2e', lineHeight: 1.85, marginBottom: 18, fontStyle: 'italic', borderBottom: `1px solid ${tc}30`, paddingBottom: 14 }}>{summary}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 24 }}>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, marginBottom: 12 }}>Experience</h2>
            {exp.map((e, i) => <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><p style={{ fontWeight: 700, fontSize: 11.5 }}>{e.role}</p><p style={{ color: tc, fontSize: 10, fontStyle: 'italic' }}>{e.company}</p></div><p style={{ fontSize: 9, color: '#999', fontStyle: 'italic' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p></div>{e.description && e.description.split('\n').filter(Boolean).map((l, li) => <p key={li} style={{ color: '#3f5c2e', fontSize: 10, lineHeight: 1.7 }}>{l}</p>)}</div>)}
            <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, marginBottom: 12, marginTop: 16 }}>Projects</h2>
            {prj.map((p, i) => <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0 }}><p style={{ fontWeight: 700, fontSize: 11 }}>{p.name}</p>{p.description && <p style={{ color: '#3f5c2e', fontSize: 10, lineHeight: 1.7 }}>{p.description}</p>}</div>)}
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
