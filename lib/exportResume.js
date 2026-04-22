export async function exportToPDF(elementId) {
  const id = elementId || 'resume-preview'
  const element = document.getElementById(id)
  if (!element) { alert('Resume preview not found.'); return }

  try {
    // Dynamic import to avoid SSR issues
    const html2canvas = (await import('html2canvas')).default
    const jsPDF = (await import('jspdf')).default

    // Temporarily reset any mobile scaling transform
    const origTransform = element.style.transform
    const origTransformOrigin = element.style.transformOrigin
    element.style.transform = 'scale(1)'
    element.style.transformOrigin = 'top left'

    // Wait a tick for DOM to update
    await new Promise(r => setTimeout(r, 100))

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: 794,
      height: element.scrollHeight,
      windowWidth: 794,
    })

    // Restore transform
    element.style.transform = origTransform
    element.style.transformOrigin = origTransformOrigin

    const imgData = canvas.toDataURL('image/jpeg', 0.95)

    // A4 dimensions in mm
    const pdfW = 210
    const pdfH = 297
    const imgW = pdfW
    const imgH = (canvas.height * pdfW) / canvas.width

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    })

    let yPos = 0
    let remainingH = imgH

    // Multi-page support
    while (remainingH > 0) {
      if (yPos > 0) pdf.addPage()
      pdf.addImage(imgData, 'JPEG', 0, -yPos, imgW, imgH)
      yPos += pdfH
      remainingH -= pdfH
    }

    pdf.save('resume.pdf')
  } catch (err) {
    console.error('PDF export failed:', err)
    // Fallback to print dialog
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
