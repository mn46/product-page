import { createContext, useState } from "react";
import "./App.css";
import NavBar from "./components/navigation/NavBar";
import ProductDetails from "./components/productDetails/ProductDetails";
import { Cart } from "./types/types";

export const CartContext = createContext<{ cart; setCart }>();

function App() {
  const [cart, setCart] = useState<Cart>({ amount: 0, product: null });

  return (
    <div className="md:mx-10 lg:mx-32 md:p-0 xl:mx-auto max-w-[1320px]">
      <CartContext.Provider value={{ cart, setCart }}>
        <NavBar />
        <ProductDetails />
      </CartContext.Provider>
    </div>
  );
}

export default App;
