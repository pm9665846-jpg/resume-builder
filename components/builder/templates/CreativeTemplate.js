import { Mail, Phone, MapPin, Globe, Link2, Award } from 'lucide-react'

const SAMPLE = {
  name: 'Prachi Mishra', jobTitle: 'UI/UX Designer & Frontend Developer',
  email: 'prachi.mishra@email.com', phone: '+91 98765 43210',
  location: 'Mumbai, India', website: 'prachidesigns.com', linkedin: 'linkedin.com/in/prachi',
  summary: 'Creative UI/UX Designer with 4+ years crafting intuitive digital experiences. Blend of design thinking and frontend engineering skills. Delivered 30+ products across fintech, edtech, and e-commerce. Passionate about accessibility and design systems.',
  experience: [
    { id: 's1', role: 'Senior UI/UX Designer', company: 'Zomato', location: 'Gurugram', startDate: 'Feb 2022', endDate: '', current: true, description: '• Redesigned the restaurant discovery flow, increasing user engagement by 42%\n• Built and maintained Zomato\'s design system with 200+ reusable components\n• Conducted 50+ user research sessions informing 3 major product pivots\n• Collaborated with 8 engineering teams to ensure pixel-perfect implementation' },
    { id: 's2', role: 'Product Designer', company: 'CRED', location: 'Bengaluru', startDate: 'Jun 2020', endDate: 'Jan 2022', current: false, description: '• Designed the CRED Mint lending product from 0→1, onboarding 500K users in 3 months\n• Created motion design guidelines reducing animation inconsistencies by 80%\n• Won internal "Design Excellence Award" for best user experience in 2021' },
  ],
  education: [{ id: 'e1', degree: 'B.Des Visual Communication', school: 'NID Ahmedabad', startDate: '2016', endDate: '2020', gpa: '9.0 / 10', achievements: 'Best Portfolio Award · National Design Scholarship' }],
  skills: [
    { id: 'sk1', name: 'Figma / Adobe XD', level: 97 }, { id: 'sk2', name: 'React / Next.js', level: 85 },
    { id: 'sk3', name: 'CSS / Tailwind', level: 90 }, { id: 'sk4', name: 'Framer Motion', level: 88 },
    { id: 'sk5', name: 'User Research', level: 92 }, { id: 'sk6', name: 'Design Systems', level: 90 },
    { id: 'sk7', name: 'Prototyping', level: 95 }, { id: 'sk8', name: 'Accessibility (WCAG)', level: 82 },
  ],
  projects: [
    { id: 'p1', name: 'Zomato Design System', tech: 'Figma, React, Storybook', link: 'zomato.com', description: '200+ component library used by 50+ designers and 100+ engineers. Reduced design-to-dev handoff time by 60%.' },
    { id: 'p2', name: 'Resume Maker — UI Design', tech: 'Figma, Framer Motion, Next.js', link: 'Resume Maker.vercel.app', description: 'Designed and built the complete UI for an AI resume builder SaaS. Dark luxury theme with glassmorphism and micro-animations.' },
  ],
  certifications: [
    { id: 'c1', name: 'Google UX Design Certificate', issuer: 'Google / Coursera', date: '2022-08' },
    { id: 'c2', name: 'Interaction Design Foundation', issuer: 'IDF', date: '2021-05' },
  ],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}

function g(val, fb) { return val && String(val).trim() !== '' ? val : fb }

