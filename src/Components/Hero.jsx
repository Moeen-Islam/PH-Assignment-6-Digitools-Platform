import React from "react";
import Banner from "../assets/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-10 my-21.25 gap-16.5 space-y-4">
      <div className="left">
        <div className="inline-flex items-center gap-2 bg-[#E1E7FF] px-4 py-2 rounded-full">
          {/* Circle icon */}
          <div className="w-6 h-6 rounded-full bg-[#d7cafc] flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-[#cbb6ff] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#5b3df5] to-[#9333ea]"></div>
            </div>
          </div>

          {/* Text */}
          <p className="text- font-medium text-[#5b3df5]">
            New: AI-Powered Tools Available
          </p>
        </div>
        <h1 className="text-[72px] font-extrabold">
          Supercharge Your <br />
          Digital Workflow
        </h1>
        <p className="text-[18px] text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>

        <div className="flex gap-4 mt-8">
          <button className="btn border-none bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full
          text-white text-[15px] font-semibold px-6 min-h-0 h-11">
            Explore Products
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer 
            border border-[#6D28F9] text-[#6D28F9] font-semibold 
            hover:bg-[#6D28F9] hover:text-white transition-all duration-300"
          >
            <CiPlay1 className="text-xl" />
            Watch Demo
          </button>
        </div>
      </div>

      <div className="right">
        <img
          src={Banner}
          className="rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
        />
      </div>
    </div>
  );
};

export default Hero;
