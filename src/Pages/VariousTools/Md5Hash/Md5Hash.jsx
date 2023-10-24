import { useState } from "react";
import { Helmet } from "react-helmet-async";
import md5 from "md5";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import { toast } from "react-toastify";
import {
  toastStyleSuccess,
  toastStyleError,
} from "../../../Components/utils/Toastify/toastStyle";
import TextArea from "../../../Components/utils/textArea/textArea";

const Md5Hash = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const generateMD5 = () => {
    if (input.trim() === "") {
      toast("Please Enter a Text!", { style: toastStyleError });
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
      <div className="p-4 sm:ml-52 max-w-screen overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            MD5 Hash Generator
          </h3>
          <div className="container mx-auto mt-5">
            <div className=" gap-3">
              <div className="">
                <TextArea
                  Value={input}
                  OnChange={handleInputChange}
                  Placeholder={"Enter Text Here"}
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
          <div className="mt-10">
            <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <span className="text-blue-300">
                Our Hash Code Generator makes it easy for you to calculate the
                MD5 hash of any text you like! MD5 (Message Digest Algorithm 5)
                is a widely used cryptographic hash algorithm that generates a
                unique 32-character fingerprint for any input text or data. It's
                awesome for checking data integrity because it produces a
                constant hash, no matter the size of the input data. This means
                that even tiny alterations in the file will change the code,
                making it easy to identify any changes made to the original
                data. MD5 is also great for encrypting passwords in some
                authentication systems, but we recommend using more secure
                algorithms like SHA-256 for such purposes. All you have to do is
                input the text and click on the 'Calculate MD5 Hash' button.
                Let's get started!
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Md5Hash;
