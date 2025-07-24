"use client"

import type React from "react"

import { useState } from "react"
import {
  ChevronDown,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Star,
  Palette,
  Zap,
  ShoppingBag,
  Rocket,
  Leaf,
  Code,
} from "lucide-react"
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
  category: string
  icon: React.ReactNode
  color: string
  technologies: string[]
  results: string[]
  duration: string
  client: string
}

const projects: Project[] = [
  {
    id: "cover-up-paints",
    title: "Cover Up Paints",
    subtitle: "Premium Paint Brand Digital Transformation",
    description:
      "Complete digital marketing overhaul for a leading paint manufacturer, boosting online presence and sales.",
    expandedDescription:
      "We transformed Cover Up Paints' digital presence with a comprehensive strategy including SEO optimization, social media marketing, and e-commerce integration. The project resulted in 300% increase in online sales and 250% growth in brand awareness across all digital channels.",
    image: "images/kayi1.jpeg",
    category: "Digital Marketing",
    icon: <Palette className="w-6 h-6" />,
    color: "from-slate-900 to-gray-800",
    technologies: ["SEO", "Social Media", "Google Ads", "Analytics"],
    results: ["300% Sales Increase", "250% Brand Growth", "150% Web Traffic"],
    duration: "6 months",
    client: "Cover Up Paints Ltd.",
  },
  {
    id: "rejuuv",
    title: "Rejuuv",
    subtitle: "Beauty & Wellness E-commerce Platform",
    description: "Modern Shopify store development for a premium beauty brand with custom features and seamless UX.",
    expandedDescription:
      "Built a stunning Shopify store for Rejuuv with custom product configurators, subscription management, and advanced inventory tracking. Integrated with multiple payment gateways and implemented a loyalty program that increased customer retention by 180% while maintaining a 95% page speed score.",
    image: "images/kayi2.jpeg",
    category: "Shopify Development",
    icon: <ShoppingBag className="w-6 h-6" />,
    color: "from-slate-900 to-gray-800",
    technologies: ["Shopify Plus", "Liquid", "React", "Node.js"],
    results: ["180% Customer Retention", "95% Page Speed", "40% Conversion Rate"],
    duration: "4 months",
    client: "Rejuuv Beauty",
  },
  {
    id: "pel-sd",
    title: "PEL SD",
    subtitle: "Enterprise Resource Planning System",
    description: "Full-stack custom solution for supply chain management and inventory optimization.",
    expandedDescription:
      "Developed a comprehensive ERP system for PEL SD with real-time inventory tracking, automated procurement, and advanced analytics dashboard. The system processes over 10,000 transactions daily and reduced operational costs by 35% while maintaining 99.9% uptime.",
    image: "images/kayi3.jpeg",
    category: "Custom Solutions",
    icon: <Zap className="w-6 h-6" />,
    color: "from-slate-900 to-gray-800",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    results: ["35% Cost Reduction", "99.9% Uptime", "10K+ Daily Transactions"],
    duration: "8 months",
    client: "PEL SD Corporation",
  },
  {
    id: "mirakl",
    title: "Mirakl",
    subtitle: "Multi-Vendor Marketplace Platform",
    description: "Scalable full-stack marketplace solution with advanced vendor management and payment processing.",
    expandedDescription:
      "Created a robust marketplace platform for Mirakl with multi-vendor support, automated commission calculations, and integrated payment processing. Features include real-time chat, advanced search, and comprehensive analytics for both vendors and administrators, supporting 500+ active vendors.",
    image: "images/kayi4.jpeg",
    category: "Full Stack Development",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-slate-900 to-gray-800",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
    results: ["500+ Active Vendors", "50K+ Products", "99.8% Uptime"],
    duration: "10 months",
    client: "Mirakl Marketplace",
  },
  {
    id: "wellness-hub",
    title: "Wellness Hub",
    subtitle: "Health & Fitness WordPress Portal",
    description: "Custom WordPress development for a comprehensive health and wellness information portal.",
    expandedDescription:
      "Built a feature-rich WordPress site for Wellness Hub with custom post types, advanced search functionality, and membership integration. Includes appointment booking system, nutrition calculators, and a community forum that serves 25,000+ active users monthly with 85% engagement rate.",
    image: "images/kayi5.jpeg",
    category: "WordPress Development",
    icon: <Leaf className="w-6 h-6" />,
    color: "from-slate-900 to-gray-800",
    technologies: ["WordPress", "PHP", "MySQL", "WooCommerce"],
    results: ["25K+ Monthly Users", "85% User Engagement", "200% Content Growth"],
    duration: "5 months",
    client: "Wellness Hub Inc.",
  },
]

