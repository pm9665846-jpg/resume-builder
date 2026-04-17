import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Arjun Verma', jobTitle: 'Senior Machine Learning Engineer',
  email: 'arjun@email.com', phone: '+91 98765 11234',
  location: 'Bengaluru, India', website: 'arjunverma.ai',
  linkedin: 'linkedin.com/in/arjunverma', github: 'github.com/arjunverma',
  summary: 'ML engineer with 7+ years building production AI systems at scale. Deployed models serving 100M+ users at Google and Flipkart. Expert in LLMs, computer vision, and MLOps.',
  experience: [
    { id: 'e1', role: 'Senior ML Engineer', company: 'Google DeepMind', location: 'Bengaluru', startDate: 'Apr 2021', endDate: '', current: true, description: '• Built recommendation system serving 500M+ YouTube users\n• Reduced model inference latency by 68% through quantization\n• Led team of 8 ML engineers across 3 product areas' },
    { id: 'e2', role: 'ML Engineer', company: 'Flipkart', location: 'Bengaluru', startDate: 'Jun 2018', endDate: 'Mar 2021', current: false, description: '• Built demand forecasting model saving ₹80Cr in inventory costs\n• Deployed real-time fraud detection with 99.4% precision' },
    { id: 'e3', role: 'Data Scientist', company: 'Mu Sigma', location: 'Bengaluru', startDate: 'Jul 2016', endDate: 'May 2018', current: false, description: '• Built predictive models for Fortune 500 retail clients\n• Automated 30+ reporting pipelines saving 200+ hours/month' },
  ],
  education: [{ id: 'ed1', degree: 'M.Tech AI & ML', school: 'IIT Bombay', startDate: '2014', endDate: '2016', gpa: '9.3/10', achievements: 'Best Thesis · Institute Silver Medal' }],
  skills: [
    { id: 's1', name: 'PyTorch', level: 96 }, { id: 's2', name: 'Python', level: 98 },
    { id: 's3', name: 'TensorFlow', level: 90 }, { id: 's4', name: 'MLOps', level: 88 },
    { id: 's5', name: 'LLMs', level: 92 }, { id: 's6', name: 'Kubernetes', level: 82 },
  ],
  projects: [{ id: 'p1', name: 'OpenLLM Bench', description: 'Open-source LLM benchmarking framework. 5k+ GitHub stars, used by 200+ research teams worldwide.', tech: 'Python, PyTorch, HuggingFace', link: 'github.com/arjunverma/openllm' }],
  certifications: [{ id: 'c1', name: 'Google ML Engineer', issuer: 'Google Cloud', date: '2023-05' }, { id: 'c2', name: 'AWS ML Specialty', issuer: 'Amazon', date: '2022-08' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
  interests: [{ id: 'i1', name: 'AI Research' }, { id: 'i2', name: 'Kaggle' }, { id: 'i3', name: 'Chess' }, { id: 'i4', name: 'Cycling' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

function HexSkill({ name, level, tc }) {
  const h = 56, w = 48
  const pts = `${w/2},0 ${w},${h*0.25} ${w},${h*0.75} ${w/2},${h} 0,${h*0.75} 0,${h*0.25}`
  const id = `hx${name.replace(/[^a-z]/gi,'')}`
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
      <div style={{ position: 'relative', width: w, height: h }}>
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position: 'absolute', top: 0, left: 0 }}>
          <polygon points={pts} fill={`${tc}18`} stroke={`${tc}40`} strokeWidth="1" />
        </svg>
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position: 'absolute', top: 0, left: 0 }}>
          <defs><clipPath id={id}><polygon points={pts} /></clipPath></defs>
          <rect x="0" y={h*(1-level/100)} width={w} height={h*(level/100)} fill={tc} opacity="0.65" clipPath={`url(#${id})`} />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 7, fontWeight: 800, color: '#111', textAlign: 'center', lineHeight: 1.2, padding: '0 3px' }}>{name}</span>
          <span style={{ fontSize: 6.5, color: tc, fontWeight: 700 }}>{level}%</span>
        </div>
      </div>
    </div>
  )
}

