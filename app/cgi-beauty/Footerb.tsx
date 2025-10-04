import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
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
            Let's Talk
          </h2>
          <p className="text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg">
            Stop googling 'how to grow my business at 3am' and just talk to us instead.
          </p>
          <Link
              href="https://calendly.com/saadalii/kayidigital"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white 
                         bg-gradient-to-r from-[#cf21c3] to-[#e879f9] rounded-full 
                         hover:from-[#a21caf] hover:to-[#cf21c3] transition-all duration-300 
                         shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
             Need Help?
          </Link>
        </div>
        {/* Animated Pink Gradient Dividers */}
        <div className="h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent mb-6 animate-pulse shadow-lg shadow-pink-500/30"></div>
        
        {/* Where to Find Us Section */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-4 text-lg uppercase tracking-wide text-center">Where to Find Us?</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="font-medium text-white">Canada</p>
              <p className="text-gray-300 text-sm">140 Doubtfire Cres, Markham, ON, Canada</p>
            </div>
            <div>
              <p className="font-medium text-white">United Kingdom</p>
              <p className="text-gray-300 text-sm">International House, 12 Constance St, London E16 2DQ, United Kingdom</p>
            </div>
            <div>
              <p className="font-medium text-white">United States</p>
              <p className="text-gray-300 text-sm">43555 Grimmer Blvd, Fremont, California, USA</p>
            </div>
            <div>
              <p className="font-medium text-white">Pakistan</p>
              <p className="text-gray-300 text-sm">
                Suite 33-35, 7th Floor, Plot Nos. 68 & 69, Kayani Shaheed Road, Karachi, Pakistan.
              </p>
            </div>
          </div>
        </div>

        {/* Second Animated Pink Gradient Divider */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#cf21c3] to-transparent mb-5 animate-pulse shadow-lg shadow-pink-500/30"></div>
        
        {/* Social Icons Section */}
        <div className="flex justify-center mb-5">
          <div className="flex space-x-6">
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