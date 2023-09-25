import "./Notify.css";
const Notify = ({ message, type }) => {
  const getNotificationClass = () => {
    if (type === "success") {
      return "text-[#00ff91]";
    } else if (type === "error") {
      return "text-[#ff0000]";
    } else if (type === "info") {
      return "text[#2469fe]";
    } else if (type === "warning") {
      return "text-[#f96c26]";
    }
  };

  const textColor = getNotificationClass();

  return (
    <div
      className={`fixed top-3 left left-[50%] px-4 py-2 bg-[#292c46] rounded shadow-md font-bold animate-fade-in z-50 ${textColor}`}
      // style={{ color: textColor }}
    >
      {message}
    </div>
  );
};

export default Notify;
