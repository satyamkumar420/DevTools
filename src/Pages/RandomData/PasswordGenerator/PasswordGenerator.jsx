import React, { useState } from "react";
import Notify from "../../../Components/utils/Toastify/Notify";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12); // Default length
  const [copied, setCopied] = useState([false]);
  const [loading, setLoading] = useState(false); // Add loading state

  const generatePassword = () => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?/[]{}|";

    const allChars = lowercaseChars + uppercaseChars + numbers + specialChars;

    let newPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      newPassword += allChars[randomIndex];
    }

    setPassword(newPassword);

    // Set loading state to false after password is generated
    setLoading(true);
  };
  // TODO: while password is being generated, then change the color of the hr line

  // Password Color
  const getPasswordColor = () => {
    if (passwordLength <= 6) {
      return "red";
    } else if (passwordLength < 10) {
      return "yellow";
    } else if (passwordLength < 15) {
      return "green";
    } else {
      return "pink";
    }
  };

  // handleCopy function
  const handleCopy = (password) => {
    navigator.clipboard.writeText(password);
    const newCopied = [...copied]; // Create a copy of the copied state
    newCopied[0] = true; // Set the copied state for the clicked color to true
    setCopied(newCopied);
    // Reset the "Copied" message after 2 seconds
    setTimeout(() => {
      const resetCopied = [...newCopied];
      resetCopied[0] = false; // Reset the copied state for the clicked color
      setCopied(resetCopied);
    }, 1000);
  };

  const getPasswordTips = () => {
    if (passwordLength <= 6) {
      return "Consider using a longer password for better security.";
    } else if (passwordLength < 10) {
      return "This password is moderately secure. Consider adding more characters for better security.";
    } else if (passwordLength < 15) {
      return "Great job! This is a strong and secure password.";
    } else {
      return "This password is very secure.";
    }
  };

  return (
    <div className="p-4 sm:ml-48 text-justify max-w-screen-lg overflow-y-auto max-h-screen">
      <div className="my-20">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Password Generator
        </h3>
        <div className="max-w-md max-h-screen mx-auto mt-8 p-4 bg-[#1a1c2e] rounded-md shadow-lg">
          <h1 className="text-lg sm:text-2xl  mb-4 text-blue-100 ">
            Generate Strong Password
          </h1>
          <div className="mb-4">
            <label className="block font-medium mb-1 text-gray-400">
              Password Length:{" "}
              <strong className="text-orange-500">{passwordLength}</strong>
            </label>
            <input
              type="range"
              id="passwordLength"
              min="3"
              max="50"
              step="1"
              value={passwordLength}
              onChange={(e) => setPasswordLength(parseInt(e.target.value))}
              className="range accent-blue-700 bg-[#1a1c2e] rounded w-full cursor-pointer"
            />
          </div>
          <button
            onClick={generatePassword}
            className="bg-blue-500 hover:bg-blue-700 text-blue-50 px-4 py-2 rounded "
          >
            Generate Password
          </button>
          {loading && (
            <div className="mt-4 mb-2">
              <h3 className=" font-medium  text-gray-400">
                Generated Password:
              </h3>
              <span
                className="flex-wrap flex text-gray-50 bg-[#282a40] cursor-pointer rounded px-3  py-3 max-w-full min-w-full "
                onClick={() => handleCopy(password)}
              >
                {password}
                {copied[0] && <Notify message="Copied! ✔" type="success" />}
              </span>

              <div className="mt-2 flex gap-1">
                <hr
                  className={`w-20 h-1  bg-gray-200 border-0 rounded dark:bg-gray-700 ${
                    getPasswordColor() === "red"
                      ? "dark:bg-red-500"
                      : getPasswordColor() === "yellow"
                      ? "dark:bg-yellow-500"
                      : getPasswordColor() === "green"
                      ? "dark:bg-green-500"
                      : "dark:bg-pink-500"
                  }`}
                />
                <hr
                  className={`w-20 h-1  bg-gray-200 border-0 rounded dark:bg-gray-700 ${
                    getPasswordColor() === "red"
                      ? "dark:bg-red-500"
                      : getPasswordColor() === "yellow"
                      ? "dark:bg-yellow-500"
                      : getPasswordColor() === "green"
                      ? "dark:bg-green-500"
                      : "dark:bg-pink-500"
                  }`}
                />
                <hr
                  className={`w-20 h-1  bg-gray-200 border-0 rounded dark:bg-gray-700 ${
                    getPasswordColor() === "red"
                      ? ""
                      : getPasswordColor() === "yellow"
                      ? "dark:bg-yellow-500"
                      : getPasswordColor() === "green"
                      ? "dark:bg-green-500"
                      : "dark:bg-pink-500"
                  }`}
                />
                <hr
                  className={`w-20 h-1  bg-gray-200 border-0 rounded dark:bg-gray-700 ${
                    getPasswordColor() === "red"
                      ? ""
                      : getPasswordColor() === "yellow"
                      ? ""
                      : getPasswordColor() === "green"
                      ? "dark:bg-green-500"
                      : "dark:bg-pink-500"
                  }`}
                />
                <hr
                  className={`w-20 h-1  bg-gray-200 border-0 rounded dark:bg-gray-700 ${
                    getPasswordColor() === "red"
                      ? ""
                      : getPasswordColor() === "yellow"
                      ? ""
                      : getPasswordColor() === "green"
                      ? ""
                      : "dark:bg-pink-500"
                  }`}
                />
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <strong>Tips:</strong> {getPasswordTips()}
              </div>
            </div>
          )}
        </div>
        <div className="mt-10">
          <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
            <span className="text-blue-300">
              Generating strong passwords is crucial to keeping your account
              secure and productive. Our online toolset excels in this area,
              providing you with passwords that are highly secure.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
