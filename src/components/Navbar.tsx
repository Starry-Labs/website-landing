"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-[#0f0e33]/90 backdrop-blur-md shadow-lg"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="cursor-pointer">
              <Image
                src="/images/starry-logo.svg"
                alt="Starry Logo"
                width={120}
                height={40}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="nav-link">
              Features
            </Link>
            <Link href="#marks-chart" className="nav-link">
              Marks Chart
            </Link>
            <Link href="#birth-chart" className="nav-link">
              Birth Chart
            </Link>
            <Link href="#testimonials" className="nav-link">
              Testimonials
            </Link>
            <Link
              href="#download"
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full transition-all"
            >
              Download
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f0e33] border-t border-purple-900/30 mt-2">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-4">
              <Link
                href="#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2"
              >
                Features
              </Link>
              <Link
                href="#marks-chart"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2"
              >
                Marks Chart
              </Link>
              <Link
                href="#birth-chart"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2"
              >
                Birth Chart
              </Link>
              <Link
                href="#testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2"
              >
                Testimonials
              </Link>
              <Link
                href="#download"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-full text-center"
              >
                Download
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
