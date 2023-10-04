import React, { useState, useEffect } from "react";
import { LoremIpsum } from "lorem-ipsum";
import { toastStyleSuccess } from "../../../Components/utils/Toastify/toastStyle";
import { toast } from "react-toastify";

const DummyTextGenerator = () => {
  const [paragraphs, setParagraphs] = useState(4);
  const [words, setWords] = useState(50);
  const [sentences, setSentences] = useState(5);
  const [generatedText, setGeneratedText] = useState("");

  useEffect(() => {
    generateText();
  }, [paragraphs, words, sentences]);

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: words / sentences,
      min: words / sentences,
    },
  });

  const generateText = () => {
    const newText = lorem.generateParagraphs(paragraphs);
    setGeneratedText(newText);
  };

  const handleGenerateClick = () => {
    generateText();
  };

  // Copy text to clipboard
  const handleCopyClick = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(generatedText);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = colorToCopy;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    toast("Text Copied to Clipboard!", { style: toastStyleSuccess });
  };

  return (
    <div className="p-4 sm:ml-52 text-justify max-w-screen-lg overflow-y-auto max-h-screen">
      <div className="my-20">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Dummy Text Generator
        </h3>
        <div className="container mx-auto p-4">
          <div className="p-4">
            <div className="flex flex-wrap gap-6">
              <div className="sm:mb-4">
                <label className="block font-medium mb-1 text-gray-400">
                  Number of Paragraphs:{" "}
                  <strong className="text-orange-500">{paragraphs}</strong>
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  id="paragraphs"
                  className="range accent-blue-700 bg-[#1a1c2e] rounded min-w-[200px] cursor-pointer"
                  value={paragraphs}
                  onChange={(e) => setParagraphs(e.target.value)}
                />
              </div>
              <div className="sm:mb-4">
                <label className="block font-medium mb-1 text-gray-400">
                  Number of Words:{" "}
                  <strong className="text-orange-500">{words}</strong>
                </label>
                <input
                  type="range"
                  min="1"
                  max="1000"
                  id="words"
                  value={words}
                  onChange={(e) => setWords(e.target.value)}
                  className="range accent-blue-700 bg-[#1a1c2e] rounded min-w-[200px] cursor-pointer"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1 text-gray-400 ">
                  Number of Sentences:{" "}
                  <strong className="text-orange-500">{sentences}</strong>
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  id="sentences"
                  value={sentences}
                  className="range accent-blue-700 bg-[#1a1c2e] rounded min-w-[200px] cursor-pointer"
                  onChange={(e) => setSentences(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4 mb-4 flex-wrap">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={handleGenerateClick}
              >
                Generate
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={handleCopyClick}
              >
                Copy Text
              </button>
            </div>
            <div className="bg-[#1a1c2e] p-3 shadow-md rounded">
              <div dangerouslySetInnerHTML={{ __html: generatedText }} />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
            <span className="text-blue-300">
              If you're a student or a developer, you know how important it is
              to have good dummy text for your websites. Well, this tool is just
              what you need! It's a valuable resource that you can't afford to
              overlook. Just remember to use it wisely, and you'll be all set!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DummyTextGenerator;
