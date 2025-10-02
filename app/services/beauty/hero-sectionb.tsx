'use client';

import React, { useEffect } from 'react';

export default function HeroSection() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923090613822', '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-16 pb-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Top Trust Badge */}
        <div className="flex justify-center mb-8">
          <div 
            className="px-8 py-3 rounded-full text-white font-semibold text-sm md:text-base shadow-lg"
            style={{ backgroundColor: '#CF21C3' }}
          >
            ✨ TRUSTED BY 135+ BEAUTY & COSMETICS BRANDS
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            OVER <span style={{ color: '#CF21C3' }}>135+ BEAUTY BRANDS</span> GENERATED{' '}
            <span style={{ color: '#CF21C3' }}>$22 MILLION</span> WITH OUR CGI ADS
          </h1>
        </div>

        {/* Subheadline */}
        <div className="text-center mb-8 px-4">
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-700 max-w-4xl mx-auto leading-relaxed">
            📞 Book A Free Campaign Review And Get The Exact Creative Strategy That's Driving These Results
          </p>
        </div>

        {/* Divider Line */}
        <div className="flex justify-center mb-8">
          <div 
            className="h-1 w-32 rounded-full"
            style={{ backgroundColor: '#CF21C3' }}
          />
        </div>

        {/* Primary CTA Heading */}
        <div className="text-center mb-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Ready To Stand Out From Competitors? Schedule A Call Below.
          </h3>
        </div>

        {/* Calendly Embed with Pink Border */}
        <div className="max-w-5xl mx-auto mb-10">
          <div 
            className="rounded-3xl overflow-hidden shadow-2xl border-4"
            style={{ borderColor: '#CF21C3' }}
          >
            <div 
              className="calendly-inline-widget bg-white" 
              data-url="https://calendly.com/saadalii/kayidigital?primary_color=cf21c3&hide_gdpr_banner=1"
              style={{ minWidth: '320px', height: '500px' }}
            />
          </div>
        </div>

        {/* Secondary CTA - WhatsApp Button */}
        <div className="text-center mb-8">
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold text-base shadow-lg transition-colors"
          >
            <span>Prefer to message?</span>
            <span className="text-xl">💬</span>
          </button>
        </div>

        {/* Trust Footer */}
        <div className="text-center">
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            🔒 Your information is secure and confidential
          </p>
        </div>

        {/* Custom Styling */}
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

          /* Hide the Calendly floating badge */
          .calendly-badge-widget {
            display: none !important;
          }
        `}</style>
      </div>
    </div>
  );
}