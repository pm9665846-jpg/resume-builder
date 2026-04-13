import { Mail, Phone, MapPin, Globe, Link2, Award } from 'lucide-react'

const SAMPLE = {
  name: 'xyz', jobTitle: 'Full Stack Developer',
  email: 'abc@gmail.com', phone: '+91 98765 43210',
  location: 'Mumbai, India', website: 'prachidev.com',
  linkedin: 'linkedin.com/in/prachi',
  summary: 'Full-stack developer with 4+ years building high-performance web applications. Expert in React, Node.js, and cloud infrastructure. Open-source contributor with 500+ GitHub stars across personal projects.',
  experience: [
    { id: 's1', role: 'Senior Full Stack Engineer', company: 'Google India', location: 'Bengaluru', startDate: 'Jan 2022', endDate: '', current: true, description: '• Built distributed microservices handling 15M+ API requests/day with Node.js + Kubernetes\n• Reduced page load time by 60% through code splitting and lazy loading optimizations\n• Designed real-time notification system using WebSockets serving 2M+ concurrent users\n• Reviewed 200+ PRs and established coding standards adopted across 3 teams' },
    { id: 's2', role: 'Software Engineer', company: 'Razorpay', location: 'Bengaluru', startDate: 'Jul 2020', endDate: 'Dec 2021', current: false, description: '• Developed merchant analytics dashboard with React + TypeScript serving 200K+ merchants\n• Optimized critical PostgreSQL queries reducing p99 latency from 800ms to 120ms\n• Built CI/CD pipeline with GitHub Actions cutting deployment time from 45min to 8min' },
  ],
  education: [{ id: 'e1', degree: 'B.Tech Computer Science & Engineering', school: 'IIT Bombay', startDate: '2015', endDate: '2019', gpa: '9.2 / 10', achievements: "Dean's List · ACM ICPC Regionalist" }],
  skills: [
    { id: 'sk1', name: 'JavaScript / TypeScript', level: 95 }, { id: 'sk2', name: 'React / Next.js', level: 92 },
    { id: 'sk3', name: 'Node.js / Express', level: 90 }, { id: 'sk4', name: 'Python / FastAPI', level: 82 },
    { id: 'sk5', name: 'PostgreSQL / Redis', level: 85 }, { id: 'sk6', name: 'AWS / GCP', level: 78 },
    { id: 'sk7', name: 'Docker / Kubernetes', level: 75 }, { id: 'sk8', name: 'GraphQL / REST', level: 88 },
  ],
  projects: [
    { id: 'p1', name: 'Resume Maker', tech: 'Next.js 14, MySQL, OpenAI, Framer Motion', link: 'Resume Maker.vercel.app', description: 'AI-powered resume builder SaaS with 9 professional templates, live preview, and one-click PDF/DOCX export. 2,000+ users in first month, 4.9 rating.' },
    { id: 'p2', name: 'PayTrack', tech: 'React, Node.js, PostgreSQL, Chart.js', link: 'paytrack.app', description: 'Real-time expense analytics with ML-based spending predictions. Reduced manual bookkeeping by 60% for 500+ beta users.' },
  ],
  certifications: [
    { id: 'c1', name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', date: '2023-04' },
    { id: 'c2', name: 'Google Cloud Professional Data Engineer', issuer: 'Google Cloud', date: '2022-11' },
  ],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}

function g(val, fb) { return val && String(val).trim() !== '' ? val : fb }

export default function TechTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#00d4aa' } = resume
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

  const contacts = [
    { icon: Mail, val: email },
    { icon: Phone, val: phone },
    { icon: MapPin, val: location },
    { icon: Globe, val: website },
    { icon: Link2, val: linkedin },
  ].filter(c => c.val)

  return (
    <div style={{ background: 'white', fontFamily: "'Arial', sans-serif", fontSize: '10.5px', lineHeight: 1.5, minHeight: '297mm', display: 'flex' }}>

      {/* ── DARK SIDEBAR ── */}
      <div style={{ width: '35%', background: '#0f172a', padding: '26px 16px 40px', color: 'white', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>

        {/* Avatar + Name */}
        <div>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: `${tc}20`, border: `2px solid ${tc}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, fontSize: 20, fontWeight: 800, color: tc, overflow: 'hidden' }}>
            {photo ? (
              <img src={photo} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              name.charAt(0).toUpperCase()
            )}
          </div>
          <h1 style={{ fontSize: 15, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 3 }}>{name}</h1>
          <p style={{ fontSize: 9.5, color: tc, fontWeight: 600, fontFamily: 'monospace', marginBottom: 12 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {contacts.map(({ icon: Icon, val }, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, fontSize: 8.5, color: '#94a3b8' }}>
                <Icon size={8} color={tc} style={{ marginTop: 1, flexShrink: 0 }} />
                <span style={{ wordBreak: 'break-all' }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 style={{ fontSize: 7.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: tc, marginBottom: 10, fontFamily: 'monospace' }}>// Skills</h3>
          {skl.map(s => (
            <div key={s.id} style={{ marginBottom: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <span style={{ fontSize: 9, color: '#e2e8f0', fontFamily: 'monospace' }}>{s.name}</span>
                <span style={{ fontSize: 7.5, color: '#64748b' }}>{s.level || 80}%</span>
              </div>
              <div style={{ height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
                <div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level || 80}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h3 style={{ fontSize: 7.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: tc, marginBottom: 10, fontFamily: 'monospace' }}>// Education</h3>
          {edu.map(e => (
            <div key={e.id} style={{ marginBottom: 10 }}>
              <p style={{ fontWeight: 700, fontSize: 9.5, color: 'white', lineHeight: 1.3 }}>{e.degree}</p>
              <p style={{ color: '#94a3b8', fontSize: 8.5 }}>{e.school}</p>
              <p style={{ color: '#64748b', fontSize: 8 }}>{e.startDate} — {e.endDate}</p>
              {e.gpa && <p style={{ color: tc, fontSize: 8.5, fontWeight: 600 }}>GPA: {e.gpa}</p>}
              {e.achievements && <p style={{ color: '#64748b', fontSize: 8, fontStyle: 'italic', marginTop: 2 }}>{e.achievements}</p>}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 style={{ fontSize: 7.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: tc, marginBottom: 10, fontFamily: 'monospace' }}>// Certifications</h3>
          {certs.map(c => (
            <div key={c.id} style={{ marginBottom: 8, display: 'flex', gap: 6 }}>
              <Award size={9} color={tc} style={{ flexShrink: 0, marginTop: 1 }} />
              <div>
                <p style={{ fontSize: 9, color: 'white', fontWeight: 600, lineHeight: 1.3 }}>{c.name}</p>
                <p style={{ color: '#64748b', fontSize: 8 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div>
          <h3 style={{ fontSize: 7.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: tc, marginBottom: 10, fontFamily: 'monospace' }}>// Languages</h3>
          {langs.map(l => (
            <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontSize: 9.5, color: '#e2e8f0', fontWeight: 600 }}>{l.name}</span>
              <span style={{ fontSize: 8.5, color: '#64748b' }}>{l.proficiency}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT CONTENT ── */}
      <div style={{ flex: 1, padding: '26px 20px 40px', display: 'flex', flexDirection: 'column', gap: 16 }}>

        {/* Summary */}
        <div style={{ padding: '10px 14px', background: '#f8fafc', borderLeft: `3px solid ${tc}`, borderRadius: '0 6px 6px 0' }}>
          <p style={{ color: '#334155', fontSize: 10, lineHeight: 1.75 }}>{summary}</p>
        </div>

        {/* Experience */}
        <div>
          <h2 style={{ fontSize: 8, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: tc, marginBottom: 12, fontFamily: 'monospace' }}>// Experience</h2>
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0, paddingBottom: i < exp.length - 1 ? 12 : 0, borderBottom: i < exp.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                <div>
                  <p style={{ fontWeight: 800, fontSize: 11.5, color: '#0f172a' }}>{e.role}</p>
                  <p style={{ color: tc, fontSize: 10, fontWeight: 700 }}>
                    {e.company}{e.location ? <span style={{ color: '#94a3b8', fontWeight: 400 }}> · {e.location}</span> : ''}
                  </p>
                </div>
                <span style={{ fontSize: 8, color: 'white', background: tc, padding: '2px 8px', borderRadius: 3, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0, fontFamily: 'monospace' }}>
                  {e.startDate} → {e.current ? 'now' : e.endDate}
                </span>
              </div>
              {e.description && (
                <div style={{ marginTop: 4 }}>
                  {e.description.split('\n').filter(Boolean).map((line, li) => (
                    <p key={li} style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.65, marginBottom: 2 }}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Projects */}
        <div>
          <h2 style={{ fontSize: 8, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: tc, marginBottom: 10, fontFamily: 'monospace' }}>// Projects</h2>
          {prj.map((p, i) => (
            <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '9px 11px', background: '#f8fafc', borderRadius: 6, border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                <p style={{ fontWeight: 800, fontSize: 11, color: '#0f172a' }}>{p.name}</p>
                {p.link && (
                  <a href={`https://${p.link}`} style={{ fontSize: 8, color: tc, textDecoration: 'none', fontFamily: 'monospace', flexShrink: 0, marginLeft: 8 }}>
                    🔗 {p.link}
                  </a>
                )}
              </div>
              {p.tech && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 4 }}>
                  {p.tech.split(',').map((t, ti) => (
                    <span key={ti} style={{ fontSize: 7.5, padding: '1px 6px', borderRadius: 3, background: `${tc}15`, color: tc, border: `1px solid ${tc}25`, fontWeight: 700, fontFamily: 'monospace' }}>{t.trim()}</span>
                  ))}
                </div>
              )}
              {p.description && <p style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
