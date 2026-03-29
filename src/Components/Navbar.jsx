import React from "react";
import { IoCartOutline } from "react-icons/io5";

// const Navbar = () => {
//   return (
//     <div className="flex justify-between items-center my-6.5">
//       <div className="">
//         <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
//           DigiTools
//         </h1>
//       </div>
//       <div>
//         <ul className="flex justify-between items-center gap-8">
//           <li>
//             <a href="">Products</a>
//           </li>
//           <li>
//             <a href="">Features</a>
//           </li>
//           <li>
//             <a href="">Pricing</a>
//           </li>
//           <li>
//             <a href="">Testimonials </a>
//           </li>
//           <li>
//             <a href="">FAQ</a>
//           </li>
//         </ul>
//       </div>
//       <div className="flex justify-between items-center gap-4">
//         <IoCartOutline className="text-2xl cursor-pointer" />
//         <button className="text-[16px] font-semibold cursor-pointer">Login</button>
//         <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl text-white text-[16px] font-semibold">
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

const Navbar = () => {
  return (
    <div className=" container mx-auto flex justify-between items-center py-5">
      <div>
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text
        text-transparent">
          DigiTools
        </h1>
      </div>

      <div>
        <ul className="flex items-center gap-8">
          <li>
            <a href="" className="text-[15px] font-medium text-black">
              Products
            </a>
          </li>
          <li>
            <a href="" className="text-[15px] font-medium text-black">
              Features
            </a>
          </li>
          <li>
            <a href="" className="text-[15px] font-medium text-black">
              Pricing
            </a>
          </li>
          <li>
            <a href="" className="text-[15px] font-medium text-black">
              Testimonials
            </a>
          </li>
          <li>
            <a href="" className="text-[15px] font-medium text-black">
              FAQ
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-5">
        <IoCartOutline className="text-xl cursor-pointer" />
        <button className="text-[15px] font-medium cursor-pointer">
          Login
        </button>
        <button className="btn border-none bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full
        text-white text-[15px] font-semibold px-6 min-h-0 h-11">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
