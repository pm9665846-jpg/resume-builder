'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { LayoutDashboard, Users, LogOut, Shield, Zap, Megaphone, FileText, Star } from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Overview',       href: '/admin' },
  { icon: Users,           label: 'Users',          href: '/admin/users' },
  { icon: Megaphone,       label: 'Advertisements', href: '/admin/ads' },
  { icon: FileText,        label: 'Pages',          href: '/admin/pages' },
  { icon: Star,            label: 'Features',       href: '/admin/features' },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()
  const adminName = session?.user?.name || 'Admin'

  async function handleLogout() {
    await signOut({ redirect: false })
    router.replace('/login')
  }

  return (
    <aside style={{
      width: 220, flexShrink: 0,
      background: '#08080f',
      borderRight: '1px solid rgba(239,68,68,0.1)',
      display: 'flex', flexDirection: 'column', padding: '24px 16px',
      position: 'sticky', top: 0, height: '100vh',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 36 }}>
        <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg, #ef4444, #f97316)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Shield size={16} color="white" />
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f1f5f9', lineHeight: 1 }}>Admin Panel</p>
          <p style={{ fontSize: '0.65rem', color: '#ef4444', marginTop: 2 }}>Restricted Access</p>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
        {navItems.map((item) => {
          const active = pathname === item.href
          return (
            <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 12px', borderRadius: 10,
                background: active ? 'rgba(239,68,68,0.12)' : 'transparent',
                color: active ? '#f87171' : '#64748b',
                fontSize: '0.875rem', fontWeight: active ? 600 : 400,
                border: active ? '1px solid rgba(239,68,68,0.2)' : '1px solid transparent',
                transition: 'all 0.15s', cursor: 'pointer',
              }}
                onMouseEnter={e => { if (!active) { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = '#94a3b8' } }}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#64748b' } }}
              >
                <item.icon size={16} />
                {item.label}
              </div>
            </Link>
          )
        })}

        <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, color: '#475569', fontSize: '0.875rem', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.background = 'transparent' }}
            >
              <Zap size={15} /> User Dashboard
            </div>
          </Link>
        </div>
      </nav>

      {/* Footer */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', marginBottom: 8 }}>
          <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg, #ef4444, #f97316)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: 'white', flexShrink: 0 }}>
            {adminName?.[0]?.toUpperCase()}
          </div>
          <div style={{ minWidth: 0 }}>
            <p style={{ color: '#e2e8f0', fontSize: '0.8rem', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{adminName}</p>
            <p style={{ color: '#ef4444', fontSize: '0.68rem' }}>Administrator</p>
          </div>
        </div>
        <button onClick={handleLogout} style={{
          display: 'flex', alignItems: 'center', gap: 8, width: '100%',
          padding: '9px 12px', borderRadius: 10, border: 'none',
          background: 'transparent', color: '#475569', fontSize: '0.8rem',
          cursor: 'pointer', transition: 'all 0.15s',
        }}
          onMouseEnter={e => { e.currentTarget.style.color = '#f87171'; e.currentTarget.style.background = 'rgba(239,68,68,0.08)' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.background = 'transparent' }}
        >
          <LogOut size={14} /> Sign out
        </button>
      </div>
    </aside>
  )
}
