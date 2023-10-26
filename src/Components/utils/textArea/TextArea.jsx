import DOMPurify from "dompurify";
const TextArea = ({ Value, OnChange, className, Placeholder, Rows, Cols }) => {
  const sanitizedValue = DOMPurify.sanitize(Value);
  return (
    <textarea
      className={`w-full p-2 mt-2 rounded-md outline-none border-2 border-gray-600 focus:border-blue-600  bg-[#141522] text-white resize-none ${className}`}
      cols={Cols || "20"}
      rows={Rows || "8"}
      autoComplete="off"
      value={sanitizedValue}
      onChange={OnChange}
      placeholder={Placeholder}
    ></textarea>
  );
};

export default TextArea;
