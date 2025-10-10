import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"

// Proper landmark SVGs representing actual locations
const CNTower = () => (
  <svg viewBox="0 0 60 150" className="h-32 md:h-40 w-auto flex-shrink-0" preserveAspectRatio="xMidYMax meet">
    <g stroke="#ec4899" strokeWidth="2" fill="none">
      {/* Base */}
      <rect x="22" y="115" width="16" height="35" />
      <rect x="20" y="110" width="20" height="6" />
      {/* Main pod - SkyPod */}
      <ellipse cx="30" cy="98" rx="18" ry="10" />
      <ellipse cx="30" cy="96" rx="16" ry="8" />
      <line x1="12" y1="98" x2="48" y2="98" strokeWidth="1.5" />
      {/* Windows */}
      <circle cx="20" cy="96" r="1.5" fill="#ec4899" />
      <circle cx="30" cy="96" r="1.5" fill="#ec4899" />
      <circle cx="40" cy="96" r="1.5" fill="#ec4899" />
      {/* Shaft */}
      <rect x="26" y="28" width="8" height="72" strokeWidth="2" />
      <line x1="28" y1="32" x2="28" y2="95" strokeWidth="0.8" opacity="0.6" />
      <line x1="32" y1="32" x2="32" y2="95" strokeWidth="0.8" opacity="0.6" />
      {/* Upper deck */}
      <ellipse cx="30" cy="25" rx="12" ry="6" />
      <line x1="18" y1="25" x2="42" y2="25" strokeWidth="1.5" />
      {/* Antenna */}
      <line x1="30" y1="25" x2="30" y2="6" strokeWidth="2.5" />
      <circle cx="30" cy="10" r="2.5" />
      <circle cx="30" cy="2" r="2" fill="#ec4899" />
    </g>
  </svg>
)

const BigBen = () => (
  <svg viewBox="0 0 65 150" className="h-32 md:h-40 w-auto flex-shrink-0" preserveAspectRatio="xMidYMax meet">
    <g stroke="#ec4899" strokeWidth="2" fill="none">
      {/* Tower base */}
      <rect x="20" y="90" width="25" height="60" strokeWidth="2" />
      <line x1="20" y1="105" x2="45" y2="105" strokeWidth="1.2" />
      <line x1="20" y1="120" x2="45" y2="120" strokeWidth="1.2" />
      <line x1="20" y1="135" x2="45" y2="135" strokeWidth="1.2" />
      {/* Gothic windows */}
      <path d="M 24,110 L 24,117 L 27,117 L 27,110 L 25.5,108 Z" strokeWidth="1.5" />
      <path d="M 38,110 L 38,117 L 41,117 L 41,110 L 39.5,108 Z" strokeWidth="1.5" />
      <path d="M 24,125 L 24,132 L 27,132 L 27,125 L 25.5,123 Z" strokeWidth="1.5" />
      <path d="M 38,125 L 38,132 L 41,132 L 41,125 L 39.5,123 Z" strokeWidth="1.5" />
      {/* Clock section */}
      <rect x="15" y="65" width="35" height="27" strokeWidth="2" />
      {/* Clock face */}
      <circle cx="32.5" cy="78.5" r="10" strokeWidth="2" />
      <circle cx="32.5" cy="78.5" r="8.5" strokeWidth="1.5" />
      {/* Clock hands */}
      <line x1="32.5" y1="78.5" x2="32.5" y2="71.5" strokeWidth="2" />
      <line x1="32.5" y1="78.5" x2="38" y2="78.5" strokeWidth="1.8" />
      <circle cx="32.5" cy="78.5" r="2" fill="#ec4899" />
      {/* Clock markers */}
      <line x1="32.5" y1="69.5" x2="32.5" y2="71" strokeWidth="1.5" />
      <line x1="41" y1="78.5" x2="39.5" y2="78.5" strokeWidth="1.5" />
      <line x1="32.5" y1="87.5" x2="32.5" y2="86" strokeWidth="1.5" />
      <line x1="24" y1="78.5" x2="25.5" y2="78.5" strokeWidth="1.5" />
      {/* Spire */}
      <polygon points="32.5,8 20,53 45,53" strokeWidth="2" />
      <rect x="20" y="53" width="25" height="14" strokeWidth="2" />
      <line x1="23" y1="33" x2="42" y2="33" strokeWidth="1.5" />
      <line x1="25" y1="22" x2="40" y2="22" strokeWidth="1.5" />
      {/* Top */}
      <polygon points="32.5,2 28,8 37,8" strokeWidth="1.5" />
    </g>
  </svg>
)

