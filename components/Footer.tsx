import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Plus } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Centered Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">CONTACT US</h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Let’s talk about how we can grow your business through digital marketing.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-300">
              Need a results-driven digital marketing agency?
            </h3>
            <p className="text-gray-400 text-sm">
              Let’s create impactful solutions together. Reach out today.
            </p>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-2 uppercase">Stay Updated</h4>
              <div className="flex items-center bg-white rounded-full p-1 max-w-md">
                <input
                  type="email"
                  placeholder="Your@Email.com"
                  className="flex-1 px-4 py-2 text-black placeholder-gray-500 text-sm bg-transparent outline-none"
                />
                <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-8 text-sm text-gray-300">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Plus size={16} className="text-[#cf21c3]" />
                <span className="font-semibold">Email</span>
              </div>
              <p>hello@kayidigital.com</p>
              <p>support@kayidigital.com</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Plus size={16} className="text-[#cf21c3]" />
                <span className="font-semibold">Locations</span>
              </div>
              <p>New York, USA</p>
              <p>London, UK</p>
              <p>Dubai, UAE</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-8 text-sm text-gray-400 mb-10">
          <div>
            <h4 className="text-gray-300 font-semibold mb-3 uppercase text-xs">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Home</Link></li>
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-300 font-semibold mb-3 uppercase text-xs">Services</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Portfolio</Link></li>
              <li><Link href="#" className="hover:text-white">Services</Link></li>
              <li><Link href="#" className="hover:text-white">Testimonials</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-300 font-semibold mb-3 uppercase text-xs">Support</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-300 font-semibold mb-3 uppercase text-xs">Follow Us</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-white">Twitter</Link></li>
              <li><Link href="#" className="hover:text-white">Instagram</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-6 text-gray-500 text-sm">
          <Image
            src="/images/kayi-digital-logo.png"
            alt="Kayi Digital Logo"
            width={130}
            height={35}
            className="h-auto mb-4 md:mb-0"
          />
          <p>© 2024 Kayi Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
