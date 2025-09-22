"use client"
import { motion } from "framer-motion"

const OfficeLocations = () => {
  const offices = [
    {
      id: 1,
      city: "Canada",
      country: "Canada",
      address: "140 Doubtfire Cres, Markham, ON, Canada",
      image: "https://www.blonville.org/upload/decouvrir-le-canada.webp",
    },
    {
      id: 2,
      city: "United Kingdom", 
      country: "UK",
      address: "International House, 12 Constance St, London E16 2DQ, United Kingdom",
      image: "https://united4study.com/wp-content/uploads/2023/09/london-cityscape-UKESSAY1222-3c3b4b23062f410080b77839b31243a6.jpg",
    },
    {
      id: 3,
      city: "Pakistan",
      country: "Pakistan", 
      address: "Suite 33-35, 7th Floor, Plot Nos. 68 & 69, Kayani Shaheed Road, Karachi, Pakistan",
      image: "https://www.qatarairways.com/content/dam/images/renditions/horizontal-hd/destinations/pakistan/karachi/hd-mazarequaid-karachi.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      {/* Simple gradient background - same as PullTriggerSection */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/10 to-pink-500/5" />
      
      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header with animations */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our global office{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#cf21c3] to-pink-500"
            >
              locations
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Find your team among 150+ specialists in 3 offices worldwide.
          </motion.p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {offices.map((office, index) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1 + 0.4,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 shadow-md hover:shadow-xl transition">
                {/* Pink gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/10 to-pink-500/5 z-10" />
                <img
                  src={office.image}
                  alt={`${office.city} office`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              </div>

              {/* Info */}
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#cf21c3] transition-colors duration-300">
                  {office.city}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed font-medium">
                  {office.address}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;