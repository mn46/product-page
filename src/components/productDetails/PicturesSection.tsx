import React, { useState } from "react";
import { Product } from "../../types/types";

interface Props {
  typedProductData: Product;
}

const PicturesSection: React.FC<Props> = ({ typedProductData }) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    typedProductData.images[0]
  );
  const [isModal, setIsModal] = useState<boolean>(false);

  return (
    <div className="flex flex-col xl:w-[30vw] gap-8">
      <img
        src={selectedImage}
        alt={typedProductData.name}
        className="w-full h-auto rounded-xl"
      />

      <div className="w-full flex flex-row gap-8">
        {typedProductData.thumbnails.map((thumbnail) => {
          const imageSource = `${thumbnail.slice(
            0,
            thumbnail.lastIndexOf("-")
          )}.jpg`;
          return (
            <button
              onClick={() => setSelectedImage(imageSource)}
              className={`w-max h-max rounded-xl overflow-hidden  ${
                selectedImage === imageSource && "border-2 border-primaryOrange"
              }`}
            >
              <img
                src={thumbnail}
                alt={typedProductData.name}
                className={`min-w-0 ${
                  selectedImage === imageSource && "opacity-40"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PicturesSection;
