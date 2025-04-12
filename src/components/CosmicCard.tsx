import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface CosmicCardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  delay?: number;
}

const CosmicCard: React.FC<CosmicCardProps> = ({
  title,
  children,
  icon,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-gradient-to-br from-[#1a1950] to-[#141339] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-md"></div>

        <div className="relative p-6">
          {/* Header with icon */}
          <div className="flex items-center space-x-3 mb-4">
            {icon && (
              <div className="p-2 bg-purple-900/30 rounded-lg text-purple-400">
                {icon}
              </div>
            )}
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>

          {/* Content */}
          <div className="text-white/80 space-y-4">{children}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default CosmicCard;
