// src/components/builder/templates/pearlElegance.js

import { Mail, Phone, MapPin, Globe, Link2, Briefcase, GraduationCap, Award, Heart, Sparkles, Feather, Compass, Crown } from 'lucide-react'

const defaultData = {
  name: 'Victoria Chen',
  jobTitle: 'Luxury Brand Director & Creative Strategist',
  email: 'victoria@chencreative.com',
  phone: '+44 20 7946 0138',
  location: 'London, UK',
  website: 'victoriachen.co',
  linkedin: 'linkedin.com/in/victoriachen',
  summary: 'Award-winning Creative Director with 12+ years of experience shaping iconic brand identities for luxury fashion, hospitality, and lifestyle sectors. Known for blending timeless elegance with contemporary vision to create unforgettable brand experiences.',
  experience: [
    { id: 'e1', role: 'Creative Director', company: 'Maison de Luxe', location: 'London', startDate: '2022', endDate: 'Present', current: true, description: '• Spearheaded global rebrand for 150-year-old heritage house, increasing brand value by 67%\n• Curated 12 award-winning campaigns featured in Vogue, Harper\'s Bazaar, and Wallpaper*\n• Built and mentored team of 25 creatives across London, Paris, and Milan\n• Launched successful NFT collection generating £8M in first week' },
    { id: 'e2', role: 'Senior Brand Strategist', company: 'Heritage Collective', location: 'Paris', startDate: '2019', endDate: '2022', current: false, description: '• Developed brand strategy for 5 luxury properties, increasing occupancy by 45%\n• Orchestrated exclusive partnerships with Rolls-Royce and Dom Pérignon\n• Won "Best Luxury Campaign" at European Brand Awards 2021' },
    { id: 'e3', role: 'Brand Manager', company: 'Étoile Group', location: 'Geneva', startDate: '2016', endDate: '2019', current: false, description: '• Managed portfolio of 8 luxury brands across Switzerland\n• Launched membership program with 92% retention rate\n• Increased social media engagement by 234% through curated content' },
  ],
  education: [
    { id: 'ed1', degree: 'MBA in Luxury Brand Management', school: 'HEC Paris', startDate: '2014', endDate: '2016', achievements: 'Dean\'s List · Luxury Summit Winner' },
    { id: 'ed2', degree: 'BA in Art History & Visual Culture', school: 'Courtauld Institute of Art', startDate: '2010', endDate: '2014', achievements: 'First Class Honours · Sir Denis Mahon Scholar' },
  ],
  skills: [
    { id: 's1', name: 'Creative Direction', level: 98 },
    { id: 's2', name: 'Brand Strategy', level: 96 },
    { id: 's3', name: 'Luxury Marketing', level: 95 },
    { id: 's4', name: 'Team Leadership', level: 94 },
    { id: 's5', name: 'Client Relations', level: 97 },
    { id: 's6', name: 'Strategic Planning', level: 93 },
  ],
  projects: [
    { id: 'p1', name: 'Eternal Collection', description: '360° luxury campaign featuring film, print, and immersive experiences. Generated £25M in revenue.', impact: 'Luxury Briefing Award 2023' },
    { id: 'p2', name: 'Château Élysée', description: 'Complete brand identity overhaul for historic Parisian hotel, including visual identity and collateral.', impact: 'Design Week Award' },
  ],
  certifications: [
    { id: 'c1', name: 'Luxury Certified Professional', issuer: 'Luxury Institute', date: '2023' },
    { id: 'c2', name: 'Certified Brand Strategist', issuer: 'ABM', date: '2022' },
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
    { id: 'i5', name: 'Travel' },
  ],
}

function getValue(value, fallback) {
  if (value && typeof value === 'string' && value.trim() !== '') return value
  if (value && typeof value === 'object' && Object.keys(value).length > 0) return value
  return fallback
}

