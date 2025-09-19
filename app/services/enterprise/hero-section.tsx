"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-2 lg:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left order-1">
            
          <motion.h1 
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight whitespace-nowrap"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Film the{" "}
  <span className="relative inline-block">
    impossible
    <div 
      className="absolute bottom-0 left-0 w-full h-9 sm:h-10 md:h-11 lg:h-12 translate-y-5 sm:translate-y-6 md:translate-y-7" 
    >
      <svg 
        viewBox="0 0 220 45" 
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path 
          d="M14,28 Q33,24 54,28" 
          stroke="#000" 
          strokeWidth="2.5" 
          fill="none"
          strokeLinecap="round"
        />

        <path 
          d="M60,28 Q100,22 140,27 Q175,24 210,28" 
          stroke="#000" 
          strokeWidth="2.6" 
          fill="none"
          strokeLinecap="round"
        />

        <path 
          d="M60,32 Q100,26 140,30 Q175,27 210,32" 
          stroke="#000" 
          strokeWidth="2.3" 
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>
    </div>
  </span>
</motion.h1>


            {/* Subtitle */}
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed font-light max-w-xl mx-auto lg:max-w-none lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Revolutionary CGI technology that transforms impossible brand visions into 
              photorealistic advertising content that captivates and converts.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="mb-8 sm:mb-10 lg:mb-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="https://calendly.com/saadalii/kayidigital" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold text-white bg-black rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Start Creating Magic
              </a>
              <a 
                href="#technologies" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold text-black border-2 border-black rounded-xl hover:bg-black hover:text-white transition-all duration-300"
              >
                See Examples
              </a>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="space-y-6 sm:space-y-8 lg:space-y-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              
              {/* Top Stats Row */}
              <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-1 sm:mb-2">
                    95.8%
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                    Client satisfaction rate
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-1 sm:mb-2">
                    ~60+
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                    Projects delivered
                  </div>
                </div>
              </div>

              {/* Bottom Star Rating Row - Single Line */}
              <div className="text-center lg:text-left border-t border-gray-200 pt-4 sm:pt-6">
                <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                  <div className="flex items-center">
                    {[1, 2, 3, 4].map((star) => (
                      <svg 
                        key={star}
                        className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6 text-black fill-current" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                    {/* Half star */}
                    <div className="relative">
                      <svg 
                        className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6 text-gray-300 fill-current" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
                        <svg 
                          className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6 text-black fill-current" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span className="text-base sm:text-lg md:text-xl font-bold text-black">4.5</span>
                  <span className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Average client rating</span>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            className="flex justify-center items-center lg:justify-end order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img 
                src="/images/hero.png" 
                alt="CGI Advertising Solutions" 
                className="relative w-full h-auto transition-transform duration-500 hover:scale-105"
                style={{ 
                  transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                  transformStyle: 'preserve-3d'
                }}
              />
              {/* Image accent elements */}

            </div>
          </motion.div>

        </div>

        {/* Background Elements - Responsive */}
        <div className="absolute top-12 sm:top-16 left-2 sm:left-4 lg:left-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 bg-purple-100 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-12 sm:bottom-16 right-2 sm:right-4 lg:right-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-40 lg:h-40 bg-pink-100 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-1/2 left-1/6 sm:left-1/4 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-blue-100 rounded-full opacity-15 blur-lg"></div>

      </div>
    </section>
  )
}