"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, Phone } from "lucide-react"

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-[80px] right-4 z-50 flex flex-col items-end md:bottom-24 md:right-6">
      {/* Contact Options */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="mb-2 flex flex-col items-end space-y-2"
        >
          {/* WhatsApp Option */}
          <motion.a
            href="https://wa.me/923090613822"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-3 py-1 rounded-2xl shadow-lg bg-green-600 text-white font-medium hover:bg-green-700 text-sm md:text-base"
            aria-label="Contact via WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path d="M216,40H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16h60.43l13.68,23.94a16,16,0,0,0,27.78,0L155.57,200H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM84,132a12,12,0,1,1,12-12A12,12,0,0,1,84,132Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,132Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,132Z" />
            </svg>
            WhatsApp
          </motion.a>

          {/* Call Option */}
          <motion.a
            href="tel:+923090613822"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-3 py-1 rounded-2xl shadow-lg bg-blue-600 text-white font-medium hover:bg-blue-700 text-sm md:text-base"
            aria-label="Call us"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </motion.a>
        </motion.div>
      )}

      {/* Main Floating Button with bounce */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl bg-gradient-to-br from-green-500 to-green-600 text-white"
        aria-label="Contact options"
      >
        {isOpen ? (
          <X className="w-6 md:w-7 h-6 md:h-7" />
        ) : (
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="white"
              className="w-6 md:w-7 h-6 md:h-7"
            >
              <path d="M216,40H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16h60.43l13.68,23.94a16,16,0,0,0,27.78,0L155.57,200H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM84,132a12,12,0,1,1,12-12A12,12,0,0,1,84,132Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,132Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,132Z" />
            </svg>
          </motion.div>
        )}
      </motion.button>
    </div>
  )
}
