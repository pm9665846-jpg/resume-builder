// src/components/builder/templates/luxuryGold.js

import { Mail, Phone, MapPin, Globe, Link2, Briefcase, GraduationCap, Award, Heart, Star, Sparkles, Crown } from 'lucide-react'

const D = {
  name: 'Victoria Harrington',
  jobTitle: 'Luxury Brand Director & Creative Strategist',
  email: 'victoria@harrington.com',
  phone: '+44 (0) 20 7946 0138',
  location: 'London, UK',
  website: 'harringtoncreative.com',
  linkedin: 'linkedin.com/in/vharrington',
  summary: 'Award-winning Creative Director with 12+ years of experience in luxury brand management. Expertise in elevating brand identities for high-end fashion, automotive, and hospitality sectors. Proven track record of increasing brand equity by 200%+ for Maison de Luxe and Heritage Collections.',
  experience: [
    { id: 'e1', role: 'Creative Director', company: 'Maison de Luxe', location: 'London', startDate: 'Jan 2021', endDate: '', current: true, description: '• Led rebranding initiative for 150-year-old luxury house, increasing market share by 45%\n• Curated creative direction for 12 seasonal campaigns featured in Vogue and Harper\'s Bazaar\n• Managed £8M creative budget across 15 international markets\n• Built and mentored team of 25 designers, photographers, and stylists' },
    { id: 'e2', role: 'Senior Brand Strategist', company: 'Heritage Collections', location: 'Paris', startDate: 'Mar 2018', endDate: 'Dec 2020', current: false, description: '• Developed brand strategy for jewelry line that generated £15M in first year\n• Orchestrated partnership with 5 luxury hotels for exclusive pop-up experiences\n• Increased social media engagement by 300% through curated content strategy' },
    { id: 'e3', role: 'Brand Manager', company: 'Château Estates', location: 'Geneva', startDate: 'Jun 2015', endDate: 'Feb 2018', current: false, description: '• Managed brand portfolio of 8 luxury properties across Europe\n• Launched membership program with 85% retention rate\n• Secured partnerships with Rolls-Royce and Dom Pérignon' },
  ],
  education: [
    { id: 'ed1', degree: 'MBA in Luxury Brand Management', school: 'HEC Paris', startDate: '2013', endDate: '2015', gpa: '4.0/4.0', achievements: 'Dean\'s List · Luxury Summit Winner' },
    { id: 'ed2', degree: 'BA in Art History', school: 'Courtauld Institute of Art', startDate: '2009', endDate: '2013', gpa: 'First Class Honours', achievements: 'Sir Denis Mahon Scholarship' },
  ],
  skills: [
    { id: 's1', name: 'Creative Direction', level: 98 },
    { id: 's2', name: 'Brand Strategy', level: 96 },
    { id: 's3', name: 'Luxury Marketing', level: 95 },
    { id: 's4', name: 'Team Leadership', level: 94 },
    { id: 's5', name: 'Client Relations', level: 97 },
    { id: 's6', name: 'Adobe Creative Suite', level: 92 },
  ],
  projects: [
    { id: 'p1', name: 'Eternal Collection Campaign', description: '360° luxury campaign featuring editorial shoots, film, and immersive experiences. Generated £25M in sales and won Luxury Briefing Award.', tech: 'Photography, Film, Print, Digital', link: 'eternal.masion.com' },
    { id: 'p2', name: 'Château Élysée Brand Identity', description: 'Complete brand overhaul for historic Parisian hotel, including visual identity, collateral, and guest experiences.', tech: 'Brand Design, Interior, Digital', link: 'elysee.chateau.com' },
  ],
  certifications: [
    { id: 'c1', name: 'Luxury Certified Professional', issuer: 'Luxury Institute', date: '2023-01' },
    { id: 'c2', name: 'Certified Brand Strategist', issuer: 'ABM', date: '2022-06' },
  ],
  languages: [
    { id: 'l1', name: 'English', proficiency: 'Native' },
    { id: 'l2', name: 'French', proficiency: 'Fluent' },
    { id: 'l3', name: 'Italian', proficiency: 'Professional' },
  ],
  interests: [
    { id: 'i1', name: 'Fine Art' },
    { id: 'i2', name: 'Vintage Cars' },
    { id: 'i3', name: 'Wine Collecting' },
    { id: 'i4', name: 'Philanthropy' },
  ],
}

function getValue(val, fallback) {
  return val && String(val).trim() !== '' ? val : fallback
}

