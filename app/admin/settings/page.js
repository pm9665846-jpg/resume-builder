'use client'
import { useState } from 'react'
import { Lock, Eye, EyeOff, CheckCircle, AlertCircle, Save } from 'lucide-react'

export default function AdminSettingsPage() {
  const [form, setForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [show, setShow] = useState({ current: false, new: false, confirm: false })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // { type: 'success'|'error', msg: '' }

  const strength = form.newPassword.length >= 8
    ? (form.newPassword.match(/[A-Z]/) && form.newPassword.match(/[0-9]/) ? 3 : 2)
    : form.newPassword.length > 0 ? 1 : 0
  const strengthColors = ['', '#ef4444', '#eab308', '#22c55e']
  const strengthLabels = ['', 'Weak', 'Good', 'Strong']

  async function handleSubmit(e) {
    e.preventDefault()
    if (form.newPassword !== form.confirmPassword) {
      setStatus({ type: 'error', msg: 'New passwords do not match' })
      return
    }
    if (form.newPassword.length < 6) {
      setStatus({ type: 'error', msg: 'Password must be at least 6 characters' })
      return
    }

    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch('/api/admin/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword: form.currentPassword,
          newPassword: form.newPassword,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus({ type: 'success', msg: 'Password changed successfully!' })
        setForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
      } else {
        setStatus({ type: 'error', msg: data.error || 'Failed to change password' })
      }
    } catch {
      setStatus({ type: 'error', msg: 'Something went wrong. Try again.' })
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', paddingLeft: 36, paddingRight: 40, paddingTop: 11, paddingBottom: 11,
    borderRadius: 10, background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)', color: '#f1f5f9',
    fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box',
  }

  function PasswordField({ label, field, showKey }) {
    return (
      <div>
        <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
          {label}
        </label>
        <div style={{ position: 'relative' }}>
          <Lock size={14} color="#64748b" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
          <input
            type={show[showKey] ? 'text' : 'password'}
            value={form[field]}
            onChange={e => setForm(p => ({ ...p, [field]: e.target.value }))}
            placeholder="••••••••"
            required
            autoCapitalize="none"
            autoCorrect="off"
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'rgba(239,68,68,0.5)'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
          />
          <button type="button" onClick={() => setShow(p => ({ ...p, [showKey]: !p[showKey] }))}
            style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', padding: 0 }}>
            {show[showKey] ? <EyeOff size={14} /> : <Eye size={14} />}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: '32px 28px', maxWidth: 520, margin: '0 auto' }}>

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f1f5f9', marginBottom: 4 }}>Settings</h1>
        <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Manage your admin account</p>
      </div>

      {/* Change Password Card */}
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: 18, padding: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(239,68,68,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Lock size={18} color="#f87171" />
          </div>
          <div>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', margin: 0 }}>Change Password</h2>
            <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>Update your admin login password</p>
          </div>
        </div>

        {/* Status message */}
        {status && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderRadius: 10, marginBottom: 20, background: status.type === 'success' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', border: `1px solid ${status.type === 'success' ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`, color: status.type === 'success' ? '#34d399' : '#f87171', fontSize: '0.85rem' }}>
            {status.type === 'success' ? <CheckCircle size={15} /> : <AlertCircle size={15} />}
            {status.msg}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <PasswordField label="Current Password" field="currentPassword" showKey="current" />
          
          <div style={{ height: 1, background: 'rgba(255,255,255,0.05)' }} />

          <PasswordField label="New Password" field="newPassword" showKey="new" />

          {/* Strength indicator */}
          {form.newPassword && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: -8 }}>
              <div style={{ display: 'flex', gap: 4, flex: 1 }}>
                {[1, 2, 3].map(i => (
                  <div key={i} style={{ height: 3, flex: 1, borderRadius: 999, background: i <= strength ? strengthColors[strength] : 'rgba(255,255,255,0.08)', transition: 'background 0.3s' }} />
                ))}
              </div>
              <span style={{ fontSize: '0.7rem', color: strengthColors[strength], fontWeight: 600 }}>{strengthLabels[strength]}</span>
            </div>
          )}

          <PasswordField label="Confirm New Password" field="confirmPassword" showKey="confirm" />

          {/* Match indicator */}
          {form.confirmPassword && (
            <p style={{ fontSize: '0.72rem', marginTop: -8, color: form.newPassword === form.confirmPassword ? '#34d399' : '#f87171' }}>
              {form.newPassword === form.confirmPassword ? '✓ Passwords match' : '✗ Passwords do not match'}
            </p>
          )}

          <button type="submit" disabled={loading}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px', borderRadius: 12, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', background: 'linear-gradient(135deg, #ef4444, #f97316)', color: 'white', fontWeight: 700, fontSize: '0.95rem', opacity: loading ? 0.7 : 1, marginTop: 4 }}
          >
            {loading
              ? <span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} />
              : <><Save size={15} /> Update Password</>
            }
          </button>
        </form>
      </div>

    </div>
  )
}
