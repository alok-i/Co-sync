"use client";

import React, { useState } from "react";

interface PricingPlan {
  tier: string;
  description: string;
  priceMonthly: string;
  priceYearly: string;
  isPopular?: boolean;
  buttonText: string;
  buttonVariant: "primary" | "secondary";
  features: {
    included: string[];
    addOns: string[];
  };
}

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  // Calendly URL - Replace with your actual Calendly link
  const CALENDLY_URL = "https://calendly.com/rashmitatanwar2";

  // Function to open Calendly in new tab
  const openCalendly = (): void => {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  const pricingPlans: PricingPlan[] = [
    {
      tier: "Essentials",
      description: "For small teams getting started with coworking tech",
      priceMonthly: "₹4,999",
      priceYearly: "₹4,999",
      buttonText: "Try it for free",
      buttonVariant: "secondary",
      features: {
        included: [
          "70 Active Users",
          "Room and desk bookings",
          "Billing & payments",
          "Reporting and analytics",
          "Email Support",
          "1 location",
        ],
        addOns: [
          "Additional Active Users - 50",
          "Visitor Management",
          "Maintenance Support",
        ],
      },
    },
    {
      tier: "Pro",
      description: "For scaling spaces needing automation and flexibility",
      priceMonthly: "₹6,999",
      priceYearly: "₹6,999",
      buttonText: "Book a demo",
      buttonVariant: "primary",
      features: {
        included: [
          "150 Active Users",
          "Push Notifications",
          "Event RSVP & Bulletin Board",
          "Slack & Google Calendar Integrations",
          "2 locations",
        ],
        addOns: [
          "Automations+",
          "Additional Active Users - 100",
          "Additional Locations - 1",
          "Visitor Management",
        ],
      },
    },
    {
      tier: "Grow",
      description: "Best suited for multi-location and high-traffic operators",
      priceMonthly: "₹12,999",
      priceYearly: "₹12,999",
      isPopular: true,
      buttonText: "Book a demo",
      buttonVariant: "primary",
      features: {
        included: [
          "250 Active Users",
          "Lower Active User fees",
          "Lower Location fees",
          "Unlimited leads",
          "Multi-location management - 5",
          "Visitor Management",
        ],
        addOns: [
          "Automations+",
          "Additional Active Users - 200",
          "Additional Locations - 4",
        ],
      },
    },
  ];

  // Handle button clicks based on button text
  const handleButtonClick = (buttonText: string): void => {
    if (buttonText.toLowerCase().includes("demo")) {
      openCalendly();
    } else {
      // Handle other button actions (like "Try it for free")
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold dark-gradient-text mb-4">
          Choose the plan
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold dark-gradient-text bg-clip-text text-transparent mb-6">
          that&apos;s right for you
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          No matter your business goals, we have the perfect plan for you
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center bg-white rounded-full p-1 shadow-lg">
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              isAnnual
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Annual Billing
            <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              Save 14%
            </span>
          </button>
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              !isAnnual
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Monthly billing
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg p-8 relative ${
              plan.isPopular ? "ring-2 ring-blue-500 scale-105" : ""
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {plan.tier}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-800">
                  {isAnnual ? plan.priceYearly : plan.priceMonthly}
                </span>
                <span className="text-gray-600">/mo</span>
              </div>

              <button
                onClick={() => handleButtonClick(plan.buttonText)}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  plan.buttonVariant === "primary"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Included:</h4>
                <ul className="space-y-2">
                  {plan.features.included.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Add-ons:</h4>
                <ul className="space-y-2">
                  {plan.features.addOns.map((addon, addonIndex) => (
                    <li
                      key={addonIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-blue-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {addon}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
