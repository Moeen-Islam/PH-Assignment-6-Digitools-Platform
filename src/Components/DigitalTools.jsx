import React, { use, useState } from "react";
import Availableproducts from "./Availableproducts";
import Cart from "./Cart";

const DigitalTools = ({ productPromise }) => {
  const digitalTools = use(productPromise);

  const [selected, setSelected] = useState("products");
  const [selectedProducts, setSelectedProducts] = useState([]);

  
 

  return (
    <div className="my-30">
      {/* Header */}
      <div className="mb-10">
        <div className="header space-y-4">
          <h1 className="text-[35px] md:text-[48px] font-extrabold text-center text-[#101727]">
            Premium Digital Tools
          </h1>
          <p className="text-center text-[#627382]">
            Choose from our curated collection of premium digital products
            designed <br />
            to boost your productivity and creativity.
          </p>
        </div>
        {/* header btn */}
        <div className="flex justify-center mt-6">
          <div className="flex rounded-full bg-gray-100 p-1 shadow-inner">
            {/* Products */}
            <button
              onClick={() => setSelected("products")}
              className={`px-6 py-2 cursor-pointer text-sm font-medium rounded-full transition-all duration-300 ${
                selected === "products"
                  ? "bg-gradient-to-r from-[#5b3df5] to-[#9333ea] text-white shadow-md"
                  : "text-gray-600"
              }`}
            >
              Products
            </button>

            {/* Cart */}
            <button
              onClick={() => setSelected("carts")}
              className={`px-6 py-2 cursor-pointer text-sm font-medium rounded-full transition-all duration-300 ${
                selected === "carts"
                  ? "bg-gradient-to-r from-[#5b3df5] to-[#9333ea] text-white shadow-md"
                  : "text-gray-600"
              }`}
            >
              Cart ({selectedProducts.length})
            </button>
          </div>
        </div>
      </div>
      {/* Header End */}

      <div>
        {selected === "products" ? (
          <Availableproducts
            digitalTools={digitalTools}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          ></Availableproducts>
        ) : (
          <Cart
            digitalTools={digitalTools}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          ></Cart>
        )}
      </div>
    </div>
  );
};

export default DigitalTools;
