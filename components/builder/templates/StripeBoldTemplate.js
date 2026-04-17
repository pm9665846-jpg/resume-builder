// ============================================================
// FILE 1: resume-builder/components/builder/templates/StripeBoldTemplate.js
// Yeh naya template file hai — har template ek alag file hota hai
// ============================================================

import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Rahul Kapoor', jobTitle: 'Full Stack Developer',
  email: 'rahul@email.com', phone: '+91 98765 43210',
  location: 'Delhi, India', website: 'rahulkapoor.dev',
  linkedin: 'linkedin.com/in/rahulkapoor', github: 'github.com/rahulkapoor',
  summary: 'Full stack developer with 5+ years building scalable web apps. Expert in React, Node.js, and cloud infrastructure. Shipped 20+ products used by 1M+ users.',
  experience: [
    { id: 'e1', role: 'Senior Full Stack Developer', company: 'Paytm', location: 'Delhi', startDate: 'Jan 2022', endDate: '', current: true, description: '• Built payment gateway handling ₹500Cr daily transactions\n• Led team of 6 engineers\n• Reduced API latency by 60%' },
    { id: 'e2', role: 'Full Stack Developer', company: 'Zomato', location: 'Gurugram', startDate: 'Jun 2019', endDate: 'Dec 2021', current: false, description: '• Built restaurant discovery features for 10M+ users\n• Improved app performance by 40%' },
  ],
  education: [{ id: 'ed1', degree: 'B.Tech Computer Science', school: 'DTU Delhi', startDate: '2015', endDate: '2019', gpa: '8.7/10', achievements: 'Best Project Award' }],
  skills: [{ id: 's1', name: 'React / Next.js', level: 95 }, { id: 's2', name: 'Node.js', level: 92 }, { id: 's3', name: 'TypeScript', level: 88 }, { id: 's4', name: 'AWS', level: 82 }, { id: 's5', name: 'PostgreSQL', level: 85 }, { id: 's6', name: 'Docker', level: 78 }],
  projects: [{ id: 'p1', name: 'PayFlow', description: 'Open-source payment SDK. 3k GitHub stars, used by 500+ developers.', tech: 'Node.js, React, Stripe API', link: 'github.com/rahulkapoor/payflow' }],
  certifications: [{ id: 'c1', name: 'AWS Solutions Architect', issuer: 'Amazon', date: '2023-05' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
  interests: [{ id: 'i1', name: 'Open Source' }, { id: 'i2', name: 'Gaming' }, { id: 'i3', name: 'Chess' }, { id: 'i4', name: 'Hiking' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

// Section header component — reusable inside this template
function SBH({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, marginTop: 20 }}>
      <div style={{ width: 20, height: 3, background: tc, borderRadius: 2 }} />
      <span style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#0f172a' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: `${tc}20` }} />
    </div>
  )
}

// Default export — yeh function hi template hai
export default function StripeBoldTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = g(resume?.themeColor, '#f97316')  // orange default
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

      {/* Bold stripe header — thick colored top bar */}
      <div style={{ height: 8, background: `linear-gradient(90deg, ${tc}, ${tc}cc, ${tc}66)` }} />

      {/* Header */}
      <div style={{ padding: '24px 36px 20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, borderBottom: `1px solid #e5e7eb` }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: '#0f172a', margin: '0 0 4px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontWeight: 700, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px' }}>
            {email    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><Mail size={9} color={tc} />{email}</span>}
            {phone    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><Phone size={9} color={tc} />{phone}</span>}
            {location && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><MapPin size={9} color={tc} />{location}</span>}
            {website  && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><Globe size={9} color={tc} />{website}</span>}
            {linkedin && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><Link2 size={9} color={tc} />{linkedin}</span>}
            {github   && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><GitBranch size={9} color={tc} />{github}</span>}
          </div>
        </div>
        {photo && <img src={photo} alt={name} style={{ width: 68, height: 68, borderRadius: 8, objectFit: 'cover', border: `2px solid ${tc}30`, flexShrink: 0 }} />}
      </div>

      {/* Summary */}
      {summary && (
        <div style={{ padding: '14px 36px', background: `${tc}06`, borderBottom: `1px solid ${tc}15` }}>
          <p style={{ fontSize: 9.5, color: '#374151', lineHeight: 1.8, margin: 0 }}>{summary}</p>
        </div>
      )}

      {/* Body — two columns */}
      <div style={{ display: 'flex' }}>

        {/* Left 62% */}
        <div style={{ width: '62%', padding: '4px 20px 28px 36px' }}>

          {exp.length > 0 && (
            <div>
              <SBH title="Experience" tc={tc} />
              {exp.map((e, i) => (
                <div key={e.id || i} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: i < exp.length - 1 ? `1px solid #f0f0f0` : 'none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
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

          {prj.length > 0 && (
            <div>
              <SBH title="Projects" tc={tc} />
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
              <SBH title="Education" tc={tc} />
              {edu.map((e, i) => (
                <div key={e.id || i} style={{ marginBottom: 10 }}>
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

        {/* Right 38% */}
        <div style={{ width: '38%', padding: '4px 28px 28px 12px', borderLeft: `3px solid ${tc}15` }}>

          {skl.length > 0 && (
            <div>
              <SBH title="Skills" tc={tc} />
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
            </div>
          )}

          {lang.length > 0 && (
            <div>
              <SBH title="Languages" tc={tc} />
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
              <SBH title="Certifications" tc={tc} />
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
              <SBH title="Interests" tc={tc} />
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

      {/* Bottom stripe */}
      <div style={{ height: 4, background: `linear-gradient(90deg, ${tc}66, ${tc}cc, ${tc})`, position: 'absolute', bottom: 0, left: 0, right: 0 }} />
    </div>
  )
}
