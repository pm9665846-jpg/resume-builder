// src/components/builder/templates/modernEdge.js

import { Mail, Phone, MapPin, Globe, Link2, Briefcase, GraduationCap, Award, Heart, TrendingUp, Zap, Star, Layers } from 'lucide-react'

const defaultData = {
  name: 'Marcus Chen',
  jobTitle: 'Digital Innovation Director',
  email: 'marcus.chen@innovate.com',
  phone: '+1 (628) 555-0199',
  location: 'Austin, TX',
  website: 'marcuschen.design',
  linkedin: 'linkedin.com/in/marcuschen',
  summary: 'Award-winning Digital Innovation Director with 10+ years of transforming businesses through cutting-edge technology and creative strategy. Recognized as "Top 40 Under 40" in Tech Innovation.',
  experience: [
    { id: 'e1', role: 'Digital Innovation Director', company: 'TechForward Inc.', location: 'Austin', startDate: '2022', endDate: 'Present', current: true, description: '• Spearheaded AI-driven product strategy, increasing revenue by 156%\n• Built and scaled innovation lab with $5M budget and 45+ team members\n• Launched 12 successful products used by 2M+ users globally\n• Recognized with "Innovation Leader of the Year" award' },
    { id: 'e2', role: 'Senior Product Lead', company: 'FutureLabs', location: 'San Francisco', startDate: '2019', endDate: '2022', current: false, description: '• Led development of award-winning mobile platform with 4.9/5 rating\n• Reduced time-to-market by 65% through agile transformation\n• Managed portfolio of 8 products generating $25M annually' },
    { id: 'e3', role: 'Innovation Consultant', company: 'Deloitte Digital', location: 'New York', startDate: '2016', endDate: '2019', current: false, description: '• Advised Fortune 500 clients on digital transformation strategies\n• Delivered 15+ successful projects with 98% client satisfaction\n• Recognized as "Rising Star Consultant" in 2018' },
  ],
  education: [
    { id: 'ed1', degree: 'MS in Technology Innovation', school: 'MIT Media Lab', startDate: '2014', endDate: '2016', achievements: 'Full Scholarship · Research Excellence Award' },
    { id: 'ed2', degree: 'BBA in Information Systems', school: 'University of Texas', startDate: '2010', endDate: '2014', achievements: 'Summa Cum Laude · Valedictorian' },
  ],
  skills: [
    { id: 's1', name: 'Digital Strategy', level: 98 },
    { id: 's2', name: 'Product Innovation', level: 96 },
    { id: 's3', name: 'AI/ML Integration', level: 94 },
    { id: 's4', name: 'Agile Leadership', level: 97 },
    { id: 's5', name: 'UX Strategy', level: 92 },
    { id: 's6', name: 'Growth Hacking', level: 90 },
  ],
  projects: [
    { id: 'p1', name: 'Neural Interface Dashboard', description: 'Revolutionary analytics platform using machine learning for real-time insights. Featured in TechCrunch and WIRED.', tech: 'Python, TensorFlow, React', link: 'neural.dash' },
    { id: 'p2', name: 'Sustainable Tech Initiative', description: 'Carbon-neutral cloud solution adopted by 50+ enterprises.', tech: 'AWS, Kubernetes, Terraform', link: 'green.tech' },
  ],
  certifications: [
    { id: 'c1', name: 'AI Product Manager', issuer: 'Stanford AI', date: '2023' },
    { id: 'c2', name: 'Digital Transformation Leader', issuer: 'MIT Sloan', date: '2022' },
    { id: 'c3', name: 'Agile Certified Practitioner', issuer: 'PMI', date: '2021' },
  ],
  languages: [
    { id: 'l1', name: 'English', proficiency: 'Native' },
    { id: 'l2', name: 'Mandarin', proficiency: 'Fluent' },
    { id: 'l3', name: 'German', proficiency: 'Professional' },
  ],
  interests: [
    { id: 'i1', name: 'Quantum Computing' },
    { id: 'i2', name: 'Chess' },
    { id: 'i3', name: 'Rock Climbing' },
    { id: 'i4', name: 'Podcasting' },
    { id: 'i5', name: '3D Printing' },
  ],
}

function getValue(value, fallback) {
  if (value && typeof value === 'string' && value.trim() !== '') return value
  if (value && typeof value === 'object' && Object.keys(value).length > 0) return value
  return fallback
}

