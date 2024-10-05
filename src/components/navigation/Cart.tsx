import { useContext, useState } from "react";
import CartIcon from "/icons/icon-cart.svg";
import CartItem from "./CartItem";
import { CartContext } from "../../App";

const Cart = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { cart } = useContext(CartContext);

  const toggleIsExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="relative">
      <button className="relative" onClick={() => toggleIsExpanded()}>
        {cart?.amount > 0 && (
          <div className="absolute -top-2 -right-4 rounded-full px-2 bg-primaryOrange text-white text-xs">
            {cart?.amount}
          </div>
        )}
        <img src={CartIcon} />
      </button>
      {isExpanded && (
        <div className="absolute right-0 bg-white rounded-xl shadow-xl min-w-60 w-max min-h-40">
          <h3 className="px-5 py-3">Cart</h3>
          <div className="border-t-grayishBlue border-t">
            {cart ? (
              <ul>
                <CartItem
                  cartData={cart}
                  onClose={() => setIsExpanded(false)}
                />
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
