import { useState, useEffect, useRef } from 'react'

const STORAGE_KEY = 'layla-speech-voice'

export const VOICE_OPTIONS = [
  { key: 'mark', label: 'Mark', fullName: 'Microsoft Mark - English (United States)' },
  { key: 'zira', label: 'Zira', fullName: 'Microsoft Zira - English (United States)' },
]

const DEFAULT_VOICE_KEY = 'mark'

export default function useSpeech() {
  const [status, setStatus] = useState('idle')
  const [selectedKey, setSelectedKey] = useState(
    () => localStorage.getItem(STORAGE_KEY) ?? DEFAULT_VOICE_KEY
  )
  const [voiceMap, setVoiceMap] = useState({})
  const utteranceRef = useRef(null)

  useEffect(() => {
    function buildVoiceMap() {
      const all = window.speechSynthesis.getVoices()
      const map = {}
      for (const opt of VOICE_OPTIONS) {
        const found = all.find(v => v.name === opt.fullName)
        if (found) map[opt.key] = found
      }
      setVoiceMap(map)
    }
    buildVoiceMap()
    window.speechSynthesis.addEventListener('voiceschanged', buildVoiceMap)
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', buildVoiceMap)
      window.speechSynthesis.cancel()
    }
  }, [])

  function selectVoice(key) {
    setSelectedKey(key)
    localStorage.setItem(STORAGE_KEY, key)
    if (status !== 'idle') {
      window.speechSynthesis.cancel()
      setStatus('idle')
    }
  }

  function speak(text) {
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.9
    const voice = voiceMap[selectedKey]
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

  return { speak, pause, resume, stop, status, selectedKey, selectVoice }
}
