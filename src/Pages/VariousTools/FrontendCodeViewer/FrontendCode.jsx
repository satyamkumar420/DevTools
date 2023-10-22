import { useState, useEffect } from "react";
import CodeEditor from "../../../Components/CodeEditor/CodeEditor";
import { Helmet } from "react-helmet-async";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import LocalStorage from "../../../utils/Hooks/LocalStorage";

const FrontendCode = () => {
  const [htmlInput, setHtmlInput] = LocalStorage("html", "");
  const [cssInput, setCssInput] = LocalStorage("css", "");
  const [jsInput, setJsInput] = LocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

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
  return (
    <>
      <Helmet>
        <title>Frontend Code Viewer</title>
      </Helmet>
      <div className="p-4 sm:ml-52   max-w-screen-xl overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-xl">
          <h3 className="p-2 max-w-screen-xl rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Frontend Code Viewer
          </h3>
          <div className="">
            <div className="flex justify-center gap-3 flex-wrap">
              <div className="w-[400px]">
                <CodeEditor
                  displayName={"HTML"}
                  languages={[html()]}
                  value={htmlInput}
                  onChange={setHtmlInput}
                  placeholder={"Enter HTML code here"}
                />
              </div>
              <div className="w-[400px]">
                <CodeEditor
                  displayName={"CSS"}
                  languages={[css()]}
                  value={cssInput}
                  onChange={setCssInput}
                  placeholder={"Enter CSS code here"}
                />
              </div>
              <div className="w-[400px]">
                <CodeEditor
                  displayName={"JavaScript"}
                  languages={[javascript()]}
                  value={jsInput}
                  onChange={setJsInput}
                  placeholder={"Enter JS code here"}
                />
              </div>
            </div>
            <div className="">
              <iframe
                className="bg-[#1a1c2e] p-3 rounded-md h-[500px] w-full"
                srcDoc={srcDoc}
                title="Output"
                referrerPolicy="no-referrer"
                sandbox="allow-scripts"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontendCode;
