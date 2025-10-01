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

  return (
    <div className="min-h-screen bg-white pt-40 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Pink Badge */}
        <div className="flex justify-center mb-8">
          <div 
            className="px-8 py-3 rounded-full text-white font-semibold text-sm md:text-base shadow-lg"
            style={{ backgroundColor: '#CF21C3' }}
          >
            ⭐ TRUSTED BY 135+ COMPANIES
          </div>
        </div>

        {/* Main Headline - Ordered by length */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2">
            OVER <span style={{ color: '#CF21C3' }}>135+</span> COMPANIES AND GENERATED OVER <span style={{ color: '#CF21C3' }}>$22 MILLION </span> IN REVENUE
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2">
           
          </h2>
        </div>

        {/* CTA Text Section */}
        <div className="text-center mb-6 px-4">
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-700 max-w-4xl mx-auto leading-relaxed">
            📩 Book A Free Strategy Call And Get Our Exact Creative Research Process And Campaign Strategy 📩
          </p>
        </div>

        {/* Divider Line */}
        <div className="flex justify-center mb-10">
          <div 
            className="h-1 w-32 rounded-full"
            style={{ backgroundColor: '#CF21C3' }}
          />
        </div>

        {/* Schedule Heading */}
        <div className="text-center mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Ready For Your First Step? Schedule A Call Below.
          </h3>
        </div>

        {/* Calendly Embed with Pink Border */}
        <div className="max-w-5xl mx-auto">
          <div 
            className="rounded-3xl overflow-hidden shadow-2xl border-4"
            style={{ borderColor: '#CF21C3' }}
          >
            <div 
              className="calendly-inline-widget bg-white" 
              data-url="https://calendly.com/saadalii/kayidigital?primary_color=cf21c3&hide_gdpr_banner=1"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>

        {/* Bottom Trust Indicator */}
        <div className="text-center mt-12">
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
        `}</style>
      </div>
    </div>
  );
}