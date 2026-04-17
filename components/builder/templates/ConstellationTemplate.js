import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Zaid Hassan', jobTitle: 'Senior DevOps & Platform Engineer',
  email: 'zaid@email.com', phone: '+91 98765 22110',
  location: 'Hyderabad, India', website: 'zaidhassan.dev',
  linkedin: 'linkedin.com/in/zaidhassan', github: 'github.com/zaidhassan',
  summary: 'Platform engineer with 8+ years building developer infrastructure at scale. Reduced deployment time from 2 hours to 4 minutes at Razorpay. Expert in Kubernetes, Terraform, and internal developer platforms. Open source contributor.',
  experience: [
    { id: 'e1', role: 'Senior Platform Engineer', company: 'Razorpay', location: 'Bengaluru', startDate: 'Mar 2020', endDate: '', current: true, description: '• Built internal developer platform used by 800+ engineers\n• Reduced deployment time from 2 hours to 4 minutes\n• Led Kubernetes migration of 300+ microservices' },
    { id: 'e2', role: 'DevOps Engineer', company: 'Swiggy', location: 'Bengaluru', startDate: 'Jun 2017', endDate: 'Feb 2020', current: false, description: '• Managed infrastructure serving 10M+ daily orders\n• Reduced cloud costs by ₹3Cr/year through optimization\n• Built CI/CD pipelines for 150+ services' },
    { id: 'e3', role: 'Systems Engineer', company: 'Infosys', location: 'Pune', startDate: 'Aug 2015', endDate: 'May 2017', current: false, description: '• Automated infrastructure provisioning for 50+ clients\n• Reduced manual ops work by 70% through scripting' },
  ],
  education: [{ id: 'ed1', degree: 'B.Tech Computer Science', school: 'BITS Pilani', startDate: '2011', endDate: '2015', gpa: '8.6/10', achievements: 'Linux Users Group Founder' }],
  skills: [
    { id: 's1', name: 'Kubernetes', level: 96 }, { id: 's2', name: 'Terraform', level: 94 },
    { id: 's3', name: 'AWS', level: 92 }, { id: 's4', name: 'Go / Python', level: 88 },
    { id: 's5', name: 'Prometheus', level: 90 }, { id: 's6', name: 'ArgoCD', level: 85 },
  ],
  projects: [{ id: 'p1', name: 'DevPortal', description: 'Internal developer portal used by 800+ engineers. Reduced onboarding time from 2 weeks to 2 days.', tech: 'Go, React, Kubernetes, Backstage', link: 'github.com/zaidhassan/devportal' }],
  certifications: [{ id: 'c1', name: 'CKA / CKAD', issuer: 'CNCF', date: '2022-09' }, { id: 'c2', name: 'AWS Solutions Architect', issuer: 'Amazon', date: '2021-05' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }, { id: 'l3', name: 'Urdu', proficiency: 'Native' }],
  interests: [{ id: 'i1', name: 'Open Source' }, { id: 'i2', name: 'Astronomy' }, { id: 'i3', name: 'Chess' }, { id: 'i4', name: 'Hiking' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

function SkillNode({ name, level, tc, x, y }) {
  const r = 3 + (level / 100) * 5
  return (
    <g>
      <circle cx={x} cy={y} r={r + 4} fill={tc} opacity="0.06" />
      <circle cx={x} cy={y} r={r + 2} fill={tc} opacity="0.12" />
      <circle cx={x} cy={y} r={r} fill={tc} opacity="0.85" />
      <text x={x} y={y + r + 9} textAnchor="middle" fontSize="7" fill="#374151" fontWeight="600">{name}</text>
      <text x={x} y={y + r + 17} textAnchor="middle" fontSize="6" fill={tc} fontWeight="700">{level}%</text>
    </g>
  )
}

function CSH({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, marginTop: 20 }}>
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: tc, boxShadow: `0 0 5px ${tc}60` }} />
      <div style={{ width: 2, height: 2, borderRadius: '50%', background: tc, opacity: 0.5 }} />
      <span style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#0f172a' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: `${tc}30` }} />
    </div>
  )
}

