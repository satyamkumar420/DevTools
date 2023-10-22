import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import { toast } from "react-toastify";
import {
  toastStyleSuccess,
  toastStyleError,
} from "../../../Components/utils/Toastify/toastStyle";

function Base64Encoder() {
  const [text, setText] = useState("");
  const [base64, setBase64] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const encodeToBase64 = () => {
    // check if text is empty
    if (text.trim() === "") {
      toast("Please Enter a Text!", { style: toastStyleError });
      return;
    }
    const base64String = btoa(text);
    setBase64(base64String);
  };

  // handleCopy function to copy the generated token
  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(base64);
      toast("Base64 encoded data copied!", { style: toastStyleSuccess });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = base64;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast("Base64 encoded data copied!", { style: toastStyleSuccess });
    }
  };

  return (
    <>
      <Helmet>
        <title>Base64 Encoder</title>
      </Helmet>
      <div className="p-4 sm:ml-52 max-w-screen-full overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Text to Base64 Encoder
          </h3>
          <div className="w-full sm:max-w-lg  mt-5 p-4 bg-[#1a1c2e] shadow-md rounded-md">
            <h1 className="text-sm text-gray-400 mb-1">
              Text to Base64 Encoder
            </h1>
            <div className="mb-2">
              <textarea
                className="w-full p-2  rounded-md focus:outline-none  bg-[#161727] text-blue-100  focus:outline-blue-500 resize-none"
                placeholder="Enter text or Base64 to Encode and Decode"
                value={text}
                onChange={handleTextChange}
                autoComplete="off"
                cols={30}
                rows={6}
              />
            </div>
            <PrimaryButton text={"Encode base64"} onClick={encodeToBase64} />

            {base64 && (
              <div className="mt-4 break-words">
                <p className="text-medium font-medium sm:text-lg text-orange-500">
                  Encoded Base64:{" "}
                </p>
                <pre className="mb-2 sm:text-lg  text-left bg-[#202236] rounded-md py-3 px-4 break-words shadow-md">
                  {base64}
                </pre>
                <PrimaryButton text={"Copy Token"} onClick={handleCopy} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Base64Encoder;
