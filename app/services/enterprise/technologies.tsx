"use client"
import { motion } from "framer-motion"
import { useState } from "react"

const Technologies = () => {
  const [activeTab, setActiveTab] = useState("Mobile Apps")

  const techIcons = {
    swift: (
      <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
        <span className="text-white text-xs font-bold">S</span>
      </div>
    ),
    uikit: (
      <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
        <span className="text-white text-xs font-bold">UI</span>
      </div>
    ),
    rxswift: (
      <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold">Rx</span>
      </div>
    ),
    combine: (
      <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
        <span className="text-white text-xs font-bold">C</span>
      </div>
    ),
    mvvm: (
      <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
        <span className="text-white text-xs font-bold">M</span>
      </div>
    ),
    alamofire: (
      <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
        <span className="text-white text-xs font-bold">A</span>
      </div>
    ),
    coredata: (
      <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
        <span className="text-white text-xs font-bold">CD</span>
      </div>
    ),
    kotlin: (
      <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
        <span className="text-white text-xs font-bold">K</span>
      </div>
    ),
    rxjava: (
      <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
        <span className="text-white text-xs font-bold">Rx</span>
      </div>
    ),
    java: (
      <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
        <span className="text-white text-xs font-bold">J</span>
      </div>
    ),
    retrofit: (
      <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
        <span className="text-white text-xs font-bold">R</span>
      </div>
    ),
    jetpack: (
      <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
        <span className="text-white text-xs font-bold">J</span>
      </div>
    ),
  }

  const technologies = {
    "Mobile Apps": {
      sections: [
        {
          title: "iOS",
          items: [
            { name: "Swift", icon: "swift" },
            { name: "UI Kit", icon: "uikit" },
            { name: "RxSwift", icon: "rxswift" },
            { name: "Combine", icon: "combine" },
            { name: "MVVM", icon: "mvvm" },
            { name: "Alamofire", icon: "alamofire" },
            { name: "Core Data", icon: "coredata" },
          ],
        },
        {
          title: "Android",
          items: [
            { name: "Kotlin", icon: "kotlin" },
            { name: "MVVM", icon: "mvvm" },
            { name: "RxJava", icon: "rxjava" },
            { name: "Java", icon: "java" },
            { name: "Retrofit", icon: "retrofit" },
            { name: "Jetpack", icon: "jetpack" },
          ],
        },
      ],
    },
    "Web Platforms": {
      sections: [
        {
          title: "Frontend",
          items: [
            { name: "React", icon: "swift" },
            { name: "Vue.js", icon: "uikit" },
            { name: "Angular", icon: "rxswift" },
            { name: "TypeScript", icon: "combine" },
          ],
        },
        {
          title: "Backend",
          items: [
            { name: "Node.js", icon: "kotlin" },
            { name: "Python", icon: "rxjava" },
            { name: "PHP", icon: "java" },
            { name: "Java", icon: "retrofit" },
          ],
        },
      ],
    },
    "Cross Platforms": {
      sections: [
        {
          title: "Mobile",
          items: [
            { name: "React Native", icon: "swift" },
            { name: "Flutter", icon: "uikit" },
            { name: "Xamarin", icon: "rxswift" },
            { name: "Ionic", icon: "combine" },
          ],
        },
      ],
    },
    Games: {
      sections: [
        {
          title: "Engines",
          items: [
            { name: "Unity", icon: "swift" },
            { name: "Unreal", icon: "uikit" },
            { name: "Godot", icon: "rxswift" },
            { name: "Cocos2d", icon: "combine" },
          ],
        },
      ],
    },
    Database: {
      sections: [
        {
          title: "SQL",
          items: [
            { name: "PostgreSQL", icon: "swift" },
            { name: "MySQL", icon: "uikit" },
            { name: "SQLite", icon: "rxswift" },
            { name: "Oracle", icon: "combine" },
          ],
        },
      ],
    },
    "Cloud & DevOps": {
      sections: [
        {
          title: "Cloud",
          items: [
            { name: "AWS", icon: "swift" },
            { name: "Azure", icon: "uikit" },
            { name: "GCP", icon: "rxswift" },
            { name: "Docker", icon: "combine" },
          ],
        },
      ],
    },
  }

  const tabs = Object.keys(technologies)

  return (
    <div className="py-20 relative overflow-hidden bg-white">
      {/* Gradient Background */}
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

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold text-black mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
        See CGI Ads from Your Industry
        </motion.h1>
        <motion.p 
          className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
       Whether you're selling luxury watches or launching a tech startup, we've helped brands like yours tell their stories through CGI. Take a look at what's possible in your industry.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-0">
          {/* Mobile Tabs - Horizontal scrollable */}
          <div className="lg:hidden mb-8">
            <div className="flex overflow-x-auto scrollbar-hide space-x-1 pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-shrink-0 px-6 py-3 text-sm font-medium transition-all duration-200 whitespace-nowrap border-b-2 ${
                    activeTab === tab
                      ? "border-[#cf21c3] text-black"
                      : "border-transparent text-gray-700 hover:text-black"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="space-y-1">
              {tabs.map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`w-full text-left px-6 py-4 text-lg font-medium transition-all duration-200 rounded-full ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-[#cf21c3]/20 to-[#cf21c3]/10 text-black"
                      : "text-gray-700 hover:bg-white/50"
                  }`}
                >
                  {tab}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 lg:pl-8">
            <div className="space-y-12 lg:space-y-16">
              {technologies[activeTab].sections.map((section, sectionIndex) => (
                <motion.div 
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6 lg:mb-8">{section.title}</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-white/90 backdrop-blur-sm rounded-xl px-4 lg:px-6 py-3 lg:py-4 flex items-center space-x-3 lg:space-x-4 hover:bg-white transition-colors cursor-pointer border border-white/40 shadow-lg hover:shadow-xl"
                      >
                        <div className="flex-shrink-0">{techIcons[item.icon]}</div>
                        <span className="font-medium text-gray-900 text-sm lg:text-base">{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-16 lg:mt-20 relative z-10">
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl lg:rounded-full px-6 py-6 lg:px-12 lg:py-6 shadow-lg border border-white/40"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center text-center lg:text-left space-y-4 lg:space-y-0 lg:gap-8">
            <h2 className="text-xl lg:text-3xl font-bold text-black leading-tight flex-1">
            Let's build your next <span className="text-[#cf21c3]">CGI campaign</span>
            </h2>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#cf21c3] to-[#e879f9] text-white px-6 lg:px-10 py-3 lg:py-4 rounded-full font-semibold hover:from-[#a21caf] hover:to-[#cf21c3] transition-all duration-200 shadow-lg hover:shadow-xl mx-auto lg:mx-0 flex-shrink-0 text-sm lg:text-base"
            >
              Get a Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Technologies