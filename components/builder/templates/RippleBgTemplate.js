import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Dr. Priya Nambiar', jobTitle: 'Senior Consultant — Cardiology',
  email: 'priya@email.com', phone: '+91 98765 33221',
  location: 'Chennai, India', website: 'drpriyanambiar.com',
  linkedin: 'linkedin.com/in/drpriyanambiar', github: 'github.com/drpriyanambiar',
  summary: 'Board-certified cardiologist with 12+ years of clinical experience in interventional cardiology. Performed 2,000+ cardiac catheterizations and 500+ PCIs. Published 18 peer-reviewed papers. Passionate about preventive cardiology and patient education.',
  experience: [
    { id: 'e1', role: 'Senior Consultant Cardiologist', company: 'Apollo Hospitals', location: 'Chennai', startDate: 'Mar 2018', endDate: '', current: true, description: '• Lead cardiologist for 300-bed cardiac care unit\n• Performed 400+ complex PCIs annually with 99.2% success rate\n• Established Chennai\'s first 24/7 STEMI intervention program' },
    { id: 'e2', role: 'Consultant Cardiologist', company: 'Fortis Healthcare', location: 'Bengaluru', startDate: 'Jun 2014', endDate: 'Feb 2018', current: false, description: '• Managed 50+ outpatient consultations weekly\n• Reduced door-to-balloon time by 35% through protocol optimization\n• Trained 12 cardiology fellows' },
    { id: 'e3', role: 'Senior Resident', company: 'AIIMS Delhi', location: 'New Delhi', startDate: 'Jul 2011', endDate: 'May 2014', current: false, description: '• Completed DM Cardiology with distinction\n• Published 8 research papers in indexed journals' },
  ],
  education: [{ id: 'ed1', degree: 'DM Cardiology', school: 'AIIMS New Delhi', startDate: '2011', endDate: '2014', gpa: 'Distinction', achievements: 'Gold Medal · Best Thesis Award' }],
  skills: [{ id: 's1', name: 'Interventional Cardiology', level: 97 }, { id: 's2', name: 'Echocardiography', level: 94 }, { id: 's3', name: 'Clinical Research', level: 88 }, { id: 's4', name: 'Patient Management', level: 96 }, { id: 's5', name: 'Medical Education', level: 85 }, { id: 's6', name: 'Data Analysis', level: 78 }],
  projects: [{ id: 'p1', name: 'STEMI Fast-Track Protocol', description: 'Designed and implemented city-wide STEMI fast-track protocol. Reduced average door-to-balloon time from 92 to 48 minutes across 6 hospitals.', tech: 'Protocol Design, Quality Improvement, Training', link: 'apollohospitals.com/stemi' }],
  certifications: [{ id: 'c1', name: 'FACC — Fellow, ACC', issuer: 'American College of Cardiology', date: '2019-10' }, { id: 'c2', name: 'FESC — Fellow, ESC', issuer: 'European Society of Cardiology', date: '2020-08' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Tamil', proficiency: 'Native' }, { id: 'l3', name: 'Hindi', proficiency: 'Fluent' }],
  interests: [{ id: 'i1', name: 'Medical Research' }, { id: 'i2', name: 'Classical Music' }, { id: 'i3', name: 'Yoga' }, { id: 'i4', name: 'Travel' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

function RBH({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, marginTop: 20 }}>
      <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
        <circle cx="7" cy="7" r="2.5" fill={tc} />
        <circle cx="7" cy="7" r="5" fill="none" stroke={tc} strokeWidth="0.8" opacity="0.5" />
        <circle cx="7" cy="7" r="7" fill="none" stroke={tc} strokeWidth="0.6" opacity="0.25" />
      </svg>
      <span style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#0f172a' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: `${tc}20` }} />
    </div>
  )
}

export default function RippleBgTemplate({ resume }) {
  const r = resume || {}
  const pi = r.personalInfo || r.data?.personalInfo || {}

  const name        = g(pi.name,        S.name)
  const jobTitle    = g(pi.jobTitle,    S.jobTitle)
  const email       = g(pi.email,       S.email)
  const phone       = g(pi.phone,       S.phone)
  const location    = g(pi.location,    S.location)
  const website     = g(pi.website,     S.website)
  const linkedin    = g(pi.linkedin,    S.linkedin)
  const github      = g(pi.github,      S.github)
  const summary     = g(pi.summary,     S.summary)
  const photo       = pi.photo || ''

  const experience     = (r.experience?.length     ? r.experience     : S.experience)
  const education      = (r.education?.length       ? r.education      : S.education)
  const skills         = (r.skills?.length          ? r.skills         : S.skills)
  const projects       = (r.projects?.length        ? r.projects       : S.projects)
  const certifications = (r.certifications?.length  ? r.certifications : S.certifications)
  const languages      = (r.languages?.length       ? r.languages      : S.languages)
  const interests      = (r.interests?.length       ? r.interests      : S.interests)

  const tc = g(r.themeColor, '#0891b2')
  const ff = g(r.fontFamily, "'Inter', 'Helvetica Neue', Arial, sans-serif")

  // SVG arc skill helper
  const r16 = 16
  const circ = 2 * Math.PI * r16 // ≈ 100.5

  const interestColors = ['#0891b2', '#7c3aed', '#059669', '#dc2626', '#d97706', '#db2777', '#2563eb', '#0f766e']

  return (
    <div style={{
      width: 794,
      minHeight: 1123,
      background: '#ffffff',
      fontFamily: ff,
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
    }}>

      {/* ── CONCENTRIC CIRCLE GROUPS (decorative background) ── */}

      {/* Ripple Center 1 — top left */}
      <div style={{ position: 'absolute', top: -80, left: -80, pointerEvents: 'none', zIndex: 0 }}>
        {[240, 180, 120, 70, 30].map((size, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: (240 - size) / 2, left: (240 - size) / 2,
            width: size, height: size,
            borderRadius: '50%',
            border: `1px solid ${tc}`,
            opacity: 0.04 + i * 0.02,
          }} />
        ))}
      </div>

      {/* Ripple Center 2 — top right */}
      <div style={{ position: 'absolute', top: 100, right: -60, pointerEvents: 'none', zIndex: 0 }}>
        {[200, 150, 100, 55].map((size, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: (200 - size) / 2, left: (200 - size) / 2,
            width: size, height: size,
            borderRadius: '50%',
            border: `1px solid ${tc}`,
            opacity: 0.05 + i * 0.02,
          }} />
        ))}
      </div>

      {/* Ripple Center 3 — middle left */}
      <div style={{ position: 'absolute', top: 450, left: -50, pointerEvents: 'none', zIndex: 0 }}>
        {[180, 130, 80, 40].map((size, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: (180 - size) / 2, left: (180 - size) / 2,
            width: size, height: size,
            borderRadius: '50%',
            border: `1px solid ${tc}`,
            opacity: 0.04 + i * 0.02,
          }} />
        ))}
      </div>

      {/* Ripple Center 4 — middle right */}
      <div style={{ position: 'absolute', top: 600, right: -40, pointerEvents: 'none', zIndex: 0 }}>
        {[160, 110, 65, 30].map((size, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: (160 - size) / 2, left: (160 - size) / 2,
            width: size, height: size,
            borderRadius: '50%',
            border: `1px solid ${tc}`,
            opacity: 0.05 + i * 0.02,
          }} />
        ))}
      </div>

      {/* Ripple Center 5 — bottom center */}
      <div style={{ position: 'absolute', bottom: -60, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: 0 }}>
        {[220, 160, 100, 50].map((size, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: (220 - size) / 2, left: (220 - size) / 2,
            width: size, height: size,
            borderRadius: '50%',
            border: `1px solid ${tc}`,
            opacity: 0.04 + i * 0.02,
          }} />
        ))}
      </div>

      {/* ── ALL CONTENT (zIndex: 1) ── */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* ── HEADER ── */}
        <div style={{
          background: '#ffffff',
          padding: '28px 36px 20px',
          borderLeft: `4px solid ${tc}`,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 16,
        }}>
          {/* Left: name + title + contact + summary */}
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: 4 }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#0f172a', lineHeight: 1.1, letterSpacing: '-0.02em' }}>{name}</div>
              <div style={{ fontSize: 10, fontWeight: 600, color: tc, textTransform: 'uppercase', letterSpacing: '0.18em', marginTop: 4 }}>{jobTitle}</div>
            </div>

            {/* Contact row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', marginTop: 10, marginBottom: 12 }}>
              {email && (
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}>
                  <Mail size={9} color={tc} />{email}
                </span>
              )}
              {phone && (
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}>
                  <Phone size={9} color={tc} />{phone}
                </span>
              )}
              {location && (
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}>
                  <MapPin size={9} color={tc} />{location}
                </span>
              )}
              {website && (
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}>
                  <Globe size={9} color={tc} />{website}
                </span>
              )}
              {linkedin && (
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}>
                  <Link2 size={9} color={tc} />{linkedin}
                </span>
              )}
              {github && (
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}>
                  <GitBranch size={9} color={tc} />{github}
                </span>
              )}
            </div>

            {/* Summary */}
            {summary && (
              <div style={{
                background: `${tc}08`,
                borderRadius: 8,
                padding: '9px 12px',
                fontSize: 8.5,
                color: '#334155',
                lineHeight: 1.65,
              }}>
                {summary}
              </div>
            )}
          </div>

          {/* Right: photo */}
          {photo && (
            <div style={{ flexShrink: 0 }}>
              <img
                src={photo}
                alt="Profile"
                style={{
                  width: 68, height: 68,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: `2px solid ${tc}`,
                }}
              />
            </div>
          )}
        </div>

        {/* ── TWO-COLUMN BODY ── */}
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>

          {/* ── LEFT COLUMN (60%) ── */}
          <div style={{ width: '60%', padding: '4px 24px 28px 36px', boxSizing: 'border-box' }}>

            {/* Experience */}
            {experience.length > 0 && (
              <div>
                <RBH title="Experience" tc={tc} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {experience.map(exp => (
                    <div key={exp.id} style={{
                      background: '#ffffff',
                      borderLeft: `3px solid ${tc}`,
                      borderRadius: '0 6px 6px 0',
                      padding: '10px 12px',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                        <div>
                          <div style={{ fontSize: 9.5, fontWeight: 700, color: '#0f172a' }}>{exp.role}</div>
                          <div style={{ fontSize: 8.5, color: tc, fontWeight: 600 }}>{exp.company}{exp.location ? ` · ${exp.location}` : ''}</div>
                        </div>
                        <div style={{ fontSize: 7.5, color: '#94a3b8', whiteSpace: 'nowrap', marginLeft: 8, marginTop: 1 }}>
                          {exp.startDate}{exp.current ? ' – Present' : exp.endDate ? ` – ${exp.endDate}` : ''}
                        </div>
                      </div>
                      {exp.description && (
                        <div style={{ fontSize: 8, color: '#475569', lineHeight: 1.6, marginTop: 5, whiteSpace: 'pre-line' }}>
                          {exp.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects */}
            {projects.length > 0 && (
              <div>
                <RBH title="Projects" tc={tc} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {projects.map(proj => (
                    <div key={proj.id} style={{
                      background: `${tc}06`,
                      borderRadius: 6,
                      padding: '10px 12px',
                      border: `1px solid ${tc}14`,
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
                        <div style={{ fontSize: 9.5, fontWeight: 700, color: '#0f172a' }}>{proj.name}</div>
                        {proj.link && (
                          <span style={{ fontSize: 7.5, color: tc, display: 'flex', alignItems: 'center', gap: 3 }}>
                            <Link2 size={8} />{proj.link}
                          </span>
                        )}
                      </div>
                      {proj.description && (
                        <div style={{ fontSize: 8, color: '#475569', lineHeight: 1.6, marginBottom: 4 }}>{proj.description}</div>
                      )}
                      {proj.tech && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                          {proj.tech.split(',').map((t, i) => (
                            <span key={i} style={{
                              fontSize: 7, padding: '2px 6px', borderRadius: 4,
                              background: `${tc}12`, color: tc, fontWeight: 600,
                            }}>{t.trim()}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {education.length > 0 && (
              <div>
                <RBH title="Education" tc={tc} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {education.map(edu => (
                    <div key={edu.id} style={{
                      background: '#ffffff',
                      borderLeft: `3px solid ${tc}`,
                      borderRadius: '0 6px 6px 0',
                      padding: '10px 12px',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <div style={{ fontSize: 9.5, fontWeight: 700, color: '#0f172a' }}>{edu.degree}</div>
                          <div style={{ fontSize: 8.5, color: tc, fontWeight: 600 }}>{edu.school}</div>
                        </div>
                        <div style={{ fontSize: 7.5, color: '#94a3b8', whiteSpace: 'nowrap', marginLeft: 8 }}>
                          {edu.startDate}{edu.endDate ? ` – ${edu.endDate}` : ''}
                        </div>
                      </div>
                      {(edu.gpa || edu.achievements) && (
                        <div style={{ fontSize: 7.5, color: '#64748b', marginTop: 4 }}>
                          {edu.gpa && <span style={{ marginRight: 8 }}>GPA: {edu.gpa}</span>}
                          {edu.achievements && <span>{edu.achievements}</span>}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* ── RIGHT COLUMN (40%) ── */}
          <div style={{
            width: '40%',
            background: '#f8fafc',
            padding: '4px 28px 28px 20px',
            boxSizing: 'border-box',
            minHeight: 900,
          }}>

            {/* Skills — circular arc indicators */}
            {skills.length > 0 && (
              <div>
                <RBH title="Skills" tc={tc} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 8px' }}>
                  {skills.map(skill => {
                    const pct = Math.min(100, Math.max(0, skill.level || 0))
                    const filled = (pct / 100) * circ
                    const gap = circ - filled
                    return (
                      <div key={skill.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                        {/* SVG arc circle */}
                        <div style={{ position: 'relative', width: 40, height: 40 }}>
                          <svg width="40" height="40" viewBox="0 0 40 40" style={{ transform: 'rotate(-90deg)' }}>
                            {/* Track */}
                            <circle
                              cx="20" cy="20" r={r16}
                              fill="none"
                              stroke={`${tc}12`}
                              strokeWidth="3"
                            />
                            {/* Progress */}
                            <circle
                              cx="20" cy="20" r={r16}
                              fill="none"
                              stroke={tc}
                              strokeWidth="3"
                              strokeDasharray={`${filled} ${gap}`}
                              strokeLinecap="round"
                            />
                          </svg>
                          {/* Percentage label */}
                          <div style={{
                            position: 'absolute', inset: 0,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 7, fontWeight: 700, color: tc,
                          }}>
                            {pct}%
                          </div>
                        </div>
                        <div style={{ fontSize: 7.5, fontWeight: 600, color: '#334155', textAlign: 'center', lineHeight: 1.3 }}>
                          {skill.name}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Languages */}
            {languages.length > 0 && (
              <div>
                <RBH title="Languages" tc={tc} />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {languages.map(lang => (
                    <div key={lang.id} style={{
                      padding: '4px 10px',
                      borderRadius: 20,
                      background: `${tc}10`,
                      border: `1px solid ${tc}25`,
                      fontSize: 8,
                      color: '#334155',
                      fontWeight: 600,
                    }}>
                      {lang.name}
                      {lang.proficiency && (
                        <span style={{ color: tc, marginLeft: 4, fontWeight: 400 }}>· {lang.proficiency}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {certifications.length > 0 && (
              <div>
                <RBH title="Certifications" tc={tc} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {certifications.map(cert => (
                    <div key={cert.id} style={{
                      background: '#ffffff',
                      borderRadius: 6,
                      padding: '8px 10px',
                      border: `1px solid ${tc}18`,
                      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                    }}>
                      <div style={{ fontSize: 8.5, fontWeight: 700, color: '#0f172a' }}>{cert.name}</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
                        <div style={{ fontSize: 7.5, color: '#64748b' }}>{cert.issuer}</div>
                        {cert.date && (
                          <div style={{ fontSize: 7, color: tc, fontWeight: 600 }}>
                            {cert.date.slice(0, 7)}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Interests */}
            {interests.length > 0 && (
              <div>
                <RBH title="Interests" tc={tc} />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {interests.map((interest, idx) => (
                    <div key={interest.id || idx} style={{
                      padding: '4px 10px',
                      borderRadius: 20,
                      background: `${interestColors[idx % interestColors.length]}15`,
                      border: `1px solid ${interestColors[idx % interestColors.length]}30`,
                      fontSize: 8,
                      color: interestColors[idx % interestColors.length],
                      fontWeight: 600,
                    }}>
                      {interest.name}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
