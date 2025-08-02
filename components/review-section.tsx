"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const allCards = [
  {
    type: "text",
    title: "Rapid Talent Matching",
    description:
      "Our AI-driven platform connects you with pre-vetted professionals in under 72 hours, significantly reducing your hiring cycle. We provide quality matches tailored to your specific needs, ensuring a perfect fit for your team without the endless interviews and wasted time.",
    gradient: "from-[#fce4ec] to-[#f8bbd0]",
    accentColor: "bg-pink-500/20",
    shapeColor: "bg-pink-600/10",
  },
  {
    type: "image",
    name: "Sarah",
    role: "Product Lead",
    company: "StartUp Ventures",
    testimonial: "Found my ideal remote role with competitive compensation and great work-life balance.",
    imageUrl: "./images/kayi8.jpeg",
  },
  {
    type: "text",
    title: "Global Network",
    description:
      "Access an unparalleled pool of top-tier talent across 50+ countries, expanding your reach beyond geographical limitations. Our timezone-aligned matching ensures seamless collaboration and productivity, allowing your distributed teams to work efficiently regardless of location.",
    gradient: "from-[#e0f7fa] to-[#b2ebf2]",
    accentColor: "bg-cyan-500/20",
    shapeColor: "bg-cyan-600/10",
  },
  {
    type: "image",
    name: "Alishba",
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    testimonial:
      "The matching process was incredibly efficient – within 72 hours I was interviewing for perfect-fit roles.",
    imageUrl: "./images/kayi6.jpeg",
  },
  {
    type: "text",
    title: "Quality Guaranteed",
    description:
      "Every professional in our network undergoes a rigorous vetting process, including technical assessments, behavioral interviews, and background checks. We maintain the highest standards of quality, so you can be confident in your hires and never have to compromise on excellence.",
    gradient: "from-[#fff3e0] to-[#ffe0b2]",
    tall: true,
    accentColor: "bg-orange-500/20",
    shapeColor: "bg-orange-600/10",
  },
  {
    type: "image",
    name: "Ahmed",
    role: "UX Design Director",
    company: "DesignHub",
    testimonial:
      "The platform helped me negotiate better rates and build long-term client relationships that transformed my freelance career.",
    imageUrl: "./images/kayi-rev1.jpeg",
    tall: true,
  },
]

export default function ReviewsSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Select and order 4 cards for mobile: 1 image, 1 text, 1 image, 1 text
  const mobileCards = [
    allCards[1], // Lina M. (image)
    allCards[0], // Rapid Talent Matching (text)
    allCards[3], // Sarah J. (image)
    allCards[2], // Global Network (text)
  ]

  const cardsToRender = isMobile ? mobileCards : allCards

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Why Teams Choose Us</h2>
        {/* Desktop grid is now 3 columns for 6 cards in 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {cardsToRender.map((card, index) => (
            <div key={index} className="h-full">
              {card.type === "text" ? (
                <CardText
                  title={card.title}
                  description={card.description}
                  gradient={card.gradient}
                  tall={card.tall}
                  accentColor={card.accentColor}
                  shapeColor={card.shapeColor}
                />
              ) : (
                <CardWithImage
                  name={card.name}
                  role={card.role}
                  company={card.company}
                  testimonial={card.testimonial}
                  imageUrl={card.imageUrl}
                  tall={card.tall}
                />
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 md:mt-24">
          <Button
            asChild
            className="bg-[#cf21c3] hover:bg-[#b91c9e] text-white font-semibold px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
          >
            <a 
              href="https://calendly.com/saadalii/kayidigital" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ask Us Anything
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

// === Card With Image ===
function CardWithImage({
  name,
  role,
  company,
  testimonial,
  imageUrl,
  tall = false,
}: {
  name: string
  role: string
  company: string
  testimonial: string
  imageUrl: string
  tall?: boolean
}) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group ${
        tall ? "min-h-[400px]" : "min-h-[300px]"
      }`}
    >
      <div className={`w-full ${tall ? "h-60" : "h-48"} relative overflow-hidden`}>
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
          style={{ objectPosition: "center 20%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">
            {role} • {company}
          </p>
        </div>
        <p className="text-gray-600 mb-4 flex-1 italic">"{testimonial}"</p>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  )
}

// === Text Card ===
function CardText({
  title,
  description,
  gradient,
  tall = false,
  accentColor,
  shapeColor,
}: {
  title: string
  description: string
  gradient: string
  tall?: boolean
  accentColor?: string
  shapeColor?: string
}) {
  return (
    <div
      className={`bg-gradient-to-br ${gradient} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden group ${
        tall ? "min-h-[400px]" : "min-h-[300px]"
      }`}
    >
      {/* Circular and oval shapes in background */}
      <div className="absolute inset-0 opacity-25">
        {/* Extra large circle */}
        <div
          className={`absolute -top-16 -right-16 w-40 h-40 ${shapeColor} rounded-full group-hover:scale-110 transition-transform duration-700`}
        />

        {/* Large oval (horizontal) */}
        <div
          className={`absolute top-1/4 -left-12 w-32 h-20 ${accentColor} rounded-full group-hover:scale-125 transition-transform duration-700`}
        />

        {/* Medium circle */}
        <div
          className={`absolute bottom-16 right-12 w-24 h-24 ${shapeColor} rounded-full group-hover:scale-150 transition-transform duration-500`}
        />

        {/* Vertical oval */}
        <div
          className={`absolute top-20 right-16 w-16 h-28 ${accentColor} rounded-full group-hover:-translate-x-2 transition-transform duration-600`}
        />

        {/* Medium oval (horizontal) */}
        <div
          className={`absolute bottom-24 left-8 w-28 h-16 ${shapeColor} rounded-full group-hover:scale-110 transition-transform duration-600`}
        />

        {/* Small circle */}
        <div
          className={`absolute top-16 left-16 w-12 h-12 ${accentColor} rounded-full group-hover:translate-y-2 transition-transform duration-500`}
        />

        {/* Small oval (vertical) */}
        <div
          className={`absolute bottom-32 right-20 w-10 h-18 ${shapeColor} rounded-full group-hover:-translate-y-1 transition-transform duration-700`}
        />

        {/* Tiny oval (horizontal) */}
        <div
          className={`absolute top-1/2 right-8 w-14 h-8 ${accentColor} rounded-full group-hover:translate-x-2 transition-transform duration-600`}
        />

        {/* Additional background circle */}
        <div
          className={`absolute top-12 right-32 w-20 h-20 ${shapeColor} rounded-full group-hover:scale-105 transition-transform duration-800`}
        />

        {/* Large oval (diagonal feel) */}
        <div
          className={`absolute bottom-8 left-20 w-36 h-24 ${accentColor} rounded-full transform rotate-12 group-hover:scale-90 transition-transform duration-600`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-tight leading-tight">{title}</h3>
        <p className="text-gray-700 leading-relaxed flex-1 text-sm">{description}</p>
      </div>
    </div>
  )
}