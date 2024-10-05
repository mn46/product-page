import { useContext, useEffect, useState } from "react";
import productData from "../../data/products.json";
import { Product } from "../../types/types";
import Button from "../buttons/Button";
import CartIcon from "/icons/icon-cart-white.svg";
import PicturesSection from "./PicturesSection";
import MinusIcon from "/icons/icon-minus.svg";
import PlusIcon from "/icons/icon-plus.svg";
import PicturesModal from "./PicturesModal";
import { CartContext } from "../../App";

const ProductDetails: React.FC = () => {
  const [typedData, setTypedData] = useState<Product | null>(null);
  const [amount, setAmount] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { setCart } = useContext(CartContext);

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

  const handleAddToCart = () => {
    setCart({
      amount: amount,
      product: productData,
    });

    localStorage.setItem(
      "cart",
      JSON.stringify({
        amount: amount,
        product: productData,
      })
    );
    alert("Item added to cart");
  };

  return (
    typedData && (
      <div className="grid md:grid-cols-2 lg:grid-cols-[30vw_1fr] md:gap-10 lg:gap-32 mt-10 md:mx-5 pb-10 md:pb-0">
        <PicturesSection
          typedProductData={typedData}
          setIsModalOpen={setIsModalOpen}
        />

        <div className="flex flex-col gap-5 mx-10 md:mx-0 mt-8 md:mt-0">
          <section className="flex flex-col gap-5">
            <h4 className="uppercase text-primaryOrange text-sm font-semibold">
              {typedData.brand}
            </h4>
            <h2 className="text-4xl font-bold text-darkBlue">
              {typedData.name}
            </h2>
            <p className="text-darkGrayishBlue">{typedData.description}</p>

            <div className="flex flex-row justify-between md:flex-col md:justify-normal">
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
            <div className="py-2 md:w-28 flex flex-row justify-between items-center bg-lightGrayishBlue rounded-lg">
              <Button
                variant="secondary"
                onClick={() => handleDecrement()}
                className="font-bold text-2xl"
              >
                <img src={MinusIcon} alt="Minus icon" />
              </Button>
              {amount}
              <Button
                variant="secondary"
                onClick={() => handleIncrement()}
                className="font-bold text-2xl"
              >
                <img src={PlusIcon} alt="Plus icon" />
              </Button>
            </div>

            <Button
              variant="primary"
              className="flex flex-row gap-2 items-center justify-center"
              onClick={() => handleAddToCart()}
            >
              <img src={CartIcon} />
              Add to cart
            </Button>
          </div>
        </div>
        {isModalOpen && (
          <PicturesModal handleClose={() => setIsModalOpen(false)}>
            <PicturesSection
              typedProductData={typedData}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </PicturesModal>
        )}
      </div>
    )
  );
};

export default ProductDetails;
