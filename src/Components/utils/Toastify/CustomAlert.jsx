import React, { useState } from "react";

const CustomAlert = ({ message, title, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-[#24263c] rounded-lg shadow-lg p-4 max-w-sm">
        {title && <div className="text-xl font-semibold mb-2">{title}</div>}
        <p className="text-blue-50">{message}</p>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-700"
            onClick={handleClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
