'use client'
import { usePathname } from 'next/navigation'
import AdminGuard from '@/components/layout/AdminGuard'
import AdminSidebar from '@/components/layout/AdminSidebar'

export default function AdminLayout({ children }) {
  return (
    <AdminGuard>
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </AdminGuard>
  )
}

function AdminLayoutInner({ children }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/admin/login'

  if (isLoginPage) {
    return <>{children}</>
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#050508' }}>
      <AdminSidebar />
      <main style={{ flex: 1, overflowY: 'auto' }} className="admin-main">
        {children}
      </main>
    </div>
  )
}
