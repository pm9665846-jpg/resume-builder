import { Mail, Phone, MapPin, Globe, Link2, Award, TrendingUp } from 'lucide-react'

// ── INFOGRAPHIC: Visual stats, hexagon skills, timeline experience
const SAMPLE = {
  name: 'xyz', jobTitle: 'Data Scientist & ML Engineer',
  email: 'prachi@email.com', phone: '+91 98765 43210',
  location: 'Bengaluru, India', website: 'prachidev.com', linkedin: 'linkedin.com/in/prachi',
  summary: 'Data Scientist with 4+ years extracting actionable insights from complex datasets. Built ML models generating $20M+ in business value. Expert in deep learning, NLP, and production ML systems.',
  experience: [
    { id: 's1', role: 'Senior Data Scientist', company: 'Walmart Global Tech', location: 'Bengaluru', startDate: 'Apr 2022', endDate: '', current: true, description: '• Built demand forecasting model reducing inventory waste by 18% ($8M annual savings)\n• Developed customer churn prediction model with 91% accuracy, retaining 50K+ customers\n• Led team of 4 data scientists; established MLOps practices reducing deployment time by 60%' },
    { id: 's2', role: 'Data Scientist', company: 'OYO Rooms', location: 'Gurugram', startDate: 'Aug 2020', endDate: 'Mar 2022', current: false, description: '• Built dynamic pricing model increasing revenue per available room by 23%\n• Created NLP pipeline for guest review analysis processing 100K+ reviews/day' },
  ],
  education: [{ id: 'e1', degree: 'M.Sc Statistics & Data Science', school: 'ISI Kolkata', startDate: '2018', endDate: '2020', gpa: '9.1 / 10', achievements: 'Best Dissertation Award · Kaggle Expert' }],
  skills: [
    { id: 'sk1', name: 'Python / R', level: 95 }, { id: 'sk2', name: 'Machine Learning', level: 92 },
    { id: 'sk3', name: 'Deep Learning', level: 85 }, { id: 'sk4', name: 'SQL / BigQuery', level: 88 },
    { id: 'sk5', name: 'TensorFlow / PyTorch', level: 82 }, { id: 'sk6', name: 'Data Visualization', level: 88 },
    { id: 'sk7', name: 'Statistics / A/B Testing', level: 92 }, { id: 'sk8', name: 'Apache Spark', level: 78 },
  ],
  projects: [
    { id: 'p1', name: 'Demand Forecasting Engine', tech: 'Python, XGBoost, AWS SageMaker', link: 'github.com/prachi', description: 'ML pipeline forecasting demand for 500K+ SKUs with 94% accuracy. $8M annual savings.' },
    { id: 'p2', name: 'Customer Churn Predictor', tech: 'Python, scikit-learn, PostgreSQL', description: 'Ensemble model with 91% accuracy. Saved $3M in retention costs.' },
  ],
  certifications: [
    { id: 'c1', name: 'Google Professional Data Engineer', issuer: 'Google Cloud', date: '2023-01' },
    { id: 'c2', name: 'AWS ML Specialty', issuer: 'Amazon Web Services', date: '2022-07' },
  ],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }],
}

function g(v, f) { return v && String(v).trim() !== '' ? v : f }

// Circular progress ring
function Ring({ pct, color, size = 52, label, sublabel }) {
  const r = (size - 8) / 2
  const circ = 2 * Math.PI * r
  const dash = (pct / 100) * circ
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e5e7eb" strokeWidth={4} />
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={4}
            strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color }}>
          {pct}%
        </div>
      </div>
      <p style={{ fontSize: 8, fontWeight: 700, color: '#333', textAlign: 'center', lineHeight: 1.2 }}>{label}</p>
      {sublabel && <p style={{ fontSize: 7, color: '#999', textAlign: 'center' }}>{sublabel}</p>}
    </div>
  )
}