export default function ConstellationTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = g(resume?.themeColor, '#38bdf8')
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

  const nodePositions = [
    { x: 30, y: 40 }, { x: 90, y: 20 }, { x: 150, y: 50 },
    { x: 210, y: 25 }, { x: 260, y: 55 }, { x: 290, y: 30 },
    { x: 70, y: 80 }, { x: 130, y: 90 }, { x: 190, y: 75 },
  ]
  const connections = [[0,1],[1,2],[2,3],[3,4],[4,5],[0,6],[6,7],[7,8],[2,7],[1,6],[3,8]]

  return (
    <div style={{ width: 794, minHeight: 1123, background: '#f8faff', fontFamily: ff, fontSize: 10, color: '#1e293b', position: 'relative', overflow: 'hidden' }}>

      {/* Soft star dots */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <svg width="794" height="1123" viewBox="0 0 794 1123">
          {[[45,80],[120,35],[200,90],[310,45],[420,70],[530,30],[650,85],[720,50],[780,120],[80,180],[190,150],[280,200],[380,160],[490,190],[600,140],[700,175],[760,200],[30,280],[150,260],[250,300],[360,270],[470,290],[580,250],[680,280],[750,310],[60,380],[170,360],[270,400],[380,370],[490,390],[600,350],[700,380],[770,410],[40,480],[160,460],[260,500],[370,470],[480,490],[590,450],[690,480],[760,510],[50,580],[170,560],[270,600],[380,570],[490,590],[600,550],[700,580],[770,610],[35,680],[155,660],[255,700],[365,670],[475,690],[585,650],[685,680],[755,710],[45,780],[165,760],[265,800],[375,770],[485,790],[595,750],[695,780],[765,810],[55,880],[175,860],[275,900],[385,870],[495,890],[605,850],[705,880],[775,910],[40,980],[160,960],[260,1000],[370,970],[480,990],[590,950],[690,980],[760,1010]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.5 : 1} fill={tc} opacity={0.06 + (i % 5) * 0.03} />
          ))}
        </svg>
      </div>

      {/* HEADER */}
      <div style={{ position: 'relative', zIndex: 1, padding: '32px 36px 24px', borderBottom: `1px solid ${tc}20`, background: `linear-gradient(135deg, ${tc}08 0%, ${tc}04 60%, transparent 100%)` }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 30, fontWeight: 900, color: '#0f172a', margin: '0 0 4px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{name}</h1>
            <p style={{ fontSize: 11, color: tc, fontWeight: 600, margin: '0 0 14px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{jobTitle}</p>
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
              <img src={photo} alt={name} style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${tc}40`, boxShadow: `0 4px 16px ${tc}20` }} />
            </div>
          )}
        </div>
        {summary && (
          <div style={{ marginTop: 14, padding: '10px 14px', background: 'rgba(255,255,255,0.85)', borderRadius: 8, borderLeft: `2px solid ${tc}` }}>
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
              <CSH title="Experience" tc={tc} />
              {exp.map((e, i) => (
                <div key={e.id || i} style={{ marginBottom: 16, paddingLeft: 16, borderLeft: `1px solid ${tc}30`, position: 'relative' }}>
                  <div style={{ position: 'absolute', left: -4, top: 4, width: 7, height: 7, borderRadius: '50%', background: e.current ? tc : `${tc}60`, boxShadow: e.current ? `0 0 6px ${tc}60` : 'none' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                    <div>
                      <span style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{e.company}</span>
                      {e.location && <span style={{ fontSize: 8.5, color: '#9ca3af', marginLeft: 6 }}>· {e.location}</span>}
                    </div>
                    <span style={{ fontSize: 7.5, color: tc, whiteSpace: 'nowrap', marginLeft: 8, background: `${tc}12`, padding: '1px 7px', borderRadius: 10 }}>
                      {e.startDate} — {e.current ? 'Present' : e.endDate}
                    </span>
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
              <CSH title="Projects" tc={tc} />
              {prj.map((p, i) => (
                <div key={p.id || i} style={{ marginBottom: 10, padding: '10px 12px', background: `${tc}06`, borderRadius: 8, border: `1px solid ${tc}18` }}>
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
              <CSH title="Education" tc={tc} />
              {edu.map((e, i) => (
                <div key={e.id || i} style={{ marginBottom: 10, padding: '10px 12px', background: '#ffffff', borderRadius: 8, border: `1px solid ${tc}15`, boxShadow: `0 1px 6px ${tc}08` }}>
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
        <div style={{ width: '40%', padding: '4px 28px 28px 16px', borderLeft: `1px solid ${tc}15` }}>

          {skl.length > 0 && (
            <div>
              <CSH title="Skills" tc={tc} />
              <div style={{ background: '#ffffff', borderRadius: 10, border: `1px solid ${tc}15`, padding: 8, marginBottom: 8, boxShadow: `0 2px 12px ${tc}08` }}>
                <svg width="100%" viewBox="0 0 310 120" style={{ display: 'block' }}>
                  {connections.map(([a, b], i) => {
                    const pa = nodePositions[a], pb = nodePositions[b]
                    if (!pa || !pb) return null
                    return <line key={i} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y} stroke={tc} strokeWidth="0.5" opacity="0.2" strokeDasharray="3,3" />
                  })}
                  {skl.slice(0, 9).map((s, i) => {
                    const pos = nodePositions[i]
                    if (!pos) return null
                    return <SkillNode key={s.id || i} name={s.name} level={s.level || 70} tc={tc} x={pos.x} y={pos.y} />
                  })}
                </svg>
              </div>
              <p style={{ fontSize: 7, color: '#94a3b8', fontStyle: 'italic', margin: 0 }}>Node size = proficiency level</p>
            </div>
          )}

          {lang.length > 0 && (
            <div>
              <CSH title="Languages" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {lang.map((l, i) => (
                  <div key={l.id || i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 10px', background: '#ffffff', borderRadius: 6, border: `1px solid ${tc}15` }}>
                    <span style={{ fontSize: 9, fontWeight: 700, color: '#0f172a' }}>{l.name}</span>
                    <span style={{ fontSize: 8, color: tc, fontWeight: 600 }}>{l.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {cert.length > 0 && (
            <div>
              <CSH title="Certifications" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {cert.map((c, i) => (
                  <div key={c.id || i} style={{ padding: '8px 10px', background: '#ffffff', borderRadius: 6, border: `1px solid ${tc}18` }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#0f172a' }}>{c.name}</div>
                    <div style={{ fontSize: 8, color: tc, marginTop: 1 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {intr.length > 0 && (
            <div>
              <CSH title="Interests" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {intr.map((it, i) => (
                  <span key={it.id || i} style={{ fontSize: 8.5, fontWeight: 600, background: `${tc}10`, color: tc, padding: '4px 10px', borderRadius: 20, border: `1px solid ${tc}25` }}>
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
