"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  words: string[]
  className?: string
}

function TypewriterEffect({ words, className = "" }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span
      className={`text-black font-bold ${className}`}
      style={{
        fontWeight: "700",
      }}
    >
      {currentText}
    </span>
  )
}

export default function HeroSection() {
  const typingWords = ["Growth.", "Results.", "Revenue.", "Success.", "Performance.", "Scaling.", "Profit.", "Impact."]

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section className="relative h-auto md:min-h-screen pt-6 md:pt-24 lg:pt-32 pb-0 px-0 md:px-4 lg:px-8 overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero7.avif" alt="Hero background" fill className="object-cover" priority />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      <div className="container mx-auto px-0 md:px-4 lg:px-8 z-10 flex flex-col items-center text-center max-w-6xl relative">
        {/* Main Headline */}
        <div className="mb-6 md:mb-8">
          <h1 className="font-light text-black leading-tight text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 md:mb-6">
            Everything Your Business Needs For{" "}
            <span className="inline-block">
              <TypewriterEffect words={typingWords} />
            </span>
          </h1>
          <p className="text-gray-600 text-base md:text-xl lg:text-2xl max-w-4xl mx-auto leading-snug md:leading-relaxed px-4 md:px-0">
            Your business growth should feel predictable, not like a gamble.
            <br className="hidden sm:block" />
            We partner with companies who want real results they can count on.
          </p>
        </div>

        {/* Contact Button */}
        <div className="flex justify-center mb-6 md:mb-8">
          <button
            onClick={scrollToContact}
            className="border-2 border-black rounded-full px-6 py-2 md:px-8 md:py-3 text-base md:text-lg font-medium hover:bg-[#cf21c3] hover:text-white hover:border-[#cf21c3] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact us
          </button>
        </div>

        {/* Trusted by text */}
        <p className="text-gray-600 text-sm md:text-lg mb-8 md:mb-12">Trusted by 80+ Brands Globally</p>

        {/* ✅ Statistics Section */}
        <div className="w-full bg-[#f4f4f4] rounded-3xl py-6 px-4 md:py-10 md:px-12 shadow-inner mb-10 md:mb-16">
          <div className="grid grid-cols-3 gap-4 md:gap-12 w-full max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-3xl md:text-6xl font-light bg-gradient-to-r from-[#cf21c3] to-[#e879f9] bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-105 transition-transform duration-300">
                $3M
              </div>
              <div className="text-gray-600 text-xs md:text-lg">Rev Generated</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-6xl font-light bg-gradient-to-r from-[#cf21c3] to-[#e879f9] bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-105 transition-transform duration-300">
                1,000 +
              </div>
              <div className="text-gray-600 text-xs md:text-lg">Ads Created</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-6xl font-light bg-gradient-to-r from-[#cf21c3] to-[#e879f9] bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-105 transition-transform duration-300">
                80 +
              </div>
              <div className="text-gray-600 text-xs md:text-lg">Brands</div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-6 w-16 h-16 bg-gradient-to-r from-[#cf21c3] to-[#e879f9] rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-12 right-6 w-20 h-20 bg-gradient-to-r from-[#cf21c3] to-[#e879f9] rounded-full opacity-10 blur-xl"></div>
      </div>
    </section>
  )
}
