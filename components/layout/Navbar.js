'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Zap, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Templates', href: '#templates' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1])

  return (
    <header className="navbar">
      {/* Animated background */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0"
        css={{ background: '#050508', backdropFilter: 'blur(20px)' }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: '#050508',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }} />

      <div className="navbar-inner" style={{ position: 'relative', zIndex: 1 }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.4 }}
            style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Zap size={16} color="white" />
          </motion.div>
          <span className="gradient-text" style={{ fontWeight: 700, fontSize: '1.125rem' }}>Resume Maker</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.875rem',
                color: '#94a3b8',
                textDecoration: 'none',
                transition: 'color 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'white'}
              onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="hidden md:flex">
          <Link href="/login" style={{
            fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none',
            padding: '8px 16px', borderRadius: 10, transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'transparent' }}
          >
            Sign In
          </Link>
          <Link href="/register" style={{
            fontSize: '0.875rem', fontWeight: 600, color: 'white', textDecoration: 'none',
            padding: '8px 20px', borderRadius: 10,
            background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{ color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          position: 'relative', zIndex: 1,
          background: 'rgba(5,5,8,0.98)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '16px 24px 24px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setOpen(false)}
                style={{ color: '#94a3b8', textDecoration: 'none', padding: '8px 0', fontSize: '0.9rem' }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Link href="/login" style={{
                textAlign: 'center', padding: '10px', borderRadius: 10, color: '#94a3b8',
                border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none', fontSize: '0.875rem',
              }}>Sign In</Link>
              <Link href="/register" style={{
                textAlign: 'center', padding: '10px', borderRadius: 10, color: 'white',
                background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600,
              }}>Get Started Free</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
