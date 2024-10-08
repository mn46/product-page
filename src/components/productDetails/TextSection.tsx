import { Product } from "../../types/types";

interface Props {
  typedProductData: Product;
}

const TextSection: React.FC<Props> = ({ typedProductData }) => {
  return (
    <section className="flex flex-col gap-5">
      <h4 className="uppercase text-primaryOrange text-sm font-semibold">
        {typedProductData.brand}
      </h4>
      <h2 className="text-4xl font-bold text-darkBlue">
        {typedProductData.name}
      </h2>
      <p className="text-darkGrayishBlue">{typedProductData.description}</p>

      <div className="flex flex-row justify-between md:flex-col md:justify-normal">
        <div className="flex flex-row gap-3 items-center">
          <p className="text-2xl font-bold text-darkBlue">
            ${typedProductData.price}
          </p>
          {typedProductData.discount && (
            <div className="bg-primaryPaleOrange px-2 py-0.5 rounded-lg text-primaryOrange text-sm font-semibold">
              <p>{typedProductData.discount}%</p>
            </div>
          )}
        </div>
        {typedProductData.discount && (
          <p className="text-darkGrayishBlue text-sm font-semibold line-through">
            ${typedProductData.price * (100 / typedProductData.discount)}
          </p>
        )}
      </div>
    </section>
  );
};

export default TextSection;
