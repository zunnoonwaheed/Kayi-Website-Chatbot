"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, User, CheckCircle } from "lucide-react"

interface ChatMessage {
  id: string
  type: "bot" | "user"
  message: string
  timestamp: Date
}

interface ChatData {
  name: string
  email: string
  whatsapp: string
  businessType: string
  budget: string
  timeline: string
  additionalInfo: string
}

const questions = [
  {
    id: "name",
    question: "Hi! I'm Kayi, your digital assistant. What's your name?",
    type: "text" as const,
    placeholder: "Enter your name",
  },
  {
    id: "businessType",
    question: "What type of business do you have or are you planning to start?",
    type: "select" as const,
    options: [
      "E-commerce Store",
      "Service Business",
      "Restaurant/Food",
      "Healthcare",
      "Education",
      "Real Estate",
      "Technology/Software",
      "Other",
    ],
  },
  {
    id: "budget",
    question: "What's your budget range for digital services?",
    type: "select" as const,
    options: ["$1,000 - $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000+"],
  },
  {
    id: "timeline",
    question: "When would you like to get started?",
    type: "select" as const,
    options: ["Immediately", "Within 1 month", "Within 3 months", "Just exploring options"],
  },
  {
    id: "email",
    question: "What's your email address so we can send you a detailed proposal?",
    type: "email" as const,
    placeholder: "Enter your email",
  },
  {
    id: "whatsapp",
    question: "And your WhatsApp number for quick communication?",
    type: "tel" as const,
    placeholder: "Enter your WhatsApp number",
  },
]

export default function KayiChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [chatData, setChatData] = useState<ChatData>({
    name: "",
    email: "",
    whatsapp: "",
    businessType: "",
    budget: "",
    timeline: "",
    additionalInfo: "",
  })
  const [inputValue, setInputValue] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add initial bot message
      setMessages([
        {
          id: "1",
          type: "bot",
          message: questions[0].question,
          timestamp: new Date(),
        },
      ])
    }
  }, [isOpen])

  const addMessage = (type: "bot" | "user", message: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type,
      message,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const handleSubmit = async (value: string) => {
    if (!value.trim() || isSubmitting) return

    const currentQuestion = questions[currentStep]

    // Add user message
    addMessage("user", value)

    // Update chat data
    const updatedData = { ...chatData, [currentQuestion.id]: value }
    setChatData(updatedData)

    // Move to next step
    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1)
        addMessage("bot", questions[currentStep + 1].question)
      }, 1000)
    } else {
      // Chat completed
      setIsSubmitting(true)

      setTimeout(async () => {
        try {
          const response = await fetch("/api/chatbot/leads", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
          })

          if (!response.ok) {
            throw new Error("Failed to save lead")
          }

          const result = await response.json()
          console.log("Lead saved successfully:", result.leadId)

          // Enhanced completion message with next steps
          addMessage(
            "bot",
            `Perfect! Thank you ${updatedData.name}! 🎉

Your information has been received and our team has been notified instantly. Here's what happens next:

✅ You'll receive a confirmation email at ${updatedData.email}
✅ Our team will contact you via WhatsApp (${updatedData.whatsapp}) within 24 hours
✅ We'll prepare a customized proposal for your ${updatedData.businessType} business
✅ Based on your ${updatedData.budget} budget and ${updatedData.timeline} timeline, we'll create the perfect solution

Our digital experts are excited to help transform your business! Keep an eye on your WhatsApp for our message.`,
          )

          setIsCompleted(true)
        } catch (error) {
          console.error("Error saving lead:", error)

          // Fallback to localStorage if API fails
          const existingData = JSON.parse(localStorage.getItem("kayi-chatbot-leads") || "[]")
          existingData.push({
            ...updatedData,
            timestamp: new Date().toISOString(),
            id: Date.now().toString(),
          })
          localStorage.setItem("kayi-chatbot-leads", JSON.stringify(existingData))

          addMessage(
            "bot",
            `Thank you ${updatedData.name}! Your information has been saved. Our team will contact you soon via WhatsApp (${updatedData.whatsapp}) or email (${updatedData.email}).`,
          )
          setIsCompleted(true)
        } finally {
          setIsSubmitting(false)
        }
      }, 1000)
    }

    setInputValue("")
  }

  const handleOptionSelect = (option: string) => {
    handleSubmit(option)
  }

  const resetChat = () => {
    setCurrentStep(0)
    setMessages([
      {
        id: "1",
        type: "bot",
        message: questions[0].question,
        timestamp: new Date(),
      },
    ])
    setChatData({
      name: "",
      email: "",
      whatsapp: "",
      businessType: "",
      budget: "",
      timeline: "",
      additionalInfo: "",
    })
    setInputValue("")
    setIsCompleted(false)
    setIsSubmitting(false)
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#cf21c3] hover:bg-[#b91c9e] shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-[#cf21c3] to-[#b91c9e] text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold">Kayi Assistant</CardTitle>
                  <p className="text-xs text-white/80">Digital Solutions Expert</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0 h-[400px] flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-start gap-2 max-w-[80%] ${message.type === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === "bot" ? "bg-[#cf21c3] text-white" : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {message.type === "bot" ? <Bot className="w-3 h-3" /> : <User className="w-3 h-3" />}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        message.type === "bot" ? "bg-gray-100 text-gray-800" : "bg-[#cf21c3] text-white"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.message}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Loading indicator when submitting */}
              {isSubmitting && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2 max-w-[80%]">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-[#cf21c3] text-white">
                      <Bot className="w-3 h-3" />
                    </div>
                    <div className="p-3 rounded-lg bg-gray-100 text-gray-800">
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#cf21c3]"></div>
                        <p className="text-sm">Processing your information...</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            {!isCompleted && !isSubmitting && (
              <div className="p-4 border-t bg-gray-50">
                {questions[currentStep]?.type === "select" ? (
                  <div className="space-y-2">
                    {questions[currentStep].options?.map((option) => (
                      <Button
                        key={option}
                        variant="outline"
                        className="w-full justify-start text-left h-auto p-3 hover:bg-[#cf21c3] hover:text-white transition-colors bg-transparent"
                        onClick={() => handleOptionSelect(option)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Input
                      type={questions[currentStep]?.type || "text"}
                      placeholder={questions[currentStep]?.placeholder}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSubmit(inputValue)}
                      className="flex-1"
                    />
                    <Button
                      onClick={() => handleSubmit(inputValue)}
                      className="bg-[#cf21c3] hover:bg-[#b91c9e]"
                      disabled={!inputValue.trim()}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            )}

            {/* Completion Actions */}
            {isCompleted && (
              <div className="p-4 border-t bg-gray-50 space-y-2">
                <div className="flex items-center justify-center gap-2 text-green-600 mb-3">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Successfully Submitted!</span>
                </div>
                <Button onClick={resetChat} variant="outline" className="w-full bg-transparent">
                  Start New Conversation
                </Button>
                <Button onClick={() => setIsOpen(false)} className="w-full bg-[#cf21c3] hover:bg-[#b91c9e]">
                  Close Chat
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </>
  )
}
