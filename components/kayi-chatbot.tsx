"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  MessageCircle,
  RotateCcw,
  Loader2,
  Clock,
  Calendar,
  Phone,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Send,
  AlertCircle,
} from "lucide-react"

interface ChatMessage {
  id: string
  type: "bot" | "user"
  message: string
  timestamp: Date
}

interface ChatData {
  name: string
  whatsapp: string
  email: string
  service: string
  challenge: string
  timeline: string
  budget: string
  timeSlot?: string
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
    question: "Awesome! Let's start simple - what should I call you?",
    type: "text" as const,
    placeholder: "Enter your name",
  },
  {
    id: "whatsapp",
    question:
      "Nice to meet you, [NAME]! What's your WhatsApp number?\n(Even if you don't have WhatsApp active on this number, it would work fine!)",
    type: "tel" as const,
    placeholder: "Enter your WhatsApp number with country code",
  },
  {
    id: "email",
    question: "Perfect! And your email address?",
    type: "email" as const,
    placeholder: "Enter your email address",
  },
  {
    id: "service",
    question:
      "We offer complete digital solutions for businesses.\n\nWhich service area are you most interested in right now?",
    type: "select" as const,
    options: [
      "Social Media Management",
      "Performance Marketing",
      "Business Automation",
      "Software Development",
      "Digital Marketing & Ads",
      "SEO & Content Marketing",
      "Complete Digital Package",
      "Not sure - can someone help me with this?",
    ],
  },
  {
    id: "challenge",
    question:
      "What's the biggest challenge or problem you're trying to solve right now? I want to make sure we tackle what's really holding your business back.\n\nJust describe it in 2-3 lines - the more specific, the better I can help!",
    type: "textarea" as const,
    placeholder: "Describe your biggest challenge in 2-3 lines...",
  },
  {
    id: "timeline",
    question: "Got it! And what's your ideal timeline for this project?",
    type: "select" as const,
    options: ["Less than 1 week", "1-2 weeks", "1-3 months", "3+ months", "Other/Flexible"],
  },
  {
    id: "budget",
    question:
      "One last thing - let's talk numbers! 💰\nWhat budget range are you working with?\n\n(Don't worry, I'm not here to judge your wallet - just want to make sure I recommend the perfect solution that fits!)",
    type: "select" as const,
    options: ["Under $1K", "$1K-$5K", "$5K-$10K", "$10K+", "I would prefer discussing this over a call!"],
  },
]

const calculateScore = (
  timeline: string,
  budget: string,
): { score: number; quality: string; rationale: string; budgetCategory: string; timelineTag: string } => {
  let timelineScore = 0
  let budgetScore = 0
  let rationale = ""
  let budgetCategory = ""
  let timelineTag = ""

  switch (timeline) {
    case "Less than 1 week":
      timelineScore = 90
      timelineTag = "urgent_red"
      rationale += "Urgent timeline shows immediate business need and decision-making authority. "
      break
    case "1-2 weeks":
      timelineScore = 85
      timelineTag = "urgent_red"
      rationale += "Short timeline indicates strong commitment and readiness to move forward. "
      break
    case "1-3 months":
      timelineScore = 70
      timelineTag = "comfortable_green"
      rationale += "Realistic timeline allows for proper planning and quality delivery. "
      break
    case "3+ months":
      timelineScore = 60
      timelineTag = "comfortable_green"
      rationale += "Extended timeline allows for thorough planning but shows lower urgency. "
      break
    case "Other/Flexible":
      timelineScore = 50
      timelineTag = "flexible_yellow"
      rationale += "Flexible timeline shows openness but needs clarification on urgency. "
      break
  }

  switch (budget) {
    case "Under $1K":
      budgetScore = 30
      budgetCategory = "below_avg"
      rationale += "Limited budget restricts service options to basic packages."
      break
    case "$1K-$5K":
      budgetScore = 60
      budgetCategory = "avg"
      rationale += "Moderate budget allows for essential digital services and growth strategies."
      break
    case "$5K-$10K":
      budgetScore = 85
      budgetCategory = "above_avg"
      rationale += "Strong budget range enables comprehensive solutions and measurable results."
      break
    case "$10K+":
      budgetScore = 95
      budgetCategory = "above_avg"
      rationale += "Excellent budget allows for premium services, advanced strategies, and maximum ROI."
      break
    case "I would prefer discussing this over a call!":
      budgetScore = 80
      budgetCategory = "N/A"
      rationale += "Willingness to discuss budget shows serious intent and potential for higher investment."
      break
  }

  const totalScore = Math.round((timelineScore + budgetScore) / 2)

  let quality = ""
  if (totalScore >= 85) quality = "above_avg"
  else if (totalScore >= 60) quality = "avg"
  else quality = "below_avg"

  return { score: totalScore, quality, rationale, budgetCategory, timelineTag }
}

