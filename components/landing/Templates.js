'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Check, Sparkles, Star } from 'lucide-react'
import ModernTemplate from '@/components/builder/templates/ModernTemplate'
import ExecutiveTemplate from '@/components/builder/templates/ExecutiveTemplate'
import CreativeTemplate from '@/components/builder/templates/CreativeTemplate'
import ProfessionalTemplate from '@/components/builder/templates/ProfessionalTemplate'
import ElegantTemplate from '@/components/builder/templates/ElegantTemplate'
import TechTemplate from '@/components/builder/templates/TechTemplate'
import CompactTemplate from '@/components/builder/templates/CompactTemplate'
import BoldTemplate from '@/components/builder/templates/BoldTemplate'
import NeonTemplate from '@/components/builder/templates/NeonTemplate'
import SplitTemplate from '@/components/builder/templates/SplitTemplate'
import InfographicTemplate from '@/components/builder/templates/InfographicTemplate'
import TimelineTemplate from '@/components/builder/templates/TimelineTemplate'

const templates = [
  { id: 'modern',       name: 'Modern',       tag: 'Most Popular', color: '#8b5cf6', Component: ModernTemplate,       star: true  },
  { id: 'executive',    name: 'Executive',    tag: 'Premium',      color: '#06b6d4', Component: ExecutiveTemplate,    star: false },
  { id: 'creative',     name: 'Creative',     tag: 'Artistic',     color: '#ec4899', Component: CreativeTemplate,     star: false },
  { id: 'professional', name: 'Professional', tag: 'Corporate',    color: '#1e3a5f', Component: ProfessionalTemplate, star: false },
  { id: 'tech',         name: 'Tech',         tag: 'Developer',    color: '#00d4aa', Component: TechTemplate,         star: false },
  { id: 'neon',         name: 'Neon Dark',    tag: '✨ New',       color: '#00ff88', Component: NeonTemplate,         star: false },
  { id: 'split',        name: 'Split',        tag: '✨ New',       color: '#6366f1', Component: SplitTemplate,        star: false },
  { id: 'infographic',  name: 'Infographic',  tag: '✨ New',       color: '#8b5cf6', Component: InfographicTemplate,  star: false },
  { id: 'timeline',     name: 'Timeline',     tag: '✨ New',       color: '#0ea5e9', Component: TimelineTemplate,     star: false },
  { id: 'elegant',      name: 'Elegant',      tag: 'Luxury',       color: '#b8860b', Component: ElegantTemplate,      star: true  },
  { id: 'bold',         name: 'Bold',         tag: 'High Impact',  color: '#f97316', Component: BoldTemplate,         star: false },
  { id: 'compact',      name: 'Compact',      tag: 'ATS-Friendly', color: '#2563eb', Component: CompactTemplate,      star: false },
]

const sampleResume = {
  personalInfo: {
    name: 'xyz', jobTitle: 'Software Engineer',
    email: 'prachi@email.com', phone: '+91 98765 43210',
    location: 'Mumbai, India', website: 'prachi.dev',
    linkedin: 'linkedin.com/in/prachi',
    summary: 'Full-stack developer with 3+ years building scalable web applications.',
  },
  experience: [
    { id: '1', role: 'Software Engineer', company: 'Google', startDate: '2022-01', endDate: '', current: true, description: '• Built microservices handling 10M+ requests/day' },
    { id: '2', role: 'Frontend Developer', company: 'Startup Inc', startDate: '2020-06', endDate: '2021-12', current: false, description: '• Developed React dashboard used by 50K users' },
  ],
  education: [{ id: '1', degree: 'B.Tech Computer Science', school: 'IIT Bombay', startDate: '2016-07', endDate: '2020-05', gpa: '9.1' }],
  skills: [
    { id: '1', name: 'React', level: 90 }, { id: '2', name: 'Node.js', level: 85 },
    { id: '3', name: 'TypeScript', level: 80 }, { id: '4', name: 'Python', level: 75 },
  ],
  projects: [{ id: '1', name: 'Resume Maker', tech: 'Next.js, MySQL', description: 'AI-powered resume builder with live preview' }],
}

