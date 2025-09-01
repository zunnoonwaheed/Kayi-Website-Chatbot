"use client"

import { useEffect, useState, useRef, memo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { User, Lightbulb, Sparkles, Megaphone, CreditCard, DollarSign } from "lucide-react"

interface TypewriterEffectProps {
  words: string[]
  className?: string
}

// keep your words content the same but make the reference stable (top-level const)
const TYPING_WORDS = ["Growth", "Success", "Results", "Revenue", "Scaling"]

const TypewriterEffect = memo(function TypewriterEffect({ words, className = "" }: TypewriterEffectProps) {
  const [currentText, setCurrentText] = useState("")
  const wordIndexRef = useRef(0)
  const isDeletingRef = useRef(false)
  const textRef = useRef("")
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    if (!words || words.length === 0) return

    const TYPING_DELAY = 100
    const DELETING_DELAY = 50
    const PAUSE_AFTER_COMPLETE = 1000

    const tick = () => {
      const currentWord = words[wordIndexRef.current]

      if (!isDeletingRef.current) {
        // type forward
        textRef.current = currentWord.slice(0, textRef.current.length + 1)
        setCurrentText(textRef.current)

        if (textRef.current === currentWord) {
          // pause, then start deleting
          timeoutRef.current = window.setTimeout(() => {
            isDeletingRef.current = true
            tick()
          }, PAUSE_AFTER_COMPLETE)
          return
        } else {
          timeoutRef.current = window.setTimeout(tick, TYPING_DELAY)
          return
        }
      } else {
        // deleting
        textRef.current = currentWord.slice(0, Math.max(0, textRef.current.length - 1))
        setCurrentText(textRef.current)

        if (textRef.current === "") {
          // move to next word and start typing
          isDeletingRef.current = false
          wordIndexRef.current = (wordIndexRef.current + 1) % words.length
          timeoutRef.current = window.setTimeout(tick, TYPING_DELAY)
          return
        } else {
          timeoutRef.current = window.setTimeout(tick, DELETING_DELAY)
          return
        }
      }
    }

    // start the loop
    tick()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
    // only restart if the `words` prop reference changes
  }, [words])

  return <span className={`inline-block font-bold ${className}`}>{currentText}</span>
})

const ServiceCard = ({ icon: Icon, title, delay = 0 }: { icon: any; title: string; delay?: number }) => {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -2 }}
    >
      <div
        className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl 
                   p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 group-hover:bg-white/90"
      >
        <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
          <div className="p-2 md:p-3 rounded-full bg-gradient-to-br from-[#cf21c3] to-[#e879f9] text-white shadow-lg">
            <Icon size={18} className="md:w-5 md:h-5" />
          </div>
          <h3 className="text-xs md:text-sm font-medium text-gray-700">{title}</h3>
        </div>
      </div>
    </motion.div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 71) {
          clearInterval(interval)
          return 71
        }
        return prev + 1
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="font-bold text-transparent bg-gradient-to-r from-[#cf21c3] to-[#e879f9] bg-clip-text">
      {count}+ clients
    </span>
  )
}

