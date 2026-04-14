'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { Plus, Edit, Trash2, Clock, Search, FileText, AlertTriangle, RefreshCw, Eye, Download } from 'lucide-react'
import { templateMap } from '@/components/builder/ResumePreview'
import { exportToPDF } from '@/lib/exportResume'

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
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}>
      <motion.div initial={{ opacity: 0, scale: 0.92, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
        style={{ background: '#0f0f17', border: '1px solid rgba(248,113,113,0.2)', borderRadius: 18, padding: '28px', maxWidth: 380, width: '90%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(248,113,113,0.12)', border: '1px solid rgba(248,113,113,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <AlertTriangle size={20} color="#f87171" />
          </div>
          <div>
            <p style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1rem', marginBottom: 2 }}>Delete Resume?</p>
            <p style={{ color: '#64748b', fontSize: '0.78rem' }}>This cannot be undone</p>
          </div>
        </div>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 22, padding: '10px 14px', background: 'rgba(255,255,255,0.04)', borderRadius: 8 }}>
          <span style={{ color: '#f1f5f9', fontWeight: 600 }}>&ldquo;{resume?.title}&rdquo;</span> will be permanently deleted.
        </p>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={onCancel} style={{ flex: 1, padding: '10px 0', borderRadius: 10, border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: '#94a3b8', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600 }}>
            Cancel
          </button>
          <button onClick={onConfirm} disabled={loading} style={{ flex: 1, padding: '10px 0', borderRadius: 10, border: 'none', background: loading ? '#7f1d1d' : 'linear-gradient(135deg, #dc2626, #b91c1c)', color: 'white', fontSize: '0.85rem', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 700 }}>
            {loading ? 'Deleting...' : 'Yes, Delete'}
          </button>
        </div>
      </motion.div>
    </div>
  )
}

// Mini preview using actual template rendered at small scale
function ResumeThumb({ resume }) {
  const Template = templateMap[resume.template] || templateMap['modern']
  const resumeData = {
    ...(resume.data || {}),
    template:   resume.template,
    themeColor: resume.themeColor || resume.theme_color || '#8b5cf6',
    fontFamily: resume.fontFamily || 'Arial, Helvetica, sans-serif',
  }

  return (
    <div style={{ width: '100%', aspectRatio: '210/297', overflow: 'hidden', background: 'white', position: 'relative' }}>
      {/* Scale down A4 (794px) to fit card width */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: 794, height: 1123,
        transformOrigin: 'top left',
        transform: `scale(${1 / (794 / 100)}%)`, // will be overridden by inline calc
      }}>
        <div id={`thumb-${resume.id}`} style={{ width: 794, minHeight: 1123, background: 'white', fontFamily: 'Arial, sans-serif' }}>
          <Template resume={resumeData} />
        </div>
      </div>
    </div>
  )
}

function ScaledThumb({ resume }) {
  // We render the template at 794px wide then scale it down to fit the card
  const CARD_WIDTH = 260 // approximate card width in px
  const scale = CARD_WIDTH / 794

  const Template = templateMap[resume.template] || templateMap['modern']
  const resumeData = {
    ...(resume.data || {}),
    template:   resume.template,
    themeColor: resume.themeColor || resume.theme_color || '#8b5cf6',
    fontFamily: resume.fontFamily || 'Arial, Helvetica, sans-serif',
  }

  return (
    <div style={{ width: '100%', aspectRatio: '210/297', overflow: 'hidden', background: 'white', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: 794,
        transformOrigin: 'top left',
        transform: `scale(${scale})`,
        pointerEvents: 'none',
      }}>
        <div style={{ width: 794, minHeight: 1123, background: 'white' }}>
          <Template resume={resumeData} />
        </div>
      </div>
    </div>
  )
}

