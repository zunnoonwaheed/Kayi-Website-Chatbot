"use client"
import { motion } from "framer-motion"

export function TextSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden flex items-center justify-center bg-white">
      {/* Solid white background - no gradients */}
      <div className="absolute inset-0 bg-white" />

      {/* Text block */}
      <div className="relative z-10 max-w-3xl text-center">
        <motion.p
          className="text-4xl font-medium text-slate-900 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Create your fund and start investing<br />
          to secure your child's future, all  from<br />
           one easy app.You decide when and<br />
            how they can use their funds.
          <span className="text-2x to-black text-slate-600">
      
          </span>
        </motion.p>
      </div>
    </section>
  )
}