const TOPIC_THEMES = {
  'walt-disney': {
    gradient: 'linear-gradient(to bottom, #fbbf24, #8b5cf6, #ef4444, #f472b6, #10b981, #0ea5e9, #facc15, #6366f1)',
    chapters: [
      { dot: 'bg-amber-400',   cardBg: 'bg-amber-50',   border: 'border-amber-200 border-l-4 border-l-amber-400',     hover: 'hover:border-amber-300',   text: 'text-amber-700',   emoji: '🌾' },
      { dot: 'bg-violet-500',  cardBg: 'bg-violet-50',  border: 'border-violet-200 border-l-4 border-l-violet-500',   hover: 'hover:border-violet-300',  text: 'text-violet-700',  emoji: '✏️' },
      { dot: 'bg-red-400',     cardBg: 'bg-red-50',     border: 'border-red-200 border-l-4 border-l-red-400',         hover: 'hover:border-red-300',     text: 'text-red-700',     emoji: '🐭' },
      { dot: 'bg-pink-400',    cardBg: 'bg-pink-50',    border: 'border-pink-200 border-l-4 border-l-pink-400',       hover: 'hover:border-pink-300',    text: 'text-pink-700',    emoji: '🍎' },
      { dot: 'bg-emerald-500', cardBg: 'bg-emerald-50', border: 'border-emerald-200 border-l-4 border-l-emerald-500', hover: 'hover:border-emerald-300', text: 'text-emerald-700', emoji: '⭐' },
      { dot: 'bg-sky-500',     cardBg: 'bg-sky-50',     border: 'border-sky-200 border-l-4 border-l-sky-500',         hover: 'hover:border-sky-300',     text: 'text-sky-700',     emoji: '🎡' },
      { dot: 'bg-yellow-400',  cardBg: 'bg-yellow-50',  border: 'border-yellow-200 border-l-4 border-l-yellow-400',   hover: 'hover:border-yellow-300',  text: 'text-yellow-700',  emoji: '🏆' },
      { dot: 'bg-indigo-500',  cardBg: 'bg-indigo-50',  border: 'border-indigo-200 border-l-4 border-l-indigo-500',   hover: 'hover:border-indigo-300',  text: 'text-indigo-700',  emoji: '🌟' },
    ],
  },
  'coco-chanel': {
    gradient: 'linear-gradient(to bottom, #fb7185, #fbbf24, #f472b6, #64748b, #8b5cf6)',
    chapters: [
      { dot: 'bg-rose-400',    cardBg: 'bg-rose-50',    border: 'border-rose-200 border-l-4 border-l-rose-400',       hover: 'hover:border-rose-300',    text: 'text-rose-700',    emoji: '🧵' },
      { dot: 'bg-amber-400',   cardBg: 'bg-amber-50',   border: 'border-amber-200 border-l-4 border-l-amber-400',     hover: 'hover:border-amber-300',   text: 'text-amber-700',   emoji: '✂️' },
      { dot: 'bg-pink-500',    cardBg: 'bg-pink-50',    border: 'border-pink-200 border-l-4 border-l-pink-500',       hover: 'hover:border-pink-300',    text: 'text-pink-700',    emoji: '💄' },
      { dot: 'bg-slate-500',   cardBg: 'bg-slate-50',   border: 'border-slate-200 border-l-4 border-l-slate-500',     hover: 'hover:border-slate-300',   text: 'text-slate-700',   emoji: '🌹' },
      { dot: 'bg-violet-500',  cardBg: 'bg-violet-50',  border: 'border-violet-200 border-l-4 border-l-violet-500',   hover: 'hover:border-violet-300',  text: 'text-violet-700',  emoji: '👗' },
    ],
  },
  'marie-curie': {
    gradient: 'linear-gradient(to bottom, #38bdf8, #34d399, #818cf8, #f59e0b, #6366f1)',
    chapters: [
      { dot: 'bg-sky-400',     cardBg: 'bg-sky-50',     border: 'border-sky-200 border-l-4 border-l-sky-400',         hover: 'hover:border-sky-300',     text: 'text-sky-700',     emoji: '⚗️' },
      { dot: 'bg-emerald-500', cardBg: 'bg-emerald-50', border: 'border-emerald-200 border-l-4 border-l-emerald-500', hover: 'hover:border-emerald-300', text: 'text-emerald-700', emoji: '🔬' },
      { dot: 'bg-indigo-400',  cardBg: 'bg-indigo-50',  border: 'border-indigo-200 border-l-4 border-l-indigo-400',   hover: 'hover:border-indigo-300',  text: 'text-indigo-700',  emoji: '✨' },
      { dot: 'bg-amber-500',   cardBg: 'bg-amber-50',   border: 'border-amber-200 border-l-4 border-l-amber-500',     hover: 'hover:border-amber-300',   text: 'text-amber-700',   emoji: '🏆' },
      { dot: 'bg-violet-500',  cardBg: 'bg-violet-50',  border: 'border-violet-200 border-l-4 border-l-violet-500',   hover: 'hover:border-violet-300',  text: 'text-violet-700',  emoji: '🌍' },
    ],
  },
  'american-revolution': {
    gradient: 'linear-gradient(to bottom, #1d4ed8, #b45309, #dc2626, #92400e, #1e40af)',
    chapters: [
      { dot: 'bg-blue-700',    cardBg: 'bg-blue-50',    border: 'border-blue-200 border-l-4 border-l-blue-700',       hover: 'hover:border-blue-300',    text: 'text-blue-800',    emoji: '🦅' },
      { dot: 'bg-amber-700',   cardBg: 'bg-amber-50',   border: 'border-amber-200 border-l-4 border-l-amber-700',     hover: 'hover:border-amber-300',   text: 'text-amber-800',   emoji: '⚔️' },
      { dot: 'bg-red-600',     cardBg: 'bg-red-50',     border: 'border-red-200 border-l-4 border-l-red-600',         hover: 'hover:border-red-300',     text: 'text-red-700',     emoji: '📜' },
      { dot: 'bg-yellow-700',  cardBg: 'bg-yellow-50',  border: 'border-yellow-200 border-l-4 border-l-yellow-700',   hover: 'hover:border-yellow-300',  text: 'text-yellow-800',  emoji: '🕯️' },
      { dot: 'bg-indigo-700',  cardBg: 'bg-indigo-50',  border: 'border-indigo-200 border-l-4 border-l-indigo-700',   hover: 'hover:border-indigo-300',  text: 'text-indigo-800',  emoji: '🗽' },
    ],
  },
  'theodore-roosevelt': {
    gradient: 'linear-gradient(to bottom, #b45309, #1d4ed8, #dc2626, #15803d, #ca8a04)',
    chapters: [
      { dot: 'bg-amber-700',   cardBg: 'bg-amber-50',   border: 'border-amber-200 border-l-4 border-l-amber-700',     hover: 'hover:border-amber-300',   text: 'text-amber-800',   emoji: '🤠' },
      { dot: 'bg-blue-700',    cardBg: 'bg-blue-50',    border: 'border-blue-200 border-l-4 border-l-blue-700',       hover: 'hover:border-blue-300',    text: 'text-blue-800',    emoji: '🏛️' },
      { dot: 'bg-red-600',     cardBg: 'bg-red-50',     border: 'border-red-200 border-l-4 border-l-red-600',         hover: 'hover:border-red-300',     text: 'text-red-700',     emoji: '⚖️' },
      { dot: 'bg-green-700',   cardBg: 'bg-green-50',   border: 'border-green-200 border-l-4 border-l-green-700',     hover: 'hover:border-green-300',   text: 'text-green-800',   emoji: '🌲' },
      { dot: 'bg-yellow-600',  cardBg: 'bg-yellow-50',  border: 'border-yellow-200 border-l-4 border-l-yellow-600',   hover: 'hover:border-yellow-300',  text: 'text-yellow-700',  emoji: '🕊️' },
    ],
  },
  'nikola-tesla': {
    gradient: 'linear-gradient(to bottom, #f59e0b, #0ea5e9, #facc15, #64748b, #7c3aed)',
    chapters: [
      { dot: 'bg-amber-500',   cardBg: 'bg-amber-50',   border: 'border-amber-200 border-l-4 border-l-amber-500',     hover: 'hover:border-amber-300',   text: 'text-amber-700',   emoji: '⛪' },
      { dot: 'bg-sky-500',     cardBg: 'bg-sky-50',     border: 'border-sky-200 border-l-4 border-l-sky-500',         hover: 'hover:border-sky-300',     text: 'text-sky-700',     emoji: '⚡' },
      { dot: 'bg-yellow-400',  cardBg: 'bg-yellow-50',  border: 'border-yellow-200 border-l-4 border-l-yellow-400',   hover: 'hover:border-yellow-300',  text: 'text-yellow-700',  emoji: '🌩️' },
      { dot: 'bg-slate-500',   cardBg: 'bg-slate-50',   border: 'border-slate-200 border-l-4 border-l-slate-500',     hover: 'hover:border-slate-300',   text: 'text-slate-700',   emoji: '🕯️' },
      { dot: 'bg-violet-600',  cardBg: 'bg-violet-50',  border: 'border-violet-200 border-l-4 border-l-violet-600',   hover: 'hover:border-violet-300',  text: 'text-violet-700',  emoji: '💡' },
    ],
  },
  'eleanor-roosevelt': {
    gradient: 'linear-gradient(to bottom, #fb7185, #f59e0b, #0ea5e9, #4f46e5, #10b981)',
    chapters: [
      { dot: 'bg-rose-400',    cardBg: 'bg-rose-50',    border: 'border-rose-200 border-l-4 border-l-rose-400',       hover: 'hover:border-rose-300',    text: 'text-rose-700',    emoji: '🧸' },
      { dot: 'bg-amber-500',   cardBg: 'bg-amber-50',   border: 'border-amber-200 border-l-4 border-l-amber-500',     hover: 'hover:border-amber-300',   text: 'text-amber-700',   emoji: '💍' },
      { dot: 'bg-sky-500',     cardBg: 'bg-sky-50',     border: 'border-sky-200 border-l-4 border-l-sky-500',         hover: 'hover:border-sky-300',     text: 'text-sky-700',     emoji: '📰' },
      { dot: 'bg-indigo-600',  cardBg: 'bg-indigo-50',  border: 'border-indigo-200 border-l-4 border-l-indigo-600',   hover: 'hover:border-indigo-300',  text: 'text-indigo-700',  emoji: '🌍' },
      { dot: 'bg-emerald-500', cardBg: 'bg-emerald-50', border: 'border-emerald-200 border-l-4 border-l-emerald-500', hover: 'hover:border-emerald-300', text: 'text-emerald-700', emoji: '🕊️' },
    ],
  },
  'severe-weather': {
    gradient: 'linear-gradient(to bottom, #38bdf8, #facc15, #6b7280, #1e3a8a, #b45309)',
    chapters: [
      { dot: 'bg-sky-400',     cardBg: 'bg-sky-50',     border: 'border-sky-200 border-l-4 border-l-sky-400',         hover: 'hover:border-sky-300',     text: 'text-sky-700',     emoji: '🌤️' },
      { dot: 'bg-yellow-400',  cardBg: 'bg-yellow-50',  border: 'border-yellow-200 border-l-4 border-l-yellow-400',   hover: 'hover:border-yellow-300',  text: 'text-yellow-700',  emoji: '⚡' },
      { dot: 'bg-gray-500',    cardBg: 'bg-gray-50',    border: 'border-gray-200 border-l-4 border-l-gray-500',       hover: 'hover:border-gray-300',    text: 'text-gray-700',    emoji: '🌪️' },
      { dot: 'bg-blue-700',    cardBg: 'bg-blue-50',    border: 'border-blue-200 border-l-4 border-l-blue-700',       hover: 'hover:border-blue-300',    text: 'text-blue-800',    emoji: '🌀' },
      { dot: 'bg-amber-700',   cardBg: 'bg-amber-50',   border: 'border-amber-200 border-l-4 border-l-amber-700',     hover: 'hover:border-amber-300',   text: 'text-amber-800',   emoji: '📡' },
    ],
  },
  'solar-system': {
    gradient: 'linear-gradient(to bottom, #f59e0b, #7c3aed, #0ea5e9, #10b981, #f43f5e)',
    chapters: [
      { dot: 'bg-amber-400',   cardBg: 'bg-amber-50',   border: 'border-amber-200 border-l-4 border-l-amber-400',     hover: 'hover:border-amber-300',   text: 'text-amber-700',   emoji: '☀️' },
      { dot: 'bg-violet-600',  cardBg: 'bg-violet-50',  border: 'border-violet-200 border-l-4 border-l-violet-600',   hover: 'hover:border-violet-300',  text: 'text-violet-700',  emoji: '🪐' },
      { dot: 'bg-sky-500',     cardBg: 'bg-sky-50',     border: 'border-sky-200 border-l-4 border-l-sky-500',         hover: 'hover:border-sky-300',     text: 'text-sky-700',     emoji: '🌌' },
      { dot: 'bg-emerald-500', cardBg: 'bg-emerald-50', border: 'border-emerald-200 border-l-4 border-l-emerald-500', hover: 'hover:border-emerald-300', text: 'text-emerald-700', emoji: '🚀' },
      { dot: 'bg-rose-500',    cardBg: 'bg-rose-50',    border: 'border-rose-200 border-l-4 border-l-rose-500',       hover: 'hover:border-rose-300',    text: 'text-rose-700',    emoji: '🌠' },
    ],
  },
  'space-travel': {
    gradient: 'linear-gradient(to bottom, #f59e0b, #0ea5e9, #7c3aed, #64748b, #f43f5e)',
    chapters: [
      { dot: 'bg-amber-500',   cardBg: 'bg-amber-50',   border: 'border-amber-200 border-l-4 border-l-amber-500',     hover: 'hover:border-amber-300',   text: 'text-amber-700',   emoji: '🚀' },
      { dot: 'bg-sky-500',     cardBg: 'bg-sky-50',     border: 'border-sky-200 border-l-4 border-l-sky-500',         hover: 'hover:border-sky-300',     text: 'text-sky-700',     emoji: '🛰️' },
      { dot: 'bg-violet-600',  cardBg: 'bg-violet-50',  border: 'border-violet-200 border-l-4 border-l-violet-600',   hover: 'hover:border-violet-300',  text: 'text-violet-700',  emoji: '👨‍🚀' },
      { dot: 'bg-slate-500',   cardBg: 'bg-slate-50',   border: 'border-slate-200 border-l-4 border-l-slate-500',     hover: 'hover:border-slate-300',   text: 'text-slate-700',   emoji: '🌕' },
      { dot: 'bg-rose-500',    cardBg: 'bg-rose-50',    border: 'border-rose-200 border-l-4 border-l-rose-500',       hover: 'hover:border-rose-300',    text: 'text-rose-700',    emoji: '🤖' },
    ],
  },
}

