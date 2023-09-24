import { NavLink } from "react-router-dom";
import { IconHeart } from "../../Components/Icons/Icons";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#1a1c2e] text-white py-3 px-5 mb  sm:ml-[185px] max-w-screen-2xl ">
      <div className="flex flex-wrap gap-4 justify-center md:justify-end mx-auto  text-sm sm:text-base text-gray-400">
        <p className="text-center flex">
          &copy; 2023
          <strong className="text-pink-500 mx-1 animate-ping">
            <IconHeart />
          </strong>
          DevTools. All rights reserved.
        </p>
        <NavLink className="text-blue-400 hover:underline hover:text-blue-500">
          About
        </NavLink>
        <NavLink className="text-blue-400 hover:underline hover:text-blue-500">
          Privacy Policy
        </NavLink>
        <NavLink className="text-blue-400 hover:underline hover:text-blue-500">
          Terms
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
