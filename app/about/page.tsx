"use client";

import React, { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white text-[#E75B34]">
      {/* Header Section */}
      <header className="fixed w-full bg-white shadow-lg z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9"
                alt="Company Logo"
                className="h-10 w-10 object-contain"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9";
                }}
              />
              <span className="ml-2 text-xl font-bold">TechCorp</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-[#E75B34] transition-colors">
                About Us
              </a>
              <a href="#" className="hover:text-[#E75B34] transition-colors">
                Solutions
              </a>
              <a href="#" className="hover:text-[#E75B34] transition-colors">
                Pricing
              </a>
              <a href="#" className="hover:text-[#E75B34] transition-colors">
                Resources
              </a>
              <button className="bg-[#E75B34] hover:bg-[#d94e28] px-6 py-2 rounded-full transition-colors text-white">
                Contact Us
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-2xl" onClick={toggleMenu}>
              {/* {isMenuOpen ? <FiX /> : <FiMenu />} */}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="hover:text-[#E75B34] transition-colors">
                  Home
                </a>
                <a href="#" className="hover:text-[#E75B34] transition-colors">
                  Features
                </a>
                <a href="#" className="hover:text-[#E75B34] transition-colors">
                  Pricing
                </a>
                <a href="#" className="hover:text-[#E75B34] transition-colors">
                  Contact
                </a>
                <button className="bg-[#E75B34] hover:bg-[#d94e28] px-6 py-2 rounded-full transition-colors text-white">
                  Start Free Trial
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Section */}
      <main className="pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Column - Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/HomePage.png"
                alt="Smartphone with notification"
                className="w-full h-auto rounded-lg shadow-2xl"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9";
                }}
              />
            </div>

            {/* Right Column - Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                You Create the Vibe We Handle the Chaos!
              </h1>
              <p className="text-lg text-[#E75B34]">
                Flexible enough for any space, powerful enough to scale with you
                no matter how big you get, our platform has everything you need
                to streamline operations and enhance member experience.
              </p>
              <button className="bg-[#E75B34] hover:bg-[#d94e28] px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105 text-white">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className="bg-[#E75B34] w-full h-190">
        <div className="flex flex-col items-center justify-between">
          <h2 className="text-[#FFFFFF] text-4xl md:text-5xl font-bold leading-tight ml-3">
            We're in the buisness of
          </h2>
          <h2 className="text-[#58D1D8] text-4xl md:text-5xl font-bold leading-tight m-3">
            growing buisness
          </h2>
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-between">
          <div className="ml-20 gap-0.5">
            <h1 className="text-[#141212] text-8xl font-bold">78%</h1>
            <div className="bg-[#125EBB] w-44 h-3"></div>
            <p className="text-[#141212] text-2xl">
              Property owners say automated rent collection reduces late
              payments significantly
            </p>
          </div>
          <div className="relative top-60">
            <h1 className="text-[#ffffff] text-8xl">91%</h1>
            <div className="bg-[#125EBB] w-49 h-3"></div>
            <p className="text-[#ffffff] text-2xl">
              Tenants prefer digital onboarding over manual paperwork.
            </p>
          </div>
          <div>
            <h1 className="text-[#ffffff] text-8xl">40hrs</h1>
            <div className="bg-[#125EBB] w-64 h-3"></div>
            <p className="text-[#ffffff] text-2xl">
              The average number of hours saved monthly with automated property
              management
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
