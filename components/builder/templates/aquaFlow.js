// src/components/builder/templates/aquaFlow.js

import { Mail, Phone, MapPin, Globe, Link2, Briefcase, GraduationCap, Award, Heart, Droplet, Waves, Wind, Sun } from 'lucide-react'

const D = {
  name: 'Kai Ocean',
  jobTitle: 'Fluid Experience Designer',
  email: 'kai@aquaflow.design',
  phone: '+1 (808) 555-WAVE',
  location: 'Maui, HI',
  website: 'kai-ocean.studio',
  linkedin: 'linkedin.com/in/kai-ocean',
  summary: 'Designing experiences that flow like water — adaptable, powerful, and serene. 9+ years of creating digital ecosystems that move with user needs. Believer in organic interfaces and liquid layouts that breathe.',
  experience: [
    { id: 'e1', role: 'Director of Fluid Design', company: 'Liquid Labs', location: 'Maui', startDate: 'Mar 2021', endDate: '', current: true, description: '~ Pioneered "Liquid Interface" design system used by 200+ companies\n~ Created adaptive UI that flows across 15+ device types\n~ Led team of 18 designers through tidal wave of innovation\n~ Increased user engagement by 156% through organic interactions' },
    { id: 'e2', role: 'Senior Immersion Designer', company: 'Deep Blue Studio', location: 'Santa Cruz', startDate: 'Jun 2018', endDate: 'Feb 2021', current: false, description: '~ Designed underwater AR experiences for marine conservation\n~ Developed fluid animation principles adopted by industry\n~ Won "Best Digital Ocean" award at SXSW 2020' },
    { id: 'e3', role: 'Interactive Artist', company: 'Tidal Collective', location: 'Portland', startDate: 'Aug 2015', endDate: 'May 2018', current: false, description: '~ Created wave-generating installations for 12 museums\n~ Collaborated with oceanographers on data visualization\n~ Featured in WIRED for "living" digital water sculptures' },
  ],
  education: [
    { id: 'ed1', degree: 'MFA in Digital Fluidity', school: 'California Institute of the Arts', startDate: '2013', endDate: '2015', gpa: '4.0', achievements: 'Thesis: "Liquid Interfaces" · Honorable Mention' },
    { id: 'ed2', degree: 'BS in Interactive Design', school: 'University of Washington', startDate: '2009', endDate: '2013', gpa: '3.9', achievements: 'Summa Cum Laude · Marine Biology Minor' },
  ],
  skills: [
    { id: 's1', name: 'Fluid Interaction', level: 98 },
    { id: 's2', name: 'Generative Design', level: 96 },
    { id: 's3', name: 'WebGL/Three.js', level: 94 },
    { id: 's4', name: 'Organic UI/UX', level: 97 },
    { id: 's5', name: 'Motion Design', level: 95 },
    { id: 's6', name: 'Creative Direction', level: 93 },
  ],
  projects: [
    { id: 'p1', name: 'Oceanic OS', description: 'Concept operating system where windows flow like water, files drift like currents, and notifications ripple outward. Featured in Communication Arts.', tech: 'WebGL, Canvas, Physics', link: 'oceanic.os' },
    { id: 'p2', name: 'The Coral Codex', description: 'Generative art piece that visualizes coral reef health through flowing data streams. Sold as NFT to support reef restoration.', tech: 'p5.js, Machine Learning, Blockchain', link: 'coral.codex' },
  ],
  certifications: [
    { id: 'c1', name: 'Advanced Fluid Simulation', issuer: 'Houdini', date: '2023' },
    { id: 'c2', name: 'Generative Design Master', issuer: 'Processing Foundation', date: '2022' },
  ],
  languages: [
    { id: 'l1', name: 'English', proficiency: 'Native' },
    { id: 'l2', name: 'Japanese', proficiency: 'Fluent' },
    { id: 'l3', name: 'Portuguese', proficiency: 'Intermediate' },
  ],
  interests: [
    { id: 'i1', name: 'Surfing' },
    { id: 'i2', name: 'Marine Biology' },
    { id: 'i3', name: 'Free Diving' },
    { id: 'i4', name: 'Fluid Dynamics' },
    { id: 'i5', name: 'Meditation' },
    { id: 'i6', name: 'Coral Gardening' },
  ],
}

