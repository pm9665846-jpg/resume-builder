'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Wand2, Layout, Download, Eye, Palette, Shield, Zap, Globe } from 'lucide-react'

const features = [
  { icon: Wand2, title: 'AI-Powered Writing', desc: 'Smart suggestions that tailor your resume to any job description automatically.', color: '#8b5cf6' },
  { icon: Layout, title: 'Premium Templates', desc: '20+ professionally designed templates crafted by top designers.', color: '#3b82f6' },
  { icon: Eye, title: 'Live Preview', desc: 'See every change in real-time with our split-screen editor.', color: '#06b6d4' },
  { icon: Download, title: 'One-Click Export', desc: 'Export to PDF or DOCX with perfect formatting, every time.', color: '#ec4899' },
  { icon: Palette, title: 'Theme Customizer', desc: 'Personalize colors, fonts, and layouts to match your style.', color: '#f59e0b' },
  { icon: Shield, title: 'ATS Optimized', desc: 'Beat applicant tracking systems with our smart formatting engine.', color: '#10b981' },
  { icon: Zap, title: 'Auto Save', desc: 'Never lose your work. Every keystroke is saved automatically.', color: '#8b5cf6' },
  { icon: Globe, title: 'Drag & Drop', desc: 'Reorder sections effortlessly with intuitive drag and drop.', color: '#3b82f6' },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="card-hover"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 16,
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = `${feature.color}40`}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
    >
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: `${feature.color}20`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon size={22} color={feature.color} />
      </div>
      <h3 style={{ color: 'white', fontWeight: 600, fontSize: '1rem' }}>{feature.title}</h3>
      <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>{feature.desc}</p>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="features" style={{ width: '100%', padding: '80px 0', background: '#050508' }}>
      <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 999, padding: '6px 14px',
            fontSize: '0.75rem', color: '#a78bfa', marginBottom: 20,
          }}>
            <Zap size={12} color="#a78bfa" /> Everything you need
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900, color: 'white',
            lineHeight: 1.1, marginBottom: 16,
          }}>
            Built for the <span className="gradient-text">modern job seeker</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: 520, margin: '0 auto' }}>
            Every feature designed to help you land your dream job faster.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 20,
        }}>
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
