'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { Plus, Edit, Trash2, Clock, Search, FileText, AlertTriangle, RefreshCw } from 'lucide-react'
import Button from '@/components/ui/Button'
import FloatingBackground from '@/components/ui/FloatingBackground'

function timeAgo(dateStr) {
  if (!dateStr) return ''
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'Just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  if (days < 7) return `${days}d ago`
  return new Date(dateStr).toLocaleDateString('en-IN')
}

function DeleteModal({ resume, onConfirm, onCancel, loading }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--modal-bg)', backdropFilter: 'blur(6px)' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        style={{ background: 'var(--delete-modal)', border: '1px solid var(--delete-border)', borderRadius: 18, padding: '28px 28px 24px', maxWidth: 380, width: '90%', boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(248,113,113,0.12)', border: '1px solid rgba(248,113,113,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <AlertTriangle size={20} color="#f87171" />
          </div>
          <div>
            <p style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1rem', marginBottom: 2 }}>Delete Resume?</p>
            <p style={{ color: 'var(--text3)', fontSize: '0.78rem' }}>This cannot be undone</p>
          </div>
        </div>
        <p style={{ color: 'var(--text2)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 22, padding: '10px 14px', background: 'var(--card)', borderRadius: 8 }}>
          <span style={{ color: 'var(--text)', fontWeight: 600 }}>&ldquo;{resume?.title}&rdquo;</span> will be permanently deleted from your account.
        </p>
        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={onCancel}
            style={{ flex: 1, padding: '10px 0', borderRadius: 10, border: '1px solid var(--border)', background: 'transparent', color: 'var(--text2)', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600, transition: 'all 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--hover-bg)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            style={{ flex: 1, padding: '10px 0', borderRadius: 10, border: 'none', background: loading ? '#7f1d1d' : 'linear-gradient(135deg, #dc2626, #b91c1c)', color: 'white', fontSize: '0.85rem', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 700, transition: 'all 0.2s' }}
          >
            {loading ? 'Deleting...' : 'Yes, Delete'}
          </button>
        </div>
      </motion.div>
    </div>
  )
}

function ResumeCard({ resume, onDelete, index }) {
  const color = resume.theme_color || '#8b5cf6'
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="rounded-2xl overflow-hidden group"
      style={{ background: 'var(--card)', border: '1px solid var(--border)', transition: 'border-color 0.2s, transform 0.2s' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}40`; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {/* Thumbnail */}
      <div style={{ background: 'white', aspectRatio: '3/4', padding: '14px 12px', position: 'relative', overflow: 'hidden' }}>
        {/* Mini resume lines */}
        <div style={{ height: 10, borderRadius: 3, marginBottom: 5, background: color, width: '55%' }} />
        <div style={{ height: 1, marginBottom: 7, background: `${color}25` }} />
        {[100, 75, 100, 60, 100, 80, 100, 65, 100, 70, 100, 55, 100, 80].map((w, j) => (
          <div key={j} style={{ height: j % 6 === 0 ? 5 : 3, borderRadius: 2, marginBottom: 4, background: j % 6 === 0 ? '#e5e7eb' : '#f3f4f6', width: `${w}%` }} />
        ))}
        <div style={{ height: 7, borderRadius: 3, marginTop: 8, marginBottom: 5, background: `${color}18`, width: '38%' }} />
        {[100, 70, 100, 80].map((w, j) => (
          <div key={j} style={{ height: 3, borderRadius: 2, marginBottom: 4, background: '#f3f4f6', width: `${w}%` }} />
        ))}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-200"
          style={{ background: 'rgba(5,5,8,0.9)', backdropFilter: 'blur(4px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}
        >
          <Link href={`/dashboard/edit/${resume.id}`} style={{ width: '72%' }}>
            <button
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '11px 0', borderRadius: 11, background: `linear-gradient(135deg, #8b5cf6, #3b82f6)`, border: 'none', color: 'white', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 14px rgba(139,92,246,0.35)' }}
            >
              <Edit size={14} /> Edit Resume
            </button>
          </Link>
          <button
            onClick={() => onDelete(resume)}
            style={{ width: '72%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '11px 0', borderRadius: 11, background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', color: '#f87171', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer' }}
          >
            <Trash2 size={14} /> Delete
          </button>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.85rem', marginBottom: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {resume.title}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />
            <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'capitalize' }}>{resume.template}</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
          <Clock size={10} color="#475569" />
          <span style={{ fontSize: '0.68rem', color: '#475569' }}>{timeAgo(resume.updated_at)}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function ResumesPage() {
  const [resumes, setResumes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [deleteLoading, setDeleteLoading] = useState(false)

  const fetchResumes = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/resumes')
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || `Error ${res.status}: Failed to load resumes`)
        return
      }
      setResumes(data.resumes || [])
    } catch (e) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchResumes() }, [fetchResumes])

  async function handleDelete() {
    if (!deleteTarget) return
    setDeleteLoading(true)
    try {
      const res = await fetch(`/api/resumes/${deleteTarget.id}`, { method: 'DELETE' })
      if (res.ok) {
        setResumes(prev => prev.filter(r => r.id !== deleteTarget.id))
        setDeleteTarget(null)
      }
    } catch (e) {
      console.error('Delete failed:', e)
    } finally {
      setDeleteLoading(false)
    }
  }

  const filtered = resumes.filter(r =>
    r.title?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="relative min-h-screen p-8" style={{ background: 'var(--dash-bg)' }}>
      <FloatingBackground />
      {deleteTarget && (
        <DeleteModal
          resume={deleteTarget}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
          loading={deleteLoading}
        />
      )}

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-black mb-1" style={{ color: 'var(--text)' }}>My Resumes</h1>
              <p style={{ color: 'var(--text2)' }}>
                {loading ? 'Loading...' : `${filtered.length} resume${filtered.length !== 1 ? 's' : ''} saved`}
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              {!loading && (
                <button
                  onClick={fetchResumes}
                  style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '8px 12px', borderRadius: 9, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#64748b', fontSize: '0.75rem', cursor: 'pointer' }}
                  title="Refresh"
                >
                  <RefreshCw size={13} />
                </button>
              )}
              <Link href="/dashboard/create">
                <Button icon={<Plus size={16} />}>New Resume</Button>
              </Link>
            </div>
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

          {/* Error state */}
          {error && (
            <div style={{ padding: '14px 18px', borderRadius: 12, background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', color: '#f87171', fontSize: '0.85rem', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>{error}</span>
              <button onClick={fetchResumes} style={{ color: '#f87171', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem', textDecoration: 'underline' }}>Retry</button>
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {/* New resume card */}
            <Link href="/dashboard/create">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl border-2 border-dashed cursor-pointer flex flex-col items-center justify-center gap-3"
                style={{ borderColor: 'var(--border)', background: 'var(--card)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.5)'; e.currentTarget.style.background = 'rgba(139,92,246,0.04)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--card)' }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.25)' }}>
                  <Plus size={24} style={{ color: '#a78bfa' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text2)', marginBottom: 2 }}>Create New Resume</p>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text3)' }}>Start from scratch</p>
                </div>
              </motion.div>
            </Link>

            {/* Loading skeletons */}
            {loading && [...Array(3)].map((_, i) => (
              <div
                key={i}
                className="rounded-2xl"
                style={{ background: 'var(--card)', border: '1px solid var(--border3)', aspectRatio: '3/4', animation: 'pulse 1.5s ease-in-out infinite' }}
              />
            ))}

            {/* Real resume cards */}
            <AnimatePresence>
              {!loading && filtered.map((resume, i) => (
                <ResumeCard
                  key={resume.id}
                  resume={resume}
                  index={i}
                  onDelete={setDeleteTarget}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Empty states */}
          {!loading && !error && resumes.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: 'center', padding: '80px 0' }}
            >
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <FileText size={28} color="#a78bfa" />
              </div>
              <p style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>No resumes yet</p>
              <p style={{ color: 'var(--text3)', fontSize: '0.85rem', marginBottom: 24 }}>Create your first resume and save it to see it here</p>
              <Link href="/dashboard/create">
                <Button icon={<Plus size={14} />}>Create Your First Resume</Button>
              </Link>
            </motion.div>
          )}

          {!loading && !error && resumes.length > 0 && filtered.length === 0 && search && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#475569' }}>
              <Search size={36} style={{ margin: '0 auto 12px', opacity: 0.3 }} />
              <p>No resumes match &ldquo;{search}&rdquo;</p>
            </div>
          )}

        </motion.div>
      </div>
    </div>
  )
}
