import React, { useState } from "react";
import { toastStyleSuccess } from "../../Components/utils/Toastify/toastStyle";
import { toast } from "react-toastify";
import PrimaryButton from "../../Components/utils/Button/PrimaryButton";
import { Helmet } from "react-helmet-async";

const generateRandomColor = (format) => {
  const randomColor = {
    hex: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    rgb: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`,
    hsl: `hsl(${Math.floor(Math.random() * 361)}, ${Math.floor(
      Math.random() * 101
    )}%, ${Math.floor(Math.random() * 101)}%)`,
  };
  return randomColor[format];
};

const RandomColor = () => {
  const [colors, setColors] = useState([]);
  const [format, setFormat] = useState("hex");

  const generateColors = () => {
    const newColors = Array.from({ length: 16 }, () =>
      generateRandomColor(format)
    );
    setColors(newColors);
  };

  const handleFormatChange = (newFormat) => {
    setFormat(newFormat);
    generateColors();
  };

  const handleCopy = (colorIndex) => {
    const colorToCopy = colors[colorIndex];

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(colorToCopy);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = colorToCopy;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    toast(`[${colorToCopy}] Copied!`, { style: toastStyleSuccess });
  };

  return (
    <>
      <Helmet>
        <title>Random Colors</title>
      </Helmet>
      <div className="p-4 sm:ml-52  max-w-screen overflow-y-auto  max-h-screen">
        <div className=" my-20  max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Random Colors
          </h3>

          <div className="p-4">
            <div className="flex justify-start gap-3 flex-wrap">
              <div className="">
                <PrimaryButton
                  onClick={generateColors}
                  text={"Generate Colors"}
                  className={" text-white px-4 py-2 rounded-md w-full sm:w-60 "}
                />
              </div>
              <div className="mb-4 flex flex-wrap items-center">
                <label className="mr-2 text-lg">Color Format:</label>
                <select
                  onChange={(e) => handleFormatChange(e.target.value)}
                  value={format}
                  className="px-2 py-3 border-none  rounded bg-[#1a1c2e] shadow-md cursor-pointer ring-transparent focus:outline-none min-w-[200px]"
                >
                  <option value="hex">HEX</option>
                  <option value="rgb">RGB</option>
                  <option value="hsl">HSL</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap  gap-4 justify-center items-center">
              {colors.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className=" px-2 py-10 min-w-[200px]  rounded-md shadow-md text-white text-center cursor-pointer"
                  onClick={() => handleCopy(index)}
                >
                  <span className="font-medium">{color}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <span className="text-blue-300">
                If you're a designer or developer in need of assistance when it
                comes to selecting colors in RGB, HSL, or HEX formats, this tool
                may be just what you need. It allows you to generate random
                colors and copy them as well, making the design process that
                much easier.😎
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomColor;
