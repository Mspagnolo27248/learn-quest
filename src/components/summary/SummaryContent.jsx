import useSpeech from '../../hooks/useSpeech'
import ReadAloudBar from './ReadAloudBar'

function buildSummaryText(summary) {
  const parts = [summary.intro]
  for (const section of summary.sections) {
    parts.push(section.title + '. ' + section.body)
  }
  if (summary.keyFacts?.length > 0) {
    parts.push('Key Facts.')
    parts.push(...summary.keyFacts)
  }
  return parts.join(' ')
}

export default function SummaryContent({ summary }) {
  const { speak, pause, resume, stop, status, selectedKey, selectVoice } = useSpeech()
  const fullText = buildSummaryText(summary)

  return (
    <article className="prose prose-slate max-w-none">
      <ReadAloudBar
        status={status}
        onPlay={() => speak(fullText)}
        onPause={pause}
        onResume={resume}
        onStop={stop}
        selectedKey={selectedKey}
        onVoiceChange={selectVoice}
      />

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
