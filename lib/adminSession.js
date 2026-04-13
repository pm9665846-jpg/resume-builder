import { getServerSession } from 'next-auth'

async function getAuthOptions() {
  try {
    const mod = await import('@/app/api/auth/[...nextauth]/route')
    return mod.authOptions
  } catch {
    return null
  }
}

export async function getAdminSession() {
  try {
    const authOptions = await getAuthOptions()
    if (!authOptions) return null
    const session = await getServerSession(authOptions)
    if (session?.user?.role === 'admin') return session.user
    return null
  } catch {
    return null
  }
}
