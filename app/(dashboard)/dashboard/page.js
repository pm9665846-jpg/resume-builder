'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Plus, FileText, Briefcase, GraduationCap, Code, Award, FolderOpen, Clock, ArrowRight, Sparkles, Download, Loader2 } from 'lucide-react'
import { useSession } from 'next-auth/react'
import AdBanner from '@/components/ads/AdBanner'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return 'Good morning'
  if (hour >= 12 && hour < 17) return 'Good afternoon'
  if (hour >= 17 && hour < 21) return 'Good evening'
  return 'Good night'
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }
const colors = ['#8b5cf6', '#3b82f6', '#ec4899']

export default function DashboardPage() {
  const { data: session } = useSession()
  const userName = session?.user?.name?.split(' ')[0] || 'there'
  const greeting = getGreeting()

  const [stats, setStats] = useState(null)
  const [recentResumes, setRecentResumes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/api/user/stats').then(r => r.json()),
      fetch('/api/resumes').then(r => r.json()),
    ]).then(([statsData, resumesData]) => {
      if (statsData.success) setStats(statsData.stats)
      if (resumesData.success) setRecentResumes(resumesData.resumes.slice(0, 3))
    }).finally(() => setLoading(false))
  }, [])

  const statCards = stats ? [
    { label: 'Total Resumes',    value: stats.totalResumes,        icon: FileText,      color: '#8b5cf6' },
    { label: 'Skills Added',     value: stats.totalSkills,         icon: Code,          color: '#3b82f6' },
    { label: 'Experience Items', value: stats.totalExperience,     icon: Briefcase,     color: '#06b6d4' },
    { label: 'Education Items',  value: stats.totalEducation,      icon: GraduationCap, color: '#ec4899' },
    { label: 'Projects',         value: stats.totalProjects,       icon: FolderOpen,    color: '#f59e0b' },
    { label: 'Certifications',   value: stats.totalCertifications, icon: Award,         color: '#10b981' },
  ] : []

  return (
    <div style={{ padding: '40px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div variants={container} initial="hidden" animate="show">

        {/* Header */}
        <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 900, color: 'var(--text)', marginBottom: 4 }}>
              {greeting}, <span className="gradient-text">{userName}</span> 👋
            </h1>
            <p style={{ color: 'var(--text2)' }}>Ready to land your dream job today?</p>
          </div>
          <Link href="/dashboard/create" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 12, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', color: 'white', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
            <Plus size={16} /> New Resume
          </Link>
        </motion.div>

        {/* Ad */}
        <motion.div variants={item} style={{ marginBottom: 32 }}>
          <AdBanner position="top" variant="card" />
        </motion.div>

        {/* Stats */}
        <motion.div variants={item} style={{ marginBottom: 40 }}>
          <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 16 }}>Your Stats</h2>
          {loading ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text3)' }}>
              <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> Loading stats...
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
              {statCards.map((stat) => (
                <div key={stat.label} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 20, transition: 'border-color 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = `${stat.color}40`}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 10, marginBottom: 12, background: `${stat.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <stat.icon size={18} color={stat.color} />
                  </div>
                  <p style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text)', lineHeight: 1 }}>{stat.value}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text2)', marginTop: 4 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Main content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>

          {/* Recent Resumes */}
          <motion.div variants={item}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.1rem' }}>Recent Resumes</h2>
              <Link href="/dashboard/resumes" style={{ color: '#a78bfa', fontSize: '0.875rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {loading ? (
                <div style={{ color: 'var(--text3)', fontSize: '0.875rem' }}>Loading...</div>
              ) : recentResumes.length === 0 ? (
                <div style={{ padding: 24, borderRadius: 14, background: 'var(--card)', border: '1px solid var(--border3)', textAlign: 'center', color: 'var(--text3)', fontSize: '0.875rem' }}>
                  No resumes yet. <Link href="/dashboard/create" style={{ color: '#a78bfa' }}>Create one!</Link>
                </div>
              ) : recentResumes.map((resume, i) => (
                <motion.div key={resume.id}
                  initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', borderRadius: 14, background: 'var(--card)', border: '1px solid var(--border3)', transition: 'border-color 0.2s', cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border3)'}
                >
                  <div style={{ width: 40, height: 48, borderRadius: 8, flexShrink: 0, background: `${colors[i % 3]}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FileText size={18} color={colors[i % 3]} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ color: 'var(--text)', fontWeight: 500, fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{resume.title}</p>
                    <p style={{ color: 'var(--text3)', fontSize: '0.75rem', marginTop: 2 }}>{resume.template} template</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#475569', fontSize: '0.75rem', flexShrink: 0 }}>
                    <Clock size={12} /> {new Date(resume.updatedAt).toLocaleDateString()}
                  </div>
                  <Link href={`/dashboard/edit/${resume.id}`} style={{ padding: '6px 14px', borderRadius: 8, fontSize: '0.8rem', background: 'rgba(139,92,246,0.15)', color: '#a78bfa', textDecoration: 'none', fontWeight: 500 }}>Edit</Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div variants={item}>
            <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 20 }}>Quick Actions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: Plus,     label: 'Create Resume',  sub: 'Start from scratch',   color: '#8b5cf6', href: '/dashboard/create' },
                { icon: Sparkles, label: 'AI Suggestions', sub: 'Improve your resume',  color: '#3b82f6', href: '/ai-suggestions' },
                { icon: Download, label: 'Export All',     sub: 'Download as PDF/DOCX', color: '#06b6d4', href: '/dashboard/export' },
              ].map((action) => (
                <Link key={action.label} href={action.href} style={{ textDecoration: 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 16, borderRadius: 14, background: 'var(--card)', border: '1px solid var(--border3)', cursor: 'pointer', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${action.color}40`; e.currentTarget.style.transform = 'translateY(-2px)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border3)'; e.currentTarget.style.transform = 'translateY(0)' }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 10, flexShrink: 0, background: `${action.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <action.icon size={18} color={action.color} />
                    </div>
                    <div>
                      <p style={{ color: 'var(--text)', fontWeight: 500, fontSize: '0.875rem' }}>{action.label}</p>
                      <p style={{ color: 'var(--text3)', fontSize: '0.75rem', marginTop: 2 }}>{action.sub}</p>
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
