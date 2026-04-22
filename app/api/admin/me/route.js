import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const raw = cookieStore.get('admin_session')?.value

    if (!raw) {
      return NextResponse.json({ admin: null }, { status: 401 })
    }

    const admin = JSON.parse(raw)
    if (!admin || admin.role !== 'admin') {
      return NextResponse.json({ admin: null }, { status: 401 })
    }

    return NextResponse.json({ admin: { id: admin.id, name: admin.name, email: admin.email } })
  } catch (err) {
    console.error('[GET /api/admin/me]', err)
    return NextResponse.json({ admin: null }, { status: 401 })
  }
}
