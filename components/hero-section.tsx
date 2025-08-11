"use client"
import { useEffect, useState } from "react"
import Link from "next/link" // Import Link for the button

interface TypewriterEffectProps {
  words: string[]
  className?: string
}

// Moved TypewriterEffect component into the same file
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
      // Ensure it's inline-block to allow text flow with the headline
      // Changed to the specific hex color #cf21c3
      className={`inline-block text-[#cf21c3] font-bold ${className}`}
      style={{ fontWeight: "800" }}
    >
      {currentText}
    </span>
  )
}

export default function HeroSection() {
  const typingWords = ["Growth", "Results", "Revenue", "Success", "Performance", "Scaling", "Profit", "Impact"]
  return (
    <div id="hero-section" className="min-h-screen bg-white relative overflow-hidden">
      {/* Removed Enhanced Background Elements and their animations/colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"></div>
      </div>
      {/* Main Hero Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between pt-8 sm:pt-12 lg:pt-20 relative z-10 gap-4 lg:gap-0 px-4 md:px-6">
        {/* Left Content (Text) */}
        <div className="w-full lg:w-[35%] text-center lg:text-left order-1 lg:order-1">
          <div className="mb-6 sm:mb-8">
            {/* Corrected headline for 3 lines with typewriter effect inline on the third line */}
            {/* Adjusted text size for mobile to be larger */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6">
              Everything Your
              <br />
              Business Needs
              <br />
              For <TypewriterEffect words={typingWords} />
            </h1>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Your business growth should feel predictable, not like a gamble. We partner with companies who want real
              results they can count on.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
            {/* Changed button to Link and removed second button, removed hover effects */}
            <Link
              href="https://calendly.com/saadalii/kayidigital"
              className="bg-black text-white px-6 sm:px-8 py-3 rounded-full font-medium shadow-lg"
            >
              Let's do this
            </Link>
          </div>
          {/* Service Tags - Mobile Optimized */}
          <div className="bg-black/95 rounded-3xl p-4 sm:p-6 max-w-sm mx-auto lg:mx-0 shadow-2xl">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {/* Removed hover effects and changed colors */}
              <span className="bg-white text-black px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-center">
                UI/UX Design
              </span>
              <span className="border border-gray-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-center">
                Web Design
              </span>
              <span className="border border-gray-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-center">
                Social Media
              </span>
              {/* Changed gradient to solid black */}
              <span className="bg-black text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-center shadow-lg">
                Mobile Apps
              </span>
              <span className="border border-gray-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-center">
                E-commerce
              </span>
              <span className="bg-white text-black px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-center">
                Analytics
              </span>
            </div>
          </div>
        </div>
        {/* Right Content (Image) */}
        <div className="w-full lg:w-[65%] relative order-2 lg:order-2">
          {/* Central Badge - Removed hover effects */}
          <div className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-black rounded-full p-3 sm:p-4 border-4 border-white shadow-2xl">
              <div className="text-white text-xs font-bold text-center">
                <div>DISCOVER THE</div>
                <div className="text-white">MAGIC OF UX</div> {/* Changed purple to white */}
              </div>
            </div>
          </div>
          {/* Main Image Container - Removed hover effects and background queries */}
          <div className="relative">
            {/* Desktop Image */}
            <img
              src="/images/hero_banner_desk.jpg" // Removed query
              alt="Person using VR headset in digital world (Desktop)"
              className="w-full h-auto hidden lg:block"
              loading="eager"
            />
            {/* Mobile Image */}
            <img
              src="/images/hero_banner_mobile.jpg" // Removed query
              alt="Person using VR headset in digital world (Mobile)"
              className="w-full h-auto block lg:hidden"
              loading="eager"
            />
            {/* Removed Floating Elements */}
          </div>
          {/* Enhanced Stats Card - Removed animations and gradients */}
          <div className="absolute bottom-4 right-4 sm:bottom-0 sm:right-4 lg:right-0 bg-black/95 rounded-3xl p-4 sm:p-6 text-white min-w-[180px] sm:min-w-[200px] shadow-2xl border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                {/* Changed gradient and animation to solid black */}
                <div className="text-2xl sm:text-3xl font-bold text-white">80+</div>
                <div className="text-gray-400 text-xs sm:text-sm">New Users</div>
              </div>
              <div className="flex -space-x-2">
                {/* Removed hover effects */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg/1200px-Andrzej_Person_Kancelaria_Senatu.jpg"
                  alt="User 1"
                  className="w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 border-black"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt="User 2"
                  className="w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 border-black"
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt="User 3"
                  className="w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 border-black"
                />
              </div>
            </div>
            {/* Changed background to the specified pink color */}
            <Link
              href="https://calendly.com/saadalii/kayidigital"
              className="bg-[#cf21c3] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium w-full text-center block"
            >
              Join now
            </Link>
          </div>
        </div>
      </div>
      {/* Removed style jsx block */}
    </div>
  )
}