const categories = [
  "All Projects",
  "Digital Marketing",
  "Web Development",
  "Shopify Development",
  "Custom Solutions",
  "Full Stack Development",
  "WordPress Development",
]

export default function SuccessStoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects")
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [isGridHovered, setIsGridHovered] = useState(false)

  const filteredProjects =
    selectedCategory === "All Projects" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Sophisticated Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-gray-200/50 shadow-lg mb-8">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            <Sparkles className="w-5 h-5 text-gray-700" />
            <span className="text-gray-800 font-semibold tracking-wide">SUCCESS STORIES</span>
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
            Our Success
            <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Discover how we've helped businesses transform their digital presence and achieve remarkable growth through
            <span className="font-semibold text-gray-800"> innovative solutions</span> and
            <span className="font-semibold text-gray-800"> strategic thinking</span>
          </p>
        </div>

        {/* Refined Filter Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="min-w-[240px] justify-between bg-white/90 backdrop-blur-sm border border-gray-300 hover:border-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-14 font-semibold text-gray-700 hover:text-gray-900"
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
                    className="cursor-pointer rounded-xl mx-2 my-1 font-semibold text-gray-700 hover:text-gray-900 py-3"
                  >
                    {category}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Projects Grid Container with Hover Detection */}
        <div
          className="relative"
          onMouseEnter={() => setIsGridHovered(true)}
          onMouseLeave={() => setIsGridHovered(false)}
        >
          {/* Sophisticated Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-700 ease-out ${
                  hoveredCard === project.id
                    ? "scale-105 z-30 relative"
                    : hoveredCard && hoveredCard !== project.id
                      ? "scale-95 opacity-40 blur-sm"
                      : "hover:scale-[1.02]"
                }`}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-700 border h-full flex flex-col ${
                    hoveredCard === project.id
                      ? "shadow-2xl border-gray-900/20 ring-1 ring-gray-900/10"
                      : "shadow-lg border-gray-200/50 hover:shadow-xl hover:border-gray-300"
                  }`}
                >
                  {/* Sophisticated Image Section */}
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={project.image || "/placeholder.svg?height=400&width=600"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Elegant Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Minimalist Category Badge */}
                    <div className="absolute top-6 right-6">
                      <span className="inline-block px-4 py-2 bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-bold rounded-full shadow-lg border border-white/50">
                        {project.category}
                      </span>
                    </div>

                    {/* Clean SVG Icon */}
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/50">
                        <div className="text-gray-900">{project.icon}</div>
                      </div>
                    </div>

                    {/* Sophisticated Rating */}
                    <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-gray-900 text-gray-900" />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-gray-900">5.0</span>
                    </div>
                  </div>

                  {/* Refined Content Section */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex-1">
                      {/* Client Info */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                        <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                          {project.client}
                        </span>
                        <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                        <span className="text-sm font-semibold text-gray-600">{project.duration}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-600 mb-6 line-clamp-2">{project.subtitle}</h4>

                      {/* Dynamic Description */}
                      <div
                        className={`transition-all duration-500 overflow-hidden ${
                          hoveredCard === project.id ? "max-h-96" : "max-h-20"
                        }`}
                      >
                        <p className="text-gray-600 leading-relaxed mb-6 font-light">
                          {hoveredCard === project.id ? project.expandedDescription : project.description}
                        </p>

                        {/* Technologies - Enhanced */}
                        {hoveredCard === project.id && (
                          <div className="mb-6 animate-in fade-in duration-300">
                            <h5 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                              Technologies:
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full font-semibold border border-gray-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Results - Refined */}
                        {hoveredCard === project.id && (
                          <div className="mb-6 animate-in fade-in duration-500">
                            <h5 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                              Key Results:
                            </h5>
                            <div className="space-y-2">
                              {project.results.map((result) => (
                                <div key={result} className="flex items-center gap-3">
                                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                                  <span className="text-sm text-gray-700 font-semibold">{result}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Sophisticated Action Section */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-auto">
                

                      {/* Success Indicator */}
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Success</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Case Studies Button - Appears on Grid Hover */}
          <div
            className={`flex justify-center mt-12 transition-all duration-500 ${
              isGridHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
      
          </div>
        </div>

        {/* Elegant Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8 border border-gray-200">
              <Code className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">No Projects Found</h3>
            <p className="text-gray-600 text-lg max-w-md mx-auto font-light">
              No projects found in the selected category. Try selecting a different filter to explore our work.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
