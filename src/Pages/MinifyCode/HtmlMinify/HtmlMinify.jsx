import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Editor from "../../../Components/CodeEditor/CodeEditor";
import { html } from "@codemirror/lang-html";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import { toast } from "react-toastify";
import {
  toastStyleError,
  toastStyleSuccess,
} from "../../../Components/utils/Toastify/toastStyle";

const HtmlMinify = () => {
  const [htmlText, setHtmlText] = useState("");
  const [minifiedHtml, setMinifiedHtml] = useState("");
  const [showHtmlEditor, setShowHtmlEditor] = useState(false);
  const [required, setRequired] = useState(false);

  // Function to handle the minification
  const handleMinifyClick = () => {
    if (htmlText.trim() === "") {
      return;
    }
    // Validate HTML code
    const parser = new DOMParser();
    let isValidHtml = true;
    try {
      parser.parseFromString(htmlText, "text/html");
    } catch (error) {
      isValidHtml = false;
    }

    if (!isValidHtml) {
      toast("Invalid HTML Code!", { style: toastStyleError });
      return;
    }

    const minified = htmlText
      .replace(/\s+/g, " ")
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/> </g, "><")
      .trim();

    setMinifiedHtml(minified);
    setShowHtmlEditor(true);
    setRequired(true);
  };

  // function handleEditorChange
  const handleEditorChange = (newValue) => {
    setHtmlText(newValue);
    setMinifiedHtml("");
    setShowHtmlEditor(false);
    setRequired(false);
  };

  // handle copy html
  const handleCopyHtml = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(minifiedHtml);
      toast(`HTML Data is Copied!`, { style: toastStyleSuccess });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = minifiedHtml;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast(`HTML Data is Copied!`, { style: toastStyleSuccess });
    }
  };

  // handle reset editor
  const handleResetEditor = () => {
    setHtmlText("");
    setMinifiedHtml("");
    setShowHtmlEditor(false);
    setRequired(false);
  };

  return (
    <>
      <Helmet>
        <title>HTML Minifier</title>
      </Helmet>
      <div className="p-4 sm:ml-52 max-w-screen-lg overflow-y-auto max-h-screen">
        <div className="my-20">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            HTML Minifier
          </h3>
          <div>
            <Editor
              languages={[html()]}
              value={showHtmlEditor ? minifiedHtml : htmlText}
              onChange={handleEditorChange}
              placeholder={"Enter HTML here"}
              required={required}
              displayName={"HTML"}
            />
            {htmlText && (
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                <div className="my-2">
                  <PrimaryButton
                    text="Minify"
                    onClick={handleMinifyClick}
                    className={"bg-green-600 hover:bg-green-800 w-32"}
                  />
                </div>
                {minifiedHtml && (
                  <div className="my-2">
                    <PrimaryButton
                      text="Copy"
                      onClick={handleCopyHtml}
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
          </div>
          <div className="mt-10">
            <div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <p className="text-blue-300">
                Improve your website's performance by optimizing the HTML code
                using our online minification tool for production environments.
                Minification is an essential technique for website optimization,
                as it removes unnecessary elements from the code such as
                duplicate spaces, blank lines, line breaks, and comments without
                affecting the site's functionality. This results in a more
                compact and optimized code, which speeds up the page loading,
                providing a better user experience. High-performance websites
                generally rank higher in search engines, and our minification
                tool can help achieve this. To minify your HTML code, simply
                insert the HTML source code into the text field and click on the
                'Minify HTML' button. Our tool will process your code and
                provide an optimized version, ready for use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HtmlMinify;
