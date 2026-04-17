// src/components/builder/templates/classicLuxe.js

import { Mail, Phone, MapPin, Globe, Link2, Briefcase, GraduationCap, Award, Heart, User } from 'lucide-react'

// Default demo data
const defaultData = {
  name: 'Sarah Reynolds',
  jobTitle: 'Senior Product Manager',
  email: 'sarah.reynolds@email.com',
  phone: '+1 (415) 555-0123',
  location: 'San Francisco, CA',
  website: 'sarahreynolds.com',
  linkedin: 'linkedin.com/in/sarahreynolds',
  summary: 'Strategic Product Manager with 8+ years of experience in SaaS and enterprise software. Proven track record of launching successful products that drive revenue growth and user engagement.',
  experience: [
    { id: 'e1', role: 'Senior Product Manager', company: 'Salesforce', location: 'San Francisco', startDate: 'Jan 2021', endDate: 'Present', current: true, description: 'Led product strategy for CRM platform serving 150K+ enterprise customers. Increased user adoption by 45% through intuitive feature design.' },
    { id: 'e2', role: 'Product Manager', company: 'Atlassian', location: 'Sydney', startDate: 'Mar 2018', endDate: 'Dec 2020', current: false, description: 'Drove development of Jira automation features used by 500K+ users. Reduced customer support tickets by 30% through UX improvements.' },
  ],
  education: [
    { id: 'ed1', degree: 'MBA in Technology Management', school: 'Stanford University', startDate: '2014', endDate: '2016', achievements: 'Arjay Miller Scholar' },
    { id: 'ed2', degree: 'BS in Computer Science', school: 'UC Berkeley', startDate: '2010', endDate: '2014', achievements: 'Cum Laude' },
  ],
  skills: [
    { id: 's1', name: 'Product Strategy', level: 95 },
    { id: 's2', name: 'Agile Methodology', level: 92 },
    { id: 's3', name: 'Data Analytics', level: 88 },
    { id: 's4', name: 'User Research', level: 90 },
  ],
  projects: [
    { id: 'p1', name: 'AI Customer Insights Platform', description: 'Launched ML-powered analytics tool that increased customer retention by 28%.', tech: 'Python, React, AWS' },
  ],
  certifications: [
    { id: 'c1', name: 'Certified Product Manager', issuer: 'Product School', date: '2023' },
  ],
  languages: [
    { id: 'l1', name: 'English', proficiency: 'Native' },
    { id: 'l2', name: 'Spanish', proficiency: 'Professional' },
  ],
  interests: [
    { id: 'i1', name: 'Mentoring' },
    { id: 'i2', name: 'Tech Writing' },
    { id: 'i3', name: 'Yoga' },
  ],
}

// Helper function to get value or fallback
function getValue(value, fallback) {
  if (value && typeof value === 'string' && value.trim() !== '') {
    return value
  }
  if (value && typeof value === 'object' && Object.keys(value).length > 0) {
    return value
  }
  return fallback
}

