import React from "react";

interface PricingPlan {
  tier: string;
  description: string;
  priceMonthly: string;
  priceYearly: string;
  yearlyDisplay: string;
  savings?: string;
  features: string[];
  highlighted?: boolean;
}

const PricingSection: React.FC = () => {
  // Create an array of pricing plans matching your screenshot
  const pricingPlans: PricingPlan[] = [
    {
      tier: "Basic",
      description: "Essential space management for small operators",
      priceMonthly: "₹4,999",
      priceYearly: "₹47,990",
      yearlyDisplay: "(₹3,999/mo)",
      features: [
        "Up to 50 members",
        "Single location",
        "Member management",
        "Resource booking",
        "Basic reporting",
        "Email support",
        "Standard payment gateway",
      ],
    },
    {
      tier: "Professional",
      description: "Complete solution for growing spaces",
      priceMonthly: "₹6,999",
      priceYearly: "₹71,990",
      yearlyDisplay: "(₹5,999/mo)",
      savings: "Save ₹12,000",
      features: [
        "Up to 200 members",
        "Up to 3 locations",
        "Advanced space management",
        "Resource booking with approval flows",
        "Custom reports & analytics",
        "Invoice management",
        "Community engagement tools",
        "Multiple payment gateway",
      ],
      highlighted: true,
    },
    {
      tier: "Enterprise",
      description: "Multi-location management with advanced features",
      priceMonthly: "₹12,999",
      priceYearly: "₹124,790",
      yearlyDisplay: "(₹10,399/mo)",
      features: [
        "Unlimited members",
        "Unlimited locations",
        // You can add more enterprise features here if needed
      ],
    },
  ];

  return (
    <div className="w-full py-16">
      {/* Pricing header - reusing your existing code */}
      <div className="w-full shadow-lg flex flex-col items-center mb-12">
        <h1 className="relative md:text-[130px] font-bold dark-gradient-text tracking-[0.02rem] sm:text-2xl">
          Choose the plan
        </h1>
        <h1 className="relative font-bold dark-gradient-text md:text-8xl text-2xl">
          that's right for you
        </h1>
        <div className="flex flex-col items-center">
          <h2 className="md:text-[40px] text-[#000000] font-bold">
            From single properties to multi-building
          </h2>
          <h2 className="md:text-[40px] text-[#000000] font-bold">
            enterprises
          </h2>
        </div>
      </div>

      {/* Pricing cards container */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`w-full md:w-[425px] h-[596px]  border-gray-300 rounded-xl p-6 flex flex-col items-center ${
                plan.highlighted ? "bg-blue-100" : "bg-white"
              }`}
              style={{
                boxShadow: plan.highlighted
                  ? "0 4px 6px rgba(0, 0, 0, 0.1)"
                  : "",
              }}
            >
              <h3 className="text-3xl mb-2 text-black">{plan.tier}</h3>
              <p className="text-black mb-4">{plan.description}</p>

              <div className="mb-6">
                <div className="flex items-end">
                  <span className="text-4xl font-bold text-black">
                    {plan.priceMonthly}
                  </span>
                  <span className="text-black ml-1">/mo</span>
                </div>
                <div className="flex items-center text-black">
                  <span>
                    {plan.priceYearly}/year {plan.yearlyDisplay}
                  </span>
                  {plan.savings && (
                    <span className="ml-2 text-black">{plan.savings}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-auto">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-black">
                    <span className="mr-2 text-lg text-black">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <button
                  className={`w-full py-3 px-4 rounded-lg border ${
                    plan.highlighted
                      ? "dark-gradient text-white"
                      : "border-[#125EBB] text-black hover:bg-blue-50"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
