"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { 
  CpuChipIcon, 
  ChartBarIcon, 
  CodeBracketIcon, 
  UserGroupIcon,
  FilmIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  CircleStackIcon
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
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      })
      setCurrentSlide(index)
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current && isMobile) {
      const scrollPosition = scrollContainerRef.current.scrollLeft
      const slideWidth = scrollContainerRef.current.offsetWidth
      const newSlide = Math.round(scrollPosition / slideWidth)
      setCurrentSlide(newSlide)
    }
  }

  return (
    <section className="py-16 md:py-20 px-4 relative overflow-hidden bg-white">
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Growth Solutions
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="font-bold">Everything</span> your business needs to grow and scale{" "}
            <span className="font-bold">under one roof</span> - no more juggling multiple vendors or wondering who's
            responsible
          </motion.p>
        </motion.div>

        {/* Services Grid with Horizontal Scroll on Mobile */}
        <div className="relative">
          {/* Scroll indicator for mobile */}
          <div className="lg:hidden flex justify-center mb-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
              <span className="text-sm text-gray-600">Swipe to explore</span>
              <svg className="w-4 h-4 animate-bounce-horizontal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex lg:grid lg:grid-cols-4 gap-6 mb-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollBehavior: 'smooth',
            }}
          >
            {services.map((service, index) => {
              const Icon = service.icon
              const isHovered = hoveredIndex === index
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="w-full lg:w-auto flex-shrink-0 snap-start px-4 lg:px-0"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    className={`relative p-6 bg-white/95 backdrop-blur-sm rounded-xl border transition-all duration-500 h-full flex flex-col shadow-md hover:shadow-xl ${
                      isHovered
                        ? "border-[#cf21c3]/40 shadow-lg"
                        : "border-gray-200/60 hover:border-gray-300"
                    }`}
                  >
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0.8, rotate: -10 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.4, delay: index * 0.05 + 0.2 }}
                      viewport={{ once: true }}
                      className="mb-4 flex-shrink-0"
                    >
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
                          isHovered
                            ? "bg-gradient-to-br from-[#cf21c3] to-pink-500 text-white"
                            : "bg-[#cf21c3]/10 text-[#cf21c3]"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 + 0.3 }}
                      viewport={{ once: true }}
                      className="flex-grow flex flex-col"
                    >
                      <h3 className={`text-lg font-bold mb-3 leading-tight flex-shrink-0 ${
                        isHovered ? "text-[#cf21c3]" : "text-gray-800"
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                        {service.description}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Mobile pagination dots */}
          <div className="lg:hidden flex justify-center space-x-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#cf21c3] w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center px-4 mt-10"
        >
          <motion.a
            href="https://calendly.com/saadalii/kayidigital"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#cf21c3] to-[#e879f9] hover:from-[#a21caf] hover:to-[#cf21c3] text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Tell us what you need
            <svg
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
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
        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 1s infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}