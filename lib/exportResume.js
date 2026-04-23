/**
 * Export resume to PDF
 * Handles mobile layout issues by forcing desktop width during capture
 */
export async function exportToPDF(elementId, resumeId) {
  // Try server-side first if resumeId available
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
      console.warn('Server-side PDF failed, using client-side:', err)
    }
  }

  await clientSideExport(elementId)
}

async function clientSideExport(elementId) {
  const id = elementId || 'resume-preview'
  const element = document.getElementById(id)
  if (!element) { alert('Resume preview not found.'); return }

  const html2canvas = (await import('html2canvas')).default
  const jsPDF = (await import('jspdf')).default

  // ── Save original styles of element + all ancestors ──
  const savedStyles = []
  let node = element
  while (node && node !== document.body) {
    savedStyles.push({
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
      position: node.style.position,
    })
    node = node.parentElement
  }

  try {
    // ── Force desktop layout on all ancestors ──
    savedStyles.forEach(({ el }) => {
      el.style.overflow = 'visible'
      el.style.overflowX = 'visible'
      el.style.overflowY = 'visible'
      el.style.maxWidth = 'none'
      el.style.transform = 'none'
    })

    element.style.width = '794px'
    element.style.minWidth = '794px'
    element.style.transform = 'none'
    element.style.transformOrigin = 'top left'
    element.style.position = 'relative'

    if (element.parentElement) {
      element.parentElement.style.width = '794px'
      element.parentElement.style.overflow = 'visible'
      element.parentElement.style.height = 'auto'
    }

    await new Promise(r => setTimeout(r, 400))

    const totalHeight = element.scrollHeight || 1123

    const canvas = await html2canvas(element, {
      scale: 3,
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

      // ── KEY FIX: onclone disables media queries and forces flex layout ──
      onclone: (clonedDoc) => {
        const clonedEl = clonedDoc.getElementById(id)
        if (!clonedEl) return

        // 1. Inject a style that overrides ALL media queries
        const style = clonedDoc.createElement('style')
        style.textContent = `
          /* Force desktop layout — disable all responsive breakpoints */
          * {
            max-width: none !important;
          }

          /* Force all flex containers to stay horizontal */
          [style*="display: flex"],
          [style*="display:flex"] {
            flex-direction: row !important;
            flex-wrap: nowrap !important;
          }

          /* Force resume root to 794px */
          #${id},
          #${id} > * {
            width: 794px !important;
            min-width: 794px !important;
            transform: none !important;
            overflow: visible !important;
          }

          /* Ensure two-column layouts stay side by side */
          #${id} > div > div,
          #${id} [class*="col"],
          #${id} [class*="column"] {
            flex-shrink: 0 !important;
          }

          /* Remove any mobile-only display:none */
          @media (max-width: 9999px) {
            * { display: revert !important; }
          }
        `
        clonedDoc.head.appendChild(style)

        // 2. Disable all existing stylesheets that have media queries
        Array.from(clonedDoc.styleSheets).forEach(sheet => {
          try {
            if (sheet.media && sheet.media.mediaText &&
                sheet.media.mediaText !== 'all' &&
                sheet.media.mediaText !== '') {
              sheet.disabled = true
            }
          } catch (e) {}
        })

        // 3. Force width on cloned element
        clonedEl.style.width = '794px'
        clonedEl.style.minWidth = '794px'
        clonedEl.style.transform = 'none'
        clonedEl.style.overflow = 'visible'

        // 4. Walk all children and fix flex containers
        const allEls = clonedEl.querySelectorAll('*')
        allEls.forEach(el => {
          const cs = window.getComputedStyle(el)

          // Fix flex containers
          if (cs.display === 'flex' || el.style.display === 'flex') {
            el.style.display = 'flex'
            el.style.flexDirection = el.style.flexDirection || 'row'
            el.style.flexWrap = 'nowrap'
          }

          // Remove transforms
          if (el.style.transform && el.style.transform !== 'none') {
            el.style.transform = 'none'
          }

          // Remove overflow hidden that clips content
          if (el.style.overflow === 'hidden' && el !== clonedEl) {
            el.style.overflow = 'visible'
          }
        })
      },
    })

    // ── Restore all original styles ──
    savedStyles.forEach(({ el, overflow, overflowX, overflowY, width, maxWidth, minWidth, transform, transformOrigin, height, minHeight, position }) => {
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
      el.style.position = position
    })

    // ── Build PDF ──
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
    })

    let yPos = 0
    let remaining = imgH

    while (remaining > 0) {
      if (yPos > 0) pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, -yPos, imgW, imgH, undefined, 'SLOW')
      yPos += pdfH
      remaining -= pdfH
    }

    pdf.save('resume.pdf')

  } catch (err) {
    // Restore on error
    savedStyles.forEach(({ el, overflow, overflowX, overflowY, width, maxWidth, minWidth, transform, transformOrigin, height, minHeight, position }) => {
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
      el.style.position = position
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
