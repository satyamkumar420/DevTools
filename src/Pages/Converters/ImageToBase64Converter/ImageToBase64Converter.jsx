import React, { useState } from "react";
import {
  toastStyleError,
  toastStyleSuccess,
} from "../../../Components/utils/Toastify/toastStyle";
import { toast } from "react-toastify";

const ImageToBase64Converter = () => {
  const [base64Image, setBase64Image] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.type.includes("image")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setBase64Image(reader.result);
        };
        reader.readAsDataURL(file);
        setSelectedFile(file);
      } else {
        setSelectedFile(null);
        setBase64Image("");
        toast("Please select an image file.", { style: toastStyleError });
      }
    }
  };

  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(base64Image);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = base64Image;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    toast("Image Encoded Data Copied!", { style: toastStyleSuccess });
  };

  return (
    <div className="p-4 sm:ml-52 text-justify max-w-screen-full overflow-y-auto max-h-screen">
      <div className="my-20  max-w-screen-lg">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Image To Base64 Converter
        </h3>
        <div className="container mx-auto my-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-slate-500 
        file:mr-4 file:py-2 file:px-4 file:rounded
        file:border-0 file:text-sm sm:file:text-base file:font-medium
        file:bg-blue-500 file:text-blue-50 
        hover:file:bg-blue-700 cursor-pointer file:cursor-pointer"
          />
          {base64Image && (
            <div className="my-4">
              <h2 className="text-lg font-semibold">Base64 Encoded Image:</h2>
              <textarea
                value={base64Image}
                readOnly
                className="w-full h-48 border-2 rounded focus:border-green-500 border-green-500 p-2 outline-none bg-[#10121d]"
              />
              <div className="my-3">
                <button
                  onClick={handleCopy}
                  className="bg-blue-500 hover:bg-blue-700 text-blue-50 px-4 py-2 rounded "
                >
                  Copy
                </button>
              </div>
            </div>
          )}
          {selectedFile && (
            <div className="my-4">
              <h2 className="text-lg font-semibold my-2">Selected Image:</h2>
              <div className="overflow-hidden border-2 border-dashed border-pink-500 p-4 rounded">
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected"
                  className="max-w-full  rounded shadow-md"
                />
              </div>
            </div>
          )}
        </div>
        <div className="mt-10">
          <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
            <span className="text-blue-300">
              Converting an image to base64 can be a complex task, but have no
              fear! This powerful tool makes it easy and stress-free.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageToBase64Converter;
