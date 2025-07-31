"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, ArrowRight, Palette, Zap, ShoppingBag, Rocket, Leaf, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  expandedDescription: string
  image: string
  expandedImage: string
  category: string
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
    title: "COVER UP PAINTS LTD.",
    subtitle: "Social Media Aesthetic Transformation",
    description:
      "Cover Up Paints wanted to elevate their social media presence to better reflect their premium paint brand. We developed a cohesive visual strategy with consistent colors, fonts, and styling that strengthened their brand recognition.",
    expandedDescription:
      "Cover Up Paints wanted to elevate their social media presence to better reflect their premium paint brand. We developed a cohesive visual strategy with consistent colors, fonts, and styling that strengthened their brand recognition. The new aesthetic helped their content stand out and better connect with their target audience.",
    image: "./images/kayi-suc2.jpeg",
    expandedImage: "./images/kayi-suc1.jpeg",
    category: "Brand Identity & Design",
    icon: <Palette className="w-6 h-6" />,
    color: "from-slate-900 to-gray-800",
    technologies: ["Canva", "Adobe Photoshop", "Instagram", "Facebook"],
    results: ["65% More Engagement", "40% Follower Growth", "Consistent Brand Look"],
    duration: "1 month",
    client: "Cover Up Paints Ltd.",
    status: "COMPLETED",
  },
  {
    id: "rejuuv-beauty",
    title: "REJUUV BEAUTY",
    subtitle: "Complete Beauty Brand Build & E-commerce Platform",
    description:
      "We built Rejuuv from the ground up, creating everything from their brand identity to their complete e-commerce platform. This included designing their logo and visual identity, developing a custom Shopify store, managing their social media presence, and running targeted marketing campaigns.",
    expandedDescription:
      "We built Rejuuv from the ground up, creating everything from their brand identity to their complete e-commerce platform. This included designing their logo and visual identity, developing a custom Shopify store, managing their social media presence, and running targeted marketing campaigns. We also handled product photography and lifestyle content creation to showcase their beauty and wellness products.",
    image: "./images/kayi2.jpeg",
    expandedImage: "./images/kayi-success1.jpeg",
    category: "E-commerce Development",
    icon: <ShoppingBag className="w-6 h-6" />,
    color: "from-slate-900 to-gray-800",
    technologies: ["Shopify Plus", "Adobe Creative Suite", "Instagram & Facebook", "Facebook Ads"],
    results: [
      "5000+ Products Sold",
      "85% Customer Satisfaction",
      "220% Social Media Growth",
      "3.2x Return on Ad Spend",
    ],
    duration: "4 months - Ongoing",
    client: "Rejuuv Beauty",
    status: "Ongoing",
  },
  {
    id: "pel-paints",
    title: "PEL Paints",
    subtitle: "Social Media Content Creation",
    description:
      "PEL Paints wanted to enhance their social media presence to better showcase their paint brand and products. We created a series of professional social media posts with consistent branding that highlighted their paint solutions and quality.",
    expandedDescription:
      "PEL Paints wanted to enhance their social media presence to better showcase their paint brand and products. We created a series of professional social media posts with consistent branding that highlighted their paint solutions and quality. The content helped establish their digital presence and improved engagement with their target customers.",
    image: "./images/kayi3.jpeg",
    expandedImage: "./images/kayi-success2.jpeg",
    category: "SEO & Content Marketing",
    icon: <Zap className="w-6 h-6" />,
    color: "from-slate-900 to-gray-800",
    technologies: ["Canva", "Adobe Photoshop", "Instagram", "Facebook"],
    results: ["55% More Engagement", "35% Follower Growth", "Professional Brand Image"],
    duration: "1 month",
    client: "PEL Paints",
    status: "Completed",
  },
  {
    id: "saint-draper",
    title: "SAINT DRAPER",
    subtitle: "Luxury Leather Brand Development",
    description:
      "We built Saint Draper from the ground up as a leather brand specializing in wallets and card holders. Our work included creating their complete brand identity and logo design, developing stunning 3D product models for marketing, and managing their social media presence.",
    expandedDescription:
      "We built Saint Draper from the ground up as a leather brand specializing in wallets and card holders. Our work included creating their complete brand identity and logo design, developing stunning 3D product models for marketing, and managing their social media presence. We established their brand positioning in the quality leather goods market with sophisticated visual content.",
    image: "./images/kayi4.jpeg",
    expandedImage: "./images/kayi-success4.jpeg",
    category: "Brand Identity & Design",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-slate-900 to-gray-800",
    technologies: ["Blender 3D", "Adobe Creative Suite", "Instagram & Facebook", "Brand Design Tools"],
    results: [
      "Complete Brand Launch",
      "180% Social Engagement",
      "Quality Market Positioning",
      "3D Product Visualization",
    ],
    duration: "4 months",
    client: "Saint Draper",
    status: "COMPLETED",
  },
  {
    id: "mirakl",
    title: "MIRAKL",
    subtitle: "Complete Brand & Product Development",
    description:
      "We developed Mirakl as a complete skincare and antibacterial towel brand from concept to market. Our comprehensive approach included creating their logo and brand identity, designing product packaging that stands out on shelves, building their e-commerce website, and managing their social media presence.",
    expandedDescription:
      "We developed Mirakl as a complete skincare and antibacterial towel brand from concept to market. Our comprehensive approach included creating their logo and brand identity, designing product packaging that stands out on shelves, building their e-commerce website, and managing their social media presence. We established their brand positioning in the health and wellness market.",
    image: "./images/kayi5.jpeg",
    expandedImage: "./images/kayi-success3.jpeg",
    category: "Brand Identity & Design",
    icon: <Leaf className="w-6 h-6" />,
    color: "from-slate-900 to-gray-800",
    technologies: ["Adobe Creative Suite", "WordPress", "Instagram & Facebook", "Packaging Design"],
    results: [
      "Complete Brand Launch",
      "Professional Packaging Design",
      "Strong Online Presence",
      "Market Ready Products",
    ],
    duration: "3 months",
    client: "Mirakl",
    status: "COMPLETED",
  },
]

