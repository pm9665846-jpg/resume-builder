import { Mail, Phone, MapPin, Globe, Link2, Award } from 'lucide-react'

const SAMPLE = {
  name: 'xyz', jobTitle: 'Growth & Marketing Lead',
  email: 'abc@gmail.com', phone: '+91 98765 43210',
  location: 'Mumbai, India', website: 'prachidev.com', linkedin: 'linkedin.com/in/prachi',
  summary: 'High-impact Growth & Marketing Leader with 5+ years driving explosive user acquisition and revenue growth. Scaled startups from 0 to 5M users. Expert in performance marketing, product-led growth, and data-driven experimentation. Generated $30M+ in attributed revenue.',
  experience: [
    { id: 's1', role: 'Head of Growth', company: 'Meesho', location: 'Bengaluru', startDate: 'Feb 2022', endDate: '', current: true, description: '• Scaled user base from 2M to 15M in 18 months through viral referral programs\n• Managed ₹50Cr+ annual marketing budget with 4.2x average ROAS\n• Built and led 12-person growth team across acquisition, retention, and monetization\n• Launched 3 growth experiments per week; 40% success rate vs industry avg of 10%' },
    { id: 's2', role: 'Senior Growth Manager', company: 'Nykaa', location: 'Mumbai', startDate: 'Mar 2020', endDate: 'Jan 2022', current: false, description: '• Drove 65% YoY growth in new user acquisition through performance marketing\n• Reduced customer acquisition cost by 38% through channel mix optimization\n• Launched influencer marketing program generating 2M+ organic impressions/month' },
    { id: 's3', role: 'Digital Marketing Manager', company: 'Myntra', location: 'Bengaluru', startDate: 'Jun 2018', endDate: 'Feb 2020', current: false, description: '• Managed Google & Meta ad campaigns with ₹20Cr+ monthly spend\n• Increased email open rates from 12% to 28% through personalization' },
  ],
  education: [{ id: 'e1', degree: 'MBA — Marketing & Strategy', school: 'IIM Bangalore', startDate: '2016', endDate: '2018', gpa: '3.8 / 4.0', achievements: 'Marketing Club President · Best Marketing Plan Award' }],
  skills: [
    { id: 'sk1', name: 'Growth Strategy', level: 96 }, { id: 'sk2', name: 'Performance Marketing', level: 93 },
    { id: 'sk3', name: 'Data Analytics / SQL', level: 85 }, { id: 'sk4', name: 'A/B Testing', level: 90 },
    { id: 'sk5', name: 'SEO / ASO', level: 82 }, { id: 'sk6', name: 'CRM / Marketing Automation', level: 88 },
  ],
  projects: [
    { id: 'p1', name: 'Meesho Viral Referral Program', tech: 'Growth Strategy, Analytics, A/B Testing', description: 'Designed and launched viral referral program achieving K-factor of 1.4. Acquired 3M users in 6 months at 70% lower CAC than paid channels.' },
    { id: 'p2', name: 'Nykaa Loyalty Program Redesign', tech: 'CRM, Personalization, Email Marketing', description: 'Revamped loyalty program increasing repeat purchase rate by 45% and average order value by 28%.' },
  ],
  certifications: [
    { id: 'c1', name: 'Google Analytics 4 Certified', issuer: 'Google', date: '2023-03' },
    { id: 'c2', name: 'Meta Blueprint Certified', issuer: 'Meta', date: '2022-08' },
    { id: 'c3', name: 'HubSpot Marketing Certified', issuer: 'HubSpot', date: '2021-06' },
  ],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}

function g(val, fb) { return val && String(val).trim() !== '' ? val : fb }

