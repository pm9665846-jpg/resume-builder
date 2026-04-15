'use client'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { User, Mail, Lock, Camera, Save, Loader2 } from 'lucide-react'

export default function ProfilePage() {
  const [profile, setProfile] = useState({ name: '', email: '', avatar: '', provider: '' })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [saveError, setSaveError] = useState('')

  const [pwForm, setPwForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [pwSaving, setPwSaving] = useState(false)
  const [pwMsg, setPwMsg] = useState({ type: '', text: '' })

  const fileRef = useRef(null)

  useEffect(() => {
    fetch('/api/profile')
      .then(r => r.json())
      .then(d => { if (d.user) setProfile(d.user) })
      .finally(() => setLoading(false))
  }, [])

  async function handleAvatarChange(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const formData = new FormData()
    formData.append('file', file)
    const res = await fetch('/api/upload', { method: 'POST', body: formData })
    const data = await res.json()
    if (data.fileName) {
      const avatarUrl = `/uploads/${data.fileName}`
      setProfile(p => ({ ...p, avatar: avatarUrl }))
      await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ avatar: avatarUrl }),
      })
    }
  }

  async function handleSave(e) {
    e.preventDefault()
    setSaving(true)
    setSaveError('')
    const res = await fetch('/api/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: profile.name }),
    })
    const data = await res.json()
    setSaving(false)
    if (data.success) { setSaved(true); setTimeout(() => setSaved(false), 3000) }
    else setSaveError(data.error || 'Failed to save')
  }

  async function handlePasswordChange(e) {
    e.preventDefault()
    setPwMsg({ type: '', text: '' })
    if (pwForm.newPassword !== pwForm.confirmPassword) {
      setPwMsg({ type: 'error', text: 'New passwords do not match' }); return
    }
    setPwSaving(true)
    const res = await fetch('/api/profile/password', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentPassword: pwForm.currentPassword, newPassword: pwForm.newPassword }),
    })
    const data = await res.json()
    setPwSaving(false)
    if (data.success) {
      setPwMsg({ type: 'success', text: 'Password updated successfully' })
      setPwForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
    } else {
      setPwMsg({ type: 'error', text: data.error || 'Failed to update password' })
    }
  }

  const initials = profile.name ? profile.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'U'

  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Loader2 size={32} color="#8b5cf6" style={{ animation: 'spin 1s linear infinite' }} />
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', padding: '40px 32px', background: 'var(--dash-bg)' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

          <h1 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--text)', marginBottom: 4 }}>Profile</h1>
          <p style={{ color: 'var(--text2)', marginBottom: 32, fontSize: '0.9rem' }}>Manage your account information</p>

          {/* Profile Card */}
          <div className="glass" style={{ borderRadius: 16, padding: 28, marginBottom: 20 }}>

            {/* Avatar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28, paddingBottom: 24, borderBottom: '1px solid var(--border)' }}>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', overflow: 'hidden', background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {profile.avatar
                    ? <img src={profile.avatar} alt={profile.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'white' }}>{initials}</span>
                  }
                </div>
                <button
                  onClick={() => fileRef.current?.click()}
                  style={{ position: 'absolute', bottom: 0, right: 0, width: 26, height: 26, borderRadius: '50%', background: '#8b5cf6', border: '2px solid var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                >
                  <Camera size={12} color="white" />
                </button>
                <input ref={fileRef} type="file" accept="image/*" onChange={handleAvatarChange} style={{ display: 'none' }} />
              </div>
              <div>
                <p style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1rem' }}>{profile.name}</p>
                <p style={{ color: 'var(--text2)', fontSize: '0.82rem' }}>{profile.email}</p>
                <span style={{ display: 'inline-block', marginTop: 6, fontSize: '0.7rem', padding: '2px 10px', borderRadius: 999, background: 'rgba(139,92,246,0.15)', color: '#a78bfa', border: '1px solid rgba(139,92,246,0.3)' }}>
                  {profile.provider !== 'google' ? 'Free Plan' : 'Google Account'}
                </span>
              </div>
            </div>

            {/* Edit Name */}
            <form onSubmit={handleSave}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Full Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={14} color="#64748b" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  <input
                    value={profile.name}
                    onChange={e => setProfile(p => ({ ...p, name: e.target.value }))}
                    className="input-glass"
                    style={{ paddingLeft: 36, paddingRight: 12, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontSize: '0.875rem', width: '100%' }}
                  />
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Email</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={14} color="#64748b" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  <input
                    value={profile.email}
                    disabled
                    className="input-glass"
                    style={{ paddingLeft: 36, paddingRight: 12, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontSize: '0.875rem', width: '100%', opacity: 0.6, cursor: 'not-allowed' }}
                  />
                </div>
              </div>
              {saveError && <p style={{ color: '#f87171', fontSize: '0.8rem', marginBottom: 12 }}>{saveError}</p>}
              <button
                type="submit"
                disabled={saving}
                style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 10, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: 'white', border: 'none', cursor: saving ? 'not-allowed' : 'pointer', fontWeight: 600, fontSize: '0.875rem', opacity: saving ? 0.7 : 1 }}
              >
                {saving ? <Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} /> : <Save size={15} />}
                {saved ? 'Saved!' : 'Save Changes'}
              </button>
            </form>
          </div>

          {/* Change Password — only for credentials users */}
          {profile.provider !== 'google' && (
            <div className="glass" style={{ borderRadius: 16, padding: 28 }}>
              <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1rem', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Lock size={16} color="#ec4899" /> Change Password
              </h2>
              <form onSubmit={handlePasswordChange} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['currentPassword', 'newPassword', 'confirmPassword'].map((field, i) => (
                  <div key={field}>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                      {['Current Password', 'New Password', 'Confirm New Password'][i]}
                    </label>
                    <input
                      type="password"
                      value={pwForm[field]}
                      onChange={e => setPwForm(p => ({ ...p, [field]: e.target.value }))}
                      placeholder="••••••••"
                      className="input-glass"
                      style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontSize: '0.875rem', width: '100%' }}
                    />
                  </div>
                ))}
                {pwMsg.text && (
                  <p style={{ fontSize: '0.8rem', color: pwMsg.type === 'success' ? '#4ade80' : '#f87171' }}>{pwMsg.text}</p>
                )}
                <button
                  type="submit"
                  disabled={pwSaving}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 10, background: 'rgba(236,72,153,0.15)', color: '#ec4899', border: '1px solid rgba(236,72,153,0.3)', cursor: pwSaving ? 'not-allowed' : 'pointer', fontWeight: 600, fontSize: '0.875rem', width: 'fit-content', opacity: pwSaving ? 0.7 : 1 }}
                >
                  {pwSaving ? <Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} /> : <Lock size={15} />}
                  Update Password
                </button>
              </form>
            </div>
          )}

        </motion.div>
      </div>
    </div>
  )
}
