import { useState, useEffect } from "react";
import { IconSearch } from "../../Components/Icons/Icons";
import Emoji from "emoji.json";
import { toast } from "react-toastify";
import { toastStyleSuccess } from "../../Components/utils/Toastify/toastStyle";
import { debounce } from "lodash";
import { Helmet } from "react-helmet-async";

const EmojiPicker = () => {
  // TODO: Optimize search logic by using lodash
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmojis, setFilteredEmojis] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Smileys & Emotion");

  const MyCategories = [
    { id: 1, char: "😂", groupName: "Smileys & Emotion" },
    { id: 2, char: "👋", groupName: "hand" },
    { id: 3, char: "🧑", groupName: "person" },
    { id: 4, char: "🐯", groupName: "animal" },
    { id: 5, char: "☕", groupName: "food" },
    { id: 6, char: "🚀", groupName: "Travel" },
    { id: 7, char: "⚽", groupName: "Activities" },
    { id: 8, char: "💡", groupName: "Objects" },
    { id: 9, char: "🚸", groupName: "Symbols" },
    { id: 10, char: "🚩", groupName: "flag" },
  ];

  useEffect(() => {
    // Find the matching category from MyCategories
    const selectedCategoryObject = MyCategories.find(
      (cat) => cat.char === selectedCategory
    );

    if (selectedCategoryObject) {
      // Filter emojis based on the selected category
      const emojisForCategory = Emoji.filter((emoji) =>
        emoji.category.includes(selectedCategoryObject.groupName)
      );
      setFilteredEmojis(emojisForCategory);
    }
  }, [selectedCategory]);

  // filter searchTerm if
  const handleSearch = debounce((searchTerm) => {
    setSearchTerm(searchTerm);
    const emojisForCategory = Emoji.filter((emoji) =>
      emoji.name.includes(searchTerm) ? emoji : null
    );
    // Set the filtered emojis
    setFilteredEmojis(emojisForCategory);
  }, 100);

  useEffect(() => {
    if (MyCategories.length > 0) {
      // Find the first category in MyCategories
      const firstCategory = MyCategories[0];

      // Filter emojis to include only those from the first category
      const emojisForFirstCategory = Emoji.filter(
        (emoji) => emoji.group === firstCategory.groupName
      );

      // Set the filtered emojis
      setFilteredEmojis(emojisForFirstCategory);
    }
  }, []);

  const copyEmoji = (emoji) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emoji.char);

      toast(`${emoji.char} Emoji Copied! ${emoji.char}`, {
        style: toastStyleSuccess,
      });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = emoji.char;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast(`${emoji.char} Emoji Copied! ${emoji.char}`, {
        style: toastStyleSuccess,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Emoji Picker 🥰 🎉 🐱 ☔ </title>
      </Helmet>
      <div className="p-4 sm:ml-52 max-w-screen  overflow-y-auto max-h-screen">
        <div className="my-20">
          <h3 className="p-2 rounded max-w-screen-lg text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Emoji Picker 😂
          </h3>
          <div className="mt-5 px-2 flex items-center relative font-medium  max-w-xl w-full xl:w-1/2">
            <IconSearch className="ml-2 absolute text-gray-400" />
            <input
              type="text"
              placeholder="Search Your Favorite Emoji"
              className="p-1 pl-10  px-3 text-base w-full  rounded-md bg-[#1a1c2e] outline-none border-2 border-gray-600 focus:border-blue-600 text-blue-100 sm:text-lg"
              onChange={(e) => handleSearch(e.target.value)}
              autoComplete="off"
            />
          </div>

          <div className="mt-3">
            <div className="text-orange-500 text-base sm:text-lg">
              Categories:
            </div>
            <div>
              <div className="mb-4">
                <div
                  className=" overflow-x-auto flex  bg-[#1a1c2e] rounded max-w-fit"
                  value={selectedCategory}
                >
                  {MyCategories.map((category) => (
                    <div
                      key={category.id}
                      className={`text-lg sm:text-xl md:text-2xl lg:text-3xl  bg-[#1a1c2e] py-4 border-gray-600 border-b-[1px]`}
                    >
                      <span
                        className={`hover:cursor-pointer md:mx-2 px-3 py-3 pt-6 hover:bg-[#2c2f47] hover:border-b-2 border-blue-200 ${
                          selectedCategory === category.char
                            ? "bg-[#2c2f47] border-b-2 border-blue-600 px-3 py-3 pt-6"
                            : ""
                        }`}
                        value={category.char}
                        onClick={() => setSelectedCategory(category.char)}
                      >
                        {category.char}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap ">
                {filteredEmojis.map((emoji) => (
                  <div key={emoji.char} className="text-center">
                    <div
                      className="text-white mt-5 text-2xl sm:text-3xl md:text-5xl hover:cursor-pointer "
                      // role="button"
                      onClick={() => copyEmoji(emoji)}
                    >
                      <div className="m-3 transition-all ease-in-out  hover:scale-150">
                        {emoji.char}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="text-blue-300 text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <span className="">
                Looking for the perfect 😂 😍 emoji to express your feelings?
                Our Emoji Picker is here to help you out! With our easy to use
                tool, you can find the emoji that speaks to your heart, whether
                you're searching by name, category, or keyword. Emojis are an
                amazing way to express a wide range of emotions, from happiness
                and sadness to love and anger. Our search tool makes it super
                easy to find the emoji that perfectly complements your message
                or context. You can browse through categories or type in a
                keyword to display the corresponding emojis. Once you've found
                your desired emoji, simply click on it to copy and paste it
                wherever you want. Whether you're celebrating a birthday with a
                cake emoji or expressing your love with a heart, our Emoji
                Picker is always ready to help you find the perfect emoji for
                any occasion! 😄🚀 Give it a try and elevate your emoji game
                effortlessly! 🎉
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmojiPicker;
