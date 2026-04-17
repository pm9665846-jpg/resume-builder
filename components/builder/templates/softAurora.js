// src/components/builder/templates/softAurora.js

import { Mail, Phone, MapPin, Globe, Link2, Briefcase, GraduationCap, Award, Heart, Sparkles, Feather, Moon } from 'lucide-react'

const D = {
  name: 'Aurora Chen',
  jobTitle: 'Creative Director & Wellness Advocate',
  email: 'aurora@wellnesscreative.com',
  phone: '+1 (415) 555-0189',
  location: 'Santa Monica, CA',
  website: 'auroracreative.co',
  linkedin: 'linkedin.com/in/aurorachen',
  summary: 'Blending creativity with mindfulness to craft meaningful brand experiences. 10+ years of leading teams with empathy, purpose, and a touch of magic. Believer in slow living, fast innovation, and everything in between.',
  experience: [
    { id: 'e1', role: 'Creative Director of Wellbeing', company: 'Mindful Brands Co.', location: 'Santa Monica', startDate: 'Apr 2021', endDate: '', current: true, description: '• Led rebranding for 12 wellness startups, increasing brand trust by 78%\n• Pioneered "Conscious Creative" framework adopted by 50+ agencies\n• Built cross-functional teams of 25+ designers with 94% retention rate\n• Launched annual Creativity & Compassion Summit with 5K+ attendees' },
    { id: 'e2', role: 'Senior Brand Strategist', company: 'Ethereal Studio', location: 'Los Angeles', startDate: 'Jun 2018', endDate: 'Mar 2021', current: false, description: '• Crafted brand identities for 8 sustainable fashion labels\n• Increased social engagement by 234% through purpose-driven campaigns\n• Mentored 15 junior strategists in mindful leadership' },
    { id: 'e3', role: 'Visual Designer', company: 'Luminous Collective', location: 'Portland', startDate: 'Aug 2015', endDate: 'May 2018', current: false, description: '• Designed award-winning campaigns for environmental non-profits\n• Developed accessible design system used by 30+ organizations' },
  ],
  education: [
    { id: 'ed1', degree: 'MA in Transformative Design', school: 'California Institute of Integral Studies', startDate: '2013', endDate: '2015', gpa: '4.0', achievements: 'Thesis on Design as Meditation' },
    { id: 'ed2', degree: 'BFA in Visual Communication', school: 'Otis College of Art & Design', startDate: '2009', endDate: '2013', gpa: '3.9', achievements: 'Summa Cum Laude · Excellence in Design Award' },
  ],
  skills: [
    { id: 's1', name: 'Creative Direction', level: 96 },
    { id: 's2', name: 'Mindful Leadership', level: 98 },
    { id: 's3', name: 'Brand Strategy', level: 94 },
    { id: 's4', name: 'Design Thinking', level: 92 },
    { id: 's5', name: 'Community Building', level: 95 },
    { id: 's6', name: 'Visual Storytelling', level: 93 },
  ],
  projects: [
    { id: 'p1', name: 'The Pause Project', description: 'Interactive installation exploring rest as resistance. Featured at Sundance Film Festival and MoMA Design Store.', tech: 'Immersive, Sound, Light', link: 'pause.project' },
    { id: 'p2', name: 'Conscious Commerce Report', description: 'Research initiative on ethical consumerism, cited by Forbes and Vogue Business.', tech: 'Research, Design, Publishing', link: 'conscious.report' },
  ],
  certifications: [
    { id: 'c1', name: 'Mindful Leadership Certification', issuer: 'Search Inside Yourself Institute', date: '2023' },
    { id: 'c2', name: 'Regenerative Design', issuer: 'Buckminster Fuller Institute', date: '2022' },
  ],
  languages: [
    { id: 'l1', name: 'English', proficiency: 'Native' },
    { id: 'l2', name: 'Mandarin', proficiency: 'Fluent' },
    { id: 'l3', name: 'Spanish', proficiency: 'Conversational' },
  ],
  interests: [
    { id: 'i1', name: 'Meditation' },
    { id: 'i2', name: 'Botanical Gardens' },
    { id: 'i3', name: 'Slow Fashion' },
    { id: 'i4', name: 'Tea Ceremony' },
    { id: 'i5', name: 'Stargazing' },
  ],
}

