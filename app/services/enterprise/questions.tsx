"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus, Minus } from "lucide-react"

const faqData = [
  {
    id: "delivery-process",
    question: "What's the Off Menu delivery process?",
    answer:
      "Our delivery process is streamlined and efficient. Once you place an order, our team begins preparation immediately. We provide real-time updates and ensure your order arrives fresh and on time.",
  },
  {
    id: "not-happy",
    question: "What if I'm not happy with my designs?",
    answer:
      "Your satisfaction is our priority. If you're not completely happy with your designs, we offer unlimited revisions until you're satisfied. We also provide a satisfaction guarantee for all our services.",
  },
  {
    id: "request-limit",
    question: "Is there a limit to how many requests I can have?",
    answer:
      "There's no limit to the number of requests you can make. However, we work on them one at a time to ensure quality and attention to detail. You can queue up as many requests as you need.",
  },
  {
    id: "full-time-designer",
    question: "Why wouldn't I just hire a full-time designer?",
    answer:
      "Hiring a full-time designer comes with significant overhead costs, benefits, and the challenge of finding the right talent. Our service gives you access to expert designers without the long-term commitment and at a fraction of the cost.",
  },
  {
    id: "a-la-carte",
    question: "How does the A La Carte process work?",
    answer:
      "With an A La Carte subscription, you get 50 hours of design work per month from our full-service creative team.\n\nAfter a kickoff call to discuss your goals, you submit requests through our project management tool, prioritizing your most important items.\n\nWe work on tasks one at a time, track the hours spent, and provide updates every two business days. If you run out of hours, you can purchase additional time or wait until your subscription renews.",
  },
  {
    id: "share-feedback",
    question: "How do I share feedback?",
    answer:
      "Sharing feedback is easy through our project management platform. You can leave comments directly on designs, request specific changes, and communicate with your dedicated design team in real-time.",
  },
  {
    id: "have-calls",
    question: "Can we have calls?",
    answer:
      "We encourage regular check-ins and are available for calls whenever needed. You can schedule calls through our platform or request them as part of your project workflow.",
  },
  {
    id: "cancellation-policy",
    question: "What's your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your subscription will remain active until the end of your current billing period.",
  },
]

export function Questions() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "a-la-carte": true // Default open item
  })

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

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

        {/* Organic floating gradients */}
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-2 text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Got any questions?
          </motion.h2>
          <motion.p
            className="text-2xl md:text-3xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We've got answers.
          </motion.p>
        </motion.div>

        {/* FAQ Grid - Perfectly Symmetrical */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
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
                <Card className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div 
                    className="cursor-pointer"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="flex-shrink-0">
                        {openItems[faq.id] ? (
                          <Minus className="h-5 w-5 text-gray-600 transition-colors duration-300 group-hover:text-[#cf21c3]" />
                        ) : (
                          <Plus className="h-5 w-5 text-gray-600 transition-colors duration-300 group-hover:text-[#cf21c3]" />
                        )}
                      </div>
                      <span className="flex-1 text-lg font-semibold text-gray-900 group-hover:text-[#cf21c3] transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                  </div>
                  {openItems[faq.id] && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 text-gray-700 leading-relaxed ml-8"
                    >
                      {faq.answer.split("\n").map((paragraph, index) => (
                        <p key={index} className={index > 0 ? "mt-4" : ""}>
                          {paragraph}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
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
                <Card className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div 
                    className="cursor-pointer"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="flex-shrink-0">
                        {openItems[faq.id] ? (
                          <Minus className="h-5 w-5 text-gray-600 transition-colors duration-300 group-hover:text-[#cf21c3]" />
                        ) : (
                          <Plus className="h-5 w-5 text-gray-600 transition-colors duration-300 group-hover:text-[#cf21c3]" />
                        )}
                      </div>
                      <span className="flex-1 text-lg font-semibold text-gray-900 group-hover:text-[#cf21c3] transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                  </div>
                  {openItems[faq.id] && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 text-gray-700 leading-relaxed ml-8"
                    >
                      {faq.answer.split("\n").map((paragraph, index) => (
                        <p key={index} className={index > 0 ? "mt-4" : ""}>
                          {paragraph}
                        </p>
                      ))}
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