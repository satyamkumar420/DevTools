import { NavLink } from "react-router-dom";
import { IconHeart } from "../../Components/Icons/Icons";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#1a1c2e] text-white py-3 px-5  sm:ml-[185px] max-w-screen-2xl ">
      <div className="grid sm:flex sm:flex-wrap gap-4 justify-center md:justify-end mx-auto  text-sm lg:text-base text-gray-400">
        <p className="text-left sm:text-center flex">
          &copy; 2024
          <strong className="text-pink-500 mx-1 animate-ping">
            <IconHeart />
          </strong>
          DevTools. All rights reserved.
        </p>
        <div className="flex gap-4">
          <NavLink
            to="/about"
            className="text-blue-400 hover:underline hover:text-blue-500"
          >
            About
          </NavLink>
          <NavLink
            to="/privacy-policy"
            className="text-blue-400 hover:underline hover:text-blue-500"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="/terms-and-conditions"
            className="text-blue-400 hover:underline hover:text-blue-500"
          >
            Terms
          </NavLink>
          <NavLink
            to="/authors"
            className="text-blue-400 hover:underline hover:text-blue-500"
          >
            Authors
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
