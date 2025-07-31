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
            {/* LANDOBT CHATBOT SCRIPT */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.addEventListener("DOMContentLoaded", function () {
                    var s = document.createElement("script");
                    s.type = "text/javascript";
                    s.async = true;
                    s.src = "https://static.landbot.io/landbot-widget/landbot-widget.min.js";
                    s.onload = function () {
                      var myLandbot = new Landbot.Livechat({
                        configUrl: "https://storage.googleapis.com/landbot.online/v3/H-3073111-YIEN7UJVFSUPGNNG/index.json",
                      });
                    };
                    document.body.appendChild(s);
                  });
                `,
              }}
            ></script>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