export default function ClassicLuxeTemplate({ resume = {} }) {
  // Destructure with defaults
  const {
    personalInfo = {},
    experience = [],
    education = [],
    skills = [],
    projects = [],
    certifications = [],
    languages = [],
    interests = [],
    themeColor = '#8b7355',
    fontFamily = "'Inter', 'Segoe UI', -apple-system, sans-serif"
  } = resume

  const tc = themeColor
  
  // Get values with fallbacks
  const name = getValue(personalInfo.name, defaultData.name)
  const jobTitle = getValue(personalInfo.jobTitle, defaultData.jobTitle)
  const email = getValue(personalInfo.email, defaultData.email)
  const phone = getValue(personalInfo.phone, defaultData.phone)
  const location = getValue(personalInfo.location, defaultData.location)
  const website = getValue(personalInfo.website, defaultData.website)
  const linkedin = getValue(personalInfo.linkedin, defaultData.linkedin)
  const summary = getValue(personalInfo.summary, defaultData.summary)
  const photo = personalInfo.photo || ''

  // Use provided data or fallback to default
  const exp = experience.length > 0 ? experience : defaultData.experience
  const edu = education.length > 0 ? education : defaultData.education
  const skl = skills.length > 0 ? skills : defaultData.skills
  const prj = projects.length > 0 ? projects : defaultData.projects
  const cert = certifications.length > 0 ? certifications : defaultData.certifications
  const lang = languages.length > 0 ? languages : defaultData.languages
  const intr = interests.length > 0 ? interests : defaultData.interests

  return (
    <div style={{
      background: '#fefcf8',
      fontFamily: fontFamily,
      fontSize: '10px',
      lineHeight: 1.5,
      width: '794px',
      minHeight: '1123px',
      boxSizing: 'border-box',
      color: '#2c2c2c',
    }}>
      
      {/* Simple border frame */}
      <div style={{
        margin: '24px',
        border: '1px solid #e8e0d4',
        background: '#ffffff',
        boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
      }}>
        
        {/* Header */}
        <div style={{
          padding: '40px 48px 24px',
          borderBottom: '2px solid #e8e0d4',
        }}>
          {photo && (
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              margin: '0 auto 20px',
              overflow: 'hidden',
              border: '3px solid #ffffff',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            }}>
              <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}
          
          <h1 style={{
            fontSize: '34px',
            fontWeight: 500,
            color: '#2c2c2c',
            margin: 0,
            textAlign: 'center',
            letterSpacing: '-0.5px',
          }}>{name}</h1>
          
          <p style={{
            fontSize: '13px',
            color: tc,
            textAlign: 'center',
            margin: '10px 0 20px',
            fontWeight: 500,
            letterSpacing: '0.3px',
          }}>{jobTitle}</p>
          
          {/* Contact row */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            marginTop: '16px',
          }}>
            {email && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '9px', color: '#666' }}>
                <Mail size={12} color={tc} />
                <span>{email}</span>
              </div>
            )}
            {phone && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '9px', color: '#666' }}>
                <Phone size={12} color={tc} />
                <span>{phone}</span>
              </div>
            )}
            {location && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '9px', color: '#666' }}>
                <MapPin size={12} color={tc} />
                <span>{location}</span>
              </div>
            )}
            {website && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '9px', color: '#666' }}>
                <Globe size={12} color={tc} />
                <span>{website}</span>
              </div>
            )}
            {linkedin && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '9px', color: '#666' }}>
                <Link2 size={12} color={tc} />
                <span>{linkedin}</span>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          padding: '32px 48px 40px',
        }}>
          
          {/* Summary */}
          {summary && (
            <div style={{
              marginBottom: '32px',
              padding: '16px 20px',
              background: '#faf8f4',
              borderRadius: '4px',
              borderLeft: `3px solid ${tc}`,
            }}>
              <p style={{ fontSize: '10.5px', color: '#555', lineHeight: 1.6, margin: 0 }}>{summary}</p>
            </div>
          )}

          {/* Two Column Layout */}
          <div style={{
            display: 'flex',
            gap: '40px',
            flexWrap: 'wrap',
          }}>
            
            {/* Left Column - Main Experience */}
            <div style={{ flex: '1.3', minWidth: '250px' }}>
              
              {/* Work Experience */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px',
                }}>
                  <Briefcase size={16} color={tc} />
                  <h2 style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#2c2c2c',
                    letterSpacing: '0.5px',
                    margin: 0,
                    textTransform: 'uppercase',
                  }}>Experience</h2>
                  <div style={{ flex: 1, height: '1px', background: '#e8e0d4' }} />
                </div>
                
                {exp.map((e, idx) => (
                  <div key={e.id} style={{
                    marginBottom: idx === exp.length - 1 ? 0 : '24px',
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      flexWrap: 'wrap',
                      marginBottom: '4px',
                    }}>
                      <h3 style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#2c2c2c',
                        margin: 0,
                      }}>{e.role}</h3>
                      <span style={{
                        fontSize: '8.5px',
                        color: '#999',
                      }}>
                        {e.startDate} — {e.current ? 'Present' : e.endDate}
                      </span>
                    </div>
                    <p style={{
                      fontSize: '9.5px',
                      color: tc,
                      margin: '4px 0 8px',
                      fontWeight: 500,
                    }}>
                      {e.company}{e.location && `, ${e.location}`}
                    </p>
                    {e.description && (
                      <p style={{
                        fontSize: '9px',
                        color: '#666',
                        margin: '4px 0',
                        lineHeight: 1.5,
                      }}>{e.description}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Projects */}
              {prj.length > 0 && (
                <div style={{ marginBottom: '32px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '20px',
                  }}>
                    <Award size={16} color={tc} />
                    <h2 style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#2c2c2c',
                      letterSpacing: '0.5px',
                      margin: 0,
                      textTransform: 'uppercase',
                    }}>Projects</h2>
                    <div style={{ flex: 1, height: '1px', background: '#e8e0d4' }} />
                  </div>
                  
                  {prj.map(p => (
                    <div key={p.id} style={{ marginBottom: '16px' }}>
                      <h3 style={{
                        fontSize: '10.5px',
                        fontWeight: 600,
                        color: '#2c2c2c',
                        margin: '0 0 4px',
                      }}>{p.name}</h3>
                      {p.tech && (
                        <p style={{
                          fontSize: '8px',
                          color: tc,
                          margin: '4px 0',
                        }}>{p.tech}</p>
                      )}
                      <p style={{
                        fontSize: '9px',
                        color: '#666',
                        margin: '4px 0',
                      }}>{p.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div style={{ flex: '0.9', minWidth: '200px' }}>
              
              {/* Skills */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px',
                }}>
                  <User size={14} color={tc} />
                  <h2 style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#2c2c2c',
                    letterSpacing: '0.5px',
                    margin: 0,
                    textTransform: 'uppercase',
                  }}>Skills</h2>
                  <div style={{ flex: 1, height: '1px', background: '#e8e0d4' }} />
                </div>
                
                {skl.map(s => (
                  <div key={s.id} style={{ marginBottom: '12px' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '4px',
                    }}>
                      <span style={{ fontSize: '9px', color: '#2c2c2c' }}>{s.name}</span>
                      <span style={{ fontSize: '8px', color: '#999' }}>{s.level}%</span>
                    </div>
                    <div style={{
                      height: '2px',
                      background: '#e8e0d4',
                    }}>
                      <div style={{
                        width: `${s.level}%`,
                        height: '2px',
                        background: tc,
                      }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px',
                }}>
                  <GraduationCap size={14} color={tc} />
                  <h2 style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#2c2c2c',
                    letterSpacing: '0.5px',
                    margin: 0,
                    textTransform: 'uppercase',
                  }}>Education</h2>
                  <div style={{ flex: 1, height: '1px', background: '#e8e0d4' }} />
                </div>
                
                {edu.map(e => (
                  <div key={e.id} style={{ marginBottom: '16px' }}>
                    <h3 style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      color: '#2c2c2c',
                      margin: 0,
                    }}>{e.degree}</h3>
                    <p style={{
                      fontSize: '9px',
                      color: tc,
                      margin: '4px 0 2px',
                    }}>{e.school}</p>
                    <p style={{
                      fontSize: '8px',
                      color: '#999',
                    }}>{e.startDate} — {e.endDate}</p>
                    {e.achievements && (
                      <p style={{
                        fontSize: '8px',
                        color: '#777',
                        marginTop: '4px',
                      }}>{e.achievements}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Certifications */}
              {cert.length > 0 && (
                <div style={{ marginBottom: '32px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '20px',
                  }}>
                    <Award size={14} color={tc} />
                    <h2 style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#2c2c2c',
                      letterSpacing: '0.5px',
                      margin: 0,
                      textTransform: 'uppercase',
                    }}>Certifications</h2>
                    <div style={{ flex: 1, height: '1px', background: '#e8e0d4' }} />
                  </div>
                  
                  {cert.map(c => (
                    <div key={c.id} style={{ marginBottom: '12px' }}>
                      <p style={{
                        fontSize: '9px',
                        fontWeight: 500,
                        color: '#2c2c2c',
                        margin: 0,
                      }}>{c.name}</p>
                      <p style={{
                        fontSize: '8px',
                        color: '#999',
                        margin: '2px 0 0',
                      }}>{c.issuer} · {c.date}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Languages */}
              {lang.length > 0 && (
                <div style={{ marginBottom: '24px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '16px',
                  }}>
                    <Globe size={14} color={tc} />
                    <h2 style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#2c2c2c',
                      letterSpacing: '0.5px',
                      margin: 0,
                      textTransform: 'uppercase',
                    }}>Languages</h2>
                    <div style={{ flex: 1, height: '1px', background: '#e8e0d4' }} />
                  </div>
                  
                  {lang.map(l => (
                    <div key={l.id} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                    }}>
                      <span style={{ fontSize: '9px', color: '#2c2c2c' }}>{l.name}</span>
                      <span style={{ fontSize: '8px', color: '#999' }}>{l.proficiency}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Interests */}
              {intr.length > 0 && (
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '16px',
                  }}>
                    <Heart size={14} color={tc} />
                    <h2 style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#2c2c2c',
                      letterSpacing: '0.5px',
                      margin: 0,
                      textTransform: 'uppercase',
                    }}>Interests</h2>
                    <div style={{ flex: 1, height: '1px', background: '#e8e0d4' }} />
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}>
                    {intr.map(i => (
                      <span key={i.id} style={{
                        fontSize: '8px',
                        color: '#666',
                        padding: '2px 8px',
                        background: '#faf8f4',
                        borderRadius: '12px',
                      }}>
                        {i.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          padding: '16px 48px',
          borderTop: '1px solid #e8e0d4',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '7px',
            color: '#aaa',
            margin: 0,
            letterSpacing: '0.5px',
          }}>
            {email} · {phone} · {location}
          </p>
        </div>
      </div>
    </div>
  )
}