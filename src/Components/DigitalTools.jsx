import React, { use, useState } from "react";
import Availableproducts from "./Availableproducts";
import SelectedProducts from "./SelectedProducts";

const DigitalTools = ({ productPromise }) => {
  const digitalTools = use(productPromise);

  const [selected,setSelected] = useState("products")
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
        <div className="flex items-center justify-center mt-6">
          <button
            onClick={() => setSelected("products")}
            className={`btn ${selected === "products" ? "bg-gradient-to-br from-[#5b3df5] to-[#9333ea] text-white" : ""} rounded-r-none rounded-l-xl`}
          >
            Products
          </button>
          <button
            onClick={() => setSelected("carts")}
            className={`btn ${selected === "carts" ? "bg-gradient-to-br from-[#5b3df5] to-[#9333ea] text-white" : ""} rounded-l-none rounded-r-xl`}
          >
            Cart({selectedProducts.length})
          </button>
        </div>
      </div>
      {/* Header End */}

     <div>
        {selected === "products" ? (
          <Availableproducts
            digitalTools = {digitalTools}
          ></Availableproducts>
        ) : (
          <SelectedProducts
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
            >
          </SelectedProducts>
        )}
      </div>

    </div>
  );
};

export default DigitalTools;
