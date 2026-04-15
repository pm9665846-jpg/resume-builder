import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Ananya Krishnan', jobTitle: 'Senior Data Scientist & ML Engineer',
  email: 'ananya@email.com', phone: '+91 99887 76655',
  location: 'Bengaluru, India', website: 'ananyak.ai',
  linkedin: 'linkedin.com/in/ananyak', github: 'github.com/ananyak',
  summary: 'Data scientist with 7+ years turning complex datasets into actionable insights. Built ML models deployed to 50M+ users at Zomato and Meesho. Kaggle Master with top 0.1% ranking. Passionate about responsible AI and making ML accessible.',
  experience: [
    { id: 'e1', role: 'Senior Data Scientist', company: 'Zomato', location: 'Bengaluru', startDate: 'Mar 2021', endDate: '', current: true, description: '• Built food recommendation engine serving 50M+ daily active users\n• Reduced delivery ETA prediction error by 38% using LSTM models\n• Led ML platform team of 8 engineers' },
    { id: 'e2', role: 'Data Scientist', company: 'Meesho', location: 'Bengaluru', startDate: 'Jun 2018', endDate: 'Feb 2021', current: false, description: '• Developed supplier fraud detection model saving ₹12Cr annually\n• Built price elasticity models improving GMV by 22%' },
    { id: 'e3', role: 'ML Engineer', company: 'Fractal Analytics', location: 'Mumbai', startDate: 'Jul 2016', endDate: 'May 2018', current: false, description: '• Delivered predictive analytics solutions for FMCG clients\n• Built churn prediction models with 91% accuracy' },
  ],
  education: [{ id: 'ed1', degree: 'M.Tech Data Science', school: 'IISc Bengaluru', startDate: '2014', endDate: '2016', gpa: '9.1/10', achievements: 'Best Thesis Award' }],
  skills: [{ id: 's1', name: 'Python / R', level: 96 }, { id: 's2', name: 'Machine Learning', level: 94 }, { id: 's3', name: 'Deep Learning', level: 88 }, { id: 's4', name: 'SQL / Spark', level: 90 }, { id: 's5', name: 'TensorFlow / PyTorch', level: 85 }, { id: 's6', name: 'Data Visualization', level: 92 }],
  projects: [{ id: 'p1', name: 'FoodRec Engine', description: 'Personalized food recommendation system using collaborative filtering + content-based hybrid. Increased order conversion by 18%.', tech: 'Python, TensorFlow, Redis, Kafka', link: 'github.com/ananyak/foodrec' }],
  certifications: [{ id: 'c1', name: 'Google ML Engineer', issuer: 'Google Cloud', date: '2023-04' }, { id: 'c2', name: 'AWS ML Specialty', issuer: 'Amazon', date: '2022-09' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }, { id: 'l3', name: 'Kannada', proficiency: 'Native' }],
  interests: [{ id: 'i1', name: 'Kaggle' }, { id: 'i2', name: 'Research Papers' }, { id: 'i3', name: 'Badminton' }, { id: 'i4', name: 'Classical Music' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

function WaveSep({ topColor, bottomColor, flip = false }) {
  return (
    <div style={{ lineHeight: 0, background: bottomColor }}>
      <svg viewBox="0 0 794 40" style={{ display: 'block', width: '100%', height: 40 }} preserveAspectRatio="none">
        <path
          d={flip
            ? "M0,0 L794,0 L794,20 C650,40 500,10 350,25 C200,40 100,15 0,30 Z"
            : "M0,20 C150,40 300,5 450,25 C600,45 700,10 794,20 L794,40 L0,40 Z"
          }
          fill={topColor}
        />
      </svg>
    </div>
  )
}

function SectionLabel({ title, color = '#0891b2' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <div style={{ width: 3, height: 18, background: color, borderRadius: 2 }} />
      <span style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color }}>
        {title}
      </span>
    </div>
  )
}

