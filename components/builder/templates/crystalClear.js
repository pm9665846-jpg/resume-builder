// src/components/builder/templates/crystalClear.js

import { Mail, Phone, MapPin, Globe, Link2, Briefcase, GraduationCap, Award, Heart, Star, TrendingUp, Users, Zap } from 'lucide-react'

const defaultData = {
  name: 'Isabella Martinez',
  jobTitle: 'Strategic Product Leader',
  email: 'isabella.martinez@creativemind.com',
  phone: '+1 (415) 555-7890',
  location: 'San Francisco, CA',
  website: 'isabellamartinez.com',
  linkedin: 'linkedin.com/in/isabellam',
  summary: 'Visionary Product Leader with 10+ years of experience driving product strategy and innovation at high-growth tech companies. Expert in translating complex user needs into elegant solutions that drive business growth. Known for building high-performing teams and launching products used by millions.',
  experience: [
    { id: 'e1', role: 'Senior Product Director', company: 'Stripe', location: 'San Francisco', startDate: '2022', endDate: 'Present', current: true, description: '• Led product strategy for payments platform serving 2M+ businesses\n• Launched 3 flagship products generating $45M in annual revenue\n• Built and mentored team of 12 product managers\n• Increased user satisfaction by 42% through UX improvements' },
    { id: 'e2', role: 'Product Lead', company: 'Shopify', location: 'Toronto', startDate: '2019', endDate: '2022', current: false, description: '• Directed development of merchant analytics dashboard\n• Grew merchant retention by 28% through data-driven features\n• Collaborated with 15 cross-functional teams globally\n• Recognized with "Product Excellence Award"' },
    { id: 'e3', role: 'Senior Product Manager', company: 'Google', location: 'Mountain View', startDate: '2016', endDate: '2019', current: false, description: '• Managed Google Workspace features adopted by 500K+ businesses\n• Reduced feature adoption time by 65% through user education\n• Led A/B testing for 20+ major feature launches' },
  ],
  education: [
    { id: 'ed1', degree: 'MBA in Technology Management', school: 'Stanford Graduate School of Business', startDate: '2014', endDate: '2016', achievements: 'Arjay Miller Scholar · Dean\'s List' },
    { id: 'ed2', degree: 'BS in Computer Science', school: 'University of California, Berkeley', startDate: '2010', endDate: '2014', achievements: 'Summa Cum Laude · Phi Beta Kappa' },
  ],
  skills: [
    { id: 's1', name: 'Product Strategy', level: 98 },
    { id: 's2', name: 'Data Analytics', level: 95 },
    { id: 's3', name: 'User Research', level: 94 },
    { id: 's4', name: 'Agile Leadership', level: 97 },
    { id: 's5', name: 'Go-to-Market', level: 93 },
    { id: 's6', name: 'Stakeholder Management', level: 96 },
  ],
  projects: [
    { id: 'p1', name: 'AI-Driven Analytics Platform', description: 'Revolutionary analytics tool that increased user engagement by 156% within 3 months of launch.', impact: 'Product of the Year 2023' },
    { id: 'p2', name: 'Mobile-First Strategy', description: 'Led mobile transformation resulting in 2.5x increase in mobile revenue.', impact: 'Innovation Award Winner' },
  ],
  certifications: [
    { id: 'c1', name: 'Certified Product Manager', issuer: 'Product School', date: '2023' },
    { id: 'c2', name: 'Advanced Data Analytics', issuer: 'Google', date: '2022' },
  ],
  languages: [
    { id: 'l1', name: 'English', proficiency: 'Native' },
    { id: 'l2', name: 'Spanish', proficiency: 'Fluent' },
    { id: 'l3', name: 'French', proficiency: 'Professional' },
  ],
  interests: [
    { id: 'i1', name: 'Mentoring' },
    { id: 'i2', name: 'Public Speaking' },
    { id: 'i3', name: 'Yoga' },
    { id: 'i4', name: 'Photography' },
    { id: 'i5', name: 'Travel' },
  ],
}

