"use client"
import { useEffect, useState } from "react"
import { useActionState } from "react"
import { submitContactForm } from "./actions/contact-actions"
import { CheckCircle, Loader2 } from 'lucide-react'
import Image from "next/image"
import { motion } from "framer-motion" // Import motion from framer-motion

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [state, formAction, isPending] = useActionState(submitContactForm, null)
  const [showSuccess, setShowSuccess] = useState(false)

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

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="have-a-project-in-mind-section"
      className="py-8 md:py-16 px-4 bg-white relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Subtle Animated Background Layer - Reverted to pink/purple tones with low opacity for visibility */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-pink-500/15 to-[#cf21c3]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-l from-[#cf21c3]/10 to-pink-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-600/10 to-[#cf21c3]/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-tr from-[#cf21c3]/10 to-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      </div>

      {/* Background Pattern - Reverted to blue/purple/pink tones with low opacity for visibility */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-8"
          >
            Have A Project In Mind? 👋
          </motion.h2>
          {/* Animated Arrow */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div
              className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
            >
              <div className="relative">
                <Image
                  src="/images/purple-arrow.png"
                  alt="Decorative arrow pointing to form"
                  width={128}
                  height={96}
                  className="w-24 md:w-32 h-20 md:h-24 object-contain animate-bounce"
                  style={{
                    filter: "grayscale(100%)",
                    animationDuration: "2s",
                    animationIterationCount: "infinite",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-6xl mx-auto">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden md:block relative"
          >
            <div className="w-60 md:w-72 h-[500px] md:h-[580px] bg-black rounded-[3.5rem] p-3 shadow-xl md:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-black rounded-[3rem] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-[3rem]"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Kayi Digital Logo"
                    width={120}
                    height={120}
                    className="w-30 h-30 object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="relative w-full max-w-[750px]"
          >
            <div className="relative w-full mb-6 md:mb-8">
              <div className="w-full bg-black rounded-xl md:rounded-2xl p-2 md:p-4 shadow-xl md:shadow-2xl mx-auto">
                <div className="w-full h-full bg-white rounded-lg md:rounded-xl p-4 md:p-6 lg:p-10 relative overflow-hidden min-h-[500px] md:min-h-[520px]">
                  {/* Success Message */}
                  {showSuccess && state?.success && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center"
                    >
                      <div className="text-center p-8">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You! 🎉</h3>
                        <p className="text-gray-600 text-lg mb-6 max-w-md">
                          Your message has been sent successfully. We'll get back to you shortly!
                        </p>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <p className="text-green-800 text-sm">
                            ✅ Confirmation email sent to your inbox
                            <br />✅ Our team will review your inquiry within 24 hours
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {/* Error Message */}
                  {state && !state.success && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg"
                    >
                      <p className="text-red-800 text-sm">{state.message}</p>
                    </motion.div>
                  )}
                  <form action={formAction} className="space-y-3 md:space-y-4 relative z-10 h-full flex flex-col">
                    <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.8 }}>
                      <input
                        type="text"
                        name="name"
                        placeholder="What's your name?"
                        required
                        disabled={isPending}
                        className="w-full px-4 md:px-5 py-3 md:py-4 border border-gray-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf21c3] bg-gray-50/50 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.9 }}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        disabled={isPending}
                        className="w-full px-4 md:px-5 py-3 md:py-4 border border-gray-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf21c3] bg-gray-50/50 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 1.0 }} className="group relative">
                      <select
                        name="topic"
                        required
                        disabled={isPending}
                        className="w-full px-4 md:px-5 py-3 md:py-4 border border-gray-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf21c3] text-gray-500 bg-gray-50/50 backdrop-blur-sm appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">Select a Discussion Topic</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Consultation">Consultation</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                      </select>
                      <div className="absolute inset-y-0 right-3 md:right-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </motion.div>
                    <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 1.1 }}>
                      <input
                        type="text"
                        name="budget"
                        placeholder="What's your budget?"
                        disabled={isPending}
                        className="w-full px-4 md:px-5 py-3 md:py-4 border border-gray-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf21c3] bg-gray-50/50 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 1.2 }} className="group flex-1">
                      <textarea
                        name="description"
                        placeholder="A brief description about your project/request/consultation"
                        rows={3}
                        required
                        disabled={isPending}
                        className="w-full h-full px-4 md:px-5 py-3 md:py-4 border border-gray-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf21c3] resize-none bg-gray-50/50 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 1.3 }} className="pt-2 md:pt-4">
                      <button
                        type="submit"
                        disabled={isPending}
                        className="w-full py-3 md:py-4 px-4 md:px-6 bg-[#cf21c3] text-white font-semibold rounded-lg md:rounded-xl hover:bg-[#b91db0] transition-all duration-300 shadow-md md:shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isPending ? (
                          <span className="flex items-center justify-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                          </span>
                        ) : (
                          <span className="relative z-10 text-sm md:text-base">Submit</span>
                        )}
                      </button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
        .animate-pulse {
          animation: pulse 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
