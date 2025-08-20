import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Bot, Workflow, Zap, BarChart3, Clock, Shield } from "lucide-react"

const services = [
  {
    id: "business-automation",
    title: "Business Automation",
    description: "Streamline your operations with intelligent automation solutions that save time and reduce costs.",
    icon: Bot,
    gradient: "from-blue-600 to-purple-600",
    features: ["Process Automation", "Workflow Optimization", "AI Integration", "Custom Solutions"],
    href: "/services/business-automation",
  },
  {
    id: "workflow-optimization",
    title: "Workflow Optimization",
    description: "Optimize your business processes for maximum efficiency and productivity.",
    icon: Workflow,
    gradient: "from-green-600 to-teal-600",
    features: ["Process Analysis", "Bottleneck Identification", "Performance Metrics", "Continuous Improvement"],
    href: "/services/workflow-optimization",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "Integrate cutting-edge AI solutions into your existing business infrastructure.",
    icon: Zap,
    gradient: "from-orange-600 to-red-600",
    features: ["Machine Learning", "Natural Language Processing", "Predictive Analytics", "Smart Automation"],
    href: "/services/ai-integration",
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting",
    description: "Transform your data into actionable insights with advanced analytics and reporting.",
    icon: BarChart3,
    gradient: "from-purple-600 to-pink-600",
    features: ["Data Visualization", "Custom Dashboards", "Real-time Analytics", "Performance Tracking"],
    href: "/services/analytics-reporting",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <Zap className="w-4 h-4" />
              Transform Your Business
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-400">
              Comprehensive solutions to automate, optimize, and transform your business operations with cutting-edge
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.id}
                  className="group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  <CardHeader className="relative">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href}>
                      <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Why Choose Our Services?</h2>
            <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-200">
              We deliver exceptional results through proven methodologies and cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Fast Implementation",
                description: "Quick deployment with minimal disruption to your existing operations.",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Enterprise-grade security with 99.9% uptime guarantee.",
              },
              {
                icon: BarChart3,
                title: "Measurable Results",
                description: "Track ROI and performance with detailed analytics and reporting.",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up animation-delay-200">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Button size="lg" className="text-lg px-8">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
