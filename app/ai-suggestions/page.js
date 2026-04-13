'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Sparkles, Loader2, Copy, Check, RefreshCw, User, Briefcase, Code2, Zap, ChevronDown, ChevronUp, Send, ArrowLeft } from 'lucide-react'
import FloatingBackground from '@/components/ui/FloatingBackground'

const SUGGESTION_TYPES = [
  {
    id: 'summary', label: 'Professional Summary', icon: User, color: '#8b5cf6',
    description: 'AI-crafted summary that grabs attention',
    fields: [
      { key: 'name', label: 'Your Name', placeholder: 'e.g. xyz' },
      { key: 'jobTitle', label: 'Job Title', placeholder: 'e.g. Software Engineer' },
    ],
  },
  {
    id: 'experience', label: 'Job Description Bullets', icon: Briefcase, color: '#3b82f6',
    description: 'Strong action-verb bullet points for any role',
    fields: [
      { key: 'role', label: 'Job Title / Role', placeholder: 'e.g. Frontend Developer' },
      { key: 'company', label: 'Company Name', placeholder: 'e.g. Google' },
    ],
  },
  {
    id: 'project', label: 'Project Description', icon: Code2, color: '#06b6d4',
    description: 'Compelling project bullets with impact',
    fields: [
      { key: 'name', label: 'Project Name', placeholder: 'e.g. E-Commerce Platform' },
      { key: 'tech', label: 'Technologies Used', placeholder: 'e.g. React, Node.js, MongoDB' },
    ],
  },
  {
    id: 'skills', label: 'Skills List', icon: Zap, color: '#ec4899',
    description: 'Relevant skills tailored to your role',
    fields: [
      { key: 'jobTitle', label: 'Target Job Title', placeholder: 'e.g. Data Scientist' },
    ],
  },
]

