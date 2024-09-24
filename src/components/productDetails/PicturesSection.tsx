import React, { useState } from "react";
import { Product } from "../../types/types";

interface Props {
  typedProductData: Product;
}

const PicturesSection: React.FC<Props> = ({ typedProductData }) => {
  const [isModal, setIsModal] = useState<boolean>(false);

  return (
    <div className="flex flex-col xl:w-[30vw] gap-8">
      {/* main picture - button? -> on click: display component in a modal */}
      <img
        src={typedProductData.images[0]}
        alt={typedProductData.name}
        className="w-full h-auto rounded-xl"
      />
      {/* thumbnails */}
      <div className="w-full flex flex-row gap-8">
        {typedProductData.thumbnails.map((thumbnail) => (
          <img
            src={thumbnail}
            alt={typedProductData.name}
            className="rounded-xl min-w-0"
          />
        ))}
      </div>
    </div>
  );
};

export default PicturesSection;
