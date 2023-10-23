import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Editor from "../../../Components/CodeEditor/CodeEditor";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import { toast } from "react-toastify";
import {
  toastStyleError,
  toastStyleSuccess,
} from "../../../Components/utils/Toastify/toastStyle";
import { javascript } from "@codemirror/lang-javascript";

const JSMinify = () => {
  const [jsText, setJsText] = useState("");
  const [minifiedJs, setMinifiedJs] = useState("");
  const [showJsEditor, setShowJsEditor] = useState(false);
  const [required, setRequired] = useState(false);

  // Function to handle the minification
  const handleMinifyClick = () => {
    if (jsText.trim() === "") {
      return;
    }

    // Perform the minification logic here
    const minified = jsText
      .replace(/(\/\*[\s\S]*?\*\/|\/\/[^\r\n]*(?=\r|\n|$))/g, "")
      .replace(/\s+/g, "")
      .replace(/\btrue\b/g, "!0") // Replace "true" with "!0"
      .replace(/\bfalse\b/g, "!1"); // Replace "false" with "!1"
    setMinifiedJs(minified);
    setShowJsEditor(true);
    setRequired(true);
  };

  // function handleEditorChange
  const handleEditorChange = (newValue) => {
    setJsText(newValue);
    setMinifiedJs("");
    setShowJsEditor(false);
    setRequired(false);
  };

  // handleCopyJS function to copy the JS output
  const handleCopyJS = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(minifiedJs);
      toast("JS Copied!", { style: toastStyleSuccess });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = minifiedJs;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast("JS Copied!", { style: toastStyleSuccess });
    }
  };

  // RESET JS EDITOR
  const handleResetEditor = () => {
    setJsText("");
    setMinifiedJs("");
    setShowJsEditor(false);
    setRequired(false);
  };

  return (
    <>
      <Helmet>
        <title>JavaScript Minifier</title>
      </Helmet>
      <div className="p-4 sm:ml-52   max-w-screen-lg overflow-y-auto max-h-screen">
        <div className="my-20">
          <h3 className="p-2 mb-4 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            JavaScript Minifier
          </h3>
          <div>
            <Editor
              value={showJsEditor ? minifiedJs : jsText}
              onChange={handleEditorChange}
              languages={[javascript()]}
              placeholder={"Enter JavaScript here"}
              required={required}
              displayName={"JavaScript"}
            />
          </div>
          {jsText && (
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <div className="my-2">
                <PrimaryButton
                  text="Minify"
                  onClick={handleMinifyClick}
                  className={"bg-green-600 hover:bg-green-800 w-32"}
                />
              </div>
              {minifiedJs && (
                <div className="my-2">
                  <PrimaryButton
                    text="Copy"
                    onClick={handleCopyJS}
                    className={" w-32"}
                  />
                </div>
              )}
              <div className="my-2">
                <PrimaryButton
                  text="Reset"
                  onClick={handleResetEditor}
                  className={"bg-red-600 hover:bg-red-800 w-32"}
                />
              </div>
            </div>
          )}
          <div className="mt-10">
            <div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <p className="text-blue-300">
                Optimizing your website's JavaScript code for production
                environments is crucial to enhance its performance, and our
                online minification tool can help you achieve this. Minification
                is a key aspect of website optimization as it eliminates
                unnecessary components from the code like duplicate spaces,
                blank lines, line breaks, and comments. It also reduces the size
                of variable names and simplifies algorithms without affecting
                the website's functionality. This leads to a more condensed and
                optimized version of the code, resulting in faster page loading.
                High-performing websites tend to rank higher in search engines,
                and optimized JavaScript code is a contributing factor to this.
                With our tool, you can easily minify your JavaScript code by
                placing the source code into the text field and clicking the
                'Minify JavaScript' button. Our tool will process your code and
                provide an optimized version that you can use right away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JSMinify;
