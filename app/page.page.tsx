import Header from "@/components/header"
import HeroSection from "@/components/hero-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  )
}
