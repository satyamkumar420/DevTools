import React, { useState } from "react";
const TimestampConverter = () => {
  const [timestamp, setTimestamp] = useState(0);
  const [formattedDate, setFormattedDate] = useState("");

  const convertTimestampToDate = () => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    setFormattedDate(date.toISOString());
  };
  return (
    <div className="p-4 sm:ml-48 text-justify max-w-screen-lg overflow-y-auto max-h-screen">
      <div className="my-20">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Timestamp to Date Converter
        </h3>
        <div className="my-5 ">
          <div className="flex flex-wrap">
            <div className="mb-4">
              <input
                type="number"
                placeholder="Enter timestamp"
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
                className="px-2 p-1 bg-[#0c111c] rounded border-2 border-blue-500 outline-none mr-2 "
              />
            </div>

            <div className="">
              <button
                onClick={convertTimestampToDate}
                className="bg-blue-500 hover:bg-blue-700 text-blue-50 px-4 py-2 rounded"
              >
                Convert
              </button>
            </div>
          </div>
          <div className="mt-5 bg-[#1a1c2e] p-2">
            <p className="flex flex-wrap">
              <span className="text-blue-200 sm:text-lg font-medium">
                Formatted Date:{" "}
              </span>
              <span className="text-orange-500 text-base sm:text-xl">
                {formattedDate}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimestampConverter;
