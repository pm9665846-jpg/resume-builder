'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/components/providers/ThemeProvider'

const navLinks = [
  { label: 'Features',  href: '#features' },
  { label: 'Templates', href: '#templates' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1])
  const { theme, toggle } = useTheme()

  return (
    <header className="navbar">
      {/* Background — uses CSS variable so it switches with theme */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'var(--navbar-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }} />

      <div className="navbar-inner" style={{ position: 'relative', zIndex: 1 }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 0, textDecoration: 'none' }}>
          <img src="/logo.png" alt="Resume Maker" style={{ width: 80, height: 100, objectFit: 'contain', flexShrink: 0 }} />
          <span className="gradient-text" style={{ fontWeight: 700, fontSize: '1.125rem' }}>Resume Maker</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}
              style={{ fontSize: '0.875rem', color: 'var(--text2)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text2)'}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="hidden md:flex">
          {/* Theme toggle */}
          <button onClick={toggle} className="theme-toggle" title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}>
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link href="/login"
            style={{ fontSize: '0.875rem', color: 'var(--text2)', textDecoration: 'none', padding: '8px 16px', borderRadius: 10, transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'var(--hover-bg)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.background = 'transparent' }}
          >
            Sign In
          </Link>
          <Link href="/register"
            style={{ fontSize: '0.875rem', fontWeight: 600, color: 'white', textDecoration: 'none', padding: '8px 20px', borderRadius: 10, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', transition: 'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="md:hidden">
          <button onClick={toggle} className="theme-toggle" title="Toggle theme" style={{ width: 34, height: 34 }}>
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button onClick={() => setOpen(!open)}
            style={{ color: 'var(--text2)', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          position: 'relative', zIndex: 1,
          background: 'var(--navbar-bg)',
          borderTop: '1px solid var(--border3)',
          padding: '16px 24px 24px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setOpen(false)}
                style={{ color: 'var(--text2)', textDecoration: 'none', padding: '8px 0', fontSize: '0.9rem' }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ borderTop: '1px solid var(--border3)', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {/* Mobile theme toggle */}
              <button onClick={toggle}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '10px', borderRadius: 10, color: 'var(--text2)', border: '1px solid var(--border)', background: 'var(--card)', cursor: 'pointer', fontSize: '0.875rem' }}
              >
                {theme === 'dark' ? <><Sun size={14} /> Light Mode</> : <><Moon size={14} /> Dark Mode</>}
              </button>
              <Link href="/login"
                style={{ textAlign: 'center', padding: '10px', borderRadius: 10, color: 'var(--text2)', border: '1px solid var(--border)', textDecoration: 'none', fontSize: '0.875rem' }}
              >Sign In</Link>
              <Link href="/register"
                style={{ textAlign: 'center', padding: '10px', borderRadius: 10, color: 'white', background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}
              >Get Started Free</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
