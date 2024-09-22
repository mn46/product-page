import { useState } from "react";
import Burgermenu from "/icons/burgermenu.svg";
import MenuItem from "./MenuItem";

const Navigation: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const menuItems = ["collections", "men", "women", "about", "contact"];

  return (
    <>
      <button
        className={isExpanded ? "hidden" : "block md:hidden"}
        onClick={() => setIsExpanded(true)}
      >
        <img className="w-8 h-auto" alt="burger menu icon" src={Burgermenu} />
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
