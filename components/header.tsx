"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const servicesItems = [
    { name: "Business Automation", targetClass: ".services" },
    { name: "Performance Marketing", targetClass: ".services" },
    { name: "Web Development & Mobile Apps", targetClass: ".services" },
    { name: "Custom Business Outsourcing", targetClass: ".services" },
  ]

  const menuItems = [
    { name: "Home", targetClass: ".home", href: "/" },
    { name: "About", targetClass: ".locations" },
    { 
      name: "Services", 
      isDropdown: true,
      items: servicesItems
    },
    { name: "Work", targetClass: ".portfolio" },
    { name: "Contact", targetClass: ".contact" },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const scrollToSection = (selector: string) => {
    const section = document.querySelector(selector)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsSheetOpen(false)
      setIsServicesOpen(false)
    }
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const navLinks = (
    <>
      {menuItems.map((item, i) => {
        if (item.isDropdown) {
          return (
            <div 
              key={i} 
              className="relative group"
              ref={dropdownRef}
            >
              <button 
                onClick={toggleServices}
                className="flex items-center gap-1 text-black hover:text-[#cf21c3] transition-all duration-300 font-medium text-[13px] xl:text-[14px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#cf21c3] after:transition-all after:duration-300 group-hover:after:w-full whitespace-nowrap"
              >
                {item.name}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200/50 overflow-hidden z-50 transition-all duration-300 ${
                  isServicesOpen 
                    ? "opacity-100 visible translate-y-0" 
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="py-2">
                  {item.items?.map((service, serviceIndex) => (
                    <button
                      key={serviceIndex}
                      onClick={() => scrollToSection(service.targetClass)}
                      className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:text-[#cf21c3] hover:bg-purple-50/50 transition-all duration-200 font-medium"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )
        }

        if (item.href) {
          return (
            <Link
              key={i}
              href={item.href}
              onClick={() => {
                setIsSheetOpen(false)
                setIsServicesOpen(false)
              }}
              className="text-black hover:text-[#cf21c3] transition-all duration-300 font-medium text-[13px] xl:text-[14px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#cf21c3] after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
            >
              {item.name}
            </Link>
          )
        }

        if (pathname === "/") {
          return (
            <button
              key={i}
              onClick={() => {
                scrollToSection(item.targetClass!)
                setIsServicesOpen(false)
              }}
              className="text-black hover:text-[#cf21c3] transition-all duration-300 font-medium text-[13px] xl:text-[14px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#cf21c3] after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
            >
              {item.name}
            </button>
          )
        }

        return (
          <Link
            key={i}
            href={`/#${item.targetClass?.replace(".", "")}`}
            onClick={() => {
              setIsSheetOpen(false)
              setIsServicesOpen(false)
            }}
            className="text-black hover:text-[#cf21c3] transition-all duration-300 font-medium text-[13px] xl:text-[14px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#cf21c3] after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
          >
            {item.name}
          </Link>
        )
      })}
    </>
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out 
        ${isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg py-2 mx-4 mt-4 rounded-2xl border border-white/20" 
          : "bg-white/90 backdrop-blur-md shadow-lg py-2 mx-4 mt-4 rounded-2xl border border-white/20 lg:bg-transparent lg:shadow-none lg:border-transparent lg:py-3 lg:mx-0 lg:mt-0"
        }`}
    >
      <div className={`flex items-center justify-between transition-all duration-300 px-4 md:px-6 lg:px-8`}>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link 
            href="/" 
            className="flex items-center gap-2"
            onClick={() => setIsServicesOpen(false)}
          >
            <Image
              src="/images/kayi-logo-white.png"
              alt="Kayi Digital Logo"
              width={isScrolled ? 75 : 85}
              height={isScrolled ? 20 : 22}
              className={`h-auto transition-all duration-300 ${isScrolled ? "scale-90" : "scale-100"}`}
            />
          </Link>
        </div>

        {/* Center Nav Links */}
        <nav
          className={`hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
            isScrolled ? "text-black" : "lg:text-white text-black"
          }`}
        >
          {navLinks}
        </nav>

        {/* Right-side Buttons */}
        <div className="flex items-center gap-2">
          <Link 
            href="/book-call"
            onClick={() => setIsServicesOpen(false)}
          >
            <Button className="hidden md:block bg-black hover:bg-black/90 text-white px-4 py-1.5 text-[13px] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Book a Call
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="transition-all duration-300 h-9 w-9 text-black hover:bg-gray-100"
                onClick={() => setIsServicesOpen(false)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85vw] max-w-sm bg-white/95 backdrop-blur-xl border-l border-gray-200/50 flex flex-col p-0 overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <Image
                  src="/images/kayi-logo-white.png"
                  alt="Kayi Digital Logo"
                  width={75}
                  height={20}
                  className="h-auto"
                />
              </div>

              <nav className="flex-1 overflow-y-auto p-6">
                <div className="space-y-1">
                  {menuItems.map((item, i) => {
                    if (item.isDropdown) {
                      return (
                        <div key={i} className="border-b border-gray-100/50 pb-3">
                          <button
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                            className="flex items-center justify-between w-full text-black font-medium text-[16px] py-3 px-3 rounded-lg hover:text-[#cf21c3]"
                          >
                            <span>{item.name}</span>
                            <ChevronDown 
                              className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`} 
                            />
                          </button>
                          
                          <div className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? "max-h-96" : "max-h-0"}`}>
                            {item.items?.map((service, serviceIndex) => (
                              <button
                                key={serviceIndex}
                                onClick={() => scrollToSection(service.targetClass)}
                                className="w-full text-left py-2.5 px-3 text-[15px] text-gray-700 hover:text-[#cf21c3] hover:bg-purple-50/50 transition-all duration-200 rounded-lg"
                              >
                                {service.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )
                    }

                    if (item.href) {
                      return (
                        <Link
                          key={i}
                          href={item.href}
                          onClick={() => setIsSheetOpen(false)}
                          className="block text-black hover:text-[#cf21c3] hover:bg-purple-50 transition-all duration-200 font-medium text-[16px] py-3 px-3 rounded-lg"
                        >
                          {item.name}
                        </Link>
                      )
                    }

                    if (pathname === "/") {
                      return (
                        <button
                          key={i}
                          onClick={() => scrollToSection(item.targetClass!)}
                          className="block w-full text-left text-black hover:text-[#cf21c3] hover:bg-purple-50 transition-all duration-200 font-medium text-[16px] py-3 px-3 rounded-lg"
                        >
                          {item.name}
                        </button>
                      )
                    }

                    return (
                      <Link
                        key={i}
                        href={`/#${item.targetClass?.replace(".", "")}`}
                        onClick={() => setIsSheetOpen(false)}
                        className="block text-black hover:text-[#cf21c3] hover:bg-purple-50 transition-all duration-200 font-medium text-[16px] py-3 px-3 rounded-lg"
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              </nav>

              <div className="p-6 border-t border-gray-100">
                <Link href="/book-call">
                  <Button
                    onClick={() => setIsSheetOpen(false)}
                    className="w-full bg-black hover:bg-black/90 text-white px-5 py-3 text-[15px] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book a Call
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}