// * install monaco editor by using command "npm i react-monaco-editor"

import React from "react";
import MonacoEditor from "react-monaco-editor";
import "./jsonToXmlConverter.css";

const CodeEditor = ({ value, onChange }) => {
  return (
    <div className="m-8">
      <MonacoEditor
        options={{
          wordWrap: "on",
          autoIndent: "full",
          scrollbar: {
            vertical: "auto",
            horizontal: "auto",
          },
          // Other options
        }}
        className="gradient-border"
        height="300"
        width="800"
        language="javascript"
        theme="vs-dark"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default CodeEditor;
