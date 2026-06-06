import { useState } from 'react'
import { formatDuration } from '../../utils/quizGrader'

function VideoPlayer({ video, onClose }) {
  return (
    <div className="mb-6">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute inset-0 w-full h-full rounded-xl"
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="mt-3 flex justify-between items-start gap-4">
        <div>
          <p className="font-semibold text-navy text-sm">{video.title}</p>
          <p className="text-sm text-gray-600 mt-1">{video.description}</p>
        </div>
        <button
          onClick={onClose}
          className="shrink-0 text-xs text-gray-500 hover:text-navy underline min-h-[44px] px-2"
        >
          Close
        </button>
      </div>
    </div>
  )
}

function VideoCard({ video, onPlay }) {
  return (
    <button
      onClick={() => onPlay(video)}
      className="group text-left bg-gray-50 hover:bg-white border border-gray-200 hover:border-sky hover:shadow-md rounded-xl overflow-hidden transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
      aria-label={`Play: ${video.title}`}
    >
      <div className="relative aspect-video bg-gray-800 overflow-hidden">
        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
          alt=""
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-navy text-lg ml-1" aria-hidden="true">▶</span>
          </div>
        </div>
        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
          ~{formatDuration(video.durationSeconds)}
        </span>
      </div>
      <div className="p-3">
        <p className="text-sm font-semibold text-navy leading-snug line-clamp-2">{video.title}</p>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{video.description}</p>
      </div>
    </button>
  )
}

export default function VideoSection({ videos }) {
  const [active, setActive] = useState(null)

  return (
    <div>
      <h2 className="text-xl font-semibold text-navy mb-4">Watch & Learn</h2>
      <p className="text-sm text-gray-500 mb-5">All videos are under 5 minutes and kid-friendly.</p>

      {active && <VideoPlayer video={active} onClose={() => setActive(null)} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map(video => (
          <VideoCard key={video.youtubeId} video={video} onPlay={setActive} />
        ))}
      </div>
    </div>
  )
}
