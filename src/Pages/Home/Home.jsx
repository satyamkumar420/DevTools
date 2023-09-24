// import {} from "../../Components/Icons/Icons";
import { HomeLinks } from "../../Components/utils/Link/Links";
import Button from "../../Components/utils/Button/Button";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-4 sm:ml-48  max-w-screen-lg overflow-y-auto max-h-screen">
      <div className="p-4  border-gray-200  rounded-lg mt-20">
        <h3 className="p-2 rounded sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Home
        </h3>
        <div>
          <h1 className="font-extrabold text-transparent sm:text-4xl bg-clip-text bg-gradient-to-r from-pink-400 to-red-700  text-xl  mt-3">
            Welcome to Online DevTools!
          </h1>
          <p className="text-blue-50 mt-3 indent-8 leading-normal text-[17px]">
            The platform that prioritizes efficiency and usability in your daily
            life. We endeavor to provide free online resources that are tailored
            to your specific requirements.
          </p>
        </div>
        <div className="mt-5">
          <div className="text-green-400 font-semibold text-xl ">
            <h2>✔ Online tools available for you:</h2>
          </div>
          <div className="flex flex-1 gap-4 flex-wrap mt-4">
            {HomeLinks.map((button, index) => (
              <NavLink to={button.link} key={index}>
                <Button
                  text={button.text}
                  className="text-lg md:text-xl sm:p-2 px-2"
                />
              </NavLink>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-base bg-[#1a1c2e]">
            <strong className="text-orange-500 text-center ">Note</strong>{" "}
            <span className="text-blue-300">
              :- This website is still under development!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
