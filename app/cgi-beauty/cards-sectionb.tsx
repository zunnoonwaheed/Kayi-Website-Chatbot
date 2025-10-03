"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const services = [
  {
    title: "What is CGI?",
    description: "Think of CGI as digital magic. We use computers to create visuals that look 100% real but exist only in pixels. Your product floating in space? Easy. A car driving on water? Done.",
    image: "/images/cgi1.png",
  },
  {
    title: "Why Choose CGI?",
    description: "No more waiting for perfect weather or renting costly locations. CGI gives you cinematic, stunning, and versatile visuals that make your brand unforgettable without ever breaking the budget.",
    image: "/images/cgi2.png",
  },
  {
    title: "Who is CGI For?",
    description: "Perfect for both product and service businesses. Whether you're selling sneakers or software consulting, CGI helps you visualize your offerings that make people understand and remember your brand.",
    image: "/images/cgi3.png",
  },
]

export default function CardsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll functionality for mobile
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, services.length])

  // Scroll to current slide
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const slideWidth = container.clientWidth
      container.scrollTo({
        left: currentSlide * slideWidth,
        behavior: 'smooth'
      })
    }
  }, [currentSlide])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 7000)
  }

  // Animation variants for scroll animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  }

  const headingWords = ["Why", "CGI", "Ads", "Are", "Game-Changers"]

  return (
    <section className="py-12 md:py-20 px-6 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto relative z-10 pt-8 md:pt-16">
        {/* Section Header with Scroll Animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          {/* Animated Heading */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
            variants={containerVariants}
          >
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={wordVariants}
                className="inline-block mr-2 last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Animated Subtitle */}
          <motion.div
            variants={itemVariants}
            className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="font-bold">Everything</span> you need to know about CGI advertising
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              and why smart brands are making the switch.
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-full snap-center px-2"
              >
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative rounded-2xl shadow-lg overflow-hidden bg-white/90 backdrop-blur-lg">
                    <div className="relative h-60 overflow-hidden -mb-6">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      />
                      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/100 to-transparent" />
                    </div>
                    <div className="p-6">
                      <motion.h3
                        className="text-xl font-bold mb-3 leading-tight"
                        animate={{ color: hoveredIndex === index ? "#cf21c3" : "#1f2937" }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.title}
                      </motion.h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Dot Navigation for Mobile */}
          <div className="flex justify-center mt-6 space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-[#cf21c3] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`relative rounded-2xl shadow-lg overflow-hidden transition-all duration-700
                    bg-white/90 backdrop-blur-lg
                    ${isHovered ? "shadow-2xl" : ""}
                    before:absolute before:inset-x-0 before:top-0 before:h-12 before:bg-gradient-to-b before:from-white/100 before:to-transparent
                  `}
                >
                  {/* Image Section with enhanced bottom blend */}
                  <div className="relative h-60 overflow-hidden -mb-6">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    {/* Taller gradient for perfect blend */}
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/100 to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-bold mb-3 leading-tight"
                      animate={{ color: isHovered ? "#cf21c3" : "#1f2937" }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.title}
                    </motion.h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}