const DEFAULT_THEMES = {
  gradient: 'linear-gradient(to bottom, #fbbf24, #8b5cf6, #ef4444, #f472b6, #10b981)',
  chapters: [
    { dot: 'bg-amber-400',   cardBg: 'bg-amber-50',   border: 'border-amber-200 border-l-4 border-l-amber-400',     hover: 'hover:border-amber-300',   text: 'text-amber-700',   emoji: '⭐' },
    { dot: 'bg-violet-500',  cardBg: 'bg-violet-50',  border: 'border-violet-200 border-l-4 border-l-violet-500',   hover: 'hover:border-violet-300',  text: 'text-violet-700',  emoji: '✨' },
    { dot: 'bg-red-400',     cardBg: 'bg-red-50',     border: 'border-red-200 border-l-4 border-l-red-400',         hover: 'hover:border-red-300',     text: 'text-red-700',     emoji: '🌟' },
    { dot: 'bg-pink-400',    cardBg: 'bg-pink-50',    border: 'border-pink-200 border-l-4 border-l-pink-400',       hover: 'hover:border-pink-300',    text: 'text-pink-700',    emoji: '💫' },
    { dot: 'bg-emerald-500', cardBg: 'bg-emerald-50', border: 'border-emerald-200 border-l-4 border-l-emerald-500', hover: 'hover:border-emerald-300', text: 'text-emerald-700', emoji: '🔥' },
  ],
}

export default function LearnMoreGrid({ aspects, topicId, onSelect }) {
  const topicThemes = TOPIC_THEMES[topicId] || DEFAULT_THEMES

  return (
    <div>
      <h2 className="text-xl font-semibold text-navy mb-1">Explore &amp; Discover</h2>
      <p className="text-sm text-gray-500 mb-6">
        Follow the chapters below to go deeper into the story.
      </p>

      <div className="relative pl-14">
        <div
          className="absolute left-5 top-4 bottom-4 w-1 rounded-full"
          style={{ background: topicThemes.gradient }}
        />

        <div className="space-y-3">
          {aspects.map((aspect, index) => {
            const theme = topicThemes.chapters[index % topicThemes.chapters.length]
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
