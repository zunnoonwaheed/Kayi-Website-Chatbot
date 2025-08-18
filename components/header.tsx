"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
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
              className="hover:text-gray-800 transition-colors font-normal text-[13px] md:text-[13px]"
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
              className="hover:text-gray-800 transition-colors font-normal text-[13px] md:text-[13px]"
            >
              {item.name}
            </button>
          )
        }

        return (
          <Link
            key={i}
            href={`/#${item.targetClass?.replace(".", "")}`}
            className="hover:text-gray-800 transition-colors font-normal text-[13px] md:text-[13px]"
          >
            {item.name}
          </Link>
        )
      })}
    </>
  )

  return (
    <header className="flex items-center justify-between px-3 md:px-5 lg:px-8 py-1 bg-[#f8f8f8] sticky top-0 z-50 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/kayi-logo-white.png"
            alt="Kayi Digital Logo"
            width={100} // Increased width for desktop
            height={28} // Increased height for desktop
            className="h-auto"
          />
        </Link>
      </div>

      {/* Center Nav Links */}
      <nav className="hidden lg:flex items-center gap-4 text-black absolute left-1/2 transform -translate-x-1/2">
        {navLinks}
      </nav>

      {/* Right-side Buttons */}
      <div className="flex items-center gap-1.5">
        <Link href="/book-call">
          <Button className="hidden md:block bg-black text-white px-4 py-1 text-[12px] font-semibold rounded-full shadow hover:shadow-md hover:bg-black/90 transition-all">
            Book a Call
          </Button>
        </Link>

        {/* Mobile Menu */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-black">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-white text-black flex flex-col p-6">
            {/* Header */}
            <div className="flex items-center justify-center mb-8 pt-4">
              <Image
                src="/images/kayi-logo-white.png"
                alt="Kayi Digital Logo"
                width={100}
                height={28}
                className="h-auto"
              />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-6 text-center">
              {menuItems.map((item, i) => {
                if (item.href) {
                  return (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={() => setIsSheetOpen(false)}
                      className="text-gray-800 hover:text-[#cf21c3] transition-colors font-medium text-lg py-2 border-b border-gray-100 last:border-b-0"
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
                      className="text-gray-800 hover:text-[#cf21c3] transition-colors font-medium text-lg py-2 border-b border-gray-100 last:border-b-0 text-center"
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
                    className="text-gray-800 hover:text-[#cf21c3] transition-colors font-medium text-lg py-2 border-b border-gray-100 last:border-b-0"
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>

            {/* Call to Action Button */}
            <div className="mt-auto pt-8">
              <Link href="/book-call">
                <Button
                  onClick={() => setIsSheetOpen(false)}
                  className="w-full bg-[#cf21c3] text-white px-6 py-3 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-[#b91db0] transition-all transform hover:scale-[1.02]"
                >
                  Book a Call
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
