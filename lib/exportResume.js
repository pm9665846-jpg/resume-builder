export async function exportToPDF(elementId) {
  const id = elementId || 'resume-preview'
  const element = document.getElementById(id)
  if (!element) { alert('Resume preview not found.'); return }

  try {
    // Get all computed styles from the page
    const styleSheets = Array.from(document.styleSheets)
    let cssText = ''
    styleSheets.forEach(sheet => {
      try {
        const rules = Array.from(sheet.cssRules || [])
        rules.forEach(rule => { cssText += rule.cssText + '\n' })
      } catch (e) {}
    })

    // Get inline styles from all elements
    const allElements = element.querySelectorAll('*')
    allElements.forEach(el => {
      const computed = window.getComputedStyle(el)
      // Already inline — no need to copy
    })

    // Open print window
    const printWindow = window.open('', '_blank', 'width=900,height=1200')
    if (!printWindow) {
      // Fallback for mobile browsers that block popups
      mobilePrintFallback(element)
      return
    }

    const html = element.outerHTML

    printWindow.document.open()
    printWindow.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=794px">
  <title>Resume</title>
  <style>
    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
      box-sizing: border-box;
    }
    html, body {
      margin: 0;
      padding: 0;
      width: 794px;
      background: white;
    }
    @page {
      size: 210mm 297mm;
      margin: 0;
    }
    @media print {
      html, body { width: 210mm; }
      #resume-root { width: 210mm !important; transform: none !important; }
    }
    #resume-root {
      width: 794px;
      min-height: 1123px;
      background: white;
      overflow: visible;
      transform: none !important;
    }
    ${cssText}
  </style>
</head>
<body>
  <div id="resume-root">${html}</div>
  <script>
    // Fix any transform on the root element
    document.querySelector('#resume-root > *').style.transform = 'none';
    document.querySelector('#resume-root > *').style.width = '794px';
    
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function() {
        setTimeout(function() {
          window.print();
          setTimeout(function() { window.close(); }, 3000);
        }, 800);
      });
    } else {
      setTimeout(function() {
        window.print();
        setTimeout(function() { window.close(); }, 3000);
      }, 1200);
    }
  </script>
</body>
</html>`)
    printWindow.document.close()

  } catch (err) {
    console.error('PDF export failed:', err)
    mobilePrintFallback(element)
  }
}

function mobilePrintFallback(element) {
  // Create a full-page overlay for printing on mobile
  const overlay = document.createElement('div')
  overlay.id = 'print-overlay'
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: white;
    z-index: 99999;
    overflow: auto;
    padding: 0;
  `

  const wrapper = document.createElement('div')
  wrapper.style.cssText = `
    width: 794px;
    min-height: 1123px;
    transform-origin: top left;
    transform: scale(${Math.min(window.innerWidth / 794, 1)});
    background: white;
  `
  wrapper.innerHTML = element.outerHTML

  const closeBtn = document.createElement('button')
  closeBtn.textContent = '✕ Close'
  closeBtn.style.cssText = `
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 100000;
    padding: 8px 16px;
    background: #ef4444;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
  `
  closeBtn.onclick = () => document.body.removeChild(overlay)

  const printBtn = document.createElement('button')
  printBtn.textContent = '🖨️ Print / Save PDF'
  printBtn.style.cssText = `
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 100000;
    padding: 8px 16px;
    background: #8b5cf6;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
  `
  printBtn.onclick = () => window.print()

  overlay.appendChild(wrapper)
  overlay.appendChild(closeBtn)
  overlay.appendChild(printBtn)
  document.body.appendChild(overlay)

  // Add print styles
  const style = document.createElement('style')
  style.textContent = `
    @media print {
      body > *:not(#print-overlay) { display: none !important; }
      #print-overlay { position: static !important; }
      #print-overlay button { display: none !important; }
      * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    }
  `
  document.head.appendChild(style)
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
