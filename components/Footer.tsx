import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  // Keeping only the first 5 services as requested
  const servicesCategories = [
    "Business Automation",
    "Performance Marketing",
    "Web Development",
    "Mobile App Development",
    "Custom Software Solutions",
  ]

  return (
    <footer className="bg-black text-white relative overflow-hidden -mt-8 block" style={{marginTop: '-2rem'}}>
      {/* Enhanced Eye-Catching Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-[#cf21c3]/25 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-l from-[#cf21c3]/25 to-pink-400/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-600/20 to-[#cf21c3]/15 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-tr from-[#cf21c3]/20 to-pink-500/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        {/* Floating particles effect */}
        <div
          className="absolute top-20 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-60"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="absolute top-40 right-1/3 w-1 h-1 bg-[#cf21c3] rounded-full animate-bounce opacity-80"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pink-300 rounded-full animate-bounce opacity-70"
          style={{ animationDelay: "0.8s" }}
        ></div>
        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-900/5 to-[#cf21c3]/10"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8 relative">
        {/* Enhanced Header Section */}
        <div className="text-center mb-8 relative z-10">
          <h2
            id="contact-us-section"
            className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-white drop-shadow-2xl bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent"
          >
            Contact Us
          </h2>
          <p className="text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg">
            Stop googling 'how to grow my business at 3am' and just talk to us instead.
          </p>
          <Link
            href="https://calendly.com/saadalii/kayidigital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#cf21c3] to-pink-500 text-white font-semibold px-6 py-3 rounded-full hover:from-pink-500 hover:to-[#cf21c3] transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-pink-500/50 border border-pink-400/30"
          >
            <span className="text-base">Need help?</span>
          </Link>
        </div>
        {/* Animated Pink Gradient Dividers */}
        <div className="h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent mb-6 animate-pulse shadow-lg shadow-pink-500/30"></div>
        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Our Company</h4>
            <ul className="space-y-1.5 text-white text-sm">
              <li>
                <Link href="#our-process-section" className="hover:text-[#cf21c3] transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="#services-section" className="hover:text-[#cf21c3] transition-colors">
                  Services We Offer
                </Link>
              </li>
              <li>
                <Link href="#success-stories-section" className="hover:text-[#cf21c3] transition-colors">
                  Our Success Stories
                </Link>
              </li>
              <li>
                <Link href="#why-teams-choose-us-section" className="hover:text-[#cf21c3] transition-colors">
                  Why Teams Choose Us
                </Link>
              </li>
              <li>
                <Link href="#have-a-project-in-mind-section" className="hover:text-[#cf21c3] transition-colors">
                  Have A Project In Mind?
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/dashboard"
                  className="hover:text-[#cf21c3] transition-colors opacity-70 hover:opacity-100"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Our Services</h4>
            <ul className="space-y-1.5 text-white text-sm">
              {servicesCategories.map((service) => (
                <li key={service}>
                  <Link href="#success-stories-section" className="hover:text-[#cf21c3] transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Addresses */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Addresses</h4>
            <ul className="space-y-1.5 text-white text-sm">
              <li>
                <p className="font-medium">Canada</p>
                <p className="text-gray-300">140 Doubtfire Cres, Markham, ON, Canada</p>
              </li>
              <li>
                <p className="font-medium">United Kingdom</p>
                <p className="text-gray-300">International House, 12 Constance St, London E16 2DQ, United Kingdom</p>
              </li>
              <li>
                <p className="font-medium">Pakistan</p>
                <p className="text-gray-300">
                  Suite 33-35, 7th Floor, Plot Nos. 68 & 69, Kayani Shaheed Road, Karachi, Pakistan.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* Second Animated Pink Gradient Divider */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#cf21c3] to-transparent mb-5 animate-pulse shadow-lg shadow-pink-500/30"></div>
        {/* Social and Location Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-5">
          {/* Enhanced Social Icons */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              href="https://www.facebook.com/people/The-Kayi-Digital/61565056286873/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#cf21c3] transition-all duration-300 transform hover:scale-125 hover:rotate-12 drop-shadow-lg"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/thekayi.digital/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#cf21c3] transition-all duration-300 transform hover:scale-125 hover:rotate-12 drop-shadow-lg"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/kayi-digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#cf21c3] transition-all duration-300 transform hover:scale-125 hover:rotate-12 drop-shadow-lg"
            >
              <Linkedin size={20} />
            </Link>
          </div>
          {/* Location Info - Removed as new Addresses section is added */}
        </div>
        {/* Company Logo Section */}
        <div className="relative mb-3">
          <div className="text-center relative z-10">
            <Image
              src="/images/logo.png"
              alt="Kayi Digital Logo"
              width={250}
              height={80}
              className="mx-auto h-auto"
              priority
            />
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center text-white text-xs border-t border-gray-700 pt-3">
          <p>© 2024 Kayi Digital. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}