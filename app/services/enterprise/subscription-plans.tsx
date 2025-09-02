"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function SubscriptionPlans() {
  const [activePlan, setActivePlan] = useState<number | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly");
  const [showComparisonTable, setShowComparisonTable] = useState(false);

  const plans = [
    {
      id: 1,
      name: "Free",
      price: "$0",
      period: "Per month",
      description: "Perfect for getting started with basic AI content creation.",
      cta: "Try it for Free",
      features: [
        { name: "Messaging limits", value: "400 messages", included: true },
        { name: "Projects", value: "Limited projects", included: true },
        { name: "Word limit", value: "20,000 words", included: true },
        { name: "AI Prompting", value: "Basic access", included: true },
        { name: "OpenAI integration", value: "Not included", included: false },
        { name: "Priority support", value: "Not included", included: false },
        { name: "Custom templates", value: "Not included", included: false },
      ],
      popular: false
    },
    {
      id: 2,
      name: "Plus plan",
      price: "$20",
      period: "Per month",
      description: "Ideal for content creators and small businesses.",
      cta: "Get Started",
      features: [
        { name: "Messaging limits", value: "2,000 messages", included: true },
        { name: "Projects", value: "Unlimited projects", included: true },
        { name: "Word limit", value: "80,000 words", included: true },
        { name: "AI Prompting", value: "Advanced access", included: true },
        { name: "OpenAI integration", value: "API key support", included: true },
        { name: "Priority support", value: "Email support", included: true },
        { name: "Custom templates", value: "5 templates", included: true },
      ],
      popular: true
    },
    {
      id: 3,
      name: "Pro plan",
      price: "$30",
      period: "Per month",
      description: "For professionals and teams needing advanced features.",
      cta: "Get Started",
      features: [
        { name: "Messaging limits", value: "5,000 messages", included: true },
        { name: "Projects", value: "Unlimited projects", included: true },
        { name: "Word limit", value: "100,000 words", included: true },
        { name: "AI Prompting", value: "Premium access", included: true },
        { name: "OpenAI integration", value: "API key support", included: true },
        { name: "Priority support", value: "24/7 chat support", included: true },
        { name: "Custom templates", value: "Unlimited templates", included: true },
      ],
      popular: false
    },
    {
      id: 4,
      name: "Enterprise",
      price: "Let's talk",
      period: "",
      description: "Custom solutions for large organizations.",
      cta: "Contact Sales",
      features: [
        { name: "Messaging limits", value: "Unlimited", included: true },
        { name: "Projects", value: "Unlimited projects", included: true },
        { name: "Word limit", value: "Unlimited words", included: true },
        { name: "AI Prompting", value: "Enterprise access", included: true },
        { name: "OpenAI integration", value: "Full integration", included: true },
        { name: "Priority support", value: "Dedicated account manager", included: true },
        { name: "Custom templates", value: "Unlimited templates", included: true },
      ],
      popular: false,
      enterprise: true
    }
  ];

  const togglePlanDetails = (planId: number) => {
    if (activePlan === planId) {
      setActivePlan(null);
    } else {
      setActivePlan(planId);
    }
  };

  const toggleBillingPeriod = () => {
    setBillingPeriod(billingPeriod === "monthly" ? "annually" : "monthly");
  };

  const toggleComparisonTable = () => {
    setShowComparisonTable(!showComparisonTable);
  };

  // Get all unique feature names across all plans
  const allFeatures = Array.from(
    new Set(plans.flatMap(plan => plan.features.map(f => f.name)))
  );

  return (
    <section className="py-20 px-6 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Start Your Content Creation
            <br />
            Journey with AI
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Collaborate with AI to generate content that resonates with your audience, drives and delivers meaningful results across all platforms.
          </motion.p>
        </motion.div>

        {/* Toggle */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-[#cf21c3]/10 rounded-full p-1 flex backdrop-blur-sm">
            <button 
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingPeriod === "monthly" 
                  ? "bg-white text-[#cf21c3] shadow-sm" 
                  : "text-gray-600"
              }`}
              onClick={() => setBillingPeriod("monthly")}
            >
              Monthly
            </button>
            <button 
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingPeriod === "annually" 
                  ? "bg-white text-[#cf21c3] shadow-sm" 
                  : "text-gray-600"
              }`}
              onClick={() => setBillingPeriod("annually")}
            >
              Annually <span className="text-[#cf21c3] ml-1">Save 20%</span>
            </button>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
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
              className={`relative rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? "border-2 border-[#cf21c3] bg-white/90 backdrop-blur-sm shadow-xl" 
                  : plan.enterprise
                    ? "bg-gradient-to-br from-[#cf21c3] to-[#a81a9e] text-white"
                    : "bg-white/90 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-xl"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <motion.div 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-[#cf21c3] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                </motion.div>
              )}

              {/* Plan name */}
              <h3 className={`text-xl font-semibold mb-2 ${plan.enterprise ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <div className={`text-3xl font-bold ${plan.enterprise ? "text-white" : "text-gray-900"}`}>
                  {billingPeriod === "annually" && !plan.enterprise ? `$${parseInt(plan.price.slice(1)) * 12 * 0.8}` : plan.price}
                </div>
                <div className={`text-sm ${plan.enterprise ? "text-pink-200" : "text-gray-600"}`}>
                  {plan.enterprise ? "" : billingPeriod === "annually" ? "Per year (Save 20%)" : plan.period}
                </div>
              </div>

              {/* Description */}
              <p className={`text-sm mb-6 ${plan.enterprise ? "text-pink-100" : "text-gray-600"}`}>
                {plan.description}
              </p>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mb-6"
              >
                <Button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#cf21c3] hover:bg-[#b31cad] text-white"
                      : plan.enterprise
                        ? "bg-white text-[#cf21c3] hover:bg-gray-100"
                        : "bg-[#cf21c3]/10 text-[#cf21c3] hover:bg-[#cf21c3]/20"
                  }`}
                  onClick={() => togglePlanDetails(plan.id)}
                >
                  {activePlan === plan.id ? "Hide Details" : plan.cta}
                  {activePlan === plan.id ? (
                    <ChevronUp className="ml-2 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </motion.div>

              {/* Features list */}
              <div className="mt-auto">
                <ul className="space-y-3">
                  {plan.features.slice(0, 4).map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {feature.included ? (
                        <Check className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 ${
                          plan.enterprise ? "text-pink-300" : "text-[#cf21c3]"
                        }`} />
                      ) : (
                        <X className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 ${
                          plan.enterprise ? "text-pink-300" : "text-gray-400"
                        }`} />
                      )}
                      <span className={`text-sm ${plan.enterprise ? "text-pink-100" : "text-gray-600"}`}>
                        {feature.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Feature Tables */}
        <div className="mt-12 space-y-6">
          {plans.map((plan, index) => (
            <AnimatePresence key={plan.id}>
              {activePlan === plan.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-2xl overflow-hidden ${
                    plan.popular 
                      ? "border-2 border-[#cf21c3]" 
                      : plan.enterprise
                        ? "bg-gradient-to-br from-[#cf21c3] to-[#a81a9e]"
                        : "bg-white border"
                  }`}
                >
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-4 ${plan.enterprise ? "text-white" : "text-gray-900"}`}>
                      What's included in {plan.name}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {plan.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className={`flex items-center p-3 rounded-lg ${
                            plan.enterprise ? "bg-[#b91ab1]" : "bg-gray-50"
                          }`}
                        >
                          {feature.included ? (
                            <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${
                              plan.enterprise ? "text-pink-300" : "text-[#cf21c3]"
                            }`} />
                          ) : (
                            <X className={`w-5 h-5 mr-3 flex-shrink-0 ${
                              plan.enterprise ? "text-pink-300" : "text-gray-400"
                            }`} />
                          )}
                          <div>
                            <p className={`font-medium ${plan.enterprise ? "text-white" : "text-gray-900"}`}>
                              {feature.name}
                            </p>
                            <p className={`text-sm ${plan.enterprise ? "text-pink-200" : "text-gray-600"}`}>
                              {feature.value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button
                        className={`py-3 rounded-full font-semibold px-8 ${
                          plan.popular
                            ? "bg-[#cf21c3] hover:bg-[#b31cad] text-white"
                            : plan.enterprise
                              ? "bg-white text-[#cf21c3] hover:bg-gray-100"
                              : "bg-[#cf21c3] text-white hover:bg-[#b31cad]"
                        }`}
                      >
                        Choose {plan.name}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Compare Plans Button */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            onClick={toggleComparisonTable}
            className="py-3 px-8 rounded-full bg-[#cf21c3] hover:bg-[#b31cad] text-white font-semibold"
          >
            {showComparisonTable ? "Hide Comparison Table" : "Compare All Plans"}
            {showComparisonTable ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        </motion.div>

        {/* Comparison Table */}
        <AnimatePresence>
          {showComparisonTable && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Plan Comparison
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left p-4 font-semibold text-gray-700">Features</th>
                        {plans.map((plan) => (
                          <th key={plan.id} className="p-4 text-center font-semibold text-gray-700">
                            {plan.name}
                            {plan.popular && (
                              <span className="block text-xs text-[#cf21c3] font-medium mt-1">Popular</span>
                            )}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {allFeatures.map((featureName, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                          <td className="p-4 font-medium text-gray-900">{featureName}</td>
                          {plans.map((plan) => {
                            const feature = plan.features.find(f => f.name === featureName);
                            return (
                              <td key={plan.id} className="p-4 text-center">
                                {feature ? (
                                  feature.included ? (
                                    <div className="flex flex-col items-center justify-center">
                                      <Check className="w-5 h-5 text-[#cf21c3]" />
                                      <span className="text-xs text-gray-600 mt-1">{feature.value}</span>
                                    </div>
                                  ) : (
                                    <X className="w-5 h-5 text-gray-400 mx-auto" />
                                  )
                                ) : (
                                  <span className="text-gray-400">-</span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}