import React, { useState } from "react";
import convert from "color-convert";
import { toast } from "react-toastify";
import {
  toastStyleSuccess,
  toastStyleError,
} from "../../../Components/utils/Toastify/toastStyle";

const ColorConverter = () => {
  const [color, setColor] = useState("#02a057");
  const [conversionType, setConversionType] = useState("rgb");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleConversionTypeChange = (e) => {
    setConversionType(e.target.value);
  };

  const convertColor = () => {
    switch (conversionType) {
      case "hex":
        return color;
      case "rgb":
        return `rgb(${convert.hex.rgb(color).join(", ")})`;
      case "hsl":
        return `hsl(${convert.hex.hsl(color).join(", ")})`;
      default:
        return color;
    }
  };

  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(convertedCOlor);
      toast(`Color Copied to Clipboard!`, { style: toastStyleSuccess });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = convertedCOlor;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast(`Color Copied to Clipboard!`, { style: toastStyleSuccess });
    }
  };
  const convertedCOlor = convertColor();

  return (
    <div className="bg-[#1a1c2e] p-8 rounded shadow-md max-w-sm mt-5">
      <h3 className="text-gray-400">Enter a Hex Color:</h3>
      <input
        type="text"
        className="w-full border-none p-2 mb-4 rounded outline-none focus-border-2 focus:ring-2 focus:ring-blue-500 bg-[#333659]"
        placeholder="Enter a color"
        value={color}
        onChange={handleColorChange}
      />
      <div className="text-gray-400">Select Format:</div>
      <select
        className="w-full  p-2 mb-4 rounded border-none px-4 appearance-none focus:outline-none cursor-pointer bg-[#333659]"
        value={conversionType}
        onChange={handleConversionTypeChange}
      >
        <option value="hex">Hex</option>
        <option value="rgb">RGB</option>
        <option value="hsl">HSL</option>
      </select>
      <div
        className="w-full h-20 rounded bg-gray-300 flex items-center justify-center text-gray-800 text-xl shadow-md cursor-pointer overflow-hidden"
        style={{ backgroundColor: color }}
        onClick={handleCopy}
      >
        {convertColor()}
      </div>
    </div>
  );
};

export default ColorConverter;
