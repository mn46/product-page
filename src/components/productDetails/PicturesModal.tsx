import React from "react";
import CloseIcon from "/icons/icon-close.svg";

interface Props {
  children: React.ReactNode;
  handleClose: () => void;
}

const PicturesModal: React.FC<Props> = ({ children, handleClose }) => {
  return (
    <div className="fixed top-0 left-0 w-[100vw] h-full bg-darkBlue bg-opacity-65">
      <div className="flex flex-col py-5 px-10">
        <button onClick={() => handleClose()} className="self-end">
          <img
            id="close-icon"
            src={CloseIcon}
            alt="Close icon"
            className="w-5 h-auto"
          />
        </button>
        {children}
      </div>
    </div>
  );
};

export default PicturesModal;
