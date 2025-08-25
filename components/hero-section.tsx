"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { User, Lightbulb, Sparkles, Megaphone, CreditCard, DollarSign } from "lucide-react"

interface TypewriterEffectProps {
  words: string[]
  className?: string
}

function TypewriterEffect({ words, className = "" }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className={`inline-block font-bold ${className}`} style={{ fontWeight: "800", color: "#cf21c3" }}>
      {currentText}
    </span>
  )
}

const ServiceCard = ({ icon: Icon, title, delay = 0 }: { icon: any; title: string; delay?: number }) => {
  return (
    <motion.div
      className="rounded-2xl p-6 hover:scale-105 cursor-pointer relative z-10 transition-all duration-300 
                 bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl
                 hover:bg-white/15"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 drop-shadow-md">{title}</h3>
      </div>
    </motion.div>
  )
}

export default function HeroSection() {
  const typingWords = ["Growth", "Results", "Revenue", "Success", "Performance", "Scaling", "Profit", "Impact"]
  const headingGradients = [
    "linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b)",
    "linear-gradient(135deg, #ec4899, #f97316, #eab308)",
    "linear-gradient(135deg, #f97316, #eab308, #22c55e)",
    "linear-gradient(135deg, #22c55e, #3b82f6, #8b5cf6)",
    "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
    "linear-gradient(135deg, #9333ea, #ec4899, #f97316, #3b82f6)",
  ]

  const [currentGradientIndex, setCurrentGradientIndex] = useState(0)
  const [count, setCount] = useState(0)

  // Animate heading gradients
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradientIndex((prev) => (prev + 1) % headingGradients.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [headingGradients.length])

  // Animate counter continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev + 1
        return next > 73 ? 1 : next
      })
    }, 150) // Change number every 150ms for smooth animation

    return () => clearInterval(interval)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const services = [
    { icon: Lightbulb, title: "Find ideas" },
    { icon: Sparkles, title: "Create products" },
    { icon: Megaphone, title: "Find customers" },
    { icon: CreditCard, title: "Get paid globally" },
    { icon: DollarSign, title: "Build a business" },
  ]

  return (
    <div id="hero-section" className="relative overflow-hidden bg-white min-h-screen">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.3), rgba(248,250,252,0.4))",
          }}
        />

        <motion.div
          className="absolute rounded-full"
          style={{
            width: "120vmin",
            height: "120vmin",
            left: "50%",
            top: "25%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            background: [
              "radial-gradient(circle at center, rgba(147,51,234,0.05), rgba(236,72,153,0.03), transparent 70%)",
              "radial-gradient(circle at center, rgba(236,72,153,0.05), rgba(251,146,60,0.03), transparent 70%)",
              "radial-gradient(circle at center, rgba(59,130,246,0.05), rgba(147,51,234,0.03), transparent 70%)",
              "radial-gradient(circle at center, rgba(147,51,234,0.05), rgba(236,72,153,0.03), transparent 70%)",
            ],
          }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "140vmin",
            height: "140vmin",
            left: "50%",
            top: "85%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            background: [
              "radial-gradient(circle at center, rgba(236,72,153,0.06), rgba(147,51,234,0.04), transparent 60%)",
              "radial-gradient(circle at center, rgba(59,130,246,0.06), rgba(236,72,153,0.04), transparent 60%)",
              "radial-gradient(circle at center, rgba(147,51,234,0.06), rgba(59,130,246,0.04), transparent 60%)",
              "radial-gradient(circle at center, rgba(236,72,153,0.06), rgba(147,51,234,0.04), transparent 60%)",
            ],
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
            delay: 2,
          }}
        />
      </div>

      {/* Hero Content */}
      <motion.div
        className="container mx-auto flex flex-col items-center text-center relative z-10 
                   px-4 md:px-6 
                   pt-36 sm:pt-40 md:pt-32 pb-8 sm:pb-12 md:min-h-screen md:justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-80 -z-10">
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              background: [
                "linear-gradient(135deg, rgba(147,51,234,0.6), rgba(236,72,153,0.4))",
                "linear-gradient(135deg, rgba(236,72,153,0.6), rgba(251,146,60,0.4))",
                "linear-gradient(135deg, rgba(251,146,60,0.6), rgba(59,130,246,0.4))",
                "linear-gradient(135deg, rgba(59,130,246,0.6), rgba(147,51,234,0.4))",
              ],
              opacity: [0.5, 0.7, 0.6, 0.5],
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
            }}
            style={{ filter: "blur(60px)" }}
          />
        </div>

        <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6 relative z-10"
            style={{
              backgroundImage: headingGradients[currentGradientIndex],
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              transition: "background-image 0.5s ease-in-out",
            }}
            variants={fadeInUp}
          >
            Everything Your Business Needs For <TypewriterEffect words={typingWords} />
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-8 sm:mb-10 relative z-10"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Your business growth should feel predictable, not like a gamble. We partner with companies who want real
            results they can count on.
          </motion.p>

          {/* 🔥 Solid Black CTA Button */}
          <motion.div variants={fadeInUp} transition={{ delay: 0.3 }}>
            <div
              className="inline-flex items-center justify-center py-3 px-8 text-base font-semibold text-white rounded-full shadow-lg cursor-pointer group relative z-10"
              style={{ backgroundColor: "#000000" }}
            >
              <Link href="https://calendly.com/saadalii/kayidigital" className="flex items-center">
                Let's do it
                <svg
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* 👥 Enhanced customer counter with clean SVG icon and more vibrant gradient */}
          <motion.div
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 font-medium text-base sm:text-lg text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <User
                className="w-5 h-5 sm:w-7 sm:h-7 text-purple-600"
                style={{ filter: "drop-shadow(0 2px 8px rgba(147,51,234,0.4))" }}
              />
              <span
                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #9333ea, #ec4899, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 2px 4px rgba(147,51,234,0.3))",
                }}
              >
                {count}+ clients
              </span>
            </div>
            <span className="text-sm sm:text-lg font-semibold text-gray-700">helped so far</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Kayi Digital Helps You Section with Video Background */}
      <div className="w-full pb-16 relative overflow-hidden">
        {/* Video Background for Bottom Section Only */}
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
            <source src="https://r2.nas.media/header-background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30"></div>
        </div>

        <motion.div
          className="text-center mb-6 relative z-20 px-4 md:px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Enhanced heading with better contrast over video */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 drop-shadow-lg">Kayi Digital helps you</h2>

          {/* Service Cards - Desktop */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={service.title} icon={service.icon} title={service.title} delay={index * 0.1} />
            ))}
          </div>

          {/* Service Cards - Mobile and Tablet */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto lg:hidden">
            {services.map((service, index) => (
              <ServiceCard key={service.title} icon={service.icon} title={service.title} delay={index * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}