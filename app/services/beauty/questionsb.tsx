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
      {/* Solid white background - no gradients */}
      <div className="absolute inset-0 bg-white" />

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