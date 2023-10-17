import { Helmet } from "react-helmet-async";
import { useState } from "react";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import { toast } from "react-toastify";
import { toastStyleSuccess } from "../../../Components/utils/Toastify/toastStyle";

const TokenGenerator = () => {
  const [token, setToken] = useState("");
  const [tokenLength, setTokenLength] = useState(200); // Initial token length

  const generateToken = () => {
    // Generate a random token of the specified length
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < tokenLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    // Encode the generated token in base64
    const encodedToken = btoa(result);

    // Set the encoded token
    setToken(encodedToken);
  };

  // handleCopy function to copy the generated token
  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(token);
      toast("Token Copied!", { style: toastStyleSuccess });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = token;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast("Token Copied!", { style: toastStyleSuccess });
    }
  };

  return (
    <>
      <Helmet>
        <title>Token Generator</title>
      </Helmet>
      <div className="p-4 sm:ml-52 text-justify max-w-screen-full overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Token Generator
          </h3>
          <div className="">
            <div className="flex flex-wrap gap-3 mt-5">
              <PrimaryButton text={"Generate Token"} onClick={generateToken} />
              <input
                type="number"
                value={tokenLength}
                onChange={(e) => setTokenLength(e.target.value)}
                className="px-3 bg-[#1a1c2e] outline-none border-none ring-2 focus:ring-2 focus:ring-blue-500 text-blue-100 rounded w-40 sm:w-52"
              />
              {token && (
                <PrimaryButton text={"Copy Token"} onClick={handleCopy} />
              )}
            </div>
            {token && (
              <div className="my-5 text-left ">
                <p className="text-base sm:text-lg text-orange-500">
                  Generated Token:{" "}
                </p>
                <p className="text-left bg-[#1a1c2e] rounded-md py-3 px-4 break-words">
                  {token}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenGenerator;
