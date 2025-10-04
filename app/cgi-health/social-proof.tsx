"use client"
import { motion } from "framer-motion"

const SocialProof = () => {
  const clients = [
    {
      rank: 1,
      name: "Dr. Chen Dental",
      earnings: "$876,427.00",
      campaign: "Patient Education Campaign",
      color: "#FFD700"
    },
    {
      rank: 2,
      name: "CardioTech Medical",
      earnings: "$643,089.00",
      campaign: "Device Launch Campaign",
      color: "#C0C0C0"
    },
    {
      rank: 3,
      name: "SmileFirst Clinics",
      earnings: "$297,681.00",
      campaign: "Procedure Visualization Series",
      color: "#CD7F32"
    }
  ]

  return (
    <div className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-4 leading-tight"
        >
          <span style={{ color: '#CF21C3' }}>$2.4M In New Patient Revenue</span>
          <br />
          <span className="text-gray-900">Generated Last Quarter</span>
        </motion.h2>

        {/* Dashboard Card - White with Pink Border */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 md:mt-12 bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl border-4"
          style={{ borderColor: '#CF21C3' }}
        >
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8 pb-4 md:pb-6 border-b border-gray-200 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#CF21C3] to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg md:text-xl font-bold">K</span>
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold text-base md:text-lg">Healthcare Results</h3>
                <p className="text-gray-600 text-xs md:text-sm">Q4 2024 Performance</p>
              </div>
            </div>
            <div className="text-left sm:text-right w-full sm:w-auto">
              <p className="text-gray-600 text-xs md:text-sm">Total Revenue</p>
              <p className="text-gray-900 text-xl md:text-2xl font-bold">$2,417,197.00</p>
            </div>
          </div>

          {/* Prize Winners Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h4 className="text-gray-900 font-semibold text-base md:text-lg">Top Performers</h4>
              <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                {clients.length}
              </span>
            </div>
          </div>

          {/* Table Headers - Hidden on Mobile */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-gray-600 text-sm font-medium border-b border-gray-200 mb-2">
            <div className="col-span-1">#</div>
            <div className="col-span-4">Client</div>
            <div className="col-span-3">Revenue</div>
            <div className="col-span-4">Campaign Type</div>
          </div>

          {/* Client Rows - Show all 3 on desktop, only 1 on mobile */}
          <div className="space-y-3 md:space-y-2">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200 ${index > 0 ? 'hidden md:block' : ''}`}
              >
                {/* Mobile Layout */}
                <div className="md:hidden p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                        style={{ backgroundColor: client.color, color: '#000' }}
                      >
                        {client.rank}
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-semibold">
                          {client.name.charAt(0)}
                        </span>
                      </div>
                      <p className="text-gray-900 font-medium text-sm">{client.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 pl-0">
                    <span className="text-green-500 text-lg">💵</span>
                    <span className="text-green-600 font-semibold text-base">{client.earnings}</span>
                  </div>
                  
                  <div className="pl-0">
                    <p className="text-gray-600 text-xs mb-1">Campaign Type</p>
                    <p className="text-gray-700 text-sm">{client.campaign}</p>
                  </div>
                </div>

                {/* Desktop Layout - Only first item shows */}
                <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 items-center">
                  {/* Rank */}
                  <div className="col-span-1">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                      style={{ backgroundColor: client.color, color: '#000' }}
                    >
                      {client.rank}
                    </div>
                  </div>

                  {/* Client Name */}
                  <div className="col-span-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          {client.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium">{client.name}</p>
                      </div>
                    </div>
                  </div>

                  {/* Earnings */}
                  <div className="col-span-3">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500 text-xl">💵</span>
                      <span className="text-green-600 font-semibold">{client.earnings}</span>
                    </div>
                  </div>

                  {/* Campaign Type */}
                  <div className="col-span-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 text-sm">{client.campaign}</span>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-gray-700 text-base md:text-lg mt-6 md:mt-8 max-w-4xl mx-auto leading-relaxed px-2"
        >
          These healthcare providers partnered with us and generated{" "}
          <span className="font-bold text-gray-900">over $2.4 million in tracked patient revenue</span>{" "}
          in under 90 days using CGI ads that help patients understand procedures before booking.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 md:mt-10"
        >
          <motion.a
            href="https://calendly.com/saadalii/kayidigital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white 
                       bg-gradient-to-r from-[#cf21c3] to-pink-500 rounded-full 
                       hover:from-[#cf21c3]/90 hover:to-pink-500/90 
                       transition-all duration-300 shadow-lg hover:shadow-xl
                       transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Results Like These
            <motion.svg 
              className="ml-2 w-4 h-4 md:w-5 md:h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default SocialProof