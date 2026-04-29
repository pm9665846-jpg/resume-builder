'use client'
import { useRef } from 'react'
import { useResumeStore } from '@/store/resumeStore'
import AIAssistButton from '@/components/ui/AIAssistButton'
import { User, Mail, Phone, MapPin, Globe, Link2, Briefcase, GitBranch, Camera, X, Palette, Type } from 'lucide-react'

const COLOR_PRESETS = [
  '#8b5cf6', '#3b82f6', '#06b6d4', '#ec4899',
  '#10b981', '#f59e0b', '#ef4444', '#6366f1',
  '#14b8a6', '#f97316', '#1e3a5f', '#b8860b',
  '#00d4aa', '#2563eb', '#e11d48', '#0ea5e9',
]

const FONT_PRESETS = [
  { label: 'Arial',           value: 'Arial, Helvetica, sans-serif' },
  { label: 'Georgia',         value: 'Georgia, serif' },
  { label: 'Times New Roman', value: "'Times New Roman', Times, serif" },
  { label: 'Garamond',        value: 'Garamond, serif' },
  { label: 'Trebuchet MS',    value: "'Trebuchet MS', sans-serif" },
  { label: 'Verdana',         value: 'Verdana, Geneva, sans-serif' },
  { label: 'Courier New',     value: "'Courier New', Courier, monospace" },
  { label: 'Palatino',        value: "'Palatino Linotype', Palatino, serif" },
]

function Field({ label, icon: Icon, value, onChange, placeholder, type = 'text', textarea, span2 }) {
  return (
    <div style={{ gridColumn: span2 ? 'span 2' : 'span 1' }}>
      <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>{label}</label>
      <div style={{ position: 'relative' }}>
        {Icon && (
          <Icon size={13} color="#64748b" style={{ position: 'absolute', left: 11, top: textarea ? 12 : '50%', transform: textarea ? 'none' : 'translateY(-50%)', pointerEvents: 'none' }} />
        )}
        {textarea ? (
          <textarea value={value} onChange={onChange} placeholder={placeholder} rows={4} className="input-glass"
            style={{ paddingLeft: Icon ? 32 : 12, paddingRight: 12, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontSize: '0.85rem', resize: 'vertical', width: '100%' }} />
        ) : (
          <input type={type} value={value} onChange={onChange} placeholder={placeholder} className="input-glass"
            style={{ paddingLeft: Icon ? 32 : 12, paddingRight: 12, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontSize: '0.85rem', width: '100%' }} />
        )}
      </div>
    </div>
  )
}

