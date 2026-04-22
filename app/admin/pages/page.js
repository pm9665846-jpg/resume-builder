'use client'
import { useState, useEffect } from 'react'
import { Save, FileText, CheckCircle, AlertCircle } from 'lucide-react'

const PAGE_SLUGS = [
  { slug: 'privacy-policy', label: 'Privacy Policy',      icon: '🔒' },
  { slug: 'about',          label: 'About Us',            icon: '🏢' },
  { slug: 'terms',          label: 'Terms & Conditions',  icon: '📋' },
]

export default function AdminPagesPage() {
  const [activePage, setActivePage] = useState('privacy-policy')
  const [pages, setPages] = useState({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error'

  useEffect(() => {
    async function load() {
      setLoading(true)
      const results = {}
      for (const p of PAGE_SLUGS) {
        try {
          const res = await fetch(`/api/pages/${p.slug}`)
          const data = await res.json()
          if (data.success) results[p.slug] = { title: data.page.title, content: data.page.content }
          else results[p.slug] = { title: p.label, content: '' }
        } catch {
          results[p.slug] = { title: p.label, content: '' }
        }
      }
      setPages(results)
      setLoading(false)
    }
    load()
  }, [])

  async function handleSave() {
    setSaving(true)
    setStatus(null)
    try {
      const current = pages[activePage]
      const res = await fetch('/api/admin/pages', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: activePage, title: current.title, content: current.content }),
      })
      const data = await res.json()
      if (data.success) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    } finally {
      setSaving(false)
      setTimeout(() => setStatus(null), 3000)
    }
  }

  function updateField(field, value) {
    setPages(prev => ({ ...prev, [activePage]: { ...prev[activePage], [field]: value } }))
  }

  const current = pages[activePage] || { title: '', content: '' }

  return (
    <div style={{ padding: '32px 28px', maxWidth: 900, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f1f5f9', marginBottom: 4 }}>Page Content</h1>
          <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Edit Privacy Policy and About Us pages</p>
        </div>
        <button onClick={handleSave} disabled={saving}
          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 22px', borderRadius: 10, background: 'linear-gradient(135deg, #ef4444, #f97316)', border: 'none', color: 'white', fontWeight: 600, fontSize: '0.875rem', cursor: saving ? 'not-allowed' : 'pointer', opacity: saving ? 0.7 : 1 }}
        >
          {saving ? <span style={{ width: 14, height: 14, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} /> : <Save size={15} />}
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      {/* Status */}
      {status && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', borderRadius: 10, marginBottom: 20, background: status === 'success' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', border: `1px solid ${status === 'success' ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`, color: status === 'success' ? '#34d399' : '#f87171' }}>
          {status === 'success' ? <CheckCircle size={15} /> : <AlertCircle size={15} />}
          {status === 'success' ? 'Page saved successfully!' : 'Failed to save. Try again.'}
        </div>
      )}

      {/* Page tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        {PAGE_SLUGS.map(p => (
          <button key={p.slug} onClick={() => setActivePage(p.slug)}
            style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 18px', borderRadius: 10, border: 'none', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600, transition: 'all 0.15s', background: activePage === p.slug ? 'rgba(239,68,68,0.15)' : 'rgba(255,255,255,0.04)', color: activePage === p.slug ? '#f87171' : '#64748b', outline: activePage === p.slug ? '1px solid rgba(239,68,68,0.3)' : 'none' }}
          >
            {p.icon} {p.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div style={{ color: '#64748b', padding: 40, textAlign: 'center' }}>Loading...</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Title */}
          <div>
            <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Page Title</label>
            <input
              value={current.title}
              onChange={e => updateField('title', e.target.value)}
              style={{ width: '100%', padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#f1f5f9', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
              onFocus={e => e.target.style.borderColor = 'rgba(239,68,68,0.4)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
          </div>

          {/* Content */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <label style={{ fontSize: '0.72rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Content (Markdown supported)</label>
              <a href={`/${activePage}`} target="_blank" rel="noreferrer"
                style={{ fontSize: '0.72rem', color: '#f87171', textDecoration: 'none' }}>
                View Page →
              </a>
            </div>
            <textarea
              value={current.content}
              onChange={e => updateField('content', e.target.value)}
              rows={22}
              style={{ width: '100%', padding: '14px', borderRadius: 10, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#e2e8f0', fontSize: '0.875rem', lineHeight: 1.7, resize: 'vertical', outline: 'none', fontFamily: "'Courier New', monospace", boxSizing: 'border-box' }}
              onFocus={e => e.target.style.borderColor = 'rgba(239,68,68,0.4)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
          </div>

          {/* Preview hint */}
          <div style={{ padding: '12px 16px', borderRadius: 10, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <p style={{ fontSize: '0.78rem', color: '#475569', margin: 0 }}>
              💡 Use <code style={{ color: '#94a3b8' }}>## Heading</code> for sections, <code style={{ color: '#94a3b8' }}>**bold**</code> for bold text, and blank lines for paragraphs.
              Changes are live immediately after saving.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
