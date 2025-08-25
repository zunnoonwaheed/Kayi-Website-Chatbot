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

  // Increased divisor from 30 to 60 → faster movement
  const animationDuration = widthOfFirstSet > 0 ? widthOfFirstSet / 60 : 5

  return (
    <section className="w-full overflow-hidden py-8 border-t border-b border-gray-200 relative">
      {/* Animated Pink Gradient Background */}
      <div className="absolute inset-0">
        {/* Base gradient layers that flow seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/6 via-pink-500/3 to-[#cf21c3]/8" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#cf21c3]/4 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-bl from-[#cf21c3]/3 via-transparent to-pink-500/6" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/4 via-transparent to-[#cf21c3]/5" />

        {/* Seamless edge gradients */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#cf21c3]/12 via-pink-500/6 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#cf21c3]/12 via-pink-500/6 to-transparent" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#cf21c3]/10 via-pink-500/5 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#cf21c3]/10 via-pink-500/5 to-transparent" />

        {/* Flowing wave gradients */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#cf21c3]/8 to-transparent"
          animate={{
            x: ["-50%", "50%"],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-l from-transparent via-pink-500/6 to-transparent"
          animate={{
            x: ["50%", "-50%"],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 8,
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#cf21c3]/5 to-transparent"
          animate={{
            y: ["-30%", "30%"],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 15,
          }}
        />

        {/* Organic floating gradients that blend naturally */}
        <motion.div
          className="absolute top-1/6 left-1/6 w-96 h-96 bg-gradient-radial from-[#cf21c3]/15 via-pink-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.8, 0.5],
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/6 right-1/6 w-[32rem] h-[32rem] bg-gradient-radial from-pink-500/12 via-[#cf21c3]/8 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -80, 0],
            y: [0, 50, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 7,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-[#cf21c3]/6 via-pink-500/4 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 12,
          }}
        />

        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/3 via-transparent to-pink-500/4 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/2 via-transparent to-[#cf21c3]/3 mix-blend-screen opacity-50" />
      </div>

      {/* Marquee Content */}
      <div className="flex overflow-hidden relative z-10">
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