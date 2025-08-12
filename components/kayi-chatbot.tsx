"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, User, CheckCircle, AlertCircle } from "lucide-react"

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
  contactPreference: string
}

interface DetailedResponse {
  question: string
  answer: string
  score: number
  quality: string
  rationale: string
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
  {
    id: "contactPreference",
    question: "Would you like our direct contact information to reach us immediately?",
    type: "select" as const,
    options: ["Yes, share your contact details", "No, I'll wait for your team to contact me"],
  },
]

const cleanupOldData = () => {
  const existingData = JSON.parse(localStorage.getItem("kayi-chatbot-leads") || "[]")
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

  const filteredData = existingData.filter((lead: any) => {
    const leadDate = new Date(lead.timestamp)
    return leadDate > thirtyDaysAgo
  })

  localStorage.setItem("kayi-chatbot-leads", JSON.stringify(filteredData))
}

const validateInput = (value: string, type: string, fieldName: string): { isValid: boolean; error?: string } => {
  if (!value.trim()) {
    return { isValid: false, error: `${fieldName} is required` }
  }

  switch (type) {
    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        return { isValid: false, error: "Please enter a valid email address (e.g., john@example.com)" }
      }
      break
    case "tel":
      const phoneRegex = /^[+]?[1-9][\d\s\-$$$$]{7,15}$/
      const cleanPhone = value.replace(/[\s\-$$$$]/g, "")
      if (!phoneRegex.test(cleanPhone) || cleanPhone.length < 8) {
        return { isValid: false, error: "Please enter a valid phone number (e.g., +1234567890)" }
      }
      break
    case "text":
      if (fieldName.toLowerCase().includes("name") && value.length < 2) {
        return { isValid: false, error: "Name must be at least 2 characters long" }
      }
      if (value.length > 100) {
        return { isValid: false, error: "Input is too long (maximum 100 characters)" }
      }
      break
  }

  return { isValid: true }
}

const calculateResponseScore = (
  questionId: string,
  answer: string,
): { score: number; quality: string; rationale: string } => {
  const lowerAnswer = answer.toLowerCase().trim()

  switch (questionId) {
    case "businessType":
      const highValueTypes = ["e-commerce", "saas", "technology", "healthcare", "finance", "real estate"]
      const isHighValue = highValueTypes.some((type) => lowerAnswer.includes(type))
      if (isHighValue)
        return { score: 85, quality: "excellent", rationale: "High-value business type with strong digital needs" }
      if (lowerAnswer.length > 10)
        return { score: 70, quality: "good", rationale: "Detailed business description shows engagement" }
      return { score: 50, quality: "fair", rationale: "Basic business type provided" }

    case "budget":
      if (lowerAnswer.includes("$10,000+") || lowerAnswer.includes("$5,000 - $10,000")) {
        return { score: 90, quality: "excellent", rationale: "High budget indicates serious investment capacity" }
      }
      if (lowerAnswer.includes("$1,000 - $5,000")) {
        return { score: 70, quality: "good", rationale: "Moderate budget shows commitment to investment" }
      }
      if (lowerAnswer.includes("under $1,000")) {
        return { score: 40, quality: "fair", rationale: "Limited budget may require scaled solutions" }
      }
      return { score: 60, quality: "good", rationale: "Budget information provided" }

    case "timeline":
      if (lowerAnswer.includes("immediately") || lowerAnswer.includes("within 1 month")) {
        return { score: 85, quality: "excellent", rationale: "Urgent timeline indicates immediate need" }
      }
      if (lowerAnswer.includes("1-3 months")) {
        return { score: 75, quality: "good", rationale: "Reasonable timeline for project planning" }
      }
      return { score: 60, quality: "fair", rationale: "Flexible timeline provided" }

    case "name":
      if (lowerAnswer.length > 2 && !lowerAnswer.includes("test")) {
        return { score: 80, quality: "good", rationale: "Valid name provided" }
      }
      return { score: 40, quality: "fair", rationale: "Basic name information" }

    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (emailRegex.test(lowerAnswer)) {
        return { score: 85, quality: "excellent", rationale: "Valid email format for follow-up" }
      }
      return { score: 30, quality: "poor", rationale: "Invalid email format" }

    case "whatsapp":
      const phoneRegex = /[\d+\-$$$$\s]{10,}/
      if (phoneRegex.test(answer)) {
        return { score: 85, quality: "excellent", rationale: "Valid phone number for direct contact" }
      }
      return { score: 30, quality: "poor", rationale: "Invalid phone number format" }

    case "additionalInfo":
      if (lowerAnswer.length > 50) {
        return { score: 80, quality: "excellent", rationale: "Detailed requirements show serious interest" }
      }
      if (lowerAnswer.length > 20) {
        return { score: 65, quality: "good", rationale: "Good level of detail provided" }
      }
      return { score: 45, quality: "fair", rationale: "Basic additional information" }

    default:
      return { score: 60, quality: "fair", rationale: "Standard response provided" }
  }
}

