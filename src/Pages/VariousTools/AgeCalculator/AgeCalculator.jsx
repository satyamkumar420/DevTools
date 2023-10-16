import { useState, useEffect } from "react";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import { Helmet } from "react-helmet-async";

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const currentDateStr = currentDate.toISOString().substr(0, 10);
    setCurrentDate(currentDateStr);
  }, []);

  const calculateAge = () => {
    if (birthdate && currentDate) {
      const birthdateObj = new Date(birthdate);
      const currentDateObj = new Date(currentDate);

      const ageInMilliseconds = currentDateObj - birthdateObj;
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

      const years = Math.floor(ageInYears);
      const remainingDays = (ageInYears - years) * 365.25;
      const months = Math.floor(remainingDays / 30.44);
      const days = Math.floor(remainingDays % 30.44);

      const ageString = (
        <div className="flex gap-3 flex-wrap">
          <div className="flex gap-1">
            <div className="text-orange-600">{years}</div> Years
          </div>
          <div className="flex gap-1">
            <div className="text-orange-600">{months}</div> Months
          </div>
          <div className="flex gap-1">
            <div className="text-orange-600">{days}</div> Days
          </div>
        </div>
      );
      setAge(ageString);
    }
  };
  return (
    <>
      <Helmet>
        <title>Age Calculator</title>
      </Helmet>
      <div className="p-4 sm:ml-52 max-w-screen-full overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Age Calculator
          </h3>
          <div className="mt-5 max-w-md bg-[#1a1c2e] p-5 rounded-md shadow-md">
            <div className="mb-4">
              <label htmlFor="birthdate">Select Birthdate:</label>
              <input
                type="date"
                id="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="border-none outline-none border-gray-300 p-2 w-full rounded-md bg-[#2a2d4b]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="currentDate">Select Current Date:</label>
              <input
                type="date"
                id="currentDate"
                value={currentDate}
                onChange={(e) => setCurrentDate(e.target.value)}
                className="border-gray-300 p-2 w-full bg-[#2a2d4b] rounded-md outline-none border-none"
              />
            </div>
            <PrimaryButton
              onClick={calculateAge}
              text={"Calculate Age"}
              className={""}
            />
            <div className="mt-4 overflow-hidden">
              {age && (
                <div className="text-green-600 flex gap-2 flex-wrap bg-[#171929] p-4 rounded-md shadow-md">
                  Your Age <div className="font-bold text-yellow-500">:</div>
                  <div className="font-semibold">{age}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgeCalculator;
