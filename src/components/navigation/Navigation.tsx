import { useState } from "react";
import MenuItem from "./MenuItem";
import BurgerMenuIcon from "/icons/icon-menu.svg";

const Navigation: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const menuItems = ["collections", "men", "women", "about", "contact"];

  return (
    <>
      <button
        className={isExpanded ? "hidden" : "block md:hidden"}
        onClick={() => setIsExpanded(true)}
      >
        <img src={BurgerMenuIcon} alt="Burger menu icon" />
      </button>
      <div
        className={`h-full ${
          isExpanded ? "absolute top-0 left-0" : "hidden md:flex"
        }`}
      >
        <button
          className={isExpanded ? "block" : "hidden"}
          onClick={() => setIsExpanded(false)}
        >
          X
        </button>
        <ul className="flex flex-col md:flex-row gap-6 h-full">
          {menuItems.map((item) => (
            <MenuItem text={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
