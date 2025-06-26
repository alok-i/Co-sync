"use client";

import React, { useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import "./page.css";
import PricingSection from "../components/PricingSection";
import CustomSolutionSection from "../components/CustomSolutions";
import Header from "../components/Header";
import { useRouter } from "next/navigation";

// Features data JSON
const featuresData = [
  {
    id: 1,
    title: "Space Booking & Management",
    description:
      "Let members book desks, meeting rooms, and private offices effortlessly, while you keep track of availability. Streamline your space utilization with powerful analytics.",
    buttonText: "Learn More >>",
    imageUrl: "/SpaceBookingAndMangement.png",
    altText: "Space booking interface with calendar and user",
    contentId: "1", // Maps to space booking content
  },
  {
    id: 2,
    title: "Community Engagement",
    description:
      "Host events with RSVP tracking for networking and growth. A member directory highlights businesses, while a bulletin board shares updates and opportunities.",
    buttonText: "Learn More >>",
    imageUrl: "/Community.png",
    altText: "Community engagement mobile interface",
    contentId: "2", // Maps to community content
  },
  {
    id: 3,
    title: "Tenant Management",
    description:
      "Manage tenant onboarding, leases, and communications in one place. Digital applications and agreements make paperwork a thing of the past.",
    buttonText: "Learn More >>",
    imageUrl: "/TenantManagement.png",
    altText: "Payment processing dashboard",
    contentId: "3", // Maps to all-in-one management content
  },
  {
    id: 4,
    title: "Financial Tools",
    description:
      "Provide members with a comprehensive self-service portal to manage bookings, payments, and profile information. Enhanced member experience with 24/7 access.",
    buttonText: "Learn More >>",
    imageUrl: "/FinancialTools.png",
    altText: "Member portal dashboard interface",
    contentId: "4", // Maps to payment/financial content
  },
  {
    id: 5,
    title: "Maintenance and Support",
    description:
      "Streamline maintenance requests with automated ticketing, vendor management, and status tracking. Resolve issues faster and keep tenants informed every step of the way.",
    buttonText: "Learn More >>",
    imageUrl: "/MaintainenceSupport.png",
    altText: "Analytics dashboard with charts and graphs",
    contentId: "5", // Maps to all-in-one management content
  },
];

// Loading component for the suspense boundary
const LoadingFallback: React.FC = () => (
  <div className="relative min-h-screen text-[#E75B34] custom-gradient flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

// Separate component that uses useSearchParams
const LandingPageContent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Calendly URL - Replace with your actual Calendly link
  const CALENDLY_URL = "https://calendly.com/rashmitatanwar2";

  // Create refs for the sections we want to scroll to - using HTMLDivElement
  const solutionsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Updated scroll function to handle HTMLDivElement refs
  const scrollToSection = (
    elementRef: React.RefObject<HTMLDivElement | null>
  ): void => {
    if (elementRef?.current) {
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Function to open Calendly in new tab
  const openCalendly = (): void => {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  // Handle URL parameters for section scrolling
  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      // Add a small delay to ensure the page is fully loaded
      const timer = setTimeout(() => {
        switch (section) {
          case "solutions":
            scrollToSection(solutionsRef);
            break;
          case "pricing":
            scrollToSection(pricingRef);
            break;
          case "contact":
            scrollToSection(contactRef);
            break;
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  // Navigation function for Learn More buttons
  const handleLearnMoreClick = (contentId: string): void => {
    router.push(`/LearnMore?contentId=${contentId}`);
  };

  return (
    <div className="relative min-h-screen text-[#E75B34] custom-gradient">
      {/* Header Section */}
      <Header
        onSolutionsClick={() => scrollToSection(solutionsRef)}
        onPricingClick={() => scrollToSection(pricingRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

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
              <button
                onClick={openCalendly}
                className="dark-gradient px-6 py-2 rounded-full transition-colors text-white hover:opacity-90"
              >
                SCHEDULE A DEMO
              </button>
            </div>

            {/* Right Column - Content */}
            <div className="w-[610px] h-[610px] md:w-1/2">
              <img
                src="/HomePageLatest.png"
                alt="Smartphone with notification"
                className="w-full h-auto rounded-lg"
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
            We&apos;re in the business of
          </h2>
          <h2 className="text-[#125EBB] text-4xl md:text-5xl font-bold leading-tight m-3">
            growing business
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

      {/* Solutions Section with stacking effect */}
      <div ref={solutionsRef}>{/* <SolutionsSection /> */}</div>

      {/* Platform Features Section */}
      <section className="py-16 px-4 custom-gradient">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#121212] mb-4">
              What does our <span className="text-[#125EBB]">platform</span>{" "}
              offer?
            </h2>
            <div className="w-24 h-1 bg-[#125EBB] mx-auto"></div>
          </div>

          {/* Features Grid */}
          <div className="space-y-8">
            {featuresData.map((feature, index) => (
              <div
                key={feature.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#121212]">
                    {feature.title.includes("&") ? (
                      <>
                        {feature.title.split("&")[0]}
                        <span className="text-[#125EBB]">
                          & {feature.title.split("&")[1]}
                        </span>
                      </>
                    ) : feature.title.includes("Engagement") ? (
                      <>
                        Community{" "}
                        <span className="text-[#125EBB]">Engagement</span>
                      </>
                    ) : (
                      <>
                        {feature.title.split(" ").slice(0, -1).join(" ")}{" "}
                        <span className="text-[#125EBB]">
                          {feature.title.split(" ").slice(-1)}
                        </span>
                      </>
                    )}
                  </h3>
                  <p className="text-lg text-[#4a5568] leading-relaxed">
                    {feature.description}
                  </p>
                  <button
                    onClick={() => handleLearnMoreClick(feature.contentId)}
                    className="bg-[#1a365d] hover:bg-[#2d3748] text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
                  >
                    {feature.buttonText}
                  </button>
                </div>

                {/* Image Side */}
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <img
                      src={feature.imageUrl}
                      alt={feature.altText}
                      className="w-full h-auto rounded-2xl"
                      onError={(
                        e: React.SyntheticEvent<HTMLImageElement, Event>
                      ) => {
                        // Fallback images for each feature
                        const fallbackImages = [
                          "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=500",
                          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500",
                          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
                          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
                          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
                        ];
                        e.currentTarget.src =
                          fallbackImages[index] || fallbackImages[0];
                      }}
                    />
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#125EBB]/10 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section with ref */}
      <div ref={pricingRef}>
        <PricingSection />
      </div>

      {/* Custom Solution Section with contact ref */}
      <div ref={contactRef}>
        <CustomSolutionSection />
      </div>
    </div>
  );
};

// Main component wrapped in Suspense
const LandingPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <LandingPageContent />
    </Suspense>
  );
};

export default LandingPage;
