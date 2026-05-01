'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Check, Sparkles, Star, Search, ArrowLeft, Filter } from 'lucide-react'
import Link from 'next/link'
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
import MinimalTemplate from '@/components/builder/templates/MinimalTemplate'

const ALL_TEMPLATES = [
  { id: 'modern',       name: 'Modern',       tag: 'Popular',     category: 'Professional', color: '#8b5cf6', Component: ModernTemplate,       star: true  },
  { id: 'executive',    name: 'Executive',    tag: 'Premium',     category: 'Professional', color: '#06b6d4', Component: ExecutiveTemplate,    star: false },
  { id: 'professional', name: 'Professional', tag: 'Corporate',   category: 'Professional', color: '#1e3a5f', Component: ProfessionalTemplate, star: false },
  { id: 'elegant',      name: 'Elegant',      tag: 'Luxury',      category: 'Professional', color: '#b8860b', Component: ElegantTemplate,      star: true  },
  { id: 'compact',      name: 'Compact',      tag: 'ATS',         category: 'ATS Friendly', color: '#2563eb', Component: CompactTemplate,      star: false },
  { id: 'minimal',      name: 'Minimal',      tag: 'Clean',       category: 'ATS Friendly', color: '#3b82f6', Component: MinimalTemplate,      star: false },
  { id: 'tech',         name: 'Tech',         tag: 'Developer',   category: 'Creative',     color: '#00d4aa', Component: TechTemplate,         star: false },
  { id: 'creative',     name: 'Creative',     tag: 'Artistic',    category: 'Creative',     color: '#ec4899', Component: CreativeTemplate,     star: false },
  { id: 'bold',         name: 'Bold',         tag: 'Impact',      category: 'Creative',     color: '#f97316', Component: BoldTemplate,         star: false },
  { id: 'neon',         name: 'Neon Dark',    tag: 'Dark',        category: 'Creative',     color: '#00ff88', Component: NeonTemplate,         star: false },
  { id: 'split',        name: 'Split',        tag: 'Modern',      category: 'Creative',     color: '#6366f1', Component: SplitTemplate,        star: false },
  { id: 'infographic',  name: 'Infographic',  tag: 'Visual',      category: 'Creative',     color: '#8b5cf6', Component: InfographicTemplate,  star: false },
  { id: 'timeline',     name: 'Timeline',     tag: 'Unique',      category: 'Creative',     color: '#0ea5e9', Component: TimelineTemplate,     star: false },
]

const CATEGORIES = ['All', 'Professional', 'ATS Friendly', 'Creative']

const sampleResume = {
  personalInfo: {
    name: 'Alex Johnson', jobTitle: 'Software Engineer',
    email: 'alex@email.com', phone: '+91 98765 43210',
    location: 'Mumbai, India', website: 'alexdev.com',
    linkedin: 'linkedin.com/in/alex',
    summary: 'Full-stack developer with 4+ years building scalable web applications.',
  },
  experience: [
    { id: '1', role: 'Software Engineer', company: 'Google', startDate: 'Jan 2022', endDate: '', current: true, description: '• Built microservices handling 10M+ requests/day' },
    { id: '2', role: 'Frontend Developer', company: 'Startup Inc', startDate: 'Jun 2020', endDate: 'Dec 2021', current: false, description: '• Developed React dashboard used by 50K users' },
  ],
  education: [{ id: '1', degree: 'B.Tech Computer Science', school: 'IIT Bombay', startDate: '2016', endDate: '2020', gpa: '9.1' }],
  skills: [
    { id: '1', name: 'React', level: 90 }, { id: '2', name: 'Node.js', level: 85 },
    { id: '3', name: 'TypeScript', level: 80 }, { id: '4', name: 'Python', level: 75 },
  ],
  projects: [{ id: '1', name: 'Resume Builder', tech: 'Next.js, MySQL', description: 'AI-powered resume builder with live preview' }],
  certifications: [{ id: '1', name: 'AWS Solutions Architect', issuer: 'Amazon', date: '2023-04' }],
  languages: [{ id: '1', name: 'English', proficiency: 'Fluent' }, { id: '2', name: 'Hindi', proficiency: 'Native' }],
}

