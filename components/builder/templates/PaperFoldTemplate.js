import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Priya Menon', jobTitle: 'Senior Product Designer',
  email: 'priya@email.com', phone: '+91 98765 33445',
  location: 'Bengaluru, India', website: 'priyamenon.design',
  linkedin: 'linkedin.com/in/priyamenon', github: 'github.com/priyamenon',
  summary: 'Product designer with 8+ years crafting intuitive digital experiences for fintech and healthtech. Led design for products used by 20M+ users. Expert in design systems, accessibility, and 0-to-1 product design.',
  experience: [
    { id: 'e1', role: 'Senior Product Designer', company: 'PhonePe', location: 'Bengaluru', startDate: 'Feb 2021', endDate: '', current: true, description: '• Led redesign of PhonePe\'s core payment flow — 34% increase in conversion\n• Built PhonePe Design System with 300+ components\n• Managed team of 6 designers across 4 product squads' },
    { id: 'e2', role: 'Product Designer', company: 'Practo', location: 'Bengaluru', startDate: 'May 2018', endDate: 'Jan 2021', current: false, description: '• Designed doctor consultation flow used by 5M+ patients\n• Reduced appointment booking time by 55% through UX improvements\n• Won Red Dot Design Award 2020' },
    { id: 'e3', role: 'UI/UX Designer', company: 'Freshworks', location: 'Chennai', startDate: 'Jul 2016', endDate: 'Apr 2018', current: false, description: '• Designed Freshdesk\'s mobile app — 4.7★ App Store rating\n• Created onboarding flow reducing time-to-value by 40%' },
  ],
  education: [{ id: 'ed1', degree: 'BDes Interaction Design', school: 'NID Ahmedabad', startDate: '2012', endDate: '2016', gpa: 'Distinction', achievements: 'Best Portfolio · NID Gold Medal' }],
  skills: [{ id: 's1', name: 'Figma', level: 98 }, { id: 's2', name: 'Design Systems', level: 95 }, { id: 's3', name: 'User Research', level: 90 }, { id: 's4', name: 'Prototyping', level: 92 }, { id: 's5', name: 'Accessibility', level: 88 }, { id: 's6', name: 'Motion Design', level: 82 }],
  projects: [{ id: 'p1', name: 'PhonePe Design System', description: 'Comprehensive design system with 300+ components, dark mode, and WCAG 2.1 AA compliance. Used by 50+ designers and 200+ engineers.', tech: 'Figma, Storybook, React', link: 'phonepe.com/design' }],
  certifications: [{ id: 'c1', name: 'Google UX Design', issuer: 'Google', date: '2023-03' }, { id: 'c2', name: 'Nielsen Norman UX', issuer: 'NN/g', date: '2022-06' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Malayalam', proficiency: 'Native' }, { id: 'l3', name: 'Hindi', proficiency: 'Fluent' }],
  interests: [{ id: 'i1', name: 'Origami' }, { id: 'i2', name: 'Watercolors' }, { id: 'i3', name: 'Pottery' }, { id: 'i4', name: 'Hiking' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

// Paper fold card — has a triangular corner fold effect
function FoldCard({ children, tc, style = {} }) {
  const foldSize = 18
  return (
    <div style={{
      position: 'relative',
      background: '#ffffff',
      borderRadius: '0 8px 8px 8px',
      border: `1px solid ${tc}18`,
      boxShadow: `2px 2px 8px ${tc}10, 0 1px 3px rgba(0,0,0,0.06)`,
      overflow: 'hidden',
      ...style,
    }}>
      {/* Top-left corner fold */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, borderStyle: 'solid', borderWidth: `${foldSize}px ${foldSize}px 0 0`, borderColor: `${tc}25 transparent transparent transparent`, zIndex: 2 }} />
      {/* Shadow under fold */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: foldSize, height: foldSize, background: `linear-gradient(135deg, ${tc}15 0%, transparent 60%)`, zIndex: 1 }} />
      <div style={{ padding: '14px 14px 12px 20px' }}>
        {children}
      </div>
    </div>
  )
}

// Section header with paper fold accent
function PFH({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, marginTop: 20 }}>
      {/* Folded corner accent */}
      <div style={{ position: 'relative', width: 16, height: 16, flexShrink: 0 }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, borderStyle: 'solid', borderWidth: '16px 16px 0 0', borderColor: `${tc} transparent transparent transparent` }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, borderStyle: 'solid', borderWidth: '8px 8px 0 0', borderColor: 'white transparent transparent transparent' }} />
      </div>
      <span style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#0f172a' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: `${tc}20` }} />
    </div>
  )
}

