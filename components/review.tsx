"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Sarah, Kickflip",
    video: "/images/review1.mp4",
    text: "Amazing platform that changed how we work.",
  },
  {
    name: "Martha, Unicell",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    text: "A seamless experience from start to finish.",
  },
  {
    name: "Victor, Horizonte",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    text: "Reliable and super easy to use daily.",
  },
];

export default function ReviewSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -clientWidth : clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="max-w-7xl mx-auto py-20 px-6 text-center relative">
      {/* Heading */}
      <p
        role="heading"
        className="text-4xl mb-2 tracking-tight font-normal not-italic"
      >
        See what all the talk is about!
      </p>
      <p className="text-gray-500 mb-16 text-lg font-normal not-italic">
        Transformative Client experience from all around the globe
      </p>

      {/* Scrollable row for mobile */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-12 lg:overflow-visible"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-xl flex-shrink-0 snap-center w-80 sm:w-96 lg:w-auto transition-transform ${
                index === 1 ? "scale-105 lg:h-[560px]" : "lg:h-[520px]"
              }`}
            >
              {/* Media */}
              <div className="relative h-[420px] w-full lg:h-full">
                {review.video ? (
                  <video
                    src={review.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={review.image!}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                )}
                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
              </div>

              {/* Overlayed text & name */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                <p className="text-base text-black leading-snug mb-2 text-left font-normal not-italic">
                  {review.text}
                </p>
                <span className="text-sm text-gray-600 self-end font-normal not-italic">
                  — {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows (hidden on mobile) */}
        <button
          onClick={() => scroll("left")}
          className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
