import { NavLink } from "react-router-dom";
import Button from "../../Components/utils/Button/Button";
import { IconLink } from "../../Components/Icons/Icons";

const VariousTools = () => {
  const buttons = [
    {
      to: "/various-tools/short-url",
      text: "Short URL",
      icon: <IconLink className="text-yellow-500 text-lg md:text-3xl" />,
      className: "p-2 grid place-items-center",
    },

    // Add more buttons here
  ];

  return (
    <div className="p-4 sm:ml-52 max-w-screen-full overflow-y-auto max-h-screen">
      <div className="my-20 max-w-screen-lg">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Various Tools
        </h3>
        <div className="mt-5 sm:flex sm:flex-wrap sm:gap-6">
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
              online tools that include Short URL.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VariousTools;
