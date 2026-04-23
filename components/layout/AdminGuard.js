'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AdminGuard({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [status, setStatus] = useState('checking') // 'checking' | 'ok' | 'denied'

  useEffect(() => {
    // Login page — no guard needed
    if (pathname === '/admin/login') {
      setStatus('ok')
      return
    }

    // Check admin session via cookie
    fetch('/api/admin/me', { credentials: 'include' })
      .then(r => {
        if (r.ok) {
          setStatus('ok')
        } else {
          setStatus('denied')
          window.location.href = '/admin/login'
        }
      })
      .catch(() => {
        setStatus('denied')
        window.location.href = '/admin/login'
      })
  }, [pathname])

  // Show spinner while checking (except on login page)
  if (status === 'checking' && pathname !== '/admin/login') {
    return (
      <div style={{
        minHeight: '100vh', background: '#050508',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          width: 36, height: 36,
          border: '3px solid rgba(239,68,68,0.15)',
          borderTopColor: '#ef4444',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
      </div>
    )
  }

  if (status === 'denied') return null

  return <>{children}</>
}
