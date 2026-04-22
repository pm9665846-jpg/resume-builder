'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { LayoutDashboard, Users, LogOut, Shield, Zap, Megaphone, FileText, Star, Menu, X } from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Overview',       href: '/admin' },
  { icon: Users,           label: 'Users',          href: '/admin/users' },
  { icon: Megaphone,       label: 'Advertisements', href: '/admin/ads' },
  { icon: FileText,        label: 'Pages',          href: '/admin/pages' },
  { icon: Star,            label: 'Features',       href: '/admin/features' },
]

function SidebarContent({ pathname, adminName, onLogout, onClose }) {
  return (
    <>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg, #ef4444, #f97316)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Shield size={16} color="white" />
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f1f5f9', lineHeight: 1 }}>Admin Panel</p>
            <p style={{ fontSize: '0.65rem', color: '#ef4444', marginTop: 2 }}>Restricted Access</p>
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', padding: 4 }}>
            <X size={20} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
        {navItems.map((item) => {
          const active = pathname === item.href
          return (
            <Link key={item.href} href={item.href} onClick={onClose} style={{ textDecoration: 'none' }}>
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
          <Link href="/dashboard" onClick={onClose} style={{ textDecoration: 'none' }}>
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
        <button onClick={onLogout} style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '9px 12px', borderRadius: 10, border: 'none', background: 'transparent', color: '#475569', fontSize: '0.8rem', cursor: 'pointer', transition: 'all 0.15s' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#f87171'; e.currentTarget.style.background = 'rgba(239,68,68,0.08)' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.background = 'transparent' }}
        >
          <LogOut size={14} /> Sign out
        </button>
      </div>
    </>
  )
}

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()
  const adminName = session?.user?.name || 'Admin'
  const [mobileOpen, setMobileOpen] = useState(false)

  async function handleLogout() {
    await signOut({ redirect: false })
    router.replace('/login')
  }

  return (
    <>
      {/* ===== DESKTOP SIDEBAR ===== */}
      <aside style={{
        width: 220, flexShrink: 0,
        background: '#08080f',
        borderRight: '1px solid rgba(239,68,68,0.1)',
        display: 'flex', flexDirection: 'column', padding: '24px 16px',
        position: 'sticky', top: 0, height: '100vh',
      }} className="admin-sidebar-desktop">
        <SidebarContent pathname={pathname} adminName={adminName} onLogout={handleLogout} onClose={null} />
      </aside>

      {/* ===== MOBILE TOP BAR ===== */}
      <div style={{
        display: 'none', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(8,8,15,0.97)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(239,68,68,0.15)',
        padding: '10px 16px', alignItems: 'center', justifyContent: 'space-between',
      }} className="admin-mobile-topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: 'linear-gradient(135deg, #ef4444, #f97316)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Shield size={14} color="white" />
          </div>
          <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f1f5f9' }}>Admin Panel</span>
        </div>
        <button onClick={() => setMobileOpen(true)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', padding: 4 }}>
          <Menu size={22} />
        </button>
      </div>

      {/* ===== MOBILE DRAWER ===== */}
      {mobileOpen && (
        <>
          <div onClick={() => setMobileOpen(false)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 60 }} />
          <div style={{
            position: 'fixed', top: 0, left: 0, bottom: 0, width: 260, zIndex: 70,
            background: '#08080f', borderRight: '1px solid rgba(239,68,68,0.15)',
            padding: '20px 16px', display: 'flex', flexDirection: 'column', overflowY: 'auto',
          }}>
            <SidebarContent pathname={pathname} adminName={adminName} onLogout={handleLogout} onClose={() => setMobileOpen(false)} />
          </div>
        </>
      )}
    </>
  )
}