function ResumeCard({ resume, onDelete, index }) {
  const color = resume.themeColor || resume.theme_color || '#8b5cf6'
  const [exporting, setExporting] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      style={{
        background: '#0f0f17',
        border: `1px solid rgba(255,255,255,0.07)`,
        borderRadius: 16, overflow: 'hidden',
        transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
        position: 'relative',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}50`; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 8px 32px ${color}18` }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
    >
      {/* Thumbnail — actual template preview */}
      <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }} className="group">
        <ScaledThumb resume={resume} />

        {/* Hover overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(5,5,8,0.88)',
          backdropFilter: 'blur(2px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10,
          opacity: 0, transition: 'opacity 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = 1}
          onMouseLeave={e => e.currentTarget.style.opacity = 0}
        >
          <Link href={`/dashboard/edit/${resume.id}`} style={{ width: '72%', textDecoration: 'none' }}>
            <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '11px 0', borderRadius: 11, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', border: 'none', color: 'white', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 14px rgba(139,92,246,0.35)' }}>
              <Edit size={14} /> Edit Resume
            </button>
          </Link>
          <button onClick={() => onDelete(resume)} style={{ width: '72%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '11px 0', borderRadius: 11, background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', color: '#f87171', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer' }}>
            <Trash2 size={14} /> Delete
          </button>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '12px 14px', borderTop: `1px solid rgba(255,255,255,0.05)` }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.85rem', marginBottom: 3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {resume.title}
            </p>
            {resume.jobTitle && (
              <p style={{ color: '#64748b', fontSize: '0.72rem', marginBottom: 3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{resume.jobTitle}</p>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />
              <span style={{ fontSize: '0.68rem', color: '#475569', textTransform: 'capitalize' }}>{resume.template}</span>
              {resume.isDraft && <span style={{ fontSize: '0.62rem', color: '#f59e0b', background: 'rgba(245,158,11,0.1)', padding: '1px 6px', borderRadius: 10 }}>Draft</span>}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
            <Clock size={10} color="#475569" />
            <span style={{ fontSize: '0.65rem', color: '#475569' }}>{timeAgo(resume.updatedAt || resume.updated_at)}</span>
          </div>
        </div>

        {/* Quick actions */}
        <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
          <Link href={`/dashboard/edit/${resume.id}`} style={{ flex: 1, textDecoration: 'none' }}>
            <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, padding: '7px 0', borderRadius: 8, background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.2)', color: '#a78bfa', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>
              <Edit size={12} /> Edit
            </button>
          </Link>
          <button onClick={() => onDelete(resume)} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, padding: '7px 0', borderRadius: 8, background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.15)', color: '#f87171', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>
            <Trash2 size={12} /> Delete
          </button>
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
      if (!res.ok) { setError(data.error || 'Failed to load resumes'); return }
      // For each resume, fetch full data so we can render the template preview
      const full = await Promise.all(
        (data.resumes || []).map(async (r) => {
          try {
            const dr = await fetch(`/api/resumes/${r.id}`)
            const dj = await dr.json()
            return { ...r, data: dj.resume?.data || {}, themeColor: dj.resume?.themeColor || r.themeColor, fontFamily: dj.resume?.fontFamily }
          } catch { return r }
        })
      )
      setResumes(full)
    } catch { setError('Network error. Please try again.') }
    finally { setLoading(false) }
  }, [])

  useEffect(() => { fetchResumes() }, [fetchResumes])

  async function handleDelete() {
    if (!deleteTarget) return
    setDeleteLoading(true)
    try {
      const res = await fetch(`/api/resumes/${deleteTarget.id}`, { method: 'DELETE' })
      if (res.ok) { setResumes(prev => prev.filter(r => r.id !== deleteTarget.id)); setDeleteTarget(null) }
    } catch (e) { console.error('Delete failed:', e) }
    finally { setDeleteLoading(false) }
  }

  const filtered = resumes.filter(r => r.title?.toLowerCase().includes(search.toLowerCase()))

  return (
    <div style={{ padding: '40px 32px', maxWidth: 1200, margin: '0 auto', minHeight: '100vh' }}>
      {deleteTarget && <DeleteModal resume={deleteTarget} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} loading={deleteLoading} />}

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 900, color: 'var(--text, #f1f5f9)', marginBottom: 4 }}>My Resumes</h1>
            <p style={{ color: 'var(--text2, #94a3b8)', fontSize: '0.875rem' }}>
              {loading ? 'Loading...' : `${filtered.length} resume${filtered.length !== 1 ? 's' : ''} saved`}
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            {!loading && (
              <button onClick={fetchResumes} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '8px 12px', borderRadius: 9, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#64748b', fontSize: '0.75rem', cursor: 'pointer' }} title="Refresh">
                <RefreshCw size={13} />
              </button>
            )}
            <Link href="/dashboard/create" style={{ textDecoration: 'none' }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 12, border: 'none', background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: 'white', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}>
                <Plus size={16} /> New Resume
              </button>
            </Link>
          </div>
        </div>

        {/* Search */}
        <div style={{ position: 'relative', marginBottom: 28, maxWidth: 360 }}>
          <Search size={15} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: '#475569', pointerEvents: 'none' }} />
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search resumes..."
            style={{ width: '100%', padding: '10px 12px 10px 38px', borderRadius: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#e2e8f0', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box' }}
            onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.4)'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
          />
        </div>

        {error && (
          <div style={{ padding: '12px 16px', borderRadius: 10, background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', color: '#f87171', fontSize: '0.85rem', marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{error}</span>
            <button onClick={fetchResumes} style={{ color: '#f87171', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem', textDecoration: 'underline' }}>Retry</button>
          </div>
        )}

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>

          {/* New resume card */}
          <Link href="/dashboard/create" style={{ textDecoration: 'none' }}>
            <motion.div whileHover={{ scale: 1.02 }} style={{
              background: '#0f0f17', border: '2px dashed rgba(139,92,246,0.25)', borderRadius: 16,
              aspectRatio: '210/297', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, cursor: 'pointer', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.6)'; e.currentTarget.style.background = 'rgba(139,92,246,0.04)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.25)'; e.currentTarget.style.background = '#0f0f17' }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Plus size={22} color="#a78bfa" />
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: '#94a3b8', fontWeight: 600, fontSize: '0.85rem', marginBottom: 3 }}>Create New</p>
                <p style={{ color: '#475569', fontSize: '0.72rem' }}>Start from scratch</p>
              </div>
            </motion.div>
          </Link>

          {/* Loading skeletons */}
          {loading && [...Array(3)].map((_, i) => (
            <div key={i} style={{ background: '#0f0f17', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, aspectRatio: '210/297', animation: 'pulse 1.5s ease-in-out infinite' }} />
          ))}

          {/* Resume cards */}
          <AnimatePresence>
            {!loading && filtered.map((resume, i) => (
              <ResumeCard key={resume.id} resume={resume} index={i} onDelete={setDeleteTarget} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {!loading && !error && resumes.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <FileText size={28} color="#a78bfa" />
            </div>
            <p style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>No resumes yet</p>
            <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: 24 }}>Create your first resume to see it here</p>
            <Link href="/dashboard/create" style={{ textDecoration: 'none' }}>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 24px', borderRadius: 12, border: 'none', background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: 'white', fontWeight: 600, cursor: 'pointer' }}>
                <Plus size={14} /> Create Your First Resume
              </button>
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
  )
}
