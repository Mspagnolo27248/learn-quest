import { useState, useRef, useEffect } from 'react'
import { gradeShortAnswer } from '../../utils/quizGrader'

function ChoiceButton({ label, onClick, state }) {
  const base = 'w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-colors min-h-[52px]'
  const styles = {
    default: 'border-gray-200 bg-white hover:border-sky hover:bg-sky/5 text-gray-800',
    correct: 'border-emerald-500 bg-emerald-50 text-emerald-800',
    wrong: 'border-red-400 bg-red-50 text-red-800',
    reveal: 'border-emerald-400 bg-emerald-50 text-emerald-800',
  }
  return (
    <button className={`${base} ${styles[state]}`} onClick={onClick} disabled={state !== 'default'}>
      {label}
    </button>
  )
}

export default function QuizQuestion({ question, questionNum, totalQuestions, onAnswer }) {
  const [selected, setSelected] = useState(null)
  const [inputVal, setInputVal] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState(null)
  const feedbackRef = useRef(null)

  useEffect(() => {
    setSelected(null)
    setInputVal('')
    setSubmitted(false)
    setCorrect(null)
  }, [question])

  useEffect(() => {
    if (submitted && feedbackRef.current) {
      feedbackRef.current.focus()
    }
  }, [submitted])

  function handleSubmit(answer) {
    let isCorrect
    if (question.type === 'short_answer') {
      isCorrect = gradeShortAnswer(answer, question.keywords)
    } else if (question.type === 'true_false') {
      isCorrect = answer.toLowerCase() === question.correctAnswer.toLowerCase()
    } else {
      isCorrect = answer === question.correctAnswer
    }
    setSelected(answer)
    setCorrect(isCorrect)
    setSubmitted(true)
  }

  function getChoiceState(choice) {
    if (!submitted) return 'default'
    if (choice === question.correctAnswer) return 'correct'
    if (choice === selected) return 'wrong'
    return 'default'
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
          Question {questionNum} of {totalQuestions}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-6 rounded-full ${i < questionNum - 1 ? 'bg-sky' : i === questionNum - 1 ? 'bg-navy' : 'bg-gray-200'}`}
            />
          ))}
        </div>
      </div>

      <p className="text-base sm:text-lg font-semibold text-gray-900 mb-5 leading-snug">
        {question.prompt}
      </p>

      {question.type === 'multiple_choice' && (
        <div className="space-y-2">
          {question.choices.map(choice => (
            <ChoiceButton
              key={choice}
              label={choice}
              state={submitted ? getChoiceState(choice) : 'default'}
              onClick={() => !submitted && handleSubmit(choice)}
            />
          ))}
        </div>
      )}

      {question.type === 'true_false' && (
        <div className="grid grid-cols-2 gap-3">
          {['True', 'False'].map(opt => (
            <ChoiceButton
              key={opt}
              label={opt}
              state={submitted ? getChoiceState(opt.toLowerCase()) : 'default'}
              onClick={() => !submitted && handleSubmit(opt.toLowerCase())}
            />
          ))}
        </div>
      )}

      {question.type === 'short_answer' && (
        <div className="space-y-3">
          <input
            type="text"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !submitted && inputVal.trim() && handleSubmit(inputVal.trim())}
            disabled={submitted}
            placeholder="Type your answer..."
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-sky disabled:bg-gray-50"
            aria-label="Your answer"
          />
          {!submitted && (
            <button
              onClick={() => inputVal.trim() && handleSubmit(inputVal.trim())}
              disabled={!inputVal.trim()}
              className="w-full py-3 bg-navy text-white rounded-xl text-sm font-semibold hover:bg-navy-dark transition-colors disabled:opacity-40 min-h-[48px]"
            >
              Submit Answer
            </button>
          )}
        </div>
      )}

      {submitted && (
        <div
          ref={feedbackRef}
          tabIndex={-1}
          className={`mt-5 p-4 rounded-xl border-l-4 ${correct ? 'bg-emerald-50 border-emerald-500' : 'bg-red-50 border-red-500'}`}
          role="alert"
          aria-live="polite"
        >
          <p className={`font-semibold text-sm mb-1 ${correct ? 'text-emerald-700' : 'text-red-700'}`}>
            {correct ? '✓ Correct!' : '✗ Not quite'}
          </p>
          {!correct && (
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-medium">Answer: </span>{question.correctAnswer}
            </p>
          )}
          <p className="text-sm text-gray-700">{question.explanation}</p>

          <button
            onClick={() => onAnswer(correct)}
            className="mt-4 w-full py-3 bg-navy text-white rounded-xl text-sm font-semibold hover:bg-navy-dark transition-colors min-h-[48px]"
          >
            {questionNum < totalQuestions ? 'Next Question →' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  )
}
