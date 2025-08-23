"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Bookmark,
  Eye,
  Heart,
  MessageCircle,
  Filter,
  Code,
  Globe,
  Mail,
  Bell,
  Star,
  ChevronRight,
  BookOpen,
  Layers,
  Rocket,
  Brain,
  Shield,
  Smartphone,
  Settings,
  BarChart3,
  Users,
  Building2,
  Award,
  Rss,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  Instagram,
  Github,
} from "lucide-react"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [expandedPosts, setExpandedPosts] = useState<Set<number>>(new Set())

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Enterprise Digital Transformation in 2024",
      excerpt:
        "Discover the latest trends and technologies shaping enterprise digital transformation, from AI integration to cloud-native architectures.",
      fullContent:
        "Enterprise digital transformation has evolved beyond simple digitization to become a comprehensive reimagining of business processes, customer experiences, and operational models. In 2024, we're witnessing unprecedented convergence of artificial intelligence, cloud computing, and data analytics that's reshaping how organizations operate and compete. The integration of AI into enterprise workflows isn't just about automation—it's about augmenting human capabilities and creating intelligent systems that can adapt and learn. Cloud-native architectures are enabling organizations to build resilient, scalable applications that can respond to market changes in real-time. Meanwhile, the rise of edge computing is bringing processing power closer to data sources, reducing latency and enabling new use cases in IoT, autonomous systems, and real-time analytics. Organizations that embrace these technologies holistically, rather than in silos, are seeing transformational results in efficiency, innovation, and customer satisfaction.",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Digital Transformation",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      featured: true,
      views: "12.5K",
      likes: "342",
      comments: "89",
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with Modern Architecture",
      excerpt:
        "Learn how to design and implement scalable web applications using microservices, containerization, and cloud-native patterns.",
      fullContent:
        "Modern web application architecture has shifted dramatically from monolithic designs to distributed, microservices-based systems that offer unprecedented scalability and maintainability. The key to building truly scalable applications lies in understanding the principles of distributed systems, implementing proper service boundaries, and leveraging containerization technologies like Docker and Kubernetes. Microservices architecture allows teams to develop, deploy, and scale individual components independently, reducing the risk of system-wide failures and enabling faster development cycles. Container orchestration platforms provide the infrastructure needed to manage these distributed systems at scale, offering features like automatic scaling, load balancing, and service discovery. Cloud-native patterns such as circuit breakers, bulkheads, and event-driven architectures ensure that applications remain resilient under varying loads and failure conditions. The adoption of API-first design principles, combined with proper monitoring and observability tools, creates systems that are not only scalable but also maintainable and debuggable in production environments.",
      author: "Michael Rodriguez",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      featured: true,
      views: "8.7K",
      likes: "256",
      comments: "67",
    },
  ]

  const recentPosts = [
    {
      id: 3,
      title: "AI-Powered Customer Service: Implementation Guide",
      excerpt:
        "Step-by-step guide to implementing AI chatbots and automated customer service solutions for enterprise businesses.",
      fullContent:
        "Implementing AI-powered customer service requires a strategic approach that balances automation with human touch. The journey begins with understanding your customer interaction patterns, identifying repetitive queries, and mapping the customer journey to find optimal intervention points. Modern AI chatbots leverage natural language processing and machine learning to understand context, sentiment, and intent, enabling them to provide personalized responses that feel natural and helpful. The implementation process involves training the AI on your specific domain knowledge, integrating with existing CRM systems, and establishing escalation paths to human agents when needed. Success metrics should focus not just on cost reduction, but on customer satisfaction, resolution time, and the quality of interactions. Advanced implementations incorporate sentiment analysis, predictive analytics, and omnichannel support to create seamless experiences across all customer touchpoints.",
      author: "Emily Watson",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop",
      views: "5.2K",
      likes: "189",
      comments: "34",
    },
    {
      id: 4,
      title: "Mobile-First Design Principles for Enterprise Apps",
      excerpt:
        "Essential design principles and best practices for creating mobile-first enterprise applications that users love.",
      fullContent:
        "Mobile-first design has become essential for enterprise applications as the workforce becomes increasingly mobile and distributed. The principles of mobile-first design extend beyond responsive layouts to encompass user experience, performance optimization, and accessibility considerations. Starting with mobile constraints forces designers to prioritize content and functionality, resulting in cleaner, more focused interfaces that work well across all devices. Key considerations include touch-friendly interface elements, optimized loading times, offline functionality, and progressive enhancement. Enterprise mobile apps must also address security concerns, data synchronization, and integration with existing business systems. The design process should involve extensive user research, prototyping, and testing across different devices and network conditions to ensure optimal performance and user satisfaction.",
      author: "David Kim",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      views: "4.8K",
      likes: "167",
      comments: "28",
    },
    {
      id: 5,
      title: "Cloud Security Best Practices for Enterprise",
      excerpt:
        "Comprehensive guide to securing your cloud infrastructure with enterprise-grade security measures and compliance standards.",
      fullContent:
        "Cloud security requires a multi-layered approach that addresses infrastructure, application, and data security concerns. The shared responsibility model means that while cloud providers secure the infrastructure, organizations are responsible for securing their applications and data. Key security practices include implementing zero-trust architecture, using identity and access management (IAM) systems, encrypting data in transit and at rest, and maintaining comprehensive audit logs. Compliance with regulations like GDPR, HIPAA, and SOC 2 requires careful planning and implementation of appropriate controls. Regular security assessments, penetration testing, and vulnerability management are essential for maintaining a strong security posture. Organizations should also implement incident response plans and disaster recovery procedures to ensure business continuity in the event of security incidents.",
      author: "Jennifer Liu",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      category: "Cloud Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      views: "6.1K",
      likes: "234",
      comments: "45",
    },
    {
      id: 6,
      title: "Data Analytics Dashboard Design Patterns",
      excerpt:
        "Learn how to design effective data visualization dashboards that provide actionable insights for business decision-making.",
      fullContent:
        "Effective dashboard design combines data visualization principles with user experience design to create interfaces that enable quick decision-making. The key is to understand the audience, their goals, and the context in which they'll use the dashboard. Design patterns like the inverted pyramid (most important information first), progressive disclosure, and contextual filtering help users navigate complex data sets efficiently. Color theory, typography, and layout principles play crucial roles in making data accessible and understandable. Interactive elements should be intuitive and provide immediate feedback, while maintaining performance even with large datasets. The best dashboards tell a story with data, guiding users through insights and enabling them to drill down into details when needed.",
      author: "Alex Thompson",
      date: "Dec 3, 2024",
      readTime: "9 min read",
      category: "Data Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      views: "7.3K",
      likes: "298",
      comments: "52",
    },
  ]

  const categories = [
    { name: "Digital Transformation", count: 24, icon: Rocket, color: "from-[#cf21c3] to-purple-600" },
    { name: "Web Development", count: 18, icon: Code, color: "from-blue-500 to-cyan-500" },
    { name: "Artificial Intelligence", count: 15, icon: Brain, color: "from-green-500 to-emerald-500" },
    { name: "Mobile Development", count: 12, icon: Smartphone, color: "from-orange-500 to-red-500" },
    { name: "Cloud Security", count: 10, icon: Shield, color: "from-indigo-500 to-purple-500" },
    { name: "Data Analytics", count: 8, icon: BarChart3, color: "from-yellow-500 to-orange-500" },
    { name: "DevOps", count: 6, icon: Settings, color: "from-gray-600 to-gray-800" },
    { name: "E-commerce", count: 5, icon: Building2, color: "from-pink-500 to-rose-500" },
  ]

  const filteredPosts = useMemo(() => {
    const allPosts = [...featuredPosts, ...recentPosts]
    return allPosts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory, featuredPosts, recentPosts])

  const togglePostExpansion = (postId: number) => {
    const newExpanded = new Set(expandedPosts)
    if (newExpanded.has(postId)) {
      newExpanded.delete(postId)
    } else {
      newExpanded.add(postId)
    }
    setExpandedPosts(newExpanded)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search is handled by the useMemo filter above
  }

  return (
    <>
      <style jsx>{`
        @keyframes seamlessFlow {
          0% { transform: translateX(-100%) translateY(-50%) rotate(0deg); opacity: 0.3; }
          25% { transform: translateX(-25%) translateY(-25%) rotate(90deg); opacity: 0.6; }
          50% { transform: translateX(50%) translateY(0%) rotate(180deg); opacity: 0.8; }
          75% { transform: translateX(25%) translateY(25%) rotate(270deg); opacity: 0.6; }
          100% { transform: translateX(-100%) translateY(-50%) rotate(360deg); opacity: 0.3; }
        }
        
        @keyframes seamlessFlowReverse {
          0% { transform: translateX(100%) translateY(50%) rotate(0deg); opacity: 0.4; }
          25% { transform: translateX(75%) translateY(25%) rotate(-90deg); opacity: 0.7; }
          50% { transform: translateX(-50%) translateY(0%) rotate(-180deg); opacity: 0.9; }
          75% { transform: translateX(-25%) translateY(-25%) rotate(-270deg); opacity: 0.7; }
          100% { transform: translateX(100%) translateY(50%) rotate(-360deg); opacity: 0.4; }
        }
        
        @keyframes flowingWave {
          0% { transform: translateX(-100%) scaleY(0.8); opacity: 0.2; }
          33% { transform: translateX(-33%) scaleY(1.2); opacity: 0.6; }
          66% { transform: translateX(33%) scaleY(0.9); opacity: 0.8; }
          100% { transform: translateX(100%) scaleY(1.1); opacity: 0.3; }
        }
        
        @keyframes flowingWaveVertical {
          0% { transform: translateY(-100%) scaleX(0.9); opacity: 0.3; }
          50% { transform: translateY(50%) scaleX(1.3); opacity: 0.7; }
          100% { transform: translateY(100%) scaleX(1.0); opacity: 0.2; }
        }
        
        @keyframes organicFloat {
          0% { transform: scale(1) rotate(0deg) translateX(0px) translateY(0px); opacity: 0.4; }
          25% { transform: scale(1.3) rotate(90deg) translateX(30px) translateY(-20px); opacity: 0.7; }
          50% { transform: scale(0.9) rotate(180deg) translateX(-15px) translateY(25px); opacity: 0.9; }
          75% { transform: scale(1.2) rotate(270deg) translateX(-25px) translateY(-10px); opacity: 0.6; }
          100% { transform: scale(1) rotate(360deg) translateX(0px) translateY(0px); opacity: 0.4; }
        }
        
        @keyframes organicFloatLarge {
          0% { transform: scale(1.2) rotate(0deg) translateX(0px) translateY(0px); opacity: 0.3; }
          33% { transform: scale(0.8) rotate(120deg) translateX(-40px) translateY(30px); opacity: 0.6; }
          66% { transform: scale(1.4) rotate(240deg) translateX(20px) translateY(-35px); opacity: 0.8; }
          100% { transform: scale(1.2) rotate(360deg) translateX(0px) translateY(0px); opacity: 0.3; }
        }

        @keyframes darkPulse {
          0% { transform: scale(1) rotate(0deg); opacity: 0.6; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 0.9; }
          100% { transform: scale(1) rotate(360deg); opacity: 0.6; }
        }

        @keyframes heroFloat {
          0% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
        
        .animate-seamless-flow {
          animation: seamlessFlow 28s ease-in-out infinite;
        }
        
        .animate-seamless-flow-reverse {
          animation: seamlessFlowReverse 32s ease-in-out infinite;
        }
        
        .animate-flowing-wave {
          animation: flowingWave 22s ease-in-out infinite;
        }
        
        .animate-flowing-wave-vertical {
          animation: flowingWaveVertical 26s ease-in-out infinite;
        }
        
        .animate-organic-float {
          animation: organicFloat 18s ease-in-out infinite;
        }
        
        .animate-organic-float-large {
          animation: organicFloatLarge 24s ease-in-out infinite;
        }

        .animate-dark-pulse {
          animation: darkPulse 15s ease-in-out infinite;
        }

        .animate-hero-float {
          animation: heroFloat 20s ease-in-out infinite;
        }
      `}</style>

      <div className="min-h-screen bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Base gradient layers that flow seamlessly */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/8 via-pink-500/4 to-[#cf21c3]/10" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#cf21c3]/6 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-bl from-[#cf21c3]/4 via-transparent to-pink-500/8" />
          <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/5 via-transparent to-[#cf21c3]/7" />

          {/* Professional seamless edge gradients */}
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#cf21c3]/15 via-pink-500/8 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#cf21c3]/15 via-pink-500/8 to-transparent" />
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#cf21c3]/12 via-pink-500/6 to-transparent" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#cf21c3]/12 via-pink-500/6 to-transparent" />

          {/* Enhanced flowing wave gradients with motion animations */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#cf21c3]/10 to-transparent animate-flowing-wave" />
          <div
            className="absolute inset-0 bg-gradient-to-l from-transparent via-pink-500/8 to-transparent animate-flowing-wave"
            style={{ animationDelay: "8s", animationDuration: "30s" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#cf21c3]/7 to-transparent animate-flowing-wave-vertical"
            style={{ animationDelay: "15s" }}
          />

          {/* Professional organic floating gradients with complex motion patterns */}
          <div className="absolute top-1/6 left-1/6 w-96 h-96 bg-gradient-radial from-[#cf21c3]/20 via-pink-500/12 to-transparent rounded-full blur-3xl animate-organic-float" />
          <div
            className="absolute bottom-1/6 right-1/6 w-[32rem] h-[32rem] bg-gradient-radial from-pink-500/15 via-[#cf21c3]/10 to-transparent rounded-full blur-3xl animate-organic-float-large"
            style={{ animationDelay: "7s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-[#cf21c3]/8 via-pink-500/5 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-organic-float"
            style={{ animationDelay: "12s", animationDuration: "40s" }}
          />

          {/* Additional seamless flowing gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/6 via-transparent to-pink-500/4 animate-seamless-flow" />
          <div
            className="absolute inset-0 bg-gradient-to-tl from-pink-500/4 via-transparent to-[#cf21c3]/6 animate-seamless-flow-reverse"
            style={{ animationDelay: "10s" }}
          />

          {/* Professional mesh gradient overlays with blend modes */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/4 via-transparent to-pink-500/5 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/3 via-transparent to-[#cf21c3]/4 mix-blend-screen opacity-60" />
        </div>

        <section className="relative py-40 px-4 z-10">
          {/* Dark hero background with sophisticated gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#cf21c3]/20 via-transparent to-[#cf21c3]/30" />
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-pink-500/10 to-[#cf21c3]/25" />

          {/* Animated dark gradient elements */}
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-radial from-[#cf21c3]/30 via-pink-500/15 to-transparent rounded-full blur-3xl animate-dark-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-pink-500/25 via-[#cf21c3]/20 to-transparent rounded-full blur-3xl animate-dark-pulse"
            style={{ animationDelay: "8s" }}
          />

          {/* Floating geometric elements */}
          <div className="absolute top-20 right-20 w-32 h-32 border border-[#cf21c3]/30 rounded-2xl animate-hero-float" />
          <div
            className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-[#cf21c3]/20 to-pink-500/20 rounded-full animate-hero-float"
            style={{ animationDelay: "5s" }}
          />

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/95 border border-[#cf21c3]/30 rounded-full px-8 py-4 mb-8 backdrop-blur-sm shadow-2xl">
                <div className="w-3 h-3 bg-gradient-to-r from-[#cf21c3] to-pink-500 rounded-full animate-pulse" />
                <span className="text-gray-900 font-bold text-lg">Professional Digital Insights</span>
                <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-[#cf21c3] rounded-full animate-pulse" />
              </div>

              <h1 className="text-7xl md:text-8xl font-black text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Enterprise
                </span>
                <span className="block bg-gradient-to-r from-[#cf21c3] via-pink-400 to-[#cf21c3] bg-clip-text text-transparent">
                  Innovation Hub
                </span>
              </h1>

              <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                Cutting-edge insights, strategic frameworks, and actionable intelligence for digital transformation
                leaders and enterprise innovators.
              </p>

              {/* Professional CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button className="bg-gradient-to-r from-[#cf21c3] to-pink-600 hover:from-[#cf21c3]/90 hover:to-pink-600/90 text-white px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-[#cf21c3]/25 transition-all duration-300 transform hover:scale-105">
                  <Rocket className="w-6 h-6 mr-3" />
                  Explore Insights
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-12 py-6 rounded-2xl text-xl font-bold backdrop-blur-sm transition-all duration-300 bg-transparent"
                >
                  <BookOpen className="w-6 h-6 mr-3" />
                  Latest Research
                </Button>
              </div>

              {/* Professional metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="text-center group p-8 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 hover:border-[#cf21c3]/50 transition-all duration-300 hover:shadow-2xl hover:bg-white/15">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#cf21c3]/30 to-pink-500/30 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-black text-white mb-3">500K+</div>
                  <div className="text-gray-300 font-medium">Global Readers</div>
                </div>
                <div className="text-center group p-8 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 hover:border-[#cf21c3]/50 transition-all duration-300 hover:shadow-2xl hover:bg-white/15">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#cf21c3]/30 to-pink-500/30 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-black text-white mb-3">50+</div>
                  <div className="text-gray-300 font-medium">Industry Awards</div>
                </div>
                <div className="text-center group p-8 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 hover:border-[#cf21c3]/50 transition-all duration-300 hover:shadow-2xl hover:bg-white/15">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#cf21c3]/30 to-pink-500/30 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-black text-white mb-3">1000+</div>
                  <div className="text-gray-300 font-medium">Enterprise Clients</div>
                </div>
                <div className="text-center group p-8 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 hover:border-[#cf21c3]/50 transition-all duration-300 hover:shadow-2xl hover:bg-white/15">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#cf21c3]/30 to-pink-500/30 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-black text-white mb-3">24/7</div>
                  <div className="text-gray-300 font-medium">AI Insights</div>
                </div>
              </div>
            </div>

            {/* Professional search bar */}
            <div className="max-w-5xl mx-auto">
              <form onSubmit={handleSearch} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#cf21c3]/20 to-pink-500/20 rounded-3xl blur-xl" />
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/30">
                  <div className="flex items-center gap-4">
                    <Search className="w-8 h-8 text-gray-400 ml-4" />
                    <Input
                      placeholder="Search enterprise insights, case studies, and strategic frameworks..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 bg-transparent border-0 text-gray-900 placeholder:text-gray-500 focus:ring-0 text-xl font-medium"
                    />
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-[#cf21c3] to-pink-600 hover:from-[#cf21c3]/90 hover:to-pink-600/90 text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                onClick={() => setSelectedCategory("All")}
                className={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${
                  selectedCategory === "All"
                    ? "bg-[#cf21c3] text-white hover:bg-[#cf21c3]/90 shadow-lg"
                    : "border-gray-300 text-gray-700 hover:border-[#cf21c3] hover:text-[#cf21c3] bg-white/80 backdrop-blur-sm"
                }`}
              >
                All Categories
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                    selectedCategory === category.name
                      ? "bg-[#cf21c3] text-white hover:bg-[#cf21c3]/90 shadow-lg"
                      : "border-gray-300 text-gray-700 hover:border-[#cf21c3] hover:text-[#cf21c3] bg-white/80 backdrop-blur-sm"
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              ))}
            </div>
            {searchQuery && (
              <div className="text-center">
                <p className="text-gray-600 bg-white/80 rounded-full px-6 py-2 inline-block backdrop-blur-sm">
                  Found {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
                  {searchQuery && ` for "${searchQuery}"`}
                  {selectedCategory !== "All" && ` in ${selectedCategory}`}
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="py-24 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#cf21c3] to-gray-900 rounded-2xl flex items-center justify-center animate-pulse-glow">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-5xl font-bold text-gray-900">
                  {searchQuery || selectedCategory !== "All" ? "Search Results" : "Featured Articles"}
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {searchQuery || selectedCategory !== "All"
                  ? `Showing ${filteredPosts.length} matching articles`
                  : "Our most popular and impactful articles on digital transformation and enterprise technology"}
              </p>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">No articles found</h3>
                <p className="text-gray-600 mb-8">Try adjusting your search terms or browse all categories</p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("All")
                  }}
                  className="bg-[#cf21c3] hover:bg-[#cf21c3]/90 text-white px-6 py-3 rounded-full font-semibold"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <Card
                    key={post.id}
                    className="group bg-white/90 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden backdrop-blur-sm hover:bg-white"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {post.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-[#cf21c3] text-white font-semibold px-3 py-1">Featured</Badge>
                        </div>
                      )}
                      <div className="absolute top-4 right-4">
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 rounded-full p-2">
                          <Bookmark className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#cf21c3] transition-colors duration-300">
                        {post.title}
                      </h3>
                      <div className="text-gray-600 mb-6 leading-relaxed">
                        <p>{post.excerpt}</p>
                        {expandedPosts.has(post.id) && post.fullContent && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="leading-relaxed">{post.fullContent}</p>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600 font-medium">{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{post.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{post.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{post.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{post.comments}</span>
                          </div>
                        </div>
                        <Button
                          onClick={() => togglePostExpansion(post.id)}
                          className="bg-[#cf21c3] hover:bg-[#cf21c3]/90 text-white px-6 py-2 rounded-full font-semibold group-hover:scale-105 transition-transform duration-300"
                        >
                          {expandedPosts.has(post.id) ? "Show Less" : "Read More"}
                          <ArrowRight
                            className={`w-4 h-4 ml-2 transition-transform duration-300 ${expandedPosts.has(post.id) ? "rotate-90" : ""}`}
                          />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-24 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-900 to-[#cf21c3] rounded-2xl flex items-center justify-center animate-icon-glow">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-5xl font-bold text-gray-900">Explore Categories</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover articles organized by technology, industry, and expertise level
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card
                  key={category.name}
                  className="group bg-white/90 border-2 border-gray-100 hover:border-[#cf21c3]/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden backdrop-blur-sm hover:bg-white"
                >
                  <CardContent className="p-8 text-center relative">
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.color} opacity-10 rounded-bl-full`}
                    />
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#cf21c3] transition-colors duration-300">
                      {category.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-[#cf21c3]">{category.count}</span>
                      <span className="text-gray-600">articles</span>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-[#cf21c3] hover:bg-[#cf21c3]/10 font-semibold group-hover:scale-105 transition-transform duration-300"
                    >
                      Explore
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-16">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#cf21c3] to-gray-900 rounded-2xl flex items-center justify-center animate-pulse-glow">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-5xl font-bold text-gray-900">Latest Articles</h2>
                </div>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Stay updated with our newest insights and practical guides
                </p>
              </div>
              <div className="hidden lg:flex items-center gap-4">
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:border-[#cf21c3] hover:text-[#cf21c3] bg-transparent"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button className="bg-[#cf21c3] hover:bg-[#cf21c3]/90 text-white px-6 py-2 rounded-full font-semibold">
                  View All Posts
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="group bg-white/90 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden backdrop-blur-sm hover:bg-white"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {post.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#cf21c3] text-white font-semibold px-3 py-1">Featured</Badge>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 rounded-full p-2">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#cf21c3] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <div className="text-gray-600 mb-6 leading-relaxed">
                      <p>{post.excerpt}</p>
                      {expandedPosts.has(post.id) && post.fullContent && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="leading-relaxed">{post.fullContent}</p>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600 font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.comments}</span>
                        </div>
                      </div>
                      <Button
                        onClick={() => togglePostExpansion(post.id)}
                        className="bg-[#cf21c3] hover:bg-[#cf21c3]/90 text-white px-6 py-2 rounded-full font-semibold group-hover:scale-105 transition-transform duration-300"
                      >
                        {expandedPosts.has(post.id) ? "Show Less" : "Read More"}
                        <ArrowRight
                          className={`w-4 h-4 ml-2 transition-transform duration-300 ${expandedPosts.has(post.id) ? "rotate-90" : ""}`}
                        />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 relative z-10">
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/80 border border-[#cf21c3]/20 rounded-full px-8 py-4 mb-8 backdrop-blur-sm">
              <Bell className="w-6 h-6 text-[#cf21c3]" />
              <span className="text-[#cf21c3] font-semibold text-lg">Stay Updated</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Never Miss an
              <span className="block bg-gradient-to-r from-[#cf21c3] to-gray-900 bg-clip-text text-transparent">
                Innovation Update
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get the latest insights on digital transformation, enterprise technology, and industry trends delivered
              directly to your inbox every week.
            </p>

            <div className="max-w-3xl mx-auto mb-12">
              <div className="flex flex-col sm:flex-row gap-4 p-3 bg-white/90 rounded-2xl backdrop-blur-sm border border-gray-200 shadow-lg">
                <Input
                  placeholder="Enter your email address"
                  className="flex-1 bg-transparent border-0 text-gray-900 placeholder:text-gray-500 focus:ring-0 px-6 py-4 text-lg"
                />
                <Button className="bg-[#cf21c3] hover:bg-[#cf21c3]/90 text-white px-10 py-4 rounded-xl font-semibold whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300">
                  <Mail className="w-5 h-5 mr-2" />
                  Subscribe Now
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Join 50,000+ professionals. Unsubscribe anytime. No spam, ever.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white/80 rounded-2xl backdrop-blur-sm border border-gray-200 hover:border-[#cf21c3]/30 transition-all duration-300 hover:shadow-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
                <div className="text-gray-600">Subscribers</div>
              </div>
              <div className="text-center p-6 bg-white/80 rounded-2xl backdrop-blur-sm border border-gray-200 hover:border-[#cf21c3]/30 transition-all duration-300 hover:shadow-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">Weekly</div>
                <div className="text-gray-600">Updates</div>
              </div>
              <div className="text-center p-6 bg-white/80 rounded-2xl backdrop-blur-sm border border-gray-200 hover:border-[#cf21c3]/30 transition-all duration-300 hover:shadow-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">Expert</div>
                <div className="text-gray-600">Insights</div>
              </div>
              <div className="text-center p-6 bg-white/80 rounded-2xl backdrop-blur-sm border border-gray-200 hover:border-[#cf21c3]/30 transition-all duration-300 hover:shadow-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">Free</div>
                <div className="text-gray-600">Forever</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 relative z-10">
          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="p-8 bg-white/80 rounded-3xl backdrop-blur-sm border border-gray-200 hover:border-[#cf21c3]/30 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Join the Digital Innovation Community</h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Connect with industry leaders, share insights, and stay ahead of the digital transformation curve with
                  our growing community of innovators.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-[#cf21c3] text-white hover:bg-[#cf21c3]/90 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Join Community
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-300 text-gray-700 hover:bg-[#cf21c3]/10 hover:border-[#cf21c3] hover:text-[#cf21c3] px-8 py-4 text-lg font-semibold rounded-2xl bg-white/80 backdrop-blur-sm"
                  >
                    <Rss className="w-5 h-5 mr-2" />
                    RSS Feed
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-8 bg-white/80 rounded-2xl backdrop-blur-sm border border-gray-200 hover:border-[#cf21c3]/30 transition-all duration-300 hover:shadow-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">1M+</div>
                  <div className="text-gray-600">Monthly Readers</div>
                </div>
                <div className="text-center p-8 bg-white/80 rounded-2xl backdrop-blur-sm border border-gray-200 hover:border-[#cf21c3]/30 transition-all duration-300 hover:shadow-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-gray-600">Expert Contributors</div>
                </div>
                <div className="text-center p-8 bg-white/80 rounded-2xl backdrop-blur-sm border border-gray-200 hover:border-[#cf21c3]/30 transition-all duration-300 hover:shadow-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
                  <div className="text-gray-600">Countries Reached</div>
                </div>
                <div className="text-center p-8 bg-white/80 rounded-2xl backdrop-blur-sm border border-gray-200 hover:border-[#cf21c3]/30 transition-all duration-300 hover:shadow-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                  <div className="text-gray-600">Community Support</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-12 pt-12 border-t border-gray-200">
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-600 hover:bg-[#cf21c3]/20 hover:text-[#cf21c3] rounded-full p-4 bg-white/80 backdrop-blur-sm"
              >
                <Twitter className="w-6 h-6" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-600 hover:bg-[#cf21c3]/20 hover:text-[#cf21c3] rounded-full p-4 bg-white/80 backdrop-blur-sm"
              >
                <Linkedin className="w-6 h-6" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-600 hover:bg-[#cf21c3]/20 hover:text-[#cf21c3] rounded-full p-4 bg-white/80 backdrop-blur-sm"
              >
                <Facebook className="w-6 h-6" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-600 hover:bg-[#cf21c3]/20 hover:text-[#cf21c3] rounded-full p-4 bg-white/80 backdrop-blur-sm"
              >
                <Youtube className="w-6 h-6" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-600 hover:bg-[#cf21c3]/20 hover:text-[#cf21c3] rounded-full p-4 bg-white/80 backdrop-blur-sm"
              >
                <Instagram className="w-6 h-6" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-600 hover:bg-[#cf21c3]/20 hover:text-[#cf21c3] rounded-full p-4 bg-white/80 backdrop-blur-sm"
              >
                <Github className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
