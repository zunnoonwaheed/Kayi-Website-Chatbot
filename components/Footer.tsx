import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Music } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Enhanced Eye-Catching Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-[#cf21c3]/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-l from-[#cf21c3]/25 to-pink-400/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-600/20 to-[#cf21c3]/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-tr from-[#cf21c3]/20 to-pink-500/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        {/* Floating particles effect */}
        <div className="absolute top-20 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute top-40 right-1/3 w-1 h-1 bg-[#cf21c3] rounded-full animate-bounce opacity-80" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pink-300 rounded-full animate-bounce opacity-70" style={{animationDelay: '0.8s'}}></div>
        
        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-900/5 to-[#cf21c3]/10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 relative">
        {/* Enhanced Header Section */}
        <div className="text-center mb-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-white drop-shadow-2xl bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg">
            Stop googling 'how to grow my business at 3am' and just talk to us instead.
          </p>
          <button className="bg-gradient-to-r from-[#cf21c3] to-pink-500 text-white font-bold px-12 py-4 rounded-full hover:from-pink-500 hover:to-[#cf21c3] transition-all duration-500 transform hover:scale-110 hover:rotate-1 shadow-2xl hover:shadow-pink-500/50 border-2 border-pink-400/30">
            <span className="text-lg tracking-wide">SIGN UP NOW</span>
          </button>
        </div>

        {/* Animated Pink Gradient Dividers */}
        <div className="h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent mb-6 animate-pulse shadow-lg shadow-pink-500/30"></div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-1.5 text-white text-sm">
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Design Studio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Digital Lab
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-1.5 text-white text-sm">
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Social Ads
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Video Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Marketing Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Expertise</h4>
            <ul className="space-y-1.5 text-white text-sm">
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  SaaS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  B2B
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Fintech
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Startups
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Resources</h4>
            <ul className="space-y-1.5 text-white text-sm">
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Marketing Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Growth Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#cf21c3] transition-colors">
                  Privacy Policy
                </Link>
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
            <Link href="#" className="text-white hover:text-[#cf21c3] transition-all duration-300 transform hover:scale-125 hover:rotate-12 drop-shadow-lg">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-[#cf21c3] transition-all duration-300 transform hover:scale-125 hover:rotate-12 drop-shadow-lg">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-[#cf21c3] transition-all duration-300 transform hover:scale-125 hover:rotate-12 drop-shadow-lg">
              <Music size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-[#cf21c3] transition-all duration-300 transform hover:scale-125 hover:rotate-12 drop-shadow-lg">
              <Youtube size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-[#cf21c3] transition-all duration-300 transform hover:scale-125 hover:rotate-12 drop-shadow-lg">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-[#cf21c3] transition-all duration-300 transform hover:scale-125 hover:rotate-12 drop-shadow-lg">
              <Twitter size={20} />
            </Link>
          </div>

          {/* Location Info */}
          <div className="text-center md:text-right">
            <p className="text-white text-xs mb-2">Headquartered in NYC with strategic global hubs across:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div>
                <p className="text-white font-medium">New York City</p>
                <p className="text-gray-300">HQ in Soho, New York</p>
              </div>
              <div>
                <p className="text-white font-medium">London</p>
                <p className="text-gray-300">Shoreditch, London</p>
              </div>
              <div>
                <p className="text-white font-medium">Dubai</p>
                <p className="text-gray-300">DIFC, Dubai</p>
              </div>
            </div>
          </div>
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