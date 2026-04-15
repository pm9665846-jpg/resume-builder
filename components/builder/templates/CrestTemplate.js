import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Ravi Shankar', jobTitle: 'Principal Software Architect',
  email: 'ravi@email.com', phone: '+91 98765 43210',
  location: 'Bengaluru, India', website: 'ravishankar.dev',
  linkedin: 'linkedin.com/in/raviarch', github: 'github.com/raviarch',
  summary: 'Principal architect with 12+ years designing distributed systems at scale. Led architecture for platforms serving 100M+ users. Deep expertise in microservices, event-driven systems, and cloud-native infrastructure. Mentor, speaker, and open source contributor.',
  experience: [
    { id: 'e1', role: 'Principal Software Architect', company: 'Flipkart', location: 'Bengaluru', startDate: 'Apr 2020', endDate: '', current: true, description: '• Architected Flipkart\'s next-gen order management system handling 5M+ orders/day\n• Led 40-engineer architecture guild across 8 product teams\n• Reduced system latency by 70% through event-driven redesign' },
    { id: 'e2', role: 'Senior Staff Engineer', company: 'Swiggy', location: 'Bengaluru', startDate: 'Jan 2017', endDate: 'Mar 2020', current: false, description: '• Designed real-time delivery tracking system for 50M+ users\n• Built Swiggy\'s internal service mesh reducing inter-service latency by 45%' },
    { id: 'e3', role: 'Software Engineer III', company: 'Google', location: 'Hyderabad', startDate: 'Jul 2013', endDate: 'Dec 2016', current: false, description: '• Contributed to Google Pay\'s backend infrastructure\n• Improved transaction throughput by 3x through sharding strategy' },
  ],
  education: [{ id: 'ed1', degree: 'M.Tech Computer Science', school: 'IIT Madras', startDate: '2011', endDate: '2013', gpa: '9.4/10', achievements: 'Institute Gold Medal' }],
  skills: [{ id: 's1', name: 'System Design', level: 97 }, { id: 's2', name: 'Java / Go', level: 92 }, { id: 's3', name: 'Kubernetes', level: 88 }, { id: 's4', name: 'Apache Kafka', level: 90 }, { id: 's5', name: 'AWS / GCP', level: 85 }, { id: 's6', name: 'PostgreSQL', level: 87 }],
  projects: [{ id: 'p1', name: 'DistributedDB', description: 'Open-source distributed key-value store. 4.1k GitHub stars, used in production by 80+ companies.', tech: 'Go, Raft Consensus, gRPC', link: 'github.com/raviarch/distributeddb' }],
  certifications: [{ id: 'c1', name: 'AWS Solutions Architect Pro', issuer: 'Amazon', date: '2023-03' }, { id: 'c2', name: 'CKA Kubernetes', issuer: 'CNCF', date: '2022-06' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }, { id: 'l3', name: 'Tamil', proficiency: 'Native' }],
  interests: [{ id: 'i1', name: 'Open Source' }, { id: 'i2', name: 'Tech Talks' }, { id: 'i3', name: 'Chess' }, { id: 'i4', name: 'Trekking' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

function SectionHeader({ title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
      <div style={{ width: 8, height: 8, background: '#7c3aed', transform: 'rotate(45deg)', flexShrink: 0 }} />
      <span style={{ fontSize: 8, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1e1b4b' }}>
        {title}
      </span>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, rgba(124,58,237,0.19), transparent)' }} />
    </div>
  )
}

export default function CrestTemplate({ resume }) {
  const r = resume || {}
  const pi = r.personalInfo || r.data?.personalInfo || {}
  const themeColor = g(r.themeColor, '#7c3aed')
  const fontFamily = g(r.fontFamily, "'Inter', 'Helvetica Neue', Arial, sans-serif")

  const name       = g(pi.name,      S.name)
  const jobTitle   = g(pi.jobTitle,  S.jobTitle)
  const email      = g(pi.email,     S.email)
  const phone      = g(pi.phone,     S.phone)
  const location   = g(pi.location,  S.location)
  const website    = g(pi.website,   S.website)
  const linkedin   = g(pi.linkedin,  S.linkedin)
  const github     = g(pi.github,    S.github)
  const photo      = pi.photo || ''
  const summary    = g(pi.summary,   S.summary)

  const experience     = (r.experience     && r.experience.length)     ? r.experience     : S.experience
  const education      = (r.education      && r.education.length)      ? r.education      : S.education
  const skills         = (r.skills         && r.skills.length)         ? r.skills         : S.skills
  const projects       = (r.projects       && r.projects.length)       ? r.projects       : S.projects
  const certifications = (r.certifications && r.certifications.length) ? r.certifications : S.certifications
  const languages      = (r.languages      && r.languages.length)      ? r.languages      : S.languages
  const interests      = (r.interests      && r.interests.length)      ? r.interests      : S.interests

  const interestColors = ['#7c3aed', '#a855f7', '#6d28d9', '#4f46e5']

  const contactItems = [
    email    && { icon: <Mail size={9} />,      text: email },
    phone    && { icon: <Phone size={9} />,     text: phone },
    location && { icon: <MapPin size={9} />,    text: location },
    website  && { icon: <Globe size={9} />,     text: website },
    linkedin && { icon: <Link2 size={9} />,     text: linkedin },
    github   && { icon: <GitBranch size={9} />, text: github },
  ].filter(Boolean)

  return (
    <div style={{ width: 794, minHeight: 1123, fontFamily, background: '#ffffff', position: 'relative', overflow: 'hidden' }}>

      {/* ── WAVE HEADER ── */}
      <div style={{
        position: 'relative',
        height: 220,
        background: 'linear-gradient(160deg, #1e1b4b 0%, #312e81 40%, #4c1d95 100%)',
        overflow: 'hidden',
      }}>
        {/* Header content — z-index 2, sits above waves */}
        <div style={{ position: 'relative', zIndex: 2, padding: '22px 28px 0 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          {/* Left: name + title + contact */}
          <div style={{ flex: 1, paddingRight: 16 }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: '#ffffff', lineHeight: 1.1, marginBottom: 4 }}>
              {name}
            </div>
            <div style={{ fontSize: 11, color: '#c4b5fd', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
              {jobTitle}
            </div>
            <div style={{ height: 1, background: 'rgba(255,255,255,0.15)', marginBottom: 10, width: '90%' }} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {contactItems.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 4,
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: 20, padding: '3px 8px',
                  color: '#e9d5ff', fontSize: 8,
                }}>
                  <span style={{ opacity: 0.85 }}>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo */}
          {photo && (
            <div style={{
              width: 76, height: 76, borderRadius: '50%',
              border: '3px solid #ffffff',
              overflow: 'hidden', flexShrink: 0,
              boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
            }}>
              <img src={photo} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}
        </div>

        {/* ── 5 SVG WAVE LAYERS (position:absolute, bottom:0) ── */}
        {/* Wave 5 — deepest/back: deep indigo #312e81 */}
        <svg viewBox="0 0 794 120" preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 120, zIndex: 1 }}>
          <path d="M0,60 C200,20 400,80 600,50 C700,30 750,60 794,45 L794,120 L0,120 Z" fill="#312e81" />
        </svg>

        {/* Wave 4 — indigo #4f46e5 */}
        <svg viewBox="0 0 794 120" preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 120, zIndex: 2 }}>
          <path d="M0,70 C150,40 350,90 550,60 C680,40 740,70 794,55 L794,120 L0,120 Z" fill="#4f46e5" />
        </svg>

        {/* Wave 3 — violet #7c3aed */}
        <svg viewBox="0 0 794 120" preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 120, zIndex: 3 }}>
          <path d="M0,80 C180,50 380,95 580,70 C700,50 760,80 794,65 L794,120 L0,120 Z" fill="#7c3aed" />
        </svg>

        {/* Wave 2 — purple #a855f7 */}
        <svg viewBox="0 0 794 120" preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 120, zIndex: 4 }}>
          <path d="M0,88 C160,62 360,100 560,78 C690,60 755,88 794,74 L794,120 L0,120 Z" fill="#a855f7" />
        </svg>

        {/* Wave 1 — front/top: white */}
        <svg viewBox="0 0 794 120" preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 120, zIndex: 5 }}>
          <path d="M0,100 C140,75 320,108 520,88 C670,72 750,98 794,85 L794,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* ── BODY ── */}
      <div style={{ display: 'flex', background: '#ffffff', minHeight: 903, paddingBottom: 40 }}>

        {/* LEFT COLUMN — 62% */}
        <div style={{ width: '62%', padding: '18px 20px 20px 24px', borderRight: '1px solid #ede9fe' }}>

          {/* Summary */}
          {summary && (
            <div style={{ marginBottom: 18 }}>
              <SectionHeader title="Summary" />
              <div style={{
                fontStyle: 'italic', fontSize: 9.5, color: '#374151', lineHeight: 1.65,
                borderLeft: '3px solid #7c3aed', background: '#faf5ff',
                padding: '10px 14px', borderRadius: '0 6px 6px 0',
              }}>
                {summary}
              </div>
            </div>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <SectionHeader title="Experience" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {experience.map((exp, idx) => (
                  <div key={exp.id || idx}>
                    <div style={{ paddingBottom: 12 }}>
                      {/* Company row */}
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                          <div style={{ width: 6, height: 6, background: themeColor, transform: 'rotate(45deg)', flexShrink: 0 }} />
                          <span style={{ fontSize: 12, fontWeight: 700, color: '#1e1b4b' }}>{exp.company}</span>
                        </div>
                        <span style={{
                          fontSize: 8, color: '#7c3aed', background: '#ede9fe',
                          borderRadius: 20, padding: '2px 8px', flexShrink: 0,
                        }}>
                          {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                        </span>
                      </div>
                      {/* Role */}
                      <div style={{ fontSize: 10, color: '#7c3aed', marginLeft: 13, marginBottom: 5 }}>
                        {exp.role}{exp.location ? ` · ${exp.location}` : ''}
                      </div>
                      {/* Description */}
                      {exp.description && (
                        <div style={{ fontSize: 9, color: '#4b5563', lineHeight: 1.6, marginLeft: 13 }}>
                          {exp.description.split('\n').map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </div>
                      )}
                    </div>
                    {idx < experience.length - 1 && (
                      <div style={{ height: 1, background: '#ede9fe', marginBottom: 12 }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <SectionHeader title="Projects" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {projects.map((proj, idx) => (
                  <div key={proj.id || idx} style={{
                    background: '#faf5ff', border: '1px solid #ede9fe',
                    borderLeft: '3px solid #a855f7',
                    borderRadius: '0 6px 6px 0', padding: '9px 12px',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#1e1b4b' }}>{proj.name}</span>
                      {proj.link && (
                        <span style={{ fontSize: 8, color: '#7c3aed', opacity: 0.8 }}>{proj.link}</span>
                      )}
                    </div>
                    {proj.description && (
                      <div style={{ fontSize: 9, color: '#4b5563', lineHeight: 1.55, marginBottom: 4 }}>
                        {proj.description}
                      </div>
                    )}
                    {proj.tech && (
                      <div style={{ fontSize: 8, color: '#7c3aed', fontStyle: 'italic' }}>{proj.tech}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <SectionHeader title="Education" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {education.map((edu, idx) => (
                  <div key={edu.id || idx} style={{
                    background: '#faf5ff', border: '1px solid #ede9fe',
                    borderLeft: '3px solid #7c3aed',
                    borderRadius: '0 6px 6px 0', padding: '9px 12px',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: '#1e1b4b', marginBottom: 2 }}>{edu.degree}</div>
                        <div style={{ fontSize: 9.5, color: '#7c3aed' }}>{edu.school}</div>
                      </div>
                      <span style={{
                        fontSize: 8, color: '#7c3aed', background: '#ede9fe',
                        borderRadius: 20, padding: '2px 8px', flexShrink: 0,
                      }}>
                        {edu.startDate} – {edu.endDate}
                      </span>
                    </div>
                    {(edu.gpa || edu.achievements) && (
                      <div style={{ marginTop: 5, fontSize: 8.5, color: '#6b7280' }}>
                        {edu.gpa && <span>GPA: {edu.gpa}</span>}
                        {edu.gpa && edu.achievements && <span style={{ margin: '0 6px' }}>·</span>}
                        {edu.achievements && <span>{edu.achievements}</span>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN — 38% */}
        <div style={{ width: '38%', padding: '18px 20px 20px 18px' }}>

          {/* Skills */}
          {skills.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <SectionHeader title="Skills" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {skills.map((skill, idx) => (
                  <div key={skill.id || idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                      <span style={{ fontSize: 9.5, color: '#1e1b4b', fontWeight: 600 }}>{skill.name}</span>
                      <span style={{ fontSize: 8, color: '#7c3aed' }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: 5, background: '#ede9fe', borderRadius: 99, overflow: 'hidden' }}>
                      <div style={{
                        height: '100%',
                        width: `${skill.level || 0}%`,
                        background: 'linear-gradient(90deg, #7c3aed, #a855f7, #c084fc)',
                        borderRadius: 99,
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <SectionHeader title="Languages" />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {languages.map((lang, idx) => (
                  <div key={lang.id || idx} style={{
                    background: '#ede9fe', borderRadius: 20,
                    padding: '4px 10px', fontSize: 8.5, color: '#4c1d95',
                  }}>
                    <span style={{ fontWeight: 700 }}>{lang.name}</span>
                    {lang.proficiency && <span style={{ opacity: 0.7 }}> · {lang.proficiency}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <SectionHeader title="Certifications" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {certifications.map((cert, idx) => (
                  <div key={cert.id || idx} style={{
                    background: '#faf5ff', border: '1px solid #ede9fe',
                    borderRadius: 6, padding: '7px 10px',
                  }}>
                    <div style={{ fontSize: 9.5, fontWeight: 700, color: '#1e1b4b', marginBottom: 2 }}>{cert.name}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 8, color: '#7c3aed' }}>{cert.issuer}</span>
                      {cert.date && <span style={{ fontSize: 8, color: '#9ca3af' }}>{cert.date}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interests */}
          {interests.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <SectionHeader title="Interests" />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {interests.map((interest, idx) => (
                  <div key={interest.id || idx} style={{
                    background: interestColors[idx % interestColors.length],
                    borderRadius: 20, padding: '4px 11px',
                    fontSize: 8.5, color: '#ffffff', fontWeight: 600,
                  }}>
                    {interest.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── FOOTER WAVES — position absolute, always at bottom of page ── */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 30, overflow: 'hidden' }}>
        {/* Footer wave 1 — back */}
        <svg viewBox="0 0 794 30" preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 30, zIndex: 1 }}>
          <path d="M0,10 C200,0 400,20 600,8 C700,2 750,14 794,6 L794,30 L0,30 Z" fill="#4f46e5" />
        </svg>
        {/* Footer wave 2 — mid */}
        <svg viewBox="0 0 794 30" preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 30, zIndex: 2 }}>
          <path d="M0,16 C180,6 380,22 580,12 C700,6 760,18 794,12 L794,30 L0,30 Z" fill="#7c3aed" />
        </svg>
        {/* Footer wave 3 — front */}
        <svg viewBox="0 0 794 30" preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 30, zIndex: 3 }}>
          <path d="M0,22 C160,14 340,26 540,18 C680,12 755,24 794,18 L794,30 L0,30 Z" fill="#a855f7" />
        </svg>
      </div>

    </div>
  )
}
