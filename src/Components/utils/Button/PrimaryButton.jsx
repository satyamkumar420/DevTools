import React from "react";

const PrimaryButton = ({ onClick, text, className }) => {
  return (
    <button
      className={`bg-blue-600 shadow-md text-white sm:text-lg font-medium hover:bg-blue-800 transition-all ease-in-out rounded py-1 px-3 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
