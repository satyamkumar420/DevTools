import CodeEditor from "../../../Components/CodeEditor/CodeEditor";
import { useState } from "react";
import { json } from "@codemirror/lang-json";
import { toast } from "react-toastify";
import {
  toastStyleError,
  toastStyleSuccess,
} from "../../../Components/utils/Toastify/toastStyle";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";

const JsonFormat = () => {
  const [jsonText, setJsonText] = useState("");
  const [formattedJson, setFormattedJson] = useState("");
  const [showJsonEditor, setShowJsonEditor] = useState(false);
  const languages = [json()];

  const handleFormatClick = () => {
    if (!jsonText) {
      toast("Please enter JSON code!", { style: toastStyleError });
      return;
    }
    try {
      const parsedJson = JSON.parse(jsonText);
      const formatted = JSON.stringify(parsedJson, null, 4);
      setFormattedJson(formatted);
      setShowJsonEditor(true);
    } catch (error) {
      toast("Please enter valid json!", { style: toastStyleError });
    }
  };

  const handleEditorChange = (newValue) => {
    setJsonText(newValue);
    setShowJsonEditor(false);
    setFormattedJson("");
  };

  // handle copy json
  const handleCopyClick = () => {
    if (formattedJson) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(formattedJson);
        toast(`JSON Data is Copied!`, { style: toastStyleSuccess });
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = formattedJson;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        toast(`JSON Data is Copied!`, { style: toastStyleSuccess });
      }
    }
  };

  return (
    <div className="p-4 sm:ml-52   max-w-screen-xl overflow-y-auto max-h-screen">
      <div className="my-20 max-w-screen-lg">
        <h3 className="p-2 max-w-screen-lg rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          JSON Code Format
        </h3>
        <CodeEditor
          value={showJsonEditor ? formattedJson : jsonText}
          onChange={handleEditorChange}
          languages={languages}
          placeholder="Enter JSON code here"
        />
        {jsonText && (
          <div className="flex flex-wrap gap-2 mb-10 justify-center sm:justify-start">
            <PrimaryButton onClick={handleFormatClick} text="Format" />
            <PrimaryButton onClick={handleCopyClick} text="Copy" />
          </div>
        )}
        <div className="mt-10">
          <div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
            <span className="text-blue-300">
              👋 Hey there. If you need to format JSON code, we've got you
              covered with an Awesome tool! It's super easy to use and you can
              copy the code with just one click! 😊
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonFormat;
