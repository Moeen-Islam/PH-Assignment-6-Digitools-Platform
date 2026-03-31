import React from "react";
import { toast } from "react-toastify";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const Cart = ({ selectedProducts, setSelectedProducts }) => {
  const totalPrice = selectedProducts.reduce(
    (total, item) => total + item.price,
    0,
  );

  const handleRemove = (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    const updatedCart = selectedProducts.filter((item) => item.id !== id);
    setSelectedProducts(updatedCart);

    toast.warning("🗑️ Item removed from cart!", {
      position: "top-right",
    });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setSelectedProducts([]);
    toast.success("🎉 Order processed successfully!", {
      position: "top-center",
    });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-5">Your Cart</h2>

      <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        {selectedProducts.length === 0 ? (
          <div className="flex min-h-45 items-center flex-col justify-center rounded-2xl bg-gray-50 text-center">
            <PiShoppingCartSimpleLight
              size={48}
              className="text-gray-300 mb-4"
            />
            <p className="text-gray-500 text-sm sm:text-base">
              Your cart is empty
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {selectedProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F9F5FF] overflow-hidden">
                      {item.icon && (
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="h-5 w-5 object-contain"
                        />
                      )}
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">${item.price}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => handleRemove(e, item.id)}
                    className="text-sm cursor-pointer font-medium text-pink-500 hover:text-pink-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-4 px-5">
              <p className="text-sm text-gray-500 font-bold">Total :</p>
              <h3 className="text-2xl font-bold text-gray-900">
                ${totalPrice}
              </h3>
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              className="mt-5 w-full cursor-pointer rounded-full bg-gradient-to-r from-[#5b3df5] to-[#9333ea] py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
