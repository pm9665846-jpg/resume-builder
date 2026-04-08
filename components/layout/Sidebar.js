'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { LayoutDashboard, FileText, Plus, Settings, LogOut, Zap, User, Sparkles, Download } from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: FileText, label: 'My Resumes', href: '/dashboard/resumes' },
  { icon: Plus, label: 'New Resume', href: '/dashboard/create' },
  { icon: Sparkles, label: 'AI Suggestions', href: '/dashboard/ai-suggestions' },
  { icon: Download, label: 'Export All', href: '/dashboard/export' },
  { icon: User, label: 'Profile', href: '/dashboard/profile' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()

  const user = session?.user
  const initials = user?.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'U'

  async function handleSignOut() {
    await signOut({ redirect: false })
    router.replace('/login')
  }

  return (
    <aside className="dashboard-sidebar">
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 8px', marginBottom: 40, textDecoration: 'none' }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Zap size={18} color="white" />
        </div>
        <span className="gradient-text" style={{ fontWeight: 700, fontSize: '1.1rem' }}>Resume Maker</span>
      </Link>

      {/* Nav */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
        {navItems.map((item) => {
          const active = pathname === item.href
          return (
            <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{ x: 3 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '10px 12px', borderRadius: 12,
                  fontSize: '0.875rem', fontWeight: 500,
                  background: active ? 'rgba(139,92,246,0.15)' : 'transparent',
                  color: active ? '#a78bfa' : '#94a3b8',
                  border: active ? '1px solid rgba(139,92,246,0.3)' : '1px solid transparent',
                  transition: 'all 0.2s', cursor: 'pointer',
                }}
                onMouseEnter={e => { if (!active) { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' } }}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'transparent' } }}
              >
                <item.icon size={18} />
                {item.label}
                {active && <div style={{ marginLeft: 'auto', width: 6, height: 6, borderRadius: '50%', background: '#a78bfa' }} />}
              </motion.div>
            </Link>
          )
        })}
      </nav>

      {/* User section */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16, marginTop: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 12, marginBottom: 4, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
          {user?.image ? (
            <img src={user.image} alt={user.name} style={{ width: 32, height: 32, borderRadius: '50%', flexShrink: 0, objectFit: 'cover' }} />
          ) : (
            <div style={{ width: 32, height: 32, borderRadius: '50%', flexShrink: 0, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'white', fontWeight: 700 }}>
              {initials}
            </div>
          )}
          <div style={{ minWidth: 0 }}>
            <p style={{ color: 'white', fontSize: '0.875rem', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {user?.name || 'User'}
            </p>
            <p style={{ color: '#64748b', fontSize: '0.7rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {user?.email || ''}
            </p>
          </div>
        </div>
        <button
          onClick={handleSignOut}
          style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 12, width: '100%', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', fontSize: '0.875rem', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#f87171'; e.currentTarget.style.background = 'rgba(239,68,68,0.08)' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.background = 'transparent' }}
        >
          <LogOut size={16} /> Sign Out
        </button>
      </div>
    </aside>
  )
}