export default function CreativeTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#ec4899' } = resume
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

  const SH = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
      <span style={{ display: 'inline-block', width: 20, height: 2.5, background: tc, flexShrink: 0, borderRadius: 1 }} />
      <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: tc }}>{children}</h2>
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: "'Georgia', serif", fontSize: '10.5px', lineHeight: 1.6, minHeight: '297mm', display: 'flex' }}>

      {/* ── LEFT ACCENT BAR ── */}
      <div style={{ width: 7, background: `linear-gradient(to bottom, ${tc}, ${tc}60)`, flexShrink: 0 }} />

      <div style={{ flex: 1, padding: '28px 28px 40px' }}>

        {/* ── HEADER ── */}
        <div style={{ marginBottom: 20, paddingBottom: 16, borderBottom: `1px solid ${tc}25`, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          {photo && (
            <img src={photo} alt="Profile" style={{ width: 72, height: 72, borderRadius: 8, objectFit: 'cover', border: `2px solid ${tc}40`, flexShrink: 0 }} />
          )}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 5 }}>{name}</h1>
            <p style={{ fontSize: 11, color: tc, fontWeight: 700, letterSpacing: '0.04em', marginBottom: 10 }}>{jobTitle}</p>
            <p style={{ color: '#555', fontSize: 10.5, fontStyle: 'italic', lineHeight: 1.8, marginBottom: 10, maxWidth: 480 }}>{summary}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9.5, color: '#666' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }, { I: Globe, v: website }, { I: Link2, v: linkedin }]
                .filter(x => x.v)
                .map(({ I, v }, i) => (
                  <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>
                ))}
            </div>
          </div>
        </div>

        {/* ── EXPERIENCE ── */}
        <div style={{ marginBottom: 18 }}>
          <SH>Experience</SH>
          {exp.map((e, i) => (
            <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0, paddingLeft: 12, borderLeft: `2px solid ${tc}20` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                <div>
                  <p style={{ fontWeight: 800, fontSize: 12, color: '#1a1a2e' }}>{e.role}</p>
                  <p style={{ color: tc, fontSize: 10, fontStyle: 'italic' }}>
                    {e.company}{e.location ? ` · ${e.location}` : ''}
                  </p>
                </div>
                <p style={{ color: '#999', fontSize: 9, whiteSpace: 'nowrap', marginLeft: 8 }}>
                  {e.startDate} — {e.current ? 'Present' : e.endDate}
                </p>
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

        {/* ── TWO COLUMN: Education + Skills ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 18 }}>
          <div>
            <SH>Education</SH>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10 }}>
                <p style={{ fontWeight: 800, fontSize: 11, color: '#1a1a2e', lineHeight: 1.3 }}>{e.degree}</p>
                <p style={{ color: '#666', fontSize: 9.5 }}>{e.school}</p>
                <p style={{ color: '#aaa', fontSize: 9 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: tc, fontSize: 9, fontWeight: 600 }}>GPA: {e.gpa}</p>}
                {e.achievements && <p style={{ color: '#888', fontSize: 8.5, fontStyle: 'italic', marginTop: 2 }}>{e.achievements}</p>}
              </div>
            ))}
          </div>
          <div>
            <SH>Skills</SH>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 5 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 9.5, color: '#333', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: '#aaa' }}>{s.level || 80}%</span>
                </div>
                <div style={{ height: 3, background: '#eee', borderRadius: 2 }}>
                  <div style={{ height: 3, background: `linear-gradient(to right, ${tc}, ${tc}80)`, borderRadius: 2, width: `${s.level || 80}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PROJECTS ── */}
        <div style={{ marginBottom: 18 }}>
          <SH>Projects</SH>
          {prj.map((p, i) => (
            <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '8px 10px', background: `${tc}06`, border: `1px solid ${tc}18`, borderRadius: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                <p style={{ fontWeight: 800, fontSize: 11, color: '#1a1a2e' }}>{p.name}</p>
                {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, fontStyle: 'italic' }}>{p.link}</a>}
              </div>
              {p.tech && <p style={{ color: '#999', fontSize: 9, fontStyle: 'italic', marginBottom: 3 }}>{p.tech}</p>}
              {p.description && <p style={{ color: '#444', fontSize: 10, lineHeight: 1.65 }}>{p.description}</p>}
            </div>
          ))}
        </div>

        {/* ── CERTIFICATIONS + LANGUAGES ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div>
            <SH>Certifications</SH>
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
          <div>
            <SH>Languages</SH>
            {langs.map(l => (
              <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: 10, color: '#333', fontWeight: 600 }}>{l.name}</span>
                <span style={{ fontSize: 9, color: '#888', fontStyle: 'italic' }}>{l.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
