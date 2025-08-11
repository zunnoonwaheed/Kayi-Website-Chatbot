"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import Marquee from "@/components/marquee"
import ProcessSection from "@/components/timeline"
import ServicesSection from "@/components/services-provide"
import SuccessStoriesSection from "@/components/success-stories-section"
import ReviewsSection from "@/components/review-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/Footer"
import KayiChatbot from "@/components/kayi-chatbot" // ✅ Import your chatbot

export default function Home() {
  useEffect(() => {
    const initializeLandbot = () => {
      if (typeof window !== "undefined" && (window as any).Landbot) {
        const existingWidget =
          document.querySelector(".landbot-widget") ||
          document.querySelector("[data-landbot]") ||
          document.querySelector("#landbot-container")

        if (!existingWidget) {
          try {
            console.log("🏠 Initializing Landbot on Kayi Digital homepage...")
            ;new (window as any).Landbot.Livechat({
              configUrl:
                "https://storage.googleapis.com/landbot.online/v3/H-3074586-M13ISOMDG5UFG08S/index.json",
            })
            console.log("✅ Landbot chatbot initialized successfully on homepage!")
          } catch (error) {
            console.error("❌ Error initializing Landbot on homepage:", error)
          }
        } else {
          console.log("✅ Landbot widget already exists on homepage")
        }
      } else {
        console.log("⏳ Landbot not ready yet, retrying in 1 second...")
        setTimeout(initializeLandbot, 1000)
      }
    }

    initializeLandbot()
    const timer = setTimeout(initializeLandbot, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Header />
      <main>
        <section id="home" className="home">
          <HeroSection />
        </section>
        <section id="aboutus" className="aboutus">
          <ProcessSection />
        </section>
        <section id="services" className="services">
          <ServicesSection />
        </section>
        <section id="portfolio" className="portfolio">
          <Marquee />
        </section>
        <section id="success">
          <SuccessStoriesSection />
        </section>
        <section id="testimonials" className="testimonials">
          <ReviewsSection />
        </section>
        <section id="contact" className="contact">
          <ContactSection />
          <div className="text-center mt-8"></div>
        </section>
      </main>

      {/* ✅ Chatbot widget added */}
      <KayiChatbot />

      <Footer />
    </div>
  )
}
