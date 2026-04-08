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
    name: 'Prachi Mishra', jobTitle: 'Software Engineer',
    email: 'prachi@email.com', phone: '+91 98765 43210',
    location: 'Mumbai, India', website: 'prachi.dev',
    linkedin: 'linkedin.com/in/prachi',
    summary: 'Full-stack developer with 3+ years building scalable web applications. Passionate about clean code and great UX.',
  },
  experience: [
    { id: '1', role: 'Software Engineer', company: 'Google', startDate: '2022-01', endDate: '', current: true, description: '• Built microservices handling 10M+ requests/day\n• Led team of 4 engineers' },
    { id: '2', role: 'Frontend Developer', company: 'Startup Inc', startDate: '2020-06', endDate: '2021-12', current: false, description: '• Developed React dashboard used by 50K users' },
  ],
  education: [{ id: '1', degree: 'B.Tech Computer Science', school: 'IIT Bombay', startDate: '2016-07', endDate: '2020-05', gpa: '9.1' }],
  skills: [
    { id: '1', name: 'React', level: 90 }, { id: '2', name: 'Node.js', level: 85 },
    { id: '3', name: 'TypeScript', level: 80 }, { id: '4', name: 'Python', level: 75 },
    { id: '5', name: 'AWS', level: 70 }, { id: '6', name: 'Docker', level: 72 },
  ],
  projects: [{ id: '1', name: 'Resume Maker', tech: 'Next.js, MySQL', description: 'AI-powered resume builder with live preview' }],
}

function TemplateThumbnail({ template, active, onClick }) {
  const { Component } = template
  const resumeData = { ...sampleResume, themeColor: template.color, template: template.id }
  const CARD_W = 200
  const CARD_H = 267
  const RENDER_W = 794
  const scale = CARD_W / RENDER_W

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        width: CARD_W, height: CARD_H, borderRadius: 14, overflow: 'hidden', cursor: 'pointer',
        position: 'relative', background: 'white', flexShrink: 0,
        border: active ? `2px solid ${template.color}` : '2px solid rgba(255,255,255,0.07)',
        boxShadow: active
          ? `0 0 0 4px ${template.color}22, 0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${template.color}30`
          : '0 8px 30px rgba(0,0,0,0.35)',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Resume render */}
      <div style={{ width: RENDER_W, height: CARD_H / scale, transform: `scale(${scale})`, transformOrigin: 'top left', pointerEvents: 'none', userSelect: 'none' }}>
        <Component resume={resumeData} />
      </div>

      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)', borderRadius: 12, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 14 }}
      >
        <span style={{ color: 'white', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Select
        </span>
      </motion.div>

      {/* Active check */}
      {active && (
        <motion.div
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400 }}
          style={{ position: 'absolute', top: 8, right: 8, width: 24, height: 24, borderRadius: '50%', background: template.color, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 12px ${template.color}` }}
        >
          <Check size={13} color="white" strokeWidth={3} />
        </motion.div>
      )}

      {/* Star badge */}
      {template.star && (
        <div style={{ position: 'absolute', top: 8, left: 8, display: 'flex', alignItems: 'center', gap: 3, padding: '3px 8px', borderRadius: 999, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.15)' }}>
          <Star size={9} color="#fbbf24" fill="#fbbf24" />
          <span style={{ fontSize: '0.6rem', color: '#fbbf24', fontWeight: 700 }}>TOP</span>
        </div>
      )}
    </motion.div>
  )
}

export default function Templates() {
  const [active, setActive] = useState(0)
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

  return (
    <section id="templates" style={{ width: '100%', padding: '100px 0', background: '#050508', position: 'relative', overflow: 'hidden' }}>

      {/* Ambient background glow */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 20, padding: '7px 18px', borderRadius: 999, background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)' }}
          >
            <Sparkles size={13} color="#a78bfa" />
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#a78bfa', letterSpacing: '0.04em' }}>12 Professional Templates</span>
          </motion.div>

          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.08, marginBottom: 18, letterSpacing: '-0.02em' }}>
            <span style={{ color: 'white' }}>Templates that </span>
            <span style={{ background: 'linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              stand out
            </span>
          </h2>

          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Every template is crafted to pass ATS systems and impress hiring managers.
          </p>
        </motion.div>

        {/* Template grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 24, marginBottom: 60, justifyItems: 'center' }}>
          {templates.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}
            >
              <TemplateThumbnail template={t} active={active === i} onClick={() => setActive(i)} />

              {/* Label */}
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: active === i ? 'white' : '#94a3b8', fontWeight: 600, fontSize: '0.9rem', marginBottom: 5, transition: 'color 0.2s' }}>
                  {t.name}
                </p>
                <span style={{
                  display: 'inline-block', fontSize: '0.65rem', fontWeight: 700, padding: '3px 10px', borderRadius: 999,
                  background: active === i ? `${t.color}20` : 'rgba(255,255,255,0.04)',
                  color: active === i ? t.color : '#475569',
                  border: `1px solid ${active === i ? t.color + '40' : 'rgba(255,255,255,0.06)'}`,
                  transition: 'all 0.3s', letterSpacing: '0.04em', textTransform: 'uppercase',
                }}>
                  {t.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}
          >
            {/* Divider line with glow */}
            <div style={{ width: 1, height: 40, background: `linear-gradient(to bottom, transparent, ${activeTemplate.color}60, transparent)`, marginBottom: 28 }} />

            {/* Selected info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: activeTemplate.color, boxShadow: `0 0 10px ${activeTemplate.color}` }} />
              <span style={{ color: '#64748b', fontSize: '0.875rem' }}>
                Selected: <span style={{ color: activeTemplate.color, fontWeight: 700 }}>{activeTemplate.name}</span>
              </span>
              <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: 999, background: `${activeTemplate.color}15`, color: activeTemplate.color, border: `1px solid ${activeTemplate.color}30`, fontWeight: 600 }}>
                {activeTemplate.tag}
              </span>
            </div>

            {/* CTA button */}
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleUseTemplate(activeTemplate.id)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '15px 40px', borderRadius: 14,
                background: `linear-gradient(135deg, ${activeTemplate.color}, ${activeTemplate.color}99)`,
                color: 'white', fontWeight: 700, fontSize: '1rem',
                border: 'none', cursor: 'pointer',
                boxShadow: `0 0 40px ${activeTemplate.color}40, 0 8px 24px rgba(0,0,0,0.3)`,
                letterSpacing: '0.01em',
              }}
            >
              Use {activeTemplate.name} Template
              <ArrowRight size={18} />
            </motion.button>

            <p style={{ color: '#334155', fontSize: '0.78rem', marginTop: 14, letterSpacing: '0.02em' }}>
              Free to start · No credit card required
            </p>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
