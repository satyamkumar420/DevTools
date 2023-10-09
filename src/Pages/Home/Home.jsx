import { HomeLinks } from "../../Components/utils/Link/Links";
import Button from "../../Components/utils/Button/Button";
import { NavLink } from "react-router-dom";
import { IconShieldTick } from "../../Components/Icons/Icons";

const Home = () => {
  return (
    <div className="p-4 sm:ml-52 max-w-screen-lg overflow-y-auto max-h-screen">
      <div className="p-4 border-gray-200 rounded-lg mt-20 mb-20">
        <h3 className="p-2 rounded sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Home
        </h3>
        <div className="text-left">
          <h1 className="font-extrabold text-transparent sm:text-4xl bg-clip-text bg-gradient-to-r from-pink-400 to-red-700 text-xl mt-3">
            Welcome to Online DevTools!
          </h1>
          <p className="text-blue-50 mt-3 leading-normal text-sm sm:text-lg">
            Our platform is here to make your life easier! We provide a wide
            variety of free online resources that are tailored to meet your
            specific needs. With our platform, you'll experience unparalleled
            efficiency and user-friendliness in all your day-to-day activities.
          </p>
        </div>
        <div className="mt-5">
          <div className=" my-5 text-green-400 font-semibold text-sm sm:text-xl flex gap-2 items-center">
            <IconShieldTick className="text-sm sm:text-xl" />
            <h2>Online tools available for you:</h2>
          </div>
          <div className=" sm:flex sm:flex-wrap sm:gap-6">
            {HomeLinks.map((button, index) => (
              <NavLink
                to={button.link}
                key={index}
                className="grid mt-5 sm:mt-0"
              >
                <Button
                  text={button.text}
                  className="text-lg md:text-xl p-2 sm:p-2 px-2"
                />
              </NavLink>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
            <strong className="text-orange-500 text-center">Note</strong>{" "}
            <span className="text-blue-300">
              :- This website is still under development!
            </span>
          </div>
        </div>
        <div className="mt-10">
          <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
            <strong className="text-orange-500 text-center">Note</strong>{" "}
            <span className="text-blue-300">
              :- I've developed a website called DevTools that offers a variety
              of tools to improve web development and design processes. Some of
              these key features include image cropping, CSS generation, random
              password generation, circle, and square image cropping, fake
              details, text counters, text comparisons, emoji, and color
              pickers, as well as image-to-base64 and timestamp conversion
              capabilities.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
