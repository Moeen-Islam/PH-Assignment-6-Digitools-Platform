import React from "react";
import User from "../assets/user.png";
import Package from "../assets/package.png";
import Rocket from "../assets/rocket.png";

const Steps = () => {
  return (
    <div className="container mx-auto my-30">
      <div className="header text-center">
        <h1 className="font-extrabold text-[48px] text-[#101727] mb-4">
          Get Started in 3 Steps
        </h1>
        <p className="mb-10 text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-6 max-w-300 mx-auto">
        <div className="cards-item relative bg-white p-8 rounded-[20px] border border-gray-200">
          {/* circle 01 */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 rounded-full flex items-center justify-center">
            <p className="text-white font-bold text-[14px]">01</p>
          </div>

          <div className="flex flex-col justify-center items-center text-center pt-6 pb-4">
            <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[#4F39F6]/15 to-[#9514FA]/15 flex justify-center items-center mb-6">
              <img
                src={User}
                className="w-12 h-12 object-contain"
                alt="User icon"
              />
            </div>

            <h2 className="font-bold text-[28px] text-[#101727] mb-4">
              Create Account
            </h2>

            <p className="text-[#627382] text-[16px] leading-7 max-w-65 mb-10">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>

        <div className="cards-item relative bg-white p-8 rounded-[20px] border border-gray-200">
          {/* circle 02 */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 rounded-full flex items-center justify-center">
            <p className="text-white font-bold text-[14px]">02</p>
          </div>

          <div className="flex flex-col justify-center items-center text-center pt-6 pb-4">
            <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[#4F39F6]/15 to-[#9514FA]/15 flex justify-center items-center mb-6">
              <img
                src={Package}
                className="w-12 h-12 object-contain"
                alt="Package icon"
              />
            </div>

            <h2 className="font-bold text-[28px] text-[#101727] mb-4">
              Choose Products
            </h2>

            <p className="text-[#627382] text-[16px] leading-7 max-w-65 mb-10">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>

        <div className="cards-item relative bg-white p-8 rounded-[20px] border border-gray-200">
          {/* circle 03 */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 rounded-full flex items-center justify-center">
            <p className="text-white font-bold text-[14px]">03</p>
          </div>

          <div className="flex flex-col justify-center items-center text-center pt-6 pb-4">
            <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[#4F39F6]/15 to-[#9514FA]/15 flex justify-center items-center mb-6">
              <img
                src={Rocket}
                className="w-12 h-12 object-contain"
                alt="Rocket icon"
              />
            </div>

            <h2 className="font-bold text-[28px] text-[#101727] mb-4">
              Start Creating
            </h2>

            <p className="text-[#627382] text-[16px] leading-7 max-w-65 mb-10">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