const validateInput = (value: string, type: string, fieldName: string) => {
  const trimmedValue = value.trim()

  if (!trimmedValue) {
    return { isValid: false, error: `${fieldName} is required` }
  }

  switch (type) {
    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(trimmedValue)) {
        return { isValid: false, error: "Please enter a valid email address" }
      }
      break

    case "tel":
      const phoneRegex = /^[+]?[0-9\s\-()]{10,}$/
      if (!phoneRegex.test(trimmedValue.replace(/\s/g, ""))) {
        return {
          isValid: false,
          error: "Oops, looks like you didn't enter your country code correctly. Shall we try one more time?",
        }
      }
      break

    case "text":
      if (trimmedValue.length < 2) {
        return { isValid: false, error: "Please provide a valid name" }
      }
      break

    case "textarea":
      if (trimmedValue.length < 10) {
        return { isValid: false, error: "Please provide more details (at least 10 characters)" }
      }
      break
  }

  return { isValid: true, error: null }
}

const saveToLocalStorage = async (data: ChatData): Promise<boolean> => {
  try {
    const existingData = JSON.parse(localStorage.getItem("kayi-chatbot-leads") || "[]")

    const isDuplicate = existingData.some((lead: any) => {
      if (lead.email === data.email) {
        const timeDiff = Math.abs(new Date().getTime() - new Date(lead.timestamp).getTime())
        const isRecentDuplicate = timeDiff < 86400000 // 24 hours

        const isSameData =
          lead.service === data.service &&
          lead.challenge === data.challenge &&
          lead.timeline === data.timeline &&
          lead.budget === data.budget

        return isRecentDuplicate || isSameData
      }
      return false
    })

    if (isDuplicate) {
      console.log("Duplicate lead detected, skipping save")
      return true
    }

    const scoreData = calculateScore(data.timeline, data.budget)

    const responses: DetailedResponse[] = [
      {
        question: "What's your ideal timeline for this project?",
        answer: data.timeline,
        score: Math.round(scoreData.score * 0.5),
        quality: scoreData.quality,
        rationale: scoreData.rationale.split(".")[0] + ".",
      },
      {
        question: "What budget range are you working with?",
        answer: data.budget,
        score: Math.round(scoreData.score * 0.5),
        quality: scoreData.quality,
        rationale: scoreData.rationale.split(".")[1] + "." || "Budget evaluation shows investment readiness.",
      },
    ]

    let qualificationStatus = "QUALIFIED"
    let qualificationTag = "QUALIFIED"

    // Check if only basic credentials provided (name, email, whatsapp)
    if (!data.service || !data.challenge || !data.timeline || !data.budget) {
      qualificationStatus = "UNQUALIFIED"
      qualificationTag = "UNQUALIFIED"
    }
    // Check if user is unsure about services
    else if (data.service === "Not sure - can someone help me with this?") {
      qualificationStatus = "UNQUAL AND UNSURE"
      qualificationTag = "UNQUAL AND UNSURE"
    }
    // Check if everything filled except budget
    else if (!data.budget && data.service && data.challenge && data.timeline) {
      qualificationStatus = "QUALIFIED"
      qualificationTag = "QUALIFIED"
    }
    // Full form completed
    else if (data.service && data.challenge && data.timeline && data.budget) {
      qualificationStatus = "QUALIFIED"
      qualificationTag = "QUALIFIED"
    }

    const uniqueId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    const leadData = {
      ...data,
      responses,
      totalScore: scoreData.score,
      overallQuality: scoreData.quality,
      qualificationStatus: qualificationTag,
      qualificationTag,
      // Admin panel expects these exact field names and formats
      budget: scoreData.budgetCategory, // Show category: below_avg, avg, above_avg, N/A
      timeline: scoreData.timelineTag, // Show tag: urgent_red, comfortable_green, flexible_yellow
      status: qualificationTag, // Show qualification as status: QUALIFIED, UNQUALIFIED, UNQUAL AND UNSURE
      timestamp: new Date().toISOString(),
      id: uniqueId,
      // Keep original selections for reference
      budgetRange: data.budget,
      timelineRange: data.timeline,
      budgetCategory: scoreData.budgetCategory,
      timelineTag: scoreData.timelineTag,
    }

    const updatedData = [...existingData, leadData]
    localStorage.setItem("kayi-chatbot-leads", JSON.stringify(updatedData))

    return true
  } catch (error) {
    console.error("Error saving to localStorage:", error)
    return false
  }
}

