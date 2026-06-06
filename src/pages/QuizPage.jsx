import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { getTopicById } from '../data/index'
import { useProgress } from '../hooks/useProgress'
import Header from '../components/layout/Header'
import QuizQuestion from '../components/quiz/QuizQuestion'
import AspectResults from '../components/quiz/AspectResults'

export default function QuizPage() {
  const { id, aspectIndex } = useParams()
  const idx = parseInt(aspectIndex, 10)
  const topic = getTopicById(id)
  const { setScore } = useProgress()

  const [questionIndex, setQuestionIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [finished, setFinished] = useState(false)

  if (!topic || isNaN(idx) || idx < 0 || idx >= topic.aspects.length) {
    return <Navigate to={`/topic/${id}`} replace />
  }

  const aspect = topic.aspects[idx]
  const questions = aspect.questions
  const question = questions[questionIndex]

  function handleAnswer(isCorrect) {
    const newCorrect = correctCount + (isCorrect ? 1 : 0)
    const nextIndex = questionIndex + 1

    if (nextIndex >= questions.length) {
      setCorrectCount(newCorrect)
      setScore(topic.id, idx, newCorrect)
      setFinished(true)
    } else {
      setCorrectCount(newCorrect)
      setQuestionIndex(nextIndex)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showBack backTo={`/topic/${id}`} backLabel={topic.title} />

      <main className="max-w-xl mx-auto px-4 py-6">
        <div className="mb-4">
          <p className="text-xs font-semibold text-sky uppercase tracking-wide">{topic.title}</p>
          <h1 className="text-lg font-bold text-navy">{aspect.name}</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-6">
          {finished ? (
            <AspectResults
              score={correctCount}
              total={questions.length}
              aspectName={aspect.name}
              topicId={topic.id}
              aspectIndex={idx}
              totalAspects={topic.aspects.length}
            />
          ) : (
            <QuizQuestion
              key={questionIndex}
              question={question}
              questionNum={questionIndex + 1}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
            />
          )}
        </div>
      </main>
    </div>
  )
}
