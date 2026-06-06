import { useState } from 'react'

const SOURCE_ICONS = {
  book: '📖',
  article: '📄',
  speech: '🎤',
  pamphlet: '📰',
  'historical document': '📜',
}

function ReadingCard({ reading }) {
  const [expanded, setExpanded] = useState(false)
  const icon = SOURCE_ICONS[reading.sourceType] || '📄'

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <div className="flex gap-3 items-start mb-3">
        <span className="text-2xl" aria-hidden="true">{icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-navy leading-snug">{reading.title}</h3>
          <p className="text-sm text-gray-500 mt-0.5">
            {reading.author} · {reading.year} · <span className="capitalize">{reading.sourceType}</span>
          </p>
        </div>
      </div>

      <p className={`text-sm text-gray-700 leading-relaxed ${expanded ? '' : 'line-clamp-4'}`}>
        {reading.summary}
      </p>

      <div className="flex items-center gap-4 mt-3">
        <button
          onClick={() => setExpanded(e => !e)}
          className="text-sm text-sky hover:text-sky-dark font-medium transition-colors min-h-[44px]"
          aria-expanded={expanded}
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>

        <a
          href={reading.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-sky hover:text-sky-dark font-medium transition-colors min-h-[44px] flex items-center gap-1 ml-auto"
          aria-label={`Read the original: ${reading.title} (opens in new tab)`}
        >
          Read the original
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <details className="mt-3">
        <summary className="text-xs text-gray-400 cursor-pointer hover:text-gray-600 min-h-[44px] flex items-center">
          Full citation
        </summary>
        <p className="text-xs text-gray-500 mt-1 italic pl-2 border-l-2 border-gray-200 leading-relaxed">
          {reading.citationChicago}
        </p>
      </details>
    </div>
  )
}

export default function ReadingSection({ readings }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-navy mb-2">Further Reading</h2>
      <p className="text-sm text-gray-500 mb-5">
        Explore the books and articles that shaped our understanding of this topic.
      </p>
      <div className="space-y-4">
        {readings.map((reading, i) => (
          <ReadingCard key={i} reading={reading} />
        ))}
      </div>
    </div>
  )
}
