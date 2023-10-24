import DOMPurify from "dompurify";
const TextArea = ({ Value, OnChange, className, Placeholder }) => {
  const sanitizedValue = DOMPurify.sanitize(Value);
  return (
    <textarea
      className={`w-full p-2 mt-2 rounded-md outline-none border-2 border-gray-600 focus:border-blue-600  bg-[#141522] text-blue-100 resize-none ${className}`}
      cols="20"
      rows="8"
      autoComplete="off"
      value={sanitizedValue}
      onChange={OnChange}
      placeholder={Placeholder}
    ></textarea>
  );
};

export default TextArea;
