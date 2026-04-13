'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Trash2, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react'

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  const d = Math.floor(h / 24)
  if (d < 30) return `${d}d ago`
  return new Date(dateStr).toLocaleDateString()
}

export default function AdminResumesPage() {
  const [resumes, setResumes] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [actionId, setActionId] = useState(null)
  const limit = 20

  async function loadResumes(p = 1) {
    setLoading(true)
    const res = await fetch(`/api/admin/resumes?page=${p}`)
    const d = await res.json()
    if (d.success) { setResumes(d.resumes); setTotal(d.total) }
    else setError(d.error)
    setLoading(false)
  }

  useEffect(() => { loadResumes(page) }, [page])

  async function deleteResume(r) {
    if (!confirm(`Delete resume "${r.title}"?`)) return
    setActionId(r.id)
    await fetch('/api/admin/resumes', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: r.id }),
    })
    await loadResumes(page)
    setActionId(null)
  }

  const filtered = resumes.filter(r =>
    r.title?.toLowerCase().includes(search.toLowerCase()) ||
    r.user_name?.toLowerCase().includes(search.toLowerCase()) ||
    r.template?.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(total / limit)

  return (
    <div style={{ padding: '40px 32px', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>

        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--text, #f1f5f9)', marginBottom: 4 }}>Resumes</h1>
          <p style={{ color: 'var(--text2, #94a3b8)', fontSize: '0.875rem' }}>{total} total resumes across all users</p>
        </div>

        <div style={{ position: 'relative', marginBottom: 24, maxWidth: 360 }}>
          <Search size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#475569' }} />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by title, user or template..."
            style={{
              width: '100%', padding: '9px 12px 9px 36px', borderRadius: 10,
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
              color: '#e2e8f0', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box',
            }}
          />
        </div>

        {error && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#f87171', marginBottom: 20 }}>
            <AlertCircle size={16} /> {error}
          </div>
        )}

        <div style={{ background: 'var(--card, #0f0f17)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
                  {['Title', 'User', 'Template', 'Status', 'Created', 'Actions'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '12px 16px', color: '#475569', fontWeight: 500, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={6} style={{ padding: 32, textAlign: 'center', color: '#475569' }}>Loading...</td></tr>
                ) : filtered.length === 0 ? (
                  <tr><td colSpan={6} style={{ padding: 32, textAlign: 'center', color: '#475569' }}>No resumes found</td></tr>
                ) : filtered.map((r) => (
                  <tr key={r.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', transition: 'background 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <td style={{ padding: '12px 16px', color: '#e2e8f0', fontWeight: 500, maxWidth: 220, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.title}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <div>
                        <p style={{ color: '#cbd5e1', fontSize: '0.82rem' }}>{r.user_name}</p>
                        <p style={{ color: '#475569', fontSize: '0.72rem' }}>{r.user_email}</p>
                      </div>
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ background: 'rgba(139,92,246,0.12)', color: '#a78bfa', padding: '2px 10px', borderRadius: 20, fontSize: '0.72rem', textTransform: 'capitalize' }}>{r.template}</span>
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ background: r.is_draft ? 'rgba(245,158,11,0.1)' : 'rgba(16,185,129,0.1)', color: r.is_draft ? '#fbbf24' : '#34d399', padding: '2px 10px', borderRadius: 20, fontSize: '0.72rem' }}>
                        {r.is_draft ? 'Draft' : 'Published'}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px', color: '#475569', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>{timeAgo(r.created_at)}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <button
                        onClick={() => deleteResume(r)}
                        disabled={actionId === r.id}
                        style={{ padding: '5px 10px', borderRadius: 8, border: '1px solid rgba(239,68,68,0.2)', background: 'transparent', color: '#f87171', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem' }}
                      >
                        <Trash2 size={13} /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ color: '#475569', fontSize: '0.8rem' }}>Page {page} of {totalPages}</span>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                  style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)', background: 'transparent', color: '#94a3b8', cursor: page === 1 ? 'not-allowed' : 'pointer', opacity: page === 1 ? 0.4 : 1 }}>
                  <ChevronLeft size={14} />
                </button>
                <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                  style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)', background: 'transparent', color: '#94a3b8', cursor: page === totalPages ? 'not-allowed' : 'pointer', opacity: page === totalPages ? 0.4 : 1 }}>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          )}
        </div>

      </motion.div>
    </div>
  )
}