function getValue(val, fallback) {
  return val && String(val).trim() !== '' ? val : fallback
}

export default function SoftAuroraTemplate({ resume }) {
  const {
    personalInfo = {}, experience = [], education = [], skills = [],
    projects = [], certifications = [], languages = [], interests = [],
    themeColor = '#f0a3b3', // Soft rose/pink
    fontFamily,
  } = resume

  const tc = themeColor
  const ff = fontFamily || "'Cormorant Garamond', 'Georgia', serif"
  const lightBg = '#fffef7'
  const softGradient = `linear-gradient(135deg, ${tc}15, ${tc}08, transparent)`
  const cardBg = 'rgba(255, 255, 255, 0.7)'

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
      background: lightBg,
      fontFamily: ff,
      fontSize: '10px',
      lineHeight: 1.6,
      width: 794,
      minHeight: 1123,
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
    }}>
      
      {/* Dreamy background blobs */}
      <div style={{
        position: 'absolute',
        top: -200,
        right: -150,
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${tc}15, transparent 70%)`,
        pointerEvents: 'none',
        filter: 'blur(60px)',
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: -150,
        left: -100,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${tc}10, transparent 70%)`,
        pointerEvents: 'none',
        filter: 'blur(50px)',
      }} />
      
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '30%',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${tc}08, transparent 70%)`,
        pointerEvents: 'none',
        filter: 'blur(40px)',
      }} />

      {/* Subtle dotted pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(${tc}10 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
        pointerEvents: 'none',
        opacity: 0.5,
      }} />

      {/* Main Content Container */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Hero Section */}
        <div style={{
          padding: '56px 56px 40px',
          textAlign: 'center',
          position: 'relative',
        }}>
          {/* Decorative line art */}
          <div style={{
            position: 'absolute',
            top: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 60,
            height: 1,
            background: `linear-gradient(90deg, transparent, ${tc}, ${tc}, transparent)`,
          }} />
          
          {/* Optional Photo */}
          {photo && (
            <div style={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              margin: '0 auto 24px',
              overflow: 'hidden',
              border: `3px solid white`,
              boxShadow: `0 8px 32px ${tc}30`,
              background: `linear-gradient(135deg, ${tc}30, ${tc}10)`,
            }}>
              <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}
          
          {/* Name with delicate underline */}
          <h1 style={{
            fontSize: 42,
            fontWeight: 400,
            color: '#2c2c2c',
            margin: '0 0 12px',
            letterSpacing: '-0.01em',
            fontFamily: "'Playfair Display', serif",
          }}>{name}</h1>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            marginBottom: 16,
          }}>
            <Moon size={12} color={tc} />
            <p style={{
              fontSize: 12,
              color: tc,
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              margin: 0,
            }}>{jobTitle}</p>
            <Feather size={12} color={tc} />
          </div>
          
          {/* Contact rings */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 20,
            marginTop: 20,
          }}>
            {[
              { icon: Mail, val: email },
              { icon: Phone, val: phone },
              { icon: MapPin, val: location },
              { icon: Globe, val: website },
              { icon: Link2, val: linkedin },
            ].filter(c => c.val).map(({ icon: Icon, val }, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '4px 12px',
                background: cardBg,
                backdropFilter: 'blur(10px)',
                borderRadius: 40,
                border: `1px solid ${tc}20`,
                boxShadow: `0 2px 8px ${tc}08`,
              }}>
                <Icon size={12} color={tc} />
                <span style={{ fontSize: 9, color: '#5a5a5a' }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Card */}
        {summary && (
          <div style={{
            margin: '0 56px 32px',
            padding: '24px 32px',
            background: cardBg,
            backdropFilter: 'blur(10px)',
            borderRadius: 24,
            border: `1px solid ${tc}20`,
            boxShadow: `0 8px 32px ${tc}10`,
            textAlign: 'center',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              top: -12,
              left: '50%',
              transform: 'translateX(-50%)',
              background: lightBg,
              padding: '0 12px',
            }}>
              <Sparkles size={16} color={tc} />
            </div>
            <p style={{ fontSize: 10.5, color: '#4a4a4a', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
              "{summary}"
            </p>
          </div>
        )}

        {/* Two Column Layout */}
        <div style={{ padding: '0 56px 56px', display: 'flex', gap: 48 }}>
          
          {/* Left Column - Main Content */}
          <div style={{ flex: 1.3 }}>
            
            {/* Experience */}
            <div style={{ marginBottom: 40 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 24,
              }}>
                <Briefcase size={16} color={tc} />
                <h2 style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: '#2c2c2c',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  margin: 0,
                }}>Journey</h2>
                <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${tc}30, transparent)` }} />
              </div>
              
              {exp.map((e, idx) => (
                <div key={e.id} style={{
                  marginBottom: 28,
                  position: 'relative',
                  paddingLeft: 20,
                }}>
                  {/* Timeline dot */}
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: tc,
                    boxShadow: `0 0 0 3px ${tc}20`,
                  }} />
                  
                  <div style={{
                    background: cardBg,
                    backdropFilter: 'blur(8px)',
                    padding: '16px 20px',
                    borderRadius: 16,
                    border: `1px solid ${tc}15`,
                    transition: 'all 0.3s ease',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 8 }}>
                      <div>
                        <h3 style={{ fontSize: 11, fontWeight: 600, color: '#2c2c2c', margin: 0 }}>{e.role}</h3>
                        <p style={{ fontSize: 9.5, color: tc, fontWeight: 500, margin: '4px 0 0' }}>
                          {e.company}
                          {e.location && <span style={{ color: '#aaa', fontWeight: 400 }}> · {e.location}</span>}
                        </p>
                      </div>
                      <span style={{
                        fontSize: 8,
                        color: '#888',
                        padding: '2px 10px',
                        background: `${tc}10`,
                        borderRadius: 20,
                      }}>
                        {e.startDate} — {e.current ? 'Present' : e.endDate}
                      </span>
                    </div>
                    {e.description && e.description.split('\n').map((line, i) => (
                      <p key={i} style={{ fontSize: 9, color: '#666', margin: '6px 0 0', lineHeight: 1.6 }}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Projects */}
            {prj.length > 0 && (
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 24,
                }}>
                  <Sparkles size={16} color={tc} />
                  <h2 style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: '#2c2c2c',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}>Creations</h2>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${tc}30, transparent)` }} />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {prj.map(p => (
                    <div key={p.id} style={{
                      background: cardBg,
                      backdropFilter: 'blur(8px)',
                      padding: '16px 20px',
                      borderRadius: 16,
                      border: `1px solid ${tc}15`,
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <h3 style={{ fontSize: 10.5, fontWeight: 600, color: '#2c2c2c', margin: 0 }}>{p.name}</h3>
                        {p.link && <span style={{ fontSize: 7.5, color: tc }}>↗ {p.link}</span>}
                      </div>
                      {p.tech && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                          {p.tech.split(',').map((t, i) => (
                            <span key={i} style={{
                              fontSize: 7,
                              padding: '2px 8px',
                              background: `${tc}10`,
                              borderRadius: 12,
                              color: tc,
                            }}>{t.trim()}</span>
                          ))}
                        </div>
                      )}
                      <p style={{ fontSize: 9, color: '#666', margin: 0, lineHeight: 1.6 }}>{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div style={{ flex: 0.9 }}>
            
            {/* Skills - Shown as delicate chips */}
            <div style={{ marginBottom: 40 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 20,
              }}>
                <Heart size={14} color={tc} />
                <h2 style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: '#2c2c2c',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  margin: 0,
                }}>Gifts</h2>
                <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${tc}30, transparent)` }} />
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {skl.map(s => (
                  <div key={s.id} style={{
                    background: cardBg,
                    backdropFilter: 'blur(8px)',
                    padding: '8px 14px',
                    borderRadius: 40,
                    border: `1px solid ${tc}20`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}>
                    <span style={{ fontSize: 9, color: '#4a4a4a', fontWeight: 500 }}>{s.name}</span>
                    <div style={{
                      width: 30,
                      height: 2,
                      background: `${tc}20`,
                      borderRadius: 2,
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        width: `${s.level}%`,
                        height: 2,
                        background: tc,
                        borderRadius: 2,
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div style={{ marginBottom: 40 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 20,
              }}>
                <GraduationCap size={14} color={tc} />
                <h2 style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: '#2c2c2c',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  margin: 0,
                }}>Studies</h2>
                <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${tc}30, transparent)` }} />
              </div>
              
              {edu.map(e => (
                <div key={e.id} style={{
                  background: cardBg,
                  backdropFilter: 'blur(8px)',
                  padding: '14px 16px',
                  borderRadius: 16,
                  border: `1px solid ${tc}15`,
                  marginBottom: 12,
                }}>
                  <h3 style={{ fontSize: 10, fontWeight: 600, color: '#2c2c2c', margin: 0 }}>{e.degree}</h3>
                  <p style={{ fontSize: 9, color: tc, margin: '4px 0 2px' }}>{e.school}</p>
                  <p style={{ fontSize: 8, color: '#999' }}>{e.startDate} — {e.endDate}</p>
                  {e.achievements && <p style={{ fontSize: 8, color: '#aaa', marginTop: 6 }}>✨ {e.achievements}</p>}
                </div>
              ))}
            </div>

            {/* Certifications */}
            {cert.length > 0 && (
              <div style={{ marginBottom: 40 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 20,
                }}>
                  <Award size={14} color={tc} />
                  <h2 style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: '#2c2c2c',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}>Certificates</h2>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${tc}30, transparent)` }} />
                </div>
                
                {cert.map(c => (
                  <div key={c.id} style={{
                    background: cardBg,
                    backdropFilter: 'blur(8px)',
                    padding: '10px 14px',
                    borderRadius: 12,
                    border: `1px solid ${tc}15`,
                    marginBottom: 10,
                  }}>
                    <p style={{ fontSize: 9, fontWeight: 600, color: '#2c2c2c', margin: 0 }}>{c.name}</p>
                    <p style={{ fontSize: 8, color: '#888', margin: '2px 0 0' }}>{c.issuer} · {c.date}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Languages */}
            {lang.length > 0 && (
              <div style={{ marginBottom: 40 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 16,
                }}>
                  <Globe size={14} color={tc} />
                  <h2 style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: '#2c2c2c',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}>Languages</h2>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${tc}30, transparent)` }} />
                </div>
                
                {lang.map(l => (
                  <div key={l.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 10,
                    padding: '6px 0',
                  }}>
                    <span style={{ fontSize: 9, color: '#4a4a4a' }}>{l.name}</span>
                    <span style={{
                      fontSize: 7.5,
                      padding: '2px 8px',
                      background: `${tc}10`,
                      borderRadius: 20,
                      color: tc,
                    }}>{l.proficiency}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Interests - As delicate tags */}
            {intr.length > 0 && (
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 16,
                }}>
                  <Feather size={14} color={tc} />
                  <h2 style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: '#2c2c2c',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}>Soul Joys</h2>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${tc}30, transparent)` }} />
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {intr.map(i => (
                    <span key={i.id} style={{
                      fontSize: 8,
                      padding: '5px 12px',
                      background: cardBg,
                      backdropFilter: 'blur(8px)',
                      borderRadius: 30,
                      border: `1px solid ${tc}20`,
                      color: '#5a5a5a',
                    }}>
                      ✦ {i.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Decoration */}
        <div style={{
          textAlign: 'center',
          padding: '24px 56px 32px',
          borderTop: `1px solid ${tc}15`,
          marginTop: 20,
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 8,
            color: '#aaa',
          }}>
            <span>✦</span>
            <span>live with intention</span>
            <span>✦</span>
            <span>create with purpose</span>
            <span>✦</span>
          </div>
        </div>
      </div>
    </div>
  )
}