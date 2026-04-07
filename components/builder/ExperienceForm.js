'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useResumeStore } from '@/store/resumeStore'
import Button from '@/components/ui/Button'
import AIAssistButton from '@/components/ui/AIAssistButton'
import { Plus, Trash2, Briefcase } from 'lucide-react'

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wider mb-1.5" style={{ color: '#94a3b8' }}>{label}</label>
      <input className="input-glass w-full rounded-xl px-4 py-3 text-sm" {...props} />
    </div>
  )
}

export default function ExperienceForm() {
  const { resume, addExperience, updateExperience, removeExperience } = useResumeStore()
  const { experience } = resume

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {experience.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl p-4"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2" style={{ color: '#a78bfa' }}>
                <Briefcase size={16} />
                <span className="text-sm font-medium">Experience {i + 1}</span>
              </div>
              <button onClick={() => removeExperience(exp.id)} style={{ color: '#475569' }}
                onMouseEnter={e => e.currentTarget.style.color = '#f87171'}
                onMouseLeave={e => e.currentTarget.style.color = '#475569'}
              >
                <Trash2 size={15} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field label="Company" placeholder="Google" value={exp.company} onChange={(e) => updateExperience(exp.id, 'company', e.target.value)} />
              <Field label="Job Title" placeholder="Software Engineer" value={exp.role} onChange={(e) => updateExperience(exp.id, 'role', e.target.value)} />
              <Field label="Start Date" type="month" value={exp.startDate} onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)} />
              <div>
                <Field label="End Date" type="month" value={exp.endDate} onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)} disabled={exp.current} />
                <label className="flex items-center gap-2 mt-2 cursor-pointer">
                  <input type="checkbox" checked={exp.current} onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)} style={{ accentColor: '#8b5cf6' }} />
                  <span className="text-xs" style={{ color: '#94a3b8' }}>Currently working here</span>
                </label>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-medium uppercase tracking-wider" style={{ color: '#94a3b8' }}>Description</label>
                <AIAssistButton
                  type="experience"
                  context={{ role: exp.role, company: exp.company }}
                  onResult={(text) => updateExperience(exp.id, 'description', text)}
                />
              </div>
              <textarea
                className="input-glass w-full rounded-xl px-4 py-3 text-sm resize-none"
                style={{ minHeight: '100px' }}
                placeholder="• Led development of microservices...&#10;• Improved performance by 40%..."
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <Button variant="outline" onClick={addExperience} icon={<Plus size={15} />} className="w-full">
        Add Experience
      </Button>
    </div>
  )
}
