'use client'
import { useRef } from 'react'
import { useResumeStore } from '@/store/resumeStore'
import AIAssistButton from '@/components/ui/AIAssistButton'
import { User, Mail, Phone, MapPin, Globe, Link2, Briefcase, GitBranch, Camera, X } from 'lucide-react'

function Field({ label, icon: Icon, value, onChange, placeholder, type = 'text', textarea, span2 }) {
  return (
    <div style={{ gridColumn: span2 ? 'span 2' : 'span 1' }}>
      <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>{label}</label>
      <div style={{ position: 'relative' }}>
        {Icon && (
          <Icon size={13} color="#64748b" style={{ position: 'absolute', left: 11, top: textarea ? 12 : '50%', transform: textarea ? 'none' : 'translateY(-50%)', pointerEvents: 'none' }} />
        )}
        {textarea ? (
          <textarea
            value={value} onChange={onChange} placeholder={placeholder} rows={4}
            className="input-glass"
            style={{ paddingLeft: Icon ? 32 : 12, paddingRight: 12, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontSize: '0.85rem', resize: 'vertical', width: '100%' }}
          />
        ) : (
          <input
            type={type} value={value} onChange={onChange} placeholder={placeholder}
            className="input-glass"
            style={{ paddingLeft: Icon ? 32 : 12, paddingRight: 12, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontSize: '0.85rem', width: '100%' }}
          />
        )}
      </div>
    </div>
  )
}

export default function PersonalInfoForm() {
  const { resume, updatePersonalInfo } = useResumeStore()
  const { personalInfo } = resume
  const u = (field) => (e) => updatePersonalInfo(field, e.target.value)
  const fileInputRef = useRef(null)

  async function handlePhoto(e) {
    const file = e.target.files?.[0]
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.fileName) {
        updatePersonalInfo('photo', data.fileName)
      } else {
        console.error('Upload error:', data.error)
      }
    } catch (err) {
      console.error('Upload failed:', err)
    }

    // Reset so same file can be re-selected
    e.target.value = ''
  }

  const photoSrc = personalInfo.photo
    ? (personalInfo.photo.startsWith('http') || personalInfo.photo.startsWith('data:') || personalInfo.photo.startsWith('/')
        ? personalInfo.photo
        : `/uploads/${personalInfo.photo}`)
    : null

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

      {/* ── Photo Upload ── */}
      {/* Single hidden input — label triggers it on all devices */}
      <input
        ref={fileInputRef}
        id="photo-file-input"
        type="file"
        accept="image/*"
        onChange={handlePhoto}
        style={{ display: 'none' }}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        {/* Avatar circle — clicking opens file picker */}
        <label
          htmlFor="photo-file-input"
          style={{
            width: 80, height: 80, borderRadius: '50%', flexShrink: 0, cursor: 'pointer',
            background: photoSrc ? 'transparent' : 'rgba(139,92,246,0.1)',
            border: '2px dashed rgba(139,92,246,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {photoSrc ? (
            <img src={photoSrc} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <Camera size={22} color="#7c3aed" />
          )}
        </label>

        <div>
          <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>Profile Photo</p>
          <p style={{ fontSize: '0.72rem', color: 'var(--text3)', marginBottom: 8 }}>JPG, PNG — shows on resume</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <label
              htmlFor="photo-file-input"
              style={{
                fontSize: '0.75rem', padding: '7px 16px', borderRadius: 8, cursor: 'pointer',
                background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.4)',
                color: '#a78bfa', display: 'inline-block', fontWeight: 600,
              }}
            >
              {photoSrc ? 'Change Photo' : 'Upload Photo'}
            </label>
            {photoSrc && (
              <button
                type="button"
                onClick={() => updatePersonalInfo('photo', '')}
                style={{
                  fontSize: '0.75rem', padding: '7px 12px', borderRadius: 8, cursor: 'pointer',
                  background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)',
                  color: '#f87171', display: 'flex', alignItems: 'center', gap: 4,
                }}
              >
                <X size={12} /> Remove
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Fields ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <Field label="Full Name"  icon={User}      value={personalInfo.name     || ''} onChange={u('name')}     placeholder="Your Name"          span2 />
        <Field label="Job Title"  icon={Briefcase} value={personalInfo.jobTitle || ''} onChange={u('jobTitle')} placeholder="Software Engineer"   span2 />
        <Field label="Email"      icon={Mail}      value={personalInfo.email    || ''} onChange={u('email')}    placeholder="you@example.com"     type="email" />
        <Field label="Phone"      icon={Phone}     value={personalInfo.phone    || ''} onChange={u('phone')}    placeholder="+91 98765 43210"     type="tel" />
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
          <AIAssistButton
            type="summary"
            context={{ name: personalInfo.name, jobTitle: personalInfo.jobTitle }}
            onResult={(text) => updatePersonalInfo('summary', text)}
          />
        </div>
        <textarea
          value={personalInfo.summary || ''}
          onChange={u('summary')}
          placeholder="Write 2-3 sentences about your experience, key skills, and career goals..."
          rows={4}
          className="input-glass"
          style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontSize: '0.85rem', resize: 'vertical', width: '100%' }}
        />
      </div>

    </div>
  )
}
