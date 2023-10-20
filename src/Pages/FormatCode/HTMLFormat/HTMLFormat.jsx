import CodeEditor from "../../../Components/CodeEditor/CodeEditor";
import { useState } from "react";
import { html } from "@codemirror/lang-html";
import { toast } from "react-toastify";
import {
  toastStyleError,
  toastStyleSuccess,
} from "../../../Components/utils/Toastify/toastStyle";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import { Helmet } from "react-helmet-async";

const HTMLFormat = () => {
  const [htmlText, setHtmlText] = useState("");
  const [formattedHtml, setFormattedHtml] = useState("");
  const [showHtmlEditor, setShowHtmlEditor] = useState(false);
  const [required, setRequired] = useState(false);

  // Format the HTML code
  const handleFormatHtml = () => {
    const htmlRegex = `<([a-z]+)(?![^>]*\/>)[^>]*>`
    const ValidHtml = htmlText.match(htmlRegex);
    if (!ValidHtml) {
      toast("Invalid HTML Code!", { style: toastStyleError });
      return;
    }
    const formattedHtml = html(htmlText);
    setFormattedHtml(formattedHtml);
    setShowHtmlEditor(true);
    setRequired(true);
  }

  // handle editor change
  const handleEditorChange = (newValue) => {
    setHtmlText(newValue);
    setFormattedHtml("");
    setShowHtmlEditor(false);
    setRequired(false);
  };

  // handle copy html
  const handleCopyHtml = () => {
    if (formattedHtml) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(formattedHtml);
        toast(`HTML Data is Copied!`, { style: toastStyleSuccess });
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = formattedHtml;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        toast(`HTML Data is Copied!`, { style: toastStyleSuccess });
      }
    }
  };

  // handle reset editor
  const handleResetEditor = () => {
    setHtmlText("");
    setFormattedHtml("");
    setShowHtmlEditor(false);
    setRequired(false);
  };

  return (
    <>
      <Helmet>
        <title>HTML Format</title>
      </Helmet>
      <div className="p-4 sm:ml-52   max-w-screen-xl overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="p-2 max-w-screen-lg rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            HTML Code Formatter
          </h3>
          <div>
            <CodeEditor
              languages={[html()]}
              value={showHtmlEditor ? htmlText : formattedHtml}
              onChange={handleEditorChange}
              required={required}
              placeholder={"Enter HTML code here"}
            />
          </div>
          {htmlText && (
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <div className="my-2">
                <PrimaryButton
                  onClick={handleFormatHtml}
                  text="Format"
                  className={"bg-green-600 hover:bg-green-700 w-32"}
                />
              </div>
              {formattedHtml && (
                <div className="my-2">
                  <PrimaryButton
                    onClick={handleCopyHtml}
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
      </div>
    </>
  );
};

export default HTMLFormat;
