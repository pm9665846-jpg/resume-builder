'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
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
  { id: 'modern',       name: 'Modern',       tag: 'Most Popular', color: '#8b5cf6', Component: ModernTemplate },
  { id: 'professional', name: 'Professional', tag: 'Corporate',    color: '#1e3a5f', Component: ProfessionalTemplate },
  { id: 'tech',         name: 'Tech',         tag: 'Developer',    color: '#00d4aa', Component: TechTemplate },
  { id: 'neon',         name: 'Neon Dark',    tag: '✨ New',       color: '#00ff88', Component: NeonTemplate },
  { id: 'split',        name: 'Split',        tag: '✨ New',       color: '#6366f1', Component: SplitTemplate },
  { id: 'infographic',  name: 'Infographic',  tag: '✨ New',       color: '#8b5cf6', Component: InfographicTemplate },
  { id: 'timeline',     name: 'Timeline',     tag: '✨ New',       color: '#0ea5e9', Component: TimelineTemplate },
  { id: 'elegant',      name: 'Elegant',      tag: 'Luxury',       color: '#b8860b', Component: ElegantTemplate },
  { id: 'creative',     name: 'Creative',     tag: 'Artistic',     color: '#ec4899', Component: CreativeTemplate },
  { id: 'bold',         name: 'Bold',         tag: 'High Impact',  color: '#f97316', Component: BoldTemplate },
  { id: 'executive',    name: 'Executive',    tag: 'Premium',      color: '#06b6d4', Component: ExecutiveTemplate },
  { id: 'compact',      name: 'Compact',      tag: 'ATS-Friendly', color: '#2563eb', Component: CompactTemplate },
]

const sampleResume = {
  personalInfo: {
    name: 'Prachi Mishra',
    email: 'prachi@email.com',
    phone: '+91 98765 43210',
    location: 'Mumbai, India',
    website: 'prachi.dev',
    linkedin: 'linkedin.com/in/prachi',
    summary: 'Full-stack developer with 3+ years building scalable web applications. Passionate about clean code and great UX.',
  },
  experience: [
    { id: '1', role: 'Software Engineer', company: 'Google', startDate: '2022-01', endDate: '', current: true, description: '• Built microservices handling 10M+ requests/day\n• Led team of 4 engineers' },
    { id: '2', role: 'Frontend Developer', company: 'Startup Inc', startDate: '2020-06', endDate: '2021-12', current: false, description: '• Developed React dashboard used by 50K users' },
  ],
  education: [
    { id: '1', degree: 'B.Tech Computer Science', school: 'IIT Bombay', startDate: '2016-07', endDate: '2020-05', gpa: '9.1' },
  ],
  skills: [
    { id: '1', name: 'React', level: 90 },
    { id: '2', name: 'Node.js', level: 85 },
    { id: '3', name: 'TypeScript', level: 80 },
    { id: '4', name: 'Python', level: 75 },
    { id: '5', name: 'AWS', level: 70 },
    { id: '6', name: 'Docker', level: 72 },
  ],
  projects: [
    { id: '1', name: 'Resume Maker', tech: 'Next.js, MySQL', link: 'github.com/prachi/Resume Maker', description: 'AI-powered resume builder with live preview' },
  ],
}

function TemplateThumbnail({ template, active }) {
  const { Component } = template
  const resumeData = { ...sampleResume, themeColor: template.color, template: template.id }
  const CARD_W = 220
  const CARD_H = 293
  const RENDER_W = 794
  const scale = CARD_W / RENDER_W

  return (
    <div style={{
      width: CARD_W, height: CARD_H,
      borderRadius: 12, overflow: 'hidden',
      border: active ? `2px solid ${template.color}` : '2px solid rgba(255,255,255,0.1)',
      boxShadow: active ? `0 0 28px ${template.color}60, 0 8px 32px rgba(0,0,0,0.4)` : '0 4px 20px rgba(0,0,0,0.3)',
      transition: 'all 0.3s', position: 'relative', background: 'white', cursor: 'pointer',
    }}>
      <div style={{ width: RENDER_W, height: CARD_H / scale, transform: `scale(${scale})`, transformOrigin: 'top left', pointerEvents: 'none', userSelect: 'none' }}>
        <Component resume={resumeData} />
      </div>
      {active && (
        <>
          <div style={{ position: 'absolute', inset: 0, background: `${template.color}10`, borderRadius: 10, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 8, right: 8, background: template.color, borderRadius: '50%', width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 10px ${template.color}80` }}>
            <Check size={12} color="white" />
          </div>
        </>
      )}
    </div>
  )
}

export default function Templates() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const router = useRouter()

  function handleUseTemplate(templateId) {
    // Store selected template in sessionStorage so register page can read it
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('selectedTemplate', templateId)
      sessionStorage.setItem('selectedTemplateColor', templates.find(t => t.id === templateId)?.color || '#8b5cf6')
    }
    router.push(`/register?template=${templateId}`)
  }

  return (
    <section id="templates" style={{ width: '100%', padding: '80px 0', background: '#050508' }}>
      <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 999, padding: '6px 14px', fontSize: '0.75rem', color: '#a78bfa', marginBottom: 16 }}>
            12 Professional Templates
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
            <span style={{ color: 'white' }}>Templates that </span>
            <span className="gradient-text-pink">stand out</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: 500, margin: '0 auto' }}>
            Click any template to start building your resume with that design.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 28, marginBottom: 48, justifyItems: 'center' }}>
          {templates.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 }}
              onClick={() => setActive(i)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, cursor: 'pointer', transform: active === i ? 'scale(1.03)' : 'scale(1)', transition: 'transform 0.3s' }}
            >
              <TemplateThumbnail template={t} active={active === i} />
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: active === i ? 'white' : '#94a3b8', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }}>{t.name}</p>
                <span style={{ display: 'inline-block', marginTop: 4, fontSize: '0.7rem', padding: '2px 10px', borderRadius: 999, background: `${t.color}20`, color: t.color, border: `1px solid ${t.color}30` }}>
                  {t.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          style={{ textAlign: 'center' }}
        >
          <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: 20 }}>
            Selected: <span style={{ color: templates[active].color, fontWeight: 600 }}>{templates[active].name}</span>
          </p>
          <button
            onClick={() => handleUseTemplate(templates[active].id)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 36px', borderRadius: 12,
              background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
              color: 'white', fontWeight: 700, fontSize: '1rem',
              border: 'none', cursor: 'pointer', transition: 'all 0.3s',
              boxShadow: '0 0 30px rgba(139,92,246,0.3)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(139,92,246,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(139,92,246,0.3)' }}
          >
            Use {templates[active].name} Template <ArrowRight size={18} />
          </button>
          <p style={{ color: '#475569', fontSize: '0.8rem', marginTop: 12 }}>
            Free account required — takes 30 seconds
          </p>
        </motion.div>
      </div>
    </section>
  )
}
