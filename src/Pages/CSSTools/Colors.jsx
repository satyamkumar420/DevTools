import { NavLink } from "react-router-dom";
import Button from "../../Components/utils/Button/Button";
import {
  IconBxsColorFill,
  IconColorPaletteSharp,
  IconColorBucket,
  IconImageFilterBlackWhite,
  IconSelectColor,
} from "../../Components/Icons/Icons";

const Colors = () => {
  const buttons = [
    {
      to: "/colors/color-picker",
      text: "Color Picker ",
      icon: <IconBxsColorFill className="text-pink-500 text-lg md:text-3xl" />,
      className: "p-2 grid place-items-center",
    },
    {
      to: "/colors/random-color",
      text: "Random Color",
      icon: (
        <IconColorPaletteSharp className="text-yellow-500 text-lg md:text-3xl" />
      ),
      className: "p-2 grid place-items-center",
    },
    {
      to: "/colors/favorite-color",
      text: "Favorite Color",
      icon: (
        <IconColorBucket className="text-emerald-500 text-xl md:text-4xl" />
      ),
      className: "p-2 grid place-items-center",
    },
    {
      to: "/colors/image-color-picker",
      text: "Image Color Picker",
      icon: (
        <IconImageFilterBlackWhite className="text-red-500 text-xl md:text-4xl" />
      ),
      className: "p-2 grid place-items-center",
    },
    {
      to: "/converters/color-converter",
      text: "Color Converter",
      icon: <IconSelectColor className="text-pink-500" />,
      className: "p-2 grid place-items-center",
    },
  ];
  return (
    <div className="p-4 sm:ml-52 max-w-screen-full overflow-y-auto  max-h-screen">
      <div className=" my-20  max-w-screen-lg">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Color Tools
        </h3>
        <div className="mt-5 sm:flex sm:flex-wrap sm:gap-6 ">
          {buttons.map((button, index) => (
            <NavLink to={button.to} key={index} className="grid mt-5 sm:mt-0">
              <Button
                text={button.text}
                icon={button.icon}
                className={button.className}
              />
            </NavLink>
          ))}
        </div>
        <div className="mt-10">
          <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
            <span className="text-blue-300">
              Boost your work efficiency by utilizing our online CSS toolset,
              which comprises a variety of tools.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
