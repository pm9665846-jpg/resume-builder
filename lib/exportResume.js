/**
 * PDF Export — Print Window approach
 * Most reliable method for mobile + desktop
 * No html2canvas viewport issues
 */
export async function exportToPDF(elementId, resumeId) {
  const id = elementId || 'resume-preview'
  const element = document.getElementById(id)
  if (!element) {
    alert('Resume preview not found. Please open preview first.')
    return
  }

  // Collect all inline styles from the element and its children
  // This ensures the cloned HTML has all styles embedded
  const html = getFullHTML(element)

  // Collect all CSS from the page
  let cssText = `
    *, *::before, *::after {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
      box-sizing: border-box !important;
    }
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      width: 794px !important;
      background: white !important;
    }
    @page {
      size: 210mm 297mm;
      margin: 0;
    }
    @media print {
      html, body { width: 210mm !important; }
      #resume-root { width: 210mm !important; }
      button, .no-print { display: none !important; }
    }
    #resume-root {
      width: 794px !important;
      min-height: 1123px !important;
      background: white !important;
      overflow: visible !important;
      transform: none !important;
      position: relative !important;
    }
    #resume-root * {
      transform: none !important;
    }
    /* Force flex containers to stay horizontal */
    #resume-root [style*="display: flex"],
    #resume-root [style*="display:flex"] {
      flex-direction: row !important;
    }
    /* Ensure two-column layouts don't stack */
    #resume-root > div {
      display: flex !important;
      flex-direction: row !important;
      width: 794px !important;
    }
  `

  // Also grab page stylesheets
  try {
    Array.from(document.styleSheets).forEach(sheet => {
      try {
        Array.from(sheet.cssRules || []).forEach(rule => {
          // Skip media queries that would cause mobile layout
          if (rule.type === CSSRule.MEDIA_RULE) return
          cssText += rule.cssText + '\n'
        })
      } catch (e) {}
    })
  } catch (e) {}

  const printWindow = window.open('', '_blank', 'width=900,height=1200,scrollbars=yes')

  if (!printWindow) {
    // Popup blocked — use iframe approach
    iframePrint(html, cssText)
    return
  }

  printWindow.document.open()
  printWindow.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=794">
  <title>Resume</title>
  <style>${cssText}</style>
</head>
<body>
  <div id="resume-root">${html}</div>
  <script>
    // Fix any remaining transforms
    var root = document.getElementById('resume-root');
    if (root && root.firstElementChild) {
      root.firstElementChild.style.transform = 'none';
      root.firstElementChild.style.width = '794px';
      root.firstElementChild.style.minWidth = '794px';
    }

    // Fix all flex containers
    var flexEls = document.querySelectorAll('[style*="flex"]');
    flexEls.forEach(function(el) {
      if (el.style.display === 'flex') {
        if (!el.style.flexDirection || el.style.flexDirection === '') {
          el.style.flexDirection = 'row';
        }
      }
    });

    // Print after fonts load
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function() {
        setTimeout(function() {
          window.print();
          setTimeout(function() { window.close(); }, 3000);
        }, 600);
      });
    } else {
      setTimeout(function() {
        window.print();
        setTimeout(function() { window.close(); }, 3000);
      }, 1200);
    }
  <\/script>
</body>
</html>`)
  printWindow.document.close()
}

function getFullHTML(element) {
  // Clone and ensure all computed styles are inlined for critical layout properties
  const clone = element.cloneNode(true)

  // Remove any transform/scale from root
  clone.style.transform = 'none'
  clone.style.transformOrigin = 'top left'
  clone.style.width = '794px'
  clone.style.minWidth = '794px'
  clone.style.position = 'relative'
  clone.style.overflow = 'visible'

  // Fix all children
  const allChildren = clone.querySelectorAll('*')
  allChildren.forEach(el => {
    // Remove transforms
    if (el.style.transform && el.style.transform !== 'none') {
      el.style.transform = 'none'
    }
    // Fix flex containers
    if (el.style.display === 'flex') {
      if (!el.style.flexDirection) el.style.flexDirection = 'row'
      el.style.flexWrap = el.style.flexWrap || 'nowrap'
    }
  })

  return clone.outerHTML
}

function iframePrint(html, cssText) {
  // Fallback for when popup is blocked
  const iframe = document.createElement('iframe')
  iframe.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999;border:none;background:white;'
  document.body.appendChild(iframe)

  const doc = iframe.contentDocument || iframe.contentWindow.document
  doc.open()
  doc.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=794">
  <title>Resume</title>
  <style>${cssText}</style>
  <style>
    .print-controls {
      position: fixed; top: 10px; right: 10px; z-index: 100;
      display: flex; gap: 8px;
    }
    .print-controls button {
      padding: 10px 18px; border: none; border-radius: 8px;
      font-size: 14px; font-weight: 600; cursor: pointer;
    }
    .btn-print { background: #8b5cf6; color: white; }
    .btn-close { background: #ef4444; color: white; }
    @media print { .print-controls { display: none !important; } }
  </style>
</head>
<body>
  <div class="print-controls">
    <button class="btn-print" onclick="window.print()">📄 Save as PDF</button>
    <button class="btn-close" onclick="parent.document.body.removeChild(parent.document.querySelector('iframe[style*=z-index]'))">✕ Close</button>
  </div>
  <div id="resume-root">${html}</div>
</body>
</html>`)
  doc.close()
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
