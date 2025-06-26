"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import FeatureCard from "../components/FeatureCard";
import ContactSection from "../components/GetInTouchSection";
import {
  heroContentVariations,
  featureVariations,
  HeroContent,
  Feature,
} from "../constants/heroContent";

// Loading component for the suspense boundary
const LoadingFallback: React.FC = () => (
  <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

// Separate component that uses useSearchParams
const FeaturesContent: React.FC = () => {
  const searchParams = useSearchParams();
  const contentId = searchParams.get("contentId") || "1";

  // Calendly URL - Replace with your actual Calendly link
  const CALENDLY_URL = "https://calendly.com/rashmitatanwar2";

  // Function to open Calendly in new tab
  const openCalendly = (): void => {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  // Get the hero content based on the URL parameter, fallback to "1" if not found
  const heroContent: HeroContent =
    heroContentVariations[contentId] || heroContentVariations["1"];

  // Get the features based on the URL parameter, fallback to "1" if not found
  const features: Feature[] =
    featureVariations[contentId] || featureVariations["1"];

  // Handle button clicks based on button text
  const handleButtonClick = (buttonText: string): void => {
    if (
      buttonText.toLowerCase().includes("demo") ||
      buttonText.toLowerCase().includes("subscription") ||
      buttonText.toLowerCase().includes("platform")
    ) {
      openCalendly();
    } else {
      // Handle other button actions if needed
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Hero Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start justify-between">
              {/* Left side - Main content */}
              <div className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-12">
                {/* Badge */}
                <div className="inline-block mb-6">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    {heroContent.badge}
                  </span>
                </div>

                {/* Main heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                  <span className="text-gray-900">
                    {heroContent.title.main}
                  </span>
                  <br />
                  <span className="text-blue-600">
                    {heroContent.title.highlight}
                  </span>
                  <br />
                  <span className="text-gray-900">
                    {heroContent.title.continuation}
                  </span>
                </h1>
              </div>

              {/* Right side - Info box */}
              <div className="lg:w-1/3">
                <div className="bg-blue-100 rounded-2xl p-6 max-w-sm">
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {heroContent.infoBox.text}
                  </p>
                  <button
                    onClick={() =>
                      handleButtonClick(heroContent.infoBox.ctaText)
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center"
                  >
                    {heroContent.infoBox.ctaText}
                    <span className="ml-2">{heroContent.infoBox.ctaIcon}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row items-start justify-between mb-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                  Here&apos;s what you can do:
                </h2>
                {/* Horizontal line - 3px thick */}
                <div className="h-[1px] bg-blue-500 w-full mt-4"></div>
              </div>
              <div className="lg:w-1/2 lg:pl-12">
                <div className="flex items-start">
                  {/* Vertical line with circle at the end */}
                  <div className="relative bg-blue-500 mr-6 flex-shrink-0">
                    <div className="w-[3px] bg-blue-500 h-full absolute left-0"></div>
                    {/* Circle at the bottom of the vertical line */}
                    <div className="w-4 h-4 bg-blue-500 rounded-full absolute bottom-0 -left-[7px]"></div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Think of it like giving your space a smart assistant: It
                    keeps track of who&apos;s using what, when it&apos;s
                    available, and how it&apos;s being used—so everything just
                    works, and your team can focus on what really matters.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() => handleButtonClick("Find your subscription")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
              >
                Find your subscription
              </button>
            </div>

            {/* Bottom Section */}
            <div className="text-center mt-16">
              <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Ready to ditch the{" "}
                <span className="text-blue-600">spreadsheets</span>
                <span className="text-blue-500">?</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

// Main component wrapped in Suspense
const FeaturesSection: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <FeaturesContent />
    </Suspense>
  );
};

export default FeaturesSection;
