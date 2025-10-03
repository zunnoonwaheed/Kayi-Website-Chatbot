'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function GuaranteeSection() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
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
    window.open('https://wa.me/923090613822', '_blank');
  };

  return (
    <section className="flex justify-center items-center py-12 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-6xl w-full rounded-3xl shadow-2xl p-8 text-white overflow-hidden"
      >
        {/* Animated Gradient Background */}
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
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Content - Horizontal Layout */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side - Badge and Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
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

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cf21c3] to-pink-400">
                4x ROAS
              </span>{' '}
              <span className="text-white">Or We Work Until You Hit It</span>
            </motion.h2>

            {/* Body Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 mb-6"
            >
              <p className="text-gray-200 text-sm leading-relaxed">
                We guarantee you'll achieve at least <span className="font-bold text-white">4x return on ad spend</span> within 90 days of launching your campaign.
              </p>
              <p className="text-gray-200 text-sm leading-relaxed">
                If you don't hit this benchmark, we continue working with you - creating additional assets and optimizing your strategy at no extra cost until you do.
              </p>
              <p className="text-lg font-bold text-white">
                The risk is entirely on us. You only win.
              </p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 text-gray-300 text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="text-[#cf21c3]">🔒</span>
                <span>Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#cf21c3]">⚡</span>
                <span>2h response</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#cf21c3]">✅</span>
                <span>No pressure</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Calendly and WhatsApp */}
          <div className="flex-1">
            {/* Calendly Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mb-6 text-center"
            >
              <motion.button
                onClick={openCalendly}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-[#cf21c3] to-pink-500 hover:from-[#cf21c3] hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 text-lg"
              >
                📅 Book Free Strategy Call
              </motion.button>
              
              {/* Calendly Inline Widget */}
              <div className="mt-4 rounded-xl overflow-hidden border-2 border-[#cf21c3] calendly-embed-container">
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/saadalii/kayidigital?primary_color=cf21c3&hide_gdpr_banner=1&hide_event_type_details=1"
                  style={{ minWidth: '320px', height: '500px', width: '100%' }}
                />
              </div>
            </motion.div>

            {/* WhatsApp Alternative */}
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

      {/* Custom Styling */}
      <style>{`
        /* Hide Calendly badge */
        .calendly-badge-widget,
        .calendly-badge-content,
        .calendly-overlay {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
        }

        /* Remove spacing and hide event details */
        .calendly-embed-container .calendly-inline-widget {
          padding: 0 !important;
          margin: 0 !important;
        }

        .calendly-embed-container .calendly-inline-widget iframe {
          padding: 0 !important;
          margin: 0 !important;
          display: block !important;
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .calendly-embed-container {
            max-height: 450px;
            overflow: hidden;
          }

          .calendly-embed-container .calendly-inline-widget {
            height: 450px !important;
          }

          .calendly-embed-container .calendly-inline-widget iframe {
            margin-bottom: -200px !important;
          }
        }

        /* Desktop adjustments */
        @media (min-width: 769px) {
          .calendly-embed-container {
            max-height: 480px;
            overflow: hidden;
          }

          .calendly-embed-container .calendly-inline-widget {
            height: 550px !important;
          }

          .calendly-embed-container .calendly-inline-widget iframe {
            margin-top: -100px !important;
            margin-bottom: -150px !important;
          }
        }
      `}</style>
    </section>
  );
}