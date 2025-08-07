"use client"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ChevronDown, ArrowRight, Palette, Zap, ShoppingBag, Rocket, Leaf, Code, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { 
DropdownMenu,
DropdownMenuContent,
DropdownMenuRadioGroup,
DropdownMenuRadioItem,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

interface Project {
id: string
title: string
subtitle: string
description: string
expandedDescription: string
image: string
expandedImage: string
categories: string[]
icon: React.ReactNode
color: string
technologies: string[]
results: string[]
duration: string
client: string
status: string
}

const projects: Project[] = [
{
  id: "cover-up-paints",
  title: "COVER UP Paints Ltd.",
  subtitle: "Social Media Aesthetic Transformation",
  description:
    "Cover Up Paints wanted to elevate their social media presence to better reflect their premium paint brand. We developed a cohesive visual strategy with consistent colors, fonts, and styling that strengthened their brand recognition.",
  expandedDescription:
    "Cover Up Paints wanted to elevate their social media presence to better reflect their premium paint brand. We developed a cohesive visual strategy with consistent colors, fonts, and styling that strengthened their brand recognition. The new aesthetic helped their content stand out and better connect with their target audience.",
  image: "./images/kayi-suc2.jpeg",
  expandedImage: "./images/kayi-suc1.jpeg",
  categories: ["Performance Marketing", "Brand Identity & Design", "SEO & Content Marketing"],
  icon: <Palette className="w-6 h-6" />,
  color: "from-slate-900 to-gray-800",
  technologies: ["Canva", "Adobe Photoshop", "Instagram", "Facebook"],
  results: ["65% More Engagement", "40% Follower Growth", "Consistent Brand Look"],
  duration: "1 month",
  client: "Cover Up Paints Ltd.",
  status: "ONGOING",
},
{
  id: "rejuuv-beauty",
  title: "REJUUV beauty",
  subtitle: "Complete Beauty Brand Build & E-commerce Platform",
  description:
    "We built Rejuuv from the ground up, creating everything from their brand identity to their complete e-commerce platform. This included designing their logo and visual identity, developing a custom Shopify store, managing their social media presence, and running targeted marketing campaigns.",
  expandedDescription:
    "We built Rejuuv from the ground up, creating everything from their brand identity to their complete e-commerce platform. This included designing their logo and visual identity, developing a custom Shopify store, managing their social media presence, and running targeted marketing campaigns. We also handled product photography and lifestyle content creation to showcase their beauty and wellness products.",
  image: "./images/kayi2.jpeg",
  expandedImage: "./images/kayi-success1.jpeg",
  categories: ["E-commerce Development", "Mobile App Development"],
  icon: <ShoppingBag className="w-6 h-6" />,
  color: "from-slate-900 to-gray-800",
  technologies: ["Shopify Plus", "React Native", "Firebase", "Facebook Ads"],
  results: [
    "5000+ Products Sold",
    "85% Customer Satisfaction",
    "220% Social Media Growth",
    "3.2x Return on Ad Spend",
  ],
  duration: "4 months - Ongoing",
  client: "Rejuuv Beauty",
  status: "ONGOING",
},
{
  id: "pel-paints",
  title: "PEL PAINTS",
  subtitle: "WEB DEVELOPMENT & CRM INTEGRATION",
  description:
    "PEL Paints wanted to enhance their digital presence with a modern website and integrate it with a comprehensive CRM system. We created a professional website with custom CRM functionality that streamlined their customer management and sales processes.",
  expandedDescription:
    "PEL Paints wanted to enhance their digital presence with a modern website and integrate it with a comprehensive CRM system. We created a professional website with custom CRM functionality that streamlined their customer management and sales processes. The solution included lead tracking, automated follow-ups, and detailed analytics dashboard.",
  image: "./images/kayi3.jpeg",
  expandedImage: "./images/kayi-success2.jpeg",
  categories: ["Web Development", "CRM & Sales Systems"],
  icon: <Zap className="w-6 h-6" />,
  color: "from-slate-900 to-gray-800",
  technologies: ["React", "Node.js", "Salesforce API", "MongoDB"],
  results: ["55% More Engagement", "35% Lead Conversion Increase", "Professional Brand Image"],
  duration: "1 month",
  client: "PEL Paints",
  status: "ONGOING",
},
{
  id: "saint-draper",
  title: "SAINT DRAPER",
  subtitle: "AI-POWERED BUSINESS AUTOMATION & CUSTOM SOFTWARE",
  description:
    "We built Saint Draper's complete business automation system with custom software solutions and AI integration. The system handles inventory management, customer service automation, and predictive analytics for business optimization.",
  expandedDescription:
    "We built Saint Draper's complete business automation system with custom software solutions and AI integration. The system handles inventory management, customer service automation, and predictive analytics for business optimization. We developed custom algorithms for demand forecasting and automated workflows that reduced manual processes by 80%.",
  image: "./images/kayi4.jpeg",
  expandedImage: "./images/kayi-success4.jpeg",
  categories: ["Business Automation", "AI & Automation Tools", "Custom Software Solutions"],
  icon: <Rocket className="w-6 h-6" />,
  color: "from-slate-900 to-gray-800",
  technologies: ["Python", "TensorFlow", "Custom APIs", "Machine Learning"],
  results: [
    "Complete Brand Launch",
    "180% Process Efficiency",
    "AI-Powered Automation",
    "Custom Software Integration",
  ],
  duration: "4 months",
  client: "Saint Draper",
  status: "ONGOING",
},
{
  id: "mirakl",
  title: "MIRAKL",
  subtitle: "COMPLETE BUSINESS OUTSOURCING SOLUTIONS",
  description:
    "We provided comprehensive business outsourcing services for Mirakl, handling their customer service, order processing, digital marketing, and administrative tasks. This allowed them to focus on core business growth while we managed operations.",
  expandedDescription:
    "We provided comprehensive business outsourcing services for Mirakl, handling their customer service, order processing, digital marketing, and administrative tasks. This allowed them to focus on core business growth while we managed operations. Our dedicated team became an extension of their business, providing 24/7 support across multiple channels and maintaining their brand standards.",
  image: "./images/kayi-suc5.jpeg",
  expandedImage: "./images/kayi-success3.jpeg",
  categories: ["Business Outsourcing"],
  icon: <Leaf className="w-6 h-6" />,
  color: "from-slate-900 to-gray-800",
  technologies: ["Zendesk", "Shopify", "Social Media Management", "Process Automation"],
  results: [
    "Complete Brand Launch",
    "Professional Operations Management",
    "24/7 Customer Support",
    "60% Cost Reduction",
  ],
  duration: "3 months",
  client: "Mirakl",
  status: "ONGOING",
},
]

const categories = [
"Latest Projects",
"Business Automation",
"Performance Marketing",
"Web Development",
"Mobile App Development",
"Custom Software Solutions",
"E-commerce Development",
"Business Outsourcing",
"AI & Automation Tools",
"CRM & Sales Systems",
"Brand Identity & Design",
"SEO & Content Marketing",
]

export default function SuccessStoriesSection() {
const [selectedCategory, setSelectedCategory] = useState("Latest Projects")
const [expandedCard, setExpandedCard] = useState<string | null>(null)
const [hoveredCard, setHoveredCard] = useState<string | null>(null)
const scrollRef = useRef<HTMLDivElement>(null)
const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
const [isMobile, setIsMobile] = useState(false)

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768)
  }
  checkMobile()
  window.addEventListener("resize", checkMobile)
  return () => window.removeEventListener("resize", checkMobile)
}, [])

