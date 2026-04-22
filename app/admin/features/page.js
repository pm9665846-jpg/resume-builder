'use client'
import { useState, useEffect } from 'react'
import { Plus, Save, Trash2, CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react'

const ICON_OPTIONS = ['Wand2','Layout','Download','Eye','Palette','Shield','Zap','Globe','Star','Code','Lock','Heart','Award','Briefcase','FileText','Settings','Users','CheckCircle']
const COLOR_OPTIONS = ['#8b5cf6','#3b82f6','#06b6d4','#ec4899','#f59e0b','#10b981','#f97316','#ef4444','#14b8a6','#6366f1']

const emptyFeature = { icon: 'Zap', title: '', description: '', color: '#8b5cf6', sort_order: 0, is_active: 1 }

export default function AdminFeaturesPage() {
  const [features, setFeatures] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(null)
  const [status, setStatus] = useState(null)
  const [showAdd, setShowAdd] = useState(false)
  const [newFeature, setNewFeature] = useState({ ...emptyFeature })

  useEffect(() => { loadFeatures() }, [])

  async function loadFeatures() {
    setLoading(true)
    const res = await fetch('/api/admin/features')
    const data = await res.json()
    if (data.success) setFeatures(data.features)
    setLoading(false)
  }

  async function handleUpdate(feature) {
    setSaving(feature.id)
    const res = await fetch('/api/admin/features', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feature),
    })
    const data = await res.json()
    setSaving(null)
    if (data.success) { setStatus({ id: feature.id, type: 'success' }); setTimeout(() => setStatus(null), 2000) }
    else setStatus({ id: feature.id, type: 'error' })
  }

  async function handleDelete(id) {
    if (!confirm('Delete this feature?')) return
    await fetch('/api/admin/features', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    setFeatures(prev => prev.filter(f => f.id !== id))
  }

  async function handleAdd() {
    if (!newFeature.title || !newFeature.description) return
    const res = await fetch('/api/admin/features', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeature),
    })
    const data = await res.json()
    if (data.success) { setNewFeature({ ...emptyFeature }); setShowAdd(false); loadFeatures() }
  }

  function updateFeature(id, field, value) {
    setFeatures(prev => prev.map(f => f.id === id ? { ...f, [field]: value } : f))
  }

  const inputStyle = { width: '100%', padding: '8px 12px', borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#f1f5f9', fontSize: '0.85rem', outline: 'none', boxSizing: 'border-box' }

  return (
    <div style={{ padding: '32px 28px', maxWidth: 1000, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f1f5f9', marginBottom: 4 }}>Features</h1>
          <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Manage landing page feature cards</p>
        </div>
        <button onClick={() => setShowAdd(s => !s)}
          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 10, background: 'linear-gradient(135deg, #ef4444, #f97316)', border: 'none', color: 'white', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}
        >
          <Plus size={15} /> Add Feature
        </button>
      </div>

      {/* Add form */}
      {showAdd && (
        <div style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 14, padding: 20, marginBottom: 24 }}>
          <p style={{ color: '#f87171', fontWeight: 700, fontSize: '0.875rem', marginBottom: 16 }}>New Feature</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
            <div>
              <label style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 6 }}>Title</label>
              <input value={newFeature.title} onChange={e => setNewFeature(p => ({ ...p, title: e.target.value }))} placeholder="Feature title" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 6 }}>Icon</label>
              <select value={newFeature.icon} onChange={e => setNewFeature(p => ({ ...p, icon: e.target.value }))} style={{ ...inputStyle, cursor: 'pointer' }}>
                {ICON_OPTIONS.map(ic => <option key={ic} value={ic}>{ic}</option>)}
              </select>
            </div>
          </div>
          <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 6 }}>Description</label>
            <textarea value={newFeature.description} onChange={e => setNewFeature(p => ({ ...p, description: e.target.value }))} placeholder="Feature description" rows={2} style={{ ...inputStyle, resize: 'vertical' }} />
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
            <div>
              <label style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 6 }}>Color</label>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {COLOR_OPTIONS.map(c => (
                  <button key={c} onClick={() => setNewFeature(p => ({ ...p, color: c }))}
                    style={{ width: 24, height: 24, borderRadius: '50%', background: c, border: newFeature.color === c ? '2px solid white' : '2px solid transparent', cursor: 'pointer' }} />
                ))}
              </div>
            </div>
            <div>
              <label style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 6 }}>Order</label>
              <input type="number" value={newFeature.sort_order} onChange={e => setNewFeature(p => ({ ...p, sort_order: Number(e.target.value) }))} style={{ ...inputStyle, width: 80 }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={handleAdd} style={{ padding: '8px 20px', borderRadius: 8, background: 'linear-gradient(135deg, #ef4444, #f97316)', border: 'none', color: 'white', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}>Add</button>
            <button onClick={() => setShowAdd(false)} style={{ padding: '8px 16px', borderRadius: 8, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', fontSize: '0.85rem', cursor: 'pointer' }}>Cancel</button>
          </div>
        </div>
      )}

      {/* Features list */}
      {loading ? (
        <div style={{ color: '#64748b', textAlign: 'center', padding: 40 }}>Loading...</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {features.map(f => (
            <div key={f.id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '16px 20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 5 }}>Title</label>
                  <input value={f.title} onChange={e => updateFeature(f.id, 'title', e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 5 }}>Icon</label>
                  <select value={f.icon} onChange={e => updateFeature(f.id, 'icon', e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
                    {ICON_OPTIONS.map(ic => <option key={ic} value={ic}>{ic}</option>)}
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 5 }}>Description</label>
                <textarea value={f.description} onChange={e => updateFeature(f.id, 'description', e.target.value)} rows={2} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                {/* Color */}
                <div style={{ display: 'flex', gap: 5 }}>
                  {COLOR_OPTIONS.map(c => (
                    <button key={c} onClick={() => updateFeature(f.id, 'color', c)}
                      style={{ width: 20, height: 20, borderRadius: '50%', background: c, border: f.color === c ? '2px solid white' : '2px solid transparent', cursor: 'pointer' }} />
                  ))}
                </div>
                {/* Order */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <label style={{ fontSize: '0.65rem', color: '#64748b' }}>Order:</label>
                  <input type="number" value={f.sort_order} onChange={e => updateFeature(f.id, 'sort_order', Number(e.target.value))} style={{ ...inputStyle, width: 60 }} />
                </div>
                {/* Active toggle */}
                <button onClick={() => updateFeature(f.id, 'is_active', f.is_active ? 0 : 1)}
                  style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 12px', borderRadius: 8, background: f.is_active ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.04)', border: `1px solid ${f.is_active ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.08)'}`, color: f.is_active ? '#34d399' : '#64748b', fontSize: '0.75rem', cursor: 'pointer' }}>
                  {f.is_active ? <><Eye size={12} /> Active</> : <><EyeOff size={12} /> Hidden</>}
                </button>
                {/* Actions */}
                <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
                  {status?.id === f.id && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem', color: status.type === 'success' ? '#34d399' : '#f87171' }}>
                      {status.type === 'success' ? <CheckCircle size={13} /> : <AlertCircle size={13} />}
                      {status.type === 'success' ? 'Saved' : 'Error'}
                    </span>
                  )}
                  <button onClick={() => handleUpdate(f)} disabled={saving === f.id}
                    style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 14px', borderRadius: 8, background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', fontSize: '0.8rem', cursor: 'pointer', opacity: saving === f.id ? 0.6 : 1 }}>
                    {saving === f.id ? '...' : <><Save size={12} /> Save</>}
                  </button>
                  <button onClick={() => handleDelete(f.id)}
                    style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 12px', borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#64748b', fontSize: '0.8rem', cursor: 'pointer' }}>
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
