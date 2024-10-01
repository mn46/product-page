import { useState } from "react";
import CartIcon from "/icons/icon-cart.svg";
import { Cart as CartData } from "../../types/types";
import CartItem from "./CartItem";

const Cart = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const cartData: CartData = JSON.parse(localStorage.getItem("cart"));
  console.log("cartData", cartData);

  const toggleIsExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="relative">
      <button className="relative" onClick={() => toggleIsExpanded()}>
        {cartData.amount > 0 && (
          <div className="absolute -top-2 -right-4 rounded-full px-2 bg-primaryOrange text-white text-xs">
            {cartData.amount}
          </div>
        )}
        <img src={CartIcon} />
      </button>
      {isExpanded && (
        <div className="absolute right-0 bg-white rounded-xl shadow-xl min-w-60 min-h-40">
          <h3 className="px-5 py-3">Cart</h3>
          <div className="border-t-grayishBlue border-t">
            {cartData ? (
              <ul>
                <CartItem productData={cartData.product} />
              </ul>
            ) : (
              <p className="text-center">Your cart is empty.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
