import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import figlet from "figlet";
import Standard from "figlet/importable-fonts/Standard";

const AsciiLater = () => {
  const [ASCIIText, setASCIIText] = useState("Your Text Here");
  const [ASCIIFont, setASCIIFont] = useState("Standard");

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
          <div>
            <div className="mb-4">
              <label htmlFor="inputText">Text:</label>
              <input
                type="text"
                id="inputText"
                value={ASCIIText}
                onChange={(e) => setASCIIText(e.target.value)}
                className="border p-2"
              />
            </div>
            <pre>{ASCIIFont}</pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsciiLater;