export default function MidwaveTemplate({ resume }) {
  const r = resume || {}
  const pi = r.personalInfo || r.data?.personalInfo || {}

  const name        = g(pi.name,       S.name)
  const jobTitle    = g(pi.jobTitle,   S.jobTitle)
  const email       = g(pi.email,      S.email)
  const phone       = g(pi.phone,      S.phone)
  const location    = g(pi.location,   S.location)
  const website     = g(pi.website,    S.website)
  const linkedin    = g(pi.linkedin,   S.linkedin)
  const github      = g(pi.github,     S.github)
  const summary     = g(pi.summary,    S.summary)
  const photo       = pi.photo || ''

  const experience     = (r.experience     && r.experience.length)     ? r.experience     : S.experience
  const education      = (r.education      && r.education.length)      ? r.education      : S.education
  const skills         = (r.skills         && r.skills.length)         ? r.skills         : S.skills
  const projects       = (r.projects       && r.projects.length)       ? r.projects       : S.projects
  const certifications = (r.certifications && r.certifications.length) ? r.certifications : S.certifications
  const languages      = (r.languages      && r.languages.length)      ? r.languages      : S.languages
  const interests      = (r.interests      && r.interests.length)      ? r.interests      : S.interests

  const themeColor  = g(r.themeColor,  '#0891b2')
  const fontFamily  = g(r.fontFamily,  "'Inter', 'Helvetica Neue', Arial, sans-serif")

  // Derived palette from themeColor (use fixed cyan palette as base, themeColor for accents)
  const primary   = themeColor
  const secondary = '#0e7490'
  const accent1   = '#06b6d4'
  const accent2   = '#67e8f9'
  const band1bg   = '#f0f9ff'
  const band2bg   = '#ecfeff'
  const white     = '#ffffff'

  const interestColors = [primary, secondary, accent1, '#0284c7']

  return (
    <div style={{
      width: 794,
      minHeight: 1123,
      fontFamily,
      background: white,
      overflow: 'hidden',
      position: 'relative',
    }}>

      {/* ── BAND 1: HEADER ── */}
      <div style={{
        background: `linear-gradient(135deg, ${secondary} 0%, ${primary} 50%, ${accent1} 100%)`,
        padding: '28px 36px 20px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          {/* Left: name / title / contact */}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: white, lineHeight: 1.1, marginBottom: 4 }}>
              {name}
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#a5f3fc', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 14 }}>
              {jobTitle}
            </div>
            {/* Contact pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {email && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 20, padding: '3px 10px' }}>
                  <Mail size={9} color={white} />
                  <span style={{ fontSize: 8.5, color: white }}>{email}</span>
                </div>
              )}
              {phone && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 20, padding: '3px 10px' }}>
                  <Phone size={9} color={white} />
                  <span style={{ fontSize: 8.5, color: white }}>{phone}</span>
                </div>
              )}
              {location && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 20, padding: '3px 10px' }}>
                  <MapPin size={9} color={white} />
                  <span style={{ fontSize: 8.5, color: white }}>{location}</span>
                </div>
              )}
              {website && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 20, padding: '3px 10px' }}>
                  <Globe size={9} color={white} />
                  <span style={{ fontSize: 8.5, color: white }}>{website}</span>
                </div>
              )}
              {linkedin && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 20, padding: '3px 10px' }}>
                  <Link2 size={9} color={white} />
                  <span style={{ fontSize: 8.5, color: white }}>{linkedin}</span>
                </div>
              )}
              {github && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 20, padding: '3px 10px' }}>
                  <GitBranch size={9} color={white} />
                  <span style={{ fontSize: 8.5, color: white }}>{github}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right: circular photo */}
          {photo && (
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              border: `3px solid rgba(255,255,255,0.5)`,
              overflow: 'hidden', flexShrink: 0,
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            }}>
              <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}
          {!photo && (
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              border: `3px solid rgba(255,255,255,0.35)`,
              background: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ fontSize: 24, fontWeight: 900, color: white }}>
                {name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Wave: header → white */}
      <WaveSep topColor={primary} bottomColor={white} />

      {/* ── BAND 2: SUMMARY ── */}
      <div style={{ background: white, padding: '20px 36px 16px' }}>
        <SectionLabel title="Professional Summary" color={primary} />
        <p style={{ fontSize: 9.5, color: '#374151', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
          {summary}
        </p>
      </div>

      {/* Wave: white → cyan-50 */}
      <WaveSep topColor={white} bottomColor={band2bg} flip />

      {/* ── BAND 3: EXPERIENCE ── */}
      <div style={{ background: band2bg, padding: '20px 36px 16px' }}>
        <SectionLabel title="Work Experience" color={primary} />
        {experience.map((exp, idx) => (
          <div key={exp.id || idx}>
            {idx > 0 && (
              <div style={{ borderTop: '1px dashed #a5f3fc', margin: '10px 0' }} />
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: secondary }}>{exp.company}</div>
                <div style={{ fontSize: 10, color: primary, fontWeight: 500 }}>{exp.role}</div>
                {exp.location && (
                  <div style={{ fontSize: 8.5, color: '#6b7280', display: 'flex', alignItems: 'center', gap: 3, marginTop: 1 }}>
                    <MapPin size={7} color="#9ca3af" />
                    {exp.location}
                  </div>
                )}
              </div>
              <div style={{
                background: primary, color: white,
                borderRadius: 20, padding: '2px 9px',
                fontSize: 8, fontWeight: 600, whiteSpace: 'nowrap', flexShrink: 0,
              }}>
                {exp.startDate}{exp.current ? ' – Present' : exp.endDate ? ` – ${exp.endDate}` : ''}
              </div>
            </div>
            {exp.description && (
              <div style={{ fontSize: 9, color: '#374151', lineHeight: 1.65, marginTop: 4, whiteSpace: 'pre-line' }}>
                {exp.description}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Wave: cyan-50 → white */}
      <WaveSep topColor={band2bg} bottomColor={white} />

      {/* ── BAND 4: SKILLS + EDUCATION (two columns) ── */}
      <div style={{ background: white, padding: '20px 36px 16px' }}>
        <div style={{ display: 'flex', gap: 24 }}>
          {/* Left 55%: Skills */}
          <div style={{ flex: '0 0 55%' }}>
            <SectionLabel title="Skills" color={primary} />
            {skills.map((sk, idx) => (
              <div key={sk.id || idx} style={{ marginBottom: 9 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 9, fontWeight: 600, color: '#374151' }}>{sk.name}</span>
                  <span style={{ fontSize: 8, color: primary, fontWeight: 700 }}>{sk.level}%</span>
                </div>
                <div style={{ height: 6, borderRadius: 99, background: '#e0f2fe', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: `${sk.level || 0}%`,
                    borderRadius: 99,
                    background: `linear-gradient(90deg, ${primary}, ${accent1}, ${accent2})`,
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Right 45%: Education */}
          <div style={{ flex: '0 0 45%' }}>
            <SectionLabel title="Education" color={primary} />
            {education.map((ed, idx) => (
              <div key={ed.id || idx} style={{
                background: band1bg,
                border: `1px solid #bae6fd`,
                borderRadius: 8,
                padding: '10px 12px',
                marginBottom: 10,
              }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: secondary, marginBottom: 2 }}>{ed.degree}</div>
                <div style={{ fontSize: 9, color: primary, fontWeight: 600, marginBottom: 2 }}>{ed.school}</div>
                {(ed.startDate || ed.endDate) && (
                  <div style={{ fontSize: 8, color: '#6b7280', marginBottom: 2 }}>
                    {ed.startDate}{ed.endDate ? ` – ${ed.endDate}` : ''}
                  </div>
                )}
                {ed.gpa && (
                  <div style={{ fontSize: 8, color: '#374151' }}>GPA: <strong>{ed.gpa}</strong></div>
                )}
                {ed.achievements && (
                  <div style={{ fontSize: 8, color: '#6b7280', marginTop: 2, fontStyle: 'italic' }}>{ed.achievements}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave: white → sky-50 */}
      <WaveSep topColor={white} bottomColor={band1bg} flip />

      {/* ── BAND 5: PROJECTS + CERTS ── page break before this in PDF */}
      <div data-page-break="true" style={{ background: band1bg, padding: '20px 36px 16px', pageBreakBefore: 'always', breakBefore: 'page' }}>
        {/* Projects */}
        <SectionLabel title="Projects" color={primary} />
        {projects.map((proj, idx) => (
          <div key={proj.id || idx} style={{
            background: white,
            border: `1px solid #bae6fd`,
            borderLeft: `3px solid ${primary}`,
            borderRadius: 6,
            padding: '10px 14px',
            marginBottom: 10,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: secondary }}>{proj.name}</div>
              {proj.link && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Link2 size={8} color={primary} />
                  <span style={{ fontSize: 7.5, color: primary }}>{proj.link}</span>
                </div>
              )}
            </div>
            {proj.description && (
              <div style={{ fontSize: 8.5, color: '#374151', lineHeight: 1.6, marginBottom: 4 }}>{proj.description}</div>
            )}
            {proj.tech && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {proj.tech.split(',').map((t, i) => (
                  <span key={i} style={{
                    fontSize: 7.5, background: '#e0f2fe', color: primary,
                    borderRadius: 4, padding: '1px 6px', fontWeight: 600,
                  }}>{t.trim()}</span>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <>
            <SectionLabel title="Certifications" color={primary} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {certifications.map((cert, idx) => (
                <div key={cert.id || idx} style={{
                  background: '#e0f2fe', color: primary,
                  borderRadius: 20, padding: '4px 12px',
                  fontSize: 8.5, fontWeight: 600,
                  display: 'flex', alignItems: 'center', gap: 5,
                }}>
                  <span>{cert.name}</span>
                  {cert.issuer && <span style={{ color: secondary, fontWeight: 400 }}>· {cert.issuer}</span>}
                  {cert.date && <span style={{ color: '#6b7280', fontWeight: 400 }}>· {cert.date}</span>}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Wave: sky-50 → white */}
      <WaveSep topColor={band1bg} bottomColor={white} />

      {/* ── BAND 6: LANGUAGES + INTERESTS ── */}
      <div style={{ background: white, padding: '20px 36px 16px' }}>
        <div style={{ display: 'flex', gap: 32 }}>
          {/* Languages */}
          <div style={{ flex: 1 }}>
            <SectionLabel title="Languages" color={primary} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {languages.map((lang, idx) => (
                <div key={lang.id || idx} style={{
                  background: '#e0f2fe', borderRadius: 20,
                  padding: '4px 12px', display: 'flex', alignItems: 'center', gap: 5,
                }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: primary }}>{lang.name}</span>
                  {lang.proficiency && (
                    <span style={{ fontSize: 8, color: secondary }}>· {lang.proficiency}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div style={{ flex: 1 }}>
            <SectionLabel title="Interests" color={primary} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {interests.map((int, idx) => (
                <div key={int.id || idx} style={{
                  background: interestColors[idx % interestColors.length],
                  borderRadius: 20, padding: '4px 12px',
                }}>
                  <span style={{ fontSize: 9, fontWeight: 600, color: white }}>{int.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave footer: white → primary */}
      <WaveSep topColor={white} bottomColor={primary} flip />

      {/* ── FOOTER ── */}
      <div style={{
        background: primary,
        height: 20,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em' }}>
          {name} · {email}
        </span>
      </div>

    </div>
  )
}
