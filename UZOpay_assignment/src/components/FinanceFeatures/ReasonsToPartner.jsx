import React from "react";
import SectionHeader from "./SectionHeader";
import { Play, MonitorSmartphone } from "lucide-react";
import backgroundR from "../../assets/bg_FinanceFeature.png"; // 👈 1. Import your background image
import img_4 from "../../assets/imgP4.png"; // 👈 1. Import your background image
import img_3 from "../../assets/imgP3.png"; // 👈 1. Import your background image
import img_2 from "../../assets/imgP2.png"; // 👈 1. Import your background image
import img_1 from "../../assets/imgP1.png"; // 👈 1. Import your background image

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
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_70%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-[65vw]">
        <SectionHeader
          subtitle="Reasons to Partner"
          title="Exceptional Support for Your Success"
        />

        {/* GRID: 12 columns for flexible layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* ROW 1 */}
          <div className="col-span-12 md:col-span-4 ">
            <div className="">
              <img src={img_4} alt=""  className="w-full "/>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 ">
            <div className="">
              <img src={img_1} alt=""  className="w-[670px] "/>
            </div>
          </div>

          {/* ROW 2 (reversed) */}
          <div className="col-span-12 md:col-span-7 ">
            <div className="">
              <img src={img_3} alt=""  className="w-[670px] "/>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-4">
            <div className="">
              <img src={img_2} alt=""  className="w-full "/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
