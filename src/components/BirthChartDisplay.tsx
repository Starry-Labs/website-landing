import React from "react";
import { motion } from "framer-motion";
import { BirthChart } from "../types";

interface BirthChartDisplayProps {
  chart: BirthChart;
}

const BirthChartDisplay: React.FC<BirthChartDisplayProps> = ({ chart }) => {
  return (
    <div className="space-y-8">
      {/* Chart Wheel Visualization */}
      <div className="relative aspect-square max-w-xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-xl"></div>

        <div className="relative w-full h-full">
          {/* Outer circle */}
          <div className="absolute inset-0 border-2 border-purple-600/30 rounded-full"></div>

          {/* Middle circle */}
          <div className="absolute inset-8 border border-purple-600/20 rounded-full"></div>

          {/* Inner circle */}
          <div className="absolute inset-16 border border-purple-600/10 rounded-full"></div>

          {/* Center */}
          <div className="absolute inset-24 bg-[#0f0e33]/80 rounded-full backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-medium">Your Chart</div>
              <div className="text-sm text-white/70">Cosmic Blueprint</div>
            </div>
          </div>

          {/* Planet Positions (would be dynamically placed in a real app) */}
          <motion.div
            className="absolute w-6 h-6 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/20"
            style={{ top: "20%", left: "75%" }}
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="absolute -top-8 text-sm font-medium">Sun</span>
          </motion.div>

          <motion.div
            className="absolute w-6 h-6 bg-blue-300 rounded-full shadow-lg shadow-blue-300/20"
            style={{ top: "75%", left: "30%" }}
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="absolute -top-8 text-sm font-medium">Moon</span>
          </motion.div>

          <motion.div
            className="absolute w-5 h-5 bg-pink-400 rounded-full shadow-lg shadow-pink-400/20"
            style={{ top: "40%", left: "20%" }}
            animate={{ scale: [0.92, 1.08, 0.92] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="absolute -top-8 text-sm font-medium">Venus</span>
          </motion.div>

          <motion.div
            className="absolute w-5 h-5 bg-red-400 rounded-full shadow-lg shadow-red-400/20"
            style={{ top: "60%", left: "75%" }}
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="absolute -top-8 text-sm font-medium">Mars</span>
          </motion.div>

          <motion.div
            className="absolute w-4 h-4 bg-purple-400 rounded-full shadow-lg shadow-purple-400/20"
            style={{ top: "30%", left: "40%" }}
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="absolute -top-8 text-sm font-medium">Mercury</span>
          </motion.div>
        </div>
      </div>

      {/* Chart Details */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ChartCard title="Sun Sign" value={chart.sun} />
          <ChartCard title="Moon Sign" value={chart.moon} />
          <ChartCard title="Ascending" value={chart.ascendant} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <ChartCard title="Venus" value={chart.venus} />
          <ChartCard title="Mars" value={chart.mars} />
          <ChartCard title="Mercury" value={chart.mercury} />
          <ChartCard title="Jupiter" value={chart.jupiter} />
        </div>
      </div>

      {/* Interpretation */}
      <div className="bg-[#1a1950] rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4">
          Your Chart Interpretation
        </h3>
        <div className="prose prose-invert max-w-none">
          <p>{chart.interpretation}</p>
        </div>
      </div>

      {/* Key Aspects */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Key Planetary Aspects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chart.aspects.map((aspect) => (
            <div
              key={aspect.id}
              className="bg-[#1a1950]/60 rounded-lg p-4 border border-purple-900/20"
            >
              <div className="flex items-center mb-2">
                <span className="font-medium">{aspect.planet1}</span>
                <span className="mx-2 text-purple-400">{aspect.aspect}</span>
                <span className="font-medium">{aspect.planet2}</span>
              </div>
              <p className="text-white/80 text-sm">{aspect.influence}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper component for chart data cards
const ChartCard: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => {
  return (
    <div className="bg-[#1a1950]/60 rounded-lg p-4 text-center border border-purple-900/20">
      <div className="text-sm text-white/70 mb-1">{title}</div>
      <div className="font-medium text-lg">{value}</div>
    </div>
  );
};

export default BirthChartDisplay;
