import { useEffect, useState } from "react";

interface Props {
  text: string;
}

const MenuItem: React.FC<Props> = ({ text }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const pathname = window.location.pathname.slice(1);

    if (text === pathname) {
      setIsActive(true);
    }
  }, [text]);

  return (
    <li
      className={`h-full flex items-center hover:active-menu-item ${
        isActive && "active-menu-item"
      }`}
    >
      <a href={`/${text}`} className="font-semibold capitalize">
        {text}
      </a>
    </li>
  );
};

export default MenuItem;
