import { Mail, Phone, MapPin, Globe, Award } from 'lucide-react'

const SAMPLE = {
  name: 'xyz', jobTitle: 'Senior Product Manager',
  email: 'abc@gmail.com', phone: '+91 98765 43210',
  location: 'Mumbai, India', website: 'abcdev.com',
  summary: 'Accomplished Senior Product Manager with 6+ years driving product strategy and execution at scale. Led cross-functional teams of 20+ to deliver products generating $50M+ ARR. Known for data-driven decision making and exceptional stakeholder communication.',
  experience: [
    { id: 's1', role: 'Senior Product Manager', company: 'Flipkart', location: 'Bengaluru', startDate: 'Mar 2021', endDate: '', current: true, description: '• Owned the Checkout & Payments product roadmap, driving 28% increase in conversion rate\n• Led a team of 4 PMs, 12 engineers, and 3 designers across 2 product lines\n• Launched Buy Now Pay Later feature generating ₹200Cr+ GMV in first quarter\n• Reduced cart abandonment by 22% through A/B tested UX improvements' },
    { id: 's2', role: 'Product Manager', company: 'Swiggy', location: 'Bengaluru', startDate: 'Jan 2019', endDate: 'Feb 2021', current: false, description: '• Managed the restaurant discovery and search product serving 8M+ daily active users\n• Increased restaurant partner retention by 35% through improved analytics dashboard\n• Shipped 14 major features on time with 98% sprint velocity' },
  ],
  education: [{ id: 'e1', degree: 'MBA — Strategy & Marketing', school: 'IIM Ahmedabad', startDate: '2017', endDate: '2019', gpa: '3.9 / 4.0', achievements: 'Gold Medalist · Best Business Plan Award' }],
  skills: [
    { id: 'sk1', name: 'Product Strategy', level: 95 }, { id: 'sk2', name: 'Data Analysis / SQL', level: 85 },
    { id: 'sk3', name: 'Stakeholder Management', level: 92 }, { id: 'sk4', name: 'Agile / Scrum', level: 90 },
    { id: 'sk5', name: 'User Research', level: 88 }, { id: 'sk6', name: 'Figma / Prototyping', level: 78 },
  ],
  projects: [
    { id: 'p1', name: 'Flipkart BNPL Launch', tech: 'Product Strategy, A/B Testing, Analytics', description: 'End-to-end product launch of Buy Now Pay Later feature. Coordinated with 6 teams across engineering, legal, and finance. Generated ₹200Cr+ GMV in Q1.' },
  ],
  certifications: [
    { id: 'c1', name: 'Certified Scrum Product Owner (CSPO)', issuer: 'Scrum Alliance', date: '2022-06' },
    { id: 'c2', name: 'Google Analytics Certified', issuer: 'Google', date: '2021-03' },
  ],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }, { id: 'l3', name: 'Marathi', proficiency: 'Native' }],
}

function g(val, fb) { return val && String(val).trim() !== '' ? val : fb }

