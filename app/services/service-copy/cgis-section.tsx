"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, PiggyBank, Gift, Calendar } from 'lucide-react';

const FinancialPotentialSection = () => {
  const [initialContribution, setInitialContribution] = useState(10000);
  const [monthlySaving, setMonthlySaving] = useState(500);
  const [yearlyGifts, setYearlyGifts] = useState(1000);
  const [kidAge, setKidAge] = useState(1);
  const [isCalculated, setIsCalculated] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate compound interest
  const calculateFutureValue = () => {
    const rate = 0.07; // 7% annual return
    const yearsToGrow = Math.max(0, 65 - kidAge);
    const monthlyRate = rate / 12;
    const totalMonths = yearsToGrow * 12;
    
    if (yearsToGrow === 0) return initialContribution;
    
    // Future value of initial contribution
    const futureInitial = initialContribution * Math.pow(1 + rate, yearsToGrow);
    
    // Future value of monthly contributions
    const futureMonthly = monthlySaving * (Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate;
    
    // Future value of yearly gifts
    const futureGifts = yearlyGifts * (Math.pow(1 + rate, yearsToGrow) - 1) / rate;
    
    return futureInitial + futureMonthly + futureGifts;
  };

  const futureValue = calculateFutureValue();

  // Generate chart data for animation
  const generateChartData = () => {
    const years = Math.max(0, 65 - kidAge);
    
    if (years <= 0) {
      return [{
        year: kidAge,
        value: initialContribution,
        contributions: initialContribution,
        gains: 0
      }];
    }
    
    const data = [];
    
    // Determine how many bars to show based on screen width
    const maxBars = windowWidth < 640 ? 6 : windowWidth < 1024 ? 8 : 12;
    const step = Math.max(1, Math.floor(years / maxBars));
    
    for (let i = 0; i <= years; i += step) {
      const yearlyValue = calculateFutureValueAtYear(i);
      data.push({
        year: kidAge + i,
        value: yearlyValue,
        contributions: (initialContribution + (monthlySaving * 12 * i) + (yearlyGifts * i)),
        gains: yearlyValue - (initialContribution + (monthlySaving * 12 * i) + (yearlyGifts * i))
      });
    }
    
    // Always include the final year
    if (years > 0 && (data.length === 0 || data[data.length - 1].year !== 65)) {
      const finalValue = calculateFutureValueAtYear(years);
      data.push({
        year: 65,
        value: finalValue,
        contributions: (initialContribution + (monthlySaving * 12 * years) + (yearlyGifts * years)),
        gains: finalValue - (initialContribution + (monthlySaving * 12 * years) + (yearlyGifts * years))
      });
    }
    
    return data;
  };

  const calculateFutureValueAtYear = (yearsFromNow) => {
    if (yearsFromNow <= 0) return initialContribution;
    
    const rate = 0.07;
    const monthlyRate = rate / 12;
    const totalMonths = yearsFromNow * 12;
    
    const futureInitial = initialContribution * Math.pow(1 + rate, yearsFromNow);
    const futureMonthly = monthlySaving * (Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate;
    const futureGifts = yearlyGifts * (Math.pow(1 + rate, yearsFromNow) - 1) / rate;
    
    return futureInitial + futureMonthly + futureGifts;
  };

  const chartData = generateChartData();
  const maxValue = Math.max(...chartData.map(d => d.value), initialContribution || 1000);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatLargeCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return formatCurrency(amount);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsCalculated(true), 500);
    return () => clearTimeout(timer);
  }, [initialContribution, monthlySaving, yearlyGifts, kidAge]);

  return (
    <section className="py-12 lg:py-24 px-4 sm:px-6 relative overflow-hidden min-h-screen flex items-center bg-white">
      {/* Solid white background - no gradients */}
      <div className="absolute inset-0 bg-white" />
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        {/* Centered Header */}
        <div className="text-center mb-8 lg:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-800 mb-4 lg:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            See your <span className="text-[#cf21c3]">potential</span>
          </motion.h2>
          <motion.p
            className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Play with our calculator to see just how much the power of time
            and compound interest can help your child's trust fund grow.
          </motion.p>
        </div>

        {/* Mobile: Graph at the top */}
        <div className="lg:hidden mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Chart Container */}
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-slate-100">
              <div className="space-y-4 lg:space-y-6">
                {/* Chart Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-800">Year</h3>
                  <div className="flex gap-4 lg:gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#cf21c3]"></div>
                      <span className="text-xs lg:text-sm text-slate-600 font-medium">Contributions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                      <span className="text-xs lg:text-sm text-slate-600 font-medium">Investment Gains</span>
                    </div>
                  </div>
                </div>

                {/* Fixed Bar Chart */}
                <div className="relative h-48 lg:h-64">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-500 font-medium py-2">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <span key={i}>{formatLargeCurrency(maxValue * (1 - i * 0.25))}</span>
                    ))}
                  </div>
                  
                  {/* Chart bars area */}
                  <div className="ml-8 h-full flex items-end justify-between gap-2 lg:gap-4">
                    {chartData.map((data, index) => {
                      const totalHeight = Math.max((data.value / maxValue) * 100, 5);
                      const contributionsRatio = data.contributions / data.value;
                      const gainsRatio = data.gains / data.value;
                      
                      return (
                        <div key={index} className="flex flex-col items-center gap-1 flex-1 h-full">
                          {/* Stacked bars container */}
                          <div className="relative w-full max-w-8 lg:max-w-12 h-full flex flex-col justify-end">
                            <motion.div 
                              className="w-full flex flex-col rounded"
                              initial={{ scaleY: 0 }}
                              whileInView={{ scaleY: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1.2,
                                delay: index * 0.1,
                                ease: "easeOut"
                              }}
                              style={{ 
                                height: `${totalHeight}%`,
                                transformOrigin: 'bottom'
                              }}
                            >
                              {/* Contributions bar (bottom) */}
                              <motion.div
                                className="w-full bg-[#cf21c3]"
                                initial={{ height: 0 }}
                                whileInView={{ height: "100%" }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.8,
                                  delay: index * 0.1 + 0.3,
                                  ease: "easeOut"
                                }}
                                style={{ 
                                  flex: contributionsRatio,
                                  minHeight: '4px'
                                }}
                              />
                              
                              {/* Gains bar (top) */}
                              <motion.div
                                className="w-full bg-[#f0d8ef]"
                                initial={{ height: 0 }}
                                whileInView={{ height: "100%" }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.8,
                                  delay: index * 0.1 + 0.5,
                                  ease: "easeOut"
                                }}
                                style={{ 
                                  flex: gainsRatio,
                                  minHeight: '4px'
                                }}
                              />
                            </motion.div>
                          </div>
                          
                          {/* X-axis labels */}
                          <span className="text-xs text-slate-400 font-medium whitespace-nowrap mt-1">
                            {data.year}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Current value indicator */}
                  <div className="absolute top-4 right-4 bg-slate-800 text-white px-3 py-1 rounded text-sm font-bold">
                    {formatLargeCurrency(futureValue)}
                  </div>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <motion.div
              className="text-center space-y-3 lg:space-y-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                className="text-3xl lg:text-6xl font-bold text-slate-800"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                {formatCurrency(futureValue)}
              </motion.div>
              <motion.p
                className="text-base lg:text-lg text-slate-600 font-medium"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Potential Future Balance at Age 65
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 lg:space-y-6"
          >
            {/* Calculator Inputs */}
            <div className="space-y-4 lg:space-y-6">
              {/* Initial Contribution */}
              <motion.div
                className="space-y-2 lg:space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label className="block text-slate-700 font-medium text-sm lg:text-base">
                  Initial contribution amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 text-base lg:text-lg font-semibold">$</span>
                  <input
                    type="number"
                    value={initialContribution}
                    onChange={(e) => setInitialContribution(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 lg:py-4 bg-white border border-slate-200 rounded-lg text-base lg:text-lg font-bold text-slate-800 focus:ring-2 focus:ring-[#cf21c3] focus:border-[#cf21c3] outline-none transition-all"
                  />
                </div>
              </motion.div>

              {/* Monthly Saving Goal */}
              <motion.div
                className="space-y-2 lg:space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <label className="block text-slate-700 font-medium text-sm lg:text-base">
                  Your monthly saving goal
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 text-base lg:text-lg font-semibold">$</span>
                  <input
                    type="number"
                    value={monthlySaving}
                    onChange={(e) => setMonthlySaving(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 lg:py-4 bg-white border border-slate-200 rounded-lg text-base lg:text-lg font-bold text-slate-800 focus:ring-2 focus:ring-[#cf21c3] focus:border-[#cf21c3] outline-none transition-all"
                  />
                </div>
              </motion.div>

              {/* Yearly Gifts */}
              <motion.div
                className="space-y-2 lg:space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label className="block text-slate-700 font-medium text-sm lg:text-base">
                  Gifts each year from family & friends
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 text-base lg:text-lg font-semibold">$</span>
                  <input
                    type="number"
                    value={yearlyGifts}
                    onChange={(e) => setYearlyGifts(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 lg:py-4 bg-white border border-slate-200 rounded-lg text-base lg:text-lg font-bold text-slate-800 focus:ring-2 focus:ring-[#cf21c3] focus:border-[#cf21c3] outline-none transition-all"
                  />
                </div>
              </motion.div>

              {/* Kid's Age */}
              <motion.div
                className="space-y-2 lg:space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <label className="block text-slate-700 font-medium text-sm lg:text-base">
                  Your kid's age
                </label>
                <input
                  type="number"
                  value={kidAge}
                  min="0"
                  max="18"
                  onChange={(e) => setKidAge(Number(e.target.value))}
                  className="w-full px-4 py-3 lg:py-4 bg-white border border-slate-200 rounded-lg text-base lg:text-lg font-bold text-slate-800 focus:ring-2 focus:ring-[#cf21c3] focus:border-[#cf21c3] outline-none transition-all"
                />
              </motion.div>

              {/* Calculate Button */}
              <motion.button
                className="w-full flex items-center justify-center gap-3 px-6 py-3 lg:px-8 lg:py-4 bg-[#cf21c3] text-white font-bold text-base lg:text-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-[#b01da6] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsCalculated(!isCalculated)}
              >
                <Calculator className="w-4 h-4 lg:w-5 lg:h-5" />
                Calculate
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Chart and Results (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block space-y-6 lg:space-y-8"
          >
            {/* Chart Container */}
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-slate-100">
              <div className="space-y-4 lg:space-y-6">
                {/* Chart Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-800">Year</h3>
                  <div className="flex gap-4 lg:gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#cf21c3]"></div>
                      <span className="text-xs lg:text-sm text-slate-600 font-medium">Contributions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                      <span className="text-xs lg:text-sm text-slate-600 font-medium">Investment Gains</span>
                    </div>
                  </div>
                </div>

                {/* Fixed Bar Chart */}
                <div className="relative h-48 lg:h-64">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-500 font-medium py-2">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <span key={i}>{formatLargeCurrency(maxValue * (1 - i * 0.25))}</span>
                    ))}
                  </div>
                  
                  {/* Chart bars area */}
                  <div className="ml-8 h-full flex items-end justify-between gap-2 lg:gap-4">
                    {chartData.map((data, index) => {
                      const totalHeight = Math.max((data.value / maxValue) * 100, 5);
                      const contributionsRatio = data.contributions / data.value;
                      const gainsRatio = data.gains / data.value;
                      
                      return (
                        <div key={index} className="flex flex-col items-center gap-1 flex-1 h-full">
                          {/* Stacked bars container */}
                          <div className="relative w-full max-w-8 lg:max-w-12 h-full flex flex-col justify-end">
                            <motion.div 
                              className="w-full flex flex-col rounded"
                              initial={{ scaleY: 0 }}
                              whileInView={{ scaleY: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1.2,
                                delay: index * 0.1,
                                ease: "easeOut"
                              }}
                              style={{ 
                                height: `${totalHeight}%`,
                                transformOrigin: 'bottom'
                              }}
                            >
                              {/* Contributions bar (bottom) */}
                              <motion.div
                                className="w-full bg-[#cf21c3]"
                                initial={{ height: 0 }}
                                whileInView={{ height: "100%" }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.8,
                                  delay: index * 0.1 + 0.3,
                                  ease: "easeOut"
                                }}
                                style={{ 
                                  flex: contributionsRatio,
                                  minHeight: '4px'
                                }}
                              />
                              
                              {/* Gains bar (top) */}
                              <motion.div
                                className="w-full bg-[#f0d8ef]"
                                initial={{ height: 0 }}
                                whileInView={{ height: "100%" }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.8,
                                  delay: index * 0.1 + 0.5,
                                  ease: "easeOut"
                                }}
                                style={{ 
                                  flex: gainsRatio,
                                  minHeight: '4px'
                                }}
                              />
                            </motion.div>
                          </div>
                          
                          {/* X-axis labels */}
                          <span className="text-xs text-slate-400 font-medium whitespace-nowrap mt-1">
                            {data.year}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Current value indicator */}
                  <div className="absolute top-4 right-4 bg-slate-800 text-white px-3 py-1 rounded text-sm font-bold">
                    {formatLargeCurrency(futureValue)}
                  </div>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <motion.div
              className="text-center space-y-3 lg:space-y-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                className="text-3xl lg:text-6xl font-bold text-slate-800"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                {formatCurrency(futureValue)}
              </motion.div>
              <motion.p
                className="text-base lg:text-lg text-slate-600 font-medium"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Potential Future Balance at Age 65
              </motion.p>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 border border-slate-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#cf21c3] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🛡️</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800 mb-1 text-base">Secure your child's future</h3>
                  <p className="text-sm text-slate-600">
                    Start investing in your child's future today with our tax-advantaged investment accounts.
                  </p>
                </div>
                <motion.button
                  className="px-6 py-2 bg-[#cf21c3] text-white font-semibold rounded-full hover:bg-[#b01da6] transition-colors text-sm whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile CTA Button */}
        <motion.div
          className="lg:hidden text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.button
            className="px-8 py-3 bg-[#cf21c3] text-white font-semibold rounded-full hover:bg-[#b01da6] transition-colors text-base w-full max-w-xs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Investing Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialPotentialSection;