import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Aryan Shah', jobTitle: 'Senior Security Researcher',
  email: 'aryan@email.com', phone: '+91 98765 44321',
  location: 'Pune, India', website: 'aryanshah.sec',
  linkedin: 'linkedin.com/in/aryanshah', github: 'github.com/aryanshah',
  summary: 'Security researcher with 7+ years finding critical vulnerabilities in major platforms. $500K+ in bug bounty earnings. CVE author with 40+ published vulnerabilities. Speaker at DEF CON, Black Hat, and Nullcon.',
  experience: [
    { id: 'e1', role: 'Senior Security Researcher', company: 'Synack Red Team', location: 'Remote', startDate: 'Mar 2021', endDate: '', current: true, description: '• Discovered 200+ critical vulnerabilities in Fortune 500 targets\n• Earned $180K in bug bounties in 2023 alone\n• Mentored 15 junior researchers in advanced exploitation techniques' },
    { id: 'e2', role: 'Penetration Tester', company: 'Cobalt.io', location: 'Remote', startDate: 'Jun 2018', endDate: 'Feb 2021', current: false, description: '• Conducted 150+ penetration tests for SaaS and fintech clients\n• Found critical RCE in 3 unicorn startups before public disclosure\n• Built automated recon framework used by 50+ researchers' },
    { id: 'e3', role: 'Security Analyst', company: 'Quick Heal', location: 'Pune', startDate: 'Aug 2016', endDate: 'May 2018', current: false, description: '• Analyzed 1000+ malware samples daily\n• Developed YARA rules detecting 200+ malware families' },
  ],
  education: [{ id: 'ed1', degree: 'B.Tech Computer Science', school: 'COEP Pune', startDate: '2012', endDate: '2016', gpa: '8.4/10', achievements: 'CTF Club Founder · National Cyber Olympiad Winner' }],
  skills: [{ id: 's1', name: 'Web Exploitation', level: 97 }, { id: 's2', name: 'Reverse Engineering', level: 90 }, { id: 's3', name: 'Network Pentesting', level: 94 }, { id: 's4', name: 'Python / Go', level: 88 }, { id: 's5', name: 'Malware Analysis', level: 85 }, { id: 's6', name: 'Cloud Security', level: 82 }],
  projects: [{ id: 'p1', name: 'AutoRecon Framework', description: 'Automated reconnaissance framework for bug bounty hunters. 8k+ GitHub stars, used by 2000+ researchers worldwide.', tech: 'Python, Go, Docker, Shodan API', link: 'github.com/aryanshah/autorecon' }],
  certifications: [{ id: 'c1', name: 'OSCP', issuer: 'Offensive Security', date: '2020-06' }, { id: 'c2', name: 'CRTE', issuer: 'Altered Security', date: '2022-03' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }, { id: 'l3', name: 'Gujarati', proficiency: 'Native' }],
  interests: [{ id: 'i1', name: 'CTF Competitions' }, { id: 'i2', name: 'Bug Bounty' }, { id: 'i3', name: 'Chess' }, { id: 'i4', name: 'Astronomy' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

// Neon glow card
function NeonCard({ children, tc, style = {} }) {
  return (
    <div style={{
      background: '#ffffff',
      border: `1.5px solid ${tc}`,
      borderRadius: 6,
      boxShadow: `0 0 8px ${tc}20, inset 0 0 8px ${tc}04`,
      padding: '12px 14px',
      position: 'relative',
      ...style,
    }}>
      {/* Corner accents */}
      <div style={{ position: 'absolute', top: -1, left: -1, width: 8, height: 8, borderTop: `2px solid ${tc}`, borderLeft: `2px solid ${tc}` }} />
      <div style={{ position: 'absolute', top: -1, right: -1, width: 8, height: 8, borderTop: `2px solid ${tc}`, borderRight: `2px solid ${tc}` }} />
      <div style={{ position: 'absolute', bottom: -1, left: -1, width: 8, height: 8, borderBottom: `2px solid ${tc}`, borderLeft: `2px solid ${tc}` }} />
      <div style={{ position: 'absolute', bottom: -1, right: -1, width: 8, height: 8, borderBottom: `2px solid ${tc}`, borderRight: `2px solid ${tc}` }} />
      {children}
    </div>
  )
}

// Section header — terminal style
function NSH({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, marginTop: 20 }}>
      {/* Terminal prompt */}
      <span style={{ fontSize: 9, fontWeight: 900, color: tc, fontFamily: 'monospace' }}>{'>'}</span>
      <span style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#0f172a', fontFamily: 'monospace' }}>{title}</span>
      {/* Cursor block */}
      <div style={{ width: 8, height: 12, background: tc, opacity: 0.7 }} />
      <div style={{ flex: 1, height: 1, background: `${tc}25` }} />
    </div>
  )
}