export default function ElegantTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#b8860b' } = resume
  const tc = themeColor

  const name = g(personalInfo.name, SAMPLE.name)
  const jobTitle = g(personalInfo.jobTitle, SAMPLE.jobTitle)
  const email = g(personalInfo.email, SAMPLE.email)
  const phone = g(personalInfo.phone, SAMPLE.phone)
  const location = g(personalInfo.location, SAMPLE.location)
  const website = g(personalInfo.website, SAMPLE.website)
  const summary = g(personalInfo.summary, SAMPLE.summary)
  const photo = personalInfo.photo || ''

  const exp = experience.length > 0 ? experience : SAMPLE.experience
  const edu = education.length > 0 ? education : SAMPLE.education
  const skl = skills.length > 0 ? skills : SAMPLE.skills
  const prj = projects.length > 0 ? projects : SAMPLE.projects
  const certs = certifications.length > 0 ? certifications : SAMPLE.certifications
  const langs = languages.length > 0 ? languages : SAMPLE.languages

  const Divider = ({ label }) => (
    <div style={{ textAlign: 'center', margin: '16px 0 12px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: `${tc}30` }} />
      <span style={{ position: 'relative', background: 'white', padding: '0 16px', fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.22em', color: tc }}>
        {label}
      </span>
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: '10.5px', lineHeight: 1.6, padding: '32px 40px 48px', minHeight: '297mm' }}>

      {/* ── CENTERED HEADER ── */}
      <div style={{ textAlign: 'center', paddingBottom: 18, borderBottom: `1px solid ${tc}40`, marginBottom: 4 }}>
        {photo && (
          <img src={photo} alt="Profile" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${tc}`, margin: '0 auto 10px' }} />
        )}
        <h1 style={{ fontSize: 28, fontWeight: 400, letterSpacing: '0.1em', color: '#111', marginBottom: 5, textTransform: 'uppercase' }}>{name}</h1>
        <p style={{ fontSize: 11, color: tc, fontWeight: 700, letterSpacing: '0.08em', marginBottom: 10, textTransform: 'uppercase' }}>{jobTitle}</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9, color: '#777' }}>
          {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }, { I: Globe, v: website }]
            .filter(x => x.v)
            .map(({ I, v }, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={8} color={tc} />{v}</span>
            ))}
        </div>
      </div>

      {/* ── SUMMARY ── */}
      <Divider label="Profile" />
      <p style={{ textAlign: 'center', color: '#444', fontSize: 10.5, fontStyle: 'italic', maxWidth: 500, margin: '0 auto', lineHeight: 1.85 }}>{summary}</p>

      {/* ── EXPERIENCE ── */}
      <Divider label="Experience" />
      {exp.map((e, i) => (
        <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 16 : 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
            <p style={{ fontWeight: 700, fontSize: 12, color: '#111' }}>{e.role}</p>
            <p style={{ fontSize: 9, color: '#999', fontStyle: 'italic', whiteSpace: 'nowrap', marginLeft: 10 }}>
              {e.startDate} — {e.current ? 'Present' : e.endDate}
            </p>
          </div>
          <p style={{ color: tc, fontSize: 10.5, fontStyle: 'italic', marginBottom: 5 }}>
            {e.company}{e.location ? ` · ${e.location}` : ''}
          </p>
          {e.description && (
            <div>
              {e.description.split('\n').filter(Boolean).map((line, li) => (
                <p key={li} style={{ color: '#444', fontSize: 10, lineHeight: 1.7, marginBottom: 2 }}>{line}</p>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* ── EDUCATION ── */}
      <Divider label="Education" />
      {edu.map(e => (
        <div key={e.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: 11.5, color: '#111' }}>{e.degree}</p>
            <p style={{ color: '#666', fontSize: 10, fontStyle: 'italic' }}>{e.school}</p>
            {e.gpa && <p style={{ color: tc, fontSize: 9.5, fontWeight: 600 }}>GPA: {e.gpa}</p>}
            {e.achievements && <p style={{ color: '#888', fontSize: 9.5, fontStyle: 'italic' }}>{e.achievements}</p>}
          </div>
          <p style={{ fontSize: 9, color: '#999', fontStyle: 'italic', whiteSpace: 'nowrap', marginLeft: 10 }}>{e.startDate} — {e.endDate}</p>
        </div>
      ))}

      {/* ── SKILLS ── */}
      <Divider label="Expertise" />
      <p style={{ textAlign: 'center', color: '#555', fontSize: 10, letterSpacing: '0.06em', lineHeight: 1.9 }}>
        {skl.map(s => s.name).join('  ·  ')}
      </p>

      {/* ── PROJECTS ── */}
      {prj.length > 0 && (
        <>
          <Divider label="Notable Projects" />
          {prj.map((p, i) => (
            <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 12 : 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <p style={{ fontWeight: 700, fontSize: 11, color: '#111' }}>{p.name}</p>
                {p.link && <a href={`https://${p.link}`} style={{ fontSize: 9, color: tc, fontStyle: 'italic' }}>{p.link}</a>}
              </div>
              {p.tech && <p style={{ color: '#999', fontSize: 9, fontStyle: 'italic', marginBottom: 3 }}>{p.tech}</p>}
              {p.description && <p style={{ color: '#444', fontSize: 10, lineHeight: 1.7 }}>{p.description}</p>}
            </div>
          ))}
        </>
      )}

      {/* ── CERTIFICATIONS ── */}
      <Divider label="Certifications" />
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '6px 24px' }}>
        {certs.map(c => (
          <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Award size={10} color={tc} />
            <span style={{ fontSize: 9.5, color: '#333', fontWeight: 600 }}>{c.name}</span>
            <span style={{ fontSize: 8.5, color: '#999' }}>· {c.issuer} {c.date ? `(${c.date})` : ''}</span>
          </div>
        ))}
      </div>

      {/* ── LANGUAGES ── */}
      <Divider label="Languages" />
      <p style={{ textAlign: 'center', color: '#555', fontSize: 10, letterSpacing: '0.06em' }}>
        {langs.map(l => `${l.name} (${l.proficiency})`).join('  ·  ')}
      </p>
    </div>
  )
}
