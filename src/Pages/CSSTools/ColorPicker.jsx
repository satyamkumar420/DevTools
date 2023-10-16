import { useState } from "react";
import { toast } from "react-toastify";
import { toastStyleSuccess } from "../../Components/utils/Toastify/toastStyle";
import PrimaryButton from "../../Components/utils/Button/PrimaryButton";
import { Helmet } from "react-helmet-async";

const ColorPicker = () => {
  const [color, setColor] = useState("#00ffd5");

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
  };
  // Calculate RGB and HSL values from HEX color
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  // RGB To HSL
  const rgbToHsl = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
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
      }
      h /= 6;
    }

    return { h, s, l };
  };

  const rgb = hexToRgb(color);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const hslColor = `hsl(${Math.round(hsl.h * 360)}, ${Math.round(
    hsl.s * 100
  )}%, ${Math.round(hsl.l * 100)}%)`;
  const rgbColor = `rgb(${rgb.r},${rgb.g},${rgb.b})`;

  const handleCopyClick = (copyColor) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(copyColor);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = colorToCopy;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    toast("Color Copied to Clipboard!", { style: toastStyleSuccess });
  };

  return (
    <>
      <Helmet>
        <title>Color Picker</title>
      </Helmet>
      <div className="p-4 sm:ml-52 max-w-screen-full overflow-y-auto  max-h-screen">
        <div className=" my-20  max-w-screen-lg ">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Color Picker
          </h3>
          <div className="mt-10 flex flex-wrap gap-6 items-center justify-center">
            <div>
              <input
                type="color"
                value={color}
                onChange={handleColorChange}
                className="min-w-[200px] min-h-[200px]  rounded border-slate-900 focus:ring focus:ring-opacity-50"
              />
            </div>
            <div className=" flex flex-wrap gap-5 justify-center">
              <div className="shadow-lg min-w-[170px] min-h-[200px] text-center bg-[#1a1c2e] rounded">
                <span className="block text-blue-300 text-sm font-bold mb-5 mt-3">
                  RGB
                </span>
                <div
                  className="mx-2 bg-[#0d111d] p-2 rounded"
                  style={{ color: color }}
                >
                  {rgbColor}
                </div>
                <div className="mt-10">
                  <PrimaryButton
                    onClick={() => handleCopyClick(rgbColor)}
                    text={"Copy"}
                  />
                </div>
              </div>
              <div className="shadow-lg min-w-[170px] min-h-[200px] text-center bg-[#1a1c2e] rounded">
                <span className="block text-blue-300 text-sm font-bold mb-5 mt-3">
                  HSL
                </span>
                <div
                  className="mx-2 bg-[#0d111d] p-2 rounded"
                  style={{ color: color }}
                >
                  {hslColor}
                </div>

                <div className="mt-10">
                  <PrimaryButton
                    onClick={() => handleCopyClick(hslColor)}
                    text={"Copy"}
                  />
                </div>
              </div>
              <div className="shadow-lg min-w-[170px] min-h-[200px] text-center bg-[#1a1c2e] rounded">
                <span className="block text-blue-300 text-sm font-bold mb-5 mt-3">
                  HEX
                </span>
                <div
                  className="mx-2 bg-[#0d111d] p-2 rounded"
                  style={{ color: color }}
                >
                  {color}
                </div>
                <div className="mt-10">
                  <PrimaryButton
                    onClick={() => handleCopyClick(color)}
                    text={"Copy"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <span className="text-blue-300">
                This tool can help you choose colors in RGB, HSL, and HEX
                formats. It's essential for anyone who wants to ensure their
                colors are accurate.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorPicker;
