// import React from "react";

// export default function FeatureCard({ title, description, btnText, icon, size }) {
//   const sizeClasses = {
//     small: "h-52",
//     medium: "h-64",
//     tall: "h-80",
//     wide: "h-72",
//   };

//   return (
//     <div
//       className={`relative group bg-white/30 border border-white/10 rounded-2xl p-6 
//                   backdrop-blur-xl hover:border-purple-400 transition-all duration-300
//                   shadow-[0_0_30px_rgba(128,0,255,0.15)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]
//                   flex flex-col justify-between ${sizeClasses[size] || "h-64"}`}
//     >
//       <div>
//         {icon && <div className="mb-4">{icon}</div>}
//         <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{title}</h3>
//         <p className="text-sm md:text-base text-gray-300">{description}</p>
//       </div>

//       <button className="text-sm text-purple-300 flex items-center gap-1 hover:text-white transition mt-4">
//         {btnText} <span>→</span>
//       </button>

//       {/* Glow overlay */}
//       <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-purple-700/10 via-transparent to-purple-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//     </div>
//   );
// }/

import React from "react";
import { ArrowRight } from "lucide-react";

export default function FeatureCard({ title, description, btnText, icon, size }) {
  // w-[357px] h-[316px]
  return ( 
  
  

    <div className="relative w-full rounded-2xl bg-linear-to-b from-[#2b2c3c] to-[#0a0a1a] p-[1px] shadow-lg hover:shadow-[#5d5dff]/40 transition-all duration-300">
      {/* Inner background glass effect */}
      <div className="h-full w-full rounded-2xl bg-[#101123]/90 backdrop-blur-md p-6 flex flex-col justify-between">

       
{/* 
        Middle: Text content
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-white">
            Optimize <span className="text-gray-400">customer journeys</span>
          </h3>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Streamlined transactions enhancing efficiency and customer
            satisfaction.
          </p>
        </div>

        {/* Bottom: Button */}
        {/* <button className="mt-4 flex items-center gap-2 text-white border border-gray-600 px-4 py-2 rounded-md text-sm hover:bg-white/10 transition-all">
          Explore <ArrowRight size={16} />
        </button>  */}

      <div>
        {icon && <div className="mb-4">{icon}</div>}
        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm md:text-base text-gray-300">{description}</p>
     </div>

      <button className="text-sm text-purple-300 flex items-center gap-1 hover:text-white transition mt-4">
        {btnText} <span>→</span>
      </button>

       {/* Glow overlay */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-purple-700/10 via-transparent to-purple-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
}



