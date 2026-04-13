'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Trash2, Edit2, Eye, EyeOff, MousePointer, BarChart2, X, AlertCircle, Check, Monitor, Layout } from 'lucide-react'

const EMPTY = { title: '', description: '', image_url: '', link_url: '', link_text: 'Learn More', position: 'top', bg_color: '#0f0a1e', text_color: '#ffffff', accent_color: '#8b5cf6', is_active: true }

const POSITION_LABELS = { top: 'Top Banner', footer: 'Footer Banner', sidebar: 'Sidebar' }
const POSITION_COLORS = { top: '#8b5cf6', footer: '#3b82f6', sidebar: '#06b6d4' }

function AdPreview({ ad }) {
  if (!ad.title) return <div style={{ color: '#475569', fontSize: '0.8rem', textAlign: 'center', padding: 20 }}>Fill in details to preview</div>

  return (
    <div style={{
      background: `linear-gradient(135deg, ${ad.bg_color} 0%, ${ad.accent_color}18 100%)`,
      borderRadius: 10, padding: '12px 16px', border: `1px solid ${ad.accent_color}30`,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1, minWidth: 0 }}>
        <span style={{ fontSize: '0.55rem', fontWeight: 700, color: ad.accent_color, background: `${ad.accent_color}20`, border: `1px solid ${ad.accent_color}40`, padding: '2px 5px', borderRadius: 3, flexShrink: 0 }}>AD</span>
        {ad.image_url && <img src={ad.image_url} alt="" style={{ height: 24, width: 24, borderRadius: 4, objectFit: 'cover', flexShrink: 0 }} onError={e => e.target.style.display = 'none'} />}
        <div style={{ minWidth: 0 }}>
          <span style={{ color: ad.text_color, fontWeight: 600, fontSize: '0.8rem' }}>{ad.title}</span>
          {ad.description && <span style={{ color: `${ad.text_color}80`, fontSize: '0.7rem', marginLeft: 6 }}>{ad.description}</span>}
        </div>
      </div>
      {ad.link_url && (
        <span style={{ padding: '4px 10px', borderRadius: 6, background: ad.accent_color, color: '#fff', fontSize: '0.7rem', fontWeight: 600, flexShrink: 0 }}>{ad.link_text}</span>
      )}
    </div>
  )
}

