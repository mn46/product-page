import Cart from "./Cart";
import Navigation from "./Navigation";

const NavBar = () => {
  return (
    <nav className="px-5 md:px-10 flex flex-row justify-between items-center h-20 border-b border-b-grayishBlue">
      <div className="flex flex-row gap-10 items-center h-full">
        <div className="md:hidden">
          <Navigation />
        </div>
        <p className="font-black text-4xl">sneakers</p>
        <div className="hidden md:block md:h-full">
          <Navigation />
        </div>
      </div>
      <Cart />
    </nav>
  );
};

export default NavBar;
