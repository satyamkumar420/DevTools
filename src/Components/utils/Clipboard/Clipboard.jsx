import React, { useState } from "react";

const Clipboard = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);

    // Reset the "Copied" message after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  const getRandomColor = () => {
    const colors = [
      "#f5d939",
      "#ff0099",
      "#f96c26",
      "#00ff91",
      "#00FFFF",
      "#00ff1e",
      "#2469fe",
      "#b023fc",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  return (
    <div className="relative">
      <button
        onClick={handleCopyClick}
        className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 focus:outline-none"
      >
        Copy
      </button>
      {copied && (
        <div
          className="absolute min-w-[100px] top-[-30px] left-1/2 -translate-x-1/2 z-50 bg-[#292c46] rounded  mt-2 mr-4  text-sm sm:text-base font-bold p-2 transition-opacity duration-300 transform translate-y-[-25px]"
          style={{ color: getRandomColor() }}
        >
          Copied! ✔
        </div>
        // <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300 transform translate-y-[-5px]">
        //   Copied! ✔
        // </div>
      )}
    </div>
  );
};

export default Clipboard;
