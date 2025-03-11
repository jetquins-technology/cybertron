import React, { useState } from "react";
import { VscArrowSmallRight } from "react-icons/vsc";
import { leadership, customers, experience } from "./data";
import { HiArrowCircleRight } from "react-icons/hi";
// import { VscArrowSmallRight } from "react-icons/vsc";
// import { VscArrowSmallRight } from 'react-icons/vsc';
import { motion } from "framer-motion";
const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Handle Radio Button Change
  const handleRadioChange = (index) => {
    setSelectedIndex(index);
  };

  const styles = {
    backgroundImage:
      "url('https://play.vidyard.com/PBjCLnZ26eK9VG3ifwnnVp.jpg')",
  };
  return (
    <>
      <div className="bg-[url('./images/background.jpg')] bg-cover bg-center w-full">
        {/* Main Section */}
        <div className="text-white px-4 md:px-9 py-6">
          <div className="w-full md:w-[50%] h-[50vh] flex flex-col justify-center px-3 md:px-7">
            <h2 className="text-3xl md:text-5xl leading-[1.5] font-bold">
              Jet Quin 2025 Global <br /> Threat Report
            </h2>
            <p className="text-[#e9e8e8] mt-3 text-sm md:text-base">
              26 new adversaries, 51-second eCrime breakout time. <br />
              Explore the latest threat data.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row mt-6 md:mt-8 gap-3 md:gap-1.5">
              <button className="cursor-pointer flex bg-red-500 px-4 py-2 rounded-[4px] text-sm md:text-base">
                Download{" "}
                <span className="flex items-center text-2xl justify-center ml-2">
                  <VscArrowSmallRight />
                </span>
              </button>
              <button className="cursor-pointer flex border border-white px-4 py-2 rounded-[4px] text-sm md:text-base">
                Explore Adversary Universe{" "}
                <span className="flex items-center text-2xl justify-center ml-2">
                  <VscArrowSmallRight />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Card Section */}
        <div className="w-full h-auto mt-6 md:mt-8 p-4 flex flex-col md:flex-row md:justify-center gap-4">
          {/* Card 1 */}
          <div className="w-full md:w-[30%] bg-[#777676]/50 backdrop-blur-md rounded-[8px] h-auto px-4 py-4">
            <h1 className="text-[16px] md:text-[18px] text-red-500 hover:text-white cursor-pointer">
              Fal.Con Gov 2025
            </h1>
            <h2 className="flex items-center text-[16px] md:text-[18px] text-white font-bold hover:underline hover:text-red-500">
              See live updates from our news center
              <span className="ml-2 text-2xl">
                <VscArrowSmallRight />
              </span>
            </h2>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-[30%] bg-[#777676]/50 backdrop-blur-md rounded-[8px] h-auto px-4 py-4">
            <h1 className="text-[16px] md:text-[18px] text-red-500 hover:text-white cursor-pointer">
              CrowdStrike 2024 Threat Hunting Report
            </h1>
            <h2 className="flex items-center text-[16px] md:text-[18px] font-bold hover:underline text-white hover:text-red-500">
              Highlights from the pioneer of adversary intelligence
              <span className="text-2xl">
                <VscArrowSmallRight />
              </span>
            </h2>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-[30%] bg-[#777676]/50 backdrop-blur-md rounded-[8px] h-auto px-4 py-4">
            <h1 className="text-[16px] md:text-[18px] text-red-500 hover:text-white cursor-pointer">
              Industry Recognition
            </h1>
            <h2 className="flex font-bold items-center text-[16px] md:text-[18px] text-white hover:underline hover:text-red-500">
              CrowdStrike Named a Leader in The Forrester Wave™: Managed
              Detection and Response Services, Q1 2025
              <span className="text-2xl">
                <VscArrowSmallRight />
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-[url('./images/bg-nabber.avif')] relative bg-cover bg-center w-[99.9%] lg:h-screen h-auto flex flex-col   items-center md:items-start">
        <div className="  text-white    md:py-32 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl leading-10 md:leading-[4rem] px-12  font-bold">
            Unified platform. One agent. <br />
            Complete protection.
          </h2>
          <p className="text-[18px] md:text-2xl text-gray-400 py-4 px-12 md:py-6">
            CrowdStrike Falcon: Cybersecurity’s AI-native platform.
          </p>
          <div className="mt-4 md:mt-6 flex justify-center px-12 md:justify-start">
            <button className="cursor-pointer flex items-center bg-red-500 px-6 py-2 rounded-md transition-all duration-300 hover:bg-red-600">
              Explore now
              <span className="flex items-center text-2xl ml-2">
                <VscArrowSmallRight />
              </span>
            </button>
          </div>
          <div className="flex justify-center items-end w-full mt-1  lg:w-screen  h-auto">
            <img
              src="./images/center-img.svg"
              className="w-full lg:w-[60.3%] h-[90%] mb-0"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-white h-auto w-screen py-14">
        <div className="text-center md:text-left px-6 md:px-9">
          <h2 className="text-3xl md:text-5xl font-bold">
            Market leadership starts here
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-9 mt-8">
          {leadership.map((item, i) => (
            <div
              key={i}
              className="w-full h-auto shadow-2xl rounded-2xl overflow-hidden"
            >
              <div className="w-full h-[200px] md:h-[300px]">
                <img
                  src={item.images}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="p-4 md:px-8">
                <h2 className="text-[18px] text-red-500 font-bold">
                  {item.report}
                </h2>
                <h2 className="text-[16px] md:text-[18px] font-bold">
                  {item.heading}
                </h2>
                <p className="text-[14px] md:text-[16px] text-gray-600">
                  {item.content}
                </p>
                <div className="mt-4">
                  <button className="cursor-pointer flex items-center bg-red-500 px-4 py-2 rounded-[4px] text-white transition-all duration-300 hover:bg-red-600">
                    Get the report
                    <span className="flex items-center text-2xl ml-2">
                      <VscArrowSmallRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[url('./images/last-bg.avif')] bg-cover bg-center w-screen min-h-screen mt-10">
        <div className="bg-[#4e4d4d] h-[20%] w-[100%] p-4 flex flex-col  md:flex-row items-center">
          <div className="w-full md:w-[30%] mt-[-5%]">
            <img src="./images/open-report.png" alt="Report" />
          </div>

          <div className="text-center md:text-left flex-1">
            <h2 className="text-4xl text-white font-semibold">
              The most anticipated <br />
              <span className="text-red-500 font-semibold">
                cybersecurity report of the year
              </span>
            </h2>
          </div>

          <div className="flex items-center justify-center md:justify-end w-full md:w-[30%]">
            <button className="cursor-pointer flex bg-red-500 px-4 py-2 text-white rounded-[4px]">
              Download
              <span className="flex items-center text-2xl justify-center">
                <VscArrowSmallRight />
              </span>
            </button>
          </div>
        </div>

        <div className="w-screen p-5">
          <div className="w-full">
            <h2 className="text-5xl w-full md:w-[60%] font-bold py-9">
              Customers trust CrowdStrike to protect what matters most
            </h2>

            {/* Video and Content Section */}
            <div className="w-full flex flex-col md:flex-row rounded-2xl py-9">
              <div className="w-full md:w-[50%]">
                <div
                  className="h-[400px] rounded-l-2xl flex flex-col items-center justify-center"
                  style={{
                    backgroundImage: `url(./images/video1.gif)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex flex-col ml-[90%] gap-9 bg-transparent p-2 rounded-lg">
                    {customers.map((item, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="radio"
                          name="option"
                          value={index}
                          checked={selectedIndex === index}
                          onChange={() => handleRadioChange(index)}
                          className="bg-white"
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[60%] flex items-center p-5">
                <div className="p-4">
                  <h2 className="text-3xl">
                    {customers[selectedIndex].heading}
                  </h2>
                  <p className="py-4 text-[16px] text-[#222121]">
                    {customers[selectedIndex].paragraph}
                  </p>
                  <div className="flex">
                    <button className="cursor-pointer py-1 px-4 bg-red-500 rounded-[8px] text-white flex items-center gap-2">
                      Watch their story <HiArrowCircleRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-screen relative bg-black text-white flex items-center justify-center">
        <div className="w-[90%] flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side Content */}
          <div className="w-full md:w-[40%] bg-[#072a34] p-8 rounded-2xl shadow-xl">
            <h1 className="text-4xl font-semibold leading-[1.2]">
              Know them. Find them. <br />
              <span className="text-red-500">Stop them.</span>
            </h1>
            <p className="text-gray-300 mt-4 text-sm">
              Adversaries are operating with unprecedented stealth, and today's
              attacks take only minutes to succeed. Discover the adversaries
              targeting your organization.
            </p>

            <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-red-600 transition-all">
              Explore Adversary Universe
              <VscArrowSmallRight className="text-2xl" />
            </button>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-[68%] relative">
            <img
              src="./images/adversary-group.png"
              alt="Adversary"
              className="w-[200%] h-[400px] mt-[-5%] md:h-full rounded-2xl object-cover transition-all duration-500 hover:scale-105"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/40 to-transparent"></div> */}
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-[#b20000] text-white flex items-center justify-center p-4">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between">
          {/* Left Side Content */}
          <div className="w-full md:w-[45%] flex flex-col gap-6 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Build generative AI workflows
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-gray-300 text-sm"
            >
              Make every user of the{" "}
              <span className="text-white">CrowdStrike Falcon®</span> platform a
              power user with CrowdStrike's Generative AI security analyst.
            </motion.p>

            {/* Animated Chat Boxes */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="bg-white text-black rounded-xl px-4 py-2 shadow-lg"
            >
              Charlotte, do we have vulnerabilities involving Microsoft Outlook?
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="bg-red-500 text-white rounded-xl px-4 py-2 shadow-lg flex items-center gap-2"
            >
              <span className="text-2xl">⚠️</span> Yes, Microsoft Outlook has 3
              critical vulnerabilities across 231 devices.
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="bg-white text-black rounded-xl px-4 py-2 shadow-lg"
            >
              Charlotte, which threat actors actively target us?
            </motion.div>

            {/* Button */}
            <motion.button
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="mt-4 bg-white text-black w-[180px] px-6 py-3 rounded-md flex items-center gap-2 hover:bg-red-400 transition-all"
            >
              Learn more
              <VscArrowSmallRight className="text-2xl" />
            </motion.button>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-[50%] flex justify-center items-center  md:mt-44">
            <img
              src="./images/img.png"
              alt="AI Woman"
              className="w-full md:w-[90%] h-auto max-h-[400px] md:max-h-[600px] object-cover transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="relative ">
        {/* Terms and Conditions Section */}
        <div className="w-full bg-gray-100 py-8">
          <div className="max-w-[1200px] mx-auto px-4 text-[12px] text-gray-600 leading-6">
            <p>
              <strong>1.</strong> Excludes special pricing or offers extended to
              our business partners, affiliates, or other third-party
              arrangements. 70% off Falcon Go, Falcon Pro, and Falcon Enterprise
              is for the first purchase only.
            </p>

            <p className="mt-4">
              Gartner, Magic Quadrant for Endpoint Protection Platforms, Evgeny
              Mirolyubov, Franz Hinner, 25 September 2024
            </p>

            <p className="mt-4">
              GARTNER is a registered trademark and service mark of Gartner and
              Magic Quadrant is a registered trademark of Gartner, Inc. and/or
              its affiliates in the U.S. and internationally and are used herein
              with permission. All rights reserved. Gartner does not endorse any
              vendor, product or service depicted in its research publications,
              and does not advise technology users to select only those vendors
              with the highest ratings or other designation. Gartner research
              publications consist of the opinions of Gartner’s research
              organization and should not be construed as statements of fact.
              Gartner disclaims all warranties, expressed or implied, with
              respect to this research, including any warranties of
              merchantability or fitness for a particular purpose.
            </p>

            <p className="mt-4">
              This graphic was published by Gartner, Inc. as part of a larger
              research document and should be evaluated in the context of the
              entire document. The Gartner document is available upon request
              from CrowdStrike.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="w-full bg-[url('./images/footer.png')] bg-cover bg-center text-white py-16">
          <div className="max-w-[1200px] mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Try CrowdStrike free for 15 days
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              {/* Start Free Trial Button */}
              <button className="bg-red-600 text-white px-6 py-3 rounded-md text-sm font-semibold flex items-center gap-2 hover:bg-red-700 transition-all">
                Start free trial →
              </button>

              {/* Contact Us Button */}
              <button className="border border-gray-500 text-white px-6 py-3 rounded-md text-sm font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all">
                Contact us →
              </button>

              {/* View Pricing Button */}
              <button className="text-gray-400 text-sm font-semibold hover:text-white transition-all">
                View pricing <span className="text-red-700"> →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
