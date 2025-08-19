"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function ProfessionalTimeline() {
  const steps = [
    {
      title: "Discovery",
      description: "We understand where you are and where you want to go.",
      duration: "1-2 weeks",
      number: "01",
    },
    {
      title: "Strategy",
      description: "We map out exactly how we're going to get you there.",
      duration: "2-3 weeks",
      number: "02",
    },
    {
      title: "Implementation",
      description: "This is where we actually build what you need.",
      duration: "4-6 weeks",
      number: "03",
    },
    {
      title: "Growth",
      description: "We stay involved to make sure everything keeps working well.",
      duration: "Ongoing",
      number: "04",
    },
  ]
  const [currentStep, setCurrentStep] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])
  const [dotX, setDotX] = useState<number[]>([])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [steps.length])

  useEffect(() => {
    if (isMobile) return
    const updatePositions = () => {
      const positions = dotRefs.current.map((dot) => {
        if (dot) {
          const rect = dot.getBoundingClientRect()
          const containerRect = dot.closest(".timeline-container")?.getBoundingClientRect()
          return containerRect ? rect.left - containerRect.left + rect.width / 2 : 0
        }
        return 0
      })
      setDotX(positions)
    }
    updatePositions()
    window.addEventListener("resize", updatePositions)
    return () => window.removeEventListener("resize", updatePositions)
  }, [isMobile])

  const handleStepClick = (index: number) => {
    setCurrentStep(index)
  }

  // Mobile Layout
  if (isMobile) {
    return (
      <section id="our-process-section" className="py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: `linear-gradient(135deg, 
                rgba(207, 33, 195, 0.4) 0%, 
                rgba(255, 255, 255, 0.9) 30%, 
                rgba(207, 33, 195, 0.1) 60%,
                rgba(255, 255, 255, 0.9) 80%,
                rgba(207, 33, 195, 0.3) 100%)`,
              animation: "subtleFlow 15s ease-in-out infinite",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(ellipse at 20% 50%, 
                rgba(207, 33, 195, 0.4) 0%, 
                transparent 50%), 
                radial-gradient(ellipse at 80% 50%, 
                rgba(207, 33, 195, 0.2) 0%, 
                transparent 50%)`,
              animation: "subtleFlow 20s ease-in-out infinite reverse",
            }}
          />
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#cf21c3]/20 rounded-full"
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#cf21c3]/15 rounded-full"
            animate={{
              y: [10, -10, 10],
              x: [5, -5, 5],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <style jsx>{`
          @keyframes subtleFlow {
            0%, 100% { 
              background: linear-gradient(135deg, 
                rgba(207, 33, 195, 0.4) 0%, 
                rgba(255, 255, 255, 0.9) 30%, 
                rgba(207, 33, 195, 0.1) 60%,
                rgba(255, 255, 255, 0.9) 80%,
                rgba(207, 33, 195, 0.3) 100%);
            }
            25% { 
              background: linear-gradient(225deg, 
                rgba(207, 33, 195, 0.3) 0%, 
                rgba(255, 255, 255, 0.9) 40%, 
                rgba(207, 33, 195, 0.4) 80%,
                rgba(255, 255, 255, 0.9) 100%);
            }
            50% { 
              background: linear-gradient(315deg, 
                rgba(207, 33, 195, 0.2) 0%, 
                rgba(255, 255, 255, 0.9) 50%, 
                rgba(207, 33, 195, 0.4) 100%);
            }
            75% { 
              background: linear-gradient(45deg, 
                rgba(207, 33, 195, 0.4) 0%, 
                rgba(255, 255, 255, 0.9) 30%, 
                rgba(207, 33, 195, 0.2) 70%,
                rgba(255, 255, 255, 0.9) 100%);
            }
          }
        `}</style>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#cf21c3]/40 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              repeatDelay: 3,
            }}
          />
          <motion.div
            className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#cf21c3]/25 to-transparent"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              repeatDelay: 5,
            }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `linear-gradient(45deg, transparent 49%, rgba(207, 33, 195, 0.1) 50%, transparent 51%)`,
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-lg mx-auto relative z-10">
          <div className="text-center mb-12">
            <motion.div
              className="motion.div"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2
                className="text-4xl font-light mb-3 text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.span
                  className="font-semibold text-[#000000]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 200 }}
                >
                  Our Process
                </motion.span>
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                From initial discovery to ongoing <span className="font-bold">optimization</span>, we guide your
                business through <span className="font-bold">proven systems</span> that deliver sustainable growth
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
            <motion.div
              className="absolute left-6 top-0 w-0.5 bg-[#cf21c3] origin-top shadow-[0_0_10px_rgba(207,33,195,0.5)]"
              initial={{ height: 0 }}
              whileInView={{ height: `${(currentStep / (steps.length - 1)) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />
            <div className="space-y-8">
              {steps.map((step, index) => {
                const isActive = index === currentStep
                const isCompleted = index < currentStep
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4, ease: "easeOut" }}
                    className="relative flex items-start"
                  >
                    <motion.div
                      onClick={() => handleStepClick(index)}
                      animate={{
                        scale: isActive ? 1.1 : 1,
                      }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative cursor-pointer z-10 mr-4"
                    >
                      <div
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 bg-white ${
                          isCompleted
                            ? "border-[#cf21c3] shadow-[0_0_15px_rgba(207,33,195,0.3)]"
                            : isActive
                              ? "border-[#cf21c3] shadow-[0_0_15px_rgba(207,33,195,0.3)]"
                              : "border-gray-300"
                        }`}
                      >
                        {isCompleted ? (
                          <motion.div
                            className="w-6 h-6 bg-[#cf21c3] rounded-full flex items-center justify-center"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                          >
                            <Check size={12} className="text-white" />
                          </motion.div>
                        ) : (
                          <motion.div
                            className={`w-3 h-3 rounded-full ${isActive ? "bg-[#cf21c3]" : "bg-gray-300"}`}
                            animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          />
                        )}
                      </div>
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-[#cf21c3]/30"
                          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                      )}
                    </motion.div>
                    <motion.div
                      animate={{ scale: isActive ? 1.02 : 1 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-1 p-4 bg-white rounded-lg shadow-sm border transition-all duration-500 ${
                        isActive
                          ? "border-[#cf21c3]/30 shadow-md bg-gradient-to-br from-white to-[#cf21c3]/5"
                          : "border-gray-200 hover:shadow-lg"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[#cf21c3] text-sm font-bold">{step.number}</span>
                          <span className="font-semibold text-gray-800 text-base">{step.title}</span>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded font-medium ${
                            isActive ? "bg-[#cf21c3]/10 text-[#cf21c3]" : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{step.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-gray-500">
                            {isCompleted ? "Completed" : isActive ? "In Progress" : "Upcoming"}
                          </span>
                          <span className="text-xs text-gray-400">
                            {isCompleted ? "100%" : isActive ? "70%" : "0%"}
                          </span>
                        </div>
                        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${
                              isCompleted ? "bg-[#cf21c3]" : isActive ? "bg-[#cf21c3]" : "bg-gray-200"
                            }`}
                            initial={{ width: "0%" }}
                            animate={{
                              width: isCompleted ? "100%" : isActive ? "70%" : "0%",
                            }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {steps.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleStepClick(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? "bg-[#cf21c3] scale-125 shadow-[0_0_8px_rgba(207,33,195,0.5)]"
                    : index < currentStep
                      ? "bg-[#cf21c3]/60"
                      : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <motion.a
              href="https://calendly.com/saadalii/kayidigital"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#cf21c3] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#b91aad] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(207,33,195,0.3)]"
            >
              Book a Free Consultation
            </motion.a>
          </div>
        </div>
      </section>
    )
  }

  // Desktop Layout
  return (
    <section id="our-process-section" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            background: `linear-gradient(135deg, 
              rgba(207, 33, 195, 0.4) 0%, 
              rgba(255, 255, 255, 0.9) 25%, 
              rgba(207, 33, 195, 0.15) 50%,
              rgba(255, 255, 255, 0.9) 75%,
              rgba(207, 33, 195, 0.3) 100%)`,
            animation: "subtleFlowDesktop 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background: `radial-gradient(ellipse at 30% 30%, 
              rgba(207, 33, 195, 0.4) 0%, 
              transparent 60%), 
              radial-gradient(ellipse at 70% 70%, 
              rgba(207, 33, 195, 0.2) 0%, 
              transparent 60%)`,
            animation: "subtleFlowDesktop 25s ease-in-out infinite reverse",
          }}
        />
        <motion.div
          className="absolute top-1/4 left-1/6 w-3 h-3 bg-[#cf21c3]/15 rounded-full"
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/6 w-4 h-4 bg-[#cf21c3]/10 rounded-full"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1, 0.7, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#cf21c3]/20 rounded-full"
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <style jsx>{`
        @keyframes subtleFlowDesktop {
          0%, 100% { 
            background: linear-gradient(135deg, 
              rgba(207, 33, 195, 0.4) 0%, 
              rgba(255, 255, 255, 0.9) 25%, 
              rgba(207, 33, 195, 0.15) 50%,
              rgba(255, 255, 255, 0.9) 75%,
              rgba(207, 33, 195, 0.3) 100%);
          }
          25% { 
            background: linear-gradient(225deg, 
              rgba(207, 33, 195, 0.3) 0%, 
              rgba(255, 255, 255, 0.9) 30%, 
              rgba(207, 33, 195, 0.4) 60%,
              rgba(255, 255, 255, 0.9) 85%,
              rgba(207, 33, 195, 0.2) 100%);
          }
          50% { 
            background: linear-gradient(315deg, 
              rgba(207, 33, 195, 0.2) 0%, 
              rgba(255, 255, 255, 0.9) 35%, 
              rgba(207, 33, 195, 0.4) 70%,
              rgba(255, 255, 255, 0.9) 100%);
          }
          75% { 
            background: linear-gradient(45deg, 
              rgba(207, 33, 195, 0.4) 0%, 
              rgba(255, 255, 255, 0.9) 20%, 
              rgba(207, 33, 195, 0.25) 50%,
              rgba(255, 255, 255, 0.9) 80%,
              rgba(207, 33, 195, 0.2) 100%);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-light mb-3 text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="font-semibold text-[#000000]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 150 }}
            >
              Our Process
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From initial discovery to ongoing <span className="font-bold">optimization</span>, we guide your business
            through <span className="font-bold">proven systems</span> that deliver sustainable growth
          </motion.p>
        </motion.div>

        <motion.div
          className="timeline-container relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 transform -translate-y-1/2 z-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
          />

          {dotX.length > 0 && (
            <>
              <motion.div
                className="absolute top-1/2 h-px bg-[#cf21c3] transform -translate-y-1/2 z-20 shadow-[0_0_10px_rgba(207,33,195,0.5)]"
                animate={{
                  width: currentStep === 0 ? 0 : dotX[currentStep] - dotX[0],
                  x: dotX[0] || 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/2 w-3 h-3 bg-[#cf21c3] rounded-full transform -translate-y-1/2 z-30 shadow-[0_0_15px_rgba(207,33,195,0.6)]"
                animate={{ x: dotX[currentStep] - 6 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#cf21c3]/40"
                  animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
            </>
          )}
          <div className="relative z-40 py-16">
            <div className="grid grid-cols-4 gap-8 lg:gap-16">
              {steps.map((step, index) => {
                const isBelow = index % 2 !== 0
                const isActive = index === currentStep
                const isCompleted = index < currentStep

                const Card = (
                  <motion.div
                    initial={{ opacity: 0, y: isBelow ? 40 : -40, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: isActive ? 1.02 : 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.2 + 0.6,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.05, y: isBelow ? -8 : 8 }}
                    className={`w-full max-w-xs p-5 bg-white rounded-lg shadow-sm border transition-all duration-500 ${
                      isActive
                        ? "border-[#cf21c3]/30 shadow-lg bg-gradient-to-br from-white to-[#cf21c3]/5"
                        : "border-gray-200 hover:shadow-lg hover:border-[#cf21c3]/20"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                        <span className="text-[#cf21c3] text-base font-bold">{step.number}</span>
                        <span>{step.title}</span>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded font-medium ${
                          isActive ? "bg-[#cf21c3]/10 text-[#cf21c3]" : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{step.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-500">
                          {isCompleted ? "Completed" : isActive ? "In Progress" : "Upcoming"}
                        </span>
                        <span className="text-xs text-gray-400">{isCompleted ? "100%" : isActive ? "70%" : "0%"}</span>
                      </div>
                      <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${
                            isCompleted ? "bg-[#cf21c3]" : isActive ? "bg-[#cf21c3]" : "bg-gray-200"
                          }`}
                          initial={{ width: "0%" }}
                          animate={{
                            width: isCompleted ? "100%" : isActive ? "70%" : "0%",
                          }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )

                return (
                  <div key={index} className="relative flex flex-col items-center">
                    {!isBelow && (
                      <div className="mb-20 lg:mb-40">
                        {Card}
                        <motion.div
                          className="w-px h-8 mx-auto"
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                          animate={{ backgroundColor: isActive ? "#cf21c3" : "#d1d5db" }}
                        />
                      </div>
                    )}

                    <motion.div
                      ref={(el) => (dotRefs.current[index] = el)}
                      onClick={() => handleStepClick(index)}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: isActive ? 1.1 : 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: index * 0.15 + 0.7,
                      }}
                      whileHover={{ scale: 1.3 }}
                      className="relative cursor-pointer z-50"
                    >
                      <div
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 bg-white ${
                          isCompleted
                            ? "border-[#cf21c3] shadow-[0_0_20px_rgba(207,33,195,0.4)]"
                            : isActive
                              ? "border-[#cf21c3] shadow-[0_0_20px_rgba(207,33,195,0.4)]"
                              : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {isCompleted ? (
                          <motion.div
                            className="w-6 h-6 bg-[#cf21c3] rounded-full flex items-center justify-center"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                          >
                            <Check size={12} className="text-white" />
                          </motion.div>
                        ) : (
                          <motion.div
                            className={`w-3 h-3 rounded-full ${isActive ? "bg-[#cf21c3]" : "bg-gray-300"}`}
                            animate={isActive ? { scale: [1, 1.3, 1] } : {}}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          />
                        )}
                      </div>
                      {(isActive || isCompleted) && (
                        <>
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-[#cf21c3]/30"
                            animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          />
                          <motion.div
                            className="absolute inset-0 rounded-full border border-[#cf21c3]/20"
                            animate={{ scale: [1, 2.2], opacity: [0.3, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                          />
                        </>
                      )}
                    </motion.div>

                    {isBelow && (
                      <div className="mt-20 lg:mt-40">
                        <motion.div
                          className="w-px h-8 mx-auto"
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                          animate={{ backgroundColor: isActive ? "#cf21c3" : "#d1d5db" }}
                        />
                        {Card}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center mt-12 gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {steps.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleStepClick(index)}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 1.3, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? "bg-[#cf21c3] scale-125 shadow-[0_0_10px_rgba(207,33,195,0.6)]"
                  : index < currentStep
                    ? "bg-[#cf21c3]/60"
                    : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.a
            href="https://calendly.com/saadalii/kayidigital"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#cf21c3] text-white text-base font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#b91aad] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(207,33,195,0.4)]"
          >
            Book a Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
