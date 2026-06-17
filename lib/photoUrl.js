/** Resolve stored photo value to a displayable URL */
export function resolvePhotoUrl(photo) {
  if (!photo) return ''
  if (photo.startsWith('http') || photo.startsWith('data:') || photo.startsWith('/')) return photo
  return `/uploads/${photo}`
}
