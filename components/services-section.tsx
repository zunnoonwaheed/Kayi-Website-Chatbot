import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Code, Cloud, Shield, Rocket, Lightbulb, Users } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Building bespoke software solutions tailored to your unique business needs and challenges.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & Migration",
      description: "Leveraging cloud technologies for scalable, secure, and efficient infrastructure.",
    },
    {
      icon: Shield,
      title: "Cybersecurity & Compliance",
      description: "Protecting your digital assets with robust security measures and ensuring regulatory compliance.",
    },
    {
      icon: Rocket,
      title: "DevOps & Automation",
      description: "Streamlining your development and operations processes for faster, more reliable deployments.",
    },
    {
      icon: Lightbulb,
      title: "UI/UX Design & Prototyping",
      description: "Crafting intuitive and engaging user experiences that drive adoption and satisfaction.",
    },
    {
      icon: Users,
      title: "IT Consulting & Strategy",
      description: "Providing expert guidance to optimize your technology strategy and achieve business goals.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12 px-4 lg:px-8">
        <h2 className="text-5xl font-bold mb-4">Our Core Services</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We offer a comprehensive suite of digital services designed to accelerate your business growth and innovation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 lg:px-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader className="pb-4">
              <service.icon className="h-12 w-12 text-[#A855F7] mb-4" />
              <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}