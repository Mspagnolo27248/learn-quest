import { friendlyVoiceName } from '../../hooks/useSpeech'

export default function ReadAloudBar({ status, onPlay, onPause, onResume, onStop, voices, selectedVoiceName, onVoiceChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-6 p-3 bg-sky/5 border border-sky/20 rounded-xl">
      <span className="text-sm font-medium text-navy mr-1">Read Aloud</span>

      {status === 'idle' && (
        <button
          onClick={onPlay}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-sky text-white text-sm font-medium rounded-lg hover:bg-navy transition-colors"
        >
          ▶ Play
        </button>
      )}

      {status === 'playing' && (
        <button
          onClick={onPause}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-sky text-white text-sm font-medium rounded-lg hover:bg-navy transition-colors"
        >
          ⏸ Pause
        </button>
      )}

      {status === 'paused' && (
        <button
          onClick={onResume}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-sky text-white text-sm font-medium rounded-lg hover:bg-navy transition-colors"
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

      {voices.length > 1 && (
        <select
          value={selectedVoiceName}
          onChange={e => onVoiceChange(e.target.value)}
          title="Choose a voice"
          className="ml-auto text-xs text-gray-600 border border-gray-200 rounded-lg px-2 py-1.5 bg-white hover:border-sky focus:outline-none focus:ring-1 focus:ring-sky cursor-pointer"
        >
          {voices.map(v => (
            <option key={v.name} value={v.name}>
              {friendlyVoiceName(v)}
            </option>
          ))}
        </select>
      )}

      {status === 'playing' && (
        <span className="text-xs text-sky animate-pulse">Reading...</span>
      )}
    </div>
  )
}