const filteredProjects =
  selectedCategory === "Latest Projects"
    ? projects
    : projects.filter((project) => project.categories.includes(selectedCategory))

const handleReadMore = (projectId: string) => {
  setExpandedCard(expandedCard === projectId ? null : projectId);
}

const navigateExpanded = (direction: 'prev' | 'next') => {
  const currentExpandedIndex = filteredProjects.findIndex(p => p.id === expandedCard);
  let newIndex = currentExpandedIndex;

  if (direction === 'next') {
    newIndex = (currentExpandedIndex + 1) % filteredProjects.length;
  } else {
    newIndex = (currentExpandedIndex - 1 + filteredProjects.length) % filteredProjects.length;
  }
  setExpandedCard(filteredProjects[newIndex].id);
  setCurrentSlideIndex(newIndex);
};

const scrollToSlide = (index: number) => {
  if (expandedCard) {
    setExpandedCard(filteredProjects[index].id);
  } else {
    if (scrollRef.current) {
      const cardElement = scrollRef.current.children[0].children[0] as HTMLElement;
      if (!cardElement) return;
      const cardWidth = cardElement.offsetWidth;
      const currentGap = isMobile ? 16 : 32;
      const scrollPosition = index * (cardWidth + currentGap);
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }
  setCurrentSlideIndex(index);
};

const scrollLeft = () => {
  if (scrollRef.current) {
    const cardElement = scrollRef.current.children[0].children[0] as HTMLElement;
    if (!cardElement) return;
    const cardWidth = cardElement.offsetWidth;
    const currentGap = isMobile ? 16 : 32;
    const scrollAmount = cardWidth + currentGap;
    scrollRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
    setCurrentSlideIndex(prev => Math.max(0, prev - 1));
  }
}

const scrollRight = () => {
  if (scrollRef.current) {
    const cardElement = scrollRef.current.children[0].children[0] as HTMLElement;
    if (!cardElement) return;
    const cardWidth = cardElement.offsetWidth;
    const currentGap = isMobile ? 16 : 32;
    const scrollAmount = cardWidth + currentGap;
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
    setCurrentSlideIndex(prev => Math.min(filteredProjects.length - 1, prev + 1));
  }
}

useEffect(() => {
  const handleScroll = () => {
    if (scrollRef.current && !expandedCard) {
      const scrollLeftPos = scrollRef.current.scrollLeft;
      const cardElement = scrollRef.current.children[0].children[0] as HTMLElement;
      if (!cardElement) return;
      const cardWidth = cardElement.offsetWidth;
      const currentGap = isMobile ? 16 : 32;
      const itemWidth = cardWidth + currentGap;

      const newIndex = itemWidth > 0 ? Math.floor(scrollLeftPos / itemWidth + 0.5) : 0;
      setCurrentSlideIndex(Math.max(0, Math.min(newIndex, filteredProjects.length - 1)));
    }
  }

  const currentRef = scrollRef.current
  if (currentRef) {
    currentRef.addEventListener("scroll", handleScroll)
  }

  return () => {
    if (currentRef) {
      currentRef.removeEventListener("scroll", handleScroll)
    }
  }
}, [filteredProjects, expandedCard, isMobile])

useEffect(() => {
  if (scrollRef.current) {
    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" })
    setCurrentSlideIndex(0)
    setExpandedCard(null);
  }
}, [selectedCategory])

return (
  <section id="success-stories-section" className="py-10 md:py-24 px-4 bg-white relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-pink-500/15 to-[#cf21c3]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-l from-[#cf21c3]/10 to-pink-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-600/10 to-[#cf21c3]/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-tr from-[#cf21c3]/10 to-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
    </div>
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
    </div>
    <div className="max-w-7xl mx-auto relative">
      <div className="text-center mb-8 md:mb-20">
        <h2 className="text-4xl lg:text-6xl font-light mb-3 text-gray-700 tracking-tight">
          <span className="font-semibold text-black">Our Success Stories</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4 md:px-0">
          <span className="font-bold">Every</span> business has potential. Here's how we've helped companies unlock{" "}
          theirs through <span className="font-semibold text-gray-800">custom solutions</span> that actually{" "}
          <span className="font-semibold text-gray-800">move the needle</span>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 md:mb-16">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="min-w-[240px] justify-between bg-white/90 backdrop-blur-sm border border-gray-300 hover:border-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-11 md:h-14 font-semibold text-gray-700 hover:text-gray-900"
            >
              <span className="flex items-center gap-3">
                <Code className="w-4 h-4" />
                {selectedCategory}
              </span>
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[260px] rounded-2xl border-0 shadow-2xl bg-white/95 backdrop-blur-sm"
            align="center"
          >
            <DropdownMenuRadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
              {categories.map((category) => (
                <DropdownMenuRadioItem
                  key={category}
                  value={category}
                  className="cursor-pointer rounded-xl mx-2 my-1 font-semibold text-gray-700 hover:text-gray-900 py-2.5"
                >
                  {category}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="relative">
        {expandedCard ? (
          <div className="flex justify-center">{filteredProjects.filter(p => p.id === expandedCard).map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer transition-all duration-500 ease-out flex-shrink-0 snap-center max-w-6xl w-full mx-auto"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-700 border h-full flex flex-col shadow-2xl border-gray-900/20 ring-1 ring-gray-900/10 flex-col md:flex-row">
                <div className="relative overflow-hidden w-full md:w-2/5 h-48 md:h-auto min-h-[200px] md:min-h-[400px]">
                  <img
                    src={project.expandedImage || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-4 md:p-8 flex-1 flex flex-col w-full md:w-3/5">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <h4 className="text-sm md:text-lg font-semibold text-gray-600 mb-3 line-clamp-2">
                    {project.subtitle}
                  </h4>
                  <div className="transition-all duration-500 overflow-hidden max-h-full">
                    <p className="text-xs md:text-base text-gray-600 leading-relaxed mb-4 font-light flex-1">
                      {project.expandedDescription}
                    </p>
                    <div className="mb-4">
                      <h5 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 bg-gray-100 text-gray-800 text-xs rounded-full font-semibold border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h5 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">
                        Key Results:
                      </h5>
                      <div className="grid gap-1.5">
                        {project.results.map((result) => (
                          <div key={result} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700 font-semibold text-xs">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200 mt-auto">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${project.status === "ONGOING" ? "bg-yellow-500" : "bg-green-500"}`}></div>
                      <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">{project.status}</span>
                    </div>
                    <button
                      onClick={() => handleReadMore(project.id)}
                      className="font-bold transition-all duration-300 bg-[#cf21c3] text-white hover:bg-[#b91c9e] px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-sm tracking-wide border border-[#cf21c3]/20 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Read Less
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}</div>
        ) : (
          <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide" ref={scrollRef}>
            <div className="flex w-max gap-4 md:gap-8 px-2">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group cursor-pointer transition-all duration-500 ease-out flex-shrink-0 snap-center w-[calc(100vw-64px)] md:w-[calc(40vw-48px)] lg:w-[calc(25vw-48px)] hover:scale-[1.02]"
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-700 border h-full flex flex-col shadow-lg border-gray-200/50 hover:shadow-xl hover:border-gray-300">
                    <div className="relative overflow-hidden h-40 md:h-64 w-full">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 rounded-t-3xl group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                    <div className="p-4 md:p-8 flex-1 flex flex-col w-full">
                      <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <h4 className="text-sm md:text-lg font-semibold text-gray-600 mb-3 line-clamp-2">
                        {project.subtitle}
                      </h4>
                      <div className="transition-all duration-500 overflow-hidden max-h-[72px]">
                        <p className="text-xs md:text-base text-gray-600 leading-relaxed mb-4 font-light flex-1 line-clamp-3">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-200 mt-auto">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-1.5 h-1.5 rounded-full ${project.status === "ONGOING" ? "bg-yellow-500" : "bg-green-500"}`}></div>
                          <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">{project.status}</span>
                        </div>
                        <button
                          onClick={() => handleReadMore(project.id)}
                          className="font-bold transition-all duration-300 text-gray-900 hover:text-gray-700 text-xs flex items-center gap-1.5"
                        >
                          Read More
                          <ArrowRight className="w-3 h-3 transition-transform hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Arrows */}
        {!expandedCard && filteredProjects.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors duration-300 hidden md:flex p-4"
              disabled={currentSlideIndex === 0}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors duration-300 hidden md:flex p-4"
              disabled={currentSlideIndex >= filteredProjects.length - 1}
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </Button>
          </>
        )}
      </div>
      <div className="flex justify-center mt-8 gap-2">
        {filteredProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlideIndex ? "bg-[#cf21c3] scale-125" : "bg-gray-300 hover:bg-gray-400"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-200">
            <Code className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">No Projects Found</h3>
          <p className="text-base text-gray-600 max-w-md mx-auto font-light">
            No projects found in the selected category. Try selecting a different filter to explore our work.
          </p>
        </div>
      )}
      <div className="text-center mt-16 md:mt-24">
        <a
          href="https://calendly.com/saadalii/kayidigital"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#cf21c3] hover:bg-[#b91c9e] text-white font-semibold px-6 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
        >
          Book a Free Consultation
        </a>
      </div>
    </div>
    <style jsx>{`
      @keyframes pulse {
        0%, 100% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.05);
          opacity: 0.8;
        }
      }
      .animate-pulse {
        animation: pulse 6s ease-in-out infinite;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        scrollbar-width: none;
      }
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `}</style>
  </section>
)
}