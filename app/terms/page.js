'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import {
  FileText, UserCheck, ShieldCheck, AlertTriangle,
  CreditCard, RefreshCw, Mail, ChevronDown, ChevronUp,
  ArrowLeft, Zap, Ban, Scale, Globe, Clock
} from 'lucide-react'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }

const highlights = [
  { icon: UserCheck,    color: '#8b5cf6', label: 'Free to Use',         sub: 'No hidden charges on free plan' },
  { icon: ShieldCheck,  color: '#3b82f6', label: 'Your Content',        sub: 'You own all your resume data' },
  { icon: Ban,          color: '#ef4444', label: 'No Misuse',           sub: 'Prohibited activities listed clearly' },
  { icon: Scale,        color: '#10b981', label: 'Fair Terms',          sub: 'Plain language, no legal traps' },
]

const sections = [
  {
    id: 'acceptance',
    icon: FileText,
    color: '#8b5cf6',
    title: 'Acceptance of Terms',
    items: [
      { subtitle: 'Agreement', text: 'By accessing or using Resume Builder ("the Service"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the Service.' },
      { subtitle: 'Age requirement', text: 'You must be at least 13 years of age to use this Service. By using the Service, you represent that you meet this requirement.' },
      { subtitle: 'Updates', text: 'We reserve the right to update these Terms at any time. Continued use of the Service after changes constitutes acceptance of the new Terms.' },
    ],
  },
  {
    id: 'account',
    icon: UserCheck,
    color: '#3b82f6',
    title: 'Account Registration & Responsibilities',
    items: [
      { subtitle: 'Account creation', text: 'To use most features of the Service, you must create an account. You agree to provide accurate, current, and complete information during registration.' },
      { subtitle: 'Account security', text: 'You are responsible for maintaining the confidentiality of your account credentials. You are responsible for all activities that occur under your account.' },
      { subtitle: 'One account per user', text: 'Each user may maintain only one free account. Creating multiple accounts to circumvent limitations is prohibited.' },
      { subtitle: 'Account termination', text: 'We reserve the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or remain inactive for an extended period.' },
    ],
  },
  {
    id: 'content',
    icon: ShieldCheck,
    color: '#06b6d4',
    title: 'Your Content & Ownership',
    items: [
      { subtitle: 'You own your content', text: 'All resume data, personal information, and content you create using the Service remains your property. We do not claim ownership over your content.' },
      { subtitle: 'License to us', text: 'By using the Service, you grant us a limited, non-exclusive license to store, process, and display your content solely for the purpose of providing the Service to you.' },
      { subtitle: 'Content responsibility', text: 'You are solely responsible for the accuracy and legality of the content you submit. Do not include false, misleading, or illegal information in your resumes.' },
      { subtitle: 'Data export', text: 'You may export and download your resume data at any time. We provide PDF export functionality for this purpose.' },
    ],
  },
  {
    id: 'prohibited',
    icon: Ban,
    color: '#ef4444',
    title: 'Prohibited Activities',
    items: [
      { subtitle: 'You may not:', text: 'Use the Service for any unlawful purpose or in violation of any applicable laws or regulations.' },
      { subtitle: '', text: 'Attempt to gain unauthorized access to any part of the Service, other user accounts, or our systems.' },
      { subtitle: '', text: 'Upload malicious code, viruses, or any software intended to damage or interfere with the Service.' },
      { subtitle: '', text: 'Scrape, crawl, or use automated tools to extract data from the Service without our written permission.' },
      { subtitle: '', text: 'Impersonate any person or entity, or falsely represent your affiliation with any person or entity.' },
      { subtitle: '', text: 'Use the Service to create resumes containing fraudulent credentials, fake work experience, or fabricated qualifications.' },
    ],
  },
  {
    id: 'payment',
    icon: CreditCard,
    color: '#f59e0b',
    title: 'Free Plan & Paid Features',
    items: [
      { subtitle: 'Free plan', text: 'The Service offers a free plan with access to core features including resume creation, basic templates, and PDF export. No credit card is required for the free plan.' },
      { subtitle: 'Premium features', text: 'Certain advanced features may require a paid subscription. Pricing and features of paid plans will be clearly communicated before purchase.' },
      { subtitle: 'Refunds', text: 'If you are unsatisfied with a paid plan, contact us within 7 days of purchase for a full refund. Refunds are not available after 7 days.' },
      { subtitle: 'Plan changes', text: 'We reserve the right to modify, add, or remove features from any plan with reasonable notice to affected users.' },
    ],
  },
  {
    id: 'ip',
    icon: Globe,
    color: '#ec4899',
    title: 'Intellectual Property',
    items: [
      { subtitle: 'Our property', text: 'The Service, including its design, templates, code, branding, and all content created by us, is protected by copyright and other intellectual property laws.' },
      { subtitle: 'Templates', text: 'Resume templates provided by us are licensed for your personal use only. You may not resell, redistribute, or claim ownership of our templates.' },
      { subtitle: 'Trademarks', text: '"Resume Builder" and associated logos are our trademarks. You may not use them without our prior written permission.' },
    ],
  },
  {
    id: 'disclaimer',
    icon: AlertTriangle,
    color: '#f97316',
    title: 'Disclaimers & Limitation of Liability',
    items: [
      { subtitle: 'No job guarantee', text: 'We do not guarantee that using our Service will result in job interviews, offers, or employment. Resume effectiveness depends on many factors outside our control.' },
      { subtitle: 'Service availability', text: 'We strive for 99% uptime but do not guarantee uninterrupted access. The Service is provided "as is" without warranties of any kind.' },
      { subtitle: 'Limitation of liability', text: 'To the maximum extent permitted by law, Resume Builder shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.' },
      { subtitle: 'Data loss', text: 'While we take precautions to protect your data, we recommend regularly exporting your resumes as PDFs. We are not liable for data loss due to technical failures.' },
    ],
  },
  {
    id: 'termination',
    icon: Clock,
    color: '#64748b',
    title: 'Termination',
    items: [
      { subtitle: 'By you', text: 'You may stop using the Service at any time. To delete your account and all associated data, contact us at the email below.' },
      { subtitle: 'By us', text: 'We may suspend or terminate your access to the Service at any time, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.' },
      { subtitle: 'Effect of termination', text: 'Upon termination, your right to use the Service ceases immediately. We may delete your account data after a reasonable period following termination.' },
    ],
  },
  {
    id: 'governing',
    icon: Scale,
    color: '#a78bfa',
    title: 'Governing Law',
    items: [
      { subtitle: '', text: 'These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or your use of the Service shall be resolved through good-faith negotiation before pursuing legal remedies.' },
    ],
  },
  {
    id: 'contact',
    icon: Mail,
    color: '#10b981',
    title: 'Contact Us',
    items: [
      { subtitle: '', text: 'If you have any questions about these Terms and Conditions, please contact us at: legal@resumebuilder.com. We aim to respond to all inquiries within 48 hours.' },
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
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        <div style={{ width: 40, height: 40, borderRadius: 10, flexShrink: 0, background: section.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon size={18} color={section.color} />
        </div>
        <span style={{ flex: 1, color: 'var(--text)', fontWeight: 700, fontSize: '0.95rem' }}>{section.title}</span>
        <div style={{ color: '#475569', flexShrink: 0 }}>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {open && (
        <div style={{ padding: '0 22px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ height: 1, background: section.color + '20', marginBottom: 4 }} />
          {section.items.map((it, i) => (
            <div key={i} style={{ paddingLeft: 14, borderLeft: `2px solid ${section.color}40` }}>
              {it.subtitle && (
                <p style={{ fontSize: '0.8rem', fontWeight: 700, color: section.color, marginBottom: 4 }}>{it.subtitle}</p>
              )}
              <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.75, margin: 0 }}>{it.text}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default function TermsPage() {
  return (
    <div style={{ padding: '40px 32px', maxWidth: 900, margin: '0 auto' }}>
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

        {/* Hero header */}
        <motion.div variants={item} style={{ marginBottom: 36 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ width: 60, height: 60, borderRadius: 16, flexShrink: 0, background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2))', border: '1px solid rgba(139,92,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Scale size={28} color="#a78bfa" />
            </div>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: 999, padding: '4px 12px', fontSize: '0.7rem', color: '#a78bfa', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>
                Legal Document
              </div>
              <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, color: 'var(--text)', lineHeight: 1.1, marginBottom: 8, letterSpacing: '-0.02em' }}>
                Terms & Conditions
              </h1>
              <p style={{ color: 'var(--text3)', fontSize: '0.875rem' }}>
                Last updated: <span style={{ color: 'var(--text2)' }}>April 20, 2026</span>
                <span style={{ margin: '0 8px', color: '#334155' }}>·</span>
                <span style={{ color: 'var(--text2)' }}>Effective immediately</span>
              </p>
            </div>
          </div>
          <div style={{ marginTop: 24, padding: '16px 20px', background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 12 }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.75, margin: 0 }}>
              Please read these Terms and Conditions carefully before using Resume Builder. These terms govern your use of our service and outline both your rights and responsibilities as a user.
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
                  style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '18px 16px', transition: 'border-color 0.3s, transform 0.2s' }}
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
          <div style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(59,130,246,0.06))', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 16, padding: '28px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p style={{ fontWeight: 700, color: 'var(--text)', fontSize: '1rem', marginBottom: 4 }}>Questions about our Terms?</p>
              <p style={{ color: 'var(--text3)', fontSize: '0.85rem' }}>We respond to all legal queries within 48 hours.</p>
            </div>
            <a href="mailto:legal@resumebuilder.com"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 22px', borderRadius: 10, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: 'white', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', flexShrink: 0 }}
            >
              <Mail size={15} /> Contact Legal
            </a>
          </div>
        </motion.div>

        {/* Also see privacy */}
        <motion.div variants={item} style={{ marginTop: 16 }}>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text2)', margin: 0 }}>
              Also read our <Link href="/privacy-policy" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 600 }}>Privacy Policy</Link> to understand how we handle your data.
            </p>
            <Link href="/" style={{ fontSize: '0.8rem', color: '#475569', textDecoration: 'none' }}>← Back to Home</Link>
          </div>
        </motion.div>

      </motion.div>
    </div>
  )
}
