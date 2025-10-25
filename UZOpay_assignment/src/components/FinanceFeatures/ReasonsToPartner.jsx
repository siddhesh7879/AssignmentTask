import React from "react";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard";
import { Play, MonitorSmartphone } from "lucide-react";
import backgroundR from "../../assets/bg_FinanceFeature.png"; // 👈 1. Import your background image
import PaymentTag from "../../assets/PaymentTag.png"; // 👈 1. Import your background image
import bgCard_1 from "../../assets/bg_sm_1.png"; // 👈 1. Import your background image
import { ArrowRight } from "lucide-react";

export default function ReasonsToPartner({ title, description, btnText, icon, size }) {
  const features = [
    {
      id: "journey",
      title: "Optimize Customer Journeys",
      description:
        "Streamlined transactions enhancing efficiency and customer satisfaction.",
      btnText: "Explore",
    },
    {
      id: "processing",
      title: "Faster Processing Time",
      description:
        "Quick and efficient payment processing for a seamless user experience.",
      btnText: "Learn more",
      icon: <Play className="w-6 h-6 text-purple-400" />,
    },
    {
      id: "flexible",
      title: "Flexible Solutions",
      description:
        "Customizable options to meet the unique needs of your business.",
      btnText: "Explore more",
      icon: (
        <div className="w-14 h-14 rounded-full border-2 border-purple-400 overflow-hidden flex items-center justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="avatar"
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>
      ),
    },
    {
      id: "integration",
      title: "Effortless Integration",
      description:
        "Simple API integration with your existing systems and platforms.",
      btnText: "Learn more",
      icon: <MonitorSmartphone className="w-6 h-6 text-purple-400" />,
    },
  ];

  return (
    <section className="relative md:py-10 px-6 md:px-12  overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundR})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_70%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          subtitle="Reasons to Partner"
          title="Exceptional Support for Your Success"
        />

        {/* GRID: 12 columns for flexible layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* ROW 1 */}
          <div className="col-span-12 md:col-span-4">

            <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#fafafa] to-[#fffffffd] p-2 shadow-lg hover:shadow-[#5d5dff]/40 transition-all duration-300 opacity-70">
              <div className="relative flex justify-center">

                <div className=" w-full rounded-xl bg-linear-to-r from-[#02023a] to-[#101acc] overflow-hidden">
                  <div className="relative bg-linear-to-r from-[#4b4b64] to-[#2e2f42] rounded-xl w-full h-24 flex  justify-center shadow-inner overflow-hidden mt-6 relative top-2"
                    style={{
                      backgroundImage: `URL(${bgCard_1})`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_#ffffff33_1px,_transparent_1px)] bg-[length:12px_12px]" />
                    {/* <div className="absolute top-2 right-2 w-5 h-3 bg-[#a1a1b5] rounded-sm"></div> */}

                    <div>
                      <img src={PaymentTag} alt="" width="150px" className="" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle: Text content */}
              {/* <div className="mt-6">
                <h3 className="text-lg font-semibold text-white">
                  Optimize <span className="text-gray-400">customer journeys</span>
                </h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  Streamlined transactions enhancing efficiency and customer
                  satisfaction.
                </p>
              </div> */}

              {/* Bottom: Button */}
              {/* <button className="mt-4 flex items-center gap-2 text-white border border-gray-600 px-4 py-2 rounded-md text-sm hover:bg-white/10 transition-all">
                Explore <ArrowRight size={16} />
              </button> */}
            </div>



            {/* <FeatureCard {...features[0]} size="tall" /> */}
          </div>



          <div className="col-span-12 md:col-span-8">
            {/* <FeatureCard {...features[1]} size="wide" /> */}
            <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#fafafa] to-[#fffffffd] p-2 shadow-lg hover:shadow-[#5d5dff]/40 transition-all duration-300 opacity-70">


              {/* Middle: Text content */}
              {/* <div className="mt-6">
                <h3 className="text-lg font-semibold text-white">
                  Optimize <span className="text-gray-400">customer journeys</span>
                </h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  Streamlined transactions enhancing efficiency and customer
                  satisfaction.
                </p>
              </div> */}

              {/* Bottom: Button */}
              {/* <button className="mt-4 flex items-center gap-2 text-white border border-gray-600 px-4 py-2 rounded-md text-sm hover:bg-white/10 transition-all">
                Explore <ArrowRight size={16} />
              </button> */}


                <div {...features[1]}>
                  {icon && <div className="mb-4">{icon}</div>}
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{title}</h3>
                  <p className="text-sm md:text-base text-gray-300">{description}</p>
              </div>

                <button className="text-sm text-purple-300 flex items-center gap-1 hover:text-white transition mt-4">
                  {btnText} <span>→</span>
                </button>
              

              <div className="relative flex justify-center">
                <div className=" w-full rounded-xl bg-linear-to-r from-[#02023a] to-[#101acc] overflow-hidden">
                  <div className="relative bg-linear-to-r from-[#4b4b64] to-[#2e2f42] rounded-xl w-full h-24 flex  justify-center shadow-inner overflow-hidden mt-6 relative top-2"
                    style={{
                      backgroundImage: `URL(${bgCard_1})`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_#ffffff33_1px,_transparent_1px)] bg-[length:12px_12px]" />
                    {/* <div className="absolute top-2 right-2 w-5 h-3 bg-[#a1a1b5] rounded-sm"></div> */}

                    <div>
                      <img src={PaymentTag} alt="" width="150px" className="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2 (reversed) */}
          <div className="col-span-12 md:col-span-8">
            <FeatureCard {...features[2]} size="medium" />
          </div>
          <div className="col-span-12 md:col-span-4">
            <FeatureCard {...features[3]} size="small" />
          </div>
        </div>
      </div>
    </section>
  );
}
