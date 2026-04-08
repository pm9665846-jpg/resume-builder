export async function exportToPDF(elementId) {
  var id = elementId || 'resume-preview';
  var element = document.getElementById(id);
  if (!element) return;

  var clone = element.cloneNode(true);
  clone.style.cssText = 'width:794px;min-height:1123px;background:white;position:relative;overflow:visible;';

  var wrapper = document.createElement('div');
  wrapper.appendChild(clone);

  var printWindow = window.open('', '_blank', 'width=850,height=1100');
  if (!printWindow) { alert('Please allow popups to download PDF.'); return; }

  printWindow.document.open();
  printWindow.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Resume</title>');

  var links = document.querySelectorAll('link[rel="stylesheet"]');
  for (var i = 0; i < links.length; i++) {
    printWindow.document.write('<link rel="stylesheet" href="' + links[i].href + '">');
  }

  printWindow.document.write('<style>');
  printWindow.document.write('*{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important;}');
  printWindow.document.write('@page{size:210mm 297mm;margin:0;}');
  printWindow.document.write('html,body{margin:0;padding:0;width:210mm;background:white;}');
  printWindow.document.write('body{display:block;}');
  printWindow.document.write('#print-root{width:794px;min-height:1123px;background:white;overflow:visible;}');
  printWindow.document.write('@media print{html,body{width:210mm;}#print-root{width:210mm!important;}}');
  printWindow.document.write('</style>');
  printWindow.document.write('</head><body>');
  printWindow.document.write('<div id="print-root">');
  printWindow.document.write(element.innerHTML);
  printWindow.document.write('</div>');
  printWindow.document.write('<script>');
  printWindow.document.write('window.onload=function(){');
  printWindow.document.write('  if(document.fonts&&document.fonts.ready){');
  printWindow.document.write('    document.fonts.ready.then(function(){setTimeout(function(){window.print();setTimeout(function(){window.close();},2000);},500);});');
  printWindow.document.write('  } else {');
  printWindow.document.write('    setTimeout(function(){window.print();setTimeout(function(){window.close();},2000);},1000);');
  printWindow.document.write('  }');
  printWindow.document.write('};');
  printWindow.document.write('<\/script>');
  printWindow.document.write('</body></html>');
  printWindow.document.close();
}

export async function exportToDOCX(resume) {
  var docxMod = await import('docx');
  var fsMod = await import('file-saver');
  var Document = docxMod.Document;
  var Packer = docxMod.Packer;
  var Paragraph = docxMod.Paragraph;
  var TextRun = docxMod.TextRun;
  var HeadingLevel = docxMod.HeadingLevel;
  var saveAs = fsMod.saveAs;

  var p = resume.personalInfo || {};
  var experience = resume.experience || [];
  var education = resume.education || [];
  var skills = resume.skills || [];

  var children = [
    new Paragraph({ text: p.name || 'Your Name', heading: HeadingLevel.HEADING_1 }),
    new Paragraph({ children: [new TextRun({ text: [p.email, p.phone, p.location].filter(Boolean).join('  |  ') })] }),
  ];

  if (p.summary) {
    children.push(new Paragraph({ text: 'Summary', heading: HeadingLevel.HEADING_2 }));
    children.push(new Paragraph({ text: p.summary }));
  }

  if (experience.length > 0) {
    children.push(new Paragraph({ text: 'Experience', heading: HeadingLevel.HEADING_2 }));
    experience.forEach(function(exp) {
      children.push(new Paragraph({ children: [new TextRun({ text: (exp.role || '') + ' at ' + (exp.company || ''), bold: true })] }));
      if (exp.description) children.push(new Paragraph({ text: exp.description }));
    });
  }

  if (education.length > 0) {
    children.push(new Paragraph({ text: 'Education', heading: HeadingLevel.HEADING_2 }));
    education.forEach(function(edu) {
      children.push(new Paragraph({ text: (edu.degree || '') + ' — ' + (edu.school || '') }));
    });
  }

  if (skills.length > 0) {
    children.push(new Paragraph({ text: 'Skills', heading: HeadingLevel.HEADING_2 }));
    children.push(new Paragraph({ text: skills.map(function(s) { return s.name; }).join(', ') }));
  }

  var doc = new Document({ sections: [{ children: children }] });
  var blob = await Packer.toBlob(doc);
  saveAs(blob, (p.name || 'resume') + '.docx');
}