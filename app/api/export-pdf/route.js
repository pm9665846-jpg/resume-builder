import { NextResponse } from 'next/server'
import { getSessionUserId } from '@/lib/session'

export async function POST(req) {
  try {
    const userId = await getSessionUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { url } = await req.json()
    if (!url) return NextResponse.json({ error: 'URL required' }, { status: 400 })

    // Dynamic import — only load puppeteer when needed
    let browser
    try {
      // Try puppeteer-core with @sparticuz/chromium (for production/serverless)
      const chromium = (await import('@sparticuz/chromium')).default
      const puppeteer = (await import('puppeteer-core')).default

      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: { width: 794, height: 1123 },
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      })
    } catch {
      // Fallback to regular puppeteer (local dev)
      const puppeteer = (await import('puppeteer')).default
      browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        defaultViewport: { width: 794, height: 1123 },
      })
    }

    const page = await browser.newPage()

    // Set viewport to A4 width in pixels (96dpi)
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 })

    // Navigate to the print URL
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })

    // Wait for fonts and images
    await page.waitForTimeout(1000)

    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      preferCSSPageSize: false,
    })

    await browser.close()

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"',
      },
    })
  } catch (err) {
    console.error('[POST /api/export-pdf]', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
