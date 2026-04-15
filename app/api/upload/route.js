import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

export async function POST(req) {
  try {
    const formData = await req.formData()
    const file = formData.get('file')

    if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Generate unique filename: timestamp + original name
    const ext = path.extname(file.name) || '.jpg'
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`

    const uploadDir = path.join(process.cwd(), 'public', 'uploads')
    await mkdir(uploadDir, { recursive: true })

    await writeFile(path.join(uploadDir, fileName), buffer)

    return NextResponse.json({ success: true, fileName })
  } catch (err) {
    console.error('[POST /api/upload]', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
