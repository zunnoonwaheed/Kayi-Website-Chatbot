"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"

const companies = [
  { name: "Mirakl", logo: "/images/marq1.png", width: 80, height: 80 },
  { name: "Rejuuv", logo: "/images/marq2.png", width: 80, height: 80 },
  { name: "Saint Draper", logo: "/images/marq3.png", width: 80, height: 80 },
  { name: "Cover Up", logo: "/images/marq4.png", width: 80, height: 80 },
  { name: "Marquee 1", logo: "/images/marq1.png", width: 100, height: 50 },
  { name: "Marquee 2", logo: "/images/marq2.png", width: 100, height: 50 },
  { name: "Marquee 3", logo: "/images/marq3.png", width: 100, height: 50 },
  { name: "Marquee 4", logo: "/images/marq4.png", width: 100, height: 50 },
  { name: "Marquee 5", logo: "/images/marq5.png", width: 100, height: 50 },
  { name: "Marquee 6", logo: "/images/marq6.png", width: 100, height: 50 },
  { name: "Marquee 7", logo: "/images/marq7.png", width: 100, height: 50 },
  { name: "Marquee 8", logo: "/images/marq8.png", width: 100, height: 50 },
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

  const animationDuration = widthOfFirstSet > 0 ? widthOfFirstSet / 60 : 5

  return (
    <section className="w-full overflow-hidden bg-white py-8">
      {/* Marquee Content */}
      <div className="flex overflow-hidden bg-white">
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
                className="flex-shrink-0 flex items-center justify-center bg-white"
                style={{
                  width: `${company.width}px`,
                  height: `${company.height}px`,
                  minWidth: `${company.width}px`,
                  minHeight: `${company.height}px`,
                }}
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className="object-contain transition-transform duration-300 hover:scale-110"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Second set (for seamless loop) */}
          <div className="flex items-center gap-12 flex-shrink-0">
            {companies.map((company, index) => (
              <div
                key={`${company.name}-${index}-second`}
                className="flex-shrink-0 flex items-center justify-center bg-white"
                style={{
                  width: `${company.width}px`,
                  height: `${company.height}px`,
                  minWidth: `${company.width}px`,
                  minHeight: `${company.height}px`,
                }}
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className="object-contain transition-transform duration-300 hover:scale-110"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}