export default function PaperFoldTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = g(resume?.themeColor, '#0891b2')
  const ff = g(resume?.fontFamily, 'Arial, sans-serif')

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

  const exp  = resume?.experience?.length     ? resume.experience     : S.experience
  const edu  = resume?.education?.length      ? resume.education      : S.education
  const skl  = resume?.skills?.length         ? resume.skills         : S.skills
  const prj  = resume?.projects?.length       ? resume.projects       : S.projects
  const cert = resume?.certifications?.length ? resume.certifications : S.certifications
  const lang = resume?.languages?.length      ? resume.languages      : S.languages
  const intr = resume?.interests?.length      ? resume.interests      : S.interests

  const pillColors = ['#fdf4ff','#eff6ff','#f0fdf4','#fff7ed','#fef2f2','#ecfdf5']
  const pillText   = ['#7e22ce','#1d4ed8','#166534','#9a3412','#991b1b','#065f46']

  return (
    <div style={{
      width: 794, minHeight: 1123,
      background: '#f5f7fa',
      fontFamily: ff, fontSize: 10,
      color: '#1e293b',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Subtle grid paper background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <svg width="794" height="1123" viewBox="0 0 794 1123" style={{ opacity: 0.04 }}>
          {Array.from({ length: 45 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 25} x2="794" y2={i * 25} stroke={tc} strokeWidth="0.5" />
          ))}
          {Array.from({ length: 32 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 25} y1="0" x2={i * 25} y2="1123" stroke={tc} strokeWidth="0.5" />
          ))}
        </svg>
      </div>

      {/* ── HEADER — diagonal cut bottom ── */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          background: `linear-gradient(135deg, ${tc} 0%, ${tc}cc 60%, ${tc}88 100%)`,
          padding: '32px 36px 60px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Paper texture lines on header */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.06 }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} style={{ position: 'absolute', top: i * 14, left: 0, right: 0, height: 1, background: 'white' }} />
            ))}
          </div>

          {/* Large fold corner top-right */}
          <div style={{ position: 'absolute', top: 0, right: 0, width: 0, height: 0, borderStyle: 'solid', borderWidth: '0 48px 48px 0', borderColor: `transparent #f5f7fa transparent transparent`, zIndex: 3 }} />
          <div style={{ position: 'absolute', top: 0, right: 0, width: 48, height: 48, background: `linear-gradient(225deg, rgba(0,0,0,0.15) 0%, transparent 60%)`, zIndex: 2 }} />

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <h1 style={{ fontSize: 30, fontWeight: 900, color: '#ffffff', margin: '0 0 4px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{name}</h1>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontWeight: 600, margin: '0 0 14px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{jobTitle}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px' }}>
                {email    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: 'rgba(255,255,255,0.85)' }}><Mail size={9} color="rgba(255,255,255,0.9)" />{email}</span>}
                {phone    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: 'rgba(255,255,255,0.85)' }}><Phone size={9} color="rgba(255,255,255,0.9)" />{phone}</span>}
                {location && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: 'rgba(255,255,255,0.85)' }}><MapPin size={9} color="rgba(255,255,255,0.9)" />{location}</span>}
                {website  && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: 'rgba(255,255,255,0.85)' }}><Globe size={9} color="rgba(255,255,255,0.9)" />{website}</span>}
                {linkedin && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: 'rgba(255,255,255,0.85)' }}><Link2 size={9} color="rgba(255,255,255,0.9)" />{linkedin}</span>}
                {github   && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: 'rgba(255,255,255,0.85)' }}><GitBranch size={9} color="rgba(255,255,255,0.9)" />{github}</span>}
              </div>
            </div>
            {photo && (
              <div style={{ flexShrink: 0, marginRight: 52 }}>
                {/* Photo with fold corner */}
                <div style={{ position: 'relative', width: 72, height: 72 }}>
                  <img src={photo} alt={name} style={{ width: 72, height: 72, borderRadius: 8, objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)' }} />
                  <div style={{ position: 'absolute', bottom: 0, right: 0, width: 0, height: 0, borderStyle: 'solid', borderWidth: '0 14px 14px 0', borderColor: `transparent ${tc} transparent transparent` }} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Diagonal cut — white triangle at bottom of header */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 40, overflow: 'hidden' }}>
          <svg viewBox="0 0 794 40" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
            <path d="M0,40 L794,0 L794,40 Z" fill="#f5f7fa" />
          </svg>
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', padding: '8px 0 0' }}>

        {/* LEFT 60% */}
        <div style={{ width: '60%', padding: '0 16px 28px 28px' }}>

          {/* Summary fold card */}
          {summary && (
            <div style={{ marginBottom: 4 }}>
              <PFH title="Profile" tc={tc} />
              <FoldCard tc={tc}>
                <p style={{ fontSize: 9.5, color: '#374151', lineHeight: 1.75, margin: 0, fontStyle: 'italic' }}>{summary}</p>
              </FoldCard>
            </div>
          )}

          {/* Experience */}
          {exp.length > 0 && (
            <div>
              <PFH title="Experience" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {exp.map((e, i) => (
                  <FoldCard key={e.id || i} tc={tc}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                      <div>
                        <div style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{e.company}</div>
                        <div style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginTop: 1 }}>{e.role}</div>
                        {e.location && <div style={{ fontSize: 8, color: '#9ca3af', marginTop: 1 }}>{e.location}</div>}
                      </div>
                      <span style={{ fontSize: 7.5, color: tc, background: `${tc}12`, padding: '2px 8px', borderRadius: 10, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0, border: `1px solid ${tc}20` }}>
                        {e.startDate} — {e.current ? 'Present' : e.endDate}
                      </span>
                    </div>
                    {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                      <p key={li} style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.65, margin: '2px 0 0' }}>{l}</p>
                    ))}
                  </FoldCard>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {prj.length > 0 && (
            <div>
              <PFH title="Projects" tc={tc} />
              {prj.map((p, i) => (
                <FoldCard key={p.id || i} tc={tc} style={{ marginBottom: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                    <span style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{p.name}</span>
                    {p.link && <span style={{ fontSize: 8, color: tc }}>{p.link}</span>}
                  </div>
                  {p.description && <p style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.65, margin: '0 0 5px' }}>{p.description}</p>}
                  {p.tech && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {p.tech.split(',').map((t, ti) => (
                        <span key={ti} style={{ fontSize: 7.5, background: `${tc}12`, color: tc, padding: '2px 7px', borderRadius: 10, fontWeight: 600 }}>{t.trim()}</span>
                      ))}
                    </div>
                  )}
                </FoldCard>
              ))}
            </div>
          )}

          {/* Education */}
          {edu.length > 0 && (
            <div>
              <PFH title="Education" tc={tc} />
              {edu.map((e, i) => (
                <FoldCard key={e.id || i} tc={tc} style={{ marginBottom: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{e.degree}</div>
                      <div style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginTop: 1 }}>{e.school}</div>
                    </div>
                    <span style={{ fontSize: 7.5, color: '#9ca3af', whiteSpace: 'nowrap', marginLeft: 8 }}>{e.startDate} — {e.endDate}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12, marginTop: 5 }}>
                    {e.gpa && <span style={{ fontSize: 8, color: '#64748b' }}>GPA: <strong style={{ color: '#0f172a' }}>{e.gpa}</strong></span>}
                    {e.achievements && <span style={{ fontSize: 8, color: '#64748b', fontStyle: 'italic' }}>{e.achievements}</span>}
                  </div>
                </FoldCard>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT 40% */}
        <div style={{ width: '40%', padding: '0 24px 28px 8px' }}>

          {/* Skills */}
          {skl.length > 0 && (
            <div>
              <PFH title="Skills" tc={tc} />
              <FoldCard tc={tc}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {skl.map((s, i) => (
                    <div key={s.id || i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                        <span style={{ fontSize: 9, fontWeight: 600, color: '#222' }}>{s.name}</span>
                        <span style={{ fontSize: 7.5, color: tc, fontWeight: 700 }}>{s.level}%</span>
                      </div>
                      <div style={{ height: 5, background: `${tc}15`, borderRadius: 99, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${s.level}%`, background: `linear-gradient(90deg, ${tc}, ${tc}80)`, borderRadius: 99 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </FoldCard>
            </div>
          )}

          {/* Languages */}
          {lang.length > 0 && (
            <div>
              <PFH title="Languages" tc={tc} />
              <FoldCard tc={tc}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {lang.map((l, i) => (
                    <div key={l.id || i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 9, fontWeight: 700, color: '#0f172a' }}>{l.name}</span>
                      <span style={{ fontSize: 8, color: tc, fontWeight: 600, background: `${tc}10`, padding: '1px 8px', borderRadius: 10 }}>{l.proficiency}</span>
                    </div>
                  ))}
                </div>
              </FoldCard>
            </div>
          )}

          {/* Certifications */}
          {cert.length > 0 && (
            <div>
              <PFH title="Certifications" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {cert.map((c, i) => (
                  <FoldCard key={c.id || i} tc={tc}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#0f172a' }}>{c.name}</div>
                    <div style={{ fontSize: 8, color: tc, marginTop: 2 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                  </FoldCard>
                ))}
              </div>
            </div>
          )}

          {/* Interests */}
          {intr.length > 0 && (
            <div>
              <PFH title="Interests" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {intr.map((it, i) => (
                  <span key={it.id || i} style={{ fontSize: 8.5, fontWeight: 600, background: pillColors[i % 6], color: pillText[i % 6], padding: '4px 10px', borderRadius: 20 }}>
                    {it.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
