"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ArrowRight, Palette, Zap, ShoppingBag, Leaf, Code, ChevronLeft, ChevronRight } from 'lucide-react'
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
    title: "Cover up paints ltd.",
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
    client: "Cover Up Paints",
    status: "COMPLETED",
  },
  {
    id: "rejuuv-beauty",
    title: "Rejuuv beauty",
    subtitle: "Complete Beauty Brand Build & E-commerce Platform",
    description:
      "We built Rejuuv from the ground up, creating everything from their brand identity to their complete e-commerce platform. This included designing their logo and visual identity, developing a custom Shopify store, managing their social media presence, and running targeted marketing campaigns.",
    expandedDescription:
      "We built Rejuuv from the ground up, creating everything from their brand identity to their complete e-commerce platform. This included designing their logo and visual identity, developing a custom Shopify store, managing their social media presence, and running targeted marketing campaigns. We also handled product photography and lifestyle content creation to showcase their beauty and wellness products.",
    image: "./images/kayi2.jpeg",
    expandedImage: "./images/kayi-success1.jpeg",
    categories: ["E-commerce Development", "Mobile App Development", "CRM & Sales Systems"],
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
    client: "Rejuuv",
    status: "ONGOING",
  },
  {
    id: "pel-paints",
    title: "Pel paints",
    subtitle: "Social Media Content Creation",
    description:
      "PEL Paints wanted to enhance their social media presence to better showcase their paint brand and products. We created a series of professional social media posts with consistent branding that highlighted their paint solutions and quality.",
    expandedDescription:
      "PEL Paints wanted to enhance their social media presence to better showcase their paint brand and products. We created a series of professional social media posts with consistent branding that highlighted their paint solutions and quality. The content helped establish their digital presence and improved engagement with their target customers.",
    image: "./images/kayi3.jpeg",
    expandedImage: "./images/kayi-success2.jpeg",
    categories: ["Performance Marketing", "Brand Identity & Design"],
    icon: <Palette className="w-6 h-6" />,
    color: "from-slate-900 to-gray-800",
    technologies: ["Canva", "Adobe Photoshop", "Instagram", "Facebook"],
    results: ["55% More Engagement", "35% Follower Growth", "Professional Brand Image"],
    duration: "1 month",
    client: "PEL Paints",
    status: "COMPLETED",
  },
  {
    id: "saint-draper",
    title: "Saint draper",
    subtitle: "Luxury Leather Brand Development",
    description:
      "We built Saint Draper from the ground up as a leather brand specializing in wallets and card holders. Our work included creating their complete brand identity and logo design, developing stunning 3D product models for marketing, and managing their social media presence.",
    expandedDescription:
      "We built Saint Draper from the ground up as a leather brand specializing in wallets and card holders. Our work included creating their complete brand identity and logo design, developing stunning 3D product models for marketing, and managing their social media presence. We established their brand positioning in the quality leather goods market with sophisticated visual content.",
    image: "./images/kayi4.jpeg",
    expandedImage: "./images/kayi-success4.jpeg",
    categories: ["Brand Identity & Design", "Custom Software Solutions"],
    icon: <Code className="w-6 h-6" />,
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
    title: "Mirakl",
    subtitle: "Complete Brand & Product Development",
    description:
      "We developed Mirakl as a complete skincare and antibacterial towel brand from concept to market. Our comprehensive approach included creating their logo and brand identity, designing product packaging that stands out on shelves, building their e-commerce website, and managing their social media presence.",
    expandedDescription:
      "We developed Mirakl as a complete skincare and antibacterial towel brand from concept to market. Our comprehensive approach included creating their logo and brand identity, designing product packaging that stands out on shelves, building their e-commerce website, and managing their social media presence. We established their brand positioning in the health and wellness market.",
    image: "./images/kayi-suc5.jpeg",
    expandedImage: "./images/kayi-success3.jpeg",
    categories: ["E-commerce Development", "Brand Identity & Design", "Performance Marketing"],
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
  {
    id: "cordwood-covers",
    title: "Cordwood covers",
    subtitle: "Complete E-commerce Store for Outdoor Storage Solutions",
    description:
      "We developed a comprehensive Shopify e-commerce store for Cordwood Covers, specializing in waterproof firewood protection solutions. This project involved creating responsive product pages with high-quality imagery, implementing educational content sections with integrated blog functionality, and optimizing the entire user experience for outdoor enthusiasts.",
    expandedDescription:
      "We developed a comprehensive Shopify e-commerce store for Cordwood Covers, specializing in waterproof firewood protection solutions. This project involved creating responsive product pages with high-quality imagery, implementing educational content sections with integrated blog functionality, and optimizing the entire user experience for outdoor enthusiasts. We delivered detailed product specifications, instructional content, and seamless navigation designed to drive conversions in the niche outdoor storage market.",
    image: "/images/Cordwood.png",
    expandedImage: "/images/Cardwood.png",
    categories: ["E-commerce Development", "Web Development", "CRM & Sales Systems"],
    icon: <ShoppingBag className="w-6 h-6" />,
    color: "from-slate-900 to-gray-800",
    technologies: ["Shopify Development", "CMS Framework", "Responsive Design", "Blog Integration"],
    results: [
      "Enhanced User Experience for outdoor enthusiasts",
      "Responsive Product Pages with detailed specifications",
      "Educational Content Integration with blog functionality",
      "Optimized Conversion Path for niche market",
      "Seamless Navigation and product discovery",
    ],
    duration: "N/A",
    client: "Cordwood Covers",
    status: "COMPLETED",
  },
  {
    id: "squid-notes",
    title: "Squid notes",
    subtitle: "Handwritten Note-Taking App with Professional PDF Annotation",
    description:
      "We developed Squid Notes to address the gap in digital note-taking apps that compromised on handwriting quality or lacked essential features for students and professionals. Our solution features vector-based rendering for crisp text at any zoom level, integrated PDF markup capabilities, advanced stylus support, and intelligent notebook organization with cloud synchronization.",
    expandedDescription:
      "We developed Squid Notes to address the gap in digital note-taking apps that compromised on handwriting quality or lacked essential features for students and professionals. Our solution features vector-based rendering for crisp text at any zoom level, integrated PDF markup capabilities, advanced stylus support, and intelligent notebook organization with cloud synchronization. The app delivers pressure-sensitive writing, multi-format export options (PDF/PNG/JPG), and seamless cross-device functionality, providing users with a smooth writing experience combined with professional-grade PDF annotation capabilities.",
    image: "/images/squid.png",
    expandedImage: "/images/squid.png",
    categories: ["Mobile App Development", "Custom Software Solutions", "Business Automation"],
    icon: <Code className="w-6 h-6" />,
    color: "from-slate-900 to-gray-800",
    technologies: ["Kotlin", "Firebase", "Android Development", "Vector Graphics", "Cloud Sync"],
    results: [
      "Vector-Based Rendering for crisp text at any zoom level",
      "Professional PDF Annotation with markup capabilities",
      "Pressure-Sensitive Writing with advanced stylus support",
      "Cross-Device Synchronization via cloud integration",
      "Multi-Format Export supporting PDF, PNG, and JPG formats",
    ],
    duration: "N/A",
    client: "Squid Notes",
    status: "COMPLETED",
  },
  {
    id: "cal-com",
    title: "Cal.com",
    subtitle: "Advanced Mobile-First Database Management App",
    description:
      "We built a comprehensive cross-platform database interface app using React Native and Node.js, empowering users to create, manage, and collaborate on structured data in real-time. The solution features a robust multi-tenant architecture with PostgreSQL backend, AWS cloud infrastructure, and WebSocket integration for seamless live collaboration.",
    expandedDescription:
      "We built a comprehensive cross-platform database interface app using React Native and Node.js, empowering users to create, manage, and collaborate on structured data in real-time. The solution features a robust multi-tenant architecture with PostgreSQL backend, AWS cloud infrastructure, and WebSocket integration for seamless live collaboration. Our implementation includes offline synchronization capabilities, custom field types, advanced filtering systems, and role-based permissions, delivering a powerful yet intuitive database management experience optimized for mobile workflows.",
    image: "/images/CAL.com.png",
    expandedImage: "/images/CAL.com.png",
    categories: [
      "Mobile App Development",
      "Custom Software Solutions",
      "Web Development",
      "Business Automation",
      "CRM & Sales Systems",
    ],
    icon: <Code className="w-6 h-6" />,
    color: "from-slate-900 to-gray-800",
    technologies: ["React Native", "Node.js", "AWS Lambda", "PostgreSQL", "WebSockets"],
    results: [
      "Real-Time Collaboration with WebSocket integration",
      "Multi-Tenant Architecture supporting scalable user management",
      "Offline Sync Capabilities for uninterrupted productivity",
      "Advanced Filtering System with custom field type support",
      "Role-Based Permissions ensuring secure data access control",
    ],
    duration: "N/A",
    client: "CAL.com",
    status: "COMPLETED",
  },
  {
    id: "mem-ai",
    title: "Mem",
    subtitle: "AI-Powered Knowledge Management & Note-Taking App",
    description:
      "We developed Mem to solve the challenge of fragmented knowledge management that leads to lost insights and inefficient workflows for professionals and researchers. Our AI-driven notes app features intelligent linking, automatic content suggestions, and contextual retrieval powered by advanced machine learning algorithms.",
    expandedDescription:
      "We developed Mem to solve the challenge of fragmented knowledge management that leads to lost insights and inefficient workflows for professionals and researchers. Our AI-driven notes app features intelligent linking, automatic content suggestions, and contextual retrieval powered by advanced machine learning algorithms. The platform understands note relationships, provides smart search functionality, and offers AI-powered writing assistance. Built with a minimalist interface design, the app delivers real-time synchronization and seamless capture capabilities from multiple sources, transforming how users organize and access their knowledge.",
    image: "/images/MEM.png",
    expandedImage: "/images/MEM.png",
    categories: ["AI & Automation Tools", "Mobile App Development", "Custom Software Solutions", "Business Automation"],
    icon: <Zap className="w-6 h-6" />,
    color: "from-slate-900 to-gray-800",
    technologies: [
      "AI Development",
      "React Native",
      "API Integration",
      "Natural Language Processing",
      "Machine Learning",
    ],
    results: [
      "Intelligent Linking with AI-powered content relationship mapping",
      "Contextual Retrieval using advanced machine learning algorithms",
      "Smart Search Functionality with natural language processing",
      "AI-Powered Writing Assistance for enhanced productivity",
      "Multi-Source Capture with seamless real-time synchronization",
    ],
    duration: "N/A",
    client: "MEM",
    status: "COMPLETED",
  },
  {
    id: "dawn-and-dusk-jewelry",
    title: "Dawnandduskjewelry.com",
    subtitle: "E-commerce Store for Artisan Jewelry Brand",
    description:
      "We developed an elegant, brand-focused e-commerce store for Dawn and Dusk Jewelry, a mother-daughter artisan jewelry business specializing in handcrafted sterling silver and gemstone pieces. The design integrates compelling storytelling elements that highlight the family business heritage, while implementing blog functionality for travel and lifestyle content that connects with their audience.",
    expandedDescription:
      "We developed an elegant, brand-focused e-commerce store for Dawn and Dusk Jewelry, a mother-daughter artisan jewelry business specializing in handcrafted sterling silver and gemstone pieces. The design integrates compelling storytelling elements that highlight the family business heritage, while implementing blog functionality for travel and lifestyle content that connects with their audience. We optimized product galleries to showcase the craftsmanship of each piece and created a seamless shopping experience with promotional features including bulk discounts and free shipping thresholds to drive conversions.",
    image: "/images/dawn.png",
    expandedImage: "/images/dawn.png",
    categories: ["E-commerce Development", "Brand Identity & Design", "CRM & Sales Systems"],
    icon: <ShoppingBag className="w-6 h-6" />,
    color: "from-slate-900 to-gray-800",
    technologies: ["Shopify CMS Development", "UI/UX Prototyping", "E-commerce Optimization", "Blog Integration"],
    results: [
      "Brand-Focused Design showcasing artisan craftsmanship",
      "Storytelling Integration highlighting family business heritage",
      "Optimized Product Galleries for enhanced jewelry presentation",
      "Seamless Shopping Experience with promotional automation",
      "Blog Functionality supporting travel and lifestyle content strategy",
    ],
    duration: "N/A",
    client: "Dawn and Dusk Jewelry",
    status: "COMPLETED",
  },
  {
    id: "getvoila-com",
    title: "Getvoila.com",
    subtitle: "Premium German Gourmet Food Delivery Platform",
    description:
      "We developed a sophisticated e-commerce platform for Voilà, connecting discerning customers with restaurant-quality frozen meals crafted by international star chefs. The premium German delivery service features advanced scheduled delivery options, comprehensive multi-language support, and a seamless checkout flow optimized for high-end culinary experiences.",
    expandedDescription:
      "We developed a sophisticated e-commerce platform for Voilà, connecting discerning customers with restaurant-quality frozen meals crafted by international star chefs. The premium German delivery service features advanced scheduled delivery options, comprehensive multi-language support, and a seamless checkout flow optimized for high-end culinary experiences. We implemented dynamic promotional campaigns for seasonal menus, integrated nationwide shipping logistics, and created an elegant user interface that showcases gourmet products with emphasis on convenience and quality assurance for the luxury food market.",
    image: "/images/GETVOILA.png",
    expandedImage: "/images/GETVOILA.png",
    categories: ["E-commerce Development", "Web Development", "CRM & Sales Systems"],
    icon: <ShoppingBag className="w-6 h-6" />,
    color: "from-slate-900 to-gray-800",
    technologies: [
      "E-commerce Platform",
      "Payment Gateway Integration",
      "UI Graphics",
      "UX & UI Design",
      "Multi-language Support",
    ],
    results: [
      "Premium E-commerce Experience for luxury food delivery",
      "Scheduled Delivery System with advanced logistics integration",
      "Multi-Language Support for diverse German market",
      "Seasonal Campaign Management with promotional automation",
      "Elegant UI Design emphasizing quality and convenience guarantee",
    ],
    duration: "N/A",
    client: "Voilà",
    status: "COMPLETED",
  },
  {
    id: "wecare-doctor",
    title: "Wecare doctor",
    subtitle: "UI/UX Design for Telemedicine Platform",
    description:
      "We designed a comprehensive user interface and experience for WeCare Doctor, a telemedicine platform connecting patients with healthcare professionals. Created intuitive user flows for video consultations, streamlined appointment booking interfaces, and responsive design systems optimized for both patient and doctor experiences.",
    expandedDescription:
      "We designed a comprehensive user interface and experience for WeCare Doctor, a telemedicine platform connecting patients with healthcare professionals. Created intuitive user flows for video consultations, streamlined appointment booking interfaces, and responsive design systems optimized for both patient and doctor experiences. Developed clean, trustworthy visual design with accessibility standards, implemented consistent design patterns across web and mobile platforms, and crafted user-centered interfaces that prioritize ease of use in medical consultation scenarios.",
    image: "/images/doctor.png",
    expandedImage: "/images/doctor.png",
    categories: ["Web Development", "Mobile App Development", "Brand Identity & Design", "CRM & Sales Systems"],
    icon: <Leaf className="w-6 h-6" />,
    color: "from-slate-900 to-gray-800",
    technologies: ["UI/UX Design", "Responsive Design", "Design Systems", "User Research", "Healthcare UX"],
    results: [
      "Intuitive Patient Journey with streamlined booking and consultation flows",
      "Professional Medical Interface building trust and credibility",
      "Responsive Design System ensuring consistency across all devices",
      "Accessibility-Focused Design meeting healthcare industry standards",
      "User-Centered Experience optimized for both patients and healthcare providers",
    ],
    duration: "N/A",
    client: "WeCare Doctor",
    status: "COMPLETED",
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
    setExpandedCard(expandedCard === projectId ? null : projectId)
  }

  const navigateExpanded = (direction: "prev" | "next") => {
    const currentExpandedIndex = filteredProjects.findIndex((p) => p.id === expandedCard)
    let newIndex = currentExpandedIndex
    if (direction === "next") {
      newIndex = (currentExpandedIndex + 1) % filteredProjects.length
    } else {
      newIndex = (currentExpandedIndex - 1 + filteredProjects.length) % filteredProjects.length
    }
    setExpandedCard(filteredProjects[newIndex].id)
    setCurrentSlideIndex(newIndex)
  }

  const scrollToSlide = (index: number) => {
    if (expandedCard) {
      setExpandedCard(filteredProjects[index].id)
    } else {
      if (scrollRef.current) {
        const cardElement = scrollRef.current.children[0].children[0] as HTMLElement
        if (!cardElement) return
        const cardWidth = cardElement.offsetWidth
        const currentGap = isMobile ? 16 : 32
        const scrollPosition = index * (cardWidth + currentGap)
        scrollRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        })
      }
    }
    setCurrentSlideIndex(index)
  }

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardElement = scrollRef.current.children[0].children[0] as HTMLElement
      if (!cardElement) return
      const cardWidth = cardElement.offsetWidth
      const currentGap = isMobile ? 16 : 32
      const scrollAmount = cardWidth + currentGap
      scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      })
      setCurrentSlideIndex((prev) => Math.max(0, prev - 1))
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardElement = scrollRef.current.children[0].children[0] as HTMLElement
      if (!cardElement) return
      const cardWidth = cardElement.offsetWidth
      const currentGap = isMobile ? 16 : 32
      const scrollAmount = cardWidth + currentGap
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
      setCurrentSlideIndex((prev) => Math.min(filteredProjects.length - 1, prev + 1))
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current && !expandedCard) {
        const scrollLeftPos = scrollRef.current.scrollLeft
        const cardElement = scrollRef.current.children[0].children[0] as HTMLElement
        if (!cardElement) return
        const cardWidth = cardElement.offsetWidth
        const currentGap = isMobile ? 16 : 32
        const itemWidth = cardWidth + currentGap
        const newIndex = itemWidth > 0 ? Math.floor(scrollLeftPos / itemWidth + 0.5) : 0
        setCurrentSlideIndex(Math.max(0, Math.min(newIndex, filteredProjects.length - 1)))
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
      setExpandedCard(null)
    }
  }, [selectedCategory])

  return (
    <motion.section
      id="success-stories-section"
      className="py-10 md:py-24 px-4 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-pink-500/15 to-[#cf21c3]/10 rounded-full blur-3xl animate-pulse"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-l from-[#cf21c3]/10 to-pink-400/15 rounded-full blur-3xl animate-pulse"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-600/10 to-[#cf21c3]/8 rounded-full blur-2xl animate-pulse"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-tr from-[#cf21c3]/10 to-pink-500/15 rounded-full blur-3xl animate-pulse"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-8 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-light mb-3 text-gray-700 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="font-semibold text-black">Our Success Stories</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="font-bold">Every</span> business has potential. Here's how we've helped companies unlock{" "}
            theirs through <span className="font-semibold text-gray-800">custom solutions</span> that actually{" "}
            <span className="font-semibold text-gray-800">move the needle</span>
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 md:mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
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
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {expandedCard ? (
            <div className="flex justify-center">
              {filteredProjects
                .filter((p) => p.id === expandedCard)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="group cursor-pointer transition-all duration-500 ease-out flex-shrink-0 snap-center max-w-6xl w-full mx-auto"
                    onMouseEnter={() => setHoveredCard(project.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-700 border h-full flex flex-col shadow-2xl border-gray-900/20 ring-1 ring-gray-900/10 flex-col md:flex-row"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="relative overflow-hidden w-full md:w-2/5 h-48 md:h-auto min-h-[200px] md:min-h-[400px]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      >
                        <img
                          src={project.expandedImage || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </motion.div>
                      <div className="p-4 md:p-8 flex-1 flex flex-col w-full md:w-3/5">
                        {/* ... existing expanded card content ... */}
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
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                project.status === "ONGOING" ? "bg-yellow-500" : "bg-green-500"
                              }`}
                            ></div>
                            <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                              {project.status}
                            </span>
                          </div>
                          <motion.button
                            onClick={() => handleReadMore(project.id)}
                            className="font-bold transition-all duration-300 bg-[#cf21c3] text-white hover:bg-[#b91c9e] px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-sm tracking-wide border border-[#cf21c3]/20 flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Read Less
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
            </div>
          ) : (
            <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide" ref={scrollRef}>
              <motion.div
                className="flex w-max gap-4 md:gap-8 px-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="group cursor-pointer transition-all duration-500 ease-out flex-shrink-0 snap-center w-[calc(100vw-64px)] md:w-[calc(40vw-48px)] lg:w-[calc(25vw-48px)] hover:scale-[1.02]"
                    onMouseEnter={() => setHoveredCard(project.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => handleReadMore(project.id)}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-700 border h-full flex flex-col shadow-lg border-gray-200/50 hover:shadow-xl hover:border-gray-300"
                      whileHover={{
                        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      <motion.div
                        className="relative overflow-hidden h-40 md:h-64 w-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 rounded-t-3xl group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </motion.div>
                      <div className="p-4 md:p-8 flex-1 flex flex-col w-full">
                        <motion.h3
                          className="text-base md:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.h4
                          className="text-xs md:text-base font-semibold text-gray-600 mb-3 line-clamp-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {project.subtitle}
                        </motion.h4>
                        <div className="transition-all duration-500 overflow-hidden max-h-[72px]">
                          <motion.p
                            className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4 font-light flex-1 line-clamp-3"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            {project.description}
                          </motion.p>
                        </div>
                        <motion.div
                          className="flex items-center justify-between pt-3 border-t border-gray-200 mt-auto"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="flex items-center gap-1.5">
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                project.status === "ONGOING" ? "bg-yellow-500" : "bg-green-500"
                              }`}
                            ></div>
                            <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                              {project.status}
                            </span>
                          </div>
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReadMore(project.id);
                            }}
                            className="font-bold transition-all duration-300 text-gray-900 hover:text-gray-700 text-xs flex items-center gap-1.5"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            Read More
                            <ArrowRight className="w-3 h-3 transition-transform hover:translate-x-1" />
                          </motion.button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* ... existing navigation arrows code ... */}
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
        </motion.div>

        <motion.div
          className="flex justify-center mt-8 gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {filteredProjects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlideIndex ? "bg-[#cf21c3] scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* ... existing empty state code ... */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-200">
              <Code className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No Projects Found</h3>
            <p className="text-base text-gray-600 max-w-md mx-auto font-light">
              No projects found in the selected category. Try selecting a different filter to explore our work.
            </p>
          </motion.div>
        )}

        <motion.div
          className="text-center mt-16 md:mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.a
            href="https://calendly.com/saadalii/kayidigital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#cf21c3] hover:bg-[#b91c9e] text-white font-semibold px-6 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px -5px rgba(207, 33, 195, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Free Consultation
          </motion.a>
        </motion.div>
      </div>

      {/* ... existing styles ... */}
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
    </motion.section>
  )
}
