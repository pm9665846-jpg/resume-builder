'use client'
import { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'
import { useResumeStore } from '@/store/resumeStore'
import PersonalInfoForm from '@/components/builder/PersonalInfoForm'
import ExperienceForm from '@/components/builder/ExperienceForm'
import EducationForm from '@/components/builder/EducationForm'
import SkillsForm from '@/components/builder/SkillsForm'
import ProjectsForm from '@/components/builder/ProjectsForm'
import CertificationsForm from '@/components/builder/CertificationsForm'
import LanguagesForm from '@/components/builder/LanguagesForm'
import TemplateSelector from '@/components/builder/TemplateSelector'
import ResumePreview from '@/components/builder/ResumePreview'
import { Save, Download, FileText, User, Briefcase, GraduationCap, Code2, Palette, Eye, EyeOff, Zap, CheckCircle, Award, Languages, ArrowLeft } from 'lucide-react'
import { exportToPDF } from '@/lib/exportResume'
import Link from 'next/link'

const sections = [
  { id: 'personal',       label: 'Personal',   icon: User,          component: PersonalInfoForm },
  { id: 'experience',     label: 'Experience', icon: Briefcase,     component: ExperienceForm },
  { id: 'education',      label: 'Education',  icon: GraduationCap, component: EducationForm },
  { id: 'skills',         label: 'Skills',     icon: Zap,           component: SkillsForm },
  { id: 'projects',       label: 'Projects',   icon: Code2,         component: ProjectsForm },
  { id: 'certifications', label: 'Certs',      icon: Award,         component: CertificationsForm },
  { id: 'languages',      label: 'Languages',  icon: Languages,     component: LanguagesForm },
  { id: 'design',         label: 'Design',     icon: Palette,       component: TemplateSelector },
]

export default function EditResumePage() {
  const params = useParams()
  const router = useRouter()
  const { resume, setResume, isDirty, isSaving, lastSaved, setIsSaving, setLastSaved } = useResumeStore()
  const [activeSection, setActiveSection] = useState('personal')
  const [showPreview, setShowPreview] = useState(true)
  const [exportLoading, setExportLoading] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Load resume data
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/resumes/${params.id}`)
        if (!res.ok) { setError('Resume not found'); setLoading(false); return }
        const { resume: r } = await res.json()
        // Restore full resume into store — spread data fields at top level
        setResume({
          id:             r.id,
          title:          r.title,
          template:       r.template,
          themeColor:     r.themeColor,
          fontFamily:     r.fontFamily || r.data?.fontFamily || 'Arial, Helvetica, sans-serif',
          personalInfo:   r.data?.personalInfo   || {},
          experience:     r.data?.experience     || [],
          education:      r.data?.education      || [],
          skills:         r.data?.skills         || [],
          projects:       r.data?.projects       || [],
          certifications: r.data?.certifications || [],
          languages:      r.data?.languages      || [],
          achievements:   r.data?.achievements   || [],
        })
        setLoading(false)
      } catch {
        setError('Failed to load resume')
        setLoading(false)
      }
    }
    load()
  }, [params.id]) // eslint-disable-line

  // Auto-save
  useEffect(() => {
    if (!isDirty || !resume.id) return
    const timer = setTimeout(async () => {
      setIsSaving(true)
      try {
        await fetch(`/api/resumes/${resume.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title:      resume.title || 'Untitled Resume',
            template:   resume.template,
            themeColor: resume.themeColor,
            fontFamily: resume.fontFamily,
            data: {
              personalInfo:   resume.personalInfo,
              experience:     resume.experience,
              education:      resume.education,
              skills:         resume.skills,
              projects:       resume.projects,
              certifications: resume.certifications,
              languages:      resume.languages,
              achievements:   resume.achievements,
            },
          }),
        })
        setLastSaved(new Date())
      } catch (e) { console.error(e) } finally { setIsSaving(false) }
    }, 2000)
    return () => clearTimeout(timer)
  }, [resume, isDirty, setIsSaving, setLastSaved])

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component

  async function handleExportPDF() {
    setExportLoading(true)
    try {
      // Small delay to let the loading state render first
      await new Promise(r => setTimeout(r, 100))
      await exportToPDF('resume-preview')
    } catch (e) {
      console.error('PDF export failed:', e)
    } finally {
      setExportLoading(false)
    }
  }

  async function handleSave() {
    setIsSaving(true)
    try {
      const payload = {
        title:      resume.title || 'Untitled Resume',
        template:   resume.template,
        themeColor: resume.themeColor,
        fontFamily: resume.fontFamily,
        data: {
          personalInfo:   resume.personalInfo,
          experience:     resume.experience,
          education:      resume.education,
          skills:         resume.skills,
          projects:       resume.projects,
          certifications: resume.certifications,
          languages:      resume.languages,
          achievements:   resume.achievements,
        },
      }
      await fetch(`/api/resumes/${resume.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      setLastSaved(new Date())
      setSaveSuccess(true)
      setTimeout(() => setSaveSuccess(false), 2500)
    } catch (err) { console.error(err) } finally { setIsSaving(false) }
  }

  if (loading) return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', background: '#050508' }}>
      <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Loading resume...</div>
    </div>
  )

  if (error) return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', background: '#050508', flexDirection: 'column', gap: 16 }}>
      <p style={{ color: '#f87171' }}>{error}</p>
      <Link href="/dashboard/resumes" style={{ color: '#a78bfa', fontSize: '0.85rem' }}>← Back to resumes</Link>
    </div>
  )

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#050508' }}>
      {/* LEFT PANEL */}
      <div style={{ width: 400, minWidth: 300, maxWidth: 440, display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0 }}>
        {/* Header */}
        <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0, background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Link href="/dashboard/resumes" style={{ color: '#64748b', display: 'flex', alignItems: 'center' }}>
              <ArrowLeft size={16} />
            </Link>
            <div>
              <h1 style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem', marginBottom: 3 }}>{resume.title || 'Edit Resume'}</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', display: 'inline-block', background: isSaving ? '#facc15' : saveSuccess ? '#4ade80' : lastSaved ? '#4ade80' : '#475569' }} />
                <span style={{ fontSize: '0.68rem', color: '#64748b' }}>
                  {isSaving ? 'Saving...' : saveSuccess ? 'Saved!' : lastSaved ? `Saved ${lastSaved.toLocaleTimeString()}` : 'Auto-save on'}
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ padding: '4px 10px', borderRadius: 6, background: `${resume.themeColor}20`, border: `1px solid ${resume.themeColor}40`, fontSize: '0.68rem', color: resume.themeColor, fontWeight: 600, textTransform: 'capitalize' }}>
              {resume.template}
            </div>
            <button onClick={() => setShowPreview(!showPreview)} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 10px', borderRadius: 8, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', fontSize: '0.7rem', cursor: 'pointer' }}>
              {showPreview ? <EyeOff size={12} /> : <Eye size={12} />}
              {showPreview ? 'Hide' : 'Preview'}
            </button>
          </div>
        </div>

        {/* Section tabs */}
        <div style={{ display: 'flex', gap: 3, padding: '8px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto', flexShrink: 0 }}>
          {sections.map(s => {
            const active = activeSection === s.id
            return (
              <button key={s.id} onClick={() => setActiveSection(s.id)} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '5px 10px', borderRadius: 7, fontSize: '0.7rem', fontWeight: 500, whiteSpace: 'nowrap', cursor: 'pointer', border: 'none', transition: 'all 0.15s', background: active ? 'rgba(139,92,246,0.2)' : 'transparent', color: active ? '#a78bfa' : '#64748b', outline: active ? '1px solid rgba(139,92,246,0.3)' : 'none' }}>
                <s.icon size={11} />{s.label}
              </button>
            )
          })}
        </div>

        {/* Form */}
        <div style={{ flex: 1, overflowY: activeSection === 'design' ? 'hidden' : 'auto', padding: 18, display: 'flex', flexDirection: 'column' }}>
          <AnimatePresence mode="wait">
            <motion.div key={activeSection} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.15 }} style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              {ActiveComponent && <ActiveComponent />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Action bar */}
        <div style={{ padding: '12px 14px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 8, flexShrink: 0, background: 'rgba(255,255,255,0.02)' }}>
          <button onClick={handleExportPDF} disabled={exportLoading} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, padding: '9px 0', borderRadius: 9, fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', transition: 'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
          >
            <FileText size={13} /> PDF
          </button>
          <button onClick={handleSave} style={{ flex: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, padding: '9px 0', borderRadius: 9, fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer', border: 'none', background: saveSuccess ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: 'white', transition: 'all 0.3s' }}>
            {saveSuccess ? <CheckCircle size={13} /> : <Save size={13} />}
            {saveSuccess ? 'Saved!' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* RIGHT PREVIEW */}
      {showPreview && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0, background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Eye size={14} color="#a78bfa" />
              <span style={{ color: 'white', fontWeight: 600, fontSize: '0.85rem' }}>Live Preview</span>
              <span style={{ fontSize: '0.7rem', color: '#475569', background: 'rgba(255,255,255,0.04)', padding: '2px 8px', borderRadius: 4 }}>A4</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'capitalize' }}>{resume.template} template</span>
              <div style={{ width: 14, height: 14, borderRadius: '50%', background: resume.themeColor, border: '2px solid rgba(255,255,255,0.2)', cursor: 'pointer' }} onClick={() => setActiveSection('design')} />
              <button onClick={handleExportPDF} disabled={exportLoading} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 12px', borderRadius: 8, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', border: 'none', color: 'white', fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer' }}>
                <Download size={12} /> Download PDF
              </button>
            </div>
          </div>
          <div style={{ flex: 1, overflow: 'hidden', padding: 16 }}>
            <ResumePreview />
          </div>
        </div>
      )}
    </div>
  )
}
