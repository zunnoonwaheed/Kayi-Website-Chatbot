"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"

const companies = [
  { name: "Mirakl", logo: "/images/mirakl-logo.png", width: 80, height: 80 },
  { name: "Rejuuv", logo: "/images/rejuuv-logo.png", width: 80, height: 80 },
  { name: "Saint Draper", logo: "/images/sd-logo.png", width: 80, height: 80 },
  { name: "Cover Up", logo: "/images/coverup-logo.png", width: 80, height: 80 },

  { name: "Marquee 1", logo: "/images/marquee1.jpeg", width: 100, height: 50 },
  { name: "Marquee 2", logo: "/images/marquee2.jpeg", width: 100, height: 50 },
  { name: "Marquee 3", logo: "/images/marquee3.jpeg", width: 100, height: 50 },
  { name: "Marquee 4", logo: "/images/marquee4.jpeg", width: 100, height: 50 },
  { name: "Marquee 5", logo: "/images/marquee5.jpeg", width: 100, height: 50 },
  { name: "Marquee 6", logo: "/images/marquee6.jpeg", width: 100, height: 50 },
  { name: "Marquee 7", logo: "/images/marquee7.jpeg", width: 100, height: 50 },
  { name: "Marquee 8", logo: "/images/marquee8.jpeg", width: 100, height: 50 },
]

export default function Marquee() {
  const firstSetRef = useRef<HTMLDivElement>(null)
  const [widthOfFirstSet, setWidthOfFirstSet] = useState(0)

  useEffect(() => {
    if (firstSetRef.current) {
      let calculatedWidth = 0
      const children = Array.from(firstSetRef.current.children) as HTMLElement[]
      children.forEach((child, i) => {
        calculatedWidth += child.offsetWidth
        if (i < children.length - 1) {
          calculatedWidth += 48 // gap-12 is 48px
        }
      })
      setWidthOfFirstSet(calculatedWidth)
    }
  }, [companies])

  // Increased divisor from 30 to 60 → faster movement
  const animationDuration = widthOfFirstSet > 0 ? widthOfFirstSet / 60 : 5

  return (
    <section className="w-full bg-white overflow-hidden py-8 border-t border-b border-gray-200">
      <div className="flex overflow-hidden">
        <motion.div
          className="flex items-center gap-12"
          animate={{ x: widthOfFirstSet ? [0, -widthOfFirstSet] : 0 }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: animationDuration,
              ease: "linear",
            },
          }}
        >
          {/* First set (measured for width) */}
          <div ref={firstSetRef} className="flex items-center gap-12 flex-shrink-0">
            {companies.map((company, index) => (
              <div
                key={`${company.name}-${index}-first`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: `${company.width + 24}px`,
                  height: `${company.height + 24}px`,
                  minWidth: `${company.width + 24}px`,
                  minHeight: `${company.height + 24}px`,
                }}
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className="object-contain transition-transform duration-300 hover:scale-110"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            ))}
          </div>

          {/* Second set (for seamless loop) */}
          <div className="flex items-center gap-12 flex-shrink-0">
            {companies.map((company, index) => (
              <div
                key={`${company.name}-${index}-second`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: `${company.width + 24}px`,
                  height: `${company.height + 24}px`,
                  minWidth: `${company.width + 24}px`,
                  minHeight: `${company.height + 24}px`,
                }}
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className="object-contain transition-transform duration-300 hover:scale-110"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
