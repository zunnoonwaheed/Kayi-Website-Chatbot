import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"

// Enhanced detailed landmark SVGs matching the reference design
const CNTower = () => (
  <svg viewBox="0 0 50 140" className="h-28 md:h-36 w-auto flex-shrink-0" preserveAspectRatio="xMidYMax meet">
    <g stroke="#ec4899" strokeWidth="1.5" fill="none">
      {/* Base platform */}
      <rect x="18" y="110" width="14" height="30" />
      <rect x="16" y="105" width="18" height="6" />
      {/* Main pod structure */}
      <ellipse cx="25" cy="95" rx="15" ry="9" />
      <ellipse cx="25" cy="93" rx="13" ry="7" />
      <ellipse cx="25" cy="91" rx="11" ry="5" />
      <line x1="10" y1="95" x2="40" y2="95" strokeWidth="1" />
      {/* Windows on pod */}
      <circle cx="18" cy="93" r="1" fill="#ec4899" />
      <circle cx="25" cy="93" r="1" fill="#ec4899" />
      <circle cx="32" cy="93" r="1" fill="#ec4899" />
      {/* Main shaft */}
      <rect x="21.5" y="25" width="7" height="70" />
      <line x1="23" y1="30" x2="23" y2="90" strokeWidth="0.5" opacity="0.6" />
      <line x1="27" y1="30" x2="27" y2="90" strokeWidth="0.5" opacity="0.6" />
      {/* Upper observation deck */}
      <ellipse cx="25" cy="23" rx="10" ry="5" />
      <ellipse cx="25" cy="21" rx="8" ry="4" />
      <line x1="15" y1="23" x2="35" y2="23" strokeWidth="1" />
      {/* Antenna structure */}
      <line x1="25" y1="21" x2="25" y2="5" strokeWidth="2" />
      <circle cx="25" cy="8" r="2" />
      <line x1="25" y1="5" x2="25" y2="2" strokeWidth="1.5" />
      <circle cx="25" cy="2" r="1.5" fill="#ec4899" />
    </g>
  </svg>
)

const BigBen = () => (
  <svg viewBox="0 0 55 140" className="h-32 md:h-40 w-auto flex-shrink-0" preserveAspectRatio="xMidYMax meet">
    <g stroke="#ec4899" strokeWidth="1.5" fill="none">
      {/* Tower base */}
      <rect x="16" y="85" width="23" height="55" />
      <line x1="16" y1="95" x2="39" y2="95" strokeWidth="1" />
      <line x1="16" y1="110" x2="39" y2="110" strokeWidth="1" />
      <line x1="16" y1="125" x2="39" y2="125" strokeWidth="1" />
      {/* Gothic windows */}
      <path d="M 20,100 L 20,107 L 22,107 L 22,100 L 21,98 Z" />
      <path d="M 33,100 L 33,107 L 35,107 L 35,100 L 34,98 Z" />
      <path d="M 20,115 L 20,122 L 22,122 L 22,115 L 21,113 Z" />
      <path d="M 33,115 L 33,122 L 35,122 L 35,115 L 34,113 Z" />
      {/* Clock section */}
      <rect x="12" y="62" width="31" height="25" />
      <line x1="12" y1="68" x2="43" y2="68" strokeWidth="0.8" />
      {/* Clock face */}
      <circle cx="27.5" cy="74.5" r="8.5" />
      <circle cx="27.5" cy="74.5" r="7" strokeWidth="1" />
      {/* Clock details */}
      <line x1="27.5" y1="74.5" x2="27.5" y2="68.5" strokeWidth="1.5" />
      <line x1="27.5" y1="74.5" x2="32" y2="74.5" strokeWidth="1.2" />
      <circle cx="27.5" cy="74.5" r="1.5" fill="#ec4899" />
      {/* Roman numerals positions */}
      <line x1="27.5" y1="66.5" x2="27.5" y2="67.5" strokeWidth="1" />
      <line x1="35" y1="74.5" x2="34" y2="74.5" strokeWidth="1" />
      <line x1="27.5" y1="82.5" x2="27.5" y2="81.5" strokeWidth="1" />
      <line x1="20" y1="74.5" x2="21" y2="74.5" strokeWidth="1" />
      {/* Spire structure */}
      <polygon points="27.5,5 17,50 38,50" />
      <rect x="17" y="50" width="21" height="14" />
      <line x1="20" y1="30" x2="35" y2="30" strokeWidth="1" />
      <line x1="22" y1="20" x2="33" y2="20" strokeWidth="1" />
      <line x1="24" y1="12" x2="31" y2="12" strokeWidth="0.8" />
      {/* Top ornament */}
      <polygon points="27.5,1 24,5 31,5" />
    </g>
  </svg>
)

