import "./App.css";
import NavBar from "./components/navigation/NavBar";
import ProductDetails from "./components/productDetails/ProductDetails";

function App() {
  return (
    <div className="md:mx-10 lg:mx-32 md:p-0 xl:mx-auto max-w-[1320px]">
      <NavBar />
      <ProductDetails />
    </div>
  );
}

export default App;
