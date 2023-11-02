import React, { useRef, useState } from "react";
import "cropperjs/dist/cropper.css";
import Cropper from "react-cropper";
import { toast } from "react-toastify";
import { toastStyleError } from "../../../Components/utils/Toastify/toastStyle";
import { Helmet } from "react-helmet-async";

const ImageSquareCrop = () => {
  const [image, setImage] = useState(null);
  const [cropper, setCropper] = useState(null);
  const cropperRef = useRef(null);

  const handleImageChange = (e) => {
    // Only accept images and show toast for other file types
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const fileType = file.type;
      if (fileType.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImage(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        setImage(null);
        toast("Only image files are accepted", {
          style: toastStyleError,
        });
      }
    }
    setImage(null);
  };

  const handleCrop = () => {
    if (cropper) {
      const croppedImage = cropper.getCroppedCanvas({});
      // Generate a random file name for the cropped image
      const fileName = `cropped_image_${Math.floor(Math.random() * 100)}.png`;
      // Convert the cropped image to a data URL
      const croppedDataURL = croppedImage.toDataURL();
      const link = document.createElement("a");
      link.href = croppedDataURL;
      link.download = fileName; // Set the file name for download
      link.click();
    }
  };

  return (
    <>
      <Helmet>
        <title>Square Image Crop</title>
      </Helmet>
      <div className="p-4 sm:ml-52 text-justify max-w-screen overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="text-left p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Square Size Image Crop
          </h3>
          <div className="container mx-auto my-8">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-slate-500 
        file:mr-4 file:py-2 file:px-4 file:rounded
        file:border-0 file:text-sm sm:file:text-base file:font-medium
        file:bg-blue-500 file:text-blue-50 
        hover:file:bg-blue-700 cursor-pointer file:cursor-pointer"
            />
            {image && (
              <>
                <div className="border-2 border-dashed border-pink-500 p-4 my-5 shadow-2xl bg-[#1a1c2e]">
                  <Cropper
                    ref={cropperRef}
                    src={image}
                    style={{
                      height: "auto",
                      width: "99%",
                      margin: "auto",
                      zIndex: 0,
                      maxHeight: "400px",
                    }}
                    aspectRatio={1} // Set aspect ratio to maintain a square shape
                    guides={false}
                    viewMode={1}
                    dragMode="move"
                    scalable={true}
                    cropBoxResizable={true}
                    cropBoxMovable={true}
                    crop={(e) => {
                      // You can add custom crop event handling if needed
                    }}
                    onInitialized={(instance) => {
                      setCropper(instance);
                    }}
                    crossOrigin="anonymous"
                  />
                </div>
                <button
                  onClick={handleCrop}
                  className="bg-blue-500 text-sm sm:text-base text-blue-50 py-2 px-4 rounded mt-4 hover:bg-blue-700"
                >
                  Crop Image
                </button>
              </>
            )}
          </div>
          <div className="mt-10">
            <div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-base bg-[#1a1c2e]">
              <span className="text-blue-300 ">
                <strong>Note:</strong> For a better experience, please use the
                Chrome browser. If you are using Firefox, some functionality may
                not work.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSquareCrop;
