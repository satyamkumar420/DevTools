import React, { useState, useEffect } from "react";

const TextComparator = () => {
  const [originalParagraph, setOriginalParagraph] = useState("");
  const [modifiedParagraph, setModifiedParagraph] = useState("");
  const [difference, setDifference] = useState([]);

  useEffect(() => {
    const differences = getDifferences(originalParagraph, modifiedParagraph);
    setDifference(differences);
  }, [originalParagraph, modifiedParagraph]);

  const getDifferences = (original, modified) => {
    const originalWords = original.split(/\s+/);
    const modifiedWords = modified.split(/\s+/);

    const differences = [];
    // TODO: add functionality to compare sentences as well

    const maxLength = Math.max(originalWords.length, modifiedWords.length);

    for (let i = 0; i < maxLength; i++) {
      const originalWord = originalWords[i] || " ";
      const modifiedWord = modifiedWords[i] || " ";

      if (originalWord === modifiedWord) {
        differences.push(<span key={i}>{originalWord} </span>);
      } else {
        if (originalWord) {
          differences.push(
            <del key={i} className="text-red-600">
              {originalWord}
            </del>
          );
        }
        if (modifiedWord) {
          differences.push(
            <span key={`${i}-mod`} className="text-green-600">
              {modifiedWord}{" "}
            </span>
          );
        }
      }
    }

    return differences;
  };

  return (
    <div className="p-4 sm:ml-48 text-justify max-w-screen-lg overflow-y-auto max-h-screen">
      <div className="my-20">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Text Comparator
        </h3>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="">
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
              value={originalParagraph}
              onChange={(e) => setOriginalParagraph(e.target.value)}
            />
          </div>
          <div className="">
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
              value={modifiedParagraph}
              onChange={(e) => setModifiedParagraph(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-base sm:text-lg p-2 text-orange-600 rounded">
            Result:
          </h2>
          <div className="border-dashed border-2 border-pink-500 mt-1 p-3 rounded">
            <div className="text-base sm:text-lg text-start bg-[#1a1c2e] p-2 ">
              <div className="mb-2 text-left text-w">{difference}</div>
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
