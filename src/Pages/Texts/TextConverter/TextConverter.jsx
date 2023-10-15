import { useState } from "react";
import { IconCheck } from "../../../Components/Icons/Icons";

const TextConverter = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    setShowOutput(false);
  };

  const conversions = [
    { label: "Capitalize", fn: convertToCapitalize },
    { label: "Uppercase", fn: convertToUpperCase },
    { label: "CamelCase", fn: convertToCamelCase },
    { label: "Lowercase", fn: convertToLowerCase },
    { label: "Reverse", fn: reverseText },
    { label: "Remove Extra Spaces", fn: removeExtraSpaces },
    { label: "Alternate", fn: convertToAlternateCase },
    { label: "Snake_Case_Char", fn: convertToSnakeCase },
    { label: "Snake_Case_Word", fn: convertToSnakeCaseWord },
    { label: "Hyphen-Case", fn: hyphenCase },
    { label: "Remove Line Breaks", fn: removeLineBreaks },
    { label: "Remove Blank Line", fn: removeBlankLine },
    { label: "Remove Accents", fn: removeAccents },
    { label: "Remove HTML Tags", fn: removeHtmlTags },
    { label: "Remove Digits", fn: removeDigits },
    { label: "Reset Output", fn: resetOutput },
  ];

  // Convert to Capitalize
  function convertToCapitalize() {
    setOutputText(
      inputText.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())
    );
    setShowOutput(true);
  }

  // Convert to Uppercase
  function convertToUpperCase() {
    setOutputText(inputText.toUpperCase());
    setShowOutput(true);
  }

  function convertToCamelCase() {
    const words = inputText.split(" ");
    const camelCaseText = words
      .map((word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join("");
    setOutputText(camelCaseText);
    setShowOutput(true);
  }

  // Convert to Lowercase
  function convertToLowerCase() {
    setOutputText(inputText.toLowerCase());
    setShowOutput(true);
  }

  // Convert to Reverse
  function reverseText() {
    setOutputText(inputText.split("").reverse().join(""));
    setShowOutput(true);
  }

  // remove Extra spaces
  function removeExtraSpaces() {
    const trimmedText = inputText.replace(/\s+/g, " ");
    setOutputText(trimmedText);
    setShowOutput(true);
  }

  // Convert to alternate case randomly characters change not even or odd
  function convertToAlternateCase() {
    let output = "";
    for (let i = 0; i < inputText.length; i++) {
      const random = Math.random();
      if (random < 0.5) {
        output += inputText[i].toUpperCase();
      } else {
        output += inputText[i].toLowerCase();
      }
    }
    setOutputText(output);
    setShowOutput(true);
  }

  // convert to snake case characters by replacing spaces with _
  function convertToSnakeCase() {
    let snakeCaseText = "";
    for (let i = 0; i < inputText.length; i++) {
      if (i % 2 === 1) {
        snakeCaseText += inputText[i].toLowerCase();
      } else {
        snakeCaseText += inputText[i];
      }
      if (i < inputText.length - 1) {
        snakeCaseText += "_";
      }
    }
    setOutputText(snakeCaseText);
    setShowOutput(true);
  }

  // Convert to snake case words by replacing spaces with _
  function convertToSnakeCaseWord() {
    const words = inputText.split(" ");
    const snakeCaseText = words.join("_");
    setOutputText(snakeCaseText);
    setShowOutput(true);
  }

  // Convert to kebab case characters by replacing spaces with -
  function hyphenCase() {
    let kebabCaseText = "";
    for (let i = 0; i < inputText.length; i++) {
      if (inputText[i] === " ") {
        kebabCaseText += "-";
      } else {
        kebabCaseText += inputText[i].toLowerCase();
      }
    }
    setOutputText(kebabCaseText);
    setShowOutput(true);
  }

  // Remove Line Breaks
  function removeLineBreaks() {
    const updatedText = inputText.replace(/\n/g, " ");
    setOutputText(updatedText);
    setShowOutput(true);
  }

  // Remove Blank Line
  function removeBlankLine() {
    const updatedText = inputText.replace(/^\s*[\r\n]/gm, "");
    setOutputText(updatedText);
    setShowOutput(true);
  }
  // Remove Accents
  function removeAccents() {
    const normalizedText = inputText
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    setOutputText(normalizedText);
    setShowOutput(true);
  }

  // HTML Tag Remover
  function removeHtmlTags() {
    const strippedText = inputText.replace(/<[^>]+>/g, "");
    setOutputText(strippedText);
    setShowOutput(true);
  }

  // Remove Digits
  function removeDigits() {
    const updatedText = inputText.replace(/\d/g, "");
    setOutputText(updatedText);
    setShowOutput(true);
  }

  // Reset Output
  function resetOutput() {
    setInputText("");
    setOutputText("");
    setShowOutput(false);
  }

  return (
    <div className="p-4 sm:ml-52   max-w-screen-full overflow-y-auto max-h-screen">
      <div className="my-20 max-w-screen-lg">
        <h3 className="text-left p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Text Converter
        </h3>
        <div>
          <div className="p-4">
            <textarea
              className="border-none p-2 w-full h-40  ring-2 focus:ring-blue-600 outline-none rounded-md bg-[#0c0e1b]"
              placeholder="Enter text to convert"
              value={showOutput ? outputText : inputText}
              onChange={handleInputChange}
            />
            <div className="my-4 flex flex-wrap gap-2 justify-center">
              {conversions.map((conversion, index) => (
                <button
                  key={index}
                  className="bg-[#21243b] hover:bg-[#1a1c2e] p-3 w-full sm:w-52 px-2 rounded shadow-md text-white transition-all ease-in-out duration-100 "
                  onClick={conversion.fn}
                >
                  {conversion.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-base bg-[#1a1c2e]">
            <span className="text-blue-300">
              <ul className="">
                <li className="flex flex-wrap gap-1">
                  <IconCheck /> <strong>Capitalize: </strong> Converts the text
                  to capitalize each word.
                </li>
                <li className="flex flex-wrap gap-1">
                  <IconCheck /> <strong>Uppercase: </strong> Converts the text
                  to all uppercase.
                </li>
                <li className="flex flex-wrap gap-1">
                  <IconCheck /> <strong>CamelCase: </strong> Converts the text
                  to camel case, where the first letter of each word is
                  capitalized and spaces are removed.
                </li>
                <li className="flex flex-wrap gap-1">
                  <IconCheck /> <strong>Lowercase: </strong> Converts the text
                  to all lowercase.
                </li>
                <li className="flex flex-wrap gap-1">
                  <IconCheck /> <strong>Reverse: </strong> Reverses the text.
                </li>
                <li className="flex flex-wrap gap-1">
                  <IconCheck /> <strong>Remove Extra Spaces: </strong> Removes
                  extra spaces and trims the text.
                </li>
                <li className="flex flex-wrap gap-1">
                  <IconCheck /> <strong>Alternate: </strong> Converts the text
                  to alternate case, where even-positioned characters are in
                  uppercase and odd-positioned characters are in lowercase.
                </li>
                <li className="flex flex-wrap gap-1">
                  <IconCheck /> <strong>Snake_Case_Char:</strong> Converts the
                  text to snake case with alternating case for each character.
                </li>
                <li className="flex flex-wrap gap-1">
                  <IconCheck /> <strong>Snake_Case_Word: </strong> Converts the
                  text to snake case with alternating case for each word.
                </li>
                <li className="flex flex-wrap gap-1">
                  <IconCheck /> <strong>Hyphen-Case: </strong> Converts the text
                  to hyphen case, where spaces are replaced with hyphens.
                </li>
                <li className="flex flex-wrap gap-1">
                  <IconCheck /> <strong>Remove Line Breaks: </strong> Removes
                  line breaks from the text.
                </li>
                <li className="flex flex-wrap gap-1">
                  <IconCheck /> <strong>Remove Blank Line: </strong> Removes
                  blank lines from the text.
                </li>
                <li className="flex flex-wrap gap-1">
                  <IconCheck /> <strong>Remove Accents: </strong> Removes
                  accents (diacritics) from accented characters.
                </li>
                <li className="flex flex-wrap gap-1">
                  <IconCheck /> <strong>Remove HTML Tags: </strong> Removes HTML
                  tags from the text.
                </li>
                <li className="flex flex-wrap gap-1">
                  <IconCheck /> <strong>Remove Digits: </strong> Removes digits
                  (numeric characters) from the text.
                </li>
                <li className="flex flex-wrap gap-1">
                  <IconCheck /> <strong>Reset Output: </strong> Resets the
                  output field to an empty state.
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextConverter;
