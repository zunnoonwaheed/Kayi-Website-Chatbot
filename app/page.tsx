// app/page.tsx

import Link from "next/link"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import Marquee from "@/components/marquee"
import ProcessSection from "@/components/timeline"
import ServicesSection from "@/components/services-provide"
import SuccessStoriesSection from "@/components/success-stories-section"
import ReviewsSection from "@/components/review-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/Footer"

export default function Home() {
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

          <div className="text-center mt-8">
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
