import AdminGuard from '@/components/layout/AdminGuard'
import AdminSidebar from '@/components/layout/AdminSidebar'

export default function AdminLayout({ children }) {
  return (
    <AdminGuard>
      <div style={{ display: 'flex', minHeight: '100vh', background: '#050508' }}>
        <AdminSidebar />
        <main style={{ flex: 1, overflowY: 'auto' }}>
          {children}
        </main>
      </div>
    </AdminGuard>
  )
}
