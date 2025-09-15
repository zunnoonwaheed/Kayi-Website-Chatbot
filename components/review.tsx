"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sarah, Kickflip",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    text: "Amazing platform that changed how we work.",
  },
  {
    name: "Lauren T.",
    video: "/images/review1.mp4",
    text: "Their team delivers ahead of deadlines, and makes things easy.",
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
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [paused, setPaused] = useState<boolean[]>(reviews.map(() => true));

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -clientWidth : clientWidth,
      behavior: "smooth",
    });
  };

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
      setPaused((prev) => prev.map((p, i) => (i === index ? false : p)));
    } else {
      video.pause();
      setPaused((prev) => prev.map((p, i) => (i === index ? true : p)));
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/6 via-pink-500/3 to-[#cf21c3]/8" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#cf21c3]/4 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-bl from-[#cf21c3]/3 via-transparent to-pink-500/6" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/4 via-transparent to-[#cf21c3]/5" />

        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#cf21c3]/12 via-pink-500/6 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#cf21c3]/12 via-pink-500/6 to-transparent" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#cf21c3]/10 via-pink-500/5 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#cf21c3]/10 via-pink-500/5 to-transparent" />

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#cf21c3]/8 to-transparent"
          animate={{ x: ["-50%", "50%"], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-l from-transparent via-pink-500/6 to-transparent"
          animate={{ x: ["50%", "-50%"], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 8 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#cf21c3]/5 to-transparent"
          animate={{ y: ["-30%", "30%"], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 15 }}
        />

        <motion.div
          className="absolute top-1/6 left-1/6 w-96 h-96 bg-gradient-radial from-[#cf21c3]/15 via-[#cf21c3]/10 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5], x: [0, 60, 0], y: [0, -40, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/6 right-1/6 w-[32rem] h-[32rem] bg-gradient-radial from-[#cf21c3]/12 via-[#cf21c3]/8 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.4, 0.7, 0.4], x: [0, -80, 0], y: [0, 50, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 7 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-[#cf21c3]/6 via-[#cf21c3]/4 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], rotate: [0, 180, 360] }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 12 }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#cf21c3]/3 via-transparent to-pink-500/4 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/2 via-transparent to-[#cf21c3]/3 mix-blend-screen opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-4 text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          Success In Action
          </motion.h2>
          <motion.p
  className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  Meet the clients who <span className="font-bold">stopped</span> worrying about their digital projects and started focusing on what matters most - <span className="font-bold">growing their business</span>
</motion.p>

        </motion.div>

        {/* Scrollable row */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 sm:px-0 lg:grid lg:grid-cols-3 lg:gap-12 lg:overflow-visible"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`relative bg-white/80 backdrop-blur-sm rounded-2xl flex-shrink-0 snap-center w-80 sm:w-96 lg:w-auto transition-transform ${
                  index === 1 ? "lg:h-[560px] transform lg:scale-105 z-10" : "lg:h-[520px]"
                }`}
              >
                {/* Media */}
                <div
                  className="relative h-[420px] w-full lg:h-full group cursor-pointer rounded-2xl overflow-hidden"
                  onClick={() => review.video && togglePlay(index)}
                >
                  {review.video ? (
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={review.video}
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

                  {/* Play/Pause button overlay - iPhone style */}
                  {review.video && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`bg-gray-800/90 rounded-full p-3 backdrop-blur-sm transition-opacity duration-300 ${paused[index] ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                        {paused[index] ? (
                          <Play className="w-6 h-6 text-white fill-white ml-1" />
                        ) : (
                          <Pause className="w-6 h-6 text-white fill-white" />
                        )}
                      </div>
                    </div>
                  )}

                  {/* White gradient overlay at the bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white via-white/90 to-transparent" />
                </div>

                {/* Text & name */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end rounded-2xl">
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

          {/* Navigation arrows */}
          <button
            onClick={() => scroll("left")}
            className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile navigation dots - Changed to #cf21c3 color */}
        <div className="flex justify-center mt-6 lg:hidden">
          {reviews.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-[#cf21c3] mx-1" />
          ))}
        </div>
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