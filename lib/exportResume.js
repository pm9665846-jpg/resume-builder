/**
 * Export resume to PDF
 * Strategy:
 * 1. Try server-side PDF via /api/export-pdf (Puppeteer) — best quality
 * 2. Fallback to client-side html2canvas — works everywhere
 */
export async function exportToPDF(elementId, resumeId) {
  // ── Try server-side first if resumeId is available ──
  if (resumeId) {
    try {
      const printUrl = `${window.location.origin}/print/${resumeId}`
      const res = await fetch('/api/export-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: printUrl }),
      })

      if (res.ok) {
        const blob = await res.blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'resume.pdf'
        a.click()
        URL.revokeObjectURL(url)
        return
      }
    } catch (err) {
      console.warn('Server-side PDF failed, falling back to client-side:', err)
    }
  }

  // ── Fallback: client-side html2canvas ──
  await clientSideExport(elementId)
}

async function clientSideExport(elementId) {
  const id = elementId || 'resume-preview'
  const element = document.getElementById(id)
  if (!element) { alert('Resume preview not found.'); return }

  const html2canvas = (await import('html2canvas')).default
  const jsPDF = (await import('jspdf')).default

  // Save original styles of element AND all ancestors
  const ancestors = []
  let node = element
  while (node && node !== document.body) {
    ancestors.push({
      el: node,
      overflow: node.style.overflow,
      overflowX: node.style.overflowX,
      overflowY: node.style.overflowY,
      width: node.style.width,
      maxWidth: node.style.maxWidth,
      minWidth: node.style.minWidth,
      transform: node.style.transform,
      transformOrigin: node.style.transformOrigin,
      height: node.style.height,
      minHeight: node.style.minHeight,
    })
    node = node.parentElement
  }

  try {
    // Force 794px and remove overflow clipping on all ancestors
    ancestors.forEach(({ el }) => {
      el.style.overflow = 'visible'
      el.style.overflowX = 'visible'
      el.style.overflowY = 'visible'
      el.style.maxWidth = 'none'
    })

    element.style.width = '794px'
    element.style.minWidth = '794px'
    element.style.transform = 'none'
    element.style.transformOrigin = 'top left'

    if (element.parentElement) {
      element.parentElement.style.width = '794px'
      element.parentElement.style.overflow = 'visible'
      element.parentElement.style.height = 'auto'
    }

    await new Promise(r => setTimeout(r, 400))

    const totalHeight = element.scrollHeight || 1123

    const canvas = await html2canvas(element, {
      scale: 3,                    // Higher scale = sharper text
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: 794,
      height: totalHeight,
      windowWidth: 794,
      windowHeight: totalHeight,
      scrollX: 0,
      scrollY: -window.scrollY,
      x: 0,
      y: 0,
      imageTimeout: 15000,
      removeContainer: true,
      // Force exact color rendering
      onclone: (doc) => {
        const el = doc.getElementById(id)
        if (el) {
          el.style.transform = 'none'
          el.style.width = '794px'
        }
      },
    })

    // Restore all original styles
    ancestors.forEach(({ el, overflow, overflowX, overflowY, width, maxWidth, minWidth, transform, transformOrigin, height, minHeight }) => {
      el.style.overflow = overflow
      el.style.overflowX = overflowX
      el.style.overflowY = overflowY
      el.style.width = width
      el.style.maxWidth = maxWidth
      el.style.minWidth = minWidth
      el.style.transform = transform
      el.style.transformOrigin = transformOrigin
      el.style.height = height
      el.style.minHeight = minHeight
    })

    // Build PDF — use PNG for sharp text
    const imgData = canvas.toDataURL('image/png')
    const pdfW = 210
    const pdfH = 297
    const imgW = pdfW
    const imgH = (canvas.height * pdfW) / canvas.width

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
      hotfixes: ['px_scaling'],
    })

    let yPos = 0
    let remaining = imgH

    while (remaining > 0) {
      if (yPos > 0) pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, -yPos, imgW, imgH, undefined, 'SLOW') // SLOW = better quality
      yPos += pdfH
      remaining -= pdfH
    }

    pdf.save('resume.pdf')

  } catch (err) {
    // Restore on error
    ancestors.forEach(({ el, overflow, overflowX, overflowY, width, maxWidth, minWidth, transform, transformOrigin, height, minHeight }) => {
      el.style.overflow = overflow
      el.style.overflowX = overflowX
      el.style.overflowY = overflowY
      el.style.width = width
      el.style.maxWidth = maxWidth
      el.style.minWidth = minWidth
      el.style.transform = transform
      el.style.transformOrigin = transformOrigin
      el.style.height = height
      el.style.minHeight = minHeight
    })
    console.error('PDF export failed:', err)
    alert('PDF export failed. Please try again.')
  }
}

export async function exportToDOCX(resume) {
  const docxMod = await import('docx')
  const fsMod = await import('file-saver')
  const { Document, Packer, Paragraph, TextRun, HeadingLevel } = docxMod
  const { saveAs } = fsMod

  const p = resume.personalInfo || {}
  const experience = resume.experience || []
  const education = resume.education || []
  const skills = resume.skills || []

  const children = [
    new Paragraph({ text: p.name || 'Your Name', heading: HeadingLevel.HEADING_1 }),
    new Paragraph({ children: [new TextRun({ text: [p.email, p.phone, p.location].filter(Boolean).join('  |  ') })] }),
  ]

  if (p.summary) {
    children.push(new Paragraph({ text: 'Summary', heading: HeadingLevel.HEADING_2 }))
    children.push(new Paragraph({ text: p.summary }))
  }

  if (experience.length > 0) {
    children.push(new Paragraph({ text: 'Experience', heading: HeadingLevel.HEADING_2 }))
    experience.forEach(exp => {
      children.push(new Paragraph({ children: [new TextRun({ text: `${exp.role || ''} at ${exp.company || ''}`, bold: true })] }))
      if (exp.description) children.push(new Paragraph({ text: exp.description }))
    })
  }

  if (education.length > 0) {
    children.push(new Paragraph({ text: 'Education', heading: HeadingLevel.HEADING_2 }))
    education.forEach(edu => {
      children.push(new Paragraph({ text: `${edu.degree || ''} — ${edu.school || ''}` }))
    })
  }

  if (skills.length > 0) {
    children.push(new Paragraph({ text: 'Skills', heading: HeadingLevel.HEADING_2 }))
    children.push(new Paragraph({ text: skills.map(s => s.name).join(', ') }))
  }

  const doc = new Document({ sections: [{ children }] })
  const blob = await Packer.toBlob(doc)
  saveAs(blob, `${p.name || 'resume'}.docx`)
}