const categories = [
  "All Projects",
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
  const [selectedCategory, setSelectedCategory] = useState("All Projects")
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const filteredProjects =
    selectedCategory === "All Projects" ? projects : projects.filter((project) => project.category === selectedCategory)

  const handleReadMore = (projectId: string) => {
    setExpandedCard(expandedCard === projectId ? null : projectId)
  }

  return (
    <section className="py-10 md:py-24 px-4 bg-white relative overflow-hidden">
      {/* Background Pattern - Adjusted opacity for white background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 md:mb-8 tracking-tight">
            Our Success Stories
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4 md:px-0">
            Every business has potential. Here's how we've helped companies unlock theirs through{" "}
            <span className="font-semibold text-gray-800">custom solutions</span> that actually{" "}
            <span className="font-semibold text-gray-800">move the needle</span>
          </p>
        </div>

        {/* Filter Section */}
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

        {/* Projects Grid Container */}
        <div
          className={`grid gap-4 md:gap-8 transition-all duration-500 ${
            expandedCard ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {filteredProjects.map((project) => {
            const isExpanded = expandedCard === project.id
            const isHidden = expandedCard && !isExpanded

            return (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-500 ease-out ${
                  isHidden ? "opacity-0 pointer-events-none h-0 overflow-hidden" : ""
                } ${isExpanded ? "col-span-full" : "hover:scale-[1.02]"} `}
                onMouseEnter={() => !isExpanded && setHoveredCard(project.id)}
                onMouseLeave={() => !isExpanded && setHoveredCard(null)}
              >
                <div
                  className={`bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-700 border h-full flex flex-col ${
                    isExpanded
                      ? "shadow-2xl border-gray-900/20 ring-1 ring-gray-900/10 flex-col md:flex-row"
                      : "shadow-lg border-gray-200/50 hover:shadow-xl hover:border-gray-300"
                  }`}
                >
                  {/* Image Section */}
                  <div
                    className={`relative overflow-hidden ${
                      isExpanded
                        ? "w-full md:w-2/5 h-48 md:h-auto min-h-[200px] md:min-h-[400px]"
                        : "h-40 md:h-64 w-full"
                    }`}
                  >
                    <img
                      src={isExpanded ? project.expandedImage : project.image || "/placeholder.svg"}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isExpanded ? "rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none" : "rounded-t-3xl"
                      } ${!isExpanded ? "group-hover:scale-110" : ""}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className={`p-4 md:p-8 flex-1 flex flex-col ${isExpanded ? "w-full md:w-3/5" : "w-full"}`}>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <h4 className="text-sm md:text-lg font-semibold text-gray-600 mb-3 line-clamp-2">
                      {project.subtitle}
                    </h4>

                    {/* Dynamic Description */}
                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        isExpanded ? "max-h-full" : "max-h-[72px]"
                      }`}
                    >
                      <p
                        className={`text-xs md:text-base text-gray-600 leading-relaxed mb-4 font-light flex-1 ${
                          !isExpanded ? "line-clamp-3" : ""
                        }`}
                      >
                        {isExpanded ? project.expandedDescription : project.description}
                      </p>

                      {/* Technologies - Enhanced */}
                      {isExpanded && (
                        <div className="mb-4 animate-in fade-in duration-300">
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
                      )}

                      {isExpanded && (
                        <div className="mb-4 animate-in fade-in duration-500">
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
                      )}
                    </div>

                    {/* Action Section */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200 mt-auto">
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            project.status === "Ongoing" ? "bg-yellow-500" : "bg-green-500"
                          }`}
                        ></div>
                        <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                          {project.status}
                        </span>
                      </div>
                      <Button
                        onClick={() => handleReadMore(project.id)}
                        variant={isExpanded ? "default" : "ghost"}
                        size={isExpanded ? "lg" : "sm"}
                        className={`font-bold group/btn transition-all duration-300 ${
                          isExpanded
                            ? "bg-[#cf21c3] text-white hover:bg-[#b91c9e] px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-sm tracking-wide border border-[#cf21c3]/20"
                            : "text-gray-900 hover:text-gray-700 text-xs"
                        }`}
                      >
                        {isExpanded ? (
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Read Less
                          </span>
                        ) : (
                          <>
                            Read More
                            <ArrowRight className="w-3 h-3 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
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

        {/* CTA Section */}
        <div className="text-center mt-16 md:mt-24">
          <Button
            asChild
            className="bg-[#cf21c3] hover:bg-[#b91c9e] text-white font-semibold px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
          >
            <a href="https://calendly.com/saadalii/kayidigital" target="_blank" rel="noopener noreferrer">
              Book a Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
