import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import { toast } from "react-toastify";
import { toastStyleSuccess } from "../../../Components/utils/Toastify/ToastStyle";

const GradientColor = () => {
  const [direction, setDirection] = useState("to left");
  const [color1, setColor1] = useState("#2522e2");
  const [color2, setColor2] = useState("#c2410c");
  const gradientBoxRef = useRef(null);

  const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;
  //   const generateGradient = () => {
  //     gradientBoxRef.current.style.background = gradient;
  //   };

  const handleDirectionChange = (newDirection) => {
    setDirection(newDirection);
  };

  const handleColorChange = (color, setColor) => {
    return (e) => setColor(e.target.value);
  };

  const handleCopy = () => {
    const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(gradient);
      toast("Gradient Color Copied!", { style: toastStyleSuccess });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = gradient;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast("Gradient Color Copied!", { style: toastStyleSuccess });
    }
  };

  return (
    <>
      <Helmet>
        <title>Gradient Color Generator</title>
      </Helmet>
      <div className="p-4 sm:ml-52 max-w-screen overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Gradient Color Generator
          </h3>
          <div className="bg-[#1a1c2e] p-4 my-3 rounded-md">
            <p className="sm:text-xl text-lg bg-[#22253e] p-2 rounded-md my-2  font-medium text-center sm:text-left text-gray-100">
              Choose Direction
            </p>
            <div className="flex gap-2 mb-4 justify-center sm:justify-start flex-wrap">
              {[
                "to top",
                "to bottom",
                "to right",
                "to left",
                "to top right",
                "to top left",
                "to bottom right",
                "to bottom left",
              ].map((dir) => (
                <div className="my-1" key={dir}>
                  <PrimaryButton
                    onClick={() => handleDirectionChange(dir)}
                    text={dir}
                    className={`py-2 w-40 hover:bg-orange-700 ${
                      direction === dir ? "bg-orange-700" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
            <p className="text-lg sm:text-xl bg-[#22253e] p-2 rounded-md my-2  font-medium text-center sm:text-left text-gray-100">
              Pick the Colors
            </p>
            <div className="flex gap-3 justify-center sm:justify-start flex-wrap">
              {[
                { label: "Color 1", color: color1, setColor: setColor1 },
                { label: "Color 2", color: color2, setColor: setColor2 },
              ].map((colorData, index) => (
                <div className="text-center " key={index}>
                  <p className="text-gray-100 font-bold">{colorData.label}</p>
                  <input
                    type="color"
                    value={colorData.color}
                    onChange={handleColorChange(
                      colorData.color,
                      colorData.setColor
                    )}
                    className="w-52 sm:w-60 h-20 rounded-md"
                  />
                </div>
              ))}
            </div>
            <div
              ref={gradientBoxRef}
              className="w-full h-52 p-5 rounded-md mt-4 flex items-center cursor-pointer"
              style={{
                background: `linear-gradient(${direction}, ${color1}, ${color2})`,
              }}
              onClick={handleCopy}
            >
              <div className="text-lg mx-auto text-white">{gradient}</div>
            </div>
          </div>
          <div className="mt-10">
            <div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <p className="text-blue-300">
                The "Gradient Color Generator" is a web-based tool that helps
                users generate custom CSS gradients for their web design and
                development needs. It offers a user-friendly interface that
                allows users to select the gradient direction and choose two
                colors, which will seamlessly transition into each other.
                Additionally, it provides a feature to copy the generated
                gradient code with just a single click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GradientColor;
