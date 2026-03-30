import React from "react";

const Transfrom = () => {
  return (
    <section className="px-4 py-12 bg-gradient-to-r from-[#4F39F6] via-[#7B2FF7] to-[#C115F3]">
      <div className="max-w-300 mx-auto rounded-3xl px-6 py-20 md:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-white text-[28px] md:text-[40px] font-bold leading-tight">
            Ready To Transform Your Workflow?
          </h2>

          <p className="mt-5 max-w-175 text-white/85 text-[14px] md:text-[16px] leading-7">
            Join thousands of professionals who are already using Digitools to
            work smarter.
            <br className="hidden md:block" />
            Start your free trial today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button className="h-13 rounded-full bg-white px-7 text-[15px] font-semibold text-[#5C2CF6] transition hover:scale-105">
              Explore Products
            </button>

            <button className="h-13 rounded-full border border-white/70 bg-transparent px-8 text-[15px] font-semibold text-white transition hover:bg-white/10">
              View Pricing
            </button>
          </div>

          <p className="mt-7 text-[13px] md:text-[14px] text-white/80">
            14-day free trial • No credit card required • Cancel any time
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transfrom;
