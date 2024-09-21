import { useState } from "react";
import CartIcon from "/icons/cart.svg";

const Cart = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleIsExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <button onClick={() => toggleIsExpanded()}>
        <img className="w-6 h-auto" alt="shopping cart icon" src={CartIcon} />
      </button>
      {isExpanded && (
        <div>
          <h3>Cart</h3>
        </div>
      )}
    </>
  );
};

export default Cart;
