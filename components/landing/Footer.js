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
        {/* Main Layout - Desktop: side by side, Mobile: stacked (brand on top, links below in row) */}
        <div
          className="footer-main"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand Section */}
          <div className="brand-section">
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
                    e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'
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

          {/* Links Section */}
          <div className="links-section">
            <div
              className="footer-links"
              style={{
                display: 'flex',
                gap: 30,
                justifyContent: 'space-between',
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

      {/* Responsive Styles */}
      <style jsx>{`
        /* Mobile view: brand section on top, links below in a single row */
        @media (max-width: 768px) {
          .footer-main {
            display: flex !important;
            flex-direction: column !important;
            gap: 35px !important;
          }

          .brand-section {
            width: 100% !important;
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }

          .brand-section p {
            max-width: 100% !important;
            text-align: center !important;
          }

          .links-section {
            width: 100% !important;
          }

          .footer-links {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: flex-start !important;
            gap: 20px !important;
            width: 100% !important;
          }

          .footer-links > div {
            flex: 1 !important;
            min-width: 0 !important;
            text-align: center !important;
          }

          .footer-links h4 {
            font-size: 0.875rem !important;
            margin-bottom: 12px !important;
          }

          .footer-links a {
            font-size: 0.75rem !important;
          }

          .footer-links ul {
            align-items: center !important;
          }
        }

        /* Extra small screens */
        @media (max-width: 480px) {
          .footer-links {
            gap: 12px !important;
          }

          .footer-links h4 {
            font-size: 0.8rem !important;
          }

          .footer-links a {
            font-size: 0.7rem !important;
          }
        }
      `}</style>
    </footer>
  )
}