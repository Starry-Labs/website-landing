import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PricingSection: React.FC = () => {
  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-[#151442] to-[#0f0e33]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif mb-6"
          >
            Choose Your Cosmic Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl max-w-3xl mx-auto opacity-80"
          >
            Flexible options to explore the stars your way
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1a1950] rounded-2xl overflow-hidden shadow-lg border border-purple-900/20"
          >
            <div className="p-8">
              <div className="text-purple-400 font-medium mb-3">Free</div>
              <h3 className="text-2xl font-semibold mb-5">Cosmic Explorer</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-white/60 ml-1">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                <FeatureItem>Basic natal chart analysis</FeatureItem>
                <FeatureItem>Daily horoscope</FeatureItem>
                <FeatureItem>Moon phase tracking</FeatureItem>
                <FeatureItem>Limited AI responses</FeatureItem>
                <FeatureItem isDisabled>
                  Advanced compatibility insights
                </FeatureItem>
                <FeatureItem isDisabled>
                  Marks chart for relationships
                </FeatureItem>
              </ul>

              <button className="w-full py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors font-medium">
                Get Started
              </button>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30 transform md:-translate-y-4"
          >
            <div className="bg-purple-500/20 py-2 text-center font-medium text-white">
              Most Popular
            </div>
            <div className="p-8">
              <div className="text-purple-400 font-medium mb-3">Premium</div>
              <h3 className="text-2xl font-semibold mb-5">Cosmic Guardian</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">$9.99</span>
                <span className="text-white/60 ml-1">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                <FeatureItem>Comprehensive natal chart</FeatureItem>
                <FeatureItem>Personalized daily guidance</FeatureItem>
                <FeatureItem>Full AI astrology assistant</FeatureItem>
                <FeatureItem>Relationship compatibility</FeatureItem>
                <FeatureItem>Marks chart analysis</FeatureItem>
                <FeatureItem>Transit forecasts</FeatureItem>
                <FeatureItem isDisabled>Progression charts</FeatureItem>
              </ul>

              <button className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all font-medium text-white shadow-lg">
                Start 7-Day Free Trial
              </button>
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#1a1950] rounded-2xl overflow-hidden shadow-lg border border-purple-900/20"
          >
            <div className="p-8">
              <div className="text-purple-400 font-medium mb-3">Pro</div>
              <h3 className="text-2xl font-semibold mb-5">Cosmic Oracle</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">$19.99</span>
                <span className="text-white/60 ml-1">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                <FeatureItem>Everything in Premium</FeatureItem>
                <FeatureItem>Advanced progression charts</FeatureItem>
                <FeatureItem>Relationship progression</FeatureItem>
                <FeatureItem>Lifetime NFT membership</FeatureItem>
                <FeatureItem>Priority AI responses</FeatureItem>
                <FeatureItem>Exclusive astrology events</FeatureItem>
              </ul>

              <button className="w-full py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors font-medium">
                Upgrade to Pro
              </button>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center text-white/60 max-w-2xl mx-auto">
          <p>
            All plans include our zkSBT privacy technology to protect your
            sensitive birth data. Subscriptions can be canceled anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  children: React.ReactNode;
  isDisabled?: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  children,
  isDisabled = false,
}) => {
  return (
    <li className={`flex items-start ${isDisabled ? "opacity-50" : ""}`}>
      <span className="mr-2 mt-1 text-sm">
        <Check className="w-4 h-4 text-purple-400" />
      </span>
      <span className="text-white/80">{children}</span>
    </li>
  );
};

export default PricingSection;
