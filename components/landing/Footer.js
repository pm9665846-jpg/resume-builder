'use client'
import Link from 'next/link'
import { Zap } from 'lucide-react'

const footerLinks = [
  { title: 'Product', links: ['Features', 'Templates'], hrefs: ['#features', '#templates'] },
  { title: 'Company', links: ['About'], hrefs: ['/about'] },
  { title: 'Legal',   links: ['Privacy', 'Terms'], hrefs: ['/privacy-policy', '/terms'] },
]

export default function Footer() {
  return (
    <footer style={{ width: '100%', background: 'var(--footer-bg)', borderTop: '1px solid var(--border3)' }}>
      <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', padding: '60px 24px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 2', minWidth: 200 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 16 }}>
              <img src="/logo.png" alt="Resume Maker" style={{ width: 32, height: 32, objectFit: 'contain' }} />
              <span className="gradient-text" style={{ fontWeight: 700, fontSize: '1.1rem' }}>Resume Maker</span>
            </div>
            <p style={{ color: 'var(--text3)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: 260 }}>
              The most powerful resume builder for modern professionals. Land your dream job faster.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {['GH', 'TW', 'LI'].map(s => (
                <a key={s} href="#"
                  style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)', fontSize: '0.7rem', fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.5)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border)' }}
                >{s}</a>
              ))}
            </div>
          </div>
          {/* Link columns */}
          {footerLinks.map(col => (
            <div key={col.title}>
              <h4 style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem', marginBottom: 16 }}>{col.title}</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none' }}>
                {col.links.map((link, i) => (
                  <li key={link}>
                    <Link href={col.hrefs?.[i] || '#'}
                      style={{ color: 'var(--text3)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}
                    >{link}</Link>                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid var(--border3)', paddingTop: 24, display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ color: 'var(--text3)', fontSize: '0.875rem' }}>© 2026 Resume Maker. All rights reserved.</p>
          <p style={{ color: 'var(--text3)', fontSize: '0.875rem' }}>Made with ❤️ for job seekers worldwide</p>
        </div>
      </div>
    </footer>
  )
}