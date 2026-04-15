import { Mail, Phone, MapPin, Globe, Link2, Award } from 'lucide-react'

const SAMPLE = {
  name: 'xyz', jobTitle: 'Software Engineer',
  email: 'abc@gmail.com', phone: '+91 98765 43210',
  location: 'Mumbai, India', website: 'abcdev.com', linkedin: 'linkedin.com/in/prachi',
  summary: 'Detail-oriented Software Engineer with 4+ years building clean, efficient web applications. Strong focus on code quality, performance optimization, and developer experience. Committed to continuous learning and delivering measurable impact.',
  experience: [
    { id: 's1', role: 'Software Engineer II', company: 'Microsoft', location: 'Hyderabad', startDate: 'Mar 2022', endDate: '', current: true, description: '• Developed core features for Azure DevOps used by 10M+ developers worldwide\n• Reduced build pipeline execution time by 35% through parallel processing optimizations\n• Authored 15 internal technical RFCs adopted across 4 engineering teams\n• Achieved 98% unit test coverage on critical payment processing modules' },
    { id: 's2', role: 'Software Engineer', company: 'Infosys', location: 'Pune', startDate: 'Jul 2020', endDate: 'Feb 2022', current: false, description: '• Built RESTful APIs for a banking platform serving 2M+ customers\n• Migrated legacy monolith to microservices, reducing deployment time by 70%\n• Received "Rising Star" award for exceptional performance in first year' },
  ],
  education: [{ id: 'e1', degree: 'B.Tech Computer Science', school: 'BITS Pilani', startDate: '2016', endDate: '2020', gpa: '8.9 / 10', achievements: "Dean's Merit List · Hackathon Winner 2019" }],
  skills: [
    { id: 'sk1', name: 'C# / .NET Core', level: 90 }, { id: 'sk2', name: 'JavaScript / TypeScript', level: 88 },
    { id: 'sk3', name: 'React / Angular', level: 85 }, { id: 'sk4', name: 'Azure / AWS', level: 80 },
    { id: 'sk5', name: 'SQL Server / PostgreSQL', level: 85 }, { id: 'sk6', name: 'Docker / CI/CD', level: 78 },
  ],
  projects: [
    { id: 'p1', name: 'DevFlow — CI/CD Optimizer', tech: 'C#, Azure DevOps, React', link: 'devflow.io', description: 'Tool that analyzes and optimizes CI/CD pipelines. Reduced average build time by 40% for 200+ teams in beta.' },
    { id: 'p2', name: 'ResumeAI', tech: 'Next.js, MySQL, OpenAI', link: 'resumeai.vercel.app', description: 'AI-powered resume builder with 9 professional templates and PDF export. 2,000+ users in first month.' },
  ],
  certifications: [
    { id: 'c1', name: 'Microsoft Azure Developer Associate', issuer: 'Microsoft', date: '2023-02' },
    { id: 'c2', name: 'AWS Certified Developer', issuer: 'Amazon Web Services', date: '2022-09' },
  ],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}

function g(val, fb) { return val && String(val).trim() !== '' ? val : fb }

