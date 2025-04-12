import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Feature } from "../types/index";

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: feature.id * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-gradient-to-br from-[#1a1950] to-[#141339] rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-300"
    >
      <div className="mb-4 p-3 rounded-xl bg-purple-900/30 inline-block">
        <Image src={feature.icon} alt={feature.title} width={32} height={32} />
      </div>

      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

      <p className="text-white/80">{feature.description}</p>
    </motion.div>
  );
};

export default FeatureCard;
