import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

export default function Footer() {
  return (
    <div className="bg-white text-black border-t border-gray-200 py-10 px-2 ">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-5 gap-6 text-sm">
          
          {/* Get Started */}
          <div>
            <h3 className="font-semibold mb-3">Get Started</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="cursor-pointer hover:text-black">Pricing</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Free Trial Guide</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Falcon Flex</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Financing</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">CrowdStrike Marketplace</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Small Business</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Federal Government</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">State & Local Government</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="cursor-pointer hover:text-black">About Us</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Executive Leadership</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Board of Directors</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Newsroom</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Investor Relations</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">CrowdStrike Racing & F1</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Environmental, Social & Governance</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Careers</a></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-semibold mb-3">Partners</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="cursor-pointer hover:text-black">Partner Programs</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Service Providers</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Strategic Technology</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Channel & Distributors</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Become a Partner</a></li>
            </ul>
          </div>

          {/* Existing Customers */}
          <div>
            <h3 className="font-semibold mb-3">Existing Customers</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="cursor-pointer hover:text-black">Support Portal</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Developer Portal</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="cursor-pointer hover:text-black">Call 1-888-512-8906 (US)</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Experienced a Breach?</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Contact Us</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">Schedule a Meeting</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <FaLinkedinIn className="cursor-pointer hover:text-black" size={18} />
            <FaXTwitter className="cursor-pointer hover:text-black" size={18} />
            <FaFacebookF className="cursor-pointer hover:text-black" size={18} />
            <FaInstagram className="cursor-pointer hover:text-black" size={18} />
            <FaYoutube className="cursor-pointer hover:text-black" size={18} />
          </div>

          {/* Bottom Links */}
          <div className="flex items-center gap-4 flex-wrap">
            <p className="cursor-pointer hover:text-black">Copyright © 2025</p>
            <p className="cursor-pointer hover:text-black">Privacy</p>
            <p className="cursor-pointer hover:text-black">Cookies</p>
            <p className="cursor-pointer hover:text-black">Your Privacy Choices</p>
            <p className="cursor-pointer hover:text-black">Terms of Use</p>
            <p className="cursor-pointer hover:text-black">Accessibility</p>
          </div>

          {/* Language Dropdown */}
          <div className="flex items-center gap-1 border border-gray-300 px-3 py-2 rounded-md cursor-pointer">
            <p>English (US)</p>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}
