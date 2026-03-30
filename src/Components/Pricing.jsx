import React from 'react';

const Pricing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-300 mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-[48px] font-bold text-[#0F172A] leading-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#64748B] mt-4 text-[16px]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* Starter */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-[32px] font-bold text-[#0F172A]">Starter</h3>
              <p className="text-[#64748B] mt-2">Perfect for getting started</p>

              <div className="mt-8 flex items-end">
                <span className="text-[56px] font-bold text-[#0F172A] leading-none">
                  $0
                </span>
                <span className="text-[#64748B] text-[22px] mb-2">/Month</span>
              </div>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-[#475569]">
                  <span className="text-green-500">✓</span>
                  Access to 10 free tools
                </li>
                <li className="flex items-center gap-3 text-[#475569]">
                  <span className="text-green-500">✓</span>
                  Basic templates
                </li>
                <li className="flex items-center gap-3 text-[#475569]">
                  <span className="text-green-500">✓</span>
                  Community support
                </li>
                <li className="flex items-center gap-3 text-[#475569]">
                  <span className="text-green-500">✓</span>
                  1 project per month
                </li>
              </ul>
            </div>

            <button className="btn mt-10 w-full h-14.5 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold">
              Get Started Free
            </button>
          </div>

          {/* Pro */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-[#4F39F6] to-[#C026D3] shadow-lg">
            <div className="relative h-full rounded-2xl bg-gradient-to-br from-[#5B35F5] via-[#7A22F2] to-[#B010F5] p-8 flex flex-col justify-between">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-[#FCD34D] text-[#92400E] text-sm font-medium px-4 py-1 rounded-full shadow">
                  Most Popular
                </span>
              </div>

              <div>
                <h3 className="text-[32px] font-bold text-white">Pro</h3>
                <p className="text-white/80 mt-2">Best for professionals</p>

                <div className="mt-8 flex items-end">
                  <span className="text-[56px] font-bold text-white leading-none">
                    $29
                  </span>
                  <span className="text-white/80 text-[22px] mb-2">/Month</span>
                </div>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-center gap-3 text-white">
                    <span>✓</span>
                    Access to all premium tools
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <span>✓</span>
                    Unlimited templates
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <span>✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <span>✓</span>
                    Unlimited projects
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <span>✓</span>
                    Cloud sync
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <span>✓</span>
                    Advanced analytics
                  </li>
                </ul>
              </div>

              <button className="btn mt-10 w-full h-14.5 rounded-full bg-white text-[#5B35F5] font-semibold">
                Start Pro Trial
              </button>
            </div>
          </div>

          {/* Enterprise */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-[32px] font-bold text-[#0F172A]">Enterprise</h3>
              <p className="text-[#64748B] mt-2">For teams and businesses</p>

              <div className="mt-8 flex items-end">
                <span className="text-[56px] font-bold text-[#0F172A] leading-none">
                  $99
                </span>
                <span className="text-[#64748B] text-[22px] mb-2">/Month</span>
              </div>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-[#475569]">
                  <span className="text-green-500">✓</span>
                  Everything in Pro
                </li>
                <li className="flex items-center gap-3 text-[#475569]">
                  <span className="text-green-500">✓</span>
                  Team collaboration
                </li>
                <li className="flex items-center gap-3 text-[#475569]">
                  <span className="text-green-500">✓</span>
                  Custom integrations
                </li>
                <li className="flex items-center gap-3 text-[#475569]">
                  <span className="text-green-500">✓</span>
                  Dedicated support
                </li>
                <li className="flex items-center gap-3 text-[#475569]">
                  <span className="text-green-500">✓</span>
                  SLA guarantee
                </li>
                <li className="flex items-center gap-3 text-[#475569]">
                  <span className="text-green-500">✓</span>
                  Custom branding
                </li>
              </ul>
            </div>

            <button className="btn mt-10 w-full h-14.5 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
