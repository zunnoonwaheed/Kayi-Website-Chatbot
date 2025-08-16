"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin } from "lucide-react"

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
    x: 22, // USA
    y: 35,
  },
  {
    id: "uae",
    country: "UAE",
    x: 65, // Middle East
    y: 42,
  },
  {
    id: "canada",
    country: "Canada",
    x: 20, // Canada
    y: 25,
  },
  {
    id: "uk",
    country: "United Kingdom",
    x: 50, // Europe
    y: 28,
  },
  {
    id: "pakistan",
    country: "Pakistan",
    x: 70, // South Asia
    y: 38,
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
    <section ref={sectionRef} className="bg-black text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-transparent to-gray-900/30 animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#cf21c3]/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#cf21c3]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s", animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-16">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 text-white leading-tight transition-all duration-1200 ease-out ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-20 scale-90"
            }`}
          >
            <span
              className={`inline-block transition-all duration-1000 delay-300 ease-out ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-16 scale-85"
              }`}
            >
              Pioneering Digital Innovation Across
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
            className={`text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-8 scale-95"
            }`}
          >
            We're proud to deliver cutting-edge, expert solutions that transform businesses and drive innovation. Our
            expertise knows no boundaries, enabling us to partner with clients around the world to achieve extraordinary
            results.
          </p>
        </div>

        <div className="relative mb-20">
          <div className="relative w-full max-w-5xl mx-auto h-80 md:h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="https://hashpotato.io/wp-content/uploads/2024/07/Digital-Agency-Contact-World-Image-1-1536x679.webp"
                alt="World Map"
                className="max-w-full max-h-full object-contain opacity-60"
              />
            </div>

            {locations.map((location, index) => (
              <div
                key={location.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                }}
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                <div
                  className="absolute inset-0 w-20 h-20 bg-[#cf21c3]/20 rounded-full animate-ping"
                  style={{ animationDelay: `${index * 0.8}s`, animationDuration: "3s" }}
                />
                <div
                  className="absolute inset-0 w-16 h-16 bg-[#cf21c3]/30 rounded-full animate-ping"
                  style={{ animationDelay: `${index * 0.6}s`, animationDuration: "2.5s" }}
                />
                <div
                  className="absolute inset-0 w-12 h-12 bg-[#cf21c3]/40 rounded-full animate-ping"
                  style={{ animationDelay: `${index * 0.4}s`, animationDuration: "2s" }}
                />
                <div
                  className="absolute inset-0 w-8 h-8 bg-[#cf21c3]/50 rounded-full animate-ping"
                  style={{ animationDelay: `${index * 0.2}s`, animationDuration: "1.5s" }}
                />

                <div className="relative">
                  <div
                    className="w-6 h-6 bg-[#cf21c3] rounded-full shadow-lg group-hover:scale-150 transition-all duration-500 animate-pulse border-2 border-white/50"
                    style={{
                      boxShadow:
                        "0 0 30px rgba(207, 33, 195, 0.8), 0 0 20px rgba(207, 33, 195, 0.6), 0 0 10px rgba(207, 33, 195, 0.4)",
                      animationDuration: "1.5s",
                      animationDelay: `${index * 0.3}s`,
                    }}
                  />
                </div>

                {hoveredLocation === location.id && (
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-slate-800 p-3 rounded-xl shadow-2xl min-w-32 z-20 border border-slate-200 animate-in fade-in-0 zoom-in-95 duration-300">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4 text-[#cf21c3]" />
                      <div className="font-bold text-[#cf21c3] text-center">{location.country}</div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#cf21c3]/10 rounded-full flex items-center justify-center group-hover:bg-[#cf21c3]/20 transition-all duration-500 group-hover:scale-110">
              <svg className="w-8 h-8 text-[#cf21c3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Client-Centric Approach</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We prioritize your satisfaction, tailoring our services to meet your specific requirements and ensure
              optimal outcomes.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#cf21c3]/10 rounded-full flex items-center justify-center group-hover:bg-[#cf21c3]/20 transition-all duration-500 group-hover:scale-110">
              <svg className="w-8 h-8 text-[#cf21c3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our team comprises professionals with expertise across various technologies, ensuring top-quality results.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#cf21c3]/10 rounded-full flex items-center justify-center group-hover:bg-[#cf21c3]/20 transition-all duration-500 group-hover:scale-110">
              <svg className="w-8 h-8 text-[#cf21c3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Innovative Solutions</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We leverage technology to create solutions that address your unique challenges, driving growth and
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