export default function ModernEdgeTemplate({ resume = {} }) {
  const {
    personalInfo = {},
    experience = [],
    education = [],
    skills = [],
    projects = [],
    certifications = [],
    languages = [],
    interests = [],
    themeColor = '#6366f1',
    fontFamily = "'Poppins', 'Inter', sans-serif"
  } = resume

  const tc = themeColor
  
  const name = getValue(personalInfo.name, defaultData.name)
  const jobTitle = getValue(personalInfo.jobTitle, defaultData.jobTitle)
  const email = getValue(personalInfo.email, defaultData.email)
  const phone = getValue(personalInfo.phone, defaultData.phone)
  const location = getValue(personalInfo.location, defaultData.location)
  const website = getValue(personalInfo.website, defaultData.website)
  const linkedin = getValue(personalInfo.linkedin, defaultData.linkedin)
  const summary = getValue(personalInfo.summary, defaultData.summary)
  const photo = personalInfo.photo || ''

  const exp = experience.length > 0 ? experience : defaultData.experience
  const edu = education.length > 0 ? education : defaultData.education
  const skl = skills.length > 0 ? skills : defaultData.skills
  const prj = projects.length > 0 ? projects : defaultData.projects
  const cert = certifications.length > 0 ? certifications : defaultData.certifications
  const lang = languages.length > 0 ? languages : defaultData.languages
  const intr = interests.length > 0 ? interests : defaultData.interests

  // Color variants
  const gradient1 = `linear-gradient(135deg, ${tc}, ${tc}cc)`
  const gradient2 = `linear-gradient(135deg, ${tc}15, ${tc}05)`
  
  return (
    <div style={{
      background: '#f8fafc',
      fontFamily: fontFamily,
      fontSize: '10px',
      lineHeight: 1.5,
      width: '794px',
      minHeight: '1123px',
      boxSizing: 'border-box',
      position: 'relative',
    }}>
      
      {/* Top Color Bar */}
      <div style={{
        height: '8px',
        background: gradient1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }} />
      
      {/* Side Color Border - Left */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 8,
        bottom: 0,
        width: '4px',
        background: `linear-gradient(180deg, ${tc}, ${tc}60, transparent)`,
        zIndex: 10,
      }} />
      
      {/* Side Color Border - Right */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: 8,
        bottom: 0,
        width: '4px',
        background: `linear-gradient(180deg, ${tc}, ${tc}60, transparent)`,
        zIndex: 10,
      }} />

      {/* Main Container */}
      <div style={{
        margin: '24px 32px',
        background: '#ffffff',
        boxShadow: '0 20px 40px -12px rgba(0,0,0,0.1)',
        position: 'relative',
        zIndex: 2,
      }}>
        
        {/* Header with Gradient Background */}
        <div style={{
          background: gradient2,
          padding: '32px 40px',
          borderBottom: `3px solid ${tc}`,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative circles */}
          <div style={{
            position: 'absolute',
            top: -30,
            right: -30,
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: `${tc}10`,
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            bottom: -20,
            left: -20,
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: `${tc}08`,
            pointerEvents: 'none',
          }} />
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', position: 'relative', zIndex: 2 }}>
            {/* Profile with ring */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: -4,
                left: -4,
                right: -4,
                bottom: -4,
                borderRadius: '50%',
                border: `2px solid ${tc}`,
                opacity: 0.5,
              }} />
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                overflow: 'hidden',
                background: photo ? 'transparent' : gradient1,
                border: `3px solid white`,
                boxShadow: `0 8px 20px ${tc}30`,
              }}>
                {photo ? (
                  <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>{name.charAt(0)}</div>
                )}
              </div>
              {/* Online badge */}
              <div style={{
                position: 'absolute',
                bottom: 4,
                right: 4,
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#10b981',
                border: '2px solid white',
              }} />
            </div>
            
            <div style={{ flex: 1 }}>
              <h1 style={{
                fontSize: '32px',
                fontWeight: 700,
                margin: 0,
                background: gradient1,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>{name}</h1>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                <Zap size={14} color={tc} />
                <p style={{ fontSize: '12px', color: tc, fontWeight: 600, margin: 0 }}>{jobTitle}</p>
              </div>
              
              {/* Contact Chips */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginTop: '16px',
              }}>
                {[
                  { icon: Mail, val: email },
                  { icon: Phone, val: phone },
                  { icon: MapPin, val: location },
                ].filter(c => c.val).map(({ icon: Icon, val }, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 12px',
                    background: '#ffffff',
                    borderRadius: '20px',
                    border: `1px solid ${tc}20`,
                    fontSize: '8.5px',
                    color: '#475569',
                  }}>
                    <Icon size={10} color={tc} />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Achievement Badge */}
            <div style={{
              background: gradient1,
              padding: '12px 16px',
              borderRadius: '12px',
              textAlign: 'center',
              minWidth: '100px',
            }}>
              <Star size={20} color="white" />
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginTop: '4px' }}>Top 40</div>
              <div style={{ fontSize: '7px', color: 'white', opacity: 0.9 }}>UNDER 40</div>
            </div>
          </div>
          
          {/* Summary with Icon */}
          {summary && (
            <div style={{
              marginTop: '24px',
              padding: '16px 20px',
              background: '#ffffff',
              borderRadius: '12px',
              borderLeft: `4px solid ${tc}`,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              display: 'flex',
              gap: '12px',
            }}>
              <TrendingUp size={20} color={tc} />
              <p style={{ fontSize: '9.5px', color: '#475569', margin: 0, lineHeight: 1.5, flex: 1 }}>{summary}</p>
            </div>
          )}
        </div>

        {/* Main Content - Modern Layout */}
        <div style={{ display: 'flex', padding: '32px 40px', gap: '32px' }}>
          
          {/* LEFT COLUMN - Main Content */}
          <div style={{ flex: '1.4' }}>
            
            {/* Experience with Modern Cards */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '20px',
              }}>
                <div style={{
                  width: '4px',
                  height: '20px',
                  background: gradient1,
                  borderRadius: '2px',
                }} />
                <Briefcase size={16} color={tc} />
                <h2 style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#1e293b',
                  margin: 0,
                  letterSpacing: '-0.3px',
                }}>Work Experience</h2>
                <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${tc}30, transparent)` }} />
              </div>
              
              {exp.map((e, idx) => (
                <div key={e.id} style={{
                  marginBottom: '20px',
                  padding: '16px',
                  background: '#ffffff',
                  border: `1px solid ${tc}15`,
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    marginBottom: '8px',
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#1e293b',
                        margin: 0,
                      }}>{e.role}</h3>
                      <p style={{
                        fontSize: '9.5px',
                        color: tc,
                        fontWeight: 600,
                        margin: '4px 0 0',
                      }}>{e.company}</p>
                    </div>
                    <span style={{
                      fontSize: '8px',
                      padding: '3px 10px',
                      background: `${tc}10`,
                      borderRadius: '20px',
                      color: tc,
                      fontWeight: 600,
                    }}>
                      {e.startDate} — {e.current ? 'Present' : e.endDate}
                    </span>
                  </div>
                  {e.description && e.description.split('\n').map((line, i) => (
                    <p key={i} style={{
                      fontSize: '9px',
                      color: '#64748b',
                      margin: '6px 0 0',
                      lineHeight: 1.5,
                    }}>{line}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Projects Grid */}
            {prj.length > 0 && (
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '20px',
                }}>
                  <div style={{
                    width: '4px',
                    height: '20px',
                    background: gradient1,
                    borderRadius: '2px',
                  }} />
                  <Layers size={16} color={tc} />
                  <h2 style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#1e293b',
                    margin: 0,
                    letterSpacing: '-0.3px',
                  }}>Featured Projects</h2>
                  <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${tc}30, transparent)` }} />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  {prj.map(p => (
                    <div key={p.id} style={{
                      padding: '14px',
                      background: gradient2,
                      borderRadius: '10px',
                      border: `1px solid ${tc}15`,
                    }}>
                      <h3 style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        color: '#1e293b',
                        margin: '0 0 4px',
                      }}>{p.name}</h3>
                      {p.tech && (
                        <p style={{
                          fontSize: '7px',
                          color: tc,
                          margin: '0 0 6px',
                          fontWeight: 600,
                        }}>{p.tech}</p>
                      )}
                      <p style={{
                        fontSize: '8px',
                        color: '#64748b',
                        margin: 0,
                        lineHeight: 1.4,
                      }}>{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN - Modern Sidebar */}
          <div style={{ flex: '0.9' }}>
            
            {/* Skills with Progress Bars */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '20px',
              }}>
                <div style={{
                  width: '4px',
                  height: '20px',
                  background: gradient1,
                  borderRadius: '2px',
                }} />
                <Zap size={14} color={tc} />
                <h2 style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#1e293b',
                  margin: 0,
                }}>Core Skills</h2>
              </div>
              
              {skl.map(s => (
                <div key={s.id} style={{ marginBottom: '14px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '4px',
                  }}>
                    <span style={{ fontSize: '9px', color: '#334155', fontWeight: 500 }}>{s.name}</span>
                    <span style={{ fontSize: '8px', color: tc, fontWeight: 600 }}>{s.level}%</span>
                  </div>
                  <div style={{
                    height: '4px',
                    background: '#e2e8f0',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      width: `${s.level}%`,
                      height: '4px',
                      background: gradient1,
                      borderRadius: '4px',
                      position: 'relative',
                    }}>
                      <div style={{
                        position: 'absolute',
                        right: 0,
                        top: '-2px',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: tc,
                      }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Cards */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '20px',
              }}>
                <div style={{
                  width: '4px',
                  height: '20px',
                  background: gradient1,
                  borderRadius: '2px',
                }} />
                <GraduationCap size={14} color={tc} />
                <h2 style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#1e293b',
                  margin: 0,
                }}>Education</h2>
              </div>
              
              {edu.map(e => (
                <div key={e.id} style={{
                  padding: '12px',
                  background: gradient2,
                  borderRadius: '10px',
                  marginBottom: '12px',
                  border: `1px solid ${tc}10`,
                }}>
                  <h3 style={{
                    fontSize: '9.5px',
                    fontWeight: 700,
                    color: '#1e293b',
                    margin: 0,
                  }}>{e.degree}</h3>
                  <p style={{
                    fontSize: '8.5px',
                    color: tc,
                    margin: '4px 0',
                    fontWeight: 500,
                  }}>{e.school}</p>
                  <p style={{
                    fontSize: '7.5px',
                    color: '#94a3b8',
                    margin: 0,
                  }}>{e.startDate} — {e.endDate}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            {cert.length > 0 && (
              <div style={{ marginBottom: '32px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '20px',
                }}>
                  <div style={{
                    width: '4px',
                    height: '20px',
                    background: gradient1,
                    borderRadius: '2px',
                  }} />
                  <Award size={14} color={tc} />
                  <h2 style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#1e293b',
                    margin: 0,
                  }}>Certifications</h2>
                </div>
                
                {cert.map(c => (
                  <div key={c.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 0',
                    borderBottom: `1px solid ${tc}10`,
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      background: gradient2,
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Award size={12} color={tc} />
                    </div>
                    <div>
                      <p style={{ fontSize: '9px', fontWeight: 600, color: '#334155', margin: 0 }}>{c.name}</p>
                      <p style={{ fontSize: '7px', color: '#94a3b8', margin: '2px 0 0' }}>{c.issuer} · {c.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Languages & Interests Grid */}
            {lang.length > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px',
                }}>
                  <div style={{
                    width: '4px',
                    height: '20px',
                    background: gradient1,
                    borderRadius: '2px',
                  }} />
                  <Globe size={14} color={tc} />
                  <h2 style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#1e293b',
                    margin: 0,
                  }}>Languages</h2>
                </div>
                
                {lang.map(l => (
                  <div key={l.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}>
                    <span style={{ fontSize: '9px', color: '#334155' }}>{l.name}</span>
                    <span style={{
                      fontSize: '7.5px',
                      padding: '2px 8px',
                      background: `${tc}10`,
                      borderRadius: '12px',
                      color: tc,
                      fontWeight: 600,
                    }}>{l.proficiency}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Interests - Modern Tags */}
            {intr.length > 0 && (
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px',
                }}>
                  <div style={{
                    width: '4px',
                    height: '20px',
                    background: gradient1,
                    borderRadius: '2px',
                  }} />
                  <Heart size={14} color={tc} />
                  <h2 style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#1e293b',
                    margin: 0,
                  }}>Interests</h2>
                </div>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}>
                  {intr.map(i => (
                    <span key={i.id} style={{
                      fontSize: '8px',
                      padding: '5px 12px',
                      background: gradient2,
                      borderRadius: '20px',
                      color: tc,
                      fontWeight: 500,
                      border: `1px solid ${tc}20`,
                    }}>
                      {i.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modern Footer with Color Bar */}
        <div style={{
          background: gradient2,
          padding: '16px 40px',
          borderTop: `1px solid ${tc}20`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            {website && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Globe size={10} color={tc} />
                <span style={{ fontSize: '7.5px', color: '#475569' }}>{website}</span>
              </div>
            )}
            {linkedin && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Link2 size={10} color={tc} />
                <span style={{ fontSize: '7.5px', color: '#475569' }}>{linkedin}</span>
              </div>
            )}
          </div>
          
          <div style={{
            fontSize: '7px',
            color: '#94a3b8',
            letterSpacing: '0.5px',
          }}>
            ✨ Available for speaking engagements & consulting ✨
          </div>
        </div>
        
        {/* Bottom Color Bar */}
        <div style={{
          height: '4px',
          background: gradient1,
          borderBottomLeftRadius: '4px',
          borderBottomRightRadius: '4px',
        }} />
      </div>
    </div>
  )
}