import { Mail, Phone, MapPin, Globe, Link2, Award } from 'lucide-react'

const SAMPLE = {
  name: 'Prachi Mishra', jobTitle: 'Senior Software Engineer',
  email: 'prachi.mishra@email.com', phone: '+91 98765 43210',
  location: 'Mumbai, India', website: 'prachidev.com', linkedin: 'linkedin.com/in/prachi',
  summary: 'Results-driven Senior Software Engineer with 4+ years of experience designing scalable full-stack applications. Led teams of 6 engineers, reduced system latency by 40%, and shipped products used by 500K+ users.',
  experience: [
    { id: 's1', role: 'Senior Software Engineer', company: 'Google India', location: 'Bengaluru', startDate: 'Jan 2022', endDate: '', current: true, description: '• Architected microservices handling 15M+ API requests/day using Node.js and Kubernetes\n• Led Payments 2.0 platform reducing transaction failures by 35%\n• Mentored 3 junior engineers; 2 received promotions within 12 months' },
    { id: 's2', role: 'Software Engineer', company: 'Razorpay', location: 'Bengaluru', startDate: 'Jul 2020', endDate: 'Dec 2021', current: false, description: '• Built merchant dashboard serving 200K+ active merchants using React & TypeScript\n• Optimized PostgreSQL queries from 800ms to 120ms average response time\n• Integrated 8 third-party payment gateways including Stripe and UPI' },
  ],
  education: [{ id: 'e1', degree: 'B.Tech Computer Science & Engineering', school: 'IIT Bombay', startDate: '2015', endDate: '2019', gpa: '9.2 / 10', achievements: "Dean's List · Best Final Year Project Award" }],
  skills: [
    { id: 'sk1', name: 'JavaScript / TypeScript', level: 95 }, { id: 'sk2', name: 'React / Next.js', level: 92 },
    { id: 'sk3', name: 'Node.js / Express', level: 90 }, { id: 'sk4', name: 'Python / Django', level: 80 },
    { id: 'sk5', name: 'PostgreSQL / MongoDB', level: 85 }, { id: 'sk6', name: 'AWS / Docker', level: 78 },
  ],
  projects: [
    { id: 'p1', name: 'ResumeAI — AI Resume Builder', tech: 'Next.js, MySQL, OpenAI API', link: 'resumeai.vercel.app', description: 'Full-stack SaaS resume builder with AI suggestions, 9 templates, live preview, and PDF export. 2,000+ users in first month.' },
    { id: 'p2', name: 'PayTrack — Expense Analytics', tech: 'React, Node.js, PostgreSQL', link: 'paytrack.app', description: 'Real-time expense tracking with ML-based predictions. Reduced manual bookkeeping by 60% for 500+ beta users.' },
  ],
  certifications: [
    { id: 'c1', name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', date: '2023-04' },
    { id: 'c2', name: 'Google Cloud Professional Data Engineer', issuer: 'Google Cloud', date: '2022-11' },
  ],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}

function g(val, fb) { return val && String(val).trim() !== '' ? val : fb }

export default function ProfessionalTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#1e3a5f' } = resume
  const tc = themeColor

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

  const ST = ({ children }) => (
    <h3 style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, marginBottom: 8, paddingBottom: 4, borderBottom: `2px solid ${tc}` }}>{children}</h3>
  )
  const MT = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
      <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, whiteSpace: 'nowrap' }}>{children}</h2>
      <div style={{ flex: 1, height: 1.5, background: `${tc}35` }} />
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: "'Arial', sans-serif", fontSize: '10.5px', lineHeight: 1.5, minHeight: '297mm', display: 'flex', flexDirection: 'column' }}>

      {/* ── HEADER ── */}
      <div style={{ background: tc, padding: '26px 30px 20px', color: 'white', display: 'flex', alignItems: 'center', gap: 20 }}>
        {photo && (
          <img src={photo} alt="Profile" style={{ width: 70, height: 70, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)', flexShrink: 0 }} />
        )}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '0.01em', marginBottom: 3 }}>{name}</h1>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.75)', marginBottom: 10, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9, color: 'rgba(255,255,255,0.8)' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }, { I: Globe, v: website }, { I: Link2, v: linkedin }]
              .filter(x => x.v)
              .map(({ I, v }, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={8} />{v}</span>
              ))}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ display: 'flex', flex: 1 }}>

        {/* LEFT SIDEBAR */}
        <div style={{ width: '33%', background: '#f7f8fa', padding: '20px 16px 40px', borderRight: '1px solid #e8eaed', flexShrink: 0 }}>

          <div style={{ marginBottom: 16 }}>
            <ST>Profile</ST>
            <p style={{ color: '#444', fontSize: 9.5, lineHeight: 1.75 }}>{summary}</p>
          </div>

          <div style={{ marginBottom: 16 }}>
            <ST>Skills</ST>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 9.5, color: '#333', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: '#999' }}>{s.level || 80}%</span>
                </div>
                <div style={{ height: 3, background: '#ddd', borderRadius: 2 }}>
                  <div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level || 80}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 16 }}>
            <ST>Education</ST>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10 }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#222', lineHeight: 1.3 }}>{e.degree}</p>
                <p style={{ color: '#666', fontSize: 9 }}>{e.school}</p>
                <p style={{ color: '#999', fontSize: 8.5 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: tc, fontSize: 8.5, fontWeight: 600 }}>GPA: {e.gpa}</p>}
                {e.achievements && <p style={{ color: '#777', fontSize: 8.5, fontStyle: 'italic', marginTop: 2 }}>{e.achievements}</p>}
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 16 }}>
            <ST>Certifications</ST>
            {certs.map(c => (
              <div key={c.id} style={{ marginBottom: 8, display: 'flex', gap: 6 }}>
                <Award size={10} color={tc} style={{ flexShrink: 0, marginTop: 1 }} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: 9.5, color: '#222', lineHeight: 1.3 }}>{c.name}</p>
                  <p style={{ color: '#888', fontSize: 8.5 }}>{c.issuer} {c.date ? `· ${c.date}` : ''}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <ST>Languages</ST>
            {langs.map(l => (
              <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 9.5, color: '#333', fontWeight: 600 }}>{l.name}</span>
                <span style={{ fontSize: 8.5, color: '#888' }}>{l.proficiency}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT MAIN */}
        <div style={{ flex: 1, padding: '20px 22px 40px' }}>

          <div style={{ marginBottom: 16 }}>
            <MT>Work Experience</MT>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 11.5, color: '#111' }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 700 }}>
                      {e.company}{e.location ? <span style={{ color: '#888', fontWeight: 400 }}> · {e.location}</span> : ''}
                    </p>
                  </div>
                  <span style={{ fontSize: 8.5, color: '#777', background: '#f0f0f0', padding: '2px 7px', borderRadius: 3, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>
                    {e.startDate} — {e.current ? 'Present' : e.endDate}
                  </span>
                </div>
                {e.description && (
                  <div style={{ marginTop: 4 }}>
                    {e.description.split('\n').filter(Boolean).map((line, li) => (
                      <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.65, marginBottom: 2 }}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div>
            <MT>Projects</MT>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 12 : 0, padding: '8px 10px', background: `${tc}06`, border: `1px solid ${tc}18`, borderRadius: 5 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                  <p style={{ fontWeight: 800, fontSize: 11, color: '#111' }}>{p.name}</p>
                  {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none', flexShrink: 0, marginLeft: 8 }}>🔗 {p.link}</a>}
                </div>
                {p.tech && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 4 }}>
                    {p.tech.split(',').map((t, ti) => (
                      <span key={ti} style={{ fontSize: 8, padding: '1px 6px', borderRadius: 3, background: `${tc}15`, color: tc, border: `1px solid ${tc}25`, fontWeight: 600 }}>{t.trim()}</span>
                    ))}
                  </div>
                )}
                {p.description && <p style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
