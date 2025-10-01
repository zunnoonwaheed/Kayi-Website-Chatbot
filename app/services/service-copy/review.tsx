"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Raman Kumar as default

  const reviews = [
    {
      id: 1,
      name: "Ken Edison",
      handle: "@kenescober",
      time: "32m",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ken",
      content: {
        title: "Woke Up to Our First Ever Payment on Whop!",
        text: "My wife and I just got our first-ever sale on Whop — and we literally woke up to the notification. It was surreal. We've been putting in the late nights building our offer, refining the value, and figuring out how to actually get it in front of people who might hit different."
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
        text: "This thing got me some hope.",
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
        text: "For 3 months, I gave it everything. No alcohol. No parties. Gym 5x a week. Relentless focus. I skipped time with friends and family — not because I didn't care, but because I believed in something they couldn't see."
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
        text: "After two months inside Monetise, I just launched my first digital product and listed it live on the Whop Marketplace. Even better - I've already made 4 sales and real buyers are inside, with no ads run."
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
        text: "Happy to say I've accomplished most of my 2025 goals this year — from buying my dad his dream truck to purchasing a McLaren at 19.",
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
        text: "I was able to do a little over 100k in revenue within 65 days of starting and selling 8 products.",
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
        text: "A few months ago, I joined Monetise with no clear expectations, just a desire to start and scale my business. I had the vision, but had many moments where I wondered if it would pay off."
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
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

  return (
    <div className="min-h-screen bg-white text-black py-2 md:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header - Minimal spacing */}
        <div className="text-center mb-2 md:mb-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold px-2">
            Your Win can be the{' '}
            <span style={{ color: '#cf21c3' }}>Next One</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-700 px-4">
            From people making their first sale to collecting $111k in 45 days....
          </p>
          <p className="text-xs md:text-base text-gray-600 px-4">
            We receive messages like this every day. Yours can be the next one.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[380px] md:min-h-[480px] flex items-center">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-gray-50 text-[#cf21c3] p-2 md:p-3 rounded-full transition-all shadow-lg border border-gray-200 hover:shadow-xl active:scale-95"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-gray-50 text-[#cf21c3] p-2 md:p-3 rounded-full transition-all shadow-lg border border-gray-200 hover:shadow-xl active:scale-95"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Cards Container */}
          <div className="w-full flex items-center justify-center">
            <div className="flex items-center justify-center gap-0 md:gap-4 px-2">
              {getVisibleReviews().map((review) => (
                <div
                  key={`${review.id}-${review.position}`}
                  className={`transition-all duration-500 ease-out flex-shrink-0 ${
                    review.position === 0
                      ? 'w-[300px] md:w-[500px] opacity-100 scale-100 z-20' // Center card
                      : 'hidden md:block w-[350px] opacity-40 scale-90 z-10 blur-sm' // Side cards
                  } ${
                    review.position === -1 ? 'order-1' : 
                    review.position === 0 ? 'order-2' : 'order-3'
                  }`}
                >
                  <div className="bg-white text-black rounded-xl p-3 md:p-4 shadow border border-gray-100 h-full">
                    {/* Profile Header - Minimal spacing */}
                    <div className="flex items-start gap-2 mb-2">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1 flex-wrap">
                          <span className="font-bold text-sm text-gray-900">{review.name}</span>
                          <span className="text-gray-500 text-xs truncate">{review.handle}</span>
                          <span className="text-gray-400 text-xs">· {review.time}</span>
                        </div>
                        {review.content.title && (
                          <h3 className="font-bold text-xs leading-tight text-gray-800 line-clamp-2">
                            {review.content.title}
                          </h3>
                        )}
                      </div>
                    </div>

                    {/* Content - Minimal spacing */}
                    <div>
                      <p className="text-xs leading-relaxed text-gray-700 line-clamp-3">
                        {review.content.text}
                      </p>

                      {/* Revenue Chart */}
                      {review.content.image?.type === 'revenue' && (
                        <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded p-2 mt-2">
                          <div className="bg-white rounded p-2">
                            <div className="text-xs text-gray-600">Gross revenue</div>
                            <div className="text-lg md:text-xl font-bold text-gray-900">{review.content.image.amount}</div>
                            <div className="text-xs text-gray-500">{review.content.image.label}</div>
                            <div className="mt-1">
                              <svg viewBox="0 0 200 30" className="w-full h-4 md:h-5">
                                <polyline
                                  points="0,25 50,23 100,18 150,12 200,8"
                                  fill="none"
                                  stroke="#3b82f6"
                                  strokeWidth="2.5"
                                />
                              </svg>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>Aug 8</span>
                              <span>Today</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Goals List with Car */}
                      {review.content.image?.type === 'goals' && (
                        <div className="bg-gray-900 rounded p-2 mt-2">
                          <div className="flex gap-2">
                            <div className="flex-1">
                              <div className="text-white font-bold text-xs">2025 Goals</div>
                              <div>
                                {review.content.image.items.slice(0, 2).map((item, idx) => (
                                  <div key={idx} className="flex items-center gap-1">
                                    <div className="w-3 h-3 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-[8px]">
                                      ✓
                                    </div>
                                    <span className="text-gray-300 text-xs line-clamp-1">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            {review.content.image.carImage && (
                              <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center">
                                <div className="text-xl">🏎️</div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Earnings Badge */}
                      {review.content.earnings && (
                        <div className="bg-gray-900 rounded p-2 mt-2">
                          <div className="flex items-center justify-between gap-1">
                            <div className="flex items-center gap-1 min-w-0 flex-1">
                              <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-xs">
                                🏆
                              </div>
                              <img
                                src={review.avatar}
                                alt={review.name}
                                className="w-6 h-6 rounded-full flex-shrink-0"
                              />
                              <div className="min-w-0 flex-1">
                                <div className="text-white font-bold text-xs truncate">{review.name}</div>
                                <div className="text-gray-400 text-xs truncate">{review.handle}</div>
                              </div>
                            </div>
                            <div className="text-green-400 font-bold text-xs flex items-center gap-1">
                              <span>💚</span>
                              <span>{review.content.earnings}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-1 mt-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? 'w-4 bg-[#cf21c3]'
                  : 'w-1 bg-gray-300'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;