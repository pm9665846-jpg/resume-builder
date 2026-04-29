'use client'
import { useResumeStore } from '@/store/resumeStore'
import { Plus, Trash2, BookOpen } from 'lucide-react'

export default function PublicationsForm() {
  const { resume, addPublication, updatePublication, removePublication } = useResumeStore()
  const list = resume.publications || []

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <BookOpen size={15} color="#8b5cf6" />
        <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>Publications</p>
      </div>
      <p style={{ color: 'var(--text3)', fontSize: '0.75rem', margin: '-8px 0 0' }}>Research papers, articles, books, or blog posts you have published.</p>

      {list.map((item, i) => (
        <div key={item.id} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text3)', fontWeight: 600 }}>#{i + 1}</span>
            <button onClick={() => removePublication(item.id)}
              style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', color: '#f87171', borderRadius: 7, padding: '4px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.72rem' }}>
              <Trash2 size={11} /> Remove
            </button>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>Title</label>
            <input value={item.title} onChange={e => updatePublication(item.id, 'title', e.target.value)}
              placeholder="e.g. Optimizing Neural Networks for Edge Devices"
              className="input-glass"
              style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 9, paddingBottom: 9, borderRadius: 9, fontSize: '0.85rem', width: '100%' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>Details / Citation</label>
            <textarea value={item.description} onChange={e => updatePublication(item.id, 'description', e.target.value)}
              placeholder="Journal name, year, co-authors, DOI, link..."
              rows={2} className="input-glass"
              style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 9, paddingBottom: 9, borderRadius: 9, fontSize: '0.85rem', resize: 'vertical', width: '100%' }} />
          </div>
        </div>
      ))}

      <button onClick={addPublication}
        style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 14px', borderRadius: 9, cursor: 'pointer', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', color: '#a78bfa', fontSize: '0.82rem', fontWeight: 600, width: 'fit-content' }}>
        <Plus size={14} /> Add Publication
      </button>

      {list.length === 0 && (
        <div style={{ textAlign: 'center', padding: '20px 0', color: 'var(--text3)', fontSize: '0.8rem' }}>
          <BookOpen size={22} color="#334155" style={{ marginBottom: 8, display: 'block', margin: '0 auto 8px' }} />
          No publications added yet.
        </div>
      )}
    </div>
  )
}
