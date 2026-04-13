'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, Zap } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Free', price: { monthly: 0, yearly: 0 }, desc: 'Perfect for getting started',
    features: ['3 resumes', '5 templates', 'PDF export', 'Live preview', 'Basic themes'],
    cta: 'Get Started Free', color: '#3b82f6', popular: false,
  },
  {
    name: 'Pro', price: { monthly: 999, yearly: 699 }, desc: 'For serious job seekers',
    features: ['Unlimited resumes', 'All 20+ templates', 'PDF & DOCX export', 'AI writing assistant', 'Custom themes', 'Priority support', 'ATS checker'],
    cta: 'Start Pro Trial', color: '#8b5cf6', popular: true,
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="pricing" style={{ width: '100%', padding: '100px 0', background: 'var(--pricing-bg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 80, left: '50%', transform: 'translateX(-50%)', width: 500, height: 500, borderRadius: '50%', background: 'rgba(139,92,246,0.06)', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ width: '100%', maxWidth: 1100, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
            <span style={{ color: 'var(--text)' }}>Simple, </span>
            <span className="gradient-text">transparent pricing</span>
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: '1.05rem', marginBottom: 32, maxWidth: 560, marginInline: 'auto', lineHeight: 1.7 }}>
            Choose the plan that fits your job search. Upgrade anytime as you grow.
          </p>
          {/* Toggle */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 999, padding: 5 }}>
            {['Monthly', 'Yearly'].map((label, i) => {
              const active = (i === 1) === yearly
              return (
                <button key={label} onClick={() => setYearly(i === 1)}
                  style={{ padding: '8px 20px', borderRadius: 999, fontSize: '0.875rem', fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'all 0.25s', background: active ? 'linear-gradient(135deg,#8b5cf6,#3b82f6)' : 'transparent', color: active ? 'white' : 'var(--text2)', boxShadow: active ? '0 8px 20px rgba(139,92,246,0.25)' : 'none' }}
                >
                  {label}
                  {i === 1 && <span style={{ color: active ? '#dcfce7' : '#4ade80', fontSize: '0.7rem', marginLeft: 6, fontWeight: 700 }}>-30%</span>}
                </button>
              )
            })}
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 28, maxWidth: 860, margin: '0 auto', alignItems: 'stretch' }}>
          {plans.map((plan, i) => {
            const price = yearly ? plan.price.yearly : plan.price.monthly
            const savings = (plan.price.monthly - plan.price.yearly) * 12
            return (
              <motion.div key={plan.name}
                initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }} whileHover={{ y: -8, scale: 1.01 }}
                style={{ background: plan.popular ? 'linear-gradient(180deg,rgba(139,92,246,0.12),var(--card))' : 'var(--card)', border: plan.popular ? '1px solid rgba(139,92,246,0.35)' : '1px solid var(--border)', borderRadius: 24, padding: 32, display: 'flex', flexDirection: 'column', position: 'relative', backdropFilter: 'blur(12px)', boxShadow: plan.popular ? '0 20px 60px rgba(139,92,246,0.18)' : '0 10px 30px rgba(0,0,0,0.1)', minHeight: 560 }}
              >
                {plan.popular && (
                  <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg,#8b5cf6,#3b82f6)', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '6px 16px', borderRadius: 999, display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap', boxShadow: '0 10px 25px rgba(139,92,246,0.35)' }}>
                    <Zap size={12} /> Most Popular
                  </div>
                )}
                <div style={{ marginBottom: 24, paddingTop: plan.popular ? 8 : 0 }}>
                  <h3 style={{ color: 'var(--text)', fontWeight: 800, fontSize: '1.4rem', marginBottom: 6 }}>{plan.name}</h3>
                  <p style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.6 }}>{plan.desc}</p>
                </div>
                <div style={{ marginBottom: 28, paddingBottom: 22, borderBottom: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6 }}>
                    <span style={{ fontSize: '3.3rem', fontWeight: 900, color: 'var(--text)', lineHeight: 1, letterSpacing: '-0.03em' }}>₹{price.toLocaleString('en-IN')}</span>
                    {plan.price.monthly > 0 && <span style={{ color: 'var(--text2)', fontSize: '0.95rem', marginBottom: 8 }}>/mo</span>}
                  </div>
                  {yearly && plan.price.monthly > 0
                    ? <p style={{ color: '#4ade80', fontSize: '0.8rem', marginTop: 8, fontWeight: 600 }}>Save ₹{savings.toLocaleString('en-IN')}/year with yearly billing</p>
                    : <p style={{ color: 'var(--text3)', fontSize: '0.8rem', marginTop: 8 }}>{plan.price.monthly === 0 ? 'No credit card required' : 'Cancel anytime'}</p>
                  }
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 30, flex: 1, padding: 0, listStyle: 'none' }}>
                  {plan.features.map(feature => (
                    <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.92rem', color: 'var(--text2)', lineHeight: 1.5 }}>
                      <span style={{ width: 22, height: 22, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: plan.popular ? 'rgba(139,92,246,0.14)' : 'rgba(59,130,246,0.12)', flexShrink: 0 }}>
                        <Check size={13} color={plan.color} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/register"
                  style={{ display: 'block', textAlign: 'center', padding: '14px 24px', borderRadius: 14, background: plan.popular ? 'linear-gradient(135deg,#8b5cf6,#3b82f6)' : 'var(--card2)', border: plan.popular ? 'none' : '1px solid var(--border2)', color: plan.popular ? 'white' : 'var(--text)', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', transition: 'all 0.25s', boxShadow: plan.popular ? '0 12px 30px rgba(139,92,246,0.25)' : 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = plan.popular ? '0 16px 36px rgba(139,92,246,0.35)' : '0 8px 20px rgba(0,0,0,0.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = plan.popular ? '0 12px 30px rgba(139,92,246,0.25)' : 'none' }}
                >{plan.cta}</Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
