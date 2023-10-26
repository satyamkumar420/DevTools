import React, { useState } from "react";
import { toast } from "react-toastify";
import { toastStyleError } from "../../../Components/utils/Toastify/toastStyle";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";

const DateToTimestampConverter = () => {
  const [inputDate, setInputDate] = useState("");
  const [timestamp, setTimestamp] = useState(null);

  const convertToTimestamp = () => {
    const inputParts = inputDate.split(" ");
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

  return (
    <div className="">
      <div className="text-left">
        <h2 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Date to Timestamp Converter
        </h2>
      </div>
      <div className="my-5">
        <div className="bg-[#1a1c2e] max-w-sm shadow-md rounded-md p-6 ">
          <div className="mb-4">
            <label className="block text-base font-medium text-gray-500">
              Enter a Date:
            </label>
            <input
              type="text"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
              className="border-2 border-blue-600 focus:border-2 focus:border-blue-700 rounded px-2 py-1 w-full outline-none bg-slate-900"
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
          {timestamp !== null && (
            <p className="text-green-600">
              Timestamp: <strong>{timestamp}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateToTimestampConverter;
