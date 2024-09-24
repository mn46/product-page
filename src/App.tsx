import "./App.css";
import NavBar from "./components/navigation/NavBar";
import ProductDetails from "./components/productDetails/ProductDetails";

function App() {
  return (
    <div className="mx-10">
      <NavBar />
      <ProductDetails />
    </div>
  );
}

export default App;
