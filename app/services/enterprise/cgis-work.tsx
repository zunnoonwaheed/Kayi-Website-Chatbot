"use client"

import { motion } from "framer-motion"

export default function CgisWork() {
  const steps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 12l20-9-9 20-2-7-7-4z" />
        </svg>
      ),
      title: "Collect Data",
      description: "Gather info from systems, analytics, and feedback.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 17l6-6 4 4 8-8" />
        </svg>
      ),
      title: "Process Data",
      description: "Transform raw data into insights with automation.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" />
        </svg>
      ),
      title: "Communicate",
      description: "Deliver reports and dashboards for smarter decisions.",
    },
  ]

  return (
    <section className="py-28 px-6 relative overflow-hidden bg-white">
      {/* Background gradients - unchanged */}
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
        <motion.div
          className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-[#cf21c3]/6 via-pink-500/4 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], rotate: [0, 180, 360] }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 12 }}
        />

        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/3 via-transparent to-pink-500/4 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/2 via-transparent to-[#cf21c3]/3 mix-blend-screen opacity-50" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-5xl font-bold text-center mb-20 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          How CGIS Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#cf21c3] to-[#a81ca0] text-white font-bold text-lg shadow-lg z-20">
                {index + 1}
              </div>
              
              {/* Card */}
              <div className="h-full p-8 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Accent gradient bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#cf21c3] to-pink-500"></div>
                
                <div className="flex flex-col items-center text-center">
                  {/* Icon container */}
                  <div className="flex-shrink-0 p-5 bg-gradient-to-br from-[#cf21c3]/10 to-pink-500/10 rounded-2xl shadow-sm mb-6 group-hover:scale-110 transition-all duration-500 border border-white/30">
                    <div className="text-[#cf21c3]">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Animated underline on hover */}
                  <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-[#cf21c3] to-pink-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
              
              {/* Connecting line between cards (except last one) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/50 rounded-full transform -translate-y-1/2 z-10"></div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Mobile connecting lines */}
        <div className="md:hidden flex justify-center mt-12 mb-4">
          <div className="flex space-x-12">
            {steps.map((_, index) => (
              index < steps.length - 1 && (
                <div key={index} className="w-8 h-0.5 bg-white/50 rounded-full"></div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}