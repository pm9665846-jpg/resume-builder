import { NextResponse } from 'next/server'
import { getAdminSession } from '@/lib/adminSession'

export async function GET() {
  const admin = await getAdminSession()
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  return NextResponse.json({ name: admin.name, email: admin.email })
}
