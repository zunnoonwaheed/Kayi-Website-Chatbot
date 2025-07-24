/*"use client"

import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ServicesAccordionSection() {
  const services = [
    {
      value: "item-1",
      title: "Customized Software Development",
      description:
        "Customized software development delivers tailored solutions to meet specific business needs, enhancing efficiency, productivity, and competitive advantage.",
      color: "text-[#A855F7]", // Changed to purple
      dash: true, // Show dash for the first item
    },
    {
      value: "item-2",
      title: "Audit and Consulting",
      description:
        "Our expert audit and consulting services help identify bottlenecks, optimize processes, and strategize for future growth, ensuring your technology aligns with business objectives.",
      color: "text-black",
      dash: false,
    },
    {
      value: "item-3",
      title: "Delivery",
      description:
        "We ensure timely and efficient delivery of high-quality software products, adhering to best practices and maintaining transparent communication throughout the development lifecycle.",
      color: "text-black",
      dash: false,
    },
    {
      value: "item-4",
      title: "Support and Maintenance",
      description:
        "Comprehensive support and maintenance services to ensure your software runs smoothly, remains secure, and evolves with your business needs, minimizing downtime and maximizing performance.",
      color: "text-black",
      dash: false,
    },
  ]

  return (
    <section className="pt-14 md:pt-24 lg:pt-[10.5rem] bg-white">
      <div className="max-w-3xl xl:max-w-4xl px-6 lg:px-8">
        <div className="lg:overflow-hidden">
          <h2 className="font-bold pb-8 md:pb-12 text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
            <span>Services we provide</span>
          </h2>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 pt-10 px-6 lg:px-8">
  
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <Image
            src="/images/services-phones.jpg" // Using the exact image provided
            alt="Mobile Development Services"
            width={600} // Adjusted width to match the scale in the screenshot
            height={600} // Adjusted height
            className="w-full fade-in object-contain" // Added object-contain to prevent cropping
            style={{ transform: "rotate(-10deg)" }} // Apply rotation directly to the image
          />
        </div>

        <div className="lg:col-span-7 lg:pt-0 pt-10">
          <div className="space-y-6 lg:space-y-10">
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              {services.map((service) => (
                <AccordionItem key={service.value} value={service.value} className="pt-2 border-none">
                  <AccordionTrigger className="flex w-full justify-between text-left hover:no-underline [&>svg]:hidden">
                    <h3 className={`${service.color} font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]`}>
                      {service.title}
                    </h3>
                    <span className="ml-6 flex h-7 items-center">
                      <span
                        className={`transform transition-transform duration-[200ms] ease-in-out text-5xl font-normal ${
                          service.dash ? "rotate-180 text-[#A855F7] mt-[5px]" : "text-black mt-[8px]" // Changed to purple
                        }`}
                      >
                        {service.dash ? "-" : "+"}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden">
                    <dd className="mt-2 pr-12">
                      <p className="text-black mt-3 mb-5 text-sm lg:text-md xl:text-lg 2xl:text-xl">
                        {service.description}
                      </p>
                    </dd>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
*/