const savePartialData = async (data: Partial<ChatData>, reason: string): Promise<boolean> => {
  try {
    const existingData = JSON.parse(localStorage.getItem("kayi-chatbot-leads") || "[]")

    const isDuplicate = existingData.some((lead: any) => {
      if (lead.email === data.email) {
        const timeDiff = Math.abs(new Date().getTime() - new Date(lead.timestamp).getTime())
        return timeDiff < 3600000
      }
      return false
    })

    if (isDuplicate) {
      console.log("Duplicate partial lead detected, skipping save")
      return true
    }

    const uniqueId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    let qualificationTag = "UNQUALIFIED" // Default for partial data

    // If user provided basic credentials only
    if (data.name && data.email && data.whatsapp && !data.service) {
      qualificationTag = "UNQUALIFIED"
    }
    // If user was unsure about services
    else if (data.service === "Not sure - can someone help me with this?") {
      qualificationTag = "UNQUAL AND UNSURE"
    }

    const partialLead = {
      ...data,
      status: qualificationTag, // Show qualification tag as status
      qualificationStatus: qualificationTag,
      qualificationTag,
      reason: reason,
      budget: "Not provided", // Simple format for partial leads
      timeline: "Not provided", // Simple format for partial leads
      budgetCategory: "Not provided",
      timelineTag: "Not provided",
      timestamp: new Date().toISOString(),
      id: uniqueId,
      totalScore: 0,
      overallQuality: "Pending",
      responses: [],
    }

    const updatedData = [...existingData, partialLead]
    localStorage.setItem("kayi-chatbot-leads", JSON.stringify(updatedData))
    return true
  } catch (error) {
    console.error("Error saving partial data:", error)
    return false
  }
}