function getValue(val, fallback) {
  return val && String(val).trim() !== '' ? val : fallback
}

export default function AquaFlowTemplate({ resume }) {
  const {
    personalInfo = {}, experience = [], education = [], skills = [],
    projects = [], certifications = [], languages = [], interests = [],
    themeColor = '#00b4d8',
    fontFamily,
  } = resume

  const tc = themeColor
  const ff = fontFamily || "'Quicksand', 'Poppins', sans-serif"
  
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
      background: '#ffffff',
      fontFamily: ff,
      fontSize: '10px',
      lineHeight: 1.5,
      width: 794,
      minHeight: 1123,
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      color: '#1a2a3a',
    }}>
      
      {/* Water Wave Patterns - Light */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `repeating-linear-gradient(90deg, ${tc}04 0px, ${tc}04 2px, transparent 2px, transparent 40px)`,
        pointerEvents: 'none',
      }} />
      
      {/* Flowing Water Layers - Light Version */}
      <svg style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '30%',
        pointerEvents: 'none',
        opacity: 0.15,
      }}>
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={tc} stopOpacity="0.05"/>
            <stop offset="50%" stopColor={tc} stopOpacity="0.2"/>
            <stop offset="100%" stopColor={tc} stopOpacity="0.05"/>
          </linearGradient>
        </defs>
        <path d="M0,100 Q60,80 120,100 T240,100 T360,100 T480,100 T600,100 L600,200 L0,200 Z" fill={tc} opacity="0.1">
          <animateTransform attributeName="transform" type="translate" values="0,0; 30,0; 0,0" dur="8s" repeatCount="indefinite"/>
        </path>
        <path d="M0,120 Q80,90 160,120 T320,120 T480,120 T640,120 L640,200 L0,200 Z" fill={tc} opacity="0.15">
          <animateTransform attributeName="transform" type="translate" values="0,0; -40,0; 0,0" dur="12s" repeatCount="indefinite"/>
        </path>
      </svg>
      
      {/* Floating Bubbles - Light */}
      {[...Array(12)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 20 + 5}px`,
          height: `${Math.random() * 20 + 5}px`,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${tc}30, ${tc}05)`,
          pointerEvents: 'none',
          animation: `float ${Math.random() * 10 + 10}s linear infinite`,
          opacity: 0.4,
        }} />
      ))}

      {/* Main Content Container */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header with Water Effect */}
        <div style={{
          padding: '56px 48px 32px',
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
        }}>
          {/* Water ripple behind header */}
          <div style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${tc}15, transparent)`,
            filter: 'blur(40px)',
            animation: 'ripple 6s ease-in-out infinite',
          }} />
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, position: 'relative' }}>
            {/* Profile Image with Water Ring */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: -8,
                left: -8,
                right: -8,
                bottom: -8,
                borderRadius: '50%',
                border: `2px solid ${tc}`,
                animation: 'pulseRing 2s ease-in-out infinite',
              }} />
              <div style={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                overflow: 'hidden',
                border: `3px solid ${tc}`,
                boxShadow: `0 0 40px ${tc}30`,
                background: photo ? 'transparent' : `linear-gradient(135deg, ${tc}20, ${tc}05)`,
              }}>
                {photo
                  ? <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  : <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 36,
                      fontWeight: 'bold',
                      color: tc,
                    }}>🌊</div>
                }
              </div>
            </div>
            
            <div style={{ flex: 1 }}>
              <h1 style={{
                fontSize: 42,
                fontWeight: 700,
                margin: 0,
                background: `linear-gradient(135deg, #1a2a3a, ${tc})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
              }}>{name}</h1>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginTop: 8,
              }}>
                <Waves size={16} color={tc} />
                <p style={{
                  fontSize: 12,
                  color: tc,
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  margin: 0,
                }}>{jobTitle}</p>
                <Droplet size={12} color={tc} />
              </div>
              
              {/* Contact Info with Wave Borders */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 16,
                marginTop: 20,
                padding: '12px 0',
                borderTop: `1px solid ${tc}20`,
                borderBottom: `1px solid ${tc}20`,
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
                    gap: 6,
                    fontSize: 9,
                  }}>
                    <Icon size={12} color={tc} />
                    <span style={{ color: '#5a6e7c' }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Summary with Wave Shape */}
          {summary && (
            <div style={{
              marginTop: 28,
              padding: '20px 24px',
              background: `linear-gradient(135deg, ${tc}05, ${tc}02)`,
              borderRadius: '20px',
              border: `1px solid ${tc}20`,
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: -10,
                left: 20,
                background: '#ffffff',
                padding: '0 12px',
              }}>
                <Wind size={14} color={tc} />
              </div>
              <p style={{ fontSize: 10, color: '#5a6e7c', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                ~ {summary} ~
              </p>
            </div>
          )}
        </div>

        {/* Main Content - Asymmetrical Flow */}
        <div style={{ padding: '16px 48px 48px', display: 'flex', gap: 40, flexWrap: 'wrap' }}>
          
          {/* Left Column - Flowing Content */}
          <div style={{ flex: 1.4, minWidth: '280px' }}>
            
            {/* Experience - Waterfall Timeline */}
            <div style={{ marginBottom: 48 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 28,
              }}>
                <div style={{
                  width: 40,
                  height: 2,
                  background: `linear-gradient(90deg, ${tc}, transparent)`,
                }} />
                <Briefcase size={18} color={tc} />
                <h2 style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: tc,
                  letterSpacing: '0.1em',
                  margin: 0,
                }}>CURRENT FLOW</h2>
                <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${tc}30, transparent)` }} />
              </div>
              
              {exp.map((e, idx) => (
                <div key={e.id} style={{
                  marginBottom: 28,
                  position: 'relative',
                  paddingLeft: 24,
                  transform: `translateX(${idx % 2 === 0 ? 0 : 20}px)`,
                }}>
                  {/* Water drop timeline marker */}
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 8,
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: tc,
                    boxShadow: `0 0 0 4px ${tc}20, 0 0 0 8px ${tc}08`,
                    animation: 'pulse 2s ease-in-out infinite',
                  }} />
                  
                  <div style={{
                    background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
                    padding: '18px 20px',
                    borderRadius: 16,
                    border: `1px solid ${tc}15`,
                    transition: 'all 0.3s ease',
                    boxShadow: `0 2px 8px ${tc}08`,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 10 }}>
                      <div>
                        <h3 style={{ fontSize: 12, fontWeight: 700, color: '#1a2a3a', margin: 0 }}>{e.role}</h3>
                        <p style={{ fontSize: 10, color: tc, fontWeight: 500, margin: '5px 0 0' }}>
                          {e.company}
                          {e.location && <span style={{ color: '#8a9aa8', fontWeight: 400 }}> · {e.location}</span>}
                        </p>
                      </div>
                      <span style={{
                        fontSize: 8,
                        color: '#8a9aa8',
                        padding: '3px 12px',
                        background: `${tc}08`,
                        borderRadius: 20,
                        border: `1px solid ${tc}20`,
                      }}>
                        {e.startDate} → {e.current ? '∞' : e.endDate}
                      </span>
                    </div>
                    {e.description && e.description.split('\n').map((line, i) => (
                      <p key={i} style={{ fontSize: 9, color: '#6a7a88', margin: '6px 0 0', lineHeight: 1.6 }}>
                        {line.startsWith('~') ? '🌊 ' + line : line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Projects - Floating Cards */}
            {prj.length > 0 && (
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 24,
                }}>
                  <div style={{
                    width: 40,
                    height: 2,
                    background: `linear-gradient(90deg, ${tc}, transparent)`,
                  }} />
                  <Droplet size={18} color={tc} />
                  <h2 style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: tc,
                    letterSpacing: '0.1em',
                    margin: 0,
                  }}>CREATIVE TIDES</h2>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${tc}30, transparent)` }} />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {prj.map(p => (
                    <div key={p.id} style={{
                      background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
                      padding: '16px 20px',
                      borderRadius: 16,
                      border: `1px solid ${tc}15`,
                      transform: 'rotate(0.5deg)',
                      transition: 'transform 0.3s ease',
                      boxShadow: `0 2px 8px ${tc}05`,
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <h3 style={{ fontSize: 11, fontWeight: 700, color: '#1a2a3a', margin: 0 }}>
                          💧 {p.name}
                        </h3>
                        {p.link && <span style={{ fontSize: 8, color: tc }}>↗ {p.link}</span>}
                      </div>
                      {p.tech && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                          {p.tech.split(',').map((t, i) => (
                            <span key={i} style={{
                              fontSize: 7,
                              padding: '3px 10px',
                              background: `${tc}08`,
                              borderRadius: 20,
                              color: tc,
                              border: `1px solid ${tc}20`,
                            }}># {t.trim()}</span>
                          ))}
                        </div>
                      )}
                      <p style={{ fontSize: 9, color: '#6a7a88', margin: 0, lineHeight: 1.6 }}>{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Flowing Sidebar */}
          <div style={{ flex: 0.9, minWidth: '240px' }}>
            
            {/* Skills - Water Bubble Gauges */}
            <div style={{ marginBottom: 48 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 24,
              }}>
                <div style={{
                  width: 30,
                  height: 2,
                  background: `linear-gradient(90deg, ${tc}, transparent)`,
                }} />
                <Waves size={16} color={tc} />
                <h2 style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: tc,
                  letterSpacing: '0.1em',
                  margin: 0,
                }}>FLUID SKILLS</h2>
              </div>
              
              {skl.map(s => (
                <div key={s.id} style={{ marginBottom: 18 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 9, color: '#1a2a3a', fontWeight: 500 }}>{s.name}</span>
                    <span style={{ fontSize: 8, color: tc }}>{s.level}%</span>
                  </div>
                  <div style={{
                    height: 4,
                    background: `${tc}10`,
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                    <div style={{
                      width: `${s.level}%`,
                      height: 4,
                      background: `linear-gradient(90deg, ${tc}, ${tc}cc)`,
                      borderRadius: 4,
                      position: 'relative',
                      animation: 'flowWidth 1s ease-out',
                    }}>
                      <div style={{
                        position: 'absolute',
                        right: 0,
                        top: -2,
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: tc,
                        animation: 'ripple 1s ease-in-out infinite',
                      }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education - Rippling Cards */}
            <div style={{ marginBottom: 48 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 24,
              }}>
                <div style={{
                  width: 30,
                  height: 2,
                  background: `linear-gradient(90deg, ${tc}, transparent)`,
                }} />
                <GraduationCap size={16} color={tc} />
                <h2 style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: tc,
                  letterSpacing: '0.1em',
                  margin: 0,
                }}>DEEP LEARNING</h2>
              </div>
              
              {edu.map(e => (
                <div key={e.id} style={{
                  background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
                  padding: '14px 16px',
                  borderRadius: 16,
                  border: `1px solid ${tc}15`,
                  marginBottom: 14,
                  position: 'relative',
                  boxShadow: `0 2px 8px ${tc}05`,
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    fontSize: 20,
                    opacity: 0.15,
                  }}>🌊</div>
                  <h3 style={{ fontSize: 10.5, fontWeight: 700, color: '#1a2a3a', margin: 0 }}>{e.degree}</h3>
                  <p style={{ fontSize: 9, color: tc, margin: '5px 0 3px' }}>{e.school}</p>
                  <p style={{ fontSize: 8, color: '#8a9aa8' }}>{e.startDate} — {e.endDate}</p>
                  {e.achievements && <p style={{ fontSize: 8, color: '#6a8a9a', marginTop: 6 }}>🏆 {e.achievements}</p>}
                </div>
              ))}
            </div>

            {/* Certifications - Floating */}
            {cert.length > 0 && (
              <div style={{ marginBottom: 48 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 20,
                }}>
                  <div style={{
                    width: 30,
                    height: 2,
                    background: `linear-gradient(90deg, ${tc}, transparent)`,
                  }} />
                  <Award size={14} color={tc} />
                  <h2 style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: tc,
                    letterSpacing: '0.1em',
                    margin: 0,
                  }}>CERTIFICATIONS</h2>
                </div>
                
                {cert.map(c => (
                  <div key={c.id} style={{
                    background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
                    padding: '10px 14px',
                    borderRadius: 12,
                    border: `1px solid ${tc}15`,
                    marginBottom: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    boxShadow: `0 2px 8px ${tc}05`,
                  }}>
                    <div style={{ fontSize: 16 }}>📜</div>
                    <div>
                      <p style={{ fontSize: 9, fontWeight: 600, color: '#1a2a3a', margin: 0 }}>{c.name}</p>
                      <p style={{ fontSize: 8, color: '#8a9aa8', margin: '2px 0 0' }}>{c.issuer} · {c.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Languages & Interests */}
            {lang.length > 0 && (
              <div style={{ marginBottom: 40 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 20,
                }}>
                  <div style={{
                    width: 30,
                    height: 2,
                    background: `linear-gradient(90deg, ${tc}, transparent)`,
                  }} />
                  <Globe size={14} color={tc} />
                  <h2 style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: tc,
                    letterSpacing: '0.1em',
                    margin: 0,
                  }}>LANGUAGES</h2>
                </div>
                
                {lang.map(l => (
                  <div key={l.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 10,
                    padding: '6px 0',
                    borderBottom: `1px solid ${tc}10`,
                  }}>
                    <span style={{ fontSize: 9, color: '#1a2a3a' }}>{l.name}</span>
                    <span style={{
                      fontSize: 8,
                      padding: '2px 8px',
                      background: `${tc}08`,
                      borderRadius: 12,
                      color: tc,
                    }}>{l.proficiency}</span>
                  </div>
                ))}
              </div>
            )}

            {intr.length > 0 && (
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 20,
                }}>
                  <div style={{
                    width: 30,
                    height: 2,
                    background: `linear-gradient(90deg, ${tc}, transparent)`,
                  }} />
                  <Heart size={14} color={tc} />
                  <h2 style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: tc,
                    letterSpacing: '0.1em',
                    margin: 0,
                  }}>OCEAN SOUL</h2>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {intr.map(i => (
                    <span key={i.id} style={{
                      fontSize: 8,
                      padding: '5px 12px',
                      background: `linear-gradient(135deg, ${tc}08, ${tc}03)`,
                      borderRadius: 30,
                      border: `1px solid ${tc}20`,
                      color: '#4a6a7a',
                    }}>
                      🌊 {i.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer - Wave */}
        <div style={{
          textAlign: 'center',
          padding: '20px 48px 32px',
          position: 'relative',
        }}>
          <div style={{
            height: 1,
            background: `linear-gradient(90deg, transparent, ${tc}30, transparent)`,
            marginBottom: 16,
          }} />
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 8,
            color: '#8a9aa8',
          }}>
            <span>💧</span>
            <span>go with the flow</span>
            <span>🌊</span>
            <span>ride the waves</span>
            <span>💧</span>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          25% { transform: translateY(-30px) translateX(10px); opacity: 0.6; }
          50% { transform: translateY(-50px) translateX(-10px); opacity: 0.5; }
          75% { transform: translateY(-20px) translateX(20px); opacity: 0.7; }
        }
        
        @keyframes ripple {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.5); opacity: 0.1; }
        }
        
        @keyframes pulseRing {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.1; }
        }
        
        @keyframes flowWidth {
          0% { width: 0%; }
          100% { width: var(--final-width); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }
      `}</style>
    </div>
  )
}