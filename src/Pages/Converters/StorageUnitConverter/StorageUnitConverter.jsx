import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import { IconBxTransfer } from "../../../Components/Icons/Icons";

const StorageUnitConverter = () => {
  const [inputValue, setInputValue] = useState("1024");
  const [fromUnit, setFromUnit] = useState("MB");
  const [toUnit, setToUnit] = useState("GB");
  const [result, setResult] = useState("");

  const units = ["B", "KB", "MB", "GB", "TB"];

  const handleConvert = () => {
    // Conversion factors
    const conversionFactors = {
      B: 1,
      KB: 1024,
      MB: 1024 * 1024,
      GB: 1024 * 1024 * 1024,
      TB: 1024 * 1024 * 1024 * 1024,
    };

    // Parse the input value as a number
    const numericValue = parseFloat(inputValue);

    if (isNaN(numericValue)) {
      setResult("Invalid input");
    } else {
      // Convert the input value to the base unit (e.g., bytes)
      const fromValueInBytes = numericValue * conversionFactors[fromUnit];

      // Convert the base unit value to the target unit
      const resultValue = fromValueInBytes / conversionFactors[toUnit];

      setResult(resultValue.toFixed(2)); // Adjust the number of decimal places as needed
    }
  };
  return (
    <>
      <Helmet>
        <title>MB To KB | Storage Unit Converter</title>
      </Helmet>
      <div className="p-4 sm:ml-52 text-justify max-w-screen-full overflow-y-auto max-h-screen">
        <div className="my-20  max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Storage Unit Converter
          </h3>
          <div className="bg-[#1a1c2e] max-w-xl rounded-md shadow-md">
            <div className="my-5 p-3 sm:p-5 ">
              <div className="flex gap-3 items-center  lg:flex-wrap">
                <select
                  className="bg-[#202336] w-full sm:w-60 text-white px-3 py-2 rounded-md  outline-none cursor-pointer"
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value)}
                >
                  {units.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
                <div className="text-xl">
                  <IconBxTransfer className="text-base" />
                </div>
                <select
                  className="bg-[#202336] w-full sm:w-60 text-white px-3 py-2 rounded-md outline-none cursor-pointer"
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                >
                  {units.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>
              <div className="my-4 flex flex-col justify-center sm:justify-start">
                <input
                  type="number"
                  className="bg-[#202336] text-white px-3 py-2 w-full sm:w-60 rounded-md outline-none focus:border-blue-500 ring-2 focus:ring-blue-500"
                  placeholder="Enter value"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  autoComplete="off"
                  min={0}
                  step={1}
                />

                <PrimaryButton
                  onClick={handleConvert}
                  text={"Convert"}
                  className={
                    " text-white px-4 py-2 rounded-md w-full sm:w-60 mt-4"
                  }
                />
              </div>
              <div className="mt-4">
                {result && (
                  <div className="w-full bg-[#202336] text-orange-500 px-4 py-2 rounded-md flex ">
                    <h1 className="flex gap-4 text-xl font-light">
                      Result :{" "}
                      <p className="text-blue-100 font-medium">{result}</p>
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <p className="text-blue-300">
                Easily and quickly convert storage units using our online
                converter. With this storage unit converter, you can convert
                between bytes (B), kilobytes (KB), megabytes (MB), gigabytes
                (GB), and terabytes (TB) with ease. Simply select the source and
                target units, enter the value to be converted, and the result
                will be automatically calculated and displayed on the screen.
                This converter makes it easier than ever to perform conversions
                between storage units.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StorageUnitConverter;