export default function MinimalTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#3b82f6' } = resume
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

  const Sec = ({ label, children }) => (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <h2 style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, whiteSpace: 'nowrap' }}>{label}</h2>
        <div style={{ flex: 1, height: 1, background: `${tc}30` }} />
      </div>
      {children}
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: "'Arial', sans-serif", fontSize: '10.5px', lineHeight: 1.55, padding: '30px 36px', minHeight: '297mm' }}>

      {/* ── HEADER ── */}
      <div style={{ textAlign: 'center', marginBottom: 18, paddingBottom: 14 }}>
        {photo && (
          <img src={photo} alt="Profile" style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}`, margin: '0 auto 10px' }} />
        )}
        <h1 style={{ fontSize: 26, fontWeight: 300, letterSpacing: '0.06em', color: '#111', marginBottom: 5 }}>{name}</h1>
        <p style={{ fontSize: 11, color: tc, fontWeight: 600, letterSpacing: '0.06em', marginBottom: 10 }}>{jobTitle}</p>
        <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${tc}, transparent)`, marginBottom: 10 }} />
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '4px 14px', fontSize: 9.5, color: '#666' }}>
          {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }, { I: Globe, v: website }, { I: Link2, v: linkedin }]
            .filter(x => x.v)
            .map(({ I, v }, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 3 }}><I size={8} color={tc} />{v}</span>
            ))}
        </div>
      </div>

      {/* ── SUMMARY ── */}
      <p style={{ textAlign: 'center', color: '#555', fontSize: 10.5, fontStyle: 'italic', maxWidth: 460, margin: '0 auto 18px', lineHeight: 1.8 }}>{summary}</p>

      {/* ── EXPERIENCE ── */}
      <Sec label="Experience">
        {exp.map((e, i) => (
          <div key={e.id} style={{ display: 'flex', gap: 14, marginBottom: i < exp.length - 1 ? 14 : 0 }}>
            <div style={{ textAlign: 'right', width: 76, flexShrink: 0 }}>
              <p style={{ color: '#999', fontSize: 8.5, lineHeight: 1.4 }}>{e.startDate}</p>
              <p style={{ color: '#999', fontSize: 8.5 }}>{e.current ? 'Present' : e.endDate}</p>
            </div>
            <div style={{ flex: 1, borderLeft: `2px solid ${tc}30`, paddingLeft: 12 }}>
              <p style={{ fontWeight: 800, fontSize: 11.5, color: '#111' }}>{e.role}</p>
              <p style={{ color: tc, fontSize: 10, fontWeight: 600, marginBottom: 4 }}>
                {e.company}{e.location ? ` · ${e.location}` : ''}
              </p>
              {e.description && (
                <div>
                  {e.description.split('\n').filter(Boolean).map((line, li) => (
                    <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.65, marginBottom: 2 }}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </Sec>

      {/* ── EDUCATION ── */}
      <Sec label="Education">
        {edu.map((e, i) => (
          <div key={e.id} style={{ display: 'flex', gap: 14, marginBottom: i < edu.length - 1 ? 10 : 0 }}>
            <div style={{ textAlign: 'right', width: 76, flexShrink: 0 }}>
              <p style={{ color: '#999', fontSize: 8.5 }}>{e.startDate}</p>
              <p style={{ color: '#999', fontSize: 8.5 }}>{e.endDate}</p>
            </div>
            <div style={{ flex: 1, borderLeft: `2px solid ${tc}30`, paddingLeft: 12 }}>
              <p style={{ fontWeight: 800, fontSize: 11, color: '#111' }}>{e.degree}</p>
              <p style={{ color: '#555', fontSize: 10 }}>{e.school}</p>
              {e.gpa && <p style={{ color: tc, fontSize: 9.5, fontWeight: 600 }}>GPA: {e.gpa}</p>}
              {e.achievements && <p style={{ color: '#888', fontSize: 9, fontStyle: 'italic' }}>{e.achievements}</p>}
            </div>
          </div>
        ))}
      </Sec>

      {/* ── SKILLS ── */}
      <Sec label="Skills">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px 20px' }}>
          {skl.map(s => (
            <div key={s.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <span style={{ fontSize: 9.5, color: '#333' }}>{s.name}</span>
                <span style={{ fontSize: 8, color: '#aaa' }}>{s.level || 80}%</span>
              </div>
              <div style={{ height: 3, background: '#eee', borderRadius: 2 }}>
                <div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level || 80}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Sec>

      {/* ── PROJECTS ── */}
      <Sec label="Projects">
        {prj.map((p, i) => (
          <div key={p.id} style={{ display: 'flex', gap: 14, marginBottom: i < prj.length - 1 ? 10 : 0 }}>
            <div style={{ width: 76, flexShrink: 0 }} />
            <div style={{ flex: 1, borderLeft: `2px solid ${tc}30`, paddingLeft: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <p style={{ fontWeight: 800, fontSize: 11, color: '#111' }}>{p.name}</p>
                {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none' }}>{p.link}</a>}
              </div>
              {p.tech && <p style={{ color: '#999', fontSize: 9, marginBottom: 2 }}>{p.tech}</p>}
              {p.description && <p style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}
            </div>
          </div>
        ))}
      </Sec>

      {/* ── CERTIFICATIONS + LANGUAGES ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <Sec label="Certifications">
          {certs.map(c => (
            <div key={c.id} style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
              <Award size={10} color={tc} style={{ flexShrink: 0, marginTop: 1 }} />
              <div>
                <p style={{ fontWeight: 700, fontSize: 9.5, color: '#222', lineHeight: 1.3 }}>{c.name}</p>
                <p style={{ color: '#888', fontSize: 8.5 }}>{c.issuer} {c.date ? `· ${c.date}` : ''}</p>
              </div>
            </div>
          ))}
        </Sec>
        <Sec label="Languages">
          {langs.map(l => (
            <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
              <span style={{ fontSize: 10, color: '#333', fontWeight: 600 }}>{l.name}</span>
              <span style={{ fontSize: 9, color: '#888' }}>{l.proficiency}</span>
            </div>
          ))}
        </Sec>
      </div>
    </div>
  )
}
