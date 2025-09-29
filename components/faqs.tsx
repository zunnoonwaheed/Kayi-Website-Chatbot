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
    <section className="pt-12 px-4 sm:px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-6"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="sm:hidden">FAQs</span>
            <span className="hidden sm:inline">Frequently Asked Questions</span>
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4"
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
        <div className="space-y-2 px-4">
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
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cf21c3]"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-black pr-4">{faq.question}</h3>
                  <div className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-gradient-to-br from-[#cf21c3] to-pink-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-slate-600 text-sm sm:text-base">
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
          className="text-center mt-6 px-4"
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#cf21c3] to-[#e879f9] hover:from-[#a21caf] hover:to-[#cf21c3] text-white font-semibold text-base sm:text-lg px-5 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
          >
           Book a Free Consultation
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1"
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