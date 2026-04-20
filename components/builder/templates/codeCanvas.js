// src/components/builder/templates/codeCanvas.js

import { Mail, Phone, MapPin, Globe, Link2, Briefcase, GraduationCap, Award, Heart, Code, GitBranch, Terminal, Cpu } from 'lucide-react'

const defaultData = {
  name: 'Amit Kumar Sharma',
  jobTitle: 'Senior MERN Stack Developer',
  email: 'amit.sharma@dev.com',
  phone: '+91 98765 43210',
  location: 'Bangalore, India',
  website: 'amitsharma.dev',
  linkedin: 'linkedin.com/in/amitsharma',
  github: 'github.com/amitsharma',
  summary: 'Results-driven MERN Stack Developer with 6+ years of experience building scalable web applications. Expert in React, Node.js, MongoDB, and Express. Passionate about clean code, performance optimization, and mentoring junior developers.',
  experience: [
    { id: 'e1', role: 'Senior MERN Stack Developer', company: 'TechMahindra', location: 'Bangalore', startDate: 'Jan 2022', endDate: 'Present', current: true, description: '• Led development of 5+ enterprise MERN applications serving 500K+ users\n• Optimized React components reducing load time by 45%\n• Implemented JWT authentication and RBAC for 3 major projects\n• Mentored 8 junior developers, improving team velocity by 30%' },
    { id: 'e2', role: 'Full Stack Developer', company: 'Infosys', location: 'Pune', startDate: 'Mar 2019', endDate: 'Dec 2021', current: false, description: '• Built RESTful APIs handling 10K+ concurrent requests\n• Developed reusable React component library used by 12 teams\n• Integrated MongoDB aggregation pipeline for complex reporting\n• Reduced API response time by 60% through caching strategies' },
    { id: 'e3', role: 'Junior Developer', company: 'Cognizant', location: 'Chennai', startDate: 'Jun 2017', endDate: 'Feb 2019', current: false, description: '• Maintained and improved existing MERN applications\n• Wrote unit tests with Jest achieving 85% coverage\n• Collaborated with cross-functional teams on 8 projects\n• Received "Rising Star" award for exceptional performance' },
  ],
  education: [
    { id: 'ed1', degree: 'M.Tech in Computer Science', school: 'IIT Hyderabad', startDate: '2015', endDate: '2017', gpa: '8.9/10', achievements: 'GATE Scholarship' },
    { id: 'ed2', degree: 'B.E. in Information Technology', school: 'NIT Trichy', startDate: '2011', endDate: '2015', gpa: '8.7/10', achievements: 'University Gold Medalist' },
  ],
  skills: [
    { id: 's1', name: 'React.js / Next.js', level: 95 },
    { id: 's2', name: 'Node.js / Express', level: 93 },
    { id: 's3', name: 'MongoDB / Mongoose', level: 91 },
    { id: 's4', name: 'JavaScript / TypeScript', level: 94 },
    { id: 's5', name: 'Redux / Context API', level: 90 },
    { id: 's6', name: 'RESTful APIs / GraphQL', level: 92 },
    { id: 's7', name: 'Docker / Kubernetes', level: 85 },
    { id: 's8', name: 'AWS / Azure', level: 88 },
  ],
  projects: [
    { id: 'p1', name: 'E-Commerce Platform', description: 'Full-stack MERN e-commerce with payment gateway, admin panel, and real-time inventory.', tech: 'React, Node.js, MongoDB, Stripe, Redis', link: 'github.com/amit/ecommerce' },
    { id: 'p2', name: 'Task Management System', description: 'Project management tool with drag-drop, team collaboration, and analytics dashboard.', tech: 'MERN, Socket.io, TailwindCSS', link: 'github.com/amit/taskflow' },
    { id: 'p3', name: 'Social Media Dashboard', description: 'Analytics dashboard for social media metrics with real-time data visualization.', tech: 'React, D3.js, Express, MongoDB', link: 'github.com/amit/social-dash' },
  ],
  certifications: [
    { id: 'c1', name: 'MERN Stack Certification', issuer: 'Coursera', date: '2023' },
    { id: 'c2', name: 'AWS Certified Developer', issuer: 'Amazon Web Services', date: '2022' },
    { id: 'c3', name: 'Node.js Advanced', issuer: 'freeCodeCamp', date: '2022' },
  ],
  languages: [
    { id: 'l1', name: 'English', proficiency: 'Professional' },
    { id: 'l2', name: 'Hindi', proficiency: 'Native' },
  ],
  interests: [
    { id: 'i1', name: 'Open Source' },
    { id: 'i2', name: 'Tech Blogging' },
    { id: 'i3', name: 'Competitive Programming' },
    { id: 'i4', name: 'Chess' },
  ],
}

