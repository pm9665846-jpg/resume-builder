'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useResumeStore } from '@/store/resumeStore'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import AIAssistButton from '@/components/ui/AIAssistButton'
import { Plus, Trash2, Code2 } from 'lucide-react'

export default function ProjectsForm() {
  const { resume, addProject, updateProject, removeProject } = useResumeStore()
  const { projects } = resume

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {projects.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="glass rounded-xl p-4 border border-white/5"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-cyan-400">
                <Code2 size={16} />
                <span className="text-sm font-medium">Project {i + 1}</span>
              </div>
              <button onClick={() => removeProject(proj.id)} className="text-slate-600 hover:text-red-400 transition-colors">
                <Trash2 size={15} />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input label="Project Name" placeholder="Resume Maker" value={proj.name} onChange={(e) => updateProject(proj.id, 'name', e.target.value)} />
              <Input label="Tech Stack" placeholder="React, Node.js, MySQL" value={proj.tech} onChange={(e) => updateProject(proj.id, 'tech', e.target.value)} />
              <Input label="Live Link" placeholder="https://project.com" value={proj.link} onChange={(e) => updateProject(proj.id, 'link', e.target.value)} className="sm:col-span-2" />
            </div>
            <div className="mt-3">
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-medium uppercase tracking-wider" style={{ color: '#94a3b8' }}>Description</label>
                <AIAssistButton
                  type="project"
                  context={{ name: proj.name, tech: proj.tech }}
                  onResult={(text) => updateProject(proj.id, 'description', text)}
                />
              </div>
              <Input textarea placeholder="Built a full-stack resume builder with AI features..." value={proj.description} onChange={(e) => updateProject(proj.id, 'description', e.target.value)} />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <Button variant="outline" onClick={addProject} icon={<Plus size={15} />} className="w-full">
        Add Project
      </Button>
    </div>
  )
}
