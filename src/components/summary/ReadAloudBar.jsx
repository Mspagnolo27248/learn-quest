import { VOICE_OPTIONS } from '../../hooks/useSpeech'

export default function ReadAloudBar({ status, onPlay, onPause, onResume, onStop, selectedKey, onVoiceChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-6 p-3 bg-sky/5 border border-sky/20 rounded-xl">
      <span className="text-sm font-medium text-navy mr-1">Read Aloud</span>

      {VOICE_OPTIONS.map(opt => (
        <button
          key={opt.key}
          onClick={() => onVoiceChange(opt.key)}
          className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-colors ${
            selectedKey === opt.key
              ? 'bg-sky text-white border-sky'
              : 'bg-white text-gray-600 border-gray-300 hover:border-sky hover:text-sky'
          }`}
        >
          {opt.label}
        </button>
      ))}

      <div className="w-px h-5 bg-gray-200 mx-1" />

      {status === 'idle' && (
        <button
          onClick={onPlay}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-navy text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          ▶ Play
        </button>
      )}

      {status === 'playing' && (
        <button
          onClick={onPause}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-navy text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          ⏸ Pause
        </button>
      )}

      {status === 'paused' && (
        <button
          onClick={onResume}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-navy text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          ▶ Resume
        </button>
      )}

      {status !== 'idle' && (
        <button
          onClick={onStop}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-300 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          ⏹ Stop
        </button>
      )}

      {status === 'playing' && (
        <span className="ml-auto text-xs text-sky animate-pulse">Reading...</span>
      )}
    </div>
  )
}
