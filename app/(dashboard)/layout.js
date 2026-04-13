import Sidebar from '@/components/layout/Sidebar'
import SessionGuard from '@/components/layout/SessionGuard'
import AdBanner from '@/components/ads/AdBanner'

export default function DashboardLayout({ children }) {
  return (
    <SessionGuard>
      <div style={{ display: 'flex', minHeight: '100vh', background: '#050508' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          {/* Main content */}
          <main className="dashboard-main" style={{ flex: 1 }}>
            {children}
          </main>

          {/* Footer Ad Banner */}
          <AdBanner position="footer" />
        </div>
      </div>
    </SessionGuard>
  )
}
