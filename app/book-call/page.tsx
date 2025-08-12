"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Send, Bot, User, CheckCircle, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface ChatMessage {
  id: string
  type: "bot" | "user"
  message: string
  timestamp: Date
}

interface QualificationData {
  name: string
  email: string
  whatsapp: string
  businessType: string
  budget: string
  timeline: string
  currentWebsite: string
  mainGoal: string
  qualified: boolean
}

const qualificationQuestions = [
  {
    id: "name",
    question:
      "Hi! I'm Kayi, your digital assistant. Before we schedule your call, I'd like to learn more about your project. What's your name?",
    type: "text" as const,
    placeholder: "Enter your name",
    required: true,
  },
  {
    id: "email",
    question: "What's your email address?",
    type: "email" as const,
    placeholder: "Enter your email",
    required: true,
  },
  {
    id: "whatsapp",
    question: "And your WhatsApp number for quick communication?",
    type: "tel" as const,
    placeholder: "Enter your WhatsApp number",
    required: true,
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
      "Manufacturing",
      "Other",
    ],
    required: true,
  },
  {
    id: "budget",
    question: "What's your budget range for digital services?",
    type: "select" as const,
    options: ["Under $1,000", "$1,000 - $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000+"],
    required: true,
  },
  {
    id: "timeline",
    question: "When would you like to get started?",
    type: "select" as const,
    options: ["Immediately", "Within 1 month", "Within 3 months", "Just exploring options"],
    required: true,
  },
  {
    id: "currentWebsite",
    question: "Do you currently have a website or digital presence?",
    type: "select" as const,
    options: [
      "Yes, but needs improvement",
      "Yes, and it's working well",
      "No, starting from scratch",
      "Have social media only",
    ],
    required: true,
  },
  {
    id: "mainGoal",
    question: "What's your main goal for this project?",
    type: "select" as const,
    options: [
      "Increase online sales",
      "Generate more leads",
      "Build brand awareness",
      "Improve customer experience",
      "Launch new business",
      "Other",
    ],
    required: true,
  },
]

// Qualification logic
const isQualified = (data: QualificationData): boolean => {
  const budgetScore = getBudgetScore(data.budget)
  const timelineScore = getTimelineScore(data.timeline)
  const businessScore = getBusinessScore(data.businessType)

  // Must have minimum budget and reasonable timeline
  return budgetScore >= 2 && timelineScore >= 2 && businessScore >= 1
}

const getBudgetScore = (budget: string): number => {
  switch (budget) {
    case "Under $1,000":
      return 1
    case "$1,000 - $5,000":
      return 2
    case "$5,000 - $15,000":
      return 3
    case "$15,000 - $50,000":
      return 4
    case "$50,000+":
      return 5
    default:
      return 0
  }
}

const getTimelineScore = (timeline: string): number => {
  switch (timeline) {
    case "Immediately":
      return 4
    case "Within 1 month":
      return 3
    case "Within 3 months":
      return 2
    case "Just exploring options":
      return 1
    default:
      return 0
  }
}

const getBusinessScore = (businessType: string): number => {
  // All business types are valid, but some may be higher priority
  const highPriority = ["E-commerce Store", "Service Business", "Technology/Software"]
  return highPriority.includes(businessType) ? 2 : 1
}

const validateInput = (value: string, type: string): { isValid: boolean; error?: string } => {
  if (!value.trim()) {
    return { isValid: false, error: "This field is required" }
  }

  switch (type) {
    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        return { isValid: false, error: "Please enter a valid email address" }
      }
      break
    case "tel":
      const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
      if (!phoneRegex.test(value.replace(/\s/g, ""))) {
        return { isValid: false, error: "Please enter a valid phone number" }
      }
      break
    case "text":
      if (value.length < 2) {
        return { isValid: false, error: "Name must be at least 2 characters" }
      }
      break
  }

  return { isValid: true }
}

