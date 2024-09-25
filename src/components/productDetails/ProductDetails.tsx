import { useEffect, useState } from "react";
import productData from "../../data/products.json";
import { Product } from "../../types/types";
import Button from "../buttons/Button";
import CartIcon from "../icons/CartIcon";
import PicturesSection from "./PicturesSection";

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
    typedData && (
      <div className="grid md:grid-flow-col gap-32 mt-10 mx-5">
        <PicturesSection typedProductData={typedData} />
        <div className="flex flex-col gap-5">
          <section className="flex flex-col gap-5">
            <h4 className="uppercase text-primaryOrange text-sm font-semibold">
              {typedData.brand}
            </h4>
            <h2 className="text-4xl font-bold text-darkBlue">
              {typedData.name}
            </h2>
            <p className="text-darkGrayishBlue">{typedData.description}</p>

            <div>
              <div className="flex flex-row gap-3 items-center">
                <p className="text-2xl font-bold text-darkBlue">
                  ${typedData.price}
                </p>
                {typedData.discount && (
                  <div className="bg-primaryPaleOrange px-2 py-0.5 rounded-lg text-primaryOrange text-sm font-semibold">
                    <p>{typedData.discount}%</p>
                  </div>
                )}
              </div>
              {typedData.discount && (
                <p className="text-darkGrayishBlue text-sm font-semibold line-through">
                  ${typedData.price * (100 / typedData.discount)}
                </p>
              )}
            </div>
          </section>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="md:w-28 flex flex-row justify-between items-center bg-lightGrayishBlue rounded-lg">
              <Button
                variant="secondary"
                onClick={() => handleDecrement()}
                className="font-bold text-2xl"
              >
                -
              </Button>
              {amount}
              <Button
                variant="secondary"
                onClick={() => handleIncrement()}
                className="font-bold text-2xl"
              >
                +
              </Button>
            </div>

            <Button
              variant="primary"
              className="flex flex-row gap-2 items-center"
            >
              <CartIcon className="w-5 h-auto fill-white" />
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
