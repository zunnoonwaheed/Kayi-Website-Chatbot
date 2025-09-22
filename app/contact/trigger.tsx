"use client"
import { motion } from "framer-motion"

export default function PullTriggerSection() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Enhanced gradient background with light from top */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/10 to-pink-500/5" />
      
      {/* Light effect from top */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent z-10" />
      
      <div className="max-w-4xl mx-auto text-center relative z-20">
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
          Let's bring{" "}
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
            your vision
          </motion.span>{" "}
          to life
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
          Ready to take the next step? Let's discuss your project and bring your ideas to reality.
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
            Get Started
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
    </section>
  )
}