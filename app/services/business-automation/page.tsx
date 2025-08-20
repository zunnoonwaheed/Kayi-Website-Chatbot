import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Bot,
  CheckCircle,
  Clock,
  DollarSign,
  TrendingUp,
  Shield,
  Target,
  Lightbulb,
  Rocket,
  Globe,
  Users,
  Cpu,
  Network,
  Brain,
  Workflow,
  BarChart3,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description:
      "We analyze your current processes, identify bottlenecks, and map out automation opportunities using advanced AI-powered process mining.",
    duration: "1-2 weeks",
    deliverables: ["Process audit report", "Automation roadmap", "ROI projections"],
    icon: Target,
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "Develop a comprehensive automation strategy tailored to your business needs with predictive modeling and risk assessment.",
    duration: "1 week",
    deliverables: ["Implementation plan", "Technical specifications", "Timeline & milestones"],
    icon: Brain,
  },
  {
    step: "03",
    title: "Development & Integration",
    description:
      "Build and integrate cutting-edge automation solutions with your existing systems using microservices architecture.",
    duration: "2-4 weeks",
    deliverables: ["Custom automation tools", "System integrations", "Testing & validation"],
    icon: Cpu,
  },
  {
    step: "04",
    title: "Deployment & Training",
    description:
      "Deploy solutions with zero-downtime migration and comprehensive team training with interactive workshops.",
    duration: "1 week",
    deliverables: ["Live deployment", "Team training", "Documentation & guides"],
    icon: Rocket,
  },
  {
    step: "05",
    title: "Optimization & Support",
    description:
      "Continuous AI-powered monitoring, predictive maintenance, and proactive optimization for peak performance.",
    duration: "Ongoing",
    deliverables: ["Performance monitoring", "Regular optimizations", "24/7 support"],
    icon: BarChart3,
  },
]

const caseStudies = [
  {
    company: "TechCorp Solutions",
    industry: "Software Development",
    challenge: "Manual invoice processing taking 40+ hours per week with 15% error rate",
    solution: "AI-powered invoice processing with OCR, natural language processing, and automated approval workflows",
    results: [
      "95% reduction in processing time",
      "$50K annual cost savings",
      "99.8% accuracy rate",
      "ROI achieved in 3 months",
    ],
    metrics: {
      timeSaved: "38 hours/week",
      costReduction: "$50,000/year",
      accuracy: "99.8%",
      roi: "3 months",
    },
    image: "/modern-automation-office.png",
  },
  {
    company: "RetailMax Inc.",
    industry: "E-commerce",
    challenge: "Inventory management chaos across 50+ locations with frequent stockouts and overstock",
    solution: "Real-time inventory automation with predictive analytics, demand forecasting, and automated reordering",
    results: [
      "60% reduction in stockouts",
      "30% decrease in excess inventory",
      "$200K annual savings",
      "Improved customer satisfaction by 25%",
    ],
    metrics: {
      stockoutReduction: "60%",
      inventoryOptimization: "30%",
      savings: "$200,000",
      satisfaction: "+25%",
    },
    image: "/automated-warehouse.png",
  },
  {
    company: "HealthFirst Clinic",
    industry: "Healthcare",
    challenge: "Patient appointment scheduling chaos with 40% no-show rate and administrative overload",
    solution:
      "Intelligent scheduling system with AI-powered patient communication, smart reminders, and predictive scheduling",
    results: [
      "80% reduction in no-shows",
      "50% less administrative work",
      "Improved patient experience",
      "15% increase in revenue",
    ],
    metrics: {
      noShowReduction: "80%",
      adminReduction: "50%",
      revenueIncrease: "15%",
      satisfaction: "95%",
    },
    image: "/placeholder-4ynpj.png",
  },
]

const serviceIncludes = [
  {
    category: "AI-Powered Automation",
    icon: Brain,
    items: [
      "Machine learning workflow optimization",
      "Natural language processing for documents",
      "Computer vision for quality control",
      "Predictive analytics and forecasting",
    ],
  },
  {
    category: "Process Intelligence",
    icon: Workflow,
    items: [
      "Process mining and discovery",
      "Bottleneck identification and resolution",
      "Performance monitoring dashboards",
      "Continuous improvement recommendations",
    ],
  },
  {
    category: "System Integration",
    icon: Network,
    items: [
      "Enterprise API development",
      "Real-time data synchronization",
      "Cloud-native architecture design",
      "Legacy system modernization",
    ],
  },
  {
    category: "Advanced Analytics",
    icon: BarChart3,
    items: [
      "Real-time performance dashboards",
      "Predictive maintenance alerts",
      "Business intelligence reporting",
      "Custom KPI tracking systems",
    ],
  },
]

