import { useState, useEffect, useRef } from 'react'

const STORAGE_KEY = 'layla-speech-voice'

function loadVoices() {
  return window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'))
}

export function friendlyVoiceName(voice) {
  let name = voice.name
  name = name.replace(/^Microsoft\s+/, '')
  name = name.replace(/\s+Desktop$/, '')
  name = name.replace(/\s+-\s+.*$/, '')
  return name
}

export default function useSpeech() {
  const [status, setStatus] = useState('idle')
  const [voices, setVoices] = useState([])
  const [selectedVoiceName, setSelectedVoiceName] = useState(
    () => localStorage.getItem(STORAGE_KEY) ?? ''
  )
  const utteranceRef = useRef(null)

  useEffect(() => {
    function onVoicesChanged() {
      const available = loadVoices()
      setVoices(available)
      setSelectedVoiceName(prev => {
        if (prev && available.find(v => v.name === prev)) return prev
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved && available.find(v => v.name === saved)) return saved
        return available[0]?.name ?? ''
      })
    }
    // Voices may already be loaded (Firefox loads synchronously)
    const initial = loadVoices()
    if (initial.length > 0) {
      setVoices(initial)
      setSelectedVoiceName(prev => {
        if (prev && initial.find(v => v.name === prev)) return prev
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved && initial.find(v => v.name === saved)) return saved
        return initial[0]?.name ?? ''
      })
    }
    window.speechSynthesis.addEventListener('voiceschanged', onVoicesChanged)
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged)
      window.speechSynthesis.cancel()
    }
  }, [])

  function selectVoice(name) {
    setSelectedVoiceName(name)
    localStorage.setItem(STORAGE_KEY, name)
    if (status !== 'idle') {
      window.speechSynthesis.cancel()
      setStatus('idle')
    }
  }

  function speak(text) {
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.9
    const voice = voices.find(v => v.name === selectedVoiceName)
    if (voice) utterance.voice = voice
    utterance.onend = () => setStatus('idle')
    utterance.onerror = () => setStatus('idle')
    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
    setStatus('playing')
  }

  function pause() {
    window.speechSynthesis.pause()
    setStatus('paused')
  }

  function resume() {
    window.speechSynthesis.resume()
    setStatus('playing')
  }

  function stop() {
    window.speechSynthesis.cancel()
    setStatus('idle')
  }

  return { speak, pause, resume, stop, status, voices, selectedVoiceName, selectVoice }
}
