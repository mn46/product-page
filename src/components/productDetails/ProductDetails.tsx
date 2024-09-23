import { useEffect, useState } from "react";
import productData from "../../data/products.json";
import { Product } from "../../types/types";
import Button from "../buttons/Button";
import CartIcon from "../icons/CartIcon";

const ProductDetails: React.FC = () => {
  const [typedData, setTypedData] = useState<Product | null>(null);
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    if (productData) setTypedData(productData);
  }, []);

  const handleIncrement = () => {
    setAmount((prev) => ++prev);
  };

  const handleDecrement = () => {
    if (amount === 0) return;
    setAmount((prev) => --prev);
  };

  return (
    <div>
      {/* pictures */}
      <section>
        <h4>{typedData?.brand}</h4>
        <h2>{typedData?.name}</h2>
        <p>{typedData?.description}</p>

        <div>
          <p>${typedData?.price}</p>
          {typedData?.discount && (
            <div>
              <p>{typedData?.discount}%</p>
            </div>
          )}
        </div>

        {typedData?.discount && (
          <p>${typedData?.price * (100 / typedData?.discount)}</p>
        )}
      </section>

      {/* buttons */}
      <div className="flex flex-row bg-lightGrayishBlue rounded-lg items-center">
        <Button variant="secondary" onClick={() => handleDecrement()}>
          -
        </Button>
        {amount}
        <Button variant="secondary" onClick={() => handleIncrement()}>
          +
        </Button>
      </div>

      <Button variant="primary" className="flex flex-row gap-2 items-center">
        <CartIcon className="w-5 h-auto fill-white" />
        Add to cart
      </Button>
    </div>
  );
};

export default ProductDetails;
