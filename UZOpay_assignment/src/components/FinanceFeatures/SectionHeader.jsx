import React from "react";

export default function SectionHeader({ subtitle, title }) {
  return (

    <>
{/* <div className="flex justify-center w-1/2"></div> */}
      <div className="text-center md:w-1/2 m-auto">
        <p className="text-sm md:text-base text-gray-400 tracking-wide uppercase ">
          {subtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-4xl my-2">
          {title}
        </h2>
      </div>


    </>
  );
}
