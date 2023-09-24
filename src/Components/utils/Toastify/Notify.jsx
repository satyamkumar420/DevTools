import "./Notify.css";
const Notify = ({ message }) => {
  return (
    <div className="fixed top-3 left  left-[50%] px-4 py-2 bg-green-500 text-white rounded shadow-md animate-fade-in z-50 ">
      {message}
    </div>
  );
};

export default Notify;
