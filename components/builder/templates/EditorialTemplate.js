import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Kavitha Nair', jobTitle: 'Senior Legal Counsel & Corporate Advisor',
  email: 'kavitha@email.com', phone: '+91 98765 66789',
  location: 'Mumbai, India', website: 'kavithanair.law',
  linkedin: 'linkedin.com/in/kavithanair', github: 'github.com/kavithanair',
  summary: 'Distinguished legal counsel with 14+ years advising Fortune 500 companies on M&A, regulatory compliance, and corporate governance. Closed transactions worth $8B+. Recognized by Chambers & Partners as a leading lawyer in India for three consecutive years.',
  experience: [
    { id: 'e1', role: 'Senior Legal Counsel', company: 'Tata Sons', location: 'Mumbai', startDate: 'Feb 2019', endDate: '', current: true, description: '• Led legal due diligence for 12 M&A transactions worth $3.2B\n• Advised board on corporate governance and regulatory compliance\n• Built and managed 15-person legal team across 4 jurisdictions' },
    { id: 'e2', role: 'Associate Partner', company: 'AZB & Partners', location: 'Mumbai', startDate: 'Jun 2014', endDate: 'Jan 2019', current: false, description: '• Advised on 30+ cross-border M&A transactions\n• Led regulatory filings with SEBI, RBI, and CCI\n• Recognized as Rising Star by Legal 500 Asia Pacific 2018' },
    { id: 'e3', role: 'Senior Associate', company: 'Cyril Amarchand Mangaldas', location: 'Mumbai', startDate: 'Aug 2010', endDate: 'May 2014', current: false, description: '• Drafted and negotiated 200+ commercial contracts\n• Advised on IPO documentation for 5 listed companies' },
  ],
  education: [{ id: 'ed1', degree: 'LLM Corporate Law', school: 'London School of Economics', startDate: '2009', endDate: '2010', gpa: 'Distinction', achievements: 'LSE Law Review Editor · Best Dissertation' }],
  skills: [{ id: 's1', name: 'M&A Advisory', level: 97 }, { id: 's2', name: 'Corporate Governance', level: 95 }, { id: 's3', name: 'Regulatory Compliance', level: 93 }, { id: 's4', name: 'Contract Drafting', level: 96 }, { id: 's5', name: 'Litigation', level: 82 }, { id: 's6', name: 'IPO Advisory', level: 88 }],
  projects: [{ id: 'p1', name: 'Tata-Air India Acquisition', description: 'Led legal team for Tata Sons\' $2.4B acquisition of Air India. Coordinated with 6 law firms across 3 jurisdictions. Closed in record 18 months.', tech: 'M&A, Regulatory, Aviation Law', link: 'tata.com/airindia' }],
  certifications: [{ id: 'c1', name: 'Chartered Institute of Arbitrators', issuer: 'CIArb', date: '2018-06' }, { id: 'c2', name: 'SEBI Registered Advisor', issuer: 'SEBI', date: '2015-03' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Malayalam', proficiency: 'Native' }, { id: 'l3', name: 'Hindi', proficiency: 'Fluent' }],
  interests: [{ id: 'i1', name: 'Legal Writing' }, { id: 'i2', name: 'Classical Dance' }, { id: 'i3', name: 'Yoga' }, { id: 'i4', name: 'Travel' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

// Elegant section header
function ESH({ title, tc }) {
  return (
    <div style={{ marginBottom: 14, marginTop: 22 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ height: 1, width: 20, background: tc }} />
        <span style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#1a1a1a', fontFamily: 'Georgia, serif' }}>{title}</span>
        <div style={{ flex: 1, height: 1, background: `${tc}30` }} />
      </div>
    </div>
  )
}

export default function EditorialTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = g(resume?.themeColor, '#7c3aed')
  const ff  = 'Georgia, serif'
  const ff2 = g(resume?.fontFamily, 'Arial, sans-serif')

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
      fontFamily: ff2, fontSize: 10,
      color: '#1a1a1a',
      position: 'relative',
    }}>

      {/* ── HEADER ── */}
      <div style={{ padding: '36px 44px 0', borderBottom: `2px solid #1a1a1a` }}>

        {/* Top thin colored line */}
        <div style={{ height: 3, background: tc, marginBottom: 20, width: 60 }} />

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, marginBottom: 16 }}>
          <div style={{ flex: 1 }}>
            {/* Name in serif */}
            <h1 style={{ fontSize: 32, fontWeight: 400, color: '#1a1a1a', margin: '0 0 4px', fontFamily: ff, letterSpacing: '0.02em', lineHeight: 1.1 }}>{name}</h1>
            {/* Job title */}
            <p style={{ fontSize: 10, color: tc, fontWeight: 600, margin: 0, textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: ff2 }}>{jobTitle}</p>
          </div>
          {photo && (
            <div style={{ flexShrink: 0 }}>
              <img src={photo} alt={name} style={{ width: 68, height: 68, borderRadius: 2, objectFit: 'cover', border: `1px solid #e5e7eb` }} />
            </div>
          )}
        </div>

        {/* Contact row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 18px', paddingBottom: 14 }}>
          {email    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#555' }}><Mail size={9} color={tc} />{email}</span>}
          {phone    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#555' }}><Phone size={9} color={tc} />{phone}</span>}
          {location && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#555' }}><MapPin size={9} color={tc} />{location}</span>}
          {website  && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#555' }}><Globe size={9} color={tc} />{website}</span>}
          {linkedin && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#555' }}><Link2 size={9} color={tc} />{linkedin}</span>}
          {github   && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#555' }}><GitBranch size={9} color={tc} />{github}</span>}
        </div>
      </div>

      {/* ── SUMMARY — THE STAR FEATURE ── */}
      {summary && (
        <div style={{ padding: '20px 44px', borderBottom: `1px solid #e5e7eb`, position: 'relative' }}>
          {/* Decorative opening quote mark */}
          <div style={{ position: 'absolute', top: 10, left: 32, fontSize: 48, color: `${tc}20`, fontFamily: ff, lineHeight: 1, userSelect: 'none' }}>"</div>

          {/* Left border — double line elegant style */}
          <div style={{ position: 'absolute', left: 44, top: 20, bottom: 20, width: 3, display: 'flex', gap: 2 }}>
            <div style={{ width: 2, background: tc, borderRadius: 1 }} />
            <div style={{ width: 1, background: `${tc}40`, borderRadius: 1 }} />
          </div>

          <p style={{
            fontSize: 10.5,
            color: '#374151',
            lineHeight: 1.9,
            margin: 0,
            fontFamily: ff,
            fontStyle: 'italic',
            paddingLeft: 16,
            paddingRight: 8,
          }}>
            {summary}
          </p>

          {/* Decorative closing quote mark */}
          <div style={{ position: 'absolute', bottom: 4, right: 36, fontSize: 48, color: `${tc}20`, fontFamily: ff, lineHeight: 1, userSelect: 'none' }}>"</div>
        </div>
      )}

      {/* ── BODY ── */}
      <div style={{ display: 'flex', padding: '0 0 32px' }}>

        {/* LEFT 62% */}
        <div style={{ width: '62%', padding: '0 20px 0 44px' }}>

          {/* Experience */}
          {exp.length > 0 && (
            <div>
              <ESH title="Experience" tc={tc} />
              {exp.map((e, i) => (
                <div key={e.id || i} style={{ marginBottom: 18, paddingBottom: 18, borderBottom: i < exp.length - 1 ? `1px solid #f0f0f0` : 'none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#1a1a1a', fontFamily: ff }}>{e.company}</div>
                      <div style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginTop: 1, letterSpacing: '0.04em' }}>{e.role}</div>
                      {e.location && <div style={{ fontSize: 8, color: '#9ca3af', marginTop: 1 }}>{e.location}</div>}
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 12 }}>
                      <div style={{ fontSize: 8.5, color: '#6b7280', fontStyle: 'italic', fontFamily: ff }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</div>
                    </div>
                  </div>
                  {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                    <p key={li} style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.7, margin: '2px 0 0' }}>{l}</p>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {prj.length > 0 && (
            <div>
              <ESH title="Notable Work" tc={tc} />
              {prj.map((p, i) => (
                <div key={p.id || i} style={{ marginBottom: 12, padding: '10px 14px', background: `${tc}05`, borderRadius: 4, borderLeft: `3px solid ${tc}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                    <span style={{ fontSize: 10.5, fontWeight: 700, color: '#1a1a1a', fontFamily: ff }}>{p.name}</span>
                    {p.link && <span style={{ fontSize: 8, color: tc, fontStyle: 'italic' }}>{p.link}</span>}
                  </div>
                  {p.description && <p style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.7, margin: '0 0 5px', fontFamily: ff, fontStyle: 'italic' }}>{p.description}</p>}
                  {p.tech && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {p.tech.split(',').map((t, ti) => (
                        <span key={ti} style={{ fontSize: 7.5, background: `${tc}12`, color: tc, padding: '2px 7px', borderRadius: 20, fontWeight: 600 }}>{t.trim()}</span>
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
              <ESH title="Education" tc={tc} />
              {edu.map((e, i) => (
                <div key={e.id || i} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: 10.5, fontWeight: 700, color: '#1a1a1a', fontFamily: ff }}>{e.degree}</div>
                      <div style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginTop: 1 }}>{e.school}</div>
                    </div>
                    <span style={{ fontSize: 8.5, color: '#6b7280', fontStyle: 'italic', fontFamily: ff, whiteSpace: 'nowrap', marginLeft: 12 }}>{e.startDate} — {e.endDate}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
                    {e.gpa && <span style={{ fontSize: 8, color: '#64748b' }}>GPA: <strong style={{ color: '#1a1a1a' }}>{e.gpa}</strong></span>}
                    {e.achievements && <span style={{ fontSize: 8, color: tc, fontStyle: 'italic', fontFamily: ff }}>{e.achievements}</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT 38% */}
        <div style={{ width: '38%', padding: '0 28px 0 12px', borderLeft: `1px solid #e5e7eb` }}>

          {/* Skills */}
          {skl.length > 0 && (
            <div>
              <ESH title="Skills" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {skl.map((s, i) => (
                  <div key={s.id || i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                      <span style={{ fontSize: 9, fontWeight: 600, color: '#1a1a1a', fontFamily: ff }}>{s.name}</span>
                      <span style={{ fontSize: 7.5, color: tc, fontWeight: 700 }}>{s.level}%</span>
                    </div>
                    <div style={{ height: 4, background: `${tc}12`, borderRadius: 99, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${s.level}%`, background: `linear-gradient(90deg, ${tc}, ${tc}80)`, borderRadius: 99 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {lang.length > 0 && (
            <div>
              <ESH title="Languages" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {lang.map((l, i) => (
                  <div key={l.id || i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 9, fontWeight: 600, color: '#1a1a1a', fontFamily: ff }}>{l.name}</span>
                    <span style={{ fontSize: 8, color: tc, fontStyle: 'italic', fontFamily: ff }}>{l.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {cert.length > 0 && (
            <div>
              <ESH title="Certifications" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {cert.map((c, i) => (
                  <div key={c.id || i} style={{ paddingBottom: 8, borderBottom: i < cert.length - 1 ? `1px solid #f0f0f0` : 'none' }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#1a1a1a', fontFamily: ff }}>{c.name}</div>
                    <div style={{ fontSize: 8, color: tc, marginTop: 2, fontStyle: 'italic', fontFamily: ff }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interests */}
          {intr.length > 0 && (
            <div>
              <ESH title="Interests" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {intr.map((it, i) => (
                  <div key={it.id || i} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: tc, flexShrink: 0 }} />
                    <span style={{ fontSize: 9, color: '#374151', fontFamily: ff, fontStyle: 'italic' }}>{it.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom accent line */}
      <div style={{ position: 'absolute', bottom: 0, left: 44, right: 44, height: 2, background: `linear-gradient(to right, ${tc}, ${tc}40, transparent)` }} />
    </div>
  )
}
