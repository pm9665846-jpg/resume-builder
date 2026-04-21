'use client'
import { useState, useEffect, Suspense, lazy } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { useResumeStore } from '@/store/resumeStore'
import PersonalInfoForm from '@/components/builder/PersonalInfoForm'
import ExperienceForm from '@/components/builder/ExperienceForm'
import EducationForm from '@/components/builder/EducationForm'
import SkillsForm from '@/components/builder/SkillsForm'
import ProjectsForm from '@/components/builder/ProjectsForm'
import CertificationsForm from '@/components/builder/CertificationsForm'
import LanguagesForm from '@/components/builder/LanguagesForm'
import InterestsForm from '@/components/builder/InterestsForm'
import TemplateSelector from '@/components/builder/TemplateSelector'
import dynamic from 'next/dynamic'
import { Save, Download, FileText, User, Briefcase, GraduationCap, Code2, Palette, Eye, EyeOff, Zap, CheckCircle, Award, Languages, Heart } from 'lucide-react'
import { exportToPDF } from '@/lib/exportResume'

// Lazy load ResumePreview — contains 200+ templates, too heavy for mobile initial load
const ResumePreview = dynamic(() => import('@/components/builder/ResumePreview'), {
  ssr: false,
  loading: () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text3)', fontSize: '0.85rem' }}>
      Loading preview...
    </div>
  ),
})

const sections = [
  { id: 'personal',       label: 'Personal',   icon: User,          component: PersonalInfoForm },
  { id: 'experience',     label: 'Experience', icon: Briefcase,     component: ExperienceForm },
  { id: 'education',      label: 'Education',  icon: GraduationCap, component: EducationForm },
  { id: 'skills',         label: 'Skills',     icon: Zap,           component: SkillsForm },
  { id: 'projects',       label: 'Projects',   icon: Code2,         component: ProjectsForm },
  { id: 'certifications', label: 'Certs',      icon: Award,         component: CertificationsForm },
  { id: 'languages',      label: 'Languages',  icon: Languages,     component: LanguagesForm },
  { id: 'interests',      label: 'Interests',  icon: Heart,         component: InterestsForm },
  { id: 'design',         label: 'Design',     icon: Palette,       component: TemplateSelector },
]

const templateColors = {
  modern: '#8b5cf6', professional: '#1e3a5f', tech: '#00d4aa',
  elegant: '#b8860b', creative: '#ec4899', bold: '#f97316',
  executive: '#06b6d4', compact: '#2563eb', minimal: '#3b82f6',
}

