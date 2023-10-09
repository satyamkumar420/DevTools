// TextCounter.js
import React, { useState } from "react";

function TextCounter() {
  const [text, setText] = useState("");

  const countTextInfo = () => {
    const paragraphCount = text.trim().split("\n").filter(Boolean).length;
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
    const characterCount = text.length;
    const characterCountWithSpaces = text.replace(/\s/g, "").length;
    const lineCount = text.split("\n").length;

    return {
      paragraphCount,
      wordCount,
      sentenceCount,
      characterCount,
      characterCountWithSpaces,
      lineCount,
    };
  };

  const textInfo = countTextInfo();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="p-4 sm:ml-52   max-w-screen-full overflow-y-auto max-h-screen">
      <div className="my-20 max-w-screen-lg">
        <h1 className="p-2 rounded text-lg md:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Text Counter
        </h1>
        <textarea
          className="w-full p-2 border border-blue-500 rounded-md focus:outline-none  bg-[#1a1c2e] text-white mt-5"
          placeholder="Enter your text here..."
          onChange={handleTextChange}
          value={text}
          cols="20"
          rows="5"
          autoComplete="off"
        ></textarea>
        <div className="mt-4 border-2 border-dashed border-pink-500 rounded p-4 ">
          <h2 className="text-base md:text-lg font-bold text-green-400 uppercase">
            Text Info:
          </h2>
          <ul className="grid md:grid-cols-2 gap-2">
            <li className="p-2 rounded text-base md:text-xl text-pink-500 w-full bg-[#1a1c2e]">
              Paragraphs: {textInfo.paragraphCount}
            </li>
            <li className="p-2 rounded text-base md:text-xl text-blue-500 w-full bg-[#1a1c2e]">
              Words: {textInfo.wordCount}
            </li>
            <li className="p-2 rounded text-base md:text-xl text-cyan-500 w-full bg-[#1a1c2e]">
              Sentences: {textInfo.sentenceCount}
            </li>
            <li className="p-2 rounded text-base md:text-xl text-yellow-500 w-full bg-[#1a1c2e]">
              Lines: {textInfo.lineCount}
            </li>
            <li className="p-2 rounded text-base md:text-xl text-green-500 w-full bg-[#1a1c2e]">
              Characters (including spaces): {textInfo.characterCount}
            </li>
            <li className="p-2 rounded text-base md:text-xl text-purple-500 w-full bg-[#1a1c2e]">
              Characters (excluding spaces): {textInfo.characterCountWithSpaces}
            </li>
          </ul>
        </div>
        <div className="mt-5">
          {/* TODO: convert into text in 123 format */}
          <div className="text-blue-300 border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
            <p>
              This tool is a useful way to quickly and accurately count the
              characters, words, paragraphs, lines, and white spaces in your
              text. It's especially helpful for scientific and academic
              publications where adhering to specific formatting standards is
              necessary. By using this feature, you can ensure that your text
              meets the required criteria and comply with various formatting
              requirements. It enables you to monitor the size of your texts
              effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextCounter;
