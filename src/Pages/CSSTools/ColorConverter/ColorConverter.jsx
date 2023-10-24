import HSLConverter from "./HSLConverter";
import HexConverter from "./HexConverter";
import RGBConverter from "./RGBConverter";
import { Helmet } from "react-helmet-async";

const ColorConverter = () => {
  return (
    <>
      <Helmet>
        <title>Color Converters</title>
      </Helmet>
      <div className="p-4 sm:ml-52 text-justify max-w-screen overflow-y-auto max-h-screen">
        <div className="my-20  max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Colors Converters
          </h3>
          <div className="flex flex-wrap gap-5 justify-center">
            <HexConverter />
            <RGBConverter />
            <HSLConverter />
          </div>
          <div className="mt-10">
            <div className=" text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <span className="text-blue-300">
                If you ever need to convert colors, this tool can really come in
                handy! It has a color converter feature that lets you easily
                change color codes between formats like hex, HSL, and RGB. This
                makes it super flexible and convenient to manipulate colors in
                just the way you want to! 😄
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorConverter;
