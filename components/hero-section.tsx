"use client"

import Image from "next/image"
import { TypewriterEffect } from "./typewriter-effect"

export default function HeroSection() {
  const typingWords = ["Growth."]

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section className="relative h-auto md:min-h-screen pt-6 md:pt-24 lg:pt-32 pb-0 px-0 md:px-4 lg:px-8 bg-[#f8f8f8] overflow-hidden flex items-center">
      <div className="container mx-auto px-0 md:px-4 lg:px-8 z-10 flex flex-col items-center text-center max-w-6xl">
        {/* Main Headline */}
        <div className="mb-6 md:mb-8">
          <h1 className="font-normal text-black leading-tight text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 md:mb-6">
            The Digital Marketing Agency
            <br />
            Obsessed With{" "}
            <span className="inline-block">
              <TypewriterEffect words={typingWords} />
            </span>
          </h1>
          <p className="text-gray-600 text-base md:text-xl lg:text-2xl max-w-4xl mx-auto leading-snug md:leading-relaxed">
            We turn marketing budgets into predictable revenue streams
            <br className="hidden sm:block" />
            for businesses tired of guesswork and empty promises.
          </p>
        </div>

        {/* Team Photo and Contact Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="relative">
            <div className="bg-gradient-to-r from-[#cf21c3] to-[#e879f9] rounded-2xl p-1 shadow-lg">
              <div className="bg-white rounded-xl p-2 md:p-3">
                <div className="flex gap-1 md:gap-2">
                  {[
                    "5aQXZnDBT20djWmeZSH53EnYbag",
                    "R5OeEV0dAAlN33XudH9Kdbe2I",
                    "u566SdAMzF0zQVAEfutpk6wIcpE",
                    "TIKEsifZ6s9xtPoDCfyoqc4rZhA",
                    "pUs3kEYUIM13jK2gXszyrJcbjE",
                  ].map((id, i) => (
                    <div key={i} className="relative overflow-hidden rounded-lg">
                      <Image
                        src={`https://framerusercontent.com/images/${id}.jpg`}
                        alt="Team member"
                        width={50}
                        height={50}
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={scrollToContact}
            className="border-2 border-black rounded-full px-6 py-2 md:px-8 md:py-3 text-base md:text-lg font-medium hover:bg-[#cf21c3] hover:text-white hover:border-[#cf21c3] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact us
          </button>
        </div>

        {/* Trusted by text */}
        <p className="text-gray-600 text-sm md:text-lg mb-8 md:mb-12">Trusted by 80+ Brands Globally</p>

        {/* ✅ Statistics Section */}
        <div className="w-full bg-[#f4f4f4] rounded-3xl py-6 px-4 md:py-10 md:px-12 shadow-inner mb-10 md:mb-16">
          <div className="grid grid-cols-3 gap-4 md:gap-12 w-full max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-3xl md:text-6xl font-light bg-gradient-to-r from-[#cf21c3] to-[#e879f9] bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-105 transition-transform duration-300">
                700 M+
              </div>
              <div className="text-gray-600 text-xs md:text-lg">Rev Generated</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-6xl font-light bg-gradient-to-r from-[#cf21c3] to-[#e879f9] bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-105 transition-transform duration-300">
                1,000 +
              </div>
              <div className="text-gray-600 text-xs md:text-lg">Ads Created</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-6xl font-light bg-gradient-to-r from-[#cf21c3] to-[#e879f9] bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-105 transition-transform duration-300">
                80 +
              </div>
              <div className="text-gray-600 text-xs md:text-lg">Brands</div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-6 w-16 h-16 bg-gradient-to-r from-[#cf21c3] to-[#e879f9] rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-12 right-6 w-20 h-20 bg-gradient-to-r from-[#cf21c3] to-[#e879f9] rounded-full opacity-10 blur-xl"></div>
      </div>
    </section>
  )
}
