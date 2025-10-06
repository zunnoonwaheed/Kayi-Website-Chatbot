'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function GuaranteeSection() {
  const [isDateSelected, setIsDateSelected] = useState(false);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Listen for Calendly events to detect when date is selected
    const handleMessage = (event) => {
      if (event.data.event && event.data.event === 'calendly.event_scheduled') {
        setIsDateSelected(true);
      }
      // You might need to listen for other events like date selection
      if (event.data.event && event.data.event === 'calendly.date_and_time_selected') {
        setIsDateSelected(true);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/saadalii/kayidigital?hide_event_type_details=1'
      });
    } else {
      window.open('https://calendly.com/saadalii/kayidigital', '_blank');
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your 4x ROAS guarantee and would like to learn more about your services. I saw you have offices in Canada, UK, USA (Fremont, California), and Pakistan.");
    window.open(`https://wa.me/923090613822?text=${message}`, '_blank');
  };

  return (
    <section className="flex justify-center items-center py-8 md:py-12 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-7xl w-full rounded-3xl shadow-2xl p-6 md:p-10 text-white overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <motion.div
            className="absolute inset-0 opacity-40"
            animate={{
              background: [
                'radial-gradient(circle at 0% 0%, #cf21c3 0%, transparent 50%)',
                'radial-gradient(circle at 100% 100%, #cf21c3 0%, transparent 50%)',
                'radial-gradient(circle at 100% 0%, #cf21c3 0%, transparent 50%)',
                'radial-gradient(circle at 0% 100%, #cf21c3 0%, transparent 50%)',
                'radial-gradient(circle at 0% 0%, #cf21c3 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start mb-6"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-[#cf21c3] to-pink-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">4x</div>
                  <div className="text-sm font-bold">ROAS</div>
                  <div className="text-xs font-bold mt-1">GUARANTEE</div>
                </div>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cf21c3] to-pink-400">4x ROAS</span>{' '}
              <span className="text-white">Or We Work Until You Hit It</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 mb-6"
            >
              <p className="text-gray-200 text-sm leading-relaxed">
                We guarantee you'll achieve at least <span className="font-bold text-white">4x return on ad spend</span> within 90 days.
              </p>
              <p className="text-gray-200 text-sm leading-relaxed">
                If you don't hit this benchmark, we continue working at no extra cost until you do.
              </p>
              <p className="text-lg font-bold text-white">The risk is entirely on us. You only win.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 text-gray-300 text-sm"
            >
              <div className="flex items-center gap-2"><span className="text-[#cf21c3]">🔒</span>Confidential</div>
              <div className="flex items-center gap-2"><span className="text-[#cf21c3]">⚡</span>2h response</div>
              <div className="flex items-center gap-2"><span className="text-[#cf21c3]">✅</span>No pressure</div>
            </motion.div>
          </div>

          {/* Right Side - EXACT CALENDAR FROM HERO */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mb-6 w-full"
            >
              <motion.button
                onClick={openCalendly}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-[#cf21c3] to-pink-500 hover:from-[#cf21c3] hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 text-lg mb-4"
              >
                📅 Book Free Strategy Call
              </motion.button>

              {/* EXACT CALENDLY STRUCTURE FROM HERO */}
              <div 
                className={`rounded-3xl overflow-hidden shadow-2xl border-4 calendly-container ${isDateSelected ? 'scrollable' : 'no-scroll'}`}
                style={{ borderColor: '#CF21C3' }}
              >
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/saadalii/kayidigital?primary_color=cf21c3&hide_gdpr_banner=1&hide_event_type_details=1"
                  style={{ minWidth: '320px', height: '700px', width: '100%' }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <p className="text-gray-300 mb-3 text-sm">Prefer WhatsApp?</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold text-sm shadow-lg transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Message on WhatsApp
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* EXACT CSS FROM HERO SECTION */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .calendly-inline-widget iframe {
          border-radius: 1.5rem;
        }

        h1, h2, h3 {
          letter-spacing: -0.02em;
        }

        /* Initial state - NO SCROLL on ALL devices */
        .calendly-container.no-scroll {
          overflow: hidden !important;
          max-height: 700px !important;
        }

        .calendly-container.no-scroll .calendly-inline-widget {
          overflow: hidden !important;
          height: 700px !important;
        }

        .calendly-container.no-scroll .calendly-inline-widget iframe {
          overflow: hidden !important;
          height: 700px !important;
          pointer-events: auto !important;
        }

        /* After date selection - SCROLLABLE on ALL devices */
        .calendly-container.scrollable {
          overflow-y: auto !important;
          max-height: 700px !important;
          -webkit-overflow-scrolling: touch !important;
        }

        .calendly-container.scrollable .calendly-inline-widget {
          overflow: visible !important;
          height: auto !important;
          min-height: 700px !important;
        }

        .calendly-container.scrollable .calendly-inline-widget iframe {
          overflow: visible !important;
          height: 1200px !important;
          min-height: 1200px !important;
        }

        /* Remove all internal padding and spacing from Calendly */
        .calendly-inline-widget {
          padding: 0 !important;
          margin: 0 !important;
          background: white !important;
        }

        .calendly-inline-widget iframe {
          padding: 0 !important;
          margin: 0 !important;
          display: block !important;
        }

        .calendly-container {
          padding-top: 20px;
        }

        /* Hide the Calendly floating badge from all views */
        .calendly-badge-widget,
        .calendly-badge-content,
        .calendly-overlay,
        .calendly-popup-content {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }

        /* Mobile specific adjustments */
        @media (max-width: 768px) {
          .calendly-badge-widget,
          .calendly-badge-content,
          .calendly-overlay {
            display: none !important;
          }

          /* Fix mobile width issue - ensure container fits screen */
          .calendly-container {
            width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          .calendly-inline-widget {
            width: 100% !important;
            max-width: 100vw !important;
          }

          .calendly-inline-widget iframe {
            width: 100% !important;
            max-width: 100vw !important;
            left: 0 !important;
            right: 0 !important;
          }

          /* Mobile - initial no scroll */
          .calendly-container.no-scroll {
            max-height: 600px !important;
            width: 100% !important;
          }

          .calendly-container.no-scroll .calendly-inline-widget {
            height: 600px !important;
            width: 100% !important;
          }

          .calendly-container.no-scroll .calendly-inline-widget iframe {
            height: 600px !important;
            width: 100% !important;
          }

          /* Mobile - after selection scrollable */
          .calendly-container.scrollable {
            max-height: 600px !important;
            overflow-y: auto !important;
            width: 100% !important;
          }

          .calendly-container.scrollable .calendly-inline-widget iframe {
            height: 1000px !important;
            min-height: 1000px !important;
            width: 100% !important;
          }
        }

        /* Desktop specific adjustments */
        @media (min-width: 769px) {
          .calendly-badge-widget,
          .calendly-badge-content,
          .calendly-overlay {
            display: none !important;
          }

          /* Desktop - initial no scroll */
          .calendly-container.no-scroll {
            max-height: 700px !important;
          }

          .calendly-container.no-scroll .calendly-inline-widget {
            height: 700px !important;
          }

          .calendly-container.no-scroll .calendly-inline-widget iframe {
            height: 700px !important;
          }

          /* Desktop - after selection scrollable */
          .calendly-container.scrollable {
            max-height: 700px !important;
            overflow-y: auto !important;
          }

          .calendly-container.scrollable .calendly-inline-widget iframe {
            height: 1200px !important;
            min-height: 1200px !important;
          }
        }
      `}</style>
    </section>
  );
}