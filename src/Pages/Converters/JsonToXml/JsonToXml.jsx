import { useState } from "react";
import { json } from "@codemirror/lang-json";
import { xml } from "@codemirror/lang-xml";
import CodeEditor from "../../../Components/CodeEditor/CodeEditor";
import { jsonToXml } from "./json_to_xml";
import { toast } from "react-toastify";
import {
  toastStyleError,
  toastStyleSuccess,
} from "../../../Components/utils/Toastify/toastStyle";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";

const JsonToXml = () => {
  const [jsonInput, setJsonInput] = useState(""); // JSON input
  const [xmlValue, setXmlValue] = useState("");
  const [showXmlEditor, setShowXmlEditor] = useState(false);
  const [languageMode, setLanguageMode] = useState(json());

  // Event handler to update state when the user types JSON input
  const handleJsonInputChange = (newValue) => {
    setJsonInput(newValue);
    setShowXmlEditor(false);
    setLanguageMode(json());
    setXmlValue("");
  };

  // Event handler for the "Start Over" button
  const handleConvertClick = () => {
    // Convert JSON to XML
    try {
      const jsonData = JSON.parse(jsonInput);
      const xmlData = jsonToXml(jsonData);
      setLanguageMode(xml());
      setXmlValue(xmlData);
      setShowXmlEditor(true);
    } catch (error) {
      toast("JSON is not valid!", { style: toastStyleError });
    }
  };

  // handle copy
  const handleCopyClick = () => {
    if (xmlValue) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(xmlValue)
          .then(() => {
            toast(`XML Data is Copied!`, { style: toastStyleSuccess });
          })
          .catch((error) => {
            console.error("Error copying to clipboard:", error);
            fallbackCopyToClipboard(xmlValue);
          });
      } else {
        fallbackCopyToClipboard(xmlValue);
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
    toast(`XML Data is Copied!`, { style: toastStyleSuccess });
  }

  return (
    <div className="p-4 sm:ml-52 text-justify max-w-screen-full overflow-y-auto max-h-screen">
      <div className="my-20  max-w-screen-lg">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          JSON To XML Converter
        </h3>
        <div>
          <CodeEditor
            value={showXmlEditor ? xmlValue : jsonInput}
            onChange={handleJsonInputChange}
            placeholder={"Enter JSON code here to convert to XML"}
            languages={languageMode}
          />
          <div className="flex flex-wrap gap-2 mb-10 justify-center sm:justify-start">
            <PrimaryButton onClick={handleConvertClick} text="Convert" />
            <PrimaryButton onClick={handleCopyClick} text="Copy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonToXml;
