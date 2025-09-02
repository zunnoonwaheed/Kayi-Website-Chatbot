'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { Monitor, Target, TrendingUp, Palette, Video } from 'lucide-react';

const CgisSection = () => {
  const services = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Interactive Web Graphics",
      description: "Custom animations and interactive elements that boost engagement and conversion rates.",
      metric: "+340% Engagement"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Graphics & Animation",
      description: "Professional video content and motion graphics that tell your brand story and drive action.",
      metric: "+280% CTR"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Visual Brand Identity",
      description: "Comprehensive visual systems that create memorable brand experiences across all touchpoints.",
      metric: "+95% Recognition"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "3D Visualization",
      description: "Stunning 3D product renders and interactive experiences that showcase your offerings perfectly.",
      metric: "+450% Engagement"
    }
  ];

  // Define the path for the ROAS graph
  const pathDefinition = "M 40 180 L 80 160 L 120 140 L 160 110 L 200 80 L 240 55 L 280 35 L 320 20 L 360 10";
  
  return (
    <section className="py-20 px-6 relative overflow-hidden">
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
            Our <span style={{ color: '#cf21c3' }}>CGIS</span> Services
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
                  <h3 className="text-xl font-bold text-gray-800">Client ROAS Growth</h3>
                  <div className="flex items-center space-x-2 text-green-600">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-bold">+347%</span>
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
                    
                    {/* Animated ROAS line using motion.path */}
                    <motion.path
                      d={pathDefinition}
                      stroke="#cf21c3"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        delay: 0.8
                      }}
                    />
                    
                    {/* Data points with animation */}
                    {[
                      [40, 180], [80, 160], [120, 140], [160, 110], [200, 80], 
                      [240, 55], [280, 35], [320, 20], [360, 10]
                    ].map(([x, y], i) => (
                      <motion.circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="4"
                        fill="white"
                        stroke="#cf21c3"
                        strokeWidth="2"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.8 + (i * 0.2)
                        }}
                      />
                    ))}
                    
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
                
                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-pink-200">
                    <div className="text-lg font-bold" style={{ color: '#cf21c3' }}>7.8x</div>
                    <div className="text-xs text-gray-600">Current ROAS</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                    <div className="text-lg font-bold text-blue-600">347%</div>
                    <div className="text-xs text-gray-600">Growth</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <div className="text-lg font-bold text-green-600">96%</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center rounded-2xl p-6 shadow-lg backdrop-blur-sm bg-white/90 border border-white/40"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Ready to boost your ROAS?
          </h3>
          <p className="text-sm text-gray-700 mb-4 max-w-lg mx-auto">
            Join 500+ companies who've transformed their marketing ROI with our CGIS solutions.
          </p>
          <button 
            className="px-6 py-2 text-white rounded-lg transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg transform hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #cf21c3 0%, #e535db 50%, #f649f3 100%)',
            }}
          >
            Start Your CGIS Project
          </button>
        </motion.div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        .animate-draw {
          fill: none;
          stroke: #cf21c3;
          stroke-width: 3;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 3s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default CgisSection;