export default function HeroSection() {
  // pass the stable top-level constant so memoization & effect don't restart
  const typingWords = TYPING_WORDS

  const [currentGradientIndex, setCurrentGradientIndex] = useState(0)
  const gradientSets = [
    {
      heading: "linear-gradient(135deg, #cf21c3, #e879f9, #f0abfc)",
      background: ["rgba(207,33,195,0.15)", "rgba(232,121,249,0.12)", "rgba(240,171,252,0.18)"],
    },
    {
      heading: "linear-gradient(135deg, #a21caf, #cf21c3, #e879f9)",
      background: ["rgba(162,28,175,0.15)", "rgba(207,33,195,0.12)", "rgba(232,121,249,0.18)"],
    },
    {
      heading: "linear-gradient(135deg, #e879f9, #cf21c3, #c084fc)",
      background: ["rgba(232,121,249,0.15)", "rgba(207,33,195,0.12)", "rgba(192,132,252,0.18)"],
    },
  ]

  // Gradient effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradientIndex((prev) => (prev + 1) % gradientSets.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    { icon: Lightbulb, title: "Research Markets" },
    { icon: Sparkles, title: "Build solutions" },
    { icon: Megaphone, title: "Drive traffic" },
    { icon: CreditCard, title: "Boost revenue" },
    { icon: DollarSign, title: "Scale operations" },
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="absolute inset-0">
        {/* animated blobs */}
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${gradientSets[currentGradientIndex].background[0]} 0%, ${gradientSets[
              currentGradientIndex
            ].background[0].replace("0.15", "0.12")} 40%, transparent 70%)`,
            filter: "blur(40px)",
            left: "20%",
            top: "20%",
          }}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />

        <motion.div
          className="absolute w-[250px] h-[250px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${gradientSets[currentGradientIndex].background[1]} 0%, ${gradientSets[
              currentGradientIndex
            ].background[1].replace("0.12", "0.1")} 45%, transparent 70%)`,
            filter: "blur(35px)",
            right: "25%",
            top: "15%",
          }}
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />

        <motion.div
          className="absolute w-[200px] h-[200px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${gradientSets[currentGradientIndex].background[2]} 0%, ${gradientSets[
              currentGradientIndex
            ].background[2].replace("0.18", "0.14")} 50%, transparent 70%)`,
            filter: "blur(30px)",
            left: "50%",
            top: "10%",
          }}
          animate={{
            x: [0, -40, 50, 0],
            y: [0, 70, -40, 0],
            scale: [1, 1.1, 0.85, 1],
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-40 pb-16 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-black">
              Everything Your
              <br /> Business Needs
              <br /> For{" "}
            </span>
            <TypewriterEffect
              words={typingWords}
              className="bg-gradient-to-r from-[#cf21c3] to-[#e879f9] bg-clip-text text-transparent"
            />
          </motion.h1>

          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your business growth should feel predictable, not like a gamble. We partner with companies who want real
            results they can count on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-12"
          >
            <Link
              href="https://calendly.com/saadalii/kayidigital"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white 
                         bg-gradient-to-r from-[#cf21c3] to-[#e879f9] rounded-full 
                         hover:from-[#a21caf] hover:to-[#cf21c3] transition-all duration-300 
                         shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Let's do it
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-2 text-gray-600 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <User className="w-5 h-5 text-[#cf21c3]" />
            <span className="text-lg">
              <Counter /> helped so far
            </span>
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">
            With{" "}
            <span className="bg-gradient-to-r from-[#cf21c3] to-[#e879f9] bg-clip-text text-transparent">Kayi</span> You
            Can
          </h2>

          <div className="relative w-full">
            {/* background heartbeat waves */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                left: "calc(-50vw + 50%)",
                width: "100vw",
                right: "calc(-50vw + 50%)",
              }}
            >
              <motion.div
                className="absolute"
                style={{
                  background: `linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(207,33,195,0.15) 20%, 
                    rgba(232,121,249,0.25) 40%, 
                    rgba(240,171,252,0.20) 60%, 
                    rgba(192,132,252,0.15) 80%,
                    transparent 100%
                  )`,
                  height: "8px",
                  top: "30%",
                  borderRadius: "4px",
                  filter: "blur(2px)",
                  boxShadow: "0 0 20px rgba(207,33,195,0.3)",
                  width: "100%",
                  left: "0",
                }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 4, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
              />

              <motion.div
                className="absolute"
                style={{
                  background: `linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(162,28,175,0.12) 25%, 
                    rgba(207,33,195,0.18) 50%, 
                    rgba(232,121,249,0.15) 75%, 
                    transparent 100%
                  )`,
                  height: "6px",
                  top: "50%",
                  borderRadius: "3px",
                  filter: "blur(1.5px)",
                  boxShadow: "0 0 15px rgba(207,33,195,0.2)",
                  width: "100%",
                  left: "0",
                }}
                animate={{ x: ["-120%", "120%"] }}
                transition={{ duration: 5, ease: "linear", repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              />

              <motion.div
                className="absolute"
                style={{
                  background: `linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(240,171,252,0.10) 30%, 
                    rgba(232,121,249,0.15) 60%, 
                    rgba(207,33,195,0.12) 90%, 
                    transparent 100%
                  )`,
                  height: "4px",
                  top: "70%",
                  borderRadius: "2px",
                  filter: "blur(1px)",
                  width: "100%",
                  left: "0",
                }}
                animate={{ x: ["-80%", "180%"] }}
                transition={{ duration: 6, ease: "linear", repeat: Number.POSITIVE_INFINITY, delay: 2 }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 relative z-10 px-4 md:px-6">
              {services.map((service, index) => (
                <ServiceCard key={service.title} icon={service.icon} title={service.title} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
