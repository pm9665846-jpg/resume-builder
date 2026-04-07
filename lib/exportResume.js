export async function exportToPDF(elementId = 'resume-preview') {
  const { default: html2canvas } = await import('html2canvas')
  const { default: jsPDF } = await import('jspdf')

  const element = document.getElementById(elementId)
  if (!element) return

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff',
  })

  const imgData = canvas.toDataURL('image/png')
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
  pdf.save('resume.pdf')
}

export async function exportToDOCX(resume) {
  const { Document, Packer, Paragraph, TextRun, HeadingLevel } = await import('docx')
  const { saveAs } = await import('file-saver')

  const { personalInfo, experience, education, skills } = resume

  const doc = new Document({
    sections: [{
      children: [
        new Paragraph({
          text: personalInfo.name || 'Your Name',
          heading: HeadingLevel.HEADING_1,
        }),
        new Paragraph({
          children: [
            new TextRun({ text: personalInfo.email || '', break: 1 }),
            new TextRun({ text: personalInfo.phone || '', break: 1 }),
            new TextRun({ text: personalInfo.location || '', break: 1 }),
          ],
        }),
        ...(personalInfo.summary ? [
          new Paragraph({ text: 'Summary', heading: HeadingLevel.HEADING_2 }),
          new Paragraph({ text: personalInfo.summary }),
        ] : []),
        ...(experience.length > 0 ? [
          new Paragraph({ text: 'Experience', heading: HeadingLevel.HEADING_2 }),
          ...experience.flatMap((exp) => [
            new Paragraph({
              children: [
                new TextRun({ text: exp.role, bold: true }),
                new TextRun({ text: ` at ${exp.company}` }),
              ],
            }),
            new Paragraph({ text: exp.description || '' }),
          ]),
        ] : []),
        ...(education.length > 0 ? [
          new Paragraph({ text: 'Education', heading: HeadingLevel.HEADING_2 }),
          ...education.map((edu) =>
            new Paragraph({ text: `${edu.degree} — ${edu.school}` })
          ),
        ] : []),
        ...(skills.length > 0 ? [
          new Paragraph({ text: 'Skills', heading: HeadingLevel.HEADING_2 }),
          new Paragraph({ text: skills.map((s) => s.name).join(', ') }),
        ] : []),
      ],
    }],
  })

  const blob = await Packer.toBlob(doc)
  saveAs(blob, 'resume.docx')
}