function TemplateCard({ template, selected, onSelect, onUse }) {
  const { Component } = template
  const resumeData = { ...sampleResume, themeColor: template.color, template: template.id }
  const CARD_W = 160
  const CARD_H = 213
  const RENDER_W = 794
  const scale = CARD_W / RENDER_W
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, width: '100%' }}
    >
      {/* Card */}
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onClick={() => onSelect(template.id)}
        style={{
          width: '100%', maxWidth: CARD_W, height: CARD_H, borderRadius: 14, overflow: 'hidden',
          cursor: 'pointer', position: 'relative', background: 'white', flexShrink: 0,
          border: selected ? `2px solid ${template.color}` : '2px solid var(--border)',
          boxShadow: selected
            ? `0 0 0 4px ${template.color}22, 0 16px 40px rgba(0,0,0,0.2), 0 0 20px ${template.color}20`
            : '0 4px 20px rgba(0,0,0,0.1)',
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}
      >
        {/* Template preview */}
        <div style={{ width: RENDER_W, height: CARD_H / scale, transform: `scale(${scale})`, transformOrigin: 'top left', pointerEvents: 'none', userSelect: 'none' }}>
          <Component resume={resumeData} />
        </div>

        {/* Hover overlay */}
        <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2 }}
          style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)', borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 16, gap: 8 }}>
          <button onClick={e => { e.stopPropagation(); onUse(template.id) }}
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 20px', borderRadius: 20, background: `linear-gradient(135deg, ${template.color}, ${template.color}bb)`, color: 'white', fontWeight: 700, fontSize: '0.8rem', border: 'none', cursor: 'pointer', boxShadow: `0 4px 14px ${template.color}50` }}>
            Use Template <ArrowRight size={13} />
          </button>
        </motion.div>

        {/* Selected check */}
        {selected && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400 }}
            style={{ position: 'absolute', top: 8, right: 8, width: 24, height: 24, borderRadius: '50%', background: template.color, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 10px ${template.color}` }}>
            <Check size={13} color="white" strokeWidth={3} />
          </motion.div>
        )}

        {/* Star badge */}
        {template.star && (
          <div style={{ position: 'absolute', top: 8, left: 8, display: 'flex', alignItems: 'center', gap: 3, padding: '3px 8px', borderRadius: 999, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <Star size={9} color="#fbbf24" fill="#fbbf24" />
            <span style={{ fontSize: '0.58rem', color: '#fbbf24', fontWeight: 700 }}>TOP</span>
          </div>
        )}

        {/* Tag */}
        <div style={{ position: 'absolute', bottom: 8, left: 8, fontSize: '0.58rem', fontWeight: 700, padding: '2px 8px', borderRadius: 999, background: 'rgba(0,0,0,0.55)', color: 'white', backdropFilter: 'blur(4px)' }}>
          {template.tag}
        </div>
      </motion.div>

      {/* Label */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: selected ? 'var(--text)' : 'var(--text2)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 3 }}>{template.name}</p>
        <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '2px 10px', borderRadius: 999, background: selected ? `${template.color}20` : 'var(--card)', color: selected ? template.color : 'var(--text3)', border: `1px solid ${selected ? template.color + '40' : 'var(--border)'}`, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'inline-block' }}>
          {template.category}
        </span>
      </div>
    </motion.div>
  )
}

export default function TemplatesPage() {
  const router = useRouter()
  const [selected, setSelected] = useState('modern')
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const filtered = ALL_TEMPLATES.filter(t => {
    const matchCat = category === 'All' || t.category === category
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
                        t.tag.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  function handleUse(templateId) {
    router.push(`/register?template=${templateId}`)
  }

  const activeTemplate = ALL_TEMPLATES.find(t => t.id === selected) || ALL_TEMPLATES[0]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      {/* Navbar */}
      <div style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--navbar-bg)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border3)', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', color: 'var(--text2)', fontSize: '0.875rem' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <img src="/logo.png" alt="Fresh CV" style={{ width: 28, height: 28, objectFit: 'contain' }} />
          <span className="gradient-text" style={{ fontWeight: 700, fontSize: '1rem' }}>Fresh CV</span>
        </div>
        <Link href="/register" style={{ padding: '8px 18px', borderRadius: 10, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: 'white', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}>
          Get Started Free
        </Link>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 24px 80px' }}>

        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 16, padding: '6px 16px', borderRadius: 999, background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)' }}>
            <Sparkles size={13} color="#a78bfa" />
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#a78bfa' }}>{ALL_TEMPLATES.length} Professional Templates</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, color: 'var(--text)', lineHeight: 1.1, marginBottom: 14, letterSpacing: '-0.02em' }}>
            Choose Your Perfect{' '}
            <span style={{ background: 'linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Template</span>
          </h1>
          <p style={{ color: 'var(--text2)', fontSize: '1rem', maxWidth: 500, margin: '0 auto' }}>
            Every template is ATS-optimized and crafted to impress hiring managers.
          </p>
        </motion.div>

        {/* Search + Filter */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 36, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          {/* Search */}
          <div style={{ position: 'relative', flex: '1', maxWidth: 320 }}>
            <Search size={15} color="#64748b" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search templates..."
              style={{ width: '100%', paddingLeft: 36, paddingRight: 14, paddingTop: 10, paddingBottom: 10, borderRadius: 10, background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box' }}
              onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.5)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>

          {/* Category filters */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setCategory(cat)}
                style={{ padding: '8px 18px', borderRadius: 20, border: 'none', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600, transition: 'all 0.2s', background: category === cat ? 'linear-gradient(135deg, #8b5cf6, #3b82f6)' : 'var(--card)', color: category === cat ? 'white' : 'var(--text2)', outline: category === cat ? 'none' : '1px solid var(--border)' }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p style={{ color: 'var(--text3)', fontSize: '0.82rem', marginBottom: 24, textAlign: 'center' }}>
          Showing <strong style={{ color: 'var(--text2)' }}>{filtered.length}</strong> templates
          {category !== 'All' && <span> in <strong style={{ color: '#a78bfa' }}>{category}</strong></span>}
          {search && <span> matching "<strong style={{ color: '#a78bfa' }}>{search}</strong>"</span>}
        </p>

        {/* Template Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text3)' }}>
            <Filter size={32} style={{ marginBottom: 12, opacity: 0.4 }} />
            <p style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 6 }}>No templates found</p>
            <p style={{ fontSize: '0.85rem' }}>Try a different search or category</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, justifyItems: 'center', marginBottom: 60 }} className="template-grid">
            {filtered.map(t => (
              <TemplateCard key={t.id} template={t} selected={selected === t.id}
                onSelect={setSelected} onUse={handleUse} />
            ))}
          </div>
        )}

        {/* CTA */}
        {filtered.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.div key={selected} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 24px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20 }}>
              <div style={{ width: 1, height: 36, background: `linear-gradient(to bottom, transparent, ${activeTemplate.color}60, transparent)`, marginBottom: 20 }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: activeTemplate.color, boxShadow: `0 0 10px ${activeTemplate.color}` }} />
                <span style={{ color: 'var(--text2)', fontSize: '0.9rem' }}>
                  Selected: <strong style={{ color: activeTemplate.color }}>{activeTemplate.name}</strong>
                </span>
                <span style={{ fontSize: '0.7rem', padding: '2px 10px', borderRadius: 999, background: `${activeTemplate.color}15`, color: activeTemplate.color, border: `1px solid ${activeTemplate.color}30`, fontWeight: 600 }}>
                  {activeTemplate.tag}
                </span>
              </div>
              <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => handleUse(activeTemplate.id)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 36px', borderRadius: 14, background: `linear-gradient(135deg, ${activeTemplate.color}, ${activeTemplate.color}99)`, color: 'white', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'pointer', boxShadow: `0 0 30px ${activeTemplate.color}40` }}>
                Use {activeTemplate.name} Template <ArrowRight size={18} />
              </motion.button>
              <p style={{ color: 'var(--text3)', fontSize: '0.78rem', marginTop: 12 }}>Free to start · No credit card required</p>
            </motion.div>
          </AnimatePresence>
        )}

      </div>
    </div>
  )
}
