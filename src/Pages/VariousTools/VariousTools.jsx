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
    <div className="p-4 sm:ml-48 max-w-screen-lg overflow-y-auto max-h-screen">
      <div className="my-20">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Various Tools
        </h3>
        <div className="mt-5 flex flex-wrap gap-6 ">
          {buttons.map((button, index) => (
            <NavLink to={button.to} key={index}>
              <Button
                text={button.text}
                icon={button.icon}
                className={button.className}
              />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VariousTools;
