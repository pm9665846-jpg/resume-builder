'use client'
import Link from 'next/link'

const footerLinks = [
  { title: 'Product', links: ['Features', 'Templates'], hrefs: ['#features', '#templates'] },
  { title: 'Company', links: ['About'],                 hrefs: ['/about'] },
  { title: 'Legal',   links: ['Privacy', 'Terms'],      hrefs: ['/privacy-policy', '/terms'] },
]

export default function Footer() {
  return (
    <footer style={{ width: '100%', background: 'var(--footer-bg)', borderTop: '1px solid var(--border3)' }}>
      <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', padding: '60px 24px 32px' }}>

        {/* ── Desktop: grid layout (original) ── */}
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 2', minWidth: 200 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 16 }}>
              <img src="/logo.png" alt="Fresh CV" style={{ width: 32, height: 32, objectFit: 'contain' }} />
              <span className="gradient-text" style={{ fontWeight: 700, fontSize: '1.1rem' }}>Fresh CV</span>
            </div>
            <p style={{ color: 'var(--text3)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: 260 }}>
              The most powerful resume builder for modern professionals. Land your dream job faster.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {['GH', 'TW', 'LI'].map(s => (
                <a key={s} href="#"
                  style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)', fontSize: '0.7rem', fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border)' }}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* Link columns — always in one row */}
          <div style={{ gridColumn: 'span 3', display: 'flex', gap: '24px 40px', flexWrap: 'nowrap', alignItems: 'flex-start' }}>
            {footerLinks.map(col => (
              <div key={col.title} style={{ minWidth: 70, flex: '1 1 0' }}>
                <h4 style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem', marginBottom: 16 }}>{col.title}</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none', margin: 0, padding: 0 }}>
                  {col.links.map((link, i) => (
                    <li key={link}>
                      <Link href={col.hrefs?.[i] || '#'}
                        style={{ color: 'var(--text3)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}
                      >{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid var(--border3)', paddingTop: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}>
          <p style={{ color: 'var(--text3)', fontSize: '0.875rem', margin: 0 }}>© 2026 Fresh CV. All rights reserved.</p>
          <p style={{ color: 'var(--text3)', fontSize: '0.875rem', margin: 0 }}>Made with ❤️ for job seekers worldwide</p>
        </div>

      </div>
    </footer>
  )
}
