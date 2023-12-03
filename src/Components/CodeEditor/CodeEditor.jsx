/* eslint-disable react/prop-types */
import { lazy } from "react";
import { tags as t } from "@lezer/highlight";
import { andromedaInit } from "@uiw/codemirror-theme-andromeda";
import "./CodeEditor.css";
// import CodeMirror from '@uiw/react-codemirror';
const CodeMirror = lazy(() => import("@uiw/react-codemirror"));
import { EditorView } from "@codemirror/view";

const myTheme = {
  settings: {
    background: "#1a1c2e",
    backgroundImage: "",
    foreground: "#c9e0f7e0",
    caret: "#0df0bf",
    selection: "#036dd626",
    selectionMatch: "#036dd626",
    lineHighlight: "#21233a",
    gutterBackground: "#21233a",
    gutterForeground: "#8a919966",
    gutterActiveForeground: "#c9d7e6aa",
  },
  styles: [
    { tag: t.bool, color: "#cd12f2" },
    { tag: t.null, color: "#f4800c" },
    { tag: t.typeName, color: "#06ab9d" },
    { tag: t.angleBracket, color: "#faf3ef" },
    { tag: t.punctuation, color: "#ffda27" },
  ],
};

const CodeEditor = ({
  value,
  onChange,
  languages,
  placeholder,
  required,
  displayName,
  Height,
  Width,
  Button,
  Icon,
  Ref,
}) => {
  const customStyles = {
    fontSize: "18px",
    fontWeight: "400",
  };

  return (
    <div className="overflow-hidden rounded-md shadow-md py-1 pr-1 bg-[#21233a] ">
      <div className="flex gap-2 p-2 items-center">
        <div className="w-3 h-3 p-1 bg-red-500 rounded-full" />
        <div className="w-3 h-3 p-1 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 p-1 bg-green-500 rounded-full" />
        <div className="flex justify-center text-center mx-auto">
          <div className=" ">{displayName}</div>
        </div>
        <button className="" onClick={Button}>
          {Icon}
        </button>
      </div>
      <CodeMirror
        value={value}
        height={`${Height || "60vh"}`}
        width={Width || "100%"}
        theme={andromedaInit(myTheme) || "dark"}
        extensions={[languages, EditorView.lineWrapping]}
        onChange={onChange}
        style={customStyles}
        placeholder={placeholder}
        security="true"
        readOnly={required}
        ref={Ref}
      />
    </div>
  );
};

export default CodeEditor;
