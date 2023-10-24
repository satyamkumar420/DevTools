import React, { useState, useEffect } from "react";
import { IconArrowUpShort } from "../../Components/Icons/Icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      console.log("Scroll event listener attached");
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // console.log("Scroll event listener attached");
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      console.log("Scroll event listener removed");
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div
      className={`${
        isVisible ? "block" : "hidden"
      } fixed right-10 bottom-10 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full cursor-pointer transition-opacity ease-in-out h-6 w-6 duration-300 z-[999]`}
      onClick={scrollToTop}
    >
      <IconArrowUpShort className="w-6 h-6 " />
    </div>
  );
};

export default ScrollToTopButton;
