import { useState, useEffect } from "react";
import Options from "./Options";
import OutputText from "./OutputText";
import { toast } from "react-toastify";
import { toastStyleError } from "../../../Components/utils/Toastify/toastStyle";

const TextGenerator = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [tag, setTag] = useState("p");
  const [inputValue, setInputValue] = useState(1);
  const [includeHtml, setIncludeHtml] = useState(false);

  useEffect(() => {
    // TODO: how can api protected be used?
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1`,
          {
            mode: "cors", // Add this line for cross-origin support
          }
        );
        const data = await response.json();
        setParagraphs(data);
      } catch (error) {
        toast("Something went wrong!", { style: toastStyleError });
      }
    };

    fetchData();
  }, [inputValue]);

  return (
    <div className="p-4 sm:ml-52 text-justify max-w-screen-full overflow-y-auto max-h-screen">
      <div className="my-20 max-w-screen-lg">
        <h3 className="p-2 rounded max-w-screen-lg text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Dummy Text Generator
        </h3>
        <div>
          <Options
            paragraphs={paragraphs}
            tag={tag}
            setTag={setTag}
            inputValue={inputValue}
            setInputValue={setInputValue}
            includeHtml={includeHtml}
            setIncludeHtml={setIncludeHtml}
          />
        </div>
        <div className="my-4">
          <OutputText
            paragraphs={paragraphs}
            tag={tag}
            includeHtml={includeHtml}
          />
        </div>
        <div className="mt-10">
          <div className="border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
            <span className="text-blue-300">
              If you're a student or a developer, you know how important it is
              to have good dummy text for your websites. Well, this tool is just
              what you need! It's a valuable resource that you can't afford to
              overlook. Just remember to use it wisely, and you'll be all set!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextGenerator;
