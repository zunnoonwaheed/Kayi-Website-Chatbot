"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const companies = [
  { name: "Mirakl", logo: "/images/mirakl-logo.jpeg", width: 80 },
  { name: "PEL", logo: "/images/pel-logo.png", width: 80 },
  { name: "Rejuuv", logo: "/images/rejuuv-logo.png", width: 80 },
  { name: "Saint Draper", logo: "/images/sd-logo.png", width: 80 },
  { name: "Cover Up", logo: "/images/coverup-logo.png", width: 80 },
]

const tripleCompanies = [...companies, ...companies, ...companies]

export default function Marquee() {
  return (
    <>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
      <section className="w-full bg-white overflow-hidden py-8 border-t border-b border-gray-200">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex items-center gap-12 animate-marquee"
            animate={{ x: [0, -33.333 * companies.length] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              },
            }}
          >
            {tripleCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: `${company.width + 24}px`,
                  height: `${company.width + 24}px`,
                  minWidth: `${company.width + 24}px`,
                  minHeight: `${company.width + 24}px`,
                }}
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.width}
                  className="object-contain transition-transform duration-300 hover:scale-110"
                  style={{ maxWidth: "100%", height: "auto" }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = "none"
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `<span class="text-gray-700 font-semibold text-sm tracking-wide">${company.name}</span>`
                    }
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
