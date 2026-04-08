import Sidebar from '@/components/layout/Sidebar'
import SessionGuard from '@/components/layout/SessionGuard'

export default function DashboardLayout({ children }) {
  return (
    <SessionGuard>
      <div style={{ display: 'flex', minHeight: '100vh', background: '#050508' }}>
        <Sidebar />
        <main className="dashboard-main">
          {children}
        </main>
      </div>
    </SessionGuard>
  )
}
