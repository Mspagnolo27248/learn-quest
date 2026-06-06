const CHAPTER_THEMES = [
  { dot: 'bg-amber-400',   cardBg: 'bg-amber-50',   border: 'border-amber-200 border-l-4 border-l-amber-400',   hover: 'hover:border-amber-300',   text: 'text-amber-700',   emoji: '🌾' },
  { dot: 'bg-violet-500',  cardBg: 'bg-violet-50',  border: 'border-violet-200 border-l-4 border-l-violet-500', hover: 'hover:border-violet-300',  text: 'text-violet-700',  emoji: '✏️' },
  { dot: 'bg-red-400',     cardBg: 'bg-red-50',     border: 'border-red-200 border-l-4 border-l-red-400',       hover: 'hover:border-red-300',     text: 'text-red-700',     emoji: '🐭' },
  { dot: 'bg-pink-400',    cardBg: 'bg-pink-50',    border: 'border-pink-200 border-l-4 border-l-pink-400',     hover: 'hover:border-pink-300',    text: 'text-pink-700',    emoji: '🍎' },
  { dot: 'bg-emerald-500', cardBg: 'bg-emerald-50', border: 'border-emerald-200 border-l-4 border-l-emerald-500', hover: 'hover:border-emerald-300', text: 'text-emerald-700', emoji: '⭐' },
  { dot: 'bg-sky-500',     cardBg: 'bg-sky-50',     border: 'border-sky-200 border-l-4 border-l-sky-500',       hover: 'hover:border-sky-300',     text: 'text-sky-700',     emoji: '🎡' },
  { dot: 'bg-yellow-400',  cardBg: 'bg-yellow-50',  border: 'border-yellow-200 border-l-4 border-l-yellow-400', hover: 'hover:border-yellow-300',  text: 'text-yellow-700',  emoji: '🏆' },
  { dot: 'bg-indigo-500',  cardBg: 'bg-indigo-50',  border: 'border-indigo-200 border-l-4 border-l-indigo-500', hover: 'hover:border-indigo-300',  text: 'text-indigo-700',  emoji: '🌟' },
]

export default function LearnMoreGrid({ aspects, onSelect }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-navy mb-1">Explore &amp; Discover</h2>
      <p className="text-sm text-gray-500 mb-6">
        Follow the chapters below to go deeper into the story.
      </p>

      <div className="relative pl-14">
        <div
          className="absolute left-5 top-4 bottom-4 w-1 rounded-full"
          style={{ background: 'linear-gradient(to bottom, #fbbf24, #8b5cf6, #ef4444, #f472b6, #10b981, #0ea5e9, #facc15, #6366f1)' }}
        />

        <div className="space-y-3">
          {aspects.map((aspect, index) => {
            const theme = CHAPTER_THEMES[index % CHAPTER_THEMES.length]
            return (
              <button
                key={index}
                onClick={() => onSelect(index)}
                className="relative w-full text-left group"
                aria-label={`Read chapter ${index + 1}: ${aspect.name}`}
              >
                <div className={`absolute -left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full ${theme.dot} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200`}>
                  <span className="text-lg leading-none" role="img" aria-hidden="true">{theme.emoji}</span>
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[9px] font-bold text-gray-600">
                    {index + 1}
                  </span>
                </div>

                <div className={`p-4 rounded-xl border ${theme.border} ${theme.cardBg} ${theme.hover} hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className={`text-xs font-medium mb-0.5 ${theme.text} opacity-70`}>Chapter {index + 1}</p>
                      <h3 className="text-sm font-semibold text-navy leading-snug">{aspect.name}</h3>
                    </div>
                    <span className={`shrink-0 text-xs font-semibold ${theme.text} group-hover:translate-x-0.5 transition-transform`}>
                      ✨ Explore
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
