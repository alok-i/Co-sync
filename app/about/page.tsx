"use client";
import React from "react";
import Image from "next/image";
import ContactSection from "../components/GetInTouchSection";
import Header from "../components/Header";

const AboutUs = () => {
  return (
    <>
      <section className="bg-blue-50 custom-gradient">
        <Header />

        <div className="pb-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-8">
              <span className="dark-gradient-text">ABOUT US</span>
            </h1>
          </div>

          {/* Illustrations - Top half with gradient background */}
          <div className="flex flex-row justify-between items-end">
            {/* Left illustration with standing desks - Decreased size */}
            <div className="bg-white rounded-3xl p-6 shadow-md w-full md:w-4/12 mb-6 md:mb-0">
              <Image
                src="/imageLeftAbout.png"
                alt="People working at standing desks"
                width={400}
                height={267}
                className="w-full h-auto"
              />
            </div>

            {/* Middle small illustration - Aligned to bottom */}
            <div className="hidden md:block">
              <Image
                src="/imageCenter.png"
                alt="People working at standing desks"
                width={362}
                height={241}
                className="w-full h-auto md:w-[362px] md:h-[241px]"
              />
            </div>

            {/* Right illustration with multiple desks - Made largest */}
            <div className="bg-white rounded-3xl p-8 shadow-md w-full md:w-6/12">
              <Image
                src="/imageRightAbout.png"
                alt="Multiple people in coworking space"
                width={850}
                height={567}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* White background section starts from here */}
      <section className="bg-white">
        <div className="py-16">
          {/* Why We Exist Section */}
          <div className="w-full">
            <div className="text-center w-full mb-8">
              <h2 className="text-6xl font-bold mb-6">
                <span className="dark-gradient-text">Why We Exist</span>
              </h2>
            </div>

            {/* Mission Text */}
            <div className="w-full mx-auto px-4 max-w-6xl">
              <p className="text-xl text-black font-bold mb-8 px-4">
                We believe independent coworking spaces deserve better tools –
                ones that don't require an IT department to implement or a
                fortune to maintain.
              </p>

              <p className="text-xl text-black px-4 mb-8">
                Co-working spaces are more than just offices—they're where ideas
                take shape, businesses grow, and communities come together. But
                managing them? That can get complicated. At CoSync, we're here
                to make it easier. Our all-in-one platform helps space owners
                focus on what really matters—building a thriving community—while
                giving members a smooth, hassle-free experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <div className="w-full py-16 custom-gradient">
        <div className="text-center w-full">
          <h2 className="text-6xl font-bold mb-6">
            <span className="dark-gradient-text">Meet the Founders</span>
          </h2>
        </div>

        {/* Founders Content */}
        <div className="w-full mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-6">
              Everything Starts with a Good Brief
            </h3>

            <p className="text-xl text-black mb-8">
              We're{" "}
              <span className="font-bold text-blue-600">Alok and Rashmita</span>
              , VIT alumni who jumped straight into the startup world after
              college. We worked across multiple early-stage companies and found
              ourselves constantly moving from one co-working space to another.
            </p>

            <p className="text-xl text-black mb-8">
              We've spent years working with startups—sometimes as consultants,
              sometimes as full-time employees, sometimes as freelancers. And if
              there's one thing we know, it's that co-working spaces play a huge
              role in shaping a startup's vibe. That's when we noticed the
              problem. Some spaces had great energy but lacked structure. Others
              had all the right tools but felt impersonal. And almost
              everywhere, there were inefficiencies that made things harder than
              they needed to be.
            </p>

            <p className="text-xl text-black mb-12">
              And the idea for{" "}
              <span className="font-bold text-blue-600">CoSync</span> took
              root—an intuitive, all-in-one solution that makes running and
              scaling a co-working space as seamless as possible.
            </p>
          </div>

          {/* Founders Photos */}
          <div className="flex justify-center items-center gap-12 mb-12">
            <div className="text-center">
              <div className="w-48 h-56 mb-4 rounded-lg overflow-hidden mx-auto shadow-lg">
                <Image
                  src="/Alok_Mishra.png" // You'll need to add these images
                  alt="Alok - Co-founder"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-2xl font-bold text-black mb-2">Alok</h4>
              <p className="text-lg text-gray-600">Co-founder</p>
            </div>

            <div className="text-center">
              <div className="w-48 h-56 rounded-lg overflow-hidden mb-4 mx-auto shadow-lg">
                <Image
                  src="/Rashmita_tanwa.png" // You'll need to add these images
                  alt="Rashmita - Co-founder"
                  width={192}
                  height={202}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-2xl font-bold text-black mb-2">Rashmita</h4>
              <p className="text-lg text-gray-600">Co-founder</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-6">
              <span className="dark-gradient-text">
                Ready to ditch the spreadsheets?
              </span>
            </h3>
          </div>
        </div>
      </div>

      <ContactSection />
    </>
  );
};

export default AboutUs;
