import { cookies } from 'next/headers'

export async function getAdminSession() {
  try {
    const cookieStore = await cookies()
    const raw = cookieStore.get('admin_session')?.value
    if (!raw) return null
    const admin = JSON.parse(raw)
    if (admin?.role === 'admin') return admin
    return null
  } catch {
    return null
  }
}
