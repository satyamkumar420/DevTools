import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import Button from "../../Components/utils/Button/Button";
import {
  IconBxsFileHtml,
  IconBxlCss3,
  IconBrandJavascript,
} from "../../Components/Icons/Icons";

const MinifyCode = () => {
  const buttons = [
    {
      to: "/minify-code/html-minify",
      text: "HTML",
      icon: <IconBxsFileHtml className="text-red-600 text-lg md:text-3xl" />,
      className: "p-2 grid place-items-center",
    },
    {
      to: "/minify-code/css-minify",
      text: "CSS",
      icon: <IconBxlCss3 className="text-blue-600 text-lg md:text-3xl" />,
      className: "p-2 grid place-items-center",
    },
    {
      to: "/minify-code/js-minify",
      text: "JavaScript",
      icon: (
        <IconBrandJavascript className="text-yellow-600 text-lg md:text-3xl" />
      ),
      className: "p-2 grid place-items-center",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Minify Code</title>
      </Helmet>
      <div className="p-4 sm:ml-52   max-w-screen-lg overflow-y-auto max-h-screen">
        <div className="my-20">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Minify Code
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
              <span className="text-blue-300">
                Hey there! If you'd like to speed up your webpage loading time,
                we suggest using these awesome online minification tools to
                optimize your HTML, JavaScript, and CSS code. They're really
                easy to use and will help make your website lightning fast!We
                recommend the use of online minification tools to optimize your
                HTML, JavaScript, and CSS code, which can effectively improve
                the loading time of your web pages.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinifyCode;
