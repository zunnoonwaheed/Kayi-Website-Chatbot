import Header from "./header"
import HeroSection from "./hero-section"
import CardsSection from "./cards-section"
import SubscriptionPlans from "./subscription-plans"
import TechnologiesSection from "./technologies"
import Footer from "./footer"
import { Questions } from "./questions"
import { FaqsSection } from "./faqs-section"

export default function EnterprisePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CardsSection />
      <SubscriptionPlans />
      <TechnologiesSection />
      <FaqsSection />
      <Questions />
      <Footer />
    </main>
  )
}
