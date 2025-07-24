"use client"
import Image from "next/image"
import { TypewriterEffect } from "./typewriter-effect"

export default function HeroSection() {
  const typingWords = ["Growth."]

  return (
    <section className="relative min-h-screen pt-12 md:pt-24 lg:pt-32 bg-[#f8f8f8] overflow-hidden flex items-center">
      <div className="container mx-auto px-4 lg:px-8 z-10 flex flex-col items-center text-center max-w-6xl">

        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="font-normal text-black leading-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
            The Digital Marketing Agency
            <br />
            Obsessed With{" "}
            <span className="inline-block">
              <TypewriterEffect words={typingWords} />
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            We turn marketing budgets into predictable revenue streams
            <br />
            for businesses tired of guesswork and empty promises.
          </p>
        </div>

        {/* Team Photo and Contact Button */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
          <div className="relative">
            <div className="bg-gradient-to-r from-[#cf21c3] to-[#e879f9] rounded-2xl p-1 shadow-lg">
              <div className="bg-white rounded-xl p-3">
                <div className="flex gap-2">
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
                        width={60}
                        height={60}
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button className="border-2 border-black rounded-full px-8 py-3 text-lg font-medium hover:bg-[#cf21c3] hover:text-white hover:border-[#cf21c3] transition-all duration-300 shadow-md hover:shadow-lg">
            Contact us
          </button>
        </div>

        {/* Trusted by text */}
        <p className="text-gray-600 text-lg mb-12">Trusted by 80+ Brands Globally</p>

        {/* ✅ Statistics Section with Gradient Text and Styled Container */}
        <div className="w-full bg-[#f4f4f4] rounded-3xl py-10 px-6 md:px-12 shadow-inner mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 w-full max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-5xl md:text-6xl lg:text-7xl font-light bg-gradient-to-r from-[#cf21c3] to-[#e879f9] bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                700 M+
              </div>
              <div className="text-gray-600 text-lg">Rev Generated</div>
            </div>

            <div className="text-center group">
              <div className="text-5xl md:text-6xl lg:text-7xl font-light bg-gradient-to-r from-[#cf21c3] to-[#e879f9] bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                1,000 +
              </div>
              <div className="text-gray-600 text-lg">Ads Created</div>
            </div>

            <div className="text-center group">
              <div className="text-5xl md:text-6xl lg:text-7xl font-light bg-gradient-to-r from-[#cf21c3] to-[#e879f9] bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                80 +
              </div>
              <div className="text-gray-600 text-lg">Brands</div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#cf21c3] to-[#e879f9] rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-[#cf21c3] to-[#e879f9] rounded-full opacity-10 blur-xl"></div>
      </div>
    </section>
  )
}
