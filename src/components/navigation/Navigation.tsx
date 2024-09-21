import { useState } from "react";
import Burgermenu from "/icons/burgermenu.svg";

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <>
      <button
        className={isExpanded ? "hidden" : "block md:hidden"}
        onClick={() => setIsExpanded(true)}
      >
        <img className="w-8 h-auto" alt="burger menu icon" src={Burgermenu} />
      </button>
      <div className={isExpanded ? "absolute top-0 left-0" : "hidden md:block"}>
        <button
          className={isExpanded ? "block" : "hidden"}
          onClick={() => setIsExpanded(false)}
        >
          X
        </button>
        <ul className="flex flex-col md:flex-row gap-6">
          <li>
            <a href="/">Collections</a>
          </li>
          <li>
            <a href="/">Men</a>
          </li>
          <li>
            <a href="/">Women</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
