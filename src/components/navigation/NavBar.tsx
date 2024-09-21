import Navigation from "./Navigation";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-10 items-center">
        <p className="font-black text-4xl">sneakers</p>
        <Navigation />
      </div>
      {/* shopping cart */}
      {/* profile */}
    </nav>
  );
};

export default NavBar;
