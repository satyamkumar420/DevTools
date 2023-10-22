import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Editor from "../../../Components/CodeEditor/CodeEditor";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import { toast } from "react-toastify";
import {
  toastStyleError,
  toastStyleSuccess,
} from "../../../Components/utils/Toastify/toastStyle";
import { css } from "@codemirror/lang-css";

const CssMinify = () => {
  const [cssText, setCssText] = useState("");
  const [minifiedCss, setMinifiedCss] = useState("");
  const [showCssEditor, setShowCssEditor] = useState(false);
  const [required, setRequired] = useState(false);

  // Function to handle the minification
  const handleMinifyClick = () => {
    if (cssText.trim() === "") {
      return;
    }
    // Define a regex pattern to match valid CSS code
    const regexPattern = /^[\s\S]*\{[\s\S]*:[\s\S]*;[\s\S]*\}[\s\S]*$/;
    if (!regexPattern.test(cssText)) {
      toast("Invalid CSS Code!", { style: toastStyleError });
      return;
    }
    // Perform the minification logic here
    const minified = cssText
      .replace(/\s+/g, " ") // Remove extra spaces
      .replace(/:\s/g, ":") // Remove spaces after colons
      .replace(/;\s/g, ";") // Remove spaces after semicolons
      .replace(/{\s/g, "{") // Remove spaces after opening curly braces
      .replace(/}\s/g, "}") // Remove spaces after closing curly braces
      .replace(/\/\*[\s\S]*?\*\//g, ""); // Remove comments
    setMinifiedCss(minified);
    setShowCssEditor(true);
    setRequired(true);
  };

  // function handleEditorChange
  const handleEditorChange = (newValue) => {
    setCssText(newValue);
    setMinifiedCss("");
    setShowCssEditor(false);
    setRequired(false);
  };

  // handleCopyCSS function to copy the CSS output
  const handleCopyCSS = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(minifiedCss);
      toast("CSS Copied!", { style: toastStyleSuccess });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = minifiedCss;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast("CSS Copied!", { style: toastStyleSuccess });
    }
  };

  // RESET CSS EDITOR
  const handleResetEditor = () => {
    setCssText("");
    setMinifiedCss("");
    setShowCssEditor(false);
    setRequired(false);
  };

  return (
    <>
      <Helmet>
        <title>CSS Minifier</title>
      </Helmet>
      <div className="p-4 sm:ml-52   max-w-screen-lg overflow-y-auto max-h-screen">
        <div className="my-20">
          <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            CSS Minifier
          </h3>
          <div>
            <Editor
              value={showCssEditor ? minifiedCss : cssText}
              onChange={handleEditorChange}
              languages={[css()]}
              placeholder={"Enter CSS here"}
              required={required}
              displayName={"CSS"}
            />
          </div>
          {cssText && (
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <div className="my-2">
                <PrimaryButton
                  text="Minify"
                  onClick={handleMinifyClick}
                  className={"bg-green-600 hover:bg-green-800 w-32"}
                />
              </div>
              {minifiedCss && (
                <div className="my-2">
                  <PrimaryButton
                    text="Copy"
                    onClick={handleCopyCSS}
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
                Improving the performance of your website can be achieved by
                optimizing the CSS code for production environments. Our online
                minification tool helps with this by removing unnecessary
                elements such as duplicate spaces, blank lines, line breaks, and
                comments from the code. This results in a more compact and
                optimized version of the code, which in turn speeds up page
                loading and provides a better user experience. Such
                high-performance sites also tend to rank higher in search
                engines. To minify your CSS code, simply copy and paste the CSS
                source code into the text field and click on the 'Minify CSS'
                button. Our tool will process your code and provide an optimized
                version that is ready to be used.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CssMinify;
