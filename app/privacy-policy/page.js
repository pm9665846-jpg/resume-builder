'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import {
  ShieldCheck, Lock, Eye, Cookie, Globe, UserCheck,
  Baby, RefreshCw, Mail, ChevronDown, ChevronUp, ArrowLeft, Zap
} from 'lucide-react'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }

const highlights = [
  { icon: Lock,      color: '#8b5cf6', label: 'Passwords Hashed',    sub: 'bcrypt — never plain text' },
  { icon: ShieldCheck, color: '#3b82f6', label: 'No Data Selling',   sub: 'Your data stays yours' },
  { icon: Cookie,    color: '#06b6d4', label: 'No Tracking Cookies', sub: 'Only essential sessions' },
  { icon: UserCheck, color: '#10b981', label: 'Right to Delete',     sub: 'Full account deletion' },
]

const sections = [
  {
    id: 'collect',
    icon: Eye,
    color: '#8b5cf6',
    title: 'Information We Collect',
    items: [
      { subtitle: 'Account Information', text: 'When you register, we collect your name, email address, and password (stored as a secure bcrypt hash). If you sign in via Google or another OAuth provider, we receive your name, email, and profile picture from that provider.' },
      { subtitle: 'Resume Data', text: 'All resume content you enter — including personal information, work experience, education, skills, projects, certifications, languages, and interests — is stored securely in our database so you can access and edit it anytime.' },
      { subtitle: 'Profile Photo', text: 'If you upload a profile photo, it is stored on our server under a unique filename. We do not share your photo with third parties.' },
      { subtitle: 'Usage Data', text: 'We may collect basic usage data such as pages visited, features used, and browser/device type to improve the product. This data is anonymized and not linked to your identity.' },
    ],
  },
  {
    id: 'use',
    icon: Zap,
    color: '#3b82f6',
    title: 'How We Use Your Information',
    items: [
      { subtitle: 'To provide the service', text: 'Your data is used to create, store, and export your resumes. We use your email to send account-related notifications such as password resets.' },
      { subtitle: 'To improve the product', text: 'Anonymized usage data helps us understand which features are most useful and where we can improve the experience.' },
      { subtitle: 'We do not sell your data', text: 'We never sell, rent, or trade your personal information to third parties for marketing purposes — ever.' },
    ],
  },
  {
    id: 'storage',
    icon: Lock,
    color: '#06b6d4',
    title: 'Data Storage & Security',
    items: [
      { subtitle: 'Storage', text: 'Your data is stored in a secured MySQL database. Passwords are hashed using bcrypt and are never stored in plain text.' },
      { subtitle: 'Security measures', text: 'We use HTTPS encryption for all data in transit. Access to the database is restricted to authorized personnel only.' },
      { subtitle: 'Retention', text: 'Your data is retained as long as your account is active. You may request deletion of your account and all associated data at any time.' },
    ],
  },
  {
    id: 'cookies',
    icon: Cookie,
    color: '#f59e0b',
    title: 'Cookies',
    items: [
      { subtitle: 'Session cookies', text: 'We use session cookies to keep you logged in. These are essential for the service to function and are deleted when you log out or close your browser.' },
      { subtitle: 'No tracking cookies', text: 'We do not use third-party advertising or tracking cookies. Your browsing behavior is not monitored or sold.' },
    ],
  },
  {
    id: 'third',
    icon: Globe,
    color: '#ec4899',
    title: 'Third-Party Services',
    items: [
      { subtitle: 'Authentication', text: 'If you use Google Sign-In, your authentication is handled by Google. We only receive the basic profile information you authorize.' },
      { subtitle: 'No third-party analytics', text: 'We do not currently use Google Analytics or any third-party analytics service that tracks individual users.' },
    ],
  },
  {
    id: 'rights',
    icon: UserCheck,
    color: '#10b981',
    title: 'Your Rights',
    items: [
      { subtitle: 'Access & export', text: 'You can view and download all your resume data at any time from your dashboard.' },
      { subtitle: 'Correction', text: 'You can update your personal information from your profile settings at any time.' },
      { subtitle: 'Deletion', text: 'You can delete individual resumes from your dashboard. To delete your entire account and all data, contact us at the email below.' },
    ],
  },
  {
    id: 'children',
    icon: Baby,
    color: '#a78bfa',
    title: "Children's Privacy",
    items: [
      { subtitle: '', text: "Our service is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will delete it promptly." },
    ],
  },
  {
    id: 'changes',
    icon: RefreshCw,
    color: '#64748b',
    title: 'Changes to This Policy',
    items: [
      { subtitle: '', text: 'We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of the service after changes constitutes acceptance of the updated policy.' },
    ],
  },
  {
    id: 'contact',
    icon: Mail,
    color: '#f97316',
    title: 'Contact Us',
    items: [
      { subtitle: '', text: 'If you have any questions about this Privacy Policy or how we handle your data, please contact us at: privacy@resumebuilder.com' },
    ],
  },
]

