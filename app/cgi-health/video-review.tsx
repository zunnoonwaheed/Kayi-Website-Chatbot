"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Vaselina P.",
    video: "/images/movie1.mov",
    text: "Working with agencies can be difficult but these guys keep it straight forward",
  },
  {
    name: "Lauren T.",
    video: "/images/review1.mp4",
    text: "Their team delivers ahead of deadlines, and makes things easy.",
  },
  {
    name: "Derek F.",
    video: "/images/derak.mp4",
    text: "Honestly, having one team for everything has been a lifesaver.",
  },
];

export default function ReviewSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [paused, setPaused] = useState<boolean[]>(reviews.map(() => true));
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videosLoaded, setVideosLoaded] = useState<boolean[]>(reviews.map(() => false));
  const [videoErrors, setVideoErrors] = useState<boolean[]>(reviews.map(() => false));

  // Preload videos on component mount
  useEffect(() => {
    const preloadVideos = async () => {
      const loadPromises = reviews.map((review, index) => {
        return new Promise<void>((resolve) => {
          if (!review.video) {
            resolve();
            return;
          }

          const video = document.createElement('video');
          video.preload = 'auto';
          video.src = review.video;
          
          video.onloadeddata = () => {
            setVideosLoaded(prev => prev.map((loaded, i) => i === index ? true : loaded));
            resolve();
          };
          
          video.onerror = () => {
            console.warn(`Failed to load video: ${review.video}`);
            setVideoErrors(prev => prev.map((error, i) => i === index ? true : error));
            resolve();
          };

          // Force load by setting currentTime (triggers loading)
          video.currentTime = 0.1;
        });
      });

      await Promise.all(loadPromises);
    };

    preloadVideos();
  }, []);

  // Detect mobile screen
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reorder for mobile: video first, then Derek, then Sarah
  const displayedReviews = isMobile
    ? [reviews[1], reviews[2], reviews[0]] // Lauren, Derek, Sarah
    : reviews;

  // Get the correct paused state for displayed index
  const getPausedState = (displayedIndex: number) => {
    if (!isMobile) return paused[displayedIndex];
    
    // For mobile, map displayed index to original index
    if (displayedIndex === 0) return paused[1]; // Lauren (original index 1)
    if (displayedIndex === 1) return paused[2]; // Derek (original index 2)
    return paused[0]; // Sarah (original index 0)
  };

  // Get the correct loaded state for displayed index
  const getLoadedState = (displayedIndex: number) => {
    if (!isMobile) return videosLoaded[displayedIndex];
    
    if (displayedIndex === 0) return videosLoaded[1]; // Lauren
    if (displayedIndex === 1) return videosLoaded[2]; // Derek
    return videosLoaded[0]; // Sarah
  };

  // Scroll to center video by default on desktop
  useEffect(() => {
    if (!scrollRef.current) return;
    if (!isMobile) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: clientWidth, // center video
        behavior: "instant",
      });
    } else {
      // Scroll to start on mobile to show video first
      scrollRef.current.scrollTo({
        left: 0,
        behavior: "instant",
      });
    }
  }, [isMobile]);

  // Handle scroll events to update current slide indicator
  useEffect(() => {
    if (!isMobile) return;
    
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, clientWidth } = scrollRef.current;
      const slideIndex = Math.round(scrollLeft / clientWidth);
      setCurrentSlide(slideIndex);
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -clientWidth : clientWidth,
      behavior: "smooth",
    });
  };

  const togglePlay = (displayedIndex: number) => {
    // Get the original index for the paused state
    let originalIndex = displayedIndex;
    if (isMobile) {
      if (displayedIndex === 0) originalIndex = 1; // Lauren
      else if (displayedIndex === 1) originalIndex = 2; // Derek
      else originalIndex = 0; // Sarah
    }
    
    const video = videoRefs.current[originalIndex];
    if (!video) return;

    if (video.paused) {
      video.play().catch(console.error);
      setPaused((prev) => prev.map((p, i) => (i === originalIndex ? false : p)));
    } else {
      video.pause();
      setPaused((prev) => prev.map((p, i) => (i === originalIndex ? true : p)));
    }
  };

  // Helper function to get card size classes
  const getCardSizeClasses = (displayedIndex: number) => {
    if (isMobile) {
      return "w-80 sm:w-96 lg:w-auto"; // Same size on mobile
    }
    
    // Desktop sizing
    const originalIndex = displayedIndex;
    if (originalIndex === 1) { // Lauren T. video card
      return "lg:w-auto lg:h-[580px] transform lg:scale-110"; // Larger center card
    } else { // Sarah and Derek cards
      return "lg:w-auto lg:h-[480px] transform lg:scale-90"; // Smaller side cards
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden bg-white dark:bg-white">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Scrollable row */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 sm:px-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:items-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          >
            {displayedReviews.map((review, displayedIndex) => {
              // Get the original index for video refs
              let originalIndex = displayedIndex;
              if (isMobile) {
                if (displayedIndex === 0) originalIndex = 1; // Lauren
                else if (displayedIndex === 1) originalIndex = 2; // Derek
                else originalIndex = 0; // Sarah
              }
                
              return (
                <div
                  key={displayedIndex}
                  className={`relative bg-white dark:bg-white backdrop-blur-sm rounded-2xl flex-shrink-0 snap-center transition-transform z-10 ${getCardSizeClasses(displayedIndex)}`}
                >
                  {/* Media */}
                  <div
                    className="relative h-[420px] w-full lg:h-full group cursor-pointer rounded-2xl overflow-hidden"
                    onClick={() => review.video && togglePlay(displayedIndex)}
                  >
                    {review.video ? (
                      <>
                        <video
                          ref={(el) => (videoRefs.current[originalIndex] = el)}
                          src={review.video}
                          loop
                          playsInline
                          preload="auto"
                          muted
                          className="h-full w-full object-cover"
                          onLoadedData={() => {
                            setVideosLoaded(prev => prev.map((loaded, i) => i === originalIndex ? true : loaded));
                          }}
                          onError={() => {
                            setVideoErrors(prev => prev.map((error, i) => i === originalIndex ? true : error));
                          }}
                        />
                        
                        {/* Loading skeleton */}
                        {!getLoadedState(displayedIndex) && (
                          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-200 animate-pulse flex items-center justify-center">
                            <div className="text-gray-400">Loading video...</div>
                          </div>
                        )}
                      </>
                    ) : (
                      <Image 
                        src={review.image} 
                        alt={review.name} 
                        fill 
                        className="object-cover"
                        priority={displayedIndex === 0} // Prioritize first image
                      />
                    )}

                    {/* Smaller, more transparent Play/Pause button */}
                    {review.video && getLoadedState(displayedIndex) && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/70 dark:bg-white/70 rounded-full p-2 sm:p-3 shadow-sm backdrop-blur-sm">
                          {getPausedState(displayedIndex) ? (
                            <Play className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-700 fill-gray-700 dark:fill-gray-700 ml-0.5" />
                          ) : (
                            <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-700 fill-gray-700 dark:fill-gray-700" />
                          )}
                        </div>
                      </div>
                    )}

                    {/* White gradient overlay at the bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white dark:from-white via-white/90 dark:via-white/90 to-transparent" />
                  </div>

                  {/* Text & name */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end rounded-2xl">
                    <p className="text-base text-black dark:text-black leading-snug mb-2 text-left font-normal not-italic">{review.text}</p>
                    <span className="text-sm text-gray-600 dark:text-gray-600 self-end font-normal not-italic">— {review.name}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation arrows - REMOVED */}
        </div>

        {/* Mobile navigation dots with proper active state */}
        <div className="flex justify-center mt-6 lg:hidden">
          {displayedReviews.map((_, index) => (
            <div 
              key={index} 
              className={`w-2 h-2 rounded-full mx-1 transition-colors ${
                currentSlide === index ? 'bg-[#cf21c3]' : 'bg-gray-300 dark:bg-gray-300'
              }`} 
            />
          ))}
        </div>
      </div>

      {/* Hidden preload videos */}
      <div className="hidden">
        {reviews.map((review, index) => (
          review.video && (
            <video
              key={index}
              preload="auto"
              src={review.video}
              muted
            />
          )
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}