export default function BookCallPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [qualificationData, setQualificationData] = useState<QualificationData>({
    name: "",
    email: "",
    whatsapp: "",
    businessType: "",
    budget: "",
    timeline: "",
    currentWebsite: "",
    mainGoal: "",
    qualified: false,
  })
  const [inputValue, setInputValue] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationError, setValidationError] = useState("")

  useEffect(() => {
    // Add initial bot message
    setMessages([
      {
        id: "1",
        type: "bot",
        message: qualificationQuestions[0].question,
        timestamp: new Date(),
      },
    ])
  }, [])

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

    const currentQuestion = qualificationQuestions[currentStep]

    // Validate input
    const validation = validateInput(value, currentQuestion.type)
    if (!validation.isValid) {
      setValidationError(validation.error || "Invalid input")
      return
    }

    setValidationError("")

    // Add user message
    addMessage("user", value)

    // Update qualification data
    const updatedData = { ...qualificationData, [currentQuestion.id]: value }
    setQualificationData(updatedData)

    // Move to next step
    if (currentStep < qualificationQuestions.length - 1) {
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1)
        addMessage("bot", qualificationQuestions[currentStep + 1].question)
      }, 1000)
    } else {
      // Qualification completed
      setIsSubmitting(true)

      setTimeout(async () => {
        try {
          // Check if qualified
          const qualified = isQualified(updatedData)
          const finalData = { ...updatedData, qualified }

          // Save to localStorage
          const existingData = JSON.parse(localStorage.getItem("kayi-chatbot-leads") || "[]")
          const newLead = {
            ...finalData,
            timestamp: new Date().toISOString(),
            id: Date.now().toString(),
            status: qualified ? "qualified" : "unqualified",
            source: "book-call-qualification",
          }
          existingData.push(newLead)
          localStorage.setItem("kayi-chatbot-leads", JSON.stringify(existingData))

          // Show appropriate message
          if (qualified) {
            addMessage(
              "bot",
              `Excellent! Thank you ${finalData.name}! 

Based on your responses, you're a perfect fit for our services. Your ${finalData.businessType} business with a ${finalData.budget} budget aligns perfectly with our expertise.

🎉 **You're qualified for a strategy call!**

Click the button below to schedule your free consultation with our digital experts. We'll discuss:

✅ Custom strategy for your ${finalData.mainGoal.toLowerCase()}
✅ Detailed project roadmap and timeline
✅ Transparent pricing and next steps
✅ How we can help achieve your business goals

Our team is excited to help transform your business!`,
            )
          } else {
            addMessage(
              "bot",
              `Thank you ${finalData.name} for your interest in our services!

Based on your current requirements, we'd like to better understand your project before scheduling a call. Our team will review your information and get back to you within 24 hours with:

📋 A detailed assessment of your needs
💡 Customized recommendations for your ${finalData.businessType} business  
📞 The best next steps for your project

We'll contact you via WhatsApp (${finalData.whatsapp}) or email (${finalData.email}) soon!

Thank you for considering Kayi Digital for your business growth!`,
            )
          }

          setQualificationData(finalData)
          setIsCompleted(true)
        } catch (error) {
          console.error("Error saving qualification data:", error)
          addMessage(
            "bot",
            `Thank you ${updatedData.name}! Your information has been saved. Our team will contact you soon to discuss your project.`,
          )
          setIsCompleted(true)
        } finally {
          setIsSubmitting(false)
        }
      }, 1500)
    }

    setInputValue("")
  }

  const handleOptionSelect = (option: string) => {
    handleSubmit(option)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Book Your Strategy Call</h1>
          <p className="text-gray-600">Let's discuss how we can help grow your business</p>
        </div>

        {/* Chat Interface */}
        <Card className="w-full max-w-2xl mx-auto shadow-xl border-0 bg-white">
          <CardHeader className="bg-gradient-to-r from-[#cf21c3] to-[#b91c9e] text-white p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <CardTitle className="text-xl font-semibold">Kayi Qualification Assistant</CardTitle>
                <p className="text-sm text-white/80">Let's see if we're a perfect match for your project</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0 h-[500px] flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-start gap-3 max-w-[85%] ${message.type === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === "bot" ? "bg-[#cf21c3] text-white" : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {message.type === "bot" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>
                    <div
                      className={`p-4 rounded-lg ${
                        message.type === "bot" ? "bg-gray-100 text-gray-800" : "bg-[#cf21c3] text-white"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line leading-relaxed">{message.message}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Loading indicator */}
              {isSubmitting && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[#cf21c3] text-white">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="p-4 rounded-lg bg-gray-100 text-gray-800">
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#cf21c3]"></div>
                        <p className="text-sm">Analyzing your qualification...</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            {!isCompleted && !isSubmitting && (
              <div className="p-6 border-t bg-gray-50">
                {validationError && (
                  <div className="mb-3 p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm">
                    {validationError}
                  </div>
                )}

                {qualificationQuestions[currentStep]?.type === "select" ? (
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 mb-3">Please select an option:</p>
                    {qualificationQuestions[currentStep].options?.map((option) => (
                      <Button
                        key={option}
                        variant="outline"
                        className="w-full justify-start text-left h-auto p-4 hover:bg-[#cf21c3] hover:text-white transition-colors bg-white border-gray-200"
                        onClick={() => handleOptionSelect(option)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <Input
                      type={qualificationQuestions[currentStep]?.type || "text"}
                      placeholder={qualificationQuestions[currentStep]?.placeholder}
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
              <div className="p-6 border-t bg-gray-50 space-y-3">
                {qualificationData.qualified ? (
                  <>
                    <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
                      <CheckCircle className="w-6 h-6" />
                      <span className="font-semibold text-lg">Qualified for Strategy Call!</span>
                    </div>
                    <Link
                      href="https://calendly.com/saadalii/kayidigital"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-[#cf21c3] hover:bg-[#b91c9e] h-12 text-lg font-semibold">
                        <Calendar className="w-5 h-5 mr-2" />
                        Schedule Your Free Strategy Call
                      </Button>
                    </Link>
                    <Link href="/">
                      <Button variant="outline" className="w-full bg-transparent">
                        Back to Home
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center gap-2 text-blue-600 mb-4">
                      <MessageCircle className="w-6 h-6" />
                      <span className="font-semibold text-lg">We'll Be In Touch!</span>
                    </div>
                    <Link href="/">
                      <Button className="w-full bg-[#cf21c3] hover:bg-[#b91c9e]">Back to Home</Button>
                    </Link>
                  </>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
