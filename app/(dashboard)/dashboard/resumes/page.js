'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Plus, FileText, Edit, Trash2, Download, Eye, Clock, Search } from 'lucide-react'
import Button from '@/components/ui/Button'
import FloatingBackground from '@/components/ui/FloatingBackground'

const mockResumes = [
  { id: '1', title: 'Software Engineer Resume', template: 'Modern', themeColor: '#8b5cf6', updated: '2 hours ago' },
  { id: '2', title: 'Product Manager CV', template: 'Executive', themeColor: '#06b6d4', updated: '1 day ago' },
  { id: '3', title: 'UX Designer Portfolio', template: 'Creative', themeColor: '#ec4899', updated: '3 days ago' },
  { id: '4', title: 'Data Scientist Resume', template: 'Minimal', themeColor: '#3b82f6', updated: '1 week ago' },
]

export default function ResumesPage() {
  const [search, setSearch] = useState('')
  const filtered = mockResumes.filter((r) => r.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="relative min-h-screen p-8" style={{ background: '#050508' }}>
      <FloatingBackground />
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-black text-white mb-1">My Resumes</h1>
              <p style={{ color: '#94a3b8' }}>{filtered.length} resume{filtered.length !== 1 ? 's' : ''}</p>
            </div>
            <Link href="/dashboard/create">
              <Button icon={<Plus size={16} />}>New Resume</Button>
            </Link>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#64748b' }} />
            <input
              className="input-glass w-full rounded-xl py-3 text-sm"
              style={{ paddingLeft: '2.75rem', paddingRight: '1rem' }}
              placeholder="Search resumes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* New resume card */}
            <Link href="/dashboard/create">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl border-2 border-dashed cursor-pointer transition-all group flex flex-col items-center justify-center gap-3"
                style={{
                  aspectRatio: '3/4',
                  borderColor: 'rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.02)',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all" style={{ background: 'rgba(139,92,246,0.2)' }}>
                  <Plus size={22} style={{ color: '#a78bfa' }} />
                </div>
                <p className="text-sm font-medium transition-colors" style={{ color: '#94a3b8' }}>Create New Resume</p>
              </motion.div>
            </Link>

            {filtered.map((resume, i) => (
              <motion.div
                key={resume.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden group card-hover"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {/* Preview area */}
                <div className="bg-white p-4 relative" style={{ aspectRatio: '3/4' }}>
                  <div className="h-3 rounded mb-2" style={{ background: resume.themeColor, width: '66%' }} />
                  <div className="h-px mb-3" style={{ background: `${resume.themeColor}40` }} />
                  {[...Array(8)].map((_, j) => (
                    <div key={j} className="h-1.5 rounded mb-1.5" style={{ background: '#f3f4f6', width: j % 3 === 2 ? '66%' : '100%' }} />
                  ))}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3" style={{ background: 'rgba(0,0,0,0.6)' }}>
                    <Link href={`/dashboard/edit/${resume.id}`}>
                      <button className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all" style={{ background: 'rgba(255,255,255,0.1)' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(139,92,246,0.5)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                      >
                        <Edit size={16} />
                      </button>
                    </Link>
                    <button className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all" style={{ background: 'rgba(255,255,255,0.1)' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(59,130,246,0.5)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    >
                      <Eye size={16} />
                    </button>
                    <button className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all" style={{ background: 'rgba(255,255,255,0.1)' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,0.5)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                {/* Info */}
                <div className="p-4">
                  <p className="text-white font-medium text-sm truncate">{resume.title}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs" style={{ color: '#64748b' }}>{resume.template}</span>
                    <span className="text-xs flex items-center gap-1" style={{ color: '#475569' }}>
                      <Clock size={10} />{resume.updated}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
