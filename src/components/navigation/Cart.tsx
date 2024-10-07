import { useContext, useEffect, useState } from "react";
import CartIcon from "/icons/icon-cart.svg";
import CartItem from "./CartItem";
import { CartContext } from "../../App";

const Cart = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const cartInLocalStorage = localStorage.getItem("cart");
    if (cartInLocalStorage) setCart(JSON.parse(cartInLocalStorage));
  }, [setCart]);

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
        <div className="absolute z-10 right-0 top-16 md:top-8 bg-white rounded-xl shadow-2xl min-w-[90vw] md:min-w-60 w-max min-h-40 grid grid-rows-[3rem_1fr]">
          <h3 className="px-5 py-3">Cart</h3>
          <div className="border-t-grayishBlue border-t h-full">
            {cart ? (
              <ul>
                <CartItem onClose={() => setIsExpanded(false)} />
              </ul>
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="text-center">Your cart is empty.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
