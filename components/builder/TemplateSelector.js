'use client'
import { useState } from 'react'
import { useResumeStore } from '@/store/resumeStore'
import { Check, X, RotateCcw } from 'lucide-react'
import { templateMap } from './ResumePreview'

const templateList = [
  { id: 'modern',        name: 'Modern',          tag: 'Popular',     defaultColor: '#8b5cf6' },
  { id: 'executive',     name: 'Executive',       tag: 'Premium',     defaultColor: '#06b6d4' },
  { id: 'creative',      name: 'Creative',        tag: 'Artistic',    defaultColor: '#ec4899' },
  { id: 'professional',  name: 'Professional',    tag: 'Corporate',   defaultColor: '#1e3a5f' },
  { id: 'elegant',       name: 'Elegant',         tag: 'Luxury',      defaultColor: '#b8860b' },
  { id: 'tech',          name: 'Tech',            tag: 'Developer',   defaultColor: '#00d4aa' },
  { id: 'compact',       name: 'Compact',         tag: 'ATS',         defaultColor: '#2563eb' },
  { id: 'bold',          name: 'Bold',            tag: 'Impact',      defaultColor: '#f97316' },
  { id: 'minimal',       name: 'Minimal',         tag: 'Clean',       defaultColor: '#3b82f6' },
  { id: 'neon',          name: 'Neon Dark',       tag: 'New',         defaultColor: '#00ff88' },
  { id: 'split',         name: 'Split',           tag: 'New',         defaultColor: '#6366f1' },
  { id: 'infographic',   name: 'Infographic',     tag: 'New',         defaultColor: '#8b5cf6' },
  { id: 'timeline',      name: 'Timeline',        tag: 'New',         defaultColor: '#0ea5e9' },
  { id: 'stripe',        name: 'Stripe',          tag: 'Modern',      defaultColor: '#6366f1' },
  { id: 'sidebarright',  name: 'Sidebar Right',   tag: 'Classic',     defaultColor: '#0f766e' },
  { id: 'gradient',      name: 'Gradient',        tag: 'Vibrant',     defaultColor: '#7c3aed' },
  { id: 'cardgrid',      name: 'Card Grid',       tag: 'Modern',      defaultColor: '#0891b2' },
  { id: 'monochrome',    name: 'Monochrome',      tag: 'B&W',         defaultColor: '#111827' },
  { id: 'pastel',        name: 'Pastel',          tag: 'Soft',        defaultColor: '#8b5cf6' },
  { id: 'darkpro',       name: 'Dark Pro',        tag: 'Dark',        defaultColor: '#f59e0b' },
  { id: 'newspaper',     name: 'Newspaper',       tag: 'Vintage',     defaultColor: '#1a1a1a' },
  { id: 'retro',         name: 'Retro',           tag: 'Vintage',     defaultColor: '#92400e' },
  { id: 'hexagon',       name: 'Hexagon',         tag: 'Creative',    defaultColor: '#7c3aed' },
  { id: 'zigzag',        name: 'Zigzag',          tag: 'Dynamic',     defaultColor: '#059669' },
  { id: 'frosted',       name: 'Frosted',         tag: 'Glass',       defaultColor: '#3b82f6' },
  { id: 'accentbottom',  name: 'Accent Bottom',   tag: 'Unique',      defaultColor: '#dc2626' },
  { id: 'dotmatrix',     name: 'Dot Matrix',      tag: 'Pattern',     defaultColor: '#4f46e5' },
  { id: 'origami',       name: 'Origami',         tag: 'Creative',    defaultColor: '#0369a1' },
  { id: 'architect',     name: 'Architect',       tag: 'Blueprint',   defaultColor: '#1d4ed8' },
  { id: 'watercolor',    name: 'Watercolor',      tag: 'Artistic',    defaultColor: '#ec4899' },
  { id: 'neonsidebar',   name: 'Neon Sidebar',    tag: 'Dark',        defaultColor: '#00ff88' },
  { id: 'minimalistpro', name: 'Minimalist Pro',  tag: 'Ultra Clean', defaultColor: '#111827' },
  { id: 'colorblock',    name: 'Color Block',     tag: 'Bold',        defaultColor: '#7c3aed' },
  { id: 'scandi',        name: 'Scandi',          tag: 'Nordic',      defaultColor: '#2d6a4f' },
  { id: 'brutalist',     name: 'Brutalist',       tag: 'Raw',         defaultColor: '#ff3b00' },
  { id: 'softcorporate', name: 'Soft Corporate',  tag: 'Warm',        defaultColor: '#78350f' },
  { id: 'cyber',         name: 'Cyber',           tag: 'Futuristic',  defaultColor: '#f0abfc' },
  { id: 'trifold',       name: 'Trifold',         tag: '3-Column',    defaultColor: '#0f766e' },
  { id: 'mosaic',        name: 'Mosaic',          tag: 'Tiles',       defaultColor: '#9333ea' },
  { id: 'ink',           name: 'Ink',             tag: 'Classic',     defaultColor: '#1e3a5f' },
  { id: 'deco',          name: 'Art Deco',        tag: 'Luxury',      defaultColor: '#b45309' },
  { id: 'neongrid',      name: 'Neon Grid',       tag: 'Cyber',       defaultColor: '#22d3ee' },
  { id: 'linen',         name: 'Linen',           tag: 'Warm',        defaultColor: '#92400e' },
  { id: 'prism',         name: 'Prism',           tag: 'Rainbow',     defaultColor: '#8b5cf6' },
  { id: 'stacked',       name: 'Stacked',         tag: 'Sections',    defaultColor: '#0f766e' },
  { id: 'neonminimal',   name: 'Neon Minimal',    tag: 'Clean',       defaultColor: '#a855f7' },
  { id: 'quantum',       name: 'Quantum',         tag: 'Pro',         defaultColor: '#6d28d9' },
  { id: 'atlas',         name: 'Atlas',           tag: 'Pro',         defaultColor: '#0f172a' },
  { id: 'nexus',         name: 'Nexus',           tag: 'Pro',         defaultColor: '#d4af37' },
  { id: 'meridian',      name: 'Meridian',        tag: 'Pro',         defaultColor: '#0f4c81' },
  { id: 'vertex',        name: 'Vertex',          tag: 'Pro',         defaultColor: '#2563eb' },
  { id: 'zenith',        name: 'Zenith',          tag: 'Pro',         defaultColor: '#dc2626' },
  { id: 'praxis',        name: 'Praxis',          tag: 'Pro',         defaultColor: '#1e40af' },
  { id: 'solaris',       name: 'Solaris',         tag: 'Pro',         defaultColor: '#7c3aed' },
  { id: 'cipher',        name: 'Cipher',          tag: 'Pro',         defaultColor: '#10b981' },
  { id: 'lumina',        name: 'Lumina',          tag: 'Pro',         defaultColor: '#8b5cf6' },
  // New unique layouts
  { id: 'aurora',        name: 'Aurora',          tag: 'New',         defaultColor: '#6366f1' },
  { id: 'magazine',      name: 'Magazine',        tag: 'New',         defaultColor: '#dc2626' },
  { id: 'circuit',       name: 'Circuit',         tag: 'New',         defaultColor: '#00ff88' },
  { id: 'canvas',        name: 'Canvas',          tag: 'New',         defaultColor: '#7c3aed' },
  { id: 'metro',         name: 'Metro',           tag: 'New',         defaultColor: '#0ea5e9' },
  { id: 'fold',          name: 'Fold',            tag: 'New',         defaultColor: '#059669' },
  { id: 'classictable',  name: 'Classic Table',   tag: 'New',         defaultColor: '#0ea5e9' },
  { id: 'ribbon',        name: 'Ribbon',          tag: 'New',         defaultColor: '#e11d48' },
  { id: 'glasspro',      name: 'Glass Pro',       tag: 'New',         defaultColor: '#8b5cf6' },
  { id: 'nordic',        name: 'Nordic',          tag: 'New',         defaultColor: '#2d6a4f' },
  { id: 'boldblocks',    name: 'Bold Blocks',     tag: 'New',         defaultColor: '#1d4ed8' },
  { id: 'spotlight',     name: 'Spotlight',       tag: 'New',         defaultColor: '#f59e0b' },
  { id: 'timelinepro',    name: 'Timeline Pro',    tag: 'New',         defaultColor: '#0891b2' },
  { id: 'duotone',        name: 'Duotone',         tag: 'New',         defaultColor: '#7c3aed' },
  { id: 'passport',       name: 'Passport',        tag: 'New',         defaultColor: '#1e40af' },
  { id: 'terminal',       name: 'Terminal',        tag: 'New',         defaultColor: '#22c55e' },
  { id: 'blueprint',      name: 'Blueprint',       tag: 'New',         defaultColor: '#0ea5e9' },
  { id: 'infopanel',      name: 'Info Panel',      tag: 'New',         defaultColor: '#0f766e' },
  { id: 'vintage',        name: 'Vintage',         tag: 'New',         defaultColor: '#92400e' },
  { id: 'gradientflow',   name: 'Gradient Flow',   tag: 'New',         defaultColor: '#7c3aed' },
  { id: 'sidebaraccent',  name: 'Sidebar Accent',  tag: 'New',         defaultColor: '#0369a1' },
  { id: 'hexgrid',        name: 'Hex Grid',        tag: 'New',         defaultColor: '#6d28d9' },
  { id: 'cleancorporate', name: 'Clean Corporate', tag: 'New',         defaultColor: '#1e3a5f' },
  { id: 'blossom',       name: 'Blossom',         tag: 'Soft',        defaultColor: '#f43f5e' },
  { id: 'mist',          name: 'Mist',            tag: 'Soft',        defaultColor: '#64748b' },
  { id: 'meadow',        name: 'Meadow',          tag: 'Soft',        defaultColor: '#4d7c5f' },
  { id: 'goldenage',     name: 'Golden Age',      tag: 'Soft',        defaultColor: '#b45309' },
  { id: 'frost',         name: 'Frost',           tag: 'Soft',        defaultColor: '#0284c7' },
  { id: 'vivid',         name: 'Vivid',           tag: 'Clean',       defaultColor: '#00aaff' },
  { id: 'navypro',       name: 'Navy Pro',        tag: 'Classic',     defaultColor: '#1a237e' },
  { id: 'hexfolio',      name: 'Hex Folio',       tag: 'Creative',    defaultColor: '#334155' },
  { id: 'tealcard',      name: 'Teal Card',       tag: 'Classic',     defaultColor: '#0891b2' },
  { id: 'crimsonside',   name: 'Crimson Side',    tag: 'Classic',     defaultColor: '#b91c1c' },
  { id: 'coralbox',      name: 'Coral Box',       tag: 'Classic',     defaultColor: '#ef5350' },
  { id: 'cleanlist',     name: 'Clean List',      tag: 'Minimal',     defaultColor: '#1e293b' },
  { id: 'simpledoc',     name: 'Simple Doc',      tag: 'Minimal',     defaultColor: '#1e293b' },
  { id: 'timelineside',  name: 'Timeline Side',   tag: 'Creative',    defaultColor: '#3730a3' },
  { id: 'dotflow',       name: 'Dot Flow',        tag: 'Creative',    defaultColor: '#1d4ed8' },
  { id: 'oceancard',     name: 'Ocean Card',      tag: 'Classic',     defaultColor: '#0284c7' },
  { id: 'navyblock',     name: 'Navy Block',      tag: 'Classic',     defaultColor: '#1e1b8b' },
  { id: 'rightname',     name: 'Right Name',      tag: 'Classic',     defaultColor: '#2d2d9f' },
  { id: 'blackbox',      name: 'Black Box',       tag: 'Bold',        defaultColor: '#111111' },
  { id: 'splitclean',    name: 'Split Clean',     tag: 'Minimal',     defaultColor: '#2d2db0' },
  { id: 'darkpanel',     name: 'Dark Panel',      tag: 'Classic',     defaultColor: '#0f2557' },
  { id: 'accentbar',     name: 'Accent Bar',      tag: 'Minimal',     defaultColor: '#00aacc' },
  { id: 'stripedge',     name: 'Strip Edge',      tag: 'Modern',      defaultColor: '#0f766e' },
  { id: 'topband',       name: 'Top Band',        tag: 'Modern',      defaultColor: '#7c3aed' },
  { id: 'cornerphoto',   name: 'Corner Photo',    tag: 'Classic',     defaultColor: '#0369a1' },
  { id: 'labelrow',      name: 'Label Row',       tag: 'Structured',  defaultColor: '#2d2db0' },
  { id: 'velvetrose',    name: 'Velvet Rose',     tag: 'Elegant',     defaultColor: '#c2847a' },
  { id: 'manuscript',    name: 'Manuscript',      tag: 'Unique',      defaultColor: '#5c7a6b' },
  // TemplatesNew6
  { id: 'zen',           name: 'Zen',             tag: 'Minimal',     defaultColor: '#8b5cf6' },
  { id: 'charcoalside',  name: 'Charcoal Side',   tag: 'Dark',        defaultColor: '#8b5cf6' },
  { id: 'cinema',        name: 'Cinema',          tag: 'Bold',        defaultColor: '#d4a017' },
  { id: 'archive',       name: 'Archive',         tag: 'Editorial',   defaultColor: '#1a1a1a' },
  { id: 'prisma',        name: 'Prisma',          tag: 'Modern',      defaultColor: '#8b5cf6' },
  { id: 'north',         name: 'North',           tag: 'Scandi',      defaultColor: '#2563eb' },
  { id: 'studio',        name: 'Studio',          tag: 'Creative',    defaultColor: '#e11d48' },
  { id: 'legacy',        name: 'Legacy',          tag: 'Classic',     defaultColor: '#1e3a5f' },
  { id: 'spectrum',      name: 'Spectrum',        tag: 'Colorful',    defaultColor: '#06b6d4' },
  { id: 'monolith',      name: 'Monolith',        tag: 'Executive',   defaultColor: '#111827' },
  // Custom elegant
  { id: 'aurorapro',     name: 'Aurora Pro',      tag: 'Elegant',     defaultColor: '#a78bfa' },
  { id: 'petal',         name: 'Petal',           tag: 'Soft',        defaultColor: '#7c9885' },
  { id: 'foldio',        name: 'Foldio',          tag: 'Unique',      defaultColor: '#6366f1' },
  { id: 'nightowl',      name: 'Night Owl',       tag: 'Dark',        defaultColor: '#38bdf8' },
  { id: 'geometric',     name: 'Geometric',       tag: 'Modern',      defaultColor: '#8b5cf6' },
  { id: 'waveflow',      name: 'Wave Flow',       tag: 'Unique',      defaultColor: '#0ea5e9' },
  { id: 'tidal',         name: 'Tidal',           tag: 'Unique',      defaultColor: '#0d9488',  noColorChange: true },
  { id: 'crest',         name: 'Crest',           tag: 'Waves',       defaultColor: '#7c3aed',  noColorChange: true },
  { id: 'midwave',       name: 'Mid Wave',        tag: 'Waves',       defaultColor: '#0891b2' },
  { id: 'tagstorm',      name: 'Tag Storm',       tag: 'Creative',    defaultColor: '#f59e0b',  noColorChange: true },
  { id: 'carddeck',      name: 'Card Deck',       tag: 'Creative',    defaultColor: '#6366f1' },
  { id: 'triwave',       name: 'Tri Wave',        tag: 'Waves',       defaultColor: '#0f766e' },
  { id: 'ripple',        name: 'Ripple',          tag: 'Waves',       defaultColor: '#0891b2' },
  { id: 'surge',         name: 'Surge',           tag: 'Waves',       defaultColor: '#1d4ed8' },
  { id: 'ripplebg',     name: 'Ripple BG',       tag: 'Waves',       defaultColor: '#0891b2' },
  { id: 'slash',        name: 'Slash',           tag: 'Unique',      defaultColor: '#7c3aed' },
  { id: 'bubbleskill', name: 'Bubble Skill',    tag: 'Creative',    defaultColor: '#0891b2' },
  { id: 'paratag', name: 'Para Tag', tag: 'Creative', defaultColor: '#dc2626' },
  { id: 'accentbar2', name: 'Accent Bar 2', tag: 'Unique', defaultColor: '#0f766e' },
  { id: 'runway',     name: 'Runway',      tag: 'Creative',  defaultColor: '#be185d' },
  { id: 'honeycomb',     name: 'Honeycomb',     tag: 'Creative', defaultColor: '#7c3aed' },
  { id: 'constellation', name: 'Constellation', tag: 'Dark',     defaultColor: '#38bdf8' },
  { id: 'paperfold',    name: 'Paper Fold',   tag: 'Unique',   defaultColor: '#0891b2' },
  { id: 'neonoutline', name: 'Neon Outline', tag: 'Creative', defaultColor: '#10b981' },
  { id: 'luminary',   name: 'Luminary',   tag: 'Elegant',   defaultColor: '#b45309' },
  { id: 'editorial', name: 'Editorial',  tag: 'Elegant',  defaultColor: '#7c3aed' },
  { id: 'golden',    name: 'Golden',     tag: 'Unique',   defaultColor: '#0891b2' },
  { id: 'mosaicpro', name: 'Mosaic Pro', tag: 'Creative', defaultColor: '#e11d48' },
  { id: 'prismpro',  name: 'Prism Pro',  tag: 'Unique',   defaultColor: '#6366f1' },
  { id: 'corneraccent', name: 'Corner Accent', tag: 'Minimal',  defaultColor: '#0f766e' },
  { id: 'stackedbands',  name: 'Stacked Bands',  tag: 'Unique',   defaultColor: '#0369a1' },
  { id: 'frame',         name: 'Frame',          tag: 'Elegant',  defaultColor: '#1e40af' },
  { id: 'stripebold',    name: 'Stripe Bold',    tag: 'Modern',   defaultColor: '#f97316' },
  { id: 'mytemplate', name: 'My Template', tag: 'New', defaultColor: '#8b5cf6' },
  { id: 'cleanpro',   name: 'Clean Pro',   tag: 'Clean', defaultColor: '#2563eb' },
      { id: 'tempbar2', name: 'Temp Bar 2', tag: 'New', defaultColor: '#06b6d4' },
      { id: 'luxurygold', name: 'Luxury Gold', tag: 'Elegant', defaultColor: '#d4af37' },
        { id: 'minimalelegance', name: 'Minimal Elegance', tag: 'Clean', defaultColor: '#2d2d2d' },
           { id: 'softaurora', name: 'Soft Aurora', tag: 'Dreamy', defaultColor: '#f0a3b3' },
            { id: 'aquaflow', name: 'Aqua Flow', tag: 'Liquid', defaultColor: '#00b4d8' },
             { id: 'classicluxe', name: 'Classic Luxe', tag: 'Professional', defaultColor: '#8b7355' },
               { id: 'modernedge', name: 'Modern Edge', tag: 'Bold', defaultColor: '#6366f1' },
]

