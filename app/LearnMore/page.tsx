"use client";
import React from "react";
import FeatureCard from "../components/FeatureCard";
import ContactSection from "../components/GetInTouchSection";

// Hero section content
const heroContent = {
  badge: "Specifically Designed for Coworking Spaces",
  title: {
    main: "Automate",
    highlight: "payments, track dues,",
    continuation: "and remove the headaches from billing.",
  },
  infoBox: {
    text: "Collecting rent or booking fees can often lead to missed payments, delayed reminders, and manual follow-ups. Our platform helps you stay on top of your finances — without needing to micromanage them.",
    ctaText: "Book A Demo",
    ctaIcon: "→",
  },
};

// interface FeatureCardProps {
//   title: string;
//   description: string;
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
//   return (
//     <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
//       <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
//       <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
//     </div>
//   );
// };

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Choose how bookings happen:",
      description:
        "Let members book directly, or keep it admin-only. You can also mix both, depending on the room or resource.",
    },
    {
      title: "Block off unavailable days:",
      description:
        "Easily block bookings on holidays, renovation days, or any time your space isn't open.",
    },
    {
      title: "Sync with Google Calendar:",
      description:
        "All bookings can connect with Google Calendar to keep everyone in sync, without double entries.",
    },
    {
      title: "Let members book on their own:",
      description:
        "Through the Members' Portal, people can easily book desks or rooms anytime—no need to ask the admin.",
    },
    {
      title: "Hot desk bookings made simple:",
      description:
        "Members can see which desks are available in real-time and grab any open spot that fits their schedule.",
    },
    {
      title: "Cash Flow Prediction Agent",
      description: "Predict cash flow trends to optimize decisions.",
    },
  ];

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
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center">
                    {heroContent.infoBox.ctaText}
                    <span className="ml-2">{heroContent.infoBox.ctaIcon}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Existing Features Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row items-start justify-between mb-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                  Here's what you can do:
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
                    keeps track of who's using what, when it's available, and
                    how it's being used—so everything just works, and your team
                    can focus on what really matters.
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform">
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
      <ContactSection></ContactSection>
    </>
  );
};

export default FeaturesSection;