export default function BusinessAutomationPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <section className="relative overflow-hidden bg-black py-32 min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 left-20 w-2 h-2 bg-[#cf21c3] rounded-full animate-pulse" />
            <div className="absolute top-40 right-32 w-3 h-3 bg-[#cf21c3] rounded-full animate-pulse animation-delay-1000" />
            <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#cf21c3] rounded-full animate-pulse animation-delay-2000" />
            <div className="absolute bottom-20 right-20 w-4 h-4 bg-[#cf21c3] rounded-full animate-pulse animation-delay-500" />
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#cf21c3] rounded-full animate-pulse animation-delay-1500" />
            <div className="absolute top-32 left-1/3 w-3 h-3 bg-[#cf21c3] rounded-full animate-pulse animation-delay-800" />
            <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-[#cf21c3] rounded-full animate-pulse animation-delay-1200" />
          </div>

          <div className="absolute inset-0 opacity-30">
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id="dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <circle cx="25" cy="25" r="1.5" fill="currentColor" className="text-[#cf21c3] animate-pulse" />
                </pattern>
                <pattern id="largeDots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle
                    cx="50"
                    cy="50"
                    r="2"
                    fill="currentColor"
                    className="text-[#cf21c3] animate-pulse animation-delay-500"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
              <rect width="100%" height="100%" fill="url(#largeDots)" opacity="0.5" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-8 bg-[#cf21c3]/20 text-[#cf21c3] border-[#cf21c3]/30 animate-fade-in-up backdrop-blur-sm px-6 py-3">
              <Bot className="w-5 h-5 mr-2" />
              Next-Generation Business Automation
            </Badge>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-white animate-fade-in-up animation-delay-200 leading-tight">
              Pioneering Digital
              <span className="block text-[#cf21c3] animate-pulse">Automation</span>
              <span className="block text-5xl md:text-6xl lg:text-7xl mt-4 text-gray-300">Revolution</span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              We're proud to deliver{" "}
              <span className="text-[#cf21c3] font-semibold">cutting-edge automation solutions</span> that transform
              businesses and drive innovation across <span className="text-[#cf21c3] font-semibold">30+ countries</span>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600 mb-16">
              <Button
                size="lg"
                className="text-xl px-12 py-6 bg-[#cf21c3] hover:bg-[#cf21c3]/90 text-white border-0 shadow-2xl shadow-[#cf21c3]/25 hover:shadow-[#cf21c3]/40 transition-all duration-500 hover:scale-105 group"
              >
                Start Your Automation Journey
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-12 py-6 bg-transparent border-2 border-[#cf21c3]/40 text-[#cf21c3] hover:bg-[#cf21c3]/10 hover:border-[#cf21c3]/60 backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                View Success Stories
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animation-delay-800">
              {[
                { number: "500+", label: "Businesses Automated", icon: Users },
                { number: "95%", label: "Time Reduction", icon: Clock },
                { number: "99.9%", label: "Accuracy Rate", icon: Target },
                { number: "30+", label: "Countries Served", icon: Globe },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#cf21c3]/20 hover:border-[#cf21c3]/40 transition-all duration-300 hover:scale-105 group"
                  >
                    <Icon className="w-8 h-8 text-[#cf21c3] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-[#cf21c3] text-sm font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto mb-24">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-black animate-fade-in-up">
              Everything Your Business Needs
              <span className="block text-[#cf21c3]">For Digital Transformation</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed animate-fade-in-up animation-delay-200">
              Your business growth should feel <span className="font-bold text-[#cf21c3]">predictable</span>, not like a
              gamble. We partner with companies who want{" "}
              <span className="font-bold text-[#cf21c3]">extraordinary results</span> they can count on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Save Time",
                description: "Eliminate manual work with intelligent automation",
                stat: "40+ hours/week saved",
                detail: "Advanced AI workflows reduce repetitive tasks by up to 90%",
              },
              {
                icon: DollarSign,
                title: "Cut Costs",
                description: "Dramatic reduction in operational expenses",
                stat: "Up to 60% cost savings",
                detail: "Smart resource allocation and process optimization",
              },
              {
                icon: TrendingUp,
                title: "Boost Productivity",
                description: "Focus teams on high-value strategic initiatives",
                stat: "3x productivity increase",
                detail: "Automated workflows free up talent for innovation",
              },
              {
                icon: Shield,
                title: "Reduce Errors",
                description: "Eliminate human error with precision automation",
                stat: "99.9% accuracy rate",
                detail: "AI-powered quality control and validation systems",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={index}
                  className={`text-center group hover:shadow-2xl hover:shadow-[#cf21c3]/20 transition-all duration-700 border border-gray-200 bg-white animate-fade-in-up hover:-translate-y-3 hover:scale-105 relative overflow-hidden`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader className="pb-6 relative z-10">
                    <div
                      className={`w-24 h-24 mx-auto mb-6 rounded-3xl bg-[#cf21c3] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-[#cf21c3]/25 relative`}
                    >
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <CardTitle className="text-3xl mb-4 text-black group-hover:text-[#cf21c3] transition-colors duration-300">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="text-4xl font-bold text-[#cf21c3] mb-3">{benefit.stat}</div>
                    <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      {benefit.detail}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto mb-24">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white animate-fade-in-up">
              Our <span className="text-[#cf21c3]">Revolutionary</span> Process
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed animate-fade-in-up animation-delay-200">
              From initial discovery to ongoing <span className="font-semibold text-[#cf21c3]">optimization</span>, we
              guide your business through <span className="font-semibold text-[#cf21c3]">proven systems</span> that
              deliver sustainable growth
            </p>
          </div>

          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl hover:shadow-[#cf21c3]/20 transition-all duration-700 border-0 bg-white/10 backdrop-blur-sm animate-fade-in-up overflow-hidden relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-12">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                      <div className="flex-shrink-0 relative">
                        <div className="relative">
                          <div
                            className={`w-32 h-32 rounded-3xl bg-[#cf21c3] flex items-center justify-center text-white text-3xl font-bold group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-[#cf21c3]/25 relative overflow-hidden`}
                          >
                            <span className="relative z-10">{step.step}</span>
                          </div>

                          <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-8 h-8 text-[#cf21c3]" />
                          </div>
                        </div>
                      </div>

                      <div className="flex-grow text-center lg:text-left">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                          <div>
                            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white group-hover:text-[#cf21c3] transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="text-gray-300 text-xl leading-relaxed mb-8 group-hover:text-gray-200 transition-colors duration-300">
                              {step.description}
                            </p>
                          </div>
                          <Badge
                            variant="secondary"
                            className="self-center lg:self-start bg-[#cf21c3]/20 text-[#cf21c3] border-[#cf21c3]/30 px-6 py-3 text-lg backdrop-blur-sm"
                          >
                            <Clock className="w-5 h-5 mr-2" />
                            {step.duration}
                          </Badge>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-6 text-white text-2xl flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-[#cf21c3]" />
                            Key Deliverables:
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {step.deliverables.map((deliverable, deliverableIndex) => (
                              <li
                                key={deliverableIndex}
                                className="flex items-center gap-4 text-gray-300 text-lg group-hover:text-gray-200 transition-colors duration-300"
                              >
                                <div className="w-8 h-8 rounded-full bg-[#cf21c3] flex items-center justify-center flex-shrink-0">
                                  <CheckCircle className="w-5 h-5 text-white" />
                                </div>
                                <span>{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.3),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto mb-24">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-black animate-fade-in-up">
              What's Included in Our
              <span className="block text-[#cf21c3]">Premium Service</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed animate-fade-in-up animation-delay-200">
              Comprehensive automation solutions tailored to your business needs with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {serviceIncludes.map((category, index) => {
              const Icon = category.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl hover:shadow-[#cf21c3]/20 transition-all duration-700 border border-gray-200 bg-white animate-fade-in-up hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader className="pb-8 relative z-10">
                    <CardTitle className="text-3xl flex items-center gap-6 text-black group-hover:text-[#cf21c3] transition-colors duration-300">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-[#cf21c3] flex items-center justify-center shadow-xl shadow-[#cf21c3]/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden`}
                      >
                        <Icon className="w-10 h-10 text-white relative z-10" />
                      </div>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-6">
                      {category.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center gap-5 group-hover:translate-x-2 transition-transform duration-300"
                          style={{ transitionDelay: `${itemIndex * 100}ms` }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#cf21c3] flex items-center justify-center flex-shrink-0 shadow-lg">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white animate-fade-in-up">
              Success <span className="text-[#cf21c3]">Stories</span>
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed animate-fade-in-up animation-delay-200">
              Real results from businesses that transformed their operations with our automation solutions.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-2xl hover:shadow-[#cf21c3]/20 transition-all duration-700 border-0 bg-white/10 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={`${study.company} case study`}
                      className="w-full h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div
                      className={`absolute bottom-6 left-6 px-4 py-2 rounded-full bg-[#cf21c3] text-white font-semibold`}
                    >
                      {study.industry}
                    </div>
                  </div>

                  <div className="lg:w-3/5 p-12">
                    <div className="flex items-center gap-6 mb-8">
                      <h3 className="text-4xl font-bold text-white">{study.company}</h3>
                      <Badge
                        variant="secondary"
                        className="bg-[#cf21c3]/20 text-[#cf21c3] border-[#cf21c3]/30 px-4 py-2 text-lg"
                      >
                        {study.industry}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-semibold text-white mb-4 flex items-center gap-3 text-xl">
                          <Target className="w-6 h-6 text-[#cf21c3]" />
                          Challenge
                        </h4>
                        <p className="text-gray-300 text-lg leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-4 flex items-center gap-3 text-xl">
                          <Lightbulb className="w-6 h-6 text-[#cf21c3]" />
                          Solution
                        </h4>
                        <p className="text-gray-300 text-lg leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-6 flex items-center gap-3 text-xl">
                        <Rocket className="w-6 h-6 text-[#cf21c3]" />
                        Results & Impact
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {Object.entries(study.metrics).map(([key, value], metricIndex) => (
                          <div
                            key={metricIndex}
                            className="bg-white/5 rounded-xl p-4 text-center border border-[#cf21c3]/20 hover:border-[#cf21c3]/40 transition-colors duration-300"
                          >
                            <div className="text-2xl font-bold text-white mb-1">{value}</div>
                            <div className="text-[#cf21c3] text-sm capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#cf21c3] flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-300 text-lg">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up text-black">Choose Your Automation Package</h2>
            <p className="text-lg text-gray-600 animate-fade-in-up animation-delay-200">
              Flexible packages designed to meet businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$2,999",
                description: "Perfect for small businesses looking to automate basic processes",
                features: [
                  "Up to 3 automated workflows",
                  "Basic integrations",
                  "Email support",
                  "30-day implementation",
                  "Training for 2 users",
                ],
                popular: false,
              },
              {
                name: "Professional",
                price: "$7,999",
                description: "Ideal for growing businesses with complex automation needs",
                features: [
                  "Up to 10 automated workflows",
                  "Advanced integrations",
                  "Priority support",
                  "45-day implementation",
                  "Training for 10 users",
                  "Custom dashboards",
                  "Performance analytics",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Comprehensive automation solutions for large organizations",
                features: [
                  "Unlimited automated workflows",
                  "Enterprise integrations",
                  "24/7 dedicated support",
                  "Custom timeline",
                  "Unlimited user training",
                  "Advanced analytics",
                  "Custom development",
                  "SLA guarantee",
                ],
                popular: false,
              },
            ].map((pkg, index) => (
              <Card
                key={index}
                className={`relative group hover:shadow-xl transition-all duration-300 animate-fade-in-up border-gray-200 ${pkg.popular ? "ring-2 ring-[#cf21c3] scale-105" : ""}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#cf21c3] text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2 text-black">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold mb-2 text-black">
                    {pkg.price}
                    {pkg.price !== "Custom" && <span className="text-lg font-normal text-gray-600">/project</span>}
                  </div>
                  <CardDescription className="text-gray-600">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#cf21c3] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pkg.popular ? "bg-[#cf21c3] hover:bg-[#cf21c3]/90 text-white" : "border-[#cf21c3] text-[#cf21c3] hover:bg-[#cf21c3] hover:text-white"}`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    {pkg.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-4 h-4 bg-[#cf21c3] rounded-full animate-pulse" />
            <div className="absolute top-40 right-32 w-3 h-3 bg-[#cf21c3] rounded-full animate-pulse animation-delay-1000" />
            <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-[#cf21c3] rounded-full animate-pulse animation-delay-2000" />
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-[#cf21c3] rounded-full animate-pulse animation-delay-500" />
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#cf21c3] rounded-full animate-pulse animation-delay-1500" />
            <div className="absolute top-32 right-1/4 w-4 h-4 bg-[#cf21c3] rounded-full animate-pulse animation-delay-800" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-bold mb-8 text-white animate-fade-in-up leading-tight">
              Ready to <span className="text-[#cf21c3]">Revolutionize</span>
              <span className="block">Your Business?</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 mb-16 leading-relaxed animate-fade-in-up animation-delay-200">
              Join <span className="font-bold text-[#cf21c3]">500+ businesses</span> that have transformed their
              operations with our <span className="font-bold text-[#cf21c3]">next-generation automation solutions</span>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="text-2xl px-16 py-8 bg-[#cf21c3] hover:bg-[#cf21c3]/90 text-white border-0 shadow-2xl shadow-[#cf21c3]/25 hover:shadow-[#cf21c3]/40 transition-all duration-500 hover:scale-105 group"
              >
                Start Your Free Consultation
                <ArrowRight className="w-7 h-7 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-2xl px-16 py-8 bg-transparent border-2 border-[#cf21c3]/40 text-[#cf21c3] hover:bg-[#cf21c3]/10 hover:border-[#cf21c3]/60 backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-6 h-6 mr-3" />
                Download Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <section className="py-12 border-t bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#cf21c3] hover:underline">
              ← Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
