import React from "react";
import { Cart } from "../../types/types";
import DeleteIcon from "/icons/icon-delete.svg";

interface Props {
  cartData: Cart;
  onClose: () => void;
}

const CartItem: React.FC<Props> = ({ cartData, onClose }) => {
  const handleDelete = () => {
    localStorage.removeItem("cart");
    onClose();
  };

  return (
    cartData.product && (
      <li className="p-4 flex flex-row gap-2">
        <img
          src={cartData.product.thumbnails[0]}
          alt={cartData.product.name}
          className="rounded-lg max-w-16 h-auto"
        />
        <div>
          <h4>{cartData.product.name}</h4>
          <div className="flex flex-row justify-between">
            {cartData.amount ? (
              <p>
                ${cartData.product.price} x {cartData.amount}{" "}
                <span className="font-bold">
                  ${cartData.product.price * cartData.amount}
                </span>{" "}
              </p>
            ) : (
              <p>${cartData.product.price}</p>
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
