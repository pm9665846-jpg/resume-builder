'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Zap, Mail, ArrowRight, ArrowLeft, Lock, Eye, EyeOff, CheckCircle, RefreshCw } from 'lucide-react'

const STEPS = { EMAIL: 'email', OTP: 'otp', RESET: 'reset', SUCCESS: 'success' }

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [step, setStep] = useState(STEPS.EMAIL)
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [resendTimer, setResendTimer] = useState(0)
  const otpRefs = useRef([])

  // ── Step 1: Send OTP ──────────────────────────────────────────────────────
  async function handleSendOTP(e) {
    e?.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to send OTP')
      // Always move to OTP step (even if email not found — security)
      setStep(STEPS.OTP)
      startResendTimer()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  function startResendTimer() {
    setResendTimer(60)
    const interval = setInterval(() => {
      setResendTimer(t => {
        if (t <= 1) { clearInterval(interval); return 0 }
        return t - 1
      })
    }, 1000)
  }

  // ── OTP input handling ────────────────────────────────────────────────────
  function handleOtpChange(index, value) {
    if (!/^\d*$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)
    if (value && index < 5) otpRefs.current[index + 1]?.focus()
  }

  function handleOtpKeyDown(index, e) {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
    if (e.key === 'ArrowLeft' && index > 0) otpRefs.current[index - 1]?.focus()
    if (e.key === 'ArrowRight' && index < 5) otpRefs.current[index + 1]?.focus()
  }

  function handleOtpPaste(e) {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    const newOtp = [...otp]
    pasted.split('').forEach((char, i) => { newOtp[i] = char })
    setOtp(newOtp)
    otpRefs.current[Math.min(pasted.length, 5)]?.focus()
  }

  // ── Step 2: Verify OTP ────────────────────────────────────────────────────
  async function handleVerifyOTP(e) {
    e.preventDefault()
    const otpString = otp.join('')
    if (otpString.length !== 6) { setError('Please enter the complete 6-digit OTP.'); return }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: otpString }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setStep(STEPS.RESET)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // ── Step 3: Reset Password ────────────────────────────────────────────────
  async function handleResetPassword(e) {
    e.preventDefault()
    if (password !== confirmPassword) { setError('Passwords do not match.'); return }
    if (password.length < 8) { setError('Password must be at least 8 characters.'); return }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: otp.join(''), password }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setStep(STEPS.SUCCESS)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const strength = password.length >= 8
    ? (password.match(/[A-Z]/) && password.match(/[0-9]/) ? 3 : 2)
    : password.length > 0 ? 1 : 0
  const strengthColors = ['', '#ef4444', '#eab308', '#22c55e']
  const strengthLabels = ['', 'Weak', 'Good', 'Strong']

  const stepTitles = {
    [STEPS.EMAIL]: { title: 'Forgot Password?', sub: "Enter your email and we'll send you a 6-digit OTP" },
    [STEPS.OTP]: { title: 'Check Your Email', sub: `We sent a 6-digit code to ${email}` },
    [STEPS.RESET]: { title: 'Create New Password', sub: 'Choose a strong password for your account' },
    [STEPS.SUCCESS]: { title: 'Password Reset!', sub: 'Your password has been updated successfully' },
  }

  const stepInfo = stepTitles[step]

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

          {/* Step indicator */}
          {step !== STEPS.SUCCESS && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
              {[STEPS.EMAIL, STEPS.OTP, STEPS.RESET].map((s, i) => {
                const stepIndex = [STEPS.EMAIL, STEPS.OTP, STEPS.RESET].indexOf(step)
                const isActive = i === stepIndex
                const isDone = i < stepIndex
                return (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem', fontWeight: 700, transition: 'all 0.3s',
                      background: isDone ? '#8b5cf6' : isActive ? 'rgba(139,92,246,0.2)' : 'rgba(255,255,255,0.05)',
                      border: isDone ? '2px solid #8b5cf6' : isActive ? '2px solid #8b5cf6' : '2px solid rgba(255,255,255,0.1)',
                      color: isDone || isActive ? '#a78bfa' : '#475569',
                    }}>
                      {isDone ? '✓' : i + 1}
                    </div>
                    {i < 2 && <div style={{ width: 24, height: 1, background: isDone ? '#8b5cf6' : 'rgba(255,255,255,0.1)' }} />}
                  </div>
                )
              })}
            </div>
          )}

          <h1 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'white', marginBottom: 6 }}>{stepInfo.title}</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{stepInfo.sub}</p>
        </div>

        {/* Card */}
        <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 28, backdropFilter: 'blur(20px)' }}>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.div initial={{ opacity: 0, y: -8, height: 0 }} animate={{ opacity: 1, y: 0, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 10, padding: '10px 14px', marginBottom: 18, color: '#f87171', fontSize: '0.85rem', textAlign: 'center' }}>
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">

            {/* ── STEP 1: Email ── */}
            {step === STEPS.EMAIL && (
              <motion.form key="email" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSendOTP} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Email Address</label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={14} color="#64748b" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                    <input type="email" placeholder="you@example.com" value={email}
                      onChange={e => setEmail(e.target.value)} required autoFocus
                      className="input-glass"
                      style={{ paddingLeft: 36, paddingRight: 14, paddingTop: 12, paddingBottom: 12, borderRadius: 10, fontSize: '0.9rem' }} />
                  </div>
                </div>
                <button type="submit" disabled={loading} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: '13px', borderRadius: 12, border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                  background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: 'white', fontWeight: 700, fontSize: '0.95rem',
                  opacity: loading ? 0.7 : 1,
                }}>
                  {loading ? <span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} /> : <Mail size={15} />}
                  {loading ? 'Sending OTP...' : 'Send OTP'}
                </button>
              </motion.form>
            )}

            {/* ── STEP 2: OTP ── */}
            {step === STEPS.OTP && (
              <motion.form key="otp" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                onSubmit={handleVerifyOTP} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                {/* OTP boxes */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12, textAlign: 'center' }}>
                    Enter 6-Digit OTP
                  </label>
                  <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }} onPaste={handleOtpPaste}>
                    {otp.map((digit, i) => (
                      <input
                        key={i}
                        ref={el => otpRefs.current[i] = el}
                        type="text" inputMode="numeric" maxLength={1}
                        value={digit}
                        onChange={e => handleOtpChange(i, e.target.value)}
                        onKeyDown={e => handleOtpKeyDown(i, e)}
                        autoFocus={i === 0}
                        style={{
                          width: 46, height: 52, textAlign: 'center',
                          fontSize: '1.4rem', fontWeight: 800, fontFamily: 'monospace',
                          borderRadius: 10, border: digit ? '2px solid #8b5cf6' : '2px solid rgba(255,255,255,0.1)',
                          background: digit ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.04)',
                          color: 'white', outline: 'none', transition: 'all 0.2s',
                          caretColor: '#8b5cf6',
                        }}
                        onFocus={e => e.target.style.borderColor = '#8b5cf6'}
                        onBlur={e => e.target.style.borderColor = digit ? '#8b5cf6' : 'rgba(255,255,255,0.1)'}
                      />
                    ))}
                  </div>
                </div>

                {/* Resend */}
                <div style={{ textAlign: 'center' }}>
                  {resendTimer > 0 ? (
                    <p style={{ color: '#475569', fontSize: '0.8rem' }}>
                      Resend OTP in <span style={{ color: '#a78bfa', fontWeight: 600 }}>{resendTimer}s</span>
                    </p>
                  ) : (
                    <button type="button" onClick={handleSendOTP}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#a78bfa', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                      <RefreshCw size={13} /> Resend OTP
                    </button>
                  )}
                </div>

                <button type="submit" disabled={loading || otp.join('').length !== 6} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: '13px', borderRadius: 12, border: 'none',
                  cursor: (loading || otp.join('').length !== 6) ? 'not-allowed' : 'pointer',
                  background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: 'white', fontWeight: 700, fontSize: '0.95rem',
                  opacity: (loading || otp.join('').length !== 6) ? 0.6 : 1,
                }}>
                  {loading ? <span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} /> : null}
                  {loading ? 'Verifying...' : 'Verify OTP'} <ArrowRight size={15} />
                </button>

                <button type="button" onClick={() => { setStep(STEPS.EMAIL); setError(''); setOtp(['','','','','','']) }}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                  <ArrowLeft size={13} /> Change email
                </button>
              </motion.form>
            )}

            {/* ── STEP 3: New Password ── */}
            {step === STEPS.RESET && (
              <motion.form key="reset" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                onSubmit={handleResetPassword} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>New Password</label>
                  <div style={{ position: 'relative' }}>
                    <Lock size={14} color="#64748b" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                    <input type={showPass ? 'text' : 'password'} placeholder="Min. 8 characters" value={password}
                      onChange={e => setPassword(e.target.value)} required minLength={8} autoFocus
                      className="input-glass"
                      style={{ paddingLeft: 36, paddingRight: 40, paddingTop: 12, paddingBottom: 12, borderRadius: 10, fontSize: '0.9rem' }} />
                    <button type="button" onClick={() => setShowPass(!showPass)}
                      style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}>
                      {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                  {password && (
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

                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Confirm Password</label>
                  <div style={{ position: 'relative' }}>
                    <Lock size={14} color="#64748b" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                    <input type="password" placeholder="Repeat your password" value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)} required
                      className="input-glass"
                      style={{
                        paddingLeft: 36, paddingRight: 14, paddingTop: 12, paddingBottom: 12, borderRadius: 10, fontSize: '0.9rem',
                        borderColor: confirmPassword && confirmPassword !== password ? 'rgba(239,68,68,0.5)' : undefined,
                      }} />
                  </div>
                  {confirmPassword && confirmPassword !== password && (
                    <p style={{ color: '#f87171', fontSize: '0.75rem', marginTop: 4 }}>Passwords don&apos;t match</p>
                  )}
                </div>

                <button type="submit" disabled={loading || password !== confirmPassword || password.length < 8} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: '13px', borderRadius: 12, border: 'none',
                  cursor: (loading || password !== confirmPassword || password.length < 8) ? 'not-allowed' : 'pointer',
                  background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: 'white', fontWeight: 700, fontSize: '0.95rem',
                  opacity: (loading || password !== confirmPassword || password.length < 8) ? 0.6 : 1,
                }}>
                  {loading ? <span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} /> : <Lock size={15} />}
                  {loading ? 'Resetting...' : 'Reset Password'}
                </button>
              </motion.form>
            )}

            {/* ── STEP 4: Success ── */}
            {step === STEPS.SUCCESS && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '8px 0' }}>
                <motion.div
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(16,185,129,0.15)', border: '2px solid rgba(16,185,129,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <CheckCircle size={36} color="#10b981" />
                </motion.div>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 24 }}>
                  Your password has been reset successfully.<br />You can now sign in with your new password.
                </p>
                <button onClick={() => router.push('/login')} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%',
                  padding: '13px', borderRadius: 12, border: 'none', cursor: 'pointer',
                  background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: 'white', fontWeight: 700, fontSize: '0.95rem',
                }}>
                  Sign In Now <ArrowRight size={15} />
                </button>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Back to login */}
          {step !== STEPS.SUCCESS && (
            <p style={{ textAlign: 'center', marginTop: 20, fontSize: '0.85rem', color: '#64748b' }}>
              Remember your password?{' '}
              <Link href="/login" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 600 }}>Sign in</Link>
            </p>
          )}
        </div>
      </motion.div>
    </div>
  )
}
