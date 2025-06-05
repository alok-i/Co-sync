import React, { useState } from "react";
import { MapPin, Linkedin, Instagram } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  spaceName: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    spaceName: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 relative">
      {/* Main Content Container */}
      <div className="flex items-start justify-center p-4 pt-12 pb-32">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Contact Info */}
          <div className="text-white space-y-8 lg:pr-8 lg:mt-20">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-8">
                Get In Touch.
              </h1>

              <div className="space-y-4 text-lg">
                <div>7742422603</div>
                <div>9080682466</div>
              </div>

              <div className="space-y-2 mt-8 text-lg">
                <div>Rashmita@cosync.com</div>
                <div>Alok@cosync.com</div>
              </div>

              <div className="flex items-center mt-8 text-lg">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative z-20 mt-20">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                Contact Form
              </h2>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 border-0 border-b-2 border-blue-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="spaceName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Space Name
                  </label>
                  <input
                    type="text"
                    id="spaceName"
                    name="spaceName"
                    value={formData.spaceName}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-6">
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>Send Message</span>
                    <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section - Full Width */}
      <div className="absolute bottom-0 left-0 right-0 bg-black rounded-t-3xl p-8 pt-12 z-10">
        <div className="max-w-7xl mx-auto flex justify-start">
          <div className="text-white text-left">
            <div className="mb-6">
              <h2 className="text-2xl mb-2">
                Let's Empower <em className="font-light">Growth</em>
              </h2>
              <h3 className="text-3xl font-bold">COSync</h3>
            </div>

            <div className="flex justify-start space-x-4 mb-6">
              <Linkedin className="w-6 h-6 cursor-pointer hover:text-blue-400 transition-colors" />
              <Instagram className="w-6 h-6 cursor-pointer hover:text-pink-400 transition-colors" />
            </div>

            <div className="text-sm text-gray-400">Stay connected</div>
          </div>
        </div>

        {/* Copyright Text - Centered at Bottom */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="text-sm text-gray-400">
            2025 CoSync, All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
