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

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            size="lg" 
            className="group px-8 py-4 text-lg font-semibold border-0 rounded-full"
            style={{ backgroundColor: '#cf21c3' }}
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}