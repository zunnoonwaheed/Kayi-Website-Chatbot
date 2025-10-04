"use client"
import { motion } from "framer-motion"
import { useState } from "react"

const Technologies = () => {
  const [activeTab, setActiveTab] = useState("Skincare")

  const categories = {
    "Skincare": [
      { 
        src: "/images/Perfume-CGI-1.mp4", 
        alt: "Skincare serum cellular absorption visualization",
        result: "400% increase in Instagram engagement",
        isVideo: true 
      },
      { 
        src: "/images/Perfume-CGI-2.mp4", 
        alt: "Active ingredient penetration animation",
        result: "2.3x ROAS improvement in 60 days",
        isVideo: true 
      },
    ],
    "Supplements & Vitamins": [
      { 
        src: "/images/Skincare-CGI-1.mp4", 
        alt: "Supplement ingredient animation showing benefits",
        result: "400% increase in Instagram engagement",
        isVideo: true 
      },
      { 
        src: "/images/Skincare-CGI-2.mp4", 
        alt: "Vitamin absorption mechanism visualization",
        result: "2.3x ROAS improvement in 60 days",
        isVideo: true 
      },
    ],
    "Cosmetics & Makeup": [
      { 
        src: "/images/shoes1.mp4", 
        alt: "Makeup application and pigment technology",
        result: "400% increase in Instagram engagement",
        isVideo: true 
      },
      { 
        src: "/images/shoes2.mp4", 
        alt: "Cosmetics texture and finish visualization",
        result: "2.3x ROAS improvement in 60 days",
        isVideo: true 
      },
    ],
    "Haircare & Beauty Tools": [
      { 
        src: "/images/bag1.mp4", 
        alt: "Hair product absorption and repair process",
        result: "400% increase in Instagram engagement",
        isVideo: true 
      },
      { 
        src: "/images/bag2.mp4", 
        alt: "Beauty tool technology demonstration",
        result: "2.3x ROAS improvement in 60 days",
        isVideo: true 
      },
    ],
  }

  const tabs = Object.keys(categories)

  return (
    <div id="technologies" className="relative overflow-hidden bg-white">
      {/* Main Content */}
      <div className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <motion.h1 
            className="text-3xl md:text-5xl font-bold text-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            See CGI Ads From Beauty Brands Like Yours
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover how beauty brands use CGI to showcase product benefits and drive exceptional results.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-0">
            {/* Mobile Tabs - Horizontal scrollable with chevron indicator */}
            <div className="lg:hidden mb-8 relative">
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
              {/* Scroll indicator chevron */}
              <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent flex items-center justify-center pointer-events-none">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-[#cf21c3]/60"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-80 relative">
              <div className="space-y-1">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`w-full text-left px-8 py-4 text-lg font-medium transition-all duration-200 rounded-full flex items-center justify-between ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-[#cf21c3]/20 to-[#cf21c3]/10 text-black shadow-md"
                        : "text-gray-700 hover:bg-white/50"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-[#cf21c3]"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    )}
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
                {/* Mobile - Horizontal Scroll with video indicator */}
                <div className="lg:hidden relative">
                  <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4">
                    {categories[activeTab].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex-shrink-0 w-80 relative"
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
                          
                          {/* Results Overlay - Message Style - CENTER ALIGNED */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="absolute bottom-16 left-4 right-4"
                          >
                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg text-center">
                              <p className="text-sm font-semibold text-[#cf21c3]">
                                📊 {item.result}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                        
                        {/* Video counter indicator */}
                        <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                          <span className="text-white text-xs font-medium">
                            {index + 1}/{categories[activeTab].length}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  {/* Scroll indicator for videos */}
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-16 w-6 bg-gradient-to-l from-white to-transparent flex items-center justify-center pointer-events-none">
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-[#cf21c3]/60"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Desktop - Grid Layout with video indicator */}
                <div className="hidden lg:grid grid-cols-2 gap-6">
                  {categories[activeTab].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="rounded-2xl overflow-hidden group relative"
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
                        
                        {/* Results Overlay - Message Style - CENTER ALIGNED */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1, duration: 0.6 }}
                          className="absolute bottom-16 left-4 right-4"
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg text-center">
                            <p className="text-sm font-semibold text-[#cf21c3]">
                              📊 {item.result}
                            </p>
                          </div>
                        </motion.div>
                        
                        {/* Video counter indicator */}
                        <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-xs font-medium">
                            {index + 1}/{categories[activeTab].length}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Embedded PullTriggerSection - No separate background */}
        <div className="max-w-4xl mx-auto px-6 mt-16 lg:mt-24 text-center">
          {/* Heading with scroll animation */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Ready to elevate{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#cf21c3] to-pink-500"
            >
              your brand
            </motion.span>{" "}
            with CGI?
          </motion.h2>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Book your free campaign review and discover how CGI can transform your beauty brand's marketing.
          </motion.p>
          
          {/* Rounded CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.5,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://calendly.com/saadalii/kayidigital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white 
                         bg-gradient-to-r from-[#cf21c3] to-pink-500 rounded-full 
                         hover:from-[#cf21c3]/90 hover:to-pink-500/90 
                         transition-all duration-300 shadow-lg hover:shadow-xl
                         transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Campaign Review
              <motion.svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Technologies