"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const allCards = [
  {
    type: "text",
    title: "Rapid Talent Matching",
    description:
      "Our AI-driven platform connects you with pre-vetted professionals in under 72 hours, significantly reducing your hiring cycle. We provide quality matches tailored to your specific needs, ensuring a perfect fit for your team without the endless interviews and wasted time.",
    gradient: "from-[#f8d7f3] to-[#ec67d5]",
    accentColor: "bg-[#cf21c3]/20",
    shapeColor: "bg-[#b91aad]/10",
  },
  {
    type: "image",
    name: "Sarah",
    role: "Product Lead, StartUp Ventures",
    testimonial: "Found my ideal remote role with competitive compensation and great work-life balance.",
    imageUrl: "/images/kayi8.jpeg",
  },
  {
    type: "text",
    title: "Global Network",
    description:
      "Access an unparalleled pool of top-tier talent across 50+ countries, expanding your reach beyond geographical limitations. Our timezone-aligned matching ensures seamless collaboration and productivity, allowing your distributed teams to work efficiently regardless of location.",
    gradient: "from-[#ec67d5] to-[#cf21c3]",
    accentColor: "bg-[#f8d7f3]/20",
    shapeColor: "bg-[#a0189a]/10",
  },
  {
    type: "image",
    name: "Alishba",
    role: "Senior Frontend Developer, TechCorp Inc.",
    testimonial:
      "The matching process was incredibly efficient – within 72 hours I was interviewing for perfect-fit roles.",
    imageUrl: "/images/kayi6.jpeg",
  },
  {
    type: "text",
    title: "Quality Guaranteed",
    description:
      "Every professional in our network undergoes a rigorous vetting process, including technical assessments, behavioral interviews, and background checks. We maintain the highest standards of quality, so you can be confident in your hires and never have to compromise on excellence.",
    gradient: "from-[#b91aad] to-[#f8d7f3]",
    accentColor: "bg-[#ec67d5]/20",
    shapeColor: "bg-[#cf21c3]/10",
  },
  {
    type: "image",
    name: "Ahmed",
    role: "UX Design Director, DesignHub",
    testimonial:
      "The platform helped me negotiate better rates and build long-term client relationships that transformed my freelance career.",
    imageUrl: "/images/kayi-rev1.jpeg",
  },
]

