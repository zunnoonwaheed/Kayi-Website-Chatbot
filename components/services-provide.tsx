"use client"

import { motion } from "framer-motion"
import { useState } from "react"

import {
  TagIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  LinkIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline"

const services = [
  {
    title: "BRANDING & IDENTITY",
    description:
      "Craft unique, eye-catching brands that distinctively elevate your business profile and market presence.",
    icon: TagIcon,
  },
  {
    title: "UX/UI DESIGN",
    description:
      "Develop easy-to-use, engaging interfaces with deep user research to ensure satisfaction and usability.",
    icon: PaintBrushIcon,
  },
  {
    title: "WEB & APP DEVELOPMENT",
    description:
      "Build reliable digital products meticulously tailored to meet contemporary business needs.",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "LOW/NO-CODE DEVELOPMENT",
    description:
      "Customize CMS website using low/no-code tools like WordPress, Frame, WebFlow & Squarespace.",
    icon: BoltIcon,
  },
  {
    title: "BLOCKCHAIN SOLUTIONS",
    description:
      "Implement secure, innovative blockchain technologies to enhance and empower your business operations.",
    icon: LinkIcon,
  },
  {
    title: "AI & AUTOMATION",
    description:
      "Integrate advanced AI solutions to automate processes, and deliver personalized experiences.",
    icon: CpuChipIcon,
  },
]

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="services py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-black mb-8 leading-tight tracking-tight"
          >
            Services We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming ideas into digital excellence with our comprehensive suite of cutting-edge services
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className="relative p-8 rounded-3xl border border-black bg-white transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:shadow-2xl group-hover:border-[#ec67d5]">
                  <div className="absolute inset-0 bg-[#fcdcf7] group-hover:bg-[#fbd1f0] opacity-0 group-hover:opacity-30 transition-all duration-700 rounded-3xl blur-sm" />

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 mb-6"
                  >
                    <div className="w-20 h-20 bg-[#fcdcf7] group-hover:bg-[#ec67d5] text-black rounded-2xl flex items-center justify-center text-3xl shadow-md shadow-[#fbcdf970] group-hover:shadow-xl group-hover:shadow-[#ec67d570] transform transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110">
                      <Icon className="w-10 h-10" />
                    </div>
                  </motion.div>

                  {/* Title + Description */}
                  <div className="relative z-10 min-h-[180px] flex flex-col justify-start">
                    <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      x: hoveredIndex === index ? 0 : -20,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center text-black font-semibold group-hover:text-gray-800 mt-4"
                  >
                    <span className="mr-2">Learn More</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="transform group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>

                  {/* Outline on Hover */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#cf21c3] transition-all duration-500 opacity-0 group-hover:opacity-100" />
                </div>

                {/* Floating Index Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-20 group-hover:scale-110 transition-transform duration-300"
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center px-12 py-4 bg-black text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 mr-3">Start Your Project</span>
            <motion.svg
              className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
            <div className="absolute inset-0 bg-[#cf21c3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
