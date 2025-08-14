"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { X, RotateCcw, Edit2, Check, ArrowRight } from "lucide-react"
import { MessageCircle, Clock, Calendar, Phone, Sparkles, CheckCircle, Send, AlertCircle } from "lucide-react"

interface ChatMessage {
  id: string
  type: "bot" | "user"
  message: string
  timestamp: Date
  stepId?: number
  isEditable?: boolean
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

const questions = [
  {
    id: "name",
    question: "Awesome! Let's start simple - what should I call you?",
    type: "text",
    placeholder: "Enter your name...",
    field: "name" as keyof ChatData,
  },
  {
    id: "whatsapp",
    question: "Great to meet you! What's your WhatsApp number so we can stay connected?",
    type: "tel",
    placeholder: "Enter your WhatsApp number...",
    field: "whatsapp" as keyof ChatData,
  },
  {
    id: "email",
    question: "Perfect! And your email address?",
    type: "email",
    placeholder: "Enter your email address...",
    field: "email" as keyof ChatData,
  },
  {
    id: "service",
    question: "Now, which service are you most interested in exploring?",
    type: "select",
    field: "service" as keyof ChatData,
    options: [
      "Social Media Marketing",
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Content Marketing",
      "Email Marketing",
      "Website Development",
      "Brand Strategy & Design",
      "Marketing Analytics & Reporting",
      "E-commerce Solutions",
      "Lead Generation",
      "Other (please specify in next step)",
    ],
  },
  {
    id: "challenge",
    question: "What's your biggest challenge with digital marketing right now?",
    type: "textarea",
    placeholder: "Tell us about your main digital marketing challenge...",
    field: "challenge" as keyof ChatData,
  },
  {
    id: "timeline",
    question: "When are you looking to get started?",
    type: "select",
    field: "timeline" as keyof ChatData,
    options: ["Immediately", "Within 1 month", "Within 3 months", "Within 6 months", "Just exploring options"],
  },
  {
    id: "budget",
    question: "What's your monthly budget range for digital marketing?",
    type: "select",
    field: "budget" as keyof ChatData,
    options: [
      "Under $1,000",
      "$1,000 - $2,500",
      "$2,500 - $5,000",
      "$5,000 - $10,000",
      "$10,000 - $25,000",
      "Over $25,000",
      "I need help determining this",
    ],
  },
]

const validateField = (field: keyof ChatData, value: string): string => {
  switch (field) {
    case "name":
      if (!value.trim()) return "Please enter your name"
      if (value.trim().length < 2) return "Name must be at least 2 characters"
      return ""
    case "whatsapp":
      if (!value.trim()) return "Please enter your WhatsApp number"
      const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
      if (!phoneRegex.test(value.replace(/\s+/g, ""))) return "Please enter a valid phone number"
      return ""
    case "email":
      if (!value.trim()) return "Please enter your email address"
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) return "Please enter a valid email address"
      return ""
    case "service":
    case "timeline":
    case "budget":
      if (!value.trim()) return "Please select an option"
      return ""
    case "challenge":
      if (!value.trim()) return "Please describe your challenge"
      if (value.trim().length < 10) return "Please provide more details (at least 10 characters)"
      return ""
    default:
      return ""
  }
}

const saveToLocalStorage = async (data: ChatData) => {
  try {
    localStorage.setItem("chatbot-data", JSON.stringify(data))
  } catch (error) {
    console.error("Error saving to localStorage:", error)
  }
}

