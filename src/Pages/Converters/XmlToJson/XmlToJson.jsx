import { useState } from "react";
import { json } from "@codemirror/lang-json";
import { xml } from "@codemirror/lang-xml";
import CodeEditor from "../../../Components/CodeEditor/CodeEditor";
// import { xmlToJson } from "./xml_to_json"; // You will need to implement xmlToJson
import { toast } from "react-toastify";
import {
  toastStyleError,
  toastStyleSuccess,
} from "../../../Components/utils/Toastify/toastStyle";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";

const XmlToJson = () => {
  const [xmlInput, setXmlInput] = useState(""); // XML input
  const [jsonValue, setJsonValue] = useState("");
  const [showJsonEditor, setShowJsonEditor] = useState(false);
  const [languageMode, setLanguageMode] = useState(xml());
  const [required, setRequired] = useState(false);

  // Event handler to update state when the user types XML input
  const handleXmlInputChange = (newValue) => {
    setXmlInput(newValue);
    setShowJsonEditor(false);
    setLanguageMode(xml());
    setJsonValue("");
  };

  // Event handler for the "Start Over" button
  const handleConvertClick = () => {
    // Convert XML to JSON
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlInput, "text/xml");
      const jsonValue = JSON.stringify(xmlToJson(xmlDoc), null, 4);
      setLanguageMode(json());
      setJsonValue(jsonValue);
      setShowJsonEditor(true);
    } catch (error) {
      toast("XML is not valid!", { style: toastStyleError });
    }
  };

  // handle copy
  const handleCopyClick = () => {
    if (jsonValue) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(jsonValue)
          .then(() => {
            toast(`JSON Data is Copied!`, { style: toastStyleSuccess });
          })
          .catch((error) => {
            console.error("Error copying to clipboard:", error);
            fallbackCopyToClipboard(jsonValue);
          });
      } else {
        fallbackCopyToClipboard(jsonValue);
      }
    }
  };

  function fallbackCopyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    toast(`JSON Data is Copied!`, { style: toastStyleSuccess });
  }

  // handle Reset Editor
  const handleResetEditor = () => {
    setShowJsonEditor(false);
    setJsonValue("");
    setXmlInput("");
    setRequired(false);
  };

  return (
    <div className="p-4 sm:ml-52 text-justify max-w-screen-full overflow-y-auto max-h-screen">
      <div className="my-20  max-w-screen-lg">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          XML To JSON Converter
        </h3>
        <div>
          <CodeEditor
            value={showJsonEditor ? jsonValue : xmlInput}
            onChange={handleXmlInputChange}
            placeholder={"Enter XML code here to convert to JSON"}
            languages={languageMode}
            required={required}
          />
          {xmlInput && (
            <div className="flex flex-wrap gap-2 mb-10 justify-center sm:justify-start">
              <PrimaryButton onClick={handleConvertClick} text="Convert" />
              <PrimaryButton onClick={handleCopyClick} text="Copy" />
              <PrimaryButton
                onClick={handleResetEditor}
                text="Reset"
                className="bg-orange-700 hover:bg-orange-800"
              />
            </div>
          )}
        </div>
        <div className="mt-10">
          <div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
            <span className="text-blue-300">
              🙋‍♂️ Hey there! If you need to convert XML to JSON, we've got you
              covered with our awesome tool! It's super easy to use, and you can
              copy the code with just one click. So go ahead and give it a try -
              we promise it'll be a hassle-free experience!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XmlToJson;
