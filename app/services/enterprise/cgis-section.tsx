"use client";

import React from 'react';
import { motion } from "framer-motion"
import { Monitor, Target, TrendingUp, Palette, Video } from 'lucide-react';

const CgisSection = () => {
  const services = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Product Visualization",
      description: "Show your products from angles that don't exist in real life. Perfect lighting, impossible shots, and details so crisp your customers can almost touch them.",
      metric: "+380% Engagement"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Brand Storytelling",
      description: "Ever wanted to put your product in space? Or make it the hero of an epic adventure? We create stories that stick in people's minds.",
      metric: "+295% CTR"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Architectural Visualization",
      description: "Help people fall in love with spaces before they're even built. From dream homes to office complexes, we make blueprints come alive.",
      metric: "+180% Recognition"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Motion Graphics",
      description: "Explain the complicated stuff without boring anyone to death. We turn complex ideas into visuals that actually make sense.",
      metric: "+420% Engagement"
    }
  ];

  // Define the path for the ROAS graph
  const pathDefinition = "M 40 180 L 80 160 L 120 140 L 160 110 L 200 80 L 240 55 L 280 35 L 320 20 L 360 10";
  
  // Points for the moving dot animation
  const points = [
    { x: 40, y: 180 },
    { x: 80, y: 160 },
    { x: 120, y: 140 },
    { x: 160, y: 110 },
    { x: 200, y: 80 },
    { x: 240, y: 55 },
    { x: 280, y: 35 },
    { x: 320, y: 20 },
    { x: 360, y: 10 }
  ];
  
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
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border backdrop-blur-sm"
                  style={{ borderColor: '#f8d7da' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#cf21c3';
                    e.currentTarget.style.borderWidth = '2px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#f8d7da';
                    e.currentTarget.style.borderWidth = '1px';
                  }}
                >
                  <div className="flex items-center mb-3">
                    <div 
                      className="p-2 rounded-md mr-3"
                      style={{ 
                        background: 'linear-gradient(135deg, #cf21c3 0%, #e535db 50%, #f649f3 100%)',
                        color: 'white'
                      }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3 
                        className="font-semibold text-gray-900 text-sm transition-colors duration-300"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#cf21c3';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#111827';
                        }}
                      >
                        {service.title}
                      </h3>
                      <span className="text-xs font-medium text-green-600">{service.metric}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {service.description}
                  </p>
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

        {/* Bottom CTA - Updated with more rounded corners and refined styling */}
        <motion.div 
          className="text-center rounded-3xl p-8 shadow-lg backdrop-blur-sm bg-white border border-gray-100 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Ready to bring your wildest ad ideas to life?
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
            Got a concept that seems impossible to film? Let's turn it into CGI that makes people stop and stare.
          </p>
          <motion.button 
            className="px-8 py-3 text-white rounded-full transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #cf21c3 0%, #e535db 50%, #f649f3 100%)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk About Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CgisSection;