import { useState } from 'react'
import { topics } from '../data/index'
import { useProgress } from '../hooks/useProgress'
import Header from '../components/layout/Header'
import CategoryFilter from '../components/topics/CategoryFilter'
import TopicCard from '../components/topics/TopicCard'

export default function TopicSelectionPage() {
  const [category, setCategory] = useState('All')
  const { getCompletedCount, clearAll } = useProgress()

  const filtered = category === 'All'
    ? topics
    : topics.filter(t => t.category === category)

  function handleClearProgress() {
    if (window.confirm('Clear all your quiz progress? This cannot be undone.')) {
      clearAll()
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-navy mb-1">Explore Topics</h1>
          <p className="text-gray-500 text-sm">Pick a topic to read, watch videos, and take a quiz.</p>
        </div>

        <div className="mb-6">
          <CategoryFilter selected={category} onChange={setCategory} />
        </div>

        {filtered.length === 0 ? (
          <p className="text-gray-500 py-12 text-center">No topics in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map(topic => (
              <TopicCard
                key={topic.id}
                topic={topic}
                completed={getCompletedCount(topic.id, topic.aspects.length)}
                total={topic.aspects.length}
              />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <button
            onClick={handleClearProgress}
            className="text-xs text-gray-400 hover:text-red-500 transition-colors underline"
          >
            Clear My Progress
          </button>
        </div>
      </main>
    </div>
  )
}