function HexSH({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, marginTop: 20 }}>
      <svg width="14" height="16" viewBox="0 0 14 16" style={{ flexShrink: 0 }}>
        <polygon points="7,0 14,4 14,12 7,16 0,12 0,4" fill={tc} opacity="0.9" />
        <polygon points="7,3 11,5.5 11,10.5 7,13 3,10.5 3,5.5" fill="white" opacity="0.3" />
      </svg>
      <span style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#0f172a' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: `${tc}20` }} />
    </div>
  )
}

export default function HoneycombTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = g(resume?.themeColor, '#7c3aed')
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

  const pillColors = ['#fdf4ff','#eff6ff','#f0fdf4','#fff7ed']
  const pillText   = ['#7e22ce','#1d4ed8','#166534','#9a3412']

  return (
    <div style={{ width: 794, minHeight: 1123, background: '#ffffff', fontFamily: ff, fontSize: 10, color: '#1e293b', position: 'relative', overflow: 'hidden' }}>

      {/* Honeycomb background pattern */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden', opacity: 0.035 }}>
        <svg width="794" height="1123" viewBox="0 0 794 1123">
          {Array.from({ length: 9 }).map((_, row) =>
            Array.from({ length: 14 }).map((_, col) => {
              const hx = 28, hy = 32
              const x = col * hx * 1.75 + (row % 2 === 0 ? 0 : hx * 0.875) - 14
              const y = row * hy * 0.75 - 16
              const pts = `${x+hx*0.5},${y} ${x+hx},${y+hy*0.25} ${x+hx},${y+hy*0.75} ${x+hx*0.5},${y+hy} ${x},${y+hy*0.75} ${x},${y+hy*0.25}`
              return <polygon key={`${row}-${col}`} points={pts} fill="none" stroke={tc} strokeWidth="1" />
            })
          )}
        </svg>
      </div>

      {/* HEADER */}
      <div style={{ position: 'relative', zIndex: 1, background: `linear-gradient(135deg, ${tc}12 0%, ${tc}06 60%, transparent 100%)`, padding: '28px 36px 20px', borderBottom: `2px solid ${tc}18` }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
              <svg width="20" height="23" viewBox="0 0 20 23" style={{ flexShrink: 0 }}>
                <polygon points="10,0 20,5.75 20,17.25 10,23 0,17.25 0,5.75" fill={tc} />
                <polygon points="10,4 16,7.5 16,14.5 10,18 4,14.5 4,7.5" fill="white" opacity="0.25" />
              </svg>
              <h1 style={{ fontSize: 28, fontWeight: 900, color: '#0f172a', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.1 }}>{name}</h1>
            </div>
            <p style={{ fontSize: 11, color: tc, fontWeight: 700, margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px' }}>
              {email    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><Mail size={9} color={tc} />{email}</span>}
              {phone    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><Phone size={9} color={tc} />{phone}</span>}
              {location && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><MapPin size={9} color={tc} />{location}</span>}
              {website  && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><Globe size={9} color={tc} />{website}</span>}
              {linkedin && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><Link2 size={9} color={tc} />{linkedin}</span>}
              {github   && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><GitBranch size={9} color={tc} />{github}</span>}
            </div>
          </div>
          {photo && (
            <div style={{ flexShrink: 0 }}>
              <div style={{ width: 72, height: 83, position: 'relative' }}>
                <svg width="72" height="83" viewBox="0 0 72 83" style={{ position: 'absolute', top: 0, left: 0 }}>
                  <defs>
                    <clipPath id="hexPhotoHC">
                      <polygon points="36,0 72,20.75 72,62.25 36,83 0,62.25 0,20.75" />
                    </clipPath>
                  </defs>
                  <image href={photo} x="0" y="0" width="72" height="83" clipPath="url(#hexPhotoHC)" preserveAspectRatio="xMidYMid slice" />
                  <polygon points="36,0 72,20.75 72,62.25 36,83 0,62.25 0,20.75" fill="none" stroke={tc} strokeWidth="2" opacity="0.4" />
                </svg>
              </div>
            </div>
          )}
        </div>
        {summary && (
          <div style={{ marginTop: 14, padding: '10px 14px', background: 'rgba(255,255,255,0.8)', borderRadius: 8, borderLeft: `3px solid ${tc}` }}>
            <p style={{ fontSize: 9.5, color: '#374151', lineHeight: 1.75, margin: 0, fontStyle: 'italic' }}>{summary}</p>
          </div>
        )}
      </div>

      {/* BODY */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex' }}>

        {/* LEFT 60% */}
        <div style={{ width: '60%', padding: '4px 20px 28px 36px' }}>

          {exp.length > 0 && (
            <div>
              <HexSH title="Experience" tc={tc} />
              {exp.map((e, i) => (
                <div key={e.id || i} style={{ marginBottom: 14, paddingLeft: 14, borderLeft: `2px solid ${tc}25`, position: 'relative' }}>
                  <svg width="10" height="11" viewBox="0 0 10 11" style={{ position: 'absolute', left: -6, top: 2 }}>
                    <polygon points="5,0 10,2.75 10,8.25 5,11 0,8.25 0,2.75" fill={e.current ? tc : `${tc}60`} />
                  </svg>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                    <div>
                      <span style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{e.company}</span>
                      {e.location && <span style={{ fontSize: 8.5, color: '#9ca3af', marginLeft: 6 }}>· {e.location}</span>}
                    </div>
                    <span style={{ fontSize: 7.5, color: '#9ca3af', whiteSpace: 'nowrap', marginLeft: 8 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
                  </div>
                  <div style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginBottom: 5 }}>{e.role}</div>
                  {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                    <p key={li} style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.65, margin: '1px 0' }}>{l}</p>
                  ))}
                </div>
              ))}
            </div>
          )}

          {prj.length > 0 && (
            <div>
              <HexSH title="Projects" tc={tc} />
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

          {edu.length > 0 && (
            <div>
              <HexSH title="Education" tc={tc} />
              {edu.map((e, i) => (
                <div key={e.id || i} style={{ marginBottom: 10, padding: '10px 12px', background: '#f8fafc', borderRadius: 8, border: `1px solid ${tc}15` }}>
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

        {/* RIGHT 40% */}
        <div style={{ width: '40%', padding: '4px 28px 28px 16px', borderLeft: `1px solid ${tc}12` }}>

          {skl.length > 0 && (
            <div>
              <HexSH title="Skills" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'flex-start' }}>
                {skl.map((s, i) => (
                  <HexSkill key={s.id || i} name={s.name} level={s.level || 70} tc={tc} />
                ))}
              </div>
              <p style={{ fontSize: 7, color: '#94a3b8', fontStyle: 'italic', marginTop: 8 }}>Fill level = proficiency</p>
            </div>
          )}

          {lang.length > 0 && (
            <div>
              <HexSH title="Languages" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {lang.map((l, i) => (
                  <div key={l.id || i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 10px', background: '#f8fafc', borderRadius: 6, border: `1px solid ${tc}15` }}>
                    <span style={{ fontSize: 9, fontWeight: 700, color: '#0f172a' }}>{l.name}</span>
                    <span style={{ fontSize: 8, color: tc, fontWeight: 600 }}>{l.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {cert.length > 0 && (
            <div>
              <HexSH title="Certifications" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {cert.map((c, i) => (
                  <div key={c.id || i} style={{ padding: '8px 10px', background: '#f8fafc', borderRadius: 6, border: `1px solid ${tc}15` }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#0f172a' }}>{c.name}</div>
                    <div style={{ fontSize: 8, color: tc, marginTop: 1 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {intr.length > 0 && (
            <div>
              <HexSH title="Interests" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {intr.map((it, i) => (
                  <span key={it.id || i} style={{ fontSize: 8.5, fontWeight: 600, background: pillColors[i % 4], color: pillText[i % 4], padding: '4px 10px', borderRadius: 20 }}>
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
