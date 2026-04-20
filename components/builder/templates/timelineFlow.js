// src/components/builder/templates/timelineFlow.js

import { Mail, Phone, MapPin, Globe, Link2, Briefcase, GraduationCap, Award, Heart, Calendar, Compass, Star, Coffee } from 'lucide-react'

const defaultData = {
  name: 'Dr. Elena Vasquez',
  jobTitle: 'Innovation Architect & Futurist',
  email: 'elena@futurelabs.ai',
  phone: '+1 (512) 555-0892',
  location: 'Berlin, Germany',
  website: 'elenavasquez.future',
  linkedin: 'linkedin.com/in/elenavasquez',
  summary: 'Blending human-centered design with emerging technologies to architect tomorrow\'s solutions. Named "Top 100 Women in Tech" and recognized for pioneering work in ethical AI and sustainable innovation.',
  experience: [
    { id: 'e1', role: 'Chief Innovation Architect', company: 'FutureLabs AI', location: 'Berlin', startDate: '2023', endDate: 'Present', current: true, description: '• Architecting AI ethics framework adopted by EU Commission\n• Leading moonshot projects with €15M research budget\n• Keynote speaker at 25+ international conferences\n• Published 12 research papers on human-AI collaboration' },
    { id: 'e2', role: 'Senior Innovation Strategist', company: 'DesignX Institute', location: 'Barcelona', startDate: '2020', endDate: '2023', current: false, description: '• Launched innovation lab serving 50+ startups\n• Created design thinking curriculum for 2000+ students\n• Won "Best Innovation Program" award 2022' },
    { id: 'e3', role: 'Research Fellow', company: 'MIT Media Lab', location: 'Boston', startDate: '2017', endDate: '2020', current: false, description: '• Developed prototype for AR collaboration tools\n• Published in Nature: "Future of Human-Computer Interaction"\n• Secured $2M in research grants' },
    { id: 'e4', role: 'UX Innovation Lead', company: 'Google', location: 'Mountain View', startDate: '2014', endDate: '2017', current: false, description: '• Led redesign of Google Assistant interface\n• Patented 5 novel interaction methods\n• Received Google Innovation Award' },
  ],
  education: [
    { id: 'ed1', degree: 'PhD in Human-Computer Interaction', school: 'Stanford University', startDate: '2010', endDate: '2014', achievements: 'Doctoral Fellowship · Best Dissertation Award' },
    { id: 'ed2', degree: 'MSc in Cognitive Science', school: 'University of Edinburgh', startDate: '2008', endDate: '2010', achievements: 'Fullbright Scholar · Distinction' },
    { id: 'ed3', degree: 'BA in Design & Technology', school: 'Parsons School of Design', startDate: '2004', endDate: '2008', achievements: 'Summa Cum Laude' },
  ],
  skills: [
    { id: 's1', name: 'Innovation Strategy', level: 98 },
    { id: 's2', name: 'AI Ethics', level: 96 },
    { id: 's3', name: 'Design Thinking', level: 97 },
    { id: 's4', name: 'Research Leadership', level: 95 },
    { id: 's5', name: 'Public Speaking', level: 94 },
    { id: 's6', name: 'Strategic Foresight', level: 96 },
  ],
  projects: [
    { id: 'p1', name: 'Ethical AI Framework', description: 'Comprehensive framework for responsible AI development adopted by 200+ organizations.', impact: 'Global Impact Award', link: 'ethics.ai' },
    { id: 'p2', name: 'Future of Work 2030', description: 'Research initiative exploring how AI will transform workplaces.', impact: 'TED Talk Feature', link: 'future.work' },
    { id: 'p3', name: 'Sustainable Innovation Lab', description: 'Open innovation platform for climate tech solutions.', impact: 'UN Recognition', link: 'sustain.lab' },
  ],
  certifications: [
    { id: 'c1', name: 'AI Governance Professional', issuer: 'Harvard Kennedy School', date: '2023' },
    { id: 'c2', name: 'Strategic Foresight Certified', issuer: 'Institute for the Future', date: '2022' },
  ],
  languages: [
    { id: 'l1', name: 'English', proficiency: 'Native' },
    { id: 'l2', name: 'Spanish', proficiency: 'Native' },
    { id: 'l3', name: 'German', proficiency: 'Fluent' },
    { id: 'l4', name: 'Mandarin', proficiency: 'Intermediate' },
  ],
  interests: [
    { id: 'i1', name: 'Astronomy' },
    { id: 'i2', name: 'Jazz Piano' },
    { id: 'i3', name: 'Rock Climbing' },
    { id: 'i4', name: 'Chess' },
    { id: 'i5', name: 'Meditation' },
    { id: 'i6', name: 'Permaculture' },
  ],
}