export default function BoldTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#f97316' } = resume
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

  const SH = ({ letter, children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
      <div style={{ width: 26, height: 26, background: tc, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <span style={{ color: 'white', fontSize: 11, fontWeight: 900 }}>{letter}</span>
      </div>
      <h2 style={{ fontSize: 12, fontWeight: 900, color: '#111', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{children}</h2>
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: "'Arial', sans-serif", fontSize: '10.5px', lineHeight: 1.5, minHeight: '297mm', paddingBottom: 40 }}>

      {/* ── BOLD DARK BANNER ── */}
      <div style={{ background: '#111', padding: '28px 32px 22px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: '100%', background: tc, opacity: 0.15, transform: 'skewX(-10deg) translateX(40px)' }} />
        <div style={{ position: 'absolute', top: 0, right: 70, width: 80, height: '100%', background: tc, opacity: 0.1, transform: 'skewX(-10deg)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, position: 'relative' }}>
          {photo && (
            <img src={photo} alt="Profile" style={{ width: 68, height: 68, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}`, flexShrink: 0 }} />
          )}
          <div>
            <h1 style={{ fontSize: 30, fontWeight: 900, color: 'white', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 5 }}>{name}</h1>
            <p style={{ fontSize: 11, color: tc, fontWeight: 700, letterSpacing: '0.04em', marginBottom: 10, textTransform: 'uppercase' }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9, color: 'rgba(255,255,255,0.65)' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }, { I: Globe, v: website }, { I: Link2, v: linkedin }]
                .filter(x => x.v)
                .map(({ I, v }, i) => (
                  <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={8} color={tc} />{v}</span>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 4, background: `linear-gradient(to right, ${tc}, ${tc}70)` }} />

      <div style={{ padding: '22px 32px 40px' }}>

        {/* Summary */}
        <div style={{ marginBottom: 20, padding: '12px 16px', background: '#fafafa', borderLeft: `4px solid ${tc}`, borderRadius: '0 8px 8px 0' }}>
          <p style={{ color: '#333', fontSize: 10.5, lineHeight: 1.8 }}>{summary}</p>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: 20 }}>
          <SH letter="E">Experience</SH>
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0, paddingLeft: 36 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ fontWeight: 900, fontSize: 12, color: '#111' }}>{e.role}</p>
                  <p style={{ color: tc, fontSize: 10, fontWeight: 700 }}>
                    {e.company}{e.location ? <span style={{ color: '#888', fontWeight: 400 }}> · {e.location}</span> : ''}
                  </p>
                </div>
                <span style={{ fontSize: 8.5, color: '#777', background: '#f5f5f5', padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>
                  {e.startDate} — {e.current ? 'Present' : e.endDate}
                </span>
              </div>
              {e.description && (
                <div style={{ marginTop: 4 }}>
                  {e.description.split('\n').filter(Boolean).map((line, li) => (
                    <p key={li} style={{ color: '#444', fontSize: 10, lineHeight: 1.65, marginBottom: 2 }}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Projects */}
        <div style={{ marginBottom: 20 }}>
          <SH letter="P">Projects</SH>
          {prj.map((p, i) => (
            <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, paddingLeft: 36, padding: '8px 10px 8px 36px', background: `${tc}06`, border: `1px solid ${tc}18`, borderRadius: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                <p style={{ fontWeight: 800, fontSize: 11, color: '#111' }}>{p.name}</p>
                {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none' }}>{p.link}</a>}
              </div>
              {p.tech && <p style={{ color: '#888', fontSize: 9, marginBottom: 3 }}>{p.tech}</p>}
              {p.description && <p style={{ color: '#444', fontSize: 10, lineHeight: 1.6 }}>{p.description}</p>}
            </div>
          ))}
        </div>

        {/* Education + Skills */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
          <div>
            <SH letter="Ed">Education</SH>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10, paddingLeft: 36 }}>
                <p style={{ fontWeight: 800, fontSize: 11, color: '#111', lineHeight: 1.3 }}>{e.degree}</p>
                <p style={{ color: '#555', fontSize: 10 }}>{e.school}</p>
                <p style={{ color: '#aaa', fontSize: 9 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: tc, fontSize: 9, fontWeight: 600 }}>GPA: {e.gpa}</p>}
                {e.achievements && <p style={{ color: '#888', fontSize: 8.5, fontStyle: 'italic', marginTop: 2 }}>{e.achievements}</p>}
              </div>
            ))}
          </div>
          <div>
            <SH letter="Sk">Skills</SH>
            <div style={{ paddingLeft: 36 }}>
              {skl.map(s => (
                <div key={s.id} style={{ marginBottom: 5 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                    <span style={{ fontSize: 9.5, color: '#333' }}>{s.name}</span>
                    <span style={{ fontSize: 8, color: '#aaa' }}>{s.level || 80}%</span>
                  </div>
                  <div style={{ height: 3, background: '#eee', borderRadius: 2 }}>
                    <div style={{ height: 3, background: `linear-gradient(to right, ${tc}, ${tc}80)`, borderRadius: 2, width: `${s.level || 80}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications + Languages */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div>
            <SH letter="C">Certifications</SH>
            <div style={{ paddingLeft: 36 }}>
              {certs.map(c => (
                <div key={c.id} style={{ display: 'flex', gap: 6, marginBottom: 7 }}>
                  <Award size={10} color={tc} style={{ flexShrink: 0, marginTop: 1 }} />
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 9.5, color: '#222', lineHeight: 1.3 }}>{c.name}</p>
                    <p style={{ color: '#888', fontSize: 8.5 }}>{c.issuer} {c.date ? `· ${c.date}` : ''}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SH letter="L">Languages</SH>
            <div style={{ paddingLeft: 36 }}>
              {langs.map(l => (
                <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: 10, color: '#333', fontWeight: 600 }}>{l.name}</span>
                  <span style={{ fontSize: 9, color: '#888' }}>{l.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
