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
      <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', padding: '48px 24px 32px' }}>

        {/* Main row — brand + links always side by side */}
        <div style={{ display: 'flex', gap: 32, marginBottom: 40, alignItems: 'flex-start', flexWrap: 'nowrap' }}>

          {/* Brand */}
          <div style={{ flex: '0 0 auto', maxWidth: 240 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 12 }}>
              <img src="/logo.png" alt="Fresh CV" style={{ width: 30, height: 30, objectFit: 'contain' }} />
              <span className="gradient-text" style={{ fontWeight: 700, fontSize: '1rem' }}>Fresh CV</span>
            </div>
            <p style={{ color: 'var(--text3)', fontSize: '0.8rem', lineHeight: 1.7, marginBottom: 14 }}>
              The most powerful resume builder for modern professionals.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {['GH', 'TW', 'LI'].map(s => (
                <a key={s} href="#"
                  style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)', fontSize: '0.65rem', fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border)' }}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* Links — always 3 columns in one row */}
          <div style={{ flex: 1, display: 'flex', gap: 16, justifyContent: 'flex-end' }}>
            {footerLinks.map(col => (
              <div key={col.title} style={{ minWidth: 0 }}>
                <h4 style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.8rem', marginBottom: 12, whiteSpace: 'nowrap' }}>{col.title}</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none', margin: 0, padding: 0 }}>
                  {col.links.map((link, i) => (
                    <li key={link}>
                      <Link href={col.hrefs?.[i] || '#'}
                        style={{ color: 'var(--text3)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap' }}
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
        <div style={{ borderTop: '1px solid var(--border3)', paddingTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, textAlign: 'center' }}>
          <p style={{ color: 'var(--text3)', fontSize: '0.8rem', margin: 0 }}>© 2026 Fresh CV. All rights reserved.</p>
          <p style={{ color: 'var(--text3)', fontSize: '0.8rem', margin: 0 }}>Made with ❤️ for job seekers worldwide</p>
        </div>

      </div>
    </footer>
  )
}
