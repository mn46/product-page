import { useState } from "react";
import CartIcon from "/icons/icon-cart.svg";

const Cart = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleIsExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <button onClick={() => toggleIsExpanded()}>
        <img src={CartIcon} />
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
