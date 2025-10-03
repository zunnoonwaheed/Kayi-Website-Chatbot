"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function CgisWork() {
  const steps = [
    {
      image: "/images/pre-production.png",
      courses: "Step 1",
      title: "Pre-Production",
      description:
        "We turn your ideas into detailed plans, create storyboards, and map out every shot.",
    },
    {
      image: "/images/production.png",
      courses: "Step 2",
      title: "Production",
      description:
        "Our team builds 3D models, sets up lighting, and brings your vision to life.",
    },
    {
      image: "/images/post-production.png",
      courses: "Step 3",
      title: "Post-Production",
      description:
        "Final touches, color grading, and refinements to make everything look flawless.",
    },
  ]

  return (
    <section className="py-28 px-6 relative overflow-hidden bg-white">
      {/* Solid white background - no gradients */}
      <div className="absolute inset-0 bg-white" />

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-20 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From First Call To Finished Campaign In 14 Days
        </motion.h2>

        {/* 3 items in one row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-row items-start gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Floating Image (left side) */}
              <motion.div
                className="flex-shrink-0"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={110}
                  height={110}
                  className="object-contain"
                />
              </motion.div>

              {/* Text on right */}
              <div className="flex flex-col space-y-3">
                <motion.span
                  className="self-start px-4 py-1.5 text-sm font-semibold rounded-full bg-gray-100 text-gray-700 shadow-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  {step.courses}
                </motion.span>
                <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
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
            Start Your 14-Day Project
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