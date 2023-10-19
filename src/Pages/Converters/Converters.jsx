import Button from "../../Components/utils/Button/Button";
import { NavLink } from "react-router-dom";
import { IconTime, IconXml } from "../../Components/Icons/Icons";
import { Helmet } from "react-helmet-async";

const Converters = () => {
  const buttons = [
    {
      to: "/converters/timestamp-converter",
      text: "Timestamp",
      icon: <IconTime className="text-blue-100" />,
      className: "p-2 grid place-items-center",
    },
    {
      to: "/converters/json-to-xml",
      text: "JSON To XML",
      icon: <IconXml className="text-pink-600" />,
      className: "p-2 grid place-items-center",
    },
    {
      to: "/converters/xml-to-json",
      text: "XML To JSON",
      icon: <IconXml className="text-red-600" />,
      className: "p-2 grid place-items-center",
    },
    {
      to: "/converters/less-to-css",
      text: "LESS TO CSS",
      icon: <IconXml className="text-green-500" />,
      className: "p-2 grid place-items-center",
    },
    {
      to: "/converters/storage-unit-converter",
      text: "MB To KB",
      icon: "MB",
      className: "p-2 grid place-items-center",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Converters</title>
      </Helmet>
      <div className="p-4 sm:ml-52 text-justify max-w-screen-full overflow-y-auto max-h-screen">
        <div className="my-20  max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Converters
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
            <div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <p className="text-blue-300">
                Improve your work productivity by utilizing our collection of
                online tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Converters;
