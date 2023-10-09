import CodeEditor from "../../../Components/CodeEditor/CodeEditor";
import { useState } from "react";
import { json } from "@codemirror/lang-json";
import { toast } from "react-toastify";
import {
  toastStyleError,
  toastStyleSuccess,
  toastStyleWarning,
} from "../../../Components/utils/Toastify/toastStyle";

const JsonText = `
{
    "string": "ABCDE",
    "number": 1,
    "null": null,
    "boolean": true,
    "object": {
        "string": "ABCDE",
        "number": 1,
        "null": null,
        "boolean": true
    },
    "array": [
        1,
        2,
        3,
        4,
        {
            "string": "ABCDE",
            "number": 1,
            "null": null,
            "boolean": true,
            "array": [
                1,
                2,
                3,
                4,
                {
                    "string": "ABCDE",
                    "number": 1,
                    "null": null,
                    "boolean": true
                }
            ]
        }
    ]
}

`;

const JsonFormat = () => {
  const [jsonText, setJsonText] = useState(JsonText);
  const [formattedJson, setFormattedJson] = useState("");
  const [showJsonEditor, setShowJsonEditor] = useState(false);
  const languages = [json()];

  const handleFormatClick = () => {
    if (!jsonText) {
      toast("Please enter json code!", { style: toastStyleError });
      return;
    }
    try {
      const parsedJson = JSON.parse(jsonText);
      const formatted = JSON.stringify(parsedJson, null, 4);
      if (formatted === formattedJson) {
        toast("JSON is already formatted!", { style: toastStyleWarning });
        return;
      }
      setFormattedJson(formatted);
      setShowJsonEditor(true);
      toast("JSON formatted successfully!", { style: toastStyleSuccess });
    } catch (error) {
      toast("Please enter valid json!", { style: toastStyleError });
    }
  };

  const handleEditorChange = (newValue) => {
    setJsonText(newValue);
    setShowJsonEditor(false);
  };

  return (
    <div className="p-4 sm:ml-52   max-w-screen-xl overflow-y-auto max-h-screen">
      <div className="my-20">
        <h3 className="p-2 max-w-screen-lg rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          JSON Code Format
        </h3>
        <CodeEditor
          value={showJsonEditor ? formattedJson : jsonText}
          onChange={handleEditorChange}
          languages={languages}
          placeholder="Enter json code here"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={handleFormatClick}
        >
          Format JSON
        </button>
      </div>
    </div>
  );
};

export default JsonFormat;
