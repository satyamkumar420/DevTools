import { useState } from "react";
import { json } from "@codemirror/lang-json";
import { xml } from "@codemirror/lang-xml";
import CodeEditor from "../../../Components/CodeEditor/CodeEditor";
import { xmlToJson, processJson, isXMLFormat } from "./xml_to_json";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
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

  // Event handler for the "Convert" button
  const handleConvertClick = () => {
    setLanguageMode(json());
    // Convert XML to JSON
    try {
      if (!isXMLFormat(xmlInput)) {
        toast("XML is not valid!", {
          style: toastStyleError,
        });
        return;
      }
      const xmlData = xmlToJson(xmlInput);
      const processedJson = processJson(xmlData);
      const jsonData = JSON.stringify(processedJson, null, 4);
      setJsonValue(jsonData);
      setShowJsonEditor(true);
      setRequired(true);
    } catch (error) {
      toast("XML is not valid!", { style: toastStyleError });
    }
  };

  // handle copy
  const handleCopyClick = () => {
    if (jsonValue) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(jsonValue);
        toast(`JSON Data is Copied!`, { style: toastStyleSuccess });
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = jsonValue;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        toast(`JSON Data is Copied!`, { style: toastStyleSuccess });
      }
    }
  };

  // handle Reset Editor
  const handleResetEditor = () => {
    setShowJsonEditor(false);
    setJsonValue("");
    setXmlInput("");
    setRequired(false);
  };

  return (
    <>
      <Helmet>
        <title>XML To JSON</title>
      </Helmet>
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
                <PrimaryButton
                  onClick={handleConvertClick}
                  text="Convert"
                  className="bg-green-600 hover:bg-green-700"
                />
                {jsonValue && (
                  <div>
                    <PrimaryButton onClick={handleCopyClick} text="Copy" />
                  </div>
                )}
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
                👋 Hey there! If you need to convert XML to JSON, we've got you
                covered with our awesome tool! It's super easy to use, and you
                can copy the code with just one click. So go ahead and give it a
                try - we promise it'll be a hassle-free experience!
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default XmlToJson;
