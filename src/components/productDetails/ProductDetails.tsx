import { useEffect, useState } from "react";
import productData from "../../data/products.json";
import { Product } from "../../types/types";

const ProductDetails: React.FC = () => {
  const [typedData, setTypedData] = useState<Product | null>(null);

  useEffect(() => {
    if (productData) setTypedData(productData);
  }, []);
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
    </div>
  );
};

export default ProductDetails;
