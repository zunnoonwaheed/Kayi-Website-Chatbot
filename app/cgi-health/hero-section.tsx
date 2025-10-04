'use client';

import React, { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isDateSelected, setIsDateSelected] = useState(false);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Listen for Calendly events
    const handleMessage = (event) => {
      if (
        event.data.event === 'calendly.event_scheduled' ||
        event.data.event === 'calendly.date_and_time_selected'
      ) {
        setIsDateSelected(true);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923090613822', '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-8 pb-8 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Main Headline */}
        <div className="text-center mb-6 mt-4 md:mt-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            OVER <span style={{ color: '#CF21C3' }}>135+ HEALTHCARE BRANDS</span> GENERATED{' '}
            <span style={{ color: '#CF21C3' }}>$22 MILLION</span> WITH OUR CGI CAMPAIGNS
          </h1>
        </div>

        {/* Subheadline */}
        <div className="text-center mb-6 px-4">
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-700 max-w-4xl mx-auto leading-relaxed">
            📞 Book A Free Campaign Review And See How CGI Ads Help Patients Understand Your Services
          </p>
        </div>

        {/* Divider Line */}
        <div className="flex justify-center mb-6">
          <div className="h-1 w-32 rounded-full" style={{ backgroundColor: '#CF21C3' }} />
        </div>

        {/* Primary CTA Heading */}
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Ready To Explain Complex Procedures Visually? Schedule A Call Below.
          </h3>
        </div>

        {/* Calendly Embed */}
        <div className="mb-6">
          <div
            className={`rounded-3xl shadow-2xl border-4 calendly-container ${isDateSelected ? 'scrollable' : 'no-scroll'}`}
            style={{ borderColor: '#CF21C3' }}
          >
            {/* Wrapping div to prevent touch scroll */}
            <div className={isDateSelected ? '' : 'block-touch'}>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/saadalii/kayidigital?primary_color=cf21c3&hide_gdpr_banner=1&hide_event_type_details=1"
                style={{ minWidth: '320px', height: '700px', width: '100%' }}
              />
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mb-6">
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
          * { font-family: 'Inter', sans-serif; }
          h1, h2, h3 { letter-spacing: -0.02em; }
          .calendly-inline-widget iframe { border-radius: 1.5rem; }

          /* Hide Calendly badges/popups */
          .calendly-badge-widget,
          .calendly-badge-content,
          .calendly-overlay,
          .calendly-popup-content { display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; }

          /* Prevent touch scroll wrapper */
          .block-touch {
            pointer-events: none; /* blocks all interaction */
          }

          /* Non-scrollable by default */
          .calendly-container.no-scroll {
            overflow: hidden !important;
            max-height: 700px !important;
          }
          .calendly-container.no-scroll .calendly-inline-widget {
            height: 700px !important;
            overflow: hidden !important;
          }

          /* Scrollable after date selection */
          .calendly-container.scrollable {
            overflow-y: auto !important;
            max-height: 700px !important;
          }
          .calendly-container.scrollable .calendly-inline-widget {
            height: auto !important;
            min-height: 700px !important;
            overflow: visible !important;
            -webkit-overflow-scrolling: touch !important;
          }

          /* Remove padding/margin */
          .calendly-inline-widget { padding: 0 !important; margin: 0 !important; background: white !important; }
          .calendly-inline-widget iframe { padding: 0 !important; margin: 0 !important; display: block !important; width: 100% !important; }

          /* Mobile adjustments - full width */
          @media (max-width: 768px) {
            .calendly-container { width: 100vw !important; margin-left: calc(-50vw + 50%) !important; }
            .calendly-container.no-scroll { max-height: 500px !important; }
            .calendly-container.no-scroll .calendly-inline-widget iframe { height: 500px !important; }
            .calendly-container.scrollable .calendly-inline-widget iframe { min-height: 800px !important; height: auto !important; }
          }

          /* Desktop adjustments */
          @media (min-width: 769px) {
            .calendly-container.no-scroll { max-height: 700px !important; }
            .calendly-container.scrollable .calendly-inline-widget iframe { min-height: 1000px !important; height: auto !important; }
          }
        `}</style>
      </div>
    </div>
  );
}
