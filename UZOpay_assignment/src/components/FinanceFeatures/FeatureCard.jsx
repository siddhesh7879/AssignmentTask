import React from "react";
import { ArrowRight } from "lucide-react";

export default function FeatureCard({ title, description, btnText, icon, size }) {
  return ( 
  
    <div className="relative w-full rounded-2xl bg-linear-to-b from-[#2b2c3c] to-[#0a0a1a] p-[1px] shadow-lg hover:shadow-[#5d5dff]/40 transition-all duration-300">
      {/* Inner background glass effect */}
      <div className="h-full w-full rounded-2xl bg-[#101123]/90 backdrop-blur-md p-6 flex flex-col justify-between">

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



