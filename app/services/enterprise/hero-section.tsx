import Spline from '@splinetool/react-spline/next';
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen md:min-h-[105vh] lg:min-h-[115vh] bg-gradient-to-b from-white via-pink-50/50 to-pink-200/80 flex flex-col items-center justify-center pb-4 sm:pb-6 md:pb-8">
      {/* Floating Cards - Hidden on mobile, shown on md and up */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Text Generator - Top Left */}
        <div className="absolute top-28 left-10 xl:left-20 animate-float">
          <div className="bg-white rounded-xl px-4 py-2.5 shadow-lg border border-gray-200/50 flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">T</span>
            </div>
            <span className="text-gray-700 font-medium text-base">Text Generator</span>
          </div>
        </div>

        {/* Image Generator - Top Right */}
        <div className="absolute top-32 right-10 xl:right-20 animate-float-delayed">
          <div className="bg-white rounded-xl px-4 py-2.5 shadow-lg border border-gray-200/50 flex items-center gap-2">
            <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">🖼</span>
            </div>
            <span className="text-gray-700 font-medium text-base">Image Generator</span>
          </div>
        </div>

        {/* Code Generator - Left */}
        <div className="absolute top-1/2 left-10 xl:left-16 -translate-y-1/2 animate-float">
          <div className="bg-white rounded-xl px-4 py-2.5 shadow-lg border border-gray-200/50 flex items-center gap-2">
            <div className="w-7 h-7 bg-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">&lt;/&gt;</span>
            </div>
            <span className="text-gray-700 font-medium text-base">Code Generator</span>
          </div>
        </div>

        {/* Video Generator - Right */}
        <div className="absolute top-1/2 right-10 xl:right-16 -translate-y-1/2 animate-float-delayed">
          <div className="bg-white rounded-xl px-4 py-2.5 shadow-lg border border-gray-200/50 flex items-center gap-2">
            <div className="w-7 h-7 bg-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">▶</span>
            </div>
            <span className="text-gray-700 font-medium text-base">Video Generator</span>
          </div>
        </div>
      </div>

      {/* Content (Text + Buttons) */}
      <div className="relative z-30 w-full flex flex-col items-center justify-center px-4 sm:px-6 text-center mt-8 sm:mt-0 pb-4 sm:pb-8 md:pb-16">
        {/* Badge */}
        <div className="mb-2 sm:mb-3">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-sm border border-pink-200/50 rounded-full px-3 sm:px-6 md:px-7 py-1 sm:py-2 shadow-sm">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <span className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">
              Most Powerful AI Tools at One Place
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight max-w-4xl px-2">
          Transform Ideas into Reality
          <br className="hidden sm:block" />
          with Intelligent AI Tools
        </h1>

        {/* Subheading */}
        <p className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed px-2">
          Unleash the Power of Artificial Intelligence to Streamline Your Workflow, Boost Productivity, and Redefine Success.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4 sm:mb-8 md:mb-12 lg:mb-16 w-full px-4">
          <Button
            size="lg"
            className="text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm md:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            style={{ background: "linear-gradient(135deg, #cf21c3, #e91e63)" }}
          >
            Start writing for free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border border-gray-300 bg-white/90 backdrop-blur-sm text-gray-700 hover:text-gray-900 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm md:text-base font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 w-full sm:w-auto"
          >
            <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <Play className="w-3 h-3 md:w-4 md:h-4 text-gray-600 fill-gray-600" />
            </div>
            Watch Intro Video
          </Button>
        </div>
      </div>

      {/* Spline 3D Scene Container - positioned within extended section */}
      <div className="absolute bottom-[-5%] sm:bottom-[-8%] left-0 right-0 z-20 flex items-end justify-center">
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl bg-white/40 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl overflow-hidden mx-4">
          <div className="w-full h-48 sm:h-64 md:h-72 lg:h-96 xl:h-[28rem]">
            <Spline
              scene="https://prod.spline.design/40Ar10Dr0ggBMUqs/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-pink-200/90 via-pink-100/50 to-transparent"></div>
      </div>
    </section>
  )
}