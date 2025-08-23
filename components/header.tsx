"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { name: "Home", targetClass: ".home", href: "/" },
    { name: "Our Process", targetClass: ".aboutus" },
    { name: "Our Presence", targetClass: ".locations" },
    { name: "Services", targetClass: ".services" },
    { name: "Portfolio", targetClass: ".portfolio" },
    { name: "Testimonials", targetClass: ".testimonials" },
    { name: "Contact", targetClass: ".contact" },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (selector: string) => {
    const section = document.querySelector(selector)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsSheetOpen(false)
    }
  }

  const navLinks = (
    <>
      {menuItems.map((item, i) => {
        if (item.href) {
          return (
            <Link
              key={i}
              href={item.href}
              onClick={() => setIsSheetOpen(false)}
              className="hover:text-[#cf21c3] transition-all duration-300 font-medium text-[14px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#cf21c3] after:transition-all after:duration-300 hover:after:w-full"
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
              className="hover:text-[#cf21c3] transition-all duration-300 font-medium text-[14px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#cf21c3] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </button>
          )
        }

        return (
          <Link
            key={i}
            href={`/#${item.targetClass?.replace(".", "")}`}
            className="hover:text-[#cf21c3] transition-all duration-300 font-medium text-[14px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#cf21c3] after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.name}
          </Link>
        )
      })}
    </>
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg py-2 mx-4 mt-4 rounded-2xl border border-white/20"
          : "bg-[#f8f8f8] shadow-sm py-2"
      }`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "px-6" : "px-3 md:px-5 lg:px-8"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/kayi-logo-white.png"
              alt="Kayi Digital Logo"
              width={isScrolled ? 85 : 95}
              height={isScrolled ? 24 : 26}
              className={`h-auto transition-all duration-300 ${isScrolled ? "scale-95" : "scale-100"}`}
            />
          </Link>
        </div>

        {/* Center Nav Links */}
        <nav
          className={`hidden lg:flex items-center gap-6 text-gray-700 absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
            isScrolled ? "opacity-100" : "opacity-100"
          }`}
        >
          {navLinks}
        </nav>

        {/* Right-side Buttons */}
        <div className="flex items-center gap-2">
          <Link href="/book-call">
            <Button className="hidden md:block bg-black hover:bg-black/90 text-white px-5 py-1.5 text-[13px] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Book a Call
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={`transition-all duration-300 h-8 w-8 ${
                  isScrolled ? "text-gray-700 hover:bg-blue-50" : "text-black hover:bg-gray-100"
                }`}
              >
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[320px] bg-white/95 backdrop-blur-xl border-l border-gray-200/50 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8 pt-4 px-2">
                <Image
                  src="/images/kayi-logo-white.png"
                  alt="Kayi Digital Logo"
                  width={85}
                  height={24}
                  className="h-auto"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSheetOpen(false)}
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <nav className="flex flex-col gap-1 mb-8">
                {menuItems.map((item, i) => {
                  if (item.href) {
                    return (
                      <Link
                        key={i}
                        href={item.href}
                        onClick={() => setIsSheetOpen(false)}
                        className="text-gray-700 hover:text-[#cf21c3] hover:bg-purple-50 transition-all duration-200 font-medium text-base py-3 px-4 rounded-xl"
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
                        className="text-gray-700 hover:text-[#cf21c3] hover:bg-purple-50 transition-all duration-200 font-medium text-base py-3 px-4 rounded-xl text-left"
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
                      className="text-gray-700 hover:text-[#cf21c3] hover:bg-purple-50 transition-all duration-200 font-medium text-base py-3 px-4 rounded-xl"
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </nav>

              <div className="mt-auto pb-6">
                <Link href="/book-call">
                  <Button
                    onClick={() => setIsSheetOpen(false)}
                    className="w-full bg-black hover:bg-black/90 text-white px-6 py-3 text-[15px] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
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
