"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Plus, Minus } from "lucide-react"

const faqData = [
  {
    id: "cgi-vs-traditional",
    question: "What are CGI ads and how do they differ from traditional advertising?",
    answer: "CGI ads use computer-generated imagery to create visual content that would be impossible, impractical, or too expensive to film with traditional methods. Unlike conventional ads that rely on physical sets, actors, and real products, CGI ads can create entirely digital environments, impossible physics, and fantastical scenarios while maintaining photorealistic quality."
  },
  {
    id: "software-tools",
    question: "What software and tools are commonly used to create CGI advertisements?",
    answer: "Popular CGI software includes Cinema 4D and Blender for 3D modeling and animation, Maya and 3ds Max for complex character work, After Effects for compositing and motion graphics, and rendering engines like Octane, V-Ray, or Cycles for final image generation. Many studios also use specialized tools for simulation (Houdini), sculpting (ZBrush), and real-time rendering (Unreal Engine)."
  },
  {
    id: "production-time",
    question: "How long does it take to produce a CGI advertisement?",
    answer: "Production timelines typically range from 4-16 weeks depending on complexity. Simple product visualizations might take 4-6 weeks, while complex narratives with detailed environments and characters can require 12-16 weeks or more. The process includes concept development, 3D modeling, animation, lighting, rendering, and post-production."
  },
  {
    id: "industries-benefit",
    question: "What types of products or industries benefit most from CGI advertising?",
    answer: "CGI works particularly well for automotive (showing internal mechanics), technology products (demonstrating features), pharmaceuticals (visualizing biological processes), architecture and real estate (showing unbuilt properties), fashion and cosmetics (perfect product shots), and any industry needing to visualize abstract concepts or impossible scenarios."
  },
  {
    id: "emotional-connection",
    question: "Can CGI ads achieve the same emotional connection as live-action advertising?",
    answer: "Modern CGI can absolutely create strong emotional connections through sophisticated character animation, realistic environments, and compelling storytelling. However, success depends on skilled execution—poorly done CGI can feel cold or artificial, while expertly crafted CGI can be more emotionally impactful than traditional footage by creating experiences impossible in real life."
  },
  {
    id: "technical-challenges",
    question: "What are the main technical challenges in creating CGI advertisements?",
    answer: "Key challenges include achieving photorealism without falling into the 'uncanny valley,' managing long rendering times, ensuring consistent quality across different devices and platforms, integrating CGI with live-action footage seamlessly, and optimizing file sizes for various media channels while maintaining visual quality."
  },
  {
    id: "review-approval",
    question: "How do clients typically review and approve CGI ad content during production?",
    answer: "The process usually involves multiple approval stages: initial concept art and storyboards, rough 3D previsualization (animatics), refined animation with basic lighting, and final rendered versions. Clients can request changes at each stage, though modifications become more expensive and time-consuming as production progresses toward final rendering."
  },
  {
    id: "cgi-vs-motion-graphics",
    question: "What's the difference between CGI ads and other digital advertising formats like motion graphics?",
    answer: "CGI ads focus on creating photorealistic or highly detailed 3D environments and objects that mimic real-world physics and lighting. Motion graphics typically use 2D or simplified 3D elements with stylized animation, text, and graphic design elements. CGI ads aim for immersive realism or fantastical but believable worlds, while motion graphics prioritize clear communication through animated graphic design."
  }
]

export function Questions() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "cgi-vs-traditional": true // Default open item
  })

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <section className="pt-0 pb-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden bg-white">
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

        {/* Organic floating gradients */}
        <motion.div
          className="absolute top-1/6 left-1/6 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-radial from-[#cf21c3]/15 via-pink-500/10 to-transparent rounded-full blur-3xl"
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
          className="absolute bottom-1/6 right-1/6 w-80 h-80 sm:w-[32rem] sm:h-[32rem] bg-gradient-radial from-pink-500/12 via-[#cf21c3]/8 to-transparent rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 w-96 h-96 sm:w-[40rem] sm:h-[40rem] bg-gradient-radial from-[#cf21c3]/6 via-pink-500/4 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
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
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="sm:hidden">Questions?</span>
            <span className="hidden sm:inline">Got any questions?</span>
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We've got answers.
          </motion.p>
        </motion.div>

        {/* FAQ Grid - Single column on mobile, two columns on medium screens and up */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6">
            {faqData.slice(0, 4).map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-4 sm:p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div 
                    className="cursor-pointer"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <div className="flex items-start gap-3 w-full">
                      <div className="flex-shrink-0 mt-0.5">
                        {openItems[faq.id] ? (
                          <Minus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 transition-colors duration-300 group-hover:text-[#cf21c3]" />
                        ) : (
                          <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 transition-colors duration-300 group-hover:text-[#cf21c3]" />
                        )}
                      </div>
                      <span className="flex-1 text-base sm:text-lg font-semibold text-gray-900 group-hover:text-[#cf21c3] transition-colors duration-300 leading-tight">
                        {faq.question}
                      </span>
                    </div>
                  </div>
                  {openItems[faq.id] && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="pt-3 sm:pt-4 text-gray-700 leading-relaxed text-sm sm:text-base ml-6 sm:ml-8"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            {faqData.slice(4).map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: (index + 4) * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-4 sm:p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div 
                    className="cursor-pointer"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <div className="flex items-start gap-3 w-full">
                      <div className="flex-shrink-0 mt-0.5">
                        {openItems[faq.id] ? (
                          <Minus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 transition-colors duration-300 group-hover:text-[#cf21c3]" />
                        ) : (
                          <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 transition-colors duration-300 group-hover:text-[#cf21c3]" />
                        )}
                      </div>
                      <span className="flex-1 text-base sm:text-lg font-semibold text-gray-900 group-hover:text-[#cf21c3] transition-colors duration-300 leading-tight">
                        {faq.question}
                      </span>
                    </div>
                  </div>
                  {openItems[faq.id] && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="pt-3 sm:pt-4 text-gray-700 leading-relaxed text-sm sm:text-base ml-6 sm:ml-8"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}