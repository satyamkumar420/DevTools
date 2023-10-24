import React, { useState, useEffect } from "react";
import { IconArrowUpShort } from "../../Components/Icons/Icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`${
        isVisible ? "block" : "hidden"
      } fixed right-4 bottom-4 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full cursor-pointer transition-opacity ease-in-out duration-300 z-[999]`}
      onClick={scrollToTop}
    >
      <IconArrowUpShort className="w-6 h-6 " />
    </div>
  );
};

export default ScrollToTopButton;
