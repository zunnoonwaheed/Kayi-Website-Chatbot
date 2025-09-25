"use client"
import { motion } from "framer-motion"

export function TextSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden flex items-center justify-center">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-pink-100" />
        <motion.div
          className="absolute top-1/3 left-1/4 w-[40rem] h-[40rem] bg-gradient-radial from-pink-400/25 via-transparent to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-gradient-radial from-purple-400/20 via-transparent to-transparent rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      {/* Text block */}
      <div className="relative z-10 max-w-3xl text-center">
        <motion.p
          className="text-4xl font-medium text-slate-900 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Create your fund and start<br />
          investing to secure your child's<br />
          future, all from one easy app.<br />
          You decide when and how<br />
          they can use their funds.
        </motion.p>
      </div>
    </section>
  )
}