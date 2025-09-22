"use client";

import React from 'react';
import { motion } from "framer-motion"
import { Monitor, Target, TrendingUp, Palette, Video } from 'lucide-react';

const CgisSection = () => {
  const services = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Product Visualization",
      metric: "+380% Engagement"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Brand Storytelling",
      metric: "+295% CTR"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Architectural Visualization",
      metric: "+180% Recognition"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Motion Graphics",
      metric: "+420% Engagement"
    }
  ];

  // Define the path for the ROAS graph
  const pathDefinition = "M 40 180 L 80 160 L 120 140 L 160 110 L 200 80 L 240 55 L 280 35 L 320 20 L 360 10";
  
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-white">
      {/* Gradient Background - Same as Questions section */}
      <div className="absolute inset-0">
        {/* Base gradient layers that flow seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/6 via-pink-500/3 to-[#cf21c3]/8" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#cf21c3]/4 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-bl from-[#cf21c3]/3 via-transparent to-pink-500/6" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/4 via-transparent to-[#cf21c3]/5" />

        {/* Seamless edge gradients */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#cf21c3]/12 via-pink-500/6 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#cf21c3]/12 via-pink-500/6 to-transparent" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#cf21c3]/10 via-pink-500/5 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#cf21c3]/10 via-pink-500/5 to-transparent" />

        {/* Flowing wave gradients */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#cf21c3]/8 to-transparent"
          animate={{
            x: ["-50%", "50%"],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-l from-transparent via-pink-500/6 to-transparent"
          animate={{
            x: ["50%", "-50%"],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 8,
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#cf21c3]/5 to-transparent"
          animate={{
            y: ["-30%", "30%"],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 15,
          }}
        />

        {/* Organic floating gradients */}
        <motion.div
          className="absolute top-1/6 left-1/6 w-96 h-96 bg-gradient-radial from-[#cf21c3]/15 via-pink-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.8, 0.5],
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/6 right-1/6 w-[32rem] h-[32rem] bg-gradient-radial from-pink-500/12 via-[#cf21c3]/8 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -80, 0],
            y: [0, 50, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 7,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-[#cf21c3]/6 via-pink-500/4 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 12,
          }}
        />

        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/3 via-transparent to-pink-500/4 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/2 via-transparent to-[#cf21c3]/3 mix-blend-screen opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span style={{ color: '#cf21c3' }}>CGI</span> Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your marketing with cutting-edge computer graphics and interactive solutions 
            that deliver measurable ROAS improvements.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <div 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border backdrop-blur-sm flex flex-col items-center justify-center text-center"
                  style={{ borderColor: '#f8d7da', minHeight: '180px' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#cf21c3';
                    e.currentTarget.style.borderWidth = '2px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#f8d7da';
                    e.currentTarget.style.borderWidth = '1px';
                  }}
                >
                  <div 
                    className="p-3 rounded-full mb-4"
                    style={{ 
                      background: 'linear-gradient(135deg, #cf21c3 0%, #e535db 50%, #f649f3 100%)',
                      color: 'white'
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 
                    className="font-semibold text-gray-900 text-lg mb-2 transition-colors duration-300 whitespace-nowrap"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#cf21c3';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#111827';
                    }}
                  >
                    {service.title}
                  </h3>
                  <span className="text-xl font-bold text-green-600">{service.metric}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: ROAS Graph */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-white/40">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-800">Client Engagement Growth</h3>
                  <div className="flex items-center space-x-2 text-green-600">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-bold">+285%</span>
                  </div>
                </div>
                
                {/* ROAS Chart */}
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-purple-50 rounded-lg p-4 overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <defs>
                      <linearGradient id="roasGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#cf21c3" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#cf21c3" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>
                    
                    {/* Grid lines */}
                    {[40, 80, 120, 160].map((y) => (
                      <line key={y} x1="40" y1={y} x2="360" y2={y} stroke="#e5e7eb" strokeWidth="1" />
                    ))}
                    
                    {/* Area under curve */}
                    <path
                      d="M 40 180 L 80 160 L 120 140 L 160 110 L 200 80 L 240 55 L 280 35 L 320 20 L 360 10 L 360 180 Z"
                      fill="url(#roasGradient)"
                    />
                    
                    {/* Base line (static) */}
                    <path
                      d={pathDefinition}
                      stroke="#cf21c3"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.3"
                    />
                    
                    {/* Continuously moving line - no reverse */}
                    <motion.path
                      d={pathDefinition}
                      stroke="#cf21c3"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                    
                    {/* Moving dot along the path - stays at top */}
                    <motion.circle
                      r="6"
                      fill="#cf21c3"
                      stroke="white"
                      strokeWidth="2"
                      animate={{
                        cx: [40, 80, 120, 160, 200, 240, 280, 320, 360],
                        cy: [180, 160, 140, 110, 80, 55, 35, 20, 10]
                      }}
                      transition={{
                        duration: 3,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Y-axis labels */}
                    <text x="25" y="15" className="text-xs fill-gray-600" textAnchor="middle">8.0x</text>
                    <text x="25" y="60" className="text-xs fill-gray-600" textAnchor="middle">6.0x</text>
                    <text x="25" y="105" className="text-xs fill-gray-600" textAnchor="middle">4.0x</text>
                    <text x="25" y="150" className="text-xs fill-gray-600" textAnchor="middle">2.0x</text>
                    <text x="25" y="185" className="text-xs fill-gray-600" textAnchor="middle">1.0x</text>
                    
                    {/* X-axis labels */}
                    <text x="80" y="195" className="text-xs fill-gray-500" textAnchor="middle">Jan</text>
                    <text x="160" y="195" className="text-xs fill-gray-500" textAnchor="middle">Mar</text>
                    <text x="240" y="195" className="text-xs fill-gray-500" textAnchor="middle">May</text>
                    <text x="320" y="195" className="text-xs fill-gray-500" textAnchor="middle">Jul</text>
                  </svg>
                </div>
                
                {/* Key Metrics - Fixed for mobile */}
                <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 mt-4">
                  <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-pink-200">
                    <div className="text-sm font-bold" style={{ color: '#cf21c3' }}>View Time</div>
                    <div className="text-xs text-gray-600">4.2x Average</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                    <div className="text-sm font-bold text-blue-600">Engagement</div>
                    <div className="text-xs text-gray-600">285% Higher</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <div className="text-sm font-bold text-green-600">Brand Recall</div>
                    <div className="text-xs text-gray-600">92% Recall Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Minimal CTA Section - Full Width End to End */}
        <motion.div 
          className="relative w-full overflow-visible mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Gradient Ring Elements - Using image-inspired gradients */}
          <div className="absolute inset-0 overflow-visible">
            {/* First gradient ring - left */}
            <motion.div 
              className="absolute -top-10 -left-20 w-56 h-56 opacity-30"
              style={{
                background: `radial-gradient(circle, transparent 30%, rgba(207, 33, 195, 0.4) 35%, rgba(255, 105, 180, 0.6) 40%, rgba(147, 112, 219, 0.5) 45%, rgba(207, 33, 195, 0.3) 50%, transparent 55%)`,
                borderRadius: '50%'
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Second gradient ring - right */}
            <motion.div 
              className="absolute -bottom-8 -right-16 w-44 h-44 opacity-25"
              style={{
                background: `radial-gradient(circle, transparent 30%, rgba(255, 105, 180, 0.5) 35%, rgba(207, 33, 195, 0.7) 40%, rgba(147, 112, 219, 0.4) 45%, rgba(255, 105, 180, 0.3) 50%, transparent 55%)`,
                borderRadius: '50%'
              }}
              animate={{
                rotate: [360, 0],
                scale: [1.2, 0.9, 1.2],
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
                delay: 5,
              }}
            />

            {/* Additional floating ring - center top */}
            <motion.div 
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 opacity-20"
              style={{
                background: `radial-gradient(circle, transparent 35%, rgba(147, 112, 219, 0.4) 40%, rgba(207, 33, 195, 0.6) 45%, rgba(255, 105, 180, 0.3) 50%, transparent 55%)`,
                borderRadius: '50%'
              }}
              animate={{
                rotate: [0, -360],
                y: [0, 30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 10,
              }}
            />

            {/* Small accent ring - bottom center */}
            <motion.div 
              className="absolute -bottom-12 left-1/3 w-28 h-28 opacity-15"
              style={{
                background: `radial-gradient(circle, transparent 40%, rgba(255, 105, 180, 0.5) 45%, rgba(207, 33, 195, 0.4) 50%, transparent 55%)`,
                borderRadius: '50%'
              }}
              animate={{
                rotate: [180, 540],
                x: [0, 40, 0],
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 15,
              }}
            />
          </div>

          {/* Content - Full Width */}
          <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{
                background: 'linear-gradient(135deg, rgba(207, 33, 195, 0.08), rgba(207, 33, 195, 0.04))',
                color: '#cf21c3'
              }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 rounded-full bg-[#cf21c3] animate-pulse"></div>
              Drive your best creative
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              className="text-xl sm:text-2xl font-bold mb-2 leading-tight"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-900">Start your </span>
              <span className="bg-gradient-to-r from-[#cf21c3] via-pink-500 to-purple-500 bg-clip-text text-transparent">
                free trial today
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              className="text-sm text-gray-600 mb-5 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Unlock the full potential of your data with our comprehensive SaaS analytics platform.
            </motion.p>

            {/* CTA Button */}
            <motion.button 
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #cf21c3 0%, #e535db 50%, #f649f3 100%)',
              }}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 20px rgba(207, 33, 195, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Schedule a demo</span>
              <div className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CgisSection;