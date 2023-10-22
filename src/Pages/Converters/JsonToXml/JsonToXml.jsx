import { useState } from "react";
import { json } from "@codemirror/lang-json";
import { xml } from "@codemirror/lang-xml";
import CodeEditor from "../../../Components/CodeEditor/CodeEditor";
import { jsonToXml } from "./json_to_xml";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
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
  const [required, setRequired] = useState(false);

  // Event handler to update state when the user types JSON input
  const handleJsonInputChange = (newValue) => {
    setJsonInput(newValue);
    setLanguageMode(json());
  };

  // Event handler for the "Start Over" button
  const handleConvertClick = () => {
    // Convert JSON to XML
    try {
      const jsonData = JSON.parse(jsonInput);
      const xmlData = jsonToXml(jsonData);
      const xmlValue = `<?xml version="1.0" encoding="UTF-8"?>\n${xmlData}`;
      setLanguageMode(xml());
      setXmlValue(xmlValue);
      setShowXmlEditor(true);
      setRequired(true);
    } catch (error) {
      toast("JSON is not valid!", { style: toastStyleError });
    }
  };

  // handle Reset Editor
  const handleResetEditor = () => {
    setShowXmlEditor(false);
    setXmlValue("");
    setRequired(false);
    setJsonInput("");
  };

  // handle copy
  const handleCopyClick = () => {
    if (xmlValue) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(xmlValue);
        toast(`XML Data is Copied!`, { style: toastStyleSuccess });
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = xmlValue;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        toast(`XML Data is Copied!`, { style: toastStyleSuccess });
      }
    }
  };
  return (
    <>
      <Helmet>
        <title>JSON To XML</title>
      </Helmet>
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
              required={required}
              displayName={"JSON To XML"}
            />
            {jsonInput && (
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                <div className="my-2">
                  <PrimaryButton
                    onClick={handleConvertClick}
                    text="Convert"
                    className="bg-green-600 hover:bg-green-700 w-32"
                  />
                </div>
                {xmlValue && (
                  <div className="my-2">
                    <PrimaryButton
                      onClick={handleCopyClick}
                      text="Copy"
                      className={"w-32"}
                    />
                  </div>
                )}
                <div className="my-2">
                  <PrimaryButton
                    onClick={handleResetEditor}
                    text="Reset"
                    className={"bg-orange-700 hover:bg-orange-800 w-32"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="mt-10">
            <div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <span className="text-blue-300">
                👋 Hello there! Looking to convert your JSON to XML? Great news!
                Our fantastic tool is here to assist you effortlessly. It's
                incredibly user-friendly, and with just a single click, you can
                copy the code and convert it. Don't hesitate to give it a try –
                we're confident you'll love the experience! 😄
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JsonToXml;
