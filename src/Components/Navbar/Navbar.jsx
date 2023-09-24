import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import { IconLanguageHiragana } from "../Icons/Icons";
import { IconMenu, IconCross2 } from "../Icons/Icons";
import { useState } from "react";
import Logo from "../../assets/code.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed w-full top-0 left-0 right-0 z-50  backdrop-blur-xl firefox:bg-opacity-50 p-4  flex shadow-lg  justify-between items-center">
        <div className="ml-6 flex">
          <NavLink
            to="/"
            className="text-blue-50 text-xl font-bold   cursor-pointer sm:block hidden"
          >
            <div className="flex items-center">
              <img src={Logo} alt="Logo" className="w-10 h-auto mr-2" />
              <span className="text-pink-500 underline">Dev</span>
              <span className="text-blue-50">Tools</span>
            </div>
          </NavLink>

          <div
            className="sm:hidden transition-all duration-300 ease-in-out active:scale-50 p-1"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <IconCross2 className="font-bold text-2xl cursor-pointer" />
            ) : (
              <IconMenu className="font-bold text-2xl cursor-pointer" />
            )}
          </div>
        </div>
        <div className="flex   items-center  border-[#1a1c2e] p-1 rounded bg-[#1a1c2e] border-2 mr-6">
          <IconLanguageHiragana />
          <select
            className="bg-[#1a1c2e] text-base text-blue-50  border-[#1a1c2e] p-2 rounded px-3 cursor-pointer outline-none"
            //   onChange={(e) => console.log(e.target.value)} // Handle language change here
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </header>
      {/*TODO animate left to right and right to left */}
      <div
        className={`z-50 transition-all duration-300 ease-in-out sm:block transform ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default Navbar;
