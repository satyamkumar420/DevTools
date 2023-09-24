import React, { useState } from "react";

const Clipboard = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);

    // Reset the "Copied" message after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 1000);
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
  // TODO: copy button top showing how can fix that
  return (
    <div className="relative z-[0]">
      <button
        onClick={handleCopyClick}
        className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 focus:outline-none  transition-all duration-300"
      >
        Copy
      </button>
      {copied && (
        <div
          className="absolute min-w-[100px] top-[-25px] left-1/2 -translate-x-1/2 z-50 bg-[#292c46] rounded  mt-2 mr-4  text-sm sm:text-base font-bold p-2 transition-opacity duration-300 transform translate-y-[-25px]"
          style={{ color: getRandomColor() }}
        >
          Copied! ✔
        </div>
      )}
    </div>
  );
};

export default Clipboard;
