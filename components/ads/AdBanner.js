'use client'
import { useEffect, useState } from 'react'
import { X, ExternalLink, Zap, Sparkles } from 'lucide-react'

export default function AdBanner({ position = 'top', variant = 'banner' }) {
  const [ad, setAd] = useState(null)
  const [dismissed, setDismissed] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    fetch(`/api/ads?position=${position}`)
      .then(r => r.json())
      .then(d => {
        if (d.success && d.ads?.length) {
          setAd(d.ads[0])
          setTimeout(() => setVisible(true), 200)
          fetch('/api/ads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: d.ads[0].id, type: 'impression' }),
          })
        }
      })
      .catch(() => {})
  }, [position])

  function handleDismiss() {
    setVisible(false)
    setTimeout(() => setDismissed(true), 350)
  }

  function handleClick() {
    if (!ad?.link_url) return
    fetch('/api/ads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: ad.id, type: 'click' }),
    })
    window.open(ad.link_url, '_blank', 'noopener')
  }

  if (!ad || dismissed) return null

  const accent = ad.accent_color || '#8b5cf6'
  const bg = ad.bg_color || '#0f0a1e'
  const textColor = ad.text_color || '#ffffff'

  // ── Inline card variant ──────────────────────────────────
  if (variant === 'card') {
    return (
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        background: `linear-gradient(135deg, ${bg} 0%, ${accent}22 60%, ${bg} 100%)`,
        border: `1px solid ${accent}35`,
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* top shimmer line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent 0%, ${accent} 50%, transparent 100%)`, zIndex: 2 }} />

        {/* Banner image — full width on top */}
        {ad.image_url && (
          <div style={{ width: '100%', height: 160, overflow: 'hidden', position: 'relative' }}>
            <img
              src={ad.image_url}
              alt={ad.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={e => e.currentTarget.parentElement.style.display = 'none'}
            />
            {/* overlay gradient so text below blends */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: `linear-gradient(to bottom, transparent, ${bg})` }} />
          </div>
        )}

        {/* Content row */}
        <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          {/* glow */}
          <div style={{ position: 'absolute', right: 60, top: '50%', transform: 'translateY(-50%)', width: 200, height: 80, borderRadius: '50%', background: `radial-gradient(ellipse, ${accent}18 0%, transparent 70%)`, pointerEvents: 'none' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, minWidth: 0 }}>
            {!ad.image_url && (
              <div style={{ width: 42, height: 42, borderRadius: 12, background: `${accent}20`, border: `1px solid ${accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Sparkles size={18} color={accent} />
              </div>
            )}
            <div style={{ minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                <span style={{ fontSize: '0.58rem', fontWeight: 800, color: accent, background: `${accent}18`, border: `1px solid ${accent}30`, padding: '1px 6px', borderRadius: 3, letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>Sponsored</span>
                <p style={{ color: textColor, fontWeight: 700, fontSize: '0.95rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ad.title}</p>
              </div>
              {ad.description && <p style={{ color: `${textColor}70`, fontSize: '0.8rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ad.description}</p>}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            {ad.link_url && (
              <button onClick={handleClick} style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '9px 20px', borderRadius: 10, border: 'none',
                background: `linear-gradient(135deg, ${accent}, ${accent}bb)`,
                color: '#fff', fontWeight: 700, fontSize: '0.85rem',
                cursor: 'pointer', whiteSpace: 'nowrap',
                boxShadow: `0 4px 18px ${accent}40`,
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 6px 24px ${accent}55` }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 18px ${accent}40` }}
              >
                <ExternalLink size={14} /> {ad.link_text || 'Learn More'}
              </button>
            )}
            <button onClick={handleDismiss} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', color: `${textColor}50`, padding: '8px', borderRadius: 8, display: 'flex', alignItems: 'center', transition: 'all 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = textColor }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = `${textColor}50` }}
            >
              <X size={14} />
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (position === 'top') {
    return (
      <div style={{
        transform: visible ? 'translateY(0)' : 'translateY(-110%)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease',
        background: `linear-gradient(90deg, ${bg} 0%, ${accent}22 50%, ${bg} 100%)`,
        borderBottom: `1px solid ${accent}35`,
        padding: '9px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 12, position: 'relative', overflow: 'hidden', zIndex: 50,
      }}>
        {/* animated shimmer line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${accent}80, transparent)`, animation: 'shimmer 2.5s infinite' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
            <Sparkles size={12} color={accent} />
            <span style={{ fontSize: '0.58rem', fontWeight: 800, color: accent, background: `${accent}18`, border: `1px solid ${accent}35`, padding: '2px 7px', borderRadius: 4, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Sponsored</span>
          </div>

          {ad.image_url && (
            <img src={ad.image_url} alt="" style={{ height: 26, width: 26, borderRadius: 6, objectFit: 'cover', flexShrink: 0 }} onError={e => e.target.style.display = 'none'} />
          )}

          <div style={{ minWidth: 0, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ color: textColor, fontWeight: 700, fontSize: '0.875rem', whiteSpace: 'nowrap' }}>{ad.title}</span>
            {ad.description && (
              <span style={{ color: `${textColor}70`, fontSize: '0.78rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ad.description}</span>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          {ad.link_url && (
            <button onClick={handleClick} style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '6px 16px', borderRadius: 20, border: `1px solid ${accent}60`,
              background: `linear-gradient(135deg, ${accent}dd, ${accent}99)`,
              color: '#fff', fontWeight: 700, fontSize: '0.78rem',
              cursor: 'pointer', whiteSpace: 'nowrap',
              boxShadow: `0 2px 14px ${accent}35`,
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = `0 4px 20px ${accent}55` }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = `0 2px 14px ${accent}35` }}
            >
              <Zap size={11} /> {ad.link_text || 'Learn More'}
            </button>
          )}
          <button onClick={handleDismiss} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer', color: `${textColor}50`, padding: '5px', borderRadius: 6, display: 'flex', alignItems: 'center', transition: 'all 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = textColor }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = `${textColor}50` }}
          >
            <X size={13} />
          </button>
        </div>
      </div>
    )
  }

  // Footer banner — more prominent
  return (
    <div style={{
      transform: visible ? 'translateY(0)' : 'translateY(110%)',
      opacity: visible ? 1 : 0,
      transition: 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease',
      background: `linear-gradient(135deg, ${bg} 0%, ${accent}20 60%, ${bg} 100%)`,
      borderTop: `1px solid ${accent}30`,
      padding: '14px 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 16, position: 'relative', overflow: 'hidden',
    }}>
      {/* glow orb */}
      <div style={{ position: 'absolute', right: 120, top: '50%', transform: 'translateY(-50%)', width: 180, height: 60, borderRadius: '50%', background: `radial-gradient(ellipse, ${accent}20 0%, transparent 70%)`, pointerEvents: 'none' }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1, minWidth: 0 }}>
        <div style={{ width: 38, height: 38, borderRadius: 10, background: `${accent}20`, border: `1px solid ${accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Sparkles size={16} color={accent} />
        </div>

        {ad.image_url && (
          <img src={ad.image_url} alt="" style={{ height: 38, width: 38, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} onError={e => e.target.style.display = 'none'} />
        )}

        <div style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
            <span style={{ fontSize: '0.58rem', fontWeight: 800, color: accent, background: `${accent}18`, border: `1px solid ${accent}30`, padding: '1px 6px', borderRadius: 3, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Ad</span>
            <p style={{ color: textColor, fontWeight: 700, fontSize: '0.9rem' }}>{ad.title}</p>
          </div>
          {ad.description && <p style={{ color: `${textColor}70`, fontSize: '0.78rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ad.description}</p>}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        {ad.link_url && (
          <button onClick={handleClick} style={{
            display: 'flex', alignItems: 'center', gap: 7,
            padding: '9px 20px', borderRadius: 10, border: 'none',
            background: `linear-gradient(135deg, ${accent}, ${accent}bb)`,
            color: '#fff', fontWeight: 700, fontSize: '0.85rem',
            cursor: 'pointer', whiteSpace: 'nowrap',
            boxShadow: `0 4px 18px ${accent}40`,
            transition: 'transform 0.15s, box-shadow 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 6px 24px ${accent}55` }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 18px ${accent}40` }}
          >
            <ExternalLink size={14} /> {ad.link_text || 'Learn More'}
          </button>
        )}
        <button onClick={handleDismiss} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', color: `${textColor}50`, padding: '8px', borderRadius: 8, display: 'flex', alignItems: 'center', transition: 'all 0.15s' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = textColor }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = `${textColor}50` }}
        >
          <X size={14} />
        </button>
      </div>
    </div>
  )
}
