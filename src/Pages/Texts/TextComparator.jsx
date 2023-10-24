import React, { useState, useEffect } from "react";
import { diffChars } from "diff";
import { Helmet } from "react-helmet-async";
import TextArea from "../../Components/utils/textArea/textArea";
const TextComparator = () => {
  const [originalParagraph, setOriginalParagraph] = useState("");
  const [modifiedParagraph, setModifiedParagraph] = useState("");
  const [difference, setDifference] = useState([]);

  useEffect(() => {
    const differences = getDifferences(originalParagraph, modifiedParagraph);
    setDifference(differences);
  }, [originalParagraph, modifiedParagraph]);

  const getDifferences = (original, modified) => {
    // Compare the original and modified texts using jsdiff
    const differences = diffChars(original, modified);

    // Map the differences to JSX elements
    return differences.map((diff, index) => {
      if (diff.added) {
        return (
          <span key={`${index}-mod`} className="text-green-600">
            {diff.value}
          </span>
        );
      } else if (diff.removed) {
        return (
          <del key={index} className="text-red-600">
            {diff.value}
          </del>
        );
      } else {
        return <span key={index}>{diff.value}</span>;
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Text Comparator</title>
      </Helmet>
      <div className="p-4 sm:ml-52 text-justify max-w-screen overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Text Comparator
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="">
              <label
                htmlFor="text1"
                className="block  bg-[#1a1c2e] px-2 py-1 rounded text-green-500 sm:text-lg text-base "
              >
                Original Text
              </label>
              <TextArea
                Value={originalParagraph}
                OnChange={(e) => setOriginalParagraph(e.target.value)}
                className={"focus:border-green-600"}
                Placeholder="Enter Original Text Here"
              />
            </div>
            <div className="">
              <label
                htmlFor="text2"
                className="block  bg-[#1a1c2e] px-2 py-1 rounded text-yellow-500 sm:text-lg text-base "
              >
                Modified Text
              </label>
              <TextArea
                Value={modifiedParagraph}
                OnChange={(e) => setModifiedParagraph(e.target.value)}
                className={"focus:border-yellow-600"}
                Placeholder="Enter Modified Text Here"
              />
            </div>
          </div>

          {originalParagraph && (
            <div className="mt-5">
              <h2 className="text-base sm:text-lg p-2 font-medium text-yellow-600 rounded">
                Result:
              </h2>
              <div className="">
                <div className="rounded-md text-base sm:text-lg text-start bg-[#1a1c2e] p-4 ">
                  <div className="mb-2 text-left text-w break-words">
                    {difference}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="mt-5">
            <div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <p className="text-blue-300">
                Our Text Comparator tool simplifies identifying differences
                between two versions of a text. It highlights removed parts in
                red and new additions in blue. You can make adjustments and
                monitor changes in real-time. It's great for document review and
                ensures a text matches its original version.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextComparator;
