'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useResumeStore } from '@/store/resumeStore'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { Plus, Trash2, GraduationCap } from 'lucide-react'

export default function EducationForm() {
  const { resume, addEducation, updateEducation, removeEducation } = useResumeStore()
  const { education } = resume

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="form-card"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="form-section-title">
                <GraduationCap size={16} />
                <span>Education {i + 1}</span>
              </div>
              <button onClick={() => removeEducation(edu.id)} style={{ color: 'var(--text4)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#f87171'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text4)'}
              >
                <Trash2 size={15} />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input label="School / University" placeholder="IIT Bombay" value={edu.school} onChange={(e) => updateEducation(edu.id, 'school', e.target.value)} />
              <Input label="Degree" placeholder="B.Tech Computer Science" value={edu.degree} onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)} />
              <Input label="Start Date" type="month" value={edu.startDate} onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)} />
              <Input label="End Date" type="month" value={edu.endDate} onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)} />
              <Input label="GPA / Score" placeholder="9.2 / 10" value={edu.gpa} onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)} />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <Button variant="outline" onClick={addEducation} icon={<Plus size={15} />} className="w-full">
        Add Education
      </Button>
    </div>
  )
}
