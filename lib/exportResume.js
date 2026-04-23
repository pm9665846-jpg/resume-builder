export async function exportToPDF(elementId) {
  const id = elementId || 'resume-preview'
  const element = document.getElementById(id)
  if (!element) { alert('Resume preview not found.'); return }

  try {
    const html2canvas = (await import('html2canvas')).default
    const jsPDF = (await import('jspdf')).default

    // ── Step 1: Clone element into a fixed off-screen container at 794px ──
    const container = document.createElement('div')
    container.style.cssText = [
      'position:fixed',
      'top:0',
      'left:0',
      'width:794px',
      'min-height:1123px',
      'z-index:-9999',
      'pointer-events:none',
      'overflow:visible',
      'background:white',
    ].join(';')

    // Clone the element — deep clone with all styles
    const clone = element.cloneNode(true)
    clone.style.transform = 'none'
    clone.style.transformOrigin = 'top left'
    clone.style.width = '794px'
    clone.style.minHeight = '1123px'
    clone.style.position = 'relative'
    clone.style.left = '0'
    clone.style.top = '0'

    container.appendChild(clone)
    document.body.appendChild(container)

    // Wait for fonts and images to load
    await new Promise(r => setTimeout(r, 500))

    // ── Step 2: Capture ──
    const canvas = await html2canvas(clone, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: 794,
      height: clone.scrollHeight,
      windowWidth: 794,
      windowHeight: clone.scrollHeight,
      x: 0,
      y: 0,
      scrollX: 0,
      scrollY: 0,
    })

    // ── Step 3: Cleanup ──
    document.body.removeChild(container)

    // ── Step 4: Build PDF ──
    const imgData = canvas.toDataURL('image/png')

    const pdfW = 210  // A4 width in mm
    const pdfH = 297  // A4 height in mm
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
