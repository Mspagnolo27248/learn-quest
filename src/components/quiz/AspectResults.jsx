import { Link } from 'react-router-dom'

function getMessage(score, total) {
  const pct = score / total
  if (pct === 1) return { emoji: '🏆', text: 'Perfect score! Outstanding work!' }
  if (pct >= 0.8) return { emoji: '⭐', text: 'Great job! You really know your stuff.' }
  if (pct >= 0.6) return { emoji: '👍', text: 'Good effort! Review and try again to improve.' }
  return { emoji: '💪', text: 'Keep going! Each attempt makes you stronger.' }
}

export default function AspectResults({ score, total, aspectName, topicId, aspectIndex, totalAspects }) {
  const { emoji, text } = getMessage(score, total)
  const isLast = aspectIndex >= totalAspects - 1

  return (
    <div className="text-center py-4">
      <div className="text-5xl mb-4" aria-hidden="true">{emoji}</div>
      <h2 className="text-2xl font-bold text-navy mb-1">
        {score} / {total}
      </h2>
      <p className="text-gray-500 text-sm mb-1">{aspectName}</p>
      <p className="text-base font-medium text-gray-700 mb-8">{text}</p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to={`/topic/${topicId}/quiz/${aspectIndex}`}
          className="px-6 py-3 border-2 border-navy text-navy rounded-xl text-sm font-semibold hover:bg-navy hover:text-white transition-colors min-h-[52px] flex items-center justify-center"
        >
          Try Again
        </Link>

        {!isLast && (
          <Link
            to={`/topic/${topicId}/quiz/${aspectIndex + 1}`}
            className="px-6 py-3 bg-sky text-white rounded-xl text-sm font-semibold hover:bg-sky-dark transition-colors min-h-[52px] flex items-center justify-center"
          >
            Next Aspect →
          </Link>
        )}

        <Link
          to={`/topic/${topicId}`}
          className="px-6 py-3 bg-navy text-white rounded-xl text-sm font-semibold hover:bg-navy-dark transition-colors min-h-[52px] flex items-center justify-center"
        >
          Back to Topic
        </Link>
      </div>
    </div>
  )
}
