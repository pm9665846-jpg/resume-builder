import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Shreya Iyer', jobTitle: 'Senior Growth Marketing Manager',
  email: 'shreya@email.com', phone: '+91 98765 88901',
  location: 'Mumbai, India', website: 'shreyaiyer.co',
  linkedin: 'linkedin.com/in/shreyaiyer', github: 'github.com/shreyaiyer',
  summary: 'Growth marketer with 8+ years driving user acquisition and revenue for consumer internet companies. Grew Nykaa\'s digital revenue from ₹200Cr to ₹2,000Cr. Expert in performance marketing, SEO, and growth loops.',
  experience: [
    { id: 'e1', role: 'Senior Growth Marketing Manager', company: 'Nykaa', location: 'Mumbai', startDate: 'Mar 2020', endDate: '', current: true, description: '• Grew digital revenue 10x in 3 years through integrated growth strategy\n• Built performance marketing engine with ₹50Cr annual budget\n• Led team of 12 across SEO, SEM, social, and influencer marketing' },
    { id: 'e2', role: 'Growth Manager', company: 'Zomato', location: 'Gurugram', startDate: 'Jun 2017', endDate: 'Feb 2020', current: false, description: '• Grew Zomato Gold subscribers from 100K to 1.5M in 18 months\n• Reduced CAC by 45% through channel mix optimization\n• Launched referral program generating 30% of new user acquisition' },
    { id: 'e3', role: 'Digital Marketing Executive', company: 'MakeMyTrip', location: 'Gurugram', startDate: 'Jul 2015', endDate: 'May 2017', current: false, description: '• Managed ₹10Cr Google Ads budget with 320% ROAS\n• Grew organic traffic by 180% through content SEO strategy' },
  ],
  education: [{ id: 'ed1', degree: 'MBA — Marketing', school: 'XLRI Jamshedpur', startDate: '2013', endDate: '2015', gpa: '3.87/4.0', achievements: 'Marketing Club President · Best Campaign Award' }],
  skills: [{ id: 's1', name: 'Performance Marketing', level: 96 }, { id: 's2', name: 'SEO / Content', level: 92 }, { id: 's3', name: 'Growth Strategy', level: 94 }, { id: 's4', name: 'Data Analytics', level: 88 }, { id: 's5', name: 'Brand Marketing', level: 85 }, { id: 's6', name: 'Product Marketing', level: 90 }],
  projects: [{ id: 'p1', name: 'Nykaa Growth Engine', description: 'Built end-to-end growth marketing stack. Integrated 15 channels, automated reporting, and reduced CAC by 38% while growing revenue 10x.', tech: 'Google Ads, Meta, SEO, Analytics', link: 'nykaa.com' }],
  certifications: [{ id: 'c1', name: 'Google Analytics 4', issuer: 'Google', date: '2023-06' }, { id: 'c2', name: 'Meta Blueprint', issuer: 'Meta', date: '2022-09' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Tamil', proficiency: 'Native' }, { id: 'l3', name: 'Hindi', proficiency: 'Fluent' }],
  interests: [{ id: 'i1', name: 'Brand Strategy' }, { id: 'i2', name: 'Podcasting' }, { id: 'i3', name: 'Yoga' }, { id: 'i4', name: 'Travel' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

function MPH({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, marginTop: 18 }}>
      <div style={{ width: 3, height: 14, background: tc, borderRadius: 1, flexShrink: 0 }} />
      <span style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#0f172a' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: `${tc}20` }} />
    </div>
  )
}

export default function MosaicProTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = g(resume?.themeColor, '#e11d48')
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

  return (
    <div style={{ width: 794, minHeight: 1123, background: '#ffffff', fontFamily: ff, fontSize: 10, color: '#1e293b', position: 'relative', overflow: 'hidden' }}>

      {/* ── ASYMMETRIC HEADER ── */}
      <div style={{ position: 'relative', height: 180 }}>

        {/* Left white zone — name area */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: '35%', bottom: 0, background: '#ffffff', padding: '28px 24px 20px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: '#0f172a', margin: '0 0 4px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{name}</h1>
          <p style={{ fontSize: 10.5, color: tc, fontWeight: 700, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 12px' }}>
            {email    && <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 8, color: '#475569' }}><Mail size={8} color={tc} />{email}</span>}
            {phone    && <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 8, color: '#475569' }}><Phone size={8} color={tc} />{phone}</span>}
            {location && <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 8, color: '#475569' }}><MapPin size={8} color={tc} />{location}</span>}
            {website  && <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 8, color: '#475569' }}><Globe size={8} color={tc} />{website}</span>}
            {linkedin && <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 8, color: '#475569' }}><Link2 size={8} color={tc} />{linkedin}</span>}
            {github   && <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 8, color: '#475569' }}><GitBranch size={8} color={tc} />{github}</span>}
          </div>
        </div>

        {/* Right colored block — photo + decorative */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '35%', bottom: 0, background: tc, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
          <div style={{ position: 'absolute', bottom: -20, left: -20, width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
          {photo ? (
            <img src={photo} alt={name} style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.5)', position: 'relative', zIndex: 1 }} />
          ) : (
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', border: '3px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 900, color: '#fff', position: 'relative', zIndex: 1 }}>
              {name.charAt(0)}
            </div>
          )}
        </div>

        {/* Diagonal cut between left and right */}
        <div style={{ position: 'absolute', top: 0, right: '35%', bottom: 0, width: 40, overflow: 'hidden' }}>
          <svg viewBox="0 0 40 180" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
            <path d="M40,0 L0,0 L0,180 L40,180 Z" fill="#ffffff" />
            <path d="M40,0 L0,0 L40,180 Z" fill={tc} />
          </svg>
        </div>
      </div>

      {/* ── SUMMARY BAND ── */}
      {summary && (
        <div style={{ background: '#f8fafc', padding: '14px 36px', borderTop: `1px solid #e5e7eb`, borderBottom: `1px solid #e5e7eb` }}>
          <p style={{ fontSize: 9.5, color: '#374151', lineHeight: 1.8, margin: 0 }}>{summary}</p>
        </div>
      )}

      {/* ── 3-ZONE BODY ── */}
      <div style={{ display: 'flex', minHeight: 700 }}>

        {/* ZONE 1 — Left narrow (skills + langs + certs + interests) */}
        <div style={{ width: 180, flexShrink: 0, padding: '16px 14px 24px 36px', borderRight: `1px solid #e5e7eb` }}>

          {skl.length > 0 && (
            <div>
              <MPH title="Skills" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {skl.map((s, i) => (
                  <div key={s.id || i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                      <span style={{ fontSize: 8.5, fontWeight: 600, color: '#222' }}>{s.name}</span>
                      <span style={{ fontSize: 7.5, color: tc, fontWeight: 700 }}>{s.level}%</span>
                    </div>
                    <div style={{ height: 4, background: `${tc}15`, borderRadius: 99, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${s.level}%`, background: tc, borderRadius: 99 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {lang.length > 0 && (
            <div>
              <MPH title="Languages" tc={tc} />
              {lang.map((l, i) => (
                <div key={l.id || i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 8.5, fontWeight: 600, color: '#222' }}>{l.name}</span>
                  <span style={{ fontSize: 7.5, color: tc }}>{l.proficiency}</span>
                </div>
              ))}
            </div>
          )}

          {cert.length > 0 && (
            <div>
              <MPH title="Certifications" tc={tc} />
              {cert.map((c, i) => (
                <div key={c.id || i} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 8.5, fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>{c.name}</div>
                  <div style={{ fontSize: 7.5, color: tc, marginTop: 1 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                </div>
              ))}
            </div>
          )}

          {intr.length > 0 && (
            <div>
              <MPH title="Interests" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {intr.map((it, i) => (
                  <div key={it.id || i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: tc, flexShrink: 0 }} />
                    <span style={{ fontSize: 8.5, color: '#374151' }}>{it.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ZONE 2 — Middle (experience) */}
        <div style={{ flex: 1, padding: '16px 16px 24px 16px', borderRight: `1px solid #e5e7eb` }}>

          {exp.length > 0 && (
            <div>
              <MPH title="Experience" tc={tc} />
              {exp.map((e, i) => (
                <div key={e.id || i} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: i < exp.length - 1 ? `1px solid #f0f0f0` : 'none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                    <div>
                      <div style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{e.company}</div>
                      <div style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginTop: 1 }}>{e.role}</div>
                      {e.location && <div style={{ fontSize: 8, color: '#9ca3af', marginTop: 1 }}>{e.location}</div>}
                    </div>
                    <span style={{ fontSize: 7.5, color: tc, background: `${tc}10`, padding: '2px 8px', borderRadius: 10, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>
                      {e.startDate} — {e.current ? 'Present' : e.endDate}
                    </span>
                  </div>
                  {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                    <p key={li} style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.65, margin: '2px 0 0' }}>{l}</p>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ZONE 3 — Right (education + projects) */}
        <div style={{ width: 200, flexShrink: 0, padding: '16px 28px 24px 14px' }}>

          {edu.length > 0 && (
            <div>
              <MPH title="Education" tc={tc} />
              {edu.map((e, i) => (
                <div key={e.id || i} style={{ marginBottom: 12, padding: '10px 12px', background: `${tc}06`, borderRadius: 8, border: `1px solid ${tc}15` }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: '#0f172a', lineHeight: 1.3 }}>{e.degree}</div>
                  <div style={{ fontSize: 9, color: tc, fontWeight: 600, marginTop: 2 }}>{e.school}</div>
                  <div style={{ fontSize: 7.5, color: '#9ca3af', marginTop: 3 }}>{e.startDate} — {e.endDate}</div>
                  {e.gpa && <div style={{ fontSize: 7.5, color: '#64748b', marginTop: 2 }}>GPA: {e.gpa}</div>}
                  {e.achievements && <div style={{ fontSize: 7.5, color: tc, marginTop: 2, fontStyle: 'italic' }}>{e.achievements}</div>}
                </div>
              ))}
            </div>
          )}

          {prj.length > 0 && (
            <div>
              <MPH title="Projects" tc={tc} />
              {prj.map((p, i) => (
                <div key={p.id || i} style={{ marginBottom: 10, padding: '10px 12px', background: '#f8fafc', borderRadius: 8, border: `1px solid #e5e7eb` }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: '#0f172a', marginBottom: 3 }}>{p.name}</div>
                  {p.link && <div style={{ fontSize: 7.5, color: tc, marginBottom: 4 }}>{p.link}</div>}
                  {p.description && <p style={{ fontSize: 8, color: '#4b5563', lineHeight: 1.6, margin: '0 0 5px' }}>{p.description}</p>}
                  {p.tech && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                      {p.tech.split(',').map((t, ti) => (
                        <span key={ti} style={{ fontSize: 7, background: `${tc}12`, color: tc, padding: '1px 6px', borderRadius: 8, fontWeight: 600 }}>{t.trim()}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom accent */}
      <div style={{ height: 4, background: `linear-gradient(90deg, ${tc}, ${tc}80, ${tc}30)` }} />
    </div>
  )
}
