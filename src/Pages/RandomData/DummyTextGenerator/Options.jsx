import { toast } from "react-toastify";
import { toastStyleSuccess } from "../../../Components/utils/Toastify/toastStyle";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";

const options = ({
  paragraphs,
  tag,
  setTag,
  inputValue,
  setInputValue,
  includeHtml,
  setIncludeHtml,
  defaultText,
}) => {
  let textToCopy;

  if (includeHtml === "yes") {
    textToCopy = paragraphs
      .map((sentence) => `<${tag}>${sentence}</${tag}>`)
      .join("\n");
  } else if (includeHtml === "all") {
    textToCopy = `<${tag}>${paragraphs.join("")}</${tag}>`;
  } else if (includeHtml === "no") {
    textToCopy = paragraphs.join("");
  } else {
    if (includeHtml === "no") {
      textToCopy = `<${tag}>${defaultText}</${tag}>`;
    } else {
      textToCopy = defaultText;
    }
  }

  // Match the text to copy
  if (textToCopy === "") {
    textToCopy = defaultText;
  }

  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy);
      toast("Paragraph Copied!", { style: toastStyleSuccess });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast("Paragraph Copied!", { style: toastStyleSuccess });
    }
  };

  return (
    <div className="flex flex-wrap gap-3 mt-5 items-center justify-center md:justify-start">
      <div className="">
        <h3 className="mb-2 font-semibold">No. of Paragraphs</h3>
        <input
          type="number"
          placeholder="Paragraphs"
          value={inputValue}
          onChange={(e) => {
            if (e.target.value <= 1000) {
              setInputValue(e.target.value);
            }
          }}
          autoComplete="off"
          min="1"
          max="1000"
          className="text-lg py-2 px-5 rounded outline-none bg-[#1a1c2e] shadow-md text-blue-100 w-52 appearance-none"
        />
      </div>
      <div className="">
        <h3 className="mb-2 font-semibold">Select Tag</h3>
        <select
          className="appearance-none rounded bg-[#1a1c2e] p-2 text-lg w-52 px-4 focus:ring-none focus:outline-none cursor-pointer "
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        >
          <option value="p">&lt;p&gt;</option>
          <option value="h1">&lt;h1&gt;</option>
          <option value="h2">&lt;h2&gt;</option>
          <option value="h3">&lt;h3&gt;</option>
          <option value="h4">&lt;h4&gt;</option>
          <option value="h5">&lt;h5&gt;</option>
          <option value="h6">&lt;h6&gt;</option>
          <option value="div">&lt;div&gt;</option>
          <option value="span">&lt;span&gt;</option>
        </select>
      </div>
      <div className="">
        <h3 className="mb-2 font-semibold">Include HTML</h3>
        <select
          className="rounded bg-[#1a1c2e] p-2 text-lg w-52 appearance-none focus:outline-none cursor-pointer"
          value={includeHtml}
          onChange={(e) => {
            setIncludeHtml(e.target.value);
          }}
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
          <option value="all">All</option>
        </select>
      </div>

      <div className=" justify-end">
        <h3 className="mb-2 font-semibold">Paragraph Copy</h3>
        <PrimaryButton
          onClick={handleCopy}
          text="Copy Text"
          className={"w-52 px-4 py-2 mt"}
        />
      </div>
    </div>
  );
};

export default options;
