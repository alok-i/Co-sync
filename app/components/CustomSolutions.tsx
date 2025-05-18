import React from "react";

const CustomSolutionSection: React.FC = () => {
  return (
    <div className="w-full py-16 custom-gradient">
      <div className="container mx-auto px-4">
        {/* Main blue rounded container */}
        <div className="bg-blue-700 rounded-[40px] p-16 flex flex-col items-center justify-center text-center">
          {/* Heading */}
          <h2 className="text-white text-5xl font-bold mb-16">
            Need a Custom Solution?
          </h2>

          {/* Button */}
          <button className="bg-blue-50 text-blue-700 rounded-full py-4 px-8 flex items-center text-xl font-medium mb-8 hover:bg-white transition-colors duration-300">
            Contact Sales
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>

          {/* Sub-text */}
          <p className="text-white text-sm max-w-md opacity-90 italic">
            We promise to never use the phrase "disruptive technology" in our
            marketing. Some startup traditions are meant to be broken.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomSolutionSection;
