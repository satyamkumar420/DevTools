import { IconCheck } from "../../../Components/Icons/Icons";

const StickyContent = () => {
  return (
    <div className="mt-10">
      <div className="text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-base bg-[#1a1c2e]">
        <div className="text-blue-300">
          <ul className="">
            <li className="flex gap-1">
              <div>
                <IconCheck />
              </div>
              <div>
                <strong>Capitalize: </strong> Converts the text to capitalize
                each word.
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <IconCheck />
              </div>
              <div>
                <strong>Uppercase: </strong> Converts the text to all uppercase.
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <IconCheck />
              </div>
              <div>
                <strong>CamelCase: </strong> Converts the text to camel case,
                where the first letter of each word is capitalized and spaces
                are removed.
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <IconCheck />
              </div>
              <div>
                <strong>Lowercase: </strong> Converts the text to
              </div>
              all lowercase.
            </li>
            <li className="flex gap-1">
              <div>
                <IconCheck />
              </div>
              <div>
                <strong>Reverse: </strong> Reverses the text or string.
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <IconCheck />
              </div>
              <div>
                <strong>Remove Extra Spaces: </strong> Removes extra spaces and
                trims the text.
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <IconCheck />
              </div>
              <div>
                <strong>Alternate: </strong> Converts the text to alternate
                case, where even-positioned characters are in uppercase and
                odd-positioned characters are in lowercase.
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <IconCheck />
              </div>
              <div>
                <strong>Snake_Case_Char:</strong> Converts the text to snake
                case with alternating case for each character.
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <IconCheck />
              </div>
              <div>
                <strong>Snake_Case_Word: </strong> Converts the text to snake
                case with alternating case for each word.
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <IconCheck />
              </div>
              <div>
                <strong>Hyphen-Case: </strong> Converts the text to hyphen case,
                where spaces are replaced with hyphens.
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <IconCheck />
              </div>
              <div>
                <strong>Remove Line Breaks: </strong> Removes line breaks from
                the text.
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <IconCheck />
              </div>
              <div>
                <strong>Remove Blank Line: </strong> Removes blank lines from
                the text.
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <IconCheck />
              </div>
              <div>
                <strong>Remove Accents: </strong> Removes accents (diacritics)
                from accented characters.
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <IconCheck />
              </div>
              <div>
                <strong>Remove HTML Tags: </strong> Removes HTML tags from the
                text.
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <IconCheck />
              </div>
              <div>
                <strong>Remove Digits: </strong> Removes digits (numeric
                characters) from the text.
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <IconCheck />
              </div>
              <div>
                <strong>Reset Output: </strong> Resets the output field to an
                empty state.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StickyContent;
