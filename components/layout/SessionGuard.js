'use client'
import { useSession } from 'next-auth/react'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'

const PUBLIC_PATHS = ['/dashboard/ai-suggestions']

export default function SessionGuard({ children }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  const isPublic = PUBLIC_PATHS.some(p => pathname?.startsWith(p))

  useEffect(() => {
    if (!isPublic && status === 'unauthenticated') {
      router.replace('/login')
    }
  }, [status, router, isPublic])

  if (isPublic) return children
  if (status === 'loading') return null
  if (status === 'unauthenticated') return null

  return children
}
