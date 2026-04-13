import { Mail, Phone, MapPin, Globe, Link2, Award, Star } from 'lucide-react'

const SAMPLE = {
  name: 'Prachi Mishra', jobTitle: 'Senior Software Engineer',
  email: 'prachi.mishra@email.com', phone: '+91 98765 43210',
  location: 'Mumbai, Maharashtra, India',
  website: 'prachidev.com', linkedin: 'linkedin.com/in/prachi-mishra',
  summary: 'Results-driven Senior Software Engineer with 4+ years of experience designing and building scalable full-stack web applications. Proven track record of leading cross-functional teams, reducing system latency by 40%, and shipping products used by 500K+ users. Passionate about clean architecture, developer experience, and mentoring junior engineers.',
  experience: [
    { id: 's1', role: 'Senior Software Engineer', company: 'Google India', location: 'Bengaluru, India', startDate: 'Jan 2022', endDate: '', current: true, description: '• Architected and deployed microservices handling 15M+ API requests/day using Node.js and Kubernetes\n• Led a team of 6 engineers to deliver the Payments 2.0 platform, reducing transaction failures by 35%\n• Implemented real-time data pipelines with Apache Kafka, improving data freshness from 5 min to 30 sec\n• Mentored 3 junior engineers; 2 received promotions within 12 months' },
    { id: 's2', role: 'Software Engineer', company: 'Razorpay', location: 'Bengaluru, India', startDate: 'Jul 2020', endDate: 'Dec 2021', current: false, description: '• Built the merchant dashboard using React and TypeScript, serving 200K+ active merchants\n• Optimized PostgreSQL queries reducing average response time from 800ms to 120ms\n• Developed automated testing suite achieving 92% code coverage across critical payment flows\n• Integrated 8 third-party payment gateways including Stripe, PayPal, and UPI' },
    { id: 's3', role: 'Junior Developer', company: 'Infosys', location: 'Pune, India', startDate: 'Jun 2019', endDate: 'Jun 2020', current: false, description: '• Developed RESTful APIs for an e-commerce platform serving 50K daily active users\n• Collaborated with UX team to redesign checkout flow, increasing conversion rate by 18%' },
  ],
  education: [
    { id: 'e1', degree: 'B.Tech in Computer Science & Engineering', school: 'IIT Bombay', startDate: '2015', endDate: '2019', gpa: '9.2 / 10', achievements: "Dean's List all semesters · Best Final Year Project Award" },
  ],
  skills: [
    { id: 'sk1', name: 'JavaScript / TypeScript', level: 95 }, { id: 'sk2', name: 'React / Next.js', level: 92 },
    { id: 'sk3', name: 'Node.js / Express', level: 90 }, { id: 'sk4', name: 'Python / Django', level: 80 },
    { id: 'sk5', name: 'PostgreSQL / MongoDB', level: 85 }, { id: 'sk6', name: 'AWS / GCP', level: 78 },
    { id: 'sk7', name: 'Docker / Kubernetes', level: 75 }, { id: 'sk8', name: 'System Design', level: 88 },
  ],
  projects: [
    { id: 'p1', name: 'ResumeAI — AI Resume Builder', tech: 'Next.js 14, MySQL, OpenAI API, Framer Motion', link: 'resumeai.vercel.app', description: 'Full-stack SaaS resume builder with AI-powered suggestions, 9 professional templates, live preview, and PDF/DOCX export. 2,000+ users in first month.' },
    { id: 'p2', name: 'PayTrack — Expense Analytics', tech: 'React, Node.js, PostgreSQL, Chart.js', link: 'paytrack.app', description: 'Real-time expense tracking dashboard with ML-based spending predictions. Reduced manual bookkeeping time by 60% for 500+ beta users.' },
  ],
  certifications: [
    { id: 'c1', name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', date: '2023-04', credentialId: 'AWS-SAA-C03-12345' },
    { id: 'c2', name: 'Google Cloud Professional Data Engineer', issuer: 'Google Cloud', date: '2022-11' },
  ],
  languages: [
    { id: 'l1', name: 'English', proficiency: 'Fluent' },
    { id: 'l2', name: 'Hindi', proficiency: 'Native' },
    { id: 'l3', name: 'Marathi', proficiency: 'Native' },
  ],
}

function get(val, fallback) {
  return val && String(val).trim() !== '' ? val : fallback
}

export default function ModernTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#8b5cf6', fontFamily = "'Arial', 'Helvetica', sans-serif" } = resume
  const tc = themeColor
  const ff = fontFamily

  const name = get(personalInfo.name, SAMPLE.name)
  const jobTitle = get(personalInfo.jobTitle, SAMPLE.jobTitle)
  const email = get(personalInfo.email, SAMPLE.email)
  const phone = get(personalInfo.phone, SAMPLE.phone)
  const location = get(personalInfo.location, SAMPLE.location)
  const website = get(personalInfo.website, SAMPLE.website)
  const linkedin = get(personalInfo.linkedin, SAMPLE.linkedin)
  const summary = get(personalInfo.summary, SAMPLE.summary)
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

  const profColors = { Native: '#10b981', Fluent: '#3b82f6', Professional: tc, Intermediate: '#f59e0b', Basic: '#94a3b8' }

  return (
    <div style={{ 
      background: 'white', 
      color: '#1a1a1a', 
      fontFamily: ff, 
      fontSize: '10.5px', 
      lineHeight: 1.5, 
      minHeight: '297mm', 
      width: '100%',
      maxWidth: '210mm',
      margin: '0 auto',
      position: 'relative',
      boxSizing: 'border-box'
    }}>

      {/* ── HEADER ── */}
      <div style={{ 
        padding: '28px 32px 20px', 
        borderBottom: `3px solid ${tc}`, 
        display: 'flex', 
        alignItems: 'center', 
        gap: 20,
        flexWrap: 'wrap'
      }}>
        {photo && (
          <img src={photo} alt="Profile" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}`, flexShrink: 0 }} />
        )}
        <div style={{ flex: 1, minWidth: '180px' }}>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: '#111', letterSpacing: '-0.01em', marginBottom: 3, wordBreak: 'break-word' }}>{name}</h1>
          <p style={{ fontSize: 12, fontWeight: 600, color: tc, marginBottom: 10, letterSpacing: '0.02em' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px 18px', color: '#555', fontSize: 9.5 }}>
            {contacts.map(({ icon: Icon, val }, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4, wordBreak: 'break-all' }}>
                <Icon size={9} color={tc} style={{ flexShrink: 0 }} />
                <span>{val}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '18px 32px 60px', display: 'flex', flexDirection: 'column', gap: 16, wordBreak: 'break-word', overflowWrap: 'break-word' }}>

        {/* ── SUMMARY ── */}
        <Section title="Professional Summary" color={tc}>
          <p style={{ color: '#333', fontSize: 10.5, lineHeight: 1.75, margin: 0 }}>{summary}</p>
        </Section>

        {/* ── EXPERIENCE ── */}
        <Section title="Work Experience" color={tc}>
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2, flexWrap: 'wrap', gap: 6 }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 800, fontSize: 11.5, color: '#111', margin: '0 0 2px 0' }}>{e.role || 'Job Title'}</p>
                  <p style={{ fontSize: 10, color: tc, fontWeight: 700, margin: 0 }}>
                    {e.company || 'Company'}
                    {e.location ? <span style={{ color: '#888', fontWeight: 400 }}> · {e.location}</span> : null}
                  </p>
                </div>
                <span style={{ 
                  fontSize: 9, 
                  color: '#777', 
                  background: `${tc}12`, 
                  border: `1px solid ${tc}25`, 
                  padding: '2px 8px', 
                  borderRadius: 4, 
                  whiteSpace: 'nowrap', 
                  flexShrink: 0 
                }}>
                  {e.startDate || 'Start'} — {e.current ? 'Present' : (e.endDate || 'End')}
                </span>
              </div>
              {e.description && (
                <div style={{ marginTop: 5 }}>
                  {e.description.split('\n').filter(Boolean).map((line, li) => (
                    <p key={li} style={{ color: '#444', fontSize: 10, lineHeight: 1.65, marginBottom: 2, marginTop: 0 }}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Section>

        {/* ── EDUCATION ── */}
        <Section title="Education" color={tc}>
          {edu.map((e, i) => (
            <div key={e.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: i < edu.length - 1 ? 10 : 0, flexWrap: 'wrap', gap: 6 }}>
              <div>
                <p style={{ fontWeight: 800, fontSize: 11.5, color: '#111', margin: '0 0 2px 0' }}>{e.degree || 'Degree'}</p>
                <p style={{ color: '#555', fontSize: 10, margin: 0 }}>{e.school || 'University'}</p>
                {e.gpa && <p style={{ color: '#777', fontSize: 9.5, margin: '2px 0 0 0' }}>GPA: <strong>{e.gpa}</strong></p>}
                {e.achievements && <p style={{ color: tc, fontSize: 9.5, marginTop: 2 }}>🏆 {e.achievements}</p>}
              </div>
              <span style={{ fontSize: 9, color: '#777', background: '#f5f5f5', padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap', flexShrink: 0 }}>
                {e.startDate} — {e.endDate}
              </span>
            </div>
          ))}
        </Section>

        {/* ── SKILLS ── */}
        <Section title="Technical Skills" color={tc}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '6px 20px' }}>
            {skl.map(s => (
              <div key={s.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 10, color: '#333', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 8.5, color: '#999' }}>{s.level || 80}%</span>
                </div>
                <div style={{ height: 4, background: '#eee', borderRadius: 2 }}>
                  <div style={{ height: 4, background: `linear-gradient(to right, ${tc}, ${tc}99)`, borderRadius: 2, width: `${s.level || 80}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── PROJECTS ── */}
        <Section title="Projects" color={tc}>
          {prj.map((p, i) => (
            <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 12 : 0, padding: '10px 12px', background: `${tc}06`, border: `1px solid ${tc}18`, borderRadius: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3, flexWrap: 'wrap', gap: 6 }}>
                <p style={{ fontWeight: 800, fontSize: 11, color: '#111', margin: 0 }}>{p.name || 'Project Name'}</p>
                {p.link && (
                  <span style={{ fontSize: 8.5, color: tc, flexShrink: 0 }}>🔗 {p.link}</span>
                )}
              </div>
              {p.tech && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 5 }}>
                  {p.tech.split(',').map((t, ti) => (
                    <span key={ti} style={{ fontSize: 8.5, padding: '1px 7px', borderRadius: 3, background: `${tc}15`, color: tc, border: `1px solid ${tc}25`, fontWeight: 600 }}>{t.trim()}</span>
                  ))}
                </div>
              )}
              {p.description && <p style={{ color: '#444', fontSize: 10, lineHeight: 1.65, margin: 0 }}>{p.description}</p>}
            </div>
          ))}
        </Section>

        {/* ── CERTIFICATIONS ── force onto page 2 when printing ── */}
        <div data-page-break="true" style={{ pageBreakBefore: 'always', breakBefore: 'page', paddingTop: '32px' }}>
          <Section title="Certifications" color={tc}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
              {certs.map(c => (
                <div key={c.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '8px 10px', background: '#fafafa', border: '1px solid #eee', borderRadius: 6 }}>
                  <Award size={14} color={tc} style={{ flexShrink: 0, marginTop: 1 }} />
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 10, color: '#111', lineHeight: 1.3, margin: '0 0 2px 0' }}>{c.name || 'Certification'}</p>
                    <p style={{ color: '#777', fontSize: 9, margin: 0 }}>{c.issuer || 'Issuer'}{c.date ? ` · ${c.date}` : ''}</p>
                    {c.credentialId && <p style={{ color: '#aaa', fontSize: 8.5, margin: '2px 0 0 0' }}>ID: {c.credentialId}</p>}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* ── LANGUAGES ── */}
        <Section title="Languages" color={tc}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {langs.map(l => {
              const pc = profColors[l.proficiency] || tc
              return (
                <div key={l.id} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 999, background: `${pc}12`, border: `1px solid ${pc}30` }}>
                  <Star size={9} color={pc} fill={pc} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#222' }}>{l.name}</span>
                  <span style={{ fontSize: 8.5, color: '#888' }}>· {l.proficiency}</span>
                </div>
              )
            })}
          </div>
        </Section>

      </div>
    </div>
  )
}

function Section({ title, color, children }) {
  return (
    <section style={{ marginBottom: 4 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color, whiteSpace: 'nowrap' }}>{title}</h2>
        <div style={{ flex: 1, height: 1.5, background: `${color}35`, borderRadius: 1 }} />
      </div>
      {children}
    </section>
  )
}