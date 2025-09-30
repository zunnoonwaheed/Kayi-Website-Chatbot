"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  // Animation variants
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
      y: 30 
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
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  }

  const underlineVariants = {
    hidden: { 
      pathLength: 0,
      opacity: 0 
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 1.5,
        ease: "easeOut"
      }
    }
  }

  const headingWords = ["Film", "the", "impossible"]

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Content - Full width on mobile */}
          <div className="text-center lg:text-left">
            
            {/* Animated Heading */}
            <motion.div
              className="mb-4 sm:mb-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-snug"
              >
                {headingWords.map((word, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={wordVariants}
                    className="inline-block mr-2 last:mr-0 relative"
                  >
                    {word}
                    {/* Animated underline for "impossible" */}
                    {word === "impossible" && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full"
                        initial="hidden"
                        animate="visible"
                      >
                        {/* Desktop underline - Animated drawing effect */}
                        <div className="hidden lg:block h-10 md:h-11 lg:h-12 translate-y-3 md:translate-y-4">
                          <svg 
                            viewBox="0 0 220 45" 
                            className="w-full h-full"
                            preserveAspectRatio="none"
                          >
                            <motion.path 
                              d="M14,28 Q33,24 54,28" 
                              stroke="#cf21c3" 
                              strokeWidth="2.5" 
                              fill="none"
                              strokeLinecap="round"
                              variants={underlineVariants}
                            />
                            <motion.path 
                              d="M60,28 Q100,22 140,27 Q175,24 210,28" 
                              stroke="#cf21c3" 
                              strokeWidth="2.6" 
                              fill="none"
                              strokeLinecap="round"
                              variants={underlineVariants}
                            />
                            <motion.path 
                              d="M60,32 Q100,26 140,30 Q175,27 210,32" 
                              stroke="#cf21c3" 
                              strokeWidth="2.3" 
                              fill="none"
                              strokeLinecap="round"
                              opacity="0.9"
                              variants={underlineVariants}
                            />
                          </svg>
                        </div>
                        {/* Mobile underline - Animated drawing effect */}
                        <div className="lg:hidden h-3 translate-y-1">
                          <svg 
                            viewBox="0 0 180 12" 
                            className="w-full h-full"
                            preserveAspectRatio="none"
                          >
                            {/* Main pink line */}
                            <motion.path 
                              d="M5,6 Q45,3 85,6 Q125,4 165,6" 
                              stroke="#cf21c3" 
                              strokeWidth="3" 
                              fill="none"
                              strokeLinecap="round"
                              variants={underlineVariants}
                            />
                            {/* Accent line for depth */}
                            <motion.path 
                              d="M8,8 Q48,5 88,8 Q128,6 168,8" 
                              stroke="#cf21c3" 
                              strokeWidth="1.5" 
                              fill="none"
                              strokeLinecap="round"
                              opacity="0.6"
                              variants={underlineVariants}
                            />
                          </svg>
                        </div>
                      </motion.div>
                    )}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>

            {/* Animated Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                ease: "easeOut"
              }}
            >
              <p 
                className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed font-light max-w-xl mx-auto lg:max-w-none lg:mx-0"
              >
                Revolutionary CGI technology that transforms impossible brand visions into 
                photorealistic advertising content that captivates and converts.
              </p>
            </motion.div>

            {/* Animated CTA Buttons */}
            <motion.div 
              className="mb-8 sm:mb-10 lg:mb-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8,
                ease: "easeOut"
              }}
            >
              <a 
                href="https://calendly.com/saadalii/kayidigital" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold text-white rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl bg-gradient-to-r from-[#cf21c3] to-[#a81b9e] hover:from-[#b01da6] hover:to-[#8f1687] shadow-lg"
              >
                Start Creating Magic
              </a>
              <a 
                href="#technologies" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold text-black border-2 border-black rounded-xl hover:bg-black hover:text-white transition-all duration-300"
              >
                See Examples
              </a>
            </motion.div>

            {/* Animated Stats Grid */}
            <motion.div 
              className="space-y-6 sm:space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.0,
                ease: "easeOut"
              }}
            >
              
              {/* Top Stats Row */}
              <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-10">
                <motion.div 
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-1">
                    95.8%
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                    Client satisfaction rate
                  </div>
                </motion.div>

                <motion.div 
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-1">
                    60+
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                    Projects delivered
                  </div>
                </motion.div>
              </div>

              {/* Bottom Star Rating Row */}
              <motion.div 
                className="text-center lg:text-left border-t border-gray-200 pt-4 sm:pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3">
                  <div className="flex items-center gap-1 sm:gap-2">
                    {[1, 2, 3, 4].map((star) => (
                      <motion.svg 
                        key={star}
                        className="w-4 h-4 sm:w-5 md:w-6 text-black fill-current" 
                        viewBox="0 0 24 24"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.8 + star * 0.1 }}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </motion.svg>
                    ))}
                    {/* Half star */}
                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2.2 }}
                    >
                      <svg 
                        className="w-4 h-4 sm:w-5 md:w-6 text-gray-300 fill-current" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
                        <svg 
                          className="w-4 h-4 sm:w-5 md:w-6 text-black fill-current" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.4 }}
                  >
                    <span className="text-base sm:text-lg md:text-xl font-bold text-black">4.5</span>
                    <span className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Average client rating</span>
                  </motion.div>
                </div>
              </motion.div>

            </motion.div>
          </div>

          {/* Right Image - Hidden on mobile, visible on lg and up */}
          <motion.div 
            className="hidden lg:flex justify-center items-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ 
              duration: 1, 
              delay: 1.2,
              ease: "easeOut"
            }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img 
                src="/images/hero.png" 
                alt="CGI Advertising Solutions" 
                className="relative w-full h-auto transition-transform duration-500 hover:scale-105"
                style={{ 
                  transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                  transformStyle: 'preserve-3d'
                }}
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9i400IiB2aWV3Qm94PSIwIDAgNjAwIDQwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNGM0YzRjMiLz4KPHRleHQgeD0iMzAwIiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q0dJIEhlcm8gSW1hZ2U8L3RleHQ+Cjwvc3ZnPg=='
                }}
              />
            </div>
          </motion.div>

        </div>

        {/* Background Elements - Adjusted for mobile */}
        <motion.div 
          className="absolute top-8 sm:top-16 left-4 lg:left-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 bg-purple-100 rounded-full opacity-20 blur-xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: 1.5 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-8 sm:bottom-16 right-4 lg:right-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-40 lg:h-40 bg-pink-100 rounded-full opacity-20 blur-xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: 1.7 }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 left-1/4 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-blue-100 rounded-full opacity-15 blur-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ delay: 1.9 }}
        ></motion.div>

      </div>
    </section>
  )
}