const StatueOfLiberty = () => (
  <svg viewBox="0 0 55 140" className="h-28 md:h-34 w-auto flex-shrink-0" preserveAspectRatio="xMidYMax meet">
    <g stroke="#ec4899" strokeWidth="1.5" fill="none">
      {/* Star-shaped base */}
      <polygon points="27.5,105 20,140 35,140" />
      <polygon points="27.5,105 18,120 37,120" />
      <line x1="21" y1="130" x2="34" y2="130" strokeWidth="1" />
      <line x1="22" y1="122" x2="33" y2="122" strokeWidth="1" />
      <line x1="23" y1="115" x2="32" y2="115" strokeWidth="1" />
      {/* Pedestal details */}
      <rect x="24" y="100" width="7" height="6" />
      {/* Robe/body */}
      <polygon points="27.5,60 19,105 36,105" />
      <line x1="21" y1="85" x2="34" y2="85" strokeWidth="0.8" />
      <line x1="22" y1="75" x2="33" y2="75" strokeWidth="0.8" />
      {/* Right arm with torch */}
      <polyline points="27.5,65 32,52 35,40" strokeWidth="2" strokeLinecap="round" />
      {/* Torch flame */}
      <polygon points="35,36 33,40 37,40" fill="#ec4899" />
      <polygon points="35,33 32,38 38,38" strokeWidth="1" />
      <line x1="33" y1="37" x2="37" y2="37" strokeWidth="0.8" />
      <line x1="32" y1="35" x2="38" y2="35" strokeWidth="0.8" />
      {/* Torch handle */}
      <circle cx="35" cy="42" r="2" />
      {/* Left arm with tablet */}
      <rect x="20" y="72" width="6" height="9" strokeWidth="1.2" />
      <line x1="21" y1="74" x2="25" y2="74" strokeWidth="0.6" />
      <line x1="21" y1="76" x2="25" y2="76" strokeWidth="0.6" />
      <line x1="21" y1="78" x2="25" y2="78" strokeWidth="0.6" />
      {/* Head */}
      <circle cx="27.5" cy="50" r="7" />
      <circle cx="27.5" cy="50" r="5.5" strokeWidth="1" />
      {/* Crown base */}
      <ellipse cx="27.5" cy="43" rx="8.5" ry="2.5" />
      {/* Crown spikes */}
      <line x1="27.5" y1="43" x2="27.5" y2="32" strokeWidth="1.5" />
      <line x1="22" y1="43" x2="19" y2="34" strokeWidth="1.5" />
      <line x1="33" y1="43" x2="36" y2="34" strokeWidth="1.5" />
      <line x1="18" y1="44" x2="15" y2="38" strokeWidth="1.2" />
      <line x1="37" y1="44" x2="40" y2="38" strokeWidth="1.2" />
      <line x1="25" y1="43" x2="24" y2="36" strokeWidth="1.2" />
      <line x1="30" y1="43" x2="31" y2="36" strokeWidth="1.2" />
    </g>
  </svg>
)