const GoldenGateBridge = () => (
  <svg viewBox="0 0 100 150" className="h-32 md:h-40 w-auto flex-shrink-0" preserveAspectRatio="xMidYMax meet">
    <g stroke="#ec4899" strokeWidth="2" fill="none">
      {/* Left tower */}
      <rect x="15" y="50" width="8" height="100" strokeWidth="2" />
      <line x1="16" y1="60" x2="22" y2="60" strokeWidth="1" />
      <line x1="16" y1="75" x2="22" y2="75" strokeWidth="1" />
      <line x1="16" y1="90" x2="22" y2="90" strokeWidth="1" />
      <line x1="16" y1="105" x2="22" y2="105" strokeWidth="1" />
      <line x1="16" y1="120" x2="22" y2="120" strokeWidth="1" />
      {/* Left tower top */}
      <rect x="13" y="45" width="12" height="6" strokeWidth="2" />
      <line x1="17" y1="45" x2="17" y2="35" strokeWidth="2" />
      <line x1="21" y1="45" x2="21" y2="35" strokeWidth="2" />
      
      {/* Right tower */}
      <rect x="77" y="50" width="8" height="100" strokeWidth="2" />
      <line x1="78" y1="60" x2="84" y2="60" strokeWidth="1" />
      <line x1="78" y1="75" x2="84" y2="75" strokeWidth="1" />
      <line x1="78" y1="90" x2="84" y2="90" strokeWidth="1" />
      <line x1="78" y1="105" x2="84" y2="105" strokeWidth="1" />
      <line x1="78" y1="120" x2="84" y2="120" strokeWidth="1" />
      {/* Right tower top */}
      <rect x="75" y="45" width="12" height="6" strokeWidth="2" />
      <line x1="79" y1="45" x2="79" y2="35" strokeWidth="2" />
      <line x1="83" y1="45" x2="83" y2="35" strokeWidth="2" />
      
      {/* Main cables */}
      <path d="M 19,51 Q 50,75 81,51" strokeWidth="2" />
      <path d="M 19,51 Q 50,73 81,51" strokeWidth="1.5" />
      
      {/* Suspension cables */}
      <line x1="25" y1="58" x2="25" y2="95" strokeWidth="1" opacity="0.6" />
      <line x1="31" y1="62" x2="31" y2="95" strokeWidth="1" opacity="0.6" />
      <line x1="37" y1="66" x2="37" y2="95" strokeWidth="1" opacity="0.6" />
      <line x1="43" y1="69" x2="43" y2="95" strokeWidth="1" opacity="0.6" />
      <line x1="50" y1="71" x2="50" y2="95" strokeWidth="1" opacity="0.6" />
      <line x1="57" y1="69" x2="57" y2="95" strokeWidth="1" opacity="0.6" />
      <line x1="63" y1="66" x2="63" y2="95" strokeWidth="1" opacity="0.6" />
      <line x1="69" y1="62" x2="69" y2="95" strokeWidth="1" opacity="0.6" />
      <line x1="75" y1="58" x2="75" y2="95" strokeWidth="1" opacity="0.6" />
      
      {/* Road deck */}
      <rect x="10" y="95" width="80" height="4" strokeWidth="2" />
      <line x1="10" y1="97" x2="90" y2="97" strokeWidth="0.8" opacity="0.5" />
    </g>
  </svg>
)

