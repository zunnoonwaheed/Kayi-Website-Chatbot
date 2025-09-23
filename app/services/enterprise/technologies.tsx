"use client"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

const Technologies = () => {
  const [activeTab, setActiveTab] = useState("Perfumes")
  const [isCTAVisible, setIsCTAVisible] = useState(false)
  const ctaRef = useRef(null)

  const categories = {
    "Perfumes": [
      { src: "/images/Perfume-CGI-1.mp4", alt: "Perfume CGI Ad 1", isVideo: true },
      { src: "/images/Perfume-CGI-2.mp4", alt: "Perfume CGI Ad 2", isVideo: true },
    ],
    "Skincare": [
      { src: "/images/Skincare-CGI-1.mp4", alt: "Skincare CGI Ad 1", isVideo: true },
      { src: "/images/Skincare-CGI-2.mp4", alt: "Skincare CGI Ad 2", isVideo: true },
    ],
    "Shoes": [
      { src: "/images/shoes1.mp4", alt: "Shoes CGI Ad 1", isVideo: true },
      { src: "/images/shoes2.mp4", alt: "Shoes CGI Ad 2", isVideo: true },
    ],
    "Bags": [
      { src: "/images/bag1.mp4", alt: "Bags CGI Ad 1", isVideo: true },
      { src: "/images/bag2.mp4", alt: "Bags CGI Ad 2", isVideo: true },
    ],
    "Food": [
      { src: "/images/food1.mp4", alt: "Food CGI Ad 1", isVideo: true },
      { src: "/images/food2.mp4", alt: "Food CGI Ad 2", isVideo: true },
    ],
    "Accessories": [
      { src: "/images/accessories1.mp4", alt: "Accessories CGI Ad 1", isVideo: true },
      { src: "/images/accessories2.mp4", alt: "Accessories CGI Ad 2", isVideo: true },
    ],
    "Service Based": [
      { src: "/images/service1.mp4", alt: "Service Based CGI Ad 1", isVideo: true },
      { src: "/images/service2.mp4", alt: "Service Based CGI Ad 2", isVideo: true },
    ],
  }

  const tabs = Object.keys(categories)

  // Check if CTA section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCTAVisible(entry.isIntersecting)
      },
      { threshold: 0.5 }
    )

    if (ctaRef.current) {
      observer.observe(ctaRef.current)
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current)
      }
    }
  }, [])

  return (
    <div id="technologies" className="py-20 relative overflow-hidden bg-white">
      {/* Enhanced Gradient Background that flows throughout */}
      <div className="absolute inset-0">
        {/* Base gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/10 via-pink-500/5 to-[#cf21c3]/8" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#cf21c3]/6 to-transparent" />

        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[#cf21c3]/15 via-pink-500/10 to-transparent rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-gradient-radial from-pink-500/12 via-[#cf21c3]/8 to-transparent rounded-full blur-3xl"
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

        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/3 via-transparent to-pink-500/4 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold text-black mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          See CGI Ads from Your Industry
        </motion.h1>
        <motion.p 
          className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Everything you need to know about CGI advertising and why smart brands are making the switch.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-0">
          {/* Mobile Tabs - Horizontal scrollable */}
          <div className="lg:hidden mb-8">
            <div className="flex overflow-x-auto scrollbar-hide space-x-1 pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-shrink-0 px-6 py-3 text-sm font-medium transition-all duration-200 whitespace-nowrap border-b-2 ${
                    activeTab === tab
                      ? "border-[#cf21c3] text-black"
                      : "border-transparent text-gray-700 hover:text-black"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-80">
            <div className="space-y-1">
              {tabs.map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`w-full text-left px-8 py-4 text-lg font-medium transition-all duration-200 rounded-full flex items-center ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-[#cf21c3]/20 to-[#cf21c3]/10 text-black shadow-md"
                      : "text-gray-700 hover:bg-white/50"
                  }`}
                >
                  {tab}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 lg:pl-12">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Mobile - Horizontal Scroll */}
              <div className="lg:hidden">
                <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4">
                  {categories[activeTab].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex-shrink-0 w-80" // Fixed width for consistent sizing
                    >
                      <div className="relative aspect-[9/16] rounded-xl overflow-hidden">
                        <video
                          src={item.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            const fallback = e.target.nextSibling;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div 
                          className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/20 to-pink-500/20 items-center justify-center text-gray-600 hidden"
                        >
                          <div className="text-center">
                            <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mb-2 mx-auto">
                              <svg className="w-6 h-6 text-[#cf21c3]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8 5v10l8-5-8-5z"/>
                              </svg>
                            </div>
                            <p className="text-sm font-medium">{item.alt}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Desktop - Grid Layout */}
              <div className="hidden lg:grid grid-cols-2 gap-6">
                {categories[activeTab].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden group"
                  >
                    <div className="relative aspect-[9/16] rounded-xl overflow-hidden mx-auto max-w-sm">
                      <video
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const fallback = e.target.nextSibling;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div 
                         className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/20 to-pink-500/20 items-center justify-center text-gray-600 hidden"
                      >
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mb-2 mx-auto">
                            <svg className="w-6 h-6 text-[#cf21c3]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M8 5v10l8-5-8-5z"/>
                            </svg>
                          </div>
                          <p className="text-sm font-medium">{item.alt}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced CTA section with improved gallery layout */}
      <div ref={ctaRef} className="max-w-4xl mx-auto px-6 mt-16 lg:mt-24 relative z-10">
        <motion.div 
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background that matches the overall gradient theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/10 via-pink-500/5 to-[#cf21c3]/8" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#cf21c3]/6 to-transparent" />

          {/* Animated gradient elements */}
          <motion.div
            className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-r from-[#cf21c3]/20 to-pink-500/20 rounded-full blur-3xl"
            animate={isCTAVisible ? {
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
              x: [0, 30, 0],
              y: [0, -20, 0],
            } : {}}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-8 lg:p-10">
            {/* Heading */}
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6 text-center leading-tight">
              Let's Build Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cf21c3] to-[#e879f9]">CGI Campaign</span>
            </h2>

            {/* Mini video gallery preview - 4 small cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {categories[activeTab].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-square rounded-xl overflow-hidden group border-2 border-white/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#cf21c3]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z"/>
                      </svg>
                    </div>
                  </div>
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}

              {/* Add two more videos from other categories to make it 4 */}
              {Object.entries(categories)
                .filter(([category]) => category !== activeTab)
                .slice(0, 2)
                .flatMap(([_, items]) => items)
                .slice(0, 2)
                .map((item, index) => (
                  <motion.div
                    key={index + 2}
                    className="relative aspect-square rounded-xl overflow-hidden group border-2 border-white/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#cf21c3]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 5v10l8-5-8-5z"/>
                        </svg>
                      </div>
                    </div>
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))
              }
            </div>

            {/* Text content */}
            <div className="text-center">
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Ready to elevate your brand with stunning CGI content? Get in touch with our team to discuss your project and see how we can bring your vision to life.
              </p>
              <motion.button 
                 whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-r from-[#cf21c3] to-[#e879f9] text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-200 shadow-md text-sm md:text-base overflow-hidden group mx-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform group-hover:translate-x-64 transition-all duration-1000" />
                Get a Quote
              </motion.button>
            </div>
          </div>

          {/* Border gradient effect */}
          <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-b from-white/40 to-transparent pointer-events-none">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Technologies