function SuggestionCard({ type, index }) {
  const [expanded, setExpanded] = useState(index === 0)
  const [context, setContext] = useState({})
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [useCustom, setUseCustom] = useState(false)
  const [customPrompt, setCustomPrompt] = useState('')
  const Icon = type.icon

  async function generate() {
    setLoading(true); setError(''); setResult('')
    try {
      const res = await fetch('/api/ai/generate', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: useCustom ? 'custom' : type.id, context, customPrompt: useCustom ? customPrompt : undefined }),
      })
      const data = await res.json()
      if (data.error) { setError(data.error); return }
      setResult(data.result)
    } catch { setError('Something went wrong. Please try again.') }
    finally { setLoading(false) }
  }

  async function copy() {
    await navigator.clipboard.writeText(result)
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }

  const allFilled = useCustom ? customPrompt.trim().length > 0 : type.fields.every(f => context[f.key]?.trim())

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}
      style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${expanded ? type.color + '30' : 'rgba(255,255,255,0.08)'}`, borderRadius: 18, overflow: 'hidden', transition: 'border-color 0.3s' }}>
      <button onClick={() => setExpanded(!expanded)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, flexShrink: 0, background: `${type.color}18`, border: `1px solid ${type.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon size={20} color={type.color} />
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ color: 'white', fontWeight: 700, fontSize: '0.95rem', marginBottom: 3 }}>{type.label}</p>
          <p style={{ color: '#64748b', fontSize: '0.78rem' }}>{type.description}</p>
        </div>
        <div style={{ color: '#475569', flexShrink: 0 }}>{expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
            <div style={{ padding: '0 20px 20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', gap: 8, marginTop: 16, marginBottom: 16 }}>
                {['Auto Fill', 'Custom Prompt'].map((label, i) => (
                  <button key={label} onClick={() => setUseCustom(i === 1)}
                    style={{ padding: '5px 14px', borderRadius: 8, fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', border: 'none', transition: 'all 0.2s', background: (i === 1) === useCustom ? `${type.color}25` : 'rgba(255,255,255,0.05)', color: (i === 1) === useCustom ? type.color : '#64748b', outline: (i === 1) === useCustom ? `1px solid ${type.color}40` : 'none' }}>
                    {label}
                  </button>
                ))}
              </div>

              {!useCustom ? (
                <div style={{ display: 'grid', gridTemplateColumns: type.fields.length > 1 ? '1fr 1fr' : '1fr', gap: 12, marginBottom: 16 }}>
                  {type.fields.map(field => (
                    <div key={field.key}>
                      <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>{field.label}</label>
                      <input value={context[field.key] || ''} onChange={e => setContext(prev => ({ ...prev, [field.key]: e.target.value }))} placeholder={field.placeholder} className="input-glass" style={{ padding: '10px 14px', borderRadius: 10, fontSize: '0.85rem', width: '100%' }} />
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Describe what you want</label>
                  <textarea value={customPrompt} onChange={e => setCustomPrompt(e.target.value)} rows={3} className="input-glass" style={{ padding: '10px 14px', borderRadius: 10, fontSize: '0.85rem', width: '100%', resize: 'vertical' }} placeholder="e.g. Write a summary for a senior backend engineer..." />
                </div>
              )}

              <button onClick={generate} disabled={loading || !allFilled}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '11px 0', borderRadius: 11, border: 'none', cursor: loading || !allFilled ? 'not-allowed' : 'pointer', background: loading || !allFilled ? 'rgba(255,255,255,0.06)' : `linear-gradient(135deg, ${type.color}, ${type.color}bb)`, color: loading || !allFilled ? '#475569' : 'white', fontWeight: 700, fontSize: '0.85rem', transition: 'all 0.2s', boxShadow: !loading && allFilled ? `0 4px 20px ${type.color}30` : 'none' }}>
                {loading ? <><Loader2 size={15} className="animate-spin" /> Generating...</> : <><Sparkles size={15} /> Generate with AI</>}
              </button>

              {error && <p style={{ color: '#f87171', fontSize: '0.78rem', marginTop: 10, padding: '8px 12px', background: 'rgba(248,113,113,0.08)', borderRadius: 8 }}>{error}</p>}

              <AnimatePresence>
                {result && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    style={{ marginTop: 16, padding: '14px 16px', background: `${type.color}08`, border: `1px solid ${type.color}25`, borderRadius: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: type.color, display: 'flex', alignItems: 'center', gap: 5 }}><Sparkles size={11} /> AI Result</span>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <button onClick={generate} style={{ padding: '4px 8px', borderRadius: 7, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.7rem' }}><RefreshCw size={11} /></button>
                        <button onClick={copy} style={{ padding: '4px 10px', borderRadius: 7, background: copied ? 'rgba(52,211,153,0.15)' : 'rgba(255,255,255,0.06)', border: `1px solid ${copied ? 'rgba(52,211,153,0.3)' : 'rgba(255,255,255,0.1)'}`, color: copied ? '#34d399' : '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.7rem', fontWeight: 600 }}>
                          {copied ? <Check size={11} /> : <Copy size={11} />}{copied ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                    <p style={{ color: '#e2e8f0', fontSize: '0.85rem', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>{result}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function CustomPromptCard() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  async function generate() {
    if (!prompt.trim()) return
    setLoading(true); setError(''); setResult('')
    try {
      const res = await fetch('/api/ai/generate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'custom', customPrompt: prompt }) })
      const data = await res.json()
      if (data.error) { setError(data.error); return }
      setResult(data.result)
    } catch { setError('Something went wrong.') }
    finally { setLoading(false) }
  }

  async function copy() { await navigator.clipboard.writeText(result); setCopied(true); setTimeout(() => setCopied(false), 2000) }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
      style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.06), rgba(59,130,246,0.04))', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 18, padding: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.25))', border: '1px solid rgba(139,92,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Send size={20} color="#a78bfa" />
        </div>
        <div>
          <p style={{ color: 'white', fontWeight: 700, fontSize: '0.95rem', marginBottom: 2 }}>Free-form AI Prompt</p>
          <p style={{ color: '#64748b', fontSize: '0.78rem' }}>Ask anything — cover letters, LinkedIn bios, interview prep</p>
        </div>
      </div>
      <textarea value={prompt} onChange={e => setPrompt(e.target.value)} onKeyDown={e => e.key === 'Enter' && e.ctrlKey && generate()} rows={4} className="input-glass" style={{ padding: '12px 14px', borderRadius: 12, fontSize: '0.85rem', width: '100%', resize: 'vertical', marginBottom: 12 }} placeholder="e.g. Write a cover letter for a React developer... (Ctrl+Enter to generate)" />
      <button onClick={generate} disabled={loading || !prompt.trim()}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 0', borderRadius: 12, border: 'none', cursor: loading || !prompt.trim() ? 'not-allowed' : 'pointer', background: loading || !prompt.trim() ? 'rgba(255,255,255,0.06)' : 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: loading || !prompt.trim() ? '#475569' : 'white', fontWeight: 700, fontSize: '0.9rem', transition: 'all 0.2s', boxShadow: !loading && prompt.trim() ? '0 4px 20px rgba(139,92,246,0.3)' : 'none' }}>
        {loading ? <><Loader2 size={16} className="animate-spin" /> Generating...</> : <><Sparkles size={16} /> Generate</>}
      </button>
      {error && <p style={{ color: '#f87171', fontSize: '0.78rem', marginTop: 10 }}>{error}</p>}
      <AnimatePresence>
        {result && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: 16, padding: '16px', background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#a78bfa', display: 'flex', alignItems: 'center', gap: 5 }}><Sparkles size={11} /> AI Result</span>
              <button onClick={copy} style={{ padding: '4px 10px', borderRadius: 7, background: copied ? 'rgba(52,211,153,0.15)' : 'rgba(255,255,255,0.06)', border: `1px solid ${copied ? 'rgba(52,211,153,0.3)' : 'rgba(255,255,255,0.1)'}`, color: copied ? '#34d399' : '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.7rem', fontWeight: 600 }}>
                {copied ? <Check size={11} /> : <Copy size={11} />}{copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <p style={{ color: '#e2e8f0', fontSize: '0.85rem', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>{result}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function AIPage() {
  return (
    <div className="relative min-h-screen" style={{ background: '#050508', padding: '40px 32px' }}>
      <FloatingBackground />
      <div className="relative z-10" style={{ maxWidth: 780, margin: '0 auto' }}>

        {/* Top nav */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 36 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
            onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
            <ArrowLeft size={15} /> Back to Home
          </Link>
          <Link href="/login" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 16px', borderRadius: 10, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: 'white', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600 }}>
            Build My Resume →
          </Link>
        </div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 30px rgba(139,92,246,0.4)' }}>
              <Sparkles size={22} color="white" />
            </div>
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'white', marginBottom: 2 }}>AI Resume Assistant</h1>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Free · No login required · Powered by Gemini</p>
            </div>
          </div>
          <div style={{ padding: '12px 16px', borderRadius: 12, background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <Sparkles size={14} color="#a78bfa" style={{ flexShrink: 0 }} />
            <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.5 }}>
              Generate professional resume content instantly. <span style={{ color: '#a78bfa', fontWeight: 600 }}>100% free</span>, no account needed. Copy results into any resume builder.
            </p>
          </div>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 14 }}>
          {SUGGESTION_TYPES.map((type, i) => <SuggestionCard key={type.id} type={type} index={i} />)}
        </div>
        <CustomPromptCard />
      </div>
    </div>
  )
}
