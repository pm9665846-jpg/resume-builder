'use client'
import { useResumeStore } from '@/store/resumeStore'
import { Check } from 'lucide-react'
import { templateMap } from './ResumePreview'

const templateList = [
  { id: 'modern',        name: 'Modern',          tag: 'Popular',    defaultColor: '#8b5cf6' },
  { id: 'professional',  name: 'Professional',    tag: 'Corporate',  defaultColor: '#1e3a5f' },
  { id: 'tech',          name: 'Tech',            tag: 'Dev',        defaultColor: '#00d4aa' },
  { id: 'neon',          name: 'Neon Dark',       tag: '✨ New',     defaultColor: '#00ff88' },
  { id: 'split',         name: 'Split',           tag: '✨ New',     defaultColor: '#6366f1' },
  { id: 'infographic',   name: 'Infographic',     tag: '✨ New',     defaultColor: '#8b5cf6' },
  { id: 'timeline',      name: 'Timeline',        tag: '✨ New',     defaultColor: '#0ea5e9' },
  { id: 'elegant',       name: 'Elegant',         tag: 'Luxury',     defaultColor: '#b8860b' },
  { id: 'creative',      name: 'Creative',        tag: 'Artistic',   defaultColor: '#ec4899' },
  { id: 'bold',          name: 'Bold',            tag: 'Impact',     defaultColor: '#f97316' },
  { id: 'executive',     name: 'Executive',       tag: 'Premium',    defaultColor: '#06b6d4' },
  { id: 'compact',       name: 'Compact',         tag: 'ATS',        defaultColor: '#2563eb' },
  { id: 'minimal',       name: 'Minimal',         tag: 'Clean',      defaultColor: '#3b82f6' },
  { id: 'stripe',        name: 'Stripe',          tag: 'Modern',     defaultColor: '#6366f1' },
  { id: 'sidebarright',  name: 'Sidebar Right',   tag: 'Classic',    defaultColor: '#0f766e' },
  { id: 'gradient',      name: 'Gradient',        tag: 'Vibrant',    defaultColor: '#7c3aed' },
  { id: 'cardgrid',      name: 'Card Grid',       tag: 'Modern',     defaultColor: '#0891b2' },
  { id: 'monochrome',    name: 'Monochrome',      tag: 'B&W',        defaultColor: '#111827' },
  { id: 'pastel',        name: 'Pastel',          tag: 'Soft',       defaultColor: '#8b5cf6' },
  { id: 'darkpro',       name: 'Dark Pro',        tag: 'Dark',       defaultColor: '#f59e0b' },
  { id: 'newspaper',     name: 'Newspaper',       tag: 'Vintage',    defaultColor: '#1a1a1a' },
  { id: 'retro',         name: 'Retro',           tag: 'Vintage',    defaultColor: '#92400e' },
  { id: 'hexagon',       name: 'Hexagon',         tag: 'Creative',   defaultColor: '#7c3aed' },
  { id: 'zigzag',        name: 'Zigzag',          tag: 'Dynamic',    defaultColor: '#059669' },
  { id: 'frosted',       name: 'Frosted',         tag: 'Glass',      defaultColor: '#3b82f6' },
  { id: 'accentbottom',  name: 'Accent Bottom',   tag: 'Unique',     defaultColor: '#dc2626' },
  { id: 'dotmatrix',     name: 'Dot Matrix',      tag: 'Pattern',    defaultColor: '#4f46e5' },
  { id: 'origami',       name: 'Origami',         tag: 'Creative',   defaultColor: '#0369a1' },
  { id: 'architect',     name: 'Architect',       tag: 'Blueprint',  defaultColor: '#1d4ed8' },
  { id: 'watercolor',    name: 'Watercolor',      tag: 'Artistic',   defaultColor: '#ec4899' },
  { id: 'neonsidebar',   name: 'Neon Sidebar',    tag: 'Dark',       defaultColor: '#00ff88' },
  { id: 'minimalistpro', name: 'Minimalist Pro',  tag: 'Ultra Clean',defaultColor: '#111827' },
  { id: 'colorblock',    name: 'Color Block',     tag: 'Bold',       defaultColor: '#7c3aed' },
  { id: 'scandi',        name: 'Scandi',          tag: 'Nordic',     defaultColor: '#2d6a4f' },
  { id: 'brutalist',     name: 'Brutalist',       tag: 'Raw',        defaultColor: '#ff3b00' },
  { id: 'softcorporate', name: 'Soft Corporate',  tag: 'Warm',       defaultColor: '#78350f' },
  { id: 'cyber',         name: 'Cyber',           tag: 'Futuristic', defaultColor: '#f0abfc' },
  { id: 'trifold',       name: 'Trifold',         tag: '3-Column',   defaultColor: '#0f766e' },
  { id: 'mosaic',        name: 'Mosaic',          tag: 'Tiles',      defaultColor: '#9333ea' },
  { id: 'ink',           name: 'Ink',             tag: 'Classic',    defaultColor: '#1e3a5f' },
  { id: 'amber',         name: 'Amber',           tag: 'Warm',       defaultColor: '#d97706' },
  { id: 'forest',        name: 'Forest',          tag: 'Nature',     defaultColor: '#166534' },
  { id: 'ocean',         name: 'Ocean',           tag: 'Blue',       defaultColor: '#0369a1' },
  { id: 'rose',          name: 'Rose',            tag: 'Pink',       defaultColor: '#be185d' },
  { id: 'slate',         name: 'Slate',           tag: 'Gray',       defaultColor: '#475569' },
  { id: 'indigo',        name: 'Indigo',          tag: 'Deep',       defaultColor: '#4338ca' },
  { id: 'crimson',       name: 'Crimson',         tag: 'Bold',       defaultColor: '#b91c1c' },
  { id: 'teal',          name: 'Teal',            tag: 'Fresh',      defaultColor: '#0d9488' },
  { id: 'midnight',      name: 'Midnight',        tag: 'Dark',       defaultColor: '#818cf8' },
  { id: 'sunrise',       name: 'Sunrise',         tag: 'Warm',       defaultColor: '#ea580c' },
  { id: 'lavender',      name: 'Lavender',        tag: 'Soft',       defaultColor: '#7c3aed' },
  { id: 'copper',        name: 'Copper',          tag: 'Metallic',   defaultColor: '#b45309' },
  { id: 'mint',          name: 'Mint',            tag: 'Fresh',      defaultColor: '#059669' },
  { id: 'charcoal',      name: 'Charcoal',        tag: 'Dark',       defaultColor: '#6b7280' },
  { id: 'cobalt',        name: 'Cobalt',          tag: 'Blue',       defaultColor: '#1d4ed8' },
  { id: 'deco',          name: 'Art Deco',        tag: 'Luxury',     defaultColor: '#b45309' },
  { id: 'neongrid',      name: 'Neon Grid',       tag: 'Cyber',      defaultColor: '#22d3ee' },
  { id: 'linen',         name: 'Linen',           tag: 'Warm',       defaultColor: '#92400e' },
  { id: 'prism',         name: 'Prism',           tag: 'Rainbow',    defaultColor: '#8b5cf6' },
  { id: 'stacked',       name: 'Stacked',         tag: 'Sections',   defaultColor: '#0f766e' },
  { id: 'neonminimal',   name: 'Neon Minimal',    tag: 'Clean',      defaultColor: '#a855f7' },
  { id: 'coral',         name: 'Coral',           tag: 'Vibrant',    defaultColor: '#f43f5e' },
  { id: 'sage',          name: 'Sage',            tag: 'Nature',     defaultColor: '#4d7c0f' },
  { id: 'ivory',         name: 'Ivory',           tag: 'Classic',    defaultColor: '#78350f' },
  { id: 'steel',         name: 'Steel',           tag: 'Industrial', defaultColor: '#334155' },
  { id: 'plum',          name: 'Plum',            tag: 'Deep',       defaultColor: '#6b21a8' },
  { id: 'jade',          name: 'Jade',            tag: 'Luxury',     defaultColor: '#065f46' },
  { id: 'graphite',      name: 'Graphite',        tag: 'Dark',       defaultColor: '#9ca3af' },
  { id: 'blush',         name: 'Blush',           tag: 'Pink',       defaultColor: '#db2777' },
  { id: 'onyx',          name: 'Onyx',            tag: 'Luxury',     defaultColor: '#d4af37' },
  { id: 'terracotta',    name: 'Terracotta',      tag: 'Earthy',     defaultColor: '#c2410c' },
  { id: 'arctic',        name: 'Arctic',          tag: 'Cool',       defaultColor: '#0284c7' },
  { id: 'velvet',        name: 'Velvet',          tag: 'Dark',       defaultColor: '#7e22ce' },
  { id: 'emerald',       name: 'Emerald',         tag: 'Gem',        defaultColor: '#059669' },
  { id: 'sapphire',      name: 'Sapphire',        tag: 'Gem',        defaultColor: '#1e40af' },
  { id: 'ruby',          name: 'Ruby',            tag: 'Gem',        defaultColor: '#be123c' },
  { id: 'topaz',         name: 'Topaz',           tag: 'Gem',        defaultColor: '#b45309' },
  { id: 'opal',          name: 'Opal',            tag: 'Gem',        defaultColor: '#0891b2' },
  { id: 'garnet',        name: 'Garnet',          tag: 'Gem',        defaultColor: '#9f1239' },
  { id: 'citrine',       name: 'Citrine',         tag: 'Gem',        defaultColor: '#ca8a04' },
  { id: 'amethyst',      name: 'Amethyst',        tag: 'Gem',        defaultColor: '#7c3aed' },
  { id: 'turquoise',     name: 'Turquoise',       tag: 'Gem',        defaultColor: '#0d9488' },
  { id: 'pearl',         name: 'Pearl',           tag: 'Gem',        defaultColor: '#64748b' },
  { id: 'bronze',        name: 'Bronze',          tag: 'Metal',      defaultColor: '#92400e' },
  { id: 'silver',        name: 'Silver',          tag: 'Metal',      defaultColor: '#475569' },
  { id: 'gold',          name: 'Gold',            tag: 'Metal',      defaultColor: '#d97706' },
  { id: 'platinum',      name: 'Platinum',        tag: 'Metal',      defaultColor: '#334155' },
  { id: 'diamond',       name: 'Diamond',         tag: 'Gem',        defaultColor: '#0ea5e9' },
  { id: 'obsidian',      name: 'Obsidian',        tag: 'Dark',       defaultColor: '#1e293b' },
  { id: 'malachite',     name: 'Malachite',       tag: 'Gem',        defaultColor: '#166534' },
  { id: 'coralreef',     name: 'Coral Reef',      tag: 'Vibrant',    defaultColor: '#e11d48' },
  { id: 'azure',         name: 'Azure',           tag: 'Blue',       defaultColor: '#2563eb' },
  { id: 'marigold',      name: 'Marigold',        tag: 'Warm',       defaultColor: '#d97706' },
  { id: 'lilac',         name: 'Lilac',           tag: 'Soft',       defaultColor: '#9333ea' },
  { id: 'peach',         name: 'Peach',           tag: 'Warm',       defaultColor: '#ea580c' },
  { id: 'sky',           name: 'Sky',             tag: 'Light',      defaultColor: '#0284c7' },
  { id: 'dawn',          name: 'Dawn',            tag: 'Soft',       defaultColor: '#db2777' },
  { id: 'dusk',          name: 'Dusk',            tag: 'Evening',    defaultColor: '#4338ca' },
  { id: 'night',         name: 'Night',           tag: 'Dark',       defaultColor: '#818cf8' },
  { id: 'twilight',      name: 'Twilight',        tag: 'Dark',       defaultColor: '#a78bfa' },
  { id: 'quantum',       name: 'Quantum',         tag: '⭐ Pro',     defaultColor: '#6d28d9' },
  { id: 'atlas',         name: 'Atlas',           tag: '⭐ Pro',     defaultColor: '#0f172a' },
  { id: 'nexus',         name: 'Nexus',           tag: '⭐ Pro',     defaultColor: '#d4af37' },
  { id: 'meridian',      name: 'Meridian',        tag: '⭐ Pro',     defaultColor: '#0f4c81' },
  { id: 'vertex',        name: 'Vertex',          tag: '⭐ Pro',     defaultColor: '#2563eb' },
  { id: 'zenith',        name: 'Zenith',          tag: '⭐ Pro',     defaultColor: '#dc2626' },
  { id: 'praxis',        name: 'Praxis',          tag: '⭐ Pro',     defaultColor: '#1e40af' },
  { id: 'solaris',       name: 'Solaris',         tag: '⭐ Pro',     defaultColor: '#7c3aed' },
  { id: 'cipher',        name: 'Cipher',          tag: '⭐ Pro',     defaultColor: '#10b981' },
  { id: 'lumina',        name: 'Lumina',          tag: '⭐ Pro',     defaultColor: '#8b5cf6' },
]

