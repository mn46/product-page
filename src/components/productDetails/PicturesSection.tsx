import React, { Dispatch, SetStateAction, useState } from "react";
import { Product } from "../../types/types";

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

  return (
    <div>
      <div
        className={`flex flex-col w-full gap-8 ${
          isModalOpen &&
          "absolute max-w-[35vw] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        }`}
      >
        <button
          onClick={() => {
            if (setIsModalOpen) setIsModalOpen(true);
          }}
        >
          <img
            src={selectedImage}
            alt={typedProductData.name}
            className="rounded-xl"
          />
        </button>

        <div className="w-full flex flex-row gap-8">
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
