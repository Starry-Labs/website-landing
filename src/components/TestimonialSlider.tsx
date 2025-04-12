import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonial } from "../types";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);

    return () => clearTimeout(timer);
  }, [currentIndex, testimonials.length]);

  const navigate = (newIndex: number) => {
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div id="testimonials" className="relative max-w-4xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 blur-3xl -z-10 rounded-full"></div>

      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="bg-[#1a1950] rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="flex flex-col">
              {/* Quote marks */}
              <div className="text-6xl text-purple-400 opacity-20 leading-none mb-4">
                &quot;
              </div>

              {/* Testimonial text */}
              <p className="text-lg md:text-xl mb-8 text-white/90 italic">
                {testimonials[currentIndex].quote}
              </p>

              {/* Author info */}
              <div className="flex items-center mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <div className="font-medium">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-white/70">
                    {testimonials[currentIndex].title}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => navigate(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-purple-500 scale-110"
                : "bg-purple-900/50 hover:bg-purple-700/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