export default function AdminAdsPage() {
  const [ads, setAds] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(EMPTY)
  const [editId, setEditId] = useState(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  async function loadAds() {
    setLoading(true)
    const r = await fetch('/api/admin/ads')
    const d = await r.json()
    if (d.success) setAds(d.ads)
    setLoading(false)
  }

  useEffect(() => { loadAds() }, [])

  function openCreate() { setForm(EMPTY); setEditId(null); setShowForm(true); setError('') }
  function openEdit(ad) {
    setForm({ ...ad, is_active: Boolean(ad.is_active) })
    setEditId(ad.id)
    setShowForm(true)
    setError('')
  }
  function closeForm() { setShowForm(false); setEditId(null); setForm(EMPTY) }

  async function handleSave() {
    if (!form.title.trim()) { setError('Title is required'); return }
    setSaving(true); setError('')
    try {
      const method = editId ? 'PUT' : 'POST'
      const body = editId ? { ...form, id: editId } : form
      const r = await fetch('/api/admin/ads', { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      const d = await r.json()
      if (d.success) {
        setSuccess(editId ? 'Ad updated!' : 'Ad created!')
        setTimeout(() => setSuccess(''), 2500)
        closeForm()
        loadAds()
      } else setError(d.error)
    } catch { setError('Something went wrong') }
    setSaving(false)
  }

  async function toggleActive(ad) {
    await fetch('/api/admin/ads', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...ad, is_active: !ad.is_active }) })
    loadAds()
  }

  async function deleteAd(id) {
    if (!confirm('Delete this ad?')) return
    await fetch('/api/admin/ads', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    loadAds()
  }

  const field = (label, key, type = 'text', placeholder = '') => (
    <div>
      <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.78rem', marginBottom: 5, fontWeight: 500 }}>{label}</label>
      <input type={type} value={form[key] || ''} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} placeholder={placeholder}
        style={{ width: '100%', padding: '9px 12px', borderRadius: 8, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#e2e8f0', fontSize: '0.85rem', outline: 'none', boxSizing: 'border-box' }}
        onFocus={e => e.target.style.borderColor = 'rgba(239,68,68,0.4)'}
        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
      />
    </div>
  )

  return (
    <div style={{ padding: '40px 32px', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f1f5f9', marginBottom: 4 }}>Advertisements</h1>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Manage banners shown to users on the dashboard</p>
          </div>
          <button onClick={openCreate} style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 10, border: 'none',
            background: 'linear-gradient(135deg, #ef4444, #f97316)', color: '#fff', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(239,68,68,0.3)',
          }}>
            <Plus size={16} /> New Ad
          </button>
        </div>

        {/* Success toast */}
        <AnimatePresence>
          {success && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#34d399', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 10, padding: '10px 16px', marginBottom: 20 }}>
              <Check size={15} /> {success}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
          {[
            { label: 'Total Ads', value: ads.length, color: '#8b5cf6', icon: Layout },
            { label: 'Active Ads', value: ads.filter(a => a.is_active).length, color: '#10b981', icon: Eye },
            { label: 'Total Clicks', value: ads.reduce((s, a) => s + (a.clicks || 0), 0), color: '#3b82f6', icon: MousePointer },
          ].map(({ label, value, color, icon: Icon }) => (
            <div key={label} style={{ background: '#0f0f17', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={17} color={color} />
              </div>
              <div>
                <p style={{ fontSize: '1.6rem', fontWeight: 900, color: '#f1f5f9', lineHeight: 1 }}>{value}</p>
                <p style={{ fontSize: '0.72rem', color: '#64748b', marginTop: 3 }}>{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ads list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {loading ? (
            <div style={{ color: '#475569', textAlign: 'center', padding: 40 }}>Loading...</div>
          ) : ads.length === 0 ? (
            <div style={{ color: '#475569', textAlign: 'center', padding: 60, background: '#0f0f17', borderRadius: 16, border: '1px dashed rgba(255,255,255,0.08)' }}>
              No ads yet. Create your first ad.
            </div>
          ) : ads.map((ad) => (
            <motion.div key={ad.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              style={{ background: '#0f0f17', border: `1px solid ${ad.is_active ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)'}`, borderRadius: 16, padding: 20, opacity: ad.is_active ? 1 : 0.6 }}>

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1, minWidth: 0 }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: POSITION_COLORS[ad.position], background: `${POSITION_COLORS[ad.position]}18`, border: `1px solid ${POSITION_COLORS[ad.position]}30`, padding: '3px 10px', borderRadius: 20, flexShrink: 0 }}>
                    {POSITION_LABELS[ad.position]}
                  </span>
                  <h3 style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.95rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ad.title}</h3>
                  {!ad.is_active && <span style={{ fontSize: '0.68rem', color: '#64748b', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: 20, flexShrink: 0 }}>Paused</span>}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                  <button onClick={() => toggleActive(ad)} title={ad.is_active ? 'Pause' : 'Activate'}
                    style={{ padding: '6px 10px', borderRadius: 8, border: `1px solid ${ad.is_active ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.1)'}`, background: 'transparent', color: ad.is_active ? '#34d399' : '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem' }}>
                    {ad.is_active ? <Eye size={13} /> : <EyeOff size={13} />}
                    {ad.is_active ? 'Active' : 'Paused'}
                  </button>
                  <button onClick={() => openEdit(ad)}
                    style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem' }}>
                    <Edit2 size={13} /> Edit
                  </button>
                  <button onClick={() => deleteAd(ad.id)}
                    style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid rgba(239,68,68,0.2)', background: 'transparent', color: '#f87171', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem' }}>
                    <Trash2 size={13} /> Delete
                  </button>
                </div>
              </div>

              {/* Preview */}
              <AdPreview ad={ad} />

              {/* Stats */}
              <div style={{ display: 'flex', gap: 20, marginTop: 12 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#475569', fontSize: '0.75rem' }}>
                  <MousePointer size={12} /> {ad.clicks || 0} clicks
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#475569', fontSize: '0.75rem' }}>
                  <BarChart2 size={12} /> {ad.impressions || 0} impressions
                </span>
                {ad.clicks > 0 && ad.impressions > 0 && (
                  <span style={{ color: '#475569', fontSize: '0.75rem' }}>
                    CTR: {((ad.clicks / ad.impressions) * 100).toFixed(1)}%
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
            onClick={e => { if (e.target === e.currentTarget) closeForm() }}>
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
              style={{ background: '#0d0d16', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 20, padding: 28, width: '100%', maxWidth: 580, maxHeight: '90vh', overflowY: 'auto' }}>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                <h2 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.1rem' }}>{editId ? 'Edit Ad' : 'Create New Ad'}</h2>
                <button onClick={closeForm} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#475569', padding: 4 }}><X size={18} /></button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {field('Title *', 'title', 'text', 'e.g. Upgrade to Pro')}
                {field('Description', 'description', 'text', 'Short tagline shown next to title')}
                {field('Image URL', 'image_url', 'url', 'https://... (optional logo/icon)')}
                {field('Link URL', 'link_url', 'url', 'https://...')}
                {field('Button Text', 'link_text', 'text', 'Learn More')}

                {/* Position */}
                <div>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.78rem', marginBottom: 8, fontWeight: 500 }}>Position</label>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {Object.entries(POSITION_LABELS).map(([val, label]) => (
                      <button key={val} onClick={() => setForm(f => ({ ...f, position: val }))}
                        style={{ flex: 1, padding: '8px', borderRadius: 8, border: `1px solid ${form.position === val ? POSITION_COLORS[val] : 'rgba(255,255,255,0.08)'}`, background: form.position === val ? `${POSITION_COLORS[val]}18` : 'transparent', color: form.position === val ? POSITION_COLORS[val] : '#64748b', fontSize: '0.78rem', fontWeight: form.position === val ? 600 : 400, cursor: 'pointer' }}>
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                  {[['bg_color', 'Background'], ['text_color', 'Text Color'], ['accent_color', 'Accent Color']].map(([key, label]) => (
                    <div key={key}>
                      <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.78rem', marginBottom: 5, fontWeight: 500 }}>{label}</label>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px', borderRadius: 8, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <input type="color" value={form[key] || '#000000'} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                          style={{ width: 24, height: 24, borderRadius: 4, border: 'none', cursor: 'pointer', background: 'none', padding: 0 }} />
                        <span style={{ color: '#94a3b8', fontSize: '0.75rem', fontFamily: 'monospace' }}>{form[key]}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Active toggle */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Active (show to users)</span>
                  <button onClick={() => setForm(f => ({ ...f, is_active: !f.is_active }))}
                    style={{ width: 42, height: 24, borderRadius: 12, border: 'none', background: form.is_active ? '#10b981' : 'rgba(255,255,255,0.1)', cursor: 'pointer', position: 'relative', transition: 'background 0.2s' }}>
                    <div style={{ position: 'absolute', top: 3, left: form.is_active ? 21 : 3, width: 18, height: 18, borderRadius: '50%', background: '#fff', transition: 'left 0.2s' }} />
                  </button>
                </div>

                {/* Live Preview */}
                <div>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.78rem', marginBottom: 8, fontWeight: 500 }}>Live Preview</label>
                  <AdPreview ad={form} />
                </div>

                {error && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#f87171', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 8, padding: '10px 12px', fontSize: '0.82rem' }}>
                    <AlertCircle size={14} /> {error}
                  </div>
                )}

                <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                  <button onClick={closeForm} style={{ flex: 1, padding: '10px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: '#94a3b8', cursor: 'pointer', fontSize: '0.875rem' }}>Cancel</button>
                  <button onClick={handleSave} disabled={saving}
                    style={{ flex: 2, padding: '10px', borderRadius: 10, border: 'none', background: saving ? 'rgba(239,68,68,0.4)' : 'linear-gradient(135deg, #ef4444, #f97316)', color: '#fff', fontWeight: 700, cursor: saving ? 'not-allowed' : 'pointer', fontSize: '0.875rem' }}>
                    {saving ? 'Saving...' : editId ? 'Update Ad' : 'Create Ad'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
