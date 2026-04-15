import { Mail, Phone, MapPin, Globe, Link2, GitBranch, Briefcase, GraduationCap, Award, Heart } from 'lucide-react'

const S = {
  name: 'Arjun Mehta', jobTitle: 'Senior Product Manager',
  email: 'arjun@email.com', phone: '+91 98765 12345',
  location: 'Bengaluru, India', website: 'arjunmehta.pm',
  linkedin: 'linkedin.com/in/arjunm', github: 'github.com/arjunm',
  summary: 'Strategic product leader with 8+ years building B2B SaaS products from 0 to $50M ARR. Expert in growth loops, pricing strategy, and cross-functional leadership.',
  experience: [
    { id: 'e1', role: 'Senior Product Manager', company: 'Freshworks', location: 'Bengaluru', startDate: 'Feb 2021', endDate: '', current: true, description: "• Owned Freshdesk's AI suite — grew from 0 to $8M ARR in 18 months\n• Led team of 12 across PM, design, and engineering\n• Launched 3 major features with 94% customer satisfaction score" },
    { id: 'e2', role: 'Product Manager', company: 'Zoho', location: 'Chennai', startDate: 'Apr 2018', endDate: 'Jan 2021', current: false, description: "• Built Zoho CRM's automation engine used by 500K+ businesses\n• Increased feature adoption by 67% through UX redesign\n• Managed $2M product budget with 110% ROI" },
    { id: 'e3', role: 'Associate PM', company: 'InMobi', location: 'Bengaluru', startDate: 'Jun 2016', endDate: 'Mar 2018', current: false, description: '• Launched mobile ad targeting product reaching 1.5B+ devices\n• Reduced ad load time by 40% through SDK optimization' },
  ],
  education: [{ id: 'ed1', degree: 'MBA — Product & Strategy', school: 'IIM Calcutta', startDate: '2014', endDate: '2016', gpa: '3.92/4.0', achievements: 'Gold Medal' }],
  skills: [{ id: 's1', name: 'Product Strategy', level: 96 }, { id: 's2', name: 'Data Analysis', level: 88 }, { id: 's3', name: 'Roadmapping', level: 94 }, { id: 's4', name: 'A/B Testing', level: 90 }, { id: 's5', name: 'SQL', level: 78 }, { id: 's6', name: 'Figma', level: 72 }],
  projects: [{ id: 'p1', name: 'AI Copilot for CRM', description: 'Led 0→1 build of AI assistant for Freshdesk. 10K+ daily active users in 3 months.', tech: 'GPT-4, Python, React', link: 'freshworks.com/ai' }],
  certifications: [{ id: 'c1', name: 'Google PM Certificate', issuer: 'Google', date: '2023-03' }, { id: 'c2', name: 'Reforge Growth', issuer: 'Reforge', date: '2022-08' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }, { id: 'l3', name: 'Gujarati', proficiency: 'Native' }],
  interests: [{ id: 'i1', name: 'Chess' }, { id: 'i2', name: 'Podcasting' }, { id: 'i3', name: 'Cricket' }, { id: 'i4', name: 'Travel' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

function SH({ icon: Icon, title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, marginTop: 22 }}>
      <div style={{ width: 28, height: 28, borderRadius: 8, background: `${tc}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={14} color={tc} />
      </div>
      <span style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#111' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: '#f3f4f6' }} />
    </div>
  )
}

function SkillCircle({ name, level, tc }) {
  const r = 14
  const circ = 2 * Math.PI * r
  const dash = (level / 100) * circ
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
      <div style={{ position: 'relative', width: 36, height: 36 }}>
        <svg width="36" height="36" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="18" cy="18" r={r} fill="none" stroke={`${tc}18`} strokeWidth="3" />
          <circle
            cx="18" cy="18" r={r} fill="none"
            stroke={tc} strokeWidth="3"
            strokeDasharray={`${dash} ${circ}`}
            strokeLinecap="round"
          />
        </svg>
        <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 800, color: tc }}>
          {level}
        </span>
      </div>
      <span style={{ fontSize: 7.5, fontWeight: 600, color: '#374151', textAlign: 'center', lineHeight: 1.3, maxWidth: 52 }}>{name}</span>
    </div>
  )
}

const interestColors = ['#6366f115', '#f59e0b15', '#10b98115', '#ec489915', '#0ea5e915', '#8b5cf615']
const interestBorders = ['#6366f130', '#f59e0b30', '#10b98130', '#ec489930', '#0ea5e930', '#8b5cf630']
const interestText = ['#4f46e5', '#b45309', '#065f46', '#9d174d', '#0369a1', '#6d28d9']

const proficiencyDots = { Native: 5, Fluent: 4, Advanced: 3, Intermediate: 2, Beginner: 1 }

export default function CardDeckTemplate({ resume }) {
  const r = resume || {}
  const pi = r.personalInfo || r.data?.personalInfo || {}

  const name = g(pi.name, S.name)
  const jobTitle = g(pi.jobTitle, S.jobTitle)
  const email = g(pi.email, S.email)
  const phone = g(pi.phone, S.phone)
  const location = g(pi.location, S.location)
  const website = g(pi.website, S.website)
  const linkedin = g(pi.linkedin, S.linkedin)
  const summary = g(pi.summary, S.summary)
  const photo = pi.photo || ''

  const tc = g(r.themeColor, '#6366f1')
  const fontFamily = g(r.fontFamily, "'Inter', 'Helvetica Neue', Arial, sans-serif")

  const experience = (r.experience && r.experience.length > 0) ? r.experience : S.experience
  const education = (r.education && r.education.length > 0) ? r.education : S.education
  const skills = (r.skills && r.skills.length > 0) ? r.skills : S.skills
  const projects = (r.projects && r.projects.length > 0) ? r.projects : S.projects
  const certifications = (r.certifications && r.certifications.length > 0) ? r.certifications : S.certifications
  const languages = (r.languages && r.languages.length > 0) ? r.languages : S.languages
  const interests = (r.interests && r.interests.length > 0) ? r.interests : S.interests

  const summaryExcerpt = summary ? summary.slice(0, 120) + (summary.length > 120 ? '…' : '') : ''

  return (
    <div style={{
      width: 794,
      minHeight: 1123,
      background: '#ffffff',
      fontFamily,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* ── HEADER ── */}
      <div style={{
        background: '#ffffff',
        padding: '28px 32px',
        borderLeft: `4px solid ${tc}`,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 16,
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ marginBottom: 4 }}>
            <h1 style={{ margin: 0, fontSize: 26, fontWeight: 900, color: '#111', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              {name}
            </h1>
            <p style={{ margin: '4px 0 0', fontSize: 10, fontWeight: 700, color: tc, textTransform: 'uppercase', letterSpacing: '0.14em' }}>
              {jobTitle}
            </p>
          </div>

          {summaryExcerpt && (
            <p style={{ margin: '8px 0 10px', fontSize: 8.5, color: '#6b7280', lineHeight: 1.6, fontStyle: 'italic', maxWidth: 460 }}>
              {summaryExcerpt}
            </p>
          )}

          {/* Contact row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px', alignItems: 'center' }}>
            {email && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8, color: '#6b7280' }}>
                <Mail size={9} color={tc} />{email}
              </span>
            )}
            {phone && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8, color: '#6b7280' }}>
                <Phone size={9} color={tc} />{phone}
              </span>
            )}
            {location && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8, color: '#6b7280' }}>
                <MapPin size={9} color={tc} />{location}
              </span>
            )}
            {website && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8, color: '#6b7280' }}>
                <Globe size={9} color={tc} />{website}
              </span>
            )}
            {linkedin && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8, color: '#6b7280' }}>
                <Link2 size={9} color={tc} />{linkedin}
              </span>
            )}
          </div>
        </div>

        {/* Photo */}
        {photo && (
          <div style={{ flexShrink: 0 }}>
            <img
              src={photo}
              alt="Profile"
              style={{
                width: 68, height: 68,
                borderRadius: '50%',
                objectFit: 'cover',
                border: `3px solid ${tc}30`,
              }}
            />
          </div>
        )}
      </div>

      {/* ── BODY: main + sidebar ── */}
      <div style={{ display: 'flex', flex: 1 }}>

        {/* ── MAIN COLUMN ── */}
        <div style={{ flex: 1, padding: '8px 24px 28px 28px', minWidth: 0 }}>

          {/* EXPERIENCE */}
          {experience.length > 0 && (
            <div>
              <SH icon={Briefcase} title="Experience" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {experience.map((exp) => {
                  const bullets = (exp.description || '').split('\n').filter(b => b.trim())
                  const companyInitial = (exp.company || '?')[0].toUpperCase()
                  return (
                    <div key={exp.id || exp.role} style={{
                      background: '#ffffff',
                      borderRadius: 12,
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                      overflow: 'hidden',
                      display: 'flex',
                      position: 'relative',
                    }}>
                      {/* Left accent strip */}
                      <div style={{
                        width: 4,
                        flexShrink: 0,
                        background: `linear-gradient(to bottom, ${tc}, ${tc}60)`,
                        borderRadius: '12px 0 0 12px',
                      }} />

                      {/* Card content */}
                      <div style={{ flex: 1, padding: '12px 14px 12px 12px' }}>
                        {/* Top row: logo + info + date */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                          {/* Company logo placeholder */}
                          <div style={{
                            width: 40, height: 40,
                            borderRadius: 10,
                            background: `${tc}15`,
                            border: `1.5px solid ${tc}`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexShrink: 0,
                            fontSize: 16, fontWeight: 900, color: tc,
                          }}>
                            {companyInitial}
                          </div>

                          {/* Company + role + location */}
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ margin: 0, fontSize: 13, fontWeight: 800, color: '#111', lineHeight: 1.2 }}>
                              {exp.company}
                            </p>
                            <p style={{ margin: '2px 0 0', fontSize: 10, fontWeight: 600, color: tc, lineHeight: 1.2 }}>
                              {exp.role}
                            </p>
                            {exp.location && (
                              <span style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}>
                                <MapPin size={8} color="#9ca3af" />
                                <span style={{ fontSize: 8.5, color: '#9ca3af' }}>{exp.location}</span>
                              </span>
                            )}
                          </div>

                          {/* Date badge */}
                          <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                            {exp.current ? (
                              <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: 4,
                                background: '#dcfce7', color: '#166534',
                                border: '1px solid #bbf7d0',
                                borderRadius: 20, padding: '2px 8px',
                                fontSize: 8, fontWeight: 700,
                              }}>
                                <span style={{ fontSize: 8 }}>●</span> Present
                              </span>
                            ) : (
                              exp.endDate && (
                                <span style={{
                                  background: `${tc}12`, color: tc,
                                  border: `1px solid ${tc}25`,
                                  borderRadius: 20, padding: '2px 8px',
                                  fontSize: 8, fontWeight: 600,
                                }}>
                                  {exp.endDate}
                                </span>
                              )
                            )}
                            {exp.startDate && (
                              <span style={{
                                background: `${tc}08`, color: '#6b7280',
                                border: `1px solid ${tc}15`,
                                borderRadius: 20, padding: '2px 8px',
                                fontSize: 8, fontWeight: 500,
                              }}>
                                {exp.startDate}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Divider */}
                        {bullets.length > 0 && (
                          <div style={{ height: 1, background: '#f3f4f6', marginBottom: 8 }} />
                        )}

                        {/* Bullets */}
                        {bullets.length > 0 && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            {bullets.map((b, i) => (
                              <p key={i} style={{ margin: 0, fontSize: 9, color: '#4b5563', lineHeight: 1.7 }}>
                                {b.startsWith('•') ? b : `• ${b}`}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* PROJECTS */}
          {projects.length > 0 && (
            <div>
              <SH icon={GitBranch} title="Projects" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {projects.map((proj) => {
                  const techTags = (proj.tech || '').split(',').map(t => t.trim()).filter(Boolean)
                  return (
                    <div key={proj.id || proj.name} style={{
                      background: `${tc}08`,
                      border: `1px solid ${tc}15`,
                      borderRadius: 8,
                      padding: '10px 12px',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 4 }}>
                        <p style={{ margin: 0, fontSize: 10, fontWeight: 800, color: '#111' }}>{proj.name}</p>
                        {proj.link && (
                          <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 7.5, color: tc, flexShrink: 0 }}>
                            <Link2 size={8} color={tc} />{proj.link}
                          </span>
                        )}
                      </div>
                      {proj.description && (
                        <p style={{ margin: '0 0 6px', fontSize: 8.5, color: '#4b5563', lineHeight: 1.6 }}>{proj.description}</p>
                      )}
                      {techTags.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                          {techTags.map((tag, i) => (
                            <span key={i} style={{
                              background: '#f3f4f6', color: '#6b7280',
                              borderRadius: 4, padding: '1px 6px',
                              fontSize: 7.5, fontWeight: 600,
                            }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* ── RIGHT SIDEBAR ── */}
        <div style={{
          width: 220,
          flexShrink: 0,
          background: '#fafafa',
          borderLeft: '1px solid #f3f4f6',
          padding: '8px 18px 28px',
        }}>

          {/* SKILLS */}
          {skills.length > 0 && (
            <div>
              <SH icon={Award} title="Skills" tc={tc} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 8px' }}>
                {skills.map((sk) => (
                  <SkillCircle key={sk.id || sk.name} name={sk.name} level={sk.level || 80} tc={tc} />
                ))}
              </div>
            </div>
          )}

          {/* EDUCATION */}
          {education.length > 0 && (
            <div>
              <SH icon={GraduationCap} title="Education" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {education.map((ed) => (
                  <div key={ed.id || ed.degree} style={{
                    background: '#ffffff',
                    borderLeft: `3px solid ${tc}10`,
                    padding: '10px 12px',
                    borderRadius: 8,
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  }}>
                    <p style={{ margin: 0, fontSize: 9, fontWeight: 700, color: '#111', lineHeight: 1.3 }}>{ed.degree}</p>
                    <p style={{ margin: '3px 0 0', fontSize: 8.5, fontWeight: 600, color: tc }}>{ed.school}</p>
                    {(ed.startDate || ed.endDate) && (
                      <p style={{ margin: '3px 0 0', fontSize: 7.5, color: '#9ca3af' }}>
                        {[ed.startDate, ed.endDate].filter(Boolean).join(' – ')}
                      </p>
                    )}
                    {ed.gpa && (
                      <p style={{ margin: '2px 0 0', fontSize: 7.5, color: '#6b7280' }}>GPA: {ed.gpa}</p>
                    )}
                    {ed.achievements && (
                      <p style={{ margin: '2px 0 0', fontSize: 7.5, color: tc, fontWeight: 600 }}>{ed.achievements}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LANGUAGES */}
          {languages.length > 0 && (
            <div>
              <SH icon={Globe} title="Languages" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {languages.map((lang) => {
                  const dots = proficiencyDots[lang.proficiency] || 3
                  return (
                    <div key={lang.id || lang.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 8.5, fontWeight: 600, color: '#374151' }}>{lang.name}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        {[1, 2, 3, 4, 5].map(d => (
                          <div key={d} style={{
                            width: 7, height: 7, borderRadius: '50%',
                            background: d <= dots ? tc : `${tc}20`,
                          }} />
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* CERTIFICATIONS */}
          {certifications.length > 0 && (
            <div>
              <SH icon={Award} title="Certifications" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {certifications.map((cert) => (
                  <div key={cert.id || cert.name} style={{
                    background: '#ffffff',
                    border: `1px solid ${tc}20`,
                    borderRadius: 6,
                    padding: '6px 10px',
                  }}>
                    <p style={{ margin: 0, fontSize: 8.5, fontWeight: 700, color: '#111' }}>{cert.name}</p>
                    <p style={{ margin: '2px 0 0', fontSize: 7.5, color: tc, fontWeight: 600 }}>{cert.issuer}</p>
                    {cert.date && (
                      <p style={{ margin: '1px 0 0', fontSize: 7, color: '#9ca3af' }}>{cert.date}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* INTERESTS */}
          {interests.length > 0 && (
            <div>
              <SH icon={Heart} title="Interests" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {interests.map((int, i) => {
                  const ci = i % 6
                  return (
                    <span key={int.id || int.name} style={{
                      background: interestColors[ci],
                      border: `1px solid ${interestBorders[ci]}`,
                      color: interestText[ci],
                      borderRadius: 20,
                      padding: '3px 9px',
                      fontSize: 8, fontWeight: 600,
                    }}>
                      {int.name}
                    </span>
                  )
                })}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
