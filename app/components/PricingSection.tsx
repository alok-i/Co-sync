import React, { useState } from "react";

interface PricingPlan {
  tier: string;
  description: string;
  priceMonthly: string;
  priceYearly: string;
  features: {
    included: string[];
    addOns: string[];
  };
  isPopular?: boolean;
  buttonText: string;
  buttonVariant: "primary" | "secondary";
}

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

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
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl p-6 transition-transform hover:scale-105 ${
                plan.isPopular ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3 right-6">
                  <div className="bg-yellow-400 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    ⭐ Most popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
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
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    plan.buttonVariant === "primary"
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {plan.buttonText}
                </button>

                <button className="w-full mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
                  See all features
                </button>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {/* Included Features */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    {index === 0
                      ? "Includes"
                      : index === 1
                      ? "All Essential features plus"
                      : "All Pro features plus"}
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.included.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <span className="text-green-500 mr-2 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add-ons */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Available add-ons
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.addOns.map((addon, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <span className="text-green-500 mr-2 mt-0.5">✓</span>
                        <span>{addon}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