export default function InfographicTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#8b5cf6' } = resume
  const tc = themeColor

  const name = g(personalInfo.name, SAMPLE.name)
  const jobTitle = g(personalInfo.jobTitle, SAMPLE.jobTitle)
  const email = g(personalInfo.email, SAMPLE.email)
  const phone = g(personalInfo.phone, SAMPLE.phone)
  const location = g(personalInfo.location, SAMPLE.location)
  const website = g(personalInfo.website, SAMPLE.website)
  const linkedin = g(personalInfo.linkedin, SAMPLE.linkedin)
  const summary = g(personalInfo.summary, SAMPLE.summary)
  const photo = personalInfo.photo || ''

  const exp = experience.length > 0 ? experience : SAMPLE.experience
  const edu = education.length > 0 ? education : SAMPLE.education
  const skl = skills.length > 0 ? skills : SAMPLE.skills
  const prj = projects.length > 0 ? projects : SAMPLE.projects
  const certs = certifications.length > 0 ? certifications : SAMPLE.certifications
  const langs = languages.length > 0 ? languages : SAMPLE.languages

  const contacts = [
    { icon: Mail, val: email }, { icon: Phone, val: phone },
    { icon: MapPin, val: location }, { icon: Globe, val: website }, { icon: Link2, val: linkedin },
  ].filter(c => c.val)

  const SH = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <div style={{ width: 4, height: 16, background: tc, borderRadius: 2 }} />
      <h2 style={{ fontSize: 9.5, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.14em', color: tc }}>{children}</h2>
      <div style={{ flex: 1, height: 1, background: `${tc}25` }} />
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: "'Arial', sans-serif", fontSize: '10.5px', lineHeight: 1.5, minHeight: '297mm' }}>

      {/* ── HEADER ── */}
      <div style={{ background: `linear-gradient(135deg, ${tc} 0%, ${tc}cc 100%)`, padding: '26px 28px 20px', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {photo && (
              <img src={photo} alt="Profile" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.5)', flexShrink: 0 }} />
            )}
            <div>
              <h1 style={{ fontSize: 26, fontWeight: 900, color: 'white', letterSpacing: '-0.01em', marginBottom: 4 }}>{name}</h1>
              <p style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 12 }}>{jobTitle}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px', fontSize: 9 }}>
                {contacts.map(({ icon: Icon, val }, i) => (
                  <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'rgba(255,255,255,0.8)' }}>
                    <Icon size={8} />{val}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Stats rings */}
          <div style={{ display: 'flex', gap: 14, flexShrink: 0 }}>
            <Ring pct={95} color="white" label="Technical" sublabel="Skills" />
            <Ring pct={88} color="rgba(255,255,255,0.7)" label="Leadership" sublabel="Score" />
            <Ring pct={92} color="rgba(255,255,255,0.5)" label="Innovation" sublabel="Index" />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        {/* ── LEFT ── */}
        <div style={{ width: '60%', padding: '18px 20px', borderRight: '1px solid #f0f0f0' }}>

          {/* Summary */}
          <div style={{ marginBottom: 16 }}>
            <SH>Profile</SH>
            <p style={{ color: '#444', fontSize: 10.5, lineHeight: 1.8 }}>{summary}</p>
          </div>

          {/* Experience with visual timeline */}
          <div style={{ marginBottom: 16 }}>
            <SH>Experience</SH>
            {exp.map((e, i) => (
              <div key={e.id} style={{ display: 'flex', gap: 12, marginBottom: i < exp.length - 1 ? 14 : 0 }}>
                {/* Timeline */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: tc, border: '2px solid white', boxShadow: `0 0 0 2px ${tc}40`, flexShrink: 0 }} />
                  {i < exp.length - 1 && <div style={{ width: 2, flex: 1, background: `${tc}25`, marginTop: 2 }} />}
                </div>
                <div style={{ flex: 1, paddingBottom: i < exp.length - 1 ? 8 : 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                    <div>
                      <p style={{ fontWeight: 800, fontSize: 11.5, color: '#111' }}>{e.role}</p>
                      <p style={{ color: tc, fontSize: 10, fontWeight: 700 }}>
                        {e.company}{e.location ? <span style={{ color: '#888', fontWeight: 400 }}> · {e.location}</span> : ''}
                      </p>
                    </div>
                    <span style={{ fontSize: 8.5, color: '#777', background: `${tc}10`, border: `1px solid ${tc}25`, padding: '2px 7px', borderRadius: 4, whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0 }}>
                      {e.startDate} — {e.current ? 'Present' : e.endDate}
                    </span>
                  </div>
                  {e.description && (
                    <div style={{ marginTop: 4 }}>
                      {e.description.split('\n').filter(Boolean).map((line, li) => (
                        <p key={li} style={{ color: '#555', fontSize: 9.5, lineHeight: 1.65, marginBottom: 2 }}>{line}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <SH>Projects</SH>
            {prj.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 10 : 0, padding: '9px 11px', background: `${tc}06`, border: `1px solid ${tc}18`, borderRadius: 7 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <p style={{ fontWeight: 800, fontSize: 11, color: '#111' }}>{p.name}</p>
                  {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none' }}>🔗 {p.link}</a>}
                </div>
                {p.tech && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 4 }}>
                    {p.tech.split(',').map((t, ti) => (
                      <span key={ti} style={{ fontSize: 8, padding: '1px 6px', borderRadius: 3, background: `${tc}15`, color: tc, border: `1px solid ${tc}25`, fontWeight: 600 }}>{t.trim()}</span>
                    ))}
                  </div>
                )}
                {p.description && <p style={{ color: '#555', fontSize: 9.5, lineHeight: 1.6 }}>{p.description}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div style={{ flex: 1, padding: '18px 16px' }}>

          {/* Skills as visual bars */}
          <div style={{ marginBottom: 18 }}>
            <SH>Skills</SH>
            {skl.map(s => (
              <div key={s.id} style={{ marginBottom: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 9.5, color: '#333', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 8, color: tc, fontWeight: 700 }}>{s.level || 80}%</span>
                </div>
                <div style={{ height: 5, background: '#f0f0f0', borderRadius: 3 }}>
                  <div style={{ height: 5, background: `linear-gradient(to right, ${tc}, ${tc}80)`, borderRadius: 3, width: `${s.level || 80}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div style={{ marginBottom: 18 }}>
            <SH>Education</SH>
            {edu.map(e => (
              <div key={e.id} style={{ marginBottom: 10, padding: '8px 10px', background: `${tc}06`, border: `1px solid ${tc}18`, borderRadius: 6 }}>
                <p style={{ fontWeight: 800, fontSize: 10, color: '#111', lineHeight: 1.3 }}>{e.degree}</p>
                <p style={{ color: tc, fontSize: 9, fontWeight: 600 }}>{e.school}</p>
                <p style={{ color: '#aaa', fontSize: 8.5 }}>{e.startDate} — {e.endDate}</p>
                {e.gpa && <p style={{ color: '#777', fontSize: 8.5, fontWeight: 600 }}>GPA: {e.gpa}</p>}
                {e.achievements && <p style={{ color: '#888', fontSize: 8, fontStyle: 'italic', marginTop: 2 }}>{e.achievements}</p>}
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: 18 }}>
            <SH>Certifications</SH>
            {certs.map(c => (
              <div key={c.id} style={{ display: 'flex', gap: 6, marginBottom: 7 }}>
                <Award size={10} color={tc} style={{ flexShrink: 0, marginTop: 1 }} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: 9.5, color: '#222', lineHeight: 1.3 }}>{c.name}</p>
                  <p style={{ color: '#888', fontSize: 8.5 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div>
            <SH>Languages</SH>
            {langs.map(l => (
              <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: 10, color: '#333', fontWeight: 600 }}>{l.name}</span>
                <span style={{ fontSize: 8.5, color: tc, fontWeight: 600 }}>{l.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
