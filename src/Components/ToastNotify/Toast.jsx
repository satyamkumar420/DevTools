import React, { useState, useEffect } from "react";

const Toast = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Hide the toast after 3 seconds

    return () => clearTimeout(timer);
  }, []);
  const handleClose = () => {
    setIsVisible(false);
  };
  // TODO: add animation top to right and draggable
  const toastClass = `z-50 fixed top-0 right-0 m-4 p-2 rounded ${
    type === "error"
      ? "text-[#ff0000] bg-[#282b47] "
      : "text-[#03e735] bg-[#282b47] "
  } ${isVisible ? "opacity-100 animate-slide-in" : "hidden opacity-0"}`;

  return (
    <div className={toastClass}>
      {message}
      <button className="ml-2 text-lg text-[#ff0000]" onClick={handleClose}>
        X
      </button>
    </div>
  );
};

export default Toast;
