import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  toastStyleError,
  toastStyleSuccess,
} from "../../../Components/utils/Toastify/toastStyle";
import DateToTimestampConverter from "./DateToTimestampConverter";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import { IconCopy } from "../../../Components/Icons/Icons";
import { Helmet } from "react-helmet-async";

const TimestampConverter = () => {
  const [timestamp, setTimestamp] = useState(0);
  const [formattedDate, setFormattedDate] = useState("");

  const convertTimestampToDate = () => {
    try {
      if (timestamp === "" || isNaN(timestamp)) {
        throw new Error("Invalid timestamp value");
      }
      const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds

      // Format the date as "YYYY-MM-DD HH:MM:SS"
      const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
        .getHours()
        .toString()
        .padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;

      setFormattedDate(formattedDate);
    } catch (error) {
      toast("Invalid timestamp value", { style: toastStyleError });
    }
  };

  // handleCopy function
  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(formattedDate);
      toast("Date & Time is copied!", { style: toastStyleSuccess });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = formattedDate;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast("Date & Time is copied!", { style: toastStyleSuccess });
    }
  };

  return (
    <>
      <Helmet>
        <title>Timestamp Converter </title>
      </Helmet>
      <div className="p-4 sm:ml-52 text-justify max-w-screen overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="p-2 text-left rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Timestamp Converter
          </h3>
          <div className="flex gap-3 flex-wrap justify-center md:justify-start ">
            <div className="mt-3 bg-[#1a1c2e] max-w-sm p-5 rounded-md shadow-md">
              <div className="">
                <div className="mb-4">
                  <label className="block text-base font-medium text-gray-500">
                    Enter timestamp:
                  </label>
                  <input
                    type="number"
                    min={0}
                    placeholder="Enter timestamp"
                    value={timestamp}
                    onChange={(e) => setTimestamp(e.target.value)}
                    className="px-3 py-2 w-full sm:w-60 rounded-md outline-none border-2 border-gray-600 focus:border-blue-600 bg-[#141522] text-white mr-2 "
                  />
                </div>

                <div className="">
                  <PrimaryButton
                    onClick={convertTimestampToDate}
                    text={"Convert"}
                    className={
                      " text-white px-4 py-2 rounded-md w-full sm:w-60"
                    }
                  />
                </div>
              </div>

              <div className="mt-4">
                {formattedDate !== "" && (
                  <div>
                    <div className="text-gray-400 text-base font-medium">
                      Date & Time :
                    </div>
                    <div className="flex py-3 w-fit px-2 sm:px-4 rounded-md bg-[#202236] items-center">
                      <pre className="mr-4 text-white  ">{formattedDate}</pre>
                      <div className="ml-auto">
                        <IconCopy
                          className="sm:w-7 sm:h-7 cursor-pointer text-green-400"
                          onClick={handleCopy}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <DateToTimestampConverter />
          </div>
          <div className="mt-10">
            <div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <p className="text-blue-300">
                This tool offers a convenient solution for converting timestamps
                to dates and dates to timestamps. With just a single click, this
                tool provides a fast and efficient way to accomplish the task.
                It is designed to help users save time and effort, providing a
                user-friendly experience that is easy to navigate. Whether you
                need to convert one timestamp or multiple, this tool is an
                excellent choice that can provide accurate results quickly.copy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimestampConverter;
