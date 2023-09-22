import React from "react";
import Button from "../utils/Button/Button";
import { NavLink } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="p-4 sm:ml-48 text-justify max-w-screen-lg overflow-y-auto max-h-screen">
      <div className="mt-28 items-center text-center ">
        <h1 className="p-2 rounded  text-2xl sm:text-4xl w-full grid grid-cols-1">
          <span className="text-5xl sm:text-9xl text-orange-500">4</span>
          <span className="text-5xl sm:text-9xl text-blue-200">0</span>
          <span className="text-5xl sm:text-9xl text-green-500">4</span>
          <span className="text-base sm:text-xl mx-2 sm:mx-5 text-red-500 font-bold">
            Page Not Found!
          </span>
        </h1>
        <NavLink to="/">
          <Button text={"Go Home"} className={"text-sm sm:text-base"} />
        </NavLink>
      </div>
    </div>
  );
};

export default Notfound;
