import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconLanguageHiragana, IconMenuLeft } from "../Icons/Icons";
import Sidebar from "./Sidebar";
import Logo from "../../assets/favicon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed w-full top-0 left-0 right-0 z-50  backdrop-blur-3xl firefox:bg-opacity-50 p-4  flex shadow-lg  justify-between items-center">
        <div className="ml-3 flex">
          <div className="sm:hidden p-1" onClick={toggleMenu}>
            <IconMenuLeft className="font-bold text-4xl cursor-pointer" />
          </div>
          <NavLink
            to="/"
            className="text-blue-50 text-xl font-bold cursor-pointer "
          >
            <div className="flex items-center">
              <img
                src={Logo}
                alt="Logo"
                width="40"
                height="40"
                className="mr-2"
              />
              <div className="hidden sm:block">
                <span className="text-pink-500 underline">Dev</span>
                <span className="text-blue-50">Tools</span>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="flex items-center border-[#1a1c2e] p-1 rounded bg-[#1a1c2e] border-2 mr-6">
          <IconLanguageHiragana />
          <select className="bg-[#1a1c2e] text-base text-blue-50 border-[#1a1c2e] p-2 rounded px-3 cursor-pointer outline-none">
            <option value="en">English</option>
          </select>
        </div>
      </header>
      <div
        className={`z-50 transition-all duration-100 ease-in-out sm:block transform ${
          isOpen
            ? "translate-x-0 z-[999999] relative opacity-100 "
            : "-translate-x-full sm:translate-x-0"
        }`}
      >
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default Navbar;
