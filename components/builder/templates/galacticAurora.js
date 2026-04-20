// src/components/builder/templates/galacticAurora.js

import { Mail, Phone, MapPin, Globe, Link2, Briefcase, GraduationCap, Award, Heart, Star, Moon, Rocket, Sparkles } from 'lucide-react'

const defaultData = {
  name: 'Nova Stellaris',
  jobTitle: 'Cosmic Experience Director',
  email: 'nova@galactic.studio',
  phone: '+1 (310) 555-COMET',
  location: 'Los Angeles, CA',
  website: 'novastellaris.space',
  linkedin: 'linkedin.com/in/novastellaris',
  summary: 'Creating interstellar experiences that bridge humanity and technology. Visionary leader in immersive realities, space-tech innovation, and futuristic design. Named "Innovator of the Year" and featured in Forbes 30 Under 30.',
  experience: [
    { id: 'e1', role: 'Cosmic Experience Director', company: 'Galactic Studios', location: 'Los Angeles', startDate: '2023', endDate: 'Present', current: true, description: '• Leading immersive space experiences for NASA & SpaceX\n• Created award-winning VR installation at Sundance\n• Managing $8M cosmic innovation portfolio\n• Speaking at SXSW, TED, and Web Summit' },
    { id: 'e2', role: 'Senior Futurist Designer', company: 'MetaVerse Labs', location: 'San Francisco', startDate: '2020', endDate: '2023', current: false, description: '• Designed 3D worlds visited by 10M+ users\n• Patented 7 novel interaction methods\n• Led team of 25 spatial designers\n• Launched 5 successful NFT collections' },
    { id: 'e3', role: 'Space UX Architect', company: 'Blue Origin', location: 'Seattle', startDate: '2017', endDate: '2020', current: false, description: '• Designed HMI for New Shepard capsule\n• Created astronaut training simulations\n• Won "Best UX in Aerospace" award\n• Published research on zero-G interfaces' },
    { id: 'e4', role: 'Digital Artist', company: 'NASA JPL', location: 'Pasadena', startDate: '2014', endDate: '2017', current: false, description: '• Visualized Mars rover data for public outreach\n• Created interactive space exhibits for 12 museums\n• Featured in National Geographic' },
  ],
  education: [
    { id: 'ed1', degree: 'PhD in Human-Space Interaction', school: 'MIT Media Lab', startDate: '2010', endDate: '2014', achievements: 'NASA Fellowship · Best Dissertation' },
    { id: 'ed2', degree: 'MSc in Digital Arts', school: 'California Institute of the Arts', startDate: '2008', endDate: '2010', achievements: 'Full Scholarship · Excellence Award' },
  ],
  skills: [
    { id: 's1', name: 'Spatial Computing', level: 98 },
    { id: 's2', name: 'XR Development', level: 96 },
    { id: 's3', name: 'Generative AI', level: 95 },
    { id: 's4', name: 'Futurism Strategy', level: 97 },
    { id: 's5', name: '3D Animation', level: 94 },
    { id: 's6', name: 'Creative Direction', level: 96 },
  ],
  projects: [
    { id: 'p1', name: 'Lunar Gateway Experience', description: 'Immersive simulation of moon base operations. Used by NASA for astronaut training.', impact: 'NASA Excellence Award', link: 'lunar.gateway' },
    { id: 'p2', name: 'Cosmic Canvas NFT', description: 'Generative art collection inspired by deep space. Sold out in 4 hours.', impact: 'OpenSea Featured', link: 'cosmic.canvas' },
    { id: 'p3', name: 'Interstellar Soundscapes', description: 'AI-generated ambient music from space data. 2M+ streams on Spotify.', impact: 'Grammy Nomination', link: 'stellar.sounds' },
  ],
  certifications: [
    { id: 'c1', name: 'XR Master Certified', issuer: 'Unity Technologies', date: '2023' },
    { id: 'c2', name: 'Space Systems Engineering', issuer: 'International Space University', date: '2022' },
  ],
  languages: [
    { id: 'l1', name: 'English', proficiency: 'Native' },
    { id: 'l2', name: 'Russian', proficiency: 'Fluent' },
    { id: 'l3', name: 'Mandarin', proficiency: 'Intermediate' },
  ],
  interests: [
    { id: 'i1', name: 'Astrophotography' },
    { id: 'i2', name: 'Quantum Physics' },
    { id: 'i3', name: 'Sci-Fi Literature' },
    { id: 'i4', name: 'Stargazing' },
    { id: 'i5', name: 'Rocketry' },
    { id: 'i6', name: 'Meditation' },
  ],
}

