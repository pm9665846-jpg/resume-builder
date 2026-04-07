'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, Suspense, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn, useSession, getProviders } from 'next-auth/react'
import { Zap, Mail, Lock, ArrowRight, Eye, EyeOff, AlertCircle } from 'lucide-react'

function LoginForm() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
  const errorParam = searchParams.get('error')

  const [form, setForm] = useState({ email: '', password: '' })
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [googleAvailable, setGoogleAvailable] = useState(false)
  const [error, setError] = useState(
    errorParam === 'OAuthAccountNotLinked'
      ? 'This email is already registered. Please sign in with email & password.'
      : errorParam === 'Configuration'
      ? 'Google sign-in is not configured yet. Please use email & password.'
      : errorParam
      ? 'Sign in failed. Please try again.'
      : ''
  )

  // Redirect if already logged in
  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard')
    }
  }, [status, router])

  // Check if Google provider is available
  useEffect(() => {
    getProviders().then(providers => {
      setGoogleAvailable(!!providers?.google)
    })
  }, [])

  if (status === 'loading') {
    return (
      <div style={{ minHeight: '100vh', background: '#050508', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 32, height: 32, border: '3px solid rgba(139,92,246,0.3)', borderTopColor: '#8b5cf6', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      </div>
    )
  }

  async function handleGoogleLogin() {
    if (!googleAvailable) {
      setError('Google sign-in requires setup. See .env.local for instructions.')
      return
    }
    setGoogleLoading(true)
    setError('')
    try {
      await signIn('google', { callbackUrl })
    } catch {
      setError('Google sign-in failed. Please try again.')
      setGoogleLoading(false)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const result = await signIn('credentials', {
      email: form.email,
      password: form.password,
      redirect: false,
    })
    if (result?.error) {
      setError('Invalid email or password.')
      setLoading(false)
    } else {
      router.push(callbackUrl)
    }
  }

  return (
    <div style={{ minHeight: '100vh', width: '100%', background: '#050508', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', position: 'relative' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', maxWidth: 420, position: 'relative', zIndex: 1 }}
      >
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 20 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={18} color="white" />
            </div>
            <span className="gradient-text" style={{ fontWeight: 700, fontSize: '1.2rem' }}>Resume Maker</span>
          </Link>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'white', marginBottom: 6 }}>Welcome back</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Sign in to continue building your career</p>
        </div>

        {/* Card */}
        <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 28, backdropFilter: 'blur(20px)' }}>

          {/* Error */}
          {error && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 10, padding: '10px 14px', marginBottom: 18, color: '#f87171', fontSize: '0.85rem', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <AlertCircle size={15} style={{ flexShrink: 0, marginTop: 1 }} />
              {error}
            </motion.div>
          )}

          {/* Google Sign In */}
          <button
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              padding: '12px', borderRadius: 12, marginBottom: 20,
              background: googleAvailable ? 'white' : 'rgba(255,255,255,0.06)',
              border: googleAvailable ? '1px solid #e5e7eb' : '1px solid rgba(255,255,255,0.1)',
              color: googleAvailable ? '#374151' : '#64748b',
              fontWeight: 600, fontSize: '0.9rem',
              cursor: googleLoading ? 'not-allowed' : 'pointer',
              opacity: googleLoading ? 0.7 : 1, transition: 'all 0.2s',
              position: 'relative',
            }}
            onMouseEnter={e => { if (!googleLoading && googleAvailable) e.currentTarget.style.background = '#f9fafb' }}
            onMouseLeave={e => { if (googleAvailable) e.currentTarget.style.background = 'white' }}
          >
            {googleLoading ? (
              <span style={{ width: 18, height: 18, border: '2px solid #d1d5db', borderTopColor: '#6b7280', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} />
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill={googleAvailable ? '#4285F4' : '#64748b'} d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill={googleAvailable ? '#34A853' : '#64748b'} d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill={googleAvailable ? '#FBBC05' : '#64748b'} d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill={googleAvailable ? '#EA4335' : '#64748b'} d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            )}
            {googleLoading ? 'Signing in...' : googleAvailable ? 'Continue with Google' : 'Continue with Google (Setup Required)'}
          </button>

          {/* Google setup hint */}
          {!googleAvailable && (
            <div style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 8, padding: '8px 12px', marginBottom: 16, fontSize: '0.75rem', color: '#f59e0b', lineHeight: 1.5 }}>
              💡 To enable Google login: Add <code style={{ background: 'rgba(0,0,0,0.3)', padding: '1px 4px', borderRadius: 3 }}>GOOGLE_CLIENT_ID</code> and <code style={{ background: 'rgba(0,0,0,0.3)', padding: '1px 4px', borderRadius: 3 }}>GOOGLE_CLIENT_SECRET</code> to <code style={{ background: 'rgba(0,0,0,0.3)', padding: '1px 4px', borderRadius: 3 }}>.env.local</code> from{' '}
              <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noreferrer" style={{ color: '#f59e0b', textDecoration: 'underline' }}>Google Console</a>
            </div>
          )}

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
            <span style={{ color: '#475569', fontSize: '0.75rem' }}>or sign in with email</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
          </div>

          {/* Email/Password form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Email</label>
              <div style={{ position: 'relative' }}>
                <Mail size={14} color="#64748b" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                <input type="email" placeholder="you@example.com" value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })} required
                  className="input-glass"
                  style={{ paddingLeft: 36, paddingRight: 14, paddingTop: 11, paddingBottom: 11, borderRadius: 10, fontSize: '0.875rem' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={14} color="#64748b" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                <input type={showPass ? 'text' : 'password'} placeholder="••••••••" value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })} required
                  className="input-glass"
                  style={{ paddingLeft: 36, paddingRight: 40, paddingTop: 11, paddingBottom: 11, borderRadius: 10, fontSize: '0.875rem' }} />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}>
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <Link href="/forgot-password" style={{ fontSize: '0.78rem', color: '#a78bfa', textDecoration: 'none' }}>Forgot password?</Link>
            </div>

            <button type="submit" disabled={loading} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              padding: '13px', borderRadius: 12, border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
              color: 'white', fontWeight: 700, fontSize: '0.95rem',
              opacity: loading ? 0.7 : 1, transition: 'all 0.2s',
            }}>
              {loading && <span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} />}
              Sign In <ArrowRight size={15} />
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: 20, fontSize: '0.85rem', color: '#64748b' }}>
            Don&apos;t have an account?{' '}
            <Link href="/register" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 600 }}>Create one free</Link>
          </p>

          <p style={{ textAlign: 'center', marginTop: 10, fontSize: '0.72rem', color: '#334155' }}>
            🔒 Stays signed in for 7 days
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#050508' }} />}>
      <LoginForm />
    </Suspense>
  )
}
