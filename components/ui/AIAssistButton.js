'use client'
import { useState } from 'react'
import { Sparkles, Loader2, X, Send } from 'lucide-react'

export default function AIAssistButton({ type, context, onResult, className = '' }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [customPrompt, setCustomPrompt] = useState('')
  const [error, setError] = useState('')

  async function generate(useCustom = false) {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: useCustom ? 'custom' : type,
          context,
          customPrompt: useCustom ? customPrompt : undefined,
        }),
      })
      const data = await res.json()
      if (data.error) { setError(data.error); return }
      onResult(data.result)
      setOpen(false)
      setCustomPrompt('')
    } catch {
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        title="AI Assist"
        style={{
          display: 'flex', alignItems: 'center', gap: 4, padding: '4px 10px',
          borderRadius: 8, fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer',
          background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2))',
          border: '1px solid rgba(139,92,246,0.4)', color: '#a78bfa',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(135deg, rgba(139,92,246,0.35), rgba(59,130,246,0.35))'}
        onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2))'}
      >
        <Sparkles size={12} />
        AI
      </button>

      {open && (
        <div style={{
          position: 'absolute', right: 0, top: '110%', zIndex: 50, width: 280,
          background: '#1e1b2e', border: '1px solid rgba(139,92,246,0.3)',
          borderRadius: 12, padding: 14, boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#a78bfa', display: 'flex', alignItems: 'center', gap: 5 }}>
              <Sparkles size={13} /> AI Assistant
            </span>
            <button onClick={() => setOpen(false)} style={{ color: '#475569', cursor: 'pointer' }}>
              <X size={14} />
            </button>
          </div>

          <button
            onClick={() => generate(false)}
            disabled={loading}
            style={{
              width: '100%', padding: '8px 12px', borderRadius: 8, marginBottom: 10,
              background: 'linear-gradient(135deg, #7c3aed, #3b82f6)', color: '#fff',
              fontSize: '0.78rem', fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              border: 'none',
            }}
          >
            {loading ? <Loader2 size={13} className="animate-spin" /> : <Sparkles size={13} />}
            {loading ? 'Generating...' : 'Auto Generate'}
          </button>

          <div style={{ fontSize: '0.7rem', color: '#64748b', marginBottom: 6 }}>Or describe what you want:</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <input
              value={customPrompt}
              onChange={e => setCustomPrompt(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && customPrompt && generate(true)}
              placeholder="e.g. Make it more technical..."
              style={{
                flex: 1, padding: '7px 10px', borderRadius: 8, fontSize: '0.78rem',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#e2e8f0', outline: 'none',
              }}
            />
            <button
              onClick={() => customPrompt && generate(true)}
              disabled={!customPrompt || loading}
              style={{
                padding: '7px 10px', borderRadius: 8, cursor: 'pointer',
                background: customPrompt ? 'rgba(139,92,246,0.3)' : 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(139,92,246,0.3)', color: '#a78bfa',
              }}
            >
              <Send size={13} />
            </button>
          </div>

          {error && <p style={{ color: '#f87171', fontSize: '0.72rem', marginTop: 8 }}>{error}</p>}
        </div>
      )}
    </div>
  )
}
