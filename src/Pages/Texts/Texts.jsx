import { NavLink } from "react-router-dom";
import Button from "../../Components/utils/Button/Button";
import {
  IconCounter,
  IconCompare,
  IconTextEditOutline,
  IconScriptTextPlay,
  IconFiletypeHtml,
} from "../../Components/Icons/Icons";
import SEO from "../../Components/MetaTags/SEO";
// import { HorizontalAdSense } from "../../utils/ads/GoogleAdSense";

const Texts = () => {
  const buttons = [
    {
      to: "/texts/text-counter",
      text: "Text Counter",
      icon: <IconCounter className="text-yellow-500 text-lg md:text-3xl " />,
      className: "p-2 grid place-items-center",
    },
    {
      to: "/texts/text-comparator",
      text: "Text Comparator",
      icon: <IconCompare className="text-red-500  md:text-4xl " />,
      className: "p-2 grid place-items-center",
    },
    {
      to: "/texts/text-converter",
      text: "Text Converter",
      icon: <IconTextEditOutline className="text-green-500  md:text-4xl " />,
      className: "p-2 grid place-items-center",
    },
    {
      to: "/texts/text-to-speech",
      text: "Text to Speech",
      icon: <IconScriptTextPlay className="text-blue-200  md:text-4xl " />,
      className: "p-2 grid place-items-center",
    },
    {
      to: "/texts/text-to-html",
      text: "Text to HTML",
      icon: <IconFiletypeHtml className="text-red-400  md:text-4xl " />,
      className: "p-2 grid place-items-center",
    },
    // Add more buttons here
  ];

  return (
    <>
      <SEO
        title={"Online Free Text Tools"}
        description={
          "Online free text tools provide various text tools. and many more tools available."
        }
        keywords={
          "online free text tools, text tools, text tools online, free text tools"
        }
        url={"https://devtoo1s.dev/texts"}
      />
      <div className="p-4 sm:ml-52   max-w-screen overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="text-left p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Text Tools
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

          {/* <HorizontalAdSense /> */}
          <div className="mt-10">
            <div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <p className="text-blue-300">
                Boost your work productivity with our online tool collection for
                text editing.
                <br />
                We provide a variety of text tools that can help you with tasks
                such as text counter, text comparator, text converter, text to
                speech, and text to HTML conversion.
                <br />
                Explore our text tools and enhance your text editing
                capabilities today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Texts;
