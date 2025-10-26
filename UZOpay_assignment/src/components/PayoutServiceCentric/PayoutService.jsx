import React from "react";
import bgPayoutService from "../../assets/payoutService.png";
import Button from "../Button";

function PayoutService() {
  return (
    <div className="flex min-h-screen text-white font-sans relative"
      style={{
        backgroundImage: `url(${bgPayoutService})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      <div className="radial-gradient(ellipse at center, #392b6e 0%, #181322 70%, transparent 100%, absolute, left-0, right-0, top-0, bottom-0)"></div>

      <div className="flex-1 px-10 py-16 lg:px-10 lg:py-16 max-w-lg">
        <span className="inline-block px-4 py-1 rounded-full text-sm mb-4 bg-[#22345d] text-[#b0c4f7]">
          Payout Service Centric
        </span>

        <h1 className="text-[2.2rem] mb-6 font-bold leading-tight">
          Streamlined for Payout Ease and Efficiency
        </h1>

        <div className="features space-y-4">
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Comprehensive Documentation
          </h2>
          <p className="text-base text-gray-300">
            Access clear, detailed documentation that simplifies integration and
            accelerates your payout setup.
          </p>

          <p className="text-base text-gray-300">
            <b className="font-bold">Quick Start SDKs</b>
            <br />
            Leverage our ready-to-use SDKs for various programming languages,
            enabling quick and smooth payout implementation.
          </p>

          <p className="text-base text-gray-300">
            <b className="font-bold">Sandbox Environment</b>
            <br />
            Test and refine your payout integration in a secure sandbox
            environment before going live, ensuring a seamless launch.
          </p>
        </div>

        <div className="mt-8">
            <Button label="Get Started" hasArrow buttonColorClass="border-red-500 text-red-500 hover:bg-gray-500/20 bg-blue-950 rounded-full" />
        </div>
      </div>
      
      <div className="hidden lg:flex flex-1 items-center justify-center">
        {/* Placeholder for the visual grid element */}
      </div>
    </div>
  );
}

export default PayoutService;
