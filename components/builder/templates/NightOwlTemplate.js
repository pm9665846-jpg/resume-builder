import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Jordan Blake', jobTitle: 'DevOps & Cloud Architect',
  email: 'jordan@email.com', phone: '+1 (555) 678-9012',
  location: 'Seattle, WA', website: 'jordanblake.io',
  linkedin: 'linkedin.com/in/jordanb', github: 'github.com/jordanb',
  summary: 'Cloud architect with 9+ years designing resilient, scalable infrastructure for high-growth startups and enterprises. Reduced infrastructure costs by $2M+ annually through optimization. Kubernetes certified, AWS expert, open source contributor.',
  experience: [
    { id: 'e1', role: 'Principal Cloud Architect', company: 'Cloudflare', location: 'Remote', startDate: 'Apr 2021', endDate: '', current: true, description: '• Designed global edge infrastructure serving 25M+ requests/second\n• Led migration of 400+ microservices to Kubernetes, reducing costs by 40%\n• Built internal developer platform adopted by 300+ engineers' },
    { id: 'e2', role: 'Senior DevOps Engineer', company: 'HashiCorp', location: 'San Francisco', startDate: 'Jan 2018', endDate: 'Mar 2021', current: false, description: '• Maintained Terraform Cloud infrastructure serving 50K+ organizations\n• Reduced deployment time from 45min to 4min through pipeline optimization\n• Contributed 200+ PRs to open source Terraform providers' },
  ],
  education: [{ id: 'ed1', degree: 'BS Computer Engineering', school: 'University of Washington', startDate: '2010', endDate: '2014', gpa: '3.89/4.0', achievements: 'Magna Cum Laude' }],
  skills: [{ id: 's1', name: 'Kubernetes', level: 96 }, { id: 's2', name: 'AWS / GCP', level: 94 }, { id: 's3', name: 'Terraform', level: 92 }, { id: 's4', name: 'Go / Python', level: 85 }, { id: 's5', name: 'Prometheus', level: 88 }, { id: 's6', name: 'CI/CD', level: 93 }],
  projects: [{ id: 'p1', name: 'k8s-cost-optimizer', description: 'Open source Kubernetes cost optimization tool. 3.2k GitHub stars, used by 500+ companies.', tech: 'Go, Kubernetes, Prometheus', link: 'github.com/jordanb/k8s-cost' }],
  certifications: [{ id: 'c1', name: 'CKA / CKAD', issuer: 'CNCF', date: '2023-02' }, { id: 'c2', name: 'AWS Solutions Architect Pro', issuer: 'Amazon', date: '2022-07' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Native' }, { id: 'l2', name: 'Japanese', proficiency: 'Intermediate' }],
  interests: [{ id: 'i1', name: 'Open Source' }, { id: 'i2', name: 'Homelab' }, { id: 'i3', name: 'Bouldering' }, { id: 'i4', name: 'Sci-Fi' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

export default function NightOwlTemplate({ resume }) {
  const {
    personalInfo = {}, experience = [], education = [], skills = [],
    projects = [], certifications = [], languages = [], interests = [],
    themeColor = '#38bdf8', fontFamily,
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

  const BG_MAIN    = '#ffffff'
  const BG_SIDEBAR = '#f4f6fb'
  const TEXT_HEAD  = '#111827'
  const TEXT_BODY  = '#374151'
  const TEXT_MUTED = '#9ca3af'
  const BORDER     = 'rgba(0,0,0,0.07)'

  return (
    <div style={{ background: BG_MAIN, fontFamily: ff, fontSize: '10px', lineHeight: 1.6, width: 794, minHeight: 1123, boxSizing: 'border-box', display: 'flex', color: TEXT_BODY, position: 'relative', overflow: 'hidden' }}>

      {/* LEFT SIDEBAR */}
      <div style={{ width: '38%', flexShrink: 0, background: BG_SIDEBAR, borderRight: `1px solid ${BORDER}`, padding: '36px 22px 40px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, left: -60, width: 220, height: 220, borderRadius: '50%', background: `${tc}08`, pointerEvents: 'none', filter: 'blur(40px)' }} />

        {/* Photo + Name */}
        <div style={{ position: 'relative', zIndex: 1, marginBottom: 22 }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', border: `2px solid ${tc}40`, overflow: 'hidden', background: photo ? 'transparent' : `${tc}15`, marginBottom: 14, boxShadow: `0 0 20px ${tc}20` }}>
            {photo
              ? <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 900, color: tc }}>{name.charAt(0)}</div>
            }
          </div>
          <h1 style={{ fontSize: 17, fontWeight: 800, color: TEXT_HEAD, margin: '0 0 4px', lineHeight: 1.15, letterSpacing: '-0.01em' }}>{name}</h1>
          <p style={{ fontSize: 9, color: tc, fontWeight: 600, margin: 0, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{jobTitle}</p>
        </div>

        {/* Contact */}
        <div style={{ marginBottom: 22, display: 'flex', flexDirection: 'column', gap: 7 }}>
          {[{ icon: Mail, val: email }, { icon: Phone, val: phone }, { icon: MapPin, val: location }, { icon: Globe, val: website }, { icon: Link2, val: linkedin }, { icon: GitBranch, val: github }].filter(c => c.val).map(({ icon: Icon, val }, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 20, height: 20, borderRadius: 5, background: `${tc}12`, border: `1px solid ${tc}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={9} color={tc} />
              </div>
              <span style={{ fontSize: 8.5, color: '#5a6a7a', lineHeight: 1.3, wordBreak: 'break-all' }}>{val}</span>
            </div>
          ))}
        </div>

        {/* Skills */}
        <OwlSH tc={tc}>Skills</OwlSH>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 4 }}>
          {skl.map(s => (
            <div key={s.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 8.5, color: TEXT_HEAD, fontWeight: 600 }}>{s.name}</span>
                <span style={{ fontSize: 7.5, color: TEXT_MUTED }}>{s.level}%</span>
              </div>
              <div style={{ height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${s.level}%`, background: `linear-gradient(90deg, ${tc}, ${tc}aa)`, borderRadius: 2, boxShadow: `0 0 6px ${tc}60` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        {lang.length > 0 && (
          <>
            <OwlSH tc={tc}>Languages</OwlSH>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 4 }}>
              {lang.map(l => (
                <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 8.5, color: TEXT_BODY }}>{l.name}</span>
                  <span style={{ fontSize: 7.5, padding: '2px 8px', borderRadius: 20, background: `${tc}20`, color: tc, fontWeight: 600 }}>{l.proficiency}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Certifications */}
        {cert.length > 0 && (
          <>
            <OwlSH tc={tc}>Certifications</OwlSH>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 4 }}>
              {cert.map(c => (
                <div key={c.id} style={{ padding: '8px 10px', borderRadius: 7, background: `${tc}06`, border: `1px solid ${tc}15`, borderLeft: `2px solid ${tc}50` }}>
                  <p style={{ fontWeight: 700, fontSize: 8.5, color: TEXT_HEAD, margin: '0 0 2px' }}>{c.name}</p>
                  <p style={{ fontSize: 8, color: TEXT_MUTED, margin: 0 }}>{c.issuer} · {c.date}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Interests */}
        {intr.length > 0 && (
          <>
            <OwlSH tc={tc}>Interests</OwlSH>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {intr.map(i => (
                <span style={{ fontSize: 8, padding: '3px 9px', borderRadius: 20, background: `${tc}10`, color: '#555', border: `1px solid ${tc}20` }}>{i.name}</span>
              ))}
            </div>
          </>
        )}

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: `linear-gradient(to bottom, transparent, ${BG_SIDEBAR})`, pointerEvents: 'none' }} />
      </div>

      {/* RIGHT MAIN CONTENT */}
      <div style={{ flex: 1, padding: '36px 28px 40px 26px', overflow: 'hidden' }}>
        {summary && (
          <div style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 9.5, color: TEXT_BODY, lineHeight: 1.9, margin: 0, paddingLeft: 12, borderLeft: `2px solid ${tc}40` }}>{summary}</p>
          </div>
        )}

        <OwlMainSH tc={tc}>Experience</OwlMainSH>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {exp.map((e, i) => (
            <div key={e.id} style={{ paddingLeft: 14, paddingBottom: 16, borderLeft: `2px solid ${tc}30`, position: 'relative' }}>
              <div style={{ position: 'absolute', left: -5, top: 2, width: 8, height: 8, borderRadius: '50%', background: BG_MAIN, border: `2px solid ${tc}`, boxShadow: `0 0 8px ${tc}60` }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 10.5, color: TEXT_HEAD, margin: 0 }}>{e.role}</p>
                  <p style={{ fontSize: 9, color: tc, fontWeight: 600, margin: '2px 0' }}>{e.company}{e.location && <span style={{ color: TEXT_MUTED, fontWeight: 400 }}> · {e.location}</span>}</p>
                </div>
                <span style={{ fontSize: 7.5, color: TEXT_MUTED, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0, marginTop: 2 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
              </div>
              {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                <p key={li} style={{ color: TEXT_BODY, fontSize: 8.5, lineHeight: 1.8, margin: '2px 0 0' }}>{l}</p>
              ))}
            </div>
          ))}
        </div>

        {prj.length > 0 && (
          <>
            <OwlMainSH tc={tc}>Projects</OwlMainSH>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {prj.map(p => (
                <div key={p.id} style={{ padding: '11px 14px', borderRadius: 8, background: `${tc}05`, border: `1px solid ${tc}15` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                    <p style={{ fontWeight: 700, fontSize: 10, color: TEXT_HEAD, margin: 0 }}>{p.name}</p>
                    {p.link && <span style={{ fontSize: 7.5, color: tc }}>{p.link}</span>}
                  </div>
                  {p.tech && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 5 }}>
                      {p.tech.split(',').map((t, ti) => (
                        <span key={ti} style={{ fontSize: 7, padding: '1px 7px', borderRadius: 20, background: `${tc}15`, color: tc, fontWeight: 700, border: `1px solid ${tc}25` }}>{t.trim()}</span>
                      ))}
                    </div>
                  )}
                  {p.description && <p style={{ fontSize: 8.5, color: TEXT_BODY, margin: 0, lineHeight: 1.7 }}>{p.description}</p>}
                </div>
              ))}
            </div>
          </>
        )}

        <OwlMainSH tc={tc}>Education</OwlMainSH>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {edu.map(e => (
            <div key={e.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: 10, borderBottom: `1px solid ${BORDER}` }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: 10, color: TEXT_HEAD, margin: 0 }}>{e.degree}</p>
                <p style={{ fontSize: 9, color: tc, fontWeight: 600, margin: '2px 0' }}>{e.school}</p>
                {e.achievements && <p style={{ fontSize: 8.5, color: TEXT_MUTED, margin: 0, fontStyle: 'italic' }}>{e.achievements}</p>}
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 12 }}>
                <p style={{ fontSize: 8, color: TEXT_MUTED, margin: 0 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ fontSize: 8.5, color: tc, fontWeight: 700, margin: '2px 0 0' }}>GPA {e.gpa}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function OwlSH({ tc, children }) {
  return (
    <div style={{ marginTop: 18, marginBottom: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
        <span style={{ fontSize: 7.5, fontWeight: 800, color: tc, textTransform: 'uppercase', letterSpacing: '0.2em' }}>{children}</span>
        <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.08)' }} />
      </div>
    </div>
  )
}

function OwlMainSH({ tc, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, marginTop: 22 }}>
      <span style={{ fontSize: 7.5, fontWeight: 800, color: tc, textTransform: 'uppercase', letterSpacing: '0.22em' }}>{children}</span>
      <div style={{ flex: 1, height: 1, background: `${tc}30` }} />
    </div>
  )
}
