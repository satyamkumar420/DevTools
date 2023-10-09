import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  toastStyleSuccess,
  toastStyleError,
} from "../../../Components/utils/Toastify/toastStyle";

const HexConverter = () => {
  const [inputColor, setInputColor] = useState("#ff5733");
  const [convertedColor, setConvertedColor] = useState(inputColor);
  const [format, setFormat] = useState("rgb");

  useEffect(() => {
    convertColor();
  }, [inputColor, format]);

  // TODO: Show "Invalid Color" if input is not a valid HEX color
  const convertColor = () => {
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

    if (hexRegex.test(inputColor)) {
      if (format === "hex") {
        setConvertedColor(inputColor);
      } else if (format === "hsl") {
        // Convert HEX to HSL
        const hex = inputColor.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16) / 255;
        const g = parseInt(hex.substring(2, 4), 16) / 255;
        const b = parseInt(hex.substring(4, 6), 16) / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const l = (max + min) / 2;

        let h, s;
        if (max === min) {
          h = s = 0;
        } else {
          const d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) {
            case r:
              h = (g - b) / d + (g < b ? 6 : 0);
              break;
            case g:
              h = (b - r) / d + 2;
              break;
            case b:
              h = (r - g) / d + 4;
              break;
            default:
              break;
          }
          h /= 6;
        }
        const hsl = `hsl(${Math.round(h * 360)}, ${Math.round(
          s * 100
        )}%, ${Math.round(l * 100)}%)`;
        setConvertedColor(hsl);
      } else if (format === "rgb") {
        // Convert HEX to RGB
        const hex = inputColor.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        const rgb = `rgb(${r}, ${g}, ${b})`;
        setConvertedColor(rgb);
      }
    } else {
      setConvertedColor(inputColor);
    }
  };

  const handleCopy = () => {
    convertColor(); // Call convertColor here
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(convertedColor);
      toast(`Color Copied to Clipboard!`, { style: toastStyleSuccess });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = convertedColor;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast(`Color Copied to Clipboard!`, { style: toastStyleSuccess });
    }
  };

  return (
    <div className="bg-[#1a1c2e] p-8 rounded shadow-md max-w-sm mt-5">
      <h3 className="text-gray-400">Enter Hex Color:</h3>
      <input
        type="text"
        className="w-full border-none p-2 mb-4 rounded outline-none focus-border-2 focus:ring-2 focus:ring-blue-500 bg-[#333659]"
        placeholder="Enter HEX color code"
        value={inputColor}
        onChange={(e) => setInputColor(e.target.value)}
      />

      <div className="">
        <div className="text-gray-400">Select Format:</div>

        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="w-full p-2 mb-4 rounded border-none px-4 appearance-none focus:outline-none cursor-pointer bg-[#333659]"
        >
          <option value="hex">HEX</option>
          <option value="hsl">HSL</option>
          <option value="rgb">RGB</option>
        </select>
      </div>

      <div className="">
        <div className="">Converted Color:</div>
        <div
          className={`w-full h-20 rounded flex items-center justify-center text-gray-800 sm:text-xl shadow-md cursor-pointer overflow-hidden ${
            format === "hex" ? "text-gray-300" : "text-black"
          }`}
          style={{ backgroundColor: convertedColor }}
          onClick={handleCopy}
        >
          {convertedColor}
        </div>
      </div>
    </div>
  );
};

export default HexConverter;