const MinarPakistan = () => (
  <svg viewBox="0 0 55 140" className="h-36 md:h-44 w-auto flex-shrink-0" preserveAspectRatio="xMidYMax meet">
    <g stroke="#ec4899" strokeWidth="1.5" fill="none">
      {/* Base tower */}
      <rect x="20" y="85" width="15" height="55" />
      <line x1="20" y1="100" x2="35" y2="100" strokeWidth="0.8" />
      <line x1="20" y1="112" x2="35" y2="112" strokeWidth="0.8" />
      <line x1="20" y1="124" x2="35" y2="124" strokeWidth="0.8" />
      {/* Platform */}
      <rect x="17" y="76" width="21" height="11" />
      <line x1="17" y1="82" x2="38" y2="82" strokeWidth="1" />
      <rect x="19" y="73" width="17" height="4" />
      {/* Middle section */}
      <rect x="21" y="50" width="13" height="25" />
      <line x1="21" y1="60" x2="34" y2="60" strokeWidth="0.8" />
      <line x1="21" y1="68" x2="34" y2="68" strokeWidth="0.8" />
      {/* Windows */}
      <rect x="24" y="55" width="2.5" height="3" strokeWidth="0.8" />
      <rect x="28.5" y="55" width="2.5" height="3" strokeWidth="0.8" />
      {/* Decorative band */}
      <rect x="18" y="44" width="19" height="7" />
      <line x1="18" y1="47.5" x2="37" y2="47.5" strokeWidth="0.8" />
      {/* Dome structure */}
      <ellipse cx="27.5" cy="38" rx="10" ry="7" />
      <ellipse cx="27.5" cy="36" rx="8" ry="5" />
      <ellipse cx="27.5" cy="34" rx="6" ry="3.5" />
      <line x1="17.5" y1="38" x2="37.5" y2="38" strokeWidth="0.8" />
      {/* Finial structure */}
      <polygon points="27.5,20 23,28 32,28" />
      <rect x="26" y="18" width="3" height="3" />
      {/* Crescent moon */}
      <circle cx="28.5" cy="12" r="5.5" />
      <circle cx="30" cy="12" r="4.5" fill="black" stroke="black" />
      {/* Star */}
      <polygon points="27.5,3 26.5,5.5 24,6 26,7.5 25.5,10 27.5,8.5 29.5,10 29,7.5 31,6 28.5,5.5" fill="#ec4899" strokeWidth="1" />
    </g>
  </svg>
)

