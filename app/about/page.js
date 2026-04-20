'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Zap, Target, Heart, Users, Sparkles, FileText, Download, Shield, ArrowRight } from 'lucide-react'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }

const stats = [
  { value: '50,000+', label: 'Resumes Created' },
  { value: '200+',    label: 'Templates Available' },
  { value: '4.9/5',   label: 'User Rating' },
  { value: '98%',     label: 'ATS Pass Rate' },
]

const values = [
  { icon: Target,   color: '#8b5cf6', title: 'Built for Results',    desc: 'Every feature is designed with one goal — helping you land your dream job faster. No fluff, just tools that work.' },
  { icon: Heart,    color: '#ec4899', title: 'User First',           desc: 'We listen to our users. Every update, every template, every feature comes from real feedback from real job seekers.' },
  { icon: Shield,   color: '#3b82f6', title: 'Privacy by Design',    desc: 'Your resume data is yours. We never sell your information, never share it with third parties, and always keep it secure.' },
  { icon: Sparkles, color: '#f59e0b', title: 'Always Improving',     desc: 'We ship updates regularly. New templates, smarter AI suggestions, and better export quality — every single week.' },
]

const features = [
  { icon: FileText,  color: '#8b5cf6', title: '200+ Templates',      desc: 'From minimal to creative, ATS-friendly to executive — a template for every industry and style.' },
  { icon: Sparkles,  color: '#3b82f6', title: 'AI Suggestions',      desc: 'Smart writing assistance that helps you phrase your experience in the most impactful way.' },
  { icon: Download,  color: '#06b6d4', title: 'One-Click PDF Export', desc: 'Perfect formatting every time. Download your resume as a pixel-perfect PDF instantly.' },
  { icon: Users,     color: '#10b981', title: 'Live Preview',        desc: 'See every change in real-time. What you see is exactly what gets exported.' },
]

const team = [
  { initials: 'RB', name: 'Resume Builder Team', role: 'Builders & Designers', color: '#8b5cf6' },
]

export default function AboutPage() {
  return (
    <div style={{ padding: '40px 32px', maxWidth: 960, margin: '0 auto' }}>
      <motion.div variants={container} initial="hidden" animate="show">

        {/* Back */}
        <motion.div variants={item} style={{ marginBottom: 28 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
            onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div variants={item} style={{ marginBottom: 52, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 72, height: 72, borderRadius: 20, background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2))', border: '1px solid rgba(139,92,246,0.3)', marginBottom: 20 }}>
            <Zap size={32} color="#a78bfa" />
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: 999, padding: '4px 14px', fontSize: '0.7rem', color: '#a78bfa', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, display: 'flex', justifyContent: 'center', width: 'fit-content', margin: '0 auto 16px' }}>
            Our Story
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: 'var(--text)', lineHeight: 1.1, marginBottom: 20, letterSpacing: '-0.02em' }}>
            We help people tell their{' '}
            <span style={{ background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              professional story
            </span>
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8, maxWidth: 600, margin: '0 auto 32px' }}>
            Resume Builder was created with a simple belief — everyone deserves a great resume, regardless of their design skills or budget. We built the tool we wished existed when we were job hunting.
          </p>
          <Link href="/register"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 12, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: 'white', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}
          >
            Start Building Free <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div variants={item} style={{ marginBottom: 52 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
            {stats.map((s) => (
              <div key={s.label}
                style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: '24px 20px', textAlign: 'center', transition: 'border-color 0.3s, transform 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <p style={{ fontSize: '2.2rem', fontWeight: 900, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1, marginBottom: 8 }}>
                  {s.value}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text3)', fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div variants={item} style={{ marginBottom: 52 }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(59,130,246,0.05))', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 20, padding: '36px 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(139,92,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Target size={18} color="#a78bfa" />
              </div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)', margin: 0 }}>Our Mission</h2>
            </div>
            <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.85, margin: 0, maxWidth: 700 }}>
              To democratize professional resume creation. We believe a polished, well-designed resume should not require expensive designers or complicated software. Our mission is to give every job seeker — from fresh graduates to senior executives — the tools to present themselves confidently and professionally.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div variants={item} style={{ marginBottom: 52 }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text)', marginBottom: 20 }}>What We Stand For</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title}
                  style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: '22px 20px', transition: 'border-color 0.3s, transform 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = v.color + '40'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: v.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon size={20} color={v.color} />
                  </div>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{v.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text3)', lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div variants={item} style={{ marginBottom: 52 }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text)', marginBottom: 20 }}>What We Built</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title}
                  style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: '22px 20px', transition: 'border-color 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = f.color + '40'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: f.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon size={20} color={f.color} />
                  </div>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text3)', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={item}>
          <div style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(59,130,246,0.06))', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 20, padding: '36px 32px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text)', marginBottom: 12 }}>
              Ready to build your resume?
            </h2>
            <p style={{ color: 'var(--text3)', fontSize: '0.9rem', marginBottom: 24, maxWidth: 400, margin: '0 auto 24px' }}>
              Join 50,000+ professionals who have already built their resumes with us.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/register"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 26px', borderRadius: 12, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: 'white', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}
              >
                <Zap size={15} /> Get Started Free
              </Link>
              <Link href="/privacy-policy"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 26px', borderRadius: 12, background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text2)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}
              >
                Privacy Policy
              </Link>
              <Link href="/terms"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 26px', borderRadius: 12, background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text2)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  )
}
