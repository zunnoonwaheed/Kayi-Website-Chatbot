"use client"
import { motion } from "framer-motion"
import { useState } from "react"

const Technologies = () => {
  const [activeTab, setActiveTab] = useState("Perfumes") // Set Perfumes as default tab

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

  return (
    <div className="py-20 relative overflow-hidden bg-white">
      {/* Gradient Background */}
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

        {/* Organic floating gradients */}
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
          Whether you're selling luxury watches or launching a tech startup, we've helped brands like yours tell their stories through CGI. Take a look at what's possible in your industry.
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
              {/* Reduced gap between videos from gap-6 lg:gap-8 to gap-4 lg:gap-6 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {categories[activeTab].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden group"
                  >
                    {/* Portrait video container without white background */}
                    {/* Changed max-w-xs to max-w-sm for slightly larger videos */}
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

      {/* Centrally aligned CTA section */}
      <div className="max-w-4xl mx-auto px-6 mt-16 lg:mt-20 relative z-10">
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-10 lg:py-12 shadow-lg border border-white/40 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-6 leading-tight">
            Let's Build Your Next <span className="text-[#cf21c3]">CGI Campaign</span>
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#cf21c3] to-[#e879f9] text-white px-8 py-4 rounded-full font-semibold hover:from-[#a21caf] hover:to-[#cf21c3] transition-all duration-200 shadow-lg hover:shadow-xl text-base lg:text-lg"
          >
            Get a Quote
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Technologies