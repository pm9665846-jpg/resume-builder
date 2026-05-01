import { NextResponse } from 'next/server'
import { getSessionUserId } from '@/lib/session'

export async function POST(req) {
  try {
    const userId = await getSessionUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { url } = await req.json()
    if (!url) return NextResponse.json({ error: 'URL required' }, { status: 400 })

    // Try puppeteer (local dev only)
    let browser
    try {
      const puppeteer = (await import('puppeteer')).default
      browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        defaultViewport: { width: 794, height: 1123 },
      })

      const page = await browser.newPage()
      await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 })
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
      await new Promise(r => setTimeout(r, 1000))

      const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
      })

      await browser.close()

      return new NextResponse(pdfBuffer, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="resume.pdf"',
        },
      })
    } catch (puppeteerErr) {
      if (browser) { try { await browser.close() } catch {} }
      // Puppeteer not available — return 503 so client falls back to html2canvas
      return NextResponse.json({ error: 'Puppeteer not available', fallback: true }, { status: 503 })
    }
  } catch (err) {
    console.error('[POST /api/export-pdf]', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