function TemplateThumbnail({ template, active, onClick }) {
  const { Component } = template
  const resumeData = { ...sampleResume, themeColor: template.color, template: template.id }
  const CARD_W = 160
  const CARD_H = 213
  const RENDER_W = 794
  const scale = CARD_W / RENDER_W

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        width: CARD_W, height: CARD_H, borderRadius: 12, overflow: 'hidden', cursor: 'pointer',
        position: 'relative', background: 'white', flexShrink: 0,
        border: active ? `2px solid ${template.color}` : '2px solid var(--border)',
        boxShadow: active ? `0 0 0 3px ${template.color}22, 0 8px 30px rgba(0,0,0,0.2)` : '0 4px 16px rgba(0,0,0,0.12)',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
    >
      <div style={{ width: RENDER_W, height: CARD_H / scale, transform: `scale(${scale})`, transformOrigin: 'top left', pointerEvents: 'none', userSelect: 'none' }}>
        <Component resume={resumeData} />
      </div>

      <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2 }}
        style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)', borderRadius: 10, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 10 }}>
        <span style={{ color: 'white', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Select</span>
      </motion.div>

      {active && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400 }}
          style={{ position: 'absolute', top: 6, right: 6, width: 20, height: 20, borderRadius: '50%', background: template.color, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 10px ${template.color}` }}>
          <Check size={11} color="white" strokeWidth={3} />
        </motion.div>
      )}

      {template.star && (
        <div style={{ position: 'absolute', top: 6, left: 6, display: 'flex', alignItems: 'center', gap: 3, padding: '2px 6px', borderRadius: 999, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.15)' }}>
          <Star size={8} color="#fbbf24" fill="#fbbf24" />
          <span style={{ fontSize: '0.55rem', color: '#fbbf24', fontWeight: 700 }}>TOP</span>
        </div>
      )}
    </motion.div>
  )
}

export default function Templates() {
  const [active, setActive] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const router = useRouter()

  function handleUseTemplate(templateId) {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('selectedTemplate', templateId)
      sessionStorage.setItem('selectedTemplateColor', templates.find(t => t.id === templateId)?.color || '#8b5cf6')
    }
    router.push(`/register?template=${templateId}`)
  }

  const activeTemplate = templates[active]
  const visibleTemplates = showAll ? templates : templates.slice(0, 4)

  return (
    <section id="templates" style={{ width: '100%', padding: '80px 0', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ textAlign: 'center', marginBottom: 48 }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.1 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 20, padding: '7px 18px', borderRadius: 999, background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)' }}>
            <Sparkles size={13} color="#a78bfa" />
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#a78bfa', letterSpacing: '0.04em' }}>12 Professional Templates</span>
          </motion.div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.08, marginBottom: 16, letterSpacing: '-0.02em' }}>
            <span style={{ color: 'var(--text)' }}>Templates that </span>
            <span style={{ background: 'linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>stand out</span>
          </h2>
          <p style={{ color: 'var(--text3)', fontSize: '1rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Every template is crafted to pass ATS systems and impress hiring managers.
          </p>
        </motion.div>

        {/* Template grid — 2 cols mobile, 4 cols desktop */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 28, justifyItems: 'center' }} className="template-grid">
          {visibleTemplates.map((t, i) => (
            <motion.div key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.04 + i * 0.05, duration: 0.5 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, width: '100%', maxWidth: 200 }}
            >
              <TemplateThumbnail template={t} active={active === i} onClick={() => setActive(i)} />
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: active === i ? 'var(--text)' : 'var(--text2)', fontWeight: 600, fontSize: '0.85rem', marginBottom: 3 }}>{t.name}</p>
                <span style={{ fontSize: '0.6rem', fontWeight: 700, padding: '2px 8px', borderRadius: 999, background: active === i ? `${t.color}20` : 'var(--card)', color: active === i ? t.color : 'var(--text3)', border: `1px solid ${active === i ? t.color + '40' : 'var(--border)'}`, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'inline-block' }}>
                  {t.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All button */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <button onClick={() => setShowAll(s => !s)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 28px', borderRadius: 12, background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text2)', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'; e.currentTarget.style.color = '#a78bfa' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)' }}
          >
            {showAll ? 'Show Less ↑' : `View All ${templates.length} Templates →`}
          </button>
        </div>

        {/* CTA */}
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 1, height: 36, background: `linear-gradient(to bottom, transparent, ${activeTemplate.color}60, transparent)`, marginBottom: 20 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18, flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: activeTemplate.color, boxShadow: `0 0 8px ${activeTemplate.color}` }} />
              <span style={{ color: 'var(--text3)', fontSize: '0.875rem' }}>
                Selected: <span style={{ color: activeTemplate.color, fontWeight: 700 }}>{activeTemplate.name}</span>
              </span>
            </div>
            <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              onClick={() => handleUseTemplate(activeTemplate.id)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '13px 32px', borderRadius: 14, background: `linear-gradient(135deg, ${activeTemplate.color}, ${activeTemplate.color}99)`, color: 'white', fontWeight: 700, fontSize: '0.95rem', border: 'none', cursor: 'pointer', boxShadow: `0 0 30px ${activeTemplate.color}40` }}
            >
              Use {activeTemplate.name} Template <ArrowRight size={16} />
            </motion.button>
            <p style={{ color: 'var(--text3)', fontSize: '0.75rem', marginTop: 10 }}>Free to start · No credit card required</p>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
