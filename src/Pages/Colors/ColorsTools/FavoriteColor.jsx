import React, { useState } from "react";
import FavColors from "../../../Components/utils/Colors/Color";
import CopiedMessage from "../../../Components/utils/Clipboard/CopyMessage";

const FavoriteColor = () => {
  const [copiedColor, setCopiedColor] = useState(null);

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => {
      setCopiedColor(null);
    }, 1000);
  };

  return (
    <div className="p-4 sm:ml-48 max-w-screen-lg overflow-y-auto  max-h-screen">
      <div className=" mt-20 ">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Favorite Colors
        </h3>
        <div className="flex flex-wrap  gap-4 justify-center  mt-8">
          {FavColors.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className="relative px-2 py-10 min-w-[200px] cursor-pointer rounded-md shadow-md text-white text-center"
              onClick={() => copyToClipboard(color)}
            >
              <span className="font-medium">{color}</span>
              {copiedColor === color && <CopiedMessage />}
            </div>
          ))}
        </div>
        <div className="mt-10">
          <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
            <span className="text-blue-300">
              This is the ultimate tool for developers and coders to
              effortlessly select their preferred colors. The process is as
              simple as copying and pasting the colors of your choice.😎
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteColor;
