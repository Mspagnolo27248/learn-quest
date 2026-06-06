const CATEGORIES = ['All', 'Science & Nature', 'History & Social Studies', 'Famous People & Biographies']

export default function CategoryFilter({ selected, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide" role="group" aria-label="Filter by category">
      {CATEGORIES.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] border ${
            selected === cat
              ? 'bg-navy text-white border-navy'
              : 'bg-white text-navy border-gray-300 hover:border-navy hover:bg-gray-50'
          }`}
          aria-pressed={selected === cat}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
