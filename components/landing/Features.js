'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Wand2, Layout, Download, Eye, Palette, Shield, Zap, Globe, Star, Code, Lock, Heart, Award, Briefcase, FileText, Settings, Users, CheckCircle } from 'lucide-react'

// Icon map — admin panel mein yeh names use karo
const ICON_MAP = {
  Wand2, Layout, Download, Eye, Palette, Shield, Zap, Globe,
  Star, Code, Lock, Heart, Award, Briefcase, FileText, Settings, Users, CheckCircle,
}

// Fallback static features (shown if API fails)
const FALLBACK_FEATURES = [
  { icon: 'Wand2',    title: 'AI-Powered Writing',  description: 'Smart suggestions that tailor your resume to any job description automatically.', color: '#8b5cf6' },
  { icon: 'Layout',   title: 'Premium Templates',   description: '200+ professionally designed templates crafted by top designers.',               color: '#3b82f6' },
  { icon: 'Eye',      title: 'Live Preview',         description: 'See every change in real-time with our split-screen editor.',                  color: '#06b6d4' },
  { icon: 'Download', title: 'One-Click Export',     description: 'Export to PDF or DOCX with perfect formatting, every time.',                  color: '#ec4899' },
  { icon: 'Palette',  title: 'Theme Customizer',     description: 'Personalize colors, fonts, and layouts to match your style.',                 color: '#f59e0b' },
  { icon: 'Shield',   title: 'ATS Optimized',        description: 'Beat applicant tracking systems with our smart formatting engine.',           color: '#10b981' },
  { icon: 'Zap',      title: 'Auto Save',            description: 'Never lose your work. Every keystroke is saved automatically.',               color: '#8b5cf6' },
  { icon: 'Globe',    title: 'Drag & Drop',          description: 'Reorder sections effortlessly with intuitive drag and drop.',                 color: '#3b82f6' },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = ICON_MAP[feature.icon] || Zap

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="card-hover"
      style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', gap: 12, transition: 'border-color 0.3s' }}
      onMouseEnter={e => e.currentTarget.style.borderColor = feature.color + '40'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div style={{ width: 48, height: 48, borderRadius: 12, background: feature.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={22} color={feature.color} />
      </div>
      <h3 style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1rem' }}>{feature.title}</h3>
      <p style={{ color: 'var(--text2)', fontSize: '0.875rem', lineHeight: 1.6 }}>{feature.description || feature.desc}</p>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [features, setFeatures] = useState(FALLBACK_FEATURES)

  useEffect(() => {
    fetch('/api/features')
      .then(r => r.json())
      .then(data => {
        if (data.success && data.features?.length > 0) {
          setFeatures(data.features)
        }
      })
      .catch(() => {}) // keep fallback on error
  }, [])

  return (
    <section id="features" style={{ width: '100%', padding: '80px 0', background: 'var(--section-bg)' }}>
      <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--tag-bg)', border: '1px solid var(--tag-border)', borderRadius: 999, padding: '6px 14px', fontSize: '0.75rem', color: '#a78bfa', marginBottom: 20 }}>
            <Zap size={12} color="#a78bfa" /> Everything you need
          </div>
          <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, color: 'var(--text)', lineHeight: 1.1, marginBottom: 16 }}>
            Built for the <span className="gradient-text">modern job seeker</span>
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: '1.1rem', maxWidth: 520, margin: '0 auto' }}>
            Every feature designed to help you land your dream job faster.
          </p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 20 }}>
          {features.map((f, i) => <FeatureCard key={f.id || f.title} feature={f} index={i} />)}
        </div>
      </div>
    </section>
  )
}
