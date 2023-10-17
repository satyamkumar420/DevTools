import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AsciiArt = () => {
  return (
    <>
      <Helmet>
        <title>ASCII Letter Generator</title>
      </Helmet>
      <div className="p-4 sm:ml-52   max-w-screen-full overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="text-left p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            ASCII Letter Generator
          </h3>
        </div>
      </div>
    </>
  );
};

export default AsciiArt;
