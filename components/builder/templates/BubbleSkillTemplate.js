import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Aryan Gupta', jobTitle: 'Senior Data Engineer',
  email: 'aryan@email.com', phone: '+91 98765 22334',
  location: 'Pune, India', website: 'aryangupta.dev',
  linkedin: 'linkedin.com/in/aryangupta', github: 'github.com/aryangupta',
  summary: 'Data engineer with 7+ years building robust data pipelines and analytics platforms. Processed 10TB+ daily data at Flipkart and Paytm. Expert in distributed systems, real-time streaming, and cloud data warehousing.',
  experience: [
    { id: 'e1', role: 'Senior Data Engineer', company: 'Flipkart', location: 'Bengaluru', startDate: 'Feb 2021', endDate: '', current: true, description: '• Built real-time data pipeline processing 10TB+ daily across 50+ microservices\n• Reduced data latency from 4 hours to 8 minutes using Apache Flink\n• Led migration of 200+ Hive jobs to Spark, saving ₹2Cr annually' },
    { id: 'e2', role: 'Data Engineer', company: 'Paytm', location: 'Noida', startDate: 'Mar 2018', endDate: 'Jan 2021', current: false, description: '• Designed data warehouse serving 300M+ user analytics\n• Built fraud detection pipeline processing 5M transactions/day\n• Reduced query time by 80% through partitioning and indexing' },
    { id: 'e3', role: 'Junior Data Engineer', company: 'Mu Sigma', location: 'Bengaluru', startDate: 'Jul 2016', endDate: 'Feb 2018', current: false, description: '• Built ETL pipelines for Fortune 500 clients\n• Automated 40+ manual reporting processes' },
  ],
  education: [{ id: 'ed1', degree: 'B.Tech Computer Science', school: 'BITS Pilani', startDate: '2012', endDate: '2016', gpa: '8.9/10', achievements: 'Data Science Club Founder' }],
  skills: [
    { id: 's1', name: 'Apache Spark', level: 95 }, { id: 's2', name: 'Python', level: 97 },
    { id: 's3', name: 'SQL', level: 93 }, { id: 's4', name: 'Kafka', level: 88 },
    { id: 's5', name: 'Airflow', level: 85 }, { id: 's6', name: 'AWS', level: 82 },
    { id: 's7', name: 'dbt', level: 78 }, { id: 's8', name: 'Flink', level: 80 },
  ],
  projects: [{ id: 'p1', name: 'Real-Time Fraud Detection', description: 'Built streaming fraud detection system processing 5M transactions/day with <100ms latency. Reduced fraud losses by 35%.', tech: 'Kafka, Flink, Redis, Python', link: 'github.com/aryangupta/fraud-detect' }],
  certifications: [{ id: 'c1', name: 'AWS Data Analytics Specialty', issuer: 'Amazon', date: '2023-04' }, { id: 'c2', name: 'Databricks Certified', issuer: 'Databricks', date: '2022-08' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
  interests: [{ id: 'i1', name: 'Open Source' }, { id: 'i2', name: 'Competitive Programming' }, { id: 'i3', name: 'Cricket' }, { id: 'i4', name: 'Gaming' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

function BSH({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, marginTop: 20 }}>
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: tc, boxShadow: `0 0 0 3px ${tc}20`, flexShrink: 0 }} />
      <span style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#0f172a' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: `${tc}20` }} />
    </div>
  )
}

