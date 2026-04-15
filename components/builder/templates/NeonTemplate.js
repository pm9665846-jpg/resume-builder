import { Mail, Phone, MapPin, Globe, Link2, Award, Star, Zap } from 'lucide-react'

// ── NEON DARK: Full dark background resume with neon accents, glowing borders
const SAMPLE = {
  name: 'xyz', jobTitle: 'Senior Software Engineer',
  email: 'prachi@email.com', phone: '+91 98765 43210',
  location: 'Mumbai, India', website: 'abcdev.com', linkedin: 'linkedin.com/in/prachi',
  summary: 'Results-driven Senior Software Engineer with 4+ years building scalable full-stack applications. Led teams of 6 engineers, reduced system latency by 40%, and shipped products used by 500K+ users.',
  experience: [
    { id: 's1', role: 'Senior Software Engineer', company: 'Google India', location: 'Bengaluru', startDate: 'Jan 2022', endDate: '', current: true, description: '• Architected microservices handling 15M+ API requests/day using Node.js and Kubernetes\n• Led Payments 2.0 platform reducing transaction failures by 35%\n• Mentored 3 junior engineers; 2 received promotions within 12 months' },
    { id: 's2', role: 'Software Engineer', company: 'Razorpay', location: 'Bengaluru', startDate: 'Jul 2020', endDate: 'Dec 2021', current: false, description: '• Built merchant dashboard serving 200K+ active merchants using React & TypeScript\n• Optimized PostgreSQL queries from 800ms to 120ms average response time' },
  ],
  education: [{ id: 'e1', degree: 'B.Tech Computer Science', school: 'IIT Bombay', startDate: '2015', endDate: '2019', gpa: '9.2 / 10', achievements: "Dean's List · Best Final Year Project" }],
  skills: [
    { id: 'sk1', name: 'JavaScript / TypeScript', level: 95 }, { id: 'sk2', name: 'React / Next.js', level: 92 },
    { id: 'sk3', name: 'Node.js / Express', level: 90 }, { id: 'sk4', name: 'Python', level: 80 },
    { id: 'sk5', name: 'PostgreSQL / MongoDB', level: 85 }, { id: 'sk6', name: 'AWS / Docker', level: 78 },
  ],
  projects: [
    { id: 'p1', name: 'ResumeAI', tech: 'Next.js, MySQL, OpenAI', link: 'resumeai.vercel.app', description: 'AI-powered resume builder SaaS with 9 templates and PDF export. 2,000+ users in first month.' },
  ],
  certifications: [
    { id: 'c1', name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', date: '2023-04' },
  ],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

export default function NeonTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#00ff88' } = resume
  const tc = themeColor
  const tcDim = `${tc}40`
  const tcGlow = `${tc}20`

  const name = g(personalInfo.name, SAMPLE.name)
  const jobTitle = g(personalInfo.jobTitle, SAMPLE.jobTitle)
  const email = g(personalInfo.email, SAMPLE.email)
  const phone = g(personalInfo.phone, SAMPLE.phone)
  const location = g(personalInfo.location, SAMPLE.location)
  const website = g(personalInfo.website, SAMPLE.website)
  const linkedin = g(personalInfo.linkedin, SAMPLE.linkedin)
  const summary = g(personalInfo.summary, SAMPLE.summary)
  const photo = personalInfo.photo || ''

  const exp = experience.length > 0 ? experience : SAMPLE.experience
  const edu = education.length > 0 ? education : SAMPLE.education
  const skl = skills.length > 0 ? skills : SAMPLE.skills
  const prj = projects.length > 0 ? projects : SAMPLE.projects
  const certs = certifications.length > 0 ? certifications : SAMPLE.certifications
  const langs = languages.length > 0 ? languages : SAMPLE.languages

  const contacts = [
    { icon: Mail, val: email }, { icon: Phone, val: phone },
    { icon: MapPin, val: location }, { icon: Globe, val: website }, { icon: Link2, val: linkedin },
  ].filter(c => c.val)

  const SH = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <Zap size={12} color={tc} />
      <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: tc }}>{children}</h2>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${tcDim}, transparent)` }} />
    </div>
  )

  return (
    <div style={{ background: '#ffffff', color: '#1e293b', fontFamily: "'Arial', sans-serif", fontSize: '10.5px', lineHeight: 1.55, minHeight: '297mm' }}>

      {/* ── HEADER ── */}
      <div style={{ padding: '32px 32px 24px', borderBottom: `2px solid ${tc}`, position: 'relative', overflow: 'hidden', background: '#ffffff' }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', top: -40, left: -40, width: 200, height: 200, borderRadius: '50%', background: `radial-gradient(circle, ${tcGlow} 0%, transparent 70%)`, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 18 }}>
          {photo && (
            <img src={photo} alt="Profile" style={{ width: 114, height: 114, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${tc}`, boxShadow: `0 0 12px ${tc}60`, flexShrink: 0 }} />
          )}
          <div>
            <h1 style={{ fontSize: 30, fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 5 }}>{name}</h1>
            <p style={{ fontSize: 12, fontWeight: 700, color: tc, marginBottom: 14, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px 16px', fontSize: 9 }}>
              {contacts.map(({ icon: Icon, val }, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#475569' }}>
                  <Icon size={9} color={tc} />{val}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        {/* ── LEFT COLUMN ── */}
        <div style={{ width: '38%', padding: '22px 18px', borderRight: `1px solid ${tcDim}`, flexShrink: 0, background: '#ffffff' }}>

          {/* Summary */}
          <div style={{ marginBottom: 20 }}>
            <SH>About</SH>
            <p style={{ color: '#334155', fontSize: 9.5, lineHeight: 1.75 }}>{summary}</p>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: 20 }}>
            <SH>Skills</SH>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 7 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 9.5, color: '#1e293b' }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: tc }}>{s.level || 80}%</span>
                </div>
                <div style={{ height: 3, background: '#e2e8f0', borderRadius: 2 }}>
                  <div style={{ height: 3, background: `linear-gradient(to right, ${tc}, ${tc}80)`, borderRadius: 2, width: `${s.level || 80}%`, boxShadow: `0 0 6px ${tc}60` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div style={{ marginBottom: 20 }}>
            <SH>Education</SH>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10, padding: '8px 10px', background: '#f8fafc', border: `1px solid ${tcDim}`, borderRadius: 6 }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#0f172a', lineHeight: 1.3 }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9, marginTop: 2 }}>{e.school}</p>
                <p style={{ color: '#64748b', fontSize: 8.5 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#64748b', fontSize: 8.5 }}>GPA: {e.gpa}</p>}
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: 20 }}>
            <SH>Certifications</SH>
            {certs.map(c => (
              <div key={c.id} style={{ display: 'flex', gap: 7, marginBottom: 8 }}>
                <Award size={10} color={tc} style={{ flexShrink: 0, marginTop: 1 }} />
                <div>
                  <p style={{ fontSize: 9.5, color: '#1e293b', fontWeight: 600, lineHeight: 1.3 }}>{c.name}</p>
                  <p style={{ color: '#64748b', fontSize: 8.5 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div>
            <SH>Languages</SH>
            {langs.map(l => (
              <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <span style={{ fontSize: 10, color: '#1e293b', fontWeight: 600 }}>{l.name}</span>
                <span style={{ fontSize: 8.5, padding: '2px 8px', borderRadius: 999, background: tcGlow, border: `1px solid ${tcDim}`, color: tc }}>{l.proficiency}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div style={{ flex: 1, padding: '22px 22px', background: '#ffffff' }}>

          {/* Experience */}
          <div style={{ marginBottom: 20 }}>
            <SH>Experience</SH>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 16 : 0, position: 'relative', paddingLeft: 16 }}>
                {/* Timeline dot */}
                <div style={{ position: 'absolute', left: 0, top: 5, width: 8, height: 8, borderRadius: '50%', background: tc, boxShadow: `0 0 8px ${tc}` }} />
                <div style={{ position: 'absolute', left: 3.5, top: 13, bottom: i < exp.length - 1 ? -8 : 0, width: 1, background: `linear-gradient(to bottom, ${tcDim}, transparent)` }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 11.5, color: '#0f172a' }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>
                      {e.company}{e.location ? <span style={{ color: '#64748b', fontWeight: 400 }}> · {e.location}</span> : ''}
                    </p>
                  </div>
                  <span style={{ fontSize: 8.5, color: tc, background: tcGlow, border: `1px solid ${tcDim}`, padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>
                    {e.startDate} — {e.current ? 'Present' : e.endDate}
                  </span>
                </div>
                {e.description && (
                  <div style={{ marginTop: 5 }}>
                    {e.description.split('\n').filter(Boolean).map((line, li) => (
                      <p key={li} style={{ color: '#334155', fontSize: 9.5, lineHeight: 1.65, marginBottom: 2 }}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <SH>Projects</SH>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '10px 12px', background: '#f8fafc', border: `1px solid ${tcDim}`, borderRadius: 8, boxShadow: `0 0 12px ${tcGlow}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                  <p style={{ fontWeight: 800, fontSize: 11, color: '#0f172a' }}>{p.name}</p>
                  {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none', flexShrink: 0, marginLeft: 8 }}>🔗 {p.link}</a>}
                </div>
                {p.tech && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 5 }}>
                    {p.tech.split(',').map((t, ti) => (
                      <span key={ti} style={{ fontSize: 8, padding: '1px 7px', borderRadius: 3, background: tcGlow, color: tc, border: `1px solid ${tcDim}`, fontWeight: 700 }}>{t.trim()}</span>
                    ))}
                  </div>
                )}
                {p.description && <p style={{ color: '#334155', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
