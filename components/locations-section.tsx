"use client"

import { useState, useEffect, useRef } from "react"

interface Location {
  id: string
  country: string
  x: number // percentage from left
  y: number // percentage from top
}

const locations: Location[] = [
  {
    id: "usa",
    country: "USA",
    x: 18, // moved USA further left to spread locations
    y: 35,
  },
  {
    id: "uae",
    country: "UAE",
    x: 62, // moved UAE left to create more space from Dubai
    y: 40,
  },
  {
    id: "dubai",
    country: "Dubai",
    x: 68, // moved Dubai further right to separate from UAE
    y: 45,
  },
  {
    id: "uk",
    country: "United Kingdom",
    x: 48, // adjusted UK position
    y: 25,
  },
  {
    id: "pakistan",
    country: "Pakistan",
    x: 75, // moved Pakistan further right to spread locations
    y: 35,
  },
]

export default function LocationsSection() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-black text-white py-8 md:py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-6 md:mb-12">
          <h2
            className={`text-[36px] font-bold mb-4 md:mb-8 text-white leading-tight transition-all duration-1200 ease-out ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-20 scale-90"
            }`}
          >
            <span
              className={`inline-block transition-all duration-1000 delay-300 ease-out ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-16 scale-85"
              }`}
            >
              Pioneering Digital Innovation  Across 
            </span>
            <br />
            <span
              className={`text-[#cf21c3] inline-block transition-all duration-1000 delay-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-12 scale-80"
              }`}
            >
          The Globe
            </span>
          </h2>
          <p
            className={`text-gray-300 text-base md:text-xl max-w-4xl mx-auto leading-relaxed px-2 md:px-0 transition-all duration-1000 delay-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-8 scale-95"
            }`}
          >
            We're proud to deliver cutting-edge, expert solutions that transform businesses and drive innovation. Our
            expertise knows no boundaries, enabling us to partner with clients around the world to achieve extraordinary
            results.
          </p>
        </div>

        <div className="relative mb-8 md:mb-16">
          <div className="relative w-full max-w-full mx-auto h-[300px] md:h-[500px] lg:h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl">
              <img
                src="https://hashpotato.io/wp-content/uploads/2024/07/Digital-Agency-Contact-World-Image-1-1536x679.webp"
                alt="World Map"
                className="max-w-full max-h-full object-contain opacity-95 filter brightness-200 contrast-150"
              />
            </div>

            {locations.map((location, index) => (
              <div
                key={location.id}
                className="absolute flex items-center justify-center cursor-pointer group"
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                }}
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                {/* Large ping circle */}
                <div
                  className="absolute w-16 h-16 bg-[#cf21c3]/10 rounded-full animate-ping"
                  style={{
                    animationDelay: `${index * 1.5}s`,
                    animationDuration: "6s",
                  }}
                />
                {/* Medium ping circle */}
                <div
                  className="absolute w-12 h-12 bg-[#cf21c3]/20 rounded-full animate-ping"
                  style={{
                    animationDelay: `${index * 1.0}s`,
                    animationDuration: "5s",
                  }}
                />
                {/* Small ping circle */}
                <div
                  className="absolute w-8 h-8 bg-[#cf21c3]/30 rounded-full animate-ping"
                  style={{
                    animationDelay: `${index * 0.5}s`,
                    animationDuration: "4s",
                  }}
                />

                {/* Center dot - perfectly centered using flex */}
                <div
                  className="w-3 h-3 bg-[#cf21c3] rounded-full shadow-lg group-hover:scale-150 transition-all duration-500 animate-pulse border border-[#cf21c3]/80 relative z-10"
                  style={{
                    boxShadow: "0 0 15px rgba(207, 33, 195, 0.6), 0 0 8px rgba(207, 33, 195, 0.4)",
                    animationDuration: "4s",
                    animationDelay: `${index * 0.8}s`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto px-2 md:px-0">
          <div className="text-center group p-4 md:p-8 rounded-2xl bg-gray-900/20 backdrop-blur-sm border border-gray-800/30 hover:border-[#cf21c3]/30 transition-all duration-300">
            <div className="w-12 md:w-20 h-12 md:h-20 mx-auto mb-3 md:mb-6 bg-gradient-to-br from-[#cf21c3]/20 to-[#cf21c3]/10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110">
              <svg
                className="w-5 md:w-8 h-5 md:h-8 text-[#cf21c3]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-2xl font-semibold text-white mb-2 md:mb-4">Client-Centric Approach</h3>
            <p className="text-sm md:text-lg text-gray-400 leading-relaxed">
              We prioritize your satisfaction, tailoring our services to meet your specific requirements and ensure
              optimal outcomes.
            </p>
          </div>

          <div className="text-center group p-4 md:p-8 rounded-2xl bg-gray-900/20 backdrop-blur-sm border border-gray-800/30 hover:border-[#cf21c3]/30 transition-all duration-300">
            <div className="w-12 md:w-20 h-12 md:h-20 mx-auto mb-3 md:mb-6 bg-gradient-to-br from-[#cf21c3]/20 to-[#cf21c3]/10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110">
              <svg
                className="w-5 md:w-8 h-5 md:h-8 text-[#cf21c3]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-2xl font-semibold text-white mb-2 md:mb-4">Expert Team</h3>
            <p className="text-sm md:text-lg text-gray-400 leading-relaxed">
              Our team comprises professionals with expertise across various technologies, ensuring top-quality results.
            </p>
          </div>

          <div className="text-center group p-4 md:p-8 rounded-2xl bg-gray-900/20 backdrop-blur-sm border border-gray-800/30 hover:border-[#cf21c3]/30 transition-all duration-300">
            <div className="w-12 md:w-20 h-12 md:h-20 mx-auto mb-3 md:mb-6 bg-gradient-to-br from-[#cf21c3]/20 to-[#cf21c3]/10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110">
              <svg
                className="w-5 md:w-8 h-5 md:h-8 text-[#cf21c3]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-2xl font-semibold text-white mb-2 md:mb-4">Innovative Solutions</h3>
            <p className="text-sm md:text-lg text-gray-400 leading-relaxed">
              We leverage technology to create solutions that address your unique challenges, driving growth and
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
