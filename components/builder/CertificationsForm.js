'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useResumeStore } from '@/store/resumeStore'
import { Plus, Trash2, Award } from 'lucide-react'

function Field({ label, value, onChange, placeholder, type = 'text' }) {
  const isMonth = type === 'month' || type === 'date'
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-glass ${isMonth ? 'input-month' : ''}`}
        style={{ padding: '9px 12px', borderRadius: 10, fontSize: '0.83rem', width: '100%' }}
      />
    </div>
  )
}

export default function CertificationsForm() {
  const { resume, addCertification, updateCertification, removeCertification } = useResumeStore()
  const { certifications = [] } = resume

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <AnimatePresence>
        {certifications.map((cert, i) => (
          <motion.div key={cert.id} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -16 }}
            className="form-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <div className="form-section-title" style={{ color: '#f59e0b' }}>
                <Award size={14} />
                <span style={{ fontSize: '0.78rem', fontWeight: 600 }}>Certification {i + 1}</span>
              </div>
              <button onClick={() => removeCertification(cert.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text4)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#f87171'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text4)'}>
                <Trash2 size={14} />
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div style={{ gridColumn: 'span 2' }}>
                <Field label="Certification Name" value={cert.name} onChange={e => updateCertification(cert.id, 'name', e.target.value)} placeholder="AWS Certified Solutions Architect" />
              </div>
              <Field label="Issuing Organization" value={cert.issuer} onChange={e => updateCertification(cert.id, 'issuer', e.target.value)} placeholder="Amazon Web Services" />
              <Field label="Issue Date" value={cert.date} onChange={e => updateCertification(cert.id, 'date', e.target.value)} placeholder="2023-06" type="month" />
              <div style={{ gridColumn: 'span 2' }}>
                <Field label="Credential ID (optional)" value={cert.credentialId} onChange={e => updateCertification(cert.id, 'credentialId', e.target.value)} placeholder="ABC-123-XYZ" />
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <button onClick={addCertification}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px', borderRadius: 10, border: '1px solid rgba(124,58,237,0.3)', background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(59,130,246,0.06))', color: 'var(--primary-muted)', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
        onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(59,130,246,0.1))'; e.currentTarget.style.boxShadow = '0 0 16px var(--primary-glow)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(59,130,246,0.06))'; e.currentTarget.style.boxShadow = 'none' }}>
        <Plus size={14} /> Add Certification
      </button>
    </div>
  )
}
