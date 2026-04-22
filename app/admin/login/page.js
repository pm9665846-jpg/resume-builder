'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Shield, Mail, Lock, ArrowRight } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        // Hard redirect so cookie is sent with next request
        window.location.href = '/admin'
      } else {
        setError(data.error || 'Invalid credentials')
      }
    } catch {
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#050508', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 400 }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, #ef4444, #f97316)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <Shield size={26} color="white" />
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#f1f5f9', marginBottom: 6 }}>Admin Panel</h1>
          <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Sign in with your admin credentials</p>
        </div>

        {/* Card */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: 20, padding: 28 }}>

          {error && (
            <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 10, padding: '10px 14px', marginBottom: 18, color: '#f87171', fontSize: '0.85rem', textAlign: 'center' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Email</label>
              <div style={{ position: 'relative' }}>
                <Mail size={14} color="#64748b" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value.trim() }))}
                  placeholder="admin@resumeai.com"
                  required
                  autoCapitalize="none"
                  autoCorrect="off"
                  autoComplete="email"
                  spellCheck="false"
                  style={{ width: '100%', paddingLeft: 36, paddingRight: 14, paddingTop: 11, paddingBottom: 11, borderRadius: 10, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#f1f5f9', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(239,68,68,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={14} color="#64748b" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                <input
                  type="password"
                  value={form.password}
                  onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                  placeholder="••••••••"
                  required
                  autoCapitalize="none"
                  autoCorrect="off"
                  autoComplete="current-password"
                  style={{ width: '100%', paddingLeft: 36, paddingRight: 14, paddingTop: 11, paddingBottom: 11, borderRadius: 10, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#f1f5f9', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(239,68,68,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
            </div>

            <button type="submit" disabled={loading}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px', borderRadius: 12, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', background: 'linear-gradient(135deg, #ef4444, #f97316)', color: 'white', fontWeight: 700, fontSize: '0.95rem', opacity: loading ? 0.7 : 1, marginTop: 4 }}
            >
              {loading
                ? <span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} />
                : <><Shield size={15} /> Sign In to Admin</>
              }
            </button>
          </form>
        </div>

        <p style={{ textAlign: 'center', marginTop: 20, fontSize: '0.8rem', color: '#334155' }}>
          Not an admin?{' '}
          <a href="/login" style={{ color: '#64748b', textDecoration: 'none' }}>User Login →</a>
        </p>
      </div>
    </div>
  )
}
