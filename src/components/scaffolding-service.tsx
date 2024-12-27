import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import ScaffoldingImage from "../assets/scoffolding-image.svg";

export const ScaffoldingServices = () => {
  return (
    <div className="w-full p-8 lg:p-20">
      <p className="uppercase font-bold text-lg text-[#DF573E] border-l-[6px] border-[#DF573E] pl-2">
        Comprehensive scaffolding service
      </p>

      <div className="mt-5 flex flex-col lg:flex-row justify-between items-center">
        <p className="text-3xl lg:text-5xl font-bold leading-snug uppercase text-center lg:text-left">
          Expert scaffolding service for safe and efficient construction
          projects
        </p>
        <p className="w-full lg:w-auto text-center lg:text-left text-[#DF573E] cursor-pointer hover:underline font-bold mt-4 lg:mt-0">
          Explore Services <ArrowUpRight className="inline ml-3" />
        </p>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row gap-y-10 lg:gap-x-10 items-center">
        {/* Image Section */}
        <div className="relative lg:w-[50%]">
          <img
            src={ScaffoldingImage}
            alt="Scaffolding Image"
            className="w-full h-auto object-cover"
            style={{ filter: "drop-shadow(0 20px 0.75rem #446474)" }}
          />
          <div className="absolute top-[80%] z-10 right-10 bg-[#DF573E] p-4 text-white rounded-lg cursor-pointer hover:opacity-90">
            <ArrowRight />
          </div>
          <div className="absolute top-[80%] z-10 right-[15%] bg-[#DF573E] p-4 text-white rounded-lg cursor-pointer hover:opacity-90">
            <ArrowLeft />
          </div>
        </div>

        {/* List Section */}
        <ol className="list-decimal pl-6 lg:pl-20 font-bold text-[18px] lg:text-[20px] text-gray-700 space-y-5">
          {[
            "Scaffolding Design",
            "Scaffolding Contracting",
            "Scaffolding Erection",
            "Manpower Supply",
            "FRP Scaffolding",
            "Mobile Scaffolding",
            "Steel Scaffolding",
            "Aluminum Scaffolding",
            "Formwork and Shuttering",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};
