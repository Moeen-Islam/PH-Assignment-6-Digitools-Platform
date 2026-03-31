import React from "react";
import Banner from "../assets/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-10 my-12 sm:my-16 lg:my-20 gap-10 lg:gap-16">
  {/* left */}
  <div className="left w-full lg:w-1/2 text-center lg:text-left">
    <div className="inline-flex items-center gap-2 bg-[#E1E7FF] px-3 sm:px-4 py-2 rounded-full">
      {/* Circle icon */}
      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#d7cafc] flex items-center justify-center">
        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#cbb6ff] flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#5b3df5] to-[#9333ea]"></div>
        </div>
      </div>

      {/* Text */}
      <p className="text-xs sm:text-sm font-medium text-[#5b3df5]">
        New: AI-Powered Tools Available
      </p>
    </div>

    <h1 className="mt-4 text-[40px] sm:text-[52px] md:text-[60px] lg:text-[72px] leading-tight font-extrabold">
      Supercharge Your
      <br className="hidden sm:block" />
      <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"> Digital Workflow</span>
    </h1>

    <p className="mt-4 text-[15px] sm:text-[17px] lg:text-[18px] text-[#627382] leading-7 max-w-[650px] mx-auto lg:mx-0">
      Access premium AI tools, design assets, templates, and productivity
      <br className="hidden sm:block" />
      software—all in one place. Start creating faster today.
    </p>

    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
      <button
        className="btn border-none bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full
        text-white text-[15px] font-semibold px-6 min-h-0 h-11"
      >
        Explore Products
      </button>

      <button
        className="flex items-center justify-center gap-2 px-4 py-2 rounded-full cursor-pointer
        border border-[#6D28F9] text-[#6D28F9] font-semibold
        hover:bg-[#6D28F9] hover:text-white transition-all duration-300"
      >
        <CiPlay1 className="text-xl" />
        Watch Demo
      </button>
    </div>
  </div>

  {/* right */}
  <div className="right w-full lg:w-1/2 flex justify-center">
    <img
      src={Banner}
      alt="Banner"
      className="w-full max-w-[260px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[520px] h-auto rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
    />
  </div>
</div>
  );
};

export default Hero;
