import { query } from '@/lib/db'
import { templateMap } from '@/components/builder/ResumePreview'

// This page is rendered server-side for PDF generation
// URL: /print/[resumeId]

function resolvePhotoUrl(photo) {
  if (!photo) return ''
  if (photo.startsWith('http') || photo.startsWith('data:') || photo.startsWith('/')) return photo
  return `/uploads/${photo}`
}

export default async function PrintPage({ params }) {
  const { id } = await params

  let resume = null
  try {
    const rows = await query('SELECT * FROM resumes WHERE id = ?', [id])
    if (rows.length) {
      const row = rows[0]
      const data = JSON.parse(row.data || '{}')
      resume = {
        id: row.id,
        title: row.title,
        template: row.template,
        themeColor: row.theme_color,
        fontFamily: data.fontFamily || 'Arial, Helvetica, sans-serif',
        personalInfo: {
          ...data.personalInfo,
          photo: resolvePhotoUrl(data.personalInfo?.photo),
        },
        experience: data.experience || [],
        education: data.education || [],
        skills: data.skills || [],
        projects: data.projects || [],
        certifications: data.certifications || [],
        languages: data.languages || [],
        achievements: data.achievements || [],
        interests: data.interests || [],
      }
    }
  } catch (err) {
    console.error('Print page error:', err)
  }

  if (!resume) {
    return <div>Resume not found</div>
  }

  const Template = templateMap[resume.template]
  if (!Template) {
    return <div>Template not found</div>
  }

  return (
    <>
      <style>{`
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
      `}</style>
      <div style={{ width: 794, background: 'white' }}>
        <Template resume={resume} />
      </div>
    </>
  )
}
