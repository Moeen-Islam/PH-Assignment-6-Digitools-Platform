import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ selectedProducts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

  const cartCount = selectedProducts.length;

  return (
    <div className="container mx-auto flex justify-between items-center py-4 md:py-5 px-4 md:px-6 relative">
      {/* LEFT: Hamburger + Logo */}
      <div className="flex items-center gap-2 md:gap-3">
        <div className="lg:hidden">
          {isOpen ? (
            <HiX
              className="text-2xl md:text-3xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <HiMenu
              className="text-2xl md:text-3xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          DigiTools
        </h1>
      </div>

      {/* MENU */}
      <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
        {menuItems.map((item, i) => (
          <li key={i}>
            <a href="" className="text-[14px] xl:text-[15px] font-medium text-black">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* CART ICON + BADGE */}
        <div className="relative cursor-pointer">
          <IoCartOutline className="text-lg md:text-xl" />

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] md:text-xs font-bold rounded-full min-w-[18px] h-[18px] px-1 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>

        <button className="text-[14px] md:text-[15px] font-medium cursor-pointer">
          Login
        </button>

        <button className="cursor-pointer bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white text-[13px] md:text-[15px] font-semibold px-4 md:px-6 h-9 md:h-11">
          Get Started
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden z-50">
          <ul className="flex flex-col p-5 gap-4">
            {menuItems.map((item, i) => (
              <li key={i}>
                <a
                  href=""
                  onClick={() => setIsOpen(false)}
                  className="text-[15px] font-medium text-black"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;