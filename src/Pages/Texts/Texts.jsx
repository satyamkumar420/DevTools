import { NavLink } from "react-router-dom";
import Button from "../../Components/utils/Button/Button";
import { IconCounter, IconCompare } from "../../Components/Icons/Icons";

const Texts = () => {
  const buttons = [
    {
      to: "/texts/text-counter",
      text: "Text Counter",
      icon: <IconCounter className="text-yellow-500 text-lg md:text-3xl" />,
      className: "p-2 grid place-items-center",
    },
    {
      to: "/texts/text-comparator",
      text: "Text Comparator",
      icon: <IconCompare className="text-red-500  md:text-4xl" />,
      className: "p-2 grid place-items-center",
    },
    // Add more buttons here
  ];

  return (
    <div className="p-4 sm:ml-52   max-w-screen-lg overflow-y-auto max-h-screen">
      <div className="my-20">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Text Tools
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
              Boost your work productivity with our online tool collection for
              text editing.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Texts;
