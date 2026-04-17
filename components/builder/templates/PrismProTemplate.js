import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Vikram Bose', jobTitle: 'Principal Data Scientist',
  email: 'vikram@email.com', phone: '+91 98765 99012',
  location: 'Kolkata, India', website: 'vikrambose.ai',
  linkedin: 'linkedin.com/in/vikrambose', github: 'github.com/vikrambose',
  summary: 'Data scientist with 9+ years building ML systems that drive business decisions. Published 12 research papers. Built recommendation engines serving 50M+ users at Amazon and Flipkart. Kaggle Grandmaster.',
  experience: [
    { id: 'e1', role: 'Principal Data Scientist', company: 'Amazon', location: 'Bengaluru', startDate: 'Jan 2020', endDate: '', current: true, description: '• Built product recommendation engine — $2B+ attributed revenue\n• Led team of 12 data scientists across 3 product lines\n• Reduced model training time by 80% through distributed computing' },
    { id: 'e2', role: 'Senior Data Scientist', company: 'Flipkart', location: 'Bengaluru', startDate: 'Apr 2016', endDate: 'Dec 2019', current: false, description: '• Built demand forecasting model saving ₹150Cr in inventory\n• Developed fraud detection system with 99.6% precision\n• Published 4 papers at NeurIPS and ICML' },
    { id: 'e3', role: 'Data Scientist', company: 'Mu Sigma', location: 'Bengaluru', startDate: 'Jun 2014', endDate: 'Mar 2016', current: false, description: '• Built predictive models for Fortune 500 clients\n• Kaggle competition winner — top 0.1% globally' },
  ],
  education: [{ id: 'ed1', degree: 'M.Tech Data Science', school: 'IIT Kharagpur', startDate: '2012', endDate: '2014', gpa: '9.5/10', achievements: 'Institute Gold Medal · Best Thesis' }],
  skills: [{ id: 's1', name: 'Python / R', level: 97 }, { id: 's2', name: 'Deep Learning', level: 94 }, { id: 's3', name: 'NLP / LLMs', level: 92 }, { id: 's4', name: 'MLOps', level: 88 }, { id: 's5', name: 'SQL / Spark', level: 90 }, { id: 's6', name: 'Statistics', level: 95 }],
  projects: [{ id: 'p1', name: 'Amazon RecSys', description: 'Next-gen recommendation engine using transformer architecture. 340% improvement in CTR over previous system.', tech: 'PyTorch, AWS SageMaker, Spark', link: 'amazon.com/science' }],
  certifications: [{ id: 'c1', name: 'AWS ML Specialty', issuer: 'Amazon', date: '2023-04' }, { id: 'c2', name: 'Google ML Engineer', issuer: 'Google Cloud', date: '2022-08' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Bengali', proficiency: 'Native' }, { id: 'l3', name: 'Hindi', proficiency: 'Fluent' }],
  interests: [{ id: 'i1', name: 'AI Research' }, { id: 'i2', name: 'Kaggle' }, { id: 'i3', name: 'Chess' }, { id: 'i4', name: 'Classical Music' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

function PPH({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, marginTop: 20 }}>
      <svg width="12" height="12" viewBox="0 0 12 12" style={{ flexShrink: 0 }}>
        <polygon points="6,0 12,12 0,12" fill={tc} opacity="0.9" />
      </svg>
      <span style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#0f172a' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: `${tc}20` }} />
    </div>
  )
}

export default function PrismProTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = g(resume?.themeColor, '#6366f1')
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

  // Derive a lighter shade for gradient
  const tc2 = `${tc}cc`

  return (
    <div style={{ width: 794, minHeight: 1123, background: '#ffffff', fontFamily: ff, fontSize: 10, color: '#1e293b', position: 'relative', overflow: 'hidden' }}>

      {/* ── PRISM HEADER ── */}
      <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>

        {/* Full gradient background */}
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${tc} 0%, ${tc2} 50%, ${tc}88 100%)` }} />

        {/* Prism triangle — white triangle cutting into header from bottom-right */}
        <svg style={{ position: 'absolute', bottom: 0, right: 0, width: '55%', height: '100%' }} viewBox="0 0 440 200" preserveAspectRatio="none">
          <path d="M440,0 L440,200 L0,200 Z" fill="#ffffff" />
        </svg>

        {/* Second prism layer — semi-transparent */}
        <svg style={{ position: 'absolute', bottom: 0, right: 0, width: '45%', height: '80%' }} viewBox="0 0 360 160" preserveAspectRatio="none">
          <path d="M360,0 L360,160 L0,160 Z" fill="rgba(255,255,255,0.12)" />
        </svg>

        {/* Header content */}
        <div style={{ position: 'relative', zIndex: 2, padding: '28px 36px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, maxWidth: '55%' }}>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: '#ffffff', margin: '0 0 4px', letterSpacing: '-0.02em', lineHeight: 1.1, textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>{name}</h1>
            <p style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.85)', fontWeight: 600, margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 12px' }}>
              {email    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8, color: 'rgba(255,255,255,0.85)' }}><Mail size={8} color="rgba(255,255,255,0.9)" />{email}</span>}
              {phone    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8, color: 'rgba(255,255,255,0.85)' }}><Phone size={8} color="rgba(255,255,255,0.9)" />{phone}</span>}
              {location && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8, color: 'rgba(255,255,255,0.85)' }}><MapPin size={8} color="rgba(255,255,255,0.9)" />{location}</span>}
              {website  && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8, color: 'rgba(255,255,255,0.85)' }}><Globe size={8} color="rgba(255,255,255,0.9)" />{website}</span>}
              {linkedin && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8, color: 'rgba(255,255,255,0.85)' }}><Link2 size={8} color="rgba(255,255,255,0.9)" />{linkedin}</span>}
              {github   && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8, color: 'rgba(255,255,255,0.85)' }}><GitBranch size={8} color="rgba(255,255,255,0.9)" />{github}</span>}
            </div>
          </div>

          {/* Photo in the white prism zone */}
          <div style={{ flexShrink: 0, marginTop: 10 }}>
            {photo ? (
              <img src={photo} alt={name} style={{ width: 200, height: 200, borderRadius: 8, objectFit: 'cover', border: `2px solid ${tc}30`, boxShadow: `0 4px 16px rgba(0,0,0,0.15)` }} />
            ) : (
              <div style={{ width: 72, height: 72, borderRadius: 8, background: `${tc}15`, border: `2px solid ${tc}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 900, color: tc }}>
                {name.charAt(0)}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── SUMMARY ── */}
      {summary && (
        <div style={{ padding: '14px 36px', background: `${tc}06`, borderBottom: `1px solid ${tc}15` }}>
          <p style={{ fontSize: 9.5, color: '#374151', lineHeight: 1.8, margin: 0 }}>{summary}</p>
        </div>
      )}

      {/* ── BODY ── */}
      <div style={{ display: 'flex' }}>

        {/* LEFT 62% */}
        <div style={{ width: '62%', padding: '4px 20px 28px 36px' }}>

          {/* Staggered timeline experience */}
          {exp.length > 0 && (
            <div>
              <PPH title="Experience" tc={tc} />
              <div style={{ position: 'relative' }}>
                {/* Vertical timeline line */}
                <div style={{ position: 'absolute', left: 8, top: 0, bottom: 0, width: 1, background: `${tc}20` }} />
                {exp.map((e, i) => (
                  <div key={e.id || i} style={{ marginBottom: 16, paddingLeft: 24, position: 'relative' }}>
                    {/* Triangle marker on timeline */}
                    <svg width="16" height="16" viewBox="0 0 16 16" style={{ position: 'absolute', left: 0, top: 2 }}>
                      <polygon points="8,0 16,16 0,16" fill={e.current ? tc : `${tc}50`} />
                    </svg>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                      <div>
                        <div style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{e.company}</div>
                        <div style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginTop: 1 }}>{e.role}</div>
                        {e.location && <div style={{ fontSize: 8, color: '#9ca3af', marginTop: 1 }}>{e.location}</div>}
                      </div>
                      <span style={{ fontSize: 7.5, color: tc, background: `${tc}10`, padding: '2px 8px', borderRadius: 10, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0, border: `1px solid ${tc}20` }}>
                        {e.startDate} — {e.current ? 'Present' : e.endDate}
                      </span>
                    </div>
                    {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                      <p key={li} style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.65, margin: '2px 0 0' }}>{l}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {prj.length > 0 && (
            <div>
              <PPH title="Projects" tc={tc} />
              {prj.map((p, i) => (
                <div key={p.id || i} style={{ marginBottom: 10, padding: '10px 12px', background: `${tc}06`, borderRadius: 8, border: `1px solid ${tc}15` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                    <span style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{p.name}</span>
                    {p.link && <span style={{ fontSize: 8, color: tc }}>{p.link}</span>}
                  </div>
                  {p.description && <p style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.65, margin: '0 0 5px' }}>{p.description}</p>}
                  {p.tech && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {p.tech.split(',').map((t, ti) => (
                        <span key={ti} style={{ fontSize: 7.5, background: `${tc}15`, color: tc, padding: '2px 7px', borderRadius: 10, fontWeight: 600 }}>{t.trim()}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {edu.length > 0 && (
            <div>
              <PPH title="Education" tc={tc} />
              {edu.map((e, i) => (
                <div key={e.id || i} style={{ marginBottom: 10, paddingLeft: 24, position: 'relative' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" style={{ position: 'absolute', left: 0, top: 2 }}>
                    <polygon points="7,0 14,14 0,14" fill={`${tc}60`} />
                  </svg>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{e.degree}</div>
                      <div style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginTop: 1 }}>{e.school}</div>
                    </div>
                    <span style={{ fontSize: 7.5, color: '#9ca3af', whiteSpace: 'nowrap', marginLeft: 8 }}>{e.startDate} — {e.endDate}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
                    {e.gpa && <span style={{ fontSize: 8, color: '#64748b' }}>GPA: <strong style={{ color: '#0f172a' }}>{e.gpa}</strong></span>}
                    {e.achievements && <span style={{ fontSize: 8, color: '#64748b', fontStyle: 'italic' }}>{e.achievements}</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT 38% */}
        <div style={{ width: '38%', padding: '4px 28px 28px 12px', borderLeft: `1px solid ${tc}12` }}>

          {skl.length > 0 && (
            <div>
              <PPH title="Skills" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {skl.map((s, i) => (
                  <div key={s.id || i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                      <span style={{ fontSize: 9, fontWeight: 600, color: '#222' }}>{s.name}</span>
                      <span style={{ fontSize: 7.5, color: tc, fontWeight: 700 }}>{s.level}%</span>
                    </div>
                    <div style={{ height: 5, background: `${tc}12`, borderRadius: 99, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${s.level}%`, background: `linear-gradient(90deg, ${tc}, ${tc}80)`, borderRadius: 99 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {lang.length > 0 && (
            <div>
              <PPH title="Languages" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {lang.map((l, i) => (
                  <div key={l.id || i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 8px', background: `${tc}06`, borderRadius: 6 }}>
                    <span style={{ fontSize: 9, fontWeight: 700, color: '#0f172a' }}>{l.name}</span>
                    <span style={{ fontSize: 8, color: tc, fontWeight: 600 }}>{l.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {cert.length > 0 && (
            <div>
              <PPH title="Certifications" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {cert.map((c, i) => (
                  <div key={c.id || i} style={{ padding: '7px 10px', background: '#f8fafc', borderRadius: 6, border: `1px solid ${tc}15` }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#0f172a' }}>{c.name}</div>
                    <div style={{ fontSize: 8, color: tc, marginTop: 1 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {intr.length > 0 && (
            <div>
              <PPH title="Interests" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {intr.map((it, i) => (
                  <span key={it.id || i} style={{ fontSize: 8.5, fontWeight: 600, background: `${tc}10`, color: tc, padding: '4px 10px', borderRadius: 20, border: `1px solid ${tc}20` }}>
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