export default function NeonOutlineTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = g(resume?.themeColor, '#10b981')
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
    <div style={{
      width: 794, minHeight: 1123,
      background: '#ffffff',
      fontFamily: ff, fontSize: 10,
      color: '#0f172a',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Subtle scan-line background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {Array.from({ length: 56 }).map((_, i) => (
          <div key={i} style={{ position: 'absolute', top: i * 20, left: 0, right: 0, height: 1, background: `${tc}04` }} />
        ))}
      </div>

      {/* ── HEADER ── */}
      <div style={{ position: 'relative', zIndex: 1, padding: '32px 36px 24px', borderBottom: `2px solid ${tc}` }}>

        {/* Outlined name — stroke effect using text-shadow trick */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, justifyContent: 'space-between' }}>
          <div style={{ flex: 1 }}>
            {/* Big outlined name */}
            <div style={{
              fontSize: 38, fontWeight: 900, lineHeight: 1,
              letterSpacing: '-0.03em',
              color: 'transparent',
              WebkitTextStroke: `2px ${tc}`,
              textStroke: `2px ${tc}`,
              marginBottom: 6,
              fontFamily: 'Arial Black, Arial, sans-serif',
            }}>
              {name}
            </div>
            {/* Solid filled name slightly offset — creates depth */}
            <div style={{
              fontSize: 38, fontWeight: 900, lineHeight: 1,
              letterSpacing: '-0.03em',
              color: `${tc}15`,
              marginTop: -38,
              marginLeft: 2,
              marginBottom: 10,
              fontFamily: 'Arial Black, Arial, sans-serif',
              userSelect: 'none',
            }}>
              {name}
            </div>

            {/* Job title with terminal style */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
              <span style={{ fontSize: 9, color: tc, fontFamily: 'monospace', fontWeight: 700 }}>{'$ whoami >'}</span>
              <span style={{ fontSize: 10.5, color: '#0f172a', fontWeight: 700, letterSpacing: '0.04em' }}>{jobTitle}</span>
            </div>

            {/* Contact */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px' }}>
              {email    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569', fontFamily: 'monospace' }}><Mail size={9} color={tc} />{email}</span>}
              {phone    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569', fontFamily: 'monospace' }}><Phone size={9} color={tc} />{phone}</span>}
              {location && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569', fontFamily: 'monospace' }}><MapPin size={9} color={tc} />{location}</span>}
              {website  && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569', fontFamily: 'monospace' }}><Globe size={9} color={tc} />{website}</span>}
              {linkedin && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569', fontFamily: 'monospace' }}><Link2 size={9} color={tc} />{linkedin}</span>}
              {github   && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569', fontFamily: 'monospace' }}><GitBranch size={9} color={tc} />{github}</span>}
            </div>
          </div>

          {/* Photo with neon border */}
          {photo && (
            <div style={{ flexShrink: 0, position: 'relative' }}>
              <div style={{ width: 200, height: 200, borderRadius: 4, overflow: 'hidden', border: `2px solid ${tc}`, boxShadow: `0 0 12px ${tc}40, 0 0 24px ${tc}15` }}>
                <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              {/* Corner accents on photo */}
              <div style={{ position: 'absolute', top: -3, left: -3, width: 10, height: 10, borderTop: `2px solid ${tc}`, borderLeft: `2px solid ${tc}` }} />
              <div style={{ position: 'absolute', bottom: -3, right: -3, width: 10, height: 10, borderBottom: `2px solid ${tc}`, borderRight: `2px solid ${tc}` }} />
            </div>
          )}
        </div>

        {/* Summary */}
        {summary && (
          <div style={{ marginTop: 14, padding: '10px 14px', background: `${tc}06`, border: `1px solid ${tc}20`, borderRadius: 4, borderLeft: `3px solid ${tc}` }}>
            <span style={{ fontSize: 8.5, color: tc, fontFamily: 'monospace', marginRight: 6 }}>//</span>
            <span style={{ fontSize: 9.5, color: '#374151', lineHeight: 1.75, fontStyle: 'italic' }}>{summary}</span>
          </div>
        )}
      </div>

      {/* ── BODY ── */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex' }}>

        {/* LEFT 60% */}
        <div style={{ width: '60%', padding: '4px 16px 28px 36px' }}>

          {exp.length > 0 && (
            <div>
              <NSH title="Experience" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {exp.map((e, i) => (
                  <NeonCard key={e.id || i} tc={tc}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                      <div>
                        <div style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{e.company}</div>
                        <div style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginTop: 1, fontFamily: 'monospace' }}>{e.role}</div>
                        {e.location && <div style={{ fontSize: 8, color: '#9ca3af', marginTop: 1 }}>{e.location}</div>}
                      </div>
                      <span style={{ fontSize: 7.5, color: tc, background: `${tc}10`, padding: '2px 8px', borderRadius: 3, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0, fontFamily: 'monospace', border: `1px solid ${tc}30` }}>
                        {e.startDate} — {e.current ? 'NOW' : e.endDate}
                      </span>
                    </div>
                    {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                      <p key={li} style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.65, margin: '2px 0 0' }}>{l}</p>
                    ))}
                  </NeonCard>
                ))}
              </div>
            </div>
          )}

          {prj.length > 0 && (
            <div>
              <NSH title="Projects" tc={tc} />
              {prj.map((p, i) => (
                <NeonCard key={p.id || i} tc={tc} style={{ marginBottom: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                    <span style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{p.name}</span>
                    {p.link && <span style={{ fontSize: 8, color: tc, fontFamily: 'monospace' }}>{p.link}</span>}
                  </div>
                  {p.description && <p style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.65, margin: '0 0 5px' }}>{p.description}</p>}
                  {p.tech && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {p.tech.split(',').map((t, ti) => (
                        <span key={ti} style={{ fontSize: 7.5, background: `${tc}10`, color: tc, padding: '2px 7px', borderRadius: 3, fontWeight: 600, fontFamily: 'monospace', border: `1px solid ${tc}25` }}>{t.trim()}</span>
                      ))}
                    </div>
                  )}
                </NeonCard>
              ))}
            </div>
          )}

          {edu.length > 0 && (
            <div>
              <NSH title="Education" tc={tc} />
              {edu.map((e, i) => (
                <NeonCard key={e.id || i} tc={tc} style={{ marginBottom: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{e.degree}</div>
                      <div style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginTop: 1 }}>{e.school}</div>
                    </div>
                    <span style={{ fontSize: 7.5, color: '#9ca3af', whiteSpace: 'nowrap', marginLeft: 8, fontFamily: 'monospace' }}>{e.startDate}–{e.endDate}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12, marginTop: 5 }}>
                    {e.gpa && <span style={{ fontSize: 8, color: '#64748b', fontFamily: 'monospace' }}>GPA: {e.gpa}</span>}
                    {e.achievements && <span style={{ fontSize: 8, color: '#64748b', fontStyle: 'italic' }}>{e.achievements}</span>}
                  </div>
                </NeonCard>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT 40% */}
        <div style={{ width: '40%', padding: '4px 28px 28px 8px', borderLeft: `1px solid ${tc}20` }}>

          {skl.length > 0 && (
            <div>
              <NSH title="Skills" tc={tc} />
              <NeonCard tc={tc}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {skl.map((s, i) => (
                    <div key={s.id || i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                        <span style={{ fontSize: 9, fontWeight: 600, color: '#222', fontFamily: 'monospace' }}>{s.name}</span>
                        <span style={{ fontSize: 7.5, color: tc, fontWeight: 700, fontFamily: 'monospace' }}>{s.level}%</span>
                      </div>
                      <div style={{ height: 5, background: `${tc}12`, borderRadius: 2, overflow: 'hidden', border: `1px solid ${tc}20` }}>
                        <div style={{ height: '100%', width: `${s.level}%`, background: tc, borderRadius: 2, boxShadow: `0 0 6px ${tc}60` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </NeonCard>
            </div>
          )}

          {lang.length > 0 && (
            <div>
              <NSH title="Languages" tc={tc} />
              <NeonCard tc={tc}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {lang.map((l, i) => (
                    <div key={l.id || i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 9, fontWeight: 700, color: '#0f172a', fontFamily: 'monospace' }}>{l.name}</span>
                      <span style={{ fontSize: 8, color: tc, fontWeight: 600, background: `${tc}10`, padding: '1px 8px', borderRadius: 3, fontFamily: 'monospace' }}>{l.proficiency}</span>
                    </div>
                  ))}
                </div>
              </NeonCard>
            </div>
          )}

          {cert.length > 0 && (
            <div>
              <NSH title="Certifications" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {cert.map((c, i) => (
                  <NeonCard key={c.id || i} tc={tc}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#0f172a', fontFamily: 'monospace' }}>{c.name}</div>
                    <div style={{ fontSize: 8, color: tc, marginTop: 2, fontFamily: 'monospace' }}>{c.issuer}{c.date ? ` :: ${c.date}` : ''}</div>
                  </NeonCard>
                ))}
              </div>
            </div>
          )}

          {intr.length > 0 && (
            <div>
              <NSH title="Interests" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {intr.map((it, i) => (
                  <span key={it.id || i} style={{ fontSize: 8.5, fontWeight: 600, background: `${tc}08`, color: tc, padding: '4px 10px', borderRadius: 3, border: `1px solid ${tc}30`, fontFamily: 'monospace', boxShadow: `0 0 6px ${tc}15` }}>
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
