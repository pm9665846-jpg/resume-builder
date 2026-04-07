import mysql from 'mysql2/promise'

let pool

export function getDB() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER || 'root',
      // Empty string means no password (XAMPP default)
      password: process.env.DB_PASSWORD ?? '',
      database: process.env.DB_NAME || 'resume_builder',
      waitForConnections: true,
      connectionLimit: 10,
      connectTimeout: 10000,
    })
  }
  return pool
}

export async function query(sql, params = []) {
  const db = getDB()
  const [rows] = await db.execute(sql, params)
  return rows
}