function BuilderContent() {
  const searchParams = useSearchParams()
  const templateParam = searchParams.get('template') || 'modern'

  const { resume, isDirty, isSaving, lastSaved, setIsSaving, setLastSaved, resetResume, updateTemplate, updateThemeColor } = useResumeStore()
  const setResumeId = useResumeStore(s => s.setResumeId)
  const [activeSection, setActiveSection] = useState('personal')
  const [showPreview, setShowPreview] = useState(false)
  const [exportLoading, setExportLoading] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [isMobile, setIsMobile] = useState(true) // default true, updated after mount

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Initialize with the template from URL
  useEffect(() => {
    const color = templateColors[templateParam] || '#8b5cf6'
    resetResume({ template: templateParam, themeColor: color })
  }, [templateParam]) // eslint-disable-line

  // Auto-save — create on first change, update on subsequent changes
  useEffect(() => {
    if (!isDirty) return
    const timer = setTimeout(async () => {
      setIsSaving(true)
      try {
        const payload = {
          title:      resume.title || 'Untitled Resume',
          template:   resume.template,
          themeColor: resume.themeColor,
          fontFamily: resume.fontFamily || 'Arial, Helvetica, sans-serif',
          data: {
            personalInfo:   resume.personalInfo,
            experience:     resume.experience,
            education:      resume.education,
            skills:         resume.skills,
            projects:       resume.projects,
            certifications: resume.certifications,
            languages:      resume.languages,
            achievements:   resume.achievements,
            interests:      resume.interests || [],
          },
        }
        if (!resume.id) {
          const res = await fetch('/api/resumes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          })
          const json = await res.json()
          if (json.id) {
            useResumeStore.getState().setResumeId(json.id)
          }
        } else {
          await fetch(`/api/resumes/${resume.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          })
        }
        setLastSaved(new Date())
      } catch (e) { console.error(e) } finally {
        setIsSaving(false)
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [resume, isDirty, setIsSaving, setLastSaved])

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component

  async function handleExportPDF() {
    setExportLoading(true)
    try {
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
        fontFamily: resume.fontFamily || 'Arial, Helvetica, sans-serif',
        data: {
          personalInfo:   resume.personalInfo,
          experience:     resume.experience,
          education:      resume.education,
          skills:         resume.skills,
          projects:       resume.projects,
          certifications: resume.certifications,
          languages:      resume.languages,
          achievements:   resume.achievements,
          interests:      resume.interests || [],
        },
      }

      if (resume.id) {
        await fetch(`/api/resumes/${resume.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } else {
        const res = await fetch('/api/resumes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        const json = await res.json()
        if (json.id) {
          setResumeId(json.id)
        }
      }

      setLastSaved(new Date())
      setSaveSuccess(true)
      setTimeout(() => setSaveSuccess(false), 2500)
    } catch (err) {
      console.error('Save failed:', err)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--bg)' }}>

      {/* ===== LEFT PANEL — full width on mobile ===== */}
      <div style={{
        width: isMobile ? '100%' : 400,
        minWidth: isMobile ? 0 : 300,
        maxWidth: isMobile ? '100%' : 440,
        display: 'flex', flexDirection: 'column',
        borderRight: isMobile ? 'none' : '1px solid var(--border3)',
        overflow: 'hidden', flexShrink: 0,
      }}>

        {/* Header */}
        <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0, background: 'var(--card)' }}>
          <div>
            <h1 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '0.9rem', marginBottom: 2 }}>Resume Builder</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', display: 'inline-block', background: isSaving ? '#facc15' : saveSuccess ? '#4ade80' : lastSaved ? '#4ade80' : '#475569' }} />
              <span style={{ fontSize: '0.65rem', color: 'var(--text3)' }}>
                {isSaving ? 'Saving...' : saveSuccess ? 'Saved!' : lastSaved ? `Saved ${lastSaved.toLocaleTimeString()}` : 'Auto-save on'}
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ padding: '3px 8px', borderRadius: 6, background: `${resume.themeColor}20`, border: `1px solid ${resume.themeColor}40`, fontSize: '0.65rem', color: resume.themeColor, fontWeight: 600, textTransform: 'capitalize' }}>
              {resume.template}
            </div>
            {/* Preview button — on mobile opens modal, on desktop toggles panel */}
            <button
              onClick={() => setShowPreview(!showPreview)}
              style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '5px 10px', borderRadius: 8, background: showPreview ? 'rgba(139,92,246,0.15)' : 'var(--card2)', border: `1px solid ${showPreview ? 'rgba(139,92,246,0.4)' : 'var(--border)'}`, color: showPreview ? '#a78bfa' : 'var(--text2)', fontSize: '0.7rem', cursor: 'pointer' }}
            >
              <Eye size={12} /> Preview
            </button>
          </div>
        </div>

        {/* Section tabs */}
        <div style={{ display: 'flex', gap: 2, padding: '6px 12px', borderBottom: '1px solid var(--border3)', overflowX: 'auto', flexShrink: 0, background: 'var(--bg)' }}>
          {sections.map(s => {
            const active = activeSection === s.id
            return (
              <button key={s.id} onClick={() => setActiveSection(s.id)}
                style={{ display: 'flex', alignItems: 'center', gap: 3, padding: isMobile ? '5px 8px' : '5px 10px', borderRadius: 7, fontSize: isMobile ? '0.65rem' : '0.7rem', fontWeight: 500, whiteSpace: 'nowrap', cursor: 'pointer', border: 'none', transition: 'all 0.15s', background: active ? 'rgba(139,92,246,0.15)' : 'transparent', color: active ? '#a78bfa' : 'var(--text3)', outline: active ? '1px solid rgba(139,92,246,0.3)' : 'none' }}
              >
                <s.icon size={10} />
                {s.label}
              </button>
            )
          })}
        </div>

        {/* Form content */}
        <div style={{ flex: 1, overflowY: activeSection === 'design' ? 'hidden' : 'auto', padding: isMobile ? 14 : 18, display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
          <AnimatePresence mode="wait">
            <motion.div key={activeSection} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.15 }} style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              {ActiveComponent && <ActiveComponent />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Action bar */}
        <div style={{ padding: '10px 12px', borderTop: '1px solid var(--border3)', display: 'flex', gap: 8, flexShrink: 0, background: 'var(--card)' }}>
          <button onClick={handleExportPDF} disabled={exportLoading}
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, padding: '10px 0', borderRadius: 9, fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', border: '1px solid var(--border)', background: 'var(--card2)', color: 'var(--text)', transition: 'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--card3)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--card2)'}
          >
            <FileText size={13} /> {isMobile ? 'PDF' : 'Export PDF'}
          </button>
          <button onClick={handleSave}
            style={{ flex: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, padding: '10px 0', borderRadius: 9, fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer', border: 'none', background: saveSuccess ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: 'white', transition: 'all 0.3s' }}>
            {saveSuccess ? <CheckCircle size={13} /> : <Save size={13} />}
            {saveSuccess ? 'Saved!' : 'Save'}
          </button>
        </div>
      </div>

      {/* ===== DESKTOP: RIGHT PREVIEW PANEL ===== */}
      {!isMobile && showPreview && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--border3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0, background: 'var(--card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Eye size={14} color="#a78bfa" />
              <span style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.85rem' }}>Live Preview</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text3)', background: 'var(--card2)', padding: '2px 8px', borderRadius: 4 }}>A4</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text3)', textTransform: 'capitalize' }}>{resume.template} template</span>
              <div style={{ width: 14, height: 14, borderRadius: '50%', background: resume.themeColor, border: '2px solid var(--border2)', cursor: 'pointer' }} onClick={() => setActiveSection('design')} title="Change theme" />
              <button onClick={handleExportPDF} disabled={exportLoading} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 12px', borderRadius: 8, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', border: 'none', color: 'white', fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer' }}>
                <Download size={12} /> Download PDF
              </button>
            </div>
          </div>
          <div style={{ flex: 1, overflow: 'hidden', padding: 16, background: 'var(--bg2)' }}>
            <ResumePreview />
          </div>
        </div>
      )}

      {/* ===== MOBILE: PREVIEW MODAL ===== */}
      {isMobile && showPreview && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
          {/* Modal header */}
          <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--card)', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Eye size={14} color="#a78bfa" />
              <span style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.85rem' }}>Preview</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button onClick={handleExportPDF} disabled={exportLoading}
                style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 12px', borderRadius: 8, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', border: 'none', color: 'white', fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer' }}>
                <Download size={12} /> PDF
              </button>
              <button onClick={() => setShowPreview(false)}
                style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 12px', borderRadius: 8, background: 'var(--card2)', border: '1px solid var(--border)', color: 'var(--text2)', fontSize: '0.72rem', cursor: 'pointer' }}>
                <EyeOff size={12} /> Close
              </button>
            </div>
          </div>
          {/* Preview content */}
          <div style={{ flex: 1, overflow: 'auto', padding: 12, background: 'var(--bg2)' }}>
            <Suspense fallback={<div style={{ color: 'var(--text3)', textAlign: 'center', padding: 40 }}>Loading...</div>}>
              <ResumePreview />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  )
}

export default function CreateResumePage() {
  return (
    <Suspense fallback={
      <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
        <div style={{ color: 'var(--text2)' }}>Loading builder...</div>
      </div>
    }>
      <BuilderContent />
    </Suspense>
  )
}
