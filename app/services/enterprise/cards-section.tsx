"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CpuChipIcon, ChartBarIcon, CodeBracketIcon } from "@heroicons/react/24/solid"

const services = [
  {
    title: "BUSINESS AUTOMATION",
    description:
      "Stop doing the same tasks over and over again. We build powerful systems that handle the boring stuff automatically.",
    icon: CpuChipIcon,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
  },
  {
    title: "PERFORMANCE MARKETING",
    description:
      "Your marketing budget deserves better than guesswork. We only spend money on things that actually work.",
    icon: ChartBarIcon,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format",
  },
  {
    title: "WEB & MOBILE APPS",
    description:
      "We build custom web and mobile apps tailored to your business—fast, functional, and ready to grow.",
    icon: CodeBracketIcon,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&auto=format",
  },
]

export default function CardsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-white">
      {/* Gradient Background */}
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

      <div className="max-w-6xl mx-auto relative z-10 pt-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
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
            <span className="font-bold">under one roof</span>.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`relative rounded-2xl border shadow-md transition-all duration-700 h-full overflow-hidden
                  bg-gradient-to-br from-white to-pink-50 ${
                    isHovered
                      ? "shadow-xl shadow-pink-200 border-[#cf21c3]/30 transform translate-y-[-8px]"
                      : "border-slate-200"
                  }`}
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    
                    {/* Professional gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                    
                    {/* Subtle hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-[#cf21c3]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 0.08 : 0 }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Icon overlay on image */}
                    <div className="absolute top-4 left-4">
                      <motion.div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 
                        bg-gradient-to-br from-pink-400 to-pink-600 ${
                          isHovered
                            ? "shadow-lg shadow-pink-300/50 scale-110"
                            : "shadow-md"
                        }`}
                        animate={{
                          backgroundColor: isHovered ? '#cf21c3' : '#ec4899'
                        }}
                      >
                        <Icon
                          className="w-6 h-6 text-white"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <motion.h3
                      className="text-xl font-bold mb-4 leading-tight"
                      animate={{ 
                        color: isHovered ? '#cf21c3' : '#1f2937'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Professional indicator line */}
                    <motion.div
                      className="mt-6 h-0.5 bg-gradient-to-r from-gray-200 to-transparent"
                      animate={{
                        background: isHovered 
                          ? 'linear-gradient(to right, #cf21c3, transparent)' 
                          : 'linear-gradient(to right, #e5e7eb, transparent)'
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}