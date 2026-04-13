'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminGuard({ children }) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') router.replace('/login')
    else if (status === 'authenticated' && session?.user?.role !== 'admin') {
      router.replace('/dashboard')
    }
  }, [status, session, router])

  if (status === 'loading') return (
    <div style={{ minHeight: '100vh', background: '#050508', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 32, height: 32, border: '3px solid rgba(239,68,68,0.2)', borderTopColor: '#ef4444', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
    </div>
  )
  if (status === 'unauthenticated') return null
  if (session?.user?.role !== 'admin') return null

  return children
}
