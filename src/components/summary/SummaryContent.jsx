export default function SummaryContent({ summary }) {
  return (
    <article className="prose prose-slate max-w-none">
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 font-medium">
        {summary.intro}
      </p>

      {summary.sections.map((section, i) => (
        <div key={i} className="mb-6">
          <h3 className="text-lg font-semibold text-navy mb-2">{section.title}</h3>
          <p className="text-gray-700 leading-relaxed">{section.body}</p>
        </div>
      ))}

      {summary.keyFacts?.length > 0 && (
        <div className="mt-6 bg-sky/5 border border-sky/20 rounded-xl p-5">
          <h3 className="text-base font-semibold text-navy mb-3">Key Facts</h3>
          <ul className="space-y-2">
            {summary.keyFacts.map((fact, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <span className="text-sky mt-0.5 shrink-0" aria-hidden="true">★</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}
