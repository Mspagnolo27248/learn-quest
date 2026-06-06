const P = 'lq_'

export function useProgress() {
  function getScore(topicId, aspectIndex) {
    const val = localStorage.getItem(`${P}score_${topicId}_${aspectIndex}`)
    return val !== null ? parseInt(val, 10) : null
  }

  function setScore(topicId, aspectIndex, score) {
    const existing = getScore(topicId, aspectIndex)
    if (existing === null || score > existing) {
      localStorage.setItem(`${P}score_${topicId}_${aspectIndex}`, score)
    }
    if (!isDone(topicId, aspectIndex)) {
      localStorage.setItem(`${P}done_${topicId}_${aspectIndex}`, 'true')
      const prev = parseInt(localStorage.getItem(`${P}totalComplete`) || '0', 10)
      localStorage.setItem(`${P}totalComplete`, prev + 1)
    }
  }

  function isDone(topicId, aspectIndex) {
    return localStorage.getItem(`${P}done_${topicId}_${aspectIndex}`) === 'true'
  }

  function getCompletedCount(topicId, totalAspects) {
    let count = 0
    for (let i = 0; i < totalAspects; i++) {
      if (isDone(topicId, i)) count++
    }
    return count
  }

  function setLastTopic(topicId) {
    localStorage.setItem(`${P}lastTopic`, topicId)
  }

  function clearAll() {
    Object.keys(localStorage)
      .filter(k => k.startsWith(P))
      .forEach(k => localStorage.removeItem(k))
  }

  return { getScore, setScore, isDone, getCompletedCount, setLastTopic, clearAll }
}
