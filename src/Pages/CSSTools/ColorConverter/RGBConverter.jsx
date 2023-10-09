import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  toastStyleSuccess,
  toastStyleError,
} from "../../../Components/utils/Toastify/toastStyle";

const RGBConverter = () => {
  const [inputColor, setInputColor] = useState("rgb(247, 7, 163)");
  const [convertedColor, setConvertedColor] = useState(inputColor);
  const [format, setFormat] = useState("hsl");

  useEffect(() => {
    convertColor();
  }, [inputColor, format]);

  const convertColor = () => {
    const rgbMatch = inputColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    if (!rgbMatch) {
      // Invalid RGB format
      return;
    }

    const [, r, g, b] = rgbMatch.map(Number);

    if (format === "hex") {
      // Convert RGB to HEX
      const hex = `#${r.toString(16).padStart(2, "0")}${g
        .toString(16)
        .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
      setConvertedColor(hex);
    } else if (format === "hsl") {
      // Convert RGB to HSL
      const max = Math.max(r, g, b) / 255;
      const min = Math.min(r, g, b) / 255;
      const l = (max + min) / 2;

      let h, s;

      if (max === min) {
        h = s = 0;
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
          case r / 255:
            h = (g / 255 - b / 255) / d + (g / 255 < b / 255 ? 6 : 0);
            break;
          case g / 255:
            h = (b / 255 - r / 255) / d + 2;
            break;
          case b / 255:
            h = (r / 255 - g / 255) / d + 4;
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
      // Set the input color itself
      setConvertedColor(inputColor);
    } else {
      // Invalid HSL format
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
      <h3 className="text-gray-400">Enter RGB Color:</h3>
      <input
        type="text"
        className="w-full border-none p-2 mb-4 rounded outline-none focus-border-2 focus:ring-2 focus:ring-blue-500 bg-[#333659]"
        placeholder="Enter RGB color code"
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
            format === "hex" ? "text-gray-900" : "text-white"
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

export default RGBConverter;
