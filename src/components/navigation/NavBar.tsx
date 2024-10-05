import Cart from "./Cart";
import Navigation from "./Navigation";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center h-20 border-b border-b-grayishBlue">
      <div className="flex flex-row gap-10 items-center h-full">
        <p className="font-black text-4xl">sneakers</p>
        <Navigation />
      </div>
      <Cart />
    </nav>
  );
};

export default NavBar;
