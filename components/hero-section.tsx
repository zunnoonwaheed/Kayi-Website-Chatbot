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
      // Changed to 'block' and added min-h to prevent layout shifts
      className={`block min-h-[80px] bg-gradient-to-r from-[#cf21c3] to-[#e879f9] bg-clip-text text-transparent font-bold ${className}`}
      style={{ fontWeight: "800" }}
    >
      {currentText}
    </span>
  )
}
export default function HeroSection() {
  const typingWords = ["Digital World", "Future", "Innovation", "Success"]
  return (
    <div id="hero-section" className="min-h-screen bg-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-300/15 to-purple-300/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-200/20 via-pink-200/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>
      {/* Main Hero Content */}
      {/* Adjusted padding for mobile to allow image to expand on mobile */}
      <div className="flex flex-col lg:flex-row items-center justify-between pt-8 sm:pt-12 lg:pt-20 relative z-10 gap-8 lg:gap-24">
        {/* Left Content (Text) */}
        {/* Added px here for mobile padding, and adjusted desktop padding for alignment */}
        <div className="w-full lg:w-[30%] text-center lg:text-left order-2 lg:order-1 px-4 sm:px-6 lg:pl-12 lg:pr-0">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight mb-4 sm:mb-6">
              Building
              <br />
              Brands for the{" "}
              <span className="block">
                <TypewriterEffect words={typingWords} />
              </span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              We help brands grow through innovative design, cutting-edge development, and strategic digital marketing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
            <button className="bg-black text-white px-6 sm:px-8 py-3 rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
              Let's do this
            </button>
          </div>
          {/* Service Tags - Mobile Optimized */}
          <div className="bg-black/95 backdrop-blur-sm rounded-3xl p-4 sm:p-6 max-w-sm mx-auto lg:mx-0 shadow-2xl">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <span className="bg-white text-black px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-center hover:scale-105 transition-transform duration-200">
                UI/UX Design
              </span>
              <span className="border border-gray-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-center hover:scale-105 transition-transform duration-200">
                Web Design
              </span>
              <span className="border border-gray-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-center hover:scale-105 transition-transform duration-200">
                Social Media
              </span>
              <span className="bg-gradient-to-r from-[#cf21c3] to-[#e879f9] text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-center hover:scale-105 transition-transform duration-200 shadow-lg">
                Mobile Apps
              </span>
              <span className="border border-gray-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-center hover:scale-105 transition-transform duration-200">
                E-commerce
              </span>
              <span className="bg-white text-black px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-center hover:scale-105 transition-transform duration-200">
                Analytics
              </span>
            </div>
          </div>
        </div>
        {/* Right Content (Image) */}
        {/* Removed px from here for mobile full width, and adjusted desktop padding for alignment */}
        <div className="w-full lg:w-[70%] relative order-1 lg:order-2 lg:pr-12 lg:pl-0">
          {/* Central Badge */}
          <div className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-black rounded-full p-3 sm:p-4 border-4 border-white shadow-2xl hover:scale-110 transition-transform duration-300">
              <div className="text-white text-xs font-bold text-center">
                <div>DISCOVER THE</div>
                <div className="text-purple-400">MAGIC OF UX</div>
              </div>
            </div>
          </div>
          {/* Main Image Container */}
          <div className="relative group">
            {/* Desktop Image */}
            <img
              src="/images/vr_desktop.jpeg"
              alt="Person using VR headset in digital world (Desktop)"
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 hidden lg:block"
              loading="eager"
            />
            {/* Mobile Image */}
            <img
              src="/images/vr_mobile.jpeg"
              alt="Person using VR headset in digital world (Mobile)"
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 block lg:hidden"
              loading="eager"
            />
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce shadow-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-300 shadow-lg"></div>
          </div>
          {/* Enhanced Stats Card */}
          <div className="absolute -bottom-4 sm:bottom-0 -right-2 sm:right-0 bg-black/95 backdrop-blur-sm rounded-3xl p-4 sm:p-6 text-white min-w-[180px] sm:min-w-[200px] shadow-2xl border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#cf21c3] to-[#e879f9] bg-clip-text text-transparent animate-number-glow">
                  5100+
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">New Users</div>
              </div>
              <div className="flex -space-x-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg/1200px-Andrzej_Person_Kancelaria_Senatu.jpg"
                  alt="User 1"
                  className="w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 border-black hover:scale-110 transition-transform duration-200"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt="User 2"
                  className="w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 border-black hover:scale-110 transition-transform duration-200"
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt="User 3"
                  className="w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 border-black hover:scale-110 transition-transform duration-200"
                />
              </div>
            </div>
            <button className="bg-gradient-to-r from-[#cf21c3] to-[#e879f9] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium w-full hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300">
              Join now
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        @keyframes number-glow {
          0%,
          100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.2);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-number-glow {
          animation: number-glow 2s ease-in-out infinite;
        }
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  )
}
