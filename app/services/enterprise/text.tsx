"use client"
import { motion } from "framer-motion"

export function TextSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden flex items-center justify-center bg-white">
      {/* Solid white background */}
      <div className="absolute inset-0 bg-white" />

      {/* Text block */}
      <div className="relative z-10 max-w-3xl text-center">
        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold leading-snug md:leading-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Line 1 */}
          <motion.span
            className="block text-gray-300 max-w-full sm:max-w-3xl mx-auto"
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1, color: "#1f2937" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            whileHover={{ color: "#000000", scale: 1.02, transition: { duration: 0.3 } }}
          >
            Create your fund and start investing
          </motion.span>

          {/* Line 2 */}
          <motion.span
            className="block text-gray-300 max-w-full sm:max-w-2xl mx-auto"
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1, color: "#1f2937" }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            whileHover={{ color: "#000000", scale: 1.02, transition: { duration: 0.3 } }}
          >
            to secure your child's future  all
          </motion.span>

          {/* Line 3 */}
          <motion.span
            className="block text-gray-300 max-w-full sm:max-w-xl mx-auto"
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1, color: "#1f2937" }}
            transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
            whileHover={{ color: "#000000", scale: 1.02, transition: { duration: 0.3 } }}
          >
            from one easy app. You decide 
          </motion.span>

          {/* Line 4 */}
          <motion.span
            className="block text-gray-300 max-w-full sm:max-w-lg mx-auto"
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1, color: "#1f2937" }}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
            whileHover={{ color: "#000000", scale: 1.02, transition: { duration: 0.3 } }}
          >
        when and how they use their funds.
          </motion.span>
        </motion.p>
      </div>
    </section>
  )
}
