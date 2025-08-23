"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CpuChipIcon, ChartBarIcon, CodeBracketIcon, UserGroupIcon } from "@heroicons/react/24/outline"

const services = [
  {
    title: "BUSINESS AUTOMATION",
    description:
      "Stop doing the same tasks over and over again. We build powerful systems that handle the boring stuff automatically.",
    icon: CpuChipIcon,
  },
  {
    title: "PERFORMANCE MARKETING",
    description:
      "Your marketing budget deserves better than guesswork. We only spend money on things that actually work.",
    icon: ChartBarIcon,
  },
  {
    title: "WEB DEVELOPMENT & MOBILE APPS",
    description:
      "Off-the-shelf tools don't cut it. We build custom web and mobile apps tailored to your business—fast, functional, and ready to grow.",
    icon: CodeBracketIcon,
  },
  {
    title: "CUSTOM BUSINESS OUTSOURCING",
    description:
      "Why hire full-time when you can get exactly the help you need, exactly when you need it, without the overhead?",
    icon: UserGroupIcon,
  },
]

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        {/* Base gradient layers that flow seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/6 via-pink-500/3 to-[#cf21c3]/8" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#cf21c3]/4 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-bl from-[#cf21c3]/3 via-transparent to-pink-500/6" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/4 via-transparent to-[#cf21c3]/5" />

        {/* Seamless edge gradients */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#cf21c3]/12 via-pink-500/6 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#cf21c3]/12 via-pink-500/6 to-transparent" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#cf21c3]/10 via-pink-500/5 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#cf21c3]/10 via-pink-500/5 to-transparent" />

        {/* Flowing wave gradients */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#cf21c3]/8 to-transparent"
          animate={{
            x: ["-50%", "50%"],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-l from-transparent via-pink-500/6 to-transparent"
          animate={{
            x: ["50%", "-50%"],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 8,
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#cf21c3]/5 to-transparent"
          animate={{
            y: ["-30%", "30%"],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 15,
          }}
        />

        {/* Organic floating gradients that blend naturally */}
        <motion.div
          className="absolute top-1/6 left-1/6 w-96 h-96 bg-gradient-radial from-[#cf21c3]/15 via-pink-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.8, 0.5],
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/6 right-1/6 w-[32rem] h-[32rem] bg-gradient-radial from-pink-500/12 via-[#cf21c3]/8 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -80, 0],
            y: [0, 50, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 7,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-[#cf21c3]/6 via-pink-500/4 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 12,
          }}
        />

        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/3 via-transparent to-pink-500/4 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/2 via-transparent to-[#cf21c3]/3 mix-blend-screen opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-4 text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Services We Offer
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="font-bold">Everything</span> your business needs to grow and scale{" "}
            <span className="font-bold">under one roof</span> - no more juggling multiple vendors or wondering who's
            responsible
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group"
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className={`relative p-8 bg-white/80 backdrop-blur-sm rounded-xl border transition-all duration-500 ${
                    isHovered
                      ? "border-[#cf21c3]/20 shadow-xl shadow-[#cf21c3]/10"
                      : "border-slate-200 hover:shadow-lg hover:border-slate-300"
                  }`}
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0.8, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                        isHovered
                          ? "bg-gradient-to-br from-[#cf21c3] to-pink-500 text-white shadow-[#cf21c3]/20"
                          : "bg-white text-[#cf21c3] shadow-slate-200"
                      }`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-black mb-4 leading-tight">{service.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="https://calendly.com/saadalii/kayidigital"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(207, 33, 195, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-block bg-gradient-to-r from-[#cf21c3] to-pink-500 text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Tell us what you need
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}