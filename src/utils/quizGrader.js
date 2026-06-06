export function gradeShortAnswer(userAnswer, keywords) {
  if (!userAnswer || !keywords?.length) return false
  const normalized = userAnswer.toLowerCase().trim()
  return keywords.some(kw => normalized.includes(kw.toLowerCase()))
}

export function formatDuration(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return s === 0 ? `${m} min` : `${m}:${String(s).padStart(2, '0')} min`
}
