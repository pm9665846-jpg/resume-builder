'use client'
import { useResumeStore } from '@/store/resumeStore'
import { Plus, Trash2, Users, Mail, Phone, Briefcase, Building } from 'lucide-react'

export default function ReferencesForm() {
  const { resume, addReference, updateReference, removeReference } = useResumeStore()
  const list = resume.references || []

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Users size={15} color="#10b981" />
        <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>References</p>
      </div>
      <p style={{ color: 'var(--text3)', fontSize: '0.75rem', margin: '-8px 0 0' }}>Professional references who can vouch for your work.</p>

      {list.map((item, i) => (
        <div key={item.id} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text3)', fontWeight: 600 }}>Reference #{i + 1}</span>
            <button onClick={() => removeReference(item.id)}
              style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', color: '#f87171', borderRadius: 7, padding: '4px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.72rem' }}>
              <Trash2 size={11} /> Remove
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>Full Name</label>
              <div style={{ position: 'relative' }}>
                <Users size={13} color="#64748b" style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                <input value={item.refereeName} onChange={e => updateReference(item.id, 'refereeName', e.target.value)}
                  placeholder="e.g. Nitin Dube" className="input-glass"
                  style={{ paddingLeft: 32, paddingRight: 12, paddingTop: 9, paddingBottom: 9, borderRadius: 9, fontSize: '0.85rem', width: '100%' }} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>Job Title</label>
              <div style={{ position: 'relative' }}>
                <Briefcase size={13} color="#64748b" style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                <input value={item.jobTitle} onChange={e => updateReference(item.id, 'jobTitle', e.target.value)}
                  placeholder="MERN Stack Developer" className="input-glass"
                  style={{ paddingLeft: 32, paddingRight: 12, paddingTop: 9, paddingBottom: 9, borderRadius: 9, fontSize: '0.85rem', width: '100%' }} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>Company</label>
              <div style={{ position: 'relative' }}>
                <Building size={13} color="#64748b" style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                <input value={item.company} onChange={e => updateReference(item.id, 'company', e.target.value)}
                  placeholder="Codeat Infotech" className="input-glass"
                  style={{ paddingLeft: 32, paddingRight: 12, paddingTop: 9, paddingBottom: 9, borderRadius: 9, fontSize: '0.85rem', width: '100%' }} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>Email</label>
              <div style={{ position: 'relative' }}>
                <Mail size={13} color="#64748b" style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                <input value={item.email} onChange={e => updateReference(item.id, 'email', e.target.value)}
                  placeholder="referee@email.com" type="email" className="input-glass"
                  style={{ paddingLeft: 32, paddingRight: 12, paddingTop: 9, paddingBottom: 9, borderRadius: 9, fontSize: '0.85rem', width: '100%' }} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>Phone</label>
              <div style={{ position: 'relative' }}>
                <Phone size={13} color="#64748b" style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                <input value={item.phone} onChange={e => updateReference(item.id, 'phone', e.target.value)}
                  placeholder="+91 98765 43210" type="tel" className="input-glass"
                  style={{ paddingLeft: 32, paddingRight: 12, paddingTop: 9, paddingBottom: 9, borderRadius: 9, fontSize: '0.85rem', width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      ))}

      <button onClick={addReference}
        style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 14px', borderRadius: 9, cursor: 'pointer', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', color: '#10b981', fontSize: '0.82rem', fontWeight: 600, width: 'fit-content' }}>
        <Plus size={14} /> Add Reference
      </button>

      {list.length === 0 && (
        <div style={{ textAlign: 'center', padding: '20px 0', color: 'var(--text3)', fontSize: '0.8rem' }}>
          <Users size={22} color="#334155" style={{ marginBottom: 8, display: 'block', margin: '0 auto 8px' }} />
          No references added yet.
        </div>
      )}
    </div>
  )
}