export default function PearlEleganceTemplate({ resume = {} }) {
  const {
    personalInfo = {},
    experience = [],
    education = [],
    skills = [],
    projects = [],
    certifications = [],
    languages = [],
    interests = [],
    themeColor = '#e8d5b7',
    fontFamily = "'Cormorant Garamond', 'Playfair Display', Georgia, serif"
  } = resume

  const tc = themeColor
  const darkTc = '#c4a47c'
  
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

  return (
    <div style={{
      background: '#fdfaf5',
      fontFamily: fontFamily,
      fontSize: '10px',
      lineHeight: 1.5,
      width: '794px',
      minHeight: '1123px',
      height: 'auto',
      boxSizing: 'border-box',
      color: '#2c2c2c',
      position: 'relative',
    }}>
      
      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0.5cm;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .keep-together {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          .page-break {
            page-break-before: always;
            break-before: page;
          }
        }
      `}</style>

      {/* Decorative Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(${tc}15 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
        pointerEvents: 'none',
        opacity: 0.5,
      }} />

      {/* PAGE 1 */}
      <div className="keep-together" style={{
        maxWidth: '700px',
        margin: '35px auto',
        background: '#ffffff',
        borderRadius: '32px',
        boxShadow: '0 20px 50px -20px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.02)',
        overflow: 'hidden',
        position: 'relative',
      }}>
        
        {/* Decorative Top Bar */}
        <div style={{
          height: '4px',
          background: `linear-gradient(90deg, ${tc}, ${darkTc}, ${tc})`,
        }} />

        {/* Header Section - Curved Design */}
        <div className="keep-together" style={{
          padding: '40px 40px 30px',
          background: `linear-gradient(135deg, ${tc}08, #ffffff)`,
          position: 'relative',
        }}>
          
          {/* Decorative Circle */}
          <div style={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: `${tc}15`,
            pointerEvents: 'none',
          }} />
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', position: 'relative', zIndex: 2 }}>
            {/* Profile with Pearl Ring */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: -6,
                left: -6,
                right: -6,
                bottom: -6,
                borderRadius: '50%',
                border: `1px solid ${tc}`,
                opacity: 0.6,
              }} />
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
                background: photo ? 'transparent' : `linear-gradient(135deg, ${tc}, ${darkTc})`,
                border: `4px solid white`,
                boxShadow: `0 8px 25px ${tc}30`,
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
                    fontSize: '42px',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>V</div>
                )}
              </div>
              {/* Pearl Badge */}
              <div style={{
                position: 'absolute',
                bottom: 4,
                right: 4,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: `radial-gradient(circle at 30% 30%, #fff, ${tc})`,
                border: '2px solid white',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              }} />
            </div>
            
            <div style={{ flex: 1 }}>
              <h1 style={{
                fontSize: '38px',
                fontWeight: 500,
                margin: 0,
                color: '#1a1a1a',
                letterSpacing: '-0.5px',
                fontFamily: "'Playfair Display', serif",
              }}>{name}</h1>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: '8px',
                marginBottom: '16px',
              }}>
                <Crown size={16} color={darkTc} />
                <p style={{
                  fontSize: '12px',
                  color: darkTc,
                  fontWeight: 500,
                  margin: 0,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}>{jobTitle}</p>
                <Sparkles size={12} color={darkTc} />
              </div>
              
              {/* Contact with Pearl Style */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
              }}>
                {[
                  { icon: Mail, val: email },
                  { icon: Phone, val: phone },
                  { icon: MapPin, val: location },
                ].filter(c => c.val).map(({ icon: Icon, val }, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '8.5px',
                    color: '#6b6b6b',
                  }}>
                    <Icon size={12} color={darkTc} />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
              
              {/* Social Links */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginTop: '12px',
              }}>
                {website && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '8px',
                    color: '#8a8a8a',
                  }}>
                    <Globe size={10} color={darkTc} />
                    <span>{website}</span>
                  </div>
                )}
                {linkedin && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '8px',
                    color: '#8a8a8a',
                  }}>
                    <Link2 size={10} color={darkTc} />
                    <span>{linkedin}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Elegant Quote Badge */}
            <div style={{
              background: `linear-gradient(135deg, ${tc}15, #ffffff)`,
              padding: '14px 18px',
              borderRadius: '40px',
              textAlign: 'center',
              border: `1px solid ${tc}30`,
            }}>
              <Feather size={22} color={darkTc} />
              <div style={{ fontSize: '22px', fontWeight: 500, color: darkTc, marginTop: '5px', fontFamily: "'Playfair Display', serif" }}>12+</div>
              <div style={{ fontSize: '6.5px', color: '#8a8a8a', letterSpacing: '0.5px' }}>YEARS EXCELLENCE</div>
            </div>
          </div>
        </div>

        {/* Summary with Curved Border */}
        {summary && (
          <div className="keep-together" style={{
            margin: '0 40px 30px',
            padding: '22px 28px',
            background: `linear-gradient(135deg, ${tc}05, #ffffff)`,
            borderRadius: '24px',
            border: `1px solid ${tc}20`,
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              top: -10,
              left: 30,
              background: '#ffffff',
              padding: '0 12px',
            }}>
              <Compass size={14} color={darkTc} />
            </div>
            <p style={{
              fontSize: '10px',
              color: '#5a5a5a',
              lineHeight: 1.6,
              margin: 0,
              textAlign: 'center',
              fontStyle: 'italic',
            }}>"{summary}"</p>
          </div>
        )}

        {/* Main Content Page 1 */}
        <div style={{
          display: 'flex',
          padding: '0 40px 40px',
          gap: '35px',
        }}>
          
          {/* LEFT COLUMN */}
          <div style={{ flex: '1.4' }}>
            
            {/* Experience - Elegant Timeline */}
            <div style={{ marginBottom: '32px' }}>
              <div className="keep-together" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '22px',
              }}>
                <Briefcase size={16} color={darkTc} />
                <h2 style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#1a1a1a',
                  margin: 0,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}>Professional Journey</h2>
                <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${tc}50, transparent)` }} />
              </div>
              
              {exp.map((e, idx) => (
                <div key={e.id} className="keep-together" style={{
                  marginBottom: idx === exp.length - 1 ? 0 : '24px',
                  paddingLeft: '20px',
                  borderLeft: `1px solid ${tc}40`,
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-5px',
                    top: '5px',
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${darkTc}, ${tc})`,
                  }} />
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    flexWrap: 'wrap',
                    marginBottom: '5px',
                  }}>
                    <h3 style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#1a1a1a',
                      margin: 0,
                    }}>{e.role}</h3>
                    <span style={{
                      fontSize: '8px',
                      color: '#9a9a9a',
                      fontStyle: 'italic',
                    }}>
                      {e.startDate} — {e.current ? 'Present' : e.endDate}
                    </span>
                  </div>
                  
                  <p style={{
                    fontSize: '9.5px',
                    color: darkTc,
                    fontWeight: 500,
                    margin: '0 0 8px',
                  }}>{e.company} • {e.location}</p>
                  
                  {e.description && e.description.split('\n').map((line, i) => (
                    <p key={i} style={{
                      fontSize: '8.5px',
                      color: '#6b6b6b',
                      margin: '4px 0',
                      lineHeight: 1.5,
                    }}>{line}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Projects - Elegant Cards */}
            {prj.length > 0 && (
              <div>
                <div className="keep-together" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '18px',
                }}>
                  <Sparkles size={14} color={darkTc} />
                  <h2 style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#1a1a1a',
                    margin: 0,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}>Signature Projects</h2>
                  <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${tc}50, transparent)` }} />
                </div>
                
                {prj.map(p => (
                  <div key={p.id} className="keep-together" style={{
                    marginBottom: '14px',
                    padding: '14px 18px',
                    background: `linear-gradient(135deg, ${tc}04, #ffffff)`,
                    borderRadius: '16px',
                    border: `1px solid ${tc}20`,
                  }}>
                    <h3 style={{
                      fontSize: '9.5px',
                      fontWeight: 600,
                      color: '#1a1a1a',
                      margin: '0 0 6px',
                    }}>{p.name}</h3>
                    <p style={{
                      fontSize: '8px',
                      color: '#6b6b6b',
                      margin: '0 0 5px',
                      lineHeight: 1.45,
                    }}>{p.description}</p>
                    {p.impact && (
                      <span style={{
                        fontSize: '7px',
                        display: 'inline-block',
                        padding: '2px 10px',
                        background: `${tc}15`,
                        borderRadius: '20px',
                        color: darkTc,
                      }}>
                        🏆 {p.impact}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN - Page 1 */}
          <div style={{ flex: '1' }}>
            
            {/* Skills - Elegant Progress */}
            <div className="keep-together" style={{
              background: `linear-gradient(135deg, ${tc}05, #ffffff)`,
              padding: '20px',
              borderRadius: '20px',
              marginBottom: '24px',
              border: `1px solid ${tc}20`,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '18px',
              }}>
                <Compass size={13} color={darkTc} />
                <h3 style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  color: '#1a1a1a',
                  margin: 0,
                  letterSpacing: '1px',
                }}>Core Expertise</h3>
              </div>
              
              {skl.map(s => (
                <div key={s.id} style={{ marginBottom: '14px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '5px',
                  }}>
                    <span style={{ fontSize: '8.5px', color: '#4a4a4a' }}>{s.name}</span>
                    <span style={{ fontSize: '8px', color: darkTc }}>{s.level}%</span>
                  </div>
                  <div style={{
                    height: '3px',
                    background: `${tc}25`,
                    borderRadius: '3px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      width: `${s.level}%`,
                      height: '3px',
                      background: `linear-gradient(90deg, ${darkTc}, ${tc})`,
                      borderRadius: '3px',
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Education - Elegant Cards */}
            <div className="keep-together" style={{
              background: `linear-gradient(135deg, ${tc}05, #ffffff)`,
              padding: '20px',
              borderRadius: '20px',
              marginBottom: '24px',
              border: `1px solid ${tc}20`,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
              }}>
                <GraduationCap size={13} color={darkTc} />
                <h3 style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  color: '#1a1a1a',
                  margin: 0,
                  letterSpacing: '1px',
                }}>Education</h3>
              </div>
              
              {edu.map(e => (
                <div key={e.id} style={{ marginBottom: '14px' }}>
                  <h4 style={{
                    fontSize: '9.5px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    margin: '0 0 3px',
                  }}>{e.degree}</h4>
                  <p style={{
                    fontSize: '8px',
                    color: darkTc,
                    margin: '0 0 2px',
                  }}>{e.school}</p>
                  <p style={{
                    fontSize: '7px',
                    color: '#9a9a9a',
                  }}>{e.startDate} — {e.endDate}</p>
                  {e.achievements && (
                    <p style={{
                      fontSize: '7px',
                      color: '#8a8a8a',
                      marginTop: '4px',
                    }}>✨ {e.achievements}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications */}
            {cert.length > 0 && (
              <div className="keep-together" style={{
                background: `linear-gradient(135deg, ${tc}05, #ffffff)`,
                padding: '20px',
                borderRadius: '20px',
                border: `1px solid ${tc}20`,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '14px',
                }}>
                  <Award size={13} color={darkTc} />
                  <h3 style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    color: '#1a1a1a',
                    margin: 0,
                    letterSpacing: '1px',
                  }}>Certifications</h3>
                </div>
                
                {cert.map(c => (
                  <div key={c.id} style={{ marginBottom: '10px' }}>
                    <p style={{
                      fontSize: '8.5px',
                      fontWeight: 500,
                      color: '#1a1a1a',
                      margin: 0,
                    }}>{c.name}</p>
                    <p style={{
                      fontSize: '7px',
                      color: '#9a9a9a',
                      margin: '2px 0 0',
                    }}>{c.issuer} • {c.date}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Decorative Bottom Bar */}
        <div style={{
          height: '2px',
          background: `linear-gradient(90deg, ${tc}, ${darkTc}, ${tc})`,
        }} />
      </div>

      {/* PAGE 2 - Languages & Interests */}
      {(lang.length > 0 || intr.length > 0) && (
        <div className="page-break" style={{
          maxWidth: '700px',
          margin: '35px auto',
          background: '#ffffff',
          borderRadius: '32px',
          boxShadow: '0 20px 50px -20px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.02)',
          overflow: 'hidden',
        }}>
          
          <div style={{
            height: '4px',
            background: `linear-gradient(90deg, ${tc}, ${darkTc}, ${tc})`,
          }} />

          <div style={{
            display: 'flex',
            padding: '40px',
            gap: '35px',
            minHeight: '350px',
          }}>
            
            {/* LEFT COLUMN - Page 2 */}
            <div style={{ flex: '1' }}>
              {lang.length > 0 && (
                <div className="keep-together" style={{
                  background: `linear-gradient(135deg, ${tc}05, #ffffff)`,
                  padding: '24px',
                  borderRadius: '20px',
                  border: `1px solid ${tc}20`,
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '20px',
                  }}>
                    <Globe size={15} color={darkTc} />
                    <h3 style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#1a1a1a',
                      margin: 0,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                    }}>Languages</h3>
                  </div>
                  
                  {lang.map(l => (
                    <div key={l.id} className="keep-together" style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '14px',
                      paddingBottom: '10px',
                      borderBottom: `1px solid ${tc}20`,
                    }}>
                      <span style={{ fontSize: '9px', color: '#4a4a4a', fontWeight: 500 }}>{l.name}</span>
                      <span style={{
                        fontSize: '8px',
                        padding: '2px 12px',
                        background: `${tc}15`,
                        borderRadius: '20px',
                        color: darkTc,
                      }}>{l.proficiency}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN - Page 2 */}
            <div style={{ flex: '1' }}>
              {intr.length > 0 && (
                <div className="keep-together" style={{
                  background: `linear-gradient(135deg, ${tc}05, #ffffff)`,
                  padding: '24px',
                  borderRadius: '20px',
                  border: `1px solid ${tc}20`,
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '20px',
                  }}>
                    <Heart size={15} color={darkTc} />
                    <h3 style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#1a1a1a',
                      margin: 0,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                    }}>Personal Interests</h3>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                  }}>
                    {intr.map(i => (
                      <span key={i.id} className="keep-together" style={{
                        fontSize: '8px',
                        padding: '5px 14px',
                        background: '#ffffff',
                        borderRadius: '25px',
                        color: '#6b6b6b',
                        border: `1px solid ${tc}30`,
                      }}>
                        {i.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="keep-together" style={{
            padding: '18px 40px',
            background: `linear-gradient(135deg, ${tc}05, #ffffff)`,
            borderTop: `1px solid ${tc}20`,
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: '7px',
              color: '#9a9a9a',
              margin: 0,
              letterSpacing: '0.5px',
            }}>
              ✨ Available for speaking engagements & creative consulting ✨
            </p>
          </div>

          <div style={{
            height: '2px',
            background: `linear-gradient(90deg, ${tc}, ${darkTc}, ${tc})`,
          }} />
        </div>
      )}
    </div>
  )
}