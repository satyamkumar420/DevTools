import { useState } from "react";
import { Helmet } from "react-helmet-async";
import md5 from "md5";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import { toast } from "react-toastify";
import {
  toastStyleSuccess,
  toastStyleError,
} from "../../../Components/utils/Toastify/toastStyle";

const Md5Hash = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const generateMD5 = () => {
    if (input.trim() === "") {
      toast("Please Enter Text!", { style: toastStyleError });
      return;
    }

    const hash = md5(input);
    setOutput(hash);
  };

  // handle Copy function to copy the generated hash
  const handleCopyMd5Hash = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(output);
      toast("MD5 Hash Copied!", { style: toastStyleSuccess });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = output;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast("MD5 Hash Copied!", { style: toastStyleSuccess });
    }
  };

  return (
    <>
      <Helmet>
        <title>MD5 Hash Generator</title>
      </Helmet>
      <div className="p-4 sm:ml-52 max-w-screen-full overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            MD5 Hash Generator
          </h3>
          <div className="container mx-auto mt-5">
            <div className=" gap-3">
              <div className="">
                <textarea
                  type="text"
                  placeholder="Enter text here"
                  value={input}
                  onChange={handleInputChange}
                  className="p-2 ring-2 bg-[#1a1c2e] focus:ring-blue-600 rounded-md w-full border-none outline-none"
                  rows="5"
                  cols="50"
                  autoComplete="off"
                />
                <div className="mt-2">
                  <PrimaryButton
                    onClick={generateMD5}
                    text={"Generate MD5 Hash"}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              {output && (
                <div>
                  <strong className="text-orange-500">MD5 Hash:</strong>
                  <pre className="bg-[#1a1c2e] p-3 px-5 rounded-md">
                    {output}
                  </pre>
                  <div className="mt-3">
                    <PrimaryButton text={"Copy"} onClick={handleCopyMd5Hash} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Md5Hash;
