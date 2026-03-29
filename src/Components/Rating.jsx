import React from "react";

const Rating = () => {
  return (
    <div className="mx-w-[1600px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] ">
      <div className="container mx-auto my-15">
        <div className="ratings grid grid-cols-3 py-15">
          <div className="relative flex flex-col items-center justify-center ">
          <h1 className="text-white font-extrabold text-[48px] leading-none">
            50K+
          </h1>
          <p className="text-white/80 text-sm mt-2">Active Users</p>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-25 w-[2px] bg-white/30"></div>
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <h1 className="text-white font-extrabold text-[48px] leading-none">
            200+
          </h1>
          <p className="text-white/80 text-sm mt-2">Premium Tools</p>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-25 w-[2px] bg-white/30"></div>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-white font-extrabold text-[48px] leading-none">
            4.9
          </h1>
          <p className="text-white/80 text-sm mt-2">Rating</p>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Rating;
