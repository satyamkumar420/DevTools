import Editor from "../../../Components/CodeEditor/CodeEditor";
import less from "less";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { css } from "@codemirror/lang-css";
import { toast } from "react-toastify";
import {
  toastStyleError,
  toastStyleSuccess,
} from "../../../Components/utils/Toastify/toastStyle";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";

const LessToCss = () => {
  const [lessInput, setLessInput] = useState(""); // Less input
  const [cssOutput, setCssOutput] = useState("");
  const [showCssEditor, setShowCssEditor] = useState(false);
  const [required, setRequired] = useState(false);

  // Event handler to update state when the user types Less input
  const handleLessInputChange = (newValue) => {
    setLessInput(newValue);
  };

  // Event handler for the "Convert" button
  const handleConvertClick = () => {
    // Convert Less to CSS
    try {
      if (lessInput.trim() === "") {
        toast("Less is not valid!", { style: toastStyleError });
        return;
      }
      less.render(lessInput, (error, output) => {
        if (!error) {
          setCssOutput(output.css);
          setShowCssEditor(true);
          setRequired(true);
        } else {
          toast("Less is not valid!", { style: toastStyleError });
        }
      });
    } catch (error) {
      toast("Less is not valid!", { style: toastStyleError });
    }
  };

  // handleCopy function to copy the output to clipboard
  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(cssOutput);
      toast("CSS  Copied!", { style: toastStyleSuccess });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = cssOutput;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast("CSS  Copied!", { style: toastStyleSuccess });
    }
  };

  // handle Reset Editor
  const handleResetEditor = () => {
    setLessInput("");
    setCssOutput("");
    setShowCssEditor(false);
    setRequired(false);
  };

  return (
    <>
      <Helmet>
        <title>LESS To CSS</title>
      </Helmet>
      <div className="p-4 sm:ml-52 text-justify max-w-screen overflow-y-auto max-h-screen">
        <div className="my-20  max-w-screen-lg">
          <h3 className="p-2 mb-4 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Less To Css Converter
          </h3>
          <div className="">
            <Editor
              value={showCssEditor ? cssOutput : lessInput}
              onChange={handleLessInputChange}
              className="p-5"
              placeholder="Enter Less code here..."
              languages={css()}
              required={required}
              displayName={"Less to CSS"}
            />

            {lessInput && (
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                <div className="my-2">
                  <PrimaryButton
                    text="Convert"
                    onClick={handleConvertClick}
                    className={"bg-green-600 hover:bg-green-800 w-32"}
                  />
                </div>
                {cssOutput && (
                  <div className="my-2">
                    <PrimaryButton
                      text="Copy"
                      onClick={handleCopy}
                      className={"w-32"}
                    />
                  </div>
                )}
                <div className="my-2">
                  <PrimaryButton
                    text="Reset"
                    onClick={handleResetEditor}
                    className={"bg-orange-600 hover:bg-orange-800 w-32"}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LessToCss;
