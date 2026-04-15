import { Mail, Phone, MapPin, Globe, Link2, Award, Circle } from 'lucide-react'

// ── TIMELINE: Center-spine timeline, alternating cards, ultra-modern
const SAMPLE = {
  name: 'xyz', jobTitle: 'Engineering Manager',
  email: 'prachi@email.com', phone: '+91 98765 43210',
  location: 'Mumbai, India', website: 'abcdev.com', linkedin: 'linkedin.com/in/prachi',
  summary: 'Engineering Manager with 6+ years building and scaling high-performance engineering teams. Delivered $50M+ in product value. Expert in technical leadership, system architecture, and creating engineering cultures that ship fast and break nothing.',
  experience: [
    { id: 's1', role: 'Engineering Manager', company: 'Flipkart', location: 'Bengaluru', startDate: 'Jan 2022', endDate: '', current: true, description: '• Managed 3 teams (28 engineers) across Checkout, Payments, and Fraud Detection\n• Reduced checkout latency by 45% through architectural improvements\n• Grew team from 12 to 28 engineers while maintaining 95% retention rate' },
    { id: 's2', role: 'Senior Software Engineer', company: 'Amazon India', location: 'Bengaluru', startDate: 'Mar 2019', endDate: 'Dec 2021', current: false, description: '• Tech lead for Amazon Pay checkout serving 50M+ customers\n• Increased payment success rate from 94% to 99.2%\n• Mentored 8 engineers; 3 promoted to senior roles' },
    { id: 's3', role: 'Software Engineer', company: 'Paytm', location: 'Noida', startDate: 'Jun 2017', endDate: 'Feb 2019', current: false, description: '• Built wallet transaction system processing ₹100Cr+ daily\n• Reduced fraud rate by 60% through ML-based detection' },
  ],
  education: [{ id: 'e1', degree: 'B.Tech Computer Science', school: 'IIT Delhi', startDate: '2013', endDate: '2017', gpa: '9.4 / 10', achievements: 'Institute Gold Medal · ACM ICPC World Finalist' }],
  skills: [
    { id: 'sk1', name: 'Engineering Leadership', level: 96 }, { id: 'sk2', name: 'System Design', level: 92 },
    { id: 'sk3', name: 'Java / Go / Python', level: 88 }, { id: 'sk4', name: 'Distributed Systems', level: 90 },
    { id: 'sk5', name: 'AWS / GCP', level: 85 }, { id: 'sk6', name: 'Agile / OKRs', level: 93 },
  ],
  projects: [
    { id: 'p1', name: 'Flipkart Checkout Redesign', tech: 'Java, React, Kafka, Redis', description: 'Led end-to-end redesign of checkout flow. 45% latency reduction, 12% conversion increase, $15M additional annual revenue.' },
  ],
  certifications: [
    { id: 'c1', name: 'AWS Solutions Architect Professional', issuer: 'Amazon Web Services', date: '2022-09' },
    { id: 'c2', name: 'Certified Kubernetes Administrator', issuer: 'CNCF', date: '2021-06' },
  ],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

export default function TimelineTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#0ea5e9' } = resume
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
    { icon: Mail, val: email }, { icon: Phone, val: phone },
    { icon: MapPin, val: location }, { icon: Globe, val: website }, { icon: Link2, val: linkedin },
  ].filter(c => c.val)

  return (
    <div style={{ background: 'white', fontFamily: "'Arial', sans-serif", fontSize: '10.5px', lineHeight: 1.5, minHeight: '297mm' }}>

      {/* ── HEADER: Full-width with gradient strip ── */}
      <div style={{ position: 'relative' }}>
        <div style={{ background: `linear-gradient(to right, ${tc}15, ${tc}05)`, padding: '26px 28px 20px', borderBottom: `3px solid ${tc}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {photo && (
                <img src={photo} alt="Profile" style={{ width: 114, height: 114, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}`, flexShrink: 0 }} />
              )}
              <div>
                <h1 style={{ fontSize: 28, fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: 4 }}>{name}</h1>
                <p style={{ fontSize: 12, fontWeight: 700, color: tc, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 10 }}>{jobTitle}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px', fontSize: 9.5, color: '#555' }}>
                  {contacts.map(({ icon: Icon, val }, i) => (
                    <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Icon size={9} color={tc} />{val}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Summary box */}
            <div style={{ maxWidth: 260, padding: '10px 14px', background: 'white', border: `1px solid ${tc}30`, borderRadius: 8, boxShadow: `0 2px 12px ${tc}15` }}>
              <p style={{ color: '#444', fontSize: 9.5, lineHeight: 1.75 }}>{summary}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SKILLS ROW ── */}
      <div style={{ padding: '14px 28px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc, flexShrink: 0 }}>Skills:</span>
        {skl.map(s => (
          <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ fontSize: 9.5, color: '#333', fontWeight: 500 }}>{s.name}</span>
            <div style={{ width: 40, height: 4, background: '#e2e8f0', borderRadius: 2 }}>
              <div style={{ height: 4, background: tc, borderRadius: 2, width: `${s.level || 80}%` }} />
            </div>
          </div>
        ))}
      </div>

      {/* ── MAIN BODY ── */}
      <div style={{ padding: '20px 28px' }}>

        {/* ── EXPERIENCE TIMELINE ── */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <h2 style={{ fontSize: 10, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc }}>Career Timeline</h2>
            <div style={{ flex: 1, height: 1.5, background: `${tc}30` }} />
          </div>

          {/* Timeline */}
          <div style={{ position: 'relative' }}>
            {/* Center spine */}
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: `${tc}25`, transform: 'translateX(-50%)' }} />

            {exp.map((e, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={e.id} style={{ display: 'flex', marginBottom: 16, position: 'relative' }}>
                  {/* Left card */}
                  <div style={{ width: '46%', paddingRight: 20, textAlign: isLeft ? 'right' : 'left', opacity: isLeft ? 1 : 0 }}>
                    {isLeft && (
                      <div style={{ padding: '10px 12px', background: `${tc}06`, border: `1px solid ${tc}20`, borderRadius: 8, display: 'inline-block', textAlign: 'left', maxWidth: '100%' }}>
                        <p style={{ fontWeight: 800, fontSize: 11.5, color: '#111' }}>{e.role}</p>
                        <p style={{ color: tc, fontSize: 10, fontWeight: 700 }}>{e.company}{e.location ? ` · ${e.location}` : ''}</p>
                        <p style={{ color: '#888', fontSize: 8.5, marginBottom: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p>
                        {e.description && e.description.split('\n').filter(Boolean).map((line, li) => (
                          <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, marginBottom: 2 }}>{line}</p>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div style={{ width: '8%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: 10, flexShrink: 0 }}>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: tc, border: '3px solid white', boxShadow: `0 0 0 2px ${tc}`, zIndex: 1 }} />
                  </div>

                  {/* Right card */}
                  <div style={{ width: '46%', paddingLeft: 20, opacity: isLeft ? 0 : 1 }}>
                    {!isLeft && (
                      <div style={{ padding: '10px 12px', background: `${tc}06`, border: `1px solid ${tc}20`, borderRadius: 8 }}>
                        <p style={{ fontWeight: 800, fontSize: 11.5, color: '#111' }}>{e.role}</p>
                        <p style={{ color: tc, fontSize: 10, fontWeight: 700 }}>{e.company}{e.location ? ` · ${e.location}` : ''}</p>
                        <p style={{ color: '#888', fontSize: 8.5, marginBottom: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p>
                        {e.description && e.description.split('\n').filter(Boolean).map((line, li) => (
                          <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6, marginBottom: 2 }}>{line}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── BOTTOM GRID ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>

          {/* Education */}
          <div>
            <SH color={tc}>Education</SH>
            {edu.map(e => (
              <div key={e.id} style={{ padding: '8px 10px', background: `${tc}06`, border: `1px solid ${tc}18`, borderRadius: 6 }}>
                <p style={{ fontWeight: 800, fontSize: 10, color: '#111', lineHeight: 1.3 }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9, fontWeight: 600 }}>{e.school}</p>
                <p style={{ color: '#aaa', fontSize: 8.5 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#777', fontSize: 8.5 }}>GPA: {e.gpa}</p>}
                {e.achievements && <p style={{ color: '#888', fontSize: 8, fontStyle: 'italic', marginTop: 2 }}>{e.achievements}</p>}
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <SH color={tc}>Projects</SH>
            {prj.map(p => (
              <div key={p.id} style={{ padding: '8px 10px', background: `${tc}06`, border: `1px solid ${tc}18`, borderRadius: 6, marginBottom: 8 }}>
                <p style={{ fontWeight: 800, fontSize: 10, color: '#111' }}>{p.name}</p>
                {p.tech && <p style={{ color: '#888', fontSize: 8.5, marginBottom: 2 }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.55 }}>{p.description}</p>}
              </div>
            ))}
          </div>

          {/* Certs + Languages */}
          <div>
            <SH color={tc}>Certifications</SH>
            {certs.map(c => (
              <div key={c.id} style={{ display: 'flex', gap: 5, marginBottom: 7 }}>
                <Award size={9} color={tc} style={{ flexShrink: 0, marginTop: 1 }} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: 9.5, color: '#222', lineHeight: 1.3 }}>{c.name}</p>
                  <p style={{ color: '#888', fontSize: 8.5 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 12 }}>
              <SH color={tc}>Languages</SH>
              {langs.map(l => (
                <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 10, color: '#333', fontWeight: 600 }}>{l.name}</span>
                  <span style={{ fontSize: 8.5, color: tc, fontWeight: 600 }}>{l.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SH({ children, color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
      <h2 style={{ fontSize: 9, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.14em', color, whiteSpace: 'nowrap' }}>{children}</h2>
      <div style={{ flex: 1, height: 1, background: `${color}30` }} />
    </div>
  )
}
