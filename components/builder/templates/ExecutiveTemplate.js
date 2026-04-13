import { Mail, Phone, MapPin, Globe, Link2, Award } from 'lucide-react'

const SAMPLE = {
  name: 'xyz', jobTitle: 'Chief Technology Officer',
  email: 'abc@gmail.com', phone: '+91 98765 43210',
  location: 'Mumbai, India', website: 'prachidev.com', linkedin: 'linkedin.com/in/prachi',
  summary: 'Visionary CTO with 10+ years leading technology strategy and engineering excellence at scale. Built and scaled engineering teams from 5 to 200+. Delivered $100M+ in product value. Expert in cloud architecture, digital transformation, and building high-performance engineering cultures.',
  experience: [
    { id: 's1', role: 'Chief Technology Officer', company: 'FinTech Unicorn', location: 'Mumbai', startDate: 'Jan 2021', endDate: '', current: true, description: '• Led technology strategy for a $1.2B fintech company serving 15M+ customers\n• Scaled engineering team from 40 to 180 engineers across 3 countries\n• Architected cloud migration saving $4M annually in infrastructure costs\n• Launched 3 new product lines generating $50M+ ARR in 18 months' },
    { id: 's2', role: 'VP of Engineering', company: 'Paytm', location: 'Noida', startDate: 'Mar 2018', endDate: 'Dec 2020', current: false, description: '• Managed 8 engineering teams (120+ engineers) across payments and lending products\n• Drove 99.99% uptime SLA for payment infrastructure processing ₹500Cr+ daily\n• Reduced time-to-market by 45% through platform modernization and DevOps transformation' },
    { id: 's3', role: 'Engineering Manager', company: 'Amazon India', location: 'Bengaluru', startDate: 'Jun 2015', endDate: 'Feb 2018', current: false, description: '• Led 25-engineer team building Amazon Pay checkout experience\n• Increased payment success rate from 94% to 99.2% through reliability engineering' },
  ],
  education: [{ id: 'e1', degree: 'M.Tech Computer Science', school: 'IIT Delhi', startDate: '2013', endDate: '2015', gpa: '9.4 / 10', achievements: 'Institute Gold Medal · Best Thesis Award' }],
  skills: [
    { id: 'sk1', name: 'Technology Strategy', level: 97 }, { id: 'sk2', name: 'Engineering Leadership', level: 95 },
    { id: 'sk3', name: 'Cloud Architecture', level: 90 }, { id: 'sk4', name: 'System Design', level: 92 },
    { id: 'sk5', name: 'P&L Management', level: 85 }, { id: 'sk6', name: 'Stakeholder Management', level: 93 },
  ],
  projects: [
    { id: 'p1', name: 'Cloud Migration Initiative', tech: 'AWS, Kubernetes, Terraform', description: 'Led end-to-end migration of 200+ microservices to AWS. Achieved 40% cost reduction and 99.99% uptime SLA.' },
  ],
  certifications: [
    { id: 'c1', name: 'AWS Certified Solutions Architect – Professional', issuer: 'Amazon Web Services', date: '2022-06' },
    { id: 'c2', name: 'Google Cloud Professional Architect', issuer: 'Google Cloud', date: '2021-09' },
  ],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}

function g(val, fb) { return val && String(val).trim() !== '' ? val : fb }

