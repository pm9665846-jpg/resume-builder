import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Priya Sharma', jobTitle: 'Product Manager · Growth & Monetization',
  email: 'priya@email.com', phone: '+91 98765 43210',
  location: 'Bengaluru, India', website: 'priyasharma.pm',
  linkedin: 'linkedin.com/in/priyapm', github: 'github.com/priyapm',
  summary: 'Strategic product manager with 7+ years driving growth for consumer and B2B products. Launched 3 products from 0→1, each reaching $10M+ ARR within 18 months. Data-driven decision maker with strong engineering background.',
  experience: [
    { id: 'e1', role: 'Senior Product Manager', company: 'Razorpay', location: 'Bengaluru', startDate: 'Jun 2021', endDate: '', current: true, description: '• Owned Razorpay\'s subscription product — grew from ₹50Cr to ₹400Cr ARR in 2 years\n• Led cross-functional team of 18 (eng, design, data, marketing)\n• Launched international expansion to 5 SEA markets' },
    { id: 'e2', role: 'Product Manager', company: 'Swiggy', location: 'Bengaluru', startDate: 'Aug 2018', endDate: 'May 2021', current: false, description: '• Built Swiggy One loyalty program — 8M+ subscribers in 12 months\n• Increased order frequency by 34% through personalization features\n• Reduced customer churn by 22% via predictive intervention system' },
  ],
  education: [{ id: 'ed1', degree: 'MBA — Strategy & Marketing', school: 'IIM Ahmedabad', startDate: '2016', endDate: '2018', gpa: '3.9/4.0', achievements: 'Gold Medal · Best Thesis' }, { id: 'ed2', degree: 'B.Tech Computer Science', school: 'BITS Pilani', startDate: '2012', endDate: '2016', gpa: '9.1/10', achievements: 'Institute Rank 3' }],
  skills: [{ id: 's1', name: 'Product Strategy', level: 96 }, { id: 's2', name: 'Data Analysis', level: 90 }, { id: 's3', name: 'SQL / Python', level: 82 }, { id: 's4', name: 'A/B Testing', level: 94 }, { id: 's5', name: 'Figma', level: 78 }, { id: 's6', name: 'Go-to-Market', level: 92 }, { id: 's7', name: 'OKR Framework', level: 88 }],
  projects: [{ id: 'p1', name: 'PM Toolkit', description: 'Open resource for product managers — templates, frameworks, case studies. 15K monthly visitors.', tech: 'Next.js, Notion API', link: 'pmtoolkit.in' }],
  certifications: [{ id: 'c1', name: 'Google PM Certificate', issuer: 'Google', date: '2023-01' }, { id: 'c2', name: 'Reforge Growth Series', issuer: 'Reforge', date: '2022-04' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }, { id: 'l3', name: 'Kannada', proficiency: 'Conversational' }],
  interests: [{ id: 'i1', name: 'Badminton' }, { id: 'i2', name: 'Podcasting' }, { id: 'i3', name: 'Cooking' }, { id: 'i4', name: 'Travel' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

export default function GeometricTemplate({ resume }) {
  const {
    personalInfo = {}, experience = [], education = [], skills = [],
    projects = [], certifications = [], languages = [], interests = [],
    themeColor = '#8b5cf6', fontFamily,
  } = resume

  const tc = themeColor
  const ff = fontFamily || 'Arial, sans-serif'

  const name     = g(personalInfo.name,     S.name)
  const jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email    = g(personalInfo.email,    S.email)
  const phone    = g(personalInfo.phone,    S.phone)
  const location = g(personalInfo.location, S.location)
  const website  = g(personalInfo.website,  S.website)
  const linkedin = g(personalInfo.linkedin, S.linkedin)
  const github   = g(personalInfo.github,   S.github)
  const summary  = g(personalInfo.summary,  S.summary)
  const photo    = personalInfo.photo || ''

  const exp  = experience.length     > 0 ? experience     : S.experience
  const edu  = education.length      > 0 ? education      : S.education
  const skl  = skills.length         > 0 ? skills         : S.skills
  const prj  = projects.length       > 0 ? projects       : S.projects
  const cert = certifications.length > 0 ? certifications : S.certifications
  const lang = languages.length      > 0 ? languages      : S.languages
  const intr = interests.length      > 0 ? interests      : S.interests

  const sectionNums = ['01', '02', '03', '04', '05', '06', '07']
  let secIdx = 0

  return (
    <div style={{ background: '#ffffff', fontFamily: ff, fontSize: '10px', lineHeight: 1.6, width: 794, minHeight: 1123, boxSizing: 'border-box', position: 'relative', overflow: 'hidden', color: '#1c1c1e' }}>

      {/* DECORATIVE SHAPES */}
      <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', background: `${tc}08`, pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: 40, left: -30, width: 120, height: 400, background: `${tc}05`, borderRadius: 8, transform: 'rotate(-15deg)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: 60, left: -40, width: 180, height: 180, borderRadius: '50%', background: `${tc}06`, pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: 520, left: 0, right: 0, height: 1, background: `${tc}10`, pointerEvents: 'none', zIndex: 0 }} />

      {/* HEADER */}
      <div style={{ position: 'relative', zIndex: 1, padding: '38px 44px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: '#111', margin: '0 0 4px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontWeight: 600, margin: '0 0 16px', letterSpacing: '0.02em' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px 14px' }}>
            {[{ icon: Mail, val: email }, { icon: Phone, val: phone }, { icon: MapPin, val: location }, { icon: Globe, val: website }, { icon: Link2, val: linkedin }, { icon: GitBranch, val: github }].filter(c => c.val).map(({ icon: Icon, val }, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 8.5, color: '#555' }}>
                <Icon size={9} color={tc} />{val}
              </span>
            ))}
          </div>
        </div>
        {photo && (
          <div style={{ width: 80, height: 80, borderRadius: '50%', border: `2px solid ${tc}25`, overflow: 'hidden', flexShrink: 0, marginLeft: 20, boxShadow: `0 4px 16px ${tc}15` }}>
            <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}
      </div>

      {/* BODY */}
      <div style={{ position: 'relative', zIndex: 1, padding: '0 44px 44px' }}>

        {summary && (
          <div style={{ marginBottom: 28 }}>
            <p style={{ fontSize: 9.5, color: '#444', lineHeight: 1.9, margin: 0, padding: '14px 18px', background: `${tc}05`, borderRadius: 8, borderLeft: `3px solid ${tc}` }}>{summary}</p>
          </div>
        )}

        {/* EXPERIENCE */}
        <GeoSH tc={tc} num={sectionNums[secIdx++]}>Experience</GeoSH>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 4 }}>
          {exp.map(e => (
            <div key={e.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                <div>
                  <p style={{ fontWeight: 800, fontSize: 14, color: tc, margin: 0, lineHeight: 1.2 }}>{e.company}</p>
                  <p style={{ fontWeight: 600, fontSize: 10, color: '#222', margin: '2px 0' }}>{e.role}{e.location && <span style={{ color: '#999', fontWeight: 400 }}> · {e.location}</span>}</p>
                </div>
                <span style={{ fontSize: 8, color: '#888', whiteSpace: 'nowrap', marginLeft: 12, flexShrink: 0, marginTop: 4 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
              </div>
              {e.description && (
                <div style={{ paddingLeft: 12, borderLeft: `2px solid ${tc}20` }}>
                  {e.description.split('\n').filter(Boolean).map((l, li) => (
                    <p key={li} style={{ color: '#555', fontSize: 9, lineHeight: 1.8, margin: '2px 0 0' }}>{l}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* SKILLS */}
        <GeoSH tc={tc} num={sectionNums[secIdx++]}>Skills</GeoSH>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 4 }}>
          {skl.map(s => (
            <span key={s.id} style={{ fontSize: 8.5, padding: '4px 12px', borderRadius: 20, background: `${tc}10`, color: '#333', border: `1px solid ${tc}30`, fontWeight: 600 }}>{s.name}</span>
          ))}
        </div>

        {/* EDUCATION */}
        <GeoSH tc={tc} num={sectionNums[secIdx++]}>Education</GeoSH>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 4 }}>
          {edu.map(e => (
            <div key={e.id} style={{ padding: '12px 14px', borderRadius: 8, background: `${tc}04`, border: `1px solid ${tc}12` }}>
              <p style={{ fontWeight: 800, fontSize: 10, color: '#111', margin: '0 0 2px' }}>{e.degree}</p>
              <p style={{ fontSize: 9, color: tc, fontWeight: 600, margin: '0 0 2px' }}>{e.school}</p>
              <p style={{ fontSize: 8, color: '#888', margin: 0 }}>{e.startDate} — {e.endDate}</p>
              {e.gpa && <p style={{ fontSize: 8, color: '#555', margin: '2px 0 0' }}>GPA: {e.gpa}</p>}
              {e.achievements && <p style={{ fontSize: 8, color: '#777', margin: '2px 0 0', fontStyle: 'italic' }}>{e.achievements}</p>}
            </div>
          ))}
        </div>

        {/* PROJECTS */}
        {prj.length > 0 && (
          <>
            <GeoSH tc={tc} num={sectionNums[secIdx++]}>Projects</GeoSH>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 4 }}>
              {prj.map(p => (
                <div key={p.id} style={{ padding: '11px 14px', borderRadius: 8, background: `${tc}05`, border: `1px solid ${tc}15` }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4 }}>
                    <p style={{ fontWeight: 800, fontSize: 10.5, color: '#111', margin: 0 }}>{p.name}</p>
                    {p.link && <span style={{ fontSize: 8, color: tc }}>{p.link}</span>}
                  </div>
                  {p.tech && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 5 }}>
                      {p.tech.split(',').map((t, ti) => (
                        <span key={ti} style={{ fontSize: 7.5, padding: '1px 7px', borderRadius: 20, background: `${tc}12`, color: tc, fontWeight: 700 }}>{t.trim()}</span>
                      ))}
                    </div>
                  )}
                  {p.description && <p style={{ fontSize: 8.5, color: '#555', margin: 0, lineHeight: 1.7 }}>{p.description}</p>}
                </div>
              ))}
            </div>
          </>
        )}

        {/* CERTIFICATIONS */}
        {cert.length > 0 && (
          <>
            <GeoSH tc={tc} num={sectionNums[secIdx++]}>Certifications</GeoSH>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 4 }}>
              {cert.map(c => (
                <div key={c.id} style={{ padding: '9px 14px', borderRadius: 8, background: '#fafafa', border: `1px solid #e5e7eb`, minWidth: 160 }}>
                  <p style={{ fontWeight: 700, fontSize: 9, color: '#111', margin: '0 0 2px' }}>{c.name}</p>
                  <p style={{ fontSize: 8, color: tc, fontWeight: 600, margin: 0 }}>{c.issuer} · {c.date}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* LANGUAGES + INTERESTS */}
        {(lang.length > 0 || intr.length > 0) && (
          <div style={{ display: 'flex', gap: 32, marginTop: 20, flexWrap: 'wrap' }}>
            {lang.length > 0 && (
              <div>
                <p style={{ fontSize: 7.5, fontWeight: 800, color: tc, textTransform: 'uppercase', letterSpacing: '0.2em', margin: '0 0 8px' }}>Languages</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {lang.map(l => (
                    <span key={l.id} style={{ fontSize: 8.5, padding: '3px 10px', borderRadius: 20, background: `${tc}08`, color: '#333', border: `1px solid ${tc}20` }}>{l.name} <span style={{ color: tc, fontWeight: 700 }}>· {l.proficiency}</span></span>
                  ))}
                </div>
              </div>
            )}
            {intr.length > 0 && (
              <div>
                <p style={{ fontSize: 7.5, fontWeight: 800, color: tc, textTransform: 'uppercase', letterSpacing: '0.2em', margin: '0 0 8px' }}>Interests</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {intr.map(i => (
                    <span key={i.id} style={{ fontSize: 8.5, padding: '3px 10px', borderRadius: 20, background: '#f5f5f5', color: '#555', border: '1px solid #e5e7eb' }}>{i.name}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function GeoSH({ tc, num, children }) {
  return (
    <div style={{ position: 'relative', marginTop: 26, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ position: 'absolute', left: -4, top: '50%', transform: 'translateY(-50%)', fontSize: 36, fontWeight: 900, color: `${tc}12`, lineHeight: 1, userSelect: 'none', letterSpacing: '-0.04em' }}>{num}</span>
      <span style={{ position: 'relative', zIndex: 1, fontSize: 8, fontWeight: 900, color: '#111', textTransform: 'uppercase', letterSpacing: '0.22em', paddingLeft: 2 }}>{children}</span>
      <div style={{ flex: 1, height: 1, background: `${tc}20` }} />
    </div>
  )
}
