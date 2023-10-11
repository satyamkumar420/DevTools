import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

const myTheme = createTheme({
  theme: "dark",

  settings: {
    background: "#0c0e1b",
    backgroundImage: "",
    foreground: "#c9e0f7",
    caret: "#0df0bf",
    selection: "#036dd626",
    selectionMatch: "#036dd626",
    lineHighlight: "#1a1c2e",
    gutterBackground: "#1a1c2e",
    gutterForeground: "#8a919966",
    gutterActiveForeground: "#c9d7e6aa",
  },
  styles: [
    { tag: t.comment, color: "#3e4474" },
    { tag: t.variableName, color: "#28c8e8" },
    { tag: [t.string, t.special(t.brace)], color: "#0ae527" },
    { tag: t.number, color: "#fa3535" },
    { tag: t.bool, color: "#cd12f2" },
    { tag: t.null, color: "#f4800c" },
    { tag: t.keyword, color: "#e152ff" },
    { tag: t.operator, color: "#c70a3f" },
    { tag: t.className, color: "#caa812" },
    { tag: t.definition(t.typeName), color: "#05be84" },
    { tag: t.typeName, color: "#06ab9d" },
    { tag: t.angleBracket, color: "#effaef" },
    { tag: t.tagName, color: "#04ce81" },
    { tag: t.attributeName, color: "#ffda27" },
    { tag: t.punctuation, color: "#fff127" },
    { tag: t.meta, color: "#ffda27" },
    { tag: t.regexp, color: "#06b226" },
    { tag: t.url, color: "#4f55fa" },
    { tag: t.escape, color: "#07b6b3" },
  ],
});

// const languages = [javascript({ jsx: true })];

const CodeEditor = ({ value, onChange, languages, placeholder }) => {
  const customStyles = {
    fontSize: "18px",
  };

  return (
    <div className="my-4 overflow-hidden rounded-md shadow-md p-2 bg-[#1a1c2e]">
      <CodeMirror
        value={value}
        height="60vh"
        theme={myTheme}
        extensions={languages}
        onChange={onChange}
        style={customStyles}
        placeholder={placeholder}
        security="true"
      />
    </div>
  );
};

export default CodeEditor;