function AccordionSection({ section, index }) {
  const [open, setOpen] = useState(index < 2)
  const Icon = section.icon

  return (
    <motion.div
      variants={item}
      style={{
        background: 'var(--card)',
        border: `1px solid ${open ? section.color + '30' : 'var(--border)'}`,
        borderRadius: 16,
        overflow: 'hidden',
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={e => { if (!open) e.currentTarget.style.borderColor = section.color + '20' }}
      onMouseLeave={e => { if (!open) e.currentTarget.style.borderColor = 'var(--border)' }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', gap: 14,
          padding: '18px 22px', background: 'none', border: 'none',
          cursor: 'pointer', textAlign: 'left',
        }}
      >
        <div style={{
          width: 40, height: 40, borderRadius: 10, flexShrink: 0,
          background: section.color + '18',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon size={18} color={section.color} />
        </div>
        <span style={{ flex: 1, color: 'var(--text)', fontWeight: 700, fontSize: '0.95rem' }}>
          {section.title}
        </span>
        <div style={{ color: '#475569', flexShrink: 0 }}>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {/* Body */}
      {open && (
        <div style={{ padding: '0 22px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ height: 1, background: section.color + '20', marginBottom: 4 }} />
          {section.items.map((it, i) => (
            <div key={i} style={{ paddingLeft: 14, borderLeft: `2px solid ${section.color}40` }}>
              {it.subtitle && (
                <p style={{ fontSize: '0.8rem', fontWeight: 700, color: section.color, marginBottom: 4 }}>
                  {it.subtitle}
                </p>
              )}
              <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.75, margin: 0 }}>
                {it.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <div style={{ padding: '40px 32px', maxWidth: 900, margin: '0 auto' }}>
      <motion.div variants={container} initial="hidden" animate="show">

        {/* Back */}
        <motion.div variants={item} style={{ marginBottom: 28 }}>
          <Link href="/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
            onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
          >
            <ArrowLeft size={14} /> Back to Dashboard
          </Link>
        </motion.div>

        {/* Hero header */}
        <motion.div variants={item} style={{ marginBottom: 36 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, flexWrap: 'wrap' }}>
            <div style={{
              width: 60, height: 60, borderRadius: 16, flexShrink: 0,
              background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2))',
              border: '1px solid rgba(139,92,246,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <ShieldCheck size={28} color="#a78bfa" />
            </div>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: 999, padding: '4px 12px', fontSize: '0.7rem', color: '#a78bfa', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>
                Legal Document
              </div>
              <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, color: 'var(--text)', lineHeight: 1.1, marginBottom: 8, letterSpacing: '-0.02em' }}>
                Privacy Policy
              </h1>
              <p style={{ color: 'var(--text3)', fontSize: '0.875rem' }}>
                Last updated: <span style={{ color: 'var(--text2)' }}>April 20, 2026</span>
                <span style={{ margin: '0 8px', color: '#334155' }}>·</span>
                <span style={{ color: 'var(--text2)' }}>Effective immediately</span>
              </p>
            </div>
          </div>

          {/* Intro */}
          <div style={{ marginTop: 24, padding: '16px 20px', background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 12 }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.75, margin: 0 }}>
              We take your privacy seriously. This policy explains what data we collect, how we use it, and the choices you have.
              We keep it simple and honest — no legal jargon, no surprises.
            </p>
          </div>
        </motion.div>

        {/* Highlight cards */}
        <motion.div variants={item} style={{ marginBottom: 36 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 14 }}>
            {highlights.map((h) => {
              const Icon = h.icon
              return (
                <div key={h.label}
                  style={{
                    background: 'var(--card)', border: '1px solid var(--border)',
                    borderRadius: 14, padding: '18px 16px',
                    transition: 'border-color 0.3s, transform 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = h.color + '40'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: h.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                    <Icon size={17} color={h.color} />
                  </div>
                  <p style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text)', marginBottom: 3 }}>{h.label}</p>
                  <p style={{ fontSize: '0.73rem', color: 'var(--text3)' }}>{h.sub}</p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Table of contents */}
        <motion.div variants={item} style={{ marginBottom: 32 }}>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '18px 22px' }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>
              Table of Contents
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}>
              {sections.map((s, i) => (
                <a key={s.id} href={`#${s.id}`}
                  style={{ fontSize: '0.8rem', color: '#64748b', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = s.color}
                  onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                >
                  <span style={{ fontSize: '0.65rem', color: '#334155' }}>{i + 1}.</span>
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Accordion sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {sections.map((section, i) => (
            <div key={section.id} id={section.id}>
              <AccordionSection section={section} index={i} />
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div variants={item} style={{ marginTop: 36 }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(59,130,246,0.06))',
            border: '1px solid rgba(139,92,246,0.2)',
            borderRadius: 16, padding: '28px 28px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 16,
          }}>
            <div>
              <p style={{ fontWeight: 700, color: 'var(--text)', fontSize: '1rem', marginBottom: 4 }}>
                Have a privacy concern?
              </p>
              <p style={{ color: 'var(--text3)', fontSize: '0.85rem' }}>
                We respond to all privacy-related queries within 48 hours.
              </p>
            </div>
            <a href="mailto:privacy@resumebuilder.com"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 22px', borderRadius: 10,
                background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                color: 'white', fontWeight: 600, fontSize: '0.875rem',
                textDecoration: 'none', flexShrink: 0,
              }}
            >
              <Mail size={15} /> Contact Us
            </a>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.div variants={item} style={{ marginTop: 20, textAlign: 'center' }}>
          <p style={{ fontSize: '0.78rem', color: '#334155' }}>
            By using Resume Builder, you agree to this Privacy Policy.
            <Link href="/dashboard" style={{ color: '#475569', marginLeft: 8, textDecoration: 'none' }}>← Back to Dashboard</Link>
          </p>
        </motion.div>

      </motion.div>
    </div>
  )
}
