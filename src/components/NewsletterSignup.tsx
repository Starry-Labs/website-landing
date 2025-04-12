import React, { useState } from "react";
import { motion } from "framer-motion";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setIsSubmitting(true);

    // Simulate API call to subscribe
    setTimeout(() => {
      console.log("Email submitted:", email);
      setIsSubmitting(false);
      setSubmitted(true);
      setEmail("");
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          Stay in Cosmic Alignment
        </h2>
        <p className="text-lg opacity-80 mb-8">
          Join our newsletter for astrological insights, app updates, and
          special offers
        </p>

        {submitted ? (
          <div className="bg-purple-900/30 rounded-xl p-8 max-w-md mx-auto">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Stars Aligned!</h3>
            <p className="opacity-80">
              Thank you for joining our cosmic community. Check your inbox for a
              welcome message with your special offer.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-[#0f0e33] border border-purple-900/50 focus:border-purple-500 focus:ring focus:ring-purple-500/20 focus:outline-none text-white"
                required
              />
              {error && (
                <p className="mt-1 text-left text-sm text-red-400">{error}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg text-white font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        )}

        <p className="mt-4 text-sm opacity-60">
          We respect your privacy and will never share your information.
        </p>
      </motion.div>
    </div>
  );
};

export default NewsletterSignup;
