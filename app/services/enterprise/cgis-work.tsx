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
      {/* ✅ Keep gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/6 via-pink-500/3 to-[#cf21c3]/8" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#cf21c3]/4 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-bl from-[#cf21c3]/3 via-transparent to-pink-500/6" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/4 via-transparent to-[#cf21c3]/5" />

        {/* Edge gradients */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#cf21c3]/12 via-pink-500/6 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#cf21c3]/12 via-pink-500/6 to-transparent" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#cf21c3]/10 via-pink-500/5 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#cf21c3]/10 via-pink-500/5 to-transparent" />

        {/* Flowing wave gradients */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#cf21c3]/8 to-transparent"
          animate={{ x: ["-50%", "50%"], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-l from-transparent via-pink-500/6 to-transparent"
          animate={{ x: ["50%", "-50%"], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 8 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#cf21c3]/5 to-transparent"
          animate={{ y: ["-30%", "30%"], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 15 }}
        />

        {/* Organic floating gradients */}
        <motion.div
          className="absolute top-1/6 left-1/6 w-96 h-96 bg-gradient-radial from-[#cf21c3]/15 via-pink-500/10 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5], x: [0, 60, 0], y: [0, -40, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/6 right-1/6 w-[32rem] h-[32rem] bg-gradient-radial from-pink-500/12 via-[#cf21c3]/8 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.4, 0.7, 0.4], x: [0, -80, 0], y: [0, 50, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 7 }}
        />
      </div>

      {/* ✅ Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-5xl font-bold text-center mb-20 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Process
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
      </div>
    </section>
  )
}