function getValue(value, fallback) {
  if (value && typeof value === 'string' && value.trim() !== '') return value
  if (value && typeof value === 'object' && Object.keys(value).length > 0) return value
  return fallback
}

export default function GalacticAuroraTemplate({ resume = {} }) {
  const {
    personalInfo = {},
    experience = [],
    education = [],
    skills = [],
    projects = [],
    certifications = [],
    languages = [],
    interests = [],
    themeColor = '#8b5cf6',
    fontFamily = "'Space Grotesk', 'Inter', sans-serif"
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

  const auroraGradient = `linear-gradient(135deg, ${tc}, #a855f7, #ec4899)`
  const cardGlow = `0 4px 12px rgba(0,0,0,0.05)`

  return (
    <div style={{
      background: '#ffffff',
      fontFamily: fontFamily,
      fontSize: '10px',
      lineHeight: 1.5,
      width: '794px',
      minHeight: '1123px',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      color: '#1e293b',
    }}>
      
      {/* Subtle Star Pattern Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(1px 1px at 10% 20%, ${tc}30, transparent),
                          radial-gradient(1.5px 1.5px at 85% 45%, ${tc}25, transparent),
                          radial-gradient(1px 1px at 50% 70%, ${tc}20, transparent),
                          radial-gradient(1px 1px at 92% 15%, ${tc}30, transparent),
                          radial-gradient(1px 1px at 30% 90%, ${tc}25, transparent)`,
        backgroundSize: '200px 200px',
        backgroundRepeat: 'repeat',
        opacity: 0.4,
        pointerEvents: 'none',
      }} />
      
      {/* Decorative Orbital Rings - Light */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '-5%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        border: `1px dashed ${tc}20`,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        border: `1px dashed ${tc}15`,
        pointerEvents: 'none',
      }} />

      {/* Main Content */}
      <div style={{
        margin: '32px 40px',
        position: 'relative',
        zIndex: 2,
      }}>
        
        {/* Header - Cosmic Layout */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px',
          padding: '24px',
          background: `linear-gradient(135deg, ${tc}05, #ffffff)`,
          borderRadius: '24px',
          border: `1px solid ${tc}20`,
          boxShadow: cardGlow,
        }}>
          
          {/* Left: Profile */}
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            {/* Orbiting Profile */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: -12,
                left: -12,
                right: -12,
                bottom: -12,
                borderRadius: '50%',
                background: `conic-gradient(from 0deg, ${tc}, #a855f7, #ec4899, ${tc})`,
                animation: 'spin 4s linear infinite',
              }} />
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
                background: photo ? 'transparent' : auroraGradient,
                border: `3px solid white`,
                position: 'relative',
                zIndex: 2,
                boxShadow: `0 4px 12px ${tc}30`,
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
                    fontSize: '40px',
                  }}>🌌</div>
                )}
              </div>
            </div>
            
            <div>
              <h1 style={{
                fontSize: '38px',
                fontWeight: 700,
                margin: 0,
                background: auroraGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
              }}>{name}</h1>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '8px',
              }}>
                <Rocket size={14} color={tc} />
                <p style={{
                  fontSize: '12px',
                  color: tc,
                  fontWeight: 500,
                  margin: 0,
                }}>{jobTitle}</p>
                <Sparkles size={12} color={tc} />
              </div>
              
              {/* Contact */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
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
                    fontSize: '8.5px',
                    color: '#64748b',
                  }}>
                    <Icon size={10} color={tc} />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right: Achievement Badge */}
          <div style={{
            textAlign: 'center',
            padding: '16px',
            background: `linear-gradient(135deg, ${tc}08, #ffffff)`,
            borderRadius: '20px',
            border: `1px solid ${tc}20`,
          }}>
            <div style={{
              fontSize: '30px',
              marginBottom: '8px',
            }}>⭐</div>
            <div style={{
              fontSize: '20px',
              fontWeight: 700,
              color: tc,
            }}>30</div>
            <div style={{ fontSize: '7px', color: '#64748b' }}>UNDER 30</div>
          </div>
        </div>

        {/* Summary with Galaxy Effect */}
        {summary && (
          <div style={{
            background: `linear-gradient(135deg, ${tc}05, #ffffff)`,
            padding: '20px 28px',
            borderRadius: '20px',
            marginBottom: '40px',
            border: `1px solid ${tc}20`,
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: auroraGradient,
            }} />
            <Star size={16} color={tc} style={{ position: 'absolute', top: 16, right: 20, opacity: 0.4 }} />
            <p style={{
              fontSize: '10.5px',
              color: '#475569',
              lineHeight: 1.6,
              margin: 0,
              textAlign: 'center',
            }}>✨ {summary} ✨</p>
          </div>
        )}

        {/* Main Layout - 3 Column Cosmic Design */}
        <div style={{
          display: 'flex',
          gap: '24px',
        }}>
          
          {/* LEFT COLUMN - Experience Timeline */}
          <div style={{ flex: '1.3' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px',
            }}>
              <Moon size={18} color={tc} />
              <h2 style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#1e293b',
                margin: 0,
                letterSpacing: '1px',
              }}>SPACE MISSIONS</h2>
              <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${tc}30, transparent)` }} />
            </div>
            
            {/* Galaxy Timeline */}
            <div>
              {exp.map((e, idx) => (
                <div key={e.id} style={{
                  marginBottom: '20px',
                  position: 'relative',
                  padding: '16px',
                  background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
                  borderRadius: '16px',
                  border: `1px solid ${tc}15`,
                  boxShadow: cardGlow,
                }}>
                  {/* Planet Node */}
                  <div style={{
                    position: 'absolute',
                    left: '-8px',
                    top: '20px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: auroraGradient,
                    boxShadow: `0 0 8px ${tc}`,
                  }} />
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '8px',
                    flexWrap: 'wrap',
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
                        fontWeight: 500,
                        margin: '4px 0 0',
                      }}>{e.company}</p>
                    </div>
                    <div style={{
                      fontSize: '8px',
                      padding: '2px 8px',
                      background: `${tc}10`,
                      borderRadius: '20px',
                      color: tc,
                    }}>
                      {e.startDate} → {e.current ? 'Present' : e.endDate}
                    </div>
                  </div>
                  
                  {e.description && e.description.split('\n').map((line, i) => (
                    <p key={i} style={{
                      fontSize: '8.5px',
                      color: '#64748b',
                      margin: '4px 0',
                      lineHeight: 1.5,
                    }}>{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE COLUMN - Skills & Projects */}
          <div style={{ flex: '1' }}>
            
            {/* Skills - Star Rating Style */}
            <div style={{
              background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
              padding: '20px',
              borderRadius: '20px',
              marginBottom: '24px',
              border: `1px solid ${tc}15`,
              boxShadow: cardGlow,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '20px',
              }}>
                <Star size={14} color={tc} />
                <h3 style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#1e293b',
                  margin: 0,
                }}>COSMIC POWERS</h3>
              </div>
              
              {skl.map(s => (
                <div key={s.id} style={{ marginBottom: '14px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '4px',
                  }}>
                    <span style={{ fontSize: '8.5px', color: '#475569' }}>{s.name}</span>
                    <span style={{ fontSize: '8px', color: tc }}>{s.level}%</span>
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
                      background: auroraGradient,
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
                        boxShadow: `0 0 4px ${tc}`,
                      }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Projects - Galaxy Cards */}
            {prj.length > 0 && (
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '16px',
                }}>
                  <Rocket size={14} color={tc} />
                  <h3 style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#1e293b',
                    margin: 0,
                  }}>STELLAR PROJECTS</h3>
                </div>
                
                {prj.map(p => (
                  <div key={p.id} style={{
                    background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
                    padding: '12px',
                    borderRadius: '12px',
                    marginBottom: '12px',
                    border: `1px solid ${tc}15`,
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      fontSize: '24px',
                      opacity: 0.08,
                    }}>🌠</div>
                    <h4 style={{
                      fontSize: '9.5px',
                      fontWeight: 700,
                      color: '#1e293b',
                      margin: '0 0 4px',
                    }}>{p.name}</h4>
                    <p style={{
                      fontSize: '8px',
                      color: '#64748b',
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
                      }}>
                        🏆 {p.impact}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN - Education & More */}
          <div style={{ flex: '0.9' }}>
            
            {/* Education - Nebula Cards */}
            <div style={{
              background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
              padding: '20px',
              borderRadius: '20px',
              marginBottom: '24px',
              border: `1px solid ${tc}15`,
              boxShadow: cardGlow,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '20px',
              }}>
                <GraduationCap size={14} color={tc} />
                <h3 style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#1e293b',
                  margin: 0,
                }}>QUANTUM LEAPS</h3>
              </div>
              
              {edu.map(e => (
                <div key={e.id} style={{
                  marginBottom: '16px',
                  paddingBottom: '12px',
                  borderBottom: `1px solid ${tc}10`,
                }}>
                  <h4 style={{
                    fontSize: '9px',
                    fontWeight: 700,
                    color: '#1e293b',
                    margin: '0 0 4px',
                  }}>{e.degree}</h4>
                  <p style={{
                    fontSize: '8px',
                    color: tc,
                    margin: '0 0 2px',
                  }}>{e.school}</p>
                  <p style={{
                    fontSize: '7px',
                    color: '#94a3b8',
                  }}>{e.startDate} — {e.endDate}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            {cert.length > 0 && (
              <div style={{
                background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
                padding: '16px',
                borderRadius: '16px',
                marginBottom: '24px',
                border: `1px solid ${tc}15`,
                boxShadow: cardGlow,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px',
                }}>
                  <Award size={12} color={tc} />
                  <h3 style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: '#1e293b',
                    margin: 0,
                  }}>CERTIFIED GALACTIC</h3>
                </div>
                
                {cert.map(c => (
                  <div key={c.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '10px',
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      background: `${tc}10`,
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>🌟</div>
                    <div>
                      <p style={{ fontSize: '8.5px', fontWeight: 600, color: '#1e293b', margin: 0 }}>{c.name}</p>
                      <p style={{ fontSize: '7px', color: '#64748b', margin: '2px 0 0' }}>{c.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Languages & Interests */}
            {lang.length > 0 && (
              <div style={{
                background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
                padding: '16px',
                borderRadius: '16px',
                marginBottom: '16px',
                border: `1px solid ${tc}15`,
                boxShadow: cardGlow,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px',
                }}>
                  <Globe size={12} color={tc} />
                  <h3 style={{ fontSize: '10px', fontWeight: 600, color: '#1e293b', margin: 0 }}>INTERSTELLAR</h3>
                </div>
                
                {lang.map(l => (
                  <div key={l.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '6px',
                    fontSize: '8px',
                    color: '#475569',
                  }}>
                    <span>{l.name}</span>
                    <span style={{ color: tc }}>{l.proficiency}</span>
                  </div>
                ))}
              </div>
            )}

            {intr.length > 0 && (
              <div style={{
                background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
                padding: '16px',
                borderRadius: '16px',
                border: `1px solid ${tc}15`,
                boxShadow: cardGlow,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px',
                }}>
                  <Heart size={12} color={tc} />
                  <h3 style={{ fontSize: '10px', fontWeight: 600, color: '#1e293b', margin: 0 }}>COSMIC SOUL</h3>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {intr.map(i => (
                    <span key={i.id} style={{
                      fontSize: '7px',
                      padding: '3px 8px',
                      background: `${tc}08`,
                      borderRadius: '20px',
                      color: '#64748b',
                    }}>
                      ✨ {i.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer - Constellation */}
        <div style={{
          marginTop: '40px',
          paddingTop: '20px',
          textAlign: 'center',
          borderTop: `1px solid ${tc}20`,
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            marginBottom: '16px',
          }}>
            {website && (
              <div style={{ fontSize: '7.5px', color: '#94a3b8' }}>
                🌐 {website}
              </div>
            )}
            {linkedin && (
              <div style={{ fontSize: '7.5px', color: '#94a3b8' }}>
                💫 {linkedin}
              </div>
            )}
            <div style={{ fontSize: '7.5px', color: tc }}>
              🚀 "To infinity and beyond" 🚀
            </div>
          </div>
          
          {/* Constellation pattern */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4px',
            fontSize: '6px',
            color: '#cbd5e1',
          }}>
            {'✦'.repeat(30)}
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