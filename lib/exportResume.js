export async function exportToPDF(elementId) {
  const id = elementId || 'resume-preview'
  const element = document.getElementById(id)
  if (!element) { alert('Resume preview not found.'); return }

  try {
    const html2canvas = (await import('html2canvas')).default
    const jsPDF = (await import('jspdf')).default

    // Save original styles
    const origTransform = element.style.transform
    const origTransformOrigin = element.style.transformOrigin
    const origWidth = element.style.width
    const origMinHeight = element.style.minHeight

    // Reset to full 794px for capture — remove any mobile scaling
    element.style.transform = 'none'
    element.style.transformOrigin = 'top left'
    element.style.width = '794px'
    element.style.minHeight = '1123px'

    // Also reset parent wrapper height if it was set by ResizeObserver
    const wrapper = element.parentElement
    const origWrapperHeight = wrapper?.style.height
    if (wrapper) wrapper.style.height = 'auto'

    // Wait for DOM to repaint
    await new Promise(r => setTimeout(r, 200))

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: 794,
      height: element.scrollHeight,
      windowWidth: 794,
      windowHeight: element.scrollHeight,
      foreignObjectRendering: false,
      imageTimeout: 15000,
      removeContainer: true,
    })

    // Restore original styles
    element.style.transform = origTransform
    element.style.transformOrigin = origTransformOrigin
    element.style.width = origWidth
    element.style.minHeight = origMinHeight
    if (wrapper && origWrapperHeight !== undefined) wrapper.style.height = origWrapperHeight

    const imgData = canvas.toDataURL('image/png')

    // A4 in mm
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
    let remainingH = imgH

    while (remainingH > 0) {
      if (yPos > 0) pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, -yPos, imgW, imgH, undefined, 'FAST')
      yPos += pdfH
      remainingH -= pdfH
    }

    pdf.save('resume.pdf')
  } catch (err) {
    console.error('PDF export failed:', err)
    // Fallback — print dialog
    window.print()
  }
}

export async function exportToDOCX(resume) {
  var docxMod = await import('docx')
  var fsMod = await import('file-saver')
  var Document = docxMod.Document
  var Packer = docxMod.Packer
  var Paragraph = docxMod.Paragraph
  var TextRun = docxMod.TextRun
  var HeadingLevel = docxMod.HeadingLevel
  var saveAs = fsMod.saveAs

  var p = resume.personalInfo || {}
  var experience = resume.experience || []
  var education = resume.education || []
  var skills = resume.skills || []

  var children = [
    new Paragraph({ text: p.name || 'Your Name', heading: HeadingLevel.HEADING_1 }),
    new Paragraph({ children: [new TextRun({ text: [p.email, p.phone, p.location].filter(Boolean).join('  |  ') })] }),
  ]

  if (p.summary) {
    children.push(new Paragraph({ text: 'Summary', heading: HeadingLevel.HEADING_2 }))
    children.push(new Paragraph({ text: p.summary }))
  }

  if (experience.length > 0) {
    children.push(new Paragraph({ text: 'Experience', heading: HeadingLevel.HEADING_2 }))
    experience.forEach(function (exp) {
      children.push(new Paragraph({ children: [new TextRun({ text: (exp.role || '') + ' at ' + (exp.company || ''), bold: true })] }))
      if (exp.description) children.push(new Paragraph({ text: exp.description }))
    })
  }

  if (education.length > 0) {
    children.push(new Paragraph({ text: 'Education', heading: HeadingLevel.HEADING_2 }))
    education.forEach(function (edu) {
      children.push(new Paragraph({ text: (edu.degree || '') + ' — ' + (edu.school || '') }))
    })
  }

  if (skills.length > 0) {
    children.push(new Paragraph({ text: 'Skills', heading: HeadingLevel.HEADING_2 }))
    children.push(new Paragraph({ text: skills.map(function (s) { return s.name }).join(', ') }))
  }

  var doc = new Document({ sections: [{ children: children }] })
  var blob = await Packer.toBlob(doc)
  saveAs(blob, (p.name || 'resume') + '.docx')
}