function getValue(value, fallback) {
  if (value && typeof value === 'string' && value.trim() !== '') return value
  if (value && typeof value === 'object' && Object.keys(value).length > 0) return value
  return fallback
}

export default function TimelineFlowTemplate({ resume = {} }) {
  const {
    personalInfo = {},
    experience = [],
    education = [],
    skills = [],
    projects = [],
    certifications = [],
    languages = [],
    interests = [],
    themeColor = '#ec4899',
    fontFamily = "'Cormorant Garamond', 'Inter', sans-serif"
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

  const gradientBg = `linear-gradient(135deg, ${tc}08, ${tc}02)`
  const gradientAccent = `linear-gradient(135deg, ${tc}, ${tc}cc)`

  return (
    <div style={{
      background: '#fef9f4',
      fontFamily: fontFamily,
      fontSize: '10px',
      lineHeight: 1.5,
      width: '794px',
      minHeight: '1123px',
      boxSizing: 'border-box',
      position: 'relative',
      overflowX: 'hidden',
    }}>
      
      {/* Unique Diagonal Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `repeating-linear-gradient(45deg, ${tc}03 0px, ${tc}03 2px, transparent 2px, transparent 20px)`,
        pointerEvents: 'none',
      }} />
      
      {/* Corner Decorations */}
      <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        width: '60px',
        height: '60px',
        borderTop: `3px solid ${tc}`,
        borderLeft: `3px solid ${tc}`,
        opacity: 0.3,
      }} />
      <div style={{
        position: 'absolute',
        top: 20,
        right: 20,
        width: '60px',
        height: '60px',
        borderTop: `3px solid ${tc}`,
        borderRight: `3px solid ${tc}`,
        opacity: 0.3,
      }} />
      <div style={{
        position: 'absolute',
        bottom: 20,
        left: 20,
        width: '60px',
        height: '60px',
        borderBottom: `3px solid ${tc}`,
        borderLeft: `3px solid ${tc}`,
        opacity: 0.3,
      }} />
      <div style={{
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: '60px',
        height: '60px',
        borderBottom: `3px solid ${tc}`,
        borderRight: `3px solid ${tc}`,
        opacity: 0.3,
      }} />

      {/* Main Content */}
      <div style={{
        margin: '40px 48px',
        position: 'relative',
        zIndex: 2,
      }}>
        
        {/* Header - Asymmetrical Design */}
        <div style={{
          display: 'flex',
          gap: '32px',
          marginBottom: '48px',
          alignItems: 'center',
        }}>
          {/* Profile Section */}
          <div style={{ textAlign: 'center', flex: '0.8' }}>
            <div style={{
              position: 'relative',
              display: 'inline-block',
            }}>
              <div style={{
                position: 'absolute',
                top: -10,
                left: -10,
                right: -10,
                bottom: -10,
                borderRadius: '50%',
                border: `2px dashed ${tc}`,
                animation: 'spin 20s linear infinite',
              }} />
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                overflow: 'hidden',
                background: photo ? 'transparent' : gradientAccent,
                border: `4px solid white`,
                boxShadow: `0 10px 30px ${tc}30`,
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
                    fontSize: '48px',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>✨</div>
                )}
              </div>
            </div>
          </div>
          
          {/* Title Section */}
          <div style={{ flex: '2' }}>
            <h1 style={{
              fontSize: '42px',
              fontWeight: 600,
              margin: 0,
              background: gradientAccent,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em',
            }}>{name}</h1>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              margin: '12px 0 16px',
            }}>
              <div style={{
                width: '40px',
                height: '2px',
                background: gradientAccent,
              }} />
              <p style={{
                fontSize: '13px',
                color: tc,
                fontWeight: 500,
                margin: 0,
                letterSpacing: '0.3px',
              }}>{jobTitle}</p>
              <div style={{
                width: '40px',
                height: '2px',
                background: gradientAccent,
              }} />
            </div>
            
            {/* Contact - Minimalist */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
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
                  fontSize: '8.5px',
                  color: '#6b7280',
                }}>
                  <Icon size={10} color={tc} />
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quote/Year Badge */}
          <div style={{
            flex: '0.5',
            textAlign: 'center',
            padding: '16px',
            background: gradientBg,
            borderRadius: '16px',
            border: `1px solid ${tc}20`,
          }}>
            <Compass size={24} color={tc} />
            <div style={{
              fontSize: '24px',
              fontWeight: 700,
              color: tc,
              marginTop: '8px',
            }}>10+</div>
            <div style={{ fontSize: '7px', color: '#6b7280' }}>YEARS OF</div>
            <div style={{ fontSize: '8px', fontWeight: 600, color: tc }}>INNOVATION</div>
          </div>
        </div>

        {/* Summary - Callout Box */}
        {summary && (
          <div style={{
            background: gradientBg,
            padding: '24px 32px',
            borderRadius: '16px',
            marginBottom: '48px',
            borderLeft: `4px solid ${tc}`,
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              top: -12,
              left: 20,
              background: '#fef9f4',
              padding: '0 12px',
            }}>
              <Star size={14} color={tc} />
            </div>
            <p style={{
              fontSize: '10.5px',
              color: '#4b5563',
              lineHeight: 1.6,
              margin: 0,
              fontStyle: 'italic',
            }}>"{summary}"</p>
          </div>
        )}

        {/* Main Layout - Unique Timeline Structure */}
        <div style={{
          display: 'flex',
          gap: '48px',
        }}>
          
          {/* LEFT - Timeline Experience */}
          <div style={{ flex: '1.4' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
            }}>
              <Calendar size={18} color={tc} />
              <h2 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#1f2937',
                margin: 0,
                letterSpacing: '-0.3px',
              }}>Professional Journey</h2>
            </div>
            
            {/* Vertical Timeline */}
            <div style={{ position: 'relative', paddingLeft: '30px' }}>
              {/* Timeline Line */}
              <div style={{
                position: 'absolute',
                left: '8px',
                top: '0',
                bottom: '0',
                width: '2px',
                background: `linear-gradient(180deg, ${tc}, ${tc}60, transparent)`,
              }} />
              
              {exp.map((e, idx) => (
                <div key={e.id} style={{
                  position: 'relative',
                  marginBottom: '32px',
                }}>
                  {/* Timeline Node */}
                  <div style={{
                    position: 'absolute',
                    left: '-30px',
                    top: '0',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: gradientAccent,
                    border: `3px solid white`,
                    boxShadow: `0 0 0 3px ${tc}30`,
                    zIndex: 2,
                  }} />
                  
                  {/* Year Badge */}
                  <div style={{
                    position: 'absolute',
                    left: '-85px',
                    top: '-2px',
                    background: gradientBg,
                    padding: '2px 8px',
                    borderRadius: '20px',
                    fontSize: '8px',
                    fontWeight: 600,
                    color: tc,
                    border: `1px solid ${tc}20`,
                    whiteSpace: 'nowrap',
                  }}>
                    {e.startDate} {!e.current && `- ${e.endDate}`}
                  </div>
                  
                  {/* Content Card */}
                  <div style={{
                    background: '#ffffff',
                    padding: '16px',
                    borderRadius: '12px',
                    border: `1px solid ${tc}15`,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                    transition: 'transform 0.2s',
                  }}>
                    <h3 style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#1f2937',
                      margin: '0 0 4px',
                    }}>{e.role}</h3>
                    <p style={{
                      fontSize: '9.5px',
                      color: tc,
                      fontWeight: 600,
                      margin: '0 0 8px',
                    }}>{e.company} • {e.location}</p>
                    {e.description && e.description.split('\n').map((line, i) => (
                      <p key={i} style={{
                        fontSize: '8.5px',
                        color: '#6b7280',
                        margin: '4px 0',
                        lineHeight: 1.5,
                      }}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Zigzag Layout */}
          <div style={{ flex: '1' }}>
            
            {/* Skills - Circular Progress */}
            <div style={{
              background: gradientBg,
              padding: '20px',
              borderRadius: '16px',
              marginBottom: '32px',
              border: `1px solid ${tc}15`,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '20px',
              }}>
                <Briefcase size={14} color={tc} />
                <h3 style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#1f2937',
                  margin: 0,
                }}>Core Expertise</h3>
              </div>
              
              {skl.slice(0, 6).map(s => (
                <div key={s.id} style={{ marginBottom: '14px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '4px',
                  }}>
                    <span style={{ fontSize: '8.5px', color: '#374151' }}>{s.name}</span>
                    <span style={{ fontSize: '7.5px', color: tc, fontWeight: 600 }}>{s.level}%</span>
                  </div>
                  <div style={{
                    height: '3px',
                    background: '#e5e7eb',
                    borderRadius: '2px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      width: `${s.level}%`,
                      height: '3px',
                      background: gradientAccent,
                      borderRadius: '2px',
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Projects - Card Grid */}
            {prj.length > 0 && (
              <div style={{ marginBottom: '32px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px',
                }}>
                  <Coffee size={14} color={tc} />
                  <h3 style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#1f2937',
                    margin: 0,
                  }}>Impact Projects</h3>
                </div>
                
                {prj.map(p => (
                  <div key={p.id} style={{
                    background: '#ffffff',
                    padding: '14px',
                    borderRadius: '12px',
                    marginBottom: '12px',
                    border: `1px solid ${tc}15`,
                    borderLeft: `3px solid ${tc}`,
                  }}>
                    <h4 style={{
                      fontSize: '9.5px',
                      fontWeight: 700,
                      color: '#1f2937',
                      margin: '0 0 4px',
                    }}>{p.name}</h4>
                    <p style={{
                      fontSize: '8px',
                      color: '#6b7280',
                      margin: '0 0 6px',
                    }}>{p.description}</p>
                    {p.impact && (
                      <div style={{
                        display: 'inline-block',
                        fontSize: '7px',
                        padding: '2px 8px',
                        background: `${tc}10`,
                        borderRadius: '10px',
                        color: tc,
                        fontWeight: 600,
                      }}>
                        🏆 {p.impact}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Education Zigzag */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
              }}>
                <GraduationCap size={14} color={tc} />
                <h3 style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#1f2937',
                  margin: 0,
                }}>Education</h3>
              </div>
              
              {edu.map((e, idx) => (
                <div key={e.id} style={{
                  display: 'flex',
                  gap: '12px',
                  marginBottom: '14px',
                  padding: '10px',
                  background: idx % 2 === 0 ? gradientBg : '#ffffff',
                  borderRadius: '10px',
                  border: `1px solid ${tc}10`,
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: gradientAccent,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '14px',
                  }}>
                    {idx + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '9px',
                      fontWeight: 700,
                      color: '#1f2937',
                      margin: '0 0 2px',
                    }}>{e.degree}</h4>
                    <p style={{
                      fontSize: '8px',
                      color: tc,
                      margin: '0',
                    }}>{e.school}</p>
                    <p style={{
                      fontSize: '7px',
                      color: '#9ca3af',
                      margin: '2px 0 0',
                    }}>{e.startDate} — {e.endDate}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages & Interests Combined */}
            <div style={{
              background: gradientBg,
              padding: '16px',
              borderRadius: '16px',
              border: `1px solid ${tc}15`,
            }}>
              {lang.length > 0 && (
                <div style={{ marginBottom: '16px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '12px',
                  }}>
                    <Globe size={12} color={tc} />
                    <h3 style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      color: '#1f2937',
                      margin: 0,
                    }}>Languages</h3>
                  </div>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {lang.map(l => (
                      <div key={l.id} style={{
                        fontSize: '8px',
                        padding: '3px 10px',
                        background: '#ffffff',
                        borderRadius: '20px',
                        border: `1px solid ${tc}20`,
                      }}>
                        {l.name} • <span style={{ color: tc }}>{l.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {intr.length > 0 && (
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '12px',
                  }}>
                    <Heart size={12} color={tc} />
                    <h3 style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      color: '#1f2937',
                      margin: 0,
                    }}>Passions</h3>
                  </div>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {intr.map(i => (
                      <span key={i.id} style={{
                        fontSize: '7.5px',
                        padding: '3px 8px',
                        background: '#ffffff',
                        borderRadius: '20px',
                        color: '#6b7280',
                      }}>
                        ✦ {i.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer - Unique Wave Design */}
        <div style={{
          marginTop: '48px',
          paddingTop: '24px',
          textAlign: 'center',
          position: 'relative',
        }}>
          <div style={{
            height: '2px',
            background: `repeating-linear-gradient(90deg, ${tc}, ${tc} 10px, transparent 10px, transparent 20px)`,
            marginBottom: '20px',
          }} />
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}>
            {website && (
              <div style={{ fontSize: '7.5px', color: '#9ca3af' }}>
                🌐 {website}
              </div>
            )}
            {linkedin && (
              <div style={{ fontSize: '7.5px', color: '#9ca3af' }}>
                💼 {linkedin}
              </div>
            )}
            <div style={{ fontSize: '7.5px', color: tc }}>
              ✨ "Design the future with purpose" ✨
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}