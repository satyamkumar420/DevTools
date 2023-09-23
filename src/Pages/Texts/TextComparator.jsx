import { useState, useEffect } from "react";

const TextComparator = () => {
  const [text1, setText1] = useState("Welcome to DevTools!");
  const [text2, setText2] = useState("Welcome to DevTools!!");
  const [differences, setDifferences] = useState([]);

  const compareText = () => {
    const text1Array = text1.split(" ");
    const text2Array = text2.split(" ");

    const differencesArray = [];

    text1Array.forEach((word, index) => {
      // Check if text2Array[index] exists before comparing
      if (text2Array[index] && text2Array[index] !== word) {
        differencesArray.push({ word, added: text2Array[index] });
      }
    });

    setDifferences(differencesArray);
  };

  useEffect(() => {
    compareText();
  }, [text1, text2]);
  return (
    <div className="p-4 sm:ml-48 text-justify max-w-screen-lg overflow-y-auto max-h-screen">
      <div className="mt-20">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Text Comparator
        </h3>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="relative">
            <label
              htmlFor="text1"
              className="block mb-2 bg-[#1a1c2e] px-2 py-1 rounded text-green-500 sm:text-lg text-base "
            >
              Original Text
            </label>
            <textarea
              id="text1"
              placeholder="Enter your original text here..."
              className="w-full h-48 border p-2 bg-[#1a1c2e] outline-none rounded border-green-500 text-blue-200"
              value={text1}
              onChange={(e) => setText1(e.target.value)}
            />
          </div>
          <div className="relative">
            <label
              htmlFor="text2"
              className="block mb-2 bg-[#1a1c2e] px-2 py-1 rounded text-yellow-500 sm:text-lg text-base "
            >
              Modified Text
            </label>
            <textarea
              id="text2"
              placeholder="Enter your modified text here..."
              className="w-full h-48 border p-2 bg-[#1a1c2e] outline-none rounded border-yellow-500 text-blue-200"
              value={text2}
              onChange={(e) => setText2(e.target.value)}
            />
          </div>
        </div>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={compareText}
        >
          Compare Text
        </button>
        <div className="mt-8">
          <div className="border-dashed border-2 border-pink-500   mt-4 p-3 rounded">
            <h2 className="text-base sm:text-lg mb-2 p-2 text-orange-600 rounded">
              Differences Found in Text
            </h2>
            <div className="text-base sm:text-lg text-start bg-[#1a1c2e] p-2">
              {differences.map((diff, index) => (
                <span
                  key={index}
                  className={diff.added ? "text-blue-500" : "text-red-500  "}
                >
                  {diff.added || diff.word}{" "}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
            <p className="text-blue-300">
              Our Text Comparator tool simplifies identifying differences
              between two versions of a text. It highlights removed parts in red
              and new additions in blue. You can make adjustments and monitor
              changes in real-time. It's great for document review and ensures a
              text matches its original version.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextComparator;
