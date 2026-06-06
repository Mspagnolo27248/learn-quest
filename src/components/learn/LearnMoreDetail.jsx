const ACCENT_COLORS = [
  'bg-sky/10 text-sky border-sky/20',
  'bg-emerald-50 text-emerald-700 border-emerald-200',
  'bg-violet-50 text-violet-700 border-violet-200',
  'bg-amber-50 text-amber-700 border-amber-200',
  'bg-rose-50 text-rose-700 border-rose-200',
]

export default function LearnMoreDetail({ aspect, aspectIndex, totalAspects, onBack, onNext, onPrev }) {
  const facts = aspect.questions.map(q => q.explanation)
  const images = aspect.learnMoreImages || []

  return (
    <article>
      <div className="flex items-center gap-3 mb-5">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-gray-500 hover:text-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky rounded"
          aria-label="Back to all chapters"
        >
          ← All chapters
        </button>
        <span className="text-gray-300">|</span>
        <span className="text-xs text-gray-400">{aspectIndex + 1} of {totalAspects}</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6 leading-tight">
        {aspect.name}
      </h2>

      <div className="space-y-5 mb-8">
        {facts.map((fact, i) => (
          <div key={i}>
            <div className={`flex gap-4 p-4 rounded-xl border ${ACCENT_COLORS[i % ACCENT_COLORS.length]}`}>
              <span className="shrink-0 w-7 h-7 rounded-full bg-white/70 flex items-center justify-center text-xs font-bold shadow-sm mt-0.5">
                {i + 1}
              </span>
              <p className="text-sm sm:text-base leading-relaxed text-gray-800">{fact}</p>
            </div>

            {images[i] && (
              <figure className="mt-4 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <img
                  src={images[i].url}
                  alt={images[i].caption}
                  className="w-full h-56 sm:h-72 object-cover"
                />
                <figcaption className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 text-xs text-gray-500 italic leading-relaxed">
                  {images[i].caption}
                </figcaption>
              </figure>
            )}
          </div>
        ))}

        {images.slice(facts.length).map((img, i) => (
          <figure key={`extra-${i}`} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src={img.url}
              alt={img.caption}
              className="w-full h-56 sm:h-72 object-cover"
            />
            <figcaption className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 text-xs text-gray-500 italic leading-relaxed">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-gray-100 pt-5">
        <button
          onClick={onPrev}
          disabled={aspectIndex === 0}
          className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-navy hover:bg-gray-100 disabled:opacity-30 disabled:pointer-events-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
        >
          ← Previous
        </button>
        <button
          onClick={onBack}
          className="text-xs text-gray-400 hover:text-navy transition-colors underline underline-offset-2"
        >
          All chapters
        </button>
        <button
          onClick={onNext}
          disabled={aspectIndex === totalAspects - 1}
          className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-navy hover:bg-gray-100 disabled:opacity-30 disabled:pointer-events-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
        >
          Next →
        </button>
      </div>
    </article>
  )
}
