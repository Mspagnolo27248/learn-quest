import { Link } from 'react-router-dom'

function scoreColor(score) {
  if (score === null) return 'bg-gray-50 border-gray-200 text-gray-700'
  if (score >= 4) return 'bg-emerald-50 border-emerald-300 text-emerald-800'
  if (score >= 3) return 'bg-amber-50 border-amber-300 text-amber-800'
  return 'bg-red-50 border-red-300 text-red-800'
}

function ScoreBadge({ score }) {
  if (score === null) return <span className="text-xs text-gray-400">Not started</span>
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${score >= 4 ? 'bg-emerald-100 text-emerald-700' : score >= 3 ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
      Best: {score}/5
    </span>
  )
}

export default function AspectGrid({ topicId, aspects, getScore, isDone }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-navy mb-2">Quiz — Choose an Aspect</h2>
      <p className="text-sm text-gray-500 mb-5">
        Each aspect has 5 questions. Try to score 5/5 on all 10!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {aspects.map((aspect, index) => {
          const score = getScore(topicId, index)
          const done = isDone(topicId, index)
          return (
            <Link
              key={index}
              to={`/topic/${topicId}/quiz/${index}`}
              className={`flex items-center justify-between gap-3 p-4 rounded-xl border-2 transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky min-h-[64px] ${scoreColor(done ? score : null)}`}
              aria-label={`Start quiz: ${aspect.name}${done ? `, best score ${score} out of 5` : ', not started'}`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="shrink-0 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-sm font-bold text-navy">
                  {index + 1}
                </span>
                <span className="text-sm font-medium leading-snug">{aspect.name}</span>
              </div>
              <div className="shrink-0">
                {done && score !== null
                  ? <ScoreBadge score={score} />
                  : <span className="text-xs text-gray-400">5 questions</span>
                }
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
