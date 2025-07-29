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
              className="hover:text-gray-800 transition-colors font-normal text-[13px] md:text-[13px]"
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
              className="hover:text-gray-800 transition-colors font-normal text-[13px] md:text-[13px]"
            >
              {item.name}
            </button>
          );
        }

        return (
          <Link
            key={i}
            href={`/#${item.targetClass?.replace(".", "")}`}
            className="hover:text-gray-800 transition-colors font-normal text-[13px] md:text-[13px]"
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );

  return (
    <header className="flex items-center justify-between px-3 md:px-5 lg:px-8 py-1 bg-[#f8f8f8] sticky top-0 z-50 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/kayi-logo-white.png"
            alt="Kayi Digital Logo"
            width={85} // Smaller width
            height={24}
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
        <Link
          href="https://calendly.com/saadalii/kayidigital"
          target="_blank"
          rel="noopener noreferrer"
        >
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

          <SheetContent
            side="right"
            className="w-[220px] sm:w-[260px] bg-white text-black flex flex-col"
          >
            <nav className="flex flex-col gap-4 text-sm font-light pt-6">
              {navLinks}
            </nav>

            <div className="mt-auto pt-6">
              <Link
                href="https://calendly.com/saadalii/kayidigital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-black text-white px-4 py-1.5 text-[12px] font-semibold rounded-full shadow hover:shadow-md hover:bg-black/90 transition-all">
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
