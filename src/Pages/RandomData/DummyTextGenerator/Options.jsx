import { toast } from "react-toastify";
import { toastStyleSuccess } from "../../../Components/utils/Toastify/toastStyle";

const options = ({
  paragraphs,
  tag,
  setTag,
  inputValue,
  setInputValue,
  includeHtml,
  setIncludeHtml,
}) => {
  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(paragraphs);
      toast("Paragraph Copied!", { style: toastStyleSuccess });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = paragraphs;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast("Paragraph Copied!", { style: toastStyleSuccess });
    }
  };

  return (
    <div className="flex flex-wrap gap-3 mt-5 items-center justify-center">
      <div className="">
        <h3 className="mb-2 font-semibold">Paragraphs</h3>
        <input
          type="number"
          placeholder="Number of Paragraphs"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          autoComplete="off"
          min="1"
          className="text-lg py-2 px-5 rounded outline-none bg-[#1a1c2e] shadow-md text-orange-500 w-52"
        />
      </div>
      <div className="">
        <div className="">
          <h3 className="mb-2 font-semibold">Select Tag</h3>
          <select
            className="appearance-none rounded bg-[#1a1c2e] p-2 text-lg w-52 px-4 focus:ring-none focus:outline-none cursor-pointer"
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
      </div>
      <div className="">
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
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mt-7 w-52 transition-all ease-in-out hover:font-semibold"
          onClick={handleCopy}
        >
          Copy Text
        </button>
      </div>
    </div>
  );
};

export default options;