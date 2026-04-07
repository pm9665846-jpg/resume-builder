'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, Suspense, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'
import { Zap, Mail, Lock, User, ArrowRight, Check } from 'lucide-react'

// Template preview map for the sidebar
const templateNames = {
  modern: 'Modern', professional: 'Professional', tech: 'Tech',
  elegant: 'Elegant', creative: 'Creative', bold: 'Bold',
  executive: 'Executive', compact: 'Compact', minimal: 'Minimal',
}
const templateColors = {
  modern: '#8b5cf6', professional: '#1e3a5f', tech: '#00d4aa',
  elegant: '#b8860b', creative: '#ec4899', bold: '#f97316',
  executive: '#06b6d4', compact: '#2563eb', minimal: '#3b82f6',
}

function RegisterForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const templateParam = searchParams.get('template') || 'modern'
  const { status } = useSession()

  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const selectedTemplate = templateParam

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div style={{ minHeight: '100vh', background: '#050508', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 32, height: 32, border: '3px solid rgba(139,92,246,0.3)', borderTopColor: '#8b5cf6', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      </div>
    )
  }

  async function handleGoogleSignUp() {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('selectedTemplate', selectedTemplate)
    }
    await signIn('google', { callbackUrl: `/dashboard/create?template=${selectedTemplate}` })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Registration failed')
      // Sign in with credentials after registration
      await signIn('credentials', {
        email: form.email,
        password: form.password,
        redirect: false,
      })
      router.push(`/dashboard/create?template=${selectedTemplate}`)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const strength = form.password.length >= 8
    ? (form.password.match(/[A-Z]/) && form.password.match(/[0-9]/) ? 3 : 2)
    : form.password.length > 0 ? 1 : 0
  const strengthColors = ['', '#ef4444', '#eab308', '#22c55e']
  const strengthLabels = ['', 'Weak', 'Good', 'Strong']
  const tc = templateColors[selectedTemplate] || '#8b5cf6'

  return (
    <div style={{ minHeight: '100vh', width: '100%', background: '#050508', display: 'flex', position: 'relative' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle, ${tc}15 0%, transparent 70%)` }} />
      </div>

      {/* Left: Template preview panel */}
      <div style={{ width: '45%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 32px', position: 'relative', zIndex: 1 }}
        className="hidden md:flex"
      >
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: 8 }}>You selected</p>
          <h2 style={{ color: 'white', fontWeight: 800, fontSize: '1.5rem', marginBottom: 4 }}>
            <span style={{ color: tc }}>{templateNames[selectedTemplate] || 'Modern'}</span> Template
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Create your account to start building</p>
        </div>

        {/* Template preview card */}
        <div style={{
          width: 260, height: 347,
          borderRadius: 16, overflow: 'hidden',
          border: `2px solid ${tc}60`,
          boxShadow: `0 0 40px ${tc}30, 0 20px 60px rgba(0,0,0,0.5)`,
          background: 'white',
          position: 'relative',
        }}>
          {/* Scaled template preview */}
          <div style={{ fontSize: '0.6rem', color: '#333', padding: 12, height: '100%', overflow: 'hidden' }}>
            {/* Mini resume mockup matching the template style */}
            <TemplateMiniPreview templateId={selectedTemplate} color={tc} />
          </div>
        </div>

        {/* Features list */}
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {['Live preview as you type', 'Export to PDF & DOCX', 'Change theme colors anytime', 'ATS-optimized formatting'].map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: `${tc}20`, border: `1px solid ${tc}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Check size={10} color={tc} />
              </div>
              <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Register form */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', maxWidth: 420 }}
        >
          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 20 }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={18} color="white" />
              </div>
              <span className="gradient-text" style={{ fontWeight: 700, fontSize: '1.2rem' }}>Resume Maker</span>
            </Link>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'white', marginBottom: 6 }}>Create your account</h1>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
              Start building with the <span style={{ color: tc, fontWeight: 600 }}>{templateNames[selectedTemplate]}</span> template
            </p>
          </div>

          {/* Card */}
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 28, backdropFilter: 'blur(20px)' }}>
            {error && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 10, padding: '10px 14px', marginBottom: 18, color: '#f87171', fontSize: '0.85rem', textAlign: 'center' }}>
                {error}
              </motion.div>
            )}

            {/* Google Sign Up */}
            <button
              type="button"
              onClick={handleGoogleSignUp}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: '12px', borderRadius: 12, marginBottom: 18,
                background: 'white', border: '1px solid #e5e7eb',
                color: '#374151', fontWeight: 600, fontSize: '0.9rem',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#f9fafb'}
              onMouseLeave={e => e.currentTarget.style.background = 'white'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign up with Google
            </button>

            {/* Divider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
              <span style={{ color: '#475569', fontSize: '0.72rem' }}>or register with email</span>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Prachi Mishra', icon: User },
                { key: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', icon: Mail },
                { key: 'password', label: 'Password', type: 'password', placeholder: 'Min. 8 characters', icon: Lock },
              ].map(({ key, label, type, placeholder, icon: Icon }) => (
                <div key={key}>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>{label}</label>
                  <div style={{ position: 'relative' }}>
                    <Icon size={14} color="#64748b" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                    <input
                      type={type} placeholder={placeholder}
                      value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })}
                      required minLength={key === 'password' ? 8 : undefined}
                      className="input-glass"
                      style={{ paddingLeft: 36, paddingRight: 14, paddingTop: 11, paddingBottom: 11, borderRadius: 10, fontSize: '0.875rem' }}
                    />
                  </div>
                  {key === 'password' && form.password && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
                      <div style={{ display: 'flex', gap: 3, flex: 1 }}>
                        {[1, 2, 3].map(i => (
                          <div key={i} style={{ height: 3, flex: 1, borderRadius: 999, background: i <= strength ? strengthColors[strength] : 'rgba(255,255,255,0.1)', transition: 'background 0.3s' }} />
                        ))}
                      </div>
                      <span style={{ fontSize: '0.7rem', color: strengthColors[strength] }}>{strengthLabels[strength]}</span>
                    </div>
                  )}
                </div>
              ))}

              <p style={{ fontSize: '0.75rem', color: '#64748b' }}>
                By signing up, you agree to our{' '}
                <Link href="#" style={{ color: '#a78bfa', textDecoration: 'none' }}>Terms</Link> &{' '}
                <Link href="#" style={{ color: '#a78bfa', textDecoration: 'none' }}>Privacy Policy</Link>.
              </p>

              <button type="submit" disabled={loading} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '13px', borderRadius: 12, border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                color: 'white', fontWeight: 700, fontSize: '0.95rem',
                opacity: loading ? 0.7 : 1, transition: 'all 0.2s',
              }}>
                {loading
                  ? <span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} />
                  : null}
                Create Account & Start Building <ArrowRight size={15} />
              </button>
            </form>

            <p style={{ textAlign: 'center', marginTop: 20, fontSize: '0.85rem', color: '#64748b' }}>
              Already have an account?{' '}
              <Link href="/login" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 600 }}>Sign in</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Mini preview that matches each template's visual style
function TemplateMiniPreview({ templateId, color }) {
  const c = color
  const previews = {
    modern: (
      <div style={{ height: '100%' }}>
        <div style={{ height: 12, background: '#111', borderRadius: 3, width: '60%', marginBottom: 4 }} />
        <div style={{ height: 2, background: c, marginBottom: 8 }} />
        <div style={{ height: 6, background: '#e5e7eb', borderRadius: 2, marginBottom: 3 }} />
        <div style={{ height: 6, background: '#e5e7eb', borderRadius: 2, width: '80%', marginBottom: 10 }} />
        <div style={{ height: 8, background: c, borderRadius: 2, width: '40%', marginBottom: 6, opacity: 0.7 }} />
        {[...Array(4)].map((_, i) => <div key={i} style={{ height: 5, background: '#e5e7eb', borderRadius: 2, marginBottom: 3, width: i % 2 === 0 ? '100%' : '75%' }} />)}
      </div>
    ),
    professional: (
      <div style={{ height: '100%' }}>
        <div style={{ background: c, margin: '-12px -12px 10px', padding: '10px 12px' }}>
          <div style={{ height: 10, background: 'rgba(255,255,255,0.8)', borderRadius: 2, width: '55%', marginBottom: 4 }} />
          <div style={{ height: 4, background: 'rgba(255,255,255,0.4)', borderRadius: 1, width: '75%' }} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ width: '35%', background: '#f8f9fa', padding: 6, borderRadius: 4 }}>
            {[...Array(4)].map((_, i) => <div key={i} style={{ height: 4, background: '#ddd', borderRadius: 1, marginBottom: 3 }} />)}
          </div>
          <div style={{ flex: 1 }}>
            {[...Array(5)].map((_, i) => <div key={i} style={{ height: 4, background: '#e5e7eb', borderRadius: 1, marginBottom: 3 }} />)}
          </div>
        </div>
      </div>
    ),
    tech: (
      <div style={{ display: 'flex', height: '100%', margin: '-12px' }}>
        <div style={{ width: '38%', background: '#0f172a', padding: 8 }}>
          <div style={{ width: 20, height: 20, borderRadius: '50%', border: `2px solid ${c}`, marginBottom: 6 }} />
          {[...Array(4)].map((_, i) => <div key={i} style={{ height: 3, background: 'rgba(255,255,255,0.15)', borderRadius: 1, marginBottom: 3 }} />)}
        </div>
        <div style={{ flex: 1, padding: 8 }}>
          {[...Array(5)].map((_, i) => <div key={i} style={{ height: 4, background: '#e5e7eb', borderRadius: 1, marginBottom: 3 }} />)}
        </div>
      </div>
    ),
    elegant: (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 8 }}>
        <div style={{ height: 10, background: '#111', borderRadius: 2, width: '50%', marginBottom: 4 }} />
        <div style={{ height: 1, background: `${c}50`, width: '70%', marginBottom: 8 }} />
        {[...Array(4)].map((_, i) => <div key={i} style={{ height: 4, background: '#e5e7eb', borderRadius: 1, width: i % 2 === 0 ? '85%' : '70%', marginBottom: 3 }} />)}
      </div>
    ),
    creative: (
      <div style={{ display: 'flex', height: '100%', margin: '-12px' }}>
        <div style={{ width: 6, background: c }} />
        <div style={{ flex: 1, padding: 10 }}>
          <div style={{ height: 12, background: '#111', borderRadius: 2, width: '60%', marginBottom: 4 }} />
          <div style={{ height: 1, background: `${c}30`, marginBottom: 8 }} />
          {[...Array(4)].map((_, i) => <div key={i} style={{ height: 4, background: '#e5e7eb', borderRadius: 1, marginBottom: 3 }} />)}
        </div>
      </div>
    ),
    bold: (
      <div style={{ height: '100%', margin: '-12px' }}>
        <div style={{ background: '#111', padding: '10px 12px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: 30, height: '100%', background: c, opacity: 0.3, transform: 'skewX(-10deg)' }} />
          <div style={{ height: 10, background: 'rgba(255,255,255,0.9)', borderRadius: 2, width: '55%', marginBottom: 4 }} />
          <div style={{ height: 4, background: 'rgba(255,255,255,0.3)', borderRadius: 1, width: '75%' }} />
        </div>
        <div style={{ height: 3, background: c }} />
        <div style={{ padding: 10 }}>
          {[...Array(4)].map((_, i) => <div key={i} style={{ height: 4, background: '#e5e7eb', borderRadius: 1, marginBottom: 3 }} />)}
        </div>
      </div>
    ),
    executive: (
      <div style={{ display: 'flex', height: '100%', margin: '-12px' }}>
        <div style={{ width: '35%', background: c, padding: 8 }}>
          <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', marginBottom: 6 }} />
          {[...Array(4)].map((_, i) => <div key={i} style={{ height: 3, background: 'rgba(255,255,255,0.25)', borderRadius: 1, marginBottom: 3 }} />)}
        </div>
        <div style={{ flex: 1, padding: 8 }}>
          {[...Array(5)].map((_, i) => <div key={i} style={{ height: 4, background: '#e5e7eb', borderRadius: 1, marginBottom: 3 }} />)}
        </div>
      </div>
    ),
    compact: (
      <div style={{ height: '100%' }}>
        <div style={{ height: 8, background: '#111', borderRadius: 2, width: '50%', marginBottom: 3 }} />
        <div style={{ height: 1, background: c, marginBottom: 6 }} />
        {[...Array(6)].map((_, i) => <div key={i} style={{ height: 3.5, background: i % 4 === 0 ? c : '#e5e7eb', borderRadius: 1, marginBottom: 2.5, width: i % 3 === 2 ? '65%' : '100%' }} />)}
      </div>
    ),
    minimal: (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ height: 10, background: '#111', borderRadius: 2, width: '55%', marginBottom: 3 }} />
        <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${c}, transparent)`, width: '80%', marginBottom: 8 }} />
        {[...Array(4)].map((_, i) => <div key={i} style={{ height: 4, background: '#e5e7eb', borderRadius: 1, width: i % 2 === 0 ? '90%' : '70%', marginBottom: 3 }} />)}
      </div>
    ),
  }
  return previews[templateId] || previews.modern
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#050508' }} />}>
      <RegisterForm />
    </Suspense>
  )
}
