import CodeEditor from "../../../Components/CodeEditor/CodeEditor";
import { useState } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { toast } from "react-toastify";
import {
  toastStyleError,
  toastStyleSuccess,
} from "../../../Components/utils/Toastify/toastStyle";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import { Helmet } from "react-helmet-async";
import prettier from "prettier/standalone";
import parserJs from "prettier/plugins/babel";
import parserEsTree from "prettier/plugins/estree";

const JsFormat = () => {
  const [jsText, setJsText] = useState("");
  const [formattedJs, setFormattedJs] = useState("");
  const [showJsEditor, setShowJsEditor] = useState(false);
  const [required, setRequired] = useState(false);

  // Format the JS code
  const formatJsCode = async () => {
    if (jsText.trim() === "") {
      toast("Invalid JS Code!", { style: toastStyleError });
      return;
    }

    try {
      const formattedCode = await prettier.format(jsText, {
        parser: "babel",
        plugins: [parserJs, parserEsTree],
      });
      setFormattedJs(formattedCode);
      setShowJsEditor(true);
      setRequired(true);
    } catch (error) {
      toast("Something went wrong!", { style: toastStyleError });
    }
  };

  // handle editor change
  const handleEditorChange = (newValue) => {
    setJsText(newValue);
    setShowJsEditor(false);
    setRequired(false);
  };

  // handle formatted js code copy
  const handleCopyJsCode = () => {
    if (formattedJs) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(formattedJs);
        toast("JS Code is Copied!", { style: toastStyleSuccess });
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = formattedJs;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        toast("JS Code is Copied!", { style: toastStyleSuccess });
      }
    }
  };

  // handle reset editor
  const handleResetEditor = () => {
    setJsText("");
    setFormattedJs("");
    setShowJsEditor(false);
    setRequired(false);
  };

  return (
    <>
      <Helmet>
        <title>JavaScript Format</title>
      </Helmet>
      <div className="p-4 sm:ml-52   max-w-screen-xl overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="p-2 mb-4 max-w-screen-lg rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            JavaScript Code Formatter
          </h3>
          <div>
            <CodeEditor
              languages={[javascript()]}
              value={showJsEditor ? formattedJs : jsText}
              onChange={handleEditorChange}
              required={required}
              displayName={"JavaScript"}
            />
            {jsText && (
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                <div className="my-2">
                  <PrimaryButton
                    onClick={formatJsCode}
                    text="Format"
                    className={"bg-green-600 hover:bg-green-700 w-32"}
                  />
                </div>
                {formattedJs && (
                  <div className="my-2">
                    <PrimaryButton
                      onClick={handleCopyJsCode}
                      text="Copy"
                      className={"w-32"}
                    />
                  </div>
                )}
                <div className="my-2">
                  <PrimaryButton
                    onClick={handleResetEditor}
                    text="Reset"
                    className={"bg-orange-600 hover:bg-orange-800 w-32"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="mt-10">
            <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <p className="text-blue-300">
                👋 Hi there! Are you looking for an easy way to organize your
                Javascript code for improved readability? Look no further! Our
                online Javascript formatter makes the process a breeze. With
                just a few clicks, you can quickly clean up your code by
                removing unnecessary spaces and blank lines. This not only makes
                your code look better, but it also reduces its file size and
                improves your page load time. Plus, the Javascript code will be
                properly indented, making it easy to understand its structure.
                To use the formatter, simply copy and paste your Javascript code
                into the text field and click the 'Format Javascript' button.
                Our tool will take care of the rest, providing you with a more
                organized code that's easy to maintain and update. Give it a try
                - you won't be disappointed!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JsFormat;