const savePartialData = async (data: ChatData, reason: string) => {
  try {
    const partialData = {
      ...data,
      reason,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("chatbot-partial", JSON.stringify(partialData))
  } catch (error) {
    console.error("Error saving partial data:", error)
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
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [customTime, setCustomTime] = useState("")
  const [showCustomTimeInput, setShowCustomTimeInput] = useState(false)
  const [hasReachedTimeline, setHasReachedTimeline] = useState(false)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("")
  const [showTimeSlots, setShowTimeSlots] = useState(false)
  const [showCalendlyButton, setShowCalendlyButton] = useState(false)
  const [showContinueFromEdit, setShowContinueFromEdit] = useState(false) // Declare the variable

  const [editingMessageId, setEditingMessageId] = useState<string | null>(null)
  const [editingValue, setEditingValue] = useState("")
  const [editingSelectValue, setEditingSelectValue] = useState("")
  const [isEditMode, setIsEditMode] = useState(false)
  const [editingStep, setEditingStep] = useState<number | null>(null)

  const [originalStep, setOriginalStep] = useState<number>(-1) // Track where user was before editing
  const [editHistory, setEditHistory] = useState<{ stepId: number; originalValue: string }[]>([]) // Track edit history
  const [showSuccessPopup, setShowSuccessPopup] = useState(false) // Track animated success popup

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load saved state from localStorage
    const savedState = localStorage.getItem("chatbot-state")
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState)
        setMessages(parsedState.messages || [])
        setChatData(parsedState.chatData || {})
        setCurrentStep(parsedState.currentStep || 0)
        setIsCompleted(parsedState.isCompleted || false)
        setShowCalendar(parsedState.showCalendar || false)
        setHasReachedTimeline(parsedState.hasReachedTimeline || false)
      } catch (error) {
        console.error("Error loading chat state:", error)
      }
    }

    localStorage.removeItem("chatbot-state")
    localStorage.removeItem("chatState")

    // Reset all state to initial values
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
    setCurrentStep(-1)
    setIsCompleted(false)
    setShowCalendar(false)
    setHasReachedTimeline(false)
    setShowContinueQuestion(false)
    setShowCallbackOptions(false)
    setShowWhatsAppConnect(false)
    setShowContactInfo(false)

    // Always show initial greeting on component mount
    setTimeout(() => {
      addMessage(
        "bot",
        "Good Afternoon! I'm ZoeBot from Kayi Digital, your business growth assistant. Before we explore how to transform your online presence, are you comfortable sharing a few quick details so I can personalize this for you?",
      )
    }, 500)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const addMessage = (type: "bot" | "user", message: string, stepId?: number) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type,
      message,
      timestamp: new Date(),
      stepId, // Track which step this message belongs to
      isEditable: type === "user" && stepId !== undefined, // Mark user messages as editable
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

  const handleEditMessage = (messageId: string, stepId: number) => {
    const message = messages.find((m) => m.id === messageId)
    if (!message) return

    // Store original position if not already editing
    if (!isEditMode) {
      setOriginalStep(currentStep)
    }

    setEditingMessageId(messageId)
    setEditingStep(stepId)
    setIsEditMode(true)

    const question = questions[stepId]
    const currentValue = chatData[question.field]

    // Store original value for history
    setEditHistory((prev) => [...prev.filter((h) => h.stepId !== stepId), { stepId, originalValue: currentValue }])

    if (question.type === "select") {
      setEditingSelectValue(currentValue)
    } else {
      setEditingValue(currentValue)
    }
  }

  const handleSaveEdit = () => {
    if (editingStep === null || !editingMessageId) return

    const question = questions[editingStep]
    const newValue = question.type === "select" ? editingSelectValue : editingValue

    // Validate the new value
    const error = validateField(question.field, newValue)
    if (error) {
      setValidationError(error)
      return
    }

    // Update chat data
    const updatedData = { ...chatData, [question.field]: newValue }
    setChatData(updatedData)

    // Update the message
    setMessages((prev) => prev.map((msg) => (msg.id === editingMessageId ? { ...msg, message: newValue } : msg)))

    setShowSuccessPopup(true)
    setTimeout(() => setShowSuccessPopup(false), 2000)

    // Clear editing state
    setEditingMessageId(null)
    setEditingStep(null)
    setIsEditMode(false)
    setEditingValue("")
    setEditingSelectValue("")
    setValidationError("")

    setOriginalStep(-1)
  }

  const handleCancelEdit = () => {
    // Restore original value if it exists
    if (editingStep !== null) {
      const originalEdit = editHistory.find((h) => h.stepId === editingStep)
      if (originalEdit) {
        const question = questions[editingStep]
        const restoredData = { ...chatData, [question.field]: originalEdit.originalValue }
        setChatData(restoredData)
      }
    }

    setEditingMessageId(null)
    setEditingStep(null)
    setIsEditMode(false)
    setEditingValue("")
    setEditingSelectValue("")
    setValidationError("")

    // Remove from edit history
    if (editingStep !== null) {
      setEditHistory((prev) => prev.filter((h) => h.stepId !== editingStep))
    }
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
      // Redirect to WhatsApp with the phone number
      const whatsappUrl = `https://wa.me/923090613822?text=Hi, I'm interested in your digital marketing services. I came from your website chatbot.`
      window.open(whatsappUrl, "_blank")

      simulateTyping(() => {
        addMessage("bot", "Great! I've opened WhatsApp for you. You can now chat with our team directly!")
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
        "Perfect! I've noted your preferred time slot. Our team will reach out to you accordingly. Thank you for your time!",
      )
      setIsCompleted(true)
      setShowCalendlyButton(true) // Show Calendly button after time slot selection
    })
    setShowTimeSlots(false)
  }

  const currentQuestion = currentStep >= 0 ? questions[currentStep] : null

  const handleSubmit = async (value: string) => {
    if (!currentQuestion) return

    const finalValue = currentQuestion.type === "select" ? selectValue : value
    const error = validateField(currentQuestion.field, finalValue)

    if (error) {
      setValidationError(error)
      return
    }

    setValidationError("")
    addMessage("user", finalValue, currentStep) // Pass stepId to make message editable

    const updatedData = { ...chatData, [currentQuestion.field]: finalValue }
    setChatData(updatedData)

    setInputValue("")
    setSelectValue("")

    if (currentStep === 2) {
      simulateTyping(() => {
        addMessage(
          "bot",
          `Thanks ${updatedData.name}! I've got your contact details. Now, before we dive into the exciting stuff, are you ready to continue, or would you prefer to schedule a call for later?`,
        )
        setShowContinueQuestion(true)
      })
    } else if (currentStep === 5) {
      setHasReachedTimeline(true)
      simulateTyping(() => {
        setCurrentStep(6)
        addMessage("bot", questions[6].question)
      })
    } else if (currentStep === 6) {
      setIsSubmitting(true)
      await saveToLocalStorage(updatedData)

      simulateTyping(() => {
        addMessage(
          "bot",
          `Fantastic! Based on what you've shared:

✨ **Your Profile:**
• Name: ${updatedData.name}
• Service Interest: ${updatedData.service}
• Timeline: ${updatedData.timeline}
• Budget Range: ${updatedData.budget}

🎯 **Next Steps:**
Our team will review your requirements and reach out within 24 hours with a customized strategy proposal.

Would you like to schedule a quick 15-minute discovery call to discuss your goals in detail?`,
        )
        setIsCompleted(true)
        setShowCalendlyButton(true) // Show Calendly button when completed
        setIsSubmitting(false)
      }, 2000)
    } else {
      simulateTyping(() => {
        setCurrentStep(currentStep + 1)
        if (currentStep + 1 < questions.length) {
          addMessage("bot", questions[currentStep + 1].question)
        }
      })
    }
  }

  const resetChat = () => {
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
    setCurrentStep(-1)
    setIsCompleted(false)
    setShowCalendar(false)
    setHasReachedTimeline(false)
    setShowContinueQuestion(false)
    setShowCallbackOptions(false)
    setShowWhatsAppConnect(false)
    setShowContactInfo(false)
    setShowCalendlyButton(false)
    setEditingMessageId(null)
    setEditingStep(null)
    setIsEditMode(false)
    setEditingValue("")
    setEditingSelectValue("")
    setOriginalStep(-1)
    setEditHistory([])
    setShowContinueFromEdit(false)

    setTimeout(() => {
      addMessage(
        "bot",
        "Good Afternoon! I'm ZoeBot from Kayi Digital, your business growth assistant. Before we explore how to transform your online presence, are you comfortable sharing a few quick details so I can personalize this for you?",
      )
    }, 500)
  }

  const CalendarSelector = () => {
    const [customHour, setCustomHour] = useState("09")
    const [customMinute, setCustomMinute] = useState("00")
    const [customAmPm, setCustomAmPm] = useState("AM")

    const timeSlots = [
      "9:00 AM - 10:00 AM",
      "10:00 AM - 11:00 AM",
      "11:00 AM - 12:00 PM",
      "2:00 PM - 3:00 PM",
      "3:00 PM - 4:00 PM",
      "4:00 PM - 5:00 PM",
    ]

    return (
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">Select Your Preferred Time Slot</h3>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {timeSlots.map((slot) => (
            <Button
              key={slot}
              onClick={() => handleTimeSlotSelect(slot)}
              variant="outline"
              className="w-full border-2 border-[#cf21c3]/30 hover:border-[#cf21c3]/50 hover:bg-[#cf21c3]/10 py-3 rounded-xl font-medium transition-all duration-300"
            >
              <Clock className="w-4 h-4 mr-2" />
              {slot}
            </Button>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => setShowCustomTimeInput(!showCustomTimeInput)}
            variant="ghost"
            className="text-[#cf21c3] hover:bg-[#cf21c3]/10 font-medium"
          >
            {showCustomTimeInput ? "Hide Custom Time" : "Select Custom Time"}
          </Button>
        </div>

        {showCustomTimeInput && (
          <div className="space-y-4 p-4 bg-gray-50 rounded-xl">
            <h4 className="font-medium text-gray-700">Custom Time Selection</h4>
            <div className="flex gap-2 items-center justify-center">
              <Select value={customHour} onValueChange={setCustomHour}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => {
                    const hour = (i + 1).toString().padStart(2, "0")
                    return (
                      <SelectItem key={hour} value={hour}>
                        {hour}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
              <span className="text-lg font-bold">:</span>
              <Select value={customMinute} onValueChange={setCustomMinute}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="00">00</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="30">30</SelectItem>
                  <SelectItem value="45">45</SelectItem>
                </SelectContent>
              </Select>
              <Select value={customAmPm} onValueChange={setCustomAmPm}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AM">AM</SelectItem>
                  <SelectItem value="PM">PM</SelectItem>
                </SelectContent>
              </Select>
              {customHour && customMinute && customAmPm && (
                <button
                  onClick={() => handleTimeSlotSelect(`${customHour}:${customMinute} ${customAmPm}`)}
                  className="ml-2 px-4 py-2 bg-[#cf21c3] text-white rounded-lg hover:bg-[#b91c9e] transition-colors"
                >
                  Confirm Time: {customHour}:{customMinute} {customAmPm}
                </button>
              )}
            </div>
          </div>
        )}
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
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#cf21c3] to-[#cf21c3]/80 text-white rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg">ZoeBot</h3>
                <p className="text-sm text-white/90">Digital Marketing Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {isEditMode && (
                <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                  <Edit2 className="w-3 h-3" />
                  <span className="text-xs font-medium">Editing Mode</span>
                </div>
              )}
              {editHistory.length > 0 && !isEditMode && (
                <div className="flex items-center gap-1 bg-blue-500/20 px-2 py-1 rounded-full">
                  <span className="text-xs font-medium">
                    {editHistory.length} edit{editHistory.length > 1 ? "s" : ""}
                  </span>
                </div>
              )}
              <Button
                onClick={resetChat}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 rounded-full"
                title="Start New Chat"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 rounded-full"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/30">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] p-4 rounded-2xl relative group ${
                    message.type === "user"
                      ? "bg-gradient-to-r from-[#cf21c3] to-[#cf21c3]/80 text-white shadow-md"
                      : "bg-white text-gray-800 border border-[#cf21c3]/20 shadow-sm"
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.message}</div>
                  {message.isEditable && message.stepId !== undefined && !isEditMode && (
                    <button
                      onClick={() => handleEditMessage(message.id, message.stepId!)}
                      className="absolute -top-2 -right-2 w-8 h-8 bg-white text-[#cf21c3] rounded-full shadow-lg opacity-80 hover:opacity-100 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center hover:bg-gray-50 hover:scale-110 border-2 border-[#cf21c3]/30 hover:border-[#cf21c3]/60"
                      title="Edit this response"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                  )}
                  {editHistory.some((h) => h.stepId === message.stepId) && (
                    <div
                      className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"
                      title="This response was edited"
                    />
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl px-4 py-2 max-w-xs">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {isEditMode && editingStep !== null && (
            <div className="p-6 border-t border-[#cf21c3]/20 bg-gradient-to-r from-blue-50/50 to-purple-50/50 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#cf21c3]/10 rounded-full flex items-center justify-center">
                  <Edit2 className="w-4 h-4 text-[#cf21c3]" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-[#cf21c3]">Editing Response</span>
                  <p className="text-xs text-gray-600">
                    Step {editingStep + 1} of {questions.length}
                  </p>
                </div>
              </div>

              {validationError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 animate-in slide-in-from-top-2 duration-200">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  <span className="text-red-700 text-sm font-medium">{validationError}</span>
                </div>
              )}

              <div className="space-y-4">
                <div className="text-sm text-gray-700 font-medium mb-3">{questions[editingStep].question}</div>

                {questions[editingStep].type === "select" ? (
                  <Select value={editingSelectValue} onValueChange={setEditingSelectValue}>
                    <SelectTrigger className="flex-1 border-2 border-[#cf21c3]/30 hover:border-[#cf21c3]/50 rounded-xl py-4 transition-all duration-300 focus:ring-2 focus:ring-[#cf21c3]/20 focus:border-[#cf21c3] bg-white/80 backdrop-blur-sm">
                      <SelectValue placeholder="Select an option..." />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-2 border-[#cf21c3]/20 shadow-2xl bg-white/95 backdrop-blur-sm">
                      {questions[editingStep].options?.map((option) => (
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
                ) : questions[editingStep].type === "textarea" ? (
                  <Textarea
                    placeholder={questions[editingStep].placeholder}
                    value={editingValue}
                    onChange={(e) => {
                      setEditingValue(e.target.value)
                      if (validationError) setValidationError("")
                    }}
                    className="min-h-[100px] border-2 border-[#cf21c3]/30 hover:border-[#cf21c3]/50 rounded-2xl transition-all duration-300 focus:ring-2 focus:ring-[#cf21c3]/20 resize-none p-4 bg-white/80 font-medium backdrop-blur-sm"
                  />
                ) : (
                  <Input
                    type={questions[editingStep].type || "text"}
                    placeholder={questions[editingStep].placeholder}
                    value={editingValue}
                    onChange={(e) => {
                      setEditingValue(e.target.value)
                      if (validationError) setValidationError("")
                    }}
                    onKeyPress={(e) => e.key === "Enter" && handleSubmit(editingValue)}
                    className="flex-1 border-2 border-[#cf21c3]/30 hover:border-[#cf21c3]/50 rounded-2xl py-4 transition-all duration-300 focus:ring-2 focus:ring-[#cf21c3]/20 bg-white/80 font-medium backdrop-blur-sm"
                  />
                )}

                <div className="flex gap-3">
                  <Button
                    onClick={handleSaveEdit}
                    className="flex-1 bg-[#cf21c3] hover:bg-[#b91c9e] text-white rounded-xl font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-200"
                    disabled={questions[editingStep].type === "select" ? !editingSelectValue : !editingValue.trim()}
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button
                    onClick={handleCancelEdit}
                    variant="outline"
                    className="border-2 border-gray-300 hover:border-gray-400 rounded-xl bg-white/80 backdrop-blur-sm font-medium py-3"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}

          {showContinueQuestion && !isEditMode && (
            <div className="p-6 border-t border-[#cf21c3]/20 bg-white/80 backdrop-blur-sm space-y-4">
              <div className="text-center mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Where would you like to continue?</h4>
              </div>

              <div className="space-y-3">
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
            </div>
          )}

          {showCallbackOptions && !isEditMode && (
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

          {showWhatsAppConnect && !isEditMode && (
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

          {showCalendar && !isEditMode && (
            <div className="p-6 border-t border-[#cf21c3]/20 bg-white/80 backdrop-blur-sm">
              <CalendarSelector />
            </div>
          )}

          {currentStep === -1 && !isCompleted && !showWhatsAppConnect && !isEditMode && (
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

          {currentStep >= 0 &&
            !isCompleted &&
            !isSubmitting &&
            !showContinueQuestion &&
            !showCallbackOptions &&
            !showWhatsAppConnect &&
            !showCalendar &&
            !isEditMode && (
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
          {isCompleted && !isEditMode && (
            <div className="p-6 border-t border-[#cf21c3]/20 bg-white/80 backdrop-blur-sm space-y-5">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-3 text-[#cf21c3] text-xl font-bold">
                  <CheckCircle className="w-6 h-6" />
                  Thank you!
                  <Sparkles className="w-6 h-6" />
                </div>
                <p className="text-gray-600 text-center leading-relaxed">
                  We will have someone get in touch with you as soon as possible.
                </p>
                {showCalendlyButton && (
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-[#cf21c3]/10 to-purple-100/50 p-4 rounded-2xl border border-[#cf21c3]/20">
                      <p className="text-sm text-[#cf21c3] font-semibold text-center flex items-center justify-center gap-2">
                        <Calendar className="w-4 h-4" />📅 Book a meeting at your preferred schedule
                      </p>
                      <p className="text-xs text-gray-600 text-center mt-1">
                        Schedule a personalized consultation with our team
                      </p>
                    </div>
                    <Button
                      onClick={() => window.open("http://calendly.com/saadalii/kayidigital", "_blank")}
                      className="w-full bg-[#cf21c3] hover:bg-[#b91c9e] text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 group border-0"
                    >
                      <span className="flex items-center justify-center gap-3">
                        <Calendar className="w-5 h-5" />
                        Book Your Meeting
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Animated success popup */}
      {showSuccessPopup && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">Updated Successfully!</span>
          </div>
        </div>
      )}
    </>
  )
}