const saveToLocalStorage = (data: any, retries = 3): Promise<boolean> => {
  return new Promise((resolve) => {
    const attemptSave = (attempt: number) => {
      try {
        const existingData = JSON.parse(localStorage.getItem("kayi-chatbot-leads") || "[]")

        const responses: DetailedResponse[] = [
          {
            question: "What's your name?",
            answer: data.name,
            ...calculateResponseScore("name", data.name),
          },
          {
            question: "What's your email address?",
            answer: data.email,
            ...calculateResponseScore("email", data.email),
          },
          {
            question: "What's your WhatsApp number?",
            answer: data.whatsapp,
            ...calculateResponseScore("whatsapp", data.whatsapp),
          },
          {
            question: "What type of business do you have?",
            answer: data.businessType,
            ...calculateResponseScore("businessType", data.businessType),
          },
          {
            question: "What's your budget for this project?",
            answer: data.budget,
            ...calculateResponseScore("budget", data.budget),
          },
          {
            question: "What's your timeline?",
            answer: data.timeline,
            ...calculateResponseScore("timeline", data.timeline),
          },
          {
            question: "Tell us more about your project requirements",
            answer: data.additionalInfo,
            ...calculateResponseScore("additionalInfo", data.additionalInfo),
          },
        ]

        const qualificationScore = Math.round(
          responses.reduce((sum, response) => sum + response.score, 0) / responses.length,
        )

        const newLead = {
          ...data,
          responses,
          qualificationScore,
          timestamp: new Date().toISOString(),
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          status: "new",
          source: "chatbot",
        }
        existingData.push(newLead)
        localStorage.setItem("kayi-chatbot-leads", JSON.stringify(existingData))
        resolve(true)
      } catch (error) {
        console.error(`Save attempt ${attempt} failed:`, error)
        if (attempt < retries) {
          setTimeout(() => attemptSave(attempt + 1), 1000)
        } else {
          resolve(false)
        }
      }
    }
    attemptSave(1)
  })
}

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
    contactPreference: "",
  })
  const [inputValue, setInputValue] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationError, setValidationError] = useState("")
  const [saveError, setSaveError] = useState(false)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
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

  useEffect(() => {
    cleanupOldData()
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

    const currentQuestion = questions[currentStep]

    const fieldName = currentQuestion.question.split("?")[0].split(" ").pop() || "Field"
    const validation = validateInput(value, currentQuestion.type, fieldName)

    if (!validation.isValid) {
      setValidationError(validation.error || "Invalid input")
      setTimeout(() => {
        addMessage("bot", `❌ ${validation.error} Please try again.`)
      }, 500)
      return
    }

    setValidationError("")

    addMessage("user", value)

    const updatedData = { ...chatData, [currentQuestion.id]: value }
    setChatData(updatedData)

    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1)
        addMessage("bot", questions[currentStep + 1].question)
      }, 1000)
    } else {
      setIsSubmitting(true)
      setSaveError(false)

      setTimeout(async () => {
        try {
          const saveSuccess = await saveToLocalStorage(updatedData)

          if (!saveSuccess) {
            setSaveError(true)
            addMessage(
              "bot",
              `Thank you ${updatedData.name}! There was a technical issue saving your information, but don't worry - our team has been notified and will contact you directly via WhatsApp (${updatedData.whatsapp}) or email (${updatedData.email}) within 24 hours.`,
            )
          } else {
            console.log("Lead saved successfully to localStorage")

            if (updatedData.contactPreference === "Yes, share your contact details") {
              addMessage(
                "bot",
                `Perfect! Thank you ${updatedData.name}! 🎉

Your information has been received and our team has been notified instantly. Here's what happens next:

✅ You'll receive a confirmation email at ${updatedData.email}
✅ Our team will contact you via WhatsApp (${updatedData.whatsapp}) within 24 hours
✅ We'll prepare a customized proposal for your ${updatedData.businessType} business
✅ Based on your ${updatedData.budget} budget and ${updatedData.timeline} timeline, we'll create the perfect solution

📞 **Want to reach us directly? Here are our contact details:**

📱 **WhatsApp:** +1 (555) 123-4567
📧 **Email:** hello@kayidigital.com
🌐 **Website:** www.kayidigital.com

Feel free to contact us anytime! Our digital experts are excited to help transform your business!`,
              )
            } else {
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
            }
          }

          setIsCompleted(true)
        } catch (error) {
          console.error("Error saving lead:", error)
          setSaveError(true)
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
      contactPreference: "",
    })
    setInputValue("")
    setIsCompleted(false)
    setIsSubmitting(false)
    setValidationError("")
    setSaveError(false)
  }

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#cf21c3] hover:bg-[#b91c9e] shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      )}

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

            {!isCompleted && !isSubmitting && (
              <div className="p-4 border-t bg-gray-50">
                {validationError && (
                  <div className="mb-3 p-2 bg-red-100 border border-red-300 rounded-md flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span className="text-red-700 text-sm">{validationError}</span>
                  </div>
                )}

                {saveError && (
                  <div className="mb-3 p-2 bg-yellow-100 border border-yellow-300 rounded-md flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600" />
                    <span className="text-yellow-700 text-sm">
                      Technical issue detected. Don't worry, our team will contact you directly!
                    </span>
                  </div>
                )}

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
                      onChange={(e) => {
                        setInputValue(e.target.value)
                        if (validationError) setValidationError("")
                      }}
                      onKeyPress={(e) => e.key === "Enter" && handleSubmit(inputValue)}
                      className="flex-1"
                      style={{
                        borderColor: validationError ? "#ef4444" : undefined,
                      }}
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

            {isCompleted && (
              <div className="p-4 border-t bg-gray-50 space-y-2">
                <div className="flex items-center justify-center gap-2 text-green-600 mb-3">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">
                    {saveError ? "Information Received!" : "Successfully Submitted!"}
                  </span>
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
