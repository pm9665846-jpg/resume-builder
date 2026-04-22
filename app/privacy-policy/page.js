'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ShieldCheck } from 'lucide-react'

function renderContent(content) {
  if (!content) return null
  return content.split('\n').map((line, i) => {
    if (line.startsWith('## ')) {
      return <h2 key={i} style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text)', marginTop: 28, marginBottom: 10, paddingBottom: 8, borderBottom: '1px solid var(--border)' }}>{line.slice(3)}</h2>
    }
    if (line.startsWith('**') && line.endsWith('**')) {
      return <p key={i} style={{ fontSize: '0.875rem', fontWeight: 700, color: '#a78bfa', marginBottom: 4 }}>{line.slice(2, -2)}</p>
    }
    if (line.trim() === '') return <div key={i} style={{ height: 8 }} />
    return <p key={i} style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.75, margin: '0 0 6px', paddingLeft: line.startsWith('- ') ? 16 : 0 }}>{line.startsWith('- ') ? '• ' + line.slice(2) : line}</p>
  })
}

export default function PrivacyPolicyPage() {
  const [page, setPage] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/pages/privacy-policy')
      .then(r => r.json())
      .then(data => { if (data.success) setPage(data.page) })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div style={{ padding: '40px 32px', maxWidth: 860, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>

        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text3)', textDecoration: 'none', fontSize: '0.85rem', marginBottom: 28 }}
          onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        {/* Hero */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 32, flexWrap: 'wrap' }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, flexShrink: 0, background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2))', border: '1px solid rgba(139,92,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShieldCheck size={26} color="#a78bfa" />
          </div>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: 999, padding: '3px 12px', fontSize: '0.68rem', color: '#a78bfa', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>
              Legal
            </div>
            <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 900, color: 'var(--text)', lineHeight: 1.1, marginBottom: 6 }}>
              {loading ? 'Privacy Policy' : (page?.title || 'Privacy Policy')}
            </h1>
            <p style={{ color: 'var(--text3)', fontSize: '0.85rem' }}>Last updated: April 20, 2026</p>
          </div>
        </div>

        {/* Content */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: '28px 32px' }}>
          {loading ? (
            <div style={{ color: 'var(--text3)', textAlign: 'center', padding: 40 }}>Loading...</div>
          ) : page ? (
            <div>{renderContent(page.content)}</div>
          ) : (
            <p style={{ color: 'var(--text3)' }}>Content not available.</p>
          )}
        </div>

        {/* Footer */}
        <div style={{ marginTop: 24, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link href="/" style={{ fontSize: '0.82rem', color: 'var(--text3)', textDecoration: 'none' }}>← Home</Link>
          <Link href="/terms" style={{ fontSize: '0.82rem', color: 'var(--text3)', textDecoration: 'none' }}>Terms & Conditions</Link>
          <Link href="/about" style={{ fontSize: '0.82rem', color: 'var(--text3)', textDecoration: 'none' }}>About Us</Link>
        </div>

      </motion.div>
    </div>
  )
}
