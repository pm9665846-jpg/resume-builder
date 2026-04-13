'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Trash2, Shield, User, AlertCircle } from 'lucide-react'

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  const d = Math.floor(h / 24)
  if (d < 30) return `${d}d ago`
  return new Date(dateStr).toLocaleDateString()
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [actionId, setActionId] = useState(null)

  async function loadUsers() {
    setLoading(true)
    const res = await fetch('/api/admin/users')
    const d = await res.json()
    if (d.success) setUsers(d.users)
    else setError(d.error)
    setLoading(false)
  }

  useEffect(() => { loadUsers() }, [])

  async function toggleRole(user) {
    setActionId(user.id)
    const newRole = user.role === 'admin' ? 'user' : 'admin'
    await fetch('/api/admin/users', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: user.id, role: newRole }),
    })
    await loadUsers()
    setActionId(null)
  }

  async function deleteUser(user) {
    if (!confirm(`Delete user "${user.name}"? This will also delete all their resumes.`)) return
    setActionId(user.id)
    await fetch('/api/admin/users', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: user.id }),
    })
    await loadUsers()
    setActionId(null)
  }

  const filtered = users.filter(u =>
    u.name?.toLowerCase().includes(search.toLowerCase()) ||
    u.email?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ padding: '40px 32px', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>

        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--text, #f1f5f9)', marginBottom: 4 }}>Users</h1>
          <p style={{ color: 'var(--text2, #94a3b8)', fontSize: '0.875rem' }}>{users.length} total users</p>
        </div>

        {/* Search */}
        <div style={{ position: 'relative', marginBottom: 24, maxWidth: 360 }}>
          <Search size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#475569' }} />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name or email..."
            style={{
              width: '100%', padding: '9px 12px 9px 36px', borderRadius: 10,
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
              color: '#e2e8f0', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box',
            }}
          />
        </div>

        {error && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#f87171', marginBottom: 20 }}>
            <AlertCircle size={16} /> {error}
          </div>
        )}

        {/* Table */}
        <div style={{ background: 'var(--card, #0f0f17)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
                  {['User', 'Email', 'Role', 'Resumes', 'Joined', 'Actions'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '12px 16px', color: '#475569', fontWeight: 500, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={7} style={{ padding: 32, textAlign: 'center', color: '#475569' }}>Loading...</td></tr>
                ) : filtered.length === 0 ? (
                  <tr><td colSpan={7} style={{ padding: 32, textAlign: 'center', color: '#475569' }}>No users found</td></tr>
                ) : filtered.map((u) => (
                  <tr key={u.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', transition: 'background 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    {/* User */}
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: 'white', flexShrink: 0 }}>
                          {u.name?.[0]?.toUpperCase()}
                        </div>
                        <span style={{ color: '#e2e8f0', fontWeight: 500, whiteSpace: 'nowrap' }}>{u.name}</span>
                      </div>
                    </td>
                    {/* Email */}
                    <td style={{ padding: '12px 16px', color: '#94a3b8', fontSize: '0.8rem' }}>{u.email}</td>
                    {/* Role */}
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ background: u.role === 'admin' ? 'rgba(239,68,68,0.12)' : 'rgba(255,255,255,0.05)', color: u.role === 'admin' ? '#f87171' : '#64748b', padding: '2px 10px', borderRadius: 20, fontSize: '0.72rem' }}>
                        {u.role}
                      </span>
                    </td>
                    {/* Resumes */}
                    <td style={{ padding: '12px 16px', color: '#94a3b8', textAlign: 'center' }}>{u.resume_count}</td>
                    {/* Joined */}
                    <td style={{ padding: '12px 16px', color: '#475569', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>{timeAgo(u.created_at)}</td>
                    {/* Actions */}
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button
                          onClick={() => toggleRole(u)}
                          disabled={actionId === u.id}
                          title={u.role === 'admin' ? 'Demote to user' : 'Promote to admin'}
                          style={{ padding: '5px 10px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem' }}
                        >
                          {u.role === 'admin' ? <User size={13} /> : <Shield size={13} />}
                          {u.role === 'admin' ? 'Demote' : 'Promote'}
                        </button>
                        <button
                          onClick={() => deleteUser(u)}
                          disabled={actionId === u.id}
                          title="Delete user"
                          style={{ padding: '5px 10px', borderRadius: 8, border: '1px solid rgba(239,68,68,0.2)', background: 'transparent', color: '#f87171', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem' }}
                        >
                          <Trash2 size={13} /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </motion.div>
    </div>
  )
}
