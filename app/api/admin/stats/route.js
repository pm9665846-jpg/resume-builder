import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getAdminSession } from '@/lib/adminSession'

export async function GET() {
  try {
    const admin = await getAdminSession()
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const [
      totalUsers,
      totalResumes,
      totalDrafts,
      templateStats,
      recentUsers,
      recentResumes,
      userGrowth,
      resumeGrowth,
    ] = await Promise.all([
      query('SELECT COUNT(*) as count FROM users WHERE role = ?', ['user']),
      query('SELECT COUNT(*) as count FROM resumes WHERE is_draft = 0'),
      query('SELECT COUNT(*) as count FROM resumes WHERE is_draft = 1'),
      query('SELECT template, COUNT(*) as count FROM resumes GROUP BY template ORDER BY count DESC'),
      query('SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC LIMIT 5'),
      query(`SELECT r.id, r.title, r.template, r.is_draft, r.created_at, u.name as user_name
             FROM resumes r JOIN users u ON r.user_id = u.id
             ORDER BY r.created_at DESC LIMIT 5`),
      query('SELECT COUNT(*) as count FROM users WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)'),
      query('SELECT COUNT(*) as count FROM resumes WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)'),
    ])

    return NextResponse.json({
      success: true,
      stats: {
        totalUsers: totalUsers[0].count,
        totalResumes: totalResumes[0].count,
        totalDrafts: totalDrafts[0].count,
        newUsersThisWeek: userGrowth[0].count,
        newResumesThisWeek: resumeGrowth[0].count,
        templateStats,
        recentUsers,
        recentResumes,
      },
    })
  } catch (err) {
    console.error('[GET /api/admin/stats]', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
