export default function LearnMoreGrid({ aspects, onSelect }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-navy mb-1">Explore &amp; Discover</h2>
      <p className="text-sm text-gray-500 mb-6">
        Follow the chapters below to go deeper into the story.
      </p>

      <div className="relative pl-12">
        <div className="absolute left-4 top-3 bottom-3 w-0.5 bg-gray-200 rounded-full" />

        <div className="space-y-3">
          {aspects.map((aspect, index) => (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className="relative w-full text-left group"
              aria-label={`Read chapter ${index + 1}: ${aspect.name}`}
            >
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-2 border-gray-200 group-hover:border-sky group-hover:bg-sky/10 transition-colors flex items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-gray-400 group-hover:text-sky transition-colors">
                  {index + 1}
                </span>
              </div>

              <div className="p-4 rounded-xl border border-gray-100 bg-white hover:border-sky/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Chapter {index + 1}</p>
                    <h3 className="text-sm font-semibold text-navy leading-snug">{aspect.name}</h3>
                  </div>
                  <span className="shrink-0 text-sky text-xs font-medium group-hover:translate-x-0.5 transition-transform">
                    Read →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
