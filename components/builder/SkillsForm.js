'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useResumeStore } from '@/store/resumeStore'
import AIAssistButton from '@/components/ui/AIAssistButton'
import SectionVisibilityBar from '@/components/ui/SectionVisibilityBar'
import { Plus, X, Zap } from 'lucide-react'

const suggestions = ['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'SQL', 'AWS', 'Docker', 'Git', 'Figma', 'Next.js', 'MongoDB']

export default function SkillsForm() {
  const { resume, addSkill, removeSkill, updateSkillLevel, clearSkills, toggleHiddenSection } = useResumeStore()
  const skills = resume.skills || []
  const [input, setInput] = useState('')
  const isHidden = (resume.hiddenSections || []).includes('skills')
  const isVisible = !isHidden

  function handleAdd(skill) {
    const s = skill || input.trim()
    if (s && !skills.find((sk) => sk.name.toLowerCase() === s.toLowerCase())) {
      addSkill(s)
      setInput('')
    }
  }

  function handleAISkills(text) {
    const aiSkills = text.split(',').map(s => s.trim()).filter(Boolean)
    aiSkills.forEach(s => {
      if (!skills.find(sk => sk.name.toLowerCase() === s.toLowerCase())) {
        addSkill(s)
      }
    })
  }

  function clampLevel(val) {
    const n = Number(val)
    if (Number.isNaN(n)) return 0
    return Math.min(100, Math.max(0, Math.round(n)))
  }

  return (
    <div className="space-y-4">
      <SectionVisibilityBar
        section="skills"
        visible={isVisible}
        onToggle={() => toggleHiddenSection('skills')}
        description={isVisible
          ? (skills.length === 0 ? 'Add skills below — empty section won\'t show on resume' : 'Set proficiency % for each skill')
          : 'Skills section is hidden from your resume'}
      />

      {isVisible && (
        <>
          {/* Add skill */}
          <div className="flex gap-2">
            <input
              className="input-glass flex-1 rounded-xl px-4 py-3 text-sm"
              placeholder="Add a skill (e.g. React, Python)..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAdd())}
            />
            <button
              onClick={() => handleAdd()}
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-all"
              style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(59,130,246,0.15))', border: '1px solid rgba(124,58,237,0.35)', color: 'var(--primary-muted)' }}
            >
              <Plus size={18} />
            </button>
          </div>

          {/* AI + suggestions */}
          <div className="flex items-center justify-between">
            <p className="text-xs" style={{ color: 'var(--text3)' }}>Quick add</p>
            <AIAssistButton
              type="skills"
              context={{ jobTitle: resume.personalInfo?.jobTitle }}
              onResult={handleAISkills}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {suggestions.filter((s) => !skills.find((sk) => sk.name === s)).map((s) => (
              <button key={s} onClick={() => handleAdd(s)} className="chip-suggestion">+ {s}</button>
            ))}
          </div>

          {/* Skills with progress % */}
          {skills.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p className="form-label" style={{ marginBottom: 0 }}>
                  <Zap size={12} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
                  Your Skills ({skills.length})
                </p>
                <button
                  type="button"
                  onClick={clearSkills}
                  style={{ fontSize: '0.7rem', color: '#f87171', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}
                >
                  Clear all
                </button>
              </div>

              <AnimatePresence>
                {skills.map((skill) => {
                  const level = skill.level ?? 80
                  return (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      className="form-card"
                      style={{ padding: '12px 14px' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>{skill.name}</span>
                        <button
                          onClick={() => removeSkill(skill.id)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text4)', display: 'flex', padding: 2 }}
                          onMouseEnter={e => e.currentTarget.style.color = '#f87171'}
                          onMouseLeave={e => e.currentTarget.style.color = 'var(--text4)'}
                        >
                          <X size={14} />
                        </button>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <input
                          type="range"
                          min={0}
                          max={100}
                          value={level}
                          onChange={(e) => updateSkillLevel(skill.id, Number(e.target.value))}
                          style={{ flex: 1, accentColor: 'var(--primary)', cursor: 'pointer' }}
                        />
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                          <input
                            type="number"
                            min={0}
                            max={100}
                            value={level}
                            onChange={(e) => updateSkillLevel(skill.id, clampLevel(e.target.value))}
                            className="input-glass"
                            style={{ width: 52, padding: '4px 6px', borderRadius: 8, fontSize: '0.8rem', textAlign: 'center' }}
                          />
                          <span style={{ fontSize: '0.75rem', color: 'var(--text3)', fontWeight: 600 }}>%</span>
                        </div>
                      </div>

                      {/* Preview bar */}
                      <div style={{ marginTop: 8, height: 5, background: 'var(--border)', borderRadius: 4, overflow: 'hidden' }}>
                        <div
                          style={{
                            height: '100%',
                            width: `${level}%`,
                            background: `linear-gradient(90deg, var(--primary), var(--accent))`,
                            borderRadius: 4,
                            transition: 'width 0.2s ease',
                          }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '28px 16px', color: 'var(--text3)', fontSize: '0.8rem', borderRadius: 12, border: '1px dashed var(--border)' }}>
              <Zap size={22} style={{ margin: '0 auto 8px', display: 'block', color: 'var(--text4)' }} />
              No skills added yet. Add above or use AI suggest.
            </div>
          )}
        </>
      )}
    </div>
  )
}
