'use client'

const SECTION_LABELS = {
  skills: 'Technical Skills',
  experience: 'Experience',
  education: 'Education',
  projects: 'Projects',
  certifications: 'Certifications',
  languages: 'Languages',
  interests: 'Interests',
  achievementsList: 'Achievements',
  activities: 'Activities',
  publications: 'Publications',
  references: 'References',
  additionalInfo: 'Additional Info',
}

export default function SectionVisibilityBar({ section, label, description, visible, onToggle }) {
  const displayLabel = label || SECTION_LABELS[section] || section

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        padding: '10px 14px',
        borderRadius: 10,
        background: visible ? 'rgba(124,58,237,0.06)' : 'var(--card)',
        border: `1px solid ${visible ? 'rgba(124,58,237,0.25)' : 'var(--border)'}`,
        marginBottom: 14,
        transition: 'all 0.2s',
      }}
    >
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)', margin: '0 0 2px' }}>
          {displayLabel}
        </p>
        <p style={{ fontSize: '0.7rem', color: 'var(--text3)', margin: 0 }}>
          {description || (visible ? 'Visible on resume preview & PDF' : 'Hidden — won\'t appear on resume')}
        </p>
      </div>
      <button
        type="button"
        onClick={onToggle}
        style={{
          padding: '5px 12px',
          borderRadius: 8,
          fontSize: '0.72rem',
          fontWeight: 600,
          cursor: 'pointer',
          border: `1px solid ${visible ? 'rgba(248,113,113,0.35)' : 'rgba(124,58,237,0.35)'}`,
          background: visible ? 'rgba(248,113,113,0.1)' : 'rgba(124,58,237,0.12)',
          color: visible ? '#f87171' : 'var(--primary-muted)',
          transition: 'all 0.2s',
          whiteSpace: 'nowrap',
        }}
      >
        {visible ? 'Hide Section' : 'Show Section'}
      </button>
    </div>
  )
}
