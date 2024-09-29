import "./App.css";
import NavBar from "./components/navigation/NavBar";
import ProductDetails from "./components/productDetails/ProductDetails";

function App() {
  return (
    <div className="mx-10 md:mx-32 xl:mx-auto max-w-[1320px]">
      <NavBar />
      <ProductDetails />
    </div>
  );
}

export default App;
