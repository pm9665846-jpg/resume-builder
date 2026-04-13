import { Mail, Phone, MapPin, Globe, Link2, Award } from 'lucide-react'

const SAMPLE = {
  name: 'xyz', jobTitle: 'Data Scientist',
  email: 'abc@gmail.com', phone: '+91 98765 43210',
  location: 'Bengaluru, India', website: 'abcdev.com', linkedin: 'linkedin.com/in/prachi',
  summary: 'Data Scientist with 4+ years extracting actionable insights from complex datasets. Expertise in ML model development, statistical analysis, and data visualization. Delivered models generating $20M+ in business value. Strong communicator bridging technical and business teams.',
  experience: [
    { id: 's1', role: 'Senior Data Scientist', company: 'Walmart Global Tech', location: 'Bengaluru', startDate: 'Apr 2022', endDate: '', current: true, description: '• Built demand forecasting model reducing inventory waste by 18% ($8M annual savings)\n• Developed customer churn prediction model with 91% accuracy, retaining 50K+ customers\n• Led team of 4 data scientists; established MLOps practices reducing model deployment time by 60%\n• Published 2 internal research papers on recommendation systems' },
    { id: 's2', role: 'Data Scientist', company: 'OYO Rooms', location: 'Gurugram', startDate: 'Aug 2020', endDate: 'Mar 2022', current: false, description: '• Built dynamic pricing model increasing revenue per available room by 23%\n• Created NLP pipeline for guest review analysis processing 100K+ reviews/day\n• Reduced data pipeline processing time by 70% through Apache Spark optimization' },
  ],
  education: [{ id: 'e1', degree: 'M.Sc Statistics & Data Science', school: 'ISI Kolkata', startDate: '2018', endDate: '2020', gpa: '9.1 / 10', achievements: 'Best Dissertation Award · Kaggle Expert' }],
  skills: [
    { id: 'sk1', name: 'Python / R', level: 95 }, { id: 'sk2', name: 'Machine Learning / Deep Learning', level: 90 },
    { id: 'sk3', name: 'SQL / BigQuery', level: 88 }, { id: 'sk4', name: 'TensorFlow / PyTorch', level: 85 },
    { id: 'sk5', name: 'Apache Spark / Hadoop', level: 80 }, { id: 'sk6', name: 'Tableau / Power BI', level: 82 },
    { id: 'sk7', name: 'Statistics / A/B Testing', level: 92 }, { id: 'sk8', name: 'AWS SageMaker', level: 78 },
  ],
  projects: [
    { id: 'p1', name: 'Demand Forecasting Engine', tech: 'Python, XGBoost, AWS SageMaker, Airflow', link: 'github.com/prachi/demand-forecast', description: 'ML pipeline forecasting demand for 500K+ SKUs with 94% accuracy. Deployed on AWS SageMaker with automated retraining.' },
    { id: 'p2', name: 'Customer Churn Predictor', tech: 'Python, scikit-learn, PostgreSQL, Grafana', description: 'Ensemble model predicting customer churn 30 days in advance. 91% accuracy, 85% precision. Saved $3M in retention costs.' },
  ],
  certifications: [
    { id: 'c1', name: 'Google Professional Data Engineer', issuer: 'Google Cloud', date: '2023-01' },
    { id: 'c2', name: 'AWS Certified Machine Learning Specialty', issuer: 'Amazon Web Services', date: '2022-07' },
    { id: 'c3', name: 'TensorFlow Developer Certificate', issuer: 'Google', date: '2021-11' },
  ],
  languages: [{ id: 'l1', name: 'English', proficiency: 'Fluent' }, { id: 'l2', name: 'Hindi', proficiency: 'Native' }, { id: 'l3', name: 'Bengali', proficiency: 'Intermediate' }],
}

function g(val, fb) { return val && String(val).trim() !== '' ? val : fb }

