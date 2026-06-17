import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { put } from '@vercel/blob'

const MAX_SIZE = 5 * 1024 * 1024
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

export async function POST(req) {
  try {
    const formData = await req.formData()
    const file = formData.get('file')

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    if (buffer.length === 0) {
      return NextResponse.json({ error: 'Empty file' }, { status: 400 })
    }

    if (buffer.length > MAX_SIZE) {
      return NextResponse.json({ error: 'File too large (max 5MB)' }, { status: 400 })
    }

    const mimeType = file.type || 'image/jpeg'
    if (!ALLOWED_TYPES.includes(mimeType)) {
      return NextResponse.json({ error: 'Only JPG, PNG, WebP, GIF allowed' }, { status: 400 })
    }

    const originalName = file.name || 'upload'
    const ext = path.extname(originalName) || '.jpg'
    const safeName = `photos/${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`

    // Vercel Blob — persists on production (Vercel serverless has no writable disk)
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const blob = await put(safeName, buffer, {
        access: 'public',
        contentType: mimeType,
      })
      return NextResponse.json({ success: true, url: blob.url, fileName: blob.url })
    }

    // Local dev fallback — save to public/uploads
    const fileName = path.basename(safeName)
    const uploadDir = path.join(process.cwd(), 'public', 'uploads')
    await mkdir(uploadDir, { recursive: true })
    await writeFile(path.join(uploadDir, fileName), buffer)

    const url = `/uploads/${fileName}`
    return NextResponse.json({ success: true, url, fileName })
  } catch (err) {
    console.error('[POST /api/upload]', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
