// src/components/templates/tempbar2.js

import { Mail, Phone, MapPin, Globe, Link2, Briefcase, GraduationCap, Award, Heart, Code, Sparkles } from 'lucide-react'

// Default demo data (matches your AuroraProTemplate pattern)
const D = {
  name: 'Alex Morgan',
  jobTitle: 'Full Stack Developer & UI Architect',
  email: 'alex.morgan@email.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  website: 'alexmorgan.dev',
  linkedin: 'linkedin.com/in/alexmorgan',
  github: 'github.com/alexmorgan',
  summary: 'Innovative Full Stack Developer with 6+ years of experience building scalable web applications. Expert in React, Node.js, and cloud architecture. Passionate about creating elegant solutions to complex problems and mentoring junior developers.',
  experience: [
    { id: 'e1', role: 'Senior Full Stack Developer', company: 'TechCorp Solutions', location: 'San Francisco', startDate: 'Jan 2022', endDate: '', current: true, description: '• Lead development of microservices architecture serving 500K+ daily users\n• Mentored 5 junior developers, improving team velocity by 40%\n• Reduced API response time by 65% through optimization and caching\n• Implemented CI/CD pipeline reducing deployment time by 80%' },
    { id: 'e2', role: 'Frontend Developer', company: 'CreativeLabs', location: 'Austin, TX', startDate: 'Mar 2019', endDate: 'Dec 2021', current: false, description: '• Built responsive React applications with 99% accessibility score\n• Collaborated with design team to implement component library\n• Increased page load speed by 45% through code splitting and lazy loading' },
    { id: 'e3', role: 'Junior Developer', company: 'StartupHub', location: 'Remote', startDate: 'Jun 2017', endDate: 'Feb 2019', current: false, description: '• Developed and maintained 10+ client websites\n• Implemented RESTful APIs and database integrations\n• Received "Rising Star" award for outstanding performance' },
  ],
  education: [
    { id: 'ed1', degree: 'M.S. in Computer Science', school: 'Stanford University', startDate: '2015', endDate: '2017', gpa: '3.9/4.0', achievements: 'Teaching Assistant · Research Grant Recipient' },
    { id: 'ed2', degree: 'B.S. in Software Engineering', school: 'University of Texas', startDate: '2011', endDate: '2015', gpa: '3.8/4.0', achievements: 'Cum Laude · Dean\'s List' },
  ],
  skills: [
    { id: 's1', name: 'React / Next.js', level: 95 },
    { id: 's2', name: 'Node.js / Express', level: 92 },
    { id: 's3', name: 'TypeScript', level: 90 },
    { id: 's4', name: 'Python / Django', level: 85 },
    { id: 's5', name: 'AWS / Docker', level: 88 },
    { id: 's6', name: 'GraphQL', level: 82 },
  ],
  projects: [
    { id: 'p1', name: 'AI-Powered Analytics Dashboard', description: 'Built real-time analytics platform processing 1M+ events daily. Implemented data visualization with D3.js and WebSocket connections.', tech: 'React, Node.js, MongoDB, Socket.io', link: 'analytics-demo.com' },
    { id: 'p2', name: 'E-Commerce Platform', description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.', tech: 'Next.js, Stripe, PostgreSQL, Redis', link: 'shopdemo.app' },
  ],
  certifications: [
    { id: 'c1', name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', date: '2023-06' },
    { id: 'c2', name: 'Meta Backend Developer', issuer: 'Meta', date: '2022-10' },
    { id: 'c3', name: 'Google Cloud Professional', issuer: 'Google', date: '2023-01' },
  ],
  languages: [
    { id: 'l1', name: 'English', proficiency: 'Native' },
    { id: 'l2', name: 'Spanish', proficiency: 'Fluent' },
    { id: 'l3', name: 'German', proficiency: 'Intermediate' },
  ],
  interests: [
    { id: 'i1', name: 'Open Source' },
    { id: 'i2', name: 'Chess' },
    { id: 'i3', name: 'Hiking' },
    { id: 'i4', name: 'Tech Writing' },
    { id: 'i5', name: '3D Printing' },
  ],
}

function getValue(val, fallback) {
  return val && String(val).trim() !== '' ? val : fallback
}

export default function Tempbar2({ resume }) {
  const {
    personalInfo = {}, experience = [], education = [], skills = [],
    projects = [], certifications = [], languages = [], interests = [],
    themeColor = '#06b6d4', // Cyan/teal color as default
    fontFamily,
  } = resume

  const tc = themeColor
  const ff = fontFamily || "'Inter', 'Segoe UI', Arial, sans-serif"

  // Get values with fallbacks
  const name = getValue(personalInfo.name, D.name)
  const jobTitle = getValue(personalInfo.jobTitle, D.jobTitle)
  const email = getValue(personalInfo.email, D.email)
  const phone = getValue(personalInfo.phone, D.phone)
  const location = getValue(personalInfo.location, D.location)
  const website = getValue(personalInfo.website, D.website)
  const linkedin = getValue(personalInfo.linkedin, D.linkedin)
  const github = getValue(personalInfo.github, D.github)
  const summary = getValue(personalInfo.summary, D.summary)
  const photo = personalInfo.photo || ''

  // Use provided data or fallback to demo data
  const exp = experience.length > 0 ? experience : D.experience
  const edu = education.length > 0 ? education : D.education
  const skl = skills.length > 0 ? skills : D.skills
  const prj = projects.length > 0 ? projects : D.projects
  const cert = certifications.length > 0 ? certifications : D.certifications
  const lang = languages.length > 0 ? languages : D.languages
  const intr = interests.length > 0 ? interests : D.interests

  // Color palette derived from themeColor
  const gradientStart = `${tc}20`
  const gradientEnd = `${tc}08`
  const softBg = '#f0fdfa'
  const softCard = '#ffffff'
  const borderLight = `${tc}20`
  const accentLight = `${tc}0d`

  return (
    <div style={{
      background: softBg,
      fontFamily: ff,
      fontSize: '10px',
      lineHeight: 1.6,
      width: 794,
      minHeight: 1123,
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Decorative background elements */}
      <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', background: `${tc}10`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -40, left: -40, width: 200, height: 200, borderRadius: '50%', background: `${tc}08`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', right: '10%', width: 100, height: 100, borderRadius: '50%', background: `${tc}06`, pointerEvents: 'none' }} />

      {/* HEADER SECTION */}
      <div style={{
        background: `linear-gradient(135deg, ${tc}15 0%, ${gradientEnd} 50%, transparent 100%)`,
        borderBottom: `3px solid ${tc}`,
        padding: '28px 32px 20px',
        position: 'relative',
      }}>
        {/* Top accent bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 4,
          background: `linear-gradient(90deg, ${tc}, ${tc}80, ${tc}30)`,
        }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {/* Profile circle */}
          <div style={{ flexShrink: 0, position: 'relative' }}>
            <div style={{
              width: 90, height: 90, borderRadius: '50%',
              background: photo ? 'transparent' : `linear-gradient(135deg, ${tc}, ${tc}60)`,
              border: `4px solid white`,
              overflow: 'hidden',
              boxShadow: `0 8px 20px ${tc}30`,
            }}>
              {photo
                ? <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, fontWeight: 'bold', color: 'white' }}>{name.charAt(0)}</div>
              }
            </div>
            {/* Status indicator */}
            <div style={{ position: 'absolute', bottom: 4, right: 4, width: 16, height: 16, borderRadius: '50%', background: '#10b981', border: '3px solid white', boxShadow: `0 0 0 2px ${tc}` }} />
          </div>

          {/* Name and title */}
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontSize: 28, fontWeight: 800, color: '#1f2937',
              margin: '0 0 6px', letterSpacing: '-0.02em',
            }}>{name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ height: 3, width: 30, borderRadius: 2, background: tc }} />
              <p style={{ fontSize: 11, color: tc, fontWeight: 700, margin: 0, letterSpacing: '0.05em' }}>{jobTitle}</p>
            </div>

            {/* Contact chips - removed Github icon */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 10px' }}>
              {[
                { icon: Mail, val: email },
                { icon: Phone, val: phone },
                { icon: MapPin, val: location },
                { icon: Globe, val: website },
                { icon: Link2, val: linkedin },
              ].filter(c => c.val).map(({ icon: Icon, val }, i) => (
                <span key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '4px 12px', borderRadius: 30,
                  background: 'white', border: `1px solid ${borderLight}`,
                  fontSize: 8.5, color: '#4b5563',
                  boxShadow: `0 2px 6px ${tc}10`,
                }}>
                  <Icon size={10} color={tc} />
                  {val}
                </span>
              ))}
              {/* Add Github as text-only if needed */}
              {github && (
                <span style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '4px 12px', borderRadius: 30,
                  background: 'white', border: `1px solid ${borderLight}`,
                  fontSize: 8.5, color: '#4b5563',
                  boxShadow: `0 2px 6px ${tc}10`,
                }}>
                  <span style={{ fontSize: 10 }}>🐙</span>
                  {github}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Summary card */}
        {summary && (
          <div style={{
            marginTop: 20,
            padding: '14px 20px',
            background: 'white',
            borderRadius: 16,
            borderLeft: `4px solid ${tc}`,
            boxShadow: `0 4px 12px ${tc}0a`,
          }}>
            <p style={{ fontSize: 9.5, color: '#4b5563', lineHeight: 1.7, margin: 0 }}>{summary}</p>
          </div>
        )}
      </div>

      {/* MAIN CONTENT - Two columns */}
      <div style={{ display: 'flex', gap: 0 }}>

        {/* LEFT COLUMN - Main content */}
        <div style={{ flex: 1, padding: '24px 28px 32px 32px' }}>

          {/* Work Experience */}
          <SectionHeader tc={tc} icon={<Briefcase size={12} />}>Work Experience</SectionHeader>
          {exp.map((e, i) => (
            <div key={e.id} style={{
              marginBottom: 18,
              padding: '14px 16px',
              background: softCard,
              borderRadius: 12,
              border: `1px solid ${borderLight}`,
              boxShadow: `0 2px 8px ${tc}08`,
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', left: 0, top: 12, bottom: 12, width: 3, background: tc, borderRadius: '0 3px 3px 0' }} />
              <div style={{ paddingLeft: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 6 }}>
                  <div>
                    <h3 style={{ fontWeight: 800, fontSize: 11, color: '#1f2937', margin: 0 }}>{e.role}</h3>
                    <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '4px 0' }}>
                      {e.company}
                      {e.location && <span style={{ color: '#9ca3af', fontWeight: 400 }}> · {e.location}</span>}
                    </p>
                  </div>
                  <span style={{
                    fontSize: 8, color: tc, fontWeight: 700,
                    background: accentLight, border: `1px solid ${borderLight}`,
                    padding: '2px 10px', borderRadius: 20, whiteSpace: 'nowrap',
                  }}>
                    {e.startDate} — {e.current ? 'Present' : e.endDate}
                  </span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((line, idx) => (
                  <p key={idx} style={{ color: '#6b7280', fontSize: 9, lineHeight: 1.6, margin: '4px 0 0' }}>{line}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Projects */}
          {prj.length > 0 && (
            <>
              <SectionHeader tc={tc} icon={<Code size={12} />}>Featured Projects</SectionHeader>
              {prj.map(p => (
                <div key={p.id} style={{
                  marginBottom: 14,
                  padding: '12px 16px',
                  background: `linear-gradient(135deg, white, ${accentLight})`,
                  borderRadius: 12,
                  border: `1px solid ${borderLight}`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <h3 style={{ fontWeight: 800, fontSize: 10.5, color: '#1f2937', margin: 0 }}>{p.name}</h3>
                    {p.link && <span style={{ fontSize: 7.5, color: tc, fontWeight: 600 }}>🔗 {p.link}</span>}
                  </div>
                  {p.tech && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 8 }}>
                      {p.tech.split(',').map((t, idx) => (
                        <span key={idx} style={{
                          fontSize: 7.5, padding: '2px 8px', borderRadius: 12,
                          background: accentLight, color: tc, fontWeight: 600,
                        }}>{t.trim()}</span>
                      ))}
                    </div>
                  )}
                  {p.description && <p style={{ fontSize: 8.5, color: '#6b7280', margin: 0, lineHeight: 1.6 }}>{p.description}</p>}
                </div>
              ))}
            </>
          )}

          {/* Education */}
          <div style={{ pageBreakBefore: 'avoid' }}>
            <SectionHeader tc={tc} icon={<GraduationCap size={12} />}>Education</SectionHeader>
            {edu.map(e => (
              <div key={e.id} style={{
                marginBottom: 14,
                padding: '12px 16px',
                background: softCard,
                borderRadius: 12,
                border: `1px solid ${borderLight}`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: 4 }}>
                  <h3 style={{ fontWeight: 800, fontSize: 10.5, color: '#1f2937', margin: 0 }}>{e.degree}</h3>
                  <span style={{ fontSize: 8, color: '#9ca3af' }}>{e.startDate} — {e.endDate}</span>
                </div>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600, margin: '4px 0' }}>{e.school}</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
                  {e.gpa && <span style={{ fontSize: 8, color: '#6b7280' }}>📊 GPA: <strong>{e.gpa}</strong></span>}
                  {e.achievements && <span style={{ fontSize: 8, color: tc, fontWeight: 500 }}>🏆 {e.achievements}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - Sidebar */}
        <div style={{ width: 220, flexShrink: 0, padding: '24px 20px 32px 20px', background: `${tc}04` }}>

          {/* Technical Skills */}
          <SectionHeader tc={tc}>Technical Skills</SectionHeader>
          <div style={{
            background: softCard, borderRadius: 12,
            border: `1px solid ${borderLight}`, padding: '14px',
            marginBottom: 20,
          }}>
            {skl.map((s, i) => (
              <div key={s.id} style={{ marginBottom: i < skl.length - 1 ? 12 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: 8.5, color: '#1f2937', fontWeight: 600 }}>{s.name}</span>
                  <span style={{ fontSize: 7.5, color: tc, fontWeight: 700 }}>{s.level}%</span>
                </div>
                <div style={{ height: 5, background: `${tc}15`, borderRadius: 10, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    background: `linear-gradient(90deg, ${tc}80, ${tc})`,
                    borderRadius: 10,
                    width: `${s.level}%`,
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          {lang.length > 0 && (
            <>
              <SectionHeader tc={tc}>Languages</SectionHeader>
              <div style={{
                background: softCard, borderRadius: 12,
                border: `1px solid ${borderLight}`, padding: '10px 14px',
                marginBottom: 20,
              }}>
                {lang.map((l, i) => (
                  <div key={l.id} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    paddingBottom: i < lang.length - 1 ? 10 : 0,
                    marginBottom: i < lang.length - 1 ? 10 : 0,
                    borderBottom: i < lang.length - 1 ? `1px solid ${borderLight}` : 'none',
                  }}>
                    <span style={{ fontSize: 9, color: '#1f2937', fontWeight: 600 }}>{l.name}</span>
                    <span style={{
                      fontSize: 7.5, padding: '2px 10px', borderRadius: 20,
                      background: accentLight, color: tc, fontWeight: 600,
                    }}>{l.proficiency}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Certifications */}
          {cert.length > 0 && (
            <>
              <SectionHeader tc={tc} icon={<Award size={12} />}>Certifications</SectionHeader>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                {cert.map(c => (
                  <div key={c.id} style={{
                    padding: '10px 12px',
                    background: softCard,
                    borderRadius: 10,
                    border: `1px solid ${borderLight}`,
                  }}>
                    <p style={{ fontWeight: 700, fontSize: 9, color: '#1f2937', margin: '0 0 3px' }}>{c.name}</p>
                    <p style={{ fontSize: 8, color: tc, fontWeight: 600, margin: 0 }}>{c.issuer}</p>
                    <p style={{ fontSize: 7, color: '#9ca3af', margin: '2px 0 0' }}>{c.date}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Interests */}
          {intr.length > 0 && (
            <>
              <SectionHeader tc={tc} icon={<Heart size={12} />}>Interests</SectionHeader>
              <div style={{
                background: softCard, borderRadius: 12,
                border: `1px solid ${borderLight}`, padding: '12px',
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {intr.map(i => (
                    <span key={i.id} style={{
                      fontSize: 8, padding: '4px 10px', borderRadius: 20,
                      background: accentLight, color: tc, fontWeight: 600,
                    }}>
                      <Sparkles size={8} style={{ display: 'inline', marginRight: 4 }} /> {i.name}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 4,
        background: `linear-gradient(90deg, ${tc}30, ${tc}, ${tc}30)`,
      }} />
    </div>
  )
}

// Helper component for section headers
function SectionHeader({ tc, children, icon }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, marginTop: 16 }}>
      {icon && <span style={{ color: tc }}>{icon}</span>}
      <div style={{
        width: 8, height: 8, borderRadius: 2,
        background: tc, transform: 'rotate(45deg)',
      }} />
      <h2 style={{
        fontSize: 9, fontWeight: 800, textTransform: 'uppercase',
        letterSpacing: '0.15em', color: '#1f2937', margin: 0,
      }}>{children}</h2>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${tc}30, transparent)` }} />
    </div>
  )
}