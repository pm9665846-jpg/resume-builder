'use client'
import { useResumeStore } from '@/store/resumeStore'
import { Plus, Trash2, Trophy } from 'lucide-react'

export default function AchievementsForm() {
  const { resume, addAchievementItem, updateAchievementItem, removeAchievementItem } = useResumeStore()
  const list = resume.achievementsList || []

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Trophy size={15} color="#f59e0b" />
        <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>Achievements</p>
      </div>
      <p style={{ color: 'var(--text3)', fontSize: '0.75rem', margin: '-8px 0 0' }}>Awards, honors, recognitions, and notable accomplishments.</p>

      {list.map((item, i) => (
        <div key={item.id} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text3)', fontWeight: 600 }}>#{i + 1}</span>
            <button onClick={() => removeAchievementItem(item.id)}
              style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', color: '#f87171', borderRadius: 7, padding: '4px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.72rem' }}>
              <Trash2 size={11} /> Remove
            </button>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>Title</label>
            <input value={item.title} onChange={e => updateAchievementItem(item.id, 'title', e.target.value)}
              placeholder="e.g. Won 1st place at National Hackathon 2023"
              className="input-glass"
              style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 9, paddingBottom: 9, borderRadius: 9, fontSize: '0.85rem', width: '100%' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>Description</label>
            <textarea value={item.description} onChange={e => updateAchievementItem(item.id, 'description', e.target.value)}
              placeholder="Brief description of the achievement..."
              rows={2} className="input-glass"
              style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 9, paddingBottom: 9, borderRadius: 9, fontSize: '0.85rem', resize: 'vertical', width: '100%' }} />
          </div>
        </div>
      ))}

      <button onClick={addAchievementItem}
        style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 14px', borderRadius: 9, cursor: 'pointer', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', color: '#f59e0b', fontSize: '0.82rem', fontWeight: 600, width: 'fit-content' }}>
        <Plus size={14} /> Add Achievement
      </button>

      {list.length === 0 && (
        <div style={{ textAlign: 'center', padding: '20px 0', color: 'var(--text3)', fontSize: '0.8rem' }}>
          <Trophy size={22} color="#334155" style={{ marginBottom: 8, display: 'block', margin: '0 auto 8px' }} />
          No achievements added yet.
        </div>
      )}
    </div>
  )
}
