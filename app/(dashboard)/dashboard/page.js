'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Plus, FileText, TrendingUp, Eye, Download, Clock, ArrowRight, Sparkles } from 'lucide-react'

const stats = [
  { label: 'Total Resumes', value: '3', icon: FileText, color: '#8b5cf6', change: '+1 this week' },
  { label: 'Profile Views', value: '142', icon: Eye, color: '#3b82f6', change: '+23% this month' },
  { label: 'Downloads', value: '18', icon: Download, color: '#06b6d4', change: '+5 this week' },
  { label: 'Applications', value: '7', icon: TrendingUp, color: '#ec4899', change: 'Active' },
]

const recentResumes = [
  { id: '1', title: 'Software Engineer Resume', template: 'Modern', updated: '2 hours ago', color: '#8b5cf6' },
  { id: '2', title: 'Product Manager CV', template: 'Executive', updated: '1 day ago', color: '#3b82f6' },
  { id: '3', title: 'UX Designer Portfolio', template: 'Creative', updated: '3 days ago', color: '#ec4899' },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }

export default function DashboardPage() {
  return (
    <div style={{ padding: '40px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div variants={container} initial="hidden" animate="show">

        {/* Header */}
        <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 900, color: 'white', marginBottom: 4 }}>
              Good morning, <span className="gradient-text">Prachi</span> 👋
            </h1>
            <p style={{ color: '#94a3b8' }}>Ready to land your dream job today?</p>
          </div>
          <Link href="/dashboard/create" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '10px 20px', borderRadius: 12,
            background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
            color: 'white', fontWeight: 600, fontSize: '0.875rem',
            textDecoration: 'none',
          }}>
            <Plus size={16} /> New Resume
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div variants={item} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 16, marginBottom: 40,
        }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16, padding: 20,
              transition: 'border-color 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${stat.color}40`}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10, marginBottom: 12,
                background: `${stat.color}20`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <stat.icon size={18} color={stat.color} />
              </div>
              <p style={{ fontSize: '2rem', fontWeight: 900, color: 'white', lineHeight: 1 }}>{stat.value}</p>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: 4 }}>{stat.label}</p>
              <p style={{ fontSize: '0.75rem', color: stat.color, marginTop: 4 }}>{stat.change}</p>
            </div>
          ))}
        </motion.div>

        {/* Main content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>

          {/* Recent Resumes */}
          <motion.div variants={item}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <h2 style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem' }}>Recent Resumes</h2>
              <Link href="/dashboard/resumes" style={{
                color: '#a78bfa', fontSize: '0.875rem', textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: 4,
              }}>
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {recentResumes.map((resume, i) => (
                <motion.div
                  key={resume.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: '16px 20px', borderRadius: 14,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    transition: 'border-color 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
                >
                  <div style={{
                    width: 40, height: 48, borderRadius: 8, flexShrink: 0,
                    background: `${resume.color}20`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <FileText size={18} color={resume.color} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ color: 'white', fontWeight: 500, fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{resume.title}</p>
                    <p style={{ color: '#64748b', fontSize: '0.75rem', marginTop: 2 }}>{resume.template} template</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#475569', fontSize: '0.75rem', flexShrink: 0 }}>
                    <Clock size={12} /> {resume.updated}
                  </div>
                  <Link href={`/dashboard/edit/${resume.id}`} style={{
                    padding: '6px 14px', borderRadius: 8, fontSize: '0.8rem',
                    background: 'rgba(139,92,246,0.15)', color: '#a78bfa',
                    textDecoration: 'none', fontWeight: 500,
                  }}>Edit</Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div variants={item}>
            <h2 style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem', marginBottom: 20 }}>Quick Actions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: Plus, label: 'Create Resume', sub: 'Start from scratch', color: '#8b5cf6', href: '/dashboard/create' },
                { icon: Sparkles, label: 'AI Suggestions', sub: 'Improve your resume', color: '#3b82f6', href: '#' },
                { icon: Download, label: 'Export All', sub: 'Download as PDF/DOCX', color: '#06b6d4', href: '#' },
              ].map((action) => (
                <Link key={action.label} href={action.href} style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '16px', borderRadius: 14,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${action.color}40`; e.currentTarget.style.transform = 'translateY(-2px)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}
                  >
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: `${action.color}20`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <action.icon size={18} color={action.color} />
                    </div>
                    <div>
                      <p style={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>{action.label}</p>
                      <p style={{ color: '#64748b', fontSize: '0.75rem', marginTop: 2 }}>{action.sub}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
