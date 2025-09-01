import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Grow your brand
                <span className="text-gray-600 text-lg font-normal block mt-2">®</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                Strategic, data-driven and results-focused - transform your 
                marketing into measurable growth and amplify your brand 
                presence with cutting-edge digital solutions.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
                View our work
              </button>
              <button 
                className="px-8 py-4 text-white rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #cf21c3 0%, #e535db 50%, #f649f3 100%)',
                }}
              >
                Start your project
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://yotta.com/wp-content/uploads/2022/06/Why-ITSM-is-integral-in-enterprise-wide-digitisation.jpg"
                alt="Enterprise digitization illustration"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Background Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full opacity-50 animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;