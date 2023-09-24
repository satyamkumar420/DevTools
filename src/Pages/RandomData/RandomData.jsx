import { IconPassword, IconTextSlash } from "../../Components/Icons/Icons";
import Button from "../../Components/utils/Button/Button";
import { NavLink } from "react-router-dom";

const RandomData = () => {
  const buttons = [
    {
      to: "/random-data/password-generator",
      text: "Password Generator",
      icon: <IconPassword className="text-green-500" />,
      className: "p-2 grid place-items-center",
    },
    {
      to: "/random-data/dummy-text-generator",
      text: "Dummy Text Generator",
      icon: <IconTextSlash className="text-pink-500" />,
      className: "p-2 grid place-items-center",
    },
  ];

  return (
    <div className="p-4 sm:ml-48 text-justify max-w-screen-lg overflow-y-auto max-h-screen">
      <div className="my-20">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Random Data
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
        <div className="mt-10">
          <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
            <span className="text-blue-300">
              Improve your work productivity by utilizing our collection of
              online tools.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomData;
