'use client'
import { useState } from 'react'
import { useResumeStore } from '@/store/resumeStore'
import { Plus, X, Heart } from 'lucide-react'

const SUGGESTIONS = [
  'Photography', 'Hiking', 'Reading', 'Cooking', 'Travel',
  'Music', 'Gaming', 'Painting', 'Yoga', 'Cycling',
  'Open Source', 'Blogging', 'Chess', 'Volunteering', 'Podcasting',
]

export default function InterestsForm() {
  const { resume, addInterest, removeInterest } = useResumeStore()
  const interests = resume.interests || []
  const [input, setInput] = useState('')

  function handleAdd() {
    const val = input.trim()
    if (!val) return
    if (interests.some(i => i.name.toLowerCase() === val.toLowerCase())) return
    addInterest(val)
    setInput('')
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') { e.preventDefault(); handleAdd() }
  }

  const suggestions = SUGGESTIONS.filter(s => !interests.some(i => i.name.toLowerCase() === s.toLowerCase()))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Heart size={15} color="#ec4899" />
        <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>Interests & Hobbies</p>
      </div>
      <p style={{ color: '#64748b', fontSize: '0.75rem', margin: '-8px 0 0' }}>Add your personal interests — shows your personality beyond work.</p>

      {/* Input */}
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g. Photography, Hiking..."
          className="input-glass"
          style={{ flex: 1, paddingLeft: 12, paddingRight: 12, paddingTop: 9, paddingBottom: 9, borderRadius: 10, fontSize: '0.85rem' }}
        />
        <button
          onClick={handleAdd}
          disabled={!input.trim()}
          style={{
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '9px 14px', borderRadius: 10, cursor: input.trim() ? 'pointer' : 'not-allowed',
            background: input.trim() ? 'rgba(139,92,246,0.2)' : 'rgba(255,255,255,0.04)',
            border: `1px solid ${input.trim() ? 'rgba(139,92,246,0.4)' : 'rgba(255,255,255,0.08)'}`,
            color: input.trim() ? '#a78bfa' : '#475569',
            fontSize: '0.8rem', fontWeight: 600, transition: 'all 0.2s',
          }}
        >
          <Plus size={14} /> Add
        </button>
      </div>

      {/* Added interests */}
      {interests.length > 0 && (
        <div>
          <p style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8, fontWeight: 600 }}>Added</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {interests.map(interest => (
              <div
                key={interest.id}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '5px 12px', borderRadius: 20,
                  background: 'rgba(236,72,153,0.12)',
                  border: '1px solid rgba(236,72,153,0.3)',
                  color: '#f9a8d4', fontSize: '0.8rem', fontWeight: 500,
                }}
              >
                <Heart size={10} color="#f9a8d4" />
                {interest.name}
                <button
                  onClick={() => removeInterest(interest.id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', color: '#f9a8d4', opacity: 0.7, marginLeft: 2 }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
                >
                  <X size={11} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div>
          <p style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8, fontWeight: 600 }}>Suggestions</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {suggestions.slice(0, 10).map(s => (
              <button
                key={s}
                onClick={() => addInterest(s)}
                style={{
                  padding: '4px 12px', borderRadius: 20, cursor: 'pointer',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#94a3b8', fontSize: '0.78rem',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(236,72,153,0.1)'; e.currentTarget.style.borderColor = 'rgba(236,72,153,0.3)'; e.currentTarget.style.color = '#f9a8d4' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#94a3b8' }}
              >
                + {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {interests.length === 0 && (
        <div style={{ textAlign: 'center', padding: '24px 0', color: '#475569', fontSize: '0.8rem' }}>
          <Heart size={24} color="#334155" style={{ marginBottom: 8, display: 'block', margin: '0 auto 8px' }} />
          No interests added yet. Type above or pick from suggestions.
        </div>
      )}
    </div>
  )
}
