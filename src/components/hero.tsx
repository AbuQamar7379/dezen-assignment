import HeroImage from "../assets/hero-image.jpeg";

import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <div className="h-[660px] w-full relative">
      <img
        src={HeroImage}
        alt="Hero Image"
        className="object-cover w-full h-full"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-0 opacity-100"
        style={{ backgroundSize: "240% 100%" }}
      ></div>

      <div className="absolute z-10 top-0 left-8 sm:left-24 w-full sm:w-[50%] text-white flex flex-col justify-between h-full py-10 sm:py-20">
        <div className="text-3xl sm:text-5xl font-bold uppercase leading-tight sm:leading-normal">
          <span className="text-red-500 border-b-4 border-red-500 mr-3">
            Elevating
          </span>
          Your Projects with Safe & Reliable Scaffolding Solutions
        </div>

        <div className="text-base sm:text-lg w-full sm:w-[80%] mt-4 sm:mt-8">
          At Wosoll, we design, install, and maintain top-tier scaffolding
          systems for construction, industrial, and renovation projects. Trust
          our expertise to keep your team safe and your project on track.
        </div>

        <Button variant={"destructive"} className="w-36 sm:w-44 mt-5">
          GET QUOTE
        </Button>

        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:mt-8 mt-5 space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
          <div className="px-5">
            <p className="text-red-500 font-semibold text-[30px]">100+</p>
            <p className="text-sm text-gray-400">Successful Projects</p>
          </div>
          <div className="border-t-[1px] sm:border-l-[1px] sm:border-t-0 border-[#606060] px-5 pt-4 sm:pt-0">
            <p className="text-red-500 font-semibold text-[30px]">1k+</p>
            <p className="text-sm text-gray-400">Workers</p>
          </div>
          <div className="border-t-[1px] sm:border-l-[1px] sm:border-t-0 border-[#606060] px-5 pt-4 sm:pt-0">
            <p className="text-red-500 font-semibold text-[30px]">10+</p>
            <p className="text-sm text-gray-400">Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};
