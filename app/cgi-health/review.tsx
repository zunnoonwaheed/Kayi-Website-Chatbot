"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [direction, setDirection] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Ken Edison",
      handle: "@kenescober",
      time: "32m",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ken",
      content: {
        title: "Woke Up to Our First Ever Payment on Whop!",
        text: "My wife and I just got our first-ever sale on Whop — and we literally woke up to the notification. It was surreal. We've been putting in the late nights building our offer, refining the value, and figuring out how to actually get it in front of people who might hit different. The feeling of seeing that first payment come through after all the hard work is absolutely incredible and makes every late night worth it."
      }
    },
    {
      id: 2,
      name: "Raman Kumar Keshari",
      handle: "@ramankeshari",
      time: "4h",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raman",
      content: {
        title: "Just Got My First Sale today on my digital product Crypto Wallet Guardian.",
        text: "This thing got me some hope. After months of development and testing, seeing that first customer purchase validation all the effort. The Crypto Wallet Guardian is designed to provide maximum security for digital assets, and getting that first sale proves there's real demand for quality security solutions in the crypto space.",
        image: {
          type: "revenue",
          amount: "$150.00",
          label: "Crypto Wallet Guardian"
        }
      }
    },
    {
      id: 3,
      name: "Tim Gisinger",
      handle: "@timgisinger",
      time: "1d",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tim",
      content: {
        title: "First Sale Achieved 🎉 Proof Over Opinions. Vision Over Noise.",
        text: "For 3 months, I gave it everything. No alcohol. No parties. Gym 5x a week. Relentless focus. I skipped time with friends and family — not because I didn't care, but because I believed in something they couldn't see. This first sale validates that the sacrifice was worth it and proves that when you commit fully to your vision, the universe conspires to help you achieve it. The journey is just beginning."
      }
    },
    {
      id: 4,
      name: "SVBN",
      handle: "@svbn",
      time: "25m",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SVBN",
      content: {
        title: "I Launched My First Digital Product - And Made My First Sales",
        text: "After two months inside Monetise, I just launched my first digital product and listed it live on the Whop Marketplace. Even better - I've already made 4 sales and real buyers are inside, with no ads run. The system really works when you follow the process and put in the consistent effort. Seeing multiple sales come through in the first week shows this is a sustainable business model, not just a one-time fluke."
      }
    },
    {
      id: 5,
      name: "Armando Garcia",
      handle: "@scalewithmando",
      time: "6h",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Armando",
      content: {
        title: "Shoutout to @Iman Gadzhi and @Andries Schoeman for the guidance throughout this journey.",
        text: "Happy to say I've accomplished most of my 2025 goals this year — from buying my dad his dream truck to purchasing a McLaren at 19. The mentorship and guidance from industry leaders has been invaluable in accelerating my success. Their insights into business strategy, marketing, and personal development have helped me achieve in months what might have taken years to figure out on my own.",
        image: {
          type: "goals",
          items: [
            "Once Get 5k Gmw Close",
            "retire Dad",
            "Big Dad a Truck",
            "Deal Dad and Moms House",
            "Meet My Office",
            "New House",
            "McLaren"
          ],
          carImage: true
        }
      }
    },
    {
      id: 6,
      name: "Armando Garcia",
      handle: "@scalewithmando",
      time: "2m",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Armando2",
      content: {
        title: "Completely new to the digital product space, but I do have to say after going through the Monetise modules I was able to do something valuable that helped others and numbers speak for themselves.",
        text: "I was able to do a little over 100k in revenue within 65 days of starting and selling 8 products. The step-by-step guidance in the Monetise program made it possible to achieve these results even as a complete beginner. The community support and proven frameworks eliminated the guesswork and allowed me to focus on execution rather than figuring things out through trial and error.",
        earnings: "$111,700"
      }
    },
    {
      id: 7,
      name: "Success Story",
      handle: "@successuser",
      time: "3d",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Success",
      content: {
        title: "From Zero to $761,786 ARR 🚀",
        text: "A few months ago, I joined Monetise with no clear expectations, just a desire to start and scale my business. I had the vision, but had many moments where I wondered if it would pay off. Today, we're tracking toward $800k ARR and the business continues to grow exponentially. The systems, strategies, and mindset shifts taught in the program were the missing pieces I needed to turn my ideas into a thriving, sustainable business that creates real value for customers."
      }
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentSlide + i + reviews.length) % reviews.length;
      visible.push({ ...reviews[index], position: i });
    }
    return visible;
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.4
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.4
      }
    })
  };

  const sideCardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: 0
    },
    visible: {
      opacity: 0.4,
      scale: 0.9,
      x: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.3
      }
    }
  };

  return (
    <div className="bg-white text-black py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold px-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Your Win can be the{' '}
            <span style={{ color: '#cf21c3' }}>Next One</span>
          </motion.h2>
          <motion.p 
            className="text-base md:text-xl font-bold text-gray-900 px-4 mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            From people making their first sale to collecting $111k in 45 days....
          </motion.p>
          <motion.p 
            className="text-sm md:text-base text-gray-600 px-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We receive messages like this every day. Yours can be the next one.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[450px] md:min-h-[550px] flex items-center">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-gray-50 text-[#cf21c3] p-2 md:p-3 rounded-full transition-all shadow-lg border border-gray-200 hover:shadow-xl"
            aria-label="Previous review"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-gray-50 text-[#cf21c3] p-2 md:p-3 rounded-full transition-all shadow-lg border border-gray-200 hover:shadow-xl"
            aria-label="Next review"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>

          {/* Cards Container */}
          <div className="w-full flex items-center justify-center">
            <div className="flex items-center justify-center gap-0 md:gap-6 px-2">
              <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                {getVisibleReviews().map((review) => (
                  <motion.div
                    key={`${review.id}-${review.position}`}
                    custom={direction}
                    variants={review.position === 0 ? slideVariants : sideCardVariants}
                    initial={review.position === 0 ? "enter" : "hidden"}
                    animate={review.position === 0 ? "center" : "visible"}
                    exit={review.position === 0 ? "exit" : "hidden"}
                    className={`flex-shrink-0 ${
                      review.position === 0
                        ? 'w-[340px] md:w-[600px] z-20'
                        : 'hidden md:block w-[500px] z-10 blur-[1px]'
                    } ${
                      review.position === -1 ? 'order-1' : 
                      review.position === 0 ? 'order-2' : 'order-3'
                    }`}
                  >
                    <motion.div 
                      className="bg-white text-black rounded-xl p-5 md:p-7 shadow-lg border border-gray-100 h-full"
                      whileHover={review.position === 0 ? { y: -2 } : {}}
                      transition={{ type: "tween", duration: 0.2 }}
                    >
                      {/* Profile Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <motion.img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full flex-shrink-0"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "tween", duration: 0.2 }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-lg text-gray-900">{review.name}</span>
                            <span className="text-gray-500 text-base truncate">{review.handle}</span>
                            <span className="text-gray-400 text-base">· {review.time}</span>
                          </div>
                          {review.content.title && (
                            <h3 className="font-bold text-base leading-tight text-gray-800 line-clamp-2 mt-2">
                              {review.content.title}
                            </h3>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <motion.p 
                          className="text-base leading-relaxed text-gray-700 line-clamp-5"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                        >
                          {review.content.text}
                        </motion.p>

                        {/* Revenue Chart */}
                        {review.content.image?.type === 'revenue' && (
                          <motion.div 
                            className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg p-4 mt-4"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.15, type: "tween", duration: 0.3 }}
                          >
                            <div className="bg-white rounded-lg p-4">
                              <div className="text-base text-gray-600">Gross revenue</div>
                              <div className="text-2xl md:text-3xl font-bold text-gray-900">{review.content.image.amount}</div>
                              <div className="text-base text-gray-500">{review.content.image.label}</div>
                              <div className="mt-3">
                                <svg viewBox="0 0 200 30" className="w-full h-6 md:h-7">
                                  <polyline
                                    points="0,25 50,23 100,18 150,12 200,8"
                                    fill="none"
                                    stroke="#3b82f6"
                                    strokeWidth="3"
                                  />
                                </svg>
                              </div>
                              <div className="flex justify-between text-base text-gray-500 mt-2">
                                <span>Aug 8</span>
                                <span>Today</span>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Goals List with Car */}
                        {review.content.image?.type === 'goals' && (
                          <motion.div 
                            className="bg-gray-900 rounded-lg p-4 mt-4"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.15, type: "tween", duration: 0.3 }}
                          >
                            <div className="flex gap-4">
                              <div className="flex-1">
                                <div className="text-white font-bold text-base mb-3">2025 Goals</div>
                                <div className="space-y-2">
                                  {review.content.image.items.slice(0, 4).map((item, idx) => (
                                    <motion.div 
                                      key={idx} 
                                      className="flex items-center gap-2"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.2 + idx * 0.1, duration: 0.2 }}
                                    >
                                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-sm">
                                        ✓
                                      </div>
                                      <span className="text-gray-300 text-base line-clamp-1">{item}</span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                              {review.content.image.carImage && (
                                <motion.div 
                                  className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ type: "tween", delay: 0.3, duration: 0.3 }}
                                >
                                  <div className="text-3xl">🏎️</div>
                                </motion.div>
                              )}
                            </div>
                          </motion.div>
                        )}

                        {/* Earnings Badge */}
                        {review.content.earnings && (
                          <motion.div 
                            className="bg-gray-900 rounded-lg p-4 mt-4"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.15, type: "tween", duration: 0.3 }}
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-3 min-w-0 flex-1">
                                <div className="w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center text-base">
                                  🏆
                                </div>
                                <img
                                  src={review.avatar}
                                  alt={review.name}
                                  className="w-10 h-10 rounded-full flex-shrink-0"
                                />
                                <div className="min-w-0 flex-1">
                                  <div className="text-white font-bold text-base truncate">{review.name}</div>
                                  <div className="text-gray-400 text-base truncate">{review.handle}</div>
                                </div>
                              </div>
                              <div className="text-green-400 font-bold text-base flex items-center gap-2">
                                <span>💚</span>
                                <span>{review.content.earnings}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <motion.div 
          className="flex justify-center gap-1 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {reviews.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => {
                setDirection(idx > currentSlide ? 1 : -1);
                setCurrentSlide(idx);
              }}
              className={`h-1 rounded-full transition-all duration-200 ${
                idx === currentSlide
                  ? 'w-4 bg-[#cf21c3]'
                  : 'w-1 bg-gray-300'
              }`}
              aria-label={`Go to review ${idx + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewsSection;