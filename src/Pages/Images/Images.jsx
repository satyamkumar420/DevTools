import { NavLink } from "react-router-dom";
import Button from "../../Components/utils/Button/Button";
import {
  IconCrosshair,
  IconImageSyncOutline,
  IconImageResizeSquare,
} from "../../Components/Icons/Icons";
import { Helmet } from "react-helmet-async";

const Images = () => {
  const buttons = [
    {
      to: "/image/circle-crop",
      text: "Circle Crop",
      icon: <IconCrosshair className="text-green-500 text-lg md:text-3xl " />,
      className: "p-2 grid place-items-center",
    },
    {
      to: "/images/square-crop",
      text: "Square Crop",
      icon: (
        <IconImageResizeSquare className="text-yellow-500 text-lg md:text-3xl" />
      ),
      className: "p-2 grid place-items-center",
    },
    {
      to: "/images/images-crop",
      text: "Custom Crop",
      icon: (
        <IconImageResizeSquare className="text-orange-500 text-lg md:text-3xl" />
      ),
      className: "p-2 grid place-items-center",
    },
    {
      to: "/converters/ImageToBase64Converter",
      text: "Image to Base64",
      icon: <IconImageSyncOutline className="text-yellow-500" />,
      className: "p-2 grid place-items-center",
    },
    // {
    //   to: "/image/image-convert",
    //   text: "Image Convert",
    //   icon: (
    //     <IconImageSyncOutline className="text-pink-500 text-lg md:text-3xl" />
    //   ),
    //   className: "p-2 grid place-items-center",
    // },
  ];

  return (
    <>
      <Helmet>
        <title>Images Tools</title>
      </Helmet>
      <div className="p-4 sm:ml-52 text-justify max-w-screen-full overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Image Tools
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
                Improve your work productivity by utilizing our collection of
                online tools that include image editing.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;