export default function ExecutiveTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#06b6d4' } = resume
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

  const MT = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
      <h2 style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, whiteSpace: 'nowrap' }}>{children}</h2>
      <div style={{ flex: 1, height: 1.5, background: `${tc}35` }} />
    </div>
  )
  const ST = ({ children }) => (
    <h3 style={{ fontSize: 8, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>{children}</h3>
  )

  return (
    <div style={{ 
      background: 'white', 
      fontFamily: "'Arial', 'Helvetica', sans-serif", 
      fontSize: '10.5px', 
      lineHeight: 1.5, 
      minHeight: '297mm', 
      display: 'flex',
      position: 'relative',
      width: '100%',
      maxWidth: '210mm',
      margin: '0 auto'
    }}>

      {/* ── COLORED SIDEBAR ── */}
      <div style={{ 
        width: '32%', 
        background: tc, 
        padding: '26px 16px 40px', 
        color: 'white', 
        flexShrink: 0, 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 16,
        wordBreak: 'break-word',
        overflowWrap: 'break-word'
      }}>

        {/* Avatar + Name */}
        <div>
          <div style={{ 
            width: 64, 
            height: 64, 
            borderRadius: '50%', 
            background: 'rgba(255,255,255,0.2)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: 12, 
            fontSize: 22, 
            fontWeight: 800, 
            color: 'white', 
            overflow: 'hidden', 
            border: '2px solid rgba(255,255,255,0.4)'
          }}>
            {photo ? (
              <img src={photo} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              name.charAt(0).toUpperCase()
            )}
          </div>
          <h1 style={{ fontSize: 15, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 3, wordBreak: 'break-word' }}>{name}</h1>
          <p style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.75)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 12 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }, { I: Globe, v: website }, { I: Link2, v: linkedin }]
              .filter(x => x.v)
              .map(({ I, v }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, fontSize: 8.5, color: 'rgba(255,255,255,0.8)' }}>
                  <I size={8} style={{ flexShrink: 0, marginTop: 1 }} />
                  <span style={{ wordBreak: 'break-all' }}>{v}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <ST>Skills</ST>
          {skl.map(s => (
            <div key={s.id} style={{ marginBottom: 6 }}>
              <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.9)', marginBottom: 2 }}>{s.name}</p>
              <div style={{ height: 3, background: 'rgba(255,255,255,0.2)', borderRadius: 2, position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, height: 3, background: 'rgba(255,255,255,0.85)', borderRadius: 2, width: `${s.level || 80}%`, maxWidth: '100%' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <ST>Education</ST>
          {edu.map(e => (
            <div key={e.id} style={{ marginBottom: 10 }}>
              <p style={{ fontWeight: 700, fontSize: 9.5, color: 'white', lineHeight: 1.3 }}>{e.degree}</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 8.5 }}>{e.school}</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 8 }}>{e.startDate} — {e.endDate}</p>
              {e.gpa && <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 8.5, fontWeight: 600 }}>GPA: {e.gpa}</p>}
              {e.achievements && <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 8, fontStyle: 'italic', marginTop: 2 }}>{e.achievements}</p>}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <ST>Certifications</ST>
          {certs.map(c => (
            <div key={c.id} style={{ marginBottom: 7, display: 'flex', gap: 5 }}>
              <Award size={9} style={{ flexShrink: 0, marginTop: 1, color: 'rgba(255,255,255,0.7)' }} />
              <div>
                <p style={{ fontSize: 9, color: 'white', fontWeight: 600, lineHeight: 1.3 }}>{c.name}</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 8 }}>{c.issuer} {c.date ? `· ${c.date}` : ''}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div>
          <ST>Languages</ST>
          {langs.map(l => (
            <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>{l.name}</span>
              <span style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.55)' }}>{l.proficiency}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT CONTENT ── */}
      <div style={{ 
        flex: 1, 
        padding: '26px 22px 40px', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 16,
        wordBreak: 'break-word',
        overflowWrap: 'break-word'
      }}>

        {/* Summary */}
        <div style={{ paddingBottom: 14, borderBottom: `2px solid ${tc}20` }}>
          <MT>Executive Profile</MT>
          <p style={{ color: '#333', fontSize: 10.5, lineHeight: 1.8, margin: 0 }}>{summary}</p>
        </div>

        {/* Experience */}
        <div>
          <MT>Career History</MT>
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0, paddingLeft: 10, borderLeft: `2px solid ${tc}30` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 6 }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 800, fontSize: 12, color: '#111', margin: '0 0 2px 0' }}>{e.role}</p>
                  <p style={{ color: tc, fontSize: 10, fontWeight: 700, margin: 0 }}>
                    {e.company}{e.location ? <span style={{ color: '#888', fontWeight: 400 }}> · {e.location}</span> : ''}
                  </p>
                </div>
                <span style={{ 
                  fontSize: 8.5, 
                  color: '#777', 
                  background: '#f5f5f5', 
                  padding: '2px 7px', 
                  borderRadius: 3, 
                  whiteSpace: 'nowrap', 
                  flexShrink: 0 
                }}>
                  {e.startDate} — {e.current ? 'Present' : e.endDate}
                </span>
              </div>
              {e.description && (
                <div style={{ marginTop: 4 }}>
                  {e.description.split('\n').filter(Boolean).map((line, li) => (
                    <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.65, marginBottom: 2, marginTop: 0 }}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Projects */}
        {prj.length > 0 && (
          <div>
            <MT>Key Initiatives</MT>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '8px 10px', background: `${tc}06`, border: `1px solid ${tc}18`, borderRadius: 5 }}>
                <p style={{ fontWeight: 800, fontSize: 11, color: '#111', margin: '0 0 3px 0' }}>{p.name}</p>
                {p.tech && <p style={{ color: '#888', fontSize: 9, margin: '0 0 3px 0' }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#444', fontSize: 9.5, lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}