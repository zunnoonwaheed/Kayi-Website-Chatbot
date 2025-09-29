"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import Marquee from "@/components/marquee"
import ProcessSection from "@/components/timeline"
import ServicesSection from "@/components/services-provide"
import LocationsSection from "@/components/locations-section"
import SuccessStoriesSection from "@/components/success-stories-section"
import Review from "@/components/review"
import FaqsSection from "@/components/faqs"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/Footer"
import KayiChatbot from "@/components/kayi-chatbot"
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton"

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
            console.log("Landbot chatbot initialized successfully on homepage!")
          } catch (error) {
            console.error("Error initializing Landbot on homepage:", error)
          }
        } else {
          console.log("Landbot widget already exists on homepage")
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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Global Gradient Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
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

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          {/* Hero Section */}
          <section id="home" className="home">
            <HeroSection />
          </section>

          {/* ✅ Locations moved right below Hero */}
          <section id="locations" className="locations">
            <LocationsSection />
          </section>

          {/* ✅ Timeline (Process) after Locations */}
          <section id="aboutus" className="aboutus">
            <ProcessSection />
          </section>

          {/* Services */}
          <section id="services" className="services">
            <ServicesSection />
          </section>

          {/* Portfolio */}
          <section id="portfolio" className="portfolio">
            <Marquee />
          </section>

          {/* Success Stories */}
          <section id="success">
            <SuccessStoriesSection />
          </section>

          {/* ✅ Reviews Section */}
          <Review />

          {/* FAQs */}
          <section id="faqs" className="faqs">
            <FaqsSection />
          </section>

          {/* Contact */}
          <section id="contact" className="contact">
            <ContactSection />
            <div className="text-center mt-8"></div>
          </section>
        </main>

        {/* ✅ Chatbot widget added */}
        <KayiChatbot />

        {/* ✅ WhatsApp Floating Button added */}
        <WhatsAppFloatingButton />

        <Footer />
      </div>
    </div>
  )
}