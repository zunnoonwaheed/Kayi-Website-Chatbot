"use client"
import { useEffect, useState } from "react"
import { useActionState } from "react"
import { submitContactForm } from "./actions/contact-actions"
import { CheckCircle, Loader2 } from "lucide-react"
import Image from "next/image"
import { motion, useInView } from "framer-motion" // Import motion from framer-motion
import { useRef } from "react" // Added useRef for scroll detection

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [state, formAction, isPending] = useActionState(submitContactForm, null)
  const [showSuccess, setShowSuccess] = useState(false)

  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const headingInView = useInView(headingRef, { once: true, margin: "-50px" })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (state?.success) {
      setShowSuccess(true)
      // Reset success message after 5 seconds
      const timer = setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [state])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const formVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      x: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const phoneVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotateY: -15,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.4,
      },
    },
  }

  const headingText = "Have A Project In Mind? 👋"
  const words = headingText.split(" ")

  return (
    <motion.section
      ref={sectionRef}
      id="have-a-project-in-mind-section"
      className="py-8 md:py-16 px-4 bg-white relative overflow-hidden min-h-screen flex items-center"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Subtle Animated Background Layer - Reverted to pink/purple tones with low opacity for visibility */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-pink-500/15 to-[#cf21c3]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-l from-[#cf21c3]/10 to-pink-400/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-600/10 to-[#cf21c3]/8 rounded-full blur-2xl"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-tr from-[#cf21c3]/10 to-pink-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <motion.h2
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-8"
            variants={headingVariants}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-2 md:mr-3"
                whileHover={{
                  scale: 1.1,
                  color: "#cf21c3",
                  transition: { duration: 0.2 },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          {/* Animated Arrow */}
          <motion.div
            className="flex justify-center mb-6 md:mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/purple-arrow.png"
                  alt="Decorative arrow pointing to form"
                  width={128}
                  height={96}
                  className="w-24 md:w-32 h-20 md:h-24 object-contain"
                  style={{
                    filter: "grayscale(100%)",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-6xl mx-auto">
          {/* Phone Mockup */}
          <motion.div
            className="hidden md:block relative"
            variants={phoneVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
          >
            <div className="w-60 md:w-72 h-[500px] md:h-[580px] bg-black rounded-[3.5rem] p-3 shadow-xl md:shadow-2xl">
              <motion.div
                className="w-full h-full bg-black rounded-[3rem] flex items-center justify-center relative overflow-hidden"
                whileHover={{
                  boxShadow: "0 0 30px rgba(207, 33, 195, 0.3)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-[3rem]"></div>
                <motion.div
                  className="relative z-10 flex items-center justify-center"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="Kayi Digital Logo"
                    width={120}
                    height={120}
                    className="w-30 h-30 object-contain"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="relative w-full max-w-[750px]"
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="relative w-full mb-6 md:mb-8">
              <motion.div
                className="w-full bg-black rounded-xl md:rounded-2xl p-2 md:p-4 shadow-xl md:shadow-2xl mx-auto"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="w-full h-full bg-white rounded-lg md:rounded-xl p-4 md:p-6 lg:p-10 relative overflow-hidden min-h-[500px] md:min-h-[520px]">
                  {/* Success Message */}
                  {showSuccess && state?.success && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotateX: 90 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center"
                    >
                      <div className="text-center p-8">
                        <motion.div
                          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 1,
                            ease: "easeInOut",
                          }}
                        >
                          <CheckCircle className="w-10 h-10 text-green-600" />
                        </motion.div>
                        <motion.h3
                          className="text-2xl font-bold text-gray-900 mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          Thank You! 🎉
                        </motion.h3>
                        <motion.p
                          className="text-gray-600 text-lg mb-6 max-w-md"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          Your message has been sent successfully. We'll get back to you shortly!
                        </motion.p>
                        <motion.div
                          className="bg-green-50 border border-green-200 rounded-lg p-4"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <p className="text-green-800 text-sm">
                            ✅ Confirmation email sent to your inbox
                            <br />✅ Our team will review your inquiry within 24 hours
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                  {/* Error Message */}
                  {state && !state.success && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg"
                    >
                      <p className="text-red-800 text-sm">{state.message}</p>
                    </motion.div>
                  )}
                  <motion.form
                    action={formAction}
                    className="space-y-3 md:space-y-4 relative z-10 h-full flex flex-col"
                    variants={formVariants}
                  >
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                      <motion.input
                        type="text"
                        name="name"
                        placeholder="What's your name?"
                        required
                        disabled={isPending}
                        className="w-full px-4 md:px-5 py-3 md:py-4 border border-gray-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf21c3] bg-gray-50/50 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                        whileFocus={{
                          borderColor: "#cf21c3",
                          boxShadow: "0 0 0 3px rgba(207, 33, 195, 0.1)",
                        }}
                      />
                    </motion.div>
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
                      <motion.input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        disabled={isPending}
                        className="w-full px-4 md:px-5 py-3 md:py-4 border border-gray-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf21c3] bg-gray-50/50 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                        whileFocus={{
                          borderColor: "#cf21c3",
                          boxShadow: "0 0 0 3px rgba(207, 33, 195, 0.1)",
                        }}
                      />
                    </motion.div>
                    <motion.div variants={itemVariants} className="group relative" whileHover={{ scale: 1.02 }}>
                      <motion.select
                        name="topic"
                        required
                        disabled={isPending}
                        className="w-full px-4 md:px-5 py-3 md:py-4 border border-gray-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf21c3] text-gray-500 bg-gray-50/50 backdrop-blur-sm appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                        whileFocus={{
                          borderColor: "#cf21c3",
                          boxShadow: "0 0 0 3px rgba(207, 33, 195, 0.1)",
                        }}
                      >
                        <option value="">Select a Discussion Topic</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Consultation">Consultation</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                      </motion.select>
                      <div className="absolute inset-y-0 right-3 md:right-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </motion.div>
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
                      <motion.input
                        type="text"
                        name="budget"
                        placeholder="What's your budget?"
                        disabled={isPending}
                        className="w-full px-4 md:px-5 py-3 md:py-4 border border-gray-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf21c3] bg-gray-50/50 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                        whileFocus={{
                          borderColor: "#cf21c3",
                          boxShadow: "0 0 0 3px rgba(207, 33, 195, 0.1)",
                        }}
                      />
                    </motion.div>
                    <motion.div variants={itemVariants} className="group flex-1" whileHover={{ scale: 1.02 }}>
                      <motion.textarea
                        name="description"
                        placeholder="A brief description about your project/request/consultation"
                        rows={3}
                        required
                        disabled={isPending}
                        className="w-full h-full px-4 md:px-5 py-3 md:py-4 border border-gray-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf21c3] resize-none bg-gray-50/50 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                        whileFocus={{
                          borderColor: "#cf21c3",
                          boxShadow: "0 0 0 3px rgba(207, 33, 195, 0.1)",
                        }}
                      />
                    </motion.div>
                    <motion.div variants={itemVariants} className="pt-2 md:pt-4">
                      <motion.button
                        type="submit"
                        disabled={isPending}
                        className="w-full py-3 md:py-4 px-4 md:px-6 bg-[#cf21c3] text-white font-semibold rounded-lg md:rounded-xl hover:bg-[#b91db0] transition-all duration-300 shadow-md md:shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 20px 25px -5px rgba(207, 33, 195, 0.3)",
                          y: -2,
                        }}
                        whileTap={{ scale: 0.98 }}
                        animate={
                          isPending
                            ? {
                                background: ["#cf21c3", "#b91db0", "#cf21c3"],
                                transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
                              }
                            : {}
                        }
                      >
                        {isPending ? (
                          <motion.span
                            className="flex items-center justify-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                          </motion.span>
                        ) : (
                          <span className="relative z-10 text-sm md:text-base">Submit</span>
                        )}
                      </motion.button>
                    </motion.div>
                  </motion.form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
