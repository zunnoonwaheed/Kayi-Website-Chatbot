"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Plus, Minus } from "lucide-react"

const faqData = [
  {
    id: "item-1",
    question: "What's the Off Menu delivery process?",
    answer:
      "Our Off Menu delivery process is streamlined and efficient. Once you place an order, our team prepares your custom design request and delivers it within the agreed timeframe, ensuring quality and attention to detail.",
  },
  {
    id: "item-2",
    question: "What if I'm not happy with my designs?",
    answer:
      "We offer unlimited revisions until you're completely satisfied. Our team works closely with you to ensure the final design meets your expectations and business objectives.",
  },
  {
    id: "item-3",
    question: "Is there a limit to how many requests I can have?",
    answer:
      "With our subscription plans, you can submit unlimited design requests. We work on them one at a time to ensure quality and attention to detail for each project.",
  },
  {
    id: "item-4",
    question: "Why wouldn't I just hire a full-time designer?",
    answer:
      "Hiring a full-time designer can be expensive and may not provide consistent workload. Our service gives you access to expert designers when you need them, without the overhead costs of a full-time employee.",
  },
]

export function FaqsSection() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <section className="py-20 px-6 relative overflow-hidden">
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

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          FAQ's
        </motion.h2>

        <Accordion 
          type="single" 
          collapsible 
          value={openItem || undefined}
          onValueChange={setOpenItem}
          className="space-y-4"
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-white/90 backdrop-blur-md border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <AccordionItem value={faq.id} className="border-0">
                  <AccordionTrigger className="group text-left hover:no-underline font-medium text-gray-900 py-0 [&>svg]:hidden">
                    <div className="flex items-center gap-3 w-full">
                      <div className="flex-shrink-0">
                        <Plus className="h-5 w-5 text-gray-600 group-data-[state=open]:hidden transition-colors duration-300 group-hover:text-[#cf21c3]" />
                        <Minus className="h-5 w-5 text-gray-600 hidden group-data-[state=open]:block transition-colors duration-300 group-hover:text-[#cf21c3]" />
                      </div>
                      <span className="flex-1 text-lg font-semibold group-hover:text-[#cf21c3] transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 text-gray-700 leading-relaxed ml-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Card>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}