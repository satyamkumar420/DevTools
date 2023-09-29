import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";
// import { javascript } from "@codemirror/lang-javascript";

const myTheme = createTheme({
  theme: "dark",
  settings: {
    background: "#0e1421",
    backgroundImage: "",
    foreground: "#75baff",
    caret: "#5d00ff",
    selection: "#3c4b88",
    selectionMatch: "#414ba8ee",
    lineHighlight: "#201d3c",
    gutterBackground: "#201d3c",
    gutterForeground: "#8a919966",
    gutterActiveForeground: "#8a9199",
  },
  styles: [
    { tag: t.comment, color: "#59739df8" },
    { tag: t.variableName, color: "#28e8c5" },
    { tag: [t.string, t.special(t.brace)], color: "#0ab421" },
    { tag: t.number, color: "#fa3535" },
    { tag: t.bool, color: "#ee5d3a" },
    { tag: t.null, color: "#bb6918" },
    { tag: t.keyword, color: "#e152ff" },
    { tag: t.operator, color: "#c70a3f" },
    { tag: t.className, color: "#caa812" },
    { tag: t.definition(t.typeName), color: "#037e57" },
    { tag: t.typeName, color: "#06ab9d" },
    { tag: t.angleBracket, color: "#f1effa" },
    { tag: t.tagName, color: "#04ce81" },
    { tag: t.attributeName, color: "#ffda27" },
    { tag: t.tagName, color: "#ffda27" },
    { tag: t.squareBracket, color: "#ffda27" },
    { tag: t.bracket, color: "#c8097b" },
    { tag: t.compareOperator, color: "#c80945" },
  ],
});
const customStyles = {
  fontSize: "20px", // Adjust the font size as needed
};

// TODO: suggestions disable
// const extensions = [javascript({ jsx: true })];
const CodeEditor = () => {
  return (
    <div className="my-5">
      <CodeMirror
        value="console.log('hello world!');"
        height="500px"
        theme={myTheme}
        // extensions={extensions}
        // onChange={onChange}
        style={customStyles}
        autoFocus={true}
      />
    </div>
  );
};

export default CodeEditor;
