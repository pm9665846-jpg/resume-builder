import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Nisha Kapoor', jobTitle: 'Creative Director',
  email: 'nisha@email.com', phone: '+91 98765 88990',
  location: 'Mumbai, India', website: 'nishakapoor.co',
  linkedin: 'linkedin.com/in/nishakapoor', github: 'github.com/nishakapoor',
  summary: 'Visionary creative director with 10+ years shaping brand narratives for luxury and lifestyle brands. Led campaigns for Vogue India, Lakme Fashion Week, and Tanishq. Expert in visual storytelling, art direction, and cross-cultural brand strategy.',
  experience: [
    { id: 'e1', role: 'Creative Director', company: 'Vogue India', location: 'Mumbai', startDate: 'Jan 2019', endDate: '', current: true, description: '• Directed 120+ editorial shoots with 50M+ combined reach\n• Rebranded Vogue India digital — 340% increase in engagement\n• Led team of 18 creatives across photography, styling, and copy' },
    { id: 'e2', role: 'Art Director', company: 'Lakme Fashion Week', location: 'Mumbai', startDate: 'Mar 2015', endDate: 'Dec 2018', current: false, description: '• Art directed 6 seasons of LFW — 200+ designer showcases\n• Created visual identity system adopted across all brand touchpoints\n• Won Cannes Lions Bronze for "Colours of India" campaign' },
    { id: 'e3', role: 'Senior Designer', company: 'Tanishq', location: 'Bengaluru', startDate: 'Jun 2013', endDate: 'Feb 2015', current: false, description: '• Designed campaign visuals for ₹500Cr jewellery launches\n• Increased brand recall by 42% through consistent visual language' },
  ],
  education: [{ id: 'ed1', degree: 'BDes Communication Design', school: 'NID Ahmedabad', startDate: '2009', endDate: '2013', gpa: 'Distinction', achievements: 'Best Portfolio · NID Gold Medal' }],
  skills: [{ id: 's1', name: 'Art Direction', level: 98 }, { id: 's2', name: 'Brand Strategy', level: 94 }, { id: 's3', name: 'Adobe Suite', level: 97 }, { id: 's4', name: 'Photography', level: 88 }, { id: 's5', name: 'Typography', level: 95 }, { id: 's6', name: 'Motion Design', level: 82 }],
  projects: [{ id: 'p1', name: 'Colours of India', description: 'Pan-India brand campaign celebrating regional aesthetics. 200M+ impressions, Cannes Lions Bronze 2022.', tech: 'Art Direction, Photography, Film', link: 'vogue.in/colours' }],
  certifications: [{ id: 'c1', name: 'Google UX Design', issuer: 'Google', date: '2023-02' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }, { id: 'l3', name: 'French', proficiency: 'Intermediate' }],
  interests: [{ id: 'i1', name: 'Film Photography' }, { id: 'i2', name: 'Textile Art' }, { id: 'i3', name: 'Jazz' }, { id: 'i4', name: 'Travel' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

export default function RunwayTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = g(resume?.themeColor, '#be185d')
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

  // Derive a light tint from tc for alternating bands
  const bandLight = '#fafafa'
  const bandWhite = '#ffffff'

  return (
    <div style={{
      width: 794,
      minHeight: 1123,
      background: bandWhite,
      fontFamily: ff,
      fontSize: 10,
      color: '#1a1a1a',
      display: 'flex',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* ══════════════════════════════════════
          VERTICAL NAME SPINE — left edge
          Like a magazine spine
      ══════════════════════════════════════ */}
      <div style={{
        width: 36,
        minHeight: 1123,
        background: tc,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Vertical name text */}
        <div style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          transform: 'rotate(180deg)',
          color: '#ffffff',
          fontSize: 11,
          fontWeight: 900,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          userSelect: 'none',
        }}>
          {name}
        </div>
        {/* Small dot separator */}
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.4)', margin: '12px 0' }} />
        {/* Vertical job title */}
        <div style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          transform: 'rotate(180deg)',
          color: 'rgba(255,255,255,0.65)',
          fontSize: 7.5,
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          userSelect: 'none',
        }}>
          {jobTitle}
        </div>
      </div>

      {/* ══════════════════════════════════════
          MAIN CONTENT — right of spine
      ══════════════════════════════════════ */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* ── BAND 1: HEADER ── */}
        <div style={{
          background: bandWhite,
          padding: '28px 32px 20px',
          borderBottom: `2px solid ${tc}`,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 16,
        }}>
          <div style={{ flex: 1 }}>
            {/* Large name */}
            <div style={{ fontSize: 32, fontWeight: 900, color: '#111', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 4 }}>
              {name}
            </div>
            {/* Job title with tc color */}
            <div style={{ fontSize: 11, color: tc, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 14 }}>
              {jobTitle}
            </div>
            {/* Contact row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px' }}>
              {email    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#555' }}><Mail size={9} color={tc} />{email}</span>}
              {phone    && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#555' }}><Phone size={9} color={tc} />{phone}</span>}
              {location && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#555' }}><MapPin size={9} color={tc} />{location}</span>}
              {website  && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#555' }}><Globe size={9} color={tc} />{website}</span>}
              {linkedin && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#555' }}><Link2 size={9} color={tc} />{linkedin}</span>}
              {github   && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, color: '#555' }}><GitBranch size={9} color={tc} />{github}</span>}
            </div>
          </div>
          {/* Photo */}
          {photo && (
            <div style={{ flexShrink: 0 }}>
              <img src={photo} alt={name} style={{ width: 72, height: 72, borderRadius: 8, objectFit: 'cover', border: `2px solid ${tc}30` }} />
            </div>
          )}
        </div>

        {/* ── BAND 2: SUMMARY — light bg ── */}
        {summary && (
          <div style={{ background: `${tc}08`, padding: '14px 32px', borderBottom: `1px solid ${tc}15` }}>
            <p style={{ fontSize: 9.5, color: '#374151', lineHeight: 1.8, margin: 0, fontStyle: 'italic' }}>{summary}</p>
          </div>
        )}

        {/* ── BAND 3: EXPERIENCE — white bg ── */}
        {exp.length > 0 && (
          <div style={{ background: bandWhite, padding: '18px 32px 14px', borderBottom: `1px solid #e5e7eb` }}>
            <RunwaySH title="Experience" tc={tc} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {exp.map((e, i) => (
                <div key={e.id || i} style={{ display: 'flex', gap: 14 }}>
                  {/* Left: colored year marker */}
                  <div style={{ flexShrink: 0, width: 44, textAlign: 'right' }}>
                    <div style={{ fontSize: 8, fontWeight: 800, color: tc, lineHeight: 1.3 }}>
                      {e.startDate?.split(' ').pop() || ''}
                    </div>
                    <div style={{ width: '100%', height: 1, background: `${tc}30`, marginTop: 4 }} />
                  </div>
                  {/* Right: content */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                      <div>
                        <span style={{ fontSize: 10.5, fontWeight: 800, color: '#111' }}>{e.company}</span>
                        {e.location && <span style={{ fontSize: 8.5, color: '#9ca3af', marginLeft: 6 }}>· {e.location}</span>}
                      </div>
                      <span style={{ fontSize: 7.5, color: '#9ca3af', whiteSpace: 'nowrap', marginLeft: 8 }}>
                        {e.startDate} — {e.current ? 'Present' : e.endDate}
                      </span>
                    </div>
                    <div style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginBottom: 5 }}>{e.role}</div>
                    {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                      <p key={li} style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.65, margin: '1px 0' }}>{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── BAND 4: SKILLS + EDUCATION — light bg, two columns ── */}
        <div style={{ background: bandLight, padding: '18px 32px 14px', borderBottom: `1px solid #e5e7eb`, display: 'flex', gap: 28 }}>
          {/* Skills */}
          {skl.length > 0 && (
            <div style={{ flex: 1 }}>
              <RunwaySH title="Skills" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {skl.map((s, i) => (
                  <div key={s.id || i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                      <span style={{ fontSize: 9, fontWeight: 600, color: '#222' }}>{s.name}</span>
                      <span style={{ fontSize: 7.5, color: tc, fontWeight: 700 }}>{s.level}%</span>
                    </div>
                    <div style={{ height: 4, background: `${tc}15`, borderRadius: 99, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${s.level}%`, background: `linear-gradient(90deg, ${tc}, ${tc}80)`, borderRadius: 99 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Education */}
          {edu.length > 0 && (
            <div style={{ flex: 1 }}>
              <RunwaySH title="Education" tc={tc} />
              {edu.map((e, i) => (
                <div key={e.id || i} style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: '#111' }}>{e.degree}</div>
                  <div style={{ fontSize: 9, color: tc, fontWeight: 600, marginTop: 1 }}>{e.school}</div>
                  <div style={{ fontSize: 8, color: '#9ca3af', marginTop: 2 }}>{e.startDate} — {e.endDate}{e.gpa ? ` · ${e.gpa}` : ''}</div>
                  {e.achievements && <div style={{ fontSize: 8, color: '#6b7280', marginTop: 2, fontStyle: 'italic' }}>{e.achievements}</div>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── BAND 5: PROJECTS — white bg ── */}
        {prj.length > 0 && (
          <div style={{ background: bandWhite, padding: '18px 32px 14px', borderBottom: `1px solid #e5e7eb` }}>
            <RunwaySH title="Projects" tc={tc} />
            {prj.map((p, i) => (
              <div key={p.id || i} style={{ marginBottom: 10, padding: '10px 14px', background: `${tc}06`, borderRadius: 8, border: `1px solid ${tc}15` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                  <span style={{ fontSize: 10.5, fontWeight: 800, color: '#111' }}>{p.name}</span>
                  {p.link && <span style={{ fontSize: 8, color: tc }}>{p.link}</span>}
                </div>
                {p.description && <p style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.65, margin: '0 0 5px' }}>{p.description}</p>}
                {p.tech && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {p.tech.split(',').map((t, ti) => (
                      <span key={ti} style={{ fontSize: 7.5, background: `${tc}12`, color: tc, padding: '2px 7px', borderRadius: 10, fontWeight: 600 }}>{t.trim()}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── BAND 6: LANGUAGES + CERTS + INTERESTS — light bg, 3 columns ── */}
        <div style={{ background: bandLight, padding: '18px 32px 20px', display: 'flex', gap: 24, flex: 1 }}>
          {/* Languages */}
          {lang.length > 0 && (
            <div style={{ flex: 1 }}>
              <RunwaySH title="Languages" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {lang.map((l, i) => (
                  <div key={l.id || i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 8px', background: '#fff', borderRadius: 6, border: `1px solid ${tc}15` }}>
                    <span style={{ fontSize: 9, fontWeight: 700, color: '#111' }}>{l.name}</span>
                    <span style={{ fontSize: 8, color: tc, fontWeight: 600 }}>{l.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Certifications */}
          {cert.length > 0 && (
            <div style={{ flex: 1 }}>
              <RunwaySH title="Certifications" tc={tc} />
              {cert.map((c, i) => (
                <div key={c.id || i} style={{ marginBottom: 8, padding: '7px 10px', background: '#fff', borderRadius: 6, border: `1px solid ${tc}15` }}>
                  <div style={{ fontSize: 9, fontWeight: 700, color: '#111' }}>{c.name}</div>
                  <div style={{ fontSize: 8, color: tc, marginTop: 1 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                </div>
              ))}
            </div>
          )}
          {/* Interests */}
          {intr.length > 0 && (
            <div style={{ flex: 1 }}>
              <RunwaySH title="Interests" tc={tc} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {intr.map((it, i) => {
                  const colors = ['#fdf4ff', '#eff6ff', '#f0fdf4', '#fff7ed']
                  const texts  = ['#7e22ce', '#1d4ed8', '#166534', '#9a3412']
                  const ci = i % 4
                  return (
                    <span key={it.id || i} style={{ fontSize: 8.5, fontWeight: 600, background: colors[ci], color: texts[ci], padding: '4px 10px', borderRadius: 20 }}>
                      {it.name}
                    </span>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* ── FOOTER BAND — tc color ── */}
        <div style={{ background: tc, height: 6 }} />
      </div>
    </div>
  )
}

function RunwaySH({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <span style={{ fontSize: 8, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.25em', color: tc }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: `${tc}20` }} />
    </div>
  )
}