const sampleResume = {
  personalInfo: {
    name: 'xyz', jobTitle: 'Software Engineer',
    email: 'prachi@email.com', phone: '+91 98765 43210',
    location: 'Mumbai, India', website: 'abcdev.com',
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
    { id: '3', name: 'Node.js', level: 90 },    { id: '4', name: 'Python', level: 80 },
    { id: '5', name: 'AWS', level: 78 },        { id: '6', name: 'Docker', level: 75 },
  ],
  projects: [
    { id: '1', name: 'Resume Maker', tech: 'Next.js, MySQL, OpenAI', link: 'resumemaker.vercel.app', description: 'AI resume builder with templates. 2,000+ users.' },
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
      border: active ? '2px solid #8b5cf6' : '2px solid rgba(255,255,255,0.08)',
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

const fonts = [
  { label: 'Arial',           value: 'Arial, Helvetica, sans-serif' },
  { label: 'Georgia',         value: 'Georgia, serif' },
  { label: 'Times New Roman', value: "'Times New Roman', Times, serif" },
  { label: 'Garamond',        value: 'Garamond, serif' },
  { label: 'Palatino',        value: "'Palatino Linotype', Palatino, serif" },
  { label: 'Trebuchet MS',    value: "'Trebuchet MS', sans-serif" },
  { label: 'Verdana',         value: 'Verdana, Geneva, sans-serif' },
  { label: 'Tahoma',          value: 'Tahoma, Geneva, sans-serif' },
  { label: 'Courier New',     value: "'Courier New', Courier, monospace" },
]

export default function TemplateSelector() {
  const { resume, updateTemplate, updateThemeColor, updateFontFamily } = useResumeStore()
  const [colorOpen, setColorOpen] = useState(true)
  const [fontOpen, setFontOpen] = useState(true)

  const activeFontLabel = fonts.find(f => f.value === resume.fontFamily)?.label || 'Arial'
  const activeTemplate = templateList.find(t => t.id === resume.template)
  const supportsColor = !activeTemplate?.noColorChange

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

      {/* Template grid */}
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 12 }}>
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
                  <p style={{ fontSize: '0.58rem', color: t.tag === 'Pro' ? '#f59e0b' : t.tag === 'New' ? '#34d399' : '#475569' }}>{t.tag}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Font Family */}
      <div style={{ flexShrink: 0, borderTop: '1px solid rgba(255,255,255,0.08)', background: '#050508' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', cursor: 'pointer' }} onClick={() => setFontOpen(o => !o)}>
          <p style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', userSelect: 'none' }}>
            Font Family
            {fontOpen && <span style={{ color: '#a78bfa', fontFamily: 'monospace', marginLeft: 6 }}>{activeFontLabel}</span>}
          </p>
          <button onClick={e => { e.stopPropagation(); setFontOpen(o => !o) }}
            style={{ display: 'flex', alignItems: 'center', gap: 4, padding: fontOpen ? '0' : '3px 9px', width: fontOpen ? 20 : 'auto', height: fontOpen ? 20 : 'auto', borderRadius: fontOpen ? '50%' : 6, background: fontOpen ? 'rgba(248,113,113,0.15)' : 'rgba(139,92,246,0.15)', border: fontOpen ? '1px solid rgba(248,113,113,0.35)' : '1px solid rgba(139,92,246,0.35)', color: fontOpen ? '#f87171' : '#a78bfa', cursor: 'pointer', fontSize: '0.65rem', fontWeight: 700, justifyContent: 'center', transition: 'all 0.2s' }}>
            {fontOpen ? <X size={11} /> : <><RotateCcw size={10} /> Show</>}
          </button>
        </div>
        {fontOpen && (
          <div style={{ paddingBottom: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {fonts.map(f => {
              const active = resume.fontFamily === f.value
              return (
                <button key={f.value} onClick={() => updateFontFamily(f.value)}
                  style={{ width: '100%', textAlign: 'left', padding: '7px 10px', borderRadius: 7, border: 'none', cursor: 'pointer', background: active ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.03)', outline: active ? '1px solid rgba(139,92,246,0.4)' : '1px solid rgba(255,255,255,0.06)', color: active ? '#a78bfa' : '#94a3b8', fontFamily: f.value, fontSize: '0.78rem', transition: 'all 0.15s', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}>
                  <span>{f.label}</span>
                  {active && <Check size={11} color="#a78bfa" />}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Theme Color */}
      {supportsColor && (
      <div style={{ flexShrink: 0, borderTop: '1px solid rgba(255,255,255,0.08)', background: '#050508', position: 'sticky', bottom: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', cursor: 'pointer' }} onClick={() => setColorOpen(o => !o)}>
          <p style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', userSelect: 'none' }}>
            Theme Color
            {colorOpen && <span style={{ color: resume.themeColor, fontFamily: 'monospace', marginLeft: 6 }}>{resume.themeColor}</span>}
          </p>
          <button onClick={e => { e.stopPropagation(); setColorOpen(o => !o) }}
            style={{ display: 'flex', alignItems: 'center', gap: 4, padding: colorOpen ? '0' : '3px 9px', width: colorOpen ? 20 : 'auto', height: colorOpen ? 20 : 'auto', borderRadius: colorOpen ? '50%' : 6, background: colorOpen ? 'rgba(248,113,113,0.15)' : 'rgba(139,92,246,0.15)', border: colorOpen ? '1px solid rgba(248,113,113,0.35)' : '1px solid rgba(139,92,246,0.35)', color: colorOpen ? '#f87171' : '#a78bfa', cursor: 'pointer', fontSize: '0.65rem', fontWeight: 700, justifyContent: 'center', transition: 'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            {colorOpen ? <X size={11} /> : <><RotateCcw size={10} /> Show</>}
          </button>
        </div>
        {colorOpen && (
          <div style={{ paddingBottom: 14 }}>
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
        )}
      </div>
      )}

      {/* No color change notice */}
      {!supportsColor && (
        <div style={{ flexShrink: 0, borderTop: '1px solid rgba(255,255,255,0.08)', background: '#050508', padding: '10px 0' }}>
          <p style={{ fontSize: '0.68rem', color: '#475569', textAlign: 'center', margin: 0 }}>
            🎨 This template uses a fixed color palette
          </p>
        </div>
      )}

    </div>
  )
}
