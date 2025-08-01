"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CpuChipIcon, ChartBarIcon, CodeBracketIcon, UserGroupIcon } from "@heroicons/react/24/outline"

const services = [
  {
    title: "BUSINESS AUTOMATION",
    description:
      "Stop doing the same tasks over and over. We build systems that handle the boring stuff automatically.",
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
    <section className="services py-12 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16 lg:mb-20"
        >
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-7xl font-black text-black mb-3 md:mb-6 lg:mb-8 leading-tight tracking-tight"
          >
            Services We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 md:px-0"
          >
            Everything your business needs to grow and scale under one roof - no more juggling multiple vendors or
            wondering who's responsible
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className="relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-black bg-white transition-all duration-500 ease-out group-hover:-translate-y-2 md:group-hover:-translate-y-4 group-hover:shadow-xl md:group-hover:shadow-2xl group-hover:border-[#ec67d5]">
                  <div className="absolute inset-0 bg-[#fcdcf7] group-hover:bg-[#fbd1f0] opacity-0 group-hover:opacity-30 transition-all duration-700 rounded-2xl md:rounded-3xl blur-sm" />

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 mb-3 md:mb-4 lg:mb-6"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#fcdcf7] group-hover:bg-[#ec67d5] text-black rounded-xl md:rounded-2xl flex items-center justify-center shadow-md shadow-[#fbcdf970] group-hover:shadow-lg md:group-hover:shadow-xl group-hover:shadow-[#ec67d570] transform transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105 md:group-hover:scale-110">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                    </div>
                  </motion.div>

                  {/* Title + Description */}
                  <div className="relative z-10 min-h-[120px] md:min-h-[140px] lg:min-h-[180px] flex flex-col justify-start">
                    <h3 className="text-sm md:text-lg lg:text-xl font-bold text-black mb-2 md:mb-3 lg:mb-4 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Outline on Hover */}
                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-transparent group-hover:border-[#cf21c3] transition-all duration-500 opacity-0 group-hover:opacity-100" />
                </div>

                {/* Floating Index Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="absolute -top-2 -right-2 md:-top-3 md:-right-3 lg:-top-4 lg:-right-4 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm lg:text-lg shadow-lg z-20 group-hover:scale-110 transition-transform duration-300"
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://calendly.com/saadalii/kayidigital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#cf21c3] text-white font-semibold text-sm md:text-base px-6 py-3 rounded-full shadow-md hover:bg-[#b91aad] transition-all duration-300"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
