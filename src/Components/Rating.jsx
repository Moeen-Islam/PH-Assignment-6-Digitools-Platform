import React from "react";

const Rating = () => {
  return (
    <div className="max-w-600 mx-auto bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 py-10 sm:py-12 md:py-14">
          {/* item 1 */}
          <div className="relative flex flex-col items-center justify-center py-6 md:py-0">
            <h1 className="text-white font-extrabold text-[36px] sm:text-[42px] lg:text-[48px] leading-none">
              50K+
            </h1>
            <p className="text-white/80 text-sm sm:text-base mt-2">
              Active Users
            </p>

            {/* divider */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-20 lg:h-25 w-px bg-white/30"></div>

            {/* mobile divider */}
            <div className="block md:hidden mt-6 h-px w-24 bg-white/30"></div>
          </div>

          {/* item 2 */}
          <div className="relative flex flex-col items-center justify-center py-6 md:py-0">
            <h1 className="text-white font-extrabold text-[36px] sm:text-[42px] lg:text-[48px] leading-none">
              200+
            </h1>
            <p className="text-white/80 text-sm sm:text-base mt-2">
              Premium Tools
            </p>

            {/* divider */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-20 lg:h-25 w-px bg-white/30"></div>

            {/* mobile divider */}
            <div className="block md:hidden mt-6 h-px w-24 bg-white/30"></div>
          </div>

          {/* item 3 */}
          <div className="flex flex-col items-center justify-center py-6 md:py-0">
            <h1 className="text-white font-extrabold text-[36px] sm:text-[42px] lg:text-[48px] leading-none">
              4.9
            </h1>
            <p className="text-white/80 text-sm sm:text-base mt-2">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
