"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion" // Added framer-motion for animations

interface TypewriterEffectProps {
  words: string[]
  className?: string
}

// Moved TypewriterEffect component into the same file
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
    <span className={`inline-block text-[#cf21c3] font-bold ${className}`} style={{ fontWeight: "800" }}>
      {currentText}
    </span>
  )
}

export default function HeroSection() {
  const typingWords = ["Growth", "Results", "Revenue", "Success", "Performance", "Scaling", "Profit", "Impact"]

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <div id="hero-section" className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"></div>
      </div>

      <motion.div
        className="container mx-auto flex flex-col lg:flex-row items-center justify-between pt-8 sm:pt-12 lg:pt-20 relative z-10 gap-4 lg:gap-0 px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="w-full lg:w-[35%] text-center lg:text-left order-1 lg:order-1" variants={fadeInLeft}>
          <div className="mb-6 sm:mb-8">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6"
              variants={fadeInUp}
            >
              Everything Your
              <br />
              Business Needs
              <br />
              For <TypewriterEffect words={typingWords} />
            </motion.h1>

            <motion.p
              className="text-gray-600 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              Your business growth should feel predictable, not like a gamble. We partner with companies who want real
              results they can count on.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12 justify-center lg:justify-start"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="https://calendly.com/saadalii/kayidigital"
              className="bg-black text-white px-6 sm:px-8 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition-transform duration-200"
            >
              Let's do this
            </Link>
          </motion.div>

          <motion.div
            className="bg-black/95 rounded-3xl p-4 sm:p-6 max-w-sm mx-auto lg:mx-0 shadow-2xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {["UI/UX Design", "Web Design", "Social Media", "Mobile Apps", "E-commerce", "Analytics"].map(
                (service, index) => (
                  <motion.span
                    key={service}
                    variants={staggerItem}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-center ${
                      index === 0 || index === 5
                        ? "bg-white text-black"
                        : index === 3
                          ? "bg-black text-white shadow-lg"
                          : "border border-gray-600 text-white"
                    }`}
                  >
                    {service}
                  </motion.span>
                ),
              )}
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="w-full lg:w-[65%] relative order-2 lg:order-2" variants={fadeInRight}>
          <motion.div
            className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 z-20"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-black rounded-full p-3 sm:p-4 border-4 border-white shadow-2xl">
              <div className="text-white text-xs font-bold text-center">
                <div>DISCOVER THE</div>
                <div className="text-white">MAGIC OF UX</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src="/images/hero_banner_desk.jpg"
              alt="Person using VR headset in digital world (Desktop)"
              className="w-full h-auto hidden lg:block"
              loading="eager"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.img
              src="/images/hero_banner_mobile.jpg"
              alt="Person using VR headset in digital world (Mobile)"
              className="w-full h-auto block lg:hidden"
              loading="eager"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <motion.div
            className="absolute bottom-4 right-4 sm:bottom-0 sm:right-4 lg:right-0 bg-black/95 rounded-3xl p-4 sm:p-6 text-white min-w-[180px] sm:min-w-[200px] shadow-2xl border border-gray-800"
            variants={scaleIn}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <motion.div
                  className="text-2xl sm:text-3xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  80+
                </motion.div>
                <div className="text-gray-400 text-xs sm:text-sm">New Users</div>
              </div>
              <div className="flex -space-x-2">
                {[
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg/1200px-Andrzej_Person_Kancelaria_Senatu.jpg",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                ].map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    alt={`User ${index + 1}`}
                    className="w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 border-black"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                  />
                ))}
              </div>
            </div>
            <Link
              href="https://calendly.com/saadalii/kayidigital"
              className="bg-[#cf21c3] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium w-full text-center block hover:bg-[#b91ea8] transition-colors duration-200"
            >
              Join now
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
