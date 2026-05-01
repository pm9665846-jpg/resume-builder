'use client'
import Link from 'next/link'

const footerLinks = [
  { title: 'Product', links: ['Features', 'Templates'], hrefs: ['#features', '#templates'] },
  { title: 'Company', links: ['About'], hrefs: ['/about'] },
  { title: 'Legal', links: ['Privacy', 'Terms'], hrefs: ['/privacy-policy', '/terms'] },
]

export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        background: 'var(--footer-bg)',
        borderTop: '1px solid var(--border3)',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1280,
          margin: '0 auto',
          padding: '60px 24px 32px',
        }}
      >
        {/* Main Layout - Same grid layout on mobile */}
        <div
          className="footer-main"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 16,
              }}
            >
              <img
                src="/logo.png"
                alt="Fresh CV"
                style={{
                  width: 32,
                  height: 32,
                  objectFit: 'contain',
                }}
              />
              <span
                className="gradient-text"
                style={{
                  fontWeight: 700,
                  fontSize: '1.1rem',
                }}
              >
                Fresh CV
              </span>
            </div>

            <p
              style={{
                color: 'var(--text3)',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                maxWidth: 280,
              }}
            >
              The most powerful resume builder for modern professionals.
              Land your dream job faster.
            </p>

            <div
              style={{
                display: 'flex',
                gap: 10,
                marginTop: 20,
              }}
            >
              {['GH', 'TW', 'LI'].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text2)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--text)'
                    e.currentTarget.style.borderColor =
                      'rgba(124,58,237,0.5)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text2)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links - Same layout structure */}
          <div
            className="footer-links"
            style={{
              display: 'flex',
              gap: 30,
              justifyContent: 'space-between',
              flexWrap: 'wrap', // Allows wrapping on very small screens but keeps same structure
              width: '100%',
            }}
          >
            {footerLinks.map((col) => (
              <div
                key={col.title}
                style={{
                  flex: 1,
                  minWidth: 80,
                }}
              >
                <h4
                  style={{
                    color: 'var(--text)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    marginBottom: 14,
                  }}
                >
                  {col.title}
                </h4>

                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {col.links.map((link, i) => (
                    <li key={link}>
                      <Link
                        href={col.hrefs?.[i] || '#'}
                        style={{
                          color: 'var(--text3)',
                          fontSize: '0.875rem',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = 'var(--text)')
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = 'var(--text3)')
                        }
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: '1px solid var(--border3)',
            paddingTop: 24,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            textAlign: 'center',
          }}
        >
          <p
            style={{
              color: 'var(--text3)',
              fontSize: '0.875rem',
              margin: 0,
            }}
          >
            © 2026 Fresh CV. All rights reserved.
          </p>

          <p
            style={{
              color: 'var(--text3)',
              fontSize: '0.875rem',
              margin: 0,
            }}
          >
            Made with ❤️ for job seekers worldwide
          </p>
        </div>
      </div>

      {/* Responsive: Only adjust spacing, not layout */}
      <style jsx>{`
        @media (max-width: 768px) {
          .footer-main {
            gap: 35px !important;
          }
          
          .footer-links {
            gap: 20px !important;
          }
        }
        
        @media (max-width: 550px) {
          .footer-links {
            gap: 15px !important;
          }
          
          .footer-links > div {
            min-width: 70px !important;
          }
        }
      `}</style>
    </footer>
  )
}