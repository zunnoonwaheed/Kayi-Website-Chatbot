"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  words: string[]
  speed?: number // Speed in milliseconds per character
  delay?: number // Delay before starting typing
  loop?: boolean
}

export function TypewriterEffect({ words, speed = 100, delay = 1000, loop = true }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    const handleTyping = () => {
      const fullText = words[currentWordIndex]

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        if (currentText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        if (currentText === fullText) {
          if (loop) {
            timer = setTimeout(() => setIsDeleting(true), delay)
          }
        }
      }
    }

    timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay, loop])

  return <>{currentText}</>
}
