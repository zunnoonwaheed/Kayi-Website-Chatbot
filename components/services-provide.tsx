"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import {
  CpuChipIcon,
  CodeBracketIcon,
  UserGroupIcon,
  FilmIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
} from "@heroicons/react/24/outline"

const services = [
  {
    title: "CGI ADS",
    description:
      "High-quality ads don't always need expensive location shoots. With CGI, we create realistic and engaging visuals that capture attention and tell your story in a cost-effective way.",
    icon: FilmIcon,
  },
  {
    title: "PERFORMANCE MARKETING",
    description:
      "We don't chase vanity metrics. Our approach to performance marketing is simple: use your budget efficiently to bring in more qualified customers and measurable growth.",
    icon: RocketLaunchIcon,
  },
  {
    title: "AI BUSINESS AUTOMATION",
    description:
      "Manual tasks slow businesses down. We design AI-driven systems that automate repetitive work, giving you more time to focus on strategy and growth.",
    icon: CpuChipIcon,
  },
  {
    title: "UX/UI DESIGN",
    description:
      "A website should feel effortless to use. We design clean, user-friendly interfaces that make navigation simple and encourage visitors to take action.",
    icon: UserGroupIcon,
  },
  {
    title: "WEB DEVELOPMENT",
    description:
      "Your website is often the first impression of your business. We build fast, secure, and custom web solutions, including Shopify stores, that are built to perform and scale with you.",
    icon: CodeBracketIcon,
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    description:
      "An app should provide value long after the first download. We design mobile experiences that keep users engaged and connected to your brand.",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "AI SAAS SOLUTIONS",
    description:
      "Developing software doesn't have to take years. By integrating AI, we accelerate the process and deliver scalable platforms in a fraction of the traditional time.",
    icon: CloudIcon,
  },
  {
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    description:
      "Every business works differently, and off-the-shelf tools don't always fit. We develop tailored software solutions designed to match your unique workflows and goals.",
    icon: CommandLineIcon,
  },
]

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      // Clamp the index to valid range
      const targetIndex = Math.max(0, Math.min(index, services.length - 1))
      
      // Immediately update the current slide state BEFORE scrolling
      setCurrentSlide(targetIndex)
      
      const scrollPosition = targetIndex * scrollContainerRef.current.offsetWidth
      
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current && isMobile) {
      const scrollPosition = scrollContainerRef.current.scrollLeft
      const slideWidth = scrollContainerRef.current.offsetWidth
      const maxScroll = scrollContainerRef.current.scrollWidth - slideWidth
      
      // More accurate slide detection
      let newSlide = Math.round(scrollPosition / slideWidth)
      
      // Ensure we don't exceed bounds
      newSlide = Math.max(0, Math.min(newSlide, services.length - 1))
      
      // If we're at the very end of scroll, ensure we're on the last slide
      if (scrollPosition >= maxScroll - 10) {
        newSlide = services.length - 1
      }
      
      // Only update if the slide has actually changed to prevent unnecessary re-renders
      setCurrentSlide(prevSlide => {
        if (prevSlide !== newSlide) {
          return newSlide
        }
        return prevSlide
      })
    }
  }

  return (
    <section className="py-12 md:py-16 px-4 relative overflow-hidden bg-white">
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
            rotate: [0, 180, 360],
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
            rotate: [0, -180, -360],
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
        {/* Header - Reduced height for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="lg:inline">Let's Build Something Amazing</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="font-bold">Everything</span> your business needs to grow and scale{" "}
            <span className="font-bold">under one roof</span>
          </motion.p>
        </motion.div>

        {/* Services Grid - Fixed to prevent vertical movement */}
        <div className="relative">
          {/* Desktop Grid - Left aligned content */}
          <div className="hidden lg:grid grid-cols-4 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon
              const isHovered = hoveredIndex === index
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="flex justify-center"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      transition: { 
                        duration: 0.4, 
                        ease: "easeOut",
                      },
                    }}
                    className={`relative p-6 bg-white/95 backdrop-blur-sm rounded-3xl border transition-all duration-500 h-full flex flex-col shadow-md hover:shadow-2xl w-full ${
                      isHovered ? "border-[#cf21c3]/40 shadow-lg" : "border-gray-200/60 hover:border-gray-300"
                    }`}
                    style={{ 
                      minHeight: "380px", // Reduced height for better mobile view
                    }}
                  >
                    {/* Rounded top section with gradient background */}
                    <motion.div
                      initial={{ scale: 0.8, rotate: -10 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: 8,
                      }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.05 + 0.2,
                        type: "spring",
                        stiffness: 300
                      }}
                      viewport={{ once: true }}
                      className="mb-4 flex-shrink-0 flex justify-start" // Changed to justify-start for left alignment
                    >
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 transform ${
                          isHovered
                            ? "bg-gradient-to-br from-[#cf21c3] to-pink-500 text-white shadow-lg"
                            : "bg-[#cf21c3]/10 text-[#cf21c3] hover:bg-[#cf21c3]/15"
                        }`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                    </motion.div>

                    {/* Content section - Left aligned */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.05 + 0.3 }}
                      viewport={{ once: true }}
                      className="flex-grow flex flex-col text-left"
                    >
                      <h3
                        className={`text-lg font-bold mb-3 leading-tight flex-shrink-0 transition-colors duration-300 ${
                          isHovered ? "text-[#cf21c3]" : "text-gray-800"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed flex-grow text-left">
                        {service.description}
                      </p>
                    </motion.div>

                    {/* Subtle hover glow effect */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      animate={{
                        opacity: isHovered ? 0.08 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        background: `linear-gradient(135deg, #cf21c3, #e879f9)`,
                        borderRadius: "2rem",
                      }}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden relative">
            {/* Navigation arrows with strict visibility control */}
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 z-20 flex justify-between items-center px-2 pointer-events-none">
              {/* Left arrow - strictly only shows when currentSlide > 0 */}
              <div className="flex-shrink-0">
                {currentSlide > 0 ? (
                  <button 
                    onClick={(e) => {
                      e.preventDefault()
                      const newIndex = currentSlide - 1
                      scrollToSlide(newIndex)
                    }}
                    className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg pointer-events-auto text-[#cf21c3] hover:bg-white transition-all duration-200 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                ) : (
                  <div className="p-2 w-9 h-9"></div>
                )}
              </div>
              
              {/* Right arrow - strictly only shows when currentSlide < services.length - 1 */}
              <div className="flex-shrink-0">
                {currentSlide < services.length - 1 ? (
                  <button 
                    onClick={(e) => {
                      e.preventDefault()
                      const newIndex = currentSlide + 1
                      scrollToSlide(newIndex)
                    }}
                    className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg pointer-events-auto text-[#cf21c3] hover:bg-white transition-all duration-200 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <div className="p-2 w-9 h-9"></div>
                )}
              </div>
            </div>

            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{
                scrollBehavior: "smooth",
              }}
            >
              {/* Add padding to ensure first and last cards are centered */}
              <div className="flex-shrink-0 w-[calc((100vw-320px)/2)]" />
              
              {services.map((service, index) => {
                const Icon = service.icon
                const isHovered = hoveredIndex === index
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-[85vw] sm:w-[70vw] flex-shrink-0 snap-center flex justify-center px-2"
                    style={{ scrollSnapAlign: "center" }}
                  >
                    <div
                      className={`relative p-6 bg-white/95 backdrop-blur-sm rounded-3xl border transition-all duration-500 h-full flex flex-col shadow-md hover:shadow-2xl w-full ${
                        isHovered ? "border-[#cf21c3]/40 shadow-lg" : "border-gray-200/60 hover:border-gray-300"
                      }`}
                      style={{ 
                        minHeight: "360px", // Reduced height for mobile
                      }}
                    >
                      {/* Rounded top section with gradient background */}
                      <div className="mb-4 flex-shrink-0 flex justify-center">
                        <div
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 transform ${
                            isHovered
                              ? "bg-gradient-to-br from-[#cf21c3] to-pink-500 text-white shadow-lg"
                              : "bg-[#cf21c3]/10 text-[#cf21c3] hover:bg-[#cf21c3]/15"
                          }`}
                        >
                          <Icon className="w-7 h-7" />
                        </div>
                      </div>

                      {/* Content section - Centered for mobile */}
                      <div className="flex-grow flex flex-col text-center lg:text-left">
                        <h3
                          className={`text-lg font-bold mb-3 leading-tight flex-shrink-0 transition-colors duration-300 ${
                            isHovered ? "text-[#cf21c3]" : "text-gray-800"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed flex-grow text-center lg:text-left">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
              
              {/* Add padding to ensure first and last cards are centered */}
              <div className="flex-shrink-0 w-[calc((100vw-320px)/2)]" />
            </div>

            {/* Mobile pagination dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-[#cf21c3] w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center px-4 mt-8"
        >
          <motion.a
            href="https://calendly.com/saadalii/kayidigital"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#cf21c3] to-[#e879f9] hover:from-[#a21caf] hover:to-[#cf21c3] text-white font-semibold text-base px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300"
          >
            Tell us what you need
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  )
}