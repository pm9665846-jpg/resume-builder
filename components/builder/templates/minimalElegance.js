// src/components/builder/templates/minimalElegance.js

import { Mail, Phone, MapPin, Globe, Link2, Briefcase, GraduationCap, Award, Heart, ChevronRight } from 'lucide-react'

const D = {
  name: 'James Chen',
  jobTitle: 'Product Design Lead',
  email: 'james.chen@design.com',
  phone: '+1 (415) 555-0123',
  location: 'San Francisco, CA',
  website: 'jameschendesign.com',
  linkedin: 'linkedin.com/in/jameschen',
  summary: 'Product Design Lead with 8+ years of experience crafting digital products used by 50M+ users. Expert in design systems, user research, and cross-functional leadership. Passionate about creating accessible, human-centered experiences.',
  experience: [
    { id: 'e1', role: 'Product Design Lead', company: 'Figma', location: 'San Francisco', startDate: '2022', endDate: '', current: true, description: 'Leading design for the prototyping team, shipping features used by 4M+ designers monthly. Established design system governance and mentored 5 junior designers.' },
    { id: 'e2', role: 'Senior Product Designer', company: 'Airbnb', location: 'San Francisco', startDate: '2019', endDate: '2022', current: false, description: 'Redesigned host onboarding flow, increasing successful listings by 34%. Collaborated with research team to conduct 50+ user interviews.' },
    { id: 'e3', role: 'UX Designer', company: 'Dropbox', location: 'Remote', startDate: '2016', endDate: '2019', current: false, description: 'Designed collaboration features adopted by 200K+ business teams. Reduced user friction by 28% through iterative testing.' },
  ],
  education: [
    { id: 'ed1', degree: 'MDes in Interaction Design', school: 'California College of the Arts', startDate: '2014', endDate: '2016', gpa: '3.9', achievements: 'Graduate Teaching Fellowship' },
    { id: 'ed2', degree: 'BA in Graphic Design', school: 'UCLA', startDate: '2010', endDate: '2014', gpa: '3.8', achievements: 'Magna Cum Laude' },
  ],
  skills: [
    { id: 's1', name: 'Product Strategy', level: 92 },
    { id: 's2', name: 'UI/UX Design', level: 96 },
    { id: 's3', name: 'Design Systems', level: 94 },
    { id: 's4', name: 'User Research', level: 88 },
    { id: 's5', name: 'Prototyping', level: 95 },
  ],
  projects: [
    { id: 'p1', name: 'Design System v2.0', description: 'Scalable design system used across 12 product teams. Reduced design debt by 60%.', tech: 'Figma, Storybook, React', link: 'figma.design' },
    { id: 'p2', name: 'Mobile App Redesign', description: 'Complete overhaul of mobile experience, increasing engagement by 45%.', tech: 'iOS, Android, Framer', link: 'app.design' },
  ],
  certifications: [
    { id: 'c1', name: 'Certified UX Strategist', issuer: 'Nielsen Norman Group', date: '2023' },
  ],
  languages: [
    { id: 'l1', name: 'English', proficiency: 'Native' },
    { id: 'l2', name: 'Mandarin', proficiency: 'Fluent' },
  ],
  interests: [
    { id: 'i1', name: 'Typography' },
    { id: 'i2', name: 'Chess' },
    { id: 'i3', name: 'Running' },
  ],
}

function getValue(val, fallback) {
  return val && String(val).trim() !== '' ? val : fallback
}

