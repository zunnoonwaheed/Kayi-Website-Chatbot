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
          <div 
            className="h-1 w-32 rounded-full"
            style={{ backgroundColor: '#CF21C3' }}
          />
        </div>

        {/* Primary CTA Heading */}
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Ready To Explain Complex Procedures Visually? Schedule A Call Below.
          </h3>
        </div>

        {/* Calendly Embed with Pink Border - No Spacing */}
        <div className="max-w-5xl mx-auto mb-6">
          <div 
            className="rounded-3xl overflow-hidden shadow-2xl border-4 calendly-container"
            style={{ borderColor: '#CF21C3' }}
          >
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/saadalii/kayidigital?primary_color=cf21c3&hide_gdpr_banner=1&hide_event_type_details=1"
              style={{ minWidth: '320px', height: '700px', width: '100%' }}
            />
          </div>
        </div>

        {/* Secondary CTA - WhatsApp Button */}
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
          
          * {
            font-family: 'Inter', sans-serif;
          }
          
          .calendly-inline-widget iframe {
            border-radius: 1.5rem;
          }

          h1, h2, h3 {
            letter-spacing: -0.02em;
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

          /* Additional mobile and desktop targeting */
          @media (max-width: 768px) {
            .calendly-badge-widget,
            .calendly-badge-content,
            .calendly-overlay {
              display: none !important;
            }

            /* Remove bottom spacing on mobile - fit WhatsApp button in view */
            .calendly-inline-widget {
              height: 480px !important;
            }

            .calendly-inline-widget iframe {
              margin-bottom: -500px !important;
            }

            .calendly-container {
              padding-top: 15px;
              padding-bottom: 0 !important;
              overflow: hidden;
              max-height: 480px;
            }
          }

          @media (min-width: 769px) {
            .calendly-badge-widget,
            .calendly-badge-content,
            .calendly-overlay {
              display: none !important;
            }

            /* Hide name and details on desktop */
            .calendly-inline-widget {
              height: 650px !important;
            }

            .calendly-inline-widget iframe {
              margin-top: -150px !important;
              margin-bottom: -400px !important;
            }

            .calendly-container {
              overflow: hidden;
              max-height: 580px;
              padding-top: 10px;
              padding-bottom: 0 !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}