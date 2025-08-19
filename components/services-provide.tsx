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
      "Off-the-shelf tools don’t cut it. We build custom web and mobile apps tailored to your business—fast, functional, and ready to grow.",
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
    <>
      <style jsx>{`
        @keyframes diagonalFlow {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          50% { transform: translateX(50%) translateY(50%) rotate(45deg); }
          100% { transform: translateX(200%) translateY(200%) rotate(45deg); }
        }
        
        @keyframes diagonalFlowReverse {
          0% { transform: translateX(200%) translateY(-100%) rotate(-45deg); }
          50% { transform: translateX(-50%) translateY(50%) rotate(-45deg); }
          100% { transform: translateX(-200%) translateY(200%) rotate(-45deg); }
        }
        
        @keyframes waveHorizontal {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes waveHorizontalReverse {
          0% { transform: translateX(100%); }
          50% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes radialPulse {
          0% { transform: scale(0.8) rotate(0deg); opacity: 0.1; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 0.2; }
          100% { transform: scale(0.8) rotate(360deg); opacity: 0.1; }
        }
        
        @keyframes floatGentle {
          0% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(2deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        .animate-diagonal-flow {
          animation: diagonalFlow 25s ease-in-out infinite;
        }
        
        .animate-diagonal-flow-reverse {
          animation: diagonalFlowReverse 30s ease-in-out infinite;
        }
        
        .animate-wave-horizontal {
          animation: waveHorizontal 20s ease-in-out infinite;
        }
        
        .animate-wave-horizontal-reverse {
          animation: waveHorizontalReverse 18s ease-in-out infinite;
        }
        
        .animate-radial-pulse {
          animation: radialPulse 15s ease-in-out infinite;
        }
        
        .animate-radial-pulse-slow {
          animation: radialPulse 22s ease-in-out infinite;
        }
        
        .animate-float-gentle {
          animation: floatGentle 8s ease-in-out infinite;
        }
        
        .animate-float-gentle-reverse {
          animation: floatGentle 10s ease-in-out infinite reverse;
        }
      `}</style>

      <section id="services-section" className="services py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-white">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/60 via-transparent to-[#f8d7f3]/50 animate-diagonal-flow" />
            <div className="absolute inset-0 bg-gradient-to-tl from-[#ec67d5]/55 via-transparent to-[#cf21c3]/45 animate-diagonal-flow-reverse" />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-[#b91aad]/40 via-transparent to-[#f8d7f3]/35 animate-diagonal-flow"
              style={{ animationDelay: "8s" }}
            />
          </div>

          <div className="absolute top-1/6 left-1/5 w-96 h-96 bg-gradient-radial from-[#cf21c3]/30 to-transparent rounded-full animate-radial-pulse" />
          <div className="absolute bottom-1/5 right-1/6 w-80 h-80 bg-gradient-radial from-[#ec67d5]/25 to-transparent rounded-full animate-radial-pulse-slow" />
          <div
            className="absolute top-2/3 left-2/3 w-72 h-72 bg-gradient-radial from-[#f8d7f3]/28 to-transparent rounded-full animate-radial-pulse"
            style={{ animationDelay: "5s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-[#b91aad]/22 to-transparent rounded-full animate-radial-pulse-slow"
            style={{ animationDelay: "12s" }}
          />
          <div
            className="absolute top-1/4 right-1/4 w-56 h-56 bg-gradient-radial from-[#a0189a]/20 to-transparent rounded-full animate-radial-pulse"
            style={{ animationDelay: "18s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-radial from-[#cf21c3]/18 to-transparent rounded-full animate-radial-pulse-slow"
            style={{ animationDelay: "25s" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#ec67d5] to-[#f8d7f3] rounded-full blur-3xl z-10 animate-float-gentle"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#cf21c3] to-[#b91aad] rounded-full blur-3xl z-10 animate-float-gentle-reverse"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-1/2 right-20 w-28 h-28 bg-gradient-to-br from-[#a0189a] to-[#ec67d5] rounded-full blur-2xl z-10 animate-float-gentle"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute bottom-1/3 left-20 w-36 h-36 bg-gradient-to-br from-[#f8d7f3] to-[#cf21c3] rounded-full blur-2xl z-10 animate-float-gentle-reverse"
        />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-8 md:mb-16 lg:mb-20"
          >
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-light mb-3 text-gray-700 leading-tight tracking-tight"
            >
              <span className="font-semibold text-[#000000]">Services We Offer</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 md:px-0"
            >
              <span className="font-bold">Everything</span> your business needs to grow and scale{" "}
              <span className="font-bold">under one roof</span> - no more juggling multiple vendors or wondering who's
              responsible
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative"
                >
                  <motion.div
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    className="relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-black bg-white transition-all duration-500 ease-out group-hover:shadow-xl md:group-hover:shadow-2xl group-hover:border-[#ec67d5]"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 0, scale: 1 }}
                      whileHover={{ opacity: 0.5, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-br from-[#f8d7f3] via-[#ec67d5] to-[#cf21c3] rounded-2xl md:rounded-3xl blur-sm"
                    />

                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0.8, rotate: -10 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="relative z-10 mb-3 md:mb-4 lg:mb-6"
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#f8d7f3] group-hover:bg-[#cf21c3] text-black rounded-xl md:rounded-2xl flex items-center justify-center shadow-md shadow-[#ec67d570] group-hover:shadow-lg md:group-hover:shadow-xl group-hover:shadow-[#b91aad70] transform transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105 md:group-hover:scale-110">
                        <Icon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                      </div>
                    </motion.div>

                    {/* Title + Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                      className="relative z-10 min-h-[120px] md:min-h-[140px] lg:min-h-[180px] flex flex-col justify-start"
                    >
                      <h3 className="text-sm md:text-lg lg:text-xl font-bold text-black mb-2 md:mb-3 lg:mb-4 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {service.description}
                      </p>
                    </motion.div>

                    {/* Outline on Hover */}
                    <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-transparent group-hover:border-[#b91aad] transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  </motion.div>

                  {/* Floating Index Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1 + 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="absolute -top-2 -right-2 md:-top-3 md:-right-3 lg:-top-4 lg:-right-4 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#cf21c3] to-[#b91aad] rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm lg:text-lg shadow-lg z-20 transition-transform duration-300"
                  >
                    {String(index + 1).padStart(2, "0")}
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
              className="inline-block bg-[#cf21c3] text-white font-semibold text-sm md:text-base px-6 py-3 rounded-full shadow-md hover:bg-[#b91aad] transition-all duration-300"
            >
              Tell us what you need
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