export default function MinimalEleganceTemplate({ resume }) {
  const {
    personalInfo = {}, experience = [], education = [], skills = [],
    projects = [], certifications = [], languages = [], interests = [],
    themeColor = '#2d2d2d',
    fontFamily,
  } = resume

  const tc = themeColor
  const ff = fontFamily || "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"

  const name = getValue(personalInfo.name, D.name)
  const jobTitle = getValue(personalInfo.jobTitle, D.jobTitle)
  const email = getValue(personalInfo.email, D.email)
  const phone = getValue(personalInfo.phone, D.phone)
  const location = getValue(personalInfo.location, D.location)
  const website = getValue(personalInfo.website, D.website)
  const linkedin = getValue(personalInfo.linkedin, D.linkedin)
  const summary = getValue(personalInfo.summary, D.summary)

  const exp = experience.length > 0 ? experience : D.experience
  const edu = education.length > 0 ? education : D.education
  const skl = skills.length > 0 ? skills : D.skills
  const prj = projects.length > 0 ? projects : D.projects
  const cert = certifications.length > 0 ? certifications : D.certifications
  const lang = languages.length > 0 ? languages : D.languages
  const intr = interests.length > 0 ? interests : D.interests

  return (
    <div style={{
      background: '#ffffff',
      fontFamily: ff,
      fontSize: '10px',
      lineHeight: 1.5,
      width: 794,
      minHeight: 1123,
      boxSizing: 'border-box',
      color: '#1a1a1a',
    }}>
      
      {/* Header with large name */}
      <div style={{ padding: '48px 56px 32px', borderBottom: `2px solid ${tc}`, background: '#fafafa' }}>
        <h1 style={{
          fontSize: 48,
          fontWeight: 700,
          color: tc,
          margin: 0,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
        }}>{name}</h1>
        
        <p style={{
          fontSize: 14,
          color: '#666',
          margin: '12px 0 20px',
          fontWeight: 400,
          letterSpacing: '0.01em',
        }}>{jobTitle}</p>
        
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {[
            { icon: Mail, val: email },
            { icon: Phone, val: phone },
            { icon: MapPin, val: location },
            { icon: Globe, val: website },
            { icon: Link2, val: linkedin },
          ].filter(c => c.val).map(({ icon: Icon, val }, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon size={14} color={tc} />
              <span style={{ fontSize: 9, color: '#666' }}>{val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{ padding: '40px 56px' }}>
        
        {/* Summary */}
        {summary && (
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 10.5, color: '#444', lineHeight: 1.6, fontStyle: 'italic' }}>{summary}</p>
          </div>
        )}

        {/* Two column layout */}
        <div style={{ display: 'flex', gap: 48 }}>
          
          {/* Left column - wider */}
          <div style={{ flex: 1.4 }}>
            {/* Experience */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{
                fontSize: 13,
                fontWeight: 600,
                color: tc,
                marginBottom: 20,
                letterSpacing: '0.05em',
              }}>EXPERIENCE</h2>
              
              {exp.map(e => (
                <div key={e.id} style={{ marginBottom: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                    <h3 style={{ fontSize: 11, fontWeight: 600, color: '#1a1a1a', margin: 0 }}>{e.role}</h3>
                    <span style={{ fontSize: 8, color: '#999' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                  </div>
                  <p style={{ fontSize: 9.5, color: tc, marginBottom: 8 }}>{e.company}{e.location && `, ${e.location}`}</p>
                  {e.description && e.description.split('\n').map((line, idx) => (
                    <p key={idx} style={{ fontSize: 9, color: '#666', margin: '4px 0', lineHeight: 1.5 }}>{line}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Projects */}
            {prj.length > 0 && (
              <div>
                <h2 style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: tc,
                  marginBottom: 20,
                  letterSpacing: '0.05em',
                }}>FEATURED PROJECTS</h2>
                
                {prj.map(p => (
                  <div key={p.id} style={{ marginBottom: 20 }}>
                    <h3 style={{ fontSize: 11, fontWeight: 600, color: '#1a1a1a', margin: 0 }}>{p.name}</h3>
                    <p style={{ fontSize: 9, color: '#666', margin: '6px 0' }}>{p.description}</p>
                    {p.tech && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 6 }}>
                        {p.tech.split(',').map((t, idx) => (
                          <span key={idx} style={{ fontSize: 7.5, color: '#999' }}>#{t.trim()}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right column - narrower */}
          <div style={{ flex: 0.8 }}>
            {/* Skills */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{
                fontSize: 13,
                fontWeight: 600,
                color: tc,
                marginBottom: 20,
                letterSpacing: '0.05em',
              }}>SKILLS</h2>
              
              {skl.map(s => (
                <div key={s.id} style={{ marginBottom: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 9, color: '#333', fontWeight: 500 }}>{s.name}</span>
                    <span style={{ fontSize: 8, color: '#999' }}>{s.level}%</span>
                  </div>
                  <div style={{ height: 2, background: '#e0e0e0' }}>
                    <div style={{ width: `${s.level}%`, height: 2, background: tc }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{
                fontSize: 13,
                fontWeight: 600,
                color: tc,
                marginBottom: 20,
                letterSpacing: '0.05em',
              }}>EDUCATION</h2>
              
              {edu.map(e => (
                <div key={e.id} style={{ marginBottom: 16 }}>
                  <h3 style={{ fontSize: 10, fontWeight: 600, color: '#1a1a1a', margin: 0 }}>{e.degree}</h3>
                  <p style={{ fontSize: 9, color: tc, margin: '2px 0' }}>{e.school}</p>
                  <p style={{ fontSize: 8, color: '#999' }}>{e.startDate} — {e.endDate}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            {cert.length > 0 && (
              <div style={{ marginBottom: 32 }}>
                <h2 style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: tc,
                  marginBottom: 20,
                  letterSpacing: '0.05em',
                }}>CERTIFICATIONS</h2>
                
                {cert.map(c => (
                  <div key={c.id} style={{ marginBottom: 12 }}>
                    <p style={{ fontSize: 9, fontWeight: 500, color: '#333', margin: 0 }}>{c.name}</p>
                    <p style={{ fontSize: 8, color: '#999', margin: '2px 0 0' }}>{c.issuer} · {c.date}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Languages & Interests */}
            {lang.length > 0 && (
              <div style={{ marginBottom: 24 }}>
                <h2 style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: tc,
                  marginBottom: 16,
                  letterSpacing: '0.05em',
                }}>LANGUAGES</h2>
                
                {lang.map(l => (
                  <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 9, color: '#333' }}>{l.name}</span>
                    <span style={{ fontSize: 8, color: '#999' }}>{l.proficiency}</span>
                  </div>
                ))}
              </div>
            )}

            {intr.length > 0 && (
              <div>
                <h2 style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: tc,
                  marginBottom: 16,
                  letterSpacing: '0.05em',
                }}>INTERESTS</h2>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {intr.map(i => (
                    <span key={i.id} style={{ fontSize: 8, color: '#666' }}>{i.name}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}