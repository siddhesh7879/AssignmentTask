import React from 'react';
import backgroundR from "../../assets/FinanceLanding_bg.png"; // 👈 1. Import your background image
import Button from '../Button';

const FinanceLandingSection = () => {
  return (
    // Main container: Dark background, minimum full screen height, text is white
    <div className="bg-black text-white h-80 font-sans"
            style={{ // 👈 2. Use the style attribute for the background
                          backgroundImage: `url(${backgroundR})`,
                          backgroundSize: 'auto',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize:'contain',
                  }}
    
    >

      {/* 1. Hero Section: "Let's build the future..." and "Get Started" button */}
      <div className="max-w-7xl md:mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center relative top-20 md:top-auto">
        {/* Hero Text */}
        <h1 className="text-2xl font-extrabold leading-tight max-w-xl md:mt-24 ">
          Let's build the <br />
          <span >future of finance</span> together
        </h1>
        
        <Button label="Get Started" hasArrow buttonColorClass="border-red-500 text-red-500 hover:bg-gray-500/20 bg-blue-950 rounded-full mt-3 md:mr-48 md:mt-24 "/>

      </div>
    </div>
  );
};

export default FinanceLandingSection;