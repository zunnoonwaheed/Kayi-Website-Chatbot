"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, animate } from "framer-motion"
import { User } from "lucide-react"

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

export default function HeroSection() {
  const typingWords = ["Growth", "Results", "Revenue", "Success", "Performance", "Scaling", "Profit", "Impact"]

  const [count, setCount] = useState(205000)
  useEffect(() => {
    let controls: any

    const animateCounter = () => {
      const startValue = 205000 + Math.floor(Math.random() * 100)
      const endValue = startValue + Math.floor(Math.random() * 500) + 200

      controls = animate(startValue, endValue, {
        duration: 3 + Math.random() * 2,
        ease: "easeInOut",
        onUpdate(value) {
          setCount(Math.floor(value))
        },
        onComplete() {
          setTimeout(animateCounter, 1000 + Math.random() * 2000)
        },
      })
    }

    animateCounter()

    return () => controls?.stop()
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <div id="hero-section" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute rounded-full"
          style={{ width: "120vmin", height: "120vmin" }}
          animate={{
            background: [
              "radial-gradient(circle at center, rgba(147,51,234,0.4), rgba(236,72,153,0.25), transparent 70%)",
              "radial-gradient(circle at center, rgba(236,72,153,0.4), rgba(251,146,60,0.25), transparent 70%)",
              "radial-gradient(circle at center, rgba(59,130,246,0.4), rgba(147,51,234,0.25), transparent 70%)",
              "radial-gradient(circle at center, rgba(147,51,234,0.4), rgba(236,72,153,0.25), transparent 70%)",
            ],
            opacity: [0.6, 0.8, 0.7, 0.6],
          }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>

      {/* Hero Content */}
      <motion.div
        className="container mx-auto flex flex-col items-center text-center relative z-10 
                   px-4 md:px-6 
                   pt-36 sm:pt-40 md:pt-32 pb-16 sm:pb-24 md:min-h-screen md:justify-center"
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
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{ filter: "blur(60px)" }}
          />
        </div>

        <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6 relative z-10"
            style={{ color: "#1f2937" }}
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
                {count.toLocaleString()}
              </span>
            </div>
            <span className="text-sm sm:text-lg font-semibold text-gray-700">people helped so far</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
