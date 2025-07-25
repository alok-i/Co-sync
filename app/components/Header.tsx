"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface HeaderProps {
  onSolutionsClick?: () => void;
  onPricingClick?: () => void;
  onContactClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onSolutionsClick,
  onPricingClick,
  onContactClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSolutionsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // If we're on the home page and have a callback, use it
    if (pathname === "/Home" && onSolutionsClick) {
      onSolutionsClick();
    } else {
      // Navigate to home page with solutions section target
      router.push("/Home?section=solutions");
    }
    setIsMenuOpen(false);
  };

  const handlePricingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // If we're on the home page and have a callback, use it
    if (pathname === "/Home" && onPricingClick) {
      onPricingClick();
    } else {
      // Navigate to home page with pricing section target
      router.push("/Home?section=pricing");
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    // If we're on the home page and have a callback, use it
    if (pathname === "/Home" && onContactClick) {
      onContactClick();
    } else {
      // Navigate to home page with contact section target
      router.push("/Home?section=contact");
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    router.push("/Home");
  };

  return (
    <header className="w-full z-50 top-0">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Fix the onClick */}
          <div className="flex items-center h-[60px] w-[160px] mt-2.5">
            <img
              src="/CompanyLogo.png"
              alt="Company Logo"
              className="object-contain cursor-pointer"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9";
              }}
              onClick={handleLogoClick}
            />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={toggleMenu}>
            {/* {isMenuOpen ? <FiX /> : <FiMenu />} */}
          </button>

          {/* Desktop Navigation - Now on the right */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/about"
              className="text-[#125EBB] font-bold transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-[#125EBB] font-bold transition-colors"
              onClick={handleSolutionsClick}
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-[#125EBB] font-bold transition-colors"
              onClick={handlePricingClick}
            >
              Pricing
            </a>
            <a href="#" className="text-[#125EBB] font-bold transition-colors">
              Resources
            </a>
            <button
              className="dark-gradient px-6 py-2 rounded-full transition-colors text-white"
              onClick={handleContactClick}
            >
              Contact Us
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="/about"
                className="hover:text-[#E75B34] transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="hover:text-[#E75B34] transition-colors"
                onClick={handleSolutionsClick}
              >
                Solutions
              </a>
              <a
                href="#"
                className="hover:text-[#E75B34] transition-colors"
                onClick={handlePricingClick}
              >
                Pricing
              </a>
              <a href="#" className="hover:text-[#E75B34] transition-colors">
                Resources
              </a>
              <button
                className="bg-[#E75B34] hover:bg-[#d94e28] px-6 py-2 rounded-full transition-colors text-white"
                onClick={handleContactClick}
              >
                Contact Us
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