function getValue(value, fallback) {
  if (value && typeof value === 'string' && value.trim() !== '') return value
  if (value && typeof value === 'object' && Object.keys(value).length > 0) return value
  return fallback
}

export default function CrystalClearTemplate({ resume = {} }) {
  const {
    personalInfo = {},
    experience = [],
    education = [],
    skills = [],
    projects = [],
    certifications = [],
    languages = [],
    interests = [],
    themeColor = '#0ea5e9',
    fontFamily = "'Inter', 'Segoe UI', system-ui, sans-serif"
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

  return (
    <div style={{
      background: '#f5f7fa',
      fontFamily: fontFamily,
      fontSize: '10px',
      lineHeight: 1.5,
      width: '794px',
      minHeight: '1123px',
      height: 'auto',
      boxSizing: 'border-box',
      color: '#1e293b',
      position: 'relative',
    }}>
      
      {/* Print-specific styles - Critical for PDF */}
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
          .resume-page {
            page-break-after: avoid;
            page-break-inside: avoid;
            break-inside: avoid;
          }
          .page-break {
            page-break-before: always;
            break-before: page;
          }
          .no-break {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          .keep-together {
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      `}</style>

      {/* PAGE 1 */}
      <div className="resume-page" style={{
        maxWidth: '720px',
        margin: '30px auto',
        background: '#ffffff',
        borderRadius: '24px',
        boxShadow: '0 20px 40px -12px rgba(0,0,0,0.08)',
        overflow: 'hidden',
      }}>
        
        {/* Header Section - Keep Together */}
        <div className="keep-together" style={{
          padding: '35px 35px 28px',
          background: '#ffffff',
          borderBottom: `1px solid #e2e8f0`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
            {photo && (
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                overflow: 'hidden',
                background: `linear-gradient(135deg, ${tc}20, #ffffff)`,
                border: `3px solid ${tc}`,
                boxShadow: `0 8px 20px ${tc}20`,
              }}>
                <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
            
            <div style={{ flex: 1 }}>
              <h1 style={{
                fontSize: '34px',
                fontWeight: 700,
                margin: 0,
                color: '#0f172a',
                letterSpacing: '-0.02em',
              }}>{name}</h1>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '8px',
                marginBottom: '14px',
              }}>
                <div style={{
                  width: '30px',
                  height: '2px',
                  background: `linear-gradient(90deg, ${tc}, ${tc}40)`,
                }} />
                <p style={{
                  fontSize: '13px',
                  color: tc,
                  fontWeight: 500,
                  margin: 0,
                }}>{jobTitle}</p>
              </div>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '18px',
              }}>
                {[
                  { icon: Mail, val: email },
                  { icon: Phone, val: phone },
                  { icon: MapPin, val: location },
                ].filter(c => c.val).map(({ icon: Icon, val }, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    fontSize: '8.5px',
                    color: '#64748b',
                  }}>
                    <Icon size={13} color={tc} />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                marginTop: '10px',
              }}>
                {website && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '8px',
                    color: '#94a3b8',
                  }}>
                    <Globe size={11} color={tc} />
                    <span>{website}</span>
                  </div>
                )}
                {linkedin && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '8px',
                    color: '#94a3b8',
                  }}>
                    <Link2 size={11} color={tc} />
                    <span>{linkedin}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div style={{
              background: `linear-gradient(135deg, ${tc}05, #ffffff)`,
              padding: '14px 18px',
              borderRadius: '18px',
              textAlign: 'center',
              border: `1px solid ${tc}15`,
            }}>
              <TrendingUp size={22} color={tc} />
              <div style={{ fontSize: '26px', fontWeight: 700, color: tc, marginTop: '3px' }}>10+</div>
              <div style={{ fontSize: '6.5px', color: '#64748b', textTransform: 'uppercase' }}>Years Experience</div>
            </div>
          </div>
        </div>

        {/* Summary - Keep Together */}
        {summary && (
          <div className="keep-together" style={{
            padding: '24px 35px',
            background: `linear-gradient(135deg, ${tc}02, #ffffff)`,
            borderBottom: `1px solid #e2e8f0`,
          }}>
            <div style={{
              display: 'flex',
              gap: '14px',
              alignItems: 'flex-start',
            }}>
              <Star size={18} color={tc} style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{
                fontSize: '10px',
                color: '#475569',
                lineHeight: 1.5,
                margin: 0,
              }}>{summary}</p>
            </div>
          </div>
        )}

        {/* Main Content Page 1 */}
        <div style={{
          display: 'flex',
          padding: '35px',
          gap: '35px',
        }}>
          
          {/* LEFT COLUMN */}
          <div style={{ flex: '1.4' }}>
            
            {/* Experience Section - Each item kept together */}
            <div style={{ marginBottom: '32px' }}>
              <div className="keep-together" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '22px',
              }}>
                <Briefcase size={17} color={tc} />
                <h2 style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#0f172a',
                  margin: 0,
                }}>Professional Experience</h2>
                <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
              </div>
              
              {exp.map((e, idx) => (
                <div key={e.id} className="keep-together" style={{
                  marginBottom: idx === exp.length - 1 ? 0 : '24px',
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    flexWrap: 'wrap',
                    marginBottom: '5px',
                  }}>
                    <h3 style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#0f172a',
                      margin: 0,
                    }}>{e.role}</h3>
                    <span style={{
                      fontSize: '8px',
                      color: '#94a3b8',
                      background: '#f8fafc',
                      padding: '2px 10px',
                      borderRadius: '20px',
                    }}>
                      {e.startDate} — {e.current ? 'Present' : e.endDate}
                    </span>
                  </div>
                  
                  <p style={{
                    fontSize: '9.5px',
                    color: tc,
                    fontWeight: 500,
                    margin: '0 0 8px',
                  }}>{e.company} • {e.location}</p>
                  
                  {e.description && e.description.split('\n').map((line, i) => (
                    <p key={i} style={{
                      fontSize: '8.5px',
                      color: '#475569',
                      margin: '4px 0',
                      lineHeight: 1.45,
                    }}>{line}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Projects - Keep Together */}
            {prj.length > 0 && (
              <div>
                <div className="keep-together" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '18px',
                }}>
                  <Zap size={15} color={tc} />
                  <h2 style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#0f172a',
                    margin: 0,
                  }}>Key Achievements</h2>
                  <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
                </div>
                
                {prj.map(p => (
                  <div key={p.id} className="keep-together" style={{
                    marginBottom: '14px',
                    padding: '14px',
                    background: '#f8fafc',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      marginBottom: '7px',
                    }}>
                      <Award size={13} color={tc} />
                      <h3 style={{
                        fontSize: '9.5px',
                        fontWeight: 700,
                        color: '#0f172a',
                        margin: 0,
                      }}>{p.name}</h3>
                    </div>
                    <p style={{
                      fontSize: '8px',
                      color: '#475569',
                      margin: '0 0 5px',
                      lineHeight: 1.45,
                    }}>{p.description}</p>
                    {p.impact && (
                      <span style={{
                        fontSize: '7px',
                        display: 'inline-block',
                        padding: '2px 8px',
                        background: `${tc}10`,
                        borderRadius: '12px',
                        color: tc,
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
            
            {/* Skills - All on page 1 */}
            <div className="keep-together" style={{
              background: '#f8fafc',
              padding: '18px',
              borderRadius: '16px',
              marginBottom: '24px',
              border: '1px solid #e2e8f0',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
              }}>
                <Users size={13} color={tc} />
                <h3 style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#0f172a',
                  margin: 0,
                }}>Core Competencies</h3>
              </div>
              
              {skl.map(s => (
                <div key={s.id} style={{ marginBottom: '12px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '4px',
                  }}>
                    <span style={{ fontSize: '8px', color: '#334155', fontWeight: 500 }}>{s.name}</span>
                    <span style={{ fontSize: '7.5px', color: tc }}>{s.level}%</span>
                  </div>
                  <div style={{
                    height: '3px',
                    background: '#e2e8f0',
                    borderRadius: '3px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      width: `${s.level}%`,
                      height: '3px',
                      background: `linear-gradient(90deg, ${tc}, ${tc}70)`,
                      borderRadius: '3px',
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Education - Keep Together */}
            <div className="keep-together" style={{
              background: '#f8fafc',
              padding: '18px',
              borderRadius: '16px',
              marginBottom: '24px',
              border: '1px solid #e2e8f0',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
              }}>
                <GraduationCap size={13} color={tc} />
                <h3 style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#0f172a',
                  margin: 0,
                }}>Education</h3>
              </div>
              
              {edu.map(e => (
                <div key={e.id} style={{ marginBottom: '14px' }}>
                  <h4 style={{
                    fontSize: '9.5px',
                    fontWeight: 700,
                    color: '#0f172a',
                    margin: '0 0 3px',
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
                  {e.achievements && (
                    <p style={{
                      fontSize: '7px',
                      color: '#64748b',
                      marginTop: '3px',
                    }}>✨ {e.achievements}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications - Keep Together */}
            {cert.length > 0 && (
              <div className="keep-together" style={{
                background: '#f8fafc',
                padding: '18px',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '14px',
                }}>
                  <Award size={13} color={tc} />
                  <h3 style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#0f172a',
                    margin: 0,
                  }}>Certifications</h3>
                </div>
                
                {cert.map(c => (
                  <div key={c.id} style={{ marginBottom: '10px' }}>
                    <p style={{
                      fontSize: '8.5px',
                      fontWeight: 600,
                      color: '#0f172a',
                      margin: 0,
                    }}>{c.name}</p>
                    <p style={{
                      fontSize: '7px',
                      color: '#94a3b8',
                      margin: '2px 0 0',
                    }}>{c.issuer} • {c.date}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* PAGE 2 - Languages & Interests */}
      {(lang.length > 0 || intr.length > 0) && (
        <div className="page-break" style={{
          maxWidth: '720px',
          margin: '30px auto',
          background: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 20px 40px -12px rgba(0,0,0,0.08)',
          overflow: 'hidden',
        }}>
          
          <div style={{
            display: 'flex',
            padding: '35px',
            gap: '35px',
            minHeight: '400px',
          }}>
            
            {/* LEFT COLUMN - Page 2 */}
            <div style={{ flex: '1' }}>
              {lang.length > 0 && (
                <div className="keep-together" style={{
                  background: '#f8fafc',
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '20px',
                  }}>
                    <Globe size={16} color={tc} />
                    <h3 style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#0f172a',
                      margin: 0,
                    }}>Languages</h3>
                  </div>
                  
                  {lang.map(l => (
                    <div key={l.id} className="keep-together" style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '14px',
                      paddingBottom: '10px',
                      borderBottom: '1px solid #e2e8f0',
                    }}>
                      <span style={{ fontSize: '9px', color: '#334155', fontWeight: 500 }}>{l.name}</span>
                      <span style={{
                        fontSize: '8px',
                        padding: '2px 10px',
                        background: `${tc}10`,
                        borderRadius: '12px',
                        color: tc,
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
                  background: '#f8fafc',
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '20px',
                  }}>
                    <Heart size={16} color={tc} />
                    <h3 style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#0f172a',
                      margin: 0,
                    }}>Personal Interests</h3>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                  }}>
                    {intr.map(i => (
                      <span key={i.id} className="keep-together" style={{
                        fontSize: '8.5px',
                        padding: '6px 14px',
                        background: '#ffffff',
                        borderRadius: '20px',
                        color: '#475569',
                        border: '1px solid #e2e8f0',
                      }}>
                        {i.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer on Page 2 */}
          <div className="keep-together" style={{
            padding: '18px 35px',
            background: '#f8fafc',
            borderTop: '1px solid #e2e8f0',
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: '7px',
              color: '#94a3b8',
              margin: 0,
            }}>
              Open to new opportunities · Available for consulting · Let's connect!
            </p>
          </div>
        </div>
      )}
    </div>
  )
}