'use client'
import { useResumeStore } from '@/store/resumeStore'
import { Plus, Trash2, Activity } from 'lucide-react'

export default function ActivitiesForm() {
  const { resume, addActivity, updateActivity, removeActivity } = useResumeStore()
  const list = resume.activities || []

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Activity size={15} color="#06b6d4" />
        <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>Activities</p>
      </div>
      <p style={{ color: 'var(--text3)', fontSize: '0.75rem', margin: '-8px 0 0' }}>Clubs, societies, volunteer work, and extracurricular activities.</p>

      {list.map((item, i) => (
        <div key={item.id} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text3)', fontWeight: 600 }}>#{i + 1}</span>
            <button onClick={() => removeActivity(item.id)}
              style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', color: '#f87171', borderRadius: 7, padding: '4px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.72rem' }}>
              <Trash2 size={11} /> Remove
            </button>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>Title / Role</label>
            <input value={item.title} onChange={e => updateActivity(item.id, 'title', e.target.value)}
              placeholder="e.g. President, Computer Science Society"
              className="input-glass"
              style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 9, paddingBottom: 9, borderRadius: 9, fontSize: '0.85rem', width: '100%' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>Description</label>
            <textarea value={item.description} onChange={e => updateActivity(item.id, 'description', e.target.value)}
              placeholder="What did you do? What was the impact?"
              rows={2} className="input-glass"
              style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 9, paddingBottom: 9, borderRadius: 9, fontSize: '0.85rem', resize: 'vertical', width: '100%' }} />
          </div>
        </div>
      ))}

      <button onClick={addActivity}
        style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 14px', borderRadius: 9, cursor: 'pointer', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)', color: '#06b6d4', fontSize: '0.82rem', fontWeight: 600, width: 'fit-content' }}>
        <Plus size={14} /> Add Activity
      </button>

      {list.length === 0 && (
        <div style={{ textAlign: 'center', padding: '20px 0', color: 'var(--text3)', fontSize: '0.8rem' }}>
          <Activity size={22} color="#334155" style={{ marginBottom: 8, display: 'block', margin: '0 auto 8px' }} />
          No activities added yet.
        </div>
      )}
    </div>
  )
}
