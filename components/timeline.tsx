"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function ProfessionalTimeline() {
  const steps = [
    {
      title: "Discovery",
      description: "Understanding your vision and goals through comprehensive research.",
      duration: "1-2 weeks",
      number: "01",
    },
    {
      title: "Design",
      description: "Creating beautiful, user-centric interfaces with interactive prototypes.",
      duration: "2-3 weeks",
      number: "02",
    },
    {
      title: "Development",
      description: "Building with clean, scalable code using modern technologies with thorough testing.",
      duration: "4-6 weeks",
      number: "03",
    },
    {
      title: "Launch",
      description: "Seamless deployment with ongoing support for continued success.",
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
      <section className="py-12 px-4 bg-white">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-light mb-3 text-gray-700">
                <span className="font-semibold text-[#000000]">Our Process</span>
              </h2>
              <p className="text-sm text-gray-600">A streamlined approach to bringing your ideas to life</p>
            </motion.div>
          </div>

          {/* Mobile Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

            {/* Progress Line */}
            <motion.div
              className="absolute left-6 top-0 w-0.5 bg-[#cf21c3] origin-top"
              animate={{
                height: `${(currentStep / (steps.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => {
                const isActive = index === currentStep
                const isCompleted = index < currentStep

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex items-start"
                  >
                    {/* Dot */}
                    <motion.div
                      onClick={() => handleStepClick(index)}
                      animate={{ scale: isActive ? 1.1 : 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative cursor-pointer z-10 mr-4"
                    >
                      <div
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 bg-white ${
                          isCompleted ? "border-[#cf21c3]" : isActive ? "border-[#cf21c3]" : "border-gray-300"
                        }`}
                      >
                        {isCompleted ? (
                          <div className="w-6 h-6 bg-[#cf21c3] rounded-full flex items-center justify-center">
                            <Check size={12} className="text-white" />
                          </div>
                        ) : (
                          <div className={`w-3 h-3 rounded-full ${isActive ? "bg-[#cf21c3]" : "bg-gray-300"}`} />
                        )}
                      </div>
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      animate={{ scale: isActive ? 1.02 : 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-1 p-4 bg-white rounded-lg shadow-sm border transition-all duration-500 ${
                        isActive ? "border-[#cf21c3]/30 shadow-md" : "border-gray-200"
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
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? "bg-[#cf21c3] scale-125"
                    : index < currentStep
                      ? "bg-[#cf21c3]/60"
                      : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Desktop Layout (original with improvements)
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl lg:text-6xl font-light mb-3 text-gray-700">
              <span className="font-semibold text-[#000000]">Our Process</span>
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              A streamlined approach to bringing your ideas to life
            </p>
          </motion.div>
        </div>

        <div className="timeline-container relative">
          {/* Main Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 transform -translate-y-1/2 z-10" />

          {/* Progress Line */}
          {dotX.length > 0 && (
            <motion.div
              className="absolute top-1/2 h-px bg-[#cf21c3] transform -translate-y-1/2 z-20"
              animate={{
                width: currentStep === 0 ? 0 : dotX[currentStep] - dotX[0],
                x: dotX[0] || 0,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          )}

          {/* Progress Dot */}
          {dotX.length > 0 && (
            <motion.div
              className="absolute top-1/2 w-3 h-3 bg-[#cf21c3] rounded-full transform -translate-y-1/2 z-30"
              animate={{ x: dotX[currentStep] - 6 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          )}

          {/* Timeline Steps */}
          <div className="relative z-40 py-16">
            <div className="grid grid-cols-4 gap-8 lg:gap-16">
              {steps.map((step, index) => {
                const isBelow = index % 2 !== 0
                const isActive = index === currentStep
                const isCompleted = index < currentStep

                const Card = (
                  <motion.div
                    initial={{ opacity: 0, y: isBelow ? 20 : -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: isActive ? 1.02 : 1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-full max-w-xs p-5 bg-white rounded-lg shadow-md border transition-all duration-500 ${
                      isActive ? "border-[#cf21c3]/30 shadow-lg" : "border-gray-200 hover:shadow-lg"
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
                          animate={{ backgroundColor: isActive ? "#cf21c3" : "#d1d5db" }}
                        />
                      </div>
                    )}

                    {/* Dot */}
                    <motion.div
                      ref={(el) => (dotRefs.current[index] = el)}
                      onClick={() => handleStepClick(index)}
                      animate={{ scale: isActive ? 1.1 : 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative cursor-pointer z-50"
                    >
                      <div
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 bg-white ${
                          isCompleted
                            ? "border-[#cf21c3]"
                            : isActive
                              ? "border-[#cf21c3]"
                              : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {isCompleted ? (
                          <div className="w-6 h-6 bg-[#cf21c3] rounded-full flex items-center justify-center">
                            <Check size={12} className="text-white" />
                          </div>
                        ) : (
                          <div className={`w-3 h-3 rounded-full ${isActive ? "bg-[#cf21c3]" : "bg-gray-300"}`} />
                        )}
                      </div>
                    </motion.div>

                    {isBelow && (
                      <div className="mt-20 lg:mt-40">
                        <motion.div
                          className="w-px h-8 mx-auto"
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
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-12 gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => handleStepClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? "bg-[#cf21c3] scale-125"
                  : index < currentStep
                    ? "bg-[#cf21c3]/60"
                    : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
