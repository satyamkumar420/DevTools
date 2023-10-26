import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import TextArea from "../../../Components/utils/textArea/textArea";
import { toast } from "react-toastify";
import {
  toastStyleError,
  toastStyleSuccess,
} from "../../../Components/utils/Toastify/toastStyle";
import { IconCopy } from "../../../Components/Icons/Icons";

const UrlEncoder = () => {
  const [input, setInput] = useState("");
  const [encoded, setEncoded] = useState("");
  const [operation, setOperation] = useState("encode"); // Default to encoding

  const handleEncodeDecode = () => {
    if (operation === "encode") {
      const encodedValue = encodeURIComponent(input);
      setEncoded(encodedValue);
    } else if (operation === "decode") {
      const decodedValue = decodeURIComponent(input);
      setEncoded(decodedValue);
    }
  };

  // Function to COpy the Encode or Decode URL
  const copyUrl = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(encoded);
      toast("URL Copied to clipboard", {
        style: toastStyleSuccess,
      });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = encoded;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast("URL Copied to clipboard", {
        style: toastStyleSuccess,
      });
    }
  };
  return (
    <>
      <Helmet>
        <title>URL Encoder/Decoder</title>
      </Helmet>
      <div className="p-4 sm:ml-52 max-w-screen overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            URL Encoder/Decoder
          </h3>

          <div className="m-1 ">
            <div className="mb-2">
              <label htmlFor="operation" className="mr-2">
                Select Options
              </label>
              <select
                className="border-none outline-none rounded-md bg-[#1a1c2e] p-2 w-32 px-4 cursor-pointer mt-2 "
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
              >
                <option value="encode">Encode</option>
                <option value="decode">Decode</option>
              </select>
            </div>
            <div className="">
              <TextArea
                Value={input}
                OnChange={(e) => setInput(e.target.value)}
                Placeholder={"Enter URL to encode/decode"}
                Rows={"5"}
              />
            </div>
            <div className="flex gap-4 flex-wrap">
              <div>
                <PrimaryButton
                  onClick={handleEncodeDecode}
                  text={operation === "encode" ? "Encode" : "Decode"}
                  className={"w-32"}
                />
              </div>
            </div>
            {encoded && (
              <div className="my-2">
                <div className="text-gray-400">
                  {operation === "encode" ? "Encoded URL:" : "Decoded URL:"}
                </div>

                <div className="flex items-center bg-[#202236] rounded-md px-2 sm:px-4 py-3 w-fit">
                  <pre className="text-base sm:text-lg mr-4">{encoded}</pre>
                  <div className="ml-auto">
                    <IconCopy
                      className="w-7 h-7 cursor-pointer text-green-400"
                      onClick={copyUrl}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mt-10">
            <div className="border-l-4 text-left border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <p className="text-blue-300">
                Our URL Converter tool provides an efficient solution for
                converting URLs with ease. The 'encode' option transforms
                special characters and spaces into a character string that is
                ideal for web use, guaranteeing that browsers and systems
                interpret the URL accurately. On the other hand, the 'decode'
                option restores the encoded character string back to its
                original form, ensuring the URL is displayed in a readable
                format. Using our user-friendly URL Converter is effortless -
                simply input your URL into the designated field and select your
                preferred action by clicking on the corresponding button. In no
                time, you will be provided with the desired result on your
                screen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UrlEncoder;
