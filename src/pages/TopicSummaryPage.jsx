import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getTopicById } from '../data/index'
import { useProgress } from '../hooks/useProgress'
import Header from '../components/layout/Header'
import HeroHeader from '../components/summary/HeroHeader'
import SectionNav from '../components/summary/SectionNav'
import SummaryContent from '../components/summary/SummaryContent'
import VideoSection from '../components/video/VideoSection'
import ReadingSection from '../components/reading/ReadingSection'
import AspectGrid from '../components/quiz/AspectGrid'

export default function TopicSummaryPage() {
  const { id } = useParams()
  const topic = getTopicById(id)
  const [section, setSection] = useState('summary')
  const { getScore, isDone, setLastTopic } = useProgress()

  useEffect(() => {
    if (topic) setLastTopic(topic.id)
  }, [topic])

  if (!topic) return <Navigate to="/" replace />

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showBack backTo="/" backLabel="All Topics" />

      <HeroHeader topic={topic} />
      <SectionNav active={section} onSelect={setSection} />

      <main className="max-w-5xl mx-auto px-4 py-6">
        {section === 'summary' && (
          <SummaryContent summary={topic.summary} />
        )}

        {section === 'videos' && (
          <VideoSection videos={topic.videos} />
        )}

        {section === 'reading' && (
          <ReadingSection readings={topic.readings} />
        )}

        {section === 'quiz' && (
          <AspectGrid
            topicId={topic.id}
            aspects={topic.aspects}
            getScore={getScore}
            isDone={isDone}
          />
        )}
      </main>
    </div>
  )
}
