'use client'
import { useResumeStore } from '@/store/resumeStore'
import { Info } from 'lucide-react'

export default function AdditionalInfoForm() {
  const { resume, updateAdditionalInfo } = useResumeStore()
  const value = resume.additionalInfo || ''

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Info size={15} color="#f97316" />
        <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>Additional Information</p>
      </div>
      <p style={{ color: 'var(--text3)', fontSize: '0.75rem', margin: '-8px 0 0' }}>
        Availability, relocation preferences, visa status, or any other relevant information.
      </p>

      <div>
        <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
          Additional Notes
        </label>
        <textarea
          value={value}
          onChange={e => updateAdditionalInfo(e.target.value)}
          placeholder="e.g. Available to start immediately. Open to relocation and remote work. Valid work permit for EU countries."
          rows={5}
          className="input-glass"
          style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontSize: '0.85rem', resize: 'vertical', width: '100%', lineHeight: 1.6 }}
        />
        <p style={{ fontSize: '0.7rem', color: 'var(--text3)', marginTop: 6 }}>
          {value.length} characters
        </p>
      </div>

      {/* Suggestions */}
      <div>
        <p style={{ fontSize: '0.7rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8, fontWeight: 600 }}>Quick suggestions</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {[
            'Available to start immediately',
            'Open to relocation',
            'Open to remote work',
            'Valid driving license',
            'Willing to travel',
          ].map(s => (
            <button key={s} type="button"
              onClick={() => updateAdditionalInfo(value ? `${value}. ${s}` : s)}
              style={{ padding: '4px 12px', borderRadius: 20, cursor: 'pointer', background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text2)', fontSize: '0.75rem', transition: 'all 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(249,115,22,0.4)'; e.currentTarget.style.color = '#f97316' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)' }}
            >
              + {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
