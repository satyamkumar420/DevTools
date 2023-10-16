import React from "react";
import Button from "../utils/Button/Button";
import { NavLink } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="p-4 sm:ml-48 text-justify max-w-screen-lg overflow-y-auto max-h-screen">
      <div className="mt-28 items-center text-center flex flex-col">
        <div className="p-2 rounded  text-2xl sm:text-4xl w-full ">
          <div className="mb-2">
            <span className="text-7xl sm:text-[12rem] text-orange-500">4</span>
            <span className="text-7xl sm:text-[12rem] text-blue-200">0</span>
            <span className="text-7xl sm:text-[12rem] text-green-500">4</span>
          </div>
          <div className="">
            <span className="text-base sm:text-xl mx-2 sm:mx-5 text-red-500 font-bold">
              Page Not Found!
            </span>
          </div>
        </div>
        <NavLink to="/" className="my-10">
          <Button text={"Go Home"} className={"text-sm sm:text-base"} />
        </NavLink>
      </div>
    </div>
  );
};

export default Notfound;
