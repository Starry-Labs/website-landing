import React from "react";
import { motion } from "framer-motion";
import DownloadButtons from "./DownloadButtons";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0f0e33] opacity-90"></div>
        <div className="absolute inset-0 bg-stars-pattern opacity-70"></div>
      </div>

      {/* Animated planets */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large planet */}
        <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-gradient-to-br from-purple-900/30 to-indigo-900/30 blur-2xl opacity-50"></div>

        {/* Small planet */}
        <div className="absolute left-20 bottom-10 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-900/30 to-blue-900/30 blur-xl opacity-40"></div>

        {/* Orbital rings */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500/10 rounded-full"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-indigo-500/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Begin Your Cosmic Journey Today
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/80">
            Unlock the secrets of the stars and discover the profound insights
            about yourself and your relationships
          </p>

          <div className="flex flex-col items-center space-y-8">
            <DownloadButtons />

            <div className="text-sm text-white/60 max-w-xl">
              Available on iOS, Android, and Telegram. Your astrological
              insights are just a download away.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
