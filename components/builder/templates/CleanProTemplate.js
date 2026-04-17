import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

export default function CleanProTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = resume?.themeColor || '#2563eb'
  const ff = resume?.fontFamily || 'Arial, sans-serif'

  const name     = pi.name     || 'Your Name'
  const jobTitle = pi.jobTitle || 'Job Title'
  const email    = pi.email    || ''
  const phone    = pi.phone    || ''
  const location = pi.location || ''
  const website  = pi.website  || ''
  const linkedin = pi.linkedin || ''
  const github   = pi.github   || ''
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
    <div style={{ width: 794, minHeight: 1123, background: '#fff', fontFamily: ff, fontSize: 10, color: '#1e293b' }}>

      {/* TOP COLOR BAR */}
      <div style={{ height: 6, background: tc }} />

      {/* HEADER */}
      <div style={{ padding: '24px 40px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: `1px solid #e2e8f0` }}>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: '#0f172a', margin: '0 0 4px' }}>{name}</h1>
          <p style={{ fontSize: 11, color: tc, fontWeight: 700, margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px' }}>
            {email    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><Mail size={9} color={tc} />{email}</span>}
            {phone    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><Phone size={9} color={tc} />{phone}</span>}
            {location && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><MapPin size={9} color={tc} />{location}</span>}
            {website  && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><Globe size={9} color={tc} />{website}</span>}
            {linkedin && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><Link2 size={9} color={tc} />{linkedin}</span>}
            {github   && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#475569' }}><GitBranch size={9} color={tc} />{github}</span>}
          </div>
        </div>
        {photo && <img src={photo} alt={name} style={{ width: 68, height: 68, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${tc}`, flexShrink: 0 }} />}
      </div>

      {/* SUMMARY */}
      {summary && (
        <div style={{ padding: '12px 40px', background: `${tc}08`, borderBottom: `1px solid ${tc}15` }}>
          <p style={{ fontSize: 9.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>{summary}</p>
        </div>
      )}

      {/* BODY */}
      <div style={{ display: 'flex' }}>

        {/* LEFT 63% */}
        <div style={{ width: '63%', padding: '16px 20px 24px 40px' }}>

          {/* EXPERIENCE */}
          {experience.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, borderBottom: `2px solid ${tc}`, paddingBottom: 4, marginBottom: 10 }}>Experience</h2>
              {experience.map((e, i) => (
                <div key={e.id || i} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{e.company}</div>
                      <div style={{ fontSize: 9.5, color: tc, fontWeight: 600 }}>{e.role}</div>
                      {e.location && <div style={{ fontSize: 8, color: '#94a3b8' }}>{e.location}</div>}
                    </div>
                    <span style={{ fontSize: 7.5, color: '#64748b', whiteSpace: 'nowrap', marginLeft: 8 }}>
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

          {/* PROJECTS */}
          {projects.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, borderBottom: `2px solid ${tc}`, paddingBottom: 4, marginBottom: 10 }}>Projects</h2>
              {projects.map((p, i) => (
                <div key={p.id || i} style={{ marginBottom: 10, padding: '8px 10px', background: `${tc}06`, borderRadius: 6, border: `1px solid ${tc}15` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <span style={{ fontSize: 10, fontWeight: 800, color: '#0f172a' }}>{p.name}</span>
                    {p.link && <span style={{ fontSize: 8, color: tc }}>{p.link}</span>}
                  </div>
                  {p.description && <p style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.6, margin: '0 0 4px' }}>{p.description}</p>}
                  {p.tech && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {p.tech.split(',').map((t, ti) => (
                        <span key={ti} style={{ fontSize: 7.5, background: `${tc}15`, color: tc, padding: '2px 6px', borderRadius: 8, fontWeight: 600 }}>{t.trim()}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* EDUCATION */}
          {education.length > 0 && (
            <div>
              <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, borderBottom: `2px solid ${tc}`, paddingBottom: 4, marginBottom: 10 }}>Education</h2>
              {education.map((e, i) => (
                <div key={e.id || i} style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: 10.5, fontWeight: 800, color: '#0f172a' }}>{e.degree}</div>
                      <div style={{ fontSize: 9.5, color: tc, fontWeight: 600 }}>{e.school}</div>
                    </div>
                    <span style={{ fontSize: 7.5, color: '#64748b', whiteSpace: 'nowrap', marginLeft: 8 }}>{e.startDate} — {e.endDate}</span>
                  </div>
                  {e.gpa && <div style={{ fontSize: 8, color: '#64748b', marginTop: 2 }}>GPA: {e.gpa}</div>}
                  {e.achievements && <div style={{ fontSize: 8, color: '#64748b', fontStyle: 'italic', marginTop: 2 }}>{e.achievements}</div>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT 37% */}
        <div style={{ width: '37%', padding: '16px 32px 24px 16px', borderLeft: `1px solid #e2e8f0`, background: '#fafafa' }}>

          {/* SKILLS */}
          {skills.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, borderBottom: `2px solid ${tc}`, paddingBottom: 4, marginBottom: 10 }}>Skills</h2>
              {skills.map((s, i) => (
                <div key={s.id || i} style={{ marginBottom: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <span style={{ fontSize: 9, fontWeight: 600, color: '#1e293b' }}>{s.name}</span>
                    <span style={{ fontSize: 7.5, color: tc, fontWeight: 700 }}>{s.level}%</span>
                  </div>
                  <div style={{ height: 5, background: `${tc}18`, borderRadius: 99, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${s.level}%`, background: tc, borderRadius: 99 }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* LANGUAGES */}
          {languages.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, borderBottom: `2px solid ${tc}`, paddingBottom: 4, marginBottom: 10 }}>Languages</h2>
              {languages.map((l, i) => (
                <div key={l.id || i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 9, fontWeight: 600, color: '#1e293b' }}>{l.name}</span>
                  <span style={{ fontSize: 8, color: tc }}>{l.proficiency}</span>
                </div>
              ))}
            </div>
          )}

          {/* CERTIFICATIONS */}
          {certifications.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, borderBottom: `2px solid ${tc}`, paddingBottom: 4, marginBottom: 10 }}>Certifications</h2>
              {certifications.map((c, i) => (
                <div key={c.id || i} style={{ marginBottom: 7 }}>
                  <div style={{ fontSize: 9, fontWeight: 700, color: '#0f172a' }}>{c.name}</div>
                  <div style={{ fontSize: 8, color: '#64748b' }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                </div>
              ))}
            </div>
          )}

          {/* INTERESTS */}
          {interests.length > 0 && (
            <div>
              <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: tc, borderBottom: `2px solid ${tc}`, paddingBottom: 4, marginBottom: 10 }}>Interests</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {interests.map((it, i) => (
                  <span key={it.id || i} style={{ fontSize: 8, background: `${tc}12`, color: tc, padding: '3px 8px', borderRadius: 12, fontWeight: 600 }}>{it.name}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