export default function PersonalInfoForm() {
  const { resume, updatePersonalInfo, updateThemeColor, updateFontFamily } = useResumeStore()
  const { personalInfo } = resume
  const u = (field) => (e) => updatePersonalInfo(field, e.target.value)
  const fileInputRef = useRef(null)

  async function handlePhoto(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const formData = new FormData()
    formData.append('file', file)
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData })
      const data = await res.json()
      if (data.fileName) updatePersonalInfo('photo', data.fileName)
      else console.error('Upload error:', data.error)
    } catch (err) {
      console.error('Upload failed:', err)
    }
    e.target.value = ''
  }

  const photoSrc = personalInfo.photo
    ? (personalInfo.photo.startsWith('http') || personalInfo.photo.startsWith('data:') || personalInfo.photo.startsWith('/')
        ? personalInfo.photo
        : `/uploads/${personalInfo.photo}`)
    : null

  const activeFont = FONT_PRESETS.find(f => f.value === resume.fontFamily)?.label || 'Arial'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

      {/* ── Photo Upload ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', flexShrink: 0, background: photoSrc ? 'transparent' : 'rgba(139,92,246,0.1)', border: '2px dashed rgba(139,92,246,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
          onClick={() => fileInputRef.current?.click()}>
          {photoSrc ? <img src={photoSrc} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <Camera size={22} color="#7c3aed" />}
        </div>
        <div>
          <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>Profile Photo</p>
          <p style={{ fontSize: '0.72rem', color: 'var(--text3)', marginBottom: 8 }}>JPG, PNG — shows on resume</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ position: 'relative', overflow: 'hidden', display: 'inline-block' }}>
              <button type="button" style={{ fontSize: '0.75rem', padding: '7px 16px', borderRadius: 8, background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.4)', color: '#a78bfa', fontWeight: 600, cursor: 'pointer', pointerEvents: 'none' }}>
                {photoSrc ? 'Change Photo' : 'Upload Photo'}
              </button>
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhoto}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer', fontSize: '100px' }} />
            </div>
            {photoSrc && (
              <button type="button" onClick={() => updatePersonalInfo('photo', '')}
                style={{ fontSize: '0.75rem', padding: '7px 12px', borderRadius: 8, cursor: 'pointer', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', color: '#f87171', display: 'flex', alignItems: 'center', gap: 4 }}>
                <X size={12} /> Remove
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Fields ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <Field label="Full Name"  icon={User}      value={personalInfo.name     || ''} onChange={u('name')}     placeholder="Your Name"        span2 />
        <Field label="Job Title"  icon={Briefcase} value={personalInfo.jobTitle || ''} onChange={u('jobTitle')} placeholder="Software Engineer" span2 />
        <Field label="Email"      icon={Mail}      value={personalInfo.email    || ''} onChange={u('email')}    placeholder="you@example.com"   type="email" />
        <Field label="Phone"      icon={Phone}     value={personalInfo.phone    || ''} onChange={u('phone')}    placeholder="+91 98765 43210"   type="tel" />
        <Field label="Location"   icon={MapPin}    value={personalInfo.location || ''} onChange={u('location')} placeholder="Mumbai, India" />
        <Field label="Website"    icon={Globe}     value={personalInfo.website  || ''} onChange={u('website')}  placeholder="yoursite.com" />
        <Field label="LinkedIn"   icon={Link2}     value={personalInfo.linkedin || ''} onChange={u('linkedin')} placeholder="linkedin.com/in/you" />
        <Field label="GitHub"     icon={GitBranch} value={personalInfo.github   || ''} onChange={u('github')}   placeholder="github.com/you" />
      </div>

      {/* ── Summary ── */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
          <label style={{ fontSize: '0.68rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Professional Summary
          </label>
          <AIAssistButton type="summary" context={{ name: personalInfo.name, jobTitle: personalInfo.jobTitle }}
            onResult={(text) => updatePersonalInfo('summary', text)} />
        </div>
        <textarea value={personalInfo.summary || ''} onChange={u('summary')}
          placeholder="Write 2-3 sentences about your experience, key skills, and career goals..."
          rows={4} className="input-glass"
          style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontSize: '0.85rem', resize: 'vertical', width: '100%' }} />
      </div>

      {/* ── Color Theme ── */}
      <div style={{ padding: '14px 16px', borderRadius: 12, background: 'var(--card)', border: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <Palette size={13} color={resume.themeColor || '#8b5cf6'} />
          <label style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Theme Color
          </label>
          <span style={{ marginLeft: 'auto', fontSize: '0.68rem', color: resume.themeColor, fontFamily: 'monospace', fontWeight: 700 }}>
            {resume.themeColor || '#8b5cf6'}
          </span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 10 }}>
          {COLOR_PRESETS.map(color => (
            <button key={color} type="button" onClick={() => updateThemeColor(color)}
              style={{ width: 24, height: 24, borderRadius: '50%', background: color, border: 'none', cursor: 'pointer', outline: resume.themeColor === color ? '2px solid white' : 'none', outlineOffset: 2, transition: 'transform 0.15s', flexShrink: 0 }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <label style={{ fontSize: '0.7rem', color: 'var(--text3)' }}>Custom:</label>
          <input type="color" value={resume.themeColor || '#8b5cf6'} onChange={e => updateThemeColor(e.target.value)}
            style={{ width: 32, height: 32, borderRadius: 6, border: 'none', cursor: 'pointer', background: 'transparent' }} />
        </div>
      </div>

      {/* ── Font Theme ── */}
      <div style={{ padding: '14px 16px', borderRadius: 12, background: 'var(--card)', border: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <Type size={13} color="#a78bfa" />
          <label style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Font Family
          </label>
          <span style={{ marginLeft: 'auto', fontSize: '0.68rem', color: '#a78bfa', fontWeight: 700 }}>{activeFont}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {FONT_PRESETS.map(f => {
            const active = resume.fontFamily === f.value
            return (
              <button key={f.value} type="button" onClick={() => updateFontFamily(f.value)}
                style={{ width: '100%', textAlign: 'left', padding: '7px 10px', borderRadius: 7, border: 'none', cursor: 'pointer', background: active ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.03)', outline: active ? '1px solid rgba(139,92,246,0.4)' : '1px solid rgba(255,255,255,0.06)', color: active ? '#a78bfa' : 'var(--text2)', fontFamily: f.value, fontSize: '0.78rem', transition: 'all 0.15s', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
              >
                <span>{f.label}</span>
                {active && <span style={{ fontSize: '0.6rem', color: '#a78bfa' }}>✓</span>}
              </button>
            )
          })}
        </div>
      </div>

    </div>
  )
}
