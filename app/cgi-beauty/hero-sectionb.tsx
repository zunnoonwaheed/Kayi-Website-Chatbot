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

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923090613822', '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-8 pb-8 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Main Headline */}
        <div className="text-center mb-6 mt-4 md:mt-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            OVER <span style={{ color: '#CF21C3' }}>135+ BEAUTY BRANDS</span> GENERATED{' '}
            <span style={{ color: '#CF21C3' }}>$22 MILLION</span> WITH OUR CGI ADS
          </h1>
        </div>

        {/* Subheadline */}
        <div className="text-center mb-6 px-4">
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-700 max-w-4xl mx-auto leading-relaxed">
            📞 Book A Free Campaign Review And Get The Exact Creative Strategy That's Driving These Results
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
            Ready To Stand Out From Competitors? Schedule A Call Below.
          </h3>
        </div>

        {/* Calendly Embed with Pink Border - Conditional Scroll */}
        <div className="max-w-5xl mx-auto mb-6">
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
      </div>
    </div>
  );
}