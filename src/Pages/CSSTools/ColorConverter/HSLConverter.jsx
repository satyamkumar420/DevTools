import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  toastStyleSuccess,
  toastStyleError,
} from "../../../Components/utils/Toastify/toastStyle";

const HSLConverter = () => {
  const [inputColor, setInputColor] = useState("hsl(135, 100%, 53%)");
  const [convertedColor, setConvertedColor] = useState(inputColor);
  const [format, setFormat] = useState("hex");

  useEffect(() => {
    convertColor();
  }, [inputColor, format]);

  const convertColor = () => {
    if (format === "hsl") {
      setConvertedColor(inputColor);
    } else if (format === "hex") {
      // Convert HSL to HEX
      const hslMatch = inputColor.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);

      if (hslMatch) {
        const [, h, s, l] = hslMatch.map(Number);

        const hslToRgb = (h, s, l) => {
          const C = (1 - Math.abs(2 * l - 1)) * s;
          const X = C * (1 - Math.abs(((h / 60) % 2) - 1));
          const m = l - C / 2;
          let r, g, b;

          if (h >= 0 && h < 60) {
            r = C;
            g = X;
            b = 0;
          } else if (h >= 60 && h < 120) {
            r = X;
            g = C;
            b = 0;
          } else if (h >= 120 && h < 180) {
            r = 0;
            g = C;
            b = X;
          } else if (h >= 180 && h < 240) {
            r = 0;
            g = X;
            b = C;
          } else if (h >= 240 && h < 300) {
            r = X;
            g = 0;
            b = C;
          } else {
            r = C;
            g = 0;
            b = X;
          }

          const red = Math.round((r + m) * 255);
          const green = Math.round((g + m) * 255);
          const blue = Math.round((b + m) * 255);

          return `#${red.toString(16).padStart(2, "0")}${green
            .toString(16)
            .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
        };

        const hex = hslToRgb(h, s / 100, l / 100);
        setConvertedColor(hex);
      } else {
        // Invalid HSL format
        setConvertedColor(inputColor);
      }
    } else if (format === "rgb") {
      // Convert HSL to RGB
      const hslMatch = inputColor.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);

      if (hslMatch) {
        const [, h, s, l] = hslMatch.map(Number);

        const hslToRgb = (h, s, l) => {
          const C = (1 - Math.abs(2 * l - 1)) * s;
          const X = C * (1 - Math.abs(((h / 60) % 2) - 1));
          const m = l - C / 2;
          let r, g, b;

          if (h >= 0 && h < 60) {
            r = C;
            g = X;
            b = 0;
          } else if (h >= 60 && h < 120) {
            r = X;
            g = C;
            b = 0;
          } else if (h >= 120 && h < 180) {
            r = 0;
            g = C;
            b = X;
          } else if (h >= 180 && h < 240) {
            r = 0;
            g = X;
            b = C;
          } else if (h >= 240 && h < 300) {
            r = X;
            g = 0;
            b = C;
          } else {
            r = C;
            g = 0;
            b = X;
          }

          const red = Math.round((r + m) * 255);
          const green = Math.round((g + m) * 255);
          const blue = Math.round((b + m) * 255);

          return `rgb(${red}, ${green}, ${blue})`;
        };

        const rgb = hslToRgb(h, s / 100, l / 100);
        setConvertedColor(rgb);
      } else {
        // Invalid HSL format
        setConvertedColor(inputColor);
      }
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
      <h3 className="text-gray-400">Enter HSL Color:</h3>
      <input
        type="text"
        className="w-full border-none p-2 mb-4 rounded outline-none focus-border-2 focus:ring-2 focus:ring-blue-500 bg-[#333659]"
        placeholder="Enter HSL color code"
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

export default HSLConverter;