export default function LuxuryGoldTemplate({ resume }) {
  const {
    personalInfo = {}, experience = [], education = [], skills = [],
    projects = [], certifications = [], languages = [], interests = [],
    themeColor = '#d4af37', // Gold color
    fontFamily,
  } = resume

  const tc = themeColor
  const ff = fontFamily || "'Cormorant Garamond', 'Georgia', serif"
  const goldGradient = `linear-gradient(135deg, ${tc}, ${tc}cc, #f5e6a3)`

  const name = getValue(personalInfo.name, D.name)
  const jobTitle = getValue(personalInfo.jobTitle, D.jobTitle)
  const email = getValue(personalInfo.email, D.email)
  const phone = getValue(personalInfo.phone, D.phone)
  const location = getValue(personalInfo.location, D.location)
  const website = getValue(personalInfo.website, D.website)
  const linkedin = getValue(personalInfo.linkedin, D.linkedin)
  const summary = getValue(personalInfo.summary, D.summary)
  const photo = personalInfo.photo || ''

  const exp = experience.length > 0 ? experience : D.experience
  const edu = education.length > 0 ? education : D.education
  const skl = skills.length > 0 ? skills : D.skills
  const prj = projects.length > 0 ? projects : D.projects
  const cert = certifications.length > 0 ? certifications : D.certifications
  const lang = languages.length > 0 ? languages : D.languages
  const intr = interests.length > 0 ? interests : D.interests

  return (
    <div style={{
      background: '#faf8f0',
      fontFamily: ff,
      fontSize: '10px',
      lineHeight: 1.5,
      width: 794,
      minHeight: 1123,
      boxSizing: 'border-box',
      position: 'relative',
    }}>
      
      {/* Decorative gold frame */}
      <div style={{ position: 'absolute', top: 20, left: 20, right: 20, bottom: 20, border: `1px solid ${tc}30`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 24, left: 24, right: 24, bottom: 24, border: `1px solid ${tc}15`, pointerEvents: 'none' }} />
      
      {/* Ornamental corners */}
      {[0, 1, 2, 3].map(i => (
        <div key={i} style={{
          position: 'absolute',
          top: i < 2 ? 16 : 'auto',
          bottom: i >= 2 ? 16 : 'auto',
          left: i % 2 === 0 ? 16 : 'auto',
          right: i % 2 === 1 ? 16 : 'auto',
          width: 30,
          height: 30,
          borderTop: i < 2 ? `2px solid ${tc}` : 'none',
          borderBottom: i >= 2 ? `2px solid ${tc}` : 'none',
          borderLeft: i % 2 === 0 ? `2px solid ${tc}` : 'none',
          borderRight: i % 2 === 1 ? `2px solid ${tc}` : 'none',
        }} />
      ))}

      {/* Header */}
      <div style={{ padding: '48px 48px 32px', textAlign: 'center', borderBottom: `2px solid ${tc}40` }}>
        {photo && (
          <div style={{
            width: 100, height: 100, borderRadius: '50%', margin: '0 auto 20px',
            overflow: 'hidden', border: `3px solid ${tc}`, boxShadow: `0 4px 20px ${tc}40`,
          }}>
            <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}
        
        <h1 style={{
          fontSize: 36, fontWeight: 400, color: '#1a1a1a',
          margin: 0, letterSpacing: '0.02em', fontFamily: "'Playfair Display', serif"
        }}>{name}</h1>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, margin: '12px 0 16px' }}>
          <div style={{ width: 40, height: 1, background: goldGradient }} />
          <Crown size={16} color={tc} />
          <div style={{ width: 40, height: 1, background: goldGradient }} />
        </div>
        
        <p style={{ fontSize: 12, color: tc, fontWeight: 500, letterSpacing: '0.1em', margin: 0 }}>{jobTitle}</p>
        
        {/* Contact */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginTop: 20 }}>
          {[
            { icon: Mail, val: email },
            { icon: Phone, val: phone },
            { icon: MapPin, val: location },
          ].filter(c => c.val).map(({ icon: Icon, val }, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9, color: '#666' }}>
              <Icon size={12} color={tc} />
              {val}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: '32px 48px 48px' }}>
        {/* Summary */}
        {summary && (
          <div style={{ marginBottom: 32, textAlign: 'center', fontStyle: 'italic', color: '#555', fontSize: 10.5, lineHeight: 1.6 }}>
            "{summary}"
          </div>
        )}

        {/* Two columns */}
        <div style={{ display: 'flex', gap: 40 }}>
          {/* Left Column */}
          <div style={{ flex: 1.2 }}>
            {/* Experience */}
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 14, fontWeight: 500, color: tc, letterSpacing: '0.1em', marginBottom: 16, borderBottom: `1px solid ${tc}40`, paddingBottom: 6 }}>
                Professional Experience
              </h2>
              {exp.map(e => (
                <div key={e.id} style={{ marginBottom: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                    <h3 style={{ fontSize: 11, fontWeight: 600, color: '#1a1a1a', margin: 0 }}>{e.role}</h3>
                    <span style={{ fontSize: 8, color: tc }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                  </div>
                  <p style={{ fontSize: 9, color: tc, marginBottom: 6 }}>{e.company}{e.location && `, ${e.location}`}</p>
                  {e.description && e.description.split('\n').map((line, idx) => (
                    <p key={idx} style={{ fontSize: 9, color: '#666', margin: '4px 0', lineHeight: 1.5 }}>{line}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Projects */}
            {prj.length > 0 && (
              <div style={{ marginBottom: 28 }}>
                <h2 style={{ fontSize: 14, fontWeight: 500, color: tc, letterSpacing: '0.1em', marginBottom: 16, borderBottom: `1px solid ${tc}40`, paddingBottom: 6 }}>
                  Signature Projects
                </h2>
                {prj.map(p => (
                  <div key={p.id} style={{ marginBottom: 16 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <h3 style={{ fontSize: 11, fontWeight: 600, color: '#1a1a1a', margin: 0 }}>{p.name}</h3>
                      {p.link && <span style={{ fontSize: 7, color: tc }}>{p.link}</span>}
                    </div>
                    {p.tech && <p style={{ fontSize: 8, color: tc, marginBottom: 4 }}>{p.tech}</p>}
                    <p style={{ fontSize: 9, color: '#666', margin: 0 }}>{p.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column */}
          <div style={{ flex: 0.8 }}>
            {/* Skills */}
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 14, fontWeight: 500, color: tc, letterSpacing: '0.1em', marginBottom: 16, borderBottom: `1px solid ${tc}40`, paddingBottom: 6 }}>
                Expertise
              </h2>
              {skl.map(s => (
                <div key={s.id} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 9, color: '#333', fontWeight: 500 }}>{s.name}</span>
                    <span style={{ fontSize: 8, color: tc }}>{s.level}%</span>
                  </div>
                  <div style={{ height: 1, background: '#e0e0e0' }}>
                    <div style={{ width: `${s.level}%`, height: 1, background: goldGradient }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 14, fontWeight: 500, color: tc, letterSpacing: '0.1em', marginBottom: 16, borderBottom: `1px solid ${tc}40`, paddingBottom: 6 }}>
                Education
              </h2>
              {edu.map(e => (
                <div key={e.id} style={{ marginBottom: 14 }}>
                  <h3 style={{ fontSize: 10, fontWeight: 600, color: '#1a1a1a', margin: 0 }}>{e.degree}</h3>
                  <p style={{ fontSize: 9, color: tc, margin: '2px 0' }}>{e.school}</p>
                  <p style={{ fontSize: 8, color: '#999' }}>{e.startDate} — {e.endDate}</p>
                  {e.achievements && <p style={{ fontSize: 8, color: '#666', marginTop: 2 }}>{e.achievements}</p>}
                </div>
              ))}
            </div>

            {/* Languages & Interests */}
            {lang.length > 0 && (
              <div style={{ marginBottom: 28 }}>
                <h2 style={{ fontSize: 14, fontWeight: 500, color: tc, letterSpacing: '0.1em', marginBottom: 16, borderBottom: `1px solid ${tc}40`, paddingBottom: 6 }}>
                  Languages
                </h2>
                {lang.map(l => (
                  <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 9, color: '#333' }}>{l.name}</span>
                    <span style={{ fontSize: 8, color: tc }}>{l.proficiency}</span>
                  </div>
                ))}
              </div>
            )}

            {intr.length > 0 && (
              <div>
                <h2 style={{ fontSize: 14, fontWeight: 500, color: tc, letterSpacing: '0.1em', marginBottom: 16, borderBottom: `1px solid ${tc}40`, paddingBottom: 6 }}>
                  Personal
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {intr.map(i => (
                    <span key={i.id} style={{ fontSize: 8, color: '#666', fontStyle: 'italic' }}>✦ {i.name}</span>
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