"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", targetClass: ".home", href: "/" },
    { name: "Our Process", targetClass: ".aboutus" },
    { name: "Services", targetClass: ".services" },
    { name: "Portfolio", targetClass: ".portfolio" },
    { name: "Testimonials", targetClass: ".testimonials" },
    { name: "Contact", targetClass: ".contact" },
    // ✅ Removed { name: "Contact Page", href: "/contact-page" }
  ];

  const scrollToSection = (selector: string) => {
    const section = document.querySelector(selector);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsSheetOpen(false);
    }
  };

  const navLinks = (
    <>
      {menuItems.map((item, i) => {
        if (item.href) {
          return (
            <Link
              key={i}
              href={item.href}
              onClick={() => setIsSheetOpen(false)}
              className="hover:text-gray-800 transition-colors font-normal text-[16px]"
            >
              {item.name}
            </Link>
          );
        }

        if (pathname === "/") {
          return (
            <button
              key={i}
              onClick={() => scrollToSection(item.targetClass!)}
              className="hover:text-gray-800 transition-colors font-normal text-[16px]"
            >
              {item.name}
            </button>
          );
        }

        return (
          <Link
            key={i}
            href={`/#${item.targetClass?.replace(".", "")}`}
            className="hover:text-gray-800 transition-colors font-normal text-[16px]"
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );

  return (
    <header className="flex items-center justify-between px-4 md:px-6 lg:px-12 py-3 bg-[#f8f8f8] sticky top-0 z-50 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/kayi-logo-white.png"
            alt="Kayi Digital Logo"
            width={150}
            height={40}
            className="h-auto"
          />
        </Link>
      </div>

      {/* Center Nav Links */}
      <nav className="hidden lg:flex items-center gap-10 text-black absolute left-1/2 transform -translate-x-1/2">
        {navLinks}
      </nav>

      {/* Right-side Buttons */}
      <div className="flex items-center gap-3">
        <Link
          href="https://calendly.com/saadalii/kayidigital"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="hidden md:block bg-black text-white px-8 py-3 text-[15px] font-normal rounded-full shadow hover:shadow-md hover:bg-black/90 transition-all">
            Book a Call
          </Button>
        </Link>

        {/* Mobile Sheet */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-black">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[250px] sm:w-[300px] bg-white text-black flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-lg font-light pt-8">
              {navLinks}
            </nav>

            <div className="mt-auto pt-8">
              <Link
                href="https://calendly.com/saadalii/kayidigital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-black text-white px-8 py-3 text-[15px] font-normal rounded-full shadow hover:shadow-md hover:bg-black/90 transition-all">
                  Book a Call
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