export default function KayiChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(-1)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [chatData, setChatData] = useState<ChatData>({
    name: "",
    whatsapp: "",
    email: "",
    service: "",
    challenge: "",
    timeline: "",
    budget: "",
  })
  const [inputValue, setInputValue] = useState("")
  const [selectValue, setSelectValue] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationError, setValidationError] = useState("")
  const [showContinueQuestion, setShowContinueQuestion] = useState(false)
  const [showCallbackOptions, setShowCallbackOptions] = useState(false)
  const [showWhatsAppConnect, setShowWhatsAppConnect] = useState(false)
  const [showContactInfo, setShowContactInfo] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("")

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const currentTime = new Date().getHours()
      let greeting = "Good Morning"
      if (currentTime >= 12 && currentTime < 17) greeting = "Good Afternoon"
      else if (currentTime >= 17) greeting = "Good Evening"

      setMessages([
        {
          id: "1",
          type: "bot",
          message: `${greeting}!

I'm ZoeBot from Kayi Digital, your business growth assistant.

Before we explore how to transform your online presence, are you comfortable sharing a few quick details so I can personalize this for you?`,
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

  const simulateTyping = (callback: () => void, delay = 1500) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      callback()
    }, delay)
  }

  const handleConsent = (consent: boolean) => {
    if (consent) {
      addMessage("user", "Yes, I'm in")
      simulateTyping(() => {
        setCurrentStep(0)
        addMessage("bot", questions[0].question)
      })
    } else {
      addMessage("user", "No, I wanna stay anonymous 👻")
      simulateTyping(() => {
        addMessage(
          "bot",
          "That's sad, but no worries. Let's get you in touch with a live representative so that they can assist you better?",
        )
        setShowWhatsAppConnect(true)
      })
    }
  }

  const handleContinueQuestion = async (answer: string) => {
    addMessage("user", answer)

    if (answer === "Not right now, call me later") {
      await savePartialData(chatData, "User requested callback - not available now")

      simulateTyping(() => {
        addMessage(
          "bot",
          "Sure thing, that sounds good too. What time slot works the best for you?\n\nI'll ask my colleague to get back to you accordingly!",
        )
        setShowCallbackOptions(true)
      })
    } else {
      simulateTyping(() => {
        addMessage("bot", "Awesome! Let's dive in.")
        setTimeout(() => {
          setCurrentStep(3)
          addMessage("bot", questions[3].question)
        }, 1000)
      })
    }
    setShowContinueQuestion(false)
  }

  const handleCallbackOption = async (option: string) => {
    addMessage("user", option)

    await savePartialData(chatData, `Callback requested: ${option}`)

    if (option === "I am available in the next hour") {
      simulateTyping(() => {
        addMessage("bot", "Perfect! I'll have our team reach out to you within the next hour. Thanks for your time!")
        setIsCompleted(true)
      })
    } else if (option === "Please select your preferred slot") {
      simulateTyping(() => {
        addMessage("bot", "Great! Please select your preferred time slot from the calendar below:")
        setShowCalendar(true)
      })
    } else if (option === "Not right now, let's talk later") {
      simulateTyping(() => {
        addMessage(
          "bot",
          `No problem at all! Here are our contact details:

📞 Phone: +92 309 0613822
📧 Email: hello@kayidigital.com
🌐 Website: kayidigital.com

Feel free to reach out whenever you're ready. Have a great day!`,
        )
        setIsCompleted(true)
      })
    }
    setShowCallbackOptions(false)
  }

  const handleWhatsAppConnect = async (option: string) => {
    addMessage("user", option)

    if (option === "Yes, connect me to WhatsApp") {
      simulateTyping(() => {
        addMessage("bot", "+92 309 0613822")
        setIsCompleted(true)
      })
    } else {
      simulateTyping(() => {
        addMessage(
          "bot",
          `No problem at all! Here are our contact details:

📞 Phone: +92 309 0613822
📧 Email: hello@kayidigital.com
🌐 Website: kayidigital.com

Feel free to reach out whenever you're ready. Have a great day!`,
        )
        setIsCompleted(true)
      })
    }
    setShowWhatsAppConnect(false)
  }

  const handleTimeSlotSelect = async (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot)
    addMessage("user", `Selected: ${timeSlot}`)

    const updatedData = { ...chatData, timeSlot }
    setChatData(updatedData)

    await saveToLocalStorage(updatedData)

    simulateTyping(() => {
      addMessage(
        "bot",
        `Perfect! I've scheduled our call for ${timeSlot}. You'll receive a confirmation shortly. Looking forward to speaking with you!`,
      )
      setIsCompleted(true)
    })
    setShowCalendar(false)
  }

  const handleSubmit = async (value: string) => {
    if ((!value.trim() && !selectValue) || isSubmitting) return

    const finalValue = selectValue || value
    const currentQuestion = questions[currentStep]
    const fieldName = currentQuestion.id

    const validation = validateInput(finalValue, currentQuestion.type, fieldName)

    if (!validation.isValid) {
      setValidationError(validation.error || "Invalid input")
      setTimeout(() => {
        addMessage("bot", `${validation.error}`)
      }, 300)
      return
    }

    setValidationError("")
    addMessage("user", finalValue)

    const updatedData = { ...chatData, [currentQuestion.id]: finalValue }
    setChatData(updatedData)

    if (currentStep === 2) {
      await savePartialData(updatedData, "User completed basic credentials")
    }

    if (currentStep === 3 && finalValue === "Not sure - can someone help me with this?") {
      await savePartialData(updatedData, "User unsure about services - callback requested")

      simulateTyping(() => {
        addMessage(
          "bot",
          "Sure thing, that sounds good too. What time slot works the best for you?\n\nI'll ask my colleague to get back to you accordingly!",
        )
        setShowCallbackOptions(true)
      })
      return
    }

    if (currentStep === 2) {
      simulateTyping(() => {
        addMessage(
          "bot",
          `Thanks ${updatedData.name}!

Quick question - do you have 2-3 minutes more right now to chat about your project?

I'd love to understand what you're looking for so I can point you in the right direction.`,
        )
        setShowContinueQuestion(true)
      })
    } else if (currentStep < questions.length - 1) {
      simulateTyping(() => {
        setCurrentStep((prev) => prev + 1)
        const nextQuestion = questions[currentStep + 1].question.replace("[NAME]", updatedData.name)
        addMessage("bot", nextQuestion)
      })
    } else {
      setIsSubmitting(true)
      setTimeout(async () => {
        const saveSuccess = await saveToLocalStorage(updatedData)
        if (saveSuccess) {
          setIsSubmitting(false)
          simulateTyping(() => {
            addMessage(
              "bot",
              "Perfect! Thanks for all the details. Please book your preferred time slot using our calendar:\n\n🗓️ http://calendly.com/saadalii/kayidigital\n\nI'll see you there!",
            )
            setIsCompleted(true)
          })
        }
      }, 1000)
    }

    setInputValue("")
    setSelectValue("")
  }

  const resetChat = () => {
    setCurrentStep(-1)
    setMessages([])
    setChatData({
      name: "",
      whatsapp: "",
      email: "",
      service: "",
      challenge: "",
      timeline: "",
      budget: "",
    })
    setInputValue("")
    setSelectValue("")
    setIsCompleted(false)
    setIsSubmitting(false)
    setValidationError("")
    setShowContinueQuestion(false)
    setShowCallbackOptions(false)
    setShowWhatsAppConnect(false)
    setShowContactInfo(false)
    setIsTyping(false)
    setShowCalendar(false)
    setSelectedTimeSlot("")
  }

  const currentQuestion = currentStep >= 0 ? questions[currentStep] : null

  const CalendarSelector = () => {
    const today = new Date()
    const timeSlots = []

    // Generate next 7 days with time slots
    for (let i = 0; i < 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      const daySlots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]

      daySlots.forEach((time) => {
        timeSlots.push({
          date: date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
          time: time,
          fullDate: `${date.toLocaleDateString()} at ${time}`,
        })
      })
    }

    return (
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">📅 Select Your Preferred Time Slot</h3>
        </div>
        <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto">
          {timeSlots.slice(0, 21).map((slot, index) => (
            <Button
              key={index}
              onClick={() => handleTimeSlotSelect(slot.fullDate)}
              variant="outline"
              className="w-full text-left justify-start border-[#cf21c3]/30 hover:border-[#cf21c3]/50 hover:bg-[#cf21c3]/10 py-3 rounded-xl transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-[#cf21c3]" />
                <div>
                  <div className="font-medium text-gray-800">{slot.date}</div>
                  <div className="text-sm text-gray-600">{slot.time}</div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-[#cf21c3] to-[#cf21c3]/80 hover:from-[#cf21c3]/90 hover:to-[#cf21c3]/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          >
            <MessageCircle className="w-8 h-8" />
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[420px] md:w-[480px] h-[600px] md:h-[650px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-[#cf21c3] to-[#cf21c3]/80 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">ZoeBot</h3>
                <p className="text-sm opacity-90">Digital Marketing Assistant</p>
              </div>
            </div>
            <Button onClick={resetChat} variant="ghost" size="sm" className="text-white hover:bg-white/20 rounded-full">
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/30">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] p-4 rounded-2xl ${
                    message.type === "user"
                      ? "bg-gradient-to-r from-[#cf21c3] to-[#cf21c3]/80 text-white shadow-md"
                      : "bg-white text-gray-800 border border-[#cf21c3]/20 shadow-sm"
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.message}</div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 p-4 rounded-2xl border border-[#cf21c3]/20 shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-[#cf21c3]" />
                </div>
              </div>
            )}
          </div>

          {currentStep === -1 && !isCompleted && !showWhatsAppConnect && (
            <div className="p-6 border-t border-[#cf21c3]/20 bg-white/80 backdrop-blur-sm space-y-4">
              <Button
                onClick={() => handleConsent(true)}
                className="w-full bg-[#cf21c3] hover:bg-[#b91c9e] text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 group border-0"
              >
                <span className="flex items-center justify-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  Yes, I'm in
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              <Button
                onClick={() => handleConsent(false)}
                variant="outline"
                className="w-full border-2 border-[#cf21c3]/30 hover:border-[#cf21c3]/50 hover:bg-[#cf21c3]/10 py-4 rounded-2xl font-semibold transition-all duration-300 text-gray-700"
              >
                No, I wanna stay anonymous 👻
              </Button>
            </div>
          )}

          {showContinueQuestion && (
            <div className="p-6 border-t border-[#cf21c3]/20 bg-white/80 backdrop-blur-sm space-y-4">
              <Button
                onClick={() => handleContinueQuestion("Yes, I'm in!")}
                className="w-full bg-[#cf21c3] hover:bg-[#b91c9e] text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 group border-0"
              >
                <span className="flex items-center justify-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  Yes, I'm in!
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              <Button
                onClick={() => handleContinueQuestion("Not right now, call me later")}
                variant="outline"
                className="w-full border-2 border-[#cf21c3]/30 hover:border-[#cf21c3]/50 hover:bg-[#cf21c3]/10 py-4 rounded-2xl font-semibold transition-all duration-300 text-gray-700"
              >
                Not right now, call me later
              </Button>
            </div>
          )}

          {showCallbackOptions && (
            <div className="p-6 border-t border-[#cf21c3]/20 bg-white/80 backdrop-blur-sm space-y-4">
              <Button
                onClick={() => handleCallbackOption("I am available in the next hour")}
                className="w-full bg-[#cf21c3] hover:bg-[#b91c9e] text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 group border-0"
              >
                <span className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5" />I am available in the next hour
                </span>
              </Button>
              <Button
                onClick={() => handleCallbackOption("Please select your preferred slot")}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 group border-0"
              >
                <span className="flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Please select your preferred slot
                </span>
              </Button>
              <Button
                onClick={() => handleCallbackOption("Not right now, let's talk later")}
                variant="outline"
                className="w-full border-2 border-[#cf21c3]/30 hover:border-[#cf21c3]/50 hover:bg-[#cf21c3]/10 py-4 rounded-2xl font-semibold transition-all duration-300 text-gray-700"
              >
                Not right now, let's talk later
              </Button>
            </div>
          )}

          {showWhatsAppConnect && (
            <div className="p-6 border-t border-[#cf21c3]/20 bg-white/80 backdrop-blur-sm space-y-4">
              <Button
                onClick={() => handleWhatsAppConnect("Yes, connect me to WhatsApp")}
                className="w-full bg-[#cf21c3] hover:bg-[#b91c9e] text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 group border-0"
              >
                <span className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  Yes, connect me to WhatsApp
                </span>
              </Button>
              <Button
                onClick={() => handleWhatsAppConnect("No, I'll reach out later myself")}
                variant="outline"
                className="w-full border-2 border-[#cf21c3]/30 hover:border-[#cf21c3]/50 hover:bg-[#cf21c3]/10 py-4 rounded-2xl font-semibold transition-all duration-300 text-gray-700"
              >
                No, I'll reach out later myself
              </Button>
            </div>
          )}

          {showCalendar && (
            <div className="p-6 border-t border-[#cf21c3]/20 bg-white/80 backdrop-blur-sm">
              <CalendarSelector />
            </div>
          )}

          {currentStep >= 0 &&
            !isCompleted &&
            !isSubmitting &&
            !showContinueQuestion &&
            !showCallbackOptions &&
            !showWhatsAppConnect &&
            !showCalendar && (
              <div className="p-6 border-t border-[#cf21c3]/20 bg-white/80 backdrop-blur-sm">
                {validationError && (
                  <div className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-2xl flex items-center gap-3 animate-in slide-in-from-top-3 duration-300">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <span className="text-red-700 text-sm font-medium">{validationError}</span>
                  </div>
                )}

                <div className="space-y-4">
                  {currentQuestion?.type === "select" ? (
                    <div className="flex gap-3">
                      <Select value={selectValue} onValueChange={setSelectValue}>
                        <SelectTrigger className="flex-1 border-2 border-[#cf21c3]/30 hover:border-[#cf21c3]/50 rounded-2xl py-4 transition-all duration-300 focus:ring-2 focus:ring-[#cf21c3]/20 focus:border-[#cf21c3] bg-white/90 backdrop-blur-sm">
                          <SelectValue placeholder="Select an option..." />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-2 border-[#cf21c3]/20 shadow-2xl bg-white/95 backdrop-blur-sm">
                          {currentQuestion.options?.map((option) => (
                            <SelectItem
                              key={option}
                              value={option}
                              className="rounded-xl hover:bg-[#cf21c3]/10 transition-colors duration-200 py-3 font-medium"
                            >
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button
                        onClick={() => handleSubmit("")}
                        className="bg-[#cf21c3] hover:bg-[#b91c9e] px-5 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
                        disabled={!selectValue}
                      >
                        <Send className="w-5 h-5" />
                      </Button>
                    </div>
                  ) : currentQuestion?.type === "textarea" ? (
                    <div className="space-y-4">
                      <Textarea
                        placeholder={currentQuestion.placeholder}
                        value={inputValue}
                        onChange={(e) => {
                          setInputValue(e.target.value)
                          if (validationError) setValidationError("")
                        }}
                        className="min-h-[120px] border-2 border-[#cf21c3]/30 hover:border-[#cf21c3]/50 rounded-2xl transition-all duration-300 focus:ring-2 focus:ring-[#cf21c3]/20 resize-none p-4 bg-white/90 font-medium backdrop-blur-sm"
                      />
                      <Button
                        onClick={() => handleSubmit(inputValue)}
                        className="w-full bg-[#cf21c3] hover:bg-[#b91c9e] font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 group border-0"
                        disabled={!inputValue.trim()}
                      >
                        <span className="flex items-center justify-center gap-3">
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          Send Response
                        </span>
                      </Button>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <Input
                        type={currentQuestion?.type || "text"}
                        placeholder={currentQuestion?.placeholder}
                        value={inputValue}
                        onChange={(e) => {
                          setInputValue(e.target.value)
                          if (validationError) setValidationError("")
                        }}
                        onKeyPress={(e) => e.key === "Enter" && handleSubmit(inputValue)}
                        className="flex-1 border-2 border-[#cf21c3]/30 hover:border-[#cf21c3]/50 rounded-2xl py-4 transition-all duration-300 focus:ring-2 focus:ring-[#cf21c3]/20 bg-white/90 font-medium backdrop-blur-sm"
                      />
                      <Button
                        onClick={() => handleSubmit(inputValue)}
                        className="bg-[#cf21c3] hover:bg-[#b91c9e] px-5 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
                        disabled={!inputValue.trim()}
                      >
                        <Send className="w-5 h-5" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}

          {isCompleted && (
            <div className="p-6 border-t border-[#cf21c3]/20 bg-white/80 backdrop-blur-sm space-y-5">
              <div className="flex items-center justify-center gap-3 text-[#cf21c3] mb-6 animate-in zoom-in duration-700">
                <CheckCircle className="w-8 h-8" />
                <span className="font-bold text-xl">Thank you!</span>
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <Button
                onClick={resetChat}
                variant="outline"
                className="w-full border-2 border-[#cf21c3]/30 hover:border-[#cf21c3]/50 hover:bg-[#cf21c3]/10 py-4 rounded-2xl font-semibold transition-all duration-300 text-gray-700 bg-transparent"
              >
                Start New Conversation
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#cf21c3] hover:bg-[#b91c9e] font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 border-0"
              >
                Close Chat
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  )
}
