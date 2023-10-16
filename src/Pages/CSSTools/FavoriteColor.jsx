import React, { useState } from "react";
import FavColors from "../../Components/utils/Colors/Color";
import { motion } from "framer-motion";
import { container, item } from "../../Components/utils/Motion/Motion";
import { toast } from "react-toastify";
import { toastStyleSuccess } from "../../Components/utils/Toastify/toastStyle";
import { Helmet } from "react-helmet-async";

const FavoriteColor = () => {
  const copyToClipboard = (color) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
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
    <>
      <Helmet>
        <title>Favorite Colors</title>
      </Helmet>
      <div className="p-4 sm:ml-52 max-w-screen-full overflow-y-auto  max-h-screen">
        <div className=" my-20  max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Favorite Colors
          </h3>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap  gap-4 justify-center  mt-8"
          >
            {FavColors.map((color, index) => (
              <motion.div
                key={index}
                variants={item}
                style={{ backgroundColor: color }}
                className=" px-2 py-10 min-w-[200px] cursor-pointer rounded-md shadow-md text-white text-center"
                onClick={() => copyToClipboard(color)}
              >
                <motion.div className="font-medium">{color}</motion.div>
              </motion.div>
            ))}
          </motion.div>
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
    </>
  );
};

export default FavoriteColor;
