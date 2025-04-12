"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-gradient-to-br from-[#1a1950] to-[#141339] rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-300"
    >
      <div className="mb-4 p-3 rounded-xl bg-purple-900/30 inline-block">
        {/* <Icon className="w-6 h-6 text-purple-400" /> */}
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      <p className="text-white/80">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
