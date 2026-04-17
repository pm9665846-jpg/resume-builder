import { Mail, Phone, MapPin, Globe, Link2 } from 'lucide-react'

export default function MyTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = resume?.themeColor || '#8b5cf6'
  const ff = resume?.fontFamily || 'Arial, sans-serif'

  const name     = pi.name     || 'Your Name'
  const jobTitle = pi.jobTitle || 'Job Title'
  const email    = pi.email    || ''
  const phone    = pi.phone    || ''
  const location = pi.location || ''
  const website  = pi.website  || ''
  const linkedin = pi.linkedin || ''
  const summary  = pi.summary  || ''
  const photo    = pi.photo    || ''

  const experience     = resume?.experience     || []
  const education      = resume?.education      || []
  const skills         = resume?.skills         || []
  const projects       = resume?.projects       || []
  const certifications = resume?.certifications || []
  const languages      = resume?.languages      || []
  const interests      = resume?.interests      || []

  return (
    <div style={{ width: 794, minHeight: 1123, fontFamily: ff, background: '#fff', color: '#1e293b', display: 'flex', flexDirection: 'column' }}>

      {/* HEADER */}
      <div style={{ background: tc, padding: '32px 40px 24px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative circle */}
        <div style={{ position: 'absolute', right: -40, top: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'absolute', right: 40, bottom: -60, width: 140, height: 140, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 20, position: 'relative', zIndex: 1 }}>
          {photo && (
            <img src={photo} alt={name} style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.5)', flexShrink: 0 }} />
          )}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 28, fontWeight: 900, margin: '0 0 4px', letterSpacing: '-0.01em' }}>{name}</h1>
            <p style={{ fontSize: 12, margin: '0 0 12px', opacity: 0.85, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px' }}>
              {email    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, opacity: 0.9 }}><Mail size={9} />{email}</span>}
              {phone    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, opacity: 0.9 }}><Phone size={9} />{phone}</span>}
              {location && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, opacity: 0.9 }}><MapPin size={9} />{location}</span>}
              {website  && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, opacity: 0.9 }}><Globe size={9} />{website}</span>}
              {linkedin && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, opacity: 0.9 }}><Link2 size={9} />{linkedin}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div style={{ display: 'flex', flex: 1 }}>

        {/* LEFT COLUMN */}
        <div style={{ width: '35%', background: '#f8fafc', padding: '24px 20px', borderRight: '1px solid #e2e8f0' }}>

          {summary && (
            <Section title="About Me" tc={tc}>
              <p style={{ fontSize: 9, lineHeight: 1.7, color: '#475569', margin: 0 }}>{summary}</p>
            </Section>
          )}

          {skills.length > 0 && (
            <Section title="Skills" tc={tc}>
              {skills.map((s, i) => (
                <div key={s.id || i} style={{ marginBottom: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <span style={{ fontSize: 8.5, fontWeight: 600, color: '#334155' }}>{s.name}</span>
                    <span style={{ fontSize: 7.5, color: tc, fontWeight: 700 }}>{s.level || 80}%</span>
                  </div>
                  <div style={{ height: 4, background: '#e2e8f0', borderRadius: 2, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${s.level || 80}%`, background: tc, borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </Section>
          )}

          {languages.length > 0 && (
            <Section title="Languages" tc={tc}>
              {languages.map((l, i) => (
                <div key={l.id || i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: 8.5, color: '#334155', fontWeight: 600 }}>{l.name}</span>
                  <span style={{ fontSize: 8, color: tc }}>{l.proficiency}</span>
                </div>
              ))}
            </Section>
          )}

          {certifications.length > 0 && (
            <Section title="Certifications" tc={tc}>
              {certifications.map((c, i) => (
                <div key={c.id || i} style={{ marginBottom: 8, padding: '6px 8px', background: '#fff', borderRadius: 6, border: `1px solid ${tc}25` }}>
                  <div style={{ fontSize: 8.5, fontWeight: 700, color: '#1e293b' }}>{c.name}</div>
                  <div style={{ fontSize: 7.5, color: tc, marginTop: 1 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                </div>
              ))}
            </Section>
          )}

          {interests.length > 0 && (
            <Section title="Interests" tc={tc}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {interests.map((it, i) => (
                  <span key={it.id || i} style={{ fontSize: 8, padding: '3px 8px', borderRadius: 12, background: `${tc}15`, color: tc, fontWeight: 600 }}>
                    {it.name}
                  </span>
                ))}
              </div>
            </Section>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ flex: 1, padding: '24px 28px' }}>

          {experience.length > 0 && (
            <Section title="Experience" tc={tc}>
              {experience.map((e, i) => (
                <div key={e.id || i} style={{ marginBottom: 16, paddingLeft: 14, borderLeft: `2px solid ${tc}30`, position: 'relative' }}>
                  <div style={{ position: 'absolute', left: -5, top: 5, width: 8, height: 8, borderRadius: '50%', background: e.current ? tc : '#cbd5e1', border: `2px solid #fff` }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                    <div>
                      <div style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{e.role}</div>
                      <div style={{ fontSize: 9, color: tc, fontWeight: 600 }}>{e.company}{e.location ? ` · ${e.location}` : ''}</div>
                    </div>
                    <span style={{ fontSize: 7.5, color: '#94a3b8', whiteSpace: 'nowrap', marginLeft: 8, background: '#f1f5f9', padding: '2px 7px', borderRadius: 8 }}>
                      {e.startDate} – {e.current ? 'Present' : e.endDate}
                    </span>
                  </div>
                  {e.description && e.description.split('\n').filter(Boolean).map((line, li) => (
                    <p key={li} style={{ fontSize: 8.5, color: '#475569', lineHeight: 1.65, margin: '2px 0' }}>{line}</p>
                  ))}
                </div>
              ))}
            </Section>
          )}

          {projects.length > 0 && (
            <Section title="Projects" tc={tc}>
              {projects.map((p, i) => (
                <div key={p.id || i} style={{ marginBottom: 10, padding: '10px 12px', background: '#f8fafc', borderRadius: 8, border: `1px solid ${tc}20` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 3 }}>
                    <span style={{ fontSize: 10, fontWeight: 800, color: '#0f172a' }}>{p.name}</span>
                    {p.link && <span style={{ fontSize: 7.5, color: tc }}>{p.link}</span>}
                  </div>
                  {p.description && <p style={{ fontSize: 8.5, color: '#475569', lineHeight: 1.65, margin: '0 0 5px' }}>{p.description}</p>}
                  {p.tech && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {p.tech.split(',').map((t, ti) => (
                        <span key={ti} style={{ fontSize: 7.5, background: `${tc}15`, color: tc, padding: '2px 7px', borderRadius: 8, fontWeight: 600 }}>{t.trim()}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </Section>
          )}

          {education.length > 0 && (
            <Section title="Education" tc={tc}>
              {education.map((e, i) => (
                <div key={e.id || i} style={{ marginBottom: 10, padding: '10px 12px', background: '#f8fafc', borderRadius: 8, border: `1px solid ${tc}20` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 800, color: '#0f172a' }}>{e.degree}</div>
                      <div style={{ fontSize: 9, color: tc, fontWeight: 600, marginTop: 1 }}>{e.school}</div>
                    </div>
                    <span style={{ fontSize: 7.5, color: '#94a3b8', whiteSpace: 'nowrap', marginLeft: 8 }}>{e.startDate} – {e.endDate}</span>
                  </div>
                  {(e.gpa || e.achievements) && (
                    <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
                      {e.gpa && <span style={{ fontSize: 8, color: '#64748b' }}>GPA: <strong style={{ color: '#0f172a' }}>{e.gpa}</strong></span>}
                      {e.achievements && <span style={{ fontSize: 8, color: '#64748b', fontStyle: 'italic' }}>{e.achievements}</span>}
                    </div>
                  )}
                </div>
              ))}
            </Section>
          )}

        </div>
      </div>
    </div>
  )
}

function Section({ title, tc, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <div style={{ width: 3, height: 14, background: tc, borderRadius: 2 }} />
        <h3 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#0f172a', margin: 0 }}>{title}</h3>
      </div>
      {children}
    </div>
  )
}
