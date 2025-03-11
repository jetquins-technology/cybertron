import React from "react";
import { VscArrowSmallRight } from "react-icons/vsc";
import { MdOutlineSecurity } from "react-icons/md";
import { Naveitem } from "./data";
import { RiArrowDropDownLine } from "react-icons/ri"; // Ensure this is correctly imported
import { RiArrowDropUpLine } from "react-icons/ri";
import  { useState } from 'react';
// import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
// import { MdOutlineSecurity } from 'react-icons/md';
import { VscThreeBars } from 'react-icons/vsc';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const Naveitem = [
    { title: "Cloud Security", content: "Protect cloud workloads." },
    { title: "Endpoint Security", content: "Secure endpoints." },
    { title: "Threat Intelligence", content: "Detect threats." },
  ];

  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };
  return (
    <nav className="w-full bg-white flex items-center justify-between p-4 shadow-md">
      <img src="./images/logo (2).png" alt="Logo" className="w-[200px]" />

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <VscThreeBars size={28} />
      </div>

      {/* Desktop Menu */}
      <ul className={`md:flex hidden space-x-6`}>
        {["Platform", "Services", "Why Jet Quin", "Resources"].map(
          (item, index) => (
            <li key={index} className="relative group">
              <div
                onClick={() => toggleDropdown(index)}
                className="cursor-pointer flex items-center border-b-2 border-transparent hover:border-red-500"
              >
                {item}
                {openDropdown === index ? (
                  <RiArrowDropUpLine size={24} />
                ) : (
                  <RiArrowDropDownLine size={24} />
                )}
              </div>

              {/* Dropdown */}
              <div
                className={`absolute hidden group-hover:block bg-white shadow-lg p-4 rounded-lg w-[300px] z-10 transition-all duration-300 ${
                  openDropdown === index ? "block" : "hidden"
                }`}
              >
                {Naveitem.map((list, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
                  >
                    <MdOutlineSecurity className="text-red-500" size={20} />
                    <div>
                      <h3 className="font-bold text-sm">{list.title}</h3>
                      <p className="text-xs text-gray-600">{list.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          )
        )}

        <li className="border-b-2 border-transparent hover:border-red-500 cursor-pointer">
          Pricing
        </li>
      </ul>

      <button className="hidden md:block bg-red-500 text-white px-6 py-2 rounded-md">
        Get a Demo
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-start p-4 z-10 shadow-lg md:hidden">
          {["Platform", "Services", "Why Jet Quin", "Resources"].map(
            (item, index) => (
              <div key={index} className="w-full">
                <div
                  className="cursor-pointer flex justify-between border-b py-2"
                  onClick={() => toggleDropdown(index)}
                >
                  {item}
                  {openDropdown === index ? (
                    <RiArrowDropUpLine size={24} />
                  ) : (
                    <RiArrowDropDownLine size={24} />
                  )}
                </div>

                {openDropdown === index && (
                  <div className="flex flex-col ml-4 text-sm">
                    {Naveitem.map((list, i) => (
                      <div key={i} className="py-1">
                        <h3 className="font-bold">{list.title}</h3>
                        <p className="text-xs text-gray-600">{list.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
          <button className="bg-red-500 text-white w-full py-2 mt-4 rounded-md">
            Get a Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
