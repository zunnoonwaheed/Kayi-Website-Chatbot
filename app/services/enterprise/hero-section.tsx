"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="bg-white pt-40 sm:pt-44 md:pt-48 lg:pt-52 pb-12 md:pb-24 relative overflow-hidden">
      <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        {/* Content - First on mobile */}
        <div className="mr-auto place-self-center lg:col-span-7 order-1 lg:order-2">
          <motion.h1 
            className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl md:mb-6 xl:text-5xl text-gray-900 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Ever Wished You Could Film the Impossible?
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl mb-6 font-light text-gray-600 md:mb-8 md:text-lg lg:text-xl text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Now you can. We create photorealistic CGI ads that bring your wildest brand ideas to life, no matter how impossible they seem in the real world.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a 
              href="https://calendly.com/saadalii/kayidigital" 
              className="inline-flex items-center justify-center px-5 py-3 md:px-6 md:py-4 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-[#cf21c3] to-[#e879f9] hover:from-[#a21caf] hover:to-[#cf21c3] focus:ring-4 focus:ring-purple-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Let's Create Magic
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
            
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-5 py-3 md:px-6 md:py-4 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 transition-all duration-300"
            >
              See What's Possible
            </a> 
          </motion.div>
        </div>

        {/* Mobile Image - Visible on small screens at the bottom */}
        <motion.div 
          className="lg:hidden flex justify-center items-center mt-8 order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative w-full max-w-xs">
            <img 
              src="/images/hero.png" 
              alt="CGI Advertising Solutions" 
              className="w-full"
              style={{ 
                transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                transformStyle: 'preserve-3d'
              }}
            />
          </div>
        </motion.div>
        
        {/* Desktop Image - Hidden on mobile */}
        <motion.div 
          className="hidden lg:flex lg:mt-0 lg:col-span-5 justify-center items-center order-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="relative">
            <img 
              src="/images/hero.png" 
              alt="CGI Advertising Solutions" 
              className="relative w-full max-w-md transition-transform duration-500 hover:scale-105"
              style={{ 
                transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                transformStyle: 'preserve-3d'
              }}
            />
          </div>
        </motion.div>                
      </div>
    </section>
  )
}
