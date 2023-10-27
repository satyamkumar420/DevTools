import React, { useState } from "react";
import { toastStyleSuccess } from "../../../Components/utils/Toastify/toastStyle";
import { toast } from "react-toastify";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import { Helmet } from "react-helmet-async";
import { IconCopy } from "../../../Components/Icons/Icons";

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
    setLoading(true);
  };

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
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(password);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = colorToCopy;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    toast(`Password Copied!`, { style: toastStyleSuccess });
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
    <>
      <Helmet>
        <title>Password Generator</title>
      </Helmet>
      <div className="p-4 sm:ml-52 text-justify max-w-screen overflow-y-auto max-h-screen">
        <div className="my-20  max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Password Generator
          </h3>
          <div className="max-w-md mx-auto sm:mx-0 mt-5 p-3 sm:p-5 bg-[#1a1c2e] rounded-md shadow-lg">
            <h1 className="text-lg sm:text-2xl text-center sm:text-left  mb-4 text-blue-100 ">
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
                className="range accent-blue-700 bg-[#1a1c2e]  rounded w-full cursor-pointer  "
              />
            </div>
            <PrimaryButton
              onClick={generatePassword}
              text={`Generate Password`}
              className={" text-white px-4 py-2 rounded-md w-full sm:w-60 "}
            />
            {loading && (
              <div className="mt-4 mb-2">
                <h3 className=" font-medium  text-gray-400">
                  Generated Password:
                </h3>
                <div className="flex items-center bg-[#202236] rounded-md px-2 sm:px-4 py-3 w-full">
                  <pre className=" text-blue-100 mr-4 ">{password}</pre>
                  <div className="ml-auto">
                    <IconCopy
                      className="sm:w-7 sm:h-7 cursor-pointer text-green-400"
                      onClick={() => handleCopy(password)}
                    />
                  </div>
                </div>

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
            <div className="border-l-4 text-left border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <p className="text-blue-300">
                It's essential to have strong passwords in order to keep your
                accounts safe and secure. With our online toolset, you can
                generate highly secure passwords that include numbers, special
                characters, and alphabets. This tool is easy to use as it
                generates and copies a unique password every time. The algorithm
                used by this tool ensures that no two generated passwords are
                the same, making it an excellent option for staying productive
                and secure..
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
