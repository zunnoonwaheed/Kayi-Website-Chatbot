"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqData = [
  {
    id: "item-1",
    question: "How quickly can you start working on my project?",
    answer: "We can usually get started within 48 hours of our initial call. After understanding your needs, we'll put together a clear plan and timeline so you know exactly what to expect and when.",
  },
  {
    id: "item-2",
    question: "What if the solution doesn't work for my business?",
    answer: "We work closely with you throughout the process to make sure everything fits your needs. If something isn't working, we'll adjust our approach until we get it right - your success is our priority.",
  },
  {
    id: "item-3",
    question: "Do you work with businesses of all sizes?",
    answer: "Yes, we work with everyone from startups to established companies. Our approach scales with your business - whether you need simple solutions or complex enterprise-level implementations.",
  },
  {
    id: "item-4",
    question: "How do you measure success?",
    answer: "We focus on metrics that actually matter to your business - whether that's increased revenue, more leads, time saved, or improved efficiency. We'll agree on clear goals upfront and track progress together.",
  },
  {
    id: "item-5",
    question: "What's your typical project timeline?",
    answer: "Most projects take 2-8 weeks depending on complexity. We'll give you a realistic timeline upfront and keep you updated throughout. Rush projects can often be accommodated with additional resources.",
  },
  {
    id: "item-6",
    question: "How is this different from hiring an in-house team?",
    answer: "You get experienced specialists across multiple areas without the overhead costs, hiring time, or management complexity. We bring proven systems and can scale up or down based on your needs.",
  },
  {
    id: "item-7",
    question: "What happens to our data and business information?",
    answer: "Everything stays with you. We sign NDAs as standard practice, follow strict security protocols, and ensure you maintain full ownership of all accounts, data, and systems we work with.",
  },
  {
    id: "item-8",
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer continued support to ensure everything runs smoothly. This includes training your team, monitoring performance, making adjustments, and being available when you need help.",
  },
]

export default function FaqsSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(item => item !== id))
    } else {
      setOpenItems([...openItems, id])
    }
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-white">
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-4 text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Everything you need to know about our services and processes. Can't find an answer?{" "}
            <a href="https://calendly.com/saadalii/kayidigital" className="text-[#cf21c3] font-semibold hover:underline">
            We typically respond back in an hour!
            </a>
          
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((faq, index) => {
            const isOpen = openItems.includes(faq.id)
            
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-slate-300"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cf21c3]"
                >
                  <h3 className="text-lg font-semibold text-black pr-4">{faq.question}</h3>
                  <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-gradient-to-br from-[#cf21c3] to-pink-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 text-slate-600">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://calendly.com/saadalii/kayidigital"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#cf21c3] to-[#e879f9] hover:from-[#a21caf] hover:to-[#cf21c3] text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Schedule a free consultation
            <svg
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}