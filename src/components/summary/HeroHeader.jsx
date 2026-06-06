const CATEGORY_COLORS = {
  'Science & Nature': 'bg-emerald-500',
  'History & Social Studies': 'bg-amber-500',
  'Famous People & Biographies': 'bg-purple-500',
}

export default function HeroHeader({ topic }) {
  const badgeClass = CATEGORY_COLORS[topic.category] || 'bg-sky'

  return (
    <div className="relative h-56 sm:h-72 md:h-80 overflow-hidden bg-gray-800">
      <img
        src={topic.heroImage}
        alt={topic.title}
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-2 ${badgeClass}`}>
          {topic.category}
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
          {topic.title}
        </h1>
      </div>
    </div>
  )
}
