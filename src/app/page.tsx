"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Moon, Sun, Network, MessageCircle } from "lucide-react";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BirthChartForm from "@/components/BirthChartForm";
import FeatureCard from "@/components/FeatureCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import DownloadButtons from "@/components/DownloadButtons";
import MarksChartExplainer from "@/components/MarksChartExplainer";
import NewsletterSignup from "@/components/NewsletterSignup";
import HeaderAnimation from "@/components/HeaderAnimation";
import BirthChartDisplay from "@/components/BirthChartDisplay";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

// Types and Data
import { Testimonial } from "@/types";
import { sampleBirthChart } from "@/data/sampleBirthChart";

// Feature data with Lucide icons
const features = [
  {
    id: 1,
    title: "AI-Powered Natal Chart Analysis",
    description:
      "Comprehensive personal chart analysis incorporating planetary aspects, trained on verified astrological data.",
    icon: <Moon className="w-10 h-10 text-blue-400" />,
  },
  {
    id: 2,
    title: "Decentralized Knowledge Platform",
    description:
      "Community-contributed intelligence drawing from diverse astrological traditions with transparent validation.",
    icon: <Network className="w-10 h-10 text-green-400" />,
  },
  {
    id: 3,
    title: "Advanced Relationship Analysis",
    description:
      "Marks chart implementation for analyzing relationship dynamics across friendship, romantic, and professional contexts.",
    icon: <Sun className="w-10 h-10 text-orange-400" />,
  },
  {
    id: 4,
    title: "AI Astrology Guidance",
    description:
      "Personal agent built on a decentralized knowledge base providing context-aware astrological insights.",
    icon: <MessageCircle className="w-10 h-10 text-yellow-400" />,
  },
  // {
  //   id: 5,
  //   title: "Privacy Protection",
  //   description:
  //     "Birth data is highly sensitive information. Our zkSBT technology ensures your personal details remain protected.",
  //   icon: ShieldCheck,
  // },
];

const appScreenshots = [
  {
    id: 1,
    title: "Personal Chart Analysis",
    image: "/screenshots/chart-analysis.png",
    alt: "Starry app showing a personal natal chart analysis",
  },
  {
    id: 2,
    title: "Relationship Compatibility",
    image: "/screenshots/relationship.png",
    alt: "Starry app showing relationship compatibility analysis",
  },
  {
    id: 3,
    title: "AI Astrology Guidance",
    image: "/screenshots/ai-guidance.png",
    alt: "Starry app showing AI conversation interface",
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Starry has completely transformed how I understand my relationships. The Marks Chart feature gave me insights I've never seen from other apps.",
    name: "Jordan K.",
    title: "Astrology Enthusiast",
    avatar: "/testimonials/avatar1.jpg",
  },
  {
    id: 2,
    quote:
      "The AI guidance is like having a personal astrologer in my pocket. It's scary accurate and I love how it respects my privacy.",
    name: "Mia L.",
    title: "Daily User",
    avatar: "/testimonials/avatar2.jpg",
  },
  {
    id: 3,
    quote:
      "As a professional astrologer, I'm impressed by the depth and accuracy of Starry's analysis. It's helping me serve my clients better.",
    name: "Raj P.",
    title: "Professional Astrologer",
    avatar: "/testimonials/avatar3.jpg",
  },
];

export default function Home() {
  const [showDemoChart, setShowDemoChart] = useState(false);

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeaderAnimation />

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          ></motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif font-light mb-6"
          >
            Your Personal AI Astrology Guide
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90"
          >
            Discover deeper insights into yourself and your relationships
            through decentralized, AI-powered astrological wisdom
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <DownloadButtons />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() =>
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="animate-bounce rounded-full p-2 bg-white bg-opacity-10 backdrop-blur-sm"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#0f0e33]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Cosmic Intelligence at Your Fingertips
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
              Discover how Starry combines ancient astrological wisdom with
              cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* More sections remain the same... */}
      {/* Marks Chart Explanation Section */}
      <section className="py-20 bg-gradient-to-b from-[#0f0e33] to-[#151442]">
        <div className="container mx-auto px-4">
          <MarksChartExplainer />
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-20 bg-[#151442]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Experience the Starry App
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
              Intuitive interface designed to bring cosmic wisdom to your daily
              life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appScreenshots.map((screenshot) => (
              <div
                key={screenshot.id}
                className="bg-[#1a1950] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-[500px]">
                  <Image
                    src={screenshot.image}
                    alt={screenshot.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {screenshot.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Birth Chart Generator Section */}
      <section
        id="birth-chart"
        className="py-20 bg-gradient-to-b from-[#151442] to-[#0f0e33]"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Discover Your Cosmic Blueprint
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
              Get a glimpse of what Starry can reveal about you with this basic
              birth chart reading
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 bg-[#1a1950] rounded-2xl p-8 shadow-xl">
                <BirthChartForm onSubmit={() => setShowDemoChart(true)} />
              </div>

              <div className="lg:col-span-3">
                {showDemoChart ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#1a1950] rounded-2xl p-8 shadow-xl h-full"
                  >
                    <BirthChartDisplay chart={sampleBirthChart} />
                    <div className="mt-8 text-center">
                      <p className="text-white/80 mb-4">
                        For a complete analysis, download the Starry app or
                        connect with our Telegram bot!
                      </p>
                      <DownloadButtons />
                    </div>
                  </motion.div>
                ) : (
                  <div className="bg-[#1a1950] rounded-2xl p-8 shadow-xl h-full flex flex-col items-center justify-center text-center">
                    <div className="text-6xl mb-6 opacity-20">✨</div>
                    <h3 className="text-2xl font-serif mb-3">
                      Your Cosmic Blueprint Awaits
                    </h3>
                    <p className="text-white/70 max-w-md">
                      Enter your birth details to discover insights about your
                      personality, strengths, challenges, and cosmic purpose.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#0f0e33]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              What Our Users Say
            </h2>
          </div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Newsletter Signup Section */}
      <section className="py-20 bg-gradient-to-b from-[#0f0e33] to-[#151442]">
        <div className="container mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>

      <Footer />
    </main>
  );
}
