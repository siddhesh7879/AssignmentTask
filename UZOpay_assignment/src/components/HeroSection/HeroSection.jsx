import React from 'react'
import Button from '../Button';
import FloatingLabels from '../FloatingLabels/FloatingLabels';
import robot from "../../assets/robot.png";
import backgroundR from "../../assets/bg-Hero.png"; // 👈 1. Import your background image
import Navbar from '../Navbar';
import HeroSection_1 from '../Herosection_1/HeroSection_1';
function HeroSection() {
  return (<>
    <div
      style={{ // 👈 2. Use the style attribute for the background
        backgroundImage: `url(${backgroundR})`,
        backgroundRepeat: 'no-repeat',
      }}
    >

      <Navbar />
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10 overflow-visible">

        {/* Left content */}
        <div className="flex-1 space-y-6 max-w-xl text-center md:text-left relative top-24 xl:top-16  md:left-10 lg:left-22 xl:left-10">
          <button className="px-4 py-2 border border-blue-400 rounded-full text-sm">
            Pay Smart. Pay Fast
          </button>

          <h1 className="text-3xl md:text-[38px] xl:text-[40]  leading-tight">
            End-to-End Payout & Payroll Solutions for Digital Era.
          </h1>

          <p className="text-gray-300">
            Optimize transactions and payouts with our secure, efficient payment gateway solution, ensuring smooth operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start bg-blue ">
            <Button label="Reach Out" hasArrow buttonColorClass="border border-white text-white bg-stone-900 hover:bg-gray-500/20 rounded-full" />
            <Button label="Get Started" hasArrow buttonColorClass="hover:bg-gray-500/20 bg-blue-950 rounded-full " />
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center  relative top-20">
          <img src={robot} alt="Robot" className="w-[80%] md:w-[80%] " />
          <FloatingLabels />
        </div>
      </section>
      <HeroSection_1 />
    </div>
  </>
  )
}

export default HeroSection;
