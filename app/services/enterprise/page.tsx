import Header from "./header"
import HeroSection from "./hero-section"
import CgisSection from "./cgis-section"
import CgisWork from "./cgis-work"
import CardsSection from "./cards-section"
import SubscriptionPlans from "./subscription-plans"
import TechnologiesSection from "./technologies"
import Footer from "./Footer"
import { Questions } from "./questions"
import { FaqsSection } from "./faqs-section"
import Marquee from "./marquee"        
import { TextSection } from "./text"   
import AssetHero from "./asset-hero"

export default function EnterprisePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Marquee />        
      <CardsSection />
      <TechnologiesSection />
      <CgisSection />
      <TextSection />  
      <AssetHero />
      <CgisWork />
      <SubscriptionPlans />
      <Questions />
      <Footer />
    </main>
  )
}