const QuaideAzamMausoleum = () => (
  <svg viewBox="0 0 80 150" className="h-32 md:h-40 w-auto flex-shrink-0" preserveAspectRatio="xMidYMax meet">
    <g stroke="#ec4899" strokeWidth="2" fill="none">
      {/* Base platform - multi-tiered */}
      <rect x="10" y="130" width="60" height="20" strokeWidth="2" />
      <rect x="15" y="120" width="50" height="12" strokeWidth="2" />
      <rect x="20" y="110" width="40" height="12" strokeWidth="1.8" />
      
      {/* Main structure base */}
      <rect x="25" y="85" width="30" height="27" strokeWidth="2" />
      
      {/* Four corner pillars/arches */}
      <line x1="28" y1="85" x2="28" y2="112" strokeWidth="2" />
      <line x1="52" y1="85" x2="52" y2="112" strokeWidth="2" />
      
      {/* Central chamber */}
      <rect x="32" y="90" width="16" height="22" strokeWidth="1.8" />
      
      {/* Arched openings */}
      <path d="M 34,108 L 34,95 Q 40,88 46,95 L 46,108" strokeWidth="1.5" />
      
      {/* Main dome base */}
      <rect x="22" y="78" width="36" height="8" strokeWidth="2" />
      
      {/* Large central dome - iconic copper dome */}
      <ellipse cx="40" cy="65" rx="20" ry="15" strokeWidth="2.5" />
      <ellipse cx="40" cy="63" rx="18" ry="13" strokeWidth="2" />
      <ellipse cx="40" cy="61" rx="16" ry="11" strokeWidth="1.8" />
      
      {/* Dome ribs/segments */}
      <line x1="40" y1="50" x2="40" y2="78" strokeWidth="1" opacity="0.6" />
      <path d="M 28,68 Q 40,52 52,68" strokeWidth="1" opacity="0.6" />
      <path d="M 24,72 Q 40,54 56,72" strokeWidth="1" opacity="0.6" />
      
      {/* Finial on top */}
      <line x1="40" y1="50" x2="40" y2="38" strokeWidth="2.5" />
      <circle cx="40" cy="45" r="2" strokeWidth="1.5" />
      
      {/* Crescent and star at top */}
      <circle cx="41" cy="35" r="4" strokeWidth="2" stroke="#ec4899" />
      <circle cx="42.5" cy="35" r="3.2" fill="black" stroke="black" strokeWidth="1.5" />
      <polygon points="40,28 39,30 37,30.3 38.5,31.5 38,33.5 40,32.5 42,33.5 41.5,31.5 43,30.3 41,30" 
               fill="#ec4899" stroke="#ec4899" strokeWidth="1.2" />
      
      {/* Decorative details on base */}
      <line x1="25" y1="100" x2="55" y2="100" strokeWidth="1" opacity="0.5" />
      <line x1="20" y1="118" x2="60" y2="118" strokeWidth="1" opacity="0.5" />
      <line x1="15" y1="128" x2="65" y2="128" strokeWidth="1" opacity="0.5" />
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
      
      <div className="max-w-6xl mx-auto px-4 py-8 pb-36 md:pb-48 relative z-10">
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
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6">
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

      {/* Landmark Skyline - Repeating monuments pattern */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
        {/* Pure purple/magenta gradient background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#701a75]/70 via-[#86198f]/40 to-transparent pointer-events-none"></div>
        
        {/* Repeating landmarks pattern - consistent spacing */}
        <div className="flex items-end justify-start w-full">
          {/* Repeat the pattern multiple times to fill the width */}
          {[...Array(10)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-end gap-6 flex-shrink-0">
              <div className="flex justify-center">
                <CNTower />
              </div>
              <div className="flex justify-center">
                <BigBen />
              </div>
              <div className="flex justify-center">
                <GoldenGateBridge />
              </div>
              <div className="flex justify-center">
                <QuaideAzamMausoleum />
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}