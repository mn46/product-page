import React, { useContext } from "react";
import DeleteIcon from "/icons/icon-delete.svg";
import { CartContext } from "../../App";

interface Props {
  onClose: () => void;
}

const CartItem: React.FC<Props> = ({ onClose }) => {
  const cartContext = useContext(CartContext);

  const handleDelete = () => {
    localStorage.removeItem("cart");
    cartContext?.setCart(null);
    onClose();
  };

  return (
    cartContext?.cart &&
    cartContext?.cart.product && (
      <li className="p-4 flex flex-row gap-2">
        <img
          src={cartContext?.cart.product.thumbnails[0]}
          alt={cartContext?.cart.product.name}
          className="rounded-lg max-w-16 h-auto"
        />
        <div>
          <h4>{cartContext?.cart.product.name}</h4>
          <div className="flex flex-row justify-between">
            {cartContext?.cart.amount ? (
              <p>
                ${cartContext?.cart.product.price} x {cartContext?.cart.amount}{" "}
                <span className="font-bold">
                  ${cartContext?.cart.product.price * cartContext?.cart.amount}
                </span>{" "}
              </p>
            ) : (
              <p>${cartContext?.cart.product.price}</p>
            )}
          </div>
        </div>
        <button onClick={() => handleDelete()}>
          <img src={DeleteIcon} alt="Delete icon" />
        </button>
      </li>
    )
  );
};

export default CartItem;
