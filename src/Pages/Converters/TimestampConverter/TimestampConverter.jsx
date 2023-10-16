import React, { useState } from "react";
import { toast } from "react-toastify";
import { toastStyleError } from "../../../Components/utils/Toastify/toastStyle";
import DateToTimestampConverter from "./DateToTimestampConverter";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
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

  return (
    <>
      <Helmet>
        <title>Timestamp to Date</title>
      </Helmet>
      <div className="p-4 sm:ml-52 text-justify max-w-screen-full overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="p-2 text-left rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Timestamp to Date Converter
          </h3>
          <div className="my-5 bg-[#1a1c2e] max-w-sm p-5 rounded-md shadow-md">
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
                  className="px-2 p-1 bg-slate-900 rounded border-2 border-blue-500 outline-none mr-2 w-full"
                />
              </div>

              <div className="">
                <PrimaryButton
                  onClick={convertTimestampToDate}
                  text={"Convert"}
                />
              </div>
            </div>
            {formattedDate !== "" && (
              <div className="mt-5 bg-[#1a1c2e] text-left">
                <p className="text-green-600">
                  Date & Time: <strong>{formattedDate}</strong>
                </p>
              </div>
            )}
          </div>
          <DateToTimestampConverter />
        </div>
      </div>
    </>
  );
};

export default TimestampConverter;