const BurjKhalifa = () => (
  <svg viewBox="0 0 50 140" className="h-40 md:h-48 w-auto flex-shrink-0" preserveAspectRatio="xMidYMax meet">
    <g stroke="#ec4899" strokeWidth="1.5" fill="none">
      {/* Main tower - Y-shaped base */}
      <polygon points="25,1 17,140 33,140" />
      <polygon points="25,1 19,100 31,100" />
      <polygon points="25,1 21,65 29,65" />
      <polygon points="25,1 22.5,40 27.5,40" />
      <polygon points="25,1 23.5,25 26.5,25" />
      {/* Setback details */}
      <line x1="19" y1="100" x2="31" y2="100" strokeWidth="1" />
      <line x1="21" y1="65" x2="29" y2="65" strokeWidth="1" />
      <line x1="22.5" y1="40" x2="27.5" y2="40" strokeWidth="1" />
      {/* Floor lines */}
      <line x1="17.5" y1="130" x2="32.5" y2="130" strokeWidth="0.6" opacity="0.8" />
      <line x1="18" y1="120" x2="32" y2="120" strokeWidth="0.6" opacity="0.8" />
      <line x1="18.5" y1="110" x2="31.5" y2="110" strokeWidth="0.6" opacity="0.7" />
      <line x1="19.3" y1="95" x2="30.7" y2="95" strokeWidth="0.6" opacity="0.7" />
      <line x1="19.8" y1="85" x2="30.2" y2="85" strokeWidth="0.6" opacity="0.7" />
      <line x1="20.3" y1="75" x2="29.7" y2="75" strokeWidth="0.6" opacity="0.6" />
      <line x1="21.3" y1="60" x2="28.7" y2="60" strokeWidth="0.6" opacity="0.6" />
      <line x1="21.8" y1="52" x2="28.2" y2="52" strokeWidth="0.6" opacity="0.6" />
      <line x1="22.3" y1="45" x2="27.7" y2="45" strokeWidth="0.6" opacity="0.5" />
      <line x1="22.8" y1="35" x2="27.2" y2="35" strokeWidth="0.6" opacity="0.5" />
      <line x1="23.3" y1="28" x2="26.7" y2="28" strokeWidth="0.6" opacity="0.5" />
      <line x1="23.7" y1="20" x2="26.3" y2="20" strokeWidth="0.6" opacity="0.4" />
      <line x1="24" y1="15" x2="26" y2="15" strokeWidth="0.6" opacity="0.4" />
      <line x1="24.2" y1="10" x2="25.8" y2="10" strokeWidth="0.6" opacity="0.3" />
      {/* Spire */}
      <line x1="25" y1="1" x2="25" y2="8" strokeWidth="2.5" />
      <circle cx="25" cy="1" r="1.2" fill="#ec4899" />
      <circle cx="25" cy="1" r="2" opacity="0.5" />
    </g>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden -mt-8 pb-0" style={{marginTop: '-2rem'}}>
      {/* Enhanced Eye-Catching Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs - pink/magenta only */}
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
      
      <div className="max-w-6xl mx-auto px-4 py-8 pb-32 md:pb-48 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-8">
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
            href="https://wa.me/15104036381"
            target="_blank"
            rel="noopener noreferrer"
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
        
        {/* Contact Information */}
        <div className="text-center mb-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8">
            <a 
              href="mailto:thekayidigital@gmail.com"
              className="text-white hover:text-[#cf21c3] transition-all duration-300 group"
            >
              <span className="text-sm md:text-base font-medium group-hover:scale-105 inline-block transition-transform">
                thekayidigital@gmail.com
              </span>
            </a>
            <span className="hidden md:inline text-gray-500 text-lg">|</span>
            <a 
              href="tel:+15104036381"
              className="text-white hover:text-[#cf21c3] transition-all duration-300 group"
            >
              <span className="text-sm md:text-base font-medium group-hover:scale-105 inline-block transition-transform">
                +1 (510) 403-6381
              </span>
            </a>
          </div>
        </div>

        {/* Where to Find Us Section */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-5 text-lg uppercase tracking-wide text-center">
            Where to Find Us?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Canada */}
            <div>
              <p className="font-semibold text-white text-base mb-1.5">Canada</p>
              <p className="text-gray-300 text-sm leading-snug">
                140 Doubtfire Cres, Markham, ON, Canada
              </p>
            </div>
            
            {/* United Kingdom */}
            <div>
              <p className="font-semibold text-white text-base mb-1.5">United Kingdom</p>
              <p className="text-gray-300 text-sm leading-snug">
                International House, 12 Constance St, London E16 2DQ, United Kingdom
              </p>
            </div>
            
            {/* United States */}
            <div>
              <p className="font-semibold text-white text-base mb-1.5">United States</p>
              <p className="text-gray-300 text-sm leading-snug">
                43555 Grimmer Blvd, Fremont, California, USA
              </p>
            </div>
            
            {/* Pakistan */}
            <div>
              <p className="font-semibold text-white text-base mb-1.5">Pakistan</p>
              <p className="text-gray-300 text-sm leading-snug">
                Suite 33-35, 7th Floor, Plot Nos. 68 & 69, Kayani Shaheed Road, Karachi, Pakistan
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
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/thekayi.digital/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#cf21c3] transition-all duration-300 transform hover:scale-125 hover:rotate-12 drop-shadow-lg"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/kayi-digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#cf21c3] transition-all duration-300 transform hover:scale-125 hover:rotate-12 drop-shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Company Logo Section */}
        <div className="relative mb-6">
          <div className="text-center">
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

      {/* Landmark Skyline at Bottom - Full Width Edge to Edge */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
        {/* Pure purple/magenta gradient background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#701a75]/70 via-[#86198f]/40 to-transparent pointer-events-none"></div>
        
        {/* Enhanced skyline with major landmarks only - NO small buildings */}
        <div className="flex items-end justify-around w-full px-2">
          <BigBen />
          <CNTower />
          <StatueOfLiberty />
          <MinarPakistan />
          <BurjKhalifa />
          <BigBen />
          <CNTower />
          <StatueOfLiberty />
          <MinarPakistan />
          <BurjKhalifa />
          <BigBen />
          <CNTower />
          <MinarPakistan />
        </div>
      </div>
    </footer>
  )
}