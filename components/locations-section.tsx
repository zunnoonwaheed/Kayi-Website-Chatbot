"use client"

import { useState } from "react"
import { Settings, Users, Target } from "lucide-react"

interface Location {
  id: string
  country: string
  address: string
  x: number // percentage from left
  y: number // percentage from top
}

const locations: Location[] = [
  {
    id: "canada",
    country: "Canada",
    address: "140 Doubtfire Cres, Markham, ON, Canada",
    x: 20, // North America position
    y: 25,
  },
  {
    id: "uk",
    country: "United Kingdom",
    address: "International House, 12 Constance St, London E16 2DQ, United Kingdom",
    x: 50, // Europe position
    y: 30,
  },
  {
    id: "pakistan",
    country: "Pakistan",
    address: "Suite 33-35, 7th Floor, Plot Nos. 68 & 69, Kayani Shaheed Road, Karachi, Pakistan",
    x: 70, // Asia position
    y: 45,
  },
]

export default function LocationsSection() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)

  return (
    <section className="bg-black text-white py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-[#cf21c3]/25 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-l from-[#cf21c3]/25 to-pink-400/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-600/20 to-[#cf21c3]/15 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-tr from-[#cf21c3]/20 to-pink-500/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        {/* Floating particles effect */}
        <div
          className="absolute top-20 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-60"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="absolute top-40 right-1/3 w-1 h-1 bg-[#cf21c3] rounded-full animate-bounce opacity-80"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pink-300 rounded-full animate-bounce opacity-70"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/5 w-1 h-1 bg-pink-500 rounded-full animate-bounce opacity-50"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-[#cf21c3] rounded-full animate-bounce opacity-40"
          style={{ animationDelay: "2.5s" }}
        ></div>
        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-900/5 to-[#cf21c3]/10"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-2xl">
            Pioneering Digital Innovation Across
            <br />
          3 Countries
          </h2>
          <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
            We deliver cutting-edge solutions that transform businesses globally. Our expertise spans continents,
            partnering with clients worldwide to achieve extraordinary results.
          </p>
        </div>

        <div className="h-1 bg-gradient-to-r from-transparent via-[#cf21c3] to-transparent mb-8 animate-pulse shadow-lg shadow-pink-500/30"></div>

        {/* World Map */}
        <div className="relative mb-12">
          <div className="relative w-full max-w-3xl mx-auto h-64">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `radial-gradient(circle, #666 1px, transparent 1px)`,
                backgroundSize: "6px 6px",
                maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'%3E%3Cpath d='M150 100c50-20 100-10 150 0s100 20 150 10 100-30 150-20 100 40 150 30c30-5 50-15 50-15v300c0 0-20 10-50 15-50 10-100-30-150-30s-100 30-150 20-100-20-150-10-100 10-150 0-100-20-150 0v-300z' fill='white'/%3E%3C/svg%3E")`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            />

            {/* Location Pins */}
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
                {/* Pin */}
                <div className="relative">
                  <div
                    className="w-5 h-5 bg-[#cf21c3] rounded-full border-2 border-white shadow-lg group-hover:scale-125 transition-transform duration-200 animate-pulse"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  />
                  <div
                    className="absolute inset-0 w-5 h-5 bg-[#cf21c3] rounded-full opacity-30 animate-ping"
                    style={{ animationDelay: `${index * 0.7}s` }}
                  />
                </div>

                {/* Tooltip */}
                {hoveredLocation === location.id && (
                  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-slate-800 p-3 rounded-xl shadow-2xl min-w-56 z-10 border border-slate-200">
                    <div className="font-semibold text-sm mb-1 text-[#cf21c3]">{location.country}</div>
                    <div className="text-xs text-slate-600 leading-relaxed">{location.address}</div>
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-transparent via-[#cf21c3] to-transparent mb-8 animate-pulse shadow-lg shadow-pink-500/30"></div>

        {/* Feature Boxes */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center group">
            <div className="w-12 h-12 bg-[#cf21c3] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Client-Centric Approach</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We prioritize your satisfaction, tailoring services to meet specific requirements and ensure optimal
              outcomes.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-12 h-12 bg-[#cf21c3] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Expert Team</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our team comprises professionals with expertise across various technologies, ensuring top-quality results.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-12 h-12 bg-[#cf21c3] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Innovative Solutions</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We leverage technology to create solutions that address unique challenges, driving growth and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
