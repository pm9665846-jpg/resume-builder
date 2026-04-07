import { Mail, Phone, MapPin, Globe, Link2, Award } from 'lucide-react'

// ── SPLIT: Diagonal split header, bold typography, magazine-style layout
const SAMPLE = {
  name: 'Prachi Mishra', jobTitle: 'Product Designer & Developer',
  email: 'prachi@email.com', phone: '+91 98765 43210',
  location: 'Mumbai, India', website: 'prachidev.com', linkedin: 'linkedin.com/in/prachi',
  summary: 'Creative technologist blending design thinking with engineering precision. 4+ years crafting digital products used by millions. Expert in building design systems, leading cross-functional teams, and shipping pixel-perfect experiences.',
  experience: [
    { id: 's1', role: 'Senior Product Designer', company: 'Zomato', location: 'Gurugram', startDate: 'Feb 2022', endDate: '', current: true, description: '• Redesigned restaurant discovery flow, increasing engagement by 42%\n• Built design system with 200+ components used by 50+ designers\n• Conducted 50+ user research sessions informing 3 major product pivots' },
    { id: 's2', role: 'UI/UX Designer', company: 'CRED', location: 'Bengaluru', startDate: 'Jun 2020', endDate: 'Jan 2022', current: false, description: '• Designed CRED Mint lending product from 0→1, onboarding 500K users in 3 months\n• Won internal Design Excellence Award 2021' },
  ],
  education: [{ id: 'e1', degree: 'B.Des Visual Communication', school: 'NID Ahmedabad', startDate: '2016', endDate: '2020', gpa: '9.0 / 10', achievements: 'Best Portfolio Award · National Design Scholarship' }],
  skills: [
    { id: 'sk1', name: 'Figma / Adobe XD', level: 97 }, { id: 'sk2', name: 'React / Next.js', level: 85 },
    { id: 'sk3', name: 'CSS / Tailwind', level: 90 }, { id: 'sk4', name: 'User Research', level: 92 },
    { id: 'sk5', name: 'Design Systems', level: 90 }, { id: 'sk6', name: 'Prototyping', level: 95 },
  ],
  projects: [
    { id: 'p1', name: 'Zomato Design System', tech: 'Figma, React, Storybook', link: 'zomato.com', description: '200+ component library reducing design-to-dev handoff time by 60%.' },
    { id: 'p2', name: 'Resume Maker UI', tech: 'Figma, Framer Motion, Next.js', link: 'Resume Maker.vercel.app', description: 'Designed complete UI for AI resume builder SaaS with dark luxury theme.' },
  ],
  certifications: [
    { id: 'c1', name: 'Google UX Design Certificate', issuer: 'Google / Coursera', date: '2022-08' },
  ],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

export default function SplitTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#6366f1' } = resume
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

      {/* ── DIAGONAL SPLIT HEADER ── */}
      <div style={{ position: 'relative', height: 140, overflow: 'hidden' }}>
        {/* Left colored block */}
        <div style={{ position: 'absolute', inset: 0, background: tc }} />
        {/* Diagonal cut */}
        <div style={{ position: 'absolute', right: 0, top: 0, width: '45%', height: '100%', background: 'white', clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }} />

        {/* Name on left */}
        <div style={{ position: 'absolute', left: 28, top: 20, right: '48%', display: 'flex', alignItems: 'center', gap: 12 }}>
          {photo && (
            <img src={photo} alt="Profile" style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.5)', flexShrink: 0 }} />
          )}
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: 4 }}>{name}</h1>
            <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{jobTitle}</p>
          </div>
        </div>

        {/* Contact on right */}
        <div style={{ position: 'absolute', right: 20, top: 20, left: '58%', display: 'flex', flexDirection: 'column', gap: 5 }}>
          {contacts.slice(0, 4).map(({ icon: Icon, val }, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 8.5, color: '#555' }}>
              <Icon size={9} color={tc} />{val}
            </div>
          ))}
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ display: 'flex' }}>

        {/* LEFT MAIN */}
        <div style={{ flex: 1, padding: '20px 24px' }}>

          {/* Summary */}
          <div style={{ marginBottom: 18, padding: '12px 14px', background: `${tc}08`, borderLeft: `4px solid ${tc}`, borderRadius: '0 8px 8px 0' }}>
            <p style={{ color: '#333', fontSize: 10.5, lineHeight: 1.8 }}>{summary}</p>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: 18 }}>
            <SecTitle color={tc}>Experience</SecTitle>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 12, color: '#111' }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 700 }}>
                      {e.company}{e.location ? <span style={{ color: '#888', fontWeight: 400 }}> · {e.location}</span> : ''}
                    </p>
                  </div>
                  <span style={{ fontSize: 8.5, color: 'white', background: tc, padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>
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
          <div>
            <SecTitle color={tc}>Projects</SecTitle>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {prj.map(p => (
                <div key={p.id} style={{ padding: '10px 12px', background: `${tc}06`, border: `1px solid ${tc}20`, borderRadius: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111' }}>{p.name}</p>
                    {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8, color: tc, textDecoration: 'none' }}>↗</a>}
                  </div>
                  {p.tech && <p style={{ color: '#888', fontSize: 8.5, marginBottom: 3, fontStyle: 'italic' }}>{p.tech}</p>}
                  {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.55 }}>{p.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div style={{ width: '32%', padding: '20px 16px', background: '#fafafa', borderLeft: '1px solid #eee', flexShrink: 0 }}>

          {/* Skills */}
          <div style={{ marginBottom: 18 }}>
            <SecTitle color={tc}>Skills</SecTitle>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 9.5, color: '#333' }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: '#999' }}>{s.level || 80}%</span>
                </div>
                <div style={{ height: 4, background: '#e5e7eb', borderRadius: 2 }}>
                  <div style={{ height: 4, background: `linear-gradient(to right, ${tc}, ${tc}80)`, borderRadius: 2, width: `${s.level || 80}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div style={{ marginBottom: 18 }}>
            <SecTitle color={tc}>Education</SecTitle>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10, padding: '8px 10px', background: 'white', border: `1px solid ${tc}20`, borderRadius: 6 }}>
                <p style={{ fontWeight: 800, fontSize: 10, color: '#111', lineHeight: 1.3 }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9, fontWeight: 600 }}>{e.school}</p>
                <p style={{ color: '#aaa', fontSize: 8.5 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#777', fontSize: 8.5 }}>GPA: {e.gpa}</p>}
                {e.achievements && <p style={{ color: '#888', fontSize: 8, fontStyle: 'italic', marginTop: 2 }}>{e.achievements}</p>}
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: 18 }}>
            <SecTitle color={tc}>Certifications</SecTitle>
            {certs.map(c => (
              <div key={c.id} style={{ display: 'flex', gap: 6, marginBottom: 7 }}>
                <Award size={10} color={tc} style={{ flexShrink: 0, marginTop: 1 }} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: 9.5, color: '#222', lineHeight: 1.3 }}>{c.name}</p>
                  <p style={{ color: '#888', fontSize: 8.5 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div>
            <SecTitle color={tc}>Languages</SecTitle>
            {langs.map(l => (
              <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: 10, color: '#333', fontWeight: 600 }}>{l.name}</span>
                <span style={{ fontSize: 8.5, color: 'white', background: tc, padding: '1px 7px', borderRadius: 999 }}>{l.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SecTitle({ children, color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
      <div style={{ width: 3, height: 14, background: color, borderRadius: 2, flexShrink: 0 }} />
      <h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color }}>{children}</h2>
    </div>
  )
}
