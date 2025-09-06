import React from "react";

const OfficeLocations = () => {
  const offices = [
    {
      id: 1,
      city: "Canada",
      country: "Canada",
      address: "140 Doubtfire Cres, Markham, ON, Canada",
      image: "https://www.blonville.org/upload/decouvrir-le-canada.webp",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      city: "United Kingdom", 
      country: "UK",
      address: "International House, 12 Constance St, London E16 2DQ, United Kingdom",
      image: "https://united4study.com/wp-content/uploads/2023/09/london-cityscape-UKESSAY1222-3c3b4b23062f410080b77839b31243a6.jpg",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      id: 3,
      city: "Pakistan",
      country: "Pakistan", 
      address: "Suite 33-35, 7th Floor, Plot Nos. 68 & 69, Kayani Shaheed Road, Karachi, Pakistan",
      image: "https://www.qatarairways.com/content/dam/images/renditions/horizontal-hd/destinations/pakistan/karachi/hd-mazarequaid-karachi.jpg",
      gradient: "from-cyan-400 to-cyan-600",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our global office <br /> locations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your team among 150+ specialists in 3 offices worldwide.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
          {offices.map((office) => (
            <div
              key={office.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 shadow-md hover:shadow-xl transition">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${office.gradient} opacity-15 z-10`}
                />
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
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to start your project with us?
          </p>
          <button className="px-10 py-4 bg-[#cf21c3] text-white font-semibold rounded-xl hover:bg-[#a81a9d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
