const TABS = [
  { id: 'summary', label: 'Summary' },
  { id: 'learn', label: 'Learn More' },
  { id: 'videos', label: 'Videos' },
  { id: 'reading', label: 'Reading' },
  { id: 'quiz', label: 'Quiz' },
]

export default function SectionNav({ active, onSelect }) {
  return (
    <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm" aria-label="Topic sections">
      <div className="max-w-5xl mx-auto px-4 flex gap-1 overflow-x-auto scrollbar-hide">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => onSelect(tab.id)}
            className={`shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors min-h-[44px] ${
              active === tab.id
                ? 'border-sky text-sky'
                : 'border-transparent text-gray-500 hover:text-navy hover:border-gray-300'
            }`}
            aria-current={active === tab.id ? 'page' : undefined}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