const sampleResume = {
  personalInfo: {
    name: 'Prachi Mishra', jobTitle: 'Software Engineer',
    email: 'prachi@email.com', phone: '+91 98765 43210',
    location: 'Mumbai, India', website: 'prachidev.com',
    linkedin: 'linkedin.com/in/prachi',
    summary: 'Senior Software Engineer with 4+ years building scalable applications.',
  },
  experience: [
    { id: '1', role: 'Senior Engineer', company: 'Google India', location: 'Bengaluru', startDate: 'Jan 2022', endDate: '', current: true, description: '• Built microservices handling 15M+ requests/day\n• Led team of 6 engineers' },
    { id: '2', role: 'Software Engineer', company: 'Razorpay', location: 'Bengaluru', startDate: 'Jul 2020', endDate: 'Dec 2021', current: false, description: '• Built merchant dashboard for 200K+ merchants' },
  ],
  education: [{ id: '1', degree: 'B.Tech Computer Science', school: 'IIT Bombay', startDate: '2015', endDate: '2019', gpa: '9.2 / 10', achievements: "Dean's List" }],
  skills: [
    { id: '1', name: 'JavaScript', level: 95 }, { id: '2', name: 'React', level: 92 },
    { id: '3', name: 'Node.js', level: 90 }, { id: '4', name: 'Python', level: 80 },
    { id: '5', name: 'AWS', level: 78 }, { id: '6', name: 'Docker', level: 75 },
  ],
  projects: [
    { id: '1', name: 'Resume Maker', tech: 'Next.js, MySQL, OpenAI', link: 'Resume Maker.vercel.app', description: 'AI resume builder with 13 templates. 2,000+ users.' },
  ],
  certifications: [{ id: '1', name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', date: '2023-04' }],
  languages: [{ id: '1', name: 'English', proficiency: 'Fluent' }, { id: '2', name: 'Hindi', proficiency: 'Native' }],
}

function TemplateThumbnail({ template, themeColor, active }) {
  const Component = templateMap[template.id]
  if (!Component) return null

  const color = themeColor || template.defaultColor
  const resumeData = { ...sampleResume, themeColor: color, template: template.id }

  const PREVIEW_W = 116
  const PREVIEW_H = 155
  const RENDER_W = 794
  const scale = PREVIEW_W / RENDER_W

  return (
    <div style={{
      width: PREVIEW_W, height: PREVIEW_H,
      borderRadius: 8, overflow: 'hidden',
      border: active ? `2px solid #8b5cf6` : '2px solid rgba(255,255,255,0.08)',
      boxShadow: active ? '0 0 16px rgba(139,92,246,0.5)' : 'none',
      transition: 'all 0.2s', position: 'relative', background: 'white', cursor: 'pointer',
    }}>
      <div style={{ width: RENDER_W, height: PREVIEW_H / scale, transform: `scale(${scale})`, transformOrigin: 'top left', pointerEvents: 'none', userSelect: 'none' }}>
        <Component resume={resumeData} />
      </div>
      {active && (
        <div style={{ position: 'absolute', top: 4, right: 4, width: 16, height: 16, borderRadius: '50%', background: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Check size={9} color="white" />
        </div>
      )}
    </div>
  )
}

const colors = [
  '#8b5cf6', '#3b82f6', '#06b6d4', '#ec4899',
  '#10b981', '#f59e0b', '#ef4444', '#6366f1',
  '#14b8a6', '#f97316', '#1e3a5f', '#b8860b',
  '#00d4aa', '#2563eb', '#00ff88', '#0ea5e9',
]

export default function TemplateSelector() {
  const { resume, updateTemplate, updateThemeColor } = useResumeStore()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Template grid */}
      <div>
        <p style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
          Template — <span style={{ color: '#a78bfa' }}>{templateList.find(t => t.id === resume.template)?.name || 'Modern'}</span>
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {templateList.map(t => {
            const active = resume.template === t.id
            return (
              <div key={t.id} onClick={() => updateTemplate(t.id)}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, cursor: 'pointer', transform: active ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.2s' }}>
                <TemplateThumbnail template={t} themeColor={resume.themeColor} active={active} />
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '0.68rem', fontWeight: 700, color: active ? '#a78bfa' : '#94a3b8' }}>{t.name}</p>
                  <p style={{ fontSize: '0.58rem', color: t.tag.includes('New') ? '#f59e0b' : '#475569' }}>{t.tag}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Color picker */}
      <div>
        <p style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
          Theme Color — <span style={{ color: resume.themeColor, fontFamily: 'monospace' }}>{resume.themeColor}</span>
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 7 }}>
          {colors.map(color => (
            <button key={color} onClick={() => updateThemeColor(color)}
              style={{ width: '100%', aspectRatio: '1', borderRadius: '50%', background: color, border: 'none', cursor: 'pointer', outline: resume.themeColor === color ? '2px solid white' : 'none', outlineOffset: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              {resume.themeColor === color && <Check size={9} color="white" />}
            </button>
          ))}
        </div>
        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
          <label style={{ fontSize: '0.72rem', color: '#64748b' }}>Custom:</label>
          <input type="color" value={resume.themeColor} onChange={e => updateThemeColor(e.target.value)}
            style={{ width: 30, height: 30, borderRadius: 6, border: 'none', cursor: 'pointer', background: 'transparent' }} />
        </div>
      </div>
    </div>
  )
}
