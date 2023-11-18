import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  toastStyleError,
  toastStyleSuccess,
} from "../../../Components/utils/Toastify/toastStyle";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import { IconCopy } from "../../../Components/Icons/Icons";

const DateToTimestampConverter = () => {
  const [inputDate, setInputDate] = useState("");
  const [timestamp, setTimestamp] = useState(null);

  const convertToTimestamp = () => {
    const inputParts = inputDate.split("");
    const dateParts = inputParts[0].split("-");
    const timeParts = inputParts[1] ? inputParts[1].split(":") : [];

    const year = parseInt(dateParts[0], 10);
    const month = dateParts[1] ? parseInt(dateParts[1], 10) - 1 : 0;
    const day = dateParts[2] ? parseInt(dateParts[2], 10) : 1;
    const hours = timeParts[0] ? parseInt(timeParts[0], 10) : 0;
    const minutes = timeParts[1] ? parseInt(timeParts[1], 10) : 0;
    const seconds = timeParts[2] ? parseInt(timeParts[2], 10) : 0;

    const isValidDate =
      !isNaN(year) &&
      !isNaN(month) &&
      !isNaN(day) &&
      !isNaN(hours) &&
      !isNaN(minutes) &&
      !isNaN(seconds);

    if (!isValidDate || isNaN(isValidDate)) {
      toast("Invalid date & time format! ", {
        style: toastStyleError,
      });
      setTimestamp(null);
      return;
    }
    const date = new Date(year, month, day, hours, minutes, seconds);
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    if (isNaN(unixTimestamp)) {
      toast("Invalid date & time format!", {
        style: toastStyleError,
      });
      setTimestamp(null);
      return;
    }
    setTimestamp(unixTimestamp);
  };

  // handleCopy function
  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(timestamp);
      toast("Timestamp is copied!", { style: toastStyleSuccess });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = timestamp;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast("Timestamp is copied!", { style: toastStyleSuccess });
    }
  };

  return (
    <div className="mt-3">
      <div className="">
        <div className="bg-[#1a1c2e] max-w-sm shadow-md rounded-md p-5 ">
          <div className="mb-4">
            <label className="block text-base font-medium text-gray-500">
              Enter a Date:
            </label>
            <input
              type="text"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
              className="px-3 py-2 w-full sm:w-60 rounded-md outline-none border-2 border-gray-600 focus:border-blue-600  bg-[#141522] text-white"
              placeholder="YYYY-MM-DD HH:MM:SS"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <PrimaryButton
              onClick={convertToTimestamp}
              text={"Convert"}
              className={" text-white px-4 py-2 rounded-md w-full sm:w-60 "}
            />
          </div>
          {/* {timestamp !== null && (
            <p className="text-green-600">
              Timestamp: <strong>{timestamp}</strong>
            </p>
          )} */}
          <div className="mt-4">
            {timestamp !== null && (
              <div>
                <div className="text-gray-400 text-base font-medium">
                  Timestamp :
                </div>
                <div className="flex py-3 w-fit px-2 sm:px-4 rounded-md bg-[#202236] items-center">
                  <pre className="mr-4 text-white">{timestamp}</pre>
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
      </div>
    </div>
  );
};

export default DateToTimestampConverter;
