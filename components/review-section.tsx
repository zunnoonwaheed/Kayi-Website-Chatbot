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
    role: "Product Lead, StartUp Ventures", // Combined role and company for single line display
    testimonial: "Found my ideal remote role with competitive compensation and great work-life balance.",
    imageUrl: "/images/kayi8.jpeg",
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
    role: "Senior Frontend Developer, TechCorp Inc.", // Combined role and company
    testimonial:
      "The matching process was incredibly efficient – within 72 hours I was interviewing for perfect-fit roles.",
    imageUrl: "/images/kayi6.jpeg",
  },
  {
    type: "text",
    title: "Quality Guaranteed",
    description:
      "Every professional in our network undergoes a rigorous vetting process, including technical assessments, behavioral interviews, and background checks. We maintain the highest standards of quality, so you can be confident in your hires and never have to compromise on excellence.",
    gradient: "from-[#fff3e0] to-[#ffe0b2]",
    accentColor: "bg-orange-500/20",
    shapeColor: "bg-orange-600/10",
  },
  {
    type: "image",
    name: "Ahmed",
    role: "UX Design Director, DesignHub", // Combined role and company
    testimonial:
      "The platform helped me negotiate better rates and build long-term client relationships that transformed my freelance career.",
    imageUrl: "/images/kayi-rev1.jpeg",
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
    allCards[1], // Sarah (image)
    allCards[0], // Rapid Talent Matching (text)
    allCards[3], // Alishba (image)
    allCards[2], // Global Network (text)
  ]

  const cardsToRender = isMobile ? mobileCards : allCards

  return (
    <section id="why-teams-choose-us-section" className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-20">
          {" "}
          {/* Parent div with text-center */}
          <h2 className="text-4xl lg:text-6xl font-light mb-3 text-gray-700 tracking-tight">
            <span className="font-semibold text-[#000000]">Why Teams Choose Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
            <span className="font-bold">Every</span> business has potential. Here's how we've helped companies unlock
            theirs through <span className="font-semibold text-gray-800">custom solutions</span> that actually{" "}
            <span className="font-semibold text-gray-800">move the needle</span>
          </p>
        </div>
        {/* Desktop grid is now 3 columns for 6 cards in 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {cardsToRender.map((card, index) => (
            <div key={index} className="h-full">
              {card.type === "text" ? (
                <CardText
                  title={card.title}
                  description={card.description}
                  gradient={card.gradient}
                  accentColor={card.accentColor}
                  shapeColor={card.shapeColor}
                />
              ) : (
                <CardWithImage
                  name={card.name}
                  role={card.role}
                  testimonial={card.testimonial}
                  imageUrl={card.imageUrl}
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
            <a href="https://calendly.com/saadalii/kayidigital" target="_blank" rel="noopener noreferrer">
            Start a conversation
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
  testimonial,
  imageUrl,
}: {
  name: string
  role: string
  testimonial: string
  imageUrl: string
}) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group p-6 text-center items-center justify-center min-h-[300px]" // Adjusted classes
    >
      {/* Headshot Section */}
      <div className="w-24 h-24 rounded-full overflow-hidden relative mx-auto mb-4">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          sizes="96px" // Fixed size for headshot
          className="object-cover object-center"
          style={{ objectPosition: "center 20%" }}
        />
      </div>
      {/* Content Section */}
      <div className="flex-1 flex flex-col items-center text-center">
        <div className="mb-2">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p> {/* Display only role */}
        </div>
        <p className="text-gray-600 mb-4 flex-1">"{testimonial}"</p> {/* Removed italic */}
      </div>
    </div>
  )
}

// === Text Card ===
function CardText({
  title,
  description,
  gradient,
  accentColor,
  shapeColor,
}: {
  title: string
  description: string
  gradient: string
  accentColor?: string
  shapeColor?: string
}) {
  return (
    <div
      className={`bg-gradient-to-br ${gradient} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden group min-h-[300px]`}
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
