import { Link } from 'react-router-dom'

const CATEGORY_COLORS = {
  'Science & Nature': 'bg-emerald-100 text-emerald-800',
  'History & Social Studies': 'bg-amber-100 text-amber-800',
  'Famous People & Biographies': 'bg-purple-100 text-purple-800',
}

export default function TopicCard({ topic, completed, total }) {
  const badgeClass = CATEGORY_COLORS[topic.category] || 'bg-gray-100 text-gray-700'
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <Link
      to={`/topic/${topic.id}`}
      className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md hover:border-sky transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
      aria-label={`${topic.title} — ${completed} of ${total} aspects complete`}
    >
      <div className="relative h-44 overflow-hidden bg-gray-200">
        <img
          src={topic.thumbnail}
          alt={topic.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <span className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold ${badgeClass}`}>
          {topic.category}
        </span>
      </div>

      <div className="p-4">
        <h2 className="text-base font-semibold text-navy mb-1 leading-snug">{topic.title}</h2>
        <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">{topic.teaser}</p>

        <div className="space-y-1">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Quiz progress</span>
            <span>{completed}/{total} aspects</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
            <div
              className="h-full bg-sky rounded-full transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
