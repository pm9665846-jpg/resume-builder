'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Star, Zap } from 'lucide-react'

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 80, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 30 })

  useEffect(() => {
    const move = (e) => {
      mouseX.set((e.clientX - window.innerWidth / 2) * 0.05)
      mouseY.set((e.clientY - window.innerHeight / 2) * 0.05)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '80px',
      paddingBottom: '60px',
      position: 'relative',
      overflow: 'hidden',
      background: '#050508',
    }}>
      {/* Background orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <motion.div style={{ x: springX, y: springY, position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <div style={{ width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)' }} />
        </motion.div>
        <div style={{ position: 'absolute', top: '60%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)' }} />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Badge */}
        <motion.div variants={item} style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <div className="animated-border" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            borderRadius: 999, padding: '6px 16px',
            fontSize: '0.75rem', fontWeight: 500, color: '#a78bfa',
          }}>
            <Sparkles size={12} color="#a78bfa" />
            AI-Powered Resume Builder — Now in Beta
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={item} style={{
          fontSize: 'clamp(2.5rem, 7vw, 5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          marginBottom: 24,
          color: 'white',
        }}>
          Build Resumes<br />
          <span className="gradient-text">That Get You Hired</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p variants={item} style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: '#94a3b8',
          maxWidth: 600,
          margin: '0 auto 40px',
          lineHeight: 1.7,
        }}>
          Create stunning, ATS-optimized resumes in minutes. Choose from premium templates,
          customize with live preview, and export to PDF or DOCX instantly.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} style={{
          display: 'flex', flexWrap: 'wrap', gap: 16,
          justifyContent: 'center', marginBottom: 56,
        }}>
          <Link href="/register" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 32px', borderRadius: 12,
            background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
            color: 'white', fontWeight: 700, fontSize: '1rem',
            textDecoration: 'none', transition: 'all 0.3s',
            boxShadow: '0 0 30px rgba(139,92,246,0.3)',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(139,92,246,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(139,92,246,0.3)' }}
          >
            <Zap size={18} /> Start Building Free <ArrowRight size={18} />
          </Link>
          <Link href="#templates" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 32px', borderRadius: 12,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            color: 'white', fontWeight: 600, fontSize: '1rem',
            textDecoration: 'none', transition: 'all 0.3s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
          >
            View Templates
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.div variants={item} style={{
          display: 'flex', flexWrap: 'wrap', gap: 24,
          justifyContent: 'center', alignItems: 'center',
          color: '#64748b', fontSize: '0.875rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex' }}>
              {['#8b5cf6', '#3b82f6', '#06b6d4', '#ec4899'].map((bg, i) => (
                <div key={i} style={{
                  width: 28, height: 28, borderRadius: '50%', background: bg,
                  border: '2px solid #050508', marginLeft: i > 0 ? -8 : 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.7rem', color: 'white', fontWeight: 700,
                }}>
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span>50,000+ resumes created</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={14} color="#facc15" fill="#facc15" />)}
            <span style={{ marginLeft: 4 }}>4.9/5 rating</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
            No credit card required
          </div>
        </motion.div>

        {/* Mockup */}
        <motion.div variants={item} style={{ marginTop: 64, position: 'relative' }}>
          <div style={{
            borderRadius: 20, padding: 4,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 0 60px rgba(139,92,246,0.2)',
          }}>
            <div style={{
              borderRadius: 16, overflow: 'hidden',
              background: '#0a0a12',
              aspectRatio: '16/9',
              display: 'flex',
              padding: 24,
              gap: 16,
            }}>
              {/* Left panel */}
              <div style={{ width: '33%', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[...Array(5)].map((_, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: 12 }}
                  >
                    <div style={{ height: 8, background: 'rgba(139,92,246,0.3)', borderRadius: 4, width: '70%', marginBottom: 8 }} />
                    <div style={{ height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 4, marginBottom: 4 }} />
                    <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 4, width: '60%' }} />
                  </motion.div>
                ))}
              </div>
              {/* Right preview */}
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: 20 }}>
                <div style={{ height: 16, background: 'linear-gradient(to right, rgba(139,92,246,0.4), rgba(59,130,246,0.4))', borderRadius: 6, width: '50%', marginBottom: 12 }} />
                <div style={{ height: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 4, marginBottom: 8 }} />
                <div style={{ height: 8, background: 'rgba(255,255,255,0.06)', borderRadius: 4, width: '75%', marginBottom: 16 }} />
                <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', marginBottom: 16 }} />
                {[...Array(3)].map((_, i) => (
                  <div key={i} style={{ marginBottom: 14 }}>
                    <div style={{ height: 10, background: 'rgba(139,92,246,0.2)', borderRadius: 4, width: '40%', marginBottom: 6 }} />
                    <div style={{ height: 6, background: 'rgba(255,255,255,0.07)', borderRadius: 4, marginBottom: 4 }} />
                    <div style={{ height: 6, background: 'rgba(255,255,255,0.05)', borderRadius: 4, width: '80%' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Glow under */}
          <div style={{
            position: 'absolute', bottom: -30, left: '50%', transform: 'translateX(-50%)',
            width: '60%', height: 60, borderRadius: '50%',
            background: 'rgba(139,92,246,0.2)', filter: 'blur(30px)',
          }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
