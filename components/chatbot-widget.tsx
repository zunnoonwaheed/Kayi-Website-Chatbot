"use client"

import { useEffect } from "react"

interface ChatbotWidgetProps {
  botId: string
  className?: string
}

export default function ChatbotWidget({ botId, className = "" }: ChatbotWidgetProps) {
  useEffect(() => {
    // Load Landbot script
    const script = document.createElement("script")
    script.src = "https://static.landbot.io/landbot-3/landbot-3.0.0.js"
    script.async = true

    script.onload = () => {
      // Initialize Landbot
      if (typeof window !== "undefined" && (window as any).Landbot) {
        ;new (window as any).Landbot.Livechat({
          configUrl: `https://storage.googleapis.com/landbot.online/v3/${botId}/index.json`,
        })
      }
    }

    document.head.appendChild(script)

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [botId])

  return <div className={`chatbot-widget ${className}`}>{/* Landbot will inject the chat widget here */}</div>
}
