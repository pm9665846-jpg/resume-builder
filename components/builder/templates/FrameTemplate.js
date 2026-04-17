import { Mail, Phone, MapPin, Globe, Link2, GitBranch } from 'lucide-react'

const S = {
  name: 'Rohan Singhania', jobTitle: 'Investment Banking Analyst',
  email: 'rohan.singhania@goldmanpartners.com', phone: '+91 99887 65432',
  location: 'Mumbai, Maharashtra', website: 'rohansinghania.com',
  linkedin: 'linkedin.com/in/rohansinghania', github: 'github.com/rohansinghania',
  summary: 'Finance analyst with 7 years in investment banking, M&A advisory, and equity research. Executed 18 transactions totalling $4.2B in deal value across TMT, FMCG, and infrastructure sectors. CFA Charterholder. MBA from IIM Ahmedabad.',
  experience: [
    { id: 'e1', role: 'Vice President — M&A Advisory', company: 'Goldman Sachs India', location: 'Mumbai', startDate: 'Aug 2020', endDate: '', current: true, description: '• Led buy-side advisory for $1.1B acquisition of Reliance Retail subsidiary\n• Managed 3 live deal teams simultaneously across TMT and FMCG sectors\n• Built DCF and LBO models for 12 transactions; 9 successfully closed' },
    { id: 'e2', role: 'Associate — Investment Banking', company: 'JP Morgan India', location: 'Mumbai', startDate: 'Jun 2017', endDate: 'Jul 2020', current: false, description: '• Executed IPO for fintech unicorn raising ₹3,200 Cr on NSE\n• Prepared CIMs, pitch books, and financial models for 8 mandates\n• Coordinated due diligence with legal, tax, and technical advisors' },
    { id: 'e3', role: 'Analyst — Equity Research', company: 'Kotak Securities', location: 'Mumbai', startDate: 'Jul 2015', endDate: 'May 2017', current: false, description: '• Covered 14 mid-cap FMCG and retail companies\n• Published 60+ research reports; top-rated analyst in sector coverage' },
  ],
  education: [
    { id: 'ed1', degree: 'MBA Finance', school: 'IIM Ahmedabad', startDate: '2013', endDate: '2015', gpa: '3.9/4.0', achievements: 'Gold Medal · Finance Club President' },
    { id: 'ed2', degree: 'B.Com (Hons)', school: 'Shri Ram College of Commerce, DU', startDate: '2010', endDate: '2013', gpa: '9.3/10', achievements: 'University Topper' },
  ],
  skills: [
    { id: 's1', name: 'Financial Modelling', level: 98 },
    { id: 's2', name: 'M&A Advisory', level: 95 },
    { id: 's3', name: 'Valuation (DCF/LBO)', level: 97 },
    { id: 's4', name: 'Equity Research', level: 90 },
    { id: 's5', name: 'Bloomberg / FactSet', level: 92 },
    { id: 's6', name: 'Excel / VBA', level: 94 },
  ],
  projects: [
    { id: 'p1', name: 'Sector Consolidation Study — Indian Pharma', description: 'Comprehensive M&A landscape analysis of 40+ Indian pharma companies. Identified 6 high-value acquisition targets for PE client.', tech: 'Bloomberg, Excel, PowerPoint', link: 'goldmansachs.com' },
    { id: 'p2', name: 'IPO Readiness Framework', description: 'Proprietary framework for assessing IPO readiness across 12 parameters. Adopted internally for all pre-IPO mandates.', tech: 'Excel VBA, PowerPoint', link: 'jpmorgan.com' },
  ],
  certifications: [
    { id: 'c1', name: 'CFA Charterholder', issuer: 'CFA Institute', date: '2019-09' },
    { id: 'c2', name: 'Financial Risk Manager (FRM)', issuer: 'GARP', date: '2020-11' },
  ],
  languages: [
    { id: 'l1', name: 'English', proficiency: 'Fluent' },
    { id: 'l2', name: 'Hindi', proficiency: 'Native' },
    { id: 'l3', name: 'Gujarati', proficiency: 'Native' },
  ],
  interests: [
    { id: 'i1', name: 'Global Markets' },
    { id: 'i2', name: 'Chess' },
    { id: 'i3', name: 'Classical Music' },
    { id: 'i4', name: 'Long-distance Cycling' },
  ],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

function SectionHeader({ title, tc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 9, marginTop: 16 }}>
      {/* Small filled rectangle prefix */}
      <div style={{ width: 3, height: 10, background: tc, borderRadius: 1, flexShrink: 0 }} />
      <span style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#1e293b' }}>
        {title}
      </span>
    </div>
  )
}

