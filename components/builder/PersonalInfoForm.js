'use client'
import { useRef } from 'react'
import { useResumeStore } from '@/store/resumeStore'
import AIAssistButton from '@/components/ui/AIAssistButton'
import { User, Mail, Phone, MapPin, Globe, Link2, Briefcase, GitBranch, Camera, X } from 'lucide-react'

function Field({ label, icon: Icon, value, onChange, placeholder, type = 'text', textarea, span2 }) {
  return (
    <div style={{ gridColumn: span2 ? 'span 2' : 'span 1' }}>
      <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>{label}</label>
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
  const fileRef = useRef(null)

  async function handlePhoto(e) {
    const file = e.target.files?.[0]
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    const res = await fetch('/api/upload', { method: 'POST', body: formData })
    const data = await res.json()

    if (data.fileName) {
      updatePersonalInfo('photo', data.fileName)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

      {/* Photo Upload */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div
          onClick={() => fileRef.current?.click()}
          style={{
            width: 130, height: 130, borderRadius: '50%', flexShrink: 0, cursor: 'pointer',
            background: personalInfo.photo ? 'transparent' : 'rgba(139,92,246,0.1)',
            border: '2px dashed rgba(139,92,246,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden', position: 'relative', transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.8)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'}
        >
          {personalInfo.photo ? (
            <img src={personalInfo.photo.startsWith('http') || personalInfo.photo.startsWith('data:') || personalInfo.photo.startsWith('/') ? personalInfo.photo : `/uploads/${personalInfo.photo}`} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <Camera size={22} color="#7c3aed" />
          )}
        </div>
        <div>
          <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#e2e8f0', marginBottom: 4 }}>Profile Photo</p>
          <p style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: 8 }}>JPG, PNG — shows on resume</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={() => fileRef.current?.click()}
              style={{
                fontSize: '0.72rem', padding: '5px 12px', borderRadius: 7, cursor: 'pointer',
                background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.4)', color: '#a78bfa',
              }}
            >
              {personalInfo.photo ? 'Change' : 'Upload'}
            </button>
            {personalInfo.photo && (
              <button
                onClick={() => updatePersonalInfo('photo', '')}
                style={{
                  fontSize: '0.72rem', padding: '5px 10px', borderRadius: 7, cursor: 'pointer',
                  background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', color: '#f87171',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}
              >
                <X size={11} /> Remove
              </button>
            )}
          </div>
          <input ref={fileRef} type="file" accept="image/*" onChange={handlePhoto} style={{ display: 'none' }} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <Field label="Full Name" icon={User} value={personalInfo.name || ''} onChange={u('name')} placeholder="xyz" span2 />
        <Field label="Job Title" icon={Briefcase} value={personalInfo.jobTitle || ''} onChange={u('jobTitle')} placeholder="Software Engineer" span2 />
        <Field label="Email" icon={Mail} value={personalInfo.email || ''} onChange={u('email')} placeholder="abc@gmail.com" type="email" />
        <Field label="Phone" icon={Phone} value={personalInfo.phone || ''} onChange={u('phone')} placeholder="+91 98765 43210" type="tel" />
        <Field label="Location" icon={MapPin} value={personalInfo.location || ''} onChange={u('location')} placeholder="Mumbai, India" />
        <Field label="Website" icon={Globe} value={personalInfo.website || ''} onChange={u('website')} placeholder="yoursite.com" />
        <Field label="LinkedIn" icon={Link2} value={personalInfo.linkedin || ''} onChange={u('linkedin')} placeholder="linkedin.com/in/yourname" />
        <Field label="GitHub" icon={GitBranch} value={personalInfo.github || ''} onChange={u('github')} placeholder="github.com/yourname" />
      </div>
      <div style={{ gridColumn: 'span 2' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
          <label style={{ fontSize: '0.68rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Professional Summary</label>
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
