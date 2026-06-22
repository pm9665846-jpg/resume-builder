const fs = require('fs')
const path = require('path')

const templatesDir = path.join(__dirname, '../components/builder/templates')

const IMPORT_LINE = "import { getSection } from '@/lib/resumeSections'\n"

const replacements = [
  // skills
  [/const skl\s*=\s*skills\.length\s*>\s*0\s*\?\s*skills\s*:\s*([\w.]+)/g, "const skl = getSection(resume, 'skills', $1)"],
  [/const skl\s*=\s*resume\?\.skills\?\.length\s*\?\s*resume\.skills\s*:\s*([\w.]+)/g, "const skl = getSection(resume, 'skills', $1)"],
  [/const skl\s*=\s*\(resume\?\.skills\?\.length\s*\?\s*resume\.skills\s*:\s*([\w.]+)\)/g, "const skl = getSection(resume, 'skills', $1)"],
  // experience
  [/const exp\s*=\s*experience\.length\s*>\s*0\s*\?\s*experience\s*:\s*([\w.]+)/g, "const exp = getSection(resume, 'experience', $1)"],
  [/const exp\s*=\s*resume\?\.experience\?\.length\s*\?\s*resume\.experience\s*:\s*([\w.]+)/g, "const exp = getSection(resume, 'experience', $1)"],
  // education
  [/const edu\s*=\s*education\.length\s*>\s*0\s*\?\s*education\s*:\s*([\w.]+)/g, "const edu = getSection(resume, 'education', $1)"],
  [/const edu\s*=\s*resume\?\.education\?\.length\s*\?\s*resume\.education\s*:\s*([\w.]+)/g, "const edu = getSection(resume, 'education', $1)"],
  // projects
  [/const prj\s*=\s*projects\.length\s*>\s*0\s*\?\s*projects\s*:\s*([\w.]+)/g, "const prj = getSection(resume, 'projects', $1)"],
  [/const prj\s*=\s*resume\?\.projects\?\.length\s*\?\s*resume\.projects\s*:\s*([\w.]+)/g, "const prj = getSection(resume, 'projects', $1)"],
  // certifications
  [/const certs\s*=\s*certifications\.length\s*>\s*0\s*\?\s*certifications\s*:\s*([\w.]+)/g, "const certs = getSection(resume, 'certifications', $1)"],
  [/const certs\s*=\s*resume\?\.certifications\?\.length\s*\?\s*resume\.certifications\s*:\s*([\w.]+)/g, "const certs = getSection(resume, 'certifications', $1)"],
  // languages
  [/const langs\s*=\s*languages\.length\s*>\s*0\s*\?\s*languages\s*:\s*([\w.]+)/g, "const langs = getSection(resume, 'languages', $1)"],
  [/const langs\s*=\s*resume\?\.languages\?\.length\s*\?\s*resume\.languages\s*:\s*([\w.]+)/g, "const langs = getSection(resume, 'languages', $1)"],
]

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (entry.name.endsWith('.js')) processFile(full)
  }
}

function processFile(filePath) {
  if (filePath.includes('ModernTemplate.js')) return // already done manually

  let content = fs.readFileSync(filePath, 'utf8')
  const original = content

  let changed = false
  for (const [regex, replacement] of replacements) {
    if (regex.test(content)) {
      content = content.replace(regex, replacement)
      changed = true
    }
    regex.lastIndex = 0
  }

  if (!changed) return

  if (!content.includes("from '@/lib/resumeSections'")) {
    // Insert after first import line
    const firstImportEnd = content.indexOf('\n', content.indexOf('import '))
    if (firstImportEnd !== -1) {
      content = content.slice(0, firstImportEnd + 1) + IMPORT_LINE + content.slice(firstImportEnd + 1)
    } else {
      content = IMPORT_LINE + content
    }
  }

  fs.writeFileSync(filePath, content)
  console.log('patched:', path.relative(templatesDir, filePath))
}

walk(templatesDir)
console.log('done')
