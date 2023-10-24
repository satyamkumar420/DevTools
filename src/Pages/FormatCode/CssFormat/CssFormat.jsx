import CodeEditor from "../../../Components/CodeEditor/CodeEditor";
import { useState } from "react";
import { css } from "@codemirror/lang-css";
import { toast } from "react-toastify";
import {
  toastStyleError,
  toastStyleSuccess,
} from "../../../Components/utils/Toastify/toastStyle";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";
import { Helmet } from "react-helmet-async";
import prettier from "prettier/standalone";
import parserCss from "prettier/plugins/postcss";

const CssFormat = () => {
  const [cssText, setCssText] = useState("");
  const [formattedCss, setFormattedCss] = useState("");
  const [showCssEditor, setShowCssEditor] = useState(false);
  const [required, setRequired] = useState(false);

  // Format the CSS code
  const handleFormatCss = async () => {
    if (cssText.trim() === "") {
      return;
    }
    // Define a regex pattern to match valid CSS code
    const regexPattern = /^[\s\S]*\{[\s\S]*:[\s\S]*;[\s\S]*\}[\s\S]*$/;
    if (!regexPattern.test(cssText)) {
      toast("Invalid CSS Code!", { style: toastStyleError });
      return;
    }
    try {
      const formatted = await prettier.format(cssText, {
        parser: "css",
        plugins: [parserCss],
      });
      setFormattedCss(formatted);
      setRequired(true);
    } catch (error) {
      toast("Something went wrong!", { style: toastStyleError });
    }
  };

  // handle editor change
  const handleEditorChange = (newValue) => {
    setCssText(newValue);
    setShowCssEditor(false);
    setRequired(false);
  };

  // handle formatted css code
  const handleCopyCss = () => {
    if (formattedCss) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(formattedCss);
        toast(`CSS Code is Copied!`, { style: toastStyleSuccess });
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = formattedCss;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        toast(`CSS Code is Copied!`, { style: toastStyleSuccess });
      }
    }
  };

  // handle reset editor
  const handleResetEditor = () => {
    setCssText("");
    setFormattedCss("");
    setShowCssEditor(false);
    setRequired(false);
  };

  return (
    <>
      <Helmet>
        <title>CSS Format</title>
      </Helmet>
      <div className="p-4 sm:ml-52   max-w-screen overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="p-2 mb-4 max-w-screen-lg rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            CSS Code Formatter
          </h3>
          <div>
            <CodeEditor
              languages={[css()]}
              value={showCssEditor ? cssText : formattedCss}
              onChange={handleEditorChange}
              required={required}
              extensions={[css()]}
              displayName={"CSS"}
            />
          </div>
          {cssText && (
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <div className="my-2">
                <PrimaryButton
                  onClick={handleFormatCss}
                  text="Format"
                  className={"bg-green-600 hover:bg-green-700 w-32"}
                />
              </div>
              {formattedCss && (
                <div className="my-2">
                  <PrimaryButton
                    onClick={handleCopyCss}
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
          <div className="mt-10">
            <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <p className="text-blue-300">
                👋 Hey there! We are excited to introduce you to our online CSS
                formatter, that makes it super simple to keep your CSS code
                looking neat and organized. With our tool, you can effortlessly
                clean up your code by removing unnecessary spaces and blank
                lines, reducing file size, and improving the page load time.
                Additionally, the CSS code will be properly indented, making it
                easier to understand its structure. To get started, all you need
                to do is copy and paste your CSS code into the text field and
                click the 'Format CSS' button. We promise to instantly format
                your code, providing an organized structure, making it easier
                for you to maintain and update. Give it a try and see how much
                easier it will make your life!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CssFormat;