export default function CompactTemplate({ resume }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], certifications = [], languages = [], themeColor = '#2563eb' } = resume
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

  const HR = () => <div style={{ height: 1, background: '#e5e7eb', margin: '10px 0' }} />
  const SH = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
      <h2 style={{ fontSize: 9.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: tc, whiteSpace: 'nowrap' }}>{children}</h2>
      <div style={{ flex: 1, height: 1.5, background: tc }} />
    </div>
  )

  return (
    <div style={{ background: 'white', fontFamily: "'Arial', sans-serif", fontSize: '10px', lineHeight: 1.45, padding: '22px 26px', minHeight: '297mm', color: '#1a1a1a' }}>

      {/* ── HEADER ── */}
      <div style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 14 }}>
        {photo && (
          <img src={photo} alt="Profile" style={{ width: 60, height: 60, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${tc}`, flexShrink: 0 }} />
        )}
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: '#111', letterSpacing: '0.01em', marginBottom: 3 }}>{name}</h1>
          <p style={{ fontSize: 10.5, color: tc, fontWeight: 700, marginBottom: 6, letterSpacing: '0.03em' }}>{jobTitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', fontSize: 9, color: '#555' }}>
            {[{ I: Mail, v: email }, { I: Phone, v: phone }, { I: MapPin, v: location }, { I: Globe, v: website }, { I: Link2, v: linkedin }]
              .filter(x => x.v)
              .map(({ I, v }, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 3 }}><I size={8} color={tc} />{v}</span>
              ))}
          </div>
        </div>
      </div>

      <HR />
      <SH>Summary</SH>
      <p style={{ color: '#333', fontSize: 10, lineHeight: 1.65, marginBottom: 4 }}>{summary}</p>

      <HR />
      <SH>Experience</SH>
      {exp.map((e, i) => (
        <div key={e.id} style={{ marginBottom: i < exp.length - 1 ? 10 : 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontWeight: 800, fontSize: 11 }}>{e.role}</span>
            <span style={{ fontSize: 8.5, color: '#777', whiteSpace: 'nowrap', marginLeft: 8 }}>{e.startDate} – {e.current ? 'Present' : e.endDate}</span>
          </div>
          <p style={{ color: tc, fontSize: 9.5, fontWeight: 700 }}>
            {e.company}{e.location ? <span style={{ color: '#888', fontWeight: 400 }}> · {e.location}</span> : ''}
          </p>
          {e.description && (
            <div style={{ marginTop: 3 }}>
              {e.description.split('\n').filter(Boolean).map((line, li) => (
                <p key={li} style={{ color: '#444', fontSize: 9.5, lineHeight: 1.55, marginBottom: 1.5 }}>{line}</p>
              ))}
            </div>
          )}
        </div>
      ))}

      <HR />
      <SH>Education</SH>
      {edu.map((e, i) => (
        <div key={e.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: i < edu.length - 1 ? 6 : 0 }}>
          <div>
            <span style={{ fontWeight: 800, fontSize: 11 }}>{e.degree}</span>
            <span style={{ color: '#555', fontSize: 9.5 }}> — {e.school}</span>
            {e.gpa && <span style={{ color: tc, fontSize: 9, fontWeight: 600 }}> | GPA: {e.gpa}</span>}
            {e.achievements && <p style={{ color: '#888', fontSize: 8.5, fontStyle: 'italic', marginTop: 1 }}>{e.achievements}</p>}
          </div>
          <span style={{ fontSize: 8.5, color: '#777', whiteSpace: 'nowrap', marginLeft: 8 }}>{e.startDate} – {e.endDate}</span>
        </div>
      ))}

      <HR />
      <SH>Skills</SH>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 20px' }}>
        {skl.map(s => (
          <div key={s.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1.5 }}>
              <span style={{ fontSize: 9.5, color: '#333' }}>{s.name}</span>
              <span style={{ fontSize: 8, color: '#aaa' }}>{s.level || 80}%</span>
            </div>
            <div style={{ height: 2.5, background: '#eee', borderRadius: 2 }}>
              <div style={{ height: 2.5, background: tc, borderRadius: 2, width: `${s.level || 80}%` }} />
            </div>
          </div>
        ))}
      </div>

      <HR />
      <SH>Projects</SH>
      {prj.map((p, i) => (
        <div key={p.id} style={{ marginBottom: i < prj.length - 1 ? 8 : 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ fontWeight: 800, fontSize: 11 }}>{p.name}</span>
            {p.link && <a href={`https://${p.link}`} style={{ fontSize: 8.5, color: tc, textDecoration: 'none' }}>{p.link}</a>}
          </div>
          {p.tech && <p style={{ color: '#888', fontSize: 8.5, marginBottom: 1 }}>{p.tech}</p>}
          {p.description && <p style={{ color: '#444', fontSize: 9.5, lineHeight: 1.55 }}>{p.description}</p>}
        </div>
      ))}

      <HR />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <SH>Certifications</SH>
          {certs.map(c => (
            <div key={c.id} style={{ display: 'flex', gap: 5, marginBottom: 5 }}>
              <Award size={9} color={tc} style={{ flexShrink: 0, marginTop: 1 }} />
              <div>
                <p style={{ fontWeight: 700, fontSize: 9.5, color: '#222', lineHeight: 1.3 }}>{c.name}</p>
                <p style={{ color: '#888', fontSize: 8.5 }}>{c.issuer} {c.date ? `· ${c.date}` : ''}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <SH>Languages</SH>
          {langs.map(l => (
            <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontSize: 10, color: '#333', fontWeight: 600 }}>{l.name}</span>
              <span style={{ fontSize: 9, color: '#888' }}>{l.proficiency}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
