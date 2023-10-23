import { useState, useEffect } from "react";
import CodeEditor from "../../../Components/CodeEditor/CodeEditor";
import { Helmet } from "react-helmet-async";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import LocalStorage from "../../../utils/Hooks/LocalStorage";
import {
  IconArrowsMinimize,
  IconArrowsMaximize,
} from "../../../Components/Icons/Icons";
const FrontendCode = () => {
  const [htmlInput, setHtmlInput] = LocalStorage("html", "");
  const [cssInput, setCssInput] = LocalStorage("css", "");
  const [jsInput, setJsInput] = LocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  const [fullScreenEditor, setFullScreenEditor] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${htmlInput}</body>
          <style>${cssInput}</style>
          <script>${jsInput}</script>
        </html>`);
    }, 500);
    return () => clearTimeout(timeout);
  }, [htmlInput, cssInput, jsInput]);

  // Handle Toggle Full Screen for a specific editor
  const toggleFullScreen = (editor) => {
    setFullScreenEditor(editor === fullScreenEditor ? null : editor);
  };

  return (
    <>
      <Helmet>
        <title>Frontend Code Viewer</title>
      </Helmet>
      <div className="p-4 sm:ml-52   max-w-screen-xl overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-xl">
          <h3 className="mb-5 p-2 max-w-screen-xl rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Frontend Code Viewer
          </h3>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {/* <-- HTML CODE EDITOR --> */}
              <div
                className={`code-editor transition-all duration-500 ${
                  fullScreenEditor === "HTML"
                    ? "w-[100%] fixed top-0 left-0 z-[9999]"
                    : ""
                }`}
              >
                <CodeEditor
                  displayName={"HTML"}
                  languages={[html()]}
                  value={htmlInput}
                  onChange={setHtmlInput}
                  placeholder={"Enter HTML code here"}
                  Height={`${fullScreenEditor === "HTML" ? "100vh" : ""}`}
                  Button={() => toggleFullScreen("HTML")}
                  Icon={
                    fullScreenEditor === "HTML" ? (
                      <IconArrowsMinimize />
                    ) : (
                      <IconArrowsMaximize />
                    )
                  }
                />
              </div>

              {/* <-- CSS CODE EDITOR --> */}
              <div
                className={`
                  code-editor ${
                    fullScreenEditor === "CSS"
                      ? "w-[100%] fixed top-0 left-0 z-[9999]"
                      : ""
                  }                
                `}
              >
                <CodeEditor
                  displayName={"CSS"}
                  languages={[css()]}
                  value={cssInput}
                  onChange={setCssInput}
                  placeholder={"Enter CSS code here"}
                  Height={`${fullScreenEditor === "CSS" ? "100vh" : ""}`}
                  Button={() => toggleFullScreen("CSS")}
                  Icon={
                    fullScreenEditor === "CSS" ? (
                      <IconArrowsMinimize />
                    ) : (
                      <IconArrowsMaximize />
                    )
                  }
                />
              </div>
              {/* <!-- JS CODE EDITOR --> */}
              <div
                className={`code-editor ${
                  fullScreenEditor === "JavaScript"
                    ? "w-[100%] fixed top-0 left-0 z-[9999]"
                    : ""
                }`}
              >
                <CodeEditor
                  displayName={"JavaScript"}
                  languages={[javascript()]}
                  value={jsInput}
                  onChange={setJsInput}
                  placeholder={"Enter JS code here"}
                  Height={`${fullScreenEditor === "JavaScript" ? "100vh" : ""}`}
                  Button={() => toggleFullScreen("JavaScript")}
                  Icon={
                    fullScreenEditor === "JavaScript" ? (
                      <IconArrowsMinimize />
                    ) : (
                      <IconArrowsMaximize />
                    )
                  }
                />
              </div>
            </div>
            <div className="mt-5 bg-[#1a1c2e] rounded-md">
              <h1 className="text-yellow-500 text-center p-2 md:text-lg font-medium">
                PREVIEW
              </h1>
              <iframe
                className=" rounded-md h-[500px] w-full"
                srcDoc={srcDoc}
                title="Output"
                referrerPolicy="no-referrer"
                sandbox="allow-scripts"
              ></iframe>
            </div>
          </div>
          <div className="mt-10">
            <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <p className="text-blue-300">
                👋 Hey there! Are you a developer, student, or professional
                looking for a frontend code preview tool? Look no further! Our
                tool is user-friendly and super easy to use. You can preview
                your code and make any necessary changes before implementation,
                ensuring that your final product is perfect. Give our tool a try
                today and experience the simplicity it brings to your coding
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontendCode;
