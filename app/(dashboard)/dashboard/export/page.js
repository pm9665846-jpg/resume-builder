'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, FileText, File, CheckCircle, Loader2, Search, AlertTriangle, RefreshCw, Package } from 'lucide-react'
import FloatingBackground from '@/components/ui/FloatingBackground'
import { exportToPDF, exportToDOCX } from '@/lib/exportResume'
import { templateMap } from '@/components/builder/ResumePreview'

function timeAgo(dateStr) {
  if (!dateStr) return ''
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'Just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  return days < 7 ? `${days}d ago` : new Date(dateStr).toLocaleDateString('en-IN')
}

function ResumeExportCard({ resume, index }) {
  const [pdfLoading, setPdfLoading] = useState(false)
  const [docxLoading, setDocxLoading] = useState(false)
  const [pdfDone, setPdfDone] = useState(false)
  const [docxDone, setDocxDone] = useState(false)
  const [selected, setSelected] = useState(false)
  const color = resume.theme_color || '#8b5cf6'

  async function handlePDF() {
    setPdfLoading(true)
    try {
      // Render hidden preview, export it
      const containerId = `export-preview-${resume.id}`
      const container = document.getElementById(containerId)
      if (container) {
        const { default: html2canvas } = await import('html2canvas')
        const { default: jsPDF } = await import('jspdf')
        const canvas = await html2canvas(container, { scale: 2, useCORS: true, backgroundColor: '#ffffff' })
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
        pdf.save(`${resume.title || 'resume'}.pdf`)
      }
      setPdfDone(true)
      setTimeout(() => setPdfDone(false), 3000)
    } catch (e) {
      console.error(e)
    } finally {
      setPdfLoading(false)
    }
  }

  async function handleDOCX() {
    setDocxLoading(true)
    try {
      const fullData = resume.data || {}
      await exportToDOCX({ ...fullData, title: resume.title })
      setDocxDone(true)
      setTimeout(() => setDocxDone(false), 3000)
    } catch (e) {
      console.error(e)
    } finally {
      setDocxLoading(false)
    }
  }

  const Template = templateMap[resume.template] || templateMap['modern']
  const resumeData = resume.data || {}

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      style={{
        background: selected ? `${color}08` : 'rgba(255,255,255,0.04)',
        border: `1px solid ${selected ? color + '35' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 16, overflow: 'hidden', transition: 'all 0.2s',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px' }}>
        {/* Checkbox */}
        <button
          onClick={() => setSelected(!selected)}
          style={{
            width: 20, height: 20, borderRadius: 6, flexShrink: 0, cursor: 'pointer',
            border: `2px solid ${selected ? color : 'rgba(255,255,255,0.2)'}`,
            background: selected ? color : 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.15s',
          }}
        >
          {selected && <CheckCircle size={12} color="white" />}
        </button>

        {/* Mini thumbnail */}
        <div style={{ width: 36, height: 44, borderRadius: 6, background: 'white', flexShrink: 0, overflow: 'hidden', position: 'relative' }}>
          <div style={{ transform: 'scale(0.12)', transformOrigin: 'top left', width: '210mm', position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
            <div id={`export-preview-${resume.id}`}>
              <Template resume={{ ...resumeData, template: resume.template, themeColor: resume.theme_color }} />
            </div>
          </div>
        </div>

        {/* Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem', marginBottom: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {resume.title}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />
            <span style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'capitalize' }}>{resume.template}</span>
            <span style={{ fontSize: '0.72rem', color: '#475569' }}>· {timeAgo(resume.updated_at)}</span>
          </div>
        </div>

        {/* Export buttons */}
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          <button
            onClick={handleDOCX}
            disabled={docxLoading}
            title="Export as DOCX"
            style={{
              display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px',
              borderRadius: 9, fontSize: '0.75rem', fontWeight: 600, cursor: docxLoading ? 'not-allowed' : 'pointer',
              border: '1px solid rgba(59,130,246,0.3)',
              background: docxDone ? 'rgba(52,211,153,0.12)' : 'rgba(59,130,246,0.1)',
              color: docxDone ? '#34d399' : '#60a5fa',
              transition: 'all 0.2s',
            }}
          >
            {docxLoading ? <Loader2 size={13} className="animate-spin" /> : docxDone ? <CheckCircle size={13} /> : <File size={13} />}
            {docxDone ? 'Done!' : 'DOCX'}
          </button>
          <button
            onClick={handlePDF}
            disabled={pdfLoading}
            title="Export as PDF"
            style={{
              display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px',
              borderRadius: 9, fontSize: '0.75rem', fontWeight: 600, cursor: pdfLoading ? 'not-allowed' : 'pointer',
              border: 'none',
              background: pdfDone ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
              color: 'white', transition: 'all 0.2s',
              boxShadow: !pdfLoading ? '0 2px 12px rgba(139,92,246,0.25)' : 'none',
            }}
          >
            {pdfLoading ? <Loader2 size={13} className="animate-spin" /> : pdfDone ? <CheckCircle size={13} /> : <Download size={13} />}
            {pdfDone ? 'Saved!' : 'PDF'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function ExportPage() {
  const [resumes, setResumes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [bulkLoading, setBulkLoading] = useState(false)
  const [bulkDone, setBulkDone] = useState(false)
  const [format, setFormat] = useState('pdf')

  const fetchResumes = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/resumes')
      if (!res.ok) { setError('Failed to load resumes'); return }
      const { resumes: list } = await res.json()
      // Fetch full data for each resume
      const full = await Promise.all(
        (list || []).map(async (r) => {
          try {
            const detail = await fetch(`/api/resumes/${r.id}`)
            if (!detail.ok) return r
            const { resume } = await detail.json()
            return { ...r, data: resume.data }
          } catch { return r }
        })
      )
      setResumes(full)
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchResumes() }, [fetchResumes])

  const filtered = resumes.filter(r =>
    r.title?.toLowerCase().includes(search.toLowerCase())
  )

  async function exportAll() {
    setBulkLoading(true)
    try {
      for (const resume of filtered) {
        if (format === 'docx') {
          await exportToDOCX({ ...(resume.data || {}), title: resume.title })
        } else {
          const containerId = `export-preview-${resume.id}`
          const container = document.getElementById(containerId)
          if (container) {
            const { default: html2canvas } = await import('html2canvas')
            const { default: jsPDF } = await import('jspdf')
            const canvas = await html2canvas(container, { scale: 2, useCORS: true, backgroundColor: '#ffffff' })
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
            const pdfWidth = pdf.internal.pageSize.getWidth()
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
            pdf.save(`${resume.title || 'resume'}.pdf`)
          }
        }
        // Small delay between exports
        await new Promise(r => setTimeout(r, 400))
      }
      setBulkDone(true)
      setTimeout(() => setBulkDone(false), 3000)
    } catch (e) {
      console.error(e)
    } finally {
      setBulkLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen" style={{ background: '#050508', padding: '40px 32px' }}>
      <FloatingBackground />
      <div className="relative z-10" style={{ maxWidth: 820, margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 24px rgba(6,182,212,0.35)' }}>
                  <Download size={20} color="white" />
                </div>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'white' }}>Export All</h1>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                Download your resumes as PDF or DOCX
              </p>
            </div>

            {/* Bulk export */}
            {!loading && filtered.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                {/* Format toggle */}
                <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: 3, gap: 3 }}>
                  {['pdf', 'docx'].map(f => (
                    <button
                      key={f}
                      onClick={() => setFormat(f)}
                      style={{
                        padding: '5px 14px', borderRadius: 8, fontSize: '0.75rem', fontWeight: 700,
                        cursor: 'pointer', border: 'none', transition: 'all 0.2s', textTransform: 'uppercase',
                        background: format === f ? (f === 'pdf' ? 'linear-gradient(135deg, #8b5cf6, #3b82f6)' : 'rgba(59,130,246,0.25)') : 'transparent',
                        color: format === f ? 'white' : '#64748b',
                      }}
                    >
                      {f}
                    </button>
                  ))}
                </div>
                <button
                  onClick={exportAll}
                  disabled={bulkLoading}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8, padding: '9px 20px',
                    borderRadius: 11, border: 'none', cursor: bulkLoading ? 'not-allowed' : 'pointer',
                    background: bulkDone ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                    color: 'white', fontWeight: 700, fontSize: '0.85rem', transition: 'all 0.3s',
                    boxShadow: !bulkLoading ? '0 4px 20px rgba(139,92,246,0.3)' : 'none',
                  }}
                >
                  {bulkLoading
                    ? <><Loader2 size={15} className="animate-spin" /> Exporting...</>
                    : bulkDone
                    ? <><CheckCircle size={15} /> All Done!</>
                    : <><Package size={15} /> Export All ({filtered.length})</>
                  }
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Stats bar */}
        {!loading && resumes.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}
          >
            {[
              { label: 'Total Resumes', value: resumes.length, color: '#8b5cf6' },
              { label: 'Ready to Export', value: filtered.length, color: '#06b6d4' },
              { label: 'Formats Available', value: '2 (PDF, DOCX)', color: '#ec4899' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  flex: 1, minWidth: 140, padding: '12px 16px', borderRadius: 12,
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <p style={{ fontSize: '1.3rem', fontWeight: 900, color: stat.color, lineHeight: 1 }}>{stat.value}</p>
                <p style={{ fontSize: '0.72rem', color: '#64748b', marginTop: 4 }}>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Search */}
        <div style={{ position: 'relative', marginBottom: 20 }}>
          <Search size={15} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
          <input
            className="input-glass"
            style={{ paddingLeft: 40, paddingRight: 16, paddingTop: 11, paddingBottom: 11, borderRadius: 12, fontSize: '0.85rem', width: '100%' }}
            placeholder="Search resumes to export..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Error */}
        {error && (
          <div style={{ padding: '12px 16px', borderRadius: 12, background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', color: '#f87171', fontSize: '0.85rem', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <AlertTriangle size={15} />
              {error}
            </div>
            <button onClick={fetchResumes} style={{ color: '#f87171', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.78rem' }}>
              <RefreshCw size={12} /> Retry
            </button>
          </div>
        )}

        {/* Loading skeletons */}
        {loading && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[...Array(4)].map((_, i) => (
              <div key={i} style={{ height: 76, borderRadius: 16, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', animation: 'pulse 1.5s ease-in-out infinite' }} />
            ))}
          </div>
        )}

        {/* Resume list */}
        {!loading && (
          <AnimatePresence>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {filtered.map((resume, i) => (
                <ResumeExportCard key={resume.id} resume={resume} index={i} />
              ))}
            </div>
          </AnimatePresence>
        )}

        {/* Empty state */}
        {!loading && !error && resumes.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Download size={28} color="#06b6d4" />
            </div>
            <p style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>No resumes to export</p>
            <p style={{ color: '#64748b', fontSize: '0.85rem' }}>Create a resume first, then come back to export it</p>
          </motion.div>
        )}

        {/* No search results */}
        {!loading && resumes.length > 0 && filtered.length === 0 && search && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#475569' }}>
            <Search size={36} style={{ margin: '0 auto 12px', opacity: 0.3 }} />
            <p>No resumes match &ldquo;{search}&rdquo;</p>
          </div>
        )}

        {/* Format info */}
        {!loading && resumes.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}
          >
            {[
              { icon: FileText, label: 'PDF Export', desc: 'Pixel-perfect layout, best for job applications. Preserves all template styling.', color: '#8b5cf6' },
              { icon: File, label: 'DOCX Export', desc: 'Editable Word format. Great for recruiters who need to copy-paste your info.', color: '#3b82f6' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px', borderRadius: 14, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${item.color}15`, border: `1px solid ${item.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <item.icon size={16} color={item.color} />
                </div>
                <div>
                  <p style={{ color: 'white', fontWeight: 600, fontSize: '0.85rem', marginBottom: 4 }}>{item.label}</p>
                  <p style={{ color: '#64748b', fontSize: '0.75rem', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
