'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { Plus, Edit, Trash2, Clock, Search, FileText, AlertTriangle, RefreshCw, Eye, X, Download } from 'lucide-react'
import dynamic from 'next/dynamic'
import { exportToPDF } from '@/lib/exportResume'

// Lazy load heavy template map
const ResumePreviewModal = dynamic(() => import('@/components/builder/ResumePreview'), { ssr: false })

function resolvePhoto(photo) {
  if (!photo) return ''
  if (photo.startsWith('http') || photo.startsWith('data:') || photo.startsWith('/')) return photo
  return `/uploads/${photo}`
}

function timeAgo(dateStr) {
  if (!dateStr) return ''
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'Just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  if (days < 7) return `${days}d ago`
  return new Date(dateStr).toLocaleDateString('en-IN')
}

function DeleteModal({ resume, onConfirm, onCancel, loading }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}>
      <motion.div initial={{ opacity: 0, scale: 0.92, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
        style={{ background: 'var(--modal-card)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: 18, padding: '28px', maxWidth: 380, width: '90%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(248,113,113,0.12)', border: '1px solid rgba(248,113,113,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <AlertTriangle size={20} color="#f87171" />
          </div>
          <div>
            <p style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1rem', marginBottom: 2 }}>Delete Resume?</p>
            <p style={{ color: 'var(--text3)', fontSize: '0.78rem' }}>This cannot be undone</p>
          </div>
        </div>
        <p style={{ color: 'var(--text2)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 22, padding: '10px 14px', background: 'var(--card)', borderRadius: 8 }}>
          <span style={{ color: 'var(--text)', fontWeight: 600 }}>&ldquo;{resume?.title}&rdquo;</span> will be permanently deleted.
        </p>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={onCancel} style={{ flex: 1, padding: '10px 0', borderRadius: 10, border: '1px solid var(--border)', background: 'transparent', color: 'var(--text2)', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600 }}>
            Cancel
          </button>
          <button onClick={onConfirm} disabled={loading} style={{ flex: 1, padding: '10px 0', borderRadius: 10, border: 'none', background: loading ? '#7f1d1d' : 'linear-gradient(135deg, #dc2626, #b91c1c)', color: 'white', fontSize: '0.85rem', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 700 }}>
            {loading ? 'Deleting...' : 'Yes, Delete'}
          </button>
        </div>
      </motion.div>
    </div>
  )
}

// Preview Modal — shows full resume
function PreviewModal({ resume, onClose }) {
  const [exporting, setExporting] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  async function handleDownload() {
    setExporting(true)
    try { await exportToPDF('resume-preview', resume.id) }
    catch (e) { console.error(e) }
    finally { setExporting(false) }
  }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', background: 'var(--card)', borderBottom: '1px solid var(--border3)', flexShrink: 0 }}>
        <div>
          <p style={{ color: 'var(--text)', fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>{resume.title}</p>
          <p style={{ color: 'var(--text3)', fontSize: '0.72rem', margin: 0, textTransform: 'capitalize' }}>{resume.template} template</p>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button onClick={handleDownload} disabled={exporting}
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 8, background: 'linear-gradient(135deg, #7C3AED, #3B82F6)', border: 'none', color: 'white', fontSize: '0.78rem', fontWeight: 600, cursor: exporting ? 'not-allowed' : 'pointer', opacity: exporting ? 0.7 : 1 }}>
            <Download size={13} /> {exporting ? 'Exporting...' : 'Download PDF'}
          </button>
          <Link href={`/dashboard/edit/${resume.id}`} style={{ textDecoration: 'none' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 8, background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', color: '#a78bfa', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer' }}>
              <Edit size={13} /> Edit
            </button>
          </Link>
          <button onClick={onClose}
            style={{ width: 34, height: 34, borderRadius: 8, background: 'var(--card2)', border: '1px solid var(--border)', color: 'var(--text2)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Preview content */}
      <div style={{ flex: 1, overflow: 'auto', padding: 16, background: '#d1d5db' }}>
        <ResumePreviewForModal resume={resume} />
      </div>
    </div>
  )
}

// Wrapper to inject resume into store for preview
function ResumePreviewForModal({ resume }) {
  const { useResumeStore } = require('@/store/resumeStore')
  const setResume = useResumeStore(s => s.setResume)

  useEffect(() => {
    const d = resume.data || {}
    setResume({
      id:             resume.id,
      title:          resume.title,
      template:       resume.template,
      themeColor:     resume.themeColor || '#7C3AED',
      fontFamily:     resume.fontFamily || 'Arial, Helvetica, sans-serif',
      personalInfo:   { ...d.personalInfo, photo: resolvePhoto(d.personalInfo?.photo) },
      experience:     d.experience     || [],
      education:      d.education      || [],
      skills:         d.skills         || [],
      projects:       d.projects       || [],
      certifications: d.certifications || [],
      languages:      d.languages      || [],
      achievements:   d.achievements   || [],
      interests:      d.interests      || [],
      achievementsList: d.achievementsList || [],
      activities:       d.activities       || [],
      publications:     d.publications     || [],
      references:       d.references       || [],
      additionalInfo:   d.additionalInfo   || '',
    })
  }, [resume.id, resume.data, resume.template, resume.themeColor, resume.fontFamily, setResume])

  return <ResumePreviewModal />
}

// Simplified Thumbnail Preview - renders directly without dynamic imports
function ScaledThumb({ resume }) {
  const resumeData = resume.data || {}
  const personalInfo = resumeData.personalInfo || {}
  const experiences = resumeData.experience || []
  const educations = resumeData.education || []
  const skills = resumeData.skills || []
  const themeColor = resume.themeColor || '#7C3AED'
  
  const CARD_WIDTH = 260
  const scale = CARD_WIDTH / 794

  return (
    <div style={{ width: '100%', aspectRatio: '210/297', overflow: 'hidden', background: 'white', position: 'relative' }}>
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: 794, 
        transformOrigin: 'top left', 
        transform: `scale(${scale})`,
        pointerEvents: 'none'
      }}>
        <div style={{ width: 794, minHeight: 1123, background: 'white', fontFamily: 'Arial, sans-serif' }}>
          {/* Header Section */}
          <div style={{ 
            padding: '40px 40px 20px 40px', 
            borderBottom: `3px solid ${themeColor}`,
            background: '#fafafa'
          }}>
            <h1 style={{ 
              fontSize: '32px', 
              margin: 0, 
              color: '#333',
              fontWeight: 'bold'
            }}>
              {personalInfo.fullName || resume.title || 'Untitled Resume'}
            </h1>
            {personalInfo.jobTitle && (
              <p style={{ fontSize: '18px', color: '#666', margin: '8px 0 0 0' }}>
                {personalInfo.jobTitle}
              </p>
            )}
            <div style={{ 
              display: 'flex', 
              gap: '15px', 
              marginTop: '15px', 
              fontSize: '12px', 
              color: '#888',
              flexWrap: 'wrap'
            }}>
              {personalInfo.email && <span>📧 {personalInfo.email}</span>}
              {personalInfo.phone && <span>📞 {personalInfo.phone}</span>}
              {personalInfo.location && <span>📍 {personalInfo.location}</span>}
            </div>
          </div>

          {/* Content Section */}
          <div style={{ padding: '30px 40px' }}>
            {/* Experience Section */}
            {experiences.length > 0 && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '20px', 
                  color: themeColor, 
                  borderBottom: `2px solid ${themeColor}30`,
                  paddingBottom: '5px',
                  marginBottom: '15px'
                }}>
                  Work Experience
                </h2>
                {experiences.slice(0, 2).map((exp, idx) => (
                  <div key={idx} style={{ marginBottom: '15px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{exp.position || exp.title}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{exp.company}</div>
                    {exp.startDate && exp.endDate && (
                      <div style={{ fontSize: '11px', color: '#999' }}>
                        {exp.startDate} - {exp.endDate}
                      </div>
                    )}
                    {exp.description && (
                      <div style={{ fontSize: '11px', color: '#777', marginTop: '5px', lineHeight: '1.4' }}>
                        {exp.description.substring(0, 100)}...
                      </div>
                    )}
                  </div>
                ))}
                {experiences.length > 2 && (
                  <div style={{ fontSize: '11px', color: '#999', fontStyle: 'italic' }}>
                    +{experiences.length - 2} more experience(s)
                  </div>
                )}
              </div>
            )}

            {/* Education Section */}
            {educations.length > 0 && (
              <div style={{ marginBottom: '25px' }}>
                <h2 style={{ 
                  fontSize: '20px', 
                  color: themeColor, 
                  borderBottom: `2px solid ${themeColor}30`,
                  paddingBottom: '5px',
                  marginBottom: '15px'
                }}>
                  Education
                </h2>
                {educations.slice(0, 2).map((edu, idx) => (
                  <div key={idx} style={{ marginBottom: '12px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{edu.institution}</div>
                    {edu.startDate && edu.endDate && (
                      <div style={{ fontSize: '11px', color: '#999' }}>
                        {edu.startDate} - {edu.endDate}
                      </div>
                    )}
                  </div>
                ))}
                {educations.length > 2 && (
                  <div style={{ fontSize: '11px', color: '#999', fontStyle: 'italic' }}>
                    +{educations.length - 2} more education(s)
                  </div>
                )}
              </div>
            )}

            {/* Skills Section */}
            {skills.length > 0 && (
              <div>
                <h2 style={{ 
                  fontSize: '20px', 
                  color: themeColor, 
                  borderBottom: `2px solid ${themeColor}30`,
                  paddingBottom: '5px',
                  marginBottom: '15px'
                }}>
                  Skills
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {skills.slice(0, 8).map((skill, idx) => (
                    <span key={idx} style={{ 
                      fontSize: '12px', 
                      background: `${themeColor}15`,
                      color: themeColor,
                      padding: '4px 10px',
                      borderRadius: '4px'
                    }}>
                      {typeof skill === 'string' ? skill : skill.name}
                    </span>
                  ))}
                  {skills.length > 8 && (
                    <span style={{ fontSize: '12px', color: '#999' }}>
                      +{skills.length - 8} more
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ResumeCard({ resume, onDelete, onPreview, index }) {
  const color = resume.themeColor || '#7C3AED'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s', position: 'relative' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}50`; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 8px 32px ${color}18` }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
    >
      {/* Thumbnail — click to preview */}
      <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }} onClick={() => onPreview(resume)}>
        <ScaledThumb resume={resume} />

        {/* Hover overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(2px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, opacity: 0, transition: 'opacity 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = 1}
          onMouseLeave={e => e.currentTarget.style.opacity = 0}
        >
          <button onClick={e => { e.stopPropagation(); onPreview(resume) }}
            style={{ width: '72%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '11px 0', borderRadius: 11, background: 'linear-gradient(135deg, #7C3AED, #3B82F6)', border: 'none', color: 'white', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer' }}>
            <Eye size={14} /> Preview
          </button>
          <Link href={`/dashboard/edit/${resume.id}`} style={{ width: '72%', textDecoration: 'none' }} onClick={e => e.stopPropagation()}>
            <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '11px 0', borderRadius: 11, background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.4)', color: '#a78bfa', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer' }}>
              <Edit size={14} /> Edit
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '12px 14px', borderTop: '1px solid var(--border3)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 10 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.85rem', marginBottom: 3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{resume.title}</p>
            {(resume.data?.personalInfo?.jobTitle || resume.jobTitle) && (
              <p style={{ color: 'var(--text3)', fontSize: '0.72rem', marginBottom: 3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {resume.data?.personalInfo?.jobTitle || resume.jobTitle}
              </p>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />
              <span style={{ fontSize: '0.68rem', color: 'var(--text3)', textTransform: 'capitalize' }}>{resume.template}</span>
              {resume.isDraft && <span style={{ fontSize: '0.62rem', color: '#f59e0b', background: 'rgba(245,158,11,0.1)', padding: '1px 6px', borderRadius: 10 }}>Draft</span>}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
            <Clock size={10} color="var(--text3)" />
            <span style={{ fontSize: '0.65rem', color: 'var(--text3)' }}>{timeAgo(resume.updatedAt || resume.updated_at)}</span>
          </div>
        </div>

        {/* Quick actions */}
        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={() => onPreview(resume)}
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, padding: '7px 0', borderRadius: 8, background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.15)', color: '#a78bfa', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>
            <Eye size={12} /> Preview
          </button>
          <Link href={`/dashboard/edit/${resume.id}`} style={{ flex: 1, textDecoration: 'none' }}>
            <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, padding: '7px 0', borderRadius: 8, background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)', color: '#60a5fa', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>
              <Edit size={12} /> Edit
            </button>
          </Link>
          <button onClick={() => onDelete(resume)}
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, padding: '7px 0', borderRadius: 8, background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.15)', color: '#f87171', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>
            <Trash2 size={12} /> Delete
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function ResumesPage() {
  const [resumes, setResumes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [previewResume, setPreviewResume] = useState(null)

  const fetchResumes = useCallback(async () => {
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/resumes')
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Failed to load resumes'); return }
      // Fetch full data for each resume (for template preview)
      const full = await Promise.all(
        (data.resumes || []).map(async (r) => {
          try {
            const dr = await fetch(`/api/resumes/${r.id}`)
            const dj = await dr.json()
            return { 
              ...r, 
              data: dj.resume?.data || {}, 
              themeColor: dj.resume?.themeColor || r.themeColor || '#7C3AED', 
              fontFamily: dj.resume?.fontFamily || 'Arial, sans-serif'
            }
          } catch (err) {
            console.error(`Failed to fetch resume ${r.id}:`, err)
            return { ...r, data: {} }
          }
        })
      )
      setResumes(full)
    } catch (err) { 
      console.error('Network error:', err)
      setError('Network error. Please try again.') 
    }
    finally { setLoading(false) }
  }, [])

  useEffect(() => { fetchResumes() }, [fetchResumes])

  async function handleDelete() {
    if (!deleteTarget) return
    setDeleteLoading(true)
    try {
      const res = await fetch(`/api/resumes/${deleteTarget.id}`, { method: 'DELETE' })
      if (res.ok) { 
        setResumes(prev => prev.filter(r => r.id !== deleteTarget.id))
        setDeleteTarget(null)
      }
    } catch (e) { console.error('Delete failed:', e) }
    finally { setDeleteLoading(false) }
  }

  const filtered = resumes.filter(r => r.title?.toLowerCase().includes(search.toLowerCase()))

  return (
    <div style={{ padding: '40px 32px', maxWidth: 1200, margin: '0 auto', minHeight: '100vh' }}>
      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      
      {deleteTarget && <DeleteModal resume={deleteTarget} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} loading={deleteLoading} />}
      {previewResume && <PreviewModal resume={previewResume} onClose={() => setPreviewResume(null)} />}

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 900, color: 'var(--text)', marginBottom: 4 }}>My Resumes</h1>
            <p style={{ color: 'var(--text2)', fontSize: '0.875rem' }}>
              {loading ? 'Loading...' : `${filtered.length} resume${filtered.length !== 1 ? 's' : ''} saved`}
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            {!loading && (
              <button onClick={fetchResumes} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '8px 12px', borderRadius: 9, background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text3)', fontSize: '0.75rem', cursor: 'pointer' }} title="Refresh">
                <RefreshCw size={13} />
              </button>
            )}
            <Link href="/dashboard/create" style={{ textDecoration: 'none' }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 12, border: 'none', background: 'linear-gradient(135deg, #7C3AED, #3B82F6)', color: 'white', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}>
                <Plus size={16} /> New Resume
              </button>
            </Link>
          </div>
        </div>

        {/* Search */}
        <div style={{ position: 'relative', marginBottom: 28, maxWidth: 360 }}>
          <Search size={15} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: 'var(--text3)', pointerEvents: 'none' }} />
          <input 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            placeholder="Search resumes..."
            style={{ 
              width: '100%', 
              paddingLeft: 38, 
              paddingRight: 14, 
              paddingTop: 10, 
              paddingBottom: 10, 
              borderRadius: 10, 
              fontSize: '0.875rem', 
              boxSizing: 'border-box',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              color: 'var(--text)'
            }}
            onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.4)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
        </div>

        {error && (
          <div style={{ padding: '12px 16px', borderRadius: 10, background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', color: '#f87171', fontSize: '0.85rem', marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{error}</span>
            <button onClick={fetchResumes} style={{ color: '#f87171', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem', textDecoration: 'underline' }}>Retry</button>
          </div>
        )}

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>

          {/* New resume card */}
          <Link href="/dashboard/create" style={{ textDecoration: 'none' }}>
            <motion.div whileHover={{ scale: 1.02 }} style={{ background: 'var(--card)', border: '2px dashed rgba(124,58,237,0.25)', borderRadius: 16, aspectRatio: '210/297', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.6)'; e.currentTarget.style.background = 'rgba(124,58,237,0.04)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.25)'; e.currentTarget.style.background = 'var(--card)' }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Plus size={22} color="#a78bfa" />
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: 'var(--text2)', fontWeight: 600, fontSize: '0.85rem', marginBottom: 3 }}>Create New</p>
                <p style={{ color: 'var(--text3)', fontSize: '0.72rem' }}>Start from scratch</p>
              </div>
            </motion.div>
          </Link>

          {/* Loading skeletons */}
          {loading && [...Array(3)].map((_, i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, aspectRatio: '210/297', animation: 'pulse 1.5s ease-in-out infinite' }} />
          ))}

          {/* Resume cards */}
          <AnimatePresence>
            {!loading && filtered.map((resume, i) => (
              <ResumeCard key={resume.id} resume={resume} index={i} onDelete={setDeleteTarget} onPreview={setPreviewResume} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {!loading && !error && resumes.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <FileText size={28} color="#a78bfa" />
            </div>
            <p style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>No resumes yet</p>
            <p style={{ color: 'var(--text3)', fontSize: '0.85rem', marginBottom: 24 }}>Create your first resume to see it here</p>
            <Link href="/dashboard/create" style={{ textDecoration: 'none' }}>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 24px', borderRadius: 12, border: 'none', background: 'linear-gradient(135deg, #7C3AED, #3B82F6)', color: 'white', fontWeight: 600, cursor: 'pointer' }}>
                <Plus size={14} /> Create Your First Resume
              </button>
            </Link>
          </motion.div>
        )}

        {!loading && !error && resumes.length > 0 && filtered.length === 0 && search && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text3)' }}>
            <Search size={36} style={{ margin: '0 auto 12px', opacity: 0.3 }} />
            <p>No resumes match &ldquo;{search}&rdquo;</p>
          </div>
        )}

      </motion.div>
    </div>
  )
}