'use client'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { User, Mail, Lock, Camera, Save, Loader2, Briefcase, GraduationCap, Code, Heart, Globe, Award, FolderOpen, Star } from 'lucide-react'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }

export default function ProfilePage() {
  const [profile, setProfile] = useState({ name: '', email: '', avatar: '', provider: '' })
  const [resumeData, setResumeData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [saveError, setSaveError] = useState('')

  const [pwForm, setPwForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [pwSaving, setPwSaving] = useState(false)
  const [pwMsg, setPwMsg] = useState({ type: '', text: '' })

  const fileRef = useRef(null)

  useEffect(() => {
    Promise.all([
      fetch('/api/profile').then(r => r.json()),
      fetch('/api/user/resume-data').then(r => r.json()),
    ]).then(([profileData, rdData]) => {
      if (profileData.user) setProfile(profileData.user)
      if (rdData.success) setResumeData(rdData.data)
    }).finally(() => setLoading(false))
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
  const pi = resumeData?.personalInfo || {}

  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Loader2 size={32} color="#8b5cf6" style={{ animation: 'spin 1s linear infinite' }} />
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', padding: '40px 32px', background: 'var(--dash-bg)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <motion.div variants={container} initial="hidden" animate="show">

          <motion.div variants={item}>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--text)', marginBottom: 4 }}>Profile</h1>
            <p style={{ color: 'var(--text2)', marginBottom: 32, fontSize: '0.9rem' }}>Your account and resume information</p>
          </motion.div>

          {/* ── Profile Card ── */}
          <motion.div variants={item} className="glass" style={{ borderRadius: 16, padding: 28, marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28, paddingBottom: 24, borderBottom: '1px solid var(--border)' }}>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', overflow: 'hidden', background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {profile.avatar
                    ? <img src={profile.avatar} alt={profile.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'white' }}>{initials}</span>
                  }
                </div>
                <button onClick={() => fileRef.current?.click()}
                  style={{ position: 'absolute', bottom: 0, right: 0, width: 26, height: 26, borderRadius: '50%', background: '#8b5cf6', border: '2px solid var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Camera size={12} color="white" />
                </button>
                <input ref={fileRef} type="file" accept="image/*" onChange={handleAvatarChange} style={{ display: 'none' }} />
              </div>
              <div>
                <p style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1rem' }}>{profile.name}</p>
                <p style={{ color: 'var(--text2)', fontSize: '0.82rem' }}>{profile.email}</p>
                {pi.jobTitle && <p style={{ color: '#a78bfa', fontSize: '0.78rem', marginTop: 2 }}>{pi.jobTitle}</p>}
                {pi.location && <p style={{ color: 'var(--text3)', fontSize: '0.75rem', marginTop: 1 }}>📍 {pi.location}</p>}
                <span style={{ display: 'inline-block', marginTop: 6, fontSize: '0.7rem', padding: '2px 10px', borderRadius: 999, background: 'rgba(139,92,246,0.15)', color: '#a78bfa', border: '1px solid rgba(139,92,246,0.3)' }}>
                  {resumeData?.totalResumes || 0} Resume{resumeData?.totalResumes !== 1 ? 's' : ''}
                </span>
              </div>
            </div>

            <form onSubmit={handleSave}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Full Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={14} color="#64748b" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  <input value={profile.name} onChange={e => setProfile(p => ({ ...p, name: e.target.value }))} className="input-glass"
                    style={{ paddingLeft: 36, paddingRight: 12, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontSize: '0.875rem', width: '100%' }} />
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Email</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={14} color="#64748b" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  <input value={profile.email} disabled className="input-glass"
                    style={{ paddingLeft: 36, paddingRight: 12, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontSize: '0.875rem', width: '100%', opacity: 0.6, cursor: 'not-allowed' }} />
                </div>
              </div>
              {saveError && <p style={{ color: '#f87171', fontSize: '0.8rem', marginBottom: 12 }}>{saveError}</p>}
              <button type="submit" disabled={saving}
                style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 10, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: 'white', border: 'none', cursor: saving ? 'not-allowed' : 'pointer', fontWeight: 600, fontSize: '0.875rem', opacity: saving ? 0.7 : 1 }}>
                {saving ? <Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} /> : <Save size={15} />}
                {saved ? 'Saved!' : 'Save Changes'}
              </button>
            </form>
          </motion.div>

          {/* ── Resume Data Sections ── */}
          {resumeData && (
            <>
              {/* Skills */}
              {resumeData.skills?.length > 0 && (
                <motion.div variants={item} className="glass" style={{ borderRadius: 16, padding: 24, marginBottom: 16 }}>
                  <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '0.95rem', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Code size={16} color="#3b82f6" /> Skills
                    <span style={{ fontSize: '0.7rem', color: 'var(--text3)', fontWeight: 400 }}>({resumeData.skills.length})</span>
                  </h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {resumeData.skills.map((s, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 20, background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text)', fontWeight: 500 }}>{s.name}</span>
                        {s.level && <span style={{ fontSize: '0.68rem', color: '#3b82f6', fontWeight: 700 }}>{s.level}%</span>}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Experience */}
              {resumeData.experience?.length > 0 && (
                <motion.div variants={item} className="glass" style={{ borderRadius: 16, padding: 24, marginBottom: 16 }}>
                  <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '0.95rem', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Briefcase size={16} color="#8b5cf6" /> Experience
                    <span style={{ fontSize: '0.7rem', color: 'var(--text3)', fontWeight: 400 }}>({resumeData.experience.length})</span>
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {resumeData.experience.map((e, i) => (
                      <div key={i} style={{ padding: '12px 14px', borderRadius: 10, background: 'var(--card)', border: '1px solid var(--border)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 4 }}>
                          <div>
                            <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem' }}>{e.role}</p>
                            <p style={{ color: '#8b5cf6', fontSize: '0.78rem', marginTop: 1 }}>{e.company}{e.location ? ` · ${e.location}` : ''}</p>
                          </div>
                          <span style={{ fontSize: '0.72rem', color: 'var(--text3)', background: 'var(--card2)', padding: '2px 8px', borderRadius: 6 }}>
                            {e.startDate} – {e.current ? 'Present' : e.endDate}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Education */}
              {resumeData.education?.length > 0 && (
                <motion.div variants={item} className="glass" style={{ borderRadius: 16, padding: 24, marginBottom: 16 }}>
                  <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '0.95rem', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <GraduationCap size={16} color="#06b6d4" /> Education
                    <span style={{ fontSize: '0.7rem', color: 'var(--text3)', fontWeight: 400 }}>({resumeData.education.length})</span>
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {resumeData.education.map((e, i) => (
                      <div key={i} style={{ padding: '12px 14px', borderRadius: 10, background: 'var(--card)', border: '1px solid var(--border)' }}>
                        <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem' }}>{e.degree}</p>
                        <p style={{ color: '#06b6d4', fontSize: '0.78rem', marginTop: 1 }}>{e.school}</p>
                        <p style={{ color: 'var(--text3)', fontSize: '0.72rem', marginTop: 2 }}>{e.startDate} – {e.endDate}{e.gpa ? ` · GPA: ${e.gpa}` : ''}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Projects */}
              {resumeData.projects?.length > 0 && (
                <motion.div variants={item} className="glass" style={{ borderRadius: 16, padding: 24, marginBottom: 16 }}>
                  <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '0.95rem', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <FolderOpen size={16} color="#f59e0b" /> Projects
                    <span style={{ fontSize: '0.7rem', color: 'var(--text3)', fontWeight: 400 }}>({resumeData.projects.length})</span>
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {resumeData.projects.map((p, i) => (
                      <div key={i} style={{ padding: '12px 14px', borderRadius: 10, background: 'var(--card)', border: '1px solid var(--border)' }}>
                        <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem' }}>{p.name}</p>
                        {p.description && <p style={{ color: 'var(--text2)', fontSize: '0.78rem', marginTop: 3, lineHeight: 1.5 }}>{p.description}</p>}
                        {p.tech && <p style={{ color: '#f59e0b', fontSize: '0.72rem', marginTop: 4 }}>{p.tech}</p>}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Certifications */}
              {resumeData.certifications?.length > 0 && (
                <motion.div variants={item} className="glass" style={{ borderRadius: 16, padding: 24, marginBottom: 16 }}>
                  <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '0.95rem', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Award size={16} color="#10b981" /> Certifications
                    <span style={{ fontSize: '0.7rem', color: 'var(--text3)', fontWeight: 400 }}>({resumeData.certifications.length})</span>
                  </h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {resumeData.certifications.map((c, i) => (
                      <div key={i} style={{ padding: '8px 14px', borderRadius: 10, background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}>
                        <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.8rem' }}>{c.name}</p>
                        <p style={{ color: '#10b981', fontSize: '0.72rem', marginTop: 1 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Languages + Interests row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 16 }}>
                {resumeData.languages?.length > 0 && (
                  <motion.div variants={item} className="glass" style={{ borderRadius: 16, padding: 24 }}>
                    <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '0.95rem', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Globe size={16} color="#ec4899" /> Languages
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {resumeData.languages.map((l, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 10px', borderRadius: 8, background: 'var(--card)', border: '1px solid var(--border)' }}>
                          <span style={{ color: 'var(--text)', fontSize: '0.82rem', fontWeight: 500 }}>{l.name}</span>
                          <span style={{ color: '#ec4899', fontSize: '0.72rem', fontWeight: 600 }}>{l.proficiency}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {resumeData.interests?.length > 0 && (
                  <motion.div variants={item} className="glass" style={{ borderRadius: 16, padding: 24 }}>
                    <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '0.95rem', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Heart size={16} color="#f97316" /> Interests
                    </h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                      {resumeData.interests.map((it, i) => (
                        <span key={i} style={{ fontSize: '0.78rem', padding: '4px 12px', borderRadius: 20, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)', color: '#f97316', fontWeight: 500 }}>
                          {it.name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Empty state */}
              {!resumeData.skills?.length && !resumeData.experience?.length && !resumeData.education?.length && (
                <motion.div variants={item} style={{ textAlign: 'center', padding: '32px 20px', background: 'var(--card)', borderRadius: 16, border: '1px solid var(--border)', marginBottom: 20 }}>
                  <Star size={32} color="#475569" style={{ marginBottom: 12 }} />
                  <p style={{ color: 'var(--text2)', fontWeight: 600, marginBottom: 6 }}>No resume data yet</p>
                  <p style={{ color: 'var(--text3)', fontSize: '0.82rem' }}>Create a resume and fill in your details to see them here.</p>
                  <a href="/dashboard/create" style={{ display: 'inline-block', marginTop: 14, padding: '8px 20px', borderRadius: 10, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: 'white', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>
                    Create Resume
                  </a>
                </motion.div>
              )}
            </>
          )}

          {/* ── Change Password ── */}
          {profile.provider !== 'google' && (
            <motion.div variants={item} className="glass" style={{ borderRadius: 16, padding: 28 }}>
              <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1rem', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Lock size={16} color="#ec4899" /> Change Password
              </h2>
              <form onSubmit={handlePasswordChange} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['currentPassword', 'newPassword', 'confirmPassword'].map((field, i) => (
                  <div key={field}>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                      {['Current Password', 'New Password', 'Confirm New Password'][i]}
                    </label>
                    <input type="password" value={pwForm[field]} onChange={e => setPwForm(p => ({ ...p, [field]: e.target.value }))}
                      placeholder="••••••••" className="input-glass"
                      style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontSize: '0.875rem', width: '100%' }} />
                  </div>
                ))}
                {pwMsg.text && <p style={{ fontSize: '0.8rem', color: pwMsg.type === 'success' ? '#4ade80' : '#f87171' }}>{pwMsg.text}</p>}
                <button type="submit" disabled={pwSaving}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 10, background: 'rgba(236,72,153,0.15)', color: '#ec4899', border: '1px solid rgba(236,72,153,0.3)', cursor: pwSaving ? 'not-allowed' : 'pointer', fontWeight: 600, fontSize: '0.875rem', width: 'fit-content', opacity: pwSaving ? 0.7 : 1 }}>
                  {pwSaving ? <Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} /> : <Lock size={15} />}
                  Update Password
                </button>
              </form>
            </motion.div>
          )}

        </motion.div>
      </div>
    </div>
  )
}
