import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  toastStyleSuccess,
  toastStyleError,
} from "../../../Components/utils/Toastify/toastStyle";
import { IconContentCopy } from "../../../Components/Icons/Icons";

const ShortUrl = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateShortUrl = async () => {
    // Validate the URL
    if (!originalUrl) {
      toast("Please enter a valid url!", { style: toastStyleError });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${originalUrl}`
      );
      const data = await response.json();

      if (data.result) {
        setShortUrl(data.result.full_short_link);
        toast("URL generated successfully!", {
          style: toastStyleSuccess,
        });
      } else {
        // Handle error, e.g., data.error
        toast("Please enter a valid url!", { style: toastStyleError });
      }
    } catch (error) {
      // Handle network or other errors
      toast("Something went wrong!", { style: toastStyleError });
    } finally {
      setIsLoading(false);
    }
  };
  // Handle Url Copy Button
  const handleCopyClick = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shortUrl);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = shortUrl;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    toast(`Url Copied to Clipboard!`, { style: toastStyleSuccess });
  };
  return (
    <div className="p-4 sm:ml-52   max-w-screen-full overflow-y-auto max-h-screen">
      <div className="my-20 max-w-screen-lg">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Short URL Generator
        </h3>
        <div className="mt-5 flex flex-wrap gap-6 justify-center  ">
          <div className="bg-[#1a1c2e] w-full min-w-min p-5 items-center space-y-4">
            <input
              type="text"
              placeholder="Enter the original URL"
              className="rounded px-2 py-1 bg-[#131630]  w-full border-2 border-gray-600 focus:border-2 focus:border-blue-500 outline-none"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleGenerateShortUrl}
              disabled={isLoading}
            >
              {isLoading ? "Generating..." : "Generate Short URL"}
            </button>

            {shortUrl && (
              <div className="flex my-5 flex-wrap">
                <p className="text-orange-500 font-semibold mr-3 py-2">
                  Short URL:
                </p>
                <div className="flex bg-[#262943]  p-2 px-4 rounded ">
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-500 hover:text-blue-700 pr-3"
                  >
                    {shortUrl}
                  </a>
                  <IconContentCopy
                    onClick={handleCopyClick}
                    className="hover:text-green-500 hover:cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-10">
          <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
            <span className="text-blue-300">
              Hey there! If you ever need to shorten a long URL, I've got just
              the tool for you. It's completely free and super helpful!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortUrl;
