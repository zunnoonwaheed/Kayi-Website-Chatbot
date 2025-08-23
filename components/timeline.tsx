"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function SophisticatedTimeline() {
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
    }, 4000)
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

  if (isMobile) {
    return (
      <section className="py-16 px-4 relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/8 via-pink-500/4 to-[#cf21c3]/12" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#cf21c3]/4 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-bl from-[#cf21c3]/3 via-transparent to-pink-500/6" />
          <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/4 via-transparent to-[#cf21c3]/5" />

          {/* Seamless edge gradients */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#cf21c3]/12 via-pink-500/6 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#cf21c3]/12 via-pink-500/6 to-transparent" />
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#cf21c3]/10 via-pink-500/5 to-transparent" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#cf21c3]/10 via-pink-500/5 to-transparent" />

          {/* Flowing wave gradients */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#cf21c3]/8 to-transparent"
            animate={{
              x: ["-50%", "50%"],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-l from-transparent via-pink-500/6 to-transparent"
            animate={{
              x: ["50%", "-50%"],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 8,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#cf21c3]/5 to-transparent"
            animate={{
              y: ["-30%", "30%"],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 35,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 15,
            }}
          />

          {/* Organic floating gradients that blend naturally */}
          <motion.div
            className="absolute top-1/6 left-1/6 w-96 h-96 bg-gradient-radial from-[#cf21c3]/15 via-pink-500/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 0.8, 0.5],
              x: [0, 60, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/6 right-1/6 w-[32rem] h-[32rem] bg-gradient-radial from-pink-500/12 via-[#cf21c3]/8 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.4, 0.7, 0.4],
              x: [0, -80, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 7,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-[#cf21c3]/6 via-pink-500/4 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 40,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 12,
            }}
          />

          {/* Subtle mesh gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/3 via-transparent to-pink-500/4 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/2 via-transparent to-[#cf21c3]/3 mix-blend-screen opacity-50" />
        </div>

        <div className="max-w-lg mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="text-3xl font-bold mb-4 text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Process
            </motion.h2>
            <motion.p
              className="text-slate-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              From discovery to growth, we guide your journey with proven systems
            </motion.p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200" />
            <motion.div
              className="absolute left-6 top-0 w-px bg-gradient-to-b from-[#cf21c3] to-pink-500 origin-top"
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
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4, ease: "easeOut" }}
                    className="relative flex items-start"
                  >
                    <motion.div
                      onClick={() => handleStepClick(index)}
                      animate={{ scale: isActive ? 1.1 : 1 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative cursor-pointer z-10 mr-4"
                    >
                      <div
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 backdrop-blur-sm ${
                          isCompleted || isActive
                            ? "border-[#cf21c3] bg-white shadow-lg shadow-[#cf21c3]/20"
                            : "border-slate-300 bg-white/80"
                        }`}
                      >
                        {isCompleted ? (
                          <motion.div
                            className="w-6 h-6 bg-gradient-to-br from-[#cf21c3] to-pink-500 rounded-full flex items-center justify-center"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                          >
                            <Check size={12} className="text-white" />
                          </motion.div>
                        ) : (
                          <motion.div
                            className={`w-3 h-3 rounded-full ${
                              isActive ? "bg-gradient-to-br from-[#cf21c3] to-pink-500" : "bg-slate-300"
                            }`}
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
                      className={`flex-1 p-5 bg-white/80 backdrop-blur-sm rounded-xl border transition-all duration-500 ${
                        isActive
                          ? "border-[#cf21c3]/20 shadow-lg shadow-[#cf21c3]/10"
                          : "border-slate-200 hover:shadow-md hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-[#cf21c3] text-sm font-semibold">{step.number}</span>
                          <span className="font-semibold text-slate-800">{step.title}</span>
                        </div>
                        <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600 font-medium whitespace-nowrap">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">{step.description}</p>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-slate-500">
                            {isCompleted ? "Completed" : isActive ? "In Progress" : "Upcoming"}
                          </span>
                        </div>
                        <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${
                              isCompleted || isActive ? "bg-gradient-to-r from-[#cf21c3] to-pink-500" : "bg-slate-200"
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

          <div className="flex justify-center mt-8 gap-2">
            {steps.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleStepClick(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? "bg-gradient-to-r from-[#cf21c3] to-pink-500 scale-125"
                    : index < currentStep
                      ? "bg-[#cf21c3]/70"
                      : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        {/* Base gradient layers that flow seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/6 via-pink-500/3 to-[#cf21c3]/8" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#cf21c3]/4 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-bl from-[#cf21c3]/3 via-transparent to-pink-500/6" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/4 via-transparent to-[#cf21c3]/5" />

        {/* Seamless edge gradients */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#cf21c3]/12 via-pink-500/6 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#cf21c3]/12 via-pink-500/6 to-transparent" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#cf21c3]/10 via-pink-500/5 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#cf21c3]/10 via-pink-500/5 to-transparent" />

        {/* Flowing wave gradients */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#cf21c3]/8 to-transparent"
          animate={{
            x: ["-50%", "50%"],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-l from-transparent via-pink-500/6 to-transparent"
          animate={{
            x: ["50%", "-50%"],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 8,
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#cf21c3]/5 to-transparent"
          animate={{
            y: ["-30%", "30%"],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 15,
          }}
        />

        {/* Organic floating gradients that blend naturally */}
        <motion.div
          className="absolute top-1/6 left-1/6 w-96 h-96 bg-gradient-radial from-[#cf21c3]/15 via-pink-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.8, 0.5],
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/6 right-1/6 w-[32rem] h-[32rem] bg-gradient-radial from-pink-500/12 via-[#cf21c3]/8 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 7,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-[#cf21c3]/6 via-pink-500/4 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 12,
          }}
        />

        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/3 via-transparent to-pink-500/4 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/2 via-transparent to-[#cf21c3]/3 mix-blend-screen opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-4 text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Process
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From discovery to growth, we guide your journey through proven systems that deliver sustainable results
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
            className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent transform -translate-y-1/2 z-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
          />

          {dotX.length > 0 && (
            <>
              <motion.div
                className="absolute top-1/2 h-px bg-gradient-to-r from-[#cf21c3] to-pink-500 transform -translate-y-1/2 z-20"
                animate={{
                  width: currentStep === 0 ? 0 : dotX[currentStep] - dotX[0],
                  x: dotX[0] || 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/2 w-3 h-3 bg-gradient-to-br from-[#cf21c3] to-pink-500 rounded-full transform -translate-y-1/2 z-30 shadow-lg shadow-[#cf21c3]/30"
                animate={{ x: dotX[currentStep] - 6 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#cf21c3]/40"
                  animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
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
                    className={`w-full max-w-xs p-6 bg-white/80 backdrop-blur-sm rounded-xl border transition-all duration-500 ${
                      isActive
                        ? "border-[#cf21c3]/20 shadow-xl shadow-[#cf21c3]/10"
                        : "border-slate-200 hover:shadow-lg hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[#cf21c3] font-semibold">{step.number}</span>
                        <span className="text-lg font-semibold text-slate-800">{step.title}</span>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-[#cf21c3]/10 to-pink-100 text-slate-700 font-medium whitespace-nowrap">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{step.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-500">
                          {isCompleted ? "Completed" : isActive ? "In Progress" : "Upcoming"}
                        </span>
                      </div>
                      <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${
                            isCompleted || isActive ? "bg-gradient-to-r from-[#cf21c3] to-pink-500" : "bg-slate-200"
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
                          className="w-px h-8 mx-auto mt-4"
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                          animate={{
                            backgroundColor: isActive ? "#cf21c3" : "#cbd5e1",
                          }}
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
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 backdrop-blur-sm ${
                          isCompleted || isActive
                            ? "border-[#cf21c3] bg-white shadow-xl shadow-[#cf21c3]/20"
                            : "border-slate-300 bg-white/80 hover:border-slate-400"
                        }`}
                      >
                        {isCompleted ? (
                          <motion.div
                            className="w-6 h-6 bg-gradient-to-br from-[#cf21c3] to-pink-500 rounded-full flex items-center justify-center"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                          >
                            <Check size={12} className="text-white" />
                          </motion.div>
                        ) : (
                          <motion.div
                            className={`w-3 h-3 rounded-full ${
                              isActive ? "bg-gradient-to-br from-[#cf21c3] to-pink-500" : "bg-slate-300"
                            }`}
                            animate={isActive ? { scale: [1, 1.3, 1] } : {}}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          />
                        )}
                      </div>
                      {(isActive || isCompleted) && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-[#cf21c3]/30"
                          animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                      )}
                    </motion.div>

                    {isBelow && (
                      <div className="mt-20 lg:mt-40">
                        <motion.div
                          className="w-px h-8 mx-auto mb-4"
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                          animate={{
                            backgroundColor: isActive ? "#cf21c3" : "#cbd5e1",
                          }}
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
          className="flex justify-center mt-12 gap-3"
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
                  ? "bg-gradient-to-r from-[#cf21c3] to-pink-500 scale-125"
                  : index < currentStep
                    ? "bg-[#cf21c3]/70"
                    : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
