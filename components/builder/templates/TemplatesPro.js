import { Mail, Phone, MapPin, Globe, Link2, Award, Star, Briefcase, GraduationCap, Code2, ExternalLink } from 'lucide-react'

const S = {
  name: 'Prachi Mishra', jobTitle: 'Senior Software Engineer',
  email: 'prachi@email.com', phone: '+91 98765 43210',
  location: 'Mumbai, India', website: 'prachidev.com', linkedin: 'linkedin.com/in/prachi',
  summary: 'Senior Software Engineer with 4+ years building scalable full-stack applications. Led teams of 6, reduced system latency by 40%, shipped products used by 500K+ users. Passionate about clean architecture and developer experience.',
  experience: [
    { id: 's1', role: 'Senior Software Engineer', company: 'Google India', location: 'Bengaluru', startDate: 'Jan 2022', endDate: '', current: true, description: '• Architected microservices handling 15M+ API requests/day using Node.js and Kubernetes\n• Led Payments 2.0 platform reducing transaction failures by 35%\n• Mentored 3 junior engineers; 2 received promotions within 12 months' },
    { id: 's2', role: 'Software Engineer', company: 'Razorpay', location: 'Bengaluru', startDate: 'Jul 2020', endDate: 'Dec 2021', current: false, description: '• Built merchant dashboard serving 200K+ active merchants using React & TypeScript\n• Optimized PostgreSQL queries reducing response time from 800ms to 120ms\n• Integrated 8 third-party payment gateways including Stripe and UPI' },
  ],
  education: [{ id: 'e1', degree: 'B.Tech Computer Science & Engineering', school: 'IIT Bombay', startDate: '2015', endDate: '2019', gpa: '9.2/10', achievements: "Dean's List · Best Final Year Project" }],
  skills: [{ id: 'sk1', name: 'JavaScript / TypeScript', level: 95 }, { id: 'sk2', name: 'React / Next.js', level: 92 }, { id: 'sk3', name: 'Node.js / Express', level: 90 }, { id: 'sk4', name: 'Python / Django', level: 80 }, { id: 'sk5', name: 'PostgreSQL / MongoDB', level: 85 }, { id: 'sk6', name: 'AWS / Docker', level: 78 }],
  projects: [{ id: 'p1', name: 'ResumeAI — AI Resume Builder', tech: 'Next.js 14, MySQL, OpenAI API', link: 'resumeai.vercel.app', description: 'Full-stack SaaS resume builder with AI-powered suggestions, 100 professional templates, live preview, and PDF/DOCX export. 2,000+ users in first month.' }],
  certifications: [{ id: 'c1', name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', date: '2023-04' }, { id: 'c2', name: 'Google Cloud Professional', issuer: 'Google Cloud', date: '2022-11' }],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}
function g(v, f) { return v && String(v).trim() !== '' ? v : f }

// ══════════════════════════════════════════════════════════════
// PRO-1: QUANTUM — Asymmetric split with floating photo badge
// ══════════════════════════════════════════════════════════════
export function QuantumTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#6d28d9' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const certs = certifications.length > 0 ? certifications : S.certifications

  return (
    <div style={{ background: 'white', fontFamily: "'Arial', sans-serif", fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', position: 'relative', overflow: 'hidden' }}>
      {/* Background geometric accent */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 280, height: 280, background: `${tc}08`, borderRadius: '0 0 0 100%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: 180, height: 180, background: `${tc}12`, borderRadius: '0 0 0 100%', pointerEvents: 'none' }} />

      {/* Header */}
      <div style={{ padding: '32px 36px 24px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}>
          {/* Photo with ring */}
          {photo && (
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{ width: 88, height: 88, borderRadius: '50%', background: `linear-gradient(135deg, ${tc}, ${tc}60)`, padding: 3 }}>
                <img src={photo} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '2px solid white' }} />
              </div>
              <div style={{ position: 'absolute', bottom: 2, right: 2, width: 18, height: 18, borderRadius: '50%', background: '#22c55e', border: '2px solid white' }} />
            </div>
          )}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 30, fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 6 }}>{name}</h1>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: `${tc}12`, border: `1px solid ${tc}30`, borderRadius: 999, padding: '4px 14px', marginBottom: 12 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: tc }} />
              <span style={{ fontSize: 10.5, fontWeight: 700, color: tc, letterSpacing: '0.04em' }}>{jobTitle}</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 18px', fontSize: 9.5, color: '#64748b' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 2, background: `linear-gradient(to right, ${tc}, ${tc}40, transparent)`, margin: '0 36px' }} />

      <div style={{ display: 'flex', padding: '20px 36px 40px', gap: 28 }}>
        {/* Left column */}
        <div style={{ flex: 1 }}>
          {/* Summary */}
          <div style={{ marginBottom: 20 }}>
            <p style={{ color: '#475569', fontSize: 10.5, lineHeight: 1.85 }}>{summary}</p>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <Briefcase size={13} color={tc} />
              <h2 style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#0f172a' }}>Experience</h2>
            </div>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 16 : 0, paddingLeft: 16, borderLeft: `2px solid ${i === 0 ? tc : '#e2e8f0'}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 11.5, color: '#0f172a' }}>{e.role}</p>
                    <p style={{ fontSize: 10, color: tc, fontWeight: 700 }}>{e.company}{e.location ? <span style={{ color: '#94a3b8', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: 'white', background: i === 0 ? tc : '#94a3b8', padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>
                    {e.startDate} — {e.current ? 'Present' : e.endDate}
                  </span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.65, marginBottom: 2 }}>{l}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <Code2 size={13} color={tc} />
              <h2 style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#0f172a' }}>Projects</h2>
            </div>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 12 : 0, padding: '10px 14px', background: `${tc}06`, border: `1px solid ${tc}18`, borderRadius: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                  <p style={{ fontWeight: 800, fontSize: 11, color: '#0f172a' }}>{p.name}</p>
                  {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 3 }}><ExternalLink size={9} />{p.link}</a>}
                </div>
                {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 5 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 7px', borderRadius: 3, background: `${tc}15`, color: tc, border: `1px solid ${tc}25`, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
                {p.description && <p style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div style={{ width: 200, flexShrink: 0 }}>
          {/* Skills */}
          <div style={{ marginBottom: 20 }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#0f172a', marginBottom: 12 }}>Skills</h2>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 7 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 9.5, color: '#334155', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
                </div>
                <div style={{ height: 4, background: '#f1f5f9', borderRadius: 999 }}>
                  <div style={{ height: 4, background: `linear-gradient(to right, ${tc}, ${tc}80)`, borderRadius: 999, width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div style={{ marginBottom: 20 }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#0f172a', marginBottom: 12 }}>Education</h2>
            {edu.map(e => (
              <div key={e.id} style={{ padding: '10px 12px', background: '#f8fafc', borderRadius: 8, border: '1px solid #e2e8f0' }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#0f172a', lineHeight: 1.3, marginBottom: 2 }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600 }}>{e.school}</p>
                <p style={{ color: '#94a3b8', fontSize: 8.5 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#64748b', fontSize: 8.5, marginTop: 2 }}>GPA: {e.gpa}</p>}
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#0f172a', marginBottom: 12 }}>Certifications</h2>
            {certs.map(c => (
              <div key={c.id} style={{ display: 'flex', gap: 7, marginBottom: 8 }}>
                <Award size={10} color={tc} style={{ flexShrink: 0, marginTop: 1 }} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: 9.5, color: '#0f172a', lineHeight: 1.3 }}>{c.name}</p>
                  <p style={{ color: '#94a3b8', fontSize: 8.5 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// PRO-2: ATLAS — Magazine-style with large name & bold typography
// ══════════════════════════════════════════════════════════════
export function AtlasTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], themeColor = '#0f172a' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects
  const accent = '#f59e0b'

  return (
    <div style={{ background: 'white', fontFamily: "'Arial', sans-serif", fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      {/* Top accent bar */}
      <div style={{ height: 5, background: `linear-gradient(to right, ${accent}, ${accent}80, transparent)` }} />

      {/* Header — magazine style */}
      <div style={{ padding: '24px 32px 20px', display: 'flex', gap: 24, alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: accent, marginBottom: 6 }}>{jobTitle}</p>
          <h1 style={{ fontSize: 36, fontWeight: 900, color: tc, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: 14 }}>{name}</h1>
          <p style={{ color: '#64748b', fontSize: 10.5, lineHeight: 1.8, maxWidth: 420 }}>{summary}</p>
        </div>
        {photo && (
          <div style={{ flexShrink: 0 }}>
            <img src={photo} alt="" style={{ width: 90, height: 90, objectFit: 'cover', borderRadius: 8, border: `3px solid ${accent}` }} />
          </div>
        )}
      </div>

      {/* Contact bar */}
      <div style={{ background: tc, padding: '8px 32px', display: 'flex', flexWrap: 'wrap', gap: '4px 20px' }}>
        {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 9, color: 'rgba(255,255,255,0.85)' }}><I size={8} color={accent} />{v}</span>
        ))}
      </div>

      <div style={{ display: 'flex', padding: '20px 32px 40px', gap: 28 }}>
        {/* Main */}
        <div style={{ flex: 1 }}>
          {/* Experience */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 28, height: 3, background: accent, borderRadius: 2 }} />
              <h2 style={{ fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: tc }}>Work Experience</h2>
            </div>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 16 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                  <div>
                    <p style={{ fontWeight: 900, fontSize: 12, color: tc }}>{e.role}</p>
                    <p style={{ fontSize: 10, color: accent, fontWeight: 700 }}>{e.company}{e.location ? <span style={{ color: '#94a3b8', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: '#64748b', background: '#f8fafc', border: '1px solid #e2e8f0', padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>
                    {e.startDate} — {e.current ? 'Present' : e.endDate}
                  </span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.65, marginBottom: 2 }}>{l}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 28, height: 3, background: accent, borderRadius: 2 }} />
              <h2 style={{ fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: tc }}>Projects</h2>
            </div>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 12 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <p style={{ fontWeight: 800, fontSize: 11, color: tc }}>{p.name}</p>
                  {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: accent, textDecoration: 'none' }}>🔗 {p.link}</a>}
                </div>
                {p.tech && <p style={{ color: '#94a3b8', fontSize: 9, marginBottom: 2 }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ width: 195, flexShrink: 0 }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 20, height: 3, background: accent, borderRadius: 2 }} />
              <h2 style={{ fontSize: 9, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc }}>Skills</h2>
            </div>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 9.5, color: '#334155' }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: accent, fontWeight: 700 }}>{s.level}%</span>
                </div>
                <div style={{ height: 3, background: '#f1f5f9', borderRadius: 2 }}>
                  <div style={{ height: 3, background: accent, borderRadius: 2, width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 20, height: 3, background: accent, borderRadius: 2 }} />
              <h2 style={{ fontSize: 9, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc }}>Education</h2>
            </div>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 8 }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: tc, lineHeight: 1.3 }}>{e.degree}</p>
                <p style={{ color: '#64748b', fontSize: 9.5 }}>{e.school}</p>
                <p style={{ color: '#94a3b8', fontSize: 8.5 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: accent, fontSize: 8.5, fontWeight: 600 }}>GPA: {e.gpa}</p>}
              </div>
            ))}
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 20, height: 3, background: accent, borderRadius: 2 }} />
              <h2 style={{ fontSize: 9, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: tc }}>Certifications</h2>
            </div>
            {certifications.length > 0 ? certifications.map(c => (
              <div key={c.id} style={{ display: 'flex', gap: 6, marginBottom: 7 }}>
                <Award size={9} color={accent} style={{ flexShrink: 0, marginTop: 1 }} />
                <div><p style={{ fontWeight: 700, fontSize: 9.5, color: tc, lineHeight: 1.3 }}>{c.name}</p><p style={{ color: '#94a3b8', fontSize: 8.5 }}>{c.issuer}</p></div>
              </div>
            )) : S.certifications.map(c => (
              <div key={c.id} style={{ display: 'flex', gap: 6, marginBottom: 7 }}>
                <Award size={9} color={accent} style={{ flexShrink: 0, marginTop: 1 }} />
                <div><p style={{ fontWeight: 700, fontSize: 9.5, color: tc, lineHeight: 1.3 }}>{c.name}</p><p style={{ color: '#94a3b8', fontSize: 8.5 }}>{c.issuer}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// PRO-3: NEXUS — Dark luxury with gold accents & timeline
// ══════════════════════════════════════════════════════════════
export function NexusTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], themeColor = '#d4af37' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  return (
    <div style={{ background: '#0d0d0d', color: '#e8e8e8', fontFamily: "'Arial', sans-serif", fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', display: 'flex' }}>
      {/* Left dark sidebar */}
      <div style={{ width: '38%', background: '#111', borderRight: `1px solid ${tc}25`, padding: '28px 18px 40px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Photo */}
        {photo ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 90, height: 90, borderRadius: '50%', background: `linear-gradient(135deg, ${tc}, ${tc}60)`, padding: 2, margin: '0 auto 14px' }}>
              <img src={photo} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
            </div>
          </div>
        ) : <div style={{ height: 10 }} />}

        <div>
          <h1 style={{ fontSize: 18, fontWeight: 900, color: 'white', lineHeight: 1.2, marginBottom: 6 }}>{name}</h1>
          <p style={{ fontSize: 10, color: tc, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 14 }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 9, color: '#9ca3af' }}>
                <I size={9} color={tc} style={{ flexShrink: 0 }} />{v}
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, marginBottom: 12, paddingBottom: 6, borderBottom: `1px solid ${tc}30` }}>Technical Skills</h3>
          {skl.map(s => (
            <div key={s.id} style={{ marginBottom: 7 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                <span style={{ fontSize: 9.5, color: '#d1d5db' }}>{s.name}</span>
                <span style={{ fontSize: 8, color: tc }}>{s.level}%</span>
              </div>
              <div style={{ height: 2, background: '#2a2a2a', borderRadius: 1 }}>
                <div style={{ height: 2, background: `linear-gradient(to right, ${tc}, ${tc}70)`, borderRadius: 1, width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h3 style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, marginBottom: 12, paddingBottom: 6, borderBottom: `1px solid ${tc}30` }}>Education</h3>
          {edu.map(e => (
            <div key={e.id} style={{ marginBottom: 10 }}>
              <p style={{ fontWeight: 700, fontSize: 10, color: 'white', lineHeight: 1.3 }}>{e.degree}</p>
              <p style={{ color: tc, fontSize: 9.5 }}>{e.school}</p>
              <p style={{ color: '#6b7280', fontSize: 8.5 }}>{e.startDate} — {e.endDate}</p>
              {e.gpa && <p style={{ color: '#9ca3af', fontSize: 8.5 }}>GPA: {e.gpa}</p>}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 style={{ fontSize: 8.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, marginBottom: 12, paddingBottom: 6, borderBottom: `1px solid ${tc}30` }}>Certifications</h3>
          {(certifications.length > 0 ? certifications : S.certifications).map(c => (
            <div key={c.id} style={{ display: 'flex', gap: 7, marginBottom: 8 }}>
              <Award size={9} color={tc} style={{ flexShrink: 0, marginTop: 1 }} />
              <div>
                <p style={{ fontSize: 9.5, color: '#d1d5db', fontWeight: 600, lineHeight: 1.3 }}>{c.name}</p>
                <p style={{ color: '#6b7280', fontSize: 8.5 }}>{c.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right content */}
      <div style={{ flex: 1, padding: '28px 24px 40px' }}>
        {/* Summary */}
        <div style={{ marginBottom: 22, padding: '14px 16px', background: '#1a1a1a', borderRadius: 8, borderLeft: `3px solid ${tc}` }}>
          <p style={{ color: '#9ca3af', fontSize: 10.5, lineHeight: 1.85 }}>{summary}</p>
        </div>

        {/* Experience with timeline */}
        <div style={{ marginBottom: 22 }}>
          <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, marginBottom: 16, paddingBottom: 6, borderBottom: `1px solid ${tc}20` }}>Career History</h2>
          {exp.map((e, i) => (
            <div key={e.id} style={{ display: 'flex', gap: 14, marginBottom: i < exp.length - 1 ? 18 : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: i === 0 ? tc : '#374151', border: `2px solid ${i === 0 ? tc : '#4b5563'}`, flexShrink: 0 }} />
                {i < exp.length - 1 && <div style={{ width: 1, flex: 1, background: '#2a2a2a', marginTop: 3 }} />}
              </div>
              <div style={{ flex: 1, paddingBottom: i < exp.length - 1 ? 8 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 12, color: 'white' }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 700 }}>{e.company}{e.location ? <span style={{ color: '#6b7280', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: tc, background: `${tc}15`, border: `1px solid ${tc}30`, padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>
                    {e.startDate} — {e.current ? 'Present' : e.endDate}
                  </span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#9ca3af', fontSize: 9.5, lineHeight: 1.65, marginBottom: 2 }}>{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div>
          <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: tc, marginBottom: 14, paddingBottom: 6, borderBottom: `1px solid ${tc}20` }}>Key Projects</h2>
          {prj.map((p, i) => (
            <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 12 : 0, padding: '10px 14px', background: '#1a1a1a', border: `1px solid ${tc}20`, borderRadius: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                <p style={{ fontWeight: 800, fontSize: 11, color: 'white' }}>{p.name}</p>
                {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none' }}>🔗 {p.link}</a>}
              </div>
              {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 5 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 7px', borderRadius: 3, background: `${tc}15`, color: tc, border: `1px solid ${tc}25`, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
              {p.description && <p style={{ color: '#9ca3af', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// PRO-4: MERIDIAN — Clean two-tone with diagonal header cut
// ══════════════════════════════════════════════════════════════
export function MeridianTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], themeColor = '#0f4c81' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  return (
    <div style={{ background: 'white', fontFamily: "'Arial', sans-serif", fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      {/* Header with diagonal clip */}
      <div style={{ position: 'relative', background: tc, minHeight: 140, overflow: 'hidden' }}>
        {/* Diagonal white cut */}
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '50%', height: '100%', background: 'white', clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }} />
        {/* Content */}
        <div style={{ position: 'relative', padding: '26px 32px', display: 'flex', alignItems: 'center', gap: 20 }}>
          {photo && <img src={photo} alt="" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)', flexShrink: 0 }} />}
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: 'white', letterSpacing: '-0.01em', marginBottom: 4 }}>{name}</h1>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{jobTitle}</p>
          </div>
        </div>
        {/* Contact on right side */}
        <div style={{ position: 'absolute', right: 28, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 5 }}>
          {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9, color: '#555' }}>
              <I size={9} color={tc} />{v}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', padding: '20px 32px 40px', gap: 24 }}>
        {/* Main */}
        <div style={{ flex: 1 }}>
          <p style={{ color: '#475569', fontSize: 10.5, lineHeight: 1.85, marginBottom: 20, padding: '12px 16px', background: '#f8fafc', borderRadius: 8, borderLeft: `4px solid ${tc}` }}>{summary}</p>

          <div style={{ marginBottom: 20 }}>
            <h2 style={{ fontSize: 9.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ display: 'inline-block', width: 24, height: 2, background: tc }} />Experience
            </h2>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 12, color: '#0f172a' }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 700 }}>{e.company}{e.location ? <span style={{ color: '#94a3b8', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: 'white', background: tc, padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>
                    {e.startDate} — {e.current ? 'Present' : e.endDate}
                  </span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.65, marginBottom: 2 }}>{l}</p>
                ))}
              </div>
            ))}
          </div>

          <div>
            <h2 style={{ fontSize: 9.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ display: 'inline-block', width: 24, height: 2, background: tc }} />Projects
            </h2>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '10px 12px', background: `${tc}06`, border: `1px solid ${tc}18`, borderRadius: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <p style={{ fontWeight: 800, fontSize: 11, color: '#0f172a' }}>{p.name}</p>
                  {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none' }}>🔗 {p.link}</a>}
                </div>
                {p.tech && <p style={{ color: '#94a3b8', fontSize: 9, marginBottom: 3 }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ width: 190, flexShrink: 0 }}>
          <div style={{ marginBottom: 18 }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 12 }}>Skills</h2>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 9.5, color: '#334155' }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: '#94a3b8' }}>{s.level}%</span>
                </div>
                <div style={{ height: 4, background: '#f1f5f9', borderRadius: 999 }}>
                  <div style={{ height: 4, background: `linear-gradient(to right, ${tc}, ${tc}70)`, borderRadius: 999, width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 18 }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 12 }}>Education</h2>
            {edu.map(e => (
              <div key={e.id} style={{ padding: '10px 12px', background: '#f8fafc', borderRadius: 8, border: '1px solid #e2e8f0' }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#0f172a', lineHeight: 1.3, marginBottom: 2 }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600 }}>{e.school}</p>
                <p style={{ color: '#94a3b8', fontSize: 8.5 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#64748b', fontSize: 8.5, marginTop: 2 }}>GPA: {e.gpa}</p>}
                {e.achievements && <p style={{ color: tc, fontSize: 8.5, marginTop: 2 }}>🏆 {e.achievements}</p>}
              </div>
            ))}
          </div>

          <div>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 12 }}>Certifications</h2>
            {(certifications.length > 0 ? certifications : S.certifications).map(c => (
              <div key={c.id} style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
                <Award size={10} color={tc} style={{ flexShrink: 0, marginTop: 1 }} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: 9.5, color: '#0f172a', lineHeight: 1.3 }}>{c.name}</p>
                  <p style={{ color: '#94a3b8', fontSize: 8.5 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// PRO-5: VERTEX — Floating cards on light gray canvas
// ══════════════════════════════════════════════════════════════
export function VertexTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], themeColor = '#2563eb' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  const Card = ({ children, style = {} }) => (
    <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', boxShadow: '0 1px 12px rgba(0,0,0,0.07)', border: '1px solid #f1f5f9', marginBottom: 12, ...style }}>
      {children}
    </div>
  )
  const SH = ({ t }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <div style={{ width: 3, height: 16, background: tc, borderRadius: 2 }} />
      <h2 style={{ fontSize: 9.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#0f172a' }}>{t}</h2>
    </div>
  )

  return (
    <div style={{ background: '#f8fafc', fontFamily: "'Arial', sans-serif", fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', padding: '20px 20px 40px' }}>
      {/* Hero card */}
      <Card style={{ marginBottom: 14, padding: '20px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {photo && (
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <img src={photo} alt="" style={{ width: 80, height: 80, borderRadius: 12, objectFit: 'cover', border: `3px solid ${tc}20` }} />
              <div style={{ position: 'absolute', inset: -3, borderRadius: 14, border: `2px solid ${tc}30`, pointerEvents: 'none' }} />
            </div>
          )}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 26, fontWeight: 900, color: '#0f172a', letterSpacing: '-0.01em', marginBottom: 4 }}>{name}</h1>
            <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, color: tc, background: `${tc}10`, border: `1px solid ${tc}25`, borderRadius: 6, padding: '3px 10px', marginBottom: 10 }}>{jobTitle}</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 16px', fontSize: 9.5, color: '#64748b' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <Card style={{ marginBottom: 14, background: `${tc}06`, border: `1px solid ${tc}15` }}>
        <p style={{ color: '#475569', fontSize: 10.5, lineHeight: 1.85 }}>{summary}</p>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 12 }}>
        <div>
          <Card>
            <SH t="Experience" />
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 11.5, color: '#0f172a' }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 700 }}>{e.company}{e.location ? <span style={{ color: '#94a3b8', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: '#64748b', background: '#f1f5f9', padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>
                    {e.startDate} — {e.current ? 'Present' : e.endDate}
                  </span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.65, marginBottom: 2 }}>{l}</p>
                ))}
              </div>
            ))}
          </Card>
          <Card>
            <SH t="Projects" />
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '8px 10px', background: `${tc}05`, border: `1px solid ${tc}15`, borderRadius: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <p style={{ fontWeight: 800, fontSize: 11, color: '#0f172a' }}>{p.name}</p>
                  {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none' }}>↗</a>}
                </div>
                {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 4 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 6px', borderRadius: 3, background: `${tc}12`, color: tc, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
                {p.description && <p style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}
              </div>
            ))}
          </Card>
        </div>
        <div>
          <Card>
            <SH t="Skills" />
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 7 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 9.5, color: '#334155', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
                </div>
                <div style={{ height: 5, background: '#f1f5f9', borderRadius: 999 }}>
                  <div style={{ height: 5, background: `linear-gradient(to right, ${tc}, ${tc}80)`, borderRadius: 999, width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </Card>
          <Card>
            <SH t="Education" />
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 8 }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#0f172a', lineHeight: 1.3 }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600 }}>{e.school}</p>
                <p style={{ color: '#94a3b8', fontSize: 8.5 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#64748b', fontSize: 8.5 }}>GPA: {e.gpa}</p>}
              </div>
            ))}
          </Card>
          <Card>
            <SH t="Certifications" />
            {(certifications.length > 0 ? certifications : S.certifications).map(c => (
              <div key={c.id} style={{ display: 'flex', gap: 6, marginBottom: 7 }}>
                <Award size={10} color={tc} style={{ flexShrink: 0, marginTop: 1 }} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: 9.5, color: '#0f172a', lineHeight: 1.3 }}>{c.name}</p>
                  <p style={{ color: '#94a3b8', fontSize: 8.5 }}>{c.issuer}</p>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// PRO-6: ZENITH — Ultra-clean Swiss design, grid-based
// ══════════════════════════════════════════════════════════════
export function ZenithTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], themeColor = '#dc2626' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  return (
    <div style={{ background: 'white', fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', padding: '0' }}>
      {/* Header — full bleed */}
      <div style={{ padding: '32px 40px 28px', borderBottom: `4px solid ${tc}` }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {photo && <img src={photo} alt="" style={{ width: 76, height: 76, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}`, flexShrink: 0 }} />}
            <div>
              <h1 style={{ fontSize: 34, fontWeight: 300, color: '#111', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 6 }}>{name}</h1>
              <p style={{ fontSize: 12, color: tc, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{jobTitle}</p>
            </div>
          </div>
          <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[email, phone, location].filter(Boolean).map((v, i) => <span key={i} style={{ fontSize: 9.5, color: '#64748b' }}>{v}</span>)}
          </div>
        </div>
      </div>

      {/* Body — strict grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '0' }}>
        {/* Left */}
        <div style={{ padding: '24px 28px 40px', borderRight: '1px solid #e5e7eb' }}>
          <p style={{ color: '#475569', fontSize: 10.5, lineHeight: 1.9, marginBottom: 24 }}>{summary}</p>

          <div style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: tc }} />
              <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#111' }}>Experience</h2>
            </div>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 16 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <p style={{ fontWeight: 700, fontSize: 11.5, color: '#111' }}>{e.role}</p>
                  <p style={{ fontSize: 9, color: '#94a3b8' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p>
                </div>
                <p style={{ color: tc, fontSize: 10, fontWeight: 600, marginBottom: 4 }}>{e.company}</p>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.65, marginBottom: 2 }}>{l}</p>
                ))}
              </div>
            ))}
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: tc }} />
              <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#111' }}>Projects</h2>
            </div>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 12 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <p style={{ fontWeight: 700, fontSize: 11, color: '#111' }}>{p.name}</p>
                  {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none' }}>{p.link}</a>}
                </div>
                {p.tech && <p style={{ color: '#94a3b8', fontSize: 9, marginBottom: 2 }}>{p.tech}</p>}
                {p.description && <p style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ padding: '24px 28px 40px' }}>
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: tc }} />
              <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#111' }}>Skills</h2>
            </div>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 10, color: '#334155', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 8.5, color: '#94a3b8' }}>{s.level}%</span>
                </div>
                <div style={{ height: 2, background: '#f1f5f9' }}>
                  <div style={{ height: 2, background: tc, width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: tc }} />
              <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#111' }}>Education</h2>
            </div>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 12 }}>
                <p style={{ fontWeight: 700, fontSize: 11, color: '#111' }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 10, fontWeight: 600 }}>{e.school}</p>
                <p style={{ color: '#94a3b8', fontSize: 9 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#64748b', fontSize: 9 }}>GPA: {e.gpa}</p>}
                {e.achievements && <p style={{ color: '#64748b', fontSize: 9, fontStyle: 'italic' }}>{e.achievements}</p>}
              </div>
            ))}
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: tc }} />
              <h2 style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#111' }}>Certifications</h2>
            </div>
            {(certifications.length > 0 ? certifications : S.certifications).map(c => (
              <div key={c.id} style={{ marginBottom: 10 }}>
                <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111' }}>{c.name}</p>
                <p style={{ color: '#64748b', fontSize: 9.5 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// PRO-7: PRAXIS — Bold left number markers, editorial style
// ══════════════════════════════════════════════════════════════
export function PraxisTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], themeColor = '#1e40af' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  return (
    <div style={{ background: 'white', fontFamily: "'Arial', sans-serif", fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      {/* Header */}
      <div style={{ padding: '28px 36px 22px', background: '#fafafa', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {photo && <img src={photo} alt="" style={{ width: 76, height: 76, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${tc}`, flexShrink: 0 }} />}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 30, fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: 4 }}>{name}</h1>
            <p style={{ fontSize: 11, color: tc, fontWeight: 700, letterSpacing: '0.04em', marginBottom: 10 }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 18px', fontSize: 9.5, color: '#64748b' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={9} color={tc} />{v}</span>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontSize: 48, fontWeight: 900, color: `${tc}15`, lineHeight: 1, letterSpacing: '-0.04em' }}>01</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', padding: '20px 36px 40px', gap: 28 }}>
        <div style={{ flex: 1 }}>
          {/* Summary */}
          <p style={{ color: '#475569', fontSize: 10.5, lineHeight: 1.85, marginBottom: 22 }}>{summary}</p>

          {/* Experience */}
          <div style={{ marginBottom: 22 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 16 }}>
              <span style={{ fontSize: 28, fontWeight: 900, color: `${tc}20`, lineHeight: 1 }}>02</span>
              <h2 style={{ fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0f172a' }}>Experience</h2>
            </div>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 16 : 0, paddingLeft: 16, borderLeft: `3px solid ${i === 0 ? tc : '#e2e8f0'}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 12, color: '#0f172a' }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 700 }}>{e.company}{e.location ? <span style={{ color: '#94a3b8', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: 'white', background: i === 0 ? tc : '#94a3b8', padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>
                    {e.startDate} — {e.current ? 'Present' : e.endDate}
                  </span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.65, marginBottom: 2 }}>{l}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 16 }}>
              <span style={{ fontSize: 28, fontWeight: 900, color: `${tc}20`, lineHeight: 1 }}>03</span>
              <h2 style={{ fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0f172a' }}>Projects</h2>
            </div>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 12 : 0, padding: '10px 14px', background: `${tc}06`, border: `1px solid ${tc}18`, borderRadius: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <p style={{ fontWeight: 800, fontSize: 11, color: '#0f172a' }}>{p.name}</p>
                  {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none' }}>🔗 {p.link}</a>}
                </div>
                {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 5 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 7px', borderRadius: 3, background: `${tc}15`, color: tc, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
                {p.description && <p style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ width: 195, flexShrink: 0 }}>
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 20, fontWeight: 900, color: `${tc}25`, lineHeight: 1 }}>04</span>
              <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#0f172a' }}>Skills</h2>
            </div>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 7 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 9.5, color: '#334155', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
                </div>
                <div style={{ height: 4, background: '#f1f5f9', borderRadius: 999 }}>
                  <div style={{ height: 4, background: `linear-gradient(to right, ${tc}, ${tc}70)`, borderRadius: 999, width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 20, fontWeight: 900, color: `${tc}25`, lineHeight: 1 }}>05</span>
              <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#0f172a' }}>Education</h2>
            </div>
            {edu.map(e => (
              <div key={e.id} style={{ padding: '10px 12px', background: '#f8fafc', borderRadius: 8, border: '1px solid #e2e8f0' }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#0f172a', lineHeight: 1.3, marginBottom: 2 }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600 }}>{e.school}</p>
                <p style={{ color: '#94a3b8', fontSize: 8.5 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#64748b', fontSize: 8.5 }}>GPA: {e.gpa}</p>}
              </div>
            ))}
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 20, fontWeight: 900, color: `${tc}25`, lineHeight: 1 }}>06</span>
              <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#0f172a' }}>Certifications</h2>
            </div>
            {(certifications.length > 0 ? certifications : S.certifications).map(c => (
              <div key={c.id} style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
                <Award size={10} color={tc} style={{ flexShrink: 0, marginTop: 1 }} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: 9.5, color: '#0f172a', lineHeight: 1.3 }}>{c.name}</p>
                  <p style={{ color: '#94a3b8', fontSize: 8.5 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// PRO-8: SOLARIS — Radiant header with circular skill meters
// ══════════════════════════════════════════════════════════════
export function SolarisTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], themeColor = '#7c3aed' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  function CircleSkill({ name: sname, level }) {
    const r = 18, circ = 2 * Math.PI * r, dash = (level / 100) * circ
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <div style={{ position: 'relative', width: 48, height: 48 }}>
          <svg width={48} height={48} style={{ transform: 'rotate(-90deg)' }}>
            <circle cx={24} cy={24} r={r} fill="none" stroke="#f1f5f9" strokeWidth={4} />
            <circle cx={24} cy={24} r={r} fill="none" stroke={tc} strokeWidth={4} strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 800, color: tc }}>{level}%</div>
        </div>
        <p style={{ fontSize: 8.5, color: '#475569', textAlign: 'center', fontWeight: 500, lineHeight: 1.2 }}>{sname}</p>
      </div>
    )
  }

  return (
    <div style={{ background: 'white', fontFamily: "'Arial', sans-serif", fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm' }}>
      {/* Header */}
      <div style={{ background: `linear-gradient(135deg, #1e1b4b 0%, ${tc} 60%, #7c3aed 100%)`, padding: '28px 32px 22px', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 16 }}>
          {photo && (
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', padding: 3, flexShrink: 0 }}>
              <img src={photo} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
            </div>
          )}
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 4 }}>{name}</h1>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontWeight: 600, marginBottom: 10 }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 9.5, color: 'rgba(255,255,255,0.8)' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={8} />{v}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Circular skills row */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.15)' }}>
          {skl.slice(0, 6).map(s => (
            <div key={s.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ position: 'relative', width: 44, height: 44 }}>
                <svg width={44} height={44} style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx={22} cy={22} r={16} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth={3.5} />
                  <circle cx={22} cy={22} r={16} fill="none" stroke="white" strokeWidth={3.5} strokeDasharray={`${(s.level / 100) * 2 * Math.PI * 16} ${2 * Math.PI * 16}`} strokeLinecap="round" />
                </svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8.5, fontWeight: 800, color: 'white' }}>{s.level}%</div>
              </div>
              <p style={{ fontSize: 8, color: 'rgba(255,255,255,0.85)', textAlign: 'center', fontWeight: 500 }}>{s.name.split('/')[0].trim()}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', padding: '20px 32px 40px', gap: 24 }}>
        <div style={{ flex: 1 }}>
          <p style={{ color: '#475569', fontSize: 10.5, lineHeight: 1.85, marginBottom: 20 }}>{summary}</p>

          <div style={{ marginBottom: 20 }}>
            <h2 style={{ fontSize: 9.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 20, height: 2, background: tc, display: 'inline-block' }} />Experience
            </h2>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 12, color: '#0f172a' }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 700 }}>{e.company}{e.location ? <span style={{ color: '#94a3b8', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: 'white', background: tc, padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>
                    {e.startDate} — {e.current ? 'Present' : e.endDate}
                  </span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.65, marginBottom: 2 }}>{l}</p>
                ))}
              </div>
            ))}
          </div>

          <div>
            <h2 style={{ fontSize: 9.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 20, height: 2, background: tc, display: 'inline-block' }} />Projects
            </h2>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '10px 12px', background: `${tc}06`, border: `1px solid ${tc}18`, borderRadius: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <p style={{ fontWeight: 800, fontSize: 11, color: '#0f172a' }}>{p.name}</p>
                  {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none' }}>🔗 {p.link}</a>}
                </div>
                {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 7px', borderRadius: 3, background: `${tc}15`, color: tc, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
                {p.description && <p style={{ color: '#475569', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>

        <div style={{ width: 190, flexShrink: 0 }}>
          <div style={{ marginBottom: 18 }}>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 12 }}>Education</h2>
            {edu.map(e => (
              <div key={e.id} style={{ padding: '10px 12px', background: '#f8fafc', borderRadius: 8, border: '1px solid #e2e8f0', marginBottom: 8 }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#0f172a', lineHeight: 1.3, marginBottom: 2 }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600 }}>{e.school}</p>
                <p style={{ color: '#94a3b8', fontSize: 8.5 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#64748b', fontSize: 8.5 }}>GPA: {e.gpa}</p>}
              </div>
            ))}
          </div>
          <div>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 12 }}>Certifications</h2>
            {(certifications.length > 0 ? certifications : S.certifications).map(c => (
              <div key={c.id} style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
                <Award size={10} color={tc} style={{ flexShrink: 0, marginTop: 1 }} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: 9.5, color: '#0f172a', lineHeight: 1.3 }}>{c.name}</p>
                  <p style={{ color: '#94a3b8', fontSize: 8.5 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// PRO-9: CIPHER — Monospace tech with terminal aesthetic
// ══════════════════════════════════════════════════════════════
export function CipherTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], themeColor = '#10b981' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  return (
    <div style={{ background: '#0d1117', color: '#c9d1d9', fontFamily: "'Courier New', 'Consolas', monospace", fontSize: 10, lineHeight: 1.6, minHeight: '297mm' }}>
      {/* Terminal header */}
      <div style={{ background: '#161b22', borderBottom: `1px solid ${tc}30`, padding: '20px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
          <span style={{ marginLeft: 8, fontSize: 9, color: '#6e7681' }}>resume.sh — {name}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {photo && <img src={photo} alt="" style={{ width: 72, height: 72, borderRadius: 4, objectFit: 'cover', border: `2px solid ${tc}`, flexShrink: 0 }} />}
          <div>
            <p style={{ color: tc, fontSize: 9, marginBottom: 4 }}>$ whoami</p>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 4 }}>{name}</h1>
            <p style={{ color: tc, fontSize: 9, marginBottom: 2 }}>$ cat role.txt</p>
            <p style={{ color: '#e6edf3', fontSize: 10.5, marginBottom: 8 }}>{jobTitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 16px', fontSize: 9, color: '#8b949e' }}>
              {[email, phone, location].filter(Boolean).map((v, i) => <span key={i} style={{ color: '#8b949e' }}><span style={{ color: tc }}>→</span> {v}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        {/* Main */}
        <div style={{ flex: 1, padding: '18px 22px' }}>
          <div style={{ marginBottom: 18 }}>
            <p style={{ color: tc, fontSize: 9, marginBottom: 6 }}>$ cat summary.txt</p>
            <p style={{ color: '#8b949e', fontSize: 10, lineHeight: 1.8, padding: '10px 14px', background: '#161b22', border: `1px solid ${tc}20`, borderRadius: 6 }}>{summary}</p>
          </div>

          <div style={{ marginBottom: 18 }}>
            <p style={{ color: tc, fontSize: 9, marginBottom: 10 }}>$ ls -la experience/</p>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0, padding: '10px 14px', background: '#161b22', border: `1px solid ${tc}20`, borderRadius: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 11, color: 'white' }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 9.5 }}>{e.company}{e.location ? ` @ ${e.location}` : ''}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: tc, background: `${tc}15`, border: `1px solid ${tc}30`, padding: '2px 8px', borderRadius: 3, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>
                    {e.startDate} → {e.current ? 'now' : e.endDate}
                  </span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: '#8b949e', fontSize: 9.5, lineHeight: 1.65, marginBottom: 2 }}>{l}</p>
                ))}
              </div>
            ))}
          </div>

          <div>
            <p style={{ color: tc, fontSize: 9, marginBottom: 10 }}>$ ls -la projects/</p>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '10px 14px', background: '#161b22', border: `1px solid ${tc}20`, borderRadius: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <p style={{ fontWeight: 700, fontSize: 11, color: 'white' }}>{p.name}</p>
                  {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none' }}>→ {p.link}</a>}
                </div>
                {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 5 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 7px', borderRadius: 3, background: `${tc}15`, color: tc, border: `1px solid ${tc}25`, fontWeight: 700 }}>{t.trim()}</span>)}</div>}
                {p.description && <p style={{ color: '#8b949e', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ width: 200, padding: '18px 16px', borderLeft: `1px solid ${tc}20`, flexShrink: 0 }}>
          <div style={{ marginBottom: 18 }}>
            <p style={{ color: tc, fontSize: 9, marginBottom: 10 }}>$ cat skills.json</p>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 9.5, color: '#e6edf3' }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: tc }}>{s.level}%</span>
                </div>
                <div style={{ height: 3, background: '#21262d', borderRadius: 2 }}>
                  <div style={{ height: 3, background: tc, borderRadius: 2, width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 18 }}>
            <p style={{ color: tc, fontSize: 9, marginBottom: 10 }}>$ cat education.txt</p>
            {edu.map(e => (
              <div key={e.id} style={{ padding: '8px 10px', background: '#161b22', border: `1px solid ${tc}20`, borderRadius: 6, marginBottom: 8 }}>
                <p style={{ fontWeight: 700, fontSize: 9.5, color: 'white', lineHeight: 1.3 }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 8.5 }}>{e.school}</p>
                <p style={{ color: '#6e7681', fontSize: 8 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#8b949e', fontSize: 8 }}>GPA: {e.gpa}</p>}
              </div>
            ))}
          </div>

          <div>
            <p style={{ color: tc, fontSize: 9, marginBottom: 10 }}>$ cat certs.txt</p>
            {(certifications.length > 0 ? certifications : S.certifications).map(c => (
              <div key={c.id} style={{ marginBottom: 8 }}>
                <p style={{ fontSize: 9.5, color: '#e6edf3', fontWeight: 600, lineHeight: 1.3 }}>{c.name}</p>
                <p style={{ color: '#6e7681', fontSize: 8.5 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// PRO-10: LUMINA — Glassmorphism on gradient background
// ══════════════════════════════════════════════════════════════
export function LuminaTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], themeColor = '#8b5cf6' } = resume
  const tc = themeColor
  const name = g(personalInfo.name, S.name), jobTitle = g(personalInfo.jobTitle, S.jobTitle)
  const email = g(personalInfo.email, S.email), phone = g(personalInfo.phone, S.phone)
  const location = g(personalInfo.location, S.location), summary = g(personalInfo.summary, S.summary)
  const photo = personalInfo.photo || ''
  const exp = experience.length > 0 ? experience : S.experience
  const edu = education.length > 0 ? education : S.education
  const skl = skills.length > 0 ? skills : S.skills
  const prj = projects.length > 0 ? projects : S.projects

  const Glass = ({ children, style = {} }) => (
    <div style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 14, padding: '14px 18px', marginBottom: 12, ...style }}>
      {children}
    </div>
  )

  return (
    <div style={{ background: `linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)`, fontFamily: "'Arial', sans-serif", fontSize: 10.5, lineHeight: 1.5, minHeight: '297mm', padding: '22px 22px 40px' }}>
      {/* Hero glass card */}
      <Glass style={{ marginBottom: 14, padding: '20px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {photo && (
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: `linear-gradient(135deg, ${tc}, ${tc}60)`, padding: 3, flexShrink: 0 }}>
              <img src={photo} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
            </div>
          )}
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 900, color: 'white', letterSpacing: '-0.01em', marginBottom: 4 }}>{name}</h1>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: `${tc}25`, border: `1px solid ${tc}40`, borderRadius: 999, padding: '3px 12px', marginBottom: 10 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: tc }}>{jobTitle}</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9.5, color: 'rgba(255,255,255,0.65)' }}>
              {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }].filter(x => x.v).map(({ I, v }, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><I size={8} color={tc} />{v}</span>
              ))}
            </div>
          </div>
        </div>
      </Glass>

      {/* Summary */}
      <Glass style={{ marginBottom: 14 }}>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 10.5, lineHeight: 1.85 }}>{summary}</p>
      </Glass>

      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 12 }}>
        <div>
          <Glass>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 14 }}>Experience</h2>
            {exp.map((e, i) => (
              <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 14 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 11.5, color: 'white' }}>{e.role}</p>
                    <p style={{ color: tc, fontSize: 10, fontWeight: 700 }}>{e.company}{e.location ? <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}> · {e.location}</span> : ''}</p>
                  </div>
                  <span style={{ fontSize: 8.5, color: tc, background: `${tc}20`, border: `1px solid ${tc}30`, padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>
                    {e.startDate} — {e.current ? 'Present' : e.endDate}
                  </span>
                </div>
                {e.description && e.description.split('\n').filter(Boolean).map((l, li) => (
                  <p key={li} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 9.5, lineHeight: 1.65, marginBottom: 2 }}>{l}</p>
                ))}
              </div>
            ))}
          </Glass>
          <Glass>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 12 }}>Projects</h2>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '8px 10px', background: 'rgba(255,255,255,0.05)', border: `1px solid ${tc}20`, borderRadius: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <p style={{ fontWeight: 800, fontSize: 11, color: 'white' }}>{p.name}</p>
                  {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none' }}>🔗 {p.link}</a>}
                </div>
                {p.tech && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>{p.tech.split(',').map((t, ti) => <span key={ti} style={{ fontSize: 8, padding: '1px 7px', borderRadius: 3, background: `${tc}20`, color: tc, border: `1px solid ${tc}30`, fontWeight: 600 }}>{t.trim()}</span>)}</div>}
                {p.description && <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}
              </div>
            ))}
          </Glass>
        </div>
        <div>
          <Glass>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 12 }}>Skills</h2>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 7 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level}%</span>
                </div>
                <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 999 }}>
                  <div style={{ height: 4, background: `linear-gradient(to right, ${tc}, ${tc}80)`, borderRadius: 999, width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </Glass>
          <Glass>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 12 }}>Education</h2>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 8 }}>
                <p style={{ fontWeight: 700, fontSize: 10, color: 'white', lineHeight: 1.3 }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9.5, fontWeight: 600 }}>{e.school}</p>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 8.5 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 8.5 }}>GPA: {e.gpa}</p>}
              </div>
            ))}
          </Glass>
          <Glass>
            <h2 style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc, marginBottom: 12 }}>Certifications</h2>
            {(certifications.length > 0 ? certifications : S.certifications).map(c => (
              <div key={c.id} style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
                <Award size={10} color={tc} style={{ flexShrink: 0, marginTop: 1 }} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: 9.5, color: 'white', lineHeight: 1.3 }}>{c.name}</p>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 8.5 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
                </div>
              </div>
            ))}
          </Glass>
        </div>
      </div>
    </div>
  )
}
