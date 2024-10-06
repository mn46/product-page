import { useState } from "react";
import MenuItem from "./MenuItem";
import BurgerMenuIcon from "/icons/icon-menu.svg";
import CloseIcon from "/icons/icon-close.svg";

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
          isExpanded
            ? "absolute z-10 top-0 left-0 bg-darkBlue bg-opacity-25 w-full"
            : "hidden md:flex"
        }`}
      >
        <div
          className={`flex flex-col gap-12 md:h-full ${
            isExpanded && "h-full bg-white w-[60vw] p-5"
          }`}
        >
          <button
            className={isExpanded ? "block" : "hidden"}
            onClick={() => setIsExpanded(false)}
          >
            <img src={CloseIcon} alt="close icon" />
          </button>
          <ul className="flex flex-col md:flex-row gap-8 md:h-full">
            {menuItems.map((item) => (
              <MenuItem text={item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
