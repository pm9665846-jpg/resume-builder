'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useResumeStore } from '@/store/resumeStore'
import AIAssistButton from '@/components/ui/AIAssistButton'
import { Plus, X } from 'lucide-react'

const suggestions = ['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'SQL', 'AWS', 'Docker', 'Git', 'Figma', 'Next.js', 'MongoDB']

export default function SkillsForm() {
  const { resume, addSkill, removeSkill } = useResumeStore()
  const { skills } = resume
  const [input, setInput] = useState('')

  function handleAdd(skill) {
    const s = skill || input.trim()
    if (s && !skills.find((sk) => sk.name.toLowerCase() === s.toLowerCase())) {
      addSkill(s)
      setInput('')
    }
  }

  function handleAISkills(text) {
    // AI returns comma-separated skills
    const aiSkills = text.split(',').map(s => s.trim()).filter(Boolean)
    aiSkills.forEach(s => {
      if (!skills.find(sk => sk.name.toLowerCase() === s.toLowerCase())) {
        addSkill(s)
      }
    })
  }

  return (
    <div className="space-y-4">
      {/* Input */}
      <div className="flex gap-2">
        <input
          className="input-glass flex-1 rounded-xl px-4 py-3 text-sm"
          placeholder="Add a skill..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAdd())}
        />
        <button
          onClick={() => handleAdd()}
          className="w-11 h-11 rounded-xl flex items-center justify-center transition-all"
          style={{ background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.3)', color: '#a78bfa' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(139,92,246,0.3)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(139,92,246,0.2)'}
        >
          <Plus size={18} />
        </button>
      </div>

      {/* AI Suggest */}
      <div className="flex items-center justify-between">
        <p className="text-xs" style={{ color: '#64748b' }}>Suggestions</p>
        <AIAssistButton
          type="skills"
          context={{ jobTitle: resume.personalInfo?.jobTitle }}
          onResult={handleAISkills}
        />
      </div>
      {/* Suggestions */}
      <div>
        <div className="flex flex-wrap gap-2">
          {suggestions.filter((s) => !skills.find((sk) => sk.name === s)).map((s) => (
            <button
              key={s}
              onClick={() => handleAdd(s)}
              className="text-xs px-3 py-1.5 rounded-full transition-all"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
            >
              + {s}
            </button>
          ))}
        </div>
      </div>

      {/* Skills list */}
      <div className="flex flex-wrap gap-2">
        <AnimatePresence>
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium"
              style={{ color: '#a78bfa', border: '1px solid rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.1)' }}
            >
              {skill.name}
              <button onClick={() => removeSkill(skill.id)} style={{ color: 'rgba(167,139,250,0.6)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#f87171'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(167,139,250,0.6)'}
              >
                <X size={12} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