function SkillBubble({ name, level, tc }) {
  const size = Math.round(28 + (level / 100) * 36)
  const ring1 = size + 10
  const ring2 = size + 20
  return (
    <div style={{ position: 'relative', width: ring2, height: ring2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <div style={{ position: 'absolute', width: ring2, height: ring2, borderRadius: '50%', border: `1px solid ${tc}`, opacity: 0.15 }} />
      <div style={{ position: 'absolute', width: ring1, height: ring1, borderRadius: '50%', border: `1.5px solid ${tc}`, opacity: 0.3 }} />
      <div style={{ width: size, height: size, borderRadius: '50%', background: `linear-gradient(135deg, ${tc}, ${tc}cc)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: `0 2px 8px ${tc}40`, position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: Math.max(6, size * 0.14), fontWeight: 800, color: '#fff', textAlign: 'center', lineHeight: 1.2, padding: '0 3px' }}>{name}</span>
        <span style={{ fontSize: Math.max(5.5, size * 0.12), color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>{level}%</span>
      </div>
    </div>
  )
}

const pillColors = ['#fef3c7', '#dbeafe', '#dcfce7', '#fce7f3', '#ede9fe', '#ffedd5']
const pillText   = ['#92400e', '#1e40af', '#166534', '#9d174d', '#5b21b6', '#9a3412']

export default function BubbleSkillTemplate({ resume }) {
  const r = resume || {}
  const pi = r.personalInfo || r.data?.personalInfo || {}

  const name     = g(pi.name,     S.name)
  const jobTitle = g(pi.jobTitle, S.jobTitle)
  const email    = g(pi.email,    S.email)
  const phone    = g(pi.phone,    S.phone)
  const location = g(pi.location, S.location)
  const website  = g(pi.website,  S.website)
  const linkedin = g(pi.linkedin, S.linkedin)
  const github   = g(pi.github,   S.github)
  const summary  = g(pi.summary,  S.summary)
  const photo    = pi.photo || ''

  const experience     = r.experience?.length     ? r.experience     : S.experience
  const education      = r.education?.length       ? r.education      : S.education
  const skills         = r.skills?.length          ? r.skills         : S.skills
  const projects       = r.projects?.length        ? r.projects       : S.projects
  const certifications = r.certifications?.length  ? r.certifications : S.certifications
  const languages      = r.languages?.length       ? r.languages      : S.languages
  const interests      = r.interests?.length       ? r.interests      : S.interests

  const tc = g(r.themeColor, '#0891b2')
  const ff = g(r.fontFamily, "'Inter', 'Helvetica Neue', Arial, sans-serif")

  return (
    <div style={{ width: 794, minHeight: 1123, background: '#ffffff', fontFamily: ff, fontSize: 10, color: '#1e293b', position: 'relative', overflow: 'hidden' }}>

      {/* Top gradient bar */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${tc}, ${tc}80, transparent)` }} />

      {/* HEADER */}
      <div style={{ background: '#ffffff', padding: '28px 36px 20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, color: '#0f172a', margin: '0 0 4px', lineHeight: 1.1, letterSpacing: '-0.5px' }}>{name}</h1>
          <p style={{ fontSize: 13, fontWeight: 600, color: tc, margin: '0 0 10px', letterSpacing: '0.02em' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', marginBottom: 12 }}>
            {email    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><Mail size={9} color={tc} />{email}</span>}
            {phone    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><Phone size={9} color={tc} />{phone}</span>}
            {location && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><MapPin size={9} color={tc} />{location}</span>}
            {website  && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><Globe size={9} color={tc} />{website}</span>}
            {linkedin && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><Link2 size={9} color={tc} />{linkedin}</span>}
            {github   && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><GitBranch size={9} color={tc} />{github}</span>}
          </div>
          {summary && (
            <div style={{ background: `${tc}08`, borderLeft: `3px solid ${tc}`, borderRadius: '0 6px 6px 0', padding: '8px 12px' }}>
              <p style={{ fontSize: 8.5, color: '#334155', lineHeight: 1.6, margin: 0 }}>{summary}</p>
            </div>
          )}
        </div>
        {photo && (
          <div style={{ flexShrink: 0 }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', overflow: 'hidden', border: `3px solid ${tc}30`, boxShadow: `0 4px 16px ${tc}25` }}>
              <img src={photo} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        )}
      </div>

      {/* BODY */}
      <div style={{ display: 'flex', minHeight: 860 }}>

        {/* LEFT 58% */}
        <div style={{ width: '58%', padding: '4px 28px 28px 36px', borderRight: `1px solid ${tc}15` }}>

          {/* Experience */}
          {experience.length > 0 && (
            <div>
              <BSH title="Experience" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {experience.map((exp, i) => (
                  <div key={exp.id || i} style={{ display: 'flex', gap: 12 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{ width: 9, height: 9, borderRadius: '50%', background: exp.current ? tc : `${tc}60`, border: `2px solid ${exp.current ? tc : `${tc}40`}`, boxShadow: exp.current ? `0 0 0 3px ${tc}20` : 'none', marginTop: 2, flexShrink: 0 }} />
                      {i < experience.length - 1 && <div style={{ width: 1, flex: 1, background: `${tc}20`, marginTop: 3 }} />}
                    </div>
                    <div style={{ flex: 1, paddingBottom: 4 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                        <div>
                          <span style={{ fontSize: 10, fontWeight: 700, color: '#0f172a' }}>{exp.role}</span>
                          <span style={{ fontSize: 9, color: tc, fontWeight: 600, marginLeft: 6 }}>{exp.company}</span>
                          {exp.location && <span style={{ fontSize: 8, color: '#94a3b8', marginLeft: 4 }}>· {exp.location}</span>}
                        </div>
                        <span style={{ fontSize: 7.5, color: '#94a3b8', whiteSpace: 'nowrap', marginLeft: 8 }}>
                          {exp.startDate}{exp.current ? ' – Present' : exp.endDate ? ` – ${exp.endDate}` : ''}
                        </span>
                      </div>
                      {exp.description && <div style={{ fontSize: 8.5, color: '#475569', lineHeight: 1.65, whiteSpace: 'pre-line' }}>{exp.description}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <div>
              <BSH title="Projects" tc={tc} />
              {projects.map((proj, i) => (
                <div key={proj.id || i} style={{ background: `${tc}06`, border: `1px solid ${tc}15`, borderRadius: 8, padding: '10px 12px', marginBottom: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#0f172a' }}>{proj.name}</span>
                    {proj.link && <span style={{ fontSize: 7.5, color: tc }}>{proj.link}</span>}
                  </div>
                  {proj.description && <p style={{ fontSize: 8.5, color: '#475569', lineHeight: 1.6, margin: '0 0 5px' }}>{proj.description}</p>}
                  {proj.tech && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {proj.tech.split(',').map((t, ti) => (
                        <span key={ti} style={{ fontSize: 7.5, background: `${tc}15`, color: tc, padding: '2px 7px', borderRadius: 10, fontWeight: 600 }}>{t.trim()}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div>
              <BSH title="Education" tc={tc} />
              {education.map((edu, i) => (
                <div key={edu.id || i} style={{ background: '#f8fafc', border: `1px solid ${tc}15`, borderRadius: 8, padding: '10px 12px', marginBottom: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <span style={{ fontSize: 10, fontWeight: 700, color: '#0f172a' }}>{edu.degree}</span>
                      <p style={{ fontSize: 9, color: tc, fontWeight: 600, margin: '2px 0 0' }}>{edu.school}</p>
                    </div>
                    <span style={{ fontSize: 7.5, color: '#94a3b8', whiteSpace: 'nowrap' }}>{edu.startDate}{edu.endDate ? ` – ${edu.endDate}` : ''}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12, marginTop: 5 }}>
                    {edu.gpa && <span style={{ fontSize: 8, color: '#64748b' }}>GPA: <strong style={{ color: '#0f172a' }}>{edu.gpa}</strong></span>}
                    {edu.achievements && <span style={{ fontSize: 8, color: '#64748b' }}>{edu.achievements}</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT 42% */}
        <div style={{ width: '42%', background: '#f0f9ff', padding: '4px 28px 28px 24px' }}>

          {/* SKILLS — STAR FEATURE */}
          {skills.length > 0 && (
            <div>
              <BSH title="Skills" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', padding: '4px 0 8px' }}>
                {skills.map((sk, i) => (
                  <SkillBubble key={sk.id || i} name={sk.name} level={sk.level || 50} tc={tc} />
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6, padding: '5px 8px', background: `${tc}08`, borderRadius: 6 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: tc, opacity: 0.5 }} />
                <span style={{ fontSize: 7, color: '#64748b', fontStyle: 'italic' }}>Circle size reflects proficiency level</span>
              </div>
            </div>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <div>
              <BSH title="Languages" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {languages.map((lang, i) => (
                  <div key={lang.id || i} style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#ffffff', border: `1px solid ${tc}25`, borderRadius: 20, padding: '4px 10px' }}>
                    <span style={{ fontSize: 8.5, fontWeight: 700, color: '#0f172a' }}>{lang.name}</span>
                    {lang.proficiency && <span style={{ fontSize: 7.5, color: tc, fontWeight: 600 }}>· {lang.proficiency}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <div>
              <BSH title="Certifications" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {certifications.map((cert, i) => (
                  <div key={cert.id || i} style={{ background: '#ffffff', border: `1px solid ${tc}20`, borderRadius: 7, padding: '8px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <p style={{ fontSize: 8.5, fontWeight: 700, color: '#0f172a', margin: 0, lineHeight: 1.3 }}>{cert.name}</p>
                      {cert.issuer && <p style={{ fontSize: 7.5, color: tc, margin: '2px 0 0', fontWeight: 600 }}>{cert.issuer}</p>}
                    </div>
                    {cert.date && <span style={{ fontSize: 7, color: '#94a3b8', whiteSpace: 'nowrap', marginLeft: 8 }}>{cert.date.slice(0, 7)}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interests */}
          {interests.length > 0 && (
            <div>
              <BSH title="Interests" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {interests.map((int, i) => {
                  const ci = i % pillColors.length
                  return (
                    <span key={int.id || i} style={{ fontSize: 8, fontWeight: 700, background: pillColors[ci], color: pillText[ci], padding: '4px 10px', borderRadius: 20 }}>
                      {int.name}
                    </span>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer accent */}
      <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${tc}60, ${tc}, ${tc}60, transparent)` }} />
    </div>
  )
}
