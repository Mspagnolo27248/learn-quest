import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopicSelectionPage from './pages/TopicSelectionPage'
import TopicSummaryPage from './pages/TopicSummaryPage'
import QuizPage from './pages/QuizPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopicSelectionPage />} />
        <Route path="/topic/:id" element={<TopicSummaryPage />} />
        <Route path="/topic/:id/quiz/:aspectIndex" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  )
}
