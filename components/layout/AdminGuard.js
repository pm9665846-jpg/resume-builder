'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AdminGuard({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [ok, setOk] = useState(false)

  useEffect(() => {
    // Skip guard on login page itself
    if (pathname === '/admin/login') { setOk(true); return }

    fetch('/api/admin/me', { credentials: 'include' })
      .then(r => {
        if (r.ok) {
          setOk(true)
        } else {
          router.replace('/admin/login')
        }
      })
      .catch(() => router.replace('/admin/login'))
  }, [pathname, router])

  if (!ok) return (
    <div style={{ minHeight: '100vh', background: '#050508', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 32, height: 32, border: '3px solid rgba(239,68,68,0.2)', borderTopColor: '#ef4444', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
    </div>
  )

  return children
}
