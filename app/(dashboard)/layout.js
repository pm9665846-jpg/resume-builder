import Sidebar from '@/components/layout/Sidebar'

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#050508' }}>
      <Sidebar />
      <main className="dashboard-main">
        {children}
      </main>
    </div>
  )
}
