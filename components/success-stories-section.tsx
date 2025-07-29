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
    image: "./images/kayi1.jpeg",
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
    image: "./images/kayi2.jpeg",
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
    image: "./images/kayi3.jpeg",
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
    image: "./images/kayi4.jpeg",
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
    image: "./images/kayi5.jpeg",
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
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const filteredProjects =
    selectedCategory === "All Projects" ? projects : projects.filter((project) => project.category === selectedCategory)

  const handleReadMore = (projectId: string) => {
    setExpandedCard(expandedCard === projectId ? null : projectId)
  }

  return (
    <section className="py-10 md:py-24 px-4 bg-white relative overflow-hidden">
      {" "}
      {/* Reduced py-16 to py-10 for mobile */}
      {/* Background Pattern - Adjusted opacity for white background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-8 md:mb-20">
          {" "}
          {/* Reduced mb-12 to mb-8 for mobile */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 md:mb-8 tracking-tight">
            Our Success   Stories

          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4 md:px-0">
            Discover how we've helped businesses transform their digital presence and achieve remarkable growth through
            <span className="font-semibold text-gray-800"> innovative solutions</span> and
            <span className="font-semibold text-gray-800"> strategic thinking</span>
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 md:mb-16">
          {" "}
          {/* Reduced gap-8 to gap-6 and mb-12 to mb-8 for mobile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="min-w-[240px] justify-between bg-white/90 backdrop-blur-sm border border-gray-300 hover:border-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl h-11 md:h-14 font-semibold text-gray-700 hover:text-gray-900"
              >
                {" "}
                {/* Reduced h-12 to h-11 for mobile */}
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
                    {" "}
                    {/* Reduced py-3 to py-2.5 */}
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
          {" "}
          {/* Reduced gap-6 to gap-4 for mobile */}
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
                    {" "}
                    {/* Reduced h-48 to h-40 for mobile */}
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isExpanded ? "rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none" : "rounded-t-3xl"
                      } ${!isExpanded ? "group-hover:scale-110" : ""}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className={`p-4 md:p-8 flex-1 flex flex-col ${isExpanded ? "w-full md:w-3/5" : "w-full"}`}>
                    {" "}
                    {/* Reduced p-6 to p-4 for mobile */}
                    {/* Client Info */}
                    <div className="flex items-center gap-3 mb-3 text-xs">
                      {" "}
                      {/* Reduced gap-4 to gap-3 and mb-4 to mb-3 */}
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                        <span className="font-semibold text-gray-600 uppercase tracking-wider">{project.client}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                        <span className="font-semibold text-gray-600">{project.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                      {" "}
                      {/* Reduced text-xl to text-lg and mb-3 to mb-2 */}
                      {project.title}
                    </h3>
                    <h4 className="text-sm md:text-lg font-semibold text-gray-600 mb-3 line-clamp-2">
                      {" "}
                      {/* Reduced text-base to text-sm and mb-4 to mb-3 */}
                      {project.subtitle}
                    </h4>
                    {/* Dynamic Description */}
                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        isExpanded ? "max-h-full" : "max-h-[72px]"
                      }`}
                    >
                      {" "}
                      {/* Adjusted max-h-20 to max-h-[72px] for 3 lines of text */}
                      <p
                        className={`text-xs md:text-base text-gray-600 leading-relaxed mb-4 font-light flex-1 ${!isExpanded ? "line-clamp-3" : ""}`}
                      >
                        {" "}
                        {/* Reduced text-sm to text-xs and mb-6 to mb-4 */}
                        {isExpanded ? project.expandedDescription : project.description}
                      </p>
                      {/* Technologies - Enhanced */}
                      {isExpanded && (
                        <div className="mb-4 animate-in fade-in duration-300">
                          {" "}
                          {/* Reduced mb-6 to mb-4 */}
                          <h5 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">
                            {" "}
                            {/* Reduced mb-3 to mb-2 */}
                            Technologies Used:
                          </h5>
                          <div className="flex flex-wrap gap-1.5">
                            {" "}
                            {/* Reduced gap-2 to gap-1.5 */}
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-0.5 bg-gray-100 text-gray-800 text-xs rounded-full font-semibold border border-gray-200"
                              >
                                {" "}
                                {/* Reduced px-3 py-1 to px-2.5 py-0.5 and text-sm to text-xs */}
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {isExpanded && (
                        <div className="mb-4 animate-in fade-in duration-500">
                          {" "}
                          {/* Reduced mb-6 to mb-4 */}
                          <h5 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">
                            {" "}
                            {/* Reduced mb-3 to mb-2 */}
                            Key Results:
                          </h5>
                          <div className="grid gap-1.5">
                            {" "}
                            {/* Reduced gap-2 to gap-1.5 */}
                            {project.results.map((result) => (
                              <div key={result} className="flex items-center gap-2">
                                {" "}
                                {/* Reduced gap-3 to gap-2 */}
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                <span className="text-gray-700 font-semibold text-xs">{result}</span>{" "}
                                {/* Reduced text-sm to text-xs */}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Action Section */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200 mt-auto">
                      {" "}
                      {/* Reduced pt-4 to pt-3 */}
                      <div className="flex items-center gap-1.5">
                        {" "}
                        {/* Reduced gap-2 to gap-1.5 */}
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Success</span>
                      </div>
                      <Button
                        onClick={() => handleReadMore(project.id)}
                        variant="ghost"
                        size="sm"
                        className="text-gray-900 hover:text-gray-700 font-semibold group/btn text-xs"
                      >
                        {" "}
                        {/* Reduced text-sm to text-xs */}
                        {isExpanded ? "Read Less" : "Read More"}
                        <ArrowRight className="w-3 h-3 ml-1.5 transition-transform group-hover/btn:translate-x-1" />{" "}
                        {/* Reduced w-4 h-4 to w-3 h-3 and ml-2 to ml-1.5 */}
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
            {" "}
            {/* Reduced py-20 to py-16 */}
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-200">
              {" "}
              {/* Reduced w-32 h-32 to w-24 h-24 and mb-8 to mb-6 */}
              <Code className="w-10 h-10 text-gray-400" /> {/* Reduced w-12 h-12 to w-10 h-10 */}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No Projects Found</h3>{" "}
            {/* Reduced text-3xl to text-2xl and mb-4 to mb-3 */}
            <p className="text-base text-gray-600 max-w-md mx-auto font-light">
              {" "}
              {/* Reduced text-lg to text-base */}
              No projects found in the selected category. Try selecting a different filter to explore our work.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
