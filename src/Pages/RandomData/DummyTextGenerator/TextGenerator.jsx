import { useState, useEffect } from "react";
import Options from "./Options";
import OutputText from "./OutputText";
import { toast } from "react-toastify";
import { toastStyleError } from "../../../Components/utils/Toastify/toastStyle";
import lodash from "lodash";
import { faker } from "@faker-js/faker";
import { Helmet } from "react-helmet-async";

const TextGenerator = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [tag, setTag] = useState("p");
  const [inputValue, setInputValue] = useState(1);
  const [includeHtml, setIncludeHtml] = useState(false);

  useEffect(() => {
    const generateRandomText = () => {
      try {
        // Generate random text using faker
        const randomText = Array.from({ length: inputValue }, () =>
          faker.lorem.paragraph()
        );

        // Use Lodash to manipulate the data
        const modifiedData = lodash.map(randomText, (item) => {
          return lodash.capitalize(item);
        });

        setParagraphs(modifiedData);
      } catch (error) {
        toast("Something went wrong!", { style: toastStyleError });
      }
    };

    generateRandomText();
  }, [inputValue]);

  return (
    <>
      <Helmet>
        <title>Random Text Generator</title>
      </Helmet>
      <div className="p-4 sm:ml-52 text-justify max-w-screen-full overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="p-2 rounded max-w-screen-lg text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Random Text Generator
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
            <div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <p className="text-blue-300">
                The Random Text Generator is an indispensable tool that empowers
                creators to bring their imagination to life. Whether you're
                working on a website, brochure, magazine, or presentation, this
                tool allows you to quickly and effortlessly generate words,
                phrases, lists, and paragraphs. By creating fictitious content,
                you can preview and plan the layout and design before
                incorporating actual content, ensuring that everything meets
                your exact specifications. With just a few clicks, you can
                unleash your creativity and bring your ideas to fruition. So go
                ahead, explore the possibilities, and let the Random Text
                Generator be your guiding light on your creative journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextGenerator;
