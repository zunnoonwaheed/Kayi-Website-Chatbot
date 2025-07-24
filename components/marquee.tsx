"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const companies = [
  {
    name: "Apple",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
    width: 50,
  },
  {
    name: "Microsoft",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg",
    width: 50,
  },
  {
    name: "Google",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    width: 50,
  },
  {
    name: "Amazon",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    width: 50,
  },
  {
    name: "Facebook",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
    width: 50,
  },
  {
    name: "Netflix",
    logo: "https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/dd0bf1ed4e6846711d08a2f0bb52d2ba/Netflix_Logo_PMS.png",
    width: 80,
  },
  {
    name: "Spotify",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spotify/spotify-original.svg",
    width: 50,
  },
  {
    name: "Nike",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/nike-vector-logo.png",
    width: 50,
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    width: 50,
  },
  {
    name: "Twitter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
    width: 50,
  },
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
      <section className="w-full bg-white overflow-hidden py-12">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex items-center gap-20 animate-marquee"
            animate={{
              x: [0, -33.333 * companies.length],
            }}
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
                  width: `${company.width + 16}px`,
                  height: `${company.width + 16}px`,
                  minWidth: `${company.width + 16}px`,
                  minHeight: `${company.width + 16}px`,
                }}
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.width}
                  className="object-contain transition-transform duration-300 hover:scale-110"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
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

        {/* 👇 Separator Line */}
        <div className="mt-6 border-t border-gray-200 w-full" />
      </section>
    </>
  )
}
