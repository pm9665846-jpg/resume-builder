'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useResumeStore } from '@/store/resumeStore'
import { Plus, Trash2, Award } from 'lucide-react'

function Field({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>{label}</label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} className="input-glass"
        style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 9, paddingBottom: 9, borderRadius: 9, fontSize: '0.83rem', width: '100%' }} />
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
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#f59e0b' }}>
                <Award size={14} />
                <span style={{ fontSize: '0.78rem', fontWeight: 600 }}>Certification {i + 1}</span>
              </div>
              <button onClick={() => removeCertification(cert.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#475569' }}
                onMouseEnter={e => e.currentTarget.style.color = '#f87171'}
                onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
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
      <button onClick={addCertification} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px', borderRadius: 10, border: '1px solid rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.08)', color: '#a78bfa', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(139,92,246,0.15)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(139,92,246,0.08)'}>
        <Plus size={14} /> Add Certification
      </button>
    </div>
  )
}
