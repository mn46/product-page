import React, { useContext } from "react";
import DeleteIcon from "/icons/icon-delete.svg";
import { CartContext } from "../../App";

interface Props {
  onClose: () => void;
}

const CartItem: React.FC<Props> = ({ onClose }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleDelete = () => {
    localStorage.removeItem("cart");
    setCart(null);
    onClose();
  };

  return (
    cart.product && (
      <li className="p-4 flex flex-row gap-2">
        <img
          src={cart.product.thumbnails[0]}
          alt={cart.product.name}
          className="rounded-lg max-w-16 h-auto"
        />
        <div>
          <h4>{cart.product.name}</h4>
          <div className="flex flex-row justify-between">
            {cart.amount ? (
              <p>
                ${cart.product.price} x {cart.amount}{" "}
                <span className="font-bold">
                  ${cart.product.price * cart.amount}
                </span>{" "}
              </p>
            ) : (
              <p>${cart.product.price}</p>
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
