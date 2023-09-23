import React, { useRef, useState } from "react";
import Avatar from "react-avatar-edit";

const ImageCircleCrop = () => {
  const [preview, setPreview] = useState(null);
  const handleCrop = (preview) => {
    setPreview(preview);
  };
  // Save image file to local storage
  const handleSave = () => {
    // Create a temporary HTML anchor element
    const link = document.createElement("a");
    link.href = preview;
    link.download = "cropped-avatar.png"; // Specify the filename here
    // Trigger a click event on the anchor element to download the image
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 sm:ml-48 text-justify max-w-screen-lg overflow-y-auto max-h-screen">
      <div className="mt-20">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Crop Circle Size Image
        </h3>
        <div className="flex flex-col items-center mt-10 text-center ">
          <div className=" rounded-lg overflow-hidden">
            <Avatar
              width={300}
              height={300}
              onCrop={handleCrop}
              onClose={() => setPreview(null)}
              onBeforeFileLoad={(elem) => {
                if (elem.target.files[0].size > 1000000) {
                  alert("File is too big! Maximum size is 1MB.");
                  elem.target.value = "";
                }
              }}
            />
          </div>
          {preview && (
            <div className="mt-4 text-center">
              <h1 className="text-2xl my-5 text-blue-50">Cropped Image</h1>
              <img src={preview} alt="Cropped Avatar" className="w-48 h-48" />
              <button
                className="mt-8 bg-blue-500 hover:bg-blue-700 text-blue-50 text-center font-semibold py-2 px-4 rounded"
                onClick={handleSave}
              >
                Download
              </button>
            </div>
          )}
        </div>
        <div className="mt-10">
          <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
            <span className="text-blue-300">
              <strong>Note:</strong> For a better experience, please use Chrome
              browser. Also, ensure that the image size is less than 1MB. If you
              are using Firefox, some functionality may not work.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCircleCrop;
