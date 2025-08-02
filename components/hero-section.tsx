"use client"
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
      className={`bg-gradient-to-r from-[#cf21c3] to-[#e879f9] bg-clip-text text-transparent font-bold ${className}`}
      style={{
        fontWeight: "800",
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
    <section className="relative h-auto md:min-h-screen pt-6 md:pt-24 lg:pt-32 pb-0 px-0 md:px-4 lg:px-8 overflow-hidden flex items-center bg-white">
      {/* Clean Gradient Background - Like Reference Image */}
      <div className="absolute inset-0 z-0">
        {/* Main bottom gradient glow - exactly like the reference */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[900px] h-[450px] bg-gradient-radial from-[#cf21c3]/35 via-[#e879f9]/20 to-transparent rounded-full blur-3xl animate-glow"></div>

        {/* Inner intense glow for more definition */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-[#cf21c3]/50 via-[#e879f9]/25 to-transparent rounded-full blur-2xl animate-glow-inner"></div>
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
            className="relative border-2 border-black rounded-full px-6 py-2 md:px-8 md:py-3 text-base md:text-lg font-medium hover:bg-[#cf21c3] hover:text-white hover:border-[#cf21c3] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#cf21c3]/25 group overflow-hidden"
          >
            <span className="relative z-10">Contact us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#cf21c3] to-[#e879f9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Trusted by text */}
        <p className="text-gray-600 text-sm md:text-lg mb-8 md:mb-12">Trusted by 80+ Brands Globally</p>

        {/* Statistics Section */}
        <div className="w-full bg-white/90 backdrop-blur-sm border border-gray-100 rounded-3xl py-6 px-4 md:py-10 md:px-12 shadow-xl shadow-gray-200/50 mb-10 md:mb-16 relative overflow-hidden hover:shadow-2xl hover:shadow-[#cf21c3]/10 transition-all duration-500">
          <div className="grid grid-cols-3 gap-4 md:gap-12 w-full max-w-4xl mx-auto relative z-10">
            <div className="text-center group">
              <div className="text-3xl md:text-6xl font-light bg-gradient-to-r from-[#cf21c3] to-[#e879f9] bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-110 transition-all duration-300 drop-shadow-sm">
                $3M
              </div>
              <div className="text-gray-600 text-xs md:text-lg group-hover:text-gray-800 transition-colors duration-300">
                Rev Generated
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-6xl font-light bg-gradient-to-r from-[#cf21c3] to-[#e879f9] bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-110 transition-all duration-300 drop-shadow-sm">
                1,000 +
              </div>
              <div className="text-gray-600 text-xs md:text-lg group-hover:text-gray-800 transition-colors duration-300">
                Ads Created
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-6xl font-light bg-gradient-to-r from-[#cf21c3] to-[#e879f9] bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-110 transition-all duration-300 drop-shadow-sm">
                80 +
              </div>
              <div className="text-gray-600 text-xs md:text-lg group-hover:text-gray-800 transition-colors duration-300">
                Brands
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glow {
          0%, 100% {
            opacity: 0.6;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translateX(-50%) scale(1.1);
          }
        }
        @keyframes glow-inner {
          0%, 100% {
            opacity: 0.7;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scale(1.05);
          }
        }
        .animate-glow {
          animation: glow 6s ease-in-out infinite;
        }
        .animate-glow-inner {
          animation: glow-inner 4s ease-in-out infinite;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  )
}
