'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useResumeStore } from '@/store/resumeStore'
import { Plus, X, Languages } from 'lucide-react'

const proficiencyLevels = ['Native', 'Fluent', 'Professional', 'Intermediate', 'Basic']
const proficiencyColors = { Native: '#10b981', Fluent: '#3b82f6', Professional: '#8b5cf6', Intermediate: '#f59e0b', Basic: '#94a3b8' }

const suggestions = ['English', 'Hindi', 'Spanish', 'French', 'German', 'Mandarin', 'Japanese', 'Arabic', 'Portuguese', 'Russian']

export default function LanguagesForm() {
  const { resume, addLanguage, removeLanguage } = useResumeStore()
  const { languages = [] } = resume
  const [input, setInput] = useState('')
  const [proficiency, setProficiency] = useState('Professional')

  function handleAdd(name) {
    const n = name || input.trim()
    if (n && !languages.find(l => l.name.toLowerCase() === n.toLowerCase())) {
      addLanguage(n, proficiency)
      setInput('')
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Add input */}
      <div style={{ display: 'flex', gap: 8 }}>
        <input className="input-glass" value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), handleAdd())}
          placeholder="Add a language..."
          style={{ flex: 1, paddingLeft: 12, paddingRight: 12, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontSize: '0.85rem' }} />
        <select value={proficiency} onChange={e => setProficiency(e.target.value)}
          className="input-glass"
          style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontSize: '0.8rem', cursor: 'pointer' }}>
          {proficiencyLevels.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
        <button onClick={() => handleAdd()} style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.3)', color: '#a78bfa', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Plus size={16} />
        </button>
      </div>

      {/* Suggestions */}
      <div>
        <p style={{ fontSize: '0.68rem', color: '#64748b', marginBottom: 6 }}>Quick add:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {suggestions.filter(s => !languages.find(l => l.name === s)).map(s => (
            <button key={s} onClick={() => handleAdd(s)}
              style={{ fontSize: '0.72rem', padding: '3px 10px', borderRadius: 999, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}>
              + {s}
            </button>
          ))}
        </div>
      </div>

      {/* Language list */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <AnimatePresence>
          {languages.map(lang => (
            <motion.div key={lang.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 999, border: `1px solid ${proficiencyColors[lang.proficiency] || '#94a3b8'}40`, background: `${proficiencyColors[lang.proficiency] || '#94a3b8'}10` }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: proficiencyColors[lang.proficiency] || '#94a3b8' }}>{lang.name}</span>
              <span style={{ fontSize: '0.65rem', color: '#64748b' }}>· {lang.proficiency}</span>
              <button onClick={() => removeLanguage(lang.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#475569', display: 'flex', padding: 0 }}
                onMouseEnter={e => e.currentTarget.style.color = '#f87171'}
                onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
                <X size={11} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
