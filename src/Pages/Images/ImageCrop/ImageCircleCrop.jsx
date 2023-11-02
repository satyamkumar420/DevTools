import React, { useRef, useState } from "react";
import Avatar from "react-avatar-edit";
import CustomAlert from "../../../Components/utils/Toastify/CustomAlert";
import { Helmet } from "react-helmet-async";
import PrimaryButton from "./../../../Components/utils/Button/PrimaryButton";

const ImageCircleCrop = () => {
  const [preview, setPreview] = useState(null);

  const [showAlert, setShowAlert] = useState(false);
  const [currentError, setCurrentError] = useState("");

  // Function to show custom alert
  const showAlertMessage = (message) => {
    setCurrentError(message);
    setShowAlert(true);
  };

  const handleCrop = (croppedImage) => {
    setPreview(croppedImage);
  };
  // Save image file to local storage
  const handleSave = () => {
    if (preview) {
      // Create a temporary HTML anchor element
      const link = document.createElement("a");
      link.href = preview;
      link.download = "cropped-avatar.png"; // Specify the filename here
      // Trigger a click event on the anchor element to download the image
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      showAlertMessage("No image to save. Please crop an image first.");
    }
  };

  const handleBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 1000000) {
      showAlertMessage("File is too big! Maximum size is 1MB.");
      elem.target.value = "";
    } else if (!elem.target.files[0].type.includes("image")) {
      showAlertMessage("Invalid file type! Please select an image file.");
      elem.target.value = "";
    }
  };

  return (
    <>
      <Helmet>
        <title>Image Circle Crop</title>
      </Helmet>
      <div className="p-4 sm:ml-52 text-justify max-w-screen overflow-y-auto max-h-screen">
        <div className="my-20  max-w-screen-lg">
          <h3 className="text-left p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Crop Circle Size Image
          </h3>
          <div className="flex flex-col lg:flex-row  items-center gap-10  text-center ">
            <div>
              {showAlert && (
                <CustomAlert
                  message={currentError}
                  onClose={() => {
                    setShowAlert(false);
                    setCurrentError("");
                  }}
                />
              )}
            </div>
            <div className=" rounded-lg overflow-hidden">
              <h1 className="text-2xl my-2 text-blue-50">Upload Image</h1>
              <Avatar
                width={300}
                height={300}
                onCrop={handleCrop}
                onClose={() => setPreview(null)}
                onBeforeFileLoad={handleBeforeFileLoad}
                closeIconColor="#f70303"
              />
            </div>
            {preview && (
              <div className="">
                <div className="mt-4 sm:mt-6 text-center">
                  <h1 className="text-2xl my-2 text-blue-50">Preview</h1>
                  <img
                    src={preview}
                    alt="Cropped Avatar"
                    width={"250"}
                    height={"250"}
                    className="border-2 border-blue-500 rounded-full"
                  />
                </div>
                <div>
                  <PrimaryButton
                    onClick={handleSave}
                    text="Save Image"
                    className={"mt-5 py-2"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="mt-10">
            <div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <span className="text-blue-300">
                <strong>Note:</strong> For a better experience, please use
                Chrome browser. Also, ensure that the image size is less than
                1MB. If you are using Firefox, some functionality may not work.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCircleCrop;
