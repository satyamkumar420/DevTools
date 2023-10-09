import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");
  return (
    <div className="my-5 overlay  max-w-screen-lg rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        // value={value}
        theme="vs-dark"
        defaultValue="// some comment"
        // onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditor;
