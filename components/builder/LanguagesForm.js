'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useResumeStore } from '@/store/resumeStore'
import Select from '@/components/ui/Select'
import SectionVisibilityBar from '@/components/ui/SectionVisibilityBar'
import { Plus, X } from 'lucide-react'

const proficiencyLevels = ['Native', 'Fluent', 'Professional', 'Intermediate', 'Basic']
const proficiencyColors = { Native: '#10b981', Fluent: '#3b82f6', Professional: '#8b5cf6', Intermediate: '#f59e0b', Basic: '#94a3b8' }

const suggestions = ['English', 'Hindi', 'Spanish', 'French', 'German', 'Mandarin', 'Japanese', 'Arabic', 'Portuguese', 'Russian']

export default function LanguagesForm() {
  const { resume, addLanguage, removeLanguage, toggleHiddenSection } = useResumeStore()
  const { languages = [] } = resume
  const [input, setInput] = useState('')
  const [proficiency, setProficiency] = useState('Professional')
  const isVisible = !(resume.hiddenSections || []).includes('languages')
  
  function handleAdd(name) {
    const n = name || input.trim()
    if (n && !languages.find(l => l.name.toLowerCase() === n.toLowerCase())) {
      addLanguage(n, proficiency)
      setInput('')
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <SectionVisibilityBar
        section="languages"
        visible={isVisible}
        onToggle={() => toggleHiddenSection('languages')}
      />

      {isVisible && (
      <>
      {/* Add input */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'stretch' }}>
        <input
          className="input-glass"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), handleAdd())}
          placeholder="Add a language..."
          style={{ flex: 1, padding: '10px 12px', borderRadius: 10, fontSize: '0.85rem' }}
        />
        <Select
          value={proficiency}
          onChange={e => setProficiency(e.target.value)}
          wrapperClassName="!w-auto min-w-[130px]"
          className="!py-2.5 !text-xs"
        >
          {proficiencyLevels.map(l => (
            <option key={l} value={l}>{l}</option>
          ))}
        </Select>
        <button
          onClick={() => handleAdd()}
          style={{
            width: 42, height: 42, borderRadius: 10, flexShrink: 0,
            background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(59,130,246,0.15))',
            border: '1px solid rgba(124,58,237,0.35)',
            color: 'var(--primary-muted)',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 16px var(--primary-glow)' }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Suggestions */}
      <div>
        <p className="form-label" style={{ marginBottom: 6, textTransform: 'none', letterSpacing: 'normal', fontSize: '0.68rem' }}>Quick add:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {suggestions.filter(s => !languages.find(l => l.name === s)).map(s => (
            <button key={s} onClick={() => handleAdd(s)} className="chip-suggestion">
              + {s}
            </button>
          ))}
        </div>
      </div>

      {/* Language list */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <AnimatePresence>
          {languages.map(lang => (
            <motion.div
              key={lang.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 14px', borderRadius: 999,
                border: `1px solid ${proficiencyColors[lang.proficiency] || '#94a3b8'}50`,
                background: `${proficiencyColors[lang.proficiency] || '#94a3b8'}12`,
                boxShadow: `0 2px 10px ${proficiencyColors[lang.proficiency] || '#94a3b8'}15`,
              }}
            >
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: proficiencyColors[lang.proficiency] || '#94a3b8' }}>{lang.name}</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text3)' }}>· {lang.proficiency}</span>
              <button
                onClick={() => removeLanguage(lang.id)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text4)', display: 'flex', padding: 0 }}
                onMouseEnter={e => e.currentTarget.style.color = '#f87171'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text4)'}
              >
                <X size={11} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      </>
      )}
    </div>
  )
}
