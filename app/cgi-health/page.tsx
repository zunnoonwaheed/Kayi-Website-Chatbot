import HeroSection from "./hero-section"
import CgisSection from "./cgis-section"
import CgisWork from "./cgis-work"
import CardsSection from "./cards-section"
import SubscriptionPlans from "./subscription-plans"
import TechnologiesSection from "./technologies"
import Footer from "./Footer"
import { Questions } from "./questions"
import Marquee from "./marquee"        
import { TextSection } from "./text"   
import AssetHero from "./asset-hero"
import Review from "./review"
import SocialProof from "./social-proof"
import Guarantee from "./guarantee"  
import VideoReview from "./video-review" // Add this import

export default function EnterprisePage() {
  return (
    <main className="min-h-screen">
      {/* Global Gradient Overlay - Excludes Hero Section */}
      <div className="fixed inset-0 pointer-events-none z-50" style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 100px, black 200px, black calc(100% - 100px), transparent calc(100% - 50px))',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 100px, black 200px, black calc(100% - 100px), transparent calc(100% - 50px))'
      }}>
        {/* Base gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/6 via-pink-500/3 to-[#cf21c3]/8" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#cf21c3]/4 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-bl from-[#cf21c3]/3 via-transparent to-pink-500/6" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/4 via-transparent to-[#cf21c3]/5" />

        {/* Seamless edge gradients */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#cf21c3]/12 via-pink-500/6 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#cf21c3]/12 via-pink-500/6 to-transparent" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#cf21c3]/10 via-pink-500/5 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#cf21c3]/10 via-pink-500/5 to-transparent" />

        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/3 via-transparent to-pink-500/4 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/2 via-transparent to-[#cf21c3]/3 mix-blend-screen opacity-50" />
      </div>

      <HeroSection />
      <Marquee /> 
      <TechnologiesSection />
      <SocialProof />
      <CgisWork />
      <Guarantee /> 
      <Review />
      <VideoReview /> {/* Add VideoReview component here */}

      <CardsSection />
      <TextSection />  
      <AssetHero />
      <SubscriptionPlans />
      <Questions />
      <Footer />
    </main>
  )
}