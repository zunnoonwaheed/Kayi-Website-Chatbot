"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function TextSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden flex items-center justify-center bg-white">
      {/* Solid white background */}
      <div className="absolute inset-0 bg-white" />

      {/* Text block */}
      <div className="relative z-10 max-w-3xl text-center">
        <motion.p
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-snug md:leading-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Single line with transparent/glow effect */}
          <motion.span
            className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 max-w-full mx-auto"
            initial={{ opacity: 0, backgroundPosition: "0% 50%" }}
            whileInView={{ 
              opacity: 1, 
              backgroundPosition: "100% 50%",
              color: "#1f2937"
            }}
            transition={{ 
              duration: 1.5, 
              delay: 0.3, 
              ease: "easeInOut",
              backgroundPosition: { duration: 2, ease: "easeInOut" }
            }}
            whileHover={{ 
              color: "#000000", 
              scale: 1.02, 
              transition: { duration: 0.3 } 
            }}
          >
            Create your fund and start investing to secure your child's future all from one easy app. You decide when and how they use their funds.
          </motion.span>
        </motion.p>

        {/* Button - Updated to match SocialProof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="#"
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white 
                       bg-gradient-to-r from-[#cf21c3] to-pink-500 rounded-full 
                       hover:from-[#cf21c3]/90 hover:to-pink-500/90 
                       transition-all duration-300 shadow-lg hover:shadow-xl
                       transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
            <motion.svg 
              className="ml-2 w-4 h-4 md:w-5 md:h-5" 
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
    </section>
  )
}