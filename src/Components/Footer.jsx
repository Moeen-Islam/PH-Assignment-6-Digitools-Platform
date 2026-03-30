import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    // <footer className="bg-[#071226] text-white pt-20 pb-8">
    //   <div className="max-w-300 mx-auto px-4">
    //     {/* Top footer */}
    //     <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 border-b border-white/10 pb-14">
    //       {/* Brand */}
    //       <div className="lg:col-span-2">
    //         <h2 className="text-[48px] font-bold leading-none">DigiTools</h2>
    //         <p className="mt-5 max-w-[320px] text-white/70 text-[16px] leading-7">
    //           Premium digital tools for creators, professionals, and businesses.
    //           Work smarter with our suite of powerful tools.
    //         </p>
    //       </div>

    //       {/* Product */}
    //       <div>
    //         <h3 className="text-[18px] font-semibold mb-5">Product</h3>
    //         <ul className="space-y-4 text-white/70">
    //           <li>
    //             <a href="#" className="hover:text-white transition">
    //               Features
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:text-white transition">
    //               Pricing
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:text-white transition">
    //               Templates
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:text-white transition">
    //               Integrations
    //             </a>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Company */}
    //       <div>
    //         <h3 className="text-[18px] font-semibold mb-5">Company</h3>
    //         <ul className="space-y-4 text-white/70">
    //           <li>
    //             <a href="#" className="hover:text-white transition">
    //               About
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:text-white transition">
    //               Blog
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:text-white transition">
    //               Careers
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:text-white transition">
    //               Press
    //             </a>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Resources */}
    //       <div>
    //         <h3 className="text-[18px] font-semibold mb-5">Resources</h3>
    //         <ul className="space-y-4 text-white/70">
    //           <li>
    //             <a href="#" className="hover:text-white transition">
    //               Documentation
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:text-white transition">
    //               Help Center
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:text-white transition">
    //               Community
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:text-white transition">
    //               Contact
    //             </a>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Social Links */}
    //       <div>
    //         <h3 className="text-[18px] font-semibold mb-5">Social Links</h3>
    //         <div className="flex items-center gap-4">
    //           <a
    //             href="#"
    //             className="w-11 h-11 rounded-full bg-white text-[#071226] flex items-center justify-center hover:scale-105 transition"
    //           >
    //             <FaInstagram />
    //           </a>
    //           <a
    //             href="#"
    //             className="w-11 h-11 rounded-full bg-white text-[#071226] flex items-center justify-center hover:scale-105 transition"
    //           >
    //             <FaFacebookF />
    //           </a>
    //           <a
    //             href="#"
    //             className="w-11 h-11 rounded-full bg-white text-[#071226] flex items-center justify-center hover:scale-105 transition"
    //           >
    //             <FaXTwitter />
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Bottom footer */}
    //     <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-[14px]">
    //       <p>© 2026 Digitools. All rights reserved.</p>

    //       <div className="flex items-center gap-6">
    //         <a href="#" className="hover:text-white transition">
    //           Privacy Policy
    //         </a>
    //         <a href="#" className="hover:text-white transition">
    //           Terms of Service
    //         </a>
    //         <a href="#" className="hover:text-white transition">
    //           Cookies
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-[#06142B] text-white">
      <div className="h-1 w-full bg-gradient-to-r from-[#4F39F6] to-[#C115F3]" />

      <div className="max-w-300 mx-auto px-5 sm:px-6 md:px-8 lg:px-10 pt-12 sm:pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 border-b border-white/10 pb-10">
          {/* brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <h2 className="text-[34px] text-center md:text-left sm:text-[42px] lg:text-[56px] font-bold leading-none">
              DigiTools
            </h2>

            <p className="mt-4 text-center md:text-left max-w-full md:max-w-[320px] text-white/80 text-[14px] sm:text-[16px] leading-8">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* product */}
          <div>
            <h3 className="text-[16px] sm:text-[18px] font-semibold mb-4 sm:mb-5">
              Product
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-white/80 text-[14px] sm:text-[16px]">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* company */}
          <div>
            <h3 className="text-[16px] sm:text-[18px] font-semibold mb-4 sm:mb-5">
              Company
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-white/80 text-[14px] sm:text-[16px]">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* resources */}
          <div>
            <h3 className="text-[16px] sm:text-[18px] font-semibold mb-4 sm:mb-5">
              Resources
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-white/80 text-[14px] sm:text-[16px]">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* social */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-[16px] sm:text-[18px] font-semibold mb-4 sm:mb-5">
              Social Links
            </h3>

            <div className="flex items-center gap-3 sm:gap-4">
              <a className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#06142B] flex items-center justify-center">
                <FaInstagram />
              </a>
              <a className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#06142B] flex items-center justify-center">
                <FaFacebookF />
              </a>
              <a className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#06142B] flex items-center justify-center">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col items-center md:flex-row md:justify-between gap-4 text-white/70 text-[13px] sm:text-[14px]">
          <p className="text-center">© 2026 Digitools. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
