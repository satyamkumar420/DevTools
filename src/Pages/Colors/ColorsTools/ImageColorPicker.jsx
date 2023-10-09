import React, { useState, useCallback, useEffect } from "react";
import useEyeDropper from "use-eye-dropper";
import { toast } from "react-toastify";
import {
  toastStyleError,
  toastStyleSuccess,
} from "../../../Components/utils/Toastify/toastStyle";

const ImageColorPicker = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const { open, close, isSupported } = useEyeDropper();
  const [color, setColor] = useState("");
  const [colorHistory, setColorHistory] = useState([]);

  // Load color history from local storage if it exists
  useEffect(() => {
    const storedColorHistory = localStorage.getItem("colorHistory");
    if (storedColorHistory) {
      setColorHistory(JSON.parse(storedColorHistory));
    }
  }, []);

  // Save color history to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("colorHistory", JSON.stringify(colorHistory));
  }, [colorHistory]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check if the file type is an image (you can modify this check to include additional image types)
      if (file.type.startsWith("image/")) {
        const fileURL = URL.createObjectURL(file);
        setImageSrc(fileURL);
      } else {
        // Show a toast or an alert for non-image file types
        toast("Only image files are accepted", {
          style: toastStyleError,
        });
      }
    }
  };

  const pickColor = useCallback(async () => {
    try {
      const pickedColor = await open();
      const sRGBHexColor = pickedColor.sRGBHex;

      // Update color state
      setColor(sRGBHexColor);

      // Add picked color to history
      setColorHistory([...colorHistory, sRGBHexColor]);
    } catch (e) {
      // return none
    }
  }, [open, colorHistory]);

  const copyColorToClipboard = (color) => {
    if (color) {
      navigator.clipboard.writeText(color);
      toast(`[${color}] Copied!`, { style: toastStyleSuccess });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = color;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast(`[${color}] Copied!`, { style: toastStyleSuccess });
    }
  };

  return (
    <div className="p-4 sm:ml-52 max-w-screen-full overflow-y-auto  max-h-screen">
      <div className=" my-20  max-w-screen-lg">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Image Color Picker
        </h3>
        <div className="mt-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-slate-500 
        file:mr-4 file:py-2 file:px-4 file:rounded
        file:border-0 file:text-sm sm:file:text-base file:font-medium
        file:bg-blue-500 file:text-blue-50 
        hover:file:bg-blue-700 cursor-pointer file:cursor-pointer"
          />
          {imageSrc && (
            <div className="my-4">
              <div className="border-2 border-pink-500 border-dashed  items-center justify-center flex w-fit">
                <img
                  src={imageSrc}
                  alt="Selected"
                  className="max-h-96 max-w-full p-5 "
                />
              </div>
              <button
                onClick={pickColor}
                className="mt-4 px-4 py-2 hover:bg-blue-700 bg-blue-500 text-white rounded"
              >
                Pick Color
              </button>
            </div>
          )}
          {color && (
            <div className="mt-4">
              <h3 className="text-lg text-gray-400 sm:text-xl">
                Selected Color History
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {colorHistory.map((color, index) => (
                  <div
                    className="w-36 h-28 cursor-pointer rounded justify-center items-center text-center flex shadow-md"
                    style={{ backgroundColor: color }}
                    key={index}
                    onClick={() => copyColorToClipboard(color)}
                  >
                    <div>{color}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="mt-10">
          <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
            <span className="text-blue-300">
              If you're a developer, student, or professional, you might find
              this tool pretty handy. It's an image color picker that lets you
              easily select any color in hex format - just click on the color
              pick button and you're good to go!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageColorPicker;
