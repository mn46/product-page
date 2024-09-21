import Cart from "./Cart";
import Navigation from "./Navigation";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center mx-10 py-6 border-b-2 border-b-grayishBlue">
      <div className="flex flex-row gap-10 items-center">
        <p className="font-black text-4xl">sneakers</p>
        <Navigation />
      </div>
      <Cart />
      {/* profile */}
    </nav>
  );
};

export default NavBar;
