'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Users, FileText, TrendingUp, Layout, Clock, UserCheck, AlertCircle } from 'lucide-react'

const TOTAL_TEMPLATES = 200 // approximate count

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } }

function StatCard({ icon: Icon, label, value, sub, color }) {
  return (
    <motion.div variants={item} style={{
      background: '#0f0f17', border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 16, padding: 20,
    }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
        <Icon size={18} color={color} />
      </div>
      <p style={{ fontSize: '2rem', fontWeight: 900, color: '#f1f5f9', lineHeight: 1 }}>{value ?? '—'}</p>
      <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: 4 }}>{label}</p>
      {sub && <p style={{ fontSize: '0.72rem', color: color, marginTop: 4 }}>{sub}</p>}
    </motion.div>
  )
}

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  return `${Math.floor(h / 24)}d ago`
}

export default function AdminOverviewPage() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/admin/stats')
      .then(r => r.json())
      .then(d => { if (d.success) setData(d.stats); else setError(d.error) })
      .catch(() => setError('Failed to load stats'))
  }, [])

  if (error) return (
    <div style={{ padding: 40, display: 'flex', alignItems: 'center', gap: 10, color: '#f87171' }}>
      <AlertCircle size={18} /> {error}
    </div>
  )

  const s = data

  return (
    <div style={{ padding: '40px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div variants={container} initial="hidden" animate="show">

        <motion.div variants={item} style={{ marginBottom: 36 }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f1f5f9', marginBottom: 4 }}>Admin Overview</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Real-time platform statistics</p>
        </motion.div>

        {/* Stat Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 16, marginBottom: 40 }}>
          <StatCard icon={Users} label="Total Users" value={s?.totalUsers} sub={`+${s?.newUsersThisWeek ?? 0} this week`} color="#8b5cf6" />
          <StatCard icon={FileText} label="Published Resumes" value={s?.totalResumes} sub={`+${s?.newResumesThisWeek ?? 0} this week`} color="#3b82f6" />
          <StatCard icon={Clock} label="Draft Resumes" value={s?.totalDrafts} color="#f59e0b" />
          <StatCard icon={TrendingUp} label="Total Resumes" value={s ? (s.totalResumes + s.totalDrafts) : null} color="#ec4899" />
          <StatCard icon={Layout} label="Templates Available" value={TOTAL_TEMPLATES} color="#06b6d4" />
          <StatCard icon={UserCheck} label="New Users (7d)" value={s?.newUsersThisWeek} color="#10b981" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>

          {/* Template Usage from DB */}
          <motion.div variants={item} style={{ background: '#0f0f17', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1rem' }}>Template Usage</h2>
              <span style={{ color: '#475569', fontSize: '0.75rem' }}>{TOTAL_TEMPLATES} total templates</span>
            </div>
            {s?.templateStats?.length ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {s.templateStats.slice(0, 10).map((t) => {
                  const total = (s.totalResumes + s.totalDrafts) || 1
                  const pct = Math.round((t.count / total) * 100)
                  return (
                    <div key={t.template}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                        <span style={{ color: '#cbd5e1', fontSize: '0.8rem', textTransform: 'capitalize' }}>{t.template}</span>
                        <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{t.count} resume{t.count !== 1 ? 's' : ''} ({pct}%)</span>
                      </div>
                      <div style={{ height: 6, borderRadius: 4, background: 'rgba(255,255,255,0.06)' }}>
                        <div style={{ height: '100%', borderRadius: 4, width: `${Math.max(pct, 2)}%`, background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)', transition: 'width 0.6s ease' }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <p style={{ color: '#475569', fontSize: '0.85rem' }}>No resumes created yet</p>
            )}
          </motion.div>

          {/* Recent Users */}
          <motion.div variants={item} style={{ background: '#0f0f17', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 24 }}>
            <h2 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1rem', marginBottom: 20 }}>Recent Signups</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {s?.recentUsers?.filter(u => u.role !== 'admin').length ? (
                s.recentUsers.filter(u => u.role !== 'admin').map((u) => (
                  <div key={u.id} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700, color: 'white', flexShrink: 0 }}>
                      {u.name?.[0]?.toUpperCase()}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{u.name}</p>
                      <p style={{ color: '#475569', fontSize: '0.72rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{u.email}</p>
                    </div>
                    <span style={{ fontSize: '0.68rem', color: '#475569', flexShrink: 0 }}>{timeAgo(u.created_at)}</span>
                  </div>
                ))
              ) : (
                <p style={{ color: '#475569', fontSize: '0.85rem' }}>No users yet</p>
              )}
            </div>
          </motion.div>

          {/* Recent Resumes */}
          <motion.div variants={item} style={{ background: '#0f0f17', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 24, gridColumn: '1 / -1' }}>
            <h2 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1rem', marginBottom: 20 }}>Recent Resumes</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    {['Title', 'User', 'Template', 'Status', 'Created'].map(h => (
                      <th key={h} style={{ textAlign: 'left', padding: '8px 12px', color: '#475569', fontWeight: 500, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {s?.recentResumes?.length ? s.recentResumes.map((r) => (
                    <tr key={r.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{ padding: '10px 12px', color: '#e2e8f0' }}>{r.title}</td>
                      <td style={{ padding: '10px 12px', color: '#94a3b8' }}>{r.user_name}</td>
                      <td style={{ padding: '10px 12px' }}>
                        <span style={{ background: 'rgba(139,92,246,0.12)', color: '#a78bfa', padding: '2px 10px', borderRadius: 20, fontSize: '0.75rem', textTransform: 'capitalize' }}>{r.template}</span>
                      </td>
                      <td style={{ padding: '10px 12px' }}>
                        <span style={{ background: r.is_draft ? 'rgba(245,158,11,0.1)' : 'rgba(16,185,129,0.1)', color: r.is_draft ? '#fbbf24' : '#34d399', padding: '2px 10px', borderRadius: 20, fontSize: '0.75rem' }}>
                          {r.is_draft ? 'Draft' : 'Published'}
                        </span>
                      </td>
                      <td style={{ padding: '10px 12px', color: '#475569', fontSize: '0.75rem' }}>{timeAgo(r.created_at)}</td>
                    </tr>
                  )) : (
                    <tr><td colSpan={5} style={{ padding: 20, color: '#475569', textAlign: 'center' }}>No resumes yet</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  )
}
