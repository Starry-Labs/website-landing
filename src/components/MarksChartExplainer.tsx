import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MarksChartExplainer: React.FC = () => {
  return (
    <div
      id="marks-chart"
      className="flex flex-col lg:flex-row items-center gap-12 py-8"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="lg:w-1/2"
      >
        <h2 className="text-3xl md:text-4xl font-serif mb-6">
          What is a Marks Chart?
        </h2>

        <div className="prose prose-lg prose-invert opacity-90 max-w-none">
          <p>
            The Marks Chart is a revolutionary approach to relationship
            astrology that goes beyond basic compatibility comparisons.
          </p>

          <p>
            Unlike traditional synastry that simply overlays two birth charts,
            the Marks Chart creates a unique third chart that represents the
            relationship itself as a living entity with its own characteristics
            and evolution.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">
            Key Benefits of Marks Chart Analysis:
          </h3>

          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✦</span>
              <span>Reveals deeper emotional patterns between individuals</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✦</span>
              <span>
                Identifies potential growth areas and challenges in the
                relationship
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✦</span>
              <span>
                Provides guidance on communication styles and potential
                conflicts
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✦</span>
              <span>
                Analyzes relationship progression and timing of significant
                developments
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✦</span>
              <span>
                Works for all relationship types: romantic, friendship,
                professional, and family
              </span>
            </li>
          </ul>

          <p className="mt-6">
            Starry is the only app that implements the complete Marks Chart
            methodology, with knowledge from professional astrologers and our
            community built into our AI system.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="lg:w-1/2"
      >
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-xl"></div>
          <div className="relative bg-[#1a1950] rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-square relative">
              <Image
                src="/images/marks-chart-example.png"
                alt="Example of a Marks Chart with planetary aspects visualization"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Sample Marks Chart</h3>
              <p className="text-white/80">
                This visualization shows how the Marks Chart identifies key
                relationship dynamics through planetary aspects and house
                placements.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MarksChartExplainer;