const CardText = ({ title, description, gradient, accentColor, shapeColor, isHovered }) => {
  return (
    <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 ease-out flex flex-col h-full relative overflow-hidden group min-h-[300px] border border-black group-hover:border-[#ec67d5]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0, scale: 1 }}
        whileHover={{ opacity: 0.5, scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-br from-[#f8d7f3] via-[#ec67d5] to-[#cf21c3] rounded-2xl md:rounded-3xl blur-sm"
      />

      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 10 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`absolute -top-16 -right-16 w-40 h-40 ${shapeColor} rounded-full`}
        />
        <motion.div
          animate={{
            scale: isHovered ? 1.3 : 1,
            x: isHovered ? -8 : 0,
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`absolute top-1/4 -left-12 w-32 h-20 ${accentColor} rounded-full`}
        />
        <motion.div
          animate={{
            scale: isHovered ? 1.5 : 1,
            rotate: isHovered ? -15 : 0,
          }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className={`absolute bottom-16 right-12 w-24 h-24 ${shapeColor} rounded-full`}
        />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`text-sm md:text-lg lg:text-xl font-bold text-black mb-2 md:mb-3 lg:mb-4 group-hover:text-gray-800 transition-colors duration-300 leading-tight ${
            isHovered ? "scale-105 -translate-y-1" : ""
          }`}
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-1"
        >
          {description}
        </motion.p>
      </div>

      <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-transparent group-hover:border-[#b91aad] transition-all duration-500 opacity-0 group-hover:opacity-100" />
    </div>
  )
}

const CardWithImage = ({ name, role, testimonial, imageUrl, isHovered }) => {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 ease-out border border-black group-hover:border-[#ec67d5] p-8 text-center items-center justify-center min-h-[300px] relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0, scale: 1 }}
        whileHover={{ opacity: 0.5, scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-br from-[#f8d7f3] via-[#ec67d5] to-[#cf21c3] rounded-2xl md:rounded-3xl blur-sm"
      />

      <div className="relative z-10 flex flex-col items-center h-full">
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          whileInView={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-24 h-24 rounded-full overflow-hidden relative mx-auto mb-4 shadow-md shadow-[#ec67d570] group-hover:shadow-lg md:group-hover:shadow-xl group-hover:shadow-[#b91aad70]"
        >
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            fill
            sizes="96px"
            className="object-cover object-center"
          />
        </motion.div>

        <div className="flex-1 flex flex-col items-center text-center">
          <div className="mb-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`text-lg font-bold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300 ${
                isHovered ? "scale-105" : ""
              }`}
            >
              {name}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
            >
              {role}
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-4 flex-1 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed"
          >
            "{testimonial}"
          </motion.p>
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-transparent group-hover:border-[#b91aad] transition-all duration-500 opacity-0 group-hover:opacity-100" />
    </div>
  )
}

export default function ReviewsSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const mobileCards = [
    allCards[1], // Sarah (image)
    allCards[0], // Rapid Talent Matching (text)
    allCards[3], // Alishba (image)
    allCards[2], // Global Network (text)
  ]

  const cardsToRender = isMobile ? mobileCards : allCards

  return (
    <>
      <style jsx>{`
        @keyframes seamlessFlow {
          0% { transform: translateX(-100%) translateY(-50%) rotate(0deg); opacity: 0.3; }
          25% { transform: translateX(-25%) translateY(-25%) rotate(90deg); opacity: 0.6; }
          50% { transform: translateX(50%) translateY(0%) rotate(180deg); opacity: 0.8; }
          75% { transform: translateX(25%) translateY(25%) rotate(270deg); opacity: 0.6; }
          100% { transform: translateX(-100%) translateY(-50%) rotate(360deg); opacity: 0.3; }
        }
        
        @keyframes seamlessFlowReverse {
          0% { transform: translateX(100%) translateY(50%) rotate(0deg); opacity: 0.4; }
          25% { transform: translateX(75%) translateY(25%) rotate(-90deg); opacity: 0.7; }
          50% { transform: translateX(-50%) translateY(0%) rotate(-180deg); opacity: 0.9; }
          75% { transform: translateX(-25%) translateY(-25%) rotate(-270deg); opacity: 0.7; }
          100% { transform: translateX(100%) translateY(50%) rotate(-360deg); opacity: 0.4; }
        }
        
        @keyframes flowingWave {
          0% { transform: translateX(-100%) scaleY(0.8); opacity: 0.2; }
          33% { transform: translateX(-33%) scaleY(1.2); opacity: 0.6; }
          66% { transform: translateX(33%) scaleY(0.9); opacity: 0.8; }
          100% { transform: translateX(100%) scaleY(1.1); opacity: 0.3; }
        }
        
        @keyframes flowingWaveVertical {
          0% { transform: translateY(-100%) scaleX(0.9); opacity: 0.3; }
          50% { transform: translateY(50%) scaleX(1.3); opacity: 0.7; }
          100% { transform: translateY(100%) scaleX(1.0); opacity: 0.2; }
        }
        
        @keyframes organicFloat {
          0% { transform: scale(1) rotate(0deg) translateX(0px) translateY(0px); opacity: 0.4; }
          25% { transform: scale(1.3) rotate(90deg) translateX(30px) translateY(-20px); opacity: 0.7; }
          50% { transform: scale(0.9) rotate(180deg) translateX(-15px) translateY(25px); opacity: 0.9; }
          75% { transform: scale(1.2) rotate(270deg) translateX(-25px) translateY(-10px); opacity: 0.6; }
          100% { transform: scale(1) rotate(360deg) translateX(0px) translateY(0px); opacity: 0.4; }
        }
        
        @keyframes organicFloatLarge {
          0% { transform: scale(1.2) rotate(0deg) translateX(0px) translateY(0px); opacity: 0.3; }
          33% { transform: scale(0.8) rotate(120deg) translateX(-40px) translateY(30px); opacity: 0.6; }
          66% { transform: scale(1.4) rotate(240deg) translateX(20px) translateY(-35px); opacity: 0.8; }
          100% { transform: scale(1.2) rotate(360deg) translateX(0px) translateY(0px); opacity: 0.3; }
        }
        
        .animate-seamless-flow {
          animation: seamlessFlow 28s ease-in-out infinite;
        }
        
        .animate-seamless-flow-reverse {
          animation: seamlessFlowReverse 32s ease-in-out infinite;
        }
        
        .animate-flowing-wave {
          animation: flowingWave 22s ease-in-out infinite;
        }
        
        .animate-flowing-wave-vertical {
          animation: flowingWaveVertical 26s ease-in-out infinite;
        }
        
        .animate-organic-float {
          animation: organicFloat 18s ease-in-out infinite;
        }
        
        .animate-organic-float-large {
          animation: organicFloatLarge 24s ease-in-out infinite;
        }
      `}</style>

      <section id="why-teams-choose-us-section" className="py-16 px-4 bg-white relative overflow-hidden">
        {/* Base gradient layers that flow seamlessly */}
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

          {/* Flowing wave gradients with motion animations */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#cf21c3]/8 to-transparent animate-flowing-wave" />
          <div
            className="absolute inset-0 bg-gradient-to-l from-transparent via-pink-500/6 to-transparent animate-flowing-wave"
            style={{ animationDelay: "8s", animationDuration: "30s" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#cf21c3]/5 to-transparent animate-flowing-wave-vertical"
            style={{ animationDelay: "15s" }}
          />

          {/* Organic floating gradients with complex motion patterns */}
          <div className="absolute top-1/6 left-1/6 w-96 h-96 bg-gradient-radial from-[#cf21c3]/15 via-pink-500/10 to-transparent rounded-full blur-3xl animate-organic-float" />
          <div
            className="absolute bottom-1/6 right-1/6 w-[32rem] h-[32rem] bg-gradient-radial from-pink-500/12 via-[#cf21c3]/8 to-transparent rounded-full blur-3xl animate-organic-float-large"
            style={{ animationDelay: "7s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-[#cf21c3]/6 via-pink-500/4 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-organic-float"
            style={{ animationDelay: "12s", animationDuration: "40s" }}
          />

          {/* Additional seamless flowing gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/4 via-transparent to-pink-500/3 animate-seamless-flow" />
          <div
            className="absolute inset-0 bg-gradient-to-tl from-pink-500/3 via-transparent to-[#cf21c3]/4 animate-seamless-flow-reverse"
            style={{ animationDelay: "10s" }}
          />

          {/* Subtle mesh gradient overlays with blend modes */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/3 via-transparent to-pink-500/4 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/2 via-transparent to-[#cf21c3]/3 mix-blend-screen opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 md:mb-24"
          >
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-light mb-3 text-gray-700 leading-tight tracking-tight"
            >
              <span className="font-semibold text-[#000000]">Why Teams Choose Us</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 md:px-0"
            >
              Every business has potential. Here's how we've helped companies unlock theirs through tailored solutions
              that deliver real results.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            {cardsToRender.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true, margin: "-50px" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative h-full"
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="h-full"
                >
                  {card.type === "text" ? (
                    <CardText
                      title={card.title}
                      description={card.description}
                      gradient={card.gradient}
                      accentColor={card.accentColor}
                      shapeColor={card.shapeColor}
                      isHovered={hoveredIndex === index}
                    />
                  ) : (
                    <CardWithImage
                      name={card.name}
                      role={card.role}
                      testimonial={card.testimonial}
                      imageUrl={card.imageUrl}
                      isHovered={hoveredIndex === index}
                    />
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="absolute -top-2 -right-2 md:-top-3 md:-right-3 lg:-top-4 lg:-right-4 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#cf21c3] to-[#b91aad] rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm lg:text-lg shadow-lg z-20 transition-transform duration-300"
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mt-16 md:mt-24"
          >
            <motion.a
              href="https://calendly.com/saadalii/kayidigital"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(207, 33, 195, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="inline-block bg-[#cf21c3] text-white font-semibold text-sm md:text-base px-6 py-3 rounded-full shadow-md hover:bg-[#b91aad] transition-all duration-300"
            >
              Start a conversation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
