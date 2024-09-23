import { useState } from "react";
import CartIcon from "../icons/CartIcon";

const Cart = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleIsExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <button onClick={() => toggleIsExpanded()}>
        <CartIcon className="w-6 h-auto" />
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