function getValue(value, fallback) {
  if (value && typeof value === 'string' && value.trim() !== '') return value
  if (value && typeof value === 'object' && Object.keys(value).length > 0) return value
  return fallback
}

export default function CodeCanvasTemplate({ resume = {} }) {
  const {
    personalInfo = {},
    experience = [],
    education = [],
    skills = [],
    projects = [],
    certifications = [],
    languages = [],
    interests = [],
    themeColor = '#3b82f6',
    fontFamily = "'Inter', 'SF Mono', 'Fira Code', monospace"
  } = resume

  const tc = themeColor
  
  const name = getValue(personalInfo.name, defaultData.name)
  const jobTitle = getValue(personalInfo.jobTitle, defaultData.jobTitle)
  const email = getValue(personalInfo.email, defaultData.email)
  const phone = getValue(personalInfo.phone, defaultData.phone)
  const location = getValue(personalInfo.location, defaultData.location)
  const website = getValue(personalInfo.website, defaultData.website)
  const linkedin = getValue(personalInfo.linkedin, defaultData.linkedin)
  const github = getValue(personalInfo.github, defaultData.github)
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
      background: '#f8fafc',
      fontFamily: fontFamily,
      fontSize: '10px',
      lineHeight: 1.5,
      width: '794px',
      minHeight: '1123px',
      boxSizing: 'border-box',
      color: '#0f172a',
    }}>
      
      {/* Main Container */}
      <div style={{
        margin: '32px',
        background: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        overflow: 'hidden',
      }}>
        
        {/* Header - Code Style */}
        <div style={{
          background: `linear-gradient(135deg, ${tc}08, #ffffff)`,
          padding: '32px',
          borderBottom: `3px solid ${tc}`,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1 }}>
              {/* Name with Code Icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <Code size={24} color={tc} />
                <h1 style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  margin: 0,
                  color: '#0f172a',
                  letterSpacing: '-0.5px',
                }}>{name}</h1>
              </div>
              
              {/* Job Title with Terminal */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <Terminal size={14} color={tc} />
                <p style={{
                  fontSize: '11px',
                  color: tc,
                  fontWeight: 500,
                  margin: 0,
                  fontFamily: "'Fira Code', monospace",
                }}>{jobTitle}</p>
              </div>
              
              {/* Contact Information */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginTop: '16px',
              }}>
                {email && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '8.5px', color: '#475569' }}>
                    <Mail size={12} color={tc} />
                    <span>{email}</span>
                  </div>
                )}
                {phone && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '8.5px', color: '#475569' }}>
                    <Phone size={12} color={tc} />
                    <span>{phone}</span>
                  </div>
                )}
                {location && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '8.5px', color: '#475569' }}>
                    <MapPin size={12} color={tc} />
                    <span>{location}</span>
                  </div>
                )}
              </div>
              
              {/* Social/Git Links - Removed Github icon, using text instead */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginTop: '12px',
              }}>
                {github && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '8px', color: '#64748b' }}>
                    <span style={{ fontSize: '10px' }}>💻</span>
                    <span>{github}</span>
                  </div>
                )}
                {linkedin && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '8px', color: '#64748b' }}>
                    <Link2 size={10} color={tc} />
                    <span>{linkedin}</span>
                  </div>
                )}
                {website && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '8px', color: '#64748b' }}>
                    <Globe size={10} color={tc} />
                    <span>{website}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Code Stats Card */}
            <div style={{
              background: `linear-gradient(135deg, ${tc}05, #ffffff)`,
              padding: '16px 20px',
              borderRadius: '12px',
              border: `1px solid ${tc}20`,
              textAlign: 'center',
              minWidth: '120px',
            }}>
              <GitBranch size={20} color={tc} />
              <div style={{ fontSize: '24px', fontWeight: 700, color: tc, marginTop: '8px' }}>50+</div>
              <div style={{ fontSize: '7px', color: '#64748b', marginTop: '4px' }}>PROJECTS DELIVERED</div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        {summary && (
          <div style={{
            padding: '24px 32px',
            background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
            borderBottom: `1px solid ${tc}15`,
          }}>
            <p style={{
              fontSize: '10px',
              color: '#475569',
              lineHeight: 1.6,
              margin: 0,
              textAlign: 'center',
              fontStyle: 'italic',
            }}>// {summary}</p>
          </div>
        )}

        {/* Main Content - Two Column */}
        <div style={{
          display: 'flex',
          padding: '32px',
          gap: '32px',
        }}>
          
          {/* LEFT COLUMN - Experience & Projects */}
          <div style={{ flex: '1.4' }}>
            
            {/* Work Experience */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
                paddingBottom: '8px',
                borderBottom: `2px solid ${tc}20`,
              }}>
                <Briefcase size={16} color={tc} />
                <h2 style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#0f172a',
                  margin: 0,
                  letterSpacing: '-0.3px',
                }}>WORK EXPERIENCE</h2>
              </div>
              
              {exp.map((e, idx) => (
                <div key={e.id} style={{
                  marginBottom: '24px',
                  position: 'relative',
                  paddingLeft: '16px',
                  borderLeft: `2px solid ${tc}30`,
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-5px',
                    top: '0',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: tc,
                  }} />
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    marginBottom: '6px',
                  }}>
                    <h3 style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#0f172a',
                      margin: 0,
                    }}>{e.role}</h3>
                    <span style={{
                      fontSize: '8px',
                      color: '#64748b',
                      fontFamily: "'Fira Code', monospace",
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
                      lineHeight: 1.5,
                    }}>{line}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Projects */}
            {prj.length > 0 && (
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px',
                  paddingBottom: '8px',
                  borderBottom: `2px solid ${tc}20`,
                }}>
                  <Code size={16} color={tc} />
                  <h2 style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#0f172a',
                    margin: 0,
                    letterSpacing: '-0.3px',
                  }}>PERSONAL PROJECTS</h2>
                </div>
                
                {prj.map(p => (
                  <div key={p.id} style={{
                    marginBottom: '20px',
                    padding: '14px',
                    background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
                    borderRadius: '10px',
                    border: `1px solid ${tc}15`,
                  }}>
                    <h3 style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      color: '#0f172a',
                      margin: '0 0 4px',
                    }}>{p.name}</h3>
                    <p style={{
                      fontSize: '8.5px',
                      color: '#475569',
                      margin: '0 0 6px',
                    }}>{p.description}</p>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginTop: '6px',
                    }}>
                      {p.tech && p.tech.split(',').map((tech, i) => (
                        <span key={i} style={{
                          fontSize: '7px',
                          padding: '2px 8px',
                          background: `${tc}10`,
                          borderRadius: '4px',
                          color: tc,
                          fontFamily: "'Fira Code', monospace",
                        }}>
                          {tech.trim()}
                        </span>
                      ))}
                      {p.link && (
                        <span style={{
                          fontSize: '7px',
                          padding: '2px 8px',
                          background: '#f1f5f9',
                          borderRadius: '4px',
                          color: '#64748b',
                        }}>
                          🔗 {p.link}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN - Skills & Info */}
          <div style={{ flex: '0.9' }}>
            
            {/* Technical Skills */}
            <div style={{
              background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
              padding: '20px',
              borderRadius: '12px',
              marginBottom: '24px',
              border: `1px solid ${tc}15`,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
              }}>
                <Cpu size={14} color={tc} />
                <h3 style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#0f172a',
                  margin: 0,
                }}>TECH STACK</h3>
              </div>
              
              {skl.slice(0, 8).map(s => (
                <div key={s.id} style={{ marginBottom: '12px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '4px',
                  }}>
                    <span style={{ fontSize: '8.5px', color: '#334155' }}>{s.name}</span>
                    <span style={{ fontSize: '8px', color: tc, fontFamily: "'Fira Code', monospace" }}>{s.level}%</span>
                  </div>
                  <div style={{
                    height: '3px',
                    background: '#e2e8f0',
                    borderRadius: '2px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      width: `${s.level}%`,
                      height: '3px',
                      background: `linear-gradient(90deg, ${tc}, ${tc}80)`,
                      borderRadius: '2px',
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div style={{
              background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
              padding: '20px',
              borderRadius: '12px',
              marginBottom: '24px',
              border: `1px solid ${tc}15`,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
              }}>
                <GraduationCap size={14} color={tc} />
                <h3 style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#0f172a',
                  margin: 0,
                }}>EDUCATION</h3>
              </div>
              
              {edu.map(e => (
                <div key={e.id} style={{ marginBottom: '16px' }}>
                  <h4 style={{
                    fontSize: '9.5px',
                    fontWeight: 700,
                    color: '#0f172a',
                    margin: '0 0 4px',
                  }}>{e.degree}</h4>
                  <p style={{
                    fontSize: '8.5px',
                    color: tc,
                    margin: '0 0 2px',
                  }}>{e.school}</p>
                  <p style={{
                    fontSize: '7.5px',
                    color: '#64748b',
                  }}>{e.startDate} — {e.endDate}</p>
                  {e.gpa && (
                    <p style={{
                      fontSize: '7.5px',
                      color: '#475569',
                      marginTop: '4px',
                    }}>GPA: {e.gpa}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications */}
            {cert.length > 0 && (
              <div style={{
                background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
                padding: '20px',
                borderRadius: '12px',
                marginBottom: '24px',
                border: `1px solid ${tc}15`,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px',
                }}>
                  <Award size={14} color={tc} />
                  <h3 style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#0f172a',
                    margin: 0,
                  }}>CERTIFICATIONS</h3>
                </div>
                
                {cert.map(c => (
                  <div key={c.id} style={{ marginBottom: '12px' }}>
                    <p style={{
                      fontSize: '8.5px',
                      fontWeight: 600,
                      color: '#0f172a',
                      margin: 0,
                    }}>{c.name}</p>
                    <p style={{
                      fontSize: '7.5px',
                      color: '#64748b',
                      margin: '2px 0 0',
                    }}>{c.issuer} • {c.date}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Languages & Interests */}
            {lang.length > 0 && (
              <div style={{
                background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
                padding: '16px',
                borderRadius: '12px',
                marginBottom: '16px',
                border: `1px solid ${tc}15`,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px',
                }}>
                  <Globe size={12} color={tc} />
                  <h3 style={{ fontSize: '10px', fontWeight: 700, color: '#0f172a', margin: 0 }}>LANGUAGES</h3>
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
                borderRadius: '12px',
                border: `1px solid ${tc}15`,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px',
                }}>
                  <Heart size={12} color={tc} />
                  <h3 style={{ fontSize: '10px', fontWeight: 700, color: '#0f172a', margin: 0 }}>INTERESTS</h3>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {intr.map(i => (
                    <span key={i.id} style={{
                      fontSize: '7.5px',
                      padding: '3px 8px',
                      background: `${tc}08`,
                      borderRadius: '4px',
                      color: '#475569',
                    }}>
                      {i.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer - Code Style */}
        <div style={{
          padding: '16px 32px',
          borderTop: `1px solid ${tc}15`,
          background: `linear-gradient(135deg, ${tc}03, #ffffff)`,
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: '7px',
            color: '#94a3b8',
            fontFamily: "'Fira Code', monospace",
          }}>
            <span>const portfolio = </span>
            <span style={{ color: tc }}>"{website || 'amitsharma.dev'}"</span>
            <span> ;</span>
          </div>
        </div>
      </div>
    </div>
  )
}