function DotRating({ level, tc }) {
  const filled = Math.round((level / 100) * 5)
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} style={{
          width: 7, height: 7, borderRadius: '50%',
          background: i <= filled ? tc : `${tc}28`,
        }} />
      ))}
    </div>
  )
}

export default function FrameTemplate({ resume }) {
  const pi = resume?.personalInfo || {}
  const tc = g(resume?.themeColor, '#1e40af')
  const ff = g(resume?.fontFamily, "'Trebuchet MS', Arial, sans-serif")

  const name     = g(pi.name,     S.name)
  const jobTitle = g(pi.jobTitle, S.jobTitle)
  const email    = g(pi.email,    S.email)
  const phone    = g(pi.phone,    S.phone)
  const location = g(pi.location, S.location)
  const website  = g(pi.website,  S.website)
  const linkedin = g(pi.linkedin, S.linkedin)
  const github   = g(pi.github,   S.github)
  const summary  = g(pi.summary,  S.summary)

  const exp  = resume?.experience?.length     ? resume.experience     : S.experience
  const edu  = resume?.education?.length      ? resume.education      : S.education
  const skl  = resume?.skills?.length         ? resume.skills         : S.skills
  const prj  = resume?.projects?.length       ? resume.projects       : S.projects
  const cert = resume?.certifications?.length ? resume.certifications : S.certifications
  const lang = resume?.languages?.length      ? resume.languages      : S.languages
  const intr = resume?.interests?.length      ? resume.interests      : S.interests

  const tcLight = `${tc}10`

  return (
    <div style={{
      width: 794, minHeight: 1123,
      background: '#f8fafc',
      fontFamily: ff,
      color: '#1e293b',
      boxSizing: 'border-box',
      padding: 10,
    }}>
      {/* ── OUTER FRAME (double border) ── */}
      <div style={{
        width: '100%',
        minHeight: 1103,
        boxSizing: 'border-box',
        border: `2px solid ${tc}`,
        padding: 6,
        background: '#f8fafc',
      }}>
        {/* Inner border */}
        <div style={{
          width: '100%',
          minHeight: '100%',
          boxSizing: 'border-box',
          border: `1px solid ${tc}30`,
          background: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
        }}>

          {/* ── NAMEPLATE ── */}
          <div style={{
            background: tc,
            padding: '18px 32px',
            textAlign: 'center',
          }}>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '0.04em', lineHeight: 1.1 }}>
              {name}
            </h1>
            <div style={{ fontSize: 11, color: `${tc}55`, color: 'rgba(255,255,255,0.75)', fontWeight: 500, marginTop: 5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {jobTitle}
            </div>
          </div>

          {/* ── CONTACT ROW ── */}
          <div style={{
            background: `${tc}08`,
            borderBottom: `1px solid ${tc}20`,
            padding: '8px 32px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '5px 20px',
          }}>
            {[
              { icon: <Mail size={9} />, val: email },
              { icon: <Phone size={9} />, val: phone },
              { icon: <MapPin size={9} />, val: location },
              { icon: <Globe size={9} />, val: website },
              { icon: <Link2 size={9} />, val: linkedin },
              { icon: <GitBranch size={9} />, val: github },
            ].filter(c => c.val).map((c, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 9, color: '#475569' }}>
                <span style={{ color: tc }}>{c.icon}</span>
                {c.val}
              </span>
            ))}
          </div>

          {/* ── SUMMARY ── */}
          {summary && (
            <div style={{ padding: '12px 32px 4px', borderBottom: `1px solid ${tc}15` }}>
              <p style={{ fontSize: 10, lineHeight: 1.75, color: '#374151', margin: 0 }}>{summary}</p>
            </div>
          )}

          {/* ── TWO-COLUMN BODY ── */}
          <div style={{ display: 'flex', flex: 1 }}>

            {/* LEFT COLUMN — 40% */}
            <div style={{
              width: '40%',
              flexShrink: 0,
              borderRight: `1px solid ${tc}20`,
              padding: '4px 20px 20px 24px',
              background: `${tc}04`,
            }}>

              {/* Skills with dot rating */}
              <SectionHeader title="Skills" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {skl.map(s => (
                  <div key={s.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
                      <span style={{ fontSize: 9.5, color: '#1e293b', fontWeight: 500 }}>{s.name}</span>
                      <DotRating level={s.level || 80} tc={tc} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Languages */}
              {lang.length > 0 && (
                <>
                  <SectionHeader title="Languages" tc={tc} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {lang.map(l => (
                      <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 9.5, color: '#1e293b', fontWeight: 500 }}>{l.name}</span>
                        <span style={{
                          fontSize: 8, color: tc, fontWeight: 600,
                          background: tcLight, padding: '2px 7px', borderRadius: 10,
                          border: `1px solid ${tc}25`,
                        }}>
                          {l.proficiency}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Certifications */}
              {cert.length > 0 && (
                <>
                  <SectionHeader title="Certifications" tc={tc} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {cert.map(c => (
                      <div key={c.id}>
                        <div style={{ fontSize: 9.5, fontWeight: 700, color: '#1e293b' }}>{c.name}</div>
                        <div style={{ fontSize: 8.5, color: '#64748b' }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Interests */}
              {intr.length > 0 && (
                <>
                  <SectionHeader title="Interests" tc={tc} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {intr.map(i => (
                      <div key={i.id} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: tc, flexShrink: 0 }} />
                        <span style={{ fontSize: 9.5, color: '#374151' }}>{i.name}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* RIGHT COLUMN — 60% */}
            <div style={{ flex: 1, padding: '4px 24px 20px 20px' }}>

              {/* Experience */}
              <SectionHeader title="Experience" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                {exp.map(e => (
                  <div key={e.id} style={{ paddingBottom: 10, borderBottom: `1px solid ${tc}12` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 2 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#0f172a' }}>{e.role}</span>
                      <span style={{ fontSize: 8.5, color: '#94a3b8', fontStyle: 'italic' }}>
                        {e.startDate} – {e.current ? 'Present' : e.endDate}
                      </span>
                    </div>
                    <div style={{ fontSize: 9.5, color: tc, fontWeight: 600, marginBottom: 4 }}>
                      {e.company}{e.location ? ` · ${e.location}` : ''}
                    </div>
                    {e.description && (
                      <div style={{ fontSize: 9, color: '#475569', lineHeight: 1.65, whiteSpace: 'pre-line' }}>
                        {e.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Education */}
              <SectionHeader title="Education" tc={tc} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {edu.map(e => (
                  <div key={e.id} style={{ paddingBottom: 8, borderBottom: `1px solid ${tc}12` }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#0f172a' }}>{e.degree}</div>
                    <div style={{ fontSize: 10, color: tc, fontWeight: 600 }}>{e.school}</div>
                    <div style={{ fontSize: 9, color: '#64748b' }}>
                      {e.startDate} – {e.endDate}{e.gpa ? ` · GPA: ${e.gpa}` : ''}
                    </div>
                    {e.achievements && <div style={{ fontSize: 9, color: '#475569', marginTop: 2 }}>{e.achievements}</div>}
                  </div>
                ))}
              </div>

              {/* Projects */}
              {prj.length > 0 && (
                <>
                  <SectionHeader title="Projects" tc={tc} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {prj.map(p => (
                      <div key={p.id} style={{ paddingBottom: 8, borderBottom: `1px solid ${tc}12` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                          <span style={{ fontSize: 11, fontWeight: 700, color: '#0f172a' }}>{p.name}</span>
                          {p.link && <span style={{ fontSize: 8.5, color: tc }}>{p.link}</span>}
                        </div>
                        {p.tech && <div style={{ fontSize: 8.5, color: '#64748b', marginBottom: 3 }}>{p.tech}</div>}
                        {p.description && <div style={{ fontSize: 9, color: '#475569', lineHeight: 1.6 }}>{p.description}</div>}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
