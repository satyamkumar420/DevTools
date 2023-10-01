import { useState, useEffect } from "react";
import { IconSearch } from "../../Components/Icons/Icons";
import Emoji from "emoji.json";
import Notify from "../../Components/utils/Toastify/Notify";

const EmojiPicker = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmojis, setFilteredEmojis] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Smileys & Emotion");
  const [showNotification, setShowNotification] = useState(false);

  // Get unique categories from emoji data
  const MyCategories = [
    { id: 1, char: "😂", groupName: "Smileys & Emotion" },
    { id: 2, char: "👋", groupName: "hand" },
    { id: 3, char: "🧑", groupName: "person" },
    { id: 4, char: "🐱", groupName: "animal" },
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

  //TODO: Searching Technique not work can you fix that
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const emojisForCategory = Emoji.filter((emoji) =>
      emoji.name.includes(searchTerm) ? emoji : null
    );
    // Set the filtered emojis
    setFilteredEmojis(emojisForCategory);
  };
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
    // Implement logic to copy the emoji character to the clipboard
    const el = document.createElement("textarea");
    el.value = emoji.char;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className="p-4 sm:ml-52 max-w-screen-lg overflow-y-auto max-h-screen">
      <div className="my-20">
        <h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
          Emoji Picker 😂
        </h3>
        <div className="mt-5 flex relative">
          <IconSearch className="absolute ml-2 top-1 text-gray-400" />
          <input
            type="text"
            placeholder="Search emoji"
            className="p-1 pl-10 px-3 text-base  max-w-xl w-full xl:w-1/2 rounded bg-[#1a1c2e] outline-none border-2 border-gray-600 focus:border-2 focus:border-blue-600 text-blue-100 "
            onChange={handleSearch}
          />
        </div>
        <div className="mt-3">
          <div className="text-orange-500 text-base sm:text-lg">
            Categories:
          </div>
          <div>
            <div className="mb-4">
              <div className="p-2 flex-wrap flex" value={selectedCategory}>
                {MyCategories.map((category) => (
                  <div
                    key={category.id}
                    className={`text-lg sm:text-3xl  bg-[#1a1c2e] py-4 border-gray-600 border-b-[1px] `}
                  >
                    <span
                      className={`hover:cursor-pointer md:mx-2 px-3 py-3 hover:bg-[#2c2f47] hover:border-b-2 border-blue-200 ${
                        selectedCategory === category.char
                          ? "bg-[#2c2f47] border-b-2 border-blue-600 px-3 py-3"
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

            <div className="flex flex-wrap">
              {filteredEmojis.map((emoji) => (
                <div key={emoji.char} className="text-center">
                  <div
                    className="m-2 text-white mt-5 text-2xl sm:text-5xl hover:cursor-pointer "
                    // role="button"
                    onClick={() => copyEmoji(emoji)}
                  >
                    <div className="mx-3 transition-all ease-in-out  hover:scale-125">
                      {emoji.char}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {showNotification && <Notify message="Copied ✔️" type="success" />}
      </div>
    </div>
  );
};

export default EmojiPicker;
