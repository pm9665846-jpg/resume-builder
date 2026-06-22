/**
 * Resolve resume section data for templates.
 * - Returns [] when section is hidden or useSampleData is false and user data is empty
 * - Otherwise returns user data, or sample fallback for template thumbnails only
 */
export function getSection(resume, sectionKey, sampleData = []) {
  const hidden = resume?.hiddenSections || []
  if (hidden.includes(sectionKey)) return []

  const data = resume?.[sectionKey]
  const items = Array.isArray(data) ? data : []

  if (sectionKey === 'skills') {
    const filtered = items.filter(s => s?.name?.trim())
    if (filtered.length > 0) return filtered
  } else if (items.length > 0) {
    return items
  }

  if (resume?.useSampleData === false) return []
  return sampleData
}

/** Whether a section should render at all (has content to show) */
export function hasSection(resume, sectionKey, sampleData = []) {
  return getSection(resume, sectionKey, sampleData).length > 0
}
