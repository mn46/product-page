import React, { Dispatch, SetStateAction, useState } from "react";
import { Product } from "../../types/types";
import Previous from "/icons/icon-previous.svg";
import Next from "/icons/icon-next.svg";

interface Props {
  typedProductData: Product;
  isModalOpen?: boolean;
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>;
}

const PicturesSection: React.FC<Props> = ({
  typedProductData,
  isModalOpen,
  setIsModalOpen,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    typedProductData.images[0]
  );

  const getNextImage = () => {
    const currentImageIndex = typedProductData.images.indexOf(selectedImage);

    if (currentImageIndex === typedProductData.images.length - 1) {
      setSelectedImage(typedProductData.images[0]);
    } else {
      setSelectedImage(typedProductData.images[currentImageIndex + 1]);
    }
  };

  const getPreviousImage = () => {
    const currentImageIndex = typedProductData.images.indexOf(selectedImage);

    if (currentImageIndex === 0) {
      setSelectedImage(
        typedProductData.images[typedProductData.images.length - 1]
      );
    } else {
      setSelectedImage(typedProductData.images[currentImageIndex - 1]);
    }
  };

  return (
    <div>
      <div
        className={`flex flex-col w-full gap-8 ${
          isModalOpen &&
          "absolute md:max-w-[35vw] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        }`}
      >
        <div className="relative w-full">
          <button
            className={`bg-white rounded-full p-4 top-[50%] left-2 md:left-0 md:-translate-x-[50%] -translate-y-[50%] shadow-lg ${
              isModalOpen ? "absolute" : "absolute md:hidden"
            }`}
            onClick={() => getPreviousImage()}
          >
            <img src={Previous} alt="Arrow left icon" />
          </button>
          <button
            onClick={() => {
              if (setIsModalOpen) setIsModalOpen(true);
            }}
          >
            <img
              src={selectedImage}
              alt={typedProductData.name}
              className="md:rounded-xl w-full h-auto"
            />
          </button>
          <button
            className={`bg-white rounded-full p-4 absolute top-[50%] right-2 md:right-0 md:translate-x-[50%] -translate-y-[50%] shadow-lg ${
              isModalOpen ? "absolute" : "absolute md:hidden"
            }`}
            onClick={() => getNextImage()}
          >
            <img src={Next} alt="Arrow right icon" />
          </button>
        </div>

        <div className="w-full hidden md:flex flex-row gap-8">
          {typedProductData.thumbnails.map((thumbnail) => {
            const imageSource = `${thumbnail.slice(
              0,
              thumbnail.lastIndexOf("-")
            )}.jpg`;
            return (
              <button
                onClick={() => setSelectedImage(imageSource)}
                className={`w-max h-max rounded-xl overflow-hidden ${
                  selectedImage === imageSource &&
                  "border-2 border-primaryOrange"
                }`}
              >
                <img
                  src={thumbnail}
                  alt={typedProductData.name}
                  className={`min-w-0 hover:opacity-40 ${
                    selectedImage === imageSource && "opacity-40"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PicturesSection;
