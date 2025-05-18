"use client";

import React, { useState } from "react";
import "./page.css";
import PricingSection from "../components/PricingSection";
import CustomSolutionSection from "../components/CustomSolutions";
// import { FiMenu, FiX } from "react-icons/fi";

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative min-h-screen text-[#E75B34] custom-gradient">
      {/* Header Section */}
      <header className="w-full z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center h-[60px] w-[160px] mt-2.5">
              <img
                src="/CompanyLogo.png"
                alt="Company Logo"
                className="object-contain"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9";
                }}
              />
              {/* <span className="ml-2 text-xl font-bold">CoSync</span> */}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-[#125EBB] font-bold transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-[#125EBB] font-bold transition-colors"
              >
                Solutions
              </a>
              <a
                href="#"
                className="text-[#125EBB] font-bold transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-[#125EBB] font-bold transition-colors"
              >
                Resources
              </a>
              <button className="dark-gradient  px-6 py-2 rounded-full transition-colors text-white">
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
      <main className="">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Column - Image */}
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-[#18191a] text-4xl md:text-5xl font-bold leading-tight">
                You <span className="text-[#125EBB]">Create</span> the Vibe We
                Handle the <span className="text-[#125EBB]">Chaos!</span>
              </h1>
              <p className="text-lg text-[#125EBB]">
                Flexible enough for any space, powerful enough to scale with you
                no matter how big you get, our platform has everything you need
                to streamline operations and enhance member experience.
              </p>
              <button className="dark-gradient  px-6 py-2 rounded-full transition-colors text-white">
                SCHEDULE A DEMO
              </button>
            </div>

            {/* Right Column - Content */}
            <div className="w-[610px] h-[610px] md:w-1/2">
              <img
                src="/HomePageLatest.png"
                alt="Smartphone with notification"
                className="w-full h-auto rounded-lg shadow-2xl"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9";
                }}
              />
            </div>
          </div>
        </div>
      </main>

      <div className="custom-gradient w-full h-190">
        <div className="flex flex-col items-center justify-between">
          <h2 className="text-[#121212] text-4xl md:text-5xl font-bold leading-tight ml-3">
            We're in the buisness of
          </h2>
          <h2 className="text-[#125EBB] text-4xl md:text-5xl font-bold leading-tight m-3">
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
            <h1 className="text-[#100f0f] font-bold text-8xl">91%</h1>
            <div className="bg-[#125EBB] w-49 h-3"></div>
            <p className="text-[#0b0b0b] text-2xl">
              Tenants prefer digital onboarding over manual paperwork.
            </p>
          </div>
          <div>
            <h1 className="text-[#0a0909] font-bold text-8xl">40hrs</h1>
            <div className="bg-[#125EBB] w-64 h-3"></div>
            <p className="text-[#0a0a0a] text-2xl">
              The average number of hours saved monthly with automated property
              management
            </p>
          </div>
        </div>
      </div>

      {/* Platform offering container */}
      <div className="relative flex flex-col items-center w-full h-190 text-center gap-10">
        <h1 className="relative text-4xl md:text-5xl font-bold text-[#000000]">
          What does our{" "}
          <span className="text-4xl md:text-5xl font-bold text-[#125EBB] relative">
            platform
            <div className="absolute left-1/2 -translate-x-3/4 rounded-md bottom-0 mt-2 dark-gradient w-full h-1 md:h-1.5"></div>
          </span>{" "}
          offer?
        </h1>
        <div className="w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex flex-col items-center px-4 gap-10">
          <div className="relative flex flex-col w-full md:w-3/4 border-t-2 border-b-1 border-r-1 border-l-1 rounded-4xl px-4 border-t-gray-300 border-r-gray-300 border-l-gray-300 border-b-gray-100 min-h-[400px] md:min-h-[450px] container-gradient">
            {/* Content section - aligned to the left */}
            <h1 className="relative mt-2 font-bold text-2xl md:text-3xl bg-gradient-to-r from-[#000000] to-[#125EBB] bg-clip-text text-transparent mb-2">
              Space and Booking Management
            </h1>
            <div className="w-full md:w-3/4 flex flex-col items-start text-left p-2 md:p-4">
              <p className="text-black text-2xl md:text-xl mb-4">
                Let members book desks, meeting rooms,
                <br className="hidden md:block" />
                and private offices effortlessly,
                <br className="hidden md:block" />
                while you keep track of availability.
                <br className="hidden md:block" />
                Streamline your space utilization with powerful analytics.
              </p>
              <button className="dark-gradient rounded-2xl text-white px-3 py-2 md:px-4 md:py-2">
                <span>{"Learn More >>"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <PricingSection></PricingSection>
      <CustomSolutionSection></CustomSolutionSection>
    </div>
  );
};

